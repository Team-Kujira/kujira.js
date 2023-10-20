import { Decimal } from "@cosmjs/math";
import { AccountData, EncodeObject } from "@cosmjs/proto-signing";
import {
  DeliverTxResponse,
  GasPrice,
  SigningStargateClient,
} from "@cosmjs/stargate";
import { ChainInfo, Keplr, Window as KeplrWindow } from "@keplr-wallet/types";
import { aminoTypes } from "../amino";
import { accountParser, registry } from "../registry";
import * as evmos from "./evmos";

declare global {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface Window extends KeplrWindow {
    leap: Keplr;
  }
}

type Options = { feeDenom: string };

export class Leap {
  private constructor(
    public account: AccountData,
    public config: ChainInfo,
    private options?: Options
  ) {}

  static connect = (
    config: ChainInfo,
    opts?: { feeDenom: string }
  ): Promise<Leap> => {
    const leap = window.leap;

    if (!leap) throw new Error("Leap extension not available");

    return leap
      .experimentalSuggestChain(config)
      .then(() => leap.enable(config.chainId))
      .then(() => leap.getOfflineSignerAuto(config.chainId))
      .then((signer) => signer.getAccounts())
      .then((as) => {
        if (as.length) {
          return new Leap(as[0], config, opts);
        } else {
          throw new Error("No Accounts");
        }
      });
  };

  public onChange = (fn: (k: Leap) => void) => {
    window.addEventListener("leap_keystorechange", () => {
      const leap = window.leap;
      if (!leap) return;

      leap
        .getOfflineSignerAuto(this.config.chainId)
        .then((signer) => signer.getAccounts())
        .then((as) => {
          if (as.length) {
            this.account = as[0];
            fn(this);
          }
        });
    });
  };

  public disconnect = () => {};

  public signAndBroadcast = async (
    rpc: string,
    msgs: EncodeObject[]
    // batch?: {
    //   size: number;
    //   cb: (total: number, remaining: number) => void;
    // }
  ): Promise<DeliverTxResponse> => {
    if (!window.leap) throw new Error("No Wallet Connected");

    const signer = await window.leap.getOfflineSignerAuto(this.config.chainId);

    if (this.config.chainName === "Evmos")
      return evmos.signAndBroadcast({
        rpc: this.config.rpc,
        signer,
        messages: msgs,
        sourceAccount: this.account,
        sourceChainData: this.config,
      });

    const gasPrice = new GasPrice(
      Decimal.fromUserInput("0.00125", 18),
      this.options
        ? this.options.feeDenom
        : this.config.feeCurrencies[0].coinDenom
    );

    const client = await SigningStargateClient.connectWithSigner(rpc, signer, {
      registry,
      gasPrice,
      aminoTypes: aminoTypes(this.config.bech32Config.bech32PrefixAccAddr),
      accountParser,
    });

    // if (batch) {
    //   const chunks = msgs.reduce((agg, item, index) => {
    //     const chunkIndex = Math.floor(index / batch.size);
    //     if (!agg[chunkIndex]) agg[chunkIndex] = [];
    //     agg[chunkIndex].push(item);
    //     return agg;
    //   }, [] as EncodeObject[][]);
    //   let remaining = chunks.length;
    //   batch.cb(chunks.length, remaining);

    //   let res: DeliverTxResponse;
    //   for (const chunk of chunks) {
    //     res = await client.signAndBroadcast(
    //       this.account.address,
    //       chunk,
    //       1.5
    //     );
    //     remaining -= 1;
    //     batch.cb(chunks.length, remaining);
    //   }
    //   // @ts-expect-error this is fine
    //   return res;
    // } else {
    return await client.signAndBroadcast(this.account.address, msgs, 1.5);
    // }
  };
}
