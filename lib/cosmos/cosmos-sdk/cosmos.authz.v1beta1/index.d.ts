import { Registry, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgExec } from "./types/cosmos/authz/v1beta1/tx";
import { MsgRevoke } from "./types/cosmos/authz/v1beta1/tx";
import { MsgGrant } from "./types/cosmos/authz/v1beta1/tx";
declare const types: ((string | {
    encode(message: MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): MsgExec;
    fromJSON(object: any): MsgExec;
    toJSON(message: MsgExec): unknown;
    fromPartial(object: {
        grantee?: string | undefined;
        msgs?: {
            type_url?: string | undefined;
            value?: Uint8Array | undefined;
        }[] | undefined;
    }): MsgExec;
})[] | (string | {
    encode(message: MsgRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): MsgRevoke;
    fromJSON(object: any): MsgRevoke;
    toJSON(message: MsgRevoke): unknown;
    fromPartial(object: {
        granter?: string | undefined;
        grantee?: string | undefined;
        msg_type_url?: string | undefined;
    }): MsgRevoke;
})[] | (string | {
    encode(message: MsgGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): MsgGrant;
    fromJSON(object: any): MsgGrant;
    toJSON(message: MsgGrant): unknown;
    fromPartial(object: {
        granter?: string | undefined;
        grantee?: string | undefined;
        grant?: {
            authorization?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            expiration?: Date | undefined;
        } | undefined;
    }): MsgGrant;
})[])[];
export declare const MissingWalletError: Error;
export declare const registry: Registry;
declare const txClient: {
    msgExec: (data: MsgExec) => EncodeObject;
    msgRevoke: (data: MsgRevoke) => EncodeObject;
    msgGrant: (data: MsgGrant) => EncodeObject;
};
export { txClient, Api, types };
