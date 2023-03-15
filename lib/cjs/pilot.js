"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMarkets = exports.castSale = void 0;
const bignumber_1 = require("@ethersproject/bignumber");
const denom_1 = require("./denom");
const contracts_json_1 = __importDefault(require("./resources/contracts.json"));
const castSale = (res) => ({
    label: denom_1.Denom.from(res.amount.denom).symbol,
    collateralDenom: denom_1.Denom.from(res.amount.denom),
    bidDenom: denom_1.Denom.from(res.orca_config.bid_denom),
    address: res.orca_address,
    bidThreshold: bignumber_1.BigNumber.from(res.orca_config.bid_threshold),
    maxSlot: res.orca_config.max_slot,
    premiumRatePerSlot: parseFloat(res.orca_config.premium_rate_per_slot),
    waitingPeriod: res.orca_config.waiting_period,
    markets: res.orca_config.markets,
    sale: {
        title: res.title,
        description: res.description,
        price: parseFloat(res.price),
        amount: bignumber_1.BigNumber.from(res.amount.amount),
        closes: new Date(parseInt(res.closes) / 1000000),
    },
    liquidationFee: parseFloat(res.orca_config.liquidation_fee),
    withdrawalFee: parseFloat(res.orca_config.withdrawal_fee),
});
exports.castSale = castSale;
const getMarkets = (query, network) => __awaiter(void 0, void 0, void 0, function* () {
    const contract = contracts_json_1.default[network].pilot.reverse()[0];
    if (!contract)
        return {};
    return query.wasm
        .queryContractSmart(contract.address, { sales: {} })
        .then((x) => x.sales.reduce((a, v) => (Object.assign(Object.assign({}, a), { [v.orca_address]: (0, exports.castSale)(v) })), {}));
});
exports.getMarkets = getMarkets;
