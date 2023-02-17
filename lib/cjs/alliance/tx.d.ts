import { Coin } from "cosmjs-types/cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
export declare const protobufPackage = "alliance.alliance";
export interface MsgDelegate {
    delegatorAddress: string;
    validatorAddress: string;
    amount?: Coin;
}
export interface MsgDelegateResponse {
}
export interface MsgUndelegate {
    delegatorAddress: string;
    validatorAddress: string;
    amount?: Coin;
}
export interface MsgUndelegateResponse {
}
export interface MsgRedelegate {
    delegatorAddress: string;
    validatorSrcAddress: string;
    validatorDstAddress: string;
    amount?: Coin;
}
export interface MsgRedelegateResponse {
}
export interface MsgClaimDelegationRewards {
    delegatorAddress: string;
    validatorAddress: string;
    denom: string;
}
export interface MsgClaimDelegationRewardsResponse {
}
export declare const MsgDelegate: {
    encode(message: MsgDelegate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDelegate;
    fromJSON(object: any): MsgDelegate;
    toJSON(message: MsgDelegate): unknown;
    fromPartial(object: Partial<MsgDelegate>): MsgDelegate;
};
export declare const MsgDelegateResponse: {
    encode(_: MsgDelegateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDelegateResponse;
    fromJSON(_: any): MsgDelegateResponse;
    toJSON(_: MsgDelegateResponse): unknown;
    fromPartial(_: Partial<MsgDelegateResponse>): MsgDelegateResponse;
};
export declare const MsgUndelegate: {
    encode(message: MsgUndelegate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUndelegate;
    fromJSON(object: any): MsgUndelegate;
    toJSON(message: MsgUndelegate): unknown;
    fromPartial(object: Partial<MsgUndelegate>): MsgUndelegate;
};
export declare const MsgUndelegateResponse: {
    encode(_: MsgUndelegateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUndelegateResponse;
    fromJSON(_: any): MsgUndelegateResponse;
    toJSON(_: MsgUndelegateResponse): unknown;
    fromPartial(_: Partial<MsgUndelegateResponse>): MsgUndelegateResponse;
};
export declare const MsgRedelegate: {
    encode(message: MsgRedelegate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRedelegate;
    fromJSON(object: any): MsgRedelegate;
    toJSON(message: MsgRedelegate): unknown;
    fromPartial(object: Partial<MsgRedelegate>): MsgRedelegate;
};
export declare const MsgRedelegateResponse: {
    encode(_: MsgRedelegateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRedelegateResponse;
    fromJSON(_: any): MsgRedelegateResponse;
    toJSON(_: MsgRedelegateResponse): unknown;
    fromPartial(_: Partial<MsgRedelegateResponse>): MsgRedelegateResponse;
};
export declare const MsgClaimDelegationRewards: {
    encode(message: MsgClaimDelegationRewards, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimDelegationRewards;
    fromJSON(object: any): MsgClaimDelegationRewards;
    toJSON(message: MsgClaimDelegationRewards): unknown;
    fromPartial(object: Partial<MsgClaimDelegationRewards>): MsgClaimDelegationRewards;
};
export declare const MsgClaimDelegationRewardsResponse: {
    encode(_: MsgClaimDelegationRewardsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimDelegationRewardsResponse;
    fromJSON(_: any): MsgClaimDelegationRewardsResponse;
    toJSON(_: MsgClaimDelegationRewardsResponse): unknown;
    fromPartial(_: Partial<MsgClaimDelegationRewardsResponse>): MsgClaimDelegationRewardsResponse;
};
