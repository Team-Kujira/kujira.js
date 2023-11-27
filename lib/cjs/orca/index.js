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
exports.getMarkets = exports.MARKETS = exports.FILTERED = exports.castBid = exports.castBidPool = void 0;
const bignumber_1 = require("@ethersproject/bignumber");
const denom_1 = require("../denom");
const network_1 = require("../network");
const contracts_json_1 = __importDefault(require("../resources/contracts.json"));
const types_1 = require("./types");
__exportStar(require("./types"), exports);
const castBidPool = (response) => ({
    totalBidAmount: bignumber_1.BigNumber.from(response.total_bid_amount),
    premiumRate: parseFloat(response.premium_rate),
    premiumRateInt: (0, bignumber_1.parseFixed)(response.premium_rate, 18),
    currentEpoch: parseInt(response.current_epoch),
});
exports.castBidPool = castBidPool;
const castBid = (response) => ({
    idx: parseInt(response.idx),
    premiumSlot: response.premium_slot,
    amount: bignumber_1.BigNumber.from(response.amount),
    pendingLiquidatedCollateral: bignumber_1.BigNumber.from(response.pending_liquidated_collateral),
    waitEnd: (response.wait_end && new Date(parseInt(response.wait_end) * 1000)) || null,
});
exports.castBid = castBid;
exports.FILTERED = [
    "kujira1pq2qqjuxwm93sxhr9s3vlpj7lrtjfdml68qjf3a3qfpw5ctj67nsdfmkrv",
    "kujira13wd3tqd3k2hldhcpqm6wnf00rdx98yf5a2sv3s7mzs7uwgqzvpnsk9kygc",
    "kujira1utx63kua509ys806g0nu87lpmrppwhfzguctj8p7qr9d8h8cj0hsavaw8e",
];
const insertMarket = (a, v) => {
    if (exports.FILTERED.includes(v.address))
        return a;
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
            activators: ["kujira16a03hk5ev6963a4yj3kcrvmh4hej3w3j70kv2n"],
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
    [network_1.POND]: {},
};
const getMarkets = (network) => {
    const markets = Object.values(exports.MARKETS[network || network_1.MAINNET]);
    return markets.sort((a, b) => a.collateralDenom.compare(b.collateralDenom));
};
exports.getMarkets = getMarkets;
