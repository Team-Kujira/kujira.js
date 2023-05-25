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
exports.accountParser = exports.registry = void 0;
const modules_1 = require("@cosmjs/cosmwasm-stargate/build/modules");
const proto_signing_1 = require("@cosmjs/proto-signing");
const s = __importStar(require("@cosmjs/stargate"));
const modules_2 = require("@cosmjs/stargate/build/modules");
const utils_1 = require("@cosmjs/utils");
const core_proto_ts_1 = require("@injectivelabs/core-proto-ts");
const auth_1 = require("cosmjs-types/cosmos/auth/v1beta1/auth");
const distribution_1 = require("cosmjs-types/cosmos/distribution/v1beta1/distribution");
const gov_1 = require("cosmjs-types/cosmos/gov/v1beta1/gov");
const params_1 = require("cosmjs-types/cosmos/params/v1beta1/params");
const upgrade_1 = require("cosmjs-types/cosmos/upgrade/v1beta1/upgrade");
const proposal_1 = require("cosmjs-types/cosmwasm/wasm/v1/proposal");
const client_1 = require("cosmjs-types/ibc/core/client/v1/client");
const tendermint_1 = require("cosmjs-types/ibc/lightclients/tendermint/v1/tendermint");
const alliance = __importStar(require("./alliance"));
const gravity = __importStar(require("./gravity/v1"));
const denom = __importStar(require("./kujira/kujira.denom"));
const oracle = __importStar(require("./kujira/kujira.oracle"));
const proposal_2 = require("./kujira/kujira.scheduler/types/proposal");
const vesting_1 = require("./stride/vesting");
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
    ["/cosmos.gov.v1beta1.TextProposal", gov_1.TextProposal],
    ["/ibc.core.client.v1.ClientUpdateProposal", client_1.ClientUpdateProposal],
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
    ...modules_1.wasmTypes,
    ...modules_2.ibcTypes,
    ...proposalTypes,
    ...extraIbc,
    ...gravity.types,
    ...alliance.types,
];
exports.registry = new proto_signing_1.Registry(types);
const accountParser = (acc) => {
    var _a;
    switch (acc.typeUrl) {
        case "/stride.vesting.StridePeriodicVestingAccount":
            const baseAccount = (_a = vesting_1.StridePeriodicVestingAccount.decode(acc.value)
                .baseVestingAccount) === null || _a === void 0 ? void 0 : _a.baseAccount;
            (0, utils_1.assert)(baseAccount);
            return s.accountFromAny({
                typeUrl: "/cosmos.auth.v1beta1.BaseAccount",
                value: auth_1.BaseAccount.encode(baseAccount).finish(),
            });
        case "/injective.types.v1beta1.EthAccount":
            const account = core_proto_ts_1.InjectiveTypesV1Beta1Account.EthAccount.decode(acc.value);
            const ethBaseAccount = account.baseAccount;
            const pubKey = ethBaseAccount.pubKey;
            return {
                address: ethBaseAccount.address,
                pubkey: pubKey
                    ? {
                        type: "/injective.crypto.v1beta1.ethsecp256k1.PubKey",
                        value: Buffer.from(pubKey.value).toString("base64"),
                    }
                    : null,
                accountNumber: parseInt(ethBaseAccount.accountNumber, 10),
                sequence: parseInt(ethBaseAccount.sequence, 10),
            };
        default:
            return s.accountFromAny(acc);
    }
};
exports.accountParser = accountParser;
