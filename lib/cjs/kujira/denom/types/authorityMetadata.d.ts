import { DeepPartial } from "cosmjs-types";
import { BinaryReader, BinaryWriter } from "cosmjs-types/binary";
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
    encode(message: DenomAuthorityMetadata, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): DenomAuthorityMetadata;
    fromJSON(object: any): DenomAuthorityMetadata;
    toJSON(message: DenomAuthorityMetadata): unknown;
    fromPartial(object: DeepPartial<DenomAuthorityMetadata>): DenomAuthorityMetadata;
};
