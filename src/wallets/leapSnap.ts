import { Decimal } from "@cosmjs/math";
import { AccountData, EncodeObject } from "@cosmjs/proto-signing";
import {
  DeliverTxResponse,
  GasPrice,
  SigningStargateClient,
} from "@cosmjs/stargate";
import { ChainInfo } from "@keplr-wallet/types";
import {
  CosmjsOfflineSigner,
  connectSnap,
  getKey,
  suggestChain,
} from "@leapwallet/cosmos-snap-provider";
import { aminoTypes } from "../amino";
import { accountParser, registry } from "../registry";
import { WalletI } from "./interface";

type Options = { feeDenom: string };

export class LeapSnap implements WalletI {
  private constructor(
    public account: AccountData,
    private config: ChainInfo,
    private options?: Options
  ) {}

  public static async connect(
    config: ChainInfo,
    opts?: { feeDenom: string }
  ): Promise<LeapSnap> {
    return connectSnap()
      .then(() => getKey(config.chainId))
      .then((account) => new LeapSnap(account, config, opts))
      .catch((error: any) => {
        if (error.message === "Invalid chainId") {
          return suggestChain(config, {}).then(() =>
            LeapSnap.connect(config, opts)
          );
        }
        throw error;
      });
  }
  public onChange = (fn: (k: LeapSnap | null) => void) => {};

  public disconnect = () => {};

  signAndBroadcast = async (
    rpc: string,
    encodeObjects: EncodeObject[]
  ): Promise<DeliverTxResponse> => {
    const signer = new CosmjsOfflineSigner(this.config.chainId);

    const gasPrice = new GasPrice(
      Decimal.fromUserInput("0.034", 18),
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

    return await client.signAndBroadcast(
      this.account.address,
      encodeObjects,
      1.5
    );
  };
}
