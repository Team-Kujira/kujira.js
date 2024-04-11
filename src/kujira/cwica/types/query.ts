import { DeepPartial, Exact } from "cosmjs-types";
import { BinaryReader, BinaryWriter } from "cosmjs-types/binary";
import { Rpc, isSet } from "cosmjs-types/helpers";

/* eslint-disable */
export const protobufPackage = "kujira.cwica";
/** QueryInterchainAccountRequest is the request type for the Query/InterchainAccountAddress RPC */
export interface QueryInterchainAccountRequest {
  owner: string;
  connectionId: string;
  accountId: string;
}
/** QueryInterchainAccountResponse the response type for the Query/InterchainAccountAddress RPC */
export interface QueryInterchainAccountResponse {
  interchainAccountAddress: string;
}
function createBaseQueryInterchainAccountRequest(): QueryInterchainAccountRequest {
  return {
    owner: "",
    connectionId: "",
    accountId: "",
  };
}
export const QueryInterchainAccountRequest = {
  typeUrl: "/kujira.cwica.QueryInterchainAccountRequest",
  encode(
    message: QueryInterchainAccountRequest,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.connectionId !== "") {
      writer.uint32(18).string(message.connectionId);
    }
    if (message.accountId !== "") {
      writer.uint32(26).string(message.accountId);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number
  ): QueryInterchainAccountRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryInterchainAccountRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.connectionId = reader.string();
          break;
        case 3:
          message.accountId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryInterchainAccountRequest {
    const obj = createBaseQueryInterchainAccountRequest();
    if (isSet(object.owner)) obj.owner = String(object.owner);
    if (isSet(object.connectionId))
      obj.connectionId = String(object.connectionId);
    if (isSet(object.accountId)) obj.accountId = String(object.accountId);
    return obj;
  },
  toJSON(message: QueryInterchainAccountRequest): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.connectionId !== undefined &&
      (obj.connectionId = message.connectionId);
    message.accountId !== undefined && (obj.accountId = message.accountId);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryInterchainAccountRequest>, I>>(
    object: I
  ): QueryInterchainAccountRequest {
    const message = createBaseQueryInterchainAccountRequest();
    message.owner = object.owner ?? "";
    message.connectionId = object.connectionId ?? "";
    message.accountId = object.accountId ?? "";
    return message;
  },
};
function createBaseQueryInterchainAccountResponse(): QueryInterchainAccountResponse {
  return {
    interchainAccountAddress: "",
  };
}
export const QueryInterchainAccountResponse = {
  typeUrl: "/kujira.cwica.QueryInterchainAccountResponse",
  encode(
    message: QueryInterchainAccountResponse,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    if (message.interchainAccountAddress !== "") {
      writer.uint32(10).string(message.interchainAccountAddress);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number
  ): QueryInterchainAccountResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryInterchainAccountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.interchainAccountAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryInterchainAccountResponse {
    const obj = createBaseQueryInterchainAccountResponse();
    if (isSet(object.interchainAccountAddress))
      obj.interchainAccountAddress = String(object.interchainAccountAddress);
    return obj;
  },
  toJSON(message: QueryInterchainAccountResponse): unknown {
    const obj: any = {};
    message.interchainAccountAddress !== undefined &&
      (obj.interchainAccountAddress = message.interchainAccountAddress);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryInterchainAccountResponse>, I>>(
    object: I
  ): QueryInterchainAccountResponse {
    const message = createBaseQueryInterchainAccountResponse();
    message.interchainAccountAddress = object.interchainAccountAddress ?? "";
    return message;
  },
};
/** Query defines the gRPC querier service. */
export interface Query {
  /** QueryInterchainAccount returns the interchain account for given owner address on a given connection pair */
  InterchainAccount(
    request: QueryInterchainAccountRequest
  ): Promise<QueryInterchainAccountResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.InterchainAccount = this.InterchainAccount.bind(this);
  }
  InterchainAccount(
    request: QueryInterchainAccountRequest
  ): Promise<QueryInterchainAccountResponse> {
    const data = QueryInterchainAccountRequest.encode(request).finish();
    const promise = this.rpc.request(
      "kujira.cwica.Query",
      "InterchainAccount",
      data
    );
    return promise.then((data) =>
      QueryInterchainAccountResponse.decode(new BinaryReader(data))
    );
  }
}
