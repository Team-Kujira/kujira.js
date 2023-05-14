import { DeepPartial } from "cosmjs-types";
import { Coin } from "cosmjs-types/cosmos/base/v1beta1/coin";
import { BaseVestingAccount } from "cosmjs-types/cosmos/vesting/v1beta1/vesting";
import Long from "long";
import * as _m0 from "protobufjs/minimal";
/** Period defines a length of time and amount of coins that will vest. */
export interface Period {
    startTime: Long;
    length: Long;
    amount: Coin[];
    actionType: number;
}
export declare const Period: {
    encode(message: Period, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Period;
    fromJSON(object: any): Period;
    toJSON(message: Period): unknown;
    fromPartial(object: DeepPartial<Period>): Period;
};
/**
 * StridePeriodicVestingAccount implements the VestingAccount interface. It
 * periodically vests by unlocking coins during each specified period.
 */
export interface StridePeriodicVestingAccount {
    baseVestingAccount: BaseVestingAccount | undefined;
    vestingPeriods: Period[];
}
export declare const StridePeriodicVestingAccount: {
    encode(message: StridePeriodicVestingAccount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StridePeriodicVestingAccount;
    fromPartial(object: DeepPartial<StridePeriodicVestingAccount>): StridePeriodicVestingAccount;
};
