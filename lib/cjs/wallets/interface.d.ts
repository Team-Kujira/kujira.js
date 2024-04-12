import { AccountData, EncodeObject } from "@cosmjs/proto-signing";
import { DeliverTxResponse } from "@cosmjs/stargate";
export interface WalletI {
    account: AccountData;
    onChange: (fn: (k: WalletI | null) => void) => void;
    disconnect: () => void;
    signAndBroadcast: (rpc: string, msgs: EncodeObject[], feeDenom?: string, memo?: string) => Promise<DeliverTxResponse>;
}
