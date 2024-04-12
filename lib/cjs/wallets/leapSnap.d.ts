import { AccountData, EncodeObject } from "@cosmjs/proto-signing";
import { DeliverTxResponse } from "@cosmjs/stargate";
import { ChainInfo } from "@keplr-wallet/types";
import { WalletI } from "./interface";
export declare class LeapSnap implements WalletI {
    account: AccountData;
    private config;
    private options?;
    private constructor();
    static connect(config: ChainInfo, opts?: {
        feeDenom: string;
    }): Promise<LeapSnap>;
    onChange: (fn: (k: LeapSnap | null) => void) => void;
    disconnect: () => void;
    signAndBroadcast: (rpc: string, encodeObjects: EncodeObject[]) => Promise<DeliverTxResponse>;
}
