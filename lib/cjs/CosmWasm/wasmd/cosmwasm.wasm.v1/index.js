"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Api = exports.types = exports.txClient = void 0;
const rest_1 = require("./rest");
Object.defineProperty(exports, "Api", { enumerable: true, get: function () { return rest_1.Api; } });
const ibc_1 = require("./types/ibc");
const tx_1 = require("./types/tx");
const proposal_1 = require("./types/proposal");
const types = [
    ["/cosmwasm.wasm.v1.MsgExecuteContract", tx_1.MsgExecuteContract],
    ["/cosmwasm.wasm.v1.MsgStoreCode", tx_1.MsgStoreCode],
    ["/cosmwasm.wasm.v1.MsgClearAdmin", tx_1.MsgClearAdmin],
    ["/cosmwasm.wasm.v1.MsgIBCCloseChannel", ibc_1.MsgIBCCloseChannel],
    ["/cosmwasm.wasm.v1.MsgIBCSend", ibc_1.MsgIBCSend],
    ["/cosmwasm.wasm.v1.MsgUpdateAdmin", tx_1.MsgUpdateAdmin],
    ["/cosmwasm.wasm.v1.MsgMigrateContract", tx_1.MsgMigrateContract],
    ["/cosmwasm.wasm.v1.MsgInstantiateContract", tx_1.MsgInstantiateContract],
    ["/cosmwasm.wasm.v1.StoreCodeProposal", proposal_1.StoreCodeProposal],
    [
        "/cosmwasm.wasm.v1.InstantiateContractProposal",
        proposal_1.InstantiateContractProposal,
    ],
    ["/cosmwasm.wasm.v1.ExecuteContractProposal", proposal_1.ExecuteContractProposal],
    ["/cosmwasm.wasm.v1.MigrateContractProposal", proposal_1.MigrateContractProposal],
    ["/cosmwasm.wasm.v1.UpdateAdminProposal", proposal_1.UpdateAdminProposal],
    ["/cosmwasm.wasm.v1.ClearAdminProposal", proposal_1.ClearAdminProposal],
    ["/cosmwasm.wasm.v1.PinCodesProposal", proposal_1.PinCodesProposal],
    ["/cosmwasm.wasm.v1.UnpinCodesProposal", proposal_1.UnpinCodesProposal],
];
exports.types = types;
const txClient = {
    msgExecuteContract: (data) => {
        return {
            typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
            value: tx_1.MsgExecuteContract.fromPartial(data),
        };
    },
    msgStoreCode: (data) => ({
        typeUrl: "/cosmwasm.wasm.v1.MsgStoreCode",
        value: tx_1.MsgStoreCode.fromPartial(data),
    }),
    msgClearAdmin: (data) => ({
        typeUrl: "/cosmwasm.wasm.v1.MsgClearAdmin",
        value: tx_1.MsgClearAdmin.fromPartial(data),
    }),
    msgIBCCloseChannel: (data) => ({
        typeUrl: "/cosmwasm.wasm.v1.MsgIBCCloseChannel",
        value: ibc_1.MsgIBCCloseChannel.fromPartial(data),
    }),
    msgIBCSend: (data) => ({
        typeUrl: "/cosmwasm.wasm.v1.MsgIBCSend",
        value: ibc_1.MsgIBCSend.fromPartial(data),
    }),
    msgUpdateAdmin: (data) => ({
        typeUrl: "/cosmwasm.wasm.v1.MsgUpdateAdmin",
        value: tx_1.MsgUpdateAdmin.fromPartial(data),
    }),
    msgMigrateContract: (data) => ({
        typeUrl: "/cosmwasm.wasm.v1.MsgMigrateContract",
        value: tx_1.MsgMigrateContract.fromPartial(data),
    }),
    msgInstantiateContract: (data) => ({
        typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract",
        value: tx_1.MsgInstantiateContract.fromPartial(data),
    }),
};
exports.txClient = txClient;
