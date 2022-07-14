import { Writer, Reader } from "protobufjs/minimal";
import { DeepPartial } from "../../../../types";
export declare const protobufPackage = "ethermint.types.v1";
/** EthAccount defines an account for modules that holds coins on a pool. */
export interface EthAccount {
    base_account: EthAccount | undefined;
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
    encode(message: EthAccount, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): EthAccount;
    fromJSON(object: any): EthAccount;
    toJSON(message: EthAccount): unknown;
    fromPartial(object: DeepPartial<EthAccount>): EthAccount;
};
export declare const Params: {
    encode(message: Params, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial(object: DeepPartial<Params>): Params;
};
