/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";
import { DeepPartial } from "../../../../types";
import { Coin } from "../../../../types/cosmos/base/coin";

export const protobufPackage = "cosmos.crisis.v1beta1";

/** GenesisState defines the crisis module's genesis state. */
export interface GenesisState {
  /**
   * constant_fee is the fee used to verify the invariant in the crisis
   * module.
   */
  constant_fee: Coin | undefined;
}

const baseGenesisState: object = {};

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
    if (message.constant_fee !== undefined) {
      Coin.encode(message.constant_fee, writer.uint32(26).fork()).ldelim();
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
        case 3:
          message.constant_fee = Coin.decode(reader, reader.uint32());
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
    if (object.constant_fee !== undefined && object.constant_fee !== null) {
      message.constant_fee = Coin.fromJSON(object.constant_fee);
    } else {
      message.constant_fee = undefined;
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.constant_fee !== undefined &&
      (obj.constant_fee = message.constant_fee
        ? Coin.toJSON(message.constant_fee)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    if (object.constant_fee !== undefined && object.constant_fee !== null) {
      message.constant_fee = Coin.fromPartial(object.constant_fee);
    } else {
      message.constant_fee = undefined;
    }
    return message;
  },
};
