import { Decimal } from "@cosmjs/math";
import { AccountData, EncodeObject } from "@cosmjs/proto-signing";
import {
  DeliverTxResponse,
  GasPrice,
  SigningStargateClient,
} from "@cosmjs/stargate";
import { Cosmiframe } from "@dao-dao/cosmiframe";
import { ChainInfo } from "@keplr-wallet/types";
import { aminoTypes } from "../amino";
import { accountParser, registry } from "../registry";
import { WalletI } from "./interface";

const cosmiframe = new Cosmiframe([
  "https://daodao.zone",
  "https://dao.daodao.zone",
]);

type Options = { feeDenom: string };

export class DaoDao implements WalletI {
  private constructor(
    public account: AccountData & { label?: string },
    public config: ChainInfo,
    private options?: Options
  ) {}

  static connect = async (
    config: ChainInfo,
    opts?: { feeDenom: string }
  ): Promise<DaoDao> => {
    if (!(await cosmiframe.isReady())) {
      throw new Error("DAO DAO Cosmiframe not ready");
    }

    return cosmiframe.p
      .connect(config.chainId)
      .then(() =>
        cosmiframe.p
          .getAccount(config.chainId)
          .then(
            (account) =>
              new DaoDao({ ...account, label: account.username }, config, opts)
          )
      );
  };

  public onChange = (fn: (k: DaoDao) => void) => {};

  public disconnect = () => {};

  public signAndBroadcast = async (
    rpc: string,
    msgs: EncodeObject[]
  ): Promise<DeliverTxResponse> => {
    const signer = cosmiframe.getOfflineSigner("kaiyo-1");
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
