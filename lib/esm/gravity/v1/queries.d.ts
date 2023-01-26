import { QueryPendingSendToEth, QueryPendingSendToEthResponse } from "./query";
import { QueryClient } from "@cosmjs/stargate";
import { Params } from "./genesis";
export interface GravityExtension {
    readonly gravity: {
        readonly params: () => Promise<Params>;
        readonly pendingSendToEth: (q: QueryPendingSendToEth) => Promise<QueryPendingSendToEthResponse>;
    };
}
export declare function setupGravityExtension(base: QueryClient): GravityExtension;
