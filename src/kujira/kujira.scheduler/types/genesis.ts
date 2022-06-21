/* eslint-disable */
import Long from "long";

import { Writer, Reader } from "protobufjs/minimal";
import { Params } from "./params";
import { Hook } from "./hook";
import { DeepPartial, longToNumber } from "../../../types";

export const protobufPackage = "kujira.scheduler";

/** GenesisState defines the scheduler module's genesis state. */
export interface GenesisState {
  params: Params | undefined;
  hookList: Hook[];
  /** this line is used by starport scaffolding # genesis/proto/state */
  hookCount: number;
}

const baseGenesisState: object = { hookCount: 0 };

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.hookList) {
      Hook.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.hookCount !== 0) {
      writer.uint32(24).uint64(message.hookCount);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.hookList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.hookList.push(Hook.decode(reader, reader.uint32()));
          break;
        case 3:
          message.hookCount = longToNumber(reader.uint64() as Long);
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
    message.hookList = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    if (object.hookList !== undefined && object.hookList !== null) {
      for (const e of object.hookList) {
        message.hookList.push(Hook.fromJSON(e));
      }
    }
    if (object.hookCount !== undefined && object.hookCount !== null) {
      message.hookCount = Number(object.hookCount);
    } else {
      message.hookCount = 0;
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.hookList) {
      obj.hookList = message.hookList.map((e) =>
        e ? Hook.toJSON(e) : undefined
      );
    } else {
      obj.hookList = [];
    }
    message.hookCount !== undefined && (obj.hookCount = message.hookCount);
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.hookList = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    if (object.hookList !== undefined && object.hookList !== null) {
      for (const e of object.hookList) {
        message.hookList.push(Hook.fromPartial(e));
      }
    }
    if (object.hookCount !== undefined && object.hookCount !== null) {
      message.hookCount = object.hookCount;
    } else {
      message.hookCount = 0;
    }
    return message;
  },
};
