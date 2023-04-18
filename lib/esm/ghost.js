import { BigNumber, parseFixed } from "@ethersproject/bignumber";
import { divToNumber, mulDec } from "./bignumber";
import { Denom } from "./denom";
import { RATE_DEFAULT, rates } from "./ghost/rates";
import { LOCALNET, MAINNET, TESTNET } from "./network";
import contracts from "./resources/contracts.json";
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
    utilizationRates: (rates[address] || RATE_DEFAULT).map(([a, b]) => [
        parseFixed(a, 18),
        parseFixed(b, 18),
    ]),
});
export const VAULTS = {
    [MAINNET]: {},
    [TESTNET]: contracts[TESTNET].ghostVault.reduce((a, v) => v.markets
        ? Object.assign(Object.assign({}, a), { [v.address]: castVault(v.address, v.config, v.markets) }) : Object.assign(Object.assign({}, a), { [v.address]: castVault(v.address, v.config, []) }), {}),
    [LOCALNET]: {},
};
export const MARKETS = {
    [MAINNET]: {},
    [TESTNET]: contracts[TESTNET].ghostMarket.reduce((a, v) => VAULTS[TESTNET][v.config.vault_addr]
        ? Object.assign(Object.assign({}, a), { [v.address]: castMarket(v.address, v.config, VAULTS[TESTNET][v.config.vault_addr]) }) : a, {}),
    [LOCALNET]: {},
};
