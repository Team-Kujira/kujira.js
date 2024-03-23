import { Registry, EncodeObject } from "@cosmjs/proto-signing";
import { MsgBurn, MsgChangeAdmin, MsgCreateDenom, MsgMint } from "./types/tx";
import { DenomExtension, setupDenomExtension } from "./queries";
declare const types: ((string | {
    encode(message: MsgBurn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
    decode(input: import("protobufjs").Reader | Uint8Array, length?: number | undefined): MsgBurn;
    fromJSON(object: any): MsgBurn;
    toJSON(message: MsgBurn): unknown;
    fromPartial(object: {
        sender?: string | undefined;
        amount?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
    }): MsgBurn;
})[] | (string | {
    encode(message: MsgChangeAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
    decode(input: import("protobufjs").Reader | Uint8Array, length?: number | undefined): MsgChangeAdmin;
    fromJSON(object: any): MsgChangeAdmin;
    toJSON(message: MsgChangeAdmin): unknown;
    fromPartial(object: {
        sender?: string | undefined;
        denom?: string | undefined;
        newAdmin?: string | undefined;
    }): MsgChangeAdmin;
})[] | (string | {
    encode(message: MsgCreateDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
    decode(input: import("protobufjs").Reader | Uint8Array, length?: number | undefined): MsgCreateDenom;
    fromJSON(object: any): MsgCreateDenom;
    toJSON(message: MsgCreateDenom): unknown;
    fromPartial(object: {
        sender?: string | undefined;
        nonce?: string | undefined;
    }): MsgCreateDenom;
})[])[];
export declare const registry: Registry;
declare const msg: {
    msgBurn: (data: MsgBurn) => EncodeObject;
    msgChangeAdmin: (data: MsgChangeAdmin) => EncodeObject;
    msgCreateDenom: (data: MsgCreateDenom) => EncodeObject;
    msgMint: (data: MsgMint) => EncodeObject;
};
export { msg, types, DenomExtension, setupDenomExtension };
