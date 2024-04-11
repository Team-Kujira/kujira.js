import { BinaryReader, BinaryWriter } from "cosmjs-types/binary";
export declare const protobufPackage = "gravity.v1";
/** IDSet represents a set of IDs */
export interface IDSet {
    /** IDSet represents a set of IDs */
    ids: bigint[];
}
export interface BatchFees {
    token: string;
    totalFees: string;
    txCount: bigint;
}
export interface EventWithdrawalReceived {
    bridgeContract: string;
    bridgeChainId: string;
    outgoingTxId: string;
    nonce: string;
}
export interface EventWithdrawCanceled {
    sender: string;
    txId: string;
    bridgeContract: string;
    bridgeChainId: string;
}
export declare const IDSet: {
    encode(message: IDSet, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): IDSet;
    fromJSON(object: any): IDSet;
    toJSON(message: IDSet): unknown;
    fromPartial(object: Partial<IDSet>): IDSet;
};
export declare const BatchFees: {
    encode(message: BatchFees, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): BatchFees;
    fromJSON(object: any): BatchFees;
    toJSON(message: BatchFees): unknown;
    fromPartial(object: Partial<BatchFees>): BatchFees;
};
export declare const EventWithdrawalReceived: {
    encode(message: EventWithdrawalReceived, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EventWithdrawalReceived;
    fromJSON(object: any): EventWithdrawalReceived;
    toJSON(message: EventWithdrawalReceived): unknown;
    fromPartial(object: Partial<EventWithdrawalReceived>): EventWithdrawalReceived;
};
export declare const EventWithdrawCanceled: {
    encode(message: EventWithdrawCanceled, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EventWithdrawCanceled;
    fromJSON(object: any): EventWithdrawCanceled;
    toJSON(message: EventWithdrawCanceled): unknown;
    fromPartial(object: Partial<EventWithdrawCanceled>): EventWithdrawCanceled;
};
