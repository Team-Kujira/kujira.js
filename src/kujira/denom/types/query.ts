/* eslint-disable */
import { DeepPartial } from "cosmjs-types";
import { BinaryReader, BinaryWriter } from "cosmjs-types/binary";
import { DenomAuthorityMetadata } from "./authorityMetadata";
import { Params } from "./params";

export const protobufPackage = "kujira.denom";

/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params defines the parameters of the module. */
  params: Params | undefined;
}

export interface QueryDenomAuthorityMetadataRequest {
  denom: string;
}

export interface QueryDenomAuthorityMetadataResponse {
  authority_metadata: DenomAuthorityMetadata | undefined;
}

export interface QueryDenomsFromCreatorRequest {
  creator: string;
}

export interface QueryDenomsFromCreatorResponse {
  denoms: string[];
}

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
  encode(
    _: QueryParamsRequest,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    return writer;
  },

  decode(
    input: BinaryReader | Uint8Array,
    length?: number
  ): QueryParamsRequest {
    const reader =
      input instanceof Uint8Array ? new BinaryReader(input) : input;
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
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: BinaryReader | Uint8Array,
    length?: number
  ): QueryParamsResponse {
    const reader =
      input instanceof Uint8Array ? new BinaryReader(input) : input;
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

const baseQueryDenomAuthorityMetadataRequest: object = { denom: "" };

export const QueryDenomAuthorityMetadataRequest = {
  encode(
    message: QueryDenomAuthorityMetadataRequest,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },

  decode(
    input: BinaryReader | Uint8Array,
    length?: number
  ): QueryDenomAuthorityMetadataRequest {
    const reader =
      input instanceof Uint8Array ? new BinaryReader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryDenomAuthorityMetadataRequest,
    } as QueryDenomAuthorityMetadataRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDenomAuthorityMetadataRequest {
    const message = {
      ...baseQueryDenomAuthorityMetadataRequest,
    } as QueryDenomAuthorityMetadataRequest;
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = String(object.denom);
    } else {
      message.denom = "";
    }
    return message;
  },

  toJSON(message: QueryDenomAuthorityMetadataRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryDenomAuthorityMetadataRequest>
  ): QueryDenomAuthorityMetadataRequest {
    const message = {
      ...baseQueryDenomAuthorityMetadataRequest,
    } as QueryDenomAuthorityMetadataRequest;
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    } else {
      message.denom = "";
    }
    return message;
  },
};

const baseQueryDenomAuthorityMetadataResponse: object = {};

export const QueryDenomAuthorityMetadataResponse = {
  encode(
    message: QueryDenomAuthorityMetadataResponse,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    if (message.authority_metadata !== undefined) {
      DenomAuthorityMetadata.encode(
        message.authority_metadata,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: BinaryReader | Uint8Array,
    length?: number
  ): QueryDenomAuthorityMetadataResponse {
    const reader =
      input instanceof Uint8Array ? new BinaryReader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryDenomAuthorityMetadataResponse,
    } as QueryDenomAuthorityMetadataResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority_metadata = DenomAuthorityMetadata.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDenomAuthorityMetadataResponse {
    const message = {
      ...baseQueryDenomAuthorityMetadataResponse,
    } as QueryDenomAuthorityMetadataResponse;
    if (
      object.authority_metadata !== undefined &&
      object.authority_metadata !== null
    ) {
      message.authority_metadata = DenomAuthorityMetadata.fromJSON(
        object.authority_metadata
      );
    } else {
      message.authority_metadata = undefined;
    }
    return message;
  },

  toJSON(message: QueryDenomAuthorityMetadataResponse): unknown {
    const obj: any = {};
    message.authority_metadata !== undefined &&
      (obj.authority_metadata = message.authority_metadata
        ? DenomAuthorityMetadata.toJSON(message.authority_metadata)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryDenomAuthorityMetadataResponse>
  ): QueryDenomAuthorityMetadataResponse {
    const message = {
      ...baseQueryDenomAuthorityMetadataResponse,
    } as QueryDenomAuthorityMetadataResponse;
    if (
      object.authority_metadata !== undefined &&
      object.authority_metadata !== null
    ) {
      message.authority_metadata = DenomAuthorityMetadata.fromPartial(
        object.authority_metadata
      );
    } else {
      message.authority_metadata = undefined;
    }
    return message;
  },
};

const baseQueryDenomsFromCreatorRequest: object = { creator: "" };

export const QueryDenomsFromCreatorRequest = {
  encode(
    message: QueryDenomsFromCreatorRequest,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    return writer;
  },

  decode(
    input: BinaryReader | Uint8Array,
    length?: number
  ): QueryDenomsFromCreatorRequest {
    const reader =
      input instanceof Uint8Array ? new BinaryReader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryDenomsFromCreatorRequest,
    } as QueryDenomsFromCreatorRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDenomsFromCreatorRequest {
    const message = {
      ...baseQueryDenomsFromCreatorRequest,
    } as QueryDenomsFromCreatorRequest;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    return message;
  },

  toJSON(message: QueryDenomsFromCreatorRequest): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryDenomsFromCreatorRequest>
  ): QueryDenomsFromCreatorRequest {
    const message = {
      ...baseQueryDenomsFromCreatorRequest,
    } as QueryDenomsFromCreatorRequest;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    return message;
  },
};

const baseQueryDenomsFromCreatorResponse: object = { denoms: "" };

export const QueryDenomsFromCreatorResponse = {
  encode(
    message: QueryDenomsFromCreatorResponse,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    for (const v of message.denoms) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(
    input: BinaryReader | Uint8Array,
    length?: number
  ): QueryDenomsFromCreatorResponse {
    const reader =
      input instanceof Uint8Array ? new BinaryReader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryDenomsFromCreatorResponse,
    } as QueryDenomsFromCreatorResponse;
    message.denoms = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denoms.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDenomsFromCreatorResponse {
    const message = {
      ...baseQueryDenomsFromCreatorResponse,
    } as QueryDenomsFromCreatorResponse;
    message.denoms = [];
    if (object.denoms !== undefined && object.denoms !== null) {
      for (const e of object.denoms) {
        message.denoms.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: QueryDenomsFromCreatorResponse): unknown {
    const obj: any = {};
    if (message.denoms) {
      obj.denoms = message.denoms.map((e) => e);
    } else {
      obj.denoms = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryDenomsFromCreatorResponse>
  ): QueryDenomsFromCreatorResponse {
    const message = {
      ...baseQueryDenomsFromCreatorResponse,
    } as QueryDenomsFromCreatorResponse;
    message.denoms = [];
    if (object.denoms !== undefined && object.denoms !== null) {
      for (const e of object.denoms) {
        message.denoms.push(e);
      }
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Params returns the total set of minting parameters. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  DenomAuthorityMetadata(
    request: QueryDenomAuthorityMetadataRequest
  ): Promise<QueryDenomAuthorityMetadataResponse>;
  DenomsFromCreator(
    request: QueryDenomsFromCreatorRequest
  ): Promise<QueryDenomsFromCreatorResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  async Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("kujira.denom.Query", "Params", data);
    const data_1 = await promise;
    return QueryParamsResponse.decode(new BinaryReader(data_1));
  }

  async DenomAuthorityMetadata(
    request: QueryDenomAuthorityMetadataRequest
  ): Promise<QueryDenomAuthorityMetadataResponse> {
    const data = QueryDenomAuthorityMetadataRequest.encode(request).finish();
    const promise = this.rpc.request(
      "kujira.denom.Query",
      "DenomAuthorityMetadata",
      data
    );
    const data_1 = await promise;
    return QueryDenomAuthorityMetadataResponse.decode(new BinaryReader(data_1));
  }

  async DenomsFromCreator(
    request: QueryDenomsFromCreatorRequest
  ): Promise<QueryDenomsFromCreatorResponse> {
    const data = QueryDenomsFromCreatorRequest.encode(request).finish();
    const promise = this.rpc.request(
      "kujira.denom.Query",
      "DenomsFromCreator",
      data
    );
    const data_1 = await promise;
    return QueryDenomsFromCreatorResponse.decode(new BinaryReader(data_1));
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}
