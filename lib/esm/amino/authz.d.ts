import { AminoMsg } from "@cosmjs/amino";
import { AminoConverters } from "@cosmjs/stargate";
declare type AminoGrant = {
    expiration?: string;
    authorization: {
        type: string;
        value: any;
    };
};
export interface AminoMsgGrant extends AminoMsg {
    readonly type: "cosmos-sdk/MsgGrant";
    readonly value: {
        readonly granter: string;
        readonly grantee: string;
        readonly grant?: AminoGrant;
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
export {};
