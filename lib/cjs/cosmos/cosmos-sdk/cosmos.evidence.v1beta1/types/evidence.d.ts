import { Writer, Reader } from "protobufjs/minimal";
import { DeepPartial } from "../../../../types";
export declare const protobufPackage = "cosmos.evidence.v1beta1";
/**
 * Equivocation implements the Evidence interface and defines evidence of double
 * signing misbehavior.
 */
export interface Equivocation {
    height: number;
    time: Date | undefined;
    power: number;
    consensus_address: string;
}
export declare const Equivocation: {
    encode(message: Equivocation, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Equivocation;
    fromJSON(object: any): Equivocation;
    toJSON(message: Equivocation): unknown;
    fromPartial(object: DeepPartial<Equivocation>): Equivocation;
};
