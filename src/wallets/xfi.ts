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
import { WalletI } from "./interface";
import { castSigner } from "./utils";

declare global {
  interface Window extends KeplrWindow {
    xfi: { keplr: Keplr };
  }
}

type Options = { feeDenom: string };

export class Xfi implements WalletI {
  private constructor(
    public account: AccountData,
    public config: ChainInfo,
    private options?: Options
  ) {}

  static connect = (
    config: ChainInfo,
    opts?: { feeDenom: string }
  ): Promise<Xfi> => {
    const xfi = window.xfi.keplr;

    if (!xfi) throw new Error("Xfi extension not available");

    return xfi
      .experimentalSuggestChain(config)
      .then(() => xfi.enable(config.chainId))
      .then(() => xfi.getOfflineSignerAuto(config.chainId))
      .then((signer) => signer.getAccounts())
      .then((as) => {
        if (as.length) {
          return new Xfi(as[0], config, opts);
        } else {
          throw new Error("No Accounts");
        }
      });
  };

  public onChange = (fn: (k: Xfi) => void) => {
    window.addEventListener("xfi_keystorechange", () => {
      const xfi = window.xfi.keplr;
      if (!xfi) return;

      xfi
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
    if (!window.xfi) throw new Error("No Wallet Connected");

    const signer = await window.xfi.keplr.getOfflineSignerAuto(
      this.config.chainId
    );

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
