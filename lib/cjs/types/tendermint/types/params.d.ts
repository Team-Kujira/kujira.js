import { Writer, Reader } from "protobufjs/minimal";
import { DeepPartial } from "../..";
import { Duration } from "../../google/protobuf/duration";
export declare const protobufPackage = "tendermint.types";
/**
 * ConsensusParams contains consensus critical parameters that determine the
 * validity of blocks.
 */
export interface ConsensusParams {
    block: BlockParams | undefined;
    evidence: EvidenceParams | undefined;
    validator: ValidatorParams | undefined;
    version: VersionParams | undefined;
}
/** BlockParams contains limits on the block size. */
export interface BlockParams {
    /**
     * Max block size, in bytes.
     * Note: must be greater than 0
     */
    max_bytes: number;
    /**
     * Max gas per block.
     * Note: must be greater or equal to -1
     */
    max_gas: number;
    /**
     * Minimum time increment between consecutive blocks (in milliseconds) If the
     * block header timestamp is ahead of the system clock, decrease this value.
     *
     * Not exposed to the application.
     */
    time_iota_ms: number;
}
/** EvidenceParams determine how we handle evidence of malfeasance. */
export interface EvidenceParams {
    /**
     * Max age of evidence, in blocks.
     *
     * The basic formula for calculating this is: MaxAgeDuration / {average block
     * time}.
     */
    max_age_num_blocks: number;
    /**
     * Max age of evidence, in time.
     *
     * It should correspond with an app's "unbonding period" or other similar
     * mechanism for handling [Nothing-At-Stake
     * attacks](https://github.com/ethereum/wiki/wiki/Proof-of-Stake-FAQ#what-is-the-nothing-at-stake-problem-and-how-can-it-be-fixed).
     */
    max_age_duration: Duration | undefined;
    /**
     * This sets the maximum size of total evidence in bytes that can be committed in a single block.
     * and should fall comfortably under the max block bytes.
     * Default is 1048576 or 1MB
     */
    max_bytes: number;
}
/**
 * ValidatorParams restrict the public key types validators can use.
 * NOTE: uses ABCI pubkey naming, not Amino names.
 */
export interface ValidatorParams {
    pub_key_types: string[];
}
/** VersionParams contains the ABCI application version. */
export interface VersionParams {
    app_version: number;
}
/**
 * HashedParams is a subset of ConsensusParams.
 *
 * It is hashed into the Header.ConsensusHash.
 */
export interface HashedParams {
    block_max_bytes: number;
    block_max_gas: number;
}
export declare const ConsensusParams: {
    encode(message: ConsensusParams, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): ConsensusParams;
    fromJSON(object: any): ConsensusParams;
    toJSON(message: ConsensusParams): unknown;
    fromPartial(object: DeepPartial<ConsensusParams>): ConsensusParams;
};
export declare const BlockParams: {
    encode(message: BlockParams, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): BlockParams;
    fromJSON(object: any): BlockParams;
    toJSON(message: BlockParams): unknown;
    fromPartial(object: DeepPartial<BlockParams>): BlockParams;
};
export declare const EvidenceParams: {
    encode(message: EvidenceParams, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): EvidenceParams;
    fromJSON(object: any): EvidenceParams;
    toJSON(message: EvidenceParams): unknown;
    fromPartial(object: DeepPartial<EvidenceParams>): EvidenceParams;
};
export declare const ValidatorParams: {
    encode(message: ValidatorParams, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): ValidatorParams;
    fromJSON(object: any): ValidatorParams;
    toJSON(message: ValidatorParams): unknown;
    fromPartial(object: DeepPartial<ValidatorParams>): ValidatorParams;
};
export declare const VersionParams: {
    encode(message: VersionParams, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): VersionParams;
    fromJSON(object: any): VersionParams;
    toJSON(message: VersionParams): unknown;
    fromPartial(object: DeepPartial<VersionParams>): VersionParams;
};
export declare const HashedParams: {
    encode(message: HashedParams, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): HashedParams;
    fromJSON(object: any): HashedParams;
    toJSON(message: HashedParams): unknown;
    fromPartial(object: DeepPartial<HashedParams>): HashedParams;
};
