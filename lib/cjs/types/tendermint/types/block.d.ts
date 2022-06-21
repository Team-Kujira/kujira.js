import { Header, Data, Commit } from "../../tendermint/types/types";
import { EvidenceList } from "./evidence";
import { Writer, Reader } from "protobufjs/minimal";
import { DeepPartial } from "../..";
export declare const protobufPackage = "tendermint.types";
export interface Block {
    header: Header | undefined;
    data: Data | undefined;
    evidence: EvidenceList | undefined;
    last_commit: Commit | undefined;
}
export declare const Block: {
    encode(message: Block, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): Block;
    fromJSON(object: any): Block;
    toJSON(message: Block): unknown;
    fromPartial(object: DeepPartial<Block>): Block;
};
