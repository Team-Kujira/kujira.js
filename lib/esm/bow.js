import { BigNumber, parseFixed } from "@ethersproject/bignumber";
import { Denom } from "./denom";
import { MAINNET, POND, TESTNET } from "./network";
import contracts from "./resources/contracts.json";
export const EXCLUDED = [
    "kujira188p624ykuepun8h8kjmcfs553mz2jgeanetyqv7l6xltdld497vqespn6c",
    "kujira136rwqvwy3flttm9wfnc5xgnlr6mu5k8e2elgzs2hdhuwf50w3l2qp807cx",
    "kujira1xgjefq7fs4yj29t9gk0t9esgw52s68j83yeac3ru2mefdp529qsqca7hhv",
    "kujira167gut7dskwurax8an630m3yy2cwa2fp3kmcpdzucyy6ppg7njgyqhl7w50",
    "kujira1ywlrdpqymukghjwhfyp2n98r49j56wej36n4l08egkdlwj4fn87ql2l2ey",
    "kujira1dj2s8uvup63fsmpfdfpmu570es4whswp806w0p6usdamtglhwvfqd5jx40",
    "kujira1cdy6aje8zszx5vryttkkm5rn9g2n53ltfds753fsn63m09cmhx0sgp6v6m",
    "kujira1h356yzzk2yw7q5s26dewdgaptw05fxplgmxdxcfqcatjyurckuks6zfay8",
    "kujira1gel5fcfm4xknfd4j9m2d8smf3dm2jq75emu7n5g697la95d0ce8qqmxl59",
];
export const castPosition = (res) => ({
    idx: res.idx,
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
    [MAINNET]: contracts[MAINNET].bow.reduce((a, v) => EXCLUDED.includes(v.address)
        ? a
        : Object.assign(Object.assign({}, a), { [v.address]: castPool(v.address, v.config) }), {}),
    [TESTNET]: contracts[TESTNET].bow.reduce((a, v) => EXCLUDED.includes(v.address)
        ? a
        : Object.assign(Object.assign({}, a), { [v.address]: castPool(v.address, v.config, Object.values(contracts[TESTNET].bowMargin).find((x) => x.config.bow_contract === v.address)) }), {}),
    [POND]: {},
};
