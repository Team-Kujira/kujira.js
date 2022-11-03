import { AminoConverters } from "@cosmjs/stargate";
import { Any } from "cosmjs-types/google/protobuf/any";
export interface AminoMsgGrant {
    type: "cosmos-sdk/MsgGrant";
    /** Bech32 account address */
    readonly granter: string;
    /** Bech32 account address */
    readonly grantee: string;
    readonly grant: {
        authorization?: Any;
        expiration: string;
    };
}
export declare function createAuthzAminoConverters(): AminoConverters;
