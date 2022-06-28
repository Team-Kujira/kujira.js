import { Minter, Params } from "./mint";
import { Writer, Reader } from "protobufjs/minimal";
import { DeepPartial } from "../../../../types";
export declare const protobufPackage = "cosmos.mint.v1beta1";
/** GenesisState defines the mint module's genesis state. */
export interface GenesisState {
    /** minter is a space for holding current inflation information. */
    minter: Minter | undefined;
    /** params defines all the paramaters of the module. */
    params: Params | undefined;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
