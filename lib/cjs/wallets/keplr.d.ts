import { AccountData, EncodeObject } from "@cosmjs/proto-signing";
import { DeliverTxResponse } from "@cosmjs/stargate";
import { ChainInfo, Window as KeplrWindow } from "@keplr-wallet/types";
declare global {
    interface Window extends KeplrWindow {
    }
}
export declare class Keplr {
    account: AccountData;
    private config;
    private options?;
    private constructor();
    static connect: (config: ChainInfo, opts?: {
        feeDenom: string;
    }) => Promise<Keplr>;
    onChange: (fn: (k: Keplr) => void) => void;
    disconnect: () => void;
    signAndBroadcast: (msgs: EncodeObject[]) => Promise<DeliverTxResponse>;
}
