import { BinaryReader, BinaryWriter } from "cosmjs-types/binary";
import { BaseAccount } from "cosmjs-types/cosmos/auth/v1beta1/auth";
export declare const protobufPackage = "ethermint.types.v1";
/**
 * EthAccount implements the authtypes.AccountI interface and embeds an
 * authtypes.BaseAccount type. It is compatible with the auth AccountKeeper.
 */
export interface EthAccount {
    baseAccount?: BaseAccount;
    codeHash: Uint8Array;
}
export declare const EthAccount: {
    typeUrl: string;
    encode(message: EthAccount, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EthAccount;
    fromJSON(object: any): EthAccount;
    toJSON(message: EthAccount): unknown;
    fromPartial<I extends {
        baseAccount?: {
            address?: string | undefined;
            pubKey?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            accountNumber?: bigint | undefined;
            sequence?: bigint | undefined;
        } | undefined;
        codeHash?: Uint8Array | undefined;
    } & {
        baseAccount?: ({
            address?: string | undefined;
            pubKey?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            accountNumber?: bigint | undefined;
            sequence?: bigint | undefined;
        } & {
            address?: string | undefined;
            pubKey?: ({
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } & {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } & Record<Exclude<keyof I["baseAccount"]["pubKey"], keyof import("cosmjs-types/google/protobuf/any").Any>, never>) | undefined;
            accountNumber?: bigint | undefined;
            sequence?: bigint | undefined;
        } & Record<Exclude<keyof I["baseAccount"], keyof BaseAccount>, never>) | undefined;
        codeHash?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, keyof EthAccount>, never>>(object: I): EthAccount;
};
