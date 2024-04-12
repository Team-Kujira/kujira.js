import { AccountData, EncodeObject } from "@cosmjs/proto-signing";
import { DeliverTxResponse } from "@cosmjs/stargate";
import { ChainInfo } from "@keplr-wallet/types";
import { WalletI } from "./interface";
export declare class DaoDao implements WalletI {
    account: AccountData & {
        label?: string;
    };
    config: ChainInfo;
    private options?;
    private constructor();
    static connect: (config: ChainInfo, opts?: {
        feeDenom: string;
    }) => Promise<DaoDao>;
    onChange: (fn: (k: DaoDao) => void) => void;
    disconnect: () => void;
    signAndBroadcast: (rpc: string, msgs: EncodeObject[]) => Promise<DeliverTxResponse>;
}
