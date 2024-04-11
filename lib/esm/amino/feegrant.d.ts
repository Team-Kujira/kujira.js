import { AminoMsg } from "@cosmjs/amino";
import { AminoConverters, Coin } from "@cosmjs/stargate";
type AminoAllowance = {
    type: string;
    value: AminoBasicAllowance;
};
type AminoBasicAllowance = {
    spend_limit?: Coin[];
    expiration?: {
        seconds?: bigint;
        nanos?: number;
    };
};
export interface AminoMsgGrantAllowance extends AminoMsg {
    type: "cosmos-sdk/MsgGrantAllowance";
    value: {
        granter: string;
        grantee: string;
        allowance: AminoAllowance;
    };
}
export interface AminoMsgRevokeAllowance extends AminoMsg {
    type: "cosmos-sdk/MsgRevokeAllowance";
    value: {
        granter: string;
        grantee: string;
    };
}
export declare function createFeegrantAminoConverters(): AminoConverters;
export {};
