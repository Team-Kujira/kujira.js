import { Writer, Reader } from "protobufjs/minimal";
import { DeepPartial } from "../../../../types";
export declare const protobufPackage = "cosmos.authz.v1beta1";
/** Since: cosmos-sdk 0.43 */
/** EventGrant is emitted on Msg/Grant */
export interface EventGrant {
    /** Msg type URL for which an autorization is granted */
    msg_type_url: string;
    /** Granter account address */
    granter: string;
    /** Grantee account address */
    grantee: string;
}
/** EventRevoke is emitted on Msg/Revoke */
export interface EventRevoke {
    /** Msg type URL for which an autorization is revoked */
    msg_type_url: string;
    /** Granter account address */
    granter: string;
    /** Grantee account address */
    grantee: string;
}
export declare const EventGrant: {
    encode(message: EventGrant, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): EventGrant;
    fromJSON(object: any): EventGrant;
    toJSON(message: EventGrant): unknown;
    fromPartial(object: DeepPartial<EventGrant>): EventGrant;
};
export declare const EventRevoke: {
    encode(message: EventRevoke, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): EventRevoke;
    fromJSON(object: any): EventRevoke;
    toJSON(message: EventRevoke): unknown;
    fromPartial(object: DeepPartial<EventRevoke>): EventRevoke;
};
