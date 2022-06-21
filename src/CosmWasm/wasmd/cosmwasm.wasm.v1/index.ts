import { EncodeObject } from "@cosmjs/proto-signing";

import { Api } from "./rest";

import { MsgIBCCloseChannel, MsgIBCSend } from "./types/ibc";
import {
  MsgExecuteContract,
  MsgStoreCode,
  MsgClearAdmin,
  MsgUpdateAdmin,
  MsgMigrateContract,
  MsgInstantiateContract,
} from "./types/tx";
import {
  StoreCodeProposal,
  InstantiateContractProposal,
  ExecuteContractProposal,
  MigrateContractProposal,
  UpdateAdminProposal,
  ClearAdminProposal,
  PinCodesProposal,
  UnpinCodesProposal,
} from "./types/proposal";

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
  msgExecuteContract: (data: MsgExecuteContract): EncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial(data),
    };
  },
  msgStoreCode: (data: MsgStoreCode): EncodeObject => ({
    typeUrl: "/cosmwasm.wasm.v1.MsgStoreCode",
    value: MsgStoreCode.fromPartial(data),
  }),
  msgClearAdmin: (data: MsgClearAdmin): EncodeObject => ({
    typeUrl: "/cosmwasm.wasm.v1.MsgClearAdmin",
    value: MsgClearAdmin.fromPartial(data),
  }),
  msgIBCCloseChannel: (data: MsgIBCCloseChannel): EncodeObject => ({
    typeUrl: "/cosmwasm.wasm.v1.MsgIBCCloseChannel",
    value: MsgIBCCloseChannel.fromPartial(data),
  }),
  msgIBCSend: (data: MsgIBCSend): EncodeObject => ({
    typeUrl: "/cosmwasm.wasm.v1.MsgIBCSend",
    value: MsgIBCSend.fromPartial(data),
  }),
  msgUpdateAdmin: (data: MsgUpdateAdmin): EncodeObject => ({
    typeUrl: "/cosmwasm.wasm.v1.MsgUpdateAdmin",
    value: MsgUpdateAdmin.fromPartial(data),
  }),
  msgMigrateContract: (data: MsgMigrateContract): EncodeObject => ({
    typeUrl: "/cosmwasm.wasm.v1.MsgMigrateContract",
    value: MsgMigrateContract.fromPartial(data),
  }),
  msgInstantiateContract: (data: MsgInstantiateContract): EncodeObject => ({
    typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract",
    value: MsgInstantiateContract.fromPartial(data),
  }),
};

export { txClient, types, Api };
