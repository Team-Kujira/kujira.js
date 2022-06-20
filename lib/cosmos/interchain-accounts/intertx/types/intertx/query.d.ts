import { Reader, Writer } from "protobufjs/minimal";
export declare const protobufPackage = "intertx";
/** QueryInterchainAccountFromAddressRequest is the request type for the Query/InterchainAccountAddress RPC */
export interface QueryInterchainAccountFromAddressRequest {
    owner: string;
    connection_id: string;
}
/** QueryInterchainAccountFromAddressResponse the response type for the Query/InterchainAccountAddress RPC */
export interface QueryInterchainAccountFromAddressResponse {
    interchain_account_address: string;
}
export declare const QueryInterchainAccountFromAddressRequest: {
    encode(message: QueryInterchainAccountFromAddressRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): QueryInterchainAccountFromAddressRequest;
    fromJSON(object: any): QueryInterchainAccountFromAddressRequest;
    toJSON(message: QueryInterchainAccountFromAddressRequest): unknown;
    fromPartial(object: DeepPartial<QueryInterchainAccountFromAddressRequest>): QueryInterchainAccountFromAddressRequest;
};
export declare const QueryInterchainAccountFromAddressResponse: {
    encode(message: QueryInterchainAccountFromAddressResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): QueryInterchainAccountFromAddressResponse;
    fromJSON(object: any): QueryInterchainAccountFromAddressResponse;
    toJSON(message: QueryInterchainAccountFromAddressResponse): unknown;
    fromPartial(object: DeepPartial<QueryInterchainAccountFromAddressResponse>): QueryInterchainAccountFromAddressResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** QueryInterchainAccountFromAddress returns the interchain account for given owner address on a given connection pair */
    InterchainAccountFromAddress(request: QueryInterchainAccountFromAddressRequest): Promise<QueryInterchainAccountFromAddressResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    InterchainAccountFromAddress(request: QueryInterchainAccountFromAddressRequest): Promise<QueryInterchainAccountFromAddressResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
