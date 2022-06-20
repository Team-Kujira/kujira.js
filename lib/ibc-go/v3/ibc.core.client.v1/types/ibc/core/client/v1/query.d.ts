import { Reader, Writer } from "protobufjs/minimal";
import { Any } from "../../../../google/protobuf/any";
import { Height, IdentifiedClientState, ConsensusStateWithHeight, Params } from "../../../../ibc/core/client/v1/client";
import { PageRequest, PageResponse } from "../../../../cosmos/base/query/v1beta1/pagination";
export declare const protobufPackage = "ibc.core.client.v1";
/**
 * QueryClientStateRequest is the request type for the Query/ClientState RPC
 * method
 */
export interface QueryClientStateRequest {
    /** client state unique identifier */
    client_id: string;
}
/**
 * QueryClientStateResponse is the response type for the Query/ClientState RPC
 * method. Besides the client state, it includes a proof and the height from
 * which the proof was retrieved.
 */
export interface QueryClientStateResponse {
    /** client state associated with the request identifier */
    client_state: Any | undefined;
    /** merkle proof of existence */
    proof: Uint8Array;
    /** height at which the proof was retrieved */
    proof_height: Height | undefined;
}
/**
 * QueryClientStatesRequest is the request type for the Query/ClientStates RPC
 * method
 */
export interface QueryClientStatesRequest {
    /** pagination request */
    pagination: PageRequest | undefined;
}
/**
 * QueryClientStatesResponse is the response type for the Query/ClientStates RPC
 * method.
 */
export interface QueryClientStatesResponse {
    /** list of stored ClientStates of the chain. */
    client_states: IdentifiedClientState[];
    /** pagination response */
    pagination: PageResponse | undefined;
}
/**
 * QueryConsensusStateRequest is the request type for the Query/ConsensusState
 * RPC method. Besides the consensus state, it includes a proof and the height
 * from which the proof was retrieved.
 */
export interface QueryConsensusStateRequest {
    /** client identifier */
    client_id: string;
    /** consensus state revision number */
    revision_number: number;
    /** consensus state revision height */
    revision_height: number;
    /**
     * latest_height overrrides the height field and queries the latest stored
     * ConsensusState
     */
    latest_height: boolean;
}
/**
 * QueryConsensusStateResponse is the response type for the Query/ConsensusState
 * RPC method
 */
export interface QueryConsensusStateResponse {
    /** consensus state associated with the client identifier at the given height */
    consensus_state: Any | undefined;
    /** merkle proof of existence */
    proof: Uint8Array;
    /** height at which the proof was retrieved */
    proof_height: Height | undefined;
}
/**
 * QueryConsensusStatesRequest is the request type for the Query/ConsensusStates
 * RPC method.
 */
export interface QueryConsensusStatesRequest {
    /** client identifier */
    client_id: string;
    /** pagination request */
    pagination: PageRequest | undefined;
}
/**
 * QueryConsensusStatesResponse is the response type for the
 * Query/ConsensusStates RPC method
 */
export interface QueryConsensusStatesResponse {
    /** consensus states associated with the identifier */
    consensus_states: ConsensusStateWithHeight[];
    /** pagination response */
    pagination: PageResponse | undefined;
}
/**
 * QueryClientStatusRequest is the request type for the Query/ClientStatus RPC
 * method
 */
export interface QueryClientStatusRequest {
    /** client unique identifier */
    client_id: string;
}
/**
 * QueryClientStatusResponse is the response type for the Query/ClientStatus RPC
 * method. It returns the current status of the IBC client.
 */
export interface QueryClientStatusResponse {
    status: string;
}
/**
 * QueryClientParamsRequest is the request type for the Query/ClientParams RPC
 * method.
 */
export interface QueryClientParamsRequest {
}
/**
 * QueryClientParamsResponse is the response type for the Query/ClientParams RPC
 * method.
 */
export interface QueryClientParamsResponse {
    /** params defines the parameters of the module. */
    params: Params | undefined;
}
/**
 * QueryUpgradedClientStateRequest is the request type for the
 * Query/UpgradedClientState RPC method
 */
export interface QueryUpgradedClientStateRequest {
}
/**
 * QueryUpgradedClientStateResponse is the response type for the
 * Query/UpgradedClientState RPC method.
 */
export interface QueryUpgradedClientStateResponse {
    /** client state associated with the request identifier */
    upgraded_client_state: Any | undefined;
}
/**
 * QueryUpgradedConsensusStateRequest is the request type for the
 * Query/UpgradedConsensusState RPC method
 */
export interface QueryUpgradedConsensusStateRequest {
}
/**
 * QueryUpgradedConsensusStateResponse is the response type for the
 * Query/UpgradedConsensusState RPC method.
 */
export interface QueryUpgradedConsensusStateResponse {
    /** Consensus state associated with the request identifier */
    upgraded_consensus_state: Any | undefined;
}
export declare const QueryClientStateRequest: {
    encode(message: QueryClientStateRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): QueryClientStateRequest;
    fromJSON(object: any): QueryClientStateRequest;
    toJSON(message: QueryClientStateRequest): unknown;
    fromPartial(object: DeepPartial<QueryClientStateRequest>): QueryClientStateRequest;
};
export declare const QueryClientStateResponse: {
    encode(message: QueryClientStateResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): QueryClientStateResponse;
    fromJSON(object: any): QueryClientStateResponse;
    toJSON(message: QueryClientStateResponse): unknown;
    fromPartial(object: DeepPartial<QueryClientStateResponse>): QueryClientStateResponse;
};
export declare const QueryClientStatesRequest: {
    encode(message: QueryClientStatesRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): QueryClientStatesRequest;
    fromJSON(object: any): QueryClientStatesRequest;
    toJSON(message: QueryClientStatesRequest): unknown;
    fromPartial(object: DeepPartial<QueryClientStatesRequest>): QueryClientStatesRequest;
};
export declare const QueryClientStatesResponse: {
    encode(message: QueryClientStatesResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): QueryClientStatesResponse;
    fromJSON(object: any): QueryClientStatesResponse;
    toJSON(message: QueryClientStatesResponse): unknown;
    fromPartial(object: DeepPartial<QueryClientStatesResponse>): QueryClientStatesResponse;
};
export declare const QueryConsensusStateRequest: {
    encode(message: QueryConsensusStateRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): QueryConsensusStateRequest;
    fromJSON(object: any): QueryConsensusStateRequest;
    toJSON(message: QueryConsensusStateRequest): unknown;
    fromPartial(object: DeepPartial<QueryConsensusStateRequest>): QueryConsensusStateRequest;
};
export declare const QueryConsensusStateResponse: {
    encode(message: QueryConsensusStateResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): QueryConsensusStateResponse;
    fromJSON(object: any): QueryConsensusStateResponse;
    toJSON(message: QueryConsensusStateResponse): unknown;
    fromPartial(object: DeepPartial<QueryConsensusStateResponse>): QueryConsensusStateResponse;
};
export declare const QueryConsensusStatesRequest: {
    encode(message: QueryConsensusStatesRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): QueryConsensusStatesRequest;
    fromJSON(object: any): QueryConsensusStatesRequest;
    toJSON(message: QueryConsensusStatesRequest): unknown;
    fromPartial(object: DeepPartial<QueryConsensusStatesRequest>): QueryConsensusStatesRequest;
};
export declare const QueryConsensusStatesResponse: {
    encode(message: QueryConsensusStatesResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): QueryConsensusStatesResponse;
    fromJSON(object: any): QueryConsensusStatesResponse;
    toJSON(message: QueryConsensusStatesResponse): unknown;
    fromPartial(object: DeepPartial<QueryConsensusStatesResponse>): QueryConsensusStatesResponse;
};
export declare const QueryClientStatusRequest: {
    encode(message: QueryClientStatusRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): QueryClientStatusRequest;
    fromJSON(object: any): QueryClientStatusRequest;
    toJSON(message: QueryClientStatusRequest): unknown;
    fromPartial(object: DeepPartial<QueryClientStatusRequest>): QueryClientStatusRequest;
};
export declare const QueryClientStatusResponse: {
    encode(message: QueryClientStatusResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): QueryClientStatusResponse;
    fromJSON(object: any): QueryClientStatusResponse;
    toJSON(message: QueryClientStatusResponse): unknown;
    fromPartial(object: DeepPartial<QueryClientStatusResponse>): QueryClientStatusResponse;
};
export declare const QueryClientParamsRequest: {
    encode(_: QueryClientParamsRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): QueryClientParamsRequest;
    fromJSON(_: any): QueryClientParamsRequest;
    toJSON(_: QueryClientParamsRequest): unknown;
    fromPartial(_: DeepPartial<QueryClientParamsRequest>): QueryClientParamsRequest;
};
export declare const QueryClientParamsResponse: {
    encode(message: QueryClientParamsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): QueryClientParamsResponse;
    fromJSON(object: any): QueryClientParamsResponse;
    toJSON(message: QueryClientParamsResponse): unknown;
    fromPartial(object: DeepPartial<QueryClientParamsResponse>): QueryClientParamsResponse;
};
export declare const QueryUpgradedClientStateRequest: {
    encode(_: QueryUpgradedClientStateRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): QueryUpgradedClientStateRequest;
    fromJSON(_: any): QueryUpgradedClientStateRequest;
    toJSON(_: QueryUpgradedClientStateRequest): unknown;
    fromPartial(_: DeepPartial<QueryUpgradedClientStateRequest>): QueryUpgradedClientStateRequest;
};
export declare const QueryUpgradedClientStateResponse: {
    encode(message: QueryUpgradedClientStateResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): QueryUpgradedClientStateResponse;
    fromJSON(object: any): QueryUpgradedClientStateResponse;
    toJSON(message: QueryUpgradedClientStateResponse): unknown;
    fromPartial(object: DeepPartial<QueryUpgradedClientStateResponse>): QueryUpgradedClientStateResponse;
};
export declare const QueryUpgradedConsensusStateRequest: {
    encode(_: QueryUpgradedConsensusStateRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): QueryUpgradedConsensusStateRequest;
    fromJSON(_: any): QueryUpgradedConsensusStateRequest;
    toJSON(_: QueryUpgradedConsensusStateRequest): unknown;
    fromPartial(_: DeepPartial<QueryUpgradedConsensusStateRequest>): QueryUpgradedConsensusStateRequest;
};
export declare const QueryUpgradedConsensusStateResponse: {
    encode(message: QueryUpgradedConsensusStateResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): QueryUpgradedConsensusStateResponse;
    fromJSON(object: any): QueryUpgradedConsensusStateResponse;
    toJSON(message: QueryUpgradedConsensusStateResponse): unknown;
    fromPartial(object: DeepPartial<QueryUpgradedConsensusStateResponse>): QueryUpgradedConsensusStateResponse;
};
/** Query provides defines the gRPC querier service */
export interface Query {
    /** ClientState queries an IBC light client. */
    ClientState(request: QueryClientStateRequest): Promise<QueryClientStateResponse>;
    /** ClientStates queries all the IBC light clients of a chain. */
    ClientStates(request: QueryClientStatesRequest): Promise<QueryClientStatesResponse>;
    /**
     * ConsensusState queries a consensus state associated with a client state at
     * a given height.
     */
    ConsensusState(request: QueryConsensusStateRequest): Promise<QueryConsensusStateResponse>;
    /**
     * ConsensusStates queries all the consensus state associated with a given
     * client.
     */
    ConsensusStates(request: QueryConsensusStatesRequest): Promise<QueryConsensusStatesResponse>;
    /** Status queries the status of an IBC client. */
    ClientStatus(request: QueryClientStatusRequest): Promise<QueryClientStatusResponse>;
    /** ClientParams queries all parameters of the ibc client. */
    ClientParams(request: QueryClientParamsRequest): Promise<QueryClientParamsResponse>;
    /** UpgradedClientState queries an Upgraded IBC light client. */
    UpgradedClientState(request: QueryUpgradedClientStateRequest): Promise<QueryUpgradedClientStateResponse>;
    /** UpgradedConsensusState queries an Upgraded IBC consensus state. */
    UpgradedConsensusState(request: QueryUpgradedConsensusStateRequest): Promise<QueryUpgradedConsensusStateResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    ClientState(request: QueryClientStateRequest): Promise<QueryClientStateResponse>;
    ClientStates(request: QueryClientStatesRequest): Promise<QueryClientStatesResponse>;
    ConsensusState(request: QueryConsensusStateRequest): Promise<QueryConsensusStateResponse>;
    ConsensusStates(request: QueryConsensusStatesRequest): Promise<QueryConsensusStatesResponse>;
    ClientStatus(request: QueryClientStatusRequest): Promise<QueryClientStatusResponse>;
    ClientParams(request: QueryClientParamsRequest): Promise<QueryClientParamsResponse>;
    UpgradedClientState(request: QueryUpgradedClientStateRequest): Promise<QueryUpgradedClientStateResponse>;
    UpgradedConsensusState(request: QueryUpgradedConsensusStateRequest): Promise<QueryUpgradedConsensusStateResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
