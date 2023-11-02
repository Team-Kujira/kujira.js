import { MsgExec, MsgGrant, MsgRevoke } from "cosmjs-types/cosmos/authz/v1beta1/tx";
import { MsgMultiSend, MsgSend } from "cosmjs-types/cosmos/bank/v1beta1/tx";
import { MsgFundCommunityPool, MsgSetWithdrawAddress, MsgWithdrawDelegatorReward, MsgWithdrawValidatorCommission } from "cosmjs-types/cosmos/distribution/v1beta1/tx";
import { MsgGrantAllowance, MsgRevokeAllowance } from "cosmjs-types/cosmos/feegrant/v1beta1/tx";
import { MsgDeposit, MsgSubmitProposal, MsgVote, MsgVoteWeighted } from "cosmjs-types/cosmos/gov/v1/tx";
import * as govV1Beta1 from "cosmjs-types/cosmos/gov/v1beta1/tx";
import { MsgBeginRedelegate, MsgCreateValidator, MsgDelegate, MsgEditValidator, MsgUndelegate } from "cosmjs-types/cosmos/staking/v1beta1/tx";
import { MsgCreateVestingAccount } from "cosmjs-types/cosmos/vesting/v1beta1/tx";
import { MsgClearAdmin, MsgExecuteContract, MsgInstantiateContract, MsgInstantiateContract2, MsgMigrateContract, MsgStoreCode, MsgUpdateAdmin, MsgUpdateInstantiateConfig } from "cosmjs-types/cosmwasm/wasm/v1/tx";
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
        msgDepositBeta: (i: govV1Beta1.MsgDeposit) => {
            typeUrl: string;
            value: govV1Beta1.MsgDeposit;
        };
        msgSubmitProposal: (i: MsgSubmitProposal) => {
            typeUrl: string;
            value: MsgSubmitProposal;
        };
        msgVote: (i: MsgVote) => {
            typeUrl: string;
            value: MsgVote;
        };
        msgVoteBeta: (i: govV1Beta1.MsgVote) => {
            typeUrl: string;
            value: govV1Beta1.MsgVote;
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
        msgInstantiateContract2: (i: MsgInstantiateContract2) => {
            typeUrl: string;
            value: MsgInstantiateContract2;
        };
        msgUpdateInstantiateConfig: (i: MsgUpdateInstantiateConfig) => {
            typeUrl: string;
            value: MsgUpdateInstantiateConfig;
        };
    };
    ibc: {
        msgTransfer: (i: MsgTransfer) => {
            typeUrl: string;
            value: MsgTransfer;
        };
    };
    gravity: {
        msgBatchSendToEthClaim: (data: import("./gravity/v1/msgs").MsgBatchSendToEthClaim) => import("@cosmjs/proto-signing").EncodeObject;
        msgBatchSendToEthClaimResponse: (data: import("./gravity/v1/msgs").MsgBatchSendToEthClaimResponse) => import("@cosmjs/proto-signing").EncodeObject;
        msgCancelSendToEth: (data: import("./gravity/v1/msgs").MsgCancelSendToEth) => import("@cosmjs/proto-signing").EncodeObject;
        msgCancelSendToEthResponse: (data: import("./gravity/v1/msgs").MsgCancelSendToEthResponse) => import("@cosmjs/proto-signing").EncodeObject;
        msgConfirmBatch: (data: import("./gravity/v1/msgs").MsgConfirmBatch) => import("@cosmjs/proto-signing").EncodeObject;
        msgConfirmBatchResponse: (data: import("./gravity/v1/msgs").MsgConfirmBatchResponse) => import("@cosmjs/proto-signing").EncodeObject;
        msgConfirmLogicCall: (data: import("./gravity/v1/msgs").MsgConfirmLogicCall) => import("@cosmjs/proto-signing").EncodeObject;
        msgConfirmLogicCallResponse: (data: import("./gravity/v1/msgs").MsgConfirmLogicCallResponse) => import("@cosmjs/proto-signing").EncodeObject;
        msgERC20DeployedClaim: (data: import("./gravity/v1/msgs").MsgERC20DeployedClaim) => import("@cosmjs/proto-signing").EncodeObject;
        msgERC20DeployedClaimResponse: (data: import("./gravity/v1/msgs").MsgERC20DeployedClaimResponse) => import("@cosmjs/proto-signing").EncodeObject;
        msgExecuteIbcAutoForwards: (data: import("./gravity/v1/msgs").MsgExecuteIbcAutoForwards) => import("@cosmjs/proto-signing").EncodeObject;
        msgExecuteIbcAutoForwardsResponse: (data: import("./gravity/v1/msgs").MsgExecuteIbcAutoForwardsResponse) => import("@cosmjs/proto-signing").EncodeObject;
        msgLogicCallExecutedClaim: (data: import("./gravity/v1/msgs").MsgLogicCallExecutedClaim) => import("@cosmjs/proto-signing").EncodeObject;
        msgLogicCallExecutedClaimResponse: (data: import("./gravity/v1/msgs").MsgLogicCallExecutedClaimResponse) => import("@cosmjs/proto-signing").EncodeObject;
        msgRequestBatch: (data: import("./gravity/v1/msgs").MsgRequestBatch) => import("@cosmjs/proto-signing").EncodeObject;
        msgRequestBatchResponse: (data: import("./gravity/v1/msgs").MsgRequestBatchResponse) => import("@cosmjs/proto-signing").EncodeObject;
        msgSendToCosmosClaim: (data: import("./gravity/v1/msgs").MsgSendToCosmosClaim) => import("@cosmjs/proto-signing").EncodeObject;
        msgSendToCosmosClaimResponse: (data: import("./gravity/v1/msgs").MsgSendToCosmosClaimResponse) => import("@cosmjs/proto-signing").EncodeObject;
        msgSendToEth: (data: import("./gravity/v1/msgs").MsgSendToEth) => import("@cosmjs/proto-signing").EncodeObject;
        msgSendToEthResponse: (data: import("./gravity/v1/msgs").MsgSendToEthResponse) => import("@cosmjs/proto-signing").EncodeObject;
        msgSetOrchestratorAddress: (data: import("./gravity/v1/msgs").MsgSetOrchestratorAddress) => import("@cosmjs/proto-signing").EncodeObject;
        msgSetOrchestratorAddressResponse: (data: import("./gravity/v1/msgs").MsgSetOrchestratorAddressResponse) => import("@cosmjs/proto-signing").EncodeObject;
        msgSubmitBadSignatureEvidence: (data: import("./gravity/v1/msgs").MsgSubmitBadSignatureEvidence) => import("@cosmjs/proto-signing").EncodeObject;
        msgSubmitBadSignatureEvidenceResponse: (data: import("./gravity/v1/msgs").MsgSubmitBadSignatureEvidenceResponse) => import("@cosmjs/proto-signing").EncodeObject;
        msgValsetConfirm: (data: import("./gravity/v1/msgs").MsgValsetConfirm) => import("@cosmjs/proto-signing").EncodeObject;
        msgValsetConfirmResponse: (data: import("./gravity/v1/msgs").MsgValsetConfirmResponse) => import("@cosmjs/proto-signing").EncodeObject;
        msgValsetUpdatedClaim: (data: import("./gravity/v1/msgs").MsgValsetUpdatedClaim) => import("@cosmjs/proto-signing").EncodeObject;
        msgValsetUpdatedClaimResponse: (data: import("./gravity/v1/msgs").MsgValsetUpdatedClaimResponse) => import("@cosmjs/proto-signing").EncodeObject;
    };
    alliance: {
        msgDelegate: (x: import("./alliance/tx").MsgDelegate) => import("@cosmjs/proto-signing").EncodeObject;
        msgDelegateResponse: (x: import("./alliance/tx").MsgDelegateResponse) => import("@cosmjs/proto-signing").EncodeObject;
        msgUndelegate: (x: import("./alliance/tx").MsgUndelegate) => import("@cosmjs/proto-signing").EncodeObject;
        msgUndelegateResponse: (x: import("./alliance/tx").MsgUndelegateResponse) => import("@cosmjs/proto-signing").EncodeObject;
        msgRedelegate: (x: import("./alliance/tx").MsgRedelegate) => import("@cosmjs/proto-signing").EncodeObject;
        msgRedelegateResponse: (x: import("./alliance/tx").MsgRedelegateResponse) => import("@cosmjs/proto-signing").EncodeObject;
        msgClaimDelegationRewards: (x: import("./alliance/tx").MsgClaimDelegationRewards) => import("@cosmjs/proto-signing").EncodeObject;
    };
};
