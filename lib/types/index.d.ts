/// <reference types="long" />
import { Timestamp } from "./google/protobuf/timestamp";
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
export declare function toTimestamp(date: Date): Timestamp;
export declare function fromTimestamp(t: Timestamp): Date;
export declare function fromJsonTimestamp(o: any): Date;
export declare function bytesFromBase64(b64: string): Uint8Array;
export declare function base64FromBytes(arr: Uint8Array): string;
export declare function longToNumber(long: Long): number;
export {};
