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
Object.defineProperty(exports, "__esModule", { value: true });
exports.simulate = exports.castOrder = exports.castConfig = exports.castBook = void 0;
const bignumber_1 = require("@ethersproject/bignumber");
const bignumber_2 = require("../bignumber");
const denom_1 = require("../denom");
const castBook = (denoms) => (response) => ({
    base: response.base.map(castPool(denoms)).reduce(filterMigrationError, []),
    quote: response.quote.map(castPool(denoms)),
});
exports.castBook = castBook;
const castConfig = (response) => ({
    owner: response.owner,
    denoms: [parseDenom(response.denoms[0]), parseDenom(response.denoms[1])],
    isBootstrapping: response.is_bootstrapping,
    decimalDelta: response.decimal_delta,
});
exports.castConfig = castConfig;
const parseDenom = (response) => {
    if ("string" === typeof response) {
        return denom_1.Denom.from(response);
    }
    if ("native" in response) {
        return denom_1.Denom.from(response.native);
    }
    return denom_1.Denom.from(response.cw20);
};
const castOrder = (denoms) => (response) => ({
    idx: parseInt(response.idx),
    owner: response.owner,
    quotePrice: parseFloat(response.quote_price) * (0, denom_1.factor)(denoms),
    offerDenom: parseDenom(response.offer_denom),
    offerAmount: bignumber_1.BigNumber.from(response.offer_amount),
    filledAmount: bignumber_1.BigNumber.from(response.filled_amount),
    originalOfferAmount: bignumber_1.BigNumber.from(response.original_offer_amount),
    createdAt: new Date(parseInt(response.created_at) / 1000000),
});
exports.castOrder = castOrder;
const castPool = (denoms) => (response) => {
    return {
        quotePrice: parseFloat(response.quote_price) * (0, denom_1.factor)(denoms),
        offerDenom: parseDenom(response.offer_denom),
        totalOfferAmount: bignumber_1.BigNumber.from(response.total_offer_amount),
    };
};
const filterMigrationError = (agg, pool) => {
    const prev = agg.at(-1);
    return prev && prev.quotePrice > pool.quotePrice ? agg : [...agg, pool];
};
const simulate = (query, amount, denom, pair, book) => __awaiter(void 0, void 0, void 0, function* () {
    const sell = denom.eq(pair.denoms[0]);
    const pools = [...(sell ? book.quote : book.base)].reverse();
    const f = bignumber_1.BigNumber.from(10).pow(pair.denoms[0].decimals - pair.denoms[1].decimals);
    const mid = Math.floor((book.base.length && book.quote.length
        ? (book.base[0].quotePrice + book.quote[0].quotePrice) / 2
        : 0) * 1000000);
    let offer = amount;
    const perfect = sell
        ? offer.mul(mid).div(f).div(1000000)
        : offer.mul(f).mul(1000000).div(mid); // mulDec(offer, sell ? mid / f : f / mid);
    let returned = bignumber_1.BigNumber.from(0);
    while (offer.gt(0)) {
        const pool = pools.pop();
        if (!pool)
            break;
        const poolValue = sell
            ? pool.totalOfferAmount
                .mul(f)
                .mul(1000000)
                .div(Math.floor(pool.quotePrice * 1000000))
            : pool.totalOfferAmount
                .mul(Math.floor(pool.quotePrice * 1000000))
                .div(f)
                .div(1000000);
        const consumedOffer = poolValue.gt(offer) ? offer : poolValue;
        const consumedAsk = sell
            ? consumedOffer
                .mul(Math.floor(pool.quotePrice * 1000000))
                .div(f)
                .div(1000000)
            : consumedOffer
                .mul(f)
                .mul(1000000)
                .div(Math.floor(pool.quotePrice * 1000000));
        returned = returned.add(consumedAsk);
        offer = offer.sub(consumedOffer);
    }
    if (offer.gt(0)) {
        const res = yield query.wasm.queryContractSmart(pair.address, {
            simulation: {
                offer_asset: {
                    info: { native_token: { denom: denom.reference } },
                    amount: amount.toString(),
                },
            },
        });
        returned = bignumber_1.BigNumber.from(res.return_amount);
    }
    const feeAmount = 0.0015;
    const commissionAmount = (0, bignumber_2.mulDec)(returned, feeAmount);
    const spreadAmount = perfect.sub(returned);
    const returnAmount = returned.sub(commissionAmount);
    const slippage = (0, bignumber_2.divToNumber)(spreadAmount, perfect);
    return {
        returnAmount: returnAmount,
        spreadAmount: spreadAmount,
        commissionAmount: commissionAmount,
        rate: sell
            ? (0, bignumber_2.divToNumber)(returned.mul(f), amount)
            : (0, bignumber_2.divToNumber)(returned, amount.mul(f)),
        slippage,
    };
});
exports.simulate = simulate;
