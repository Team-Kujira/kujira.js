import { QueryClient } from "@cosmjs/stargate";
import { Params } from "./genesis";
export interface GravityExtension {
    readonly gravity: {
        readonly params: () => Promise<Params>;
    };
}
export declare function setupGravityExtension(base: QueryClient): GravityExtension;
