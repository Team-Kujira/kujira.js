"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.castMargin = exports.castPool = void 0;
const bignumber_1 = require("@ethersproject/bignumber");
const denom_1 = require("./denom");
const castPool = (res) => ({
    owner: res.owner,
    denoms: [denom_1.Denom.from(res.denoms[0]), denom_1.Denom.from(res.denoms[1])],
    pricePrecision: res.price_precision.decimal_places,
    decimalDelta: res.decimal_delta,
    finContract: res.fin_contract,
    intervals: res.intervals.map((x) => (0, bignumber_1.parseFixed)(x, 18)),
    amp: (0, bignumber_1.parseFixed)(res.amp, 18),
    fee: (0, bignumber_1.parseFixed)(res.fee, 18),
});
exports.castPool = castPool;
const castMargin = (res) => ({
    owner: res.owner,
    bowContract: res.bow_contract,
    denoms: [denom_1.Denom.from(res.denoms[0][0]), denom_1.Denom.from(res.denoms[1][0])],
    vaults: res.vaults,
    orcas: res.orcas,
    maxLtv: (0, bignumber_1.parseFixed)(res.max_ltv, 18),
    fullLiquidationThreshold: bignumber_1.BigNumber.from(res.full_liquidation_threshold),
    partialLiquidationTarget: (0, bignumber_1.parseFixed)(res.partial_liquidation_target, 18),
    borrowFee: (0, bignumber_1.parseFixed)(res.borrow_fee, 18),
});
exports.castMargin = castMargin;
