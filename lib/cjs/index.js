"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.query = exports.tx = exports.aminoTypes = exports.FinQueryClient = exports.FinClient = exports.registry = exports.Coin = exports.TxResult = exports.MsgExecuteContract = exports.V1ContractCodeHistoryOperationType = exports.V1Beta1VoteOption = exports.V1Beta1ProposalStatus = exports.ContinuousVestingAccount = exports.Tx = exports.V1Beta1BondStatus = exports.ValidatorSigningInfo = exports.voteOptionFromJSON = exports.MsgSend = exports.ModuleAccount = exports.BaseAccount = void 0;
const proto_signing_1 = require("@cosmjs/proto-signing");
const stargate_1 = require("@cosmjs/stargate");
const encoding_1 = require("@cosmjs/encoding");
const cosmwasm_stargate_1 = require("@cosmjs/cosmwasm-stargate");
const long_1 = require("long");
const minimal_1 = require("protobufjs/minimal");
const auth = require("./cosmos/cosmos-sdk/cosmos.auth.v1beta1");
const authz = require("./cosmos/cosmos-sdk/cosmos.authz.v1beta1");
const bank = require("./cosmos/cosmos-sdk/cosmos.bank.v1beta1");
const crisis = require("./cosmos/cosmos-sdk/cosmos.crisis.v1beta1");
const denom = require("./kujira/kujira.denom");
const distribution = require("./cosmos/cosmos-sdk/cosmos.distribution.v1beta1");
const evidence = require("./cosmos/cosmos-sdk/cosmos.evidence.v1beta1");
const feegrant = require("./cosmos/cosmos-sdk/cosmos.feegrant.v1beta1");
const gov = require("./cosmos/cosmos-sdk/cosmos.gov.v1beta1");
const ibcTransfer = require("./ibc-go/v3/ibc.applications.transfer.v1");
const params = require("./cosmos/cosmos-sdk/cosmos.params.v1beta1");
const scheduler = require("./kujira/kujira.scheduler");
const slashing = require("./cosmos/cosmos-sdk/cosmos.slashing.v1beta1");
const staking = require("./cosmos/cosmos-sdk/cosmos.staking.v1beta1");
const tendermint = require("./cosmos/cosmos-sdk/cosmos.base.tendermint.v1beta1");
const tx_ = require("./cosmos/cosmos-sdk/cosmos.tx.v1beta1");
const vesting = require("./cosmos/cosmos-sdk/cosmos.vesting.v1beta1");
const wasm = require("./CosmWasm/wasmd/cosmwasm.wasm.v1");
var auth_1 = require("./cosmos/cosmos-sdk/cosmos.auth.v1beta1/types/auth");
Object.defineProperty(exports, "BaseAccount", { enumerable: true, get: function () { return auth_1.BaseAccount; } });
Object.defineProperty(exports, "ModuleAccount", { enumerable: true, get: function () { return auth_1.ModuleAccount; } });
var tx_1 = require("./cosmos/cosmos-sdk/cosmos.bank.v1beta1/types/tx");
Object.defineProperty(exports, "MsgSend", { enumerable: true, get: function () { return tx_1.MsgSend; } });
var gov_1 = require("./cosmos/cosmos-sdk/cosmos.gov.v1beta1/types/gov");
Object.defineProperty(exports, "voteOptionFromJSON", { enumerable: true, get: function () { return gov_1.voteOptionFromJSON; } });
var slashing_1 = require("./cosmos/cosmos-sdk/cosmos.slashing.v1beta1/types/slashing");
Object.defineProperty(exports, "ValidatorSigningInfo", { enumerable: true, get: function () { return slashing_1.ValidatorSigningInfo; } });
var rest_1 = require("./cosmos/cosmos-sdk/cosmos.staking.v1beta1/rest");
Object.defineProperty(exports, "V1Beta1BondStatus", { enumerable: true, get: function () { return rest_1.V1Beta1BondStatus; } });
var tx_2 = require("./cosmos/cosmos-sdk/cosmos.tx.v1beta1/types/tx");
Object.defineProperty(exports, "Tx", { enumerable: true, get: function () { return tx_2.Tx; } });
var vesting_1 = require("./cosmos/cosmos-sdk/cosmos.vesting.v1beta1/types/vesting");
Object.defineProperty(exports, "ContinuousVestingAccount", { enumerable: true, get: function () { return vesting_1.ContinuousVestingAccount; } });
var rest_2 = require("./cosmos/cosmos-sdk/cosmos.gov.v1beta1/rest");
Object.defineProperty(exports, "V1Beta1ProposalStatus", { enumerable: true, get: function () { return rest_2.V1Beta1ProposalStatus; } });
Object.defineProperty(exports, "V1Beta1VoteOption", { enumerable: true, get: function () { return rest_2.V1Beta1VoteOption; } });
var rest_3 = require("./CosmWasm/wasmd/cosmwasm.wasm.v1/rest");
Object.defineProperty(exports, "V1ContractCodeHistoryOperationType", { enumerable: true, get: function () { return rest_3.V1ContractCodeHistoryOperationType; } });
var tx_3 = require("./CosmWasm/wasmd/cosmwasm.wasm.v1/types/tx");
Object.defineProperty(exports, "MsgExecuteContract", { enumerable: true, get: function () { return tx_3.MsgExecuteContract; } });
var types_1 = require("./types/tendermint/abci/types");
Object.defineProperty(exports, "TxResult", { enumerable: true, get: function () { return types_1.TxResult; } });
var coin_1 = require("./types/cosmos/base/coin");
Object.defineProperty(exports, "Coin", { enumerable: true, get: function () { return coin_1.Coin; } });
const types = [
    ...authz.types,
    ...bank.types,
    ...crisis.types,
    ...denom.types,
    ...distribution.types,
    ...evidence.types,
    ...feegrant.types,
    ...gov.types,
    ...ibcTransfer.types,
    ...params.types,
    ...scheduler.types,
    ...slashing.types,
    ...staking.types,
    ...vesting.types,
    ...wasm.types,
];
exports.registry = new proto_signing_1.Registry(types);
var fin_1 = require("./fin");
Object.defineProperty(exports, "FinClient", { enumerable: true, get: function () { return fin_1.FinClient; } });
Object.defineProperty(exports, "FinQueryClient", { enumerable: true, get: function () { return fin_1.FinQueryClient; } });
function createDefaultTypes(prefix) {
    return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, (0, stargate_1.createAuthzAminoConverters)()), (0, stargate_1.createBankAminoConverters)()), (0, stargate_1.createDistributionAminoConverters)()), (0, stargate_1.createFreegrantAminoConverters)()), (0, stargate_1.createGovAminoConverters)()), (0, stargate_1.createIbcAminoConverters)()), (0, stargate_1.createStakingAminoConverters)(prefix)), (0, cosmwasm_stargate_1.createWasmAminoConverters)());
}
const convert = (converters) => Object.entries(converters).reduce((a, [k, c]) => {
    if (c !== "not_supported_by_chain") {
        const originalTo = c.toAmino;
        const toAmino = (input) => originalTo(Object.entries(input).reduce((a, [k, v]) => (Object.assign(Object.assign({}, a), { [k.replaceAll(/_([a-z])/g, (_, l) => l.toUpperCase())]: v })), {}));
        const fromAmino = (f) => {
            return Object.assign(Object.assign({}, f), { msg: (0, encoding_1.toUtf8)(JSON.stringify(f.msg)) });
        };
        c = {
            aminoType: c.aminoType,
            toAmino: toAmino,
            fromAmino,
        };
    }
    return Object.assign(Object.assign({}, a), { [k]: c });
}, {});
const aminoTypes = (prefix) => new stargate_1.AminoTypes(convert(createDefaultTypes(prefix)));
exports.aminoTypes = aminoTypes;
exports.tx = {
    bank: bank.txClient,
    distribution: distribution.txClient,
    gov: gov.txClient,
    ibcTransfer: ibcTransfer.txClient,
    slashing: slashing.txClient,
    staking: staking.txClient,
    wasm: wasm.txClient,
};
const query = ({ rest }) => {
    return {
        auth: new auth.Api({ baseUrl: rest }),
        bank: new bank.Api({ baseUrl: rest }),
        distribution: new distribution.Api({ baseUrl: rest }),
        gov: new gov.Api({ baseUrl: rest }),
        ibcTransfer: new ibcTransfer.Api({ baseUrl: rest }),
        slashing: new slashing.Api({ baseUrl: rest }),
        staking: new staking.Api({ baseUrl: rest }),
        tx: new tx_.Api({ baseUrl: rest }),
        tendermint: new tendermint.Api({ baseUrl: rest }),
        wasm: new wasm.Api({ baseUrl: rest }),
    };
};
exports.query = query;
if (minimal_1.util.Long !== long_1.default) {
    minimal_1.util.Long = long_1.default;
    (0, minimal_1.configure)();
}
