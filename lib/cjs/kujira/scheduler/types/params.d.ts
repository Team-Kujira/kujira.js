import { DeepPartial } from "cosmjs-types";
import { BinaryReader, BinaryWriter } from "cosmjs-types/binary";
export declare const protobufPackage = "kujira.scheduler";
/** Params defines the parameters for the module. */
export interface Params {
}
export declare const Params: {
    encode(_: Params, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Params;
    fromJSON(_: any): Params;
    toJSON(_: Params): unknown;
    fromPartial(_: DeepPartial<Params>): Params;
};
