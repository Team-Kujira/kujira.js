import { EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgIBCCloseChannel, MsgIBCSend } from "./types/ibc";
import { MsgExecuteContract, MsgStoreCode, MsgClearAdmin, MsgUpdateAdmin, MsgMigrateContract, MsgInstantiateContract } from "./types/tx";
import { StoreCodeProposal, InstantiateContractProposal, ClearAdminProposal, PinCodesProposal } from "./types/proposal";
declare const types: ((string | {
    encode(message: MsgStoreCode, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): MsgStoreCode;
    fromJSON(object: any): MsgStoreCode;
    toJSON(message: MsgStoreCode): unknown;
    fromPartial(object: {
        sender?: string | undefined;
        wasm_byte_code?: Uint8Array | undefined;
        instantiate_permission?: {
            permission?: import("./types/types").AccessType | undefined;
            address?: string | undefined;
        } | undefined;
    }): MsgStoreCode;
})[] | (string | {
    encode(message: MsgClearAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): MsgClearAdmin;
    fromJSON(object: any): MsgClearAdmin;
    toJSON(message: MsgClearAdmin): unknown;
    fromPartial(object: {
        sender?: string | undefined;
        contract?: string | undefined;
    }): MsgClearAdmin;
})[] | (string | {
    encode(message: MsgIBCCloseChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): MsgIBCCloseChannel;
    fromJSON(object: any): MsgIBCCloseChannel;
    toJSON(message: MsgIBCCloseChannel): unknown;
    fromPartial(object: {
        channel?: string | undefined;
    }): MsgIBCCloseChannel;
})[] | (string | {
    encode(message: MsgInstantiateContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): MsgInstantiateContract;
    fromJSON(object: any): MsgInstantiateContract;
    toJSON(message: MsgInstantiateContract): unknown;
    fromPartial(object: {
        sender?: string | undefined;
        admin?: string | undefined;
        code_id?: number | undefined;
        label?: string | undefined;
        msg?: Uint8Array | undefined;
        funds?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
    }): MsgInstantiateContract;
})[] | (string | {
    encode(message: StoreCodeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): StoreCodeProposal;
    fromJSON(object: any): StoreCodeProposal;
    toJSON(message: StoreCodeProposal): unknown;
    fromPartial(object: {
        title?: string | undefined;
        description?: string | undefined;
        run_as?: string | undefined;
        wasm_byte_code?: Uint8Array | undefined;
        instantiate_permission?: {
            permission?: import("./types/types").AccessType | undefined;
            address?: string | undefined;
        } | undefined;
    }): StoreCodeProposal;
})[] | (string | {
    encode(message: InstantiateContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): InstantiateContractProposal;
    fromJSON(object: any): InstantiateContractProposal;
    toJSON(message: InstantiateContractProposal): unknown;
    fromPartial(object: {
        title?: string | undefined;
        description?: string | undefined;
        run_as?: string | undefined;
        admin?: string | undefined;
        code_id?: number | undefined;
        label?: string | undefined;
        msg?: Uint8Array | undefined;
        funds?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
    }): InstantiateContractProposal;
})[] | (string | {
    encode(message: ClearAdminProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): ClearAdminProposal;
    fromJSON(object: any): ClearAdminProposal;
    toJSON(message: ClearAdminProposal): unknown;
    fromPartial(object: {
        title?: string | undefined;
        description?: string | undefined;
        contract?: string | undefined;
    }): ClearAdminProposal;
})[] | (string | {
    encode(message: PinCodesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): PinCodesProposal;
    fromJSON(object: any): PinCodesProposal;
    toJSON(message: PinCodesProposal): unknown;
    fromPartial(object: {
        title?: string | undefined;
        description?: string | undefined;
        code_ids?: number[] | undefined;
    }): PinCodesProposal;
})[])[];
declare const txClient: {
    msgExecuteContract: (data: MsgExecuteContract) => EncodeObject;
    msgStoreCode: (data: MsgStoreCode) => EncodeObject;
    msgClearAdmin: (data: MsgClearAdmin) => EncodeObject;
    msgIBCCloseChannel: (data: MsgIBCCloseChannel) => EncodeObject;
    msgIBCSend: (data: MsgIBCSend) => EncodeObject;
    msgUpdateAdmin: (data: MsgUpdateAdmin) => EncodeObject;
    msgMigrateContract: (data: MsgMigrateContract) => EncodeObject;
    msgInstantiateContract: (data: MsgInstantiateContract) => EncodeObject;
};
export { txClient, types, Api };
