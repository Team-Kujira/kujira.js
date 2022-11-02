import { AminoConverters } from "@cosmjs/stargate";
export interface AminoMsgGrant {
    /** Bech32 account address */
    readonly granter: string;
    /** Bech32 account address */
    readonly grantee: string;
    readonly grant: {
        authorization: {};
        expiration: string;
    };
}
export declare function createAuthzAminoConverters(): AminoConverters;
