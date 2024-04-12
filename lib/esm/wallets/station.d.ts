import { AccountData, EncodeObject } from "@cosmjs/proto-signing";
import { DeliverTxResponse } from "@cosmjs/stargate";
import { ChainInfo, Keplr } from "@keplr-wallet/types";
import { WalletI } from "./interface";
declare global {
    interface Window {
        station: {
            keplr: Keplr;
        };
    }
}
export declare class Station implements WalletI {
    account: AccountData;
    config: ChainInfo;
    private options?;
    private constructor();
    static connect: (config: ChainInfo, opts?: {
        feeDenom: string;
    }) => Promise<Station>;
    onChange: (fn: (k: Station) => void) => void;
    disconnect: () => void;
    signAndBroadcast: (rpc: string, msgs: EncodeObject[]) => Promise<DeliverTxResponse>;
}
