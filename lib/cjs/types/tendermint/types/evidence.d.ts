import { Writer, Reader } from "protobufjs/minimal";
import { Vote, LightBlock } from "../../tendermint/types/types";
import { Validator } from "../../tendermint/types/validator";
import { DeepPartial } from "../..";
export declare const protobufPackage = "tendermint.types";
export interface Evidence {
    duplicate_vote_evidence: DuplicateVoteEvidence | undefined;
    light_client_attack_evidence: LightClientAttackEvidence | undefined;
}
/** DuplicateVoteEvidence contains evidence of a validator signed two conflicting votes. */
export interface DuplicateVoteEvidence {
    vote_a: Vote | undefined;
    vote_b: Vote | undefined;
    total_voting_power: number;
    validator_power: number;
    timestamp: Date | undefined;
}
/** LightClientAttackEvidence contains evidence of a set of validators attempting to mislead a light client. */
export interface LightClientAttackEvidence {
    conflicting_block: LightBlock | undefined;
    common_height: number;
    byzantine_validators: Validator[];
    total_voting_power: number;
    timestamp: Date | undefined;
}
export interface EvidenceList {
    evidence: Evidence[];
}
export declare const Evidence: {
    encode(message: Evidence, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Evidence;
    fromJSON(object: any): Evidence;
    toJSON(message: Evidence): unknown;
    fromPartial(object: DeepPartial<Evidence>): Evidence;
};
export declare const DuplicateVoteEvidence: {
    encode(message: DuplicateVoteEvidence, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): DuplicateVoteEvidence;
    fromJSON(object: any): DuplicateVoteEvidence;
    toJSON(message: DuplicateVoteEvidence): unknown;
    fromPartial(object: DeepPartial<DuplicateVoteEvidence>): DuplicateVoteEvidence;
};
export declare const LightClientAttackEvidence: {
    encode(message: LightClientAttackEvidence, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): LightClientAttackEvidence;
    fromJSON(object: any): LightClientAttackEvidence;
    toJSON(message: LightClientAttackEvidence): unknown;
    fromPartial(object: DeepPartial<LightClientAttackEvidence>): LightClientAttackEvidence;
};
export declare const EvidenceList: {
    encode(message: EvidenceList, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): EvidenceList;
    fromJSON(object: any): EvidenceList;
    toJSON(message: EvidenceList): unknown;
    fromPartial(object: DeepPartial<EvidenceList>): EvidenceList;
};
