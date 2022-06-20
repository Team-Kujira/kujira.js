import { Reader, Writer } from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Any } from "../../../google/protobuf/any";
import { Params } from "../../../cosmos/auth/v1beta1/auth";
export declare const protobufPackage = "cosmos.auth.v1beta1";
/**
 * QueryAccountsRequest is the request type for the Query/Accounts RPC method.
 *
 * Since: cosmos-sdk 0.43
 */
export interface QueryAccountsRequest {
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest | undefined;
}
/**
 * QueryAccountsResponse is the response type for the Query/Accounts RPC method.
 *
 * Since: cosmos-sdk 0.43
 */
export interface QueryAccountsResponse {
    /** accounts are the existing accounts */
    accounts: Any[];
    /** pagination defines the pagination in the response. */
    pagination: PageResponse | undefined;
}
/** QueryAccountRequest is the request type for the Query/Account RPC method. */
export interface QueryAccountRequest {
    /** address defines the address to query for. */
    address: string;
}
/** QueryAccountResponse is the response type for the Query/Account RPC method. */
export interface QueryAccountResponse {
    /** account defines the account of the corresponding address. */
    account: Any | undefined;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params defines the parameters of the module. */
    params: Params | undefined;
}
export declare const QueryAccountsRequest: {
    encode(message: QueryAccountsRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): QueryAccountsRequest;
    fromJSON(object: any): QueryAccountsRequest;
    toJSON(message: QueryAccountsRequest): unknown;
    fromPartial(object: DeepPartial<QueryAccountsRequest>): QueryAccountsRequest;
};
export declare const QueryAccountsResponse: {
    encode(message: QueryAccountsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): QueryAccountsResponse;
    fromJSON(object: any): QueryAccountsResponse;
    toJSON(message: QueryAccountsResponse): unknown;
    fromPartial(object: DeepPartial<QueryAccountsResponse>): QueryAccountsResponse;
};
export declare const QueryAccountRequest: {
    encode(message: QueryAccountRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): QueryAccountRequest;
    fromJSON(object: any): QueryAccountRequest;
    toJSON(message: QueryAccountRequest): unknown;
    fromPartial(object: DeepPartial<QueryAccountRequest>): QueryAccountRequest;
};
export declare const QueryAccountResponse: {
    encode(message: QueryAccountResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): QueryAccountResponse;
    fromJSON(object: any): QueryAccountResponse;
    toJSON(message: QueryAccountResponse): unknown;
    fromPartial(object: DeepPartial<QueryAccountResponse>): QueryAccountResponse;
};
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): unknown;
    fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /**
     * Accounts returns all the existing accounts
     *
     * Since: cosmos-sdk 0.43
     */
    Accounts(request: QueryAccountsRequest): Promise<QueryAccountsResponse>;
    /** Account returns account details based on address. */
    Account(request: QueryAccountRequest): Promise<QueryAccountResponse>;
    /** Params queries all parameters. */
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Accounts(request: QueryAccountsRequest): Promise<QueryAccountsResponse>;
    Account(request: QueryAccountRequest): Promise<QueryAccountResponse>;
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
