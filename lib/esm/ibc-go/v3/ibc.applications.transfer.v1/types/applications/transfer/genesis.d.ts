import { DenomTrace, Params } from "./transfer";
import { Writer, Reader } from "protobufjs/minimal";
import { DeepPartial } from "../../../../../../types";
export declare const protobufPackage = "ibc.applications.transfer.v1";
/** GenesisState defines the ibc-transfer genesis state */
export interface GenesisState {
    port_id: string;
    denom_traces: DenomTrace[];
    params: Params | undefined;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
