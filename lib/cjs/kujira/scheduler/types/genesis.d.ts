import { DeepPartial } from "cosmjs-types";
import { BinaryReader, BinaryWriter } from "cosmjs-types/binary";
import { Hook } from "./hook";
import { Params } from "./params";
export declare const protobufPackage = "kujira.scheduler";
/** GenesisState defines the scheduler module's genesis state. */
export interface GenesisState {
    params: Params | undefined;
    hookList: Hook[];
    /** this line is used by starport scaffolding # genesis/proto/state */
    hookCount: bigint;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
