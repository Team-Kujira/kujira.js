import { AccountData, EncodeObject } from "@cosmjs/proto-signing";
import { DeliverTxResponse } from "@cosmjs/stargate";
import { ChainInfo, Keplr, Window as KeplrWindow } from "@keplr-wallet/types";
declare global {
    interface Window extends KeplrWindow {
        xfi: {
            keplr: Keplr;
        };
    }
}
export declare class Xfi {
    account: AccountData;
    config: ChainInfo;
    private options?;
    private constructor();
    static connect: (config: ChainInfo, opts?: {
        feeDenom: string;
    }) => Promise<Xfi>;
    onChange: (fn: (k: Xfi) => void) => void;
    disconnect: () => void;
    signAndBroadcast: (rpc: string, msgs: EncodeObject[]) => Promise<DeliverTxResponse>;
}
