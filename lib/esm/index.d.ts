import { Registry, EncodeObject } from "@cosmjs/proto-signing";
import * as s from "@cosmjs/stargate";
import { AuthzExtension } from "@cosmjs/stargate/build/modules/authz/queries";
import { FeegrantExtension, SlashingExtension } from "@cosmjs/stargate/build/modules";
import { Tendermint34Client } from "@cosmjs/tendermint-rpc";
import { WasmExtension } from "@cosmjs/cosmwasm-stargate";
import { DenomExtension } from "./kujira/kujira.denom";
import { OracleExtension } from "./kujira/kujira.oracle";
import { SchedulerExtension } from "./kujira/kujira.scheduler";
import { MsgExec, MsgGrant, MsgRevoke } from "cosmjs-types/cosmos/authz/v1beta1/tx";
import { MsgSend, MsgMultiSend } from "cosmjs-types/cosmos/bank/v1beta1/tx";
import { MsgFundCommunityPool, MsgSetWithdrawAddress, MsgWithdrawDelegatorReward, MsgWithdrawValidatorCommission } from "cosmjs-types/cosmos/distribution/v1beta1/tx";
import { MsgGrantAllowance, MsgRevokeAllowance } from "cosmjs-types/cosmos/feegrant/v1beta1/tx";
import { MsgDeposit, MsgSubmitProposal, MsgVote, MsgVoteWeighted } from "cosmjs-types/cosmos/gov/v1beta1/tx";
import { MsgBeginRedelegate, MsgCreateValidator, MsgDelegate, MsgEditValidator, MsgUndelegate } from "cosmjs-types/cosmos/staking/v1beta1/tx";
import { MsgCreateVestingAccount } from "cosmjs-types/cosmos/vesting/v1beta1/tx";
import { MsgClearAdmin, MsgExecuteContract, MsgMigrateContract, MsgStoreCode, MsgInstantiateContract, MsgUpdateAdmin } from "cosmjs-types/cosmwasm/wasm/v1/tx";
import { MsgTransfer } from "cosmjs-types/ibc/applications/transfer/v1/tx";
export declare const registry: Registry;
export { FinClient, FinQueryClient } from "./fin";
export declare const aminoTypes: (prefix: string) => s.AminoTypes;
export declare type KujiraQueryClient = s.QueryClient & s.AuthExtension & AuthzExtension & s.BankExtension & s.DistributionExtension & DenomExtension & FeegrantExtension & s.GovExtension & OracleExtension & SchedulerExtension & SlashingExtension & s.StakingExtension & s.TxExtension & WasmExtension & s.IbcExtension;
export declare const kujiraQueryClient: ({ client, }: {
    client: Tendermint34Client;
}) => KujiraQueryClient;
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
        msgBurn: (data: import("./kujira/kujira.denom/types/tx").MsgBurn) => EncodeObject;
        msgChangeAdmin: (data: import("./kujira/kujira.denom/types/tx").MsgChangeAdmin) => EncodeObject;
        msgCreateDenom: (data: import("./kujira/kujira.denom/types/tx").MsgCreateDenom) => EncodeObject;
        msgMint: (data: import("./kujira/kujira.denom/types/tx").MsgMint) => EncodeObject;
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
        msgAggregateExchangeRateVote: (data: import("./kujira/kujira.oracle/types/tx").MsgAggregateExchangeRateVote) => EncodeObject;
        msgAggregateExchangeRatePrevote: (data: import("./kujira/kujira.oracle/types/tx").MsgAggregateExchangeRatePrevote) => EncodeObject;
        msgDelegateFeedConsent: (data: import("./kujira/kujira.oracle/types/tx").MsgDelegateFeedConsent) => EncodeObject;
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
