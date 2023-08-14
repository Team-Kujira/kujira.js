import { BigNumber, parseFixed } from "@ethersproject/bignumber";
import { Denom } from "./denom";
import { LOCALNET, MAINNET, TESTNET } from "./network";
import contracts from "./resources/contracts.json";
export const castPool = (address, res, margin) => ({
    address,
    owner: res.owner,
    denoms: [Denom.from(res.denoms[0]), Denom.from(res.denoms[1])],
    pricePrecision: res.price_precision.decimal_places,
    decimalDelta: res.decimal_delta,
    finContract: res.fin_contract,
    intervals: res.intervals.map((x) => parseFixed(x, 18)),
    amp: parseFixed(res.amp, 18),
    fee: parseFixed(res.fee, 18),
    margin: margin && castMargin(margin[0], margin[1].config),
});
export const castMargin = (address, res) => ({
    address,
    owner: res.owner,
    bowContract: res.bow_contract,
    //   @ts-expect-error denoms[x][0] is the string representation
    denoms: [Denom.from(res.denoms[0][0]), Denom.from(res.denoms[1][0])],
    vaults: [res.vaults[0], res.vaults[1]],
    orcas: [res.orcas[0], res.orcas[1]],
    maxLtv: parseFixed(res.max_ltv, 18),
    fullLiquidationThreshold: BigNumber.from(res.full_liquidation_threshold),
    partialLiquidationTarget: parseFixed(res.partial_liquidation_target, 18),
    borrowFee: parseFixed(res.borrow_fee, 18),
});
export const POOLS = {
    [MAINNET]: contracts[MAINNET].bow.reduce((a, v) => (Object.assign(Object.assign({}, a), { [v.address]: castPool(v.address, v.config) })), {}),
    [TESTNET]: contracts[TESTNET].bow.reduce((a, v) => (Object.assign(Object.assign({}, a), { [v.address]: castPool(v.address, v.config, Object.entries(contracts[TESTNET].bowMargin).find((x) => x[1].config.bow_contract === v.address)) })), {}),
    [LOCALNET]: {},
};
