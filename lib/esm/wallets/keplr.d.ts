import { AccountData, EncodeObject } from "@cosmjs/proto-signing";
import { DeliverTxResponse } from "@cosmjs/stargate";
import { ChainInfo, Window as KeplrWindow } from "@keplr-wallet/types";
import { WalletI } from "./interface";
declare global {
    interface Window extends KeplrWindow {
    }
}
export declare class Keplr implements WalletI {
    account: AccountData;
    config: ChainInfo;
    private options?;
    private constructor();
    static connect: (config: ChainInfo, opts?: {
        feeDenom: string;
    }) => Promise<Keplr>;
    onChange: (fn: (k: Keplr) => void) => void;
    disconnect: () => void;
    signAndBroadcast: (rpc: string, msgs: EncodeObject[]) => Promise<DeliverTxResponse>;
}
