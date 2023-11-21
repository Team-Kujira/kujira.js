"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.proposalTypes = void 0;
const tx_1 = require("cosmjs-types/cosmos/bank/v1beta1/tx");
const distribution_1 = require("cosmjs-types/cosmos/distribution/v1beta1/distribution");
const tx_2 = require("cosmjs-types/cosmos/distribution/v1beta1/tx");
const tx_3 = require("cosmjs-types/cosmos/gov/v1/tx");
const gov_1 = require("cosmjs-types/cosmos/gov/v1beta1/gov");
const params_1 = require("cosmjs-types/cosmos/params/v1beta1/params");
const tx_4 = require("cosmjs-types/cosmos/upgrade/v1beta1/tx");
const upgrade_1 = require("cosmjs-types/cosmos/upgrade/v1beta1/upgrade");
const proposal_1 = require("cosmjs-types/cosmwasm/wasm/v1/proposal");
const tx_5 = require("cosmjs-types/cosmwasm/wasm/v1/tx");
const client_1 = require("cosmjs-types/ibc/core/client/v1/client");
const proposal_2 = require("./kujira/kujira.scheduler/types/proposal");
exports.proposalTypes = [
    [
        "/cosmos.distribution.v1beta1.CommunityPoolSpendProposal",
        distribution_1.CommunityPoolSpendProposal,
    ],
    ["/cosmos.distribution.v1beta1.MsgCommunityPoolSpend", tx_2.MsgCommunityPoolSpend],
    ["/cosmos.params.v1beta1.ParameterChangeProposal", params_1.ParameterChangeProposal],
    ["/cosmos.params.v1beta1.MsgUpdateParams", tx_1.MsgUpdateParams],
    ["/cosmwasm.wasm.v1.StoreCodeProposal", proposal_1.StoreCodeProposal],
    [
        "/cosmwasm.wasm.v1.InstantiateContractProposal",
        proposal_1.InstantiateContractProposal,
    ],
    ["/cosmwasm.wasm.v1.MigrateContractProposal", proposal_1.MigrateContractProposal],
    ["/cosmwasm.wasm.v1.UpdateAdminProposal", proposal_1.UpdateAdminProposal],
    ["/cosmwasm.wasm.v1.ClearAdminProposal", proposal_1.ClearAdminProposal],
    ["/cosmwasm.wasm.v1.PinCodesProposal", proposal_1.PinCodesProposal],
    ["/cosmwasm.wasm.v1.UnpinCodesProposal", proposal_1.UnpinCodesProposal],
    ["/cosmwasm.wasm.v1.ExecuteContractProposal", proposal_1.ExecuteContractProposal],
    [
        "/cosmwasm.wasm.v1.UpdateInstantiateConfigProposal",
        proposal_1.UpdateInstantiateConfigProposal,
    ],
    ["/cosmwasm.wasm.v1.MsgStoreCode", tx_5.MsgStoreCode],
    ["/cosmwasm.wasm.v1.MsgInstantiateContract", tx_5.MsgInstantiateContract],
    ["/cosmwasm.wasm.v1.MsgMigrateContract", tx_5.MsgMigrateContract],
    ["/cosmwasm.wasm.v1.MsgUpdateAdmin", tx_5.MsgUpdateAdmin],
    ["/cosmwasm.wasm.v1.MsgClearAdmin", tx_5.MsgClearAdmin],
    // ["/cosmwasm.wasm.v1.MsgPinCodes", MsgPinCodes],
    // ["/cosmwasm.wasm.v1.MsgUnpinCodes", MsgUnpinCodes],
    ["/cosmwasm.wasm.v1.MsgExecuteContract", tx_5.MsgExecuteContract],
    ["/cosmwasm.wasm.v1.MsgUpdateInstantiateConfig", tx_5.MsgUpdateInstantiateConfig],
    ["/cosmos.upgrade.v1beta1.SoftwareUpgradeProposal", upgrade_1.SoftwareUpgradeProposal],
    ["/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade", tx_4.MsgSoftwareUpgrade],
    ["/kujira.scheduler.CreateHookProposal", proposal_2.CreateHookProposal],
    ["/kujira.scheduler.UpdateHookProposal", proposal_2.UpdateHookProposal],
    ["/kujira.scheduler.DeleteHookProposal", proposal_2.DeleteHookProposal],
    ["/cosmos.gov.v1beta1.TextProposal", gov_1.TextProposal],
    ["/cosmos.gov.v1.MsgExecLegacyContent", tx_3.MsgExecLegacyContent],
    ["/ibc.core.client.v1.ClientUpdateProposal", client_1.ClientUpdateProposal],
];
