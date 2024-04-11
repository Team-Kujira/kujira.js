/* eslint-disable */
import { DeepPartial } from "cosmjs-types";
import { BinaryReader, BinaryWriter } from "cosmjs-types/binary";
import { Coin } from "cosmjs-types/cosmos/base/v1beta1/coin";

export const protobufPackage = "kujira.denom";

/** Params holds parameters for the denom module */
export interface Params {
  creation_fee: Coin[];
}

const baseParams: object = {};

export const Params = {
  encode(
    message: Params,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    for (const v of message.creation_fee) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader =
      input instanceof Uint8Array ? new BinaryReader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseParams } as Params;
    message.creation_fee = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creation_fee.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Params {
    const message = { ...baseParams } as Params;
    message.creation_fee = [];
    if (object.creation_fee !== undefined && object.creation_fee !== null) {
      for (const e of object.creation_fee) {
        message.creation_fee.push(Coin.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    if (message.creation_fee) {
      obj.creation_fee = message.creation_fee.map((e) =>
        e ? Coin.toJSON(e) : undefined
      );
    } else {
      obj.creation_fee = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = { ...baseParams } as Params;
    message.creation_fee = [];
    if (object.creation_fee !== undefined && object.creation_fee !== null) {
      for (const e of object.creation_fee) {
        message.creation_fee.push(Coin.fromPartial(e));
      }
    }
    return message;
  },
};
