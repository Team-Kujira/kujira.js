import { Params } from "./auth";
import { Writer, Reader } from "protobufjs/minimal";
import { Any } from "../../../../types/google/protobuf/any";
import { DeepPartial } from "../../../../types";
export declare const protobufPackage = "cosmos.auth.v1beta1";
/** GenesisState defines the auth module's genesis state. */
export interface GenesisState {
    /** params defines all the paramaters of the module. */
    params: Params | undefined;
    /** accounts are the accounts present at genesis. */
    accounts: Any[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
