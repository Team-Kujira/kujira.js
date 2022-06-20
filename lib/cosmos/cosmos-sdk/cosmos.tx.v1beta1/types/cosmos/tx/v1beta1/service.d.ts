import { Reader, Writer } from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Tx } from "../../../cosmos/tx/v1beta1/tx";
import { TxResponse, GasInfo, Result } from "../../../cosmos/base/abci/v1beta1/abci";
import { BlockID } from "../../../tendermint/types/types";
import { Block } from "../../../tendermint/types/block";
export declare const protobufPackage = "cosmos.tx.v1beta1";
/** OrderBy defines the sorting order */
export declare enum OrderBy {
    /** ORDER_BY_UNSPECIFIED - ORDER_BY_UNSPECIFIED specifies an unknown sorting order. OrderBy defaults to ASC in this case. */
    ORDER_BY_UNSPECIFIED = 0,
    /** ORDER_BY_ASC - ORDER_BY_ASC defines ascending order */
    ORDER_BY_ASC = 1,
    /** ORDER_BY_DESC - ORDER_BY_DESC defines descending order */
    ORDER_BY_DESC = 2,
    UNRECOGNIZED = -1
}
export declare function orderByFromJSON(object: any): OrderBy;
export declare function orderByToJSON(object: OrderBy): string;
/** BroadcastMode specifies the broadcast mode for the TxService.Broadcast RPC method. */
export declare enum BroadcastMode {
    /** BROADCAST_MODE_UNSPECIFIED - zero-value for mode ordering */
    BROADCAST_MODE_UNSPECIFIED = 0,
    /**
     * BROADCAST_MODE_BLOCK - BROADCAST_MODE_BLOCK defines a tx broadcasting mode where the client waits for
     * the tx to be committed in a block.
     */
    BROADCAST_MODE_BLOCK = 1,
    /**
     * BROADCAST_MODE_SYNC - BROADCAST_MODE_SYNC defines a tx broadcasting mode where the client waits for
     * a CheckTx execution response only.
     */
    BROADCAST_MODE_SYNC = 2,
    /**
     * BROADCAST_MODE_ASYNC - BROADCAST_MODE_ASYNC defines a tx broadcasting mode where the client returns
     * immediately.
     */
    BROADCAST_MODE_ASYNC = 3,
    UNRECOGNIZED = -1
}
export declare function broadcastModeFromJSON(object: any): BroadcastMode;
export declare function broadcastModeToJSON(object: BroadcastMode): string;
/**
 * GetTxsEventRequest is the request type for the Service.TxsByEvents
 * RPC method.
 */
export interface GetTxsEventRequest {
    /** events is the list of transaction event type. */
    events: string[];
    /** pagination defines a pagination for the request. */
    pagination: PageRequest | undefined;
    order_by: OrderBy;
}
/**
 * GetTxsEventResponse is the response type for the Service.TxsByEvents
 * RPC method.
 */
export interface GetTxsEventResponse {
    /** txs is the list of queried transactions. */
    txs: Tx[];
    /** tx_responses is the list of queried TxResponses. */
    tx_responses: TxResponse[];
    /** pagination defines a pagination for the response. */
    pagination: PageResponse | undefined;
}
/**
 * BroadcastTxRequest is the request type for the Service.BroadcastTxRequest
 * RPC method.
 */
export interface BroadcastTxRequest {
    /** tx_bytes is the raw transaction. */
    tx_bytes: Uint8Array;
    mode: BroadcastMode;
}
/**
 * BroadcastTxResponse is the response type for the
 * Service.BroadcastTx method.
 */
export interface BroadcastTxResponse {
    /** tx_response is the queried TxResponses. */
    tx_response: TxResponse | undefined;
}
/**
 * SimulateRequest is the request type for the Service.Simulate
 * RPC method.
 */
export interface SimulateRequest {
    /**
     * tx is the transaction to simulate.
     * Deprecated. Send raw tx bytes instead.
     *
     * @deprecated
     */
    tx: Tx | undefined;
    /**
     * tx_bytes is the raw transaction.
     *
     * Since: cosmos-sdk 0.43
     */
    tx_bytes: Uint8Array;
}
/**
 * SimulateResponse is the response type for the
 * Service.SimulateRPC method.
 */
export interface SimulateResponse {
    /** gas_info is the information about gas used in the simulation. */
    gas_info: GasInfo | undefined;
    /** result is the result of the simulation. */
    result: Result | undefined;
}
/**
 * GetTxRequest is the request type for the Service.GetTx
 * RPC method.
 */
export interface GetTxRequest {
    /** hash is the tx hash to query, encoded as a hex string. */
    hash: string;
}
/** GetTxResponse is the response type for the Service.GetTx method. */
export interface GetTxResponse {
    /** tx is the queried transaction. */
    tx: Tx | undefined;
    /** tx_response is the queried TxResponses. */
    tx_response: TxResponse | undefined;
}
/**
 * GetBlockWithTxsRequest is the request type for the Service.GetBlockWithTxs
 * RPC method.
 *
 * Since: cosmos-sdk 0.45.2
 */
export interface GetBlockWithTxsRequest {
    /** height is the height of the block to query. */
    height: number;
    /** pagination defines a pagination for the request. */
    pagination: PageRequest | undefined;
}
/**
 * GetBlockWithTxsResponse is the response type for the Service.GetBlockWithTxs method.
 *
 * Since: cosmos-sdk 0.45.2
 */
export interface GetBlockWithTxsResponse {
    /** txs are the transactions in the block. */
    txs: Tx[];
    block_id: BlockID | undefined;
    block: Block | undefined;
    /** pagination defines a pagination for the response. */
    pagination: PageResponse | undefined;
}
export declare const GetTxsEventRequest: {
    encode(message: GetTxsEventRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): GetTxsEventRequest;
    fromJSON(object: any): GetTxsEventRequest;
    toJSON(message: GetTxsEventRequest): unknown;
    fromPartial(object: DeepPartial<GetTxsEventRequest>): GetTxsEventRequest;
};
export declare const GetTxsEventResponse: {
    encode(message: GetTxsEventResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): GetTxsEventResponse;
    fromJSON(object: any): GetTxsEventResponse;
    toJSON(message: GetTxsEventResponse): unknown;
    fromPartial(object: DeepPartial<GetTxsEventResponse>): GetTxsEventResponse;
};
export declare const BroadcastTxRequest: {
    encode(message: BroadcastTxRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): BroadcastTxRequest;
    fromJSON(object: any): BroadcastTxRequest;
    toJSON(message: BroadcastTxRequest): unknown;
    fromPartial(object: DeepPartial<BroadcastTxRequest>): BroadcastTxRequest;
};
export declare const BroadcastTxResponse: {
    encode(message: BroadcastTxResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): BroadcastTxResponse;
    fromJSON(object: any): BroadcastTxResponse;
    toJSON(message: BroadcastTxResponse): unknown;
    fromPartial(object: DeepPartial<BroadcastTxResponse>): BroadcastTxResponse;
};
export declare const SimulateRequest: {
    encode(message: SimulateRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): SimulateRequest;
    fromJSON(object: any): SimulateRequest;
    toJSON(message: SimulateRequest): unknown;
    fromPartial(object: DeepPartial<SimulateRequest>): SimulateRequest;
};
export declare const SimulateResponse: {
    encode(message: SimulateResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): SimulateResponse;
    fromJSON(object: any): SimulateResponse;
    toJSON(message: SimulateResponse): unknown;
    fromPartial(object: DeepPartial<SimulateResponse>): SimulateResponse;
};
export declare const GetTxRequest: {
    encode(message: GetTxRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): GetTxRequest;
    fromJSON(object: any): GetTxRequest;
    toJSON(message: GetTxRequest): unknown;
    fromPartial(object: DeepPartial<GetTxRequest>): GetTxRequest;
};
export declare const GetTxResponse: {
    encode(message: GetTxResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): GetTxResponse;
    fromJSON(object: any): GetTxResponse;
    toJSON(message: GetTxResponse): unknown;
    fromPartial(object: DeepPartial<GetTxResponse>): GetTxResponse;
};
export declare const GetBlockWithTxsRequest: {
    encode(message: GetBlockWithTxsRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): GetBlockWithTxsRequest;
    fromJSON(object: any): GetBlockWithTxsRequest;
    toJSON(message: GetBlockWithTxsRequest): unknown;
    fromPartial(object: DeepPartial<GetBlockWithTxsRequest>): GetBlockWithTxsRequest;
};
export declare const GetBlockWithTxsResponse: {
    encode(message: GetBlockWithTxsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): GetBlockWithTxsResponse;
    fromJSON(object: any): GetBlockWithTxsResponse;
    toJSON(message: GetBlockWithTxsResponse): unknown;
    fromPartial(object: DeepPartial<GetBlockWithTxsResponse>): GetBlockWithTxsResponse;
};
/** Service defines a gRPC service for interacting with transactions. */
export interface Service {
    /** Simulate simulates executing a transaction for estimating gas usage. */
    Simulate(request: SimulateRequest): Promise<SimulateResponse>;
    /** GetTx fetches a tx by hash. */
    GetTx(request: GetTxRequest): Promise<GetTxResponse>;
    /** BroadcastTx broadcast transaction. */
    BroadcastTx(request: BroadcastTxRequest): Promise<BroadcastTxResponse>;
    /** GetTxsEvent fetches txs by event. */
    GetTxsEvent(request: GetTxsEventRequest): Promise<GetTxsEventResponse>;
    /**
     * GetBlockWithTxs fetches a block with decoded txs.
     *
     * Since: cosmos-sdk 0.45.2
     */
    GetBlockWithTxs(request: GetBlockWithTxsRequest): Promise<GetBlockWithTxsResponse>;
}
export declare class ServiceClientImpl implements Service {
    private readonly rpc;
    constructor(rpc: Rpc);
    Simulate(request: SimulateRequest): Promise<SimulateResponse>;
    GetTx(request: GetTxRequest): Promise<GetTxResponse>;
    BroadcastTx(request: BroadcastTxRequest): Promise<BroadcastTxResponse>;
    GetTxsEvent(request: GetTxsEventRequest): Promise<GetTxsEventResponse>;
    GetBlockWithTxs(request: GetBlockWithTxsRequest): Promise<GetBlockWithTxsResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
