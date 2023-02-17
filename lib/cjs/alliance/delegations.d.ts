import { Coin, DecCoin } from "cosmjs-types/cosmos/base/v1beta1/coin";
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { RewardHistory } from "./params";
export declare const protobufPackage = "alliance.alliance";
export interface Delegation {
    /** delegator_address is the bech32-encoded address of the delegator. */
    delegatorAddress: string;
    /** validator_address is the bech32-encoded address of the validator. */
    validatorAddress: string;
    /** denom of token staked */
    denom: string;
    /** shares define the delegation shares received. */
    shares: string;
    rewardHistory: RewardHistory[];
    lastRewardClaimHeight: Long;
}
export interface Redelegation {
    delegatorAddress: string;
    srcValidatorAddress: string;
    dstValidatorAddress: string;
    balance?: Coin;
}
export interface QueuedRedelegation {
    entries: Redelegation[];
}
export interface Undelegation {
    delegatorAddress: string;
    validatorAddress: string;
    balance?: Coin;
}
export interface QueuedUndelegation {
    entries: Undelegation[];
}
export interface AllianceValidatorInfo {
    globalRewardHistory: RewardHistory[];
    totalDelegatorShares: DecCoin[];
    validatorShares: DecCoin[];
}
export declare const Delegation: {
    encode(message: Delegation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Delegation;
    fromJSON(object: any): Delegation;
    toJSON(message: Delegation): unknown;
    fromPartial(object: Partial<Delegation>): Delegation;
};
export declare const Redelegation: {
    encode(message: Redelegation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Redelegation;
    fromJSON(object: any): Redelegation;
    toJSON(message: Redelegation): unknown;
    fromPartial(object: Partial<Redelegation>): Redelegation;
};
export declare const QueuedRedelegation: {
    encode(message: QueuedRedelegation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueuedRedelegation;
    fromJSON(object: any): QueuedRedelegation;
    toJSON(message: QueuedRedelegation): unknown;
    fromPartial(object: Partial<QueuedRedelegation>): QueuedRedelegation;
};
export declare const Undelegation: {
    encode(message: Undelegation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Undelegation;
    fromJSON(object: any): Undelegation;
    toJSON(message: Undelegation): unknown;
    fromPartial(object: Partial<Undelegation>): Undelegation;
};
export declare const QueuedUndelegation: {
    encode(message: QueuedUndelegation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueuedUndelegation;
    fromJSON(object: any): QueuedUndelegation;
    toJSON(message: QueuedUndelegation): unknown;
    fromPartial(object: Partial<QueuedUndelegation>): QueuedUndelegation;
};
export declare const AllianceValidatorInfo: {
    encode(message: AllianceValidatorInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AllianceValidatorInfo;
    fromJSON(object: any): AllianceValidatorInfo;
    toJSON(message: AllianceValidatorInfo): unknown;
    fromPartial(object: Partial<AllianceValidatorInfo>): AllianceValidatorInfo;
};
