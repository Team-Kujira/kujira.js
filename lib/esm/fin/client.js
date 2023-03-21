var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { BigNumber, parseFixed } from "@ethersproject/bignumber";
import { divToNumber, mulDec } from "../bignumber";
import { Denom, factor } from "../denom";
const filterMigrationError = (agg, pool) => {
    const prev = agg[agg.length - 1];
    return prev && prev.quotePrice > pool.quotePrice ? agg : [...agg, pool];
};
export const castBook = (denoms) => (response) => ({
    base: response.base.map(castPool(denoms)).reduce(filterMigrationError, []),
    quote: response.quote.map(castPool(denoms)),
});
export const castConfig = (response) => ({
    owner: response.owner,
    denoms: [parseDenom(response.denoms[0]), parseDenom(response.denoms[1])],
    isBootstrapping: response.is_bootstrapping,
    decimalDelta: response.decimal_delta || 0,
});
const parseDenom = (response) => {
    if ("string" === typeof response) {
        return Denom.from(response);
    }
    if ("native" in response) {
        return Denom.from(response.native);
    }
    return Denom.from(response.cw20);
};
export const castOrder = (denoms) => (response) => ({
    idx: parseInt(response.idx),
    owner: response.owner,
    quotePrice: parseFloat(response.quote_price) * factor(denoms),
    quotePriceInt: parseFixed(response.quote_price, 18),
    offerDenom: parseDenom(response.offer_denom),
    offerAmount: BigNumber.from(response.offer_amount),
    filledAmount: BigNumber.from(response.filled_amount),
    originalOfferAmount: BigNumber.from(response.original_offer_amount),
    createdAt: new Date(parseInt(response.created_at) / 1000000),
});
const castPool = (denoms) => (response) => {
    return {
        quotePrice: parseFloat(response.quote_price) * factor(denoms),
        quotePriceInt: parseFixed(response.quote_price, 18),
        offerDenom: parseDenom(response.offer_denom),
        totalOfferAmount: BigNumber.from(response.total_offer_amount),
    };
};
export const simulate = (query, amount, denom, pair, book) => __awaiter(void 0, void 0, void 0, function* () {
    let sim = book
        ? yield simulateLocal(amount, denom, pair, book).catch(() => simulateQuery(query, amount, denom, pair))
        : yield simulateQuery(query, amount, denom, pair);
    const beliefReturnAmount = sim.returnAmount.add(sim.commissionAmount);
    const slippage = divToNumber(beliefReturnAmount.sub(sim.returnAmount), beliefReturnAmount);
    return {
        returnAmount: sim.returnAmount,
        spreadAmount: sim.spreadAmount,
        commissionAmount: sim.commissionAmount,
        rate: divToNumber(sim.returnAmount, amount),
        slippage,
    };
});
const simulateLocal = (amount, denom, pair, book) => __awaiter(void 0, void 0, void 0, function* () {
    const sell = denom.eq(pair.denoms[0]);
    let returned = BigNumber.from(0);
    const pools = [...(sell ? book.quote : book.base)].reverse();
    const mid = Math.floor((book.base.length && book.quote.length
        ? (book.base[0].quotePrice + book.quote[0].quotePrice) / 2
        : 0) * 1000000);
    let offer = amount;
    const perfect = sell ? mulDec(offer, mid) : mulDec(offer, 1 / mid); // mulDec(offer, sell ? mid / f : f / mid);
    while (offer.gt(0)) {
        const pool = pools.pop();
        if (!pool)
            break;
        const price = pool.quotePrice / factor(pair.denoms);
        const poolValue = sell
            ? mulDec(pool.totalOfferAmount, 1 / price)
            : mulDec(pool.totalOfferAmount, price);
        const consumedOffer = poolValue.gt(offer) ? offer : poolValue;
        const consumedAsk = sell
            ? mulDec(consumedOffer, price)
            : mulDec(consumedOffer, 1 / price);
        returned = returned.add(consumedAsk);
        offer = offer.sub(consumedOffer);
    }
    if (!offer.isZero()) {
        throw new Error("Out of orders");
    }
    const feeAmount = 0.0015;
    const commissionAmount = mulDec(returned, feeAmount);
    const spreadAmount = perfect.sub(returned);
    const returnAmount = returned.sub(commissionAmount);
    return {
        returnAmount,
        spreadAmount,
        commissionAmount,
    };
});
const simulateQuery = (query, amount, denom, pair) => query.wasm
    .queryContractSmart(pair.address, {
    simulation: {
        offer_asset: {
            info: { native_token: { denom: denom.reference } },
            amount: amount.toString(),
        },
    },
})
    .then((res) => ({
    returnAmount: BigNumber.from(res.return_amount),
    spreadAmount: BigNumber.from(res.commission_amount),
    commissionAmount: BigNumber.from(res.commission_amount),
}));
export const formatPrice = (price, denom, denoms) => {
    const [, quote] = denoms;
    return price && denom.eq(quote)
        ? factor(denoms) / price
        : price * factor(denoms);
};
