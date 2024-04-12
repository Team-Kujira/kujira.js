import { BinaryReader, BinaryWriter } from "cosmjs-types/binary";
import { BaseAccount } from "cosmjs-types/cosmos/auth/v1beta1/auth";
import { DeepPartial } from "cosmjs-types/helpers";
export declare const protobufPackage = "cosmos.auth.v1beta1";
/** EthAccount defines an account for modules that holds coins on a pool. */
export interface EthAccount {
    base_account: BaseAccount | undefined;
    code_hash: string;
}
/** Params defines the parameters for the auth module. */
export interface Params {
    max_memo_characters: number;
    tx_sig_limit: number;
    tx_size_cost_per_byte: number;
    sig_verify_cost_ed25519: number;
    sig_verify_cost_secp256k1: number;
}
export declare const EthAccount: {
    encode(message: EthAccount, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EthAccount;
    fromJSON(object: any): EthAccount;
    toJSON(message: EthAccount): unknown;
    fromPartial(object: DeepPartial<EthAccount>): EthAccount;
};
export declare const Params: {
    encode(message: Params, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial(object: DeepPartial<Params>): Params;
};
