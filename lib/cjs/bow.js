"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.POOLS = exports.castMargin = exports.castPool = exports.castPosition = void 0;
const bignumber_1 = require("@ethersproject/bignumber");
const denom_1 = require("./denom");
const network_1 = require("./network");
const contracts_json_1 = __importDefault(require("./resources/contracts.json"));
const castPosition = (res) => ({
    holder: res.holder,
    lpAmount: bignumber_1.BigNumber.from(res.lp_amount),
    ltv: (0, bignumber_1.parseFixed)(res.ltv, 18),
    debtShares: res.debt_shares.reduce((a, v) => (Object.assign(Object.assign({}, a), { [v.denom]: {
            amount: bignumber_1.BigNumber.from(v.amount),
            denom: denom_1.Denom.from(v.denom),
            ratio: (0, bignumber_1.parseFixed)(v.ratio, 18),
        } })), {}),
});
exports.castPosition = castPosition;
const castPool = (address, res, margin) => ({
    address,
    owner: res.owner,
    denoms: [denom_1.Denom.from(res.denoms[0]), denom_1.Denom.from(res.denoms[1])],
    pricePrecision: res.price_precision.decimal_places,
    decimalDelta: res.decimal_delta,
    finContract: res.fin_contract,
    intervals: res.intervals.map((x) => (0, bignumber_1.parseFixed)(x, 18)),
    amp: (0, bignumber_1.parseFixed)(res.amp, 18),
    fee: (0, bignumber_1.parseFixed)(res.fee, 18),
    margin: margin && (0, exports.castMargin)(margin.address, margin.config),
});
exports.castPool = castPool;
const castMargin = (address, res) => ({
    address,
    owner: res.owner,
    bowContract: res.bow_contract,
    denoms: [
        {
            denom: denom_1.Denom.from(res.denoms[0].denom),
            decimals: res.denoms[0].decimals,
            oracle: res.denoms[0].oracle,
        },
        {
            denom: denom_1.Denom.from(res.denoms[1].denom),
            decimals: res.denoms[1].decimals,
            oracle: res.denoms[1].oracle,
        },
    ],
    vaults: [res.vaults[0], res.vaults[1]],
    orcas: [res.orcas[0], res.orcas[1]],
    maxLtv: (0, bignumber_1.parseFixed)(res.max_ltv, 18),
    fullLiquidationThreshold: bignumber_1.BigNumber.from(res.full_liquidation_threshold),
    partialLiquidationTarget: (0, bignumber_1.parseFixed)(res.partial_liquidation_target, 18),
    borrowFee: (0, bignumber_1.parseFixed)(res.borrow_fee, 18),
});
exports.castMargin = castMargin;
exports.POOLS = {
    [network_1.MAINNET]: contracts_json_1.default[network_1.MAINNET].bow.reduce((a, v) => (Object.assign(Object.assign({}, a), { [v.address]: (0, exports.castPool)(v.address, v.config) })), {}),
    [network_1.TESTNET]: contracts_json_1.default[network_1.TESTNET].bow.reduce((a, v) => (Object.assign(Object.assign({}, a), { [v.address]: (0, exports.castPool)(v.address, v.config, Object.values(contracts_json_1.default[network_1.TESTNET].bowMargin).find((x) => x.config.bow_contract === v.address)) })), {}),
    [network_1.LOCALNET]: {},
};
