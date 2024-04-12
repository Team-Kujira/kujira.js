import { AccountData, EncodeObject } from "@cosmjs/proto-signing";
import { DeliverTxResponse } from "@cosmjs/stargate";
import { WalletI } from "./interface";
export declare class ReadOnly implements WalletI {
    account: AccountData;
    private constructor();
    static connect: (address: string) => Promise<ReadOnly>;
    onChange: (fn: (k: ReadOnly | null) => void) => void;
    disconnect: () => void;
    signAndBroadcast: (rpc: string, msgs: EncodeObject[], gas: string, memo?: string) => Promise<DeliverTxResponse>;
}
