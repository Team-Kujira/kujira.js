import { AccountData, EncodeObject } from "@cosmjs/proto-signing";
import { DeliverTxResponse } from "@cosmjs/stargate";
import { SessionTypes } from "@walletconnect/types";
export declare class Sonar {
    private connector;
    session: SessionTypes.Struct;
    account: AccountData;
    private constructor();
    static connect: (network: string | undefined, options: {
        request: (uri: string) => void;
        auto: boolean;
    }) => Promise<Sonar>;
    onChange: (fn: (k: Sonar | null) => void) => void;
    disconnect: () => void;
    signAndBroadcast: (rpc: string, msgs: EncodeObject[], feeDenom: string, memo?: string) => Promise<DeliverTxResponse>;
}
