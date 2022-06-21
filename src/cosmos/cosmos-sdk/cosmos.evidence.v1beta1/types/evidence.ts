/* eslint-disable */

import { Writer, Reader } from "protobufjs/minimal";
import {
  toTimestamp,
  longToNumber,
  fromTimestamp,
  fromJsonTimestamp,
  DeepPartial,
} from "../../../../types";
import { Timestamp } from "../../../../types/google/protobuf/timestamp";

export const protobufPackage = "cosmos.evidence.v1beta1";

/**
 * Equivocation implements the Evidence interface and defines evidence of double
 * signing misbehavior.
 */
export interface Equivocation {
  height: number;
  time: Date | undefined;
  power: number;
  consensus_address: string;
}

const baseEquivocation: object = { height: 0, power: 0, consensus_address: "" };

export const Equivocation = {
  encode(message: Equivocation, writer: Writer = Writer.create()): Writer {
    if (message.height !== 0) {
      writer.uint32(8).int64(message.height);
    }
    if (message.time !== undefined) {
      Timestamp.encode(
        toTimestamp(message.time),
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.power !== 0) {
      writer.uint32(24).int64(message.power);
    }
    if (message.consensus_address !== "") {
      writer.uint32(34).string(message.consensus_address);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Equivocation {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEquivocation } as Equivocation;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.time = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.power = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.consensus_address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Equivocation {
    const message = { ...baseEquivocation } as Equivocation;
    if (object.height !== undefined && object.height !== null) {
      message.height = Number(object.height);
    } else {
      message.height = 0;
    }
    if (object.time !== undefined && object.time !== null) {
      message.time = fromJsonTimestamp(object.time);
    } else {
      message.time = undefined;
    }
    if (object.power !== undefined && object.power !== null) {
      message.power = Number(object.power);
    } else {
      message.power = 0;
    }
    if (
      object.consensus_address !== undefined &&
      object.consensus_address !== null
    ) {
      message.consensus_address = String(object.consensus_address);
    } else {
      message.consensus_address = "";
    }
    return message;
  },

  toJSON(message: Equivocation): unknown {
    const obj: any = {};
    message.height !== undefined && (obj.height = message.height);
    message.time !== undefined &&
      (obj.time =
        message.time !== undefined ? message.time.toISOString() : null);
    message.power !== undefined && (obj.power = message.power);
    message.consensus_address !== undefined &&
      (obj.consensus_address = message.consensus_address);
    return obj;
  },

  fromPartial(object: DeepPartial<Equivocation>): Equivocation {
    const message = { ...baseEquivocation } as Equivocation;
    if (object.height !== undefined && object.height !== null) {
      message.height = object.height;
    } else {
      message.height = 0;
    }
    if (object.time !== undefined && object.time !== null) {
      message.time = object.time;
    } else {
      message.time = undefined;
    }
    if (object.power !== undefined && object.power !== null) {
      message.power = object.power;
    } else {
      message.power = 0;
    }
    if (
      object.consensus_address !== undefined &&
      object.consensus_address !== null
    ) {
      message.consensus_address = object.consensus_address;
    } else {
      message.consensus_address = "";
    }
    return message;
  },
};
