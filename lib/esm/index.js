import { Registry } from "@cosmjs/proto-signing";
import * as s from "@cosmjs/stargate";
import { ibcTypes, } from "@cosmjs/stargate/build/modules";
import { createWasmAminoConverters, setupWasmExtension, } from "@cosmjs/cosmwasm-stargate";
import Long from "long";
import { util, configure } from "protobufjs/minimal";
import * as denom from "./kujira/kujira.denom";
import * as oracle from "./kujira/kujira.oracle";
import { wasmTypes } from "@cosmjs/cosmwasm-stargate/build/modules";
import { setupDenomExtension } from "./kujira/kujira.denom";
import { setupOracleExtension } from "./kujira/kujira.oracle";
import { setupSchedulerExtension, } from "./kujira/kujira.scheduler";
import { MsgExec, MsgGrant, MsgRevoke, } from "cosmjs-types/cosmos/authz/v1beta1/tx";
import { MsgSend, MsgMultiSend } from "cosmjs-types/cosmos/bank/v1beta1/tx";
import { MsgFundCommunityPool, MsgSetWithdrawAddress, MsgWithdrawDelegatorReward, MsgWithdrawValidatorCommission, } from "cosmjs-types/cosmos/distribution/v1beta1/tx";
import { MsgGrantAllowance, MsgRevokeAllowance, } from "cosmjs-types/cosmos/feegrant/v1beta1/tx";
import { MsgDeposit, MsgSubmitProposal, MsgVote, MsgVoteWeighted, } from "cosmjs-types/cosmos/gov/v1beta1/tx";
import { MsgBeginRedelegate, MsgCreateValidator, MsgDelegate, MsgEditValidator, MsgUndelegate, } from "cosmjs-types/cosmos/staking/v1beta1/tx";
import { MsgCreateVestingAccount } from "cosmjs-types/cosmos/vesting/v1beta1/tx";
import { MsgClearAdmin, MsgExecuteContract, MsgMigrateContract, MsgStoreCode, MsgInstantiateContract, MsgUpdateAdmin, } from "cosmjs-types/cosmwasm/wasm/v1/tx";
import { MsgTransfer } from "cosmjs-types/ibc/applications/transfer/v1/tx";
import { CommunityPoolSpendProposal } from "cosmjs-types/cosmos/distribution/v1beta1/distribution";
import { ParameterChangeProposal } from "cosmjs-types/cosmos/params/v1beta1/params";
import { ClearAdminProposal, ExecuteContractProposal, InstantiateContractProposal, MigrateContractProposal, PinCodesProposal, StoreCodeProposal, UnpinCodesProposal, UpdateAdminProposal, UpdateInstantiateConfigProposal, } from "cosmjs-types/cosmwasm/wasm/v1/proposal";
import { setupStakingExtension } from "./cosmos/staking";
import { setupGovExtension } from "./cosmos/gov";
import { SoftwareUpgradeProposal } from "cosmjs-types/cosmos/upgrade/v1beta1/upgrade";
import { Header, ClientState, ConsensusState, Misbehaviour, } from "cosmjs-types/ibc/lightclients/tendermint/v1/tendermint";
export * from "./denom";
export * from "./network";
export * from "./pairs";
export * from "./usk";
import chains from "./resources/chains.json";
import connections from "./resources/connections.json";
import tokens from "./resources/tokens.json";
import { CreateHookProposal, DeleteHookProposal, UpdateHookProposal, } from "./kujira/kujira.scheduler/types/proposal";
import { AminoTypes } from "./aminotypes";
import { createAuthzAminoConverters } from "./cosmos/authz";
export const IBC = {
    chains,
    connections,
    tokens,
};
export * from "./ibc";
export * as kns from "./kns";
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
    ["/kujira.scheduler.CreateHookProposal", CreateHookProposal],
    ["/kujira.scheduler.UpdateHookProposal", UpdateHookProposal],
    ["/kujira.scheduler.DeleteHookProposal", DeleteHookProposal],
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
export const registry = new Registry(types);
export { FinClient, FinQueryClient } from "./fin";
export const aminoTypes = (prefix) => new AminoTypes(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, createAuthzAminoConverters()), s.createBankAminoConverters()), s.createDistributionAminoConverters()), s.createFeegrantAminoConverters()), s.createGovAminoConverters()), s.createIbcAminoConverters()), s.createStakingAminoConverters(prefix)), s.createVestingAminoConverters()), createWasmAminoConverters()));
export const kujiraQueryClient = ({ client, }) => s.QueryClient.withExtensions(client, s.setupAuthExtension, s.setupAuthzExtension, s.setupBankExtension, setupDenomExtension, s.setupDistributionExtension, s.setupFeegrantExtension, setupGovExtension, setupOracleExtension, setupSchedulerExtension, s.setupSlashingExtension, setupStakingExtension, s.setupTxExtension, setupWasmExtension, s.setupIbcExtension);
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
            value: MsgSend.fromPartial(i),
        }),
        msgMultiSend: (i) => ({
            typeUrl: "/cosmos.bank.v1beta1.MsgMultiSend",
            value: MsgMultiSend.fromPartial(i),
        }),
    },
    distribution: {
        msgFundCommunityPool: (i) => ({
            typeUrl: "/cosmos.distribution.v1beta1.MsgFundCommunityPool",
            value: MsgFundCommunityPool.fromJSON(i),
        }),
        msgSetWithdrawAddress: (i) => ({
            typeUrl: "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress",
            value: MsgSetWithdrawAddress.fromJSON(i),
        }),
        msgWithdrawDelegatorReward: (i) => ({
            typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
            value: MsgWithdrawDelegatorReward.fromJSON(i),
        }),
        msgWithdrawValidatorCommission: (i) => ({
            typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission",
            value: MsgWithdrawValidatorCommission.fromJSON(i),
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
            typeUrl: "/cosmos.gov.v1beta1.MsgDeposit",
            value: MsgDeposit.fromJSON(i),
        }),
        msgSubmitProposal: (i) => ({
            typeUrl: "/cosmos.gov.v1beta1.MsgSubmitProposal",
            value: MsgSubmitProposal.fromPartial(i),
        }),
        msgVote: (i) => ({
            typeUrl: "/cosmos.gov.v1beta1.MsgVote",
            value: MsgVote.fromJSON(i),
        }),
        msgVoteWeighted: (i) => ({
            typeUrl: "/cosmos.gov.v1beta1.MsgVoteWeighted",
            value: MsgVoteWeighted.fromPartial(i),
        }),
    },
    oracle: oracle.msg,
    staking: {
        msgBeginRedelegate: (i) => ({
            typeUrl: "/cosmos.staking.v1beta1.MsgBeginRedelegate",
            value: MsgBeginRedelegate.fromPartial(i),
        }),
        msgCreateValidator: (i) => ({
            typeUrl: "/cosmos.staking.v1beta1.MsgCreateValidator",
            value: MsgCreateValidator.fromPartial(i),
        }),
        msgDelegate: (i) => ({
            typeUrl: "/cosmos.staking.v1beta1.MsgDelegate",
            value: MsgDelegate.fromJSON(i),
        }),
        msgEditValidator: (i) => ({
            typeUrl: "/cosmos.staking.v1beta1.MsgEditValidator",
            value: MsgEditValidator.fromPartial(i),
        }),
        msgUndelegate: (i) => ({
            typeUrl: "/cosmos.staking.v1beta1.MsgUndelegate",
            value: MsgUndelegate.fromPartial(i),
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
            value: MsgClearAdmin.fromJSON(i),
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
            value: MsgStoreCode.fromJSON(i),
        }),
        msgInstantiateContract: (i) => ({
            typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract",
            value: MsgInstantiateContract.fromPartial(i),
        }),
        msgUpdateAdmin: (i) => ({
            typeUrl: "/cosmwasm.wasm.v1.MsgUpdateAdmin",
            value: MsgUpdateAdmin.fromPartial(i),
        }),
    },
    ibc: {
        msgTransfer: (i) => ({
            typeUrl: "/ibc.applications.transfer.v1.MsgTransfer",
            value: MsgTransfer.fromPartial(i),
        }),
    },
};
if (util.Long !== Long) {
    util.Long = Long;
    configure();
}
