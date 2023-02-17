import { Duration } from "cosmjs-types/google/protobuf/duration";
import { Timestamp } from "cosmjs-types/google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
export declare const protobufPackage = "alliance.alliance";
export interface Params {
    rewardDelayTime?: Duration;
    /** Time interval between consecutive applications of `take_rate` */
    takeRateClaimInterval?: Duration;
    /** Last application of `take_rate` on assets */
    lastTakeRateClaimTime?: Timestamp;
}
export interface RewardHistory {
    denom: string;
    index: string;
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial(object: Partial<Params>): Params;
};
export declare const RewardHistory: {
    encode(message: RewardHistory, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RewardHistory;
    fromJSON(object: any): RewardHistory;
    toJSON(message: RewardHistory): unknown;
    fromPartial(object: Partial<RewardHistory>): RewardHistory;
};
