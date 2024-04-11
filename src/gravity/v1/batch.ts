/* eslint-disable */
import { BinaryReader, BinaryWriter } from "cosmjs-types/binary";
import { ERC20Token } from "./attestation";
import { base64FromBytes, bytesFromBase64, isSet } from "./helpers";
export const protobufPackage = "gravity.v1";
/** OutgoingTxBatch represents a batch of transactions going from gravity to ETH */

export interface OutgoingTxBatch {
  batchNonce: bigint;
  batchTimeout: bigint;
  transactions: OutgoingTransferTx[];
  tokenContract: string;
  cosmosBlockCreated: bigint;
}
/** OutgoingTransferTx represents an individual send from gravity to ETH */

export interface OutgoingTransferTx {
  id: bigint;
  sender: string;
  destAddress: string;
  erc20Token?: ERC20Token;
  erc20Fee?: ERC20Token;
}
/** OutgoingLogicCall represents an individual logic call from gravity to ETH */

export interface OutgoingLogicCall {
  transfers: ERC20Token[];
  fees: ERC20Token[];
  logicContractAddress: string;
  payload: Uint8Array;
  timeout: bigint;
  invalidationId: Uint8Array;
  invalidationNonce: bigint;
  cosmosBlockCreated: bigint;
}
export interface EventOutgoingBatchCanceled {
  bridgeContract: string;
  bridgeChainId: string;
  batchId: string;
  nonce: string;
}
export interface EventOutgoingBatch {
  bridgeContract: string;
  bridgeChainId: string;
  batchId: string;
  nonce: string;
}

function createBaseOutgoingTxBatch(): OutgoingTxBatch {
  return {
    batchNonce: BigInt(0),
    batchTimeout: BigInt(0),
    transactions: [],
    tokenContract: "",
    cosmosBlockCreated: BigInt(0),
  };
}

export const OutgoingTxBatch = {
  encode(
    message: OutgoingTxBatch,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    if (message.batchNonce !== BigInt(0)) {
      writer.uint32(8).uint64(message.batchNonce);
    }

    if (message.batchTimeout !== BigInt(0)) {
      writer.uint32(16).uint64(message.batchTimeout);
    }

    for (const v of message.transactions) {
      OutgoingTransferTx.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    if (message.tokenContract !== "") {
      writer.uint32(34).string(message.tokenContract);
    }

    if (message.cosmosBlockCreated !== BigInt(0)) {
      writer.uint32(40).uint64(message.cosmosBlockCreated);
    }

    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): OutgoingTxBatch {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOutgoingTxBatch();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.batchNonce = reader.uint64();
          break;

        case 2:
          message.batchTimeout = reader.uint64();
          break;

        case 3:
          message.transactions.push(
            OutgoingTransferTx.decode(reader, reader.uint32())
          );
          break;

        case 4:
          message.tokenContract = reader.string();
          break;

        case 5:
          message.cosmosBlockCreated = reader.uint64();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): OutgoingTxBatch {
    return {
      batchNonce: isSet(object.batchNonce)
        ? BigInt(object.batchNonce)
        : BigInt(0),
      batchTimeout: isSet(object.batchTimeout)
        ? BigInt(object.batchTimeout)
        : BigInt(0),
      transactions: Array.isArray(object?.transactions)
        ? object.transactions.map((e: any) => OutgoingTransferTx.fromJSON(e))
        : [],
      tokenContract: isSet(object.tokenContract)
        ? String(object.tokenContract)
        : "",
      cosmosBlockCreated: isSet(object.cosmosBlockCreated)
        ? BigInt(object.cosmosBlockCreated)
        : BigInt(0),
    };
  },

  toJSON(message: OutgoingTxBatch): unknown {
    const obj: any = {};
    message.batchNonce !== undefined &&
      (obj.batchNonce = (message.batchNonce || BigInt(0)).toString());
    message.batchTimeout !== undefined &&
      (obj.batchTimeout = (message.batchTimeout || BigInt(0)).toString());

    if (message.transactions) {
      obj.transactions = message.transactions.map((e) =>
        e ? OutgoingTransferTx.toJSON(e) : undefined
      );
    } else {
      obj.transactions = [];
    }

    message.tokenContract !== undefined &&
      (obj.tokenContract = message.tokenContract);
    message.cosmosBlockCreated !== undefined &&
      (obj.cosmosBlockCreated = (
        message.cosmosBlockCreated || BigInt(0)
      ).toString());
    return obj;
  },

  fromPartial(object: Partial<OutgoingTxBatch>): OutgoingTxBatch {
    const message = createBaseOutgoingTxBatch();
    message.batchNonce =
      object.batchNonce !== undefined && object.batchNonce !== null
        ? BigInt(object.batchNonce)
        : BigInt(0);
    message.batchTimeout =
      object.batchTimeout !== undefined && object.batchTimeout !== null
        ? BigInt(object.batchTimeout)
        : BigInt(0);
    message.transactions =
      object.transactions?.map((e) => OutgoingTransferTx.fromPartial(e)) || [];
    message.tokenContract = object.tokenContract ?? "";
    message.cosmosBlockCreated =
      object.cosmosBlockCreated !== undefined &&
      object.cosmosBlockCreated !== null
        ? BigInt(object.cosmosBlockCreated)
        : BigInt(0);
    return message;
  },
};

function createBaseOutgoingTransferTx(): OutgoingTransferTx {
  return {
    id: BigInt(0),
    sender: "",
    destAddress: "",
    erc20Token: undefined,
    erc20Fee: undefined,
  };
}

export const OutgoingTransferTx = {
  encode(
    message: OutgoingTransferTx,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }

    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }

    if (message.destAddress !== "") {
      writer.uint32(26).string(message.destAddress);
    }

    if (message.erc20Token !== undefined) {
      ERC20Token.encode(message.erc20Token, writer.uint32(34).fork()).ldelim();
    }

    if (message.erc20Fee !== undefined) {
      ERC20Token.encode(message.erc20Fee, writer.uint32(42).fork()).ldelim();
    }

    return writer;
  },

  decode(
    input: BinaryReader | Uint8Array,
    length?: number
  ): OutgoingTransferTx {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOutgoingTransferTx();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;

        case 2:
          message.sender = reader.string();
          break;

        case 3:
          message.destAddress = reader.string();
          break;

        case 4:
          message.erc20Token = ERC20Token.decode(reader, reader.uint32());
          break;

        case 5:
          message.erc20Fee = ERC20Token.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): OutgoingTransferTx {
    return {
      id: isSet(object.id) ? BigInt(object.id) : BigInt(0),
      sender: isSet(object.sender) ? String(object.sender) : "",
      destAddress: isSet(object.destAddress) ? String(object.destAddress) : "",
      erc20Token: isSet(object.erc20Token)
        ? ERC20Token.fromJSON(object.erc20Token)
        : undefined,
      erc20Fee: isSet(object.erc20Fee)
        ? ERC20Token.fromJSON(object.erc20Fee)
        : undefined,
    };
  },

  toJSON(message: OutgoingTransferTx): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
    message.sender !== undefined && (obj.sender = message.sender);
    message.destAddress !== undefined &&
      (obj.destAddress = message.destAddress);
    message.erc20Token !== undefined &&
      (obj.erc20Token = message.erc20Token
        ? ERC20Token.toJSON(message.erc20Token)
        : undefined);
    message.erc20Fee !== undefined &&
      (obj.erc20Fee = message.erc20Fee
        ? ERC20Token.toJSON(message.erc20Fee)
        : undefined);
    return obj;
  },

  fromPartial(object: Partial<OutgoingTransferTx>): OutgoingTransferTx {
    const message = createBaseOutgoingTransferTx();
    message.id =
      object.id !== undefined && object.id !== null
        ? BigInt(object.id)
        : BigInt(0);
    message.sender = object.sender ?? "";
    message.destAddress = object.destAddress ?? "";
    message.erc20Token =
      object.erc20Token !== undefined && object.erc20Token !== null
        ? ERC20Token.fromPartial(object.erc20Token)
        : undefined;
    message.erc20Fee =
      object.erc20Fee !== undefined && object.erc20Fee !== null
        ? ERC20Token.fromPartial(object.erc20Fee)
        : undefined;
    return message;
  },
};

function createBaseOutgoingLogicCall(): OutgoingLogicCall {
  return {
    transfers: [],
    fees: [],
    logicContractAddress: "",
    payload: new Uint8Array(),
    timeout: BigInt(0),
    invalidationId: new Uint8Array(),
    invalidationNonce: BigInt(0),
    cosmosBlockCreated: BigInt(0),
  };
}

export const OutgoingLogicCall = {
  encode(
    message: OutgoingLogicCall,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    for (const v of message.transfers) {
      ERC20Token.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.fees) {
      ERC20Token.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    if (message.logicContractAddress !== "") {
      writer.uint32(26).string(message.logicContractAddress);
    }

    if (message.payload.length !== 0) {
      writer.uint32(34).bytes(message.payload);
    }

    if (message.timeout !== BigInt(0)) {
      writer.uint32(40).uint64(message.timeout);
    }

    if (message.invalidationId.length !== 0) {
      writer.uint32(50).bytes(message.invalidationId);
    }

    if (message.invalidationNonce !== BigInt(0)) {
      writer.uint32(56).uint64(message.invalidationNonce);
    }

    if (message.cosmosBlockCreated !== BigInt(0)) {
      writer.uint32(64).uint64(message.cosmosBlockCreated);
    }

    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): OutgoingLogicCall {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOutgoingLogicCall();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.transfers.push(ERC20Token.decode(reader, reader.uint32()));
          break;

        case 2:
          message.fees.push(ERC20Token.decode(reader, reader.uint32()));
          break;

        case 3:
          message.logicContractAddress = reader.string();
          break;

        case 4:
          message.payload = reader.bytes();
          break;

        case 5:
          message.timeout = reader.uint64();
          break;

        case 6:
          message.invalidationId = reader.bytes();
          break;

        case 7:
          message.invalidationNonce = reader.uint64();
          break;

        case 8:
          message.cosmosBlockCreated = reader.uint64();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): OutgoingLogicCall {
    return {
      transfers: Array.isArray(object?.transfers)
        ? object.transfers.map((e: any) => ERC20Token.fromJSON(e))
        : [],
      fees: Array.isArray(object?.fees)
        ? object.fees.map((e: any) => ERC20Token.fromJSON(e))
        : [],
      logicContractAddress: isSet(object.logicContractAddress)
        ? String(object.logicContractAddress)
        : "",
      payload: isSet(object.payload)
        ? bytesFromBase64(object.payload)
        : new Uint8Array(),
      timeout: isSet(object.timeout) ? BigInt(object.timeout) : BigInt(0),
      invalidationId: isSet(object.invalidationId)
        ? bytesFromBase64(object.invalidationId)
        : new Uint8Array(),
      invalidationNonce: isSet(object.invalidationNonce)
        ? BigInt(object.invalidationNonce)
        : BigInt(0),
      cosmosBlockCreated: isSet(object.cosmosBlockCreated)
        ? BigInt(object.cosmosBlockCreated)
        : BigInt(0),
    };
  },

  toJSON(message: OutgoingLogicCall): unknown {
    const obj: any = {};

    if (message.transfers) {
      obj.transfers = message.transfers.map((e) =>
        e ? ERC20Token.toJSON(e) : undefined
      );
    } else {
      obj.transfers = [];
    }

    if (message.fees) {
      obj.fees = message.fees.map((e) =>
        e ? ERC20Token.toJSON(e) : undefined
      );
    } else {
      obj.fees = [];
    }

    message.logicContractAddress !== undefined &&
      (obj.logicContractAddress = message.logicContractAddress);
    message.payload !== undefined &&
      (obj.payload = base64FromBytes(
        message.payload !== undefined ? message.payload : new Uint8Array()
      ));
    message.timeout !== undefined &&
      (obj.timeout = (message.timeout || BigInt(0)).toString());
    message.invalidationId !== undefined &&
      (obj.invalidationId = base64FromBytes(
        message.invalidationId !== undefined
          ? message.invalidationId
          : new Uint8Array()
      ));
    message.invalidationNonce !== undefined &&
      (obj.invalidationNonce = (
        message.invalidationNonce || BigInt(0)
      ).toString());
    message.cosmosBlockCreated !== undefined &&
      (obj.cosmosBlockCreated = (
        message.cosmosBlockCreated || BigInt(0)
      ).toString());
    return obj;
  },

  fromPartial(object: Partial<OutgoingLogicCall>): OutgoingLogicCall {
    const message = createBaseOutgoingLogicCall();
    message.transfers =
      object.transfers?.map((e) => ERC20Token.fromPartial(e)) || [];
    message.fees = object.fees?.map((e) => ERC20Token.fromPartial(e)) || [];
    message.logicContractAddress = object.logicContractAddress ?? "";
    message.payload = object.payload ?? new Uint8Array();
    message.timeout =
      object.timeout !== undefined && object.timeout !== null
        ? BigInt(object.timeout)
        : BigInt(0);
    message.invalidationId = object.invalidationId ?? new Uint8Array();
    message.invalidationNonce =
      object.invalidationNonce !== undefined &&
      object.invalidationNonce !== null
        ? BigInt(object.invalidationNonce)
        : BigInt(0);
    message.cosmosBlockCreated =
      object.cosmosBlockCreated !== undefined &&
      object.cosmosBlockCreated !== null
        ? BigInt(object.cosmosBlockCreated)
        : BigInt(0);
    return message;
  },
};

function createBaseEventOutgoingBatchCanceled(): EventOutgoingBatchCanceled {
  return {
    bridgeContract: "",
    bridgeChainId: "",
    batchId: "",
    nonce: "",
  };
}

export const EventOutgoingBatchCanceled = {
  encode(
    message: EventOutgoingBatchCanceled,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    if (message.bridgeContract !== "") {
      writer.uint32(10).string(message.bridgeContract);
    }

    if (message.bridgeChainId !== "") {
      writer.uint32(18).string(message.bridgeChainId);
    }

    if (message.batchId !== "") {
      writer.uint32(26).string(message.batchId);
    }

    if (message.nonce !== "") {
      writer.uint32(34).string(message.nonce);
    }

    return writer;
  },

  decode(
    input: BinaryReader | Uint8Array,
    length?: number
  ): EventOutgoingBatchCanceled {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventOutgoingBatchCanceled();

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
          message.batchId = reader.string();
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

  fromJSON(object: any): EventOutgoingBatchCanceled {
    return {
      bridgeContract: isSet(object.bridgeContract)
        ? String(object.bridgeContract)
        : "",
      bridgeChainId: isSet(object.bridgeChainId)
        ? String(object.bridgeChainId)
        : "",
      batchId: isSet(object.batchId) ? String(object.batchId) : "",
      nonce: isSet(object.nonce) ? String(object.nonce) : "",
    };
  },

  toJSON(message: EventOutgoingBatchCanceled): unknown {
    const obj: any = {};
    message.bridgeContract !== undefined &&
      (obj.bridgeContract = message.bridgeContract);
    message.bridgeChainId !== undefined &&
      (obj.bridgeChainId = message.bridgeChainId);
    message.batchId !== undefined && (obj.batchId = message.batchId);
    message.nonce !== undefined && (obj.nonce = message.nonce);
    return obj;
  },

  fromPartial(
    object: Partial<EventOutgoingBatchCanceled>
  ): EventOutgoingBatchCanceled {
    const message = createBaseEventOutgoingBatchCanceled();
    message.bridgeContract = object.bridgeContract ?? "";
    message.bridgeChainId = object.bridgeChainId ?? "";
    message.batchId = object.batchId ?? "";
    message.nonce = object.nonce ?? "";
    return message;
  },
};

function createBaseEventOutgoingBatch(): EventOutgoingBatch {
  return {
    bridgeContract: "",
    bridgeChainId: "",
    batchId: "",
    nonce: "",
  };
}

export const EventOutgoingBatch = {
  encode(
    message: EventOutgoingBatch,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    if (message.bridgeContract !== "") {
      writer.uint32(10).string(message.bridgeContract);
    }

    if (message.bridgeChainId !== "") {
      writer.uint32(18).string(message.bridgeChainId);
    }

    if (message.batchId !== "") {
      writer.uint32(26).string(message.batchId);
    }

    if (message.nonce !== "") {
      writer.uint32(34).string(message.nonce);
    }

    return writer;
  },

  decode(
    input: BinaryReader | Uint8Array,
    length?: number
  ): EventOutgoingBatch {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventOutgoingBatch();

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
          message.batchId = reader.string();
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

  fromJSON(object: any): EventOutgoingBatch {
    return {
      bridgeContract: isSet(object.bridgeContract)
        ? String(object.bridgeContract)
        : "",
      bridgeChainId: isSet(object.bridgeChainId)
        ? String(object.bridgeChainId)
        : "",
      batchId: isSet(object.batchId) ? String(object.batchId) : "",
      nonce: isSet(object.nonce) ? String(object.nonce) : "",
    };
  },

  toJSON(message: EventOutgoingBatch): unknown {
    const obj: any = {};
    message.bridgeContract !== undefined &&
      (obj.bridgeContract = message.bridgeContract);
    message.bridgeChainId !== undefined &&
      (obj.bridgeChainId = message.bridgeChainId);
    message.batchId !== undefined && (obj.batchId = message.batchId);
    message.nonce !== undefined && (obj.nonce = message.nonce);
    return obj;
  },

  fromPartial(object: Partial<EventOutgoingBatch>): EventOutgoingBatch {
    const message = createBaseEventOutgoingBatch();
    message.bridgeContract = object.bridgeContract ?? "";
    message.bridgeChainId = object.bridgeChainId ?? "";
    message.batchId = object.batchId ?? "";
    message.nonce = object.nonce ?? "";
    return message;
  },
};
