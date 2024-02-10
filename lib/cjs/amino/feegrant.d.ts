import { AminoMsg } from "@cosmjs/amino";
import { AminoConverters, Coin } from "@cosmjs/stargate";
import Long from "long";
type AminoAllowance = {
    type: string;
    value: AminoBasicAllowance;
};
type AminoBasicAllowance = {
    spend_limit?: Coin[];
    expiration?: {
        seconds?: string | number | Long.Long;
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
