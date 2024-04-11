import { DeepPartial } from "cosmjs-types";
import { BinaryReader, BinaryWriter } from "cosmjs-types/binary";
import { Coin } from "cosmjs-types/cosmos/base/v1beta1/coin";
import { BaseVestingAccount } from "cosmjs-types/cosmos/vesting/v1beta1/vesting";
/** Period defines a length of time and amount of coins that will vest. */
export interface Period {
    startTime: bigint;
    length: bigint;
    amount: Coin[];
    actionType: number;
}
export declare const Period: {
    encode(message: Period, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Period;
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
    encode(message: StridePeriodicVestingAccount, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): StridePeriodicVestingAccount;
    fromPartial(object: DeepPartial<StridePeriodicVestingAccount>): StridePeriodicVestingAccount;
};
