/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { DeepPartial, longToNumber, Rpc } from "../../../../types";
import { Params } from "./feemarket";

export const protobufPackage = "ethermint.feemarket.v1";

/** QueryParamsRequest defines the request type for querying x/evm parameters. */
export interface QueryParamsRequest {}

/** QueryParamsResponse defines the response type for querying x/evm parameters. */
export interface QueryParamsResponse {
  /** params define the evm module parameters. */
  params: Params | undefined;
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

/**
 * QueryBlockGasRequest defines the request type for querying the EIP1559 base
 * fee.
 */
export interface QueryBlockGasRequest {}

/** QueryBlockGasResponse returns block gas used for a given height. */
export interface QueryBlockGasResponse {
  gas: number;
}

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

const baseQueryBlockGasRequest: object = {};

export const QueryBlockGasRequest = {
  encode(_: QueryBlockGasRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryBlockGasRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryBlockGasRequest } as QueryBlockGasRequest;
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

  fromJSON(_: any): QueryBlockGasRequest {
    const message = { ...baseQueryBlockGasRequest } as QueryBlockGasRequest;
    return message;
  },

  toJSON(_: QueryBlockGasRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryBlockGasRequest>): QueryBlockGasRequest {
    const message = { ...baseQueryBlockGasRequest } as QueryBlockGasRequest;
    return message;
  },
};

const baseQueryBlockGasResponse: object = { gas: 0 };

export const QueryBlockGasResponse = {
  encode(
    message: QueryBlockGasResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.gas !== 0) {
      writer.uint32(8).int64(message.gas);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryBlockGasResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryBlockGasResponse } as QueryBlockGasResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gas = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryBlockGasResponse {
    const message = { ...baseQueryBlockGasResponse } as QueryBlockGasResponse;
    if (object.gas !== undefined && object.gas !== null) {
      message.gas = Number(object.gas);
    } else {
      message.gas = 0;
    }
    return message;
  },

  toJSON(message: QueryBlockGasResponse): unknown {
    const obj: any = {};
    message.gas !== undefined && (obj.gas = message.gas);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryBlockGasResponse>
  ): QueryBlockGasResponse {
    const message = { ...baseQueryBlockGasResponse } as QueryBlockGasResponse;
    if (object.gas !== undefined && object.gas !== null) {
      message.gas = object.gas;
    } else {
      message.gas = 0;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Params queries the parameters of x/feemarket module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** BaseFee queries the base fee of the parent block of the current block. */
  BaseFee(request: QueryBaseFeeRequest): Promise<QueryBaseFeeResponse>;
  /** BlockGas queries the gas used at a given block height */
  BlockGas(request: QueryBlockGasRequest): Promise<QueryBlockGasResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "ethermint.feemarket.v1.Query",
      "Params",
      data
    );
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }

  BaseFee(request: QueryBaseFeeRequest): Promise<QueryBaseFeeResponse> {
    const data = QueryBaseFeeRequest.encode(request).finish();
    const promise = this.rpc.request(
      "ethermint.feemarket.v1.Query",
      "BaseFee",
      data
    );
    return promise.then((data) =>
      QueryBaseFeeResponse.decode(new Reader(data))
    );
  }

  BlockGas(request: QueryBlockGasRequest): Promise<QueryBlockGasResponse> {
    const data = QueryBlockGasRequest.encode(request).finish();
    const promise = this.rpc.request(
      "ethermint.feemarket.v1.Query",
      "BlockGas",
      data
    );
    return promise.then((data) =>
      QueryBlockGasResponse.decode(new Reader(data))
    );
  }
}
