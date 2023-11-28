"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.msg = void 0;
const tx_1 = require("cosmjs-types/cosmos/authz/v1beta1/tx");
const bank = __importStar(require("cosmjs-types/cosmos/bank/v1beta1/tx"));
const distribution = __importStar(require("cosmjs-types/cosmos/distribution/v1beta1/tx"));
const tx_2 = require("cosmjs-types/cosmos/feegrant/v1beta1/tx");
const gov = __importStar(require("cosmjs-types/cosmos/gov/v1/tx"));
const govV1Beta1 = __importStar(require("cosmjs-types/cosmos/gov/v1beta1/tx"));
const staking = __importStar(require("cosmjs-types/cosmos/staking/v1beta1/tx"));
const tx_3 = require("cosmjs-types/cosmos/vesting/v1beta1/tx");
const tx_4 = require("cosmjs-types/cosmwasm/wasm/v1/tx");
const tx_5 = require("cosmjs-types/ibc/applications/transfer/v1/tx");
const alliance = __importStar(require("./alliance"));
const gravity = __importStar(require("./gravity/v1"));
const denom = __importStar(require("./kujira/kujira.denom"));
const oracle = __importStar(require("./kujira/kujira.oracle"));
exports.msg = {
    authz: {
        msgExec: (i) => ({
            typeUrl: "/cosmos.authz.v1beta1.MsgExec",
            value: tx_1.MsgExec.fromPartial(i),
        }),
        msgGrant: (i) => ({
            typeUrl: "/cosmos.authz.v1beta1.MsgGrant",
            value: tx_1.MsgGrant.fromPartial(i),
        }),
        msgRevoke: (i) => ({
            typeUrl: "/cosmos.authz.v1beta1.MsgRevoke",
            value: tx_1.MsgRevoke.fromPartial(i),
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
            value: distribution.MsgFundCommunityPool.fromJSON(i),
        }),
        msgSetWithdrawAddress: (i) => ({
            typeUrl: "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress",
            value: distribution.MsgSetWithdrawAddress.fromJSON(i),
        }),
        msgWithdrawDelegatorReward: (i) => ({
            typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
            value: distribution.MsgWithdrawDelegatorReward.fromJSON(i),
        }),
        msgWithdrawValidatorCommission: (i) => ({
            typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission",
            value: distribution.MsgWithdrawValidatorCommission.fromJSON(i),
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
            value: tx_2.MsgGrantAllowance.fromPartial(i),
        }),
        msgRevokeAllowance: (i) => ({
            typeUrl: "/cosmos.feegrant.v1beta1.MsgRevokeAllowance",
            value: tx_2.MsgRevokeAllowance.fromPartial(i),
        }),
    },
    gov: {
        msgDeposit: (i) => ({
            typeUrl: "/cosmos.gov.v1.MsgDeposit",
            value: gov.MsgDeposit.fromJSON(i),
        }),
        msgDepositBeta: (i) => ({
            typeUrl: "/cosmos.gov.v1beta1.MsgDeposit",
            value: govV1Beta1.MsgDeposit.fromJSON(i),
        }),
        msgSubmitProposal: (i) => ({
            typeUrl: "/cosmos.gov.v1.MsgSubmitProposal",
            value: gov.MsgSubmitProposal.fromPartial(i),
        }),
        msgVote: (i) => ({
            typeUrl: "/cosmos.gov.v1.MsgVote",
            value: gov.MsgVote.fromJSON(i),
        }),
        msgVoteBeta: (i) => ({
            typeUrl: "/cosmos.gov.v1beta1.MsgVote",
            value: govV1Beta1.MsgVote.fromJSON(i),
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
            value: staking.MsgDelegate.fromJSON(i),
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
            value: tx_3.MsgCreateVestingAccount.fromPartial(i),
        }),
    },
    wasm: {
        msgClearAdmin: (i) => ({
            typeUrl: "/cosmwasm.wasm.v1.MsgClearAdmin",
            value: tx_4.MsgClearAdmin.fromJSON(i),
        }),
        msgExecuteContract: (i) => ({
            typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
            value: tx_4.MsgExecuteContract.fromPartial(i),
        }),
        msgMigrateContract: (i) => ({
            typeUrl: "/cosmwasm.wasm.v1.MsgMigrateContract",
            value: tx_4.MsgMigrateContract.fromPartial(i),
        }),
        msgStoreCode: (i) => ({
            typeUrl: "/cosmwasm.wasm.v1.MsgStoreCode",
            value: tx_4.MsgStoreCode.fromJSON(i),
        }),
        msgInstantiateContract: (i) => ({
            typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract",
            value: tx_4.MsgInstantiateContract.fromPartial(i),
        }),
        msgUpdateAdmin: (i) => ({
            typeUrl: "/cosmwasm.wasm.v1.MsgUpdateAdmin",
            value: tx_4.MsgUpdateAdmin.fromPartial(i),
        }),
        msgInstantiateContract2: (i) => ({
            typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract2",
            value: tx_4.MsgInstantiateContract2.fromPartial(i),
        }),
        msgUpdateInstantiateConfig: (i) => ({
            typeUrl: "/cosmwasm.wasm.v1.MsgUpdateInstantiateConfig",
            value: tx_4.MsgUpdateInstantiateConfig.fromPartial(i),
        }),
    },
    ibc: {
        msgTransfer: (i) => ({
            typeUrl: "/ibc.applications.transfer.v1.MsgTransfer",
            value: tx_5.MsgTransfer.fromPartial(i),
        }),
    },
    gravity: gravity.msg,
    alliance: alliance.msg,
};
