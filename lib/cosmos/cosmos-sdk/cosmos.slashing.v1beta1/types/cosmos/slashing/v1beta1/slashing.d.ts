import { Writer, Reader } from "protobufjs/minimal";
import { Duration } from "../../../google/protobuf/duration";
export declare const protobufPackage = "cosmos.slashing.v1beta1";
/**
 * ValidatorSigningInfo defines a validator's signing info for monitoring their
 * liveness activity.
 */
export interface ValidatorSigningInfo {
    address: string;
    /** Height at which validator was first a candidate OR was unjailed */
    start_height: number;
    /**
     * Index which is incremented each time the validator was a bonded
     * in a block and may have signed a precommit or not. This in conjunction with the
     * `SignedBlocksWindow` param determines the index in the `MissedBlocksBitArray`.
     */
    index_offset: number;
    /** Timestamp until which the validator is jailed due to liveness downtime. */
    jailed_until: Date | undefined;
    /**
     * Whether or not a validator has been tombstoned (killed out of validator set). It is set
     * once the validator commits an equivocation or for any other configured misbehiavor.
     */
    tombstoned: boolean;
    /**
     * A counter kept to avoid unnecessary array reads.
     * Note that `Sum(MissedBlocksBitArray)` always equals `MissedBlocksCounter`.
     */
    missed_blocks_counter: number;
}
/** Params represents the parameters used for by the slashing module. */
export interface Params {
    signed_blocks_window: number;
    min_signed_per_window: Uint8Array;
    downtime_jail_duration: Duration | undefined;
    slash_fraction_double_sign: Uint8Array;
    slash_fraction_downtime: Uint8Array;
}
export declare const ValidatorSigningInfo: {
    encode(message: ValidatorSigningInfo, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): ValidatorSigningInfo;
    fromJSON(object: any): ValidatorSigningInfo;
    toJSON(message: ValidatorSigningInfo): unknown;
    fromPartial(object: DeepPartial<ValidatorSigningInfo>): ValidatorSigningInfo;
};
export declare const Params: {
    encode(message: Params, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial(object: DeepPartial<Params>): Params;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
