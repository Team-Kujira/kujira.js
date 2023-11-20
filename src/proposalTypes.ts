import { MsgUpdateParams } from "cosmjs-types/cosmos/bank/v1beta1/tx";
import { CommunityPoolSpendProposal } from "cosmjs-types/cosmos/distribution/v1beta1/distribution";
import { MsgCommunityPoolSpend } from "cosmjs-types/cosmos/distribution/v1beta1/tx";
import { MsgExecLegacyContent } from "cosmjs-types/cosmos/gov/v1/tx";
import { TextProposal } from "cosmjs-types/cosmos/gov/v1beta1/gov";
import { ParameterChangeProposal } from "cosmjs-types/cosmos/params/v1beta1/params";
import { MsgSoftwareUpgrade } from "cosmjs-types/cosmos/upgrade/v1beta1/tx";
import { SoftwareUpgradeProposal } from "cosmjs-types/cosmos/upgrade/v1beta1/upgrade";
import {
  ClearAdminProposal,
  ExecuteContractProposal,
  InstantiateContractProposal,
  MigrateContractProposal,
  PinCodesProposal,
  StoreCodeProposal,
  UnpinCodesProposal,
  UpdateAdminProposal,
  UpdateInstantiateConfigProposal,
} from "cosmjs-types/cosmwasm/wasm/v1/proposal";
import {
  MsgClearAdmin,
  MsgExecuteContract,
  MsgInstantiateContract,
  MsgMigrateContract,
  MsgStoreCode,
  MsgUpdateAdmin,
  MsgUpdateInstantiateConfig,
} from "cosmjs-types/cosmwasm/wasm/v1/tx";
import { ClientUpdateProposal } from "cosmjs-types/ibc/core/client/v1/client";
import {
  CreateHookProposal,
  DeleteHookProposal,
  UpdateHookProposal,
} from "./kujira/kujira.scheduler/types/proposal";

export const proposalTypes = [
  [
    "/cosmos.distribution.v1beta1.CommunityPoolSpendProposal",
    CommunityPoolSpendProposal,
  ],
  ["/cosmos.distribution.v1beta1.MsgCommunityPoolSpend", MsgCommunityPoolSpend],

  ["/cosmos.params.v1beta1.ParameterChangeProposal", ParameterChangeProposal],
  ["/cosmos.params.v1beta1.MsgUpdateParams", MsgUpdateParams],

  ["/cosmwasm.wasm.v1.StoreCodeProposal", StoreCodeProposal],
  [
    "/cosmwasm.wasm.v1.InstantiateContractProposal",
    InstantiateContractProposal,
  ],
  ["/cosmwasm.wasm.v1.MigrateContractProposal", MigrateContractProposal],
  ["/cosmwasm.wasm.v1.UpdateAdminProposal", UpdateAdminProposal],
  ["/cosmwasm.wasm.v1.ClearAdminProposal", ClearAdminProposal],
  ["/cosmwasm.wasm.v1.PinCodesProposal", PinCodesProposal],
  ["/cosmwasm.wasm.v1.UnpinCodesProposal", UnpinCodesProposal],
  ["/cosmwasm.wasm.v1.ExecuteContractProposal", ExecuteContractProposal],
  [
    "/cosmwasm.wasm.v1.UpdateInstantiateConfigProposal",
    UpdateInstantiateConfigProposal,
  ],
  ["/cosmwasm.wasm.v1.MsgStoreCode", MsgStoreCode],
  ["/cosmwasm.wasm.v1.MsgInstantiateContract", MsgInstantiateContract],
  ["/cosmwasm.wasm.v1.MsgMigrateContract", MsgMigrateContract],
  ["/cosmwasm.wasm.v1.MsgUpdateAdmin", MsgUpdateAdmin],
  ["/cosmwasm.wasm.v1.MsgClearAdmin", MsgClearAdmin],
  ["/cosmwasm.wasm.v1.MsgPinCodes", MsgPinCodes],
  ["/cosmwasm.wasm.v1.MsgUnpinCodes", MsgUnpinCodes],
  ["/cosmwasm.wasm.v1.MsgExecuteContract", MsgExecuteContract],
  ["/cosmwasm.wasm.v1.MsgUpdateInstantiateConfig", MsgUpdateInstantiateConfig],

  ["/cosmos.upgrade.v1beta1.SoftwareUpgradeProposal", SoftwareUpgradeProposal],
  ["/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade", MsgSoftwareUpgrade],
  ["/kujira.scheduler.CreateHookProposal", CreateHookProposal],
  ["/kujira.scheduler.UpdateHookProposal", UpdateHookProposal],
  ["/kujira.scheduler.DeleteHookProposal", DeleteHookProposal],
  ["/cosmos.gov.v1beta1.TextProposal", TextProposal],
  ["/cosmos.gov.v1.MsgExecLegacyContent", MsgExecLegacyContent],
  ["/ibc.core.client.v1.ClientUpdateProposal", ClientUpdateProposal],
];
