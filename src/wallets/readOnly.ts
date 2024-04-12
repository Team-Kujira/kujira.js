import { AccountData, EncodeObject } from "@cosmjs/proto-signing";
import { DeliverTxResponse } from "@cosmjs/stargate";
import { WalletI } from "./interface";

export class ReadOnly implements WalletI {
  private constructor(public account: AccountData) {}

  static connect = async (address: string): Promise<ReadOnly> => {
    return new ReadOnly({
      address,
      algo: "secp256k1",
      pubkey: new Uint8Array(),
    });
  };

  public onChange = (fn: (k: ReadOnly | null) => void) => {};

  public disconnect = () => {};

  signAndBroadcast = async (
    rpc: string,
    msgs: EncodeObject[],
    gas?: string,
    memo?: string
  ): Promise<DeliverTxResponse> => {
    throw new Error("Transaction signing not available in read-only mode");
  };
}
