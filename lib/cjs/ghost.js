"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MARKETS = exports.VAULTS = exports.castVault = exports.castMarket = exports.castPosition = exports.DEFAULT_VAULT_STATE = exports.DEFAULT_MARKET_STATE = exports.castVaultState = void 0;
const bignumber_1 = require("@ethersproject/bignumber");
const bignumber_2 = require("./bignumber");
const denom_1 = require("./denom");
const network_1 = require("./network");
const contracts_json_1 = __importDefault(require("./resources/contracts.json"));
const castVaultState = (res) => {
    const deposited = bignumber_1.BigNumber.from(res.deposited);
    const lent = bignumber_1.BigNumber.from(res.borrowed);
    const interestRate = parseFloat(res.rate);
    return {
        deposited,
        lent,
        available: deposited.sub(lent),
        interestRate,
        apr: (0, bignumber_2.divToNumber)((0, bignumber_2.mulDec)(lent, interestRate), deposited),
        redemptionRate: (0, bignumber_1.parseFixed)(res.deposit_redemption_ratio, 18),
        debtShareRatio: (0, bignumber_1.parseFixed)(res.debt_share_ratio, 18),
    };
};
exports.castVaultState = castVaultState;
exports.DEFAULT_MARKET_STATE = {
    deposited: bignumber_1.BigNumber.from(0),
    borrowed: bignumber_1.BigNumber.from(0),
};
exports.DEFAULT_VAULT_STATE = {
    deposited: bignumber_1.BigNumber.from(0),
    lent: bignumber_1.BigNumber.from(0),
    available: bignumber_1.BigNumber.from(0),
    interestRate: 0,
    apr: 0,
    redemptionRate: (0, bignumber_1.parseFixed)("1", 18),
    debtShareRatio: (0, bignumber_1.parseFixed)("1", 18),
};
const castPosition = (res) => ({
    debtShares: bignumber_1.BigNumber.from(res.debt_shares),
    collateralAmount: bignumber_1.BigNumber.from(res.collateral_amount),
});
exports.castPosition = castPosition;
const castMarket = (address, raw, vault) => ({
    address,
    owner: raw.owner,
    collateralDenom: denom_1.Denom.from(raw.collateral_denom),
    collateralOracleDenom: raw.collateral_oracle_denom,
    collateralDecimals: raw.collateral_decimals,
    maxLtv: parseFloat(raw.max_ltv),
    vault,
    borrowFee: (0, bignumber_1.parseFixed)(raw.borrow_fee, 18),
});
exports.castMarket = castMarket;
const castVault = (address, raw, markets) => ({
    address,
    owner: raw.owner,
    denom: denom_1.Denom.from(raw.denom),
    oracle: "static" in raw.oracle
        ? { static: (0, bignumber_1.parseFixed)(raw.oracle.static, 18) }
        : raw.oracle,
    decimals: raw.decimals,
    receiptDenom: denom_1.Denom.from(raw.receipt_denom),
    debtTokenDenom: denom_1.Denom.from(raw.debt_token_denom),
    markets: markets.map((m) => ({
        addr: m.addr,
        borrowLimit: m.borrow_limit ? bignumber_1.BigNumber.from(m.borrow_limit) : null,
    })),
    utilizationRates: [
        ["0", "0.02"],
        ["0.01", "0.021"],
        ["0.02", "0.022"],
        ["0.03", "0.023"],
        ["0.04", "0.024"],
        ["0.05", "0.025"],
        ["0.06", "0.026"],
        ["0.07", "0.027"],
        ["0.08", "0.028"],
        ["0.09", "0.029"],
        ["0.1", "0.03"],
        ["0.11", "0.031"],
        ["0.12", "0.032"],
        ["0.13", "0.033"],
        ["0.14", "0.034"],
        ["0.15", "0.035"],
        ["0.16", "0.036"],
        ["0.17", "0.037"],
        ["0.18", "0.038"],
        ["0.19", "0.039"],
        ["0.2", "0.04"],
        ["0.21", "0.041"],
        ["0.22", "0.042"],
        ["0.23", "0.043"],
        ["0.24", "0.044"],
        ["0.25", "0.045"],
        ["0.26", "0.046"],
        ["0.27", "0.047"],
        ["0.28", "0.048"],
        ["0.29", "0.049"],
        ["0.3", "0.05"],
        ["0.31", "0.051"],
        ["0.32", "0.052"],
        ["0.33", "0.053"],
        ["0.34", "0.054"],
        ["0.35", "0.055"],
        ["0.36", "0.056"],
        ["0.37", "0.057"],
        ["0.38", "0.058"],
        ["0.39", "0.059"],
        ["0.4", "0.06"],
        ["0.41", "0.061"],
        ["0.42", "0.062"],
        ["0.43", "0.063"],
        ["0.44", "0.064"],
        ["0.45", "0.065"],
        ["0.46", "0.066"],
        ["0.47", "0.067"],
        ["0.48", "0.068"],
        ["0.49", "0.069"],
        ["0.5", "0.07"],
        ["0.51", "0.071"],
        ["0.52", "0.072"],
        ["0.53", "0.073"],
        ["0.54", "0.074"],
        ["0.55", "0.075"],
        ["0.56", "0.076"],
        ["0.57", "0.077"],
        ["0.58", "0.078"],
        ["0.59", "0.079"],
        ["0.6", "0.08"],
        ["0.61", "0.153"],
        ["0.62", "0.226"],
        ["0.63", "0.299"],
        ["0.64", "0.372"],
        ["0.65", "0.445"],
        ["0.66", "0.518"],
        ["0.67", "0.591"],
        ["0.68", "0.664"],
        ["0.69", "0.737"],
        ["0.7", "0.81"],
        ["0.71", "0.883"],
        ["0.72", "0.956"],
        ["0.73", "1.029"],
        ["0.74", "1.102"],
        ["0.75", "1.175"],
        ["0.76", "1.248"],
        ["0.77", "1.321"],
        ["0.78", "1.394"],
        ["0.79", "1.467"],
        ["0.8", "1.54"],
        ["0.81", "1.613"],
        ["0.82", "1.686"],
        ["0.83", "1.759"],
        ["0.84", "1.832"],
        ["0.85", "1.905"],
        ["0.86", "1.978"],
        ["0.87", "2.051"],
        ["0.88", "2.124"],
        ["0.89", "2.197"],
        ["0.9", "2.27"],
        ["0.91", "2.343"],
        ["0.92", "2.416"],
        ["0.93", "2.489"],
        ["0.94", "2.562"],
        ["0.95", "2.635"],
        ["0.96", "2.708"],
        ["0.97", "2.781"],
        ["0.98", "2.854"],
        ["0.99", "2.927"],
        ["1", "3"],
    ].map(([a, b]) => [(0, bignumber_1.parseFixed)(a, 18), (0, bignumber_1.parseFixed)(b, 18)]),
});
exports.castVault = castVault;
exports.VAULTS = {
    [network_1.MAINNET]: {},
    [network_1.TESTNET]: contracts_json_1.default[network_1.TESTNET].ghostVault.reduce((a, v) => v.markets
        ? Object.assign(Object.assign({}, a), { [v.address]: (0, exports.castVault)(v.address, v.config, v.markets) }) : Object.assign(Object.assign({}, a), { [v.address]: (0, exports.castVault)(v.address, v.config, []) }), {}),
    [network_1.LOCALNET]: {},
};
exports.MARKETS = {
    [network_1.MAINNET]: {},
    [network_1.TESTNET]: contracts_json_1.default[network_1.TESTNET].ghostMarket.reduce((a, v) => exports.VAULTS[network_1.TESTNET][v.config.vault_addr]
        ? Object.assign(Object.assign({}, a), { [v.address]: (0, exports.castMarket)(v.address, v.config, exports.VAULTS[network_1.TESTNET][v.config.vault_addr]) }) : a, {}),
    [network_1.LOCALNET]: {},
};
