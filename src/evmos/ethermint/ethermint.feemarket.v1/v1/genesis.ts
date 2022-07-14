/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";
import { DeepPartial, longToNumber } from "../../../../types";
import { Params } from "./feemarket";

export const protobufPackage = "ethermint.feemarket.v1";

/** GenesisState defines the feemarket module's genesis state. */
export interface GenesisState {
  /** params defines all the paramaters of the module. */
  params: Params | undefined;
  /**
   * block gas is the amount of gas wanted on the last block before the upgrade.
   * Zero by default.
   */
  block_gas: number;
}

const baseGenesisState: object = { block_gas: 0 };

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.block_gas !== 0) {
      writer.uint32(24).uint64(message.block_gas);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 3:
          message.block_gas = longToNumber(reader.uint64() as Long);
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
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    if (object.block_gas !== undefined && object.block_gas !== null) {
      message.block_gas = Number(object.block_gas);
    } else {
      message.block_gas = 0;
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.block_gas !== undefined && (obj.block_gas = message.block_gas);
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    if (object.block_gas !== undefined && object.block_gas !== null) {
      message.block_gas = object.block_gas;
    } else {
      message.block_gas = 0;
    }
    return message;
  },
};
