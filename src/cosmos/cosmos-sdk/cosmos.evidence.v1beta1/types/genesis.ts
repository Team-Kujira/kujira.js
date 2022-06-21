/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";
import { DeepPartial } from "../../../../types";
import { Any } from "../../../../types/google/protobuf/any";

export const protobufPackage = "cosmos.evidence.v1beta1";

/** GenesisState defines the evidence module's genesis state. */
export interface GenesisState {
  /** evidence defines all the evidence at genesis. */
  evidence: Any[];
}

const baseGenesisState: object = {};

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
    for (const v of message.evidence) {
      Any.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.evidence = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.evidence.push(Any.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.evidence = [];
    if (object.evidence !== undefined && object.evidence !== null) {
      for (const e of object.evidence) {
        message.evidence.push(Any.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.evidence) {
      obj.evidence = message.evidence.map((e) =>
        e ? Any.toJSON(e) : undefined
      );
    } else {
      obj.evidence = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.evidence = [];
    if (object.evidence !== undefined && object.evidence !== null) {
      for (const e of object.evidence) {
        message.evidence.push(Any.fromPartial(e));
      }
    }
    return message;
  },
};
