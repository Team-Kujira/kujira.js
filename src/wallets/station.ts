import { Decimal } from "@cosmjs/math";
import { AccountData, EncodeObject } from "@cosmjs/proto-signing";
import {
  DeliverTxResponse,
  GasPrice,
  SigningStargateClient,
} from "@cosmjs/stargate";
import { ChainInfo, Keplr } from "@keplr-wallet/types";
import { aminoTypes } from "../amino";
import { accountParser, registry } from "../registry";
import * as evmos from "./evmos";
import { castSigner } from "./utils";

declare global {
  interface Window {
    station: { keplr: Keplr };
  }
}

type Options = { feeDenom: string };

export class Station {
  private constructor(
    public account: AccountData,
    public config: ChainInfo,
    private options?: Options
  ) {}

  static connect = (
    config: ChainInfo,
    opts?: { feeDenom: string }
  ): Promise<Station> => {
    const station = window.station;

    if (!station) throw new Error("Station extension not available");

    return station.keplr
      .experimentalSuggestChain(config)
      .then(() => station.keplr.enable(config.chainId))
      .then(() => station.keplr.getOfflineSignerAuto(config.chainId))
      .then((signer) => signer.getAccounts())
      .then((as) => {
        if (as.length) {
          return new Station(as[0], config, opts);
        } else {
          throw new Error("No Accounts");
        }
      });
  };

  public onChange = (fn: (k: Station) => void) => {
    window.addEventListener("station_wallet_change", () => {
      const station = window.station;
      if (!station) return;

      station.keplr
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
    if (!window.station) throw new Error("No Wallet Connected");

    const signer = await window.station.keplr.getOfflineSignerAuto(
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
