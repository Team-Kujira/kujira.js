import { fromBech32, toBech32 } from "@cosmjs/encoding";
import { AccountData, EncodeObject } from "@cosmjs/proto-signing";
import { DeliverTxResponse, StargateClient } from "@cosmjs/stargate";
import { ChainInfo } from "@keplr-wallet/types";
import { Msg } from "@terra-money/feather.js";
import {
  ConnectedWallet,
  ConnectType,
  WalletController,
} from "@terra-money/wallet-controller";
import { registry } from "../registry";

export class Station {
  private constructor(
    private controller: WalletController,
    private wallet: ConnectedWallet,
    public account: AccountData,
    private config: ChainInfo
  ) {}

  static connect = async (
    config: ChainInfo,
    opts: { controller: WalletController }
  ): Promise<Station> => {
    const { controller } = opts;

    await controller.connect(ConnectType.EXTENSION);
    const wallet: ConnectedWallet = await new Promise((r) =>
      controller.connectedWallet().subscribe((next) => {
        next && r(next);
      })
    );

    if (!wallet.addresses[config.chainId])
      throw new Error(`${config.chainId} not available on Station`);

    const account: AccountData = {
      address: toBech32(
        "kujira",
        fromBech32(wallet.addresses[config.chainId]).data
      ),
      algo: "secp256k1",
      pubkey: Buffer.from(""),
    };
    return new Station(controller, wallet, account, config);
  };

  public disconnect = () => {
    this.controller.disconnect();
  };

  public onChange = (fn: (k: Station) => void) => {};

  public signAndBroadcast = async (
    msgs: EncodeObject[]
  ): Promise<DeliverTxResponse> => {
    const terraMsgs = msgs.map((m) =>
      Msg.fromProto({ typeUrl: m.typeUrl, value: registry.encode(m) })
    );

    const res = await this.controller.sign({
      msgs: terraMsgs,
      chainID: this.config.chainId,
    });

    const stargate = await StargateClient.connect(this.config.rpc);
    const result = await stargate.broadcastTx(res.result.toBytes());
    return result;
  };
}
