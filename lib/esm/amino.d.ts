import { AminoMsg } from "@cosmjs/amino";
import * as s from "@cosmjs/stargate";
/** Performs an undelegation from a delegate and a validator */
export interface AminoMsgCancelUnbondingDelegation extends AminoMsg {
    readonly type: "cosmos-sdk/MsgCancelUnbondingDelegation";
    readonly value: {
        /** Bech32 encoded delegator address */
        readonly delegator_address: string;
        /** Bech32 encoded validator address */
        readonly validator_address: string;
        readonly amount: s.Coin;
        readonly creation_height: string;
    };
}
export interface AminoMsgWithdrawAllDelegatorRewards extends AminoMsg {
    readonly type: "batch/MsgWithdrawAllDelegatorRewards";
    readonly value: {
        delegator_address: string;
    };
}
export declare const aminoTypes: (prefix: string) => s.AminoTypes;
