/* eslint-disable */
import { DeepPartial } from "cosmjs-types";
import { BinaryReader, BinaryWriter } from "cosmjs-types/binary";
export const protobufPackage = "kujira.scheduler";

/** Params defines the parameters for the module. */
export interface Params {}

const baseParams: object = {};

export const Params = {
  encode(
    _: Params,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader =
      input instanceof Uint8Array ? new BinaryReader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseParams } as Params;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): Params {
    const message = { ...baseParams } as Params;
    return message;
  },

  toJSON(_: Params): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<Params>): Params {
    const message = { ...baseParams } as Params;
    return message;
  },
};
