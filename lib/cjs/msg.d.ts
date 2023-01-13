import { MsgExec, MsgGrant, MsgRevoke } from "cosmjs-types/cosmos/authz/v1beta1/tx";
import { MsgMultiSend, MsgSend } from "cosmjs-types/cosmos/bank/v1beta1/tx";
import { MsgFundCommunityPool, MsgSetWithdrawAddress, MsgWithdrawDelegatorReward, MsgWithdrawValidatorCommission } from "cosmjs-types/cosmos/distribution/v1beta1/tx";
import { MsgGrantAllowance, MsgRevokeAllowance } from "cosmjs-types/cosmos/feegrant/v1beta1/tx";
import { MsgDeposit, MsgSubmitProposal, MsgVote, MsgVoteWeighted } from "cosmjs-types/cosmos/gov/v1beta1/tx";
import { MsgBeginRedelegate, MsgCreateValidator, MsgDelegate, MsgEditValidator, MsgUndelegate } from "cosmjs-types/cosmos/staking/v1beta1/tx";
import { MsgCreateVestingAccount } from "cosmjs-types/cosmos/vesting/v1beta1/tx";
import { MsgClearAdmin, MsgExecuteContract, MsgInstantiateContract, MsgMigrateContract, MsgStoreCode, MsgUpdateAdmin } from "cosmjs-types/cosmwasm/wasm/v1/tx";
import { MsgTransfer } from "cosmjs-types/ibc/applications/transfer/v1/tx";
export declare const msg: {
    authz: {
        msgExec: (i: MsgExec) => {
            typeUrl: string;
            value: MsgExec;
        };
        msgGrant: (i: MsgGrant) => {
            typeUrl: string;
            value: MsgGrant;
        };
        msgRevoke: (i: MsgRevoke) => {
            typeUrl: string;
            value: MsgRevoke;
        };
    };
    bank: {
        msgSend: (i: MsgSend) => {
            typeUrl: string;
            value: MsgSend;
        };
        msgMultiSend: (i: MsgMultiSend) => {
            typeUrl: string;
            value: MsgMultiSend;
        };
    };
    distribution: {
        msgFundCommunityPool: (i: MsgFundCommunityPool) => {
            typeUrl: string;
            value: MsgFundCommunityPool;
        };
        msgSetWithdrawAddress: (i: MsgSetWithdrawAddress) => {
            typeUrl: string;
            value: MsgSetWithdrawAddress;
        };
        msgWithdrawDelegatorReward: (i: MsgWithdrawDelegatorReward) => {
            typeUrl: string;
            value: MsgWithdrawDelegatorReward;
        };
        msgWithdrawValidatorCommission: (i: MsgWithdrawValidatorCommission) => {
            typeUrl: string;
            value: MsgWithdrawValidatorCommission;
        };
    };
    denom: {
        msgBurn: (data: import("./kujira/kujira.denom/types/tx").MsgBurn) => import("@cosmjs/proto-signing").EncodeObject;
        msgChangeAdmin: (data: import("./kujira/kujira.denom/types/tx").MsgChangeAdmin) => import("@cosmjs/proto-signing").EncodeObject;
        msgCreateDenom: (data: import("./kujira/kujira.denom/types/tx").MsgCreateDenom) => import("@cosmjs/proto-signing").EncodeObject;
        msgMint: (data: import("./kujira/kujira.denom/types/tx").MsgMint) => import("@cosmjs/proto-signing").EncodeObject;
    };
    feegrant: {
        msgGrantAllowance: (i: MsgGrantAllowance) => {
            typeUrl: string;
            value: MsgGrantAllowance;
        };
        msgRevokeAllowance: (i: MsgRevokeAllowance) => {
            typeUrl: string;
            value: MsgRevokeAllowance;
        };
    };
    gov: {
        msgDeposit: (i: MsgDeposit) => {
            typeUrl: string;
            value: MsgDeposit;
        };
        msgSubmitProposal: (i: MsgSubmitProposal) => {
            typeUrl: string;
            value: MsgSubmitProposal;
        };
        msgVote: (i: MsgVote) => {
            typeUrl: string;
            value: MsgVote;
        };
        msgVoteWeighted: (i: MsgVoteWeighted) => {
            typeUrl: string;
            value: MsgVoteWeighted;
        };
    };
    oracle: {
        msgAggregateExchangeRateVote: (data: import("./kujira/kujira.oracle/types/tx").MsgAggregateExchangeRateVote) => import("@cosmjs/proto-signing").EncodeObject;
        msgAggregateExchangeRatePrevote: (data: import("./kujira/kujira.oracle/types/tx").MsgAggregateExchangeRatePrevote) => import("@cosmjs/proto-signing").EncodeObject;
        msgDelegateFeedConsent: (data: import("./kujira/kujira.oracle/types/tx").MsgDelegateFeedConsent) => import("@cosmjs/proto-signing").EncodeObject;
    };
    staking: {
        msgBeginRedelegate: (i: MsgBeginRedelegate) => {
            typeUrl: string;
            value: MsgBeginRedelegate;
        };
        msgCreateValidator: (i: MsgCreateValidator) => {
            typeUrl: string;
            value: MsgCreateValidator;
        };
        msgDelegate: (i: MsgDelegate) => {
            typeUrl: string;
            value: MsgDelegate;
        };
        msgEditValidator: (i: MsgEditValidator) => {
            typeUrl: string;
            value: MsgEditValidator;
        };
        msgUndelegate: (i: MsgUndelegate) => {
            typeUrl: string;
            value: MsgUndelegate;
        };
    };
    vesting: {
        msgCreateVestingAccount: (i: MsgCreateVestingAccount) => {
            typeUrl: string;
            value: MsgCreateVestingAccount;
        };
    };
    wasm: {
        msgClearAdmin: (i: MsgClearAdmin) => {
            typeUrl: string;
            value: MsgClearAdmin;
        };
        msgExecuteContract: (i: MsgExecuteContract) => {
            typeUrl: string;
            value: MsgExecuteContract;
        };
        msgMigrateContract: (i: MsgMigrateContract) => {
            typeUrl: string;
            value: MsgMigrateContract;
        };
        msgStoreCode: (i: MsgStoreCode) => {
            typeUrl: string;
            value: MsgStoreCode;
        };
        msgInstantiateContract: (i: MsgInstantiateContract) => {
            typeUrl: string;
            value: MsgInstantiateContract;
        };
        msgUpdateAdmin: (i: MsgUpdateAdmin) => {
            typeUrl: string;
            value: MsgUpdateAdmin;
        };
    };
    ibc: {
        msgTransfer: (i: MsgTransfer) => {
            typeUrl: string;
            value: MsgTransfer;
        };
    };
};
