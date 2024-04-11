import { BinaryReader, BinaryWriter } from "cosmjs-types/binary";
import { ERC20Token } from "./attestation";
export declare const protobufPackage = "gravity.v1";
/** OutgoingTxBatch represents a batch of transactions going from gravity to ETH */
export interface OutgoingTxBatch {
    batchNonce: bigint;
    batchTimeout: bigint;
    transactions: OutgoingTransferTx[];
    tokenContract: string;
    cosmosBlockCreated: bigint;
}
/** OutgoingTransferTx represents an individual send from gravity to ETH */
export interface OutgoingTransferTx {
    id: bigint;
    sender: string;
    destAddress: string;
    erc20Token?: ERC20Token;
    erc20Fee?: ERC20Token;
}
/** OutgoingLogicCall represents an individual logic call from gravity to ETH */
export interface OutgoingLogicCall {
    transfers: ERC20Token[];
    fees: ERC20Token[];
    logicContractAddress: string;
    payload: Uint8Array;
    timeout: bigint;
    invalidationId: Uint8Array;
    invalidationNonce: bigint;
    cosmosBlockCreated: bigint;
}
export interface EventOutgoingBatchCanceled {
    bridgeContract: string;
    bridgeChainId: string;
    batchId: string;
    nonce: string;
}
export interface EventOutgoingBatch {
    bridgeContract: string;
    bridgeChainId: string;
    batchId: string;
    nonce: string;
}
export declare const OutgoingTxBatch: {
    encode(message: OutgoingTxBatch, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): OutgoingTxBatch;
    fromJSON(object: any): OutgoingTxBatch;
    toJSON(message: OutgoingTxBatch): unknown;
    fromPartial(object: Partial<OutgoingTxBatch>): OutgoingTxBatch;
};
export declare const OutgoingTransferTx: {
    encode(message: OutgoingTransferTx, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): OutgoingTransferTx;
    fromJSON(object: any): OutgoingTransferTx;
    toJSON(message: OutgoingTransferTx): unknown;
    fromPartial(object: Partial<OutgoingTransferTx>): OutgoingTransferTx;
};
export declare const OutgoingLogicCall: {
    encode(message: OutgoingLogicCall, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): OutgoingLogicCall;
    fromJSON(object: any): OutgoingLogicCall;
    toJSON(message: OutgoingLogicCall): unknown;
    fromPartial(object: Partial<OutgoingLogicCall>): OutgoingLogicCall;
};
export declare const EventOutgoingBatchCanceled: {
    encode(message: EventOutgoingBatchCanceled, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EventOutgoingBatchCanceled;
    fromJSON(object: any): EventOutgoingBatchCanceled;
    toJSON(message: EventOutgoingBatchCanceled): unknown;
    fromPartial(object: Partial<EventOutgoingBatchCanceled>): EventOutgoingBatchCanceled;
};
export declare const EventOutgoingBatch: {
    encode(message: EventOutgoingBatch, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EventOutgoingBatch;
    fromJSON(object: any): EventOutgoingBatch;
    toJSON(message: EventOutgoingBatch): unknown;
    fromPartial(object: Partial<EventOutgoingBatch>): EventOutgoingBatch;
};
