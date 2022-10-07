import { Writer, Reader } from "protobufjs/minimal";
import { Params } from "./feemarket";
export declare const protobufPackage = "ethermint.feemarket.v1";
/** GenesisState defines the feemarket module's genesis state. */
export interface GenesisState {
    /** params defines all the paramaters of the module. */
    params: Params | undefined;
    /**
     * block gas is the amount of gas wanted on the last block before the upgrade.
     * Zero by default.
     */
    block_gas: number;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
