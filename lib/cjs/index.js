"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msg = exports.kujiraQueryClient = exports.aminoTypes = exports.FinQueryClient = exports.FinClient = exports.registry = void 0;
const proto_signing_1 = require("@cosmjs/proto-signing");
const s = require("@cosmjs/stargate");
const modules_1 = require("@cosmjs/stargate/build/modules");
const cosmwasm_stargate_1 = require("@cosmjs/cosmwasm-stargate");
const long_1 = require("long");
const minimal_1 = require("protobufjs/minimal");
const denom = require("./kujira/kujira.denom");
const oracle = require("./kujira/kujira.oracle");
// import * as ethermintEvm from "./evmos/ethermint/ethermint.evm.v1";
// import * as ethermintFeemarket from "./evmos/ethermint/ethermint.feemarket.v1";
const modules_2 = require("@cosmjs/cosmwasm-stargate/build/modules");
const kujira_denom_1 = require("./kujira/kujira.denom");
const kujira_oracle_1 = require("./kujira/kujira.oracle");
const kujira_scheduler_1 = require("./kujira/kujira.scheduler");
// export { EthAccount } from "./evmos/ethermint/ethermint.evm.v1/types/auth";
const tx_1 = require("cosmjs-types/cosmos/authz/v1beta1/tx");
const tx_2 = require("cosmjs-types/cosmos/bank/v1beta1/tx");
const tx_3 = require("cosmjs-types/cosmos/distribution/v1beta1/tx");
const tx_4 = require("cosmjs-types/cosmos/feegrant/v1beta1/tx");
const tx_5 = require("cosmjs-types/cosmos/gov/v1beta1/tx");
const tx_6 = require("cosmjs-types/cosmos/staking/v1beta1/tx");
const tx_7 = require("cosmjs-types/cosmos/vesting/v1beta1/tx");
const tx_8 = require("cosmjs-types/cosmwasm/wasm/v1/tx");
const tx_9 = require("cosmjs-types/ibc/applications/transfer/v1/tx");
const types = [
    ...s.defaultRegistryTypes,
    ...denom.types,
    // ...ethermintEvm.types,
    // ...ethermintFeemarket.types,
    ...oracle.types,
    ...modules_2.wasmTypes,
    ...modules_1.ibcTypes,
];
exports.registry = new proto_signing_1.Registry(types);
var fin_1 = require("./fin");
Object.defineProperty(exports, "FinClient", { enumerable: true, get: function () { return fin_1.FinClient; } });
Object.defineProperty(exports, "FinQueryClient", { enumerable: true, get: function () { return fin_1.FinQueryClient; } });
const aminoTypes = (prefix) => new s.AminoTypes(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, s.createAuthzAminoConverters()), s.createBankAminoConverters()), s.createDistributionAminoConverters()), s.createFeegrantAminoConverters()), s.createGovAminoConverters()), s.createIbcAminoConverters()), s.createStakingAminoConverters(prefix)), (0, cosmwasm_stargate_1.createWasmAminoConverters)()));
exports.aminoTypes = aminoTypes;
const kujiraQueryClient = ({ client, }) => s.QueryClient.withExtensions(client, s.setupAuthExtension, s.setupAuthzExtension, s.setupBankExtension, kujira_denom_1.setupDenomExtension, s.setupDistributionExtension, 
// setupEthermintEvmExtension,
// setupEthermintFeemarketExtension,
s.setupFeegrantExtension, s.setupGovExtension, kujira_oracle_1.setupOracleExtension, kujira_scheduler_1.setupSchedulerExtension, s.setupSlashingExtension, s.setupStakingExtension, s.setupTxExtension, cosmwasm_stargate_1.setupWasmExtension, s.setupIbcExtension);
exports.kujiraQueryClient = kujiraQueryClient;
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
            value: tx_2.MsgSend.fromPartial(i),
        }),
        msgMultiSend: (i) => ({
            typeUrl: "/cosmos.bank.v1beta1.MsgMultiSend",
            value: tx_2.MsgMultiSend.fromPartial(i),
        }),
    },
    distribution: {
        msgFundCommunityPool: (i) => ({
            typeUrl: "/cosmos.distribution.v1beta1.MsgFundCommunityPool",
            value: tx_3.MsgFundCommunityPool.fromJSON(i),
        }),
        msgSetWithdrawAddress: (i) => ({
            typeUrl: "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress",
            value: tx_3.MsgSetWithdrawAddress.fromJSON(i),
        }),
        msgWithdrawDelegatorReward: (i) => ({
            typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
            value: tx_3.MsgWithdrawDelegatorReward.fromJSON(i),
        }),
        msgWithdrawValidatorCommission: (i) => ({
            typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission",
            value: tx_3.MsgWithdrawValidatorCommission.fromJSON(i),
        }),
    },
    denom: denom.msg,
    feegrant: {
        msgGrantAllowance: (i) => ({
            typeUrl: "/cosmos.feegrant.v1beta1.MsgGrantAllowance",
            value: tx_4.MsgGrantAllowance.fromPartial(i),
        }),
        msgRevokeAllowance: (i) => ({
            typeUrl: "/cosmos.feegrant.v1beta1.MsgRevokeAllowance",
            value: tx_4.MsgRevokeAllowance.fromPartial(i),
        }),
    },
    gov: {
        msgDeposit: (i) => ({
            typeUrl: "/cosmos.gov.v1beta1.MsgDeposit",
            value: tx_5.MsgDeposit.fromJSON(i),
        }),
        msgSubmitProposal: (i) => ({
            typeUrl: "/cosmos.gov.v1beta1.MsgSubmitProposal",
            value: tx_5.MsgSubmitProposal.fromPartial(i),
        }),
        msgVote: (i) => ({
            typeUrl: "/cosmos.gov.v1beta1.MsgVote",
            value: tx_5.MsgVote.fromJSON(i),
        }),
        msgVoteWeighted: (i) => ({
            typeUrl: "/cosmos.gov.v1beta1.MsgVoteWeighted",
            value: tx_5.MsgVoteWeighted.fromPartial(i),
        }),
    },
    oracle: oracle.msg,
    staking: {
        msgBeginRedelegate: (i) => ({
            typeUrl: "/cosmos.staking.v1beta1.MsgBeginRedelegate",
            value: tx_6.MsgBeginRedelegate.fromPartial(i),
        }),
        msgCreateValidator: (i) => ({
            typeUrl: "/cosmos.staking.v1beta1.MsgCreateValidator",
            value: tx_6.MsgCreateValidator.fromPartial(i),
        }),
        msgDelegate: (i) => ({
            typeUrl: "/cosmos.staking.v1beta1.MsgDelegate",
            value: tx_6.MsgDelegate.fromJSON(i),
        }),
        msgEditValidator: (i) => ({
            typeUrl: "/cosmos.staking.v1beta1.MsgEditValidator",
            value: tx_6.MsgEditValidator.fromPartial(i),
        }),
        msgUndelegate: (i) => ({
            typeUrl: "/cosmos.staking.v1beta1.MsgUndelegate",
            value: tx_6.MsgUndelegate.fromPartial(i),
        }),
    },
    vesting: {
        msgCreateVestingAccount: (i) => ({
            typeUrl: "/cosmos.vesting.v1beta1.MsgCreateVestingAccount",
            value: tx_7.MsgCreateVestingAccount.fromPartial(i),
        }),
    },
    wasm: {
        msgClearAdmin: (i) => ({
            typeUrl: "/cosmwasm.wasm.v1.MsgClearAdmin",
            value: tx_8.MsgClearAdmin.fromJSON(i),
        }),
        msgExecuteContract: (i) => ({
            typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
            value: tx_8.MsgExecuteContract.fromPartial(i),
        }),
        msgMigrateContract: (i) => ({
            typeUrl: "/cosmwasm.wasm.v1.MsgMigrateContract",
            value: tx_8.MsgMigrateContract.fromPartial(i),
        }),
        msgStoreCode: (i) => ({
            typeUrl: "/cosmwasm.wasm.v1.MsgStoreCode",
            value: tx_8.MsgStoreCode.fromJSON(i),
        }),
        msgInstantiateContract: (i) => ({
            typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract",
            value: tx_8.MsgInstantiateContract.fromPartial(i),
        }),
        msgUpdateAdmin: (i) => ({
            typeUrl: "/cosmwasm.wasm.v1.MsgUpdateAdmin",
            value: tx_8.MsgUpdateAdmin.fromPartial(i),
        }),
    },
    ibc: {
        msgTransfer: (i) => ({
            typeUrl: "/ibc.applications.transfer.v1.MsgTransfer",
            value: tx_9.MsgTransfer.fromPartial(i),
        }),
    },
};
if (minimal_1.util.Long !== long_1.default) {
    minimal_1.util.Long = long_1.default;
    (0, minimal_1.configure)();
}
