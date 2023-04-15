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
