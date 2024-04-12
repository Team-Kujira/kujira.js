import { Decimal } from "@cosmjs/math";
import { AccountData, EncodeObject } from "@cosmjs/proto-signing";
import {
  DeliverTxResponse,
  GasPrice,
  SigningStargateClient,
} from "@cosmjs/stargate";
import { ChainInfo, Window as KeplrWindow } from "@keplr-wallet/types";
import { aminoTypes } from "../amino";
import { accountParser, registry } from "../registry";
import * as evmos from "./evmos";
import { castSigner } from "./utils";

declare global {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface Window extends KeplrWindow {}
}

type Options = { feeDenom: string };

export class Keplr {
  private constructor(
    public account: AccountData,
    public config: ChainInfo,
    private options?: Options
  ) {}

  static connect = (
    config: ChainInfo,
    opts?: { feeDenom: string }
  ): Promise<Keplr> => {
    const keplr = window.keplr;

    if (!keplr) throw new Error("Keplr extension not available");

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
    rpc: string,
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
        signer: castSigner(signer),
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
      rpc,
      castSigner(signer),
      {
        registry,
        gasPrice,
        aminoTypes: aminoTypes(this.config.bech32Config.bech32PrefixAccAddr),
        accountParser,
      }
    );

    return await client.signAndBroadcast(this.account.address, msgs, 1.7);
  };
}
