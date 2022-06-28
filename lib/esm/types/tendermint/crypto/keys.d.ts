import { Writer, Reader } from "protobufjs/minimal";
import { DeepPartial } from "../..";
export declare const protobufPackage = "tendermint.crypto";
/** PublicKey defines the keys available for use with Tendermint Validators */
export interface PublicKey {
    ed25519: Uint8Array | undefined;
    secp256k1: Uint8Array | undefined;
}
export declare const PublicKey: {
    encode(message: PublicKey, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): PublicKey;
    fromJSON(object: any): PublicKey;
    toJSON(message: PublicKey): unknown;
    fromPartial(object: DeepPartial<PublicKey>): PublicKey;
};
