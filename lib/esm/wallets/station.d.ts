import { AccountData, EncodeObject } from "@cosmjs/proto-signing";
import { DeliverTxResponse } from "@cosmjs/stargate";
import { ChainInfo } from "@keplr-wallet/types";
import { WalletController } from "@terra-money/wallet-controller";
export declare class Station {
    private controller;
    private wallet;
    account: AccountData;
    private config;
    private constructor();
    static connect: (config: ChainInfo, opts: {
        controller: WalletController;
    }) => Promise<Station>;
    disconnect: () => void;
    onChange: (fn: (k: Station) => void) => void;
    signAndBroadcast: (msgs: EncodeObject[]) => Promise<DeliverTxResponse>;
}
