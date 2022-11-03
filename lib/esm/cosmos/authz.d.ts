import { AminoConverters } from "@cosmjs/stargate";
export interface AminoMsgGrant {
    type: "cosmos-sdk/MsgGrant";
    /** Bech32 account address */
    readonly granter: string;
    /** Bech32 account address */
    readonly grantee: string;
    readonly grant: {
        authorization: {
            typeUrl: "/cosmos.authz.v1beta1.GenericAuthorization";
            value: string;
        };
        expiration: string;
    };
}
export declare function createAuthzAminoConverters(): AminoConverters;
