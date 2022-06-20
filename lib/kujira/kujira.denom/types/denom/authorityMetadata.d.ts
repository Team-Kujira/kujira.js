import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "kujira.denom";
/**
 * DenomAuthorityMetadata specifies metadata for addresses that have specific
 * capabilities over a token factory denom. Right now there is only one Admin
 * permission, but is planned to be extended to the future.
 */
export interface DenomAuthorityMetadata {
    /** Can be empty for no admin, or a valid kujira address */
    Admin: string;
}
export declare const DenomAuthorityMetadata: {
    encode(message: DenomAuthorityMetadata, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): DenomAuthorityMetadata;
    fromJSON(object: any): DenomAuthorityMetadata;
    toJSON(message: DenomAuthorityMetadata): unknown;
    fromPartial(object: DeepPartial<DenomAuthorityMetadata>): DenomAuthorityMetadata;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
