import { BinaryReader, BinaryWriter } from "cosmjs-types/binary";
export declare const protobufPackage = "kujira.crypto.authn";
/**
 * PubKey defines am authn public key
 * ID is the id returned from the registration
 * Key is the compressed form of the pubkey. The first byte depends is a 0x02 byte
 * if the y-coordinate is the lexicographically largest of the two associated with
 * the x-coordinate. Otherwise the first byte is a 0x03.
 * This prefix is followed with the x-coordinate.
 */
export interface PubKey {
    key_id: string;
    key: Uint8Array;
}
export declare const PubKey: {
    typeUrl: string;
    encode(message: PubKey, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): PubKey;
    fromJSON(object: any): PubKey;
    toJSON(message: PubKey): unknown;
    fromPartial<I extends {
        key_id?: string | undefined;
        key?: Uint8Array | undefined;
    } & {
        key_id?: string | undefined;
        key?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, keyof PubKey>, never>>(object: I): PubKey;
};
