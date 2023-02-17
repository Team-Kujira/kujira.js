import { Duration } from "cosmjs-types/google/protobuf/duration";
import { Timestamp } from "cosmjs-types/google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { RewardHistory } from "./params";
export declare const protobufPackage = "alliance.alliance";
export interface RewardWeightRange {
    min: string;
    max: string;
}
/** key: denom value: AllianceAsset */
export interface AllianceAsset {
    /** Denom of the asset. It could either be a native token or an IBC token */
    denom: string;
    /**
     * The reward weight specifies the ratio of rewards that will be given to each alliance asset
     * It does not need to sum to 1. rate = weight / total_weight
     * Native asset is always assumed to have a weight of 1.s
     */
    rewardWeight: string;
    /**
     * A positive take rate is used for liquid staking derivatives. It defines an rate that is applied per take_rate_interval
     * that will be redirected to the distribution rewards pool
     */
    takeRate: string;
    totalTokens: string;
    totalValidatorShares: string;
    rewardStartTime?: Timestamp;
    rewardChangeRate: string;
    rewardChangeInterval?: Duration;
    lastRewardChangeTime?: Timestamp;
    /** set a bound of weight range to limit how much reward weights can scale. */
    rewardWeightRange?: RewardWeightRange;
}
export interface RewardWeightChangeSnapshot {
    prevRewardWeight: string;
    rewardHistories: RewardHistory[];
}
export declare const RewardWeightRange: {
    encode(message: RewardWeightRange, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RewardWeightRange;
    fromJSON(object: any): RewardWeightRange;
    toJSON(message: RewardWeightRange): unknown;
    fromPartial(object: Partial<RewardWeightRange>): RewardWeightRange;
};
export declare const AllianceAsset: {
    encode(message: AllianceAsset, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AllianceAsset;
    fromJSON(object: any): AllianceAsset;
    toJSON(message: AllianceAsset): unknown;
    fromPartial(object: Partial<AllianceAsset>): AllianceAsset;
};
export declare const RewardWeightChangeSnapshot: {
    encode(message: RewardWeightChangeSnapshot, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RewardWeightChangeSnapshot;
    fromJSON(object: any): RewardWeightChangeSnapshot;
    toJSON(message: RewardWeightChangeSnapshot): unknown;
    fromPartial(object: Partial<RewardWeightChangeSnapshot>): RewardWeightChangeSnapshot;
};
