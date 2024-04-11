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

const basePeriod: object = {
  startTime: BigInt(0),
  length: BigInt(0),
  actionType: 0,
};

export const Period = {
  encode(
    message: Period,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    if (message.startTime !== BigInt(0)) {
      writer.uint32(8).int64(message.startTime);
    }
    if (message.length !== BigInt(0)) {
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

  decode(input: BinaryReader | Uint8Array, length?: number): Period {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePeriod } as Period;
    message.amount = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.startTime = reader.int64();
          break;
        case 2:
          message.length = reader.int64();
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
      message.startTime = BigInt(object.startTime);
    } else {
      message.startTime = BigInt(0);
    }
    if (object.length !== undefined && object.length !== null) {
      message.length = BigInt(object.length);
    } else {
      message.length = BigInt(0);
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
      (obj.startTime = (message.startTime || BigInt(0)).toString());
    message.length !== undefined &&
      (obj.length = (message.length || BigInt(0)).toString());
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
      message.startTime = object.startTime;
    } else {
      message.startTime = BigInt(0);
    }
    if (object.length !== undefined && object.length !== null) {
      message.length = object.length;
    } else {
      message.length = BigInt(0);
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
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
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
    input: BinaryReader | Uint8Array,
    length?: number
  ): StridePeriodicVestingAccount {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
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
