import {
  MsgExec,
  MsgGrant,
  MsgRevoke,
} from "cosmjs-types/cosmos/authz/v1beta1/tx";
import * as bank from "cosmjs-types/cosmos/bank/v1beta1/tx";
import * as distribution from "cosmjs-types/cosmos/distribution/v1beta1/tx";
import {
  MsgGrantAllowance,
  MsgRevokeAllowance,
} from "cosmjs-types/cosmos/feegrant/v1beta1/tx";
import * as gov from "cosmjs-types/cosmos/gov/v1/tx";
import * as govV1Beta1 from "cosmjs-types/cosmos/gov/v1beta1/tx";
import * as staking from "cosmjs-types/cosmos/staking/v1beta1/tx";
import { MsgCreateVestingAccount } from "cosmjs-types/cosmos/vesting/v1beta1/tx";
import {
  MsgClearAdmin,
  MsgExecuteContract,
  MsgInstantiateContract,
  MsgInstantiateContract2,
  MsgMigrateContract,
  MsgStoreCode,
  MsgUpdateAdmin,
  MsgUpdateInstantiateConfig,
} from "cosmjs-types/cosmwasm/wasm/v1/tx";
import { MsgTransfer } from "cosmjs-types/ibc/applications/transfer/v1/tx";
import * as alliance from "./alliance";
import * as gravity from "./gravity/v1";
import * as denom from "./kujira/kujira.denom";
import * as oracle from "./kujira/kujira.oracle";

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
    msgSend: (i: bank.MsgSend) => ({
      typeUrl: "/cosmos.bank.v1beta1.MsgSend",
      value: bank.MsgSend.fromPartial(i),
    }),
    msgMultiSend: (i: bank.MsgMultiSend) => ({
      typeUrl: "/cosmos.bank.v1beta1.MsgMultiSend",
      value: bank.MsgMultiSend.fromPartial(i),
    }),
    msgUpdateParams: (i: bank.MsgUpdateParams) => ({
      typeUrl: "/cosmos.bank.v1beta1.MsgUpdateParams",
      value: bank.MsgUpdateParams.fromPartial(i),
    }),
  },
  distribution: {
    msgFundCommunityPool: (i: distribution.MsgFundCommunityPool) => ({
      typeUrl: "/cosmos.distribution.v1beta1.MsgFundCommunityPool",
      value: distribution.MsgFundCommunityPool.fromJSON(i),
    }),
    msgSetWithdrawAddress: (i: distribution.MsgSetWithdrawAddress) => ({
      typeUrl: "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress",
      value: distribution.MsgSetWithdrawAddress.fromJSON(i),
    }),
    msgWithdrawDelegatorReward: (
      i: distribution.MsgWithdrawDelegatorReward
    ) => ({
      typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
      value: distribution.MsgWithdrawDelegatorReward.fromJSON(i),
    }),
    msgWithdrawValidatorCommission: (
      i: distribution.MsgWithdrawValidatorCommission
    ) => ({
      typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission",
      value: distribution.MsgWithdrawValidatorCommission.fromJSON(i),
    }),
    msgUpdateParams: (i: distribution.MsgUpdateParams) => ({
      typeUrl: "/cosmos.distribution.v1beta1.MsgUpdateParams",
      value: distribution.MsgUpdateParams.fromPartial(i),
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
    msgDeposit: (i: gov.MsgDeposit) => ({
      typeUrl: "/cosmos.gov.v1.MsgDeposit",
      value: gov.MsgDeposit.fromJSON(i),
    }),
    msgDepositBeta: (i: govV1Beta1.MsgDeposit) => ({
      typeUrl: "/cosmos.gov.v1beta1.MsgDeposit",
      value: govV1Beta1.MsgDeposit.fromJSON(i),
    }),
    msgSubmitProposal: (i: gov.MsgSubmitProposal) => ({
      typeUrl: "/cosmos.gov.v1.MsgSubmitProposal",
      value: gov.MsgSubmitProposal.fromPartial(i),
    }),
    msgVote: (i: gov.MsgVote) => ({
      typeUrl: "/cosmos.gov.v1.MsgVote",
      value: gov.MsgVote.fromJSON(i),
    }),
    msgVoteBeta: (i: govV1Beta1.MsgVote) => ({
      typeUrl: "/cosmos.gov.v1beta1.MsgVote",
      value: govV1Beta1.MsgVote.fromJSON(i),
    }),
    msgVoteWeighted: (i: gov.MsgVoteWeighted) => ({
      typeUrl: "/cosmos.gov.v1.MsgVoteWeighted",
      value: gov.MsgVoteWeighted.fromPartial(i),
    }),
    msgUpdateParams: (i: gov.MsgUpdateParams) => ({
      typeUrl: "/cosmos.gov.v1.MsgUpdateParams",
      value: gov.MsgUpdateParams.fromPartial(i),
    }),
  },
  oracle: oracle.msg,
  staking: {
    msgBeginRedelegate: (i: staking.MsgBeginRedelegate) => ({
      typeUrl: "/cosmos.staking.v1beta1.MsgBeginRedelegate",
      value: staking.MsgBeginRedelegate.fromPartial(i),
    }),
    msgCreateValidator: (i: staking.MsgCreateValidator) => ({
      typeUrl: "/cosmos.staking.v1beta1.MsgCreateValidator",
      value: staking.MsgCreateValidator.fromPartial(i),
    }),
    msgDelegate: (i: staking.MsgDelegate) => ({
      typeUrl: "/cosmos.staking.v1beta1.MsgDelegate",
      value: staking.MsgDelegate.fromJSON(i),
    }),
    msgEditValidator: (i: staking.MsgEditValidator) => ({
      typeUrl: "/cosmos.staking.v1beta1.MsgEditValidator",
      value: staking.MsgEditValidator.fromPartial(i),
    }),
    msgUndelegate: (i: staking.MsgUndelegate) => ({
      typeUrl: "/cosmos.staking.v1beta1.MsgUndelegate",
      value: staking.MsgUndelegate.fromPartial(i),
    }),
    msgCancelUnbondingDelegation: (
      i: staking.MsgCancelUnbondingDelegation
    ) => ({
      typeUrl: "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation",
      value: staking.MsgCancelUnbondingDelegation.fromPartial(i),
    }),
    msgUpdateParams: (i: staking.MsgUpdateParams) => ({
      typeUrl: "/cosmos.staking.v1beta1.MsgUpdateParams",
      value: staking.MsgUpdateParams.fromPartial(i),
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
    msgInstantiateContract2: (i: MsgInstantiateContract2) => ({
      typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract2",
      value: MsgInstantiateContract2.fromPartial(i),
    }),
    msgUpdateInstantiateConfig: (i: MsgUpdateInstantiateConfig) => ({
      typeUrl: "/cosmwasm.wasm.v1.MsgUpdateInstantiateConfig",
      value: MsgUpdateInstantiateConfig.fromPartial(i),
    }),
  },
  ibc: {
    msgTransfer: (i: MsgTransfer) => ({
      typeUrl: "/ibc.applications.transfer.v1.MsgTransfer",
      value: MsgTransfer.fromPartial(i),
    }),
  },
  gravity: gravity.msg,
  alliance: alliance.msg,
};
