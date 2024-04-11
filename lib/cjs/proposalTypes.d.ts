import { MsgUpdateParams } from "cosmjs-types/cosmos/bank/v1beta1/tx";
import { CommunityPoolSpendProposal } from "cosmjs-types/cosmos/distribution/v1beta1/distribution";
import { MsgCommunityPoolSpend } from "cosmjs-types/cosmos/distribution/v1beta1/tx";
import { MsgExecLegacyContent } from "cosmjs-types/cosmos/gov/v1/tx";
import { TextProposal } from "cosmjs-types/cosmos/gov/v1beta1/gov";
import { ParameterChangeProposal } from "cosmjs-types/cosmos/params/v1beta1/params";
import { MsgSoftwareUpgrade } from "cosmjs-types/cosmos/upgrade/v1beta1/tx";
import { SoftwareUpgradeProposal } from "cosmjs-types/cosmos/upgrade/v1beta1/upgrade";
import { ClearAdminProposal, ExecuteContractProposal, InstantiateContractProposal, MigrateContractProposal, PinCodesProposal, StoreCodeProposal, UpdateAdminProposal, UpdateInstantiateConfigProposal } from "cosmjs-types/cosmwasm/wasm/v1/proposal";
import { MsgClearAdmin, MsgExecuteContract, MsgInstantiateContract, MsgMigrateContract, MsgStoreCode, MsgUpdateAdmin, MsgUpdateInstantiateConfig } from "cosmjs-types/cosmwasm/wasm/v1/tx";
import { ClientUpdateProposal } from "cosmjs-types/ibc/core/client/v1/client";
import { CreateHookProposal, DeleteHookProposal } from "./kujira/scheduler/types/proposal";
export declare const proposalTypes: ((string | {
    typeUrl: string;
    encode(message: CommunityPoolSpendProposal, writer?: import("cosmjs-types/binary").BinaryWriter | undefined): import("cosmjs-types/binary").BinaryWriter;
    decode(input: import("cosmjs-types/binary").BinaryReader | Uint8Array, length?: number | undefined): CommunityPoolSpendProposal;
    fromJSON(object: any): CommunityPoolSpendProposal;
    toJSON(message: CommunityPoolSpendProposal): unknown;
    fromPartial<I extends {
        title?: string | undefined;
        description?: string | undefined;
        recipient?: string | undefined;
        amount?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
    } & {
        title?: string | undefined;
        description?: string | undefined;
        recipient?: string | undefined;
        amount?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        }[] & ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["amount"][number], keyof import("cosmjs-types/cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I["amount"], keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof CommunityPoolSpendProposal>, never>>(object: I): CommunityPoolSpendProposal;
})[] | (string | {
    typeUrl: string;
    encode(message: MsgCommunityPoolSpend, writer?: import("cosmjs-types/binary").BinaryWriter | undefined): import("cosmjs-types/binary").BinaryWriter;
    decode(input: import("cosmjs-types/binary").BinaryReader | Uint8Array, length?: number | undefined): MsgCommunityPoolSpend;
    fromJSON(object: any): MsgCommunityPoolSpend;
    toJSON(message: MsgCommunityPoolSpend): unknown;
    fromPartial<I_1 extends {
        authority?: string | undefined;
        recipient?: string | undefined;
        amount?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
    } & {
        authority?: string | undefined;
        recipient?: string | undefined;
        amount?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        }[] & ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I_1["amount"][number], keyof import("cosmjs-types/cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_1["amount"], keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I_1, keyof MsgCommunityPoolSpend>, never>>(object: I_1): MsgCommunityPoolSpend;
})[] | (string | {
    typeUrl: string;
    encode(message: ParameterChangeProposal, writer?: import("cosmjs-types/binary").BinaryWriter | undefined): import("cosmjs-types/binary").BinaryWriter;
    decode(input: import("cosmjs-types/binary").BinaryReader | Uint8Array, length?: number | undefined): ParameterChangeProposal;
    fromJSON(object: any): ParameterChangeProposal;
    toJSON(message: ParameterChangeProposal): unknown;
    fromPartial<I_2 extends {
        title?: string | undefined;
        description?: string | undefined;
        changes?: {
            subspace?: string | undefined;
            key?: string | undefined;
            value?: string | undefined;
        }[] | undefined;
    } & {
        title?: string | undefined;
        description?: string | undefined;
        changes?: ({
            subspace?: string | undefined;
            key?: string | undefined;
            value?: string | undefined;
        }[] & ({
            subspace?: string | undefined;
            key?: string | undefined;
            value?: string | undefined;
        } & {
            subspace?: string | undefined;
            key?: string | undefined;
            value?: string | undefined;
        } & Record<Exclude<keyof I_2["changes"][number], keyof import("cosmjs-types/cosmos/params/v1beta1/params").ParamChange>, never>)[] & Record<Exclude<keyof I_2["changes"], keyof {
            subspace?: string | undefined;
            key?: string | undefined;
            value?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I_2, keyof ParameterChangeProposal>, never>>(object: I_2): ParameterChangeProposal;
})[] | (string | {
    typeUrl: string;
    encode(message: MsgUpdateParams, writer?: import("cosmjs-types/binary").BinaryWriter | undefined): import("cosmjs-types/binary").BinaryWriter;
    decode(input: import("cosmjs-types/binary").BinaryReader | Uint8Array, length?: number | undefined): MsgUpdateParams;
    fromJSON(object: any): MsgUpdateParams;
    toJSON(message: MsgUpdateParams): unknown;
    fromPartial<I_3 extends {
        authority?: string | undefined;
        params?: {
            sendEnabled?: {
                denom?: string | undefined;
                enabled?: boolean | undefined;
            }[] | undefined;
            defaultSendEnabled?: boolean | undefined;
        } | undefined;
    } & {
        authority?: string | undefined;
        params?: ({
            sendEnabled?: {
                denom?: string | undefined;
                enabled?: boolean | undefined;
            }[] | undefined;
            defaultSendEnabled?: boolean | undefined;
        } & {
            sendEnabled?: ({
                denom?: string | undefined;
                enabled?: boolean | undefined;
            }[] & ({
                denom?: string | undefined;
                enabled?: boolean | undefined;
            } & {
                denom?: string | undefined;
                enabled?: boolean | undefined;
            } & Record<Exclude<keyof I_3["params"]["sendEnabled"][number], keyof import("cosmjs-types/cosmos/bank/v1beta1/bank").SendEnabled>, never>)[] & Record<Exclude<keyof I_3["params"]["sendEnabled"], keyof {
                denom?: string | undefined;
                enabled?: boolean | undefined;
            }[]>, never>) | undefined;
            defaultSendEnabled?: boolean | undefined;
        } & Record<Exclude<keyof I_3["params"], keyof import("cosmjs-types/cosmos/bank/v1beta1/bank").Params>, never>) | undefined;
    } & Record<Exclude<keyof I_3, keyof MsgUpdateParams>, never>>(object: I_3): MsgUpdateParams;
})[] | (string | {
    typeUrl: string;
    encode(message: StoreCodeProposal, writer?: import("cosmjs-types/binary").BinaryWriter | undefined): import("cosmjs-types/binary").BinaryWriter;
    decode(input: import("cosmjs-types/binary").BinaryReader | Uint8Array, length?: number | undefined): StoreCodeProposal;
    fromJSON(object: any): StoreCodeProposal;
    toJSON(message: StoreCodeProposal): unknown;
    fromPartial<I_4 extends {
        title?: string | undefined;
        description?: string | undefined;
        runAs?: string | undefined;
        wasmByteCode?: Uint8Array | undefined;
        instantiatePermission?: {
            permission?: import("cosmjs-types/cosmwasm/wasm/v1/types").AccessType | undefined;
            address?: string | undefined;
            addresses?: string[] | undefined;
        } | undefined;
        unpinCode?: boolean | undefined;
        source?: string | undefined;
        builder?: string | undefined;
        codeHash?: Uint8Array | undefined;
    } & {
        title?: string | undefined;
        description?: string | undefined;
        runAs?: string | undefined;
        wasmByteCode?: Uint8Array | undefined;
        instantiatePermission?: ({
            permission?: import("cosmjs-types/cosmwasm/wasm/v1/types").AccessType | undefined;
            address?: string | undefined;
            addresses?: string[] | undefined;
        } & {
            permission?: import("cosmjs-types/cosmwasm/wasm/v1/types").AccessType | undefined;
            address?: string | undefined;
            addresses?: (string[] & Record<Exclude<keyof I_4["instantiatePermission"]["addresses"], keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I_4["instantiatePermission"], keyof import("cosmjs-types/cosmwasm/wasm/v1/types").AccessConfig>, never>) | undefined;
        unpinCode?: boolean | undefined;
        source?: string | undefined;
        builder?: string | undefined;
        codeHash?: Uint8Array | undefined;
    } & Record<Exclude<keyof I_4, keyof StoreCodeProposal>, never>>(object: I_4): StoreCodeProposal;
})[] | (string | {
    typeUrl: string;
    encode(message: InstantiateContractProposal, writer?: import("cosmjs-types/binary").BinaryWriter | undefined): import("cosmjs-types/binary").BinaryWriter;
    decode(input: import("cosmjs-types/binary").BinaryReader | Uint8Array, length?: number | undefined): InstantiateContractProposal;
    fromJSON(object: any): InstantiateContractProposal;
    toJSON(message: InstantiateContractProposal): unknown;
    fromPartial<I_5 extends {
        title?: string | undefined;
        description?: string | undefined;
        runAs?: string | undefined;
        admin?: string | undefined;
        codeId?: bigint | undefined;
        label?: string | undefined;
        msg?: Uint8Array | undefined;
        funds?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
    } & {
        title?: string | undefined;
        description?: string | undefined;
        runAs?: string | undefined;
        admin?: string | undefined;
        codeId?: bigint | undefined;
        label?: string | undefined;
        msg?: Uint8Array | undefined;
        funds?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        }[] & ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I_5["funds"][number], keyof import("cosmjs-types/cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_5["funds"], keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I_5, keyof InstantiateContractProposal>, never>>(object: I_5): InstantiateContractProposal;
})[] | (string | {
    typeUrl: string;
    encode(message: MigrateContractProposal, writer?: import("cosmjs-types/binary").BinaryWriter | undefined): import("cosmjs-types/binary").BinaryWriter;
    decode(input: import("cosmjs-types/binary").BinaryReader | Uint8Array, length?: number | undefined): MigrateContractProposal;
    fromJSON(object: any): MigrateContractProposal;
    toJSON(message: MigrateContractProposal): unknown;
    fromPartial<I_6 extends {
        title?: string | undefined;
        description?: string | undefined;
        contract?: string | undefined;
        codeId?: bigint | undefined;
        msg?: Uint8Array | undefined;
    } & {
        title?: string | undefined;
        description?: string | undefined;
        contract?: string | undefined;
        codeId?: bigint | undefined;
        msg?: Uint8Array | undefined;
    } & Record<Exclude<keyof I_6, keyof MigrateContractProposal>, never>>(object: I_6): MigrateContractProposal;
})[] | (string | {
    typeUrl: string;
    encode(message: UpdateAdminProposal, writer?: import("cosmjs-types/binary").BinaryWriter | undefined): import("cosmjs-types/binary").BinaryWriter;
    decode(input: import("cosmjs-types/binary").BinaryReader | Uint8Array, length?: number | undefined): UpdateAdminProposal;
    fromJSON(object: any): UpdateAdminProposal;
    toJSON(message: UpdateAdminProposal): unknown;
    fromPartial<I_7 extends {
        title?: string | undefined;
        description?: string | undefined;
        newAdmin?: string | undefined;
        contract?: string | undefined;
    } & {
        title?: string | undefined;
        description?: string | undefined;
        newAdmin?: string | undefined;
        contract?: string | undefined;
    } & Record<Exclude<keyof I_7, keyof UpdateAdminProposal>, never>>(object: I_7): UpdateAdminProposal;
})[] | (string | {
    typeUrl: string;
    encode(message: ClearAdminProposal, writer?: import("cosmjs-types/binary").BinaryWriter | undefined): import("cosmjs-types/binary").BinaryWriter;
    decode(input: import("cosmjs-types/binary").BinaryReader | Uint8Array, length?: number | undefined): ClearAdminProposal;
    fromJSON(object: any): ClearAdminProposal;
    toJSON(message: ClearAdminProposal): unknown;
    fromPartial<I_8 extends {
        title?: string | undefined;
        description?: string | undefined;
        contract?: string | undefined;
    } & {
        title?: string | undefined;
        description?: string | undefined;
        contract?: string | undefined;
    } & Record<Exclude<keyof I_8, keyof ClearAdminProposal>, never>>(object: I_8): ClearAdminProposal;
})[] | (string | {
    typeUrl: string;
    encode(message: PinCodesProposal, writer?: import("cosmjs-types/binary").BinaryWriter | undefined): import("cosmjs-types/binary").BinaryWriter;
    decode(input: import("cosmjs-types/binary").BinaryReader | Uint8Array, length?: number | undefined): PinCodesProposal;
    fromJSON(object: any): PinCodesProposal;
    toJSON(message: PinCodesProposal): unknown;
    fromPartial<I_9 extends {
        title?: string | undefined;
        description?: string | undefined;
        codeIds?: bigint[] | undefined;
    } & {
        title?: string | undefined;
        description?: string | undefined;
        codeIds?: (bigint[] & Record<Exclude<keyof I_9["codeIds"], keyof bigint[]>, never>) | undefined;
    } & Record<Exclude<keyof I_9, keyof PinCodesProposal>, never>>(object: I_9): PinCodesProposal;
})[] | (string | {
    typeUrl: string;
    encode(message: ExecuteContractProposal, writer?: import("cosmjs-types/binary").BinaryWriter | undefined): import("cosmjs-types/binary").BinaryWriter;
    decode(input: import("cosmjs-types/binary").BinaryReader | Uint8Array, length?: number | undefined): ExecuteContractProposal;
    fromJSON(object: any): ExecuteContractProposal;
    toJSON(message: ExecuteContractProposal): unknown;
    fromPartial<I_10 extends {
        title?: string | undefined;
        description?: string | undefined;
        runAs?: string | undefined;
        contract?: string | undefined;
        msg?: Uint8Array | undefined;
        funds?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
    } & {
        title?: string | undefined;
        description?: string | undefined;
        runAs?: string | undefined;
        contract?: string | undefined;
        msg?: Uint8Array | undefined;
        funds?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        }[] & ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I_10["funds"][number], keyof import("cosmjs-types/cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_10["funds"], keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I_10, keyof ExecuteContractProposal>, never>>(object: I_10): ExecuteContractProposal;
})[] | (string | {
    typeUrl: string;
    encode(message: UpdateInstantiateConfigProposal, writer?: import("cosmjs-types/binary").BinaryWriter | undefined): import("cosmjs-types/binary").BinaryWriter;
    decode(input: import("cosmjs-types/binary").BinaryReader | Uint8Array, length?: number | undefined): UpdateInstantiateConfigProposal;
    fromJSON(object: any): UpdateInstantiateConfigProposal;
    toJSON(message: UpdateInstantiateConfigProposal): unknown;
    fromPartial<I_11 extends {
        title?: string | undefined;
        description?: string | undefined;
        accessConfigUpdates?: {
            codeId?: bigint | undefined;
            instantiatePermission?: {
                permission?: import("cosmjs-types/cosmwasm/wasm/v1/types").AccessType | undefined;
                address?: string | undefined;
                addresses?: string[] | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        title?: string | undefined;
        description?: string | undefined;
        accessConfigUpdates?: ({
            codeId?: bigint | undefined;
            instantiatePermission?: {
                permission?: import("cosmjs-types/cosmwasm/wasm/v1/types").AccessType | undefined;
                address?: string | undefined;
                addresses?: string[] | undefined;
            } | undefined;
        }[] & ({
            codeId?: bigint | undefined;
            instantiatePermission?: {
                permission?: import("cosmjs-types/cosmwasm/wasm/v1/types").AccessType | undefined;
                address?: string | undefined;
                addresses?: string[] | undefined;
            } | undefined;
        } & {
            codeId?: bigint | undefined;
            instantiatePermission?: ({
                permission?: import("cosmjs-types/cosmwasm/wasm/v1/types").AccessType | undefined;
                address?: string | undefined;
                addresses?: string[] | undefined;
            } & {
                permission?: import("cosmjs-types/cosmwasm/wasm/v1/types").AccessType | undefined;
                address?: string | undefined;
                addresses?: (string[] & Record<Exclude<keyof I_11["accessConfigUpdates"][number]["instantiatePermission"]["addresses"], keyof string[]>, never>) | undefined;
            } & Record<Exclude<keyof I_11["accessConfigUpdates"][number]["instantiatePermission"], keyof import("cosmjs-types/cosmwasm/wasm/v1/types").AccessConfig>, never>) | undefined;
        } & Record<Exclude<keyof I_11["accessConfigUpdates"][number], keyof import("cosmjs-types/cosmwasm/wasm/v1/proposal").AccessConfigUpdate>, never>)[] & Record<Exclude<keyof I_11["accessConfigUpdates"], keyof {
            codeId?: bigint | undefined;
            instantiatePermission?: {
                permission?: import("cosmjs-types/cosmwasm/wasm/v1/types").AccessType | undefined;
                address?: string | undefined;
                addresses?: string[] | undefined;
            } | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I_11, keyof UpdateInstantiateConfigProposal>, never>>(object: I_11): UpdateInstantiateConfigProposal;
})[] | (string | {
    typeUrl: string;
    encode(message: MsgStoreCode, writer?: import("cosmjs-types/binary").BinaryWriter | undefined): import("cosmjs-types/binary").BinaryWriter;
    decode(input: import("cosmjs-types/binary").BinaryReader | Uint8Array, length?: number | undefined): MsgStoreCode;
    fromJSON(object: any): MsgStoreCode;
    toJSON(message: MsgStoreCode): unknown;
    fromPartial<I_12 extends {
        sender?: string | undefined;
        wasmByteCode?: Uint8Array | undefined;
        instantiatePermission?: {
            permission?: import("cosmjs-types/cosmwasm/wasm/v1/types").AccessType | undefined;
            address?: string | undefined;
            addresses?: string[] | undefined;
        } | undefined;
    } & {
        sender?: string | undefined;
        wasmByteCode?: Uint8Array | undefined;
        instantiatePermission?: ({
            permission?: import("cosmjs-types/cosmwasm/wasm/v1/types").AccessType | undefined;
            address?: string | undefined;
            addresses?: string[] | undefined;
        } & {
            permission?: import("cosmjs-types/cosmwasm/wasm/v1/types").AccessType | undefined;
            address?: string | undefined;
            addresses?: (string[] & Record<Exclude<keyof I_12["instantiatePermission"]["addresses"], keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I_12["instantiatePermission"], keyof import("cosmjs-types/cosmwasm/wasm/v1/types").AccessConfig>, never>) | undefined;
    } & Record<Exclude<keyof I_12, keyof MsgStoreCode>, never>>(object: I_12): MsgStoreCode;
})[] | (string | {
    typeUrl: string;
    encode(message: MsgInstantiateContract, writer?: import("cosmjs-types/binary").BinaryWriter | undefined): import("cosmjs-types/binary").BinaryWriter;
    decode(input: import("cosmjs-types/binary").BinaryReader | Uint8Array, length?: number | undefined): MsgInstantiateContract;
    fromJSON(object: any): MsgInstantiateContract;
    toJSON(message: MsgInstantiateContract): unknown;
    fromPartial<I_13 extends {
        sender?: string | undefined;
        admin?: string | undefined;
        codeId?: bigint | undefined;
        label?: string | undefined;
        msg?: Uint8Array | undefined;
        funds?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
    } & {
        sender?: string | undefined;
        admin?: string | undefined;
        codeId?: bigint | undefined;
        label?: string | undefined;
        msg?: Uint8Array | undefined;
        funds?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        }[] & ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I_13["funds"][number], keyof import("cosmjs-types/cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_13["funds"], keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I_13, keyof MsgInstantiateContract>, never>>(object: I_13): MsgInstantiateContract;
})[] | (string | {
    typeUrl: string;
    encode(message: MsgMigrateContract, writer?: import("cosmjs-types/binary").BinaryWriter | undefined): import("cosmjs-types/binary").BinaryWriter;
    decode(input: import("cosmjs-types/binary").BinaryReader | Uint8Array, length?: number | undefined): MsgMigrateContract;
    fromJSON(object: any): MsgMigrateContract;
    toJSON(message: MsgMigrateContract): unknown;
    fromPartial<I_14 extends {
        sender?: string | undefined;
        contract?: string | undefined;
        codeId?: bigint | undefined;
        msg?: Uint8Array | undefined;
    } & {
        sender?: string | undefined;
        contract?: string | undefined;
        codeId?: bigint | undefined;
        msg?: Uint8Array | undefined;
    } & Record<Exclude<keyof I_14, keyof MsgMigrateContract>, never>>(object: I_14): MsgMigrateContract;
})[] | (string | {
    typeUrl: string;
    encode(message: MsgUpdateAdmin, writer?: import("cosmjs-types/binary").BinaryWriter | undefined): import("cosmjs-types/binary").BinaryWriter;
    decode(input: import("cosmjs-types/binary").BinaryReader | Uint8Array, length?: number | undefined): MsgUpdateAdmin;
    fromJSON(object: any): MsgUpdateAdmin;
    toJSON(message: MsgUpdateAdmin): unknown;
    fromPartial<I_15 extends {
        sender?: string | undefined;
        newAdmin?: string | undefined;
        contract?: string | undefined;
    } & {
        sender?: string | undefined;
        newAdmin?: string | undefined;
        contract?: string | undefined;
    } & Record<Exclude<keyof I_15, keyof MsgUpdateAdmin>, never>>(object: I_15): MsgUpdateAdmin;
})[] | (string | {
    typeUrl: string;
    encode(message: MsgClearAdmin, writer?: import("cosmjs-types/binary").BinaryWriter | undefined): import("cosmjs-types/binary").BinaryWriter;
    decode(input: import("cosmjs-types/binary").BinaryReader | Uint8Array, length?: number | undefined): MsgClearAdmin;
    fromJSON(object: any): MsgClearAdmin;
    toJSON(message: MsgClearAdmin): unknown;
    fromPartial<I_16 extends {
        sender?: string | undefined;
        contract?: string | undefined;
    } & {
        sender?: string | undefined;
        contract?: string | undefined;
    } & Record<Exclude<keyof I_16, keyof MsgClearAdmin>, never>>(object: I_16): MsgClearAdmin;
})[] | (string | {
    typeUrl: string;
    encode(message: MsgExecuteContract, writer?: import("cosmjs-types/binary").BinaryWriter | undefined): import("cosmjs-types/binary").BinaryWriter;
    decode(input: import("cosmjs-types/binary").BinaryReader | Uint8Array, length?: number | undefined): MsgExecuteContract;
    fromJSON(object: any): MsgExecuteContract;
    toJSON(message: MsgExecuteContract): unknown;
    fromPartial<I_17 extends {
        sender?: string | undefined;
        contract?: string | undefined;
        msg?: Uint8Array | undefined;
        funds?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
    } & {
        sender?: string | undefined;
        contract?: string | undefined;
        msg?: Uint8Array | undefined;
        funds?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        }[] & ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I_17["funds"][number], keyof import("cosmjs-types/cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_17["funds"], keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I_17, keyof MsgExecuteContract>, never>>(object: I_17): MsgExecuteContract;
})[] | (string | {
    typeUrl: string;
    encode(message: MsgUpdateInstantiateConfig, writer?: import("cosmjs-types/binary").BinaryWriter | undefined): import("cosmjs-types/binary").BinaryWriter;
    decode(input: import("cosmjs-types/binary").BinaryReader | Uint8Array, length?: number | undefined): MsgUpdateInstantiateConfig;
    fromJSON(object: any): MsgUpdateInstantiateConfig;
    toJSON(message: MsgUpdateInstantiateConfig): unknown;
    fromPartial<I_18 extends {
        sender?: string | undefined;
        codeId?: bigint | undefined;
        newInstantiatePermission?: {
            permission?: import("cosmjs-types/cosmwasm/wasm/v1/types").AccessType | undefined;
            address?: string | undefined;
            addresses?: string[] | undefined;
        } | undefined;
    } & {
        sender?: string | undefined;
        codeId?: bigint | undefined;
        newInstantiatePermission?: ({
            permission?: import("cosmjs-types/cosmwasm/wasm/v1/types").AccessType | undefined;
            address?: string | undefined;
            addresses?: string[] | undefined;
        } & {
            permission?: import("cosmjs-types/cosmwasm/wasm/v1/types").AccessType | undefined;
            address?: string | undefined;
            addresses?: (string[] & Record<Exclude<keyof I_18["newInstantiatePermission"]["addresses"], keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I_18["newInstantiatePermission"], keyof import("cosmjs-types/cosmwasm/wasm/v1/types").AccessConfig>, never>) | undefined;
    } & Record<Exclude<keyof I_18, keyof MsgUpdateInstantiateConfig>, never>>(object: I_18): MsgUpdateInstantiateConfig;
})[] | (string | {
    typeUrl: string;
    encode(message: SoftwareUpgradeProposal, writer?: import("cosmjs-types/binary").BinaryWriter | undefined): import("cosmjs-types/binary").BinaryWriter;
    decode(input: import("cosmjs-types/binary").BinaryReader | Uint8Array, length?: number | undefined): SoftwareUpgradeProposal;
    fromJSON(object: any): SoftwareUpgradeProposal;
    toJSON(message: SoftwareUpgradeProposal): unknown;
    fromPartial<I_19 extends {
        title?: string | undefined;
        description?: string | undefined;
        plan?: {
            name?: string | undefined;
            time?: {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } | undefined;
            height?: bigint | undefined;
            info?: string | undefined;
            upgradedClientState?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
        } | undefined;
    } & {
        title?: string | undefined;
        description?: string | undefined;
        plan?: ({
            name?: string | undefined;
            time?: {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } | undefined;
            height?: bigint | undefined;
            info?: string | undefined;
            upgradedClientState?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
        } & {
            name?: string | undefined;
            time?: ({
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I_19["plan"]["time"], keyof import("cosmjs-types/google/protobuf/timestamp").Timestamp>, never>) | undefined;
            height?: bigint | undefined;
            info?: string | undefined;
            upgradedClientState?: ({
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } & {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } & Record<Exclude<keyof I_19["plan"]["upgradedClientState"], keyof import("cosmjs-types/google/protobuf/any").Any>, never>) | undefined;
        } & Record<Exclude<keyof I_19["plan"], keyof import("cosmjs-types/cosmos/upgrade/v1beta1/upgrade").Plan>, never>) | undefined;
    } & Record<Exclude<keyof I_19, keyof SoftwareUpgradeProposal>, never>>(object: I_19): SoftwareUpgradeProposal;
})[] | (string | {
    typeUrl: string;
    encode(message: MsgSoftwareUpgrade, writer?: import("cosmjs-types/binary").BinaryWriter | undefined): import("cosmjs-types/binary").BinaryWriter;
    decode(input: import("cosmjs-types/binary").BinaryReader | Uint8Array, length?: number | undefined): MsgSoftwareUpgrade;
    fromJSON(object: any): MsgSoftwareUpgrade;
    toJSON(message: MsgSoftwareUpgrade): unknown;
    fromPartial<I_20 extends {
        authority?: string | undefined;
        plan?: {
            name?: string | undefined;
            time?: {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } | undefined;
            height?: bigint | undefined;
            info?: string | undefined;
            upgradedClientState?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
        } | undefined;
    } & {
        authority?: string | undefined;
        plan?: ({
            name?: string | undefined;
            time?: {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } | undefined;
            height?: bigint | undefined;
            info?: string | undefined;
            upgradedClientState?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
        } & {
            name?: string | undefined;
            time?: ({
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I_20["plan"]["time"], keyof import("cosmjs-types/google/protobuf/timestamp").Timestamp>, never>) | undefined;
            height?: bigint | undefined;
            info?: string | undefined;
            upgradedClientState?: ({
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } & {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } & Record<Exclude<keyof I_20["plan"]["upgradedClientState"], keyof import("cosmjs-types/google/protobuf/any").Any>, never>) | undefined;
        } & Record<Exclude<keyof I_20["plan"], keyof import("cosmjs-types/cosmos/upgrade/v1beta1/upgrade").Plan>, never>) | undefined;
    } & Record<Exclude<keyof I_20, keyof MsgSoftwareUpgrade>, never>>(object: I_20): MsgSoftwareUpgrade;
})[] | (string | {
    encode(message: CreateHookProposal, writer?: import("cosmjs-types/binary").BinaryWriter): import("cosmjs-types/binary").BinaryWriter;
    decode(input: import("cosmjs-types/binary").BinaryReader | Uint8Array, length?: number | undefined): CreateHookProposal;
    fromJSON(object: any): CreateHookProposal;
    toJSON(message: CreateHookProposal): unknown;
    fromPartial(object: {
        title?: string | undefined;
        description?: string | undefined;
        executor?: string | undefined;
        contract?: string | undefined;
        msg?: Uint8Array | undefined;
        frequency?: number | undefined;
        funds?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
    }): CreateHookProposal;
})[] | (string | {
    encode(message: DeleteHookProposal, writer?: import("cosmjs-types/binary").BinaryWriter): import("cosmjs-types/binary").BinaryWriter;
    decode(input: import("cosmjs-types/binary").BinaryReader | Uint8Array, length?: number | undefined): DeleteHookProposal;
    fromJSON(object: any): DeleteHookProposal;
    toJSON(message: DeleteHookProposal): unknown;
    fromPartial(object: {
        title?: string | undefined;
        description?: string | undefined;
        id?: number | undefined;
    }): DeleteHookProposal;
})[] | (string | {
    typeUrl: string;
    encode(message: TextProposal, writer?: import("cosmjs-types/binary").BinaryWriter | undefined): import("cosmjs-types/binary").BinaryWriter;
    decode(input: import("cosmjs-types/binary").BinaryReader | Uint8Array, length?: number | undefined): TextProposal;
    fromJSON(object: any): TextProposal;
    toJSON(message: TextProposal): unknown;
    fromPartial<I_21 extends {
        title?: string | undefined;
        description?: string | undefined;
    } & {
        title?: string | undefined;
        description?: string | undefined;
    } & Record<Exclude<keyof I_21, keyof TextProposal>, never>>(object: I_21): TextProposal;
})[] | (string | {
    typeUrl: string;
    encode(message: MsgExecLegacyContent, writer?: import("cosmjs-types/binary").BinaryWriter | undefined): import("cosmjs-types/binary").BinaryWriter;
    decode(input: import("cosmjs-types/binary").BinaryReader | Uint8Array, length?: number | undefined): MsgExecLegacyContent;
    fromJSON(object: any): MsgExecLegacyContent;
    toJSON(message: MsgExecLegacyContent): unknown;
    fromPartial<I_22 extends {
        content?: {
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } | undefined;
        authority?: string | undefined;
    } & {
        content?: ({
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } & {
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } & Record<Exclude<keyof I_22["content"], keyof import("cosmjs-types/google/protobuf/any").Any>, never>) | undefined;
        authority?: string | undefined;
    } & Record<Exclude<keyof I_22, keyof MsgExecLegacyContent>, never>>(object: I_22): MsgExecLegacyContent;
})[] | (string | {
    typeUrl: string;
    encode(message: ClientUpdateProposal, writer?: import("cosmjs-types/binary").BinaryWriter | undefined): import("cosmjs-types/binary").BinaryWriter;
    decode(input: import("cosmjs-types/binary").BinaryReader | Uint8Array, length?: number | undefined): ClientUpdateProposal;
    fromJSON(object: any): ClientUpdateProposal;
    toJSON(message: ClientUpdateProposal): unknown;
    fromPartial<I_23 extends {
        title?: string | undefined;
        description?: string | undefined;
        subjectClientId?: string | undefined;
        substituteClientId?: string | undefined;
    } & {
        title?: string | undefined;
        description?: string | undefined;
        subjectClientId?: string | undefined;
        substituteClientId?: string | undefined;
    } & Record<Exclude<keyof I_23, keyof ClientUpdateProposal>, never>>(object: I_23): ClientUpdateProposal;
})[])[];
