import { Decimal } from "@cosmjs/math";
import { AccountData, EncodeObject } from "@cosmjs/proto-signing";
import {
  DeliverTxResponse,
  GasPrice,
  SigningStargateClient,
} from "@cosmjs/stargate";
import { ChainInfo, Window as KeplrWindow } from "@keplr-wallet/types";
import { aminoTypes } from "../amino";
import { registry } from "../registry";
import * as evmos from "./evmos";

declare global {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface Window extends KeplrWindow {}
}

type Options = { feeDenom: string };

export class Keplr {
  private constructor(
    public account: AccountData,
    private config: ChainInfo,
    private options?: Options
  ) {}

  static connect = (
    config: ChainInfo,
    opts?: { feeDenom: string }
  ): Promise<Keplr> => {
    const keplr = window.keplr;

    if (!keplr) throw new Error("Keplr Not Detected");

    const chainInfo = {
      ...config,
      // Keplr is bullshti and defaults to the first of these provided as the fee denom
      feeCurrencies: config.feeCurrencies.filter((x) =>
        opts ? x.coinMinimalDenom === opts.feeDenom : true
      ),
    };

    return keplr
      .experimentalSuggestChain(chainInfo)
      .then(() => keplr.enable(config.chainId))
      .then(() => keplr.getOfflineSignerAuto(config.chainId))
      .then((signer) => signer.getAccounts())
      .then((as) => {
        if (as.length) {
          return new Keplr(as[0], config, opts);
        } else {
          throw new Error("No Accounts");
        }
      });
  };

  public onChange = (fn: (k: Keplr) => void) => {
    window.addEventListener("keplr_keystorechange", () => {
      const keplr = window.keplr;
      if (!keplr) return;

      keplr
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
    msgs: EncodeObject[]
    // batch?: {
    //   size: number;
    //   cb: (total: number, remaining: number) => void;
    // }
  ): Promise<DeliverTxResponse> => {
    if (!window.keplr) throw new Error("No Wallet Connected");

    const signer = await window.keplr.getOfflineSignerAuto(this.config.chainId);

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

    const client = await SigningStargateClient.connectWithSigner(
      this.config.rpc,
      signer,
      {
        registry,
        gasPrice,
        aminoTypes: aminoTypes(this.config.bech32Config.bech32PrefixAccAddr),
      }
    );

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
