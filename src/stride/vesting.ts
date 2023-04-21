import { DeepPartial } from "cosmjs-types";
import {
  BaseVestingAccount,
  Period,
} from "cosmjs-types/cosmos/vesting/v1beta1/vesting";
import * as _m0 from "protobufjs/minimal";
/**
 * StridePeriodicVestingAccount implements the VestingAccount interface. It
 * periodically vests by unlocking coins during each specified period.
 */

export interface StridePeriodicVestingAccount {
  baseVestingAccount: BaseVestingAccount | undefined;
  vestingPeriods: Period[];
}

function createBaseStridePeriodicVestingAccount(): StridePeriodicVestingAccount {
  return {
    baseVestingAccount: undefined,
    vestingPeriods: [],
  };
}

export const StridePeriodicVestingAccount = {
  encode(
    message: StridePeriodicVestingAccount,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.baseVestingAccount !== undefined) {
      BaseVestingAccount.encode(
        message.baseVestingAccount,
        writer.uint32(10).fork()
      ).ldelim();
    }

    for (const v of message.vestingPeriods) {
      Period.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): StridePeriodicVestingAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStridePeriodicVestingAccount();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.baseVestingAccount = BaseVestingAccount.decode(
            reader,
            reader.uint32()
          );
          break;

        case 3:
          message.vestingPeriods.push(Period.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(
    object: DeepPartial<StridePeriodicVestingAccount>
  ): StridePeriodicVestingAccount {
    const message = createBaseStridePeriodicVestingAccount();
    message.baseVestingAccount =
      object.baseVestingAccount !== undefined &&
      object.baseVestingAccount !== null
        ? BaseVestingAccount.fromPartial(object.baseVestingAccount)
        : undefined;
    message.vestingPeriods =
      object.vestingPeriods?.map((e) => Period.fromPartial(e)) || [];
    return message;
  },
};
