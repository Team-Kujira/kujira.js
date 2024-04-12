import { Decimal } from "@cosmjs/math";
import { AccountData, EncodeObject } from "@cosmjs/proto-signing";
import {
  DeliverTxResponse,
  GasPrice,
  SigningStargateClient,
} from "@cosmjs/stargate";
import { IframeClient, iframeWallet } from "@cosmos-kit/core/esm/iframe";
import { ChainInfo } from "@keplr-wallet/types";
import { aminoTypes } from "../amino";
import { accountParser, registry } from "../registry";
import { WalletI } from "./interface";

const iframeClient = new IframeClient(iframeWallet);

type Options = { feeDenom: string };

export class DaoDao implements WalletI {
  private constructor(
    public account: AccountData & { label?: string },
    public config: ChainInfo,
    private options?: Options
  ) {}

  static connect = (
    config: ChainInfo,
    opts?: { feeDenom: string }
  ): Promise<DaoDao> =>
    iframeClient
      .connect(config.chainId)
      .then(() =>
        iframeClient
          .getAccount(config.chainId)
          .then(
            (account) =>
              new DaoDao({ ...account, label: account.username }, config, opts)
          )
      );

  public onChange = (fn: (k: DaoDao) => void) => {};

  public disconnect = () => {};

  public signAndBroadcast = async (
    rpc: string,
    msgs: EncodeObject[]
  ): Promise<DeliverTxResponse> => {
    const signer = iframeClient.getOfflineSigner("kaiyo-1");
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

    return client.signAndBroadcast(this.account.address, msgs, 1.7);
  };
}
