"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchPosition = exports.defaultPosition = exports.castPosition = exports.MARKETS = exports.castConfig = void 0;
const bignumber_1 = require("@ethersproject/bignumber");
const _1 = require(".");
const denom_1 = require("./denom");
const contracts_json_1 = __importDefault(require("./resources/contracts.json"));
const castConfig = (json) => ({
    owner: json.owner,
    stable_denom: denom_1.Denom.from(json.stable_denom),
    stable_denom_admin: json.stable_denom_admin,
    collateral_denom: denom_1.Denom.from(json.collateral_denom),
    oracle_denom: json.oracle_denom,
    max_ratio: parseFloat(json.max_ratio),
    mint_fee: parseFloat(json.mint_fee),
    interest_rate: parseFloat(json.interest_rate),
    orca_address: json.orca_address,
    max_debt: bignumber_1.BigNumber.from(json.max_debt),
    liquidation_threshold: bignumber_1.BigNumber.from(json.liquidation_threshold),
    liquidation_ratio: parseFloat(json.liquidation_ratio),
});
exports.castConfig = castConfig;
const compile = (a, v) => (Object.assign(Object.assign({}, a), { [v.address]: Object.assign({ address: v.address }, (0, exports.castConfig)(v.config)) }));
exports.MARKETS = {
    [_1.MAINNET]: contracts_json_1.default["kaiyo-1"].uskMarket.reduce(compile, {}),
    [_1.TESTNET]: contracts_json_1.default["harpoon-4"].uskMarket.reduce(compile, {}),
    [_1.LOCALNET]: {},
};
const castPosition = (p) => ({
    owner: p.owner,
    deposit_amount: bignumber_1.BigNumber.from(p.deposit_amount),
    mint_amount: bignumber_1.BigNumber.from(p.mint_amount),
    interest_amount: bignumber_1.BigNumber.from(p.interest_amount),
    liquidation_price: p.liquidation_price
        ? parseFloat(p.liquidation_price)
        : null,
});
exports.castPosition = castPosition;
const defaultPosition = (owner) => ({
    owner: owner || "",
    deposit_amount: bignumber_1.BigNumber.from(0),
    mint_amount: bignumber_1.BigNumber.from(0),
    interest_amount: bignumber_1.BigNumber.from(0),
    liquidation_price: null,
});
exports.defaultPosition = defaultPosition;
const fetchPosition = (queryClient, address, account) => queryClient.wasm
    .queryContractSmart(address, {
    position: { address: account.address },
})
    .then(exports.castPosition);
exports.fetchPosition = fetchPosition;
