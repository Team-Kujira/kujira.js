import { Registry, EncodeObject } from "@cosmjs/proto-signing";
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
// import * as ethermintEvm from "./evmos/ethermint/ethermint.evm.v1";
// import * as ethermintFeemarket from "./evmos/ethermint/ethermint.feemarket.v1";
import { wasmTypes } from "@cosmjs/cosmwasm-stargate/build/modules";
import { DenomExtension, setupDenomExtension } from "./kujira/kujira.denom";
import { OracleExtension, setupOracleExtension } from "./kujira/kujira.oracle";
import {
  SchedulerExtension,
  setupSchedulerExtension,
} from "./kujira/kujira.scheduler";
// export { EthAccount } from "./evmos/ethermint/ethermint.evm.v1/types/auth";
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

const types = [
  ...s.defaultRegistryTypes,
  ...denom.types,
  // ...ethermintEvm.types,
  // ...ethermintFeemarket.types,
  ...oracle.types,
  ...wasmTypes,
  ...ibcTypes,
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
    ...createWasmAminoConverters(),
  });

export type KujiraQueryClient = s.QueryClient &
  s.AuthExtension &
  AuthzExtension &
  s.BankExtension &
  s.DistributionExtension &
  DenomExtension &
  // EthermintEvmExtension &
  // EthermintFeemarketExtension &

  FeegrantExtension &
  s.GovExtension &
  OracleExtension &
  SchedulerExtension &
  SlashingExtension &
  s.StakingExtension &
  s.TxExtension &
  WasmExtension &
  s.IbcExtension;

export const kujiraQueryClient = async ({
  rpc,
}: {
  rpc: string;
}): Promise<KujiraQueryClient> =>
  s.QueryClient.withExtensions(
    await Tendermint34Client.connect(rpc),
    s.setupAuthExtension,
    s.setupAuthzExtension,
    s.setupBankExtension,
    setupDenomExtension,
    s.setupDistributionExtension,
    // setupEthermintEvmExtension,
    // setupEthermintFeemarketExtension,
    s.setupFeegrantExtension,
    s.setupGovExtension,
    setupOracleExtension,
    setupSchedulerExtension,
    s.setupSlashingExtension,
    s.setupStakingExtension,
    s.setupTxExtension,
    setupWasmExtension,
    s.setupIbcExtension
  );

const register =
  <T>(typeUrl: string, int: { fromPartial: (a: T) => any }) =>
  (a: T): EncodeObject => ({ typeUrl, value: int.fromPartial(a) });

export const msg = {
  authz: {
    msgExec: register("/cosmos.authz.v1beta1.MsgExec", MsgExec),
    msgGrant: register("/cosmos.authz.v1beta1.MsgGrant", MsgGrant),
    msgRevoke: register("/cosmos.authz.v1beta1.MsgRevoke", MsgRevoke),
  },
  bank: {
    msgSend: register("/cosmos.bank.v1beta1.MsgSend", MsgSend),
    msgMultiSend: register("/cosmos.bank.v1beta1.MsgMultiSend", MsgMultiSend),
  },
  distribution: {
    msgFundCommunityPool: register(
      "/cosmos.distribution.v1beta1.MsgFundCommunityPool",
      MsgFundCommunityPool
    ),
    msgSetWithdrawAddress: register(
      "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress",
      MsgSetWithdrawAddress
    ),
    msgWithdrawDelegatorReward: register(
      "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
      MsgWithdrawDelegatorReward
    ),
    msgWithdrawValidatorCommission: register(
      "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission",
      MsgWithdrawValidatorCommission
    ),
  },
  denom: denom.msg,
  feegrant: {
    msgGrantAllowance: register(
      "/cosmos.feegrant.v1beta1.MsgGrantAllowance",
      MsgGrantAllowance
    ),
    msgRevokeAllowance: register(
      "/cosmos.feegrant.v1beta1.MsgRevokeAllowance",
      MsgRevokeAllowance
    ),
  },
  gov: {
    msgDeposit: register("/cosmos.gov.v1beta1.MsgDeposit", MsgDeposit),
    msgSubmitProposal: register(
      "/cosmos.gov.v1beta1.MsgSubmitProposal",
      MsgSubmitProposal
    ),
    msgVote: register("/cosmos.gov.v1beta1.MsgVote", MsgVote),
    msgVoteWeighted: register(
      "/cosmos.gov.v1beta1.MsgVoteWeighted",
      MsgVoteWeighted
    ),
  },
  oracle: oracle.msg,
  staking: {
    msgBeginRedelegate: register(
      "/cosmos.staking.v1beta1.MsgBeginRedelegate",
      MsgBeginRedelegate
    ),
    msgCreateValidator: register(
      "/cosmos.staking.v1beta1.MsgCreateValidator",
      MsgCreateValidator
    ),
    msgDelegate: register("/cosmos.staking.v1beta1.MsgDelegate", MsgDelegate),
    msgEditValidator: register(
      "/cosmos.staking.v1beta1.MsgEditValidator",
      MsgEditValidator
    ),
    msgUndelegate: register(
      "/cosmos.staking.v1beta1.MsgUndelegate",
      MsgUndelegate
    ),
  },
  vesting: {
    msgCreateVestingAccount: register(
      "/cosmos.vesting.v1beta1.MsgCreateVestingAccount",
      MsgCreateVestingAccount
    ),
  },
  wasm: {
    msgClearAdmin: register("/cosmwasm.wasm.v1.MsgClearAdmin", MsgClearAdmin),
    msgExecuteContract: register(
      "/cosmwasm.wasm.v1.MsgExecuteContract",
      MsgExecuteContract
    ),
    msgMigrateContract: register(
      "/cosmwasm.wasm.v1.MsgMigrateContract",
      MsgMigrateContract
    ),
    msgStoreCode: register("/cosmwasm.wasm.v1.MsgStoreCode", MsgStoreCode),
    msgInstantiateContract: register(
      "/cosmwasm.wasm.v1.MsgInstantiateContract",
      MsgInstantiateContract
    ),
    msgUpdateAdmin: register(
      "/cosmwasm.wasm.v1.MsgUpdateAdmin",
      MsgUpdateAdmin
    ),
  },
  ibc: {
    msgTrasnfer: register(
      "/ibc.applications.transfer.v1.MsgTransfer",
      MsgTransfer
    ),
  },
};

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
