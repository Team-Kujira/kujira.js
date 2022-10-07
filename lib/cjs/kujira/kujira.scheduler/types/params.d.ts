import { Writer, Reader } from "protobufjs/minimal";
import { DeepPartial } from "cosmjs-types/cosmos/staking/v1beta1/tx";
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
