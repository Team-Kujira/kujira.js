import { QueryDenomToERC20Request, QueryDenomToERC20Response, QueryPendingSendToEth, QueryPendingSendToEthResponse } from "./query";
import { QueryClient } from "@cosmjs/stargate";
import { Params } from "./genesis";
export interface GravityExtension {
    readonly gravity: {
        readonly params: () => Promise<Params>;
        readonly pendingSendToEth: (q: QueryPendingSendToEth) => Promise<QueryPendingSendToEthResponse>;
        readonly denomToERC20: (q: QueryDenomToERC20Request) => Promise<QueryDenomToERC20Response>;
    };
}
export declare function setupGravityExtension(base: QueryClient): GravityExtension;
