import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "ethermint.feemarket.v1";
/** Params defines the EVM module parameters */
export interface Params {
    /** no base fee forces the EIP-1559 base fee to 0 (needed for 0 price calls) */
    no_base_fee: boolean;
    /**
     * base fee change denominator bounds the amount the base fee can change
     * between blocks.
     */
    base_fee_change_denominator: number;
    /**
     * elasticity multiplier bounds the maximum gas limit an EIP-1559 block may
     * have.
     */
    elasticity_multiplier: number;
    /** height at which the base fee calculation is enabled. */
    enable_height: number;
    /** base fee for EIP-1559 blocks. */
    base_fee: string;
    /** min_gas_price defines the minimum gas price value for cosmos and eth transactions */
    min_gas_price: string;
    /**
     * min gas denominator bounds the minimum gasUsed to be charged
     * to senders based on GasLimit
     */
    min_gas_multiplier: string;
}
export declare const Params: {
    encode(message: Params, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial(object: DeepPartial<Params>): Params;
};
