import { Registry, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgBurn } from "./types/denom/tx";
import { MsgChangeAdmin } from "./types/denom/tx";
import { MsgCreateDenom } from "./types/denom/tx";
import { MsgMint } from "./types/denom/tx";
declare const types: ((string | {
    encode(message: MsgBurn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): MsgBurn;
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
    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): MsgChangeAdmin;
    fromJSON(object: any): MsgChangeAdmin;
    toJSON(message: MsgChangeAdmin): unknown;
    fromPartial(object: {
        sender?: string | undefined;
        denom?: string | undefined;
        newAdmin?: string | undefined;
    }): MsgChangeAdmin;
})[] | (string | {
    encode(message: MsgCreateDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): MsgCreateDenom;
    fromJSON(object: any): MsgCreateDenom;
    toJSON(message: MsgCreateDenom): unknown;
    fromPartial(object: {
        sender?: string | undefined;
        nonce?: string | undefined;
    }): MsgCreateDenom;
})[])[];
export declare const MissingWalletError: Error;
export declare const registry: Registry;
declare const txClient: {
    msgBurn: (data: MsgBurn) => EncodeObject;
    msgChangeAdmin: (data: MsgChangeAdmin) => EncodeObject;
    msgCreateDenom: (data: MsgCreateDenom) => EncodeObject;
    msgMint: (data: MsgMint) => EncodeObject;
};
export { txClient, Api, types };
