import { Writer, Reader } from "protobufjs/minimal";
import { DeepPartial } from "../../../../../types";
import { IdentifiedConnection, ConnectionPaths, Params } from "./connection";
export declare const protobufPackage = "ibc.core.connection.v1";
/** GenesisState defines the ibc connection submodule's genesis state. */
export interface GenesisState {
    connections: IdentifiedConnection[];
    client_connection_paths: ConnectionPaths[];
    /** the sequence for the next generated connection identifier */
    next_connection_sequence: number;
    params: Params | undefined;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
