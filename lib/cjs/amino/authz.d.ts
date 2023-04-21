import { AminoMsg } from "@cosmjs/amino";
import { AminoConverters } from "@cosmjs/stargate";
import { Grant } from "cosmjs-types/cosmos/authz/v1beta1/authz";
export interface AminoMsgGrant extends AminoMsg {
    readonly type: "cosmos-sdk/MsgGrant";
    readonly value: {
        readonly granter: string;
        readonly grantee: string;
        readonly grant?: Grant;
    };
}
export interface AminoMsgRevoke extends AminoMsg {
    readonly type: "cosmos-sdk/MsgRevoke";
    readonly value: {
        readonly granter: string;
        readonly grantee: string;
        readonly msgTypeUrl: string;
    };
}
export declare function createAuthzAminoConverters(): AminoConverters;
