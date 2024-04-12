import { AccountData, EncodeObject } from "@cosmjs/proto-signing";
import { DeliverTxResponse } from "@cosmjs/stargate";
import { ChainInfo, Keplr, Window as KeplrWindow } from "@keplr-wallet/types";
import { WalletI } from "./interface";
declare global {
    interface Window extends KeplrWindow {
        leap: Keplr;
    }
}
export declare class Leap implements WalletI {
    account: AccountData;
    config: ChainInfo;
    private options?;
    private constructor();
    static connect: (config: ChainInfo, opts?: {
        feeDenom: string;
    }) => Promise<Leap>;
    onChange: (fn: (k: Leap) => void) => void;
    disconnect: () => void;
    signAndBroadcast: (rpc: string, msgs: EncodeObject[]) => Promise<DeliverTxResponse>;
}
