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

const basePeriod: object = {
  startTime: Long.ZERO,
  length: Long.ZERO,
  actionType: 0,
};

export const Period = {
  encode(
    message: Period,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.startTime.isZero()) {
      writer.uint32(8).int64(message.startTime);
    }
    if (!message.length.isZero()) {
      writer.uint32(16).int64(message.length);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.actionType !== 0) {
      writer.uint32(32).int32(message.actionType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Period {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePeriod } as Period;
    message.amount = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.startTime = reader.int64() as Long;
          break;
        case 2:
          message.length = reader.int64() as Long;
          break;
        case 3:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        case 4:
          message.actionType = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Period {
    const message = { ...basePeriod } as Period;
    message.amount = [];
    if (object.startTime !== undefined && object.startTime !== null) {
      message.startTime = Long.fromString(object.startTime);
    } else {
      message.startTime = Long.ZERO;
    }
    if (object.length !== undefined && object.length !== null) {
      message.length = Long.fromString(object.length);
    } else {
      message.length = Long.ZERO;
    }
    if (object.amount !== undefined && object.amount !== null) {
      for (const e of object.amount) {
        message.amount.push(Coin.fromJSON(e));
      }
    }
    if (object.actionType !== undefined && object.actionType !== null) {
      message.actionType = Number(object.actionType);
    } else {
      message.actionType = 0;
    }
    return message;
  },

  toJSON(message: Period): unknown {
    const obj: any = {};
    message.startTime !== undefined &&
      (obj.startTime = (message.startTime || Long.ZERO).toString());
    message.length !== undefined &&
      (obj.length = (message.length || Long.ZERO).toString());
    if (message.amount) {
      obj.amount = message.amount.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.amount = [];
    }
    message.actionType !== undefined && (obj.actionType = message.actionType);
    return obj;
  },

  fromPartial(object: DeepPartial<Period>): Period {
    const message = { ...basePeriod } as Period;
    message.amount = [];
    if (object.startTime !== undefined && object.startTime !== null) {
      message.startTime = object.startTime as Long;
    } else {
      message.startTime = Long.ZERO;
    }
    if (object.length !== undefined && object.length !== null) {
      message.length = object.length as Long;
    } else {
      message.length = Long.ZERO;
    }
    if (object.amount !== undefined && object.amount !== null) {
      for (const e of object.amount) {
        message.amount.push(Coin.fromPartial(e));
      }
    }
    if (object.actionType !== undefined && object.actionType !== null) {
      message.actionType = object.actionType;
    } else {
      message.actionType = 0;
    }
    return message;
  },
};

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
