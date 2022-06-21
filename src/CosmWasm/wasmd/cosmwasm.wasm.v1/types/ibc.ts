/* eslint-disable */
import Long from "long";

import { Writer, Reader } from "protobufjs/minimal";
import {
  longToNumber,
  bytesFromBase64,
  base64FromBytes,
  DeepPartial,
} from "../../../../types";

export const protobufPackage = "cosmwasm.wasm.v1";

/** MsgIBCSend */
export interface MsgIBCSend {
  /** the channel by which the packet will be sent */
  channel: string;
  /**
   * Timeout height relative to the current block height.
   * The timeout is disabled when set to 0.
   */
  timeout_height: number;
  /**
   * Timeout timestamp (in nanoseconds) relative to the current block timestamp.
   * The timeout is disabled when set to 0.
   */
  timeout_timestamp: number;
  /**
   * Data is the payload to transfer. We must not make assumption what format or
   * content is in here.
   */
  data: Uint8Array;
}

/** MsgIBCCloseChannel port and channel need to be owned by the contract */
export interface MsgIBCCloseChannel {
  channel: string;
}

const baseMsgIBCSend: object = {
  channel: "",
  timeout_height: 0,
  timeout_timestamp: 0,
};

export const MsgIBCSend = {
  encode(message: MsgIBCSend, writer: Writer = Writer.create()): Writer {
    if (message.channel !== "") {
      writer.uint32(18).string(message.channel);
    }
    if (message.timeout_height !== 0) {
      writer.uint32(32).uint64(message.timeout_height);
    }
    if (message.timeout_timestamp !== 0) {
      writer.uint32(40).uint64(message.timeout_timestamp);
    }
    if (message.data.length !== 0) {
      writer.uint32(50).bytes(message.data);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgIBCSend {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgIBCSend } as MsgIBCSend;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.channel = reader.string();
          break;
        case 4:
          message.timeout_height = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.timeout_timestamp = longToNumber(reader.uint64() as Long);
          break;
        case 6:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgIBCSend {
    const message = { ...baseMsgIBCSend } as MsgIBCSend;
    if (object.channel !== undefined && object.channel !== null) {
      message.channel = String(object.channel);
    } else {
      message.channel = "";
    }
    if (object.timeout_height !== undefined && object.timeout_height !== null) {
      message.timeout_height = Number(object.timeout_height);
    } else {
      message.timeout_height = 0;
    }
    if (
      object.timeout_timestamp !== undefined &&
      object.timeout_timestamp !== null
    ) {
      message.timeout_timestamp = Number(object.timeout_timestamp);
    } else {
      message.timeout_timestamp = 0;
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    return message;
  },

  toJSON(message: MsgIBCSend): unknown {
    const obj: any = {};
    message.channel !== undefined && (obj.channel = message.channel);
    message.timeout_height !== undefined &&
      (obj.timeout_height = message.timeout_height);
    message.timeout_timestamp !== undefined &&
      (obj.timeout_timestamp = message.timeout_timestamp);
    message.data !== undefined &&
      (obj.data = base64FromBytes(
        message.data !== undefined ? message.data : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(object: DeepPartial<MsgIBCSend>): MsgIBCSend {
    const message = { ...baseMsgIBCSend } as MsgIBCSend;
    if (object.channel !== undefined && object.channel !== null) {
      message.channel = object.channel;
    } else {
      message.channel = "";
    }
    if (object.timeout_height !== undefined && object.timeout_height !== null) {
      message.timeout_height = object.timeout_height;
    } else {
      message.timeout_height = 0;
    }
    if (
      object.timeout_timestamp !== undefined &&
      object.timeout_timestamp !== null
    ) {
      message.timeout_timestamp = object.timeout_timestamp;
    } else {
      message.timeout_timestamp = 0;
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = object.data;
    } else {
      message.data = new Uint8Array();
    }
    return message;
  },
};

const baseMsgIBCCloseChannel: object = { channel: "" };

export const MsgIBCCloseChannel = {
  encode(
    message: MsgIBCCloseChannel,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.channel !== "") {
      writer.uint32(18).string(message.channel);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgIBCCloseChannel {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgIBCCloseChannel,
    } as MsgIBCCloseChannel;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.channel = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgIBCCloseChannel {
    const message = {
      ...baseMsgIBCCloseChannel,
    } as MsgIBCCloseChannel;
    if (object.channel !== undefined && object.channel !== null) {
      message.channel = String(object.channel);
    } else {
      message.channel = "";
    }
    return message;
  },

  toJSON(message: MsgIBCCloseChannel): unknown {
    const obj: any = {};
    message.channel !== undefined && (obj.channel = message.channel);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgIBCCloseChannel>): MsgIBCCloseChannel {
    const message = {
      ...baseMsgIBCCloseChannel,
    } as MsgIBCCloseChannel;
    if (object.channel !== undefined && object.channel !== null) {
      message.channel = object.channel;
    } else {
      message.channel = "";
    }
    return message;
  },
};
