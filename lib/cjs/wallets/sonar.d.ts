import { AccountData, EncodeObject } from "@cosmjs/proto-signing";
import { DeliverTxResponse } from "@cosmjs/stargate";
import { Denom } from "../denom";
export declare class Sonar {
    private connector;
    account: AccountData;
    private constructor();
    static connect: (network: string | undefined, options: {
        request: (uri: string) => void;
        auto: boolean;
    }) => Promise<Sonar>;
    onChange: (fn: (k: Sonar | null) => void) => void;
    disconnect: () => void;
    signAndBroadcast: (msgs: EncodeObject[], gas: Denom, memo?: string) => Promise<DeliverTxResponse>;
}
