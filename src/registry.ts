import { wasmTypes } from "@cosmjs/cosmwasm-stargate/build/modules";
import { Registry } from "@cosmjs/proto-signing";
import * as s from "@cosmjs/stargate";
import { ibcTypes } from "@cosmjs/stargate/build/modules";
import { assert } from "@cosmjs/utils";
import { BaseAccount } from "cosmjs-types/cosmos/auth/v1beta1/auth";
import { MsgUpdateParams } from "cosmjs-types/cosmos/bank/v1beta1/tx";
import { CommunityPoolSpendProposal } from "cosmjs-types/cosmos/distribution/v1beta1/distribution";
import { MsgCommunityPoolSpend } from "cosmjs-types/cosmos/distribution/v1beta1/tx";
import { MsgExecLegacyContent } from "cosmjs-types/cosmos/gov/v1/tx";
import { TextProposal } from "cosmjs-types/cosmos/gov/v1beta1/gov";
import { ParameterChangeProposal } from "cosmjs-types/cosmos/params/v1beta1/params";
import { MsgCancelUnbondingDelegation } from "cosmjs-types/cosmos/staking/v1beta1/tx";
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
import {
  MsgRegisterInterchainAccount,
  MsgSendTx,
} from "cosmjs-types/ibc/applications/interchain_accounts/controller/v1/tx";
import { ClientUpdateProposal } from "cosmjs-types/ibc/core/client/v1/client";
import {
  ClientState,
  ConsensusState,
  Header,
  Misbehaviour,
} from "cosmjs-types/ibc/lightclients/tendermint/v1/tendermint";
import * as batch from "./batch";
import * as eth from "./ethermint/types";
import * as gravity from "./gravity/v1";
import * as inj from "./injective/types";
import * as denom from "./kujira/denom";
import * as oracle from "./kujira/oracle";
import {
  CreateHookProposal,
  DeleteHookProposal,
  UpdateHookProposal,
} from "./kujira/scheduler/types/proposal";
import { StridePeriodicVestingAccount } from "./stride/vesting";
const proposalTypes = [
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
  // ["/cosmwasm.wasm.v1.MsgPinCodes", MsgPinCodes],
  // ["/cosmwasm.wasm.v1.MsgUnpinCodes", MsgUnpinCodes],
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

const extraIbc = [
  ["/ibc.lightclients.tendermint.v1.Header", Header],
  ["/ibc.lightclients.tendermint.v1.ClientState", ClientState],
  ["/ibc.lightclients.tendermint.v1.ConsensusState", ConsensusState],
  ["/ibc.lightclients.tendermint.v1.Misbehaviour", Misbehaviour],
  [
    "/ibc.applications.interchain_accounts.controller.v1.MsgRegisterInterchainAccount",
    MsgRegisterInterchainAccount,
  ],
  ["/ibc.applications.interchain_accounts.controller.v1.MsgSendTx", MsgSendTx],
];

const types = [
  ...s.defaultRegistryTypes,
  [
    "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation",
    MsgCancelUnbondingDelegation,
  ],
  ...denom.types,
  // ...ethermintEvm.types,
  // ...ethermintFeemarket.types,
  ...oracle.types,
  ...wasmTypes,
  ...ibcTypes,
  ...proposalTypes,
  ...extraIbc,
  ...gravity.types,
  ...batch.types,
];

export const registry = new Registry(<any>types);

export const accountParser: s.AccountParser = (acc) => {
  switch (acc.typeUrl) {
    case "/stride.vesting.StridePeriodicVestingAccount":
      const baseAccount = StridePeriodicVestingAccount.decode(acc.value)
        .baseVestingAccount?.baseAccount;
      assert(baseAccount);
      return s.accountFromAny({
        typeUrl: "/cosmos.auth.v1beta1.BaseAccount",
        value: BaseAccount.encode(baseAccount).finish(),
      });
    case "/injective.types.v1beta1.EthAccount":
      const injAccount = inj.EthAccount.decode(acc.value as Uint8Array);
      const baseInjAccount = injAccount.baseAccount!;
      const pubKey = baseInjAccount.pubKey;

      return {
        address: baseInjAccount.address,
        pubkey: pubKey
          ? {
              type: "/injective.crypto.v1beta1.ethsecp256k1.PubKey",
              value: Buffer.from(pubKey.value).toString("base64"),
            }
          : null,
        accountNumber: Number(baseInjAccount.accountNumber),
        sequence: Number(baseInjAccount.sequence),
      };

    case "/ethermint.types.v1.EthAccount":
      const account = eth.EthAccount.decode(acc.value as Uint8Array);
      const baseEthAccount = account.baseAccount!;
      const pubKeyEth = baseEthAccount.pubKey;

      return {
        address: baseEthAccount.address,
        pubkey: pubKeyEth
          ? {
              type: "/ethermint.crypto.v1.ethsecp256k1.PubKey",
              value: Buffer.from(pubKeyEth.value).toString("base64"),
            }
          : null,
        accountNumber: Number(baseEthAccount.accountNumber),
        sequence: Number(baseEthAccount.sequence),
      };
    default:
      return s.accountFromAny(acc);
  }
};
