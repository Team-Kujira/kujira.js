/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import Long from "long";

import { Params } from "./params";
import { Hook } from "./hook";

import { DeepPartial } from "cosmjs-types/cosmos/staking/v1beta1/tx";
import {
  PageRequest,
  PageResponse,
} from "cosmjs-types/cosmos/base/query/v1beta1/pagination";

export const protobufPackage = "kujira.scheduler";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetHookRequest {
  id: number;
}

export interface QueryGetHookResponse {
  Hook: Hook | undefined;
}

export interface QueryAllHookRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllHookResponse {
  Hook: Hook[];
  pagination: PageResponse | undefined;
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

const baseQueryGetHookRequest: object = { id: 0 };

export const QueryGetHookRequest = {
  encode(
    message: QueryGetHookRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetHookRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetHookRequest } as QueryGetHookRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = (reader.uint64() as Long).toNumber();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetHookRequest {
    const message = { ...baseQueryGetHookRequest } as QueryGetHookRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryGetHookRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetHookRequest>): QueryGetHookRequest {
    const message = { ...baseQueryGetHookRequest } as QueryGetHookRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryGetHookResponse: object = {};

export const QueryGetHookResponse = {
  encode(
    message: QueryGetHookResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.Hook !== undefined) {
      Hook.encode(message.Hook, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetHookResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetHookResponse } as QueryGetHookResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Hook = Hook.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetHookResponse {
    const message = { ...baseQueryGetHookResponse } as QueryGetHookResponse;
    if (object.Hook !== undefined && object.Hook !== null) {
      message.Hook = Hook.fromJSON(object.Hook);
    } else {
      message.Hook = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetHookResponse): unknown {
    const obj: any = {};
    message.Hook !== undefined &&
      (obj.Hook = message.Hook ? Hook.toJSON(message.Hook) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetHookResponse>): QueryGetHookResponse {
    const message = { ...baseQueryGetHookResponse } as QueryGetHookResponse;
    if (object.Hook !== undefined && object.Hook !== null) {
      message.Hook = Hook.fromPartial(object.Hook);
    } else {
      message.Hook = undefined;
    }
    return message;
  },
};

const baseQueryAllHookRequest: object = {};

export const QueryAllHookRequest = {
  encode(
    message: QueryAllHookRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllHookRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllHookRequest } as QueryAllHookRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllHookRequest {
    const message = { ...baseQueryAllHookRequest } as QueryAllHookRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllHookRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllHookRequest>): QueryAllHookRequest {
    const message = { ...baseQueryAllHookRequest } as QueryAllHookRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllHookResponse: object = {};

export const QueryAllHookResponse = {
  encode(
    message: QueryAllHookResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.Hook) {
      Hook.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllHookResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllHookResponse } as QueryAllHookResponse;
    message.Hook = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Hook.push(Hook.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllHookResponse {
    const message = { ...baseQueryAllHookResponse } as QueryAllHookResponse;
    message.Hook = [];
    if (object.Hook !== undefined && object.Hook !== null) {
      for (const e of object.Hook) {
        message.Hook.push(Hook.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllHookResponse): unknown {
    const obj: any = {};
    if (message.Hook) {
      obj.Hook = message.Hook.map((e) => (e ? Hook.toJSON(e) : undefined));
    } else {
      obj.Hook = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllHookResponse>): QueryAllHookResponse {
    const message = { ...baseQueryAllHookResponse } as QueryAllHookResponse;
    message.Hook = [];
    if (object.Hook !== undefined && object.Hook !== null) {
      for (const e of object.Hook) {
        message.Hook.push(Hook.fromPartial(e));
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

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a Hook by id. */
  Hook(request: QueryGetHookRequest): Promise<QueryGetHookResponse>;
  /** Queries a list of Hook items. */
  HookAll(request: QueryAllHookRequest): Promise<QueryAllHookResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("kujira.scheduler.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }

  Hook(request: QueryGetHookRequest): Promise<QueryGetHookResponse> {
    const data = QueryGetHookRequest.encode(request).finish();
    const promise = this.rpc.request("kujira.scheduler.Query", "Hook", data);
    return promise.then((data) =>
      QueryGetHookResponse.decode(new Reader(data))
    );
  }

  HookAll(request: QueryAllHookRequest): Promise<QueryAllHookResponse> {
    const data = QueryAllHookRequest.encode(request).finish();
    const promise = this.rpc.request("kujira.scheduler.Query", "HookAll", data);
    return promise.then((data) =>
      QueryAllHookResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}
