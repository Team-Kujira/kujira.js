/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";
import { DeepPartial, longToNumber } from "../../../../types";

export const protobufPackage = "ethermint.feemarket.v1";

/** Params defines the EVM module parameters */
export interface Params {
  /** no base fee forces the EIP-1559 base fee to 0 (needed for 0 price calls) */
  no_base_fee: boolean;
  /**
   * base fee change denominator bounds the amount the base fee can change
   * between blocks.
   */
  base_fee_change_denominator: number;
  /**
   * elasticity multiplier bounds the maximum gas limit an EIP-1559 block may
   * have.
   */
  elasticity_multiplier: number;
  /** height at which the base fee calculation is enabled. */
  enable_height: number;
  /** base fee for EIP-1559 blocks. */
  base_fee: string;
  /** min_gas_price defines the minimum gas price value for cosmos and eth transactions */
  min_gas_price: string;
  /**
   * min gas denominator bounds the minimum gasUsed to be charged
   * to senders based on GasLimit
   */
  min_gas_multiplier: string;
}

const baseParams: object = {
  no_base_fee: false,
  base_fee_change_denominator: 0,
  elasticity_multiplier: 0,
  enable_height: 0,
  base_fee: "",
  min_gas_price: "",
  min_gas_multiplier: "",
};

export const Params = {
  encode(message: Params, writer: Writer = Writer.create()): Writer {
    if (message.no_base_fee === true) {
      writer.uint32(8).bool(message.no_base_fee);
    }
    if (message.base_fee_change_denominator !== 0) {
      writer.uint32(16).uint32(message.base_fee_change_denominator);
    }
    if (message.elasticity_multiplier !== 0) {
      writer.uint32(24).uint32(message.elasticity_multiplier);
    }
    if (message.enable_height !== 0) {
      writer.uint32(40).int64(message.enable_height);
    }
    if (message.base_fee !== "") {
      writer.uint32(50).string(message.base_fee);
    }
    if (message.min_gas_price !== "") {
      writer.uint32(58).string(message.min_gas_price);
    }
    if (message.min_gas_multiplier !== "") {
      writer.uint32(66).string(message.min_gas_multiplier);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseParams } as Params;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.no_base_fee = reader.bool();
          break;
        case 2:
          message.base_fee_change_denominator = reader.uint32();
          break;
        case 3:
          message.elasticity_multiplier = reader.uint32();
          break;
        case 5:
          message.enable_height = longToNumber(reader.int64() as Long);
          break;
        case 6:
          message.base_fee = reader.string();
          break;
        case 7:
          message.min_gas_price = reader.string();
          break;
        case 8:
          message.min_gas_multiplier = reader.string();
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
    if (object.no_base_fee !== undefined && object.no_base_fee !== null) {
      message.no_base_fee = Boolean(object.no_base_fee);
    } else {
      message.no_base_fee = false;
    }
    if (
      object.base_fee_change_denominator !== undefined &&
      object.base_fee_change_denominator !== null
    ) {
      message.base_fee_change_denominator = Number(
        object.base_fee_change_denominator
      );
    } else {
      message.base_fee_change_denominator = 0;
    }
    if (
      object.elasticity_multiplier !== undefined &&
      object.elasticity_multiplier !== null
    ) {
      message.elasticity_multiplier = Number(object.elasticity_multiplier);
    } else {
      message.elasticity_multiplier = 0;
    }
    if (object.enable_height !== undefined && object.enable_height !== null) {
      message.enable_height = Number(object.enable_height);
    } else {
      message.enable_height = 0;
    }
    if (object.base_fee !== undefined && object.base_fee !== null) {
      message.base_fee = String(object.base_fee);
    } else {
      message.base_fee = "";
    }
    if (object.min_gas_price !== undefined && object.min_gas_price !== null) {
      message.min_gas_price = String(object.min_gas_price);
    } else {
      message.min_gas_price = "";
    }
    if (
      object.min_gas_multiplier !== undefined &&
      object.min_gas_multiplier !== null
    ) {
      message.min_gas_multiplier = String(object.min_gas_multiplier);
    } else {
      message.min_gas_multiplier = "";
    }
    return message;
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.no_base_fee !== undefined &&
      (obj.no_base_fee = message.no_base_fee);
    message.base_fee_change_denominator !== undefined &&
      (obj.base_fee_change_denominator = message.base_fee_change_denominator);
    message.elasticity_multiplier !== undefined &&
      (obj.elasticity_multiplier = message.elasticity_multiplier);
    message.enable_height !== undefined &&
      (obj.enable_height = message.enable_height);
    message.base_fee !== undefined && (obj.base_fee = message.base_fee);
    message.min_gas_price !== undefined &&
      (obj.min_gas_price = message.min_gas_price);
    message.min_gas_multiplier !== undefined &&
      (obj.min_gas_multiplier = message.min_gas_multiplier);
    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = { ...baseParams } as Params;
    if (object.no_base_fee !== undefined && object.no_base_fee !== null) {
      message.no_base_fee = object.no_base_fee;
    } else {
      message.no_base_fee = false;
    }
    if (
      object.base_fee_change_denominator !== undefined &&
      object.base_fee_change_denominator !== null
    ) {
      message.base_fee_change_denominator = object.base_fee_change_denominator;
    } else {
      message.base_fee_change_denominator = 0;
    }
    if (
      object.elasticity_multiplier !== undefined &&
      object.elasticity_multiplier !== null
    ) {
      message.elasticity_multiplier = object.elasticity_multiplier;
    } else {
      message.elasticity_multiplier = 0;
    }
    if (object.enable_height !== undefined && object.enable_height !== null) {
      message.enable_height = object.enable_height;
    } else {
      message.enable_height = 0;
    }
    if (object.base_fee !== undefined && object.base_fee !== null) {
      message.base_fee = object.base_fee;
    } else {
      message.base_fee = "";
    }
    if (object.min_gas_price !== undefined && object.min_gas_price !== null) {
      message.min_gas_price = object.min_gas_price;
    } else {
      message.min_gas_price = "";
    }
    if (
      object.min_gas_multiplier !== undefined &&
      object.min_gas_multiplier !== null
    ) {
      message.min_gas_multiplier = object.min_gas_multiplier;
    } else {
      message.min_gas_multiplier = "";
    }
    return message;
  },
};
