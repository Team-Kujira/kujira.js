/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Log, Params, TraceConfig } from "../../../ethermint/evm/v1/evm";
import {
  MsgEthereumTx,
  MsgEthereumTxResponse,
} from "../../../ethermint/evm/v1/tx";
import {
  base64FromBytes,
  bytesFromBase64,
  DeepPartial,
  fromJsonTimestamp,
  fromTimestamp,
  longToNumber,
  Rpc,
  toTimestamp,
} from "../../../../../../../types";
import {
  PageRequest,
  PageResponse,
} from "../../../../../../../types/cosmos/base/query/pagination";
import { Timestamp } from "../../../../../../../types/google/protobuf/timestamp";

export const protobufPackage = "ethermint.evm.v1";

/** QueryAccountRequest is the request type for the Query/Account RPC method. */
export interface QueryAccountRequest {
  /** address is the ethereum hex address to query the account for. */
  address: string;
}

/** QueryAccountResponse is the response type for the Query/Account RPC method. */
export interface QueryAccountResponse {
  /** balance is the balance of the EVM denomination. */
  balance: string;
  /** code hash is the hex-formatted code bytes from the EOA. */
  code_hash: string;
  /** nonce is the account's sequence number. */
  nonce: number;
}

/**
 * QueryCosmosAccountRequest is the request type for the Query/CosmosAccount RPC
 * method.
 */
export interface QueryCosmosAccountRequest {
  /** address is the ethereum hex address to query the account for. */
  address: string;
}

/**
 * QueryCosmosAccountResponse is the response type for the Query/CosmosAccount
 * RPC method.
 */
export interface QueryCosmosAccountResponse {
  /** cosmos_address is the cosmos address of the account. */
  cosmos_address: string;
  /** sequence is the account's sequence number. */
  sequence: number;
  /** account_number is the account numbert */
  account_number: number;
}

/**
 * QueryValidatorAccountRequest is the request type for the
 * Query/ValidatorAccount RPC method.
 */
export interface QueryValidatorAccountRequest {
  /** cons_address is the validator cons address to query the account for. */
  cons_address: string;
}

/**
 * QueryValidatorAccountResponse is the response type for the
 * Query/ValidatorAccount RPC method.
 */
export interface QueryValidatorAccountResponse {
  /** account_address is the cosmos address of the account in bech32 format. */
  account_address: string;
  /** sequence is the account's sequence number. */
  sequence: number;
  /** account_number is the account number */
  account_number: number;
}

/** QueryBalanceRequest is the request type for the Query/Balance RPC method. */
export interface QueryBalanceRequest {
  /** address is the ethereum hex address to query the balance for. */
  address: string;
}

/** QueryBalanceResponse is the response type for the Query/Balance RPC method. */
export interface QueryBalanceResponse {
  /** balance is the balance of the EVM denomination. */
  balance: string;
}

/** QueryStorageRequest is the request type for the Query/Storage RPC method. */
export interface QueryStorageRequest {
  /** / address is the ethereum hex address to query the storage state for. */
  address: string;
  /** key defines the key of the storage state */
  key: string;
}

/**
 * QueryStorageResponse is the response type for the Query/Storage RPC
 * method.
 */
export interface QueryStorageResponse {
  /** key defines the storage state value hash associated with the given key. */
  value: string;
}

/** QueryCodeRequest is the request type for the Query/Code RPC method. */
export interface QueryCodeRequest {
  /** address is the ethereum hex address to query the code for. */
  address: string;
}

/**
 * QueryCodeResponse is the response type for the Query/Code RPC
 * method.
 */
export interface QueryCodeResponse {
  /** code represents the code bytes from an ethereum address. */
  code: Uint8Array;
}

/** QueryTxLogsRequest is the request type for the Query/TxLogs RPC method. */
export interface QueryTxLogsRequest {
  /** hash is the ethereum transaction hex hash to query the logs for. */
  hash: string;
  /** pagination defines an optional pagination for the request. */
  pagination: PageRequest | undefined;
}

/** QueryTxLogs is the response type for the Query/TxLogs RPC method. */
export interface QueryTxLogsResponse {
  /** logs represents the ethereum logs generated from the given transaction. */
  logs: Log[];
  /** pagination defines the pagination in the response. */
  pagination: PageResponse | undefined;
}

/** QueryParamsRequest defines the request type for querying x/evm parameters. */
export interface QueryParamsRequest {}

/** QueryParamsResponse defines the response type for querying x/evm parameters. */
export interface QueryParamsResponse {
  /** params define the evm module parameters. */
  params: Params | undefined;
}

/** EthCallRequest defines EthCall request */
export interface EthCallRequest {
  /** same json format as the json rpc api. */
  args: Uint8Array;
  /** the default gas cap to be used */
  gas_cap: number;
}

/** EstimateGasResponse defines EstimateGas response */
export interface EstimateGasResponse {
  /** the estimated gas */
  gas: number;
}

/** QueryTraceTxRequest defines TraceTx request */
export interface QueryTraceTxRequest {
  /** msgEthereumTx for the requested transaction */
  msg: MsgEthereumTx | undefined;
  /** TraceConfig holds extra parameters to trace functions. */
  trace_config: TraceConfig | undefined;
  /**
   * the predecessor transactions included in the same block
   * need to be replayed first to get correct context for tracing.
   */
  predecessors: MsgEthereumTx[];
  /** block number of requested transaction */
  block_number: number;
  /** block hex hash of requested transaction */
  block_hash: string;
  /** block time of requested transaction */
  block_time: Date | undefined;
}

/** QueryTraceTxResponse defines TraceTx response */
export interface QueryTraceTxResponse {
  /** response serialized in bytes */
  data: Uint8Array;
}

/** QueryTraceBlockRequest defines TraceTx request */
export interface QueryTraceBlockRequest {
  /** txs messages in the block */
  txs: MsgEthereumTx[];
  /** TraceConfig holds extra parameters to trace functions. */
  trace_config: TraceConfig | undefined;
  /** block number */
  block_number: number;
  /** block hex hash */
  block_hash: string;
  /** block time */
  block_time: Date | undefined;
}

/** QueryTraceBlockResponse defines TraceBlock response */
export interface QueryTraceBlockResponse {
  data: Uint8Array;
}

/**
 * QueryBaseFeeRequest defines the request type for querying the EIP1559 base
 * fee.
 */
export interface QueryBaseFeeRequest {}

/** BaseFeeResponse returns the EIP1559 base fee. */
export interface QueryBaseFeeResponse {
  base_fee: string;
}

const baseQueryAccountRequest: object = { address: "" };

export const QueryAccountRequest = {
  encode(
    message: QueryAccountRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAccountRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAccountRequest } as QueryAccountRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAccountRequest {
    const message = { ...baseQueryAccountRequest } as QueryAccountRequest;
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    return message;
  },

  toJSON(message: QueryAccountRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAccountRequest>): QueryAccountRequest {
    const message = { ...baseQueryAccountRequest } as QueryAccountRequest;
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    return message;
  },
};

const baseQueryAccountResponse: object = {
  balance: "",
  code_hash: "",
  nonce: 0,
};

export const QueryAccountResponse = {
  encode(
    message: QueryAccountResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.balance !== "") {
      writer.uint32(10).string(message.balance);
    }
    if (message.code_hash !== "") {
      writer.uint32(18).string(message.code_hash);
    }
    if (message.nonce !== 0) {
      writer.uint32(24).uint64(message.nonce);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAccountResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAccountResponse } as QueryAccountResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.balance = reader.string();
          break;
        case 2:
          message.code_hash = reader.string();
          break;
        case 3:
          message.nonce = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAccountResponse {
    const message = { ...baseQueryAccountResponse } as QueryAccountResponse;
    if (object.balance !== undefined && object.balance !== null) {
      message.balance = String(object.balance);
    } else {
      message.balance = "";
    }
    if (object.code_hash !== undefined && object.code_hash !== null) {
      message.code_hash = String(object.code_hash);
    } else {
      message.code_hash = "";
    }
    if (object.nonce !== undefined && object.nonce !== null) {
      message.nonce = Number(object.nonce);
    } else {
      message.nonce = 0;
    }
    return message;
  },

  toJSON(message: QueryAccountResponse): unknown {
    const obj: any = {};
    message.balance !== undefined && (obj.balance = message.balance);
    message.code_hash !== undefined && (obj.code_hash = message.code_hash);
    message.nonce !== undefined && (obj.nonce = message.nonce);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAccountResponse>): QueryAccountResponse {
    const message = { ...baseQueryAccountResponse } as QueryAccountResponse;
    if (object.balance !== undefined && object.balance !== null) {
      message.balance = object.balance;
    } else {
      message.balance = "";
    }
    if (object.code_hash !== undefined && object.code_hash !== null) {
      message.code_hash = object.code_hash;
    } else {
      message.code_hash = "";
    }
    if (object.nonce !== undefined && object.nonce !== null) {
      message.nonce = object.nonce;
    } else {
      message.nonce = 0;
    }
    return message;
  },
};

const baseQueryCosmosAccountRequest: object = { address: "" };

export const QueryCosmosAccountRequest = {
  encode(
    message: QueryCosmosAccountRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryCosmosAccountRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryCosmosAccountRequest,
    } as QueryCosmosAccountRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCosmosAccountRequest {
    const message = {
      ...baseQueryCosmosAccountRequest,
    } as QueryCosmosAccountRequest;
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    return message;
  },

  toJSON(message: QueryCosmosAccountRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryCosmosAccountRequest>
  ): QueryCosmosAccountRequest {
    const message = {
      ...baseQueryCosmosAccountRequest,
    } as QueryCosmosAccountRequest;
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    return message;
  },
};

const baseQueryCosmosAccountResponse: object = {
  cosmos_address: "",
  sequence: 0,
  account_number: 0,
};

export const QueryCosmosAccountResponse = {
  encode(
    message: QueryCosmosAccountResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.cosmos_address !== "") {
      writer.uint32(10).string(message.cosmos_address);
    }
    if (message.sequence !== 0) {
      writer.uint32(16).uint64(message.sequence);
    }
    if (message.account_number !== 0) {
      writer.uint32(24).uint64(message.account_number);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryCosmosAccountResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryCosmosAccountResponse,
    } as QueryCosmosAccountResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cosmos_address = reader.string();
          break;
        case 2:
          message.sequence = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.account_number = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCosmosAccountResponse {
    const message = {
      ...baseQueryCosmosAccountResponse,
    } as QueryCosmosAccountResponse;
    if (object.cosmos_address !== undefined && object.cosmos_address !== null) {
      message.cosmos_address = String(object.cosmos_address);
    } else {
      message.cosmos_address = "";
    }
    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = Number(object.sequence);
    } else {
      message.sequence = 0;
    }
    if (object.account_number !== undefined && object.account_number !== null) {
      message.account_number = Number(object.account_number);
    } else {
      message.account_number = 0;
    }
    return message;
  },

  toJSON(message: QueryCosmosAccountResponse): unknown {
    const obj: any = {};
    message.cosmos_address !== undefined &&
      (obj.cosmos_address = message.cosmos_address);
    message.sequence !== undefined && (obj.sequence = message.sequence);
    message.account_number !== undefined &&
      (obj.account_number = message.account_number);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryCosmosAccountResponse>
  ): QueryCosmosAccountResponse {
    const message = {
      ...baseQueryCosmosAccountResponse,
    } as QueryCosmosAccountResponse;
    if (object.cosmos_address !== undefined && object.cosmos_address !== null) {
      message.cosmos_address = object.cosmos_address;
    } else {
      message.cosmos_address = "";
    }
    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = object.sequence;
    } else {
      message.sequence = 0;
    }
    if (object.account_number !== undefined && object.account_number !== null) {
      message.account_number = object.account_number;
    } else {
      message.account_number = 0;
    }
    return message;
  },
};

const baseQueryValidatorAccountRequest: object = { cons_address: "" };

export const QueryValidatorAccountRequest = {
  encode(
    message: QueryValidatorAccountRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.cons_address !== "") {
      writer.uint32(10).string(message.cons_address);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryValidatorAccountRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryValidatorAccountRequest,
    } as QueryValidatorAccountRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cons_address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryValidatorAccountRequest {
    const message = {
      ...baseQueryValidatorAccountRequest,
    } as QueryValidatorAccountRequest;
    if (object.cons_address !== undefined && object.cons_address !== null) {
      message.cons_address = String(object.cons_address);
    } else {
      message.cons_address = "";
    }
    return message;
  },

  toJSON(message: QueryValidatorAccountRequest): unknown {
    const obj: any = {};
    message.cons_address !== undefined &&
      (obj.cons_address = message.cons_address);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryValidatorAccountRequest>
  ): QueryValidatorAccountRequest {
    const message = {
      ...baseQueryValidatorAccountRequest,
    } as QueryValidatorAccountRequest;
    if (object.cons_address !== undefined && object.cons_address !== null) {
      message.cons_address = object.cons_address;
    } else {
      message.cons_address = "";
    }
    return message;
  },
};

const baseQueryValidatorAccountResponse: object = {
  account_address: "",
  sequence: 0,
  account_number: 0,
};

export const QueryValidatorAccountResponse = {
  encode(
    message: QueryValidatorAccountResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.account_address !== "") {
      writer.uint32(10).string(message.account_address);
    }
    if (message.sequence !== 0) {
      writer.uint32(16).uint64(message.sequence);
    }
    if (message.account_number !== 0) {
      writer.uint32(24).uint64(message.account_number);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryValidatorAccountResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryValidatorAccountResponse,
    } as QueryValidatorAccountResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account_address = reader.string();
          break;
        case 2:
          message.sequence = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.account_number = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryValidatorAccountResponse {
    const message = {
      ...baseQueryValidatorAccountResponse,
    } as QueryValidatorAccountResponse;
    if (
      object.account_address !== undefined &&
      object.account_address !== null
    ) {
      message.account_address = String(object.account_address);
    } else {
      message.account_address = "";
    }
    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = Number(object.sequence);
    } else {
      message.sequence = 0;
    }
    if (object.account_number !== undefined && object.account_number !== null) {
      message.account_number = Number(object.account_number);
    } else {
      message.account_number = 0;
    }
    return message;
  },

  toJSON(message: QueryValidatorAccountResponse): unknown {
    const obj: any = {};
    message.account_address !== undefined &&
      (obj.account_address = message.account_address);
    message.sequence !== undefined && (obj.sequence = message.sequence);
    message.account_number !== undefined &&
      (obj.account_number = message.account_number);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryValidatorAccountResponse>
  ): QueryValidatorAccountResponse {
    const message = {
      ...baseQueryValidatorAccountResponse,
    } as QueryValidatorAccountResponse;
    if (
      object.account_address !== undefined &&
      object.account_address !== null
    ) {
      message.account_address = object.account_address;
    } else {
      message.account_address = "";
    }
    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = object.sequence;
    } else {
      message.sequence = 0;
    }
    if (object.account_number !== undefined && object.account_number !== null) {
      message.account_number = object.account_number;
    } else {
      message.account_number = 0;
    }
    return message;
  },
};

const baseQueryBalanceRequest: object = { address: "" };

export const QueryBalanceRequest = {
  encode(
    message: QueryBalanceRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryBalanceRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryBalanceRequest } as QueryBalanceRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryBalanceRequest {
    const message = { ...baseQueryBalanceRequest } as QueryBalanceRequest;
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    return message;
  },

  toJSON(message: QueryBalanceRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryBalanceRequest>): QueryBalanceRequest {
    const message = { ...baseQueryBalanceRequest } as QueryBalanceRequest;
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    return message;
  },
};

const baseQueryBalanceResponse: object = { balance: "" };

export const QueryBalanceResponse = {
  encode(
    message: QueryBalanceResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.balance !== "") {
      writer.uint32(10).string(message.balance);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryBalanceResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryBalanceResponse } as QueryBalanceResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.balance = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryBalanceResponse {
    const message = { ...baseQueryBalanceResponse } as QueryBalanceResponse;
    if (object.balance !== undefined && object.balance !== null) {
      message.balance = String(object.balance);
    } else {
      message.balance = "";
    }
    return message;
  },

  toJSON(message: QueryBalanceResponse): unknown {
    const obj: any = {};
    message.balance !== undefined && (obj.balance = message.balance);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryBalanceResponse>): QueryBalanceResponse {
    const message = { ...baseQueryBalanceResponse } as QueryBalanceResponse;
    if (object.balance !== undefined && object.balance !== null) {
      message.balance = object.balance;
    } else {
      message.balance = "";
    }
    return message;
  },
};

const baseQueryStorageRequest: object = { address: "", key: "" };

export const QueryStorageRequest = {
  encode(
    message: QueryStorageRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.key !== "") {
      writer.uint32(18).string(message.key);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryStorageRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryStorageRequest } as QueryStorageRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.key = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryStorageRequest {
    const message = { ...baseQueryStorageRequest } as QueryStorageRequest;
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    } else {
      message.key = "";
    }
    return message;
  },

  toJSON(message: QueryStorageRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.key !== undefined && (obj.key = message.key);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryStorageRequest>): QueryStorageRequest {
    const message = { ...baseQueryStorageRequest } as QueryStorageRequest;
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = "";
    }
    return message;
  },
};

const baseQueryStorageResponse: object = { value: "" };

export const QueryStorageResponse = {
  encode(
    message: QueryStorageResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.value !== "") {
      writer.uint32(10).string(message.value);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryStorageResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryStorageResponse } as QueryStorageResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryStorageResponse {
    const message = { ...baseQueryStorageResponse } as QueryStorageResponse;
    if (object.value !== undefined && object.value !== null) {
      message.value = String(object.value);
    } else {
      message.value = "";
    }
    return message;
  },

  toJSON(message: QueryStorageResponse): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryStorageResponse>): QueryStorageResponse {
    const message = { ...baseQueryStorageResponse } as QueryStorageResponse;
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = "";
    }
    return message;
  },
};

const baseQueryCodeRequest: object = { address: "" };

export const QueryCodeRequest = {
  encode(message: QueryCodeRequest, writer: Writer = Writer.create()): Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryCodeRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryCodeRequest } as QueryCodeRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCodeRequest {
    const message = { ...baseQueryCodeRequest } as QueryCodeRequest;
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    return message;
  },

  toJSON(message: QueryCodeRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryCodeRequest>): QueryCodeRequest {
    const message = { ...baseQueryCodeRequest } as QueryCodeRequest;
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    return message;
  },
};

const baseQueryCodeResponse: object = {};

export const QueryCodeResponse = {
  encode(message: QueryCodeResponse, writer: Writer = Writer.create()): Writer {
    if (message.code.length !== 0) {
      writer.uint32(10).bytes(message.code);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryCodeResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryCodeResponse } as QueryCodeResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCodeResponse {
    const message = { ...baseQueryCodeResponse } as QueryCodeResponse;
    if (object.code !== undefined && object.code !== null) {
      message.code = bytesFromBase64(object.code);
    }
    return message;
  },

  toJSON(message: QueryCodeResponse): unknown {
    const obj: any = {};
    message.code !== undefined &&
      (obj.code = base64FromBytes(
        message.code !== undefined ? message.code : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(object: DeepPartial<QueryCodeResponse>): QueryCodeResponse {
    const message = { ...baseQueryCodeResponse } as QueryCodeResponse;
    if (object.code !== undefined && object.code !== null) {
      message.code = object.code;
    } else {
      message.code = new Uint8Array();
    }
    return message;
  },
};

const baseQueryTxLogsRequest: object = { hash: "" };

export const QueryTxLogsRequest = {
  encode(
    message: QueryTxLogsRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.hash !== "") {
      writer.uint32(10).string(message.hash);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryTxLogsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryTxLogsRequest } as QueryTxLogsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTxLogsRequest {
    const message = { ...baseQueryTxLogsRequest } as QueryTxLogsRequest;
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = String(object.hash);
    } else {
      message.hash = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryTxLogsRequest): unknown {
    const obj: any = {};
    message.hash !== undefined && (obj.hash = message.hash);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryTxLogsRequest>): QueryTxLogsRequest {
    const message = { ...baseQueryTxLogsRequest } as QueryTxLogsRequest;
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = object.hash;
    } else {
      message.hash = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryTxLogsResponse: object = {};

export const QueryTxLogsResponse = {
  encode(
    message: QueryTxLogsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.logs) {
      Log.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryTxLogsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryTxLogsResponse } as QueryTxLogsResponse;
    message.logs = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.logs.push(Log.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTxLogsResponse {
    const message = { ...baseQueryTxLogsResponse } as QueryTxLogsResponse;
    message.logs = [];
    if (object.logs !== undefined && object.logs !== null) {
      for (const e of object.logs) {
        message.logs.push(Log.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryTxLogsResponse): unknown {
    const obj: any = {};
    if (message.logs) {
      obj.logs = message.logs.map((e) => (e ? Log.toJSON(e) : undefined));
    } else {
      obj.logs = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryTxLogsResponse>): QueryTxLogsResponse {
    const message = { ...baseQueryTxLogsResponse } as QueryTxLogsResponse;
    message.logs = [];
    if (object.logs !== undefined && object.logs !== null) {
      for (const e of object.logs) {
        message.logs.push(Log.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
};

const baseEthCallRequest: object = { gas_cap: 0 };

export const EthCallRequest = {
  encode(message: EthCallRequest, writer: Writer = Writer.create()): Writer {
    if (message.args.length !== 0) {
      writer.uint32(10).bytes(message.args);
    }
    if (message.gas_cap !== 0) {
      writer.uint32(16).uint64(message.gas_cap);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): EthCallRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEthCallRequest } as EthCallRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.args = reader.bytes();
          break;
        case 2:
          message.gas_cap = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EthCallRequest {
    const message = { ...baseEthCallRequest } as EthCallRequest;
    if (object.args !== undefined && object.args !== null) {
      message.args = bytesFromBase64(object.args);
    }
    if (object.gas_cap !== undefined && object.gas_cap !== null) {
      message.gas_cap = Number(object.gas_cap);
    } else {
      message.gas_cap = 0;
    }
    return message;
  },

  toJSON(message: EthCallRequest): unknown {
    const obj: any = {};
    message.args !== undefined &&
      (obj.args = base64FromBytes(
        message.args !== undefined ? message.args : new Uint8Array()
      ));
    message.gas_cap !== undefined && (obj.gas_cap = message.gas_cap);
    return obj;
  },

  fromPartial(object: DeepPartial<EthCallRequest>): EthCallRequest {
    const message = { ...baseEthCallRequest } as EthCallRequest;
    if (object.args !== undefined && object.args !== null) {
      message.args = object.args;
    } else {
      message.args = new Uint8Array();
    }
    if (object.gas_cap !== undefined && object.gas_cap !== null) {
      message.gas_cap = object.gas_cap;
    } else {
      message.gas_cap = 0;
    }
    return message;
  },
};

const baseEstimateGasResponse: object = { gas: 0 };

export const EstimateGasResponse = {
  encode(
    message: EstimateGasResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.gas !== 0) {
      writer.uint32(8).uint64(message.gas);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): EstimateGasResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEstimateGasResponse } as EstimateGasResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gas = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EstimateGasResponse {
    const message = { ...baseEstimateGasResponse } as EstimateGasResponse;
    if (object.gas !== undefined && object.gas !== null) {
      message.gas = Number(object.gas);
    } else {
      message.gas = 0;
    }
    return message;
  },

  toJSON(message: EstimateGasResponse): unknown {
    const obj: any = {};
    message.gas !== undefined && (obj.gas = message.gas);
    return obj;
  },

  fromPartial(object: DeepPartial<EstimateGasResponse>): EstimateGasResponse {
    const message = { ...baseEstimateGasResponse } as EstimateGasResponse;
    if (object.gas !== undefined && object.gas !== null) {
      message.gas = object.gas;
    } else {
      message.gas = 0;
    }
    return message;
  },
};

const baseQueryTraceTxRequest: object = { block_number: 0, block_hash: "" };

export const QueryTraceTxRequest = {
  encode(
    message: QueryTraceTxRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.msg !== undefined) {
      MsgEthereumTx.encode(message.msg, writer.uint32(10).fork()).ldelim();
    }
    if (message.trace_config !== undefined) {
      TraceConfig.encode(
        message.trace_config,
        writer.uint32(26).fork()
      ).ldelim();
    }
    for (const v of message.predecessors) {
      MsgEthereumTx.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.block_number !== 0) {
      writer.uint32(40).int64(message.block_number);
    }
    if (message.block_hash !== "") {
      writer.uint32(50).string(message.block_hash);
    }
    if (message.block_time !== undefined) {
      Timestamp.encode(
        toTimestamp(message.block_time),
        writer.uint32(58).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryTraceTxRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryTraceTxRequest } as QueryTraceTxRequest;
    message.predecessors = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.msg = MsgEthereumTx.decode(reader, reader.uint32());
          break;
        case 3:
          message.trace_config = TraceConfig.decode(reader, reader.uint32());
          break;
        case 4:
          message.predecessors.push(
            MsgEthereumTx.decode(reader, reader.uint32())
          );
          break;
        case 5:
          message.block_number = longToNumber(reader.int64() as Long);
          break;
        case 6:
          message.block_hash = reader.string();
          break;
        case 7:
          message.block_time = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTraceTxRequest {
    const message = { ...baseQueryTraceTxRequest } as QueryTraceTxRequest;
    message.predecessors = [];
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = MsgEthereumTx.fromJSON(object.msg);
    } else {
      message.msg = undefined;
    }
    if (object.trace_config !== undefined && object.trace_config !== null) {
      message.trace_config = TraceConfig.fromJSON(object.trace_config);
    } else {
      message.trace_config = undefined;
    }
    if (object.predecessors !== undefined && object.predecessors !== null) {
      for (const e of object.predecessors) {
        message.predecessors.push(MsgEthereumTx.fromJSON(e));
      }
    }
    if (object.block_number !== undefined && object.block_number !== null) {
      message.block_number = Number(object.block_number);
    } else {
      message.block_number = 0;
    }
    if (object.block_hash !== undefined && object.block_hash !== null) {
      message.block_hash = String(object.block_hash);
    } else {
      message.block_hash = "";
    }
    if (object.block_time !== undefined && object.block_time !== null) {
      message.block_time = fromJsonTimestamp(object.block_time);
    } else {
      message.block_time = undefined;
    }
    return message;
  },

  toJSON(message: QueryTraceTxRequest): unknown {
    const obj: any = {};
    message.msg !== undefined &&
      (obj.msg = message.msg ? MsgEthereumTx.toJSON(message.msg) : undefined);
    message.trace_config !== undefined &&
      (obj.trace_config = message.trace_config
        ? TraceConfig.toJSON(message.trace_config)
        : undefined);
    if (message.predecessors) {
      obj.predecessors = message.predecessors.map((e) =>
        e ? MsgEthereumTx.toJSON(e) : undefined
      );
    } else {
      obj.predecessors = [];
    }
    message.block_number !== undefined &&
      (obj.block_number = message.block_number);
    message.block_hash !== undefined && (obj.block_hash = message.block_hash);
    message.block_time !== undefined &&
      (obj.block_time =
        message.block_time !== undefined
          ? message.block_time.toISOString()
          : null);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryTraceTxRequest>): QueryTraceTxRequest {
    const message = { ...baseQueryTraceTxRequest } as QueryTraceTxRequest;
    message.predecessors = [];
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = MsgEthereumTx.fromPartial(object.msg);
    } else {
      message.msg = undefined;
    }
    if (object.trace_config !== undefined && object.trace_config !== null) {
      message.trace_config = TraceConfig.fromPartial(object.trace_config);
    } else {
      message.trace_config = undefined;
    }
    if (object.predecessors !== undefined && object.predecessors !== null) {
      for (const e of object.predecessors) {
        message.predecessors.push(MsgEthereumTx.fromPartial(e));
      }
    }
    if (object.block_number !== undefined && object.block_number !== null) {
      message.block_number = object.block_number;
    } else {
      message.block_number = 0;
    }
    if (object.block_hash !== undefined && object.block_hash !== null) {
      message.block_hash = object.block_hash;
    } else {
      message.block_hash = "";
    }
    if (object.block_time !== undefined && object.block_time !== null) {
      message.block_time = object.block_time;
    } else {
      message.block_time = undefined;
    }
    return message;
  },
};

const baseQueryTraceTxResponse: object = {};

export const QueryTraceTxResponse = {
  encode(
    message: QueryTraceTxResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryTraceTxResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryTraceTxResponse } as QueryTraceTxResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTraceTxResponse {
    const message = { ...baseQueryTraceTxResponse } as QueryTraceTxResponse;
    if (object.data !== undefined && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    return message;
  },

  toJSON(message: QueryTraceTxResponse): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = base64FromBytes(
        message.data !== undefined ? message.data : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(object: DeepPartial<QueryTraceTxResponse>): QueryTraceTxResponse {
    const message = { ...baseQueryTraceTxResponse } as QueryTraceTxResponse;
    if (object.data !== undefined && object.data !== null) {
      message.data = object.data;
    } else {
      message.data = new Uint8Array();
    }
    return message;
  },
};

const baseQueryTraceBlockRequest: object = { block_number: 0, block_hash: "" };

export const QueryTraceBlockRequest = {
  encode(
    message: QueryTraceBlockRequest,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.txs) {
      MsgEthereumTx.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.trace_config !== undefined) {
      TraceConfig.encode(
        message.trace_config,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.block_number !== 0) {
      writer.uint32(40).int64(message.block_number);
    }
    if (message.block_hash !== "") {
      writer.uint32(50).string(message.block_hash);
    }
    if (message.block_time !== undefined) {
      Timestamp.encode(
        toTimestamp(message.block_time),
        writer.uint32(58).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryTraceBlockRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryTraceBlockRequest } as QueryTraceBlockRequest;
    message.txs = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txs.push(MsgEthereumTx.decode(reader, reader.uint32()));
          break;
        case 3:
          message.trace_config = TraceConfig.decode(reader, reader.uint32());
          break;
        case 5:
          message.block_number = longToNumber(reader.int64() as Long);
          break;
        case 6:
          message.block_hash = reader.string();
          break;
        case 7:
          message.block_time = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTraceBlockRequest {
    const message = { ...baseQueryTraceBlockRequest } as QueryTraceBlockRequest;
    message.txs = [];
    if (object.txs !== undefined && object.txs !== null) {
      for (const e of object.txs) {
        message.txs.push(MsgEthereumTx.fromJSON(e));
      }
    }
    if (object.trace_config !== undefined && object.trace_config !== null) {
      message.trace_config = TraceConfig.fromJSON(object.trace_config);
    } else {
      message.trace_config = undefined;
    }
    if (object.block_number !== undefined && object.block_number !== null) {
      message.block_number = Number(object.block_number);
    } else {
      message.block_number = 0;
    }
    if (object.block_hash !== undefined && object.block_hash !== null) {
      message.block_hash = String(object.block_hash);
    } else {
      message.block_hash = "";
    }
    if (object.block_time !== undefined && object.block_time !== null) {
      message.block_time = fromJsonTimestamp(object.block_time);
    } else {
      message.block_time = undefined;
    }
    return message;
  },

  toJSON(message: QueryTraceBlockRequest): unknown {
    const obj: any = {};
    if (message.txs) {
      obj.txs = message.txs.map((e) =>
        e ? MsgEthereumTx.toJSON(e) : undefined
      );
    } else {
      obj.txs = [];
    }
    message.trace_config !== undefined &&
      (obj.trace_config = message.trace_config
        ? TraceConfig.toJSON(message.trace_config)
        : undefined);
    message.block_number !== undefined &&
      (obj.block_number = message.block_number);
    message.block_hash !== undefined && (obj.block_hash = message.block_hash);
    message.block_time !== undefined &&
      (obj.block_time =
        message.block_time !== undefined
          ? message.block_time.toISOString()
          : null);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryTraceBlockRequest>
  ): QueryTraceBlockRequest {
    const message = { ...baseQueryTraceBlockRequest } as QueryTraceBlockRequest;
    message.txs = [];
    if (object.txs !== undefined && object.txs !== null) {
      for (const e of object.txs) {
        message.txs.push(MsgEthereumTx.fromPartial(e));
      }
    }
    if (object.trace_config !== undefined && object.trace_config !== null) {
      message.trace_config = TraceConfig.fromPartial(object.trace_config);
    } else {
      message.trace_config = undefined;
    }
    if (object.block_number !== undefined && object.block_number !== null) {
      message.block_number = object.block_number;
    } else {
      message.block_number = 0;
    }
    if (object.block_hash !== undefined && object.block_hash !== null) {
      message.block_hash = object.block_hash;
    } else {
      message.block_hash = "";
    }
    if (object.block_time !== undefined && object.block_time !== null) {
      message.block_time = object.block_time;
    } else {
      message.block_time = undefined;
    }
    return message;
  },
};

const baseQueryTraceBlockResponse: object = {};

export const QueryTraceBlockResponse = {
  encode(
    message: QueryTraceBlockResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryTraceBlockResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryTraceBlockResponse,
    } as QueryTraceBlockResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTraceBlockResponse {
    const message = {
      ...baseQueryTraceBlockResponse,
    } as QueryTraceBlockResponse;
    if (object.data !== undefined && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    return message;
  },

  toJSON(message: QueryTraceBlockResponse): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = base64FromBytes(
        message.data !== undefined ? message.data : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryTraceBlockResponse>
  ): QueryTraceBlockResponse {
    const message = {
      ...baseQueryTraceBlockResponse,
    } as QueryTraceBlockResponse;
    if (object.data !== undefined && object.data !== null) {
      message.data = object.data;
    } else {
      message.data = new Uint8Array();
    }
    return message;
  },
};

const baseQueryBaseFeeRequest: object = {};

export const QueryBaseFeeRequest = {
  encode(_: QueryBaseFeeRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryBaseFeeRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryBaseFeeRequest } as QueryBaseFeeRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryBaseFeeRequest {
    const message = { ...baseQueryBaseFeeRequest } as QueryBaseFeeRequest;
    return message;
  },

  toJSON(_: QueryBaseFeeRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryBaseFeeRequest>): QueryBaseFeeRequest {
    const message = { ...baseQueryBaseFeeRequest } as QueryBaseFeeRequest;
    return message;
  },
};

const baseQueryBaseFeeResponse: object = { base_fee: "" };

export const QueryBaseFeeResponse = {
  encode(
    message: QueryBaseFeeResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.base_fee !== "") {
      writer.uint32(10).string(message.base_fee);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryBaseFeeResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryBaseFeeResponse } as QueryBaseFeeResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.base_fee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryBaseFeeResponse {
    const message = { ...baseQueryBaseFeeResponse } as QueryBaseFeeResponse;
    if (object.base_fee !== undefined && object.base_fee !== null) {
      message.base_fee = String(object.base_fee);
    } else {
      message.base_fee = "";
    }
    return message;
  },

  toJSON(message: QueryBaseFeeResponse): unknown {
    const obj: any = {};
    message.base_fee !== undefined && (obj.base_fee = message.base_fee);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryBaseFeeResponse>): QueryBaseFeeResponse {
    const message = { ...baseQueryBaseFeeResponse } as QueryBaseFeeResponse;
    if (object.base_fee !== undefined && object.base_fee !== null) {
      message.base_fee = object.base_fee;
    } else {
      message.base_fee = "";
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Account queries an Ethereum account. */
  Account(request: QueryAccountRequest): Promise<QueryAccountResponse>;
  /** CosmosAccount queries an Ethereum account's Cosmos Address. */
  CosmosAccount(
    request: QueryCosmosAccountRequest
  ): Promise<QueryCosmosAccountResponse>;
  /**
   * ValidatorAccount queries an Ethereum account's from a validator consensus
   * Address.
   */
  ValidatorAccount(
    request: QueryValidatorAccountRequest
  ): Promise<QueryValidatorAccountResponse>;
  /**
   * Balance queries the balance of a the EVM denomination for a single
   * EthAccount.
   */
  Balance(request: QueryBalanceRequest): Promise<QueryBalanceResponse>;
  /** Storage queries the balance of all coins for a single account. */
  Storage(request: QueryStorageRequest): Promise<QueryStorageResponse>;
  /** Code queries the balance of all coins for a single account. */
  Code(request: QueryCodeRequest): Promise<QueryCodeResponse>;
  /** Params queries the parameters of x/evm module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** EthCall implements the `eth_call` rpc api */
  EthCall(request: EthCallRequest): Promise<MsgEthereumTxResponse>;
  /** EstimateGas implements the `eth_estimateGas` rpc api */
  EstimateGas(request: EthCallRequest): Promise<EstimateGasResponse>;
  /** TraceTx implements the `debug_traceTransaction` rpc api */
  TraceTx(request: QueryTraceTxRequest): Promise<QueryTraceTxResponse>;
  /** TraceBlock implements the `debug_traceBlockByNumber` and `debug_traceBlockByHash` rpc api */
  TraceBlock(request: QueryTraceBlockRequest): Promise<QueryTraceBlockResponse>;
  /**
   * BaseFee queries the base fee of the parent block of the current block,
   * it's similar to feemarket module's method, but also checks london hardfork status.
   */
  BaseFee(request: QueryBaseFeeRequest): Promise<QueryBaseFeeResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Account(request: QueryAccountRequest): Promise<QueryAccountResponse> {
    const data = QueryAccountRequest.encode(request).finish();
    const promise = this.rpc.request("ethermint.evm.v1.Query", "Account", data);
    return promise.then((data) =>
      QueryAccountResponse.decode(new Reader(data))
    );
  }

  CosmosAccount(
    request: QueryCosmosAccountRequest
  ): Promise<QueryCosmosAccountResponse> {
    const data = QueryCosmosAccountRequest.encode(request).finish();
    const promise = this.rpc.request(
      "ethermint.evm.v1.Query",
      "CosmosAccount",
      data
    );
    return promise.then((data) =>
      QueryCosmosAccountResponse.decode(new Reader(data))
    );
  }

  ValidatorAccount(
    request: QueryValidatorAccountRequest
  ): Promise<QueryValidatorAccountResponse> {
    const data = QueryValidatorAccountRequest.encode(request).finish();
    const promise = this.rpc.request(
      "ethermint.evm.v1.Query",
      "ValidatorAccount",
      data
    );
    return promise.then((data) =>
      QueryValidatorAccountResponse.decode(new Reader(data))
    );
  }

  Balance(request: QueryBalanceRequest): Promise<QueryBalanceResponse> {
    const data = QueryBalanceRequest.encode(request).finish();
    const promise = this.rpc.request("ethermint.evm.v1.Query", "Balance", data);
    return promise.then((data) =>
      QueryBalanceResponse.decode(new Reader(data))
    );
  }

  Storage(request: QueryStorageRequest): Promise<QueryStorageResponse> {
    const data = QueryStorageRequest.encode(request).finish();
    const promise = this.rpc.request("ethermint.evm.v1.Query", "Storage", data);
    return promise.then((data) =>
      QueryStorageResponse.decode(new Reader(data))
    );
  }

  Code(request: QueryCodeRequest): Promise<QueryCodeResponse> {
    const data = QueryCodeRequest.encode(request).finish();
    const promise = this.rpc.request("ethermint.evm.v1.Query", "Code", data);
    return promise.then((data) => QueryCodeResponse.decode(new Reader(data)));
  }

  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("ethermint.evm.v1.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }

  EthCall(request: EthCallRequest): Promise<MsgEthereumTxResponse> {
    const data = EthCallRequest.encode(request).finish();
    const promise = this.rpc.request("ethermint.evm.v1.Query", "EthCall", data);
    return promise.then((data) =>
      MsgEthereumTxResponse.decode(new Reader(data))
    );
  }

  EstimateGas(request: EthCallRequest): Promise<EstimateGasResponse> {
    const data = EthCallRequest.encode(request).finish();
    const promise = this.rpc.request(
      "ethermint.evm.v1.Query",
      "EstimateGas",
      data
    );
    return promise.then((data) => EstimateGasResponse.decode(new Reader(data)));
  }

  TraceTx(request: QueryTraceTxRequest): Promise<QueryTraceTxResponse> {
    const data = QueryTraceTxRequest.encode(request).finish();
    const promise = this.rpc.request("ethermint.evm.v1.Query", "TraceTx", data);
    return promise.then((data) =>
      QueryTraceTxResponse.decode(new Reader(data))
    );
  }

  TraceBlock(
    request: QueryTraceBlockRequest
  ): Promise<QueryTraceBlockResponse> {
    const data = QueryTraceBlockRequest.encode(request).finish();
    const promise = this.rpc.request(
      "ethermint.evm.v1.Query",
      "TraceBlock",
      data
    );
    return promise.then((data) =>
      QueryTraceBlockResponse.decode(new Reader(data))
    );
  }

  BaseFee(request: QueryBaseFeeRequest): Promise<QueryBaseFeeResponse> {
    const data = QueryBaseFeeRequest.encode(request).finish();
    const promise = this.rpc.request("ethermint.evm.v1.Query", "BaseFee", data);
    return promise.then((data) =>
      QueryBaseFeeResponse.decode(new Reader(data))
    );
  }
}
