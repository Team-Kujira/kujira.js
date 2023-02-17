import { Duration } from "cosmjs-types/google/protobuf/duration";
import * as _m0 from "protobufjs/minimal";
import { RewardWeightRange } from "./alliance";
export declare const protobufPackage = "alliance.alliance";
export interface MsgCreateAllianceProposal {
    /** the title of the update proposal */
    title: string;
    /** the description of the proposal */
    description: string;
    /** Denom of the asset. It could either be a native token or an IBC token */
    denom: string;
    /**
     * The reward weight specifies the ratio of rewards that will be given to each alliance asset
     * It does not need to sum to 1. rate = weight / total_weight
     * Native asset is always assumed to have a weight of 1.
     */
    rewardWeight: string;
    /**
     * A positive take rate is used for liquid staking derivatives. It defines an annualized reward rate that
     * will be redirected to the distribution rewards pool
     */
    takeRate: string;
    rewardChangeRate: string;
    rewardChangeInterval?: Duration;
    /** set a bound of weight range to limit how much reward weights can scale. */
    rewardWeightRange?: RewardWeightRange;
}
export interface MsgUpdateAllianceProposal {
    /** the title of the update proposal */
    title: string;
    /** the description of the proposal */
    description: string;
    /** Denom of the asset. It could either be a native token or an IBC token */
    denom: string;
    /**
     * The reward weight specifies the ratio of rewards that will be given to each alliance asset
     * It does not need to sum to 1. rate = weight / total_weight
     * Native asset is always assumed to have a weight of 1.
     */
    rewardWeight: string;
    takeRate: string;
    rewardChangeRate: string;
    rewardChangeInterval?: Duration;
}
export interface MsgDeleteAllianceProposal {
    /** the title of the update proposal */
    title: string;
    /** the description of the proposal */
    description: string;
    denom: string;
}
export declare const MsgCreateAllianceProposal: {
    encode(message: MsgCreateAllianceProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateAllianceProposal;
    fromJSON(object: any): MsgCreateAllianceProposal;
    toJSON(message: MsgCreateAllianceProposal): unknown;
    fromPartial(object: Partial<MsgCreateAllianceProposal>): MsgCreateAllianceProposal;
};
export declare const MsgUpdateAllianceProposal: {
    encode(message: MsgUpdateAllianceProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateAllianceProposal;
    fromJSON(object: any): MsgUpdateAllianceProposal;
    toJSON(message: MsgUpdateAllianceProposal): unknown;
    fromPartial(object: Partial<MsgUpdateAllianceProposal>): MsgUpdateAllianceProposal;
};
export declare const MsgDeleteAllianceProposal: {
    encode(message: MsgDeleteAllianceProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteAllianceProposal;
    fromJSON(object: any): MsgDeleteAllianceProposal;
    toJSON(message: MsgDeleteAllianceProposal): unknown;
    fromPartial(object: Partial<MsgDeleteAllianceProposal>): MsgDeleteAllianceProposal;
};
