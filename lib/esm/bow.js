import { BigNumber, parseFixed } from "@ethersproject/bignumber";
import { Denom } from "./denom";
export const castPool = (res) => ({
    owner: res.owner,
    denoms: [Denom.from(res.denoms[0]), Denom.from(res.denoms[1])],
    pricePrecision: res.price_precision.decimal_places,
    decimalDelta: res.decimal_delta,
    finContract: res.fin_contract,
    intervals: res.intervals.map((x) => parseFixed(x, 18)),
    amp: parseFixed(res.amp, 18),
    fee: parseFixed(res.fee, 18),
});
export const castMargin = (res) => ({
    owner: res.owner,
    bowContract: res.bow_contract,
    denoms: [Denom.from(res.denoms[0][0]), Denom.from(res.denoms[1][0])],
    vaults: res.vaults,
    orcas: res.orcas,
    maxLtv: parseFixed(res.max_ltv, 18),
    fullLiquidationThreshold: BigNumber.from(res.full_liquidation_threshold),
    partialLiquidationTarget: parseFixed(res.partial_liquidation_target, 18),
    borrowFee: parseFixed(res.borrow_fee, 18),
});
