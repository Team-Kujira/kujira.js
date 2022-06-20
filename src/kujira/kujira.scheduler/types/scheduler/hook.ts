/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { Coin } from "../cosmos/base/v1beta1/coin";

export const protobufPackage = "kujira.scheduler";

export interface Hook {
  id: number;
  executor: string;
  contract: string;
  msg: Uint8Array;
  frequency: number;
  funds: Coin[];
}

const baseHook: object = { id: 0, executor: "", contract: "", frequency: 0 };

export const Hook = {
  encode(message: Hook, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.executor !== "") {
      writer.uint32(18).string(message.executor);
    }
    if (message.contract !== "") {
      writer.uint32(26).string(message.contract);
    }
    if (message.msg.length !== 0) {
      writer.uint32(34).bytes(message.msg);
    }
    if (message.frequency !== 0) {
      writer.uint32(40).int64(message.frequency);
    }
    for (const v of message.funds) {
      Coin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Hook {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseHook } as Hook;
    message.funds = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.executor = reader.string();
          break;
        case 3:
          message.contract = reader.string();
          break;
        case 4:
          message.msg = reader.bytes();
          break;
        case 5:
          message.frequency = longToNumber(reader.int64() as Long);
          break;
        case 6:
          message.funds.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Hook {
    const message = { ...baseHook } as Hook;
    message.funds = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.executor !== undefined && object.executor !== null) {
      message.executor = String(object.executor);
    } else {
      message.executor = "";
    }
    if (object.contract !== undefined && object.contract !== null) {
      message.contract = String(object.contract);
    } else {
      message.contract = "";
    }
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = bytesFromBase64(object.msg);
    }
    if (object.frequency !== undefined && object.frequency !== null) {
      message.frequency = Number(object.frequency);
    } else {
      message.frequency = 0;
    }
    if (object.funds !== undefined && object.funds !== null) {
      for (const e of object.funds) {
        message.funds.push(Coin.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: Hook): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.executor !== undefined && (obj.executor = message.executor);
    message.contract !== undefined && (obj.contract = message.contract);
    message.msg !== undefined &&
      (obj.msg = base64FromBytes(
        message.msg !== undefined ? message.msg : new Uint8Array()
      ));
    message.frequency !== undefined && (obj.frequency = message.frequency);
    if (message.funds) {
      obj.funds = message.funds.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.funds = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Hook>): Hook {
    const message = { ...baseHook } as Hook;
    message.funds = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.executor !== undefined && object.executor !== null) {
      message.executor = object.executor;
    } else {
      message.executor = "";
    }
    if (object.contract !== undefined && object.contract !== null) {
      message.contract = object.contract;
    } else {
      message.contract = "";
    }
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = object.msg;
    } else {
      message.msg = new Uint8Array();
    }
    if (object.frequency !== undefined && object.frequency !== null) {
      message.frequency = object.frequency;
    } else {
      message.frequency = 0;
    }
    if (object.funds !== undefined && object.funds !== null) {
      for (const e of object.funds) {
        message.funds.push(Coin.fromPartial(e));
      }
    }
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

const atob: (b64: string) => string =
  globalThis.atob ||
  ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

const btoa: (bin: string) => string =
  globalThis.btoa ||
  ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  for (let i = 0; i < arr.byteLength; ++i) {
    bin.push(String.fromCharCode(arr[i]));
  }
  return btoa(bin.join(""));
}

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
