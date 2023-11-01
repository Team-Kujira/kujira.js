import {} from "@cosmjs/stargate/build/modules/distribution/messages";
import {
  MsgExec,
  MsgGrant,
  MsgRevoke,
} from "cosmjs-types/cosmos/authz/v1beta1/tx";
import { MsgMultiSend, MsgSend } from "cosmjs-types/cosmos/bank/v1beta1/tx";
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
} from "cosmjs-types/cosmos/gov/v1/tx";
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
      typeUrl: "/cosmos.gov.v1.MsgDeposit",
      value: MsgDeposit.fromJSON(i),
    }),
    msgSubmitProposal: (i: MsgSubmitProposal) => ({
      typeUrl: "/cosmos.gov.v1.MsgSubmitProposal",
      value: MsgSubmitProposal.fromPartial(i),
    }),
    msgVote: (i: MsgVote) => ({
      typeUrl: "/cosmos.gov.v1.MsgVote",
      value: MsgVote.fromJSON(i),
    }),
    msgVoteWeighted: (i: MsgVoteWeighted) => ({
      typeUrl: "/cosmos.gov.v1.MsgVoteWeighted",
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
    msgInstantiateContract2: (i: MsgInstantiateContract2) => ({
      typeUel: "/cosmwasm.wasm.v1.MsgInstantiateContract2",
      value: MsgInstantiateContract2.fromPartial(i),
    }),
    msgUpdateInstantiateConfig: (i: MsgUpdateInstantiateConfig) => ({
      typeUel: "/cosmwasm.wasm.v1.MsgUpdateInstantiateConfig",
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
