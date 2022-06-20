import { MsgExecuteContract } from "./types/cosmwasm/wasm/v1/tx";
import { MsgStoreCode } from "./types/cosmwasm/wasm/v1/tx";
import { MsgClearAdmin } from "./types/cosmwasm/wasm/v1/tx";
import { MsgIBCCloseChannel } from "./types/cosmwasm/wasm/v1/ibc";
import { MsgIBCSend } from "./types/cosmwasm/wasm/v1/ibc";
import { MsgUpdateAdmin } from "./types/cosmwasm/wasm/v1/tx";
import { MsgMigrateContract } from "./types/cosmwasm/wasm/v1/tx";
import { MsgInstantiateContract } from "./types/cosmwasm/wasm/v1/tx";
import { StoreCodeProposal, InstantiateContractProposal, ExecuteContractProposal, MigrateContractProposal, UpdateAdminProposal, ClearAdminProposal, PinCodesProposal, UnpinCodesProposal, } from "./types/cosmwasm/wasm/v1/proposal";
import { Api } from "./rest";
import { util, configure } from "protobufjs/minimal";
import Long from "long";
const types = [
    ["/cosmwasm.wasm.v1.MsgExecuteContract", MsgExecuteContract],
    ["/cosmwasm.wasm.v1.MsgStoreCode", MsgStoreCode],
    ["/cosmwasm.wasm.v1.MsgClearAdmin", MsgClearAdmin],
    ["/cosmwasm.wasm.v1.MsgIBCCloseChannel", MsgIBCCloseChannel],
    ["/cosmwasm.wasm.v1.MsgIBCSend", MsgIBCSend],
    ["/cosmwasm.wasm.v1.MsgUpdateAdmin", MsgUpdateAdmin],
    ["/cosmwasm.wasm.v1.MsgMigrateContract", MsgMigrateContract],
    ["/cosmwasm.wasm.v1.MsgInstantiateContract", MsgInstantiateContract],
    ["/cosmwasm.wasm.v1.StoreCodeProposal", StoreCodeProposal],
    [
        "/cosmwasm.wasm.v1.InstantiateContractProposal",
        InstantiateContractProposal,
    ],
    ["/cosmwasm.wasm.v1.ExecuteContractProposal", ExecuteContractProposal],
    ["/cosmwasm.wasm.v1.MigrateContractProposal", MigrateContractProposal],
    ["/cosmwasm.wasm.v1.UpdateAdminProposal", UpdateAdminProposal],
    ["/cosmwasm.wasm.v1.ClearAdminProposal", ClearAdminProposal],
    ["/cosmwasm.wasm.v1.PinCodesProposal", PinCodesProposal],
    ["/cosmwasm.wasm.v1.UnpinCodesProposal", UnpinCodesProposal],
];
const txClient = {
    msgExecuteContract: (data) => {
        return {
            typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
            value: MsgExecuteContract.fromPartial(data),
        };
    },
    msgStoreCode: (data) => ({
        typeUrl: "/cosmwasm.wasm.v1.MsgStoreCode",
        value: MsgStoreCode.fromPartial(data),
    }),
    msgClearAdmin: (data) => ({
        typeUrl: "/cosmwasm.wasm.v1.MsgClearAdmin",
        value: MsgClearAdmin.fromPartial(data),
    }),
    msgIBCCloseChannel: (data) => ({
        typeUrl: "/cosmwasm.wasm.v1.MsgIBCCloseChannel",
        value: MsgIBCCloseChannel.fromPartial(data),
    }),
    msgIBCSend: (data) => ({
        typeUrl: "/cosmwasm.wasm.v1.MsgIBCSend",
        value: MsgIBCSend.fromPartial(data),
    }),
    msgUpdateAdmin: (data) => ({
        typeUrl: "/cosmwasm.wasm.v1.MsgUpdateAdmin",
        value: MsgUpdateAdmin.fromPartial(data),
    }),
    msgMigrateContract: (data) => ({
        typeUrl: "/cosmwasm.wasm.v1.MsgMigrateContract",
        value: MsgMigrateContract.fromPartial(data),
    }),
    msgInstantiateContract: (data) => ({
        typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract",
        value: MsgInstantiateContract.fromPartial(data),
    }),
};
console.log({ util, Long });
if (util.Long !== Long) {
    util.Long = Long;
    configure();
}
console.log({ util, Long });
export { txClient, types, Api };
