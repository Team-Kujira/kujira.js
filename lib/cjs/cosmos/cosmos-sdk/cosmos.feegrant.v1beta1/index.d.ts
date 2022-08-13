import { Registry, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { BasicAllowance, PeriodicAllowance, AllowedMsgAllowance } from "./types/feegrant";
import { MsgGrantAllowance, MsgRevokeAllowance } from "./types/tx";
declare const types: ((string | {
    encode(message: MsgRevokeAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): MsgRevokeAllowance;
    fromJSON(object: any): MsgRevokeAllowance;
    toJSON(message: MsgRevokeAllowance): unknown;
    fromPartial(object: {
        granter?: string | undefined;
        grantee?: string | undefined;
    }): MsgRevokeAllowance;
})[] | (string | {
    encode(message: BasicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): BasicAllowance;
    fromJSON(object: any): BasicAllowance;
    toJSON(message: BasicAllowance): unknown;
    fromPartial(object: {
        spend_limit?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
        expiration?: Date | undefined;
    }): BasicAllowance;
})[] | (string | {
    encode(message: PeriodicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): PeriodicAllowance;
    fromJSON(object: any): PeriodicAllowance;
    toJSON(message: PeriodicAllowance): unknown;
    fromPartial(object: {
        basic?: {
            spend_limit?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            expiration?: Date | undefined;
        } | undefined;
        period?: {
            seconds?: number | undefined;
            nanos?: number | undefined;
        } | undefined;
        period_spend_limit?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
        period_can_spend?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
        period_reset?: Date | undefined;
    }): PeriodicAllowance;
})[] | (string | {
    encode(message: AllowedMsgAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): AllowedMsgAllowance;
    fromJSON(object: any): AllowedMsgAllowance;
    toJSON(message: AllowedMsgAllowance): unknown;
    fromPartial(object: {
        allowance?: {
            type_url?: string | undefined;
            value?: Uint8Array | undefined;
        } | undefined;
        allowed_messages?: string[] | undefined;
    }): AllowedMsgAllowance;
})[])[];
export declare const registry: Registry;
declare const txClient: {
    msgGrantAllowance: (data: MsgGrantAllowance) => EncodeObject;
    msgRevokeAllowance: (data: MsgRevokeAllowance) => EncodeObject;
};
export { txClient, Api, types };
