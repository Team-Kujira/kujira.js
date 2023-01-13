import { AccountData, Algo, EncodeObject } from "@cosmjs/proto-signing";
import { DeliverTxResponse } from "@cosmjs/stargate";
import WalletConnect from "@walletconnect/client";
import { getClientMeta } from "@walletconnect/utils";
import { Denom } from "../denom";
import { MAINNET } from "../network";
import { registry } from "../registry";

export class Sonar {
  private constructor(
    private connector: WalletConnect,
    public account: AccountData
  ) {}

  static connect = (
    network: string = MAINNET,
    options: { request: (uri: string) => void; auto: boolean }
  ): Promise<Sonar> => {
    const connector = new WalletConnect({
      bridge: "https://bridge.walletconnect.org",
      storageId: "kujirawalletconnect",
      qrcodeModal: {
        open(uri: string, cb: any) {
          options.request(uri);
        },
        close: () => {},
      },
    });

    return new Promise((resolve, reject) => {
      if (connector.session.connected) {
        const [account] = connector.session.accounts.map((address) => ({
          address,
          pubkey: new Uint8Array(),
          algo: "secp256k1" as Algo,
        }));
        resolve(new Sonar(connector, account));
      }

      // Only create a new session from an explicit action
      if (!connector.connected && !options.auto) {
        // create new session
        connector.createSession();
      }

      connector.on("connect", (error, payload) => {
        if (error) throw error;

        const [account] = connector.session.accounts.map((address) => ({
          address,
          pubkey: new Uint8Array(),
          algo: "secp256k1" as Algo,
        }));
        resolve(new Sonar(connector, account));
      });

      connector.on("session_update", (error, payload) => {
        if (error) reject(error);
      });
    });
  };

  public onChange = (fn: (k: Sonar | null) => void) => {
    this.connector.on("disconnect", (error, payload) => {
      if (error) throw error;
      fn(null);
    });
  };

  public disconnect = () => {
    this.connector.killSession();
  };

  signAndBroadcast = async (
    msgs: EncodeObject[],
    gas: Denom,
    memo?: string
  ): Promise<DeliverTxResponse> => {
    const x = await this.connector.sendCustomRequest({
      id: 0,
      jsonrpc: "2.0",
      method: "sign_tx",
      params: [
        {
          clientMeta: getClientMeta(),
          gas: gas.reference,
          memo,
          msgs: msgs
            .map((m) => registry.encodeAsAny(m))
            .map((x) => ({
              ...x,
              value: Buffer.from(x.value).toString("base64"),
            })),
        },
      ],
    });

    return x;
  };
}
