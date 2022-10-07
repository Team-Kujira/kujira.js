"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.msg = exports.kujiraQueryClient = exports.aminoTypes = exports.FinQueryClient = exports.FinClient = exports.registry = void 0;
const proto_signing_1 = require("@cosmjs/proto-signing");
const s = require("@cosmjs/stargate");
const modules_1 = require("@cosmjs/stargate/build/modules");
const tendermint_rpc_1 = require("@cosmjs/tendermint-rpc");
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
const kujiraQueryClient = ({ rpc, }) => __awaiter(void 0, void 0, void 0, function* () {
    return s.QueryClient.withExtensions(yield tendermint_rpc_1.Tendermint34Client.connect(rpc), s.setupAuthExtension, s.setupAuthzExtension, s.setupBankExtension, kujira_denom_1.setupDenomExtension, s.setupDistributionExtension, 
    // setupEthermintEvmExtension,
    // setupEthermintFeemarketExtension,
    s.setupFeegrantExtension, s.setupGovExtension, kujira_oracle_1.setupOracleExtension, kujira_scheduler_1.setupSchedulerExtension, s.setupSlashingExtension, s.setupStakingExtension, s.setupTxExtension, cosmwasm_stargate_1.setupWasmExtension, s.setupIbcExtension);
});
exports.kujiraQueryClient = kujiraQueryClient;
const register = (typeUrl, int) => (a) => ({ typeUrl, value: int.fromPartial(a) });
exports.msg = {
    authz: {
        msgExec: register("/cosmos.authz.v1beta1.MsgExec", tx_1.MsgExec),
        msgGrant: register("/cosmos.authz.v1beta1.MsgGrant", tx_1.MsgGrant),
        msgRevoke: register("/cosmos.authz.v1beta1.MsgRevoke", tx_1.MsgRevoke),
    },
    bank: {
        msgSend: register("/cosmos.bank.v1beta1.MsgSend", tx_2.MsgSend),
        msgMultiSend: register("/cosmos.bank.v1beta1.MsgMultiSend", tx_2.MsgMultiSend),
    },
    distribution: {
        msgFundCommunityPool: register("/cosmos.distribution.v1beta1.MsgFundCommunityPool", tx_3.MsgFundCommunityPool),
        msgSetWithdrawAddress: register("/cosmos.distribution.v1beta1.MsgSetWithdrawAddress", tx_3.MsgSetWithdrawAddress),
        msgWithdrawDelegatorReward: register("/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward", tx_3.MsgWithdrawDelegatorReward),
        msgWithdrawValidatorCommission: register("/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission", tx_3.MsgWithdrawValidatorCommission),
    },
    denom: denom.msg,
    feegrant: {
        msgGrantAllowance: register("/cosmos.feegrant.v1beta1.MsgGrantAllowance", tx_4.MsgGrantAllowance),
        msgRevokeAllowance: register("/cosmos.feegrant.v1beta1.MsgRevokeAllowance", tx_4.MsgRevokeAllowance),
    },
    gov: {
        msgDeposit: register("/cosmos.gov.v1beta1.MsgDeposit", tx_5.MsgDeposit),
        msgSubmitProposal: register("/cosmos.gov.v1beta1.MsgSubmitProposal", tx_5.MsgSubmitProposal),
        msgVote: register("/cosmos.gov.v1beta1.MsgVote", tx_5.MsgVote),
        msgVoteWeighted: register("/cosmos.gov.v1beta1.MsgVoteWeighted", tx_5.MsgVoteWeighted),
    },
    oracle: oracle.msg,
    staking: {
        msgBeginRedelegate: register("/cosmos.staking.v1beta1.MsgBeginRedelegate", tx_6.MsgBeginRedelegate),
        msgCreateValidator: register("/cosmos.staking.v1beta1.MsgCreateValidator", tx_6.MsgCreateValidator),
        msgDelegate: register("/cosmos.staking.v1beta1.MsgDelegate", tx_6.MsgDelegate),
        msgEditValidator: register("/cosmos.staking.v1beta1.MsgEditValidator", tx_6.MsgEditValidator),
        msgUndelegate: register("/cosmos.staking.v1beta1.MsgUndelegate", tx_6.MsgUndelegate),
    },
    vesting: {
        msgCreateVestingAccount: register("/cosmos.vesting.v1beta1.MsgCreateVestingAccount", tx_7.MsgCreateVestingAccount),
    },
    wasm: {
        msgClearAdmin: register("/cosmwasm.wasm.v1.MsgClearAdmin", tx_8.MsgClearAdmin),
        msgExecuteContract: register("/cosmwasm.wasm.v1.MsgExecuteContract", tx_8.MsgExecuteContract),
        msgMigrateContract: register("/cosmwasm.wasm.v1.MsgMigrateContract", tx_8.MsgMigrateContract),
        msgStoreCode: register("/cosmwasm.wasm.v1.MsgStoreCode", tx_8.MsgStoreCode),
        msgInstantiateContract: register("/cosmwasm.wasm.v1.MsgInstantiateContract", tx_8.MsgInstantiateContract),
        msgUpdateAdmin: register("/cosmwasm.wasm.v1.MsgUpdateAdmin", tx_8.MsgUpdateAdmin),
    },
    ibc: {
        msgTrasnfer: register("/ibc.applications.transfer.v1.MsgTransfer", tx_9.MsgTransfer),
    },
};
if (minimal_1.util.Long !== long_1.default) {
    minimal_1.util.Long = long_1.default;
    (0, minimal_1.configure)();
}
