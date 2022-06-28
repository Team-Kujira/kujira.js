import { Writer, Reader } from "protobufjs/minimal";
import { DeepPartial } from "../../../../types";
import { IdentifiedClientState, ClientConsensusStates, Params } from "./client";
export declare const protobufPackage = "ibc.core.client.v1";
/** GenesisState defines the ibc client submodule's genesis state. */
export interface GenesisState {
    /** client states with their corresponding identifiers */
    clients: IdentifiedClientState[];
    /** consensus states from each client */
    clients_consensus: ClientConsensusStates[];
    /** metadata from each client */
    clients_metadata: IdentifiedGenesisMetadata[];
    params: Params | undefined;
    /** create localhost on initialization */
    create_localhost: boolean;
    /** the sequence for the next generated client identifier */
    next_client_sequence: number;
}
/**
 * GenesisMetadata defines the genesis type for metadata that clients may return
 * with ExportMetadata
 */
export interface GenesisMetadata {
    /** store key of metadata without clientID-prefix */
    key: Uint8Array;
    /** metadata value */
    value: Uint8Array;
}
/**
 * IdentifiedGenesisMetadata has the client metadata with the corresponding
 * client id.
 */
export interface IdentifiedGenesisMetadata {
    client_id: string;
    client_metadata: GenesisMetadata[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
export declare const GenesisMetadata: {
    encode(message: GenesisMetadata, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): GenesisMetadata;
    fromJSON(object: any): GenesisMetadata;
    toJSON(message: GenesisMetadata): unknown;
    fromPartial(object: DeepPartial<GenesisMetadata>): GenesisMetadata;
};
export declare const IdentifiedGenesisMetadata: {
    encode(message: IdentifiedGenesisMetadata, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): IdentifiedGenesisMetadata;
    fromJSON(object: any): IdentifiedGenesisMetadata;
    toJSON(message: IdentifiedGenesisMetadata): unknown;
    fromPartial(object: DeepPartial<IdentifiedGenesisMetadata>): IdentifiedGenesisMetadata;
};
