import { MsgExec, MsgGrant, MsgRevoke, } from "cosmjs-types/cosmos/authz/v1beta1/tx";
import * as bank from "cosmjs-types/cosmos/bank/v1beta1/tx";
import * as distribution from "cosmjs-types/cosmos/distribution/v1beta1/tx";
import { MsgGrantAllowance, MsgRevokeAllowance, } from "cosmjs-types/cosmos/feegrant/v1beta1/tx";
import * as gov from "cosmjs-types/cosmos/gov/v1/tx";
import * as govV1Beta1 from "cosmjs-types/cosmos/gov/v1beta1/tx";
import * as staking from "cosmjs-types/cosmos/staking/v1beta1/tx";
import { MsgCreateVestingAccount } from "cosmjs-types/cosmos/vesting/v1beta1/tx";
import { MsgClearAdmin, MsgExecuteContract, MsgInstantiateContract, MsgInstantiateContract2, MsgMigrateContract, MsgStoreCode, MsgUpdateAdmin, MsgUpdateInstantiateConfig, } from "cosmjs-types/cosmwasm/wasm/v1/tx";
import { MsgTransfer } from "cosmjs-types/ibc/applications/transfer/v1/tx";
import * as alliance from "./alliance";
import * as batch from "./batch";
import * as gravity from "./gravity/v1";
import * as denom from "./kujira/denom";
import * as oracle from "./kujira/oracle";
export const msg = {
    authz: {
        msgExec: (i) => ({
            typeUrl: "/cosmos.authz.v1beta1.MsgExec",
            value: MsgExec.fromPartial(i),
        }),
        msgGrant: (i) => ({
            typeUrl: "/cosmos.authz.v1beta1.MsgGrant",
            value: MsgGrant.fromPartial(i),
        }),
        msgRevoke: (i) => ({
            typeUrl: "/cosmos.authz.v1beta1.MsgRevoke",
            value: MsgRevoke.fromPartial(i),
        }),
    },
    bank: {
        msgSend: (i) => ({
            typeUrl: "/cosmos.bank.v1beta1.MsgSend",
            value: bank.MsgSend.fromPartial(i),
        }),
        msgMultiSend: (i) => ({
            typeUrl: "/cosmos.bank.v1beta1.MsgMultiSend",
            value: bank.MsgMultiSend.fromPartial(i),
        }),
        msgUpdateParams: (i) => ({
            typeUrl: "/cosmos.bank.v1beta1.MsgUpdateParams",
            value: bank.MsgUpdateParams.fromPartial(i),
        }),
    },
    distribution: {
        msgFundCommunityPool: (i) => ({
            typeUrl: "/cosmos.distribution.v1beta1.MsgFundCommunityPool",
            value: distribution.MsgFundCommunityPool.fromPartial(i),
        }),
        msgSetWithdrawAddress: (i) => ({
            typeUrl: "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress",
            value: distribution.MsgSetWithdrawAddress.fromPartial(i),
        }),
        msgWithdrawDelegatorReward: (i) => ({
            typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
            value: distribution.MsgWithdrawDelegatorReward.fromPartial(i),
        }),
        msgWithdrawValidatorCommission: (i) => ({
            typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission",
            value: distribution.MsgWithdrawValidatorCommission.fromPartial(i),
        }),
        msgUpdateParams: (i) => ({
            typeUrl: "/cosmos.distribution.v1beta1.MsgUpdateParams",
            value: distribution.MsgUpdateParams.fromPartial(i),
        }),
    },
    denom: denom.msg,
    feegrant: {
        msgGrantAllowance: (i) => ({
            typeUrl: "/cosmos.feegrant.v1beta1.MsgGrantAllowance",
            value: MsgGrantAllowance.fromPartial(i),
        }),
        msgRevokeAllowance: (i) => ({
            typeUrl: "/cosmos.feegrant.v1beta1.MsgRevokeAllowance",
            value: MsgRevokeAllowance.fromPartial(i),
        }),
    },
    gov: {
        msgDeposit: (i) => ({
            typeUrl: "/cosmos.gov.v1.MsgDeposit",
            value: gov.MsgDeposit.fromPartial(i),
        }),
        msgDepositBeta: (i) => ({
            typeUrl: "/cosmos.gov.v1beta1.MsgDeposit",
            value: govV1Beta1.MsgDeposit.fromPartial(i),
        }),
        msgSubmitProposal: (i) => ({
            typeUrl: "/cosmos.gov.v1.MsgSubmitProposal",
            value: gov.MsgSubmitProposal.fromPartial(i),
        }),
        msgVote: (i) => ({
            typeUrl: "/cosmos.gov.v1.MsgVote",
            value: gov.MsgVote.fromPartial(i),
        }),
        msgVoteBeta: (i) => ({
            typeUrl: "/cosmos.gov.v1beta1.MsgVote",
            value: govV1Beta1.MsgVote.fromPartial(i),
        }),
        msgVoteWeighted: (i) => ({
            typeUrl: "/cosmos.gov.v1.MsgVoteWeighted",
            value: gov.MsgVoteWeighted.fromPartial(i),
        }),
        msgUpdateParams: (i) => ({
            typeUrl: "/cosmos.gov.v1.MsgUpdateParams",
            value: gov.MsgUpdateParams.fromPartial(i),
        }),
    },
    oracle: oracle.msg,
    staking: {
        msgBeginRedelegate: (i) => ({
            typeUrl: "/cosmos.staking.v1beta1.MsgBeginRedelegate",
            value: staking.MsgBeginRedelegate.fromPartial(i),
        }),
        msgCreateValidator: (i) => ({
            typeUrl: "/cosmos.staking.v1beta1.MsgCreateValidator",
            value: staking.MsgCreateValidator.fromPartial(i),
        }),
        msgDelegate: (i) => ({
            typeUrl: "/cosmos.staking.v1beta1.MsgDelegate",
            value: staking.MsgDelegate.fromPartial(i),
        }),
        msgEditValidator: (i) => ({
            typeUrl: "/cosmos.staking.v1beta1.MsgEditValidator",
            value: staking.MsgEditValidator.fromPartial(i),
        }),
        msgUndelegate: (i) => ({
            typeUrl: "/cosmos.staking.v1beta1.MsgUndelegate",
            value: staking.MsgUndelegate.fromPartial(i),
        }),
        msgCancelUnbondingDelegation: (i) => ({
            typeUrl: "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation",
            value: staking.MsgCancelUnbondingDelegation.fromPartial(i),
        }),
        msgUpdateParams: (i) => ({
            typeUrl: "/cosmos.staking.v1beta1.MsgUpdateParams",
            value: staking.MsgUpdateParams.fromPartial(i),
        }),
    },
    vesting: {
        msgCreateVestingAccount: (i) => ({
            typeUrl: "/cosmos.vesting.v1beta1.MsgCreateVestingAccount",
            value: MsgCreateVestingAccount.fromPartial(i),
        }),
    },
    wasm: {
        msgClearAdmin: (i) => ({
            typeUrl: "/cosmwasm.wasm.v1.MsgClearAdmin",
            value: MsgClearAdmin.fromPartial(i),
        }),
        msgExecuteContract: (i) => ({
            typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
            value: MsgExecuteContract.fromPartial(i),
        }),
        msgMigrateContract: (i) => ({
            typeUrl: "/cosmwasm.wasm.v1.MsgMigrateContract",
            value: MsgMigrateContract.fromPartial(i),
        }),
        msgStoreCode: (i) => ({
            typeUrl: "/cosmwasm.wasm.v1.MsgStoreCode",
            value: MsgStoreCode.fromPartial(i),
        }),
        msgInstantiateContract: (i) => ({
            typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract",
            value: MsgInstantiateContract.fromPartial(i),
        }),
        msgUpdateAdmin: (i) => ({
            typeUrl: "/cosmwasm.wasm.v1.MsgUpdateAdmin",
            value: MsgUpdateAdmin.fromPartial(i),
        }),
        msgInstantiateContract2: (i) => ({
            typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract2",
            value: MsgInstantiateContract2.fromPartial(i),
        }),
        msgUpdateInstantiateConfig: (i) => ({
            typeUrl: "/cosmwasm.wasm.v1.MsgUpdateInstantiateConfig",
            value: MsgUpdateInstantiateConfig.fromPartial(i),
        }),
    },
    ibc: {
        msgTransfer: (i) => ({
            typeUrl: "/ibc.applications.transfer.v1.MsgTransfer",
            value: MsgTransfer.fromPartial(i),
        }),
    },
    gravity: gravity.msg,
    alliance: alliance.msg,
    batch: batch.msg,
};
