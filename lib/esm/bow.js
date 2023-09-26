import { BigNumber, parseFixed } from "@ethersproject/bignumber";
import { Denom } from "./denom";
import { LOCALNET, MAINNET, TESTNET } from "./network";
import contracts from "./resources/contracts.json";
export const castPosition = (res) => ({
    holder: res.holder,
    lpAmount: BigNumber.from(res.lp_amount),
    ltv: parseFixed(res.ltv, 18),
    debtShares: res.debt_shares.reduce((a, v) => (Object.assign(Object.assign({}, a), { [v.denom]: {
            amount: BigNumber.from(v.amount),
            denom: Denom.from(v.denom),
            ratio: parseFixed(v.ratio, 18),
        } })), {}),
});
export const castPool = (address, res, margin) => ({
    strategy: "amp" in res ? "xyk" : "adapter" in res ? "lsd" : "stable",
    address,
    owner: res.owner,
    denoms: [Denom.from(res.denoms[0]), Denom.from(res.denoms[1])],
    pricePrecision: res.price_precision.decimal_places,
    decimalDelta: res.decimal_delta,
    finContract: res.fin_contract,
    margin: margin && castMargin(margin.address, margin.config),
});
export const castMargin = (address, res) => ({
    address,
    owner: res.owner,
    bowContract: res.bow_contract,
    denoms: [
        {
            denom: Denom.from(res.denoms[0].denom),
            decimals: res.denoms[0].decimals,
            oracle: res.denoms[0].oracle,
        },
        {
            denom: Denom.from(res.denoms[1].denom),
            decimals: res.denoms[1].decimals,
            oracle: res.denoms[1].oracle,
        },
    ],
    vaults: [res.vaults[0], res.vaults[1]],
    orcas: [res.orcas[0], res.orcas[1]],
    maxLtv: parseFixed(res.max_ltv, 18),
    fullLiquidationThreshold: BigNumber.from(res.full_liquidation_threshold),
    partialLiquidationTarget: parseFixed(res.partial_liquidation_target, 18),
    borrowFee: parseFixed(res.borrow_fee, 18),
});
export const POOLS = {
    [MAINNET]: contracts[MAINNET].bow.reduce((a, v) => (Object.assign(Object.assign({}, a), { [v.address]: castPool(v.address, v.config) })), {}),
    [TESTNET]: contracts[TESTNET].bow.reduce((a, v) => (Object.assign(Object.assign({}, a), { [v.address]: castPool(v.address, v.config, Object.values(contracts[TESTNET].bowMargin).find((x) => x.config.bow_contract === v.address)) })), {}),
    [LOCALNET]: {},
};
