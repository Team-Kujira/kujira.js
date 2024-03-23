import { Coin } from "cosmjs-types/cosmos/base/v1beta1/coin";
import { Rpc } from "cosmjs-types/helpers";
import { Reader, Writer } from "protobufjs/minimal";
export declare const protobufPackage = "batch";
/**
 * MsgWithdrawAllDelegatorRewards represents delegation withdrawal to a delegator
 * from all staked validators.
 */
export interface MsgWithdrawAllDelegatorRewards {
    delegatorAddress: string;
}
/** MsgWithdrawAllDelegatorRewardsResponse defines the Msg/WithdrawAllDelegatorRewards response type. */
export interface MsgWithdrawAllDelegatorRewardsResponse {
    amount: Coin[];
}
export interface MsgBatchResetDelegation {
    delegatorAddress: string;
    validators: string[];
    amounts: string[];
}
export interface MsgBatchResetDelegationResponse {
}
export declare const MsgWithdrawAllDelegatorRewards: {
    typeUrl: string;
    encode(message: MsgWithdrawAllDelegatorRewards, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgWithdrawAllDelegatorRewards;
    fromJSON(object: any): MsgWithdrawAllDelegatorRewards;
    toJSON(message: MsgWithdrawAllDelegatorRewards): unknown;
    fromPartial<I extends {
        delegatorAddress?: string | undefined;
    } & {
        delegatorAddress?: string | undefined;
    } & Record<Exclude<keyof I, "delegatorAddress">, never>>(object: I): MsgWithdrawAllDelegatorRewards;
};
export declare const MsgWithdrawAllDelegatorRewardsResponse: {
    typeUrl: string;
    encode(message: MsgWithdrawAllDelegatorRewardsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgWithdrawAllDelegatorRewardsResponse;
    fromJSON(object: any): MsgWithdrawAllDelegatorRewardsResponse;
    toJSON(message: MsgWithdrawAllDelegatorRewardsResponse): unknown;
    fromPartial<I extends {
        amount?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
    } & {
        amount?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        }[] & ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["amount"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["amount"], keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "amount">, never>>(object: I): MsgWithdrawAllDelegatorRewardsResponse;
};
export declare const MsgBatchResetDelegation: {
    typeUrl: string;
    encode(message: MsgBatchResetDelegation, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgBatchResetDelegation;
    fromJSON(object: any): MsgBatchResetDelegation;
    toJSON(message: MsgBatchResetDelegation): unknown;
    fromPartial<I extends {
        delegatorAddress?: string | undefined;
        validators?: string[] | undefined;
        amounts?: string[] | undefined;
    } & {
        delegatorAddress?: string | undefined;
        validators?: (string[] & string[] & Record<Exclude<keyof I["validators"], keyof string[]>, never>) | undefined;
        amounts?: (string[] & string[] & Record<Exclude<keyof I["amounts"], keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof MsgBatchResetDelegation>, never>>(object: I): MsgBatchResetDelegation;
};
export declare const MsgBatchResetDelegationResponse: {
    typeUrl: string;
    encode(_: MsgBatchResetDelegationResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgBatchResetDelegationResponse;
    fromJSON(_: any): MsgBatchResetDelegationResponse;
    toJSON(_: MsgBatchResetDelegationResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgBatchResetDelegationResponse;
};
/** Msg defines the batch Msg service. */
export interface Msg {
    /**
     * WithdrawAllDelegatorRewards defines a method to withdraw rewards of delegator
     * from all staked validators.
     */
    WithdrawAllDelegatorRewards(request: MsgWithdrawAllDelegatorRewards): Promise<MsgWithdrawAllDelegatorRewardsResponse>;
    /**
     * BatchResetDelegation defines a method to delegate or undelegate in batches
     * from existing delegation and target delegation amount
     */
    BatchResetDelegation(request: MsgBatchResetDelegation): Promise<MsgBatchResetDelegationResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    WithdrawAllDelegatorRewards(request: MsgWithdrawAllDelegatorRewards): Promise<MsgWithdrawAllDelegatorRewardsResponse>;
    BatchResetDelegation(request: MsgBatchResetDelegation): Promise<MsgBatchResetDelegationResponse>;
}
