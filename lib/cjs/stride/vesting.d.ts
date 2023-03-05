import { BaseVestingAccount, Period } from "cosmjs-types/cosmos/vesting/v1beta1/vesting";
import { DeepPartial } from "cosmjs-types/google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
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
