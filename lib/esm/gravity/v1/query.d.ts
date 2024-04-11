import { BinaryReader, BinaryWriter } from "cosmjs-types/binary";
import { Attestation } from "./attestation";
import { OutgoingLogicCall, OutgoingTransferTx, OutgoingTxBatch } from "./batch";
import { Params } from "./genesis";
import { Rpc } from "./helpers";
import { MsgConfirmBatch, MsgConfirmLogicCall, MsgValsetConfirm } from "./msgs";
import { BatchFees } from "./pool";
import { PendingIbcAutoForward, Valset } from "./types";
export declare const protobufPackage = "gravity.v1";
export interface QueryParamsRequest {
}
export interface QueryParamsResponse {
    params?: Params;
}
export interface QueryCurrentValsetRequest {
}
export interface QueryCurrentValsetResponse {
    valset?: Valset;
}
export interface QueryValsetRequestRequest {
    nonce: bigint;
}
export interface QueryValsetRequestResponse {
    valset?: Valset;
}
export interface QueryValsetConfirmRequest {
    nonce: bigint;
    address: string;
}
export interface QueryValsetConfirmResponse {
    confirm?: MsgValsetConfirm;
}
export interface QueryValsetConfirmsByNonceRequest {
    nonce: bigint;
}
export interface QueryValsetConfirmsByNonceResponse {
    confirms: MsgValsetConfirm[];
}
export interface QueryLastValsetRequestsRequest {
}
export interface QueryLastValsetRequestsResponse {
    valsets: Valset[];
}
export interface QueryLastPendingValsetRequestByAddrRequest {
    address: string;
}
export interface QueryLastPendingValsetRequestByAddrResponse {
    valsets: Valset[];
}
export interface QueryBatchFeeRequest {
}
export interface QueryBatchFeeResponse {
    batchFees: BatchFees[];
}
export interface QueryLastPendingBatchRequestByAddrRequest {
    address: string;
}
export interface QueryLastPendingBatchRequestByAddrResponse {
    batch: OutgoingTxBatch[];
}
export interface QueryLastPendingLogicCallByAddrRequest {
    address: string;
}
export interface QueryLastPendingLogicCallByAddrResponse {
    call: OutgoingLogicCall[];
}
export interface QueryOutgoingTxBatchesRequest {
}
export interface QueryOutgoingTxBatchesResponse {
    batches: OutgoingTxBatch[];
}
export interface QueryOutgoingLogicCallsRequest {
}
export interface QueryOutgoingLogicCallsResponse {
    calls: OutgoingLogicCall[];
}
export interface QueryBatchRequestByNonceRequest {
    nonce: bigint;
    contractAddress: string;
}
export interface QueryBatchRequestByNonceResponse {
    batch?: OutgoingTxBatch;
}
export interface QueryBatchConfirmsRequest {
    nonce: bigint;
    contractAddress: string;
}
export interface QueryBatchConfirmsResponse {
    confirms: MsgConfirmBatch[];
}
export interface QueryLogicConfirmsRequest {
    invalidationId: Uint8Array;
    invalidationNonce: bigint;
}
export interface QueryLogicConfirmsResponse {
    confirms: MsgConfirmLogicCall[];
}
export interface QueryLastEventNonceByAddrRequest {
    address: string;
}
export interface QueryLastEventNonceByAddrResponse {
    eventNonce: bigint;
}
export interface QueryERC20ToDenomRequest {
    erc20: string;
}
export interface QueryERC20ToDenomResponse {
    denom: string;
    cosmosOriginated: boolean;
}
export interface QueryDenomToERC20Request {
    denom: string;
}
export interface QueryDenomToERC20Response {
    erc20: string;
    cosmosOriginated: boolean;
}
/**
 * QueryLastObservedEthBlockRequest defines the request for getting the height of the
 * last applied Ethereum Event on the bridge. This is expected to lag the actual
 * Ethereum block height significantly due to 1. Ethereum Finality and
 *  2. Consensus mirroring the state on Ethereum
 */
export interface QueryLastObservedEthBlockRequest {
    /**
     * indicates whether to search for store data using the old Gravity v1 key "LastObservedEthereumBlockHeightKey"
     * Note that queries before the Mercury upgrade at height 1282013 must set this to true
     */
    useV1Key: boolean;
}
export interface QueryLastObservedEthBlockResponse {
    /**
     * a response of 0 indicates that no Ethereum events have been observed, and thus
     * the bridge is inactive
     */
    block: bigint;
}
/**
 * QueryLastObservedEthNonceRequest defines the request for getting the event nonce
 * of the last applied Ethereum Event on the bridge.
 * Note that this is likely to lag the last executed event a little
 * due to 1. Ethereum Finality and 2. Consensus mirroring the Ethereum state
 */
export interface QueryLastObservedEthNonceRequest {
    /**
     * indicates whether to search for store data using the old Gravity v1 key "LastObservedEventNonceKey"
     * Note that queries before the Mercury upgrade at height 1282013 must set this to true
     */
    useV1Key: boolean;
}
export interface QueryLastObservedEthNonceResponse {
    /**
     * a response of 0 indicates that no Ethereum events have been observed, and thus
     * the bridge is inactive
     */
    nonce: bigint;
}
/**
 * QueryAttestationsRequest defines the request structure for getting recent
 * attestations with optional query parameters. By default, a limited set of
 * recent attestations will be returned, defined by 'limit'. These attestations
 * can be ordered ascending or descending by nonce, that defaults to ascending.
 * Filtering criteria may also be provided, including nonce, claim type, and
 * height. Note, that an attestation will be returned if it matches ANY of the
 * filter query parameters provided.
 */
export interface QueryAttestationsRequest {
    /** limit defines how many attestations to limit in the response. */
    limit: bigint;
    /**
     * order_by provides ordering of atteststions by nonce in the response. Either
     * 'asc' or 'desc' can be provided. If no value is provided, it defaults to
     * 'asc'.
     */
    orderBy: string;
    /** claim_type allows filtering attestations by Ethereum claim type. */
    claimType: string;
    /** nonce allows filtering attestations by Ethereum claim nonce. */
    nonce: bigint;
    /** height allows filtering attestations by Ethereum claim height. */
    height: bigint;
    /**
     * indicates whether to search for store data using the old Gravity v1 key "OracleAttestationKey"
     * Note that queries before the Mercury upgrade at height 1282013 must set this to true
     */
    useV1Key: boolean;
}
export interface QueryAttestationsResponse {
    attestations: Attestation[];
}
export interface QueryDelegateKeysByValidatorAddress {
    validatorAddress: string;
}
export interface QueryDelegateKeysByValidatorAddressResponse {
    ethAddress: string;
    orchestratorAddress: string;
}
export interface QueryDelegateKeysByEthAddress {
    ethAddress: string;
}
export interface QueryDelegateKeysByEthAddressResponse {
    validatorAddress: string;
    orchestratorAddress: string;
}
export interface QueryDelegateKeysByOrchestratorAddress {
    orchestratorAddress: string;
}
export interface QueryDelegateKeysByOrchestratorAddressResponse {
    validatorAddress: string;
    ethAddress: string;
}
export interface QueryPendingSendToEth {
    senderAddress: string;
}
export interface QueryPendingSendToEthResponse {
    transfersInBatches: OutgoingTransferTx[];
    unbatchedTransfers: OutgoingTransferTx[];
}
export interface QueryPendingIbcAutoForwards {
    /** limit defines the number of pending forwards to return, in order of their SendToCosmos.EventNonce */
    limit: bigint;
}
export interface QueryPendingIbcAutoForwardsResponse {
    pendingIbcAutoForwards: PendingIbcAutoForward[];
}
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): unknown;
    fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse;
};
export declare const QueryCurrentValsetRequest: {
    encode(_: QueryCurrentValsetRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryCurrentValsetRequest;
    fromJSON(_: any): QueryCurrentValsetRequest;
    toJSON(_: QueryCurrentValsetRequest): unknown;
    fromPartial(_: Partial<QueryCurrentValsetRequest>): QueryCurrentValsetRequest;
};
export declare const QueryCurrentValsetResponse: {
    encode(message: QueryCurrentValsetResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryCurrentValsetResponse;
    fromJSON(object: any): QueryCurrentValsetResponse;
    toJSON(message: QueryCurrentValsetResponse): unknown;
    fromPartial(object: Partial<QueryCurrentValsetResponse>): QueryCurrentValsetResponse;
};
export declare const QueryValsetRequestRequest: {
    encode(message: QueryValsetRequestRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryValsetRequestRequest;
    fromJSON(object: any): QueryValsetRequestRequest;
    toJSON(message: QueryValsetRequestRequest): unknown;
    fromPartial(object: Partial<QueryValsetRequestRequest>): QueryValsetRequestRequest;
};
export declare const QueryValsetRequestResponse: {
    encode(message: QueryValsetRequestResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryValsetRequestResponse;
    fromJSON(object: any): QueryValsetRequestResponse;
    toJSON(message: QueryValsetRequestResponse): unknown;
    fromPartial(object: Partial<QueryValsetRequestResponse>): QueryValsetRequestResponse;
};
export declare const QueryValsetConfirmRequest: {
    encode(message: QueryValsetConfirmRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryValsetConfirmRequest;
    fromJSON(object: any): QueryValsetConfirmRequest;
    toJSON(message: QueryValsetConfirmRequest): unknown;
    fromPartial(object: Partial<QueryValsetConfirmRequest>): QueryValsetConfirmRequest;
};
export declare const QueryValsetConfirmResponse: {
    encode(message: QueryValsetConfirmResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryValsetConfirmResponse;
    fromJSON(object: any): QueryValsetConfirmResponse;
    toJSON(message: QueryValsetConfirmResponse): unknown;
    fromPartial(object: Partial<QueryValsetConfirmResponse>): QueryValsetConfirmResponse;
};
export declare const QueryValsetConfirmsByNonceRequest: {
    encode(message: QueryValsetConfirmsByNonceRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryValsetConfirmsByNonceRequest;
    fromJSON(object: any): QueryValsetConfirmsByNonceRequest;
    toJSON(message: QueryValsetConfirmsByNonceRequest): unknown;
    fromPartial(object: Partial<QueryValsetConfirmsByNonceRequest>): QueryValsetConfirmsByNonceRequest;
};
export declare const QueryValsetConfirmsByNonceResponse: {
    encode(message: QueryValsetConfirmsByNonceResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryValsetConfirmsByNonceResponse;
    fromJSON(object: any): QueryValsetConfirmsByNonceResponse;
    toJSON(message: QueryValsetConfirmsByNonceResponse): unknown;
    fromPartial(object: Partial<QueryValsetConfirmsByNonceResponse>): QueryValsetConfirmsByNonceResponse;
};
export declare const QueryLastValsetRequestsRequest: {
    encode(_: QueryLastValsetRequestsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryLastValsetRequestsRequest;
    fromJSON(_: any): QueryLastValsetRequestsRequest;
    toJSON(_: QueryLastValsetRequestsRequest): unknown;
    fromPartial(_: Partial<QueryLastValsetRequestsRequest>): QueryLastValsetRequestsRequest;
};
export declare const QueryLastValsetRequestsResponse: {
    encode(message: QueryLastValsetRequestsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryLastValsetRequestsResponse;
    fromJSON(object: any): QueryLastValsetRequestsResponse;
    toJSON(message: QueryLastValsetRequestsResponse): unknown;
    fromPartial(object: Partial<QueryLastValsetRequestsResponse>): QueryLastValsetRequestsResponse;
};
export declare const QueryLastPendingValsetRequestByAddrRequest: {
    encode(message: QueryLastPendingValsetRequestByAddrRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryLastPendingValsetRequestByAddrRequest;
    fromJSON(object: any): QueryLastPendingValsetRequestByAddrRequest;
    toJSON(message: QueryLastPendingValsetRequestByAddrRequest): unknown;
    fromPartial(object: Partial<QueryLastPendingValsetRequestByAddrRequest>): QueryLastPendingValsetRequestByAddrRequest;
};
export declare const QueryLastPendingValsetRequestByAddrResponse: {
    encode(message: QueryLastPendingValsetRequestByAddrResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryLastPendingValsetRequestByAddrResponse;
    fromJSON(object: any): QueryLastPendingValsetRequestByAddrResponse;
    toJSON(message: QueryLastPendingValsetRequestByAddrResponse): unknown;
    fromPartial(object: Partial<QueryLastPendingValsetRequestByAddrResponse>): QueryLastPendingValsetRequestByAddrResponse;
};
export declare const QueryBatchFeeRequest: {
    encode(_: QueryBatchFeeRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryBatchFeeRequest;
    fromJSON(_: any): QueryBatchFeeRequest;
    toJSON(_: QueryBatchFeeRequest): unknown;
    fromPartial(_: Partial<QueryBatchFeeRequest>): QueryBatchFeeRequest;
};
export declare const QueryBatchFeeResponse: {
    encode(message: QueryBatchFeeResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryBatchFeeResponse;
    fromJSON(object: any): QueryBatchFeeResponse;
    toJSON(message: QueryBatchFeeResponse): unknown;
    fromPartial(object: Partial<QueryBatchFeeResponse>): QueryBatchFeeResponse;
};
export declare const QueryLastPendingBatchRequestByAddrRequest: {
    encode(message: QueryLastPendingBatchRequestByAddrRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryLastPendingBatchRequestByAddrRequest;
    fromJSON(object: any): QueryLastPendingBatchRequestByAddrRequest;
    toJSON(message: QueryLastPendingBatchRequestByAddrRequest): unknown;
    fromPartial(object: Partial<QueryLastPendingBatchRequestByAddrRequest>): QueryLastPendingBatchRequestByAddrRequest;
};
export declare const QueryLastPendingBatchRequestByAddrResponse: {
    encode(message: QueryLastPendingBatchRequestByAddrResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryLastPendingBatchRequestByAddrResponse;
    fromJSON(object: any): QueryLastPendingBatchRequestByAddrResponse;
    toJSON(message: QueryLastPendingBatchRequestByAddrResponse): unknown;
    fromPartial(object: Partial<QueryLastPendingBatchRequestByAddrResponse>): QueryLastPendingBatchRequestByAddrResponse;
};
export declare const QueryLastPendingLogicCallByAddrRequest: {
    encode(message: QueryLastPendingLogicCallByAddrRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryLastPendingLogicCallByAddrRequest;
    fromJSON(object: any): QueryLastPendingLogicCallByAddrRequest;
    toJSON(message: QueryLastPendingLogicCallByAddrRequest): unknown;
    fromPartial(object: Partial<QueryLastPendingLogicCallByAddrRequest>): QueryLastPendingLogicCallByAddrRequest;
};
export declare const QueryLastPendingLogicCallByAddrResponse: {
    encode(message: QueryLastPendingLogicCallByAddrResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryLastPendingLogicCallByAddrResponse;
    fromJSON(object: any): QueryLastPendingLogicCallByAddrResponse;
    toJSON(message: QueryLastPendingLogicCallByAddrResponse): unknown;
    fromPartial(object: Partial<QueryLastPendingLogicCallByAddrResponse>): QueryLastPendingLogicCallByAddrResponse;
};
export declare const QueryOutgoingTxBatchesRequest: {
    encode(_: QueryOutgoingTxBatchesRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryOutgoingTxBatchesRequest;
    fromJSON(_: any): QueryOutgoingTxBatchesRequest;
    toJSON(_: QueryOutgoingTxBatchesRequest): unknown;
    fromPartial(_: Partial<QueryOutgoingTxBatchesRequest>): QueryOutgoingTxBatchesRequest;
};
export declare const QueryOutgoingTxBatchesResponse: {
    encode(message: QueryOutgoingTxBatchesResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryOutgoingTxBatchesResponse;
    fromJSON(object: any): QueryOutgoingTxBatchesResponse;
    toJSON(message: QueryOutgoingTxBatchesResponse): unknown;
    fromPartial(object: Partial<QueryOutgoingTxBatchesResponse>): QueryOutgoingTxBatchesResponse;
};
export declare const QueryOutgoingLogicCallsRequest: {
    encode(_: QueryOutgoingLogicCallsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryOutgoingLogicCallsRequest;
    fromJSON(_: any): QueryOutgoingLogicCallsRequest;
    toJSON(_: QueryOutgoingLogicCallsRequest): unknown;
    fromPartial(_: Partial<QueryOutgoingLogicCallsRequest>): QueryOutgoingLogicCallsRequest;
};
export declare const QueryOutgoingLogicCallsResponse: {
    encode(message: QueryOutgoingLogicCallsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryOutgoingLogicCallsResponse;
    fromJSON(object: any): QueryOutgoingLogicCallsResponse;
    toJSON(message: QueryOutgoingLogicCallsResponse): unknown;
    fromPartial(object: Partial<QueryOutgoingLogicCallsResponse>): QueryOutgoingLogicCallsResponse;
};
export declare const QueryBatchRequestByNonceRequest: {
    encode(message: QueryBatchRequestByNonceRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryBatchRequestByNonceRequest;
    fromJSON(object: any): QueryBatchRequestByNonceRequest;
    toJSON(message: QueryBatchRequestByNonceRequest): unknown;
    fromPartial(object: Partial<QueryBatchRequestByNonceRequest>): QueryBatchRequestByNonceRequest;
};
export declare const QueryBatchRequestByNonceResponse: {
    encode(message: QueryBatchRequestByNonceResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryBatchRequestByNonceResponse;
    fromJSON(object: any): QueryBatchRequestByNonceResponse;
    toJSON(message: QueryBatchRequestByNonceResponse): unknown;
    fromPartial(object: Partial<QueryBatchRequestByNonceResponse>): QueryBatchRequestByNonceResponse;
};
export declare const QueryBatchConfirmsRequest: {
    encode(message: QueryBatchConfirmsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryBatchConfirmsRequest;
    fromJSON(object: any): QueryBatchConfirmsRequest;
    toJSON(message: QueryBatchConfirmsRequest): unknown;
    fromPartial(object: Partial<QueryBatchConfirmsRequest>): QueryBatchConfirmsRequest;
};
export declare const QueryBatchConfirmsResponse: {
    encode(message: QueryBatchConfirmsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryBatchConfirmsResponse;
    fromJSON(object: any): QueryBatchConfirmsResponse;
    toJSON(message: QueryBatchConfirmsResponse): unknown;
    fromPartial(object: Partial<QueryBatchConfirmsResponse>): QueryBatchConfirmsResponse;
};
export declare const QueryLogicConfirmsRequest: {
    encode(message: QueryLogicConfirmsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryLogicConfirmsRequest;
    fromJSON(object: any): QueryLogicConfirmsRequest;
    toJSON(message: QueryLogicConfirmsRequest): unknown;
    fromPartial(object: Partial<QueryLogicConfirmsRequest>): QueryLogicConfirmsRequest;
};
export declare const QueryLogicConfirmsResponse: {
    encode(message: QueryLogicConfirmsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryLogicConfirmsResponse;
    fromJSON(object: any): QueryLogicConfirmsResponse;
    toJSON(message: QueryLogicConfirmsResponse): unknown;
    fromPartial(object: Partial<QueryLogicConfirmsResponse>): QueryLogicConfirmsResponse;
};
export declare const QueryLastEventNonceByAddrRequest: {
    encode(message: QueryLastEventNonceByAddrRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryLastEventNonceByAddrRequest;
    fromJSON(object: any): QueryLastEventNonceByAddrRequest;
    toJSON(message: QueryLastEventNonceByAddrRequest): unknown;
    fromPartial(object: Partial<QueryLastEventNonceByAddrRequest>): QueryLastEventNonceByAddrRequest;
};
export declare const QueryLastEventNonceByAddrResponse: {
    encode(message: QueryLastEventNonceByAddrResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryLastEventNonceByAddrResponse;
    fromJSON(object: any): QueryLastEventNonceByAddrResponse;
    toJSON(message: QueryLastEventNonceByAddrResponse): unknown;
    fromPartial(object: Partial<QueryLastEventNonceByAddrResponse>): QueryLastEventNonceByAddrResponse;
};
export declare const QueryERC20ToDenomRequest: {
    encode(message: QueryERC20ToDenomRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryERC20ToDenomRequest;
    fromJSON(object: any): QueryERC20ToDenomRequest;
    toJSON(message: QueryERC20ToDenomRequest): unknown;
    fromPartial(object: Partial<QueryERC20ToDenomRequest>): QueryERC20ToDenomRequest;
};
export declare const QueryERC20ToDenomResponse: {
    encode(message: QueryERC20ToDenomResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryERC20ToDenomResponse;
    fromJSON(object: any): QueryERC20ToDenomResponse;
    toJSON(message: QueryERC20ToDenomResponse): unknown;
    fromPartial(object: Partial<QueryERC20ToDenomResponse>): QueryERC20ToDenomResponse;
};
export declare const QueryDenomToERC20Request: {
    encode(message: QueryDenomToERC20Request, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomToERC20Request;
    fromJSON(object: any): QueryDenomToERC20Request;
    toJSON(message: QueryDenomToERC20Request): unknown;
    fromPartial(object: Partial<QueryDenomToERC20Request>): QueryDenomToERC20Request;
};
export declare const QueryDenomToERC20Response: {
    encode(message: QueryDenomToERC20Response, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomToERC20Response;
    fromJSON(object: any): QueryDenomToERC20Response;
    toJSON(message: QueryDenomToERC20Response): unknown;
    fromPartial(object: Partial<QueryDenomToERC20Response>): QueryDenomToERC20Response;
};
export declare const QueryLastObservedEthBlockRequest: {
    encode(message: QueryLastObservedEthBlockRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryLastObservedEthBlockRequest;
    fromJSON(object: any): QueryLastObservedEthBlockRequest;
    toJSON(message: QueryLastObservedEthBlockRequest): unknown;
    fromPartial(object: Partial<QueryLastObservedEthBlockRequest>): QueryLastObservedEthBlockRequest;
};
export declare const QueryLastObservedEthBlockResponse: {
    encode(message: QueryLastObservedEthBlockResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryLastObservedEthBlockResponse;
    fromJSON(object: any): QueryLastObservedEthBlockResponse;
    toJSON(message: QueryLastObservedEthBlockResponse): unknown;
    fromPartial(object: Partial<QueryLastObservedEthBlockResponse>): QueryLastObservedEthBlockResponse;
};
export declare const QueryLastObservedEthNonceRequest: {
    encode(message: QueryLastObservedEthNonceRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryLastObservedEthNonceRequest;
    fromJSON(object: any): QueryLastObservedEthNonceRequest;
    toJSON(message: QueryLastObservedEthNonceRequest): unknown;
    fromPartial(object: Partial<QueryLastObservedEthNonceRequest>): QueryLastObservedEthNonceRequest;
};
export declare const QueryLastObservedEthNonceResponse: {
    encode(message: QueryLastObservedEthNonceResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryLastObservedEthNonceResponse;
    fromJSON(object: any): QueryLastObservedEthNonceResponse;
    toJSON(message: QueryLastObservedEthNonceResponse): unknown;
    fromPartial(object: Partial<QueryLastObservedEthNonceResponse>): QueryLastObservedEthNonceResponse;
};
export declare const QueryAttestationsRequest: {
    encode(message: QueryAttestationsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAttestationsRequest;
    fromJSON(object: any): QueryAttestationsRequest;
    toJSON(message: QueryAttestationsRequest): unknown;
    fromPartial(object: Partial<QueryAttestationsRequest>): QueryAttestationsRequest;
};
export declare const QueryAttestationsResponse: {
    encode(message: QueryAttestationsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAttestationsResponse;
    fromJSON(object: any): QueryAttestationsResponse;
    toJSON(message: QueryAttestationsResponse): unknown;
    fromPartial(object: Partial<QueryAttestationsResponse>): QueryAttestationsResponse;
};
export declare const QueryDelegateKeysByValidatorAddress: {
    encode(message: QueryDelegateKeysByValidatorAddress, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegateKeysByValidatorAddress;
    fromJSON(object: any): QueryDelegateKeysByValidatorAddress;
    toJSON(message: QueryDelegateKeysByValidatorAddress): unknown;
    fromPartial(object: Partial<QueryDelegateKeysByValidatorAddress>): QueryDelegateKeysByValidatorAddress;
};
export declare const QueryDelegateKeysByValidatorAddressResponse: {
    encode(message: QueryDelegateKeysByValidatorAddressResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegateKeysByValidatorAddressResponse;
    fromJSON(object: any): QueryDelegateKeysByValidatorAddressResponse;
    toJSON(message: QueryDelegateKeysByValidatorAddressResponse): unknown;
    fromPartial(object: Partial<QueryDelegateKeysByValidatorAddressResponse>): QueryDelegateKeysByValidatorAddressResponse;
};
export declare const QueryDelegateKeysByEthAddress: {
    encode(message: QueryDelegateKeysByEthAddress, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegateKeysByEthAddress;
    fromJSON(object: any): QueryDelegateKeysByEthAddress;
    toJSON(message: QueryDelegateKeysByEthAddress): unknown;
    fromPartial(object: Partial<QueryDelegateKeysByEthAddress>): QueryDelegateKeysByEthAddress;
};
export declare const QueryDelegateKeysByEthAddressResponse: {
    encode(message: QueryDelegateKeysByEthAddressResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegateKeysByEthAddressResponse;
    fromJSON(object: any): QueryDelegateKeysByEthAddressResponse;
    toJSON(message: QueryDelegateKeysByEthAddressResponse): unknown;
    fromPartial(object: Partial<QueryDelegateKeysByEthAddressResponse>): QueryDelegateKeysByEthAddressResponse;
};
export declare const QueryDelegateKeysByOrchestratorAddress: {
    encode(message: QueryDelegateKeysByOrchestratorAddress, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegateKeysByOrchestratorAddress;
    fromJSON(object: any): QueryDelegateKeysByOrchestratorAddress;
    toJSON(message: QueryDelegateKeysByOrchestratorAddress): unknown;
    fromPartial(object: Partial<QueryDelegateKeysByOrchestratorAddress>): QueryDelegateKeysByOrchestratorAddress;
};
export declare const QueryDelegateKeysByOrchestratorAddressResponse: {
    encode(message: QueryDelegateKeysByOrchestratorAddressResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegateKeysByOrchestratorAddressResponse;
    fromJSON(object: any): QueryDelegateKeysByOrchestratorAddressResponse;
    toJSON(message: QueryDelegateKeysByOrchestratorAddressResponse): unknown;
    fromPartial(object: Partial<QueryDelegateKeysByOrchestratorAddressResponse>): QueryDelegateKeysByOrchestratorAddressResponse;
};
export declare const QueryPendingSendToEth: {
    encode(message: QueryPendingSendToEth, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryPendingSendToEth;
    fromJSON(object: any): QueryPendingSendToEth;
    toJSON(message: QueryPendingSendToEth): unknown;
    fromPartial(object: Partial<QueryPendingSendToEth>): QueryPendingSendToEth;
};
export declare const QueryPendingSendToEthResponse: {
    encode(message: QueryPendingSendToEthResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryPendingSendToEthResponse;
    fromJSON(object: any): QueryPendingSendToEthResponse;
    toJSON(message: QueryPendingSendToEthResponse): unknown;
    fromPartial(object: Partial<QueryPendingSendToEthResponse>): QueryPendingSendToEthResponse;
};
export declare const QueryPendingIbcAutoForwards: {
    encode(message: QueryPendingIbcAutoForwards, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryPendingIbcAutoForwards;
    fromJSON(object: any): QueryPendingIbcAutoForwards;
    toJSON(message: QueryPendingIbcAutoForwards): unknown;
    fromPartial(object: Partial<QueryPendingIbcAutoForwards>): QueryPendingIbcAutoForwards;
};
export declare const QueryPendingIbcAutoForwardsResponse: {
    encode(message: QueryPendingIbcAutoForwardsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryPendingIbcAutoForwardsResponse;
    fromJSON(object: any): QueryPendingIbcAutoForwardsResponse;
    toJSON(message: QueryPendingIbcAutoForwardsResponse): unknown;
    fromPartial(object: Partial<QueryPendingIbcAutoForwardsResponse>): QueryPendingIbcAutoForwardsResponse;
};
/** Query defines the gRPC querier service */
export interface Query {
    /** Deployments queries deployments */
    Params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    CurrentValset(request?: QueryCurrentValsetRequest): Promise<QueryCurrentValsetResponse>;
    ValsetRequest(request: QueryValsetRequestRequest): Promise<QueryValsetRequestResponse>;
    ValsetConfirm(request: QueryValsetConfirmRequest): Promise<QueryValsetConfirmResponse>;
    ValsetConfirmsByNonce(request: QueryValsetConfirmsByNonceRequest): Promise<QueryValsetConfirmsByNonceResponse>;
    LastValsetRequests(request?: QueryLastValsetRequestsRequest): Promise<QueryLastValsetRequestsResponse>;
    LastPendingValsetRequestByAddr(request: QueryLastPendingValsetRequestByAddrRequest): Promise<QueryLastPendingValsetRequestByAddrResponse>;
    LastPendingBatchRequestByAddr(request: QueryLastPendingBatchRequestByAddrRequest): Promise<QueryLastPendingBatchRequestByAddrResponse>;
    LastPendingLogicCallByAddr(request: QueryLastPendingLogicCallByAddrRequest): Promise<QueryLastPendingLogicCallByAddrResponse>;
    LastEventNonceByAddr(request: QueryLastEventNonceByAddrRequest): Promise<QueryLastEventNonceByAddrResponse>;
    BatchFees(request?: QueryBatchFeeRequest): Promise<QueryBatchFeeResponse>;
    OutgoingTxBatches(request?: QueryOutgoingTxBatchesRequest): Promise<QueryOutgoingTxBatchesResponse>;
    OutgoingLogicCalls(request?: QueryOutgoingLogicCallsRequest): Promise<QueryOutgoingLogicCallsResponse>;
    BatchRequestByNonce(request: QueryBatchRequestByNonceRequest): Promise<QueryBatchRequestByNonceResponse>;
    BatchConfirms(request: QueryBatchConfirmsRequest): Promise<QueryBatchConfirmsResponse>;
    LogicConfirms(request: QueryLogicConfirmsRequest): Promise<QueryLogicConfirmsResponse>;
    ERC20ToDenom(request: QueryERC20ToDenomRequest): Promise<QueryERC20ToDenomResponse>;
    DenomToERC20(request: QueryDenomToERC20Request): Promise<QueryDenomToERC20Response>;
    GetLastObservedEthBlock(request: QueryLastObservedEthBlockRequest): Promise<QueryLastObservedEthBlockResponse>;
    GetLastObservedEthNonce(request: QueryLastObservedEthNonceRequest): Promise<QueryLastObservedEthNonceResponse>;
    GetAttestations(request: QueryAttestationsRequest): Promise<QueryAttestationsResponse>;
    GetDelegateKeyByValidator(request: QueryDelegateKeysByValidatorAddress): Promise<QueryDelegateKeysByValidatorAddressResponse>;
    GetDelegateKeyByEth(request: QueryDelegateKeysByEthAddress): Promise<QueryDelegateKeysByEthAddressResponse>;
    GetDelegateKeyByOrchestrator(request: QueryDelegateKeysByOrchestratorAddress): Promise<QueryDelegateKeysByOrchestratorAddressResponse>;
    GetPendingSendToEth(request: QueryPendingSendToEth): Promise<QueryPendingSendToEthResponse>;
    GetPendingIbcAutoForwards(request: QueryPendingIbcAutoForwards): Promise<QueryPendingIbcAutoForwardsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    CurrentValset(request?: QueryCurrentValsetRequest): Promise<QueryCurrentValsetResponse>;
    ValsetRequest(request: QueryValsetRequestRequest): Promise<QueryValsetRequestResponse>;
    ValsetConfirm(request: QueryValsetConfirmRequest): Promise<QueryValsetConfirmResponse>;
    ValsetConfirmsByNonce(request: QueryValsetConfirmsByNonceRequest): Promise<QueryValsetConfirmsByNonceResponse>;
    LastValsetRequests(request?: QueryLastValsetRequestsRequest): Promise<QueryLastValsetRequestsResponse>;
    LastPendingValsetRequestByAddr(request: QueryLastPendingValsetRequestByAddrRequest): Promise<QueryLastPendingValsetRequestByAddrResponse>;
    LastPendingBatchRequestByAddr(request: QueryLastPendingBatchRequestByAddrRequest): Promise<QueryLastPendingBatchRequestByAddrResponse>;
    LastPendingLogicCallByAddr(request: QueryLastPendingLogicCallByAddrRequest): Promise<QueryLastPendingLogicCallByAddrResponse>;
    LastEventNonceByAddr(request: QueryLastEventNonceByAddrRequest): Promise<QueryLastEventNonceByAddrResponse>;
    BatchFees(request?: QueryBatchFeeRequest): Promise<QueryBatchFeeResponse>;
    OutgoingTxBatches(request?: QueryOutgoingTxBatchesRequest): Promise<QueryOutgoingTxBatchesResponse>;
    OutgoingLogicCalls(request?: QueryOutgoingLogicCallsRequest): Promise<QueryOutgoingLogicCallsResponse>;
    BatchRequestByNonce(request: QueryBatchRequestByNonceRequest): Promise<QueryBatchRequestByNonceResponse>;
    BatchConfirms(request: QueryBatchConfirmsRequest): Promise<QueryBatchConfirmsResponse>;
    LogicConfirms(request: QueryLogicConfirmsRequest): Promise<QueryLogicConfirmsResponse>;
    ERC20ToDenom(request: QueryERC20ToDenomRequest): Promise<QueryERC20ToDenomResponse>;
    DenomToERC20(request: QueryDenomToERC20Request): Promise<QueryDenomToERC20Response>;
    GetLastObservedEthBlock(request: QueryLastObservedEthBlockRequest): Promise<QueryLastObservedEthBlockResponse>;
    GetLastObservedEthNonce(request: QueryLastObservedEthNonceRequest): Promise<QueryLastObservedEthNonceResponse>;
    GetAttestations(request: QueryAttestationsRequest): Promise<QueryAttestationsResponse>;
    GetDelegateKeyByValidator(request: QueryDelegateKeysByValidatorAddress): Promise<QueryDelegateKeysByValidatorAddressResponse>;
    GetDelegateKeyByEth(request: QueryDelegateKeysByEthAddress): Promise<QueryDelegateKeysByEthAddressResponse>;
    GetDelegateKeyByOrchestrator(request: QueryDelegateKeysByOrchestratorAddress): Promise<QueryDelegateKeysByOrchestratorAddressResponse>;
    GetPendingSendToEth(request: QueryPendingSendToEth): Promise<QueryPendingSendToEthResponse>;
    GetPendingIbcAutoForwards(request: QueryPendingIbcAutoForwards): Promise<QueryPendingIbcAutoForwardsResponse>;
}
