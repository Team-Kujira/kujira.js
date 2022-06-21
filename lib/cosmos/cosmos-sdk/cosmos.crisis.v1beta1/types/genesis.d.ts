import { Writer, Reader } from "protobufjs/minimal";
import { DeepPartial } from "../../../../types";
import { Coin } from "../../../../types/cosmos/base/coin";
export declare const protobufPackage = "cosmos.crisis.v1beta1";
/** GenesisState defines the crisis module's genesis state. */
export interface GenesisState {
    /**
     * constant_fee is the fee used to verify the invariant in the crisis
     * module.
     */
    constant_fee: Coin | undefined;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
