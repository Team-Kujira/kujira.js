import { DeepPartial } from "cosmjs-types";
import { Reader, Writer } from "protobufjs/minimal";
export declare const protobufPackage = "kujira.scheduler";
/** Params defines the parameters for the module. */
export interface Params {
}
export declare const Params: {
    encode(_: Params, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Params;
    fromJSON(_: any): Params;
    toJSON(_: Params): unknown;
    fromPartial(_: DeepPartial<Params>): Params;
};
