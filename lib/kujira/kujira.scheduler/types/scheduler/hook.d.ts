import { Writer, Reader } from "protobufjs/minimal";
import { Coin } from "../cosmos/base/v1beta1/coin";
export declare const protobufPackage = "kujira.scheduler";
export interface Hook {
    id: number;
    executor: string;
    contract: string;
    msg: Uint8Array;
    frequency: number;
    funds: Coin[];
}
export declare const Hook: {
    encode(message: Hook, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): Hook;
    fromJSON(object: any): Hook;
    toJSON(message: Hook): unknown;
    fromPartial(object: DeepPartial<Hook>): Hook;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
