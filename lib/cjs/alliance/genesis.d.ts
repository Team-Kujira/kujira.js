import { Timestamp } from "cosmjs-types/google/protobuf/timestamp";
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { AllianceAsset, RewardWeightChangeSnapshot } from "./alliance";
import { AllianceValidatorInfo, Delegation, QueuedUndelegation, Redelegation } from "./delegations";
import { Params } from "./params";
export declare const protobufPackage = "alliance.alliance";
export interface ValidatorInfoState {
    validatorAddress: string;
    validator?: AllianceValidatorInfo;
}
export interface RedelegationState {
    completionTime?: Timestamp;
    redelegation?: Redelegation;
}
export interface UndelegationState {
    completionTime?: Timestamp;
    undelegation?: QueuedUndelegation;
}
export interface RewardWeightChangeSnapshotState {
    height: Long;
    validator: string;
    denom: string;
    snapshot?: RewardWeightChangeSnapshot;
}
/** GenesisState defines the module's genesis state. */
export interface GenesisState {
    params?: Params;
    assets: AllianceAsset[];
    validatorInfos: ValidatorInfoState[];
    rewardWeightChangeSnaphots: RewardWeightChangeSnapshotState[];
    delegations: Delegation[];
    redelegations: RedelegationState[];
    undelegations: UndelegationState[];
}
export declare const ValidatorInfoState: {
    encode(message: ValidatorInfoState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorInfoState;
    fromJSON(object: any): ValidatorInfoState;
    toJSON(message: ValidatorInfoState): unknown;
    fromPartial(object: Partial<ValidatorInfoState>): ValidatorInfoState;
};
export declare const RedelegationState: {
    encode(message: RedelegationState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RedelegationState;
    fromJSON(object: any): RedelegationState;
    toJSON(message: RedelegationState): unknown;
    fromPartial(object: Partial<RedelegationState>): RedelegationState;
};
export declare const UndelegationState: {
    encode(message: UndelegationState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UndelegationState;
    fromJSON(object: any): UndelegationState;
    toJSON(message: UndelegationState): unknown;
    fromPartial(object: Partial<UndelegationState>): UndelegationState;
};
export declare const RewardWeightChangeSnapshotState: {
    encode(message: RewardWeightChangeSnapshotState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RewardWeightChangeSnapshotState;
    fromJSON(object: any): RewardWeightChangeSnapshotState;
    toJSON(message: RewardWeightChangeSnapshotState): unknown;
    fromPartial(object: Partial<RewardWeightChangeSnapshotState>): RewardWeightChangeSnapshotState;
};
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
