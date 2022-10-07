import { Reader, Writer } from "protobufjs/minimal";
import { Rpc } from "../../../../types";
import { Params } from "./feemarket";
export declare const protobufPackage = "ethermint.feemarket.v1";
/** QueryParamsRequest defines the request type for querying x/evm parameters. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse defines the response type for querying x/evm parameters. */
export interface QueryParamsResponse {
    /** params define the evm module parameters. */
    params: Params | undefined;
}
/**
 * QueryBaseFeeRequest defines the request type for querying the EIP1559 base
 * fee.
 */
export interface QueryBaseFeeRequest {
}
/** BaseFeeResponse returns the EIP1559 base fee. */
export interface QueryBaseFeeResponse {
    base_fee: string;
}
/**
 * QueryBlockGasRequest defines the request type for querying the EIP1559 base
 * fee.
 */
export interface QueryBlockGasRequest {
}
/** QueryBlockGasResponse returns block gas used for a given height. */
export interface QueryBlockGasResponse {
    gas: number;
}
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): unknown;
    fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse;
};
export declare const QueryBaseFeeRequest: {
    encode(_: QueryBaseFeeRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryBaseFeeRequest;
    fromJSON(_: any): QueryBaseFeeRequest;
    toJSON(_: QueryBaseFeeRequest): unknown;
    fromPartial(_: DeepPartial<QueryBaseFeeRequest>): QueryBaseFeeRequest;
};
export declare const QueryBaseFeeResponse: {
    encode(message: QueryBaseFeeResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryBaseFeeResponse;
    fromJSON(object: any): QueryBaseFeeResponse;
    toJSON(message: QueryBaseFeeResponse): unknown;
    fromPartial(object: DeepPartial<QueryBaseFeeResponse>): QueryBaseFeeResponse;
};
export declare const QueryBlockGasRequest: {
    encode(_: QueryBlockGasRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryBlockGasRequest;
    fromJSON(_: any): QueryBlockGasRequest;
    toJSON(_: QueryBlockGasRequest): unknown;
    fromPartial(_: DeepPartial<QueryBlockGasRequest>): QueryBlockGasRequest;
};
export declare const QueryBlockGasResponse: {
    encode(message: QueryBlockGasResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryBlockGasResponse;
    fromJSON(object: any): QueryBlockGasResponse;
    toJSON(message: QueryBlockGasResponse): unknown;
    fromPartial(object: DeepPartial<QueryBlockGasResponse>): QueryBlockGasResponse;
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
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    BaseFee(request: QueryBaseFeeRequest): Promise<QueryBaseFeeResponse>;
    BlockGas(request: QueryBlockGasRequest): Promise<QueryBlockGasResponse>;
}
