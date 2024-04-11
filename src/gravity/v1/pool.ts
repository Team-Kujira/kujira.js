/* eslint-disable */
import { BinaryReader, BinaryWriter } from "cosmjs-types/binary";
import { Long, isSet } from "./helpers";
export const protobufPackage = "gravity.v1";
/** IDSet represents a set of IDs */

export interface IDSet {
  /** IDSet represents a set of IDs */
  ids: bigint[];
}
export interface BatchFees {
  token: string;
  totalFees: string;
  txCount: bigint;
}
export interface EventWithdrawalReceived {
  bridgeContract: string;
  bridgeChainId: string;
  outgoingTxId: string;
  nonce: string;
}
export interface EventWithdrawCanceled {
  sender: string;
  txId: string;
  bridgeContract: string;
  bridgeChainId: string;
}

function createBaseIDSet(): IDSet {
  return {
    ids: [],
  };
}

export const IDSet = {
  encode(
    message: IDSet,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    writer.uint32(10).fork();

    for (const v of message.ids) {
      writer.uint64(v);
    }

    writer.ldelim();
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): IDSet {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIDSet();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;

            while (reader.pos < end2) {
              message.ids.push(reader.uint64());
            }
          } else {
            message.ids.push(reader.uint64());
          }

          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): IDSet {
    return {
      ids: Array.isArray(object?.ids)
        ? object.ids.map((e: any) => Long.fromValue(e))
        : [],
    };
  },

  toJSON(message: IDSet): unknown {
    const obj: any = {};

    if (message.ids) {
      obj.ids = message.ids.map((e) => (e || BigInt(0)).toString());
    } else {
      obj.ids = [];
    }

    return obj;
  },

  fromPartial(object: Partial<IDSet>): IDSet {
    const message = createBaseIDSet();
    message.ids = object.ids?.map((e) => BigInt(e)) || [];
    return message;
  },
};

function createBaseBatchFees(): BatchFees {
  return {
    token: "",
    totalFees: "",
    txCount: BigInt(0),
  };
}

export const BatchFees = {
  encode(
    message: BatchFees,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    if (message.token !== "") {
      writer.uint32(10).string(message.token);
    }

    if (message.totalFees !== "") {
      writer.uint32(18).string(message.totalFees);
    }

    if (message.txCount !== BigInt(0)) {
      writer.uint32(24).uint64(message.txCount);
    }

    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): BatchFees {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBatchFees();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.token = reader.string();
          break;

        case 2:
          message.totalFees = reader.string();
          break;

        case 3:
          message.txCount = reader.uint64();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): BatchFees {
    return {
      token: isSet(object.token) ? String(object.token) : "",
      totalFees: isSet(object.totalFees) ? String(object.totalFees) : "",
      txCount: isSet(object.txCount) ? BigInt(object.txCount) : BigInt(0),
    };
  },

  toJSON(message: BatchFees): unknown {
    const obj: any = {};
    message.token !== undefined && (obj.token = message.token);
    message.totalFees !== undefined && (obj.totalFees = message.totalFees);
    message.txCount !== undefined &&
      (obj.txCount = (message.txCount || BigInt(0)).toString());
    return obj;
  },

  fromPartial(object: Partial<BatchFees>): BatchFees {
    const message = createBaseBatchFees();
    message.token = object.token ?? "";
    message.totalFees = object.totalFees ?? "";
    message.txCount =
      object.txCount !== undefined && object.txCount !== null
        ? BigInt(object.txCount)
        : BigInt(0);
    return message;
  },
};

function createBaseEventWithdrawalReceived(): EventWithdrawalReceived {
  return {
    bridgeContract: "",
    bridgeChainId: "",
    outgoingTxId: "",
    nonce: "",
  };
}

export const EventWithdrawalReceived = {
  encode(
    message: EventWithdrawalReceived,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    if (message.bridgeContract !== "") {
      writer.uint32(10).string(message.bridgeContract);
    }

    if (message.bridgeChainId !== "") {
      writer.uint32(18).string(message.bridgeChainId);
    }

    if (message.outgoingTxId !== "") {
      writer.uint32(26).string(message.outgoingTxId);
    }

    if (message.nonce !== "") {
      writer.uint32(34).string(message.nonce);
    }

    return writer;
  },

  decode(
    input: BinaryReader | Uint8Array,
    length?: number
  ): EventWithdrawalReceived {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventWithdrawalReceived();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.bridgeContract = reader.string();
          break;

        case 2:
          message.bridgeChainId = reader.string();
          break;

        case 3:
          message.outgoingTxId = reader.string();
          break;

        case 4:
          message.nonce = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventWithdrawalReceived {
    return {
      bridgeContract: isSet(object.bridgeContract)
        ? String(object.bridgeContract)
        : "",
      bridgeChainId: isSet(object.bridgeChainId)
        ? String(object.bridgeChainId)
        : "",
      outgoingTxId: isSet(object.outgoingTxId)
        ? String(object.outgoingTxId)
        : "",
      nonce: isSet(object.nonce) ? String(object.nonce) : "",
    };
  },

  toJSON(message: EventWithdrawalReceived): unknown {
    const obj: any = {};
    message.bridgeContract !== undefined &&
      (obj.bridgeContract = message.bridgeContract);
    message.bridgeChainId !== undefined &&
      (obj.bridgeChainId = message.bridgeChainId);
    message.outgoingTxId !== undefined &&
      (obj.outgoingTxId = message.outgoingTxId);
    message.nonce !== undefined && (obj.nonce = message.nonce);
    return obj;
  },

  fromPartial(
    object: Partial<EventWithdrawalReceived>
  ): EventWithdrawalReceived {
    const message = createBaseEventWithdrawalReceived();
    message.bridgeContract = object.bridgeContract ?? "";
    message.bridgeChainId = object.bridgeChainId ?? "";
    message.outgoingTxId = object.outgoingTxId ?? "";
    message.nonce = object.nonce ?? "";
    return message;
  },
};

function createBaseEventWithdrawCanceled(): EventWithdrawCanceled {
  return {
    sender: "",
    txId: "",
    bridgeContract: "",
    bridgeChainId: "",
  };
}

export const EventWithdrawCanceled = {
  encode(
    message: EventWithdrawCanceled,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    if (message.txId !== "") {
      writer.uint32(18).string(message.txId);
    }

    if (message.bridgeContract !== "") {
      writer.uint32(26).string(message.bridgeContract);
    }

    if (message.bridgeChainId !== "") {
      writer.uint32(34).string(message.bridgeChainId);
    }

    return writer;
  },

  decode(
    input: BinaryReader | Uint8Array,
    length?: number
  ): EventWithdrawCanceled {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventWithdrawCanceled();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.txId = reader.string();
          break;

        case 3:
          message.bridgeContract = reader.string();
          break;

        case 4:
          message.bridgeChainId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventWithdrawCanceled {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      txId: isSet(object.txId) ? String(object.txId) : "",
      bridgeContract: isSet(object.bridgeContract)
        ? String(object.bridgeContract)
        : "",
      bridgeChainId: isSet(object.bridgeChainId)
        ? String(object.bridgeChainId)
        : "",
    };
  },

  toJSON(message: EventWithdrawCanceled): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.txId !== undefined && (obj.txId = message.txId);
    message.bridgeContract !== undefined &&
      (obj.bridgeContract = message.bridgeContract);
    message.bridgeChainId !== undefined &&
      (obj.bridgeChainId = message.bridgeChainId);
    return obj;
  },

  fromPartial(object: Partial<EventWithdrawCanceled>): EventWithdrawCanceled {
    const message = createBaseEventWithdrawCanceled();
    message.sender = object.sender ?? "";
    message.txId = object.txId ?? "";
    message.bridgeContract = object.bridgeContract ?? "";
    message.bridgeChainId = object.bridgeChainId ?? "";
    return message;
  },
};
