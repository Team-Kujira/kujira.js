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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.msg = exports.kujiraQueryClient = exports.aminoTypes = exports.FinQueryClient = exports.FinClient = exports.registry = exports.kns = exports.IBC = void 0;
const proto_signing_1 = require("@cosmjs/proto-signing");
const s = __importStar(require("@cosmjs/stargate"));
const modules_1 = require("@cosmjs/stargate/build/modules");
const cosmwasm_stargate_1 = require("@cosmjs/cosmwasm-stargate");
const long_1 = __importDefault(require("long"));
const minimal_1 = require("protobufjs/minimal");
const denom = __importStar(require("./kujira/kujira.denom"));
const oracle = __importStar(require("./kujira/kujira.oracle"));
const modules_2 = require("@cosmjs/cosmwasm-stargate/build/modules");
const kujira_denom_1 = require("./kujira/kujira.denom");
const kujira_oracle_1 = require("./kujira/kujira.oracle");
const kujira_scheduler_1 = require("./kujira/kujira.scheduler");
const tx_1 = require("cosmjs-types/cosmos/authz/v1beta1/tx");
const tx_2 = require("cosmjs-types/cosmos/bank/v1beta1/tx");
const tx_3 = require("cosmjs-types/cosmos/distribution/v1beta1/tx");
const tx_4 = require("cosmjs-types/cosmos/feegrant/v1beta1/tx");
const tx_5 = require("cosmjs-types/cosmos/gov/v1beta1/tx");
const tx_6 = require("cosmjs-types/cosmos/staking/v1beta1/tx");
const tx_7 = require("cosmjs-types/cosmos/vesting/v1beta1/tx");
const tx_8 = require("cosmjs-types/cosmwasm/wasm/v1/tx");
const tx_9 = require("cosmjs-types/ibc/applications/transfer/v1/tx");
const distribution_1 = require("cosmjs-types/cosmos/distribution/v1beta1/distribution");
const params_1 = require("cosmjs-types/cosmos/params/v1beta1/params");
const proposal_1 = require("cosmjs-types/cosmwasm/wasm/v1/proposal");
const staking_1 = require("./cosmos/staking");
const gov_1 = require("./cosmos/gov");
const upgrade_1 = require("cosmjs-types/cosmos/upgrade/v1beta1/upgrade");
const tendermint_1 = require("cosmjs-types/ibc/lightclients/tendermint/v1/tendermint");
__exportStar(require("./denom"), exports);
__exportStar(require("./network"), exports);
__exportStar(require("./pairs"), exports);
__exportStar(require("./usk"), exports);
const chains_json_1 = __importDefault(require("./resources/chains.json"));
const connections_json_1 = __importDefault(require("./resources/connections.json"));
const tokens_json_1 = __importDefault(require("./resources/tokens.json"));
const proposal_2 = require("./kujira/kujira.scheduler/types/proposal");
const aminotypes_1 = require("./aminotypes");
const authz_1 = require("./cosmos/authz");
exports.IBC = {
    chains: chains_json_1.default,
    connections: connections_json_1.default,
    tokens: tokens_json_1.default,
};
__exportStar(require("./ibc"), exports);
exports.kns = __importStar(require("./kns"));
const proposalTypes = [
    [
        "/cosmos.distribution.v1beta1.CommunityPoolSpendProposal",
        distribution_1.CommunityPoolSpendProposal,
    ],
    ["/cosmos.params.v1beta1.ParameterChangeProposal", params_1.ParameterChangeProposal],
    ["/cosmwasm.wasm.v1.StoreCodeProposal", proposal_1.StoreCodeProposal],
    [
        "/cosmwasm.wasm.v1.InstantiateContractProposal",
        proposal_1.InstantiateContractProposal,
    ],
    ["/cosmwasm.wasm.v1.MigrateContractProposal", proposal_1.MigrateContractProposal],
    ["/cosmwasm.wasm.v1.UpdateAdminProposal", proposal_1.UpdateAdminProposal],
    ["/cosmwasm.wasm.v1.ClearAdminProposal", proposal_1.ClearAdminProposal],
    ["/cosmwasm.wasm.v1.PinCodesProposal", proposal_1.PinCodesProposal],
    ["/cosmwasm.wasm.v1.UnpinCodesProposal", proposal_1.UnpinCodesProposal],
    ["/cosmwasm.wasm.v1.ExecuteContractProposal", proposal_1.ExecuteContractProposal],
    [
        "/cosmwasm.wasm.v1.UpdateInstantiateConfigProposal",
        proposal_1.UpdateInstantiateConfigProposal,
    ],
    ["/cosmos.upgrade.v1beta1.SoftwareUpgradeProposal", upgrade_1.SoftwareUpgradeProposal],
    ["/kujira.scheduler.CreateHookProposal", proposal_2.CreateHookProposal],
    ["/kujira.scheduler.UpdateHookProposal", proposal_2.UpdateHookProposal],
    ["/kujira.scheduler.DeleteHookProposal", proposal_2.DeleteHookProposal],
];
const extraIbc = [
    ["/ibc.lightclients.tendermint.v1.Header", tendermint_1.Header],
    ["/ibc.lightclients.tendermint.v1.ClientState", tendermint_1.ClientState],
    ["/ibc.lightclients.tendermint.v1.ConsensusState", tendermint_1.ConsensusState],
    ["/ibc.lightclients.tendermint.v1.Misbehaviour", tendermint_1.Misbehaviour],
];
const types = [
    ...s.defaultRegistryTypes,
    ...denom.types,
    // ...ethermintEvm.types,
    // ...ethermintFeemarket.types,
    ...oracle.types,
    ...modules_2.wasmTypes,
    ...modules_1.ibcTypes,
    ...proposalTypes,
    ...extraIbc,
];
exports.registry = new proto_signing_1.Registry(types);
var fin_1 = require("./fin");
Object.defineProperty(exports, "FinClient", { enumerable: true, get: function () { return fin_1.FinClient; } });
Object.defineProperty(exports, "FinQueryClient", { enumerable: true, get: function () { return fin_1.FinQueryClient; } });
const aminoTypes = (prefix) => new aminotypes_1.AminoTypes(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, (0, authz_1.createAuthzAminoConverters)()), s.createBankAminoConverters()), s.createDistributionAminoConverters()), s.createFeegrantAminoConverters()), s.createGovAminoConverters()), s.createIbcAminoConverters()), s.createStakingAminoConverters(prefix)), s.createVestingAminoConverters()), (0, cosmwasm_stargate_1.createWasmAminoConverters)()));
exports.aminoTypes = aminoTypes;
const kujiraQueryClient = ({ client, }) => s.QueryClient.withExtensions(client, s.setupAuthExtension, s.setupAuthzExtension, s.setupBankExtension, kujira_denom_1.setupDenomExtension, s.setupDistributionExtension, s.setupFeegrantExtension, gov_1.setupGovExtension, kujira_oracle_1.setupOracleExtension, kujira_scheduler_1.setupSchedulerExtension, s.setupSlashingExtension, staking_1.setupStakingExtension, s.setupTxExtension, cosmwasm_stargate_1.setupWasmExtension, s.setupIbcExtension);
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
