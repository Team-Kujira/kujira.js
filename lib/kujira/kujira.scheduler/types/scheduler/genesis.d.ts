import { Writer, Reader } from "protobufjs/minimal";
import { Params } from "../scheduler/params";
import { Hook } from "../scheduler/hook";
export declare const protobufPackage = "kujira.scheduler";
/** GenesisState defines the scheduler module's genesis state. */
export interface GenesisState {
    params: Params | undefined;
    hookList: Hook[];
    /** this line is used by starport scaffolding # genesis/proto/state */
    hookCount: number;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
