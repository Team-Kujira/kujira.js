/* eslint-disable */
import Long from "long";

import { util, configure, Writer, Reader } from "protobufjs/minimal";
import {
  longToNumber,
  bytesFromBase64,
  base64FromBytes,
  DeepPartial,
} from "../../../types";
import { Coin } from "../../../types/cosmos/base/coin";

export const protobufPackage = "kujira.scheduler";

export interface CreateHookProposal {
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */
  description: string;
  /** The account that will execute the msg on the schedule */
  executor: string;
  /** The contract that the msg is called on */
  contract: string;
  msg: Uint8Array;
  frequency: number;
  funds: Coin[];
}

export interface UpdateHookProposal {
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */
  description: string;
  id: number;
  executor: string;
  contract: string;
  msg: Uint8Array;
  frequency: number;
  funds: Coin[];
}

export interface DeleteHookProposal {
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */
  description: string;
  id: number;
}

const baseCreateHookProposal: object = {
  title: "",
  description: "",
  executor: "",
  contract: "",
  frequency: 0,
};

export const CreateHookProposal = {
  encode(
    message: CreateHookProposal,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.executor !== "") {
      writer.uint32(26).string(message.executor);
    }
    if (message.contract !== "") {
      writer.uint32(34).string(message.contract);
    }
    if (message.msg.length !== 0) {
      writer.uint32(42).bytes(message.msg);
    }
    if (message.frequency !== 0) {
      writer.uint32(48).int64(message.frequency);
    }
    for (const v of message.funds) {
      Coin.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CreateHookProposal {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateHookProposal,
    } as CreateHookProposal;
    message.funds = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.executor = reader.string();
          break;
        case 4:
          message.contract = reader.string();
          break;
        case 5:
          message.msg = reader.bytes();
          break;
        case 6:
          message.frequency = longToNumber(reader.int64() as Long);
          break;
        case 7:
          message.funds.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateHookProposal {
    const message = {
      ...baseCreateHookProposal,
    } as CreateHookProposal;
    message.funds = [];
    if (object.title !== undefined && object.title !== null) {
      message.title = String(object.title);
    } else {
      message.title = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
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

  toJSON(message: CreateHookProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
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

  fromPartial(object: DeepPartial<CreateHookProposal>): CreateHookProposal {
    const message = {
      ...baseCreateHookProposal,
    } as CreateHookProposal;
    message.funds = [];
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    } else {
      message.title = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
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

const baseUpdateHookProposal: object = {
  title: "",
  description: "",
  id: 0,
  executor: "",
  contract: "",
  frequency: 0,
};

export const UpdateHookProposal = {
  encode(
    message: UpdateHookProposal,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.id !== 0) {
      writer.uint32(24).uint64(message.id);
    }
    if (message.executor !== "") {
      writer.uint32(34).string(message.executor);
    }
    if (message.contract !== "") {
      writer.uint32(42).string(message.contract);
    }
    if (message.msg.length !== 0) {
      writer.uint32(50).bytes(message.msg);
    }
    if (message.frequency !== 0) {
      writer.uint32(56).int64(message.frequency);
    }
    for (const v of message.funds) {
      Coin.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): UpdateHookProposal {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateHookProposal,
    } as UpdateHookProposal;
    message.funds = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.executor = reader.string();
          break;
        case 5:
          message.contract = reader.string();
          break;
        case 6:
          message.msg = reader.bytes();
          break;
        case 7:
          message.frequency = longToNumber(reader.int64() as Long);
          break;
        case 8:
          message.funds.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateHookProposal {
    const message = {
      ...baseUpdateHookProposal,
    } as UpdateHookProposal;
    message.funds = [];
    if (object.title !== undefined && object.title !== null) {
      message.title = String(object.title);
    } else {
      message.title = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
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

  toJSON(message: UpdateHookProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
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

  fromPartial(object: DeepPartial<UpdateHookProposal>): UpdateHookProposal {
    const message = {
      ...baseUpdateHookProposal,
    } as UpdateHookProposal;
    message.funds = [];
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    } else {
      message.title = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
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

const baseDeleteHookProposal: object = {
  title: "",
  description: "",
  id: 0,
};

export const DeleteHookProposal = {
  encode(
    message: DeleteHookProposal,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.id !== 0) {
      writer.uint32(24).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): DeleteHookProposal {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDeleteHookProposal,
    } as DeleteHookProposal;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteHookProposal {
    const message = {
      ...baseDeleteHookProposal,
    } as DeleteHookProposal;
    if (object.title !== undefined && object.title !== null) {
      message.title = String(object.title);
    } else {
      message.title = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: DeleteHookProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<DeleteHookProposal>): DeleteHookProposal {
    const message = {
      ...baseDeleteHookProposal,
    } as DeleteHookProposal;
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    } else {
      message.title = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};
