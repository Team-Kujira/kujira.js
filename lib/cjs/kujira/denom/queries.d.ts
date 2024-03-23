import { Params } from "./types/params";
import { DenomAuthorityMetadata } from "./types/authorityMetadata";
import { QueryClient } from "@cosmjs/stargate";
export interface DenomExtension {
    readonly denom: {
        readonly params: () => Promise<Params>;
        readonly fromCreator: (creator: string) => Promise<string[]>;
        readonly authorityMetadata: (denom: string) => Promise<DenomAuthorityMetadata>;
    };
}
export declare function setupDenomExtension(base: QueryClient): DenomExtension;
