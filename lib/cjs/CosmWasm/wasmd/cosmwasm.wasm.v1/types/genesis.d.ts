import { Writer, Reader } from "protobufjs/minimal";
import { Params, CodeInfo, ContractInfo, Model } from "./types";
import { MsgStoreCode, MsgInstantiateContract, MsgExecuteContract } from "./tx";
import { DeepPartial } from "../../../../types";
export declare const protobufPackage = "cosmwasm.wasm.v1";
/** GenesisState - genesis state of x/wasm */
export interface GenesisState {
    params: Params | undefined;
    codes: Code[];
    contracts: Contract[];
    sequences: Sequence[];
    gen_msgs: GenesisState_GenMsgs[];
}
/**
 * GenMsgs define the messages that can be executed during genesis phase in
 * order. The intention is to have more human readable data that is auditable.
 */
export interface GenesisState_GenMsgs {
    store_code: MsgStoreCode | undefined;
    instantiate_contract: MsgInstantiateContract | undefined;
    execute_contract: MsgExecuteContract | undefined;
}
/** Code struct encompasses CodeInfo and CodeBytes */
export interface Code {
    code_id: number;
    code_info: CodeInfo | undefined;
    code_bytes: Uint8Array;
    /** Pinned to wasmvm cache */
    pinned: boolean;
}
/** Contract struct encompasses ContractAddress, ContractInfo, and ContractState */
export interface Contract {
    contract_address: string;
    contract_info: ContractInfo | undefined;
    contract_state: Model[];
}
/** Sequence key and value of an id generation counter */
export interface Sequence {
    id_key: Uint8Array;
    value: number;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
export declare const GenesisState_GenMsgs: {
    encode(message: GenesisState_GenMsgs, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): GenesisState_GenMsgs;
    fromJSON(object: any): GenesisState_GenMsgs;
    toJSON(message: GenesisState_GenMsgs): unknown;
    fromPartial(object: DeepPartial<GenesisState_GenMsgs>): GenesisState_GenMsgs;
};
export declare const Code: {
    encode(message: Code, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Code;
    fromJSON(object: any): Code;
    toJSON(message: Code): unknown;
    fromPartial(object: DeepPartial<Code>): Code;
};
export declare const Contract: {
    encode(message: Contract, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Contract;
    fromJSON(object: any): Contract;
    toJSON(message: Contract): unknown;
    fromPartial(object: DeepPartial<Contract>): Contract;
};
export declare const Sequence: {
    encode(message: Sequence, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Sequence;
    fromJSON(object: any): Sequence;
    toJSON(message: Sequence): unknown;
    fromPartial(object: DeepPartial<Sequence>): Sequence;
};
