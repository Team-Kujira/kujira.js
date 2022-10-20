import { Registry } from "@cosmjs/proto-signing";
import * as s from "@cosmjs/stargate";
import { AuthzExtension } from "@cosmjs/stargate/build/modules/authz/queries";
import {
  FeegrantExtension,
  ibcTypes,
  SlashingExtension,
} from "@cosmjs/stargate/build/modules";
import { Tendermint34Client } from "@cosmjs/tendermint-rpc";
import {
  createWasmAminoConverters,
  setupWasmExtension,
  WasmExtension,
} from "@cosmjs/cosmwasm-stargate";
import Long from "long";
import { util, configure } from "protobufjs/minimal";
import * as denom from "./kujira/kujira.denom";
import * as oracle from "./kujira/kujira.oracle";
import { wasmTypes } from "@cosmjs/cosmwasm-stargate/build/modules";
import { DenomExtension, setupDenomExtension } from "./kujira/kujira.denom";
import { OracleExtension, setupOracleExtension } from "./kujira/kujira.oracle";
import {} from "@cosmjs/stargate/build/modules/distribution/messages";
import {
  SchedulerExtension,
  setupSchedulerExtension,
} from "./kujira/kujira.scheduler";
import {
  MsgExec,
  MsgGrant,
  MsgRevoke,
} from "cosmjs-types/cosmos/authz/v1beta1/tx";
import { MsgSend, MsgMultiSend } from "cosmjs-types/cosmos/bank/v1beta1/tx";
import {
  MsgFundCommunityPool,
  MsgSetWithdrawAddress,
  MsgWithdrawDelegatorReward,
  MsgWithdrawValidatorCommission,
} from "cosmjs-types/cosmos/distribution/v1beta1/tx";
import {
  MsgGrantAllowance,
  MsgRevokeAllowance,
} from "cosmjs-types/cosmos/feegrant/v1beta1/tx";
import {
  MsgDeposit,
  MsgSubmitProposal,
  MsgVote,
  MsgVoteWeighted,
} from "cosmjs-types/cosmos/gov/v1beta1/tx";
import {
  MsgBeginRedelegate,
  MsgCreateValidator,
  MsgDelegate,
  MsgEditValidator,
  MsgUndelegate,
} from "cosmjs-types/cosmos/staking/v1beta1/tx";
import { MsgCreateVestingAccount } from "cosmjs-types/cosmos/vesting/v1beta1/tx";
import {
  MsgClearAdmin,
  MsgExecuteContract,
  MsgMigrateContract,
  MsgStoreCode,
  MsgInstantiateContract,
  MsgUpdateAdmin,
} from "cosmjs-types/cosmwasm/wasm/v1/tx";
import { MsgTransfer } from "cosmjs-types/ibc/applications/transfer/v1/tx";
import { CommunityPoolSpendProposal } from "cosmjs-types/cosmos/distribution/v1beta1/distribution";
import { ParameterChangeProposal } from "cosmjs-types/cosmos/params/v1beta1/params";
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
import { setupStakingExtension, StakingExtension } from "./cosmos/staking";
import { GovExtension, setupGovExtension } from "./cosmos/gov";
import { SoftwareUpgradeProposal } from "cosmjs-types/cosmos/upgrade/v1beta1/upgrade";
import {
  Header,
  ClientState,
  ConsensusState,
  Misbehaviour,
} from "cosmjs-types/ibc/lightclients/tendermint/v1/tendermint";

const proposalTypes = [
  [
    "/cosmos.distribution.v1beta1.CommunityPoolSpendProposal",
    CommunityPoolSpendProposal,
  ],
  ["/cosmos.params.v1beta1.ParameterChangeProposal", ParameterChangeProposal],

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
  ["/cosmos.upgrade.v1beta1.SoftwareUpgradeProposal", SoftwareUpgradeProposal],
];

const extraIbc = [
  ["/ibc.lightclients.tendermint.v1.Header", Header],
  ["/ibc.lightclients.tendermint.v1.ClientState", ClientState],
  ["/ibc.lightclients.tendermint.v1.ConsensusState", ConsensusState],
  ["/ibc.lightclients.tendermint.v1.Misbehaviour", Misbehaviour],
];

const types = [
  ...s.defaultRegistryTypes,
  ...denom.types,
  // ...ethermintEvm.types,
  // ...ethermintFeemarket.types,
  ...oracle.types,
  ...wasmTypes,
  ...ibcTypes,
  ...proposalTypes,
  ...extraIbc,
];

export const registry = new Registry(<any>types);

export { FinClient, FinQueryClient } from "./fin";

export const aminoTypes = (prefix: string): s.AminoTypes =>
  new s.AminoTypes({
    ...s.createAuthzAminoConverters(),
    ...s.createBankAminoConverters(),
    ...s.createDistributionAminoConverters(),
    ...s.createFeegrantAminoConverters(),
    ...s.createGovAminoConverters(),
    ...s.createIbcAminoConverters(),
    ...s.createStakingAminoConverters(prefix),
    ...s.createVestingAminoConverters(),
    ...createWasmAminoConverters(),
  });

export type KujiraQueryClient = s.QueryClient &
  s.AuthExtension &
  AuthzExtension &
  s.BankExtension &
  s.DistributionExtension &
  DenomExtension &
  FeegrantExtension &
  GovExtension &
  OracleExtension &
  SchedulerExtension &
  SlashingExtension &
  StakingExtension &
  s.TxExtension &
  WasmExtension &
  s.IbcExtension;

export const kujiraQueryClient = ({
  client,
}: {
  client: Tendermint34Client;
}): KujiraQueryClient =>
  s.QueryClient.withExtensions(
    client,
    s.setupAuthExtension,
    s.setupAuthzExtension,
    s.setupBankExtension,
    setupDenomExtension,
    s.setupDistributionExtension,
    s.setupFeegrantExtension,
    setupGovExtension,
    setupOracleExtension,
    setupSchedulerExtension,
    s.setupSlashingExtension,
    setupStakingExtension,
    s.setupTxExtension,
    setupWasmExtension,
    s.setupIbcExtension
  );

export const msg = {
  authz: {
    msgExec: (i: MsgExec) => ({
      typeUrl: "/cosmos.authz.v1beta1.MsgExec",
      value: MsgExec.fromPartial(i),
    }),
    msgGrant: (i: MsgGrant) => ({
      typeUrl: "/cosmos.authz.v1beta1.MsgGrant",
      value: MsgGrant.fromPartial(i),
    }),
    msgRevoke: (i: MsgRevoke) => ({
      typeUrl: "/cosmos.authz.v1beta1.MsgRevoke",
      value: MsgRevoke.fromPartial(i),
    }),
  },
  bank: {
    msgSend: (i: MsgSend) => ({
      typeUrl: "/cosmos.bank.v1beta1.MsgSend",
      value: MsgSend.fromPartial(i),
    }),
    msgMultiSend: (i: MsgMultiSend) => ({
      typeUrl: "/cosmos.bank.v1beta1.MsgMultiSend",
      value: MsgMultiSend.fromPartial(i),
    }),
  },
  distribution: {
    msgFundCommunityPool: (i: MsgFundCommunityPool) => ({
      typeUrl: "/cosmos.distribution.v1beta1.MsgFundCommunityPool",
      value: MsgFundCommunityPool.fromJSON(i),
    }),
    msgSetWithdrawAddress: (i: MsgSetWithdrawAddress) => ({
      typeUrl: "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress",
      value: MsgSetWithdrawAddress.fromJSON(i),
    }),
    msgWithdrawDelegatorReward: (i: MsgWithdrawDelegatorReward) => ({
      typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
      value: MsgWithdrawDelegatorReward.fromJSON(i),
    }),
    msgWithdrawValidatorCommission: (i: MsgWithdrawValidatorCommission) => ({
      typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission",
      value: MsgWithdrawValidatorCommission.fromJSON(i),
    }),
  },
  denom: denom.msg,
  feegrant: {
    msgGrantAllowance: (i: MsgGrantAllowance) => ({
      typeUrl: "/cosmos.feegrant.v1beta1.MsgGrantAllowance",
      value: MsgGrantAllowance.fromPartial(i),
    }),
    msgRevokeAllowance: (i: MsgRevokeAllowance) => ({
      typeUrl: "/cosmos.feegrant.v1beta1.MsgRevokeAllowance",
      value: MsgRevokeAllowance.fromPartial(i),
    }),
  },
  gov: {
    msgDeposit: (i: MsgDeposit) => ({
      typeUrl: "/cosmos.gov.v1beta1.MsgDeposit",
      value: MsgDeposit.fromJSON(i),
    }),
    msgSubmitProposal: (i: MsgSubmitProposal) => ({
      typeUrl: "/cosmos.gov.v1beta1.MsgSubmitProposal",
      value: MsgSubmitProposal.fromPartial(i),
    }),
    msgVote: (i: MsgVote) => ({
      typeUrl: "/cosmos.gov.v1beta1.MsgVote",
      value: MsgVote.fromJSON(i),
    }),
    msgVoteWeighted: (i: MsgVoteWeighted) => ({
      typeUrl: "/cosmos.gov.v1beta1.MsgVoteWeighted",
      value: MsgVoteWeighted.fromPartial(i),
    }),
  },
  oracle: oracle.msg,
  staking: {
    msgBeginRedelegate: (i: MsgBeginRedelegate) => ({
      typeUrl: "/cosmos.staking.v1beta1.MsgBeginRedelegate",
      value: MsgBeginRedelegate.fromPartial(i),
    }),
    msgCreateValidator: (i: MsgCreateValidator) => ({
      typeUrl: "/cosmos.staking.v1beta1.MsgCreateValidator",
      value: MsgCreateValidator.fromPartial(i),
    }),
    msgDelegate: (i: MsgDelegate) => ({
      typeUrl: "/cosmos.staking.v1beta1.MsgDelegate",
      value: MsgDelegate.fromJSON(i),
    }),
    msgEditValidator: (i: MsgEditValidator) => ({
      typeUrl: "/cosmos.staking.v1beta1.MsgEditValidator",
      value: MsgEditValidator.fromPartial(i),
    }),
    msgUndelegate: (i: MsgUndelegate) => ({
      typeUrl: "/cosmos.staking.v1beta1.MsgUndelegate",
      value: MsgUndelegate.fromPartial(i),
    }),
  },
  vesting: {
    msgCreateVestingAccount: (i: MsgCreateVestingAccount) => ({
      typeUrl: "/cosmos.vesting.v1beta1.MsgCreateVestingAccount",
      value: MsgCreateVestingAccount.fromPartial(i),
    }),
  },
  wasm: {
    msgClearAdmin: (i: MsgClearAdmin) => ({
      typeUrl: "/cosmwasm.wasm.v1.MsgClearAdmin",
      value: MsgClearAdmin.fromJSON(i),
    }),
    msgExecuteContract: (i: MsgExecuteContract) => ({
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial(i),
    }),
    msgMigrateContract: (i: MsgMigrateContract) => ({
      typeUrl: "/cosmwasm.wasm.v1.MsgMigrateContract",
      value: MsgMigrateContract.fromPartial(i),
    }),
    msgStoreCode: (i: MsgStoreCode) => ({
      typeUrl: "/cosmwasm.wasm.v1.MsgStoreCode",
      value: MsgStoreCode.fromJSON(i),
    }),
    msgInstantiateContract: (i: MsgInstantiateContract) => ({
      typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract",
      value: MsgInstantiateContract.fromPartial(i),
    }),
    msgUpdateAdmin: (i: MsgUpdateAdmin) => ({
      typeUrl: "/cosmwasm.wasm.v1.MsgUpdateAdmin",
      value: MsgUpdateAdmin.fromPartial(i),
    }),
  },
  ibc: {
    msgTransfer: (i: MsgTransfer) => ({
      typeUrl: "/ibc.applications.transfer.v1.MsgTransfer",
      value: MsgTransfer.fromPartial(i),
    }),
  },
};

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
