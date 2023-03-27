"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMarkets = exports.MARKETS = exports.SOON = void 0;
const types_1 = require("./types");
// import * as Acala from "@acala-network/contracts/utils/AcalaAddress";
// import * as Karura from "@acala-network/contracts/utils/KaruraAddress";
const bignumber_1 = require("@ethersproject/bignumber");
const denom_1 = require("../denom");
const network_1 = require("../network");
const contracts_json_1 = __importDefault(require("../resources/contracts.json"));
__exportStar(require("./types"), exports);
exports.SOON = [
    {
        label: "NBTC",
        chain: types_1.Chain.Kujira,
        protocol: types_1.Protocol.USK,
        collateralDenom: denom_1.Denom.from("ibc/784AEA7C1DC3C62F9A04EB8DC3A3D1DCB7B03BA8CB2476C5825FA0C155D3018E"),
        bidDenom: denom_1.USK,
        repayDenom: denom_1.USK,
    },
    {
        label: "ATOM Short",
        chain: types_1.Chain.Kujira,
        protocol: types_1.Protocol.PERP,
        collateralDenom: denom_1.USK,
        bidDenom: denom_1.Denom.from("ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2"),
        repayDenom: denom_1.Denom.from("ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2"),
    },
    {
        label: "NBTC Short",
        chain: types_1.Chain.Kujira,
        protocol: types_1.Protocol.PERP,
        collateralDenom: denom_1.USK,
        bidDenom: denom_1.Denom.from("ibc/784AEA7C1DC3C62F9A04EB8DC3A3D1DCB7B03BA8CB2476C5825FA0C155D3018E"),
        repayDenom: denom_1.Denom.from("ibc/784AEA7C1DC3C62F9A04EB8DC3A3D1DCB7B03BA8CB2476C5825FA0C155D3018E"),
    },
];
const insertMarket = (a, v) => {
    const collateralDenom = denom_1.Denom.from(v.config.collateral_denom);
    return Object.assign(Object.assign({}, a), { [v.address]: {
            label: collateralDenom.symbol,
            chain: types_1.Chain.Kujira,
            protocol: types_1.Protocol.USK,
            collateralDenom,
            bidDenom: denom_1.Denom.from(v.config.bid_denom),
            repayDenom: denom_1.Denom.from(v.config.bid_denom),
            type: types_1.MarketType.USK,
            address: v.address,
            botFirst: false,
            activators: v.config.bid_denom === denom_1.USK.reference
                ? ["kujira16a03hk5ev6963a4yj3kcrvmh4hej3w3j70kv2n"]
                : [],
            bidThreshold: bignumber_1.BigNumber.from(v.config.bid_threshold),
            maxSlot: v.config.max_slot,
            premiumRatePerSlot: parseFloat(v.config.premium_rate_per_slot),
            premiumRatePerSlotInt: (0, bignumber_1.parseFixed)(v.config.premium_rate_per_slot, 18),
            waitingPeriod: v.config.waiting_period,
            markets: v.config.markets,
            liquidationFee: parseFloat(v.config.liquidation_fee),
            withdrawalFee: parseFloat(v.config.withdrawal_fee),
        } });
};
exports.MARKETS = {
    [network_1.MAINNET]: Object.values(contracts_json_1.default[network_1.MAINNET].orca).reduce(insertMarket, {}),
    [network_1.TESTNET]: Object.values(contracts_json_1.default[network_1.TESTNET].orca).reduce(insertMarket, {}),
    [network_1.LOCALNET]: {},
};
const getMarkets = (network) => {
    const soon = network === network_1.MAINNET ? exports.SOON : [];
    const markets = Object.values(exports.MARKETS[network || network_1.MAINNET]);
    return [...markets, ...soon]
        .sort((a, b) => a.collateralDenom.compare(b.collateralDenom))
        .sort((a, b) => ("address" in b ? 1 : -1));
};
exports.getMarkets = getMarkets;
