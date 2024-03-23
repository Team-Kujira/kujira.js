import { QueryInterchainAccountRequest } from "./types/query";
import { QueryClient } from "@cosmjs/stargate";
export interface CwIcaExtension {
    readonly denom: {
        readonly account: (req: QueryInterchainAccountRequest) => Promise<string>;
    };
}
export declare function setupCwIcaExtension(base: QueryClient): CwIcaExtension;
