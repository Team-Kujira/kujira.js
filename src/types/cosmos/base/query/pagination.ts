/* eslint-disable */
import Long from "long";

import { util, configure, Writer, Reader } from "protobufjs/minimal";
import {
  longToNumber,
  bytesFromBase64,
  base64FromBytes,
  DeepPartial,
} from "../../..";

export const protobufPackage = "cosmos.base.query.v1beta1";

/**
 * PageRequest is to be embedded in gRPC request messages for efficient
 * pagination. Ex:
 *
 *  message SomeRequest {
 *          Foo some_parameter = 1;
 *          PageRequest pagination = 2;
 *  }
 */
export interface PageRequest {
  /**
   * key is a value returned in PageResponse.next_key to begin
   * querying the next page most efficiently. Only one of offset or key
   * should be set.
   */
  key: Uint8Array;
  /**
   * offset is a numeric offset that can be used when key is unavailable.
   * It is less efficient than using key. Only one of offset or key should
   * be set.
   */
  offset: number;
  /**
   * limit is the total number of results to be returned in the result page.
   * If left empty it will default to a value to be set by each app.
   */
  limit: number;
  /**
   * count_total is set to true  to indicate that the result set should include
   * a count of the total number of items available for pagination in UIs.
   * count_total is only respected when offset is used. It is ignored when key
   * is set.
   */
  count_total: boolean;
  /**
   * reverse is set to true if results are to be returned in the descending order.
   *
   * Since: cosmos-sdk 0.43
   */
  reverse: boolean;
}

/**
 * PageResponse is to be embedded in gRPC response messages where the
 * corresponding request message has used PageRequest.
 *
 *  message SomeResponse {
 *          repeated Bar results = 1;
 *          PageResponse page = 2;
 *  }
 */
export interface PageResponse {
  /**
   * next_key is the key to be passed to PageRequest.key to
   * query the next page most efficiently
   */
  next_key: Uint8Array;
  /**
   * total is total number of results available if PageRequest.count_total
   * was set, its value is undefined otherwise
   */
  total: number;
}

const basePageRequest: object = {
  offset: 0,
  limit: 0,
  count_total: false,
  reverse: false,
};

export const PageRequest = {
  encode(message: PageRequest, writer: Writer = Writer.create()): Writer {
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }
    if (message.offset !== 0) {
      writer.uint32(16).uint64(message.offset);
    }
    if (message.limit !== 0) {
      writer.uint32(24).uint64(message.limit);
    }
    if (message.count_total === true) {
      writer.uint32(32).bool(message.count_total);
    }
    if (message.reverse === true) {
      writer.uint32(40).bool(message.reverse);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): PageRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePageRequest } as PageRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes();
          break;
        case 2:
          message.offset = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.limit = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.count_total = reader.bool();
          break;
        case 5:
          message.reverse = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PageRequest {
    const message = { ...basePageRequest } as PageRequest;
    if (object.key !== undefined && object.key !== null) {
      message.key = bytesFromBase64(object.key);
    }
    if (object.offset !== undefined && object.offset !== null) {
      message.offset = Number(object.offset);
    } else {
      message.offset = 0;
    }
    if (object.limit !== undefined && object.limit !== null) {
      message.limit = Number(object.limit);
    } else {
      message.limit = 0;
    }
    if (object.count_total !== undefined && object.count_total !== null) {
      message.count_total = Boolean(object.count_total);
    } else {
      message.count_total = false;
    }
    if (object.reverse !== undefined && object.reverse !== null) {
      message.reverse = Boolean(object.reverse);
    } else {
      message.reverse = false;
    }
    return message;
  },

  toJSON(message: PageRequest): unknown {
    const obj: any = {};
    message.key !== undefined &&
      (obj.key = base64FromBytes(
        message.key !== undefined ? message.key : new Uint8Array()
      ));
    message.offset !== undefined && (obj.offset = message.offset);
    message.limit !== undefined && (obj.limit = message.limit);
    message.count_total !== undefined &&
      (obj.count_total = message.count_total);
    message.reverse !== undefined && (obj.reverse = message.reverse);
    return obj;
  },

  fromPartial(object: DeepPartial<PageRequest>): PageRequest {
    const message = { ...basePageRequest } as PageRequest;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = new Uint8Array();
    }
    if (object.offset !== undefined && object.offset !== null) {
      message.offset = object.offset;
    } else {
      message.offset = 0;
    }
    if (object.limit !== undefined && object.limit !== null) {
      message.limit = object.limit;
    } else {
      message.limit = 0;
    }
    if (object.count_total !== undefined && object.count_total !== null) {
      message.count_total = object.count_total;
    } else {
      message.count_total = false;
    }
    if (object.reverse !== undefined && object.reverse !== null) {
      message.reverse = object.reverse;
    } else {
      message.reverse = false;
    }
    return message;
  },
};

const basePageResponse: object = { total: 0 };

export const PageResponse = {
  encode(message: PageResponse, writer: Writer = Writer.create()): Writer {
    if (message.next_key.length !== 0) {
      writer.uint32(10).bytes(message.next_key);
    }
    if (message.total !== 0) {
      writer.uint32(16).uint64(message.total);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): PageResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePageResponse } as PageResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.next_key = reader.bytes();
          break;
        case 2:
          message.total = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PageResponse {
    const message = { ...basePageResponse } as PageResponse;
    if (object.next_key !== undefined && object.next_key !== null) {
      message.next_key = bytesFromBase64(object.next_key);
    }
    if (object.total !== undefined && object.total !== null) {
      message.total = Number(object.total);
    } else {
      message.total = 0;
    }
    return message;
  },

  toJSON(message: PageResponse): unknown {
    const obj: any = {};
    message.next_key !== undefined &&
      (obj.next_key = base64FromBytes(
        message.next_key !== undefined ? message.next_key : new Uint8Array()
      ));
    message.total !== undefined && (obj.total = message.total);
    return obj;
  },

  fromPartial(object: DeepPartial<PageResponse>): PageResponse {
    const message = { ...basePageResponse } as PageResponse;
    if (object.next_key !== undefined && object.next_key !== null) {
      message.next_key = object.next_key;
    } else {
      message.next_key = new Uint8Array();
    }
    if (object.total !== undefined && object.total !== null) {
      message.total = object.total;
    } else {
      message.total = 0;
    }
    return message;
  },
};
