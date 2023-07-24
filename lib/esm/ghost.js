import { BigNumber, parseFixed } from "@ethersproject/bignumber";
import { divToNumber, mulDec } from "./bignumber";
import { Denom } from "./denom";
import { LOCALNET, MAINNET, TESTNET } from "./network";
import contracts from "./resources/contracts.json";
export const FILTERED = [
    "kujira1fj2y8uslgw89x50scw7njwxjg4f42u84hkw3nguf3kn0fm69wxqsrl3p6k",
    "kujira14r4d6xw6jgu6d4en0uxalx9slaft54h499scmeyj63w4axavhvuqdgfr8d",
];
export const castVaultState = (res) => {
    const deposited = BigNumber.from(res.deposited);
    const lent = BigNumber.from(res.borrowed);
    const interestRate = parseFloat(res.rate);
    return {
        deposited,
        lent,
        available: deposited.sub(lent),
        interestRate,
        apr: divToNumber(mulDec(lent, interestRate), deposited),
        redemptionRate: parseFixed(res.deposit_redemption_ratio, 18),
        debtShareRatio: parseFixed(res.debt_share_ratio, 18),
    };
};
export const DEFAULT_MARKET_STATE = {
    deposited: BigNumber.from(0),
    borrowed: BigNumber.from(0),
};
export const DEFAULT_VAULT_STATE = {
    deposited: BigNumber.from(0),
    lent: BigNumber.from(0),
    available: BigNumber.from(0),
    interestRate: 0,
    apr: 0,
    redemptionRate: parseFixed("1", 18),
    debtShareRatio: parseFixed("1", 18),
};
export const castPosition = (res) => ({
    debtShares: BigNumber.from(res.debt_shares),
    collateralAmount: BigNumber.from(res.collateral_amount),
});
export const castMarket = (address, raw, vault) => ({
    address,
    owner: raw.owner,
    collateralDenom: Denom.from(raw.collateral_denom),
    collateralOracleDenom: raw.collateral_oracle_denom,
    collateralDecimals: raw.collateral_decimals,
    maxLtv: parseFloat(raw.max_ltv),
    vault,
    borrowFee: parseFixed(raw.borrow_fee, 18),
});
export const castVault = (address, raw, markets) => ({
    address,
    owner: raw.owner,
    denom: Denom.from(raw.denom),
    oracle: "static" in raw.oracle
        ? { static: parseFixed(raw.oracle.static, 18) }
        : raw.oracle,
    decimals: raw.decimals,
    receiptDenom: Denom.from(raw.receipt_denom),
    debtTokenDenom: Denom.from(raw.debt_token_denom),
    markets: markets.map((m) => ({
        addr: m.addr,
        borrowLimit: m.borrow_limit ? BigNumber.from(m.borrow_limit) : null,
    })),
    interest: castInterest(raw.interest),
});
const castInterest = (raw) => "utilization_to_rate" in raw
    ? {
        type: "rates",
        value: raw.utilization_to_rate.map(([a, b]) => [
            parseFixed(a, 18),
            parseFixed(b, 18),
        ]),
    }
    : {
        type: "curve",
        value: raw.utilization_to_curve.map((x) => [
            parseFixed(x[0], 18),
            {
                linear: {
                    start: [
                        parseFixed(x[1].linear.start[0], 18),
                        parseFixed(x[1].linear.start[1], 18),
                    ],
                    end: [
                        parseFixed(x[1].linear.end[0], 18),
                        parseFixed(x[1].linear.end[1], 18),
                    ],
                },
            },
        ]),
    };
export const VAULTS = {
    [MAINNET]: contracts[MAINNET].ghostVault.reduce((a, v) => FILTERED.includes(v.address)
        ? a
        : Object.assign(Object.assign({}, a), { [v.address]: castVault(v.address, 
            // @ts-expect-error TS not liking the Rust serialization of tuples
            v.config, v.markets || []) }), {}),
    [TESTNET]: contracts[TESTNET].ghostVault.reduce((a, v) => FILTERED.includes(v.address)
        ? a
        : Object.assign(Object.assign({}, a), { [v.address]: castVault(v.address, 
            // @ts-expect-error TS not liking the Rust serialization of tuples
            v.config, v.markets || []) }), {}),
    [LOCALNET]: {},
};
export const MARKETS = {
    [MAINNET]: contracts[MAINNET].ghostMarket.reduce((a, v) => FILTERED.includes(v.address)
        ? a
        : VAULTS[MAINNET][v.config.vault_addr]
            ? Object.assign(Object.assign({}, a), { [v.address]: castMarket(v.address, v.config, VAULTS[MAINNET][v.config.vault_addr]) }) : a, {}),
    [TESTNET]: contracts[TESTNET].ghostMarket.reduce((a, v) => FILTERED.includes(v.address)
        ? a
        : VAULTS[TESTNET][v.config.vault_addr]
            ? Object.assign(Object.assign({}, a), { [v.address]: castMarket(v.address, v.config, VAULTS[TESTNET][v.config.vault_addr]) }) : a, {}),
    [LOCALNET]: {},
};
