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
import { mulDec } from "../bignumber";
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
const WEI = BigNumber.from(10).pow(18);
export const DEFAULT_SIMULATION = {
    returnAmount: BigNumber.from(0),
    spreadAmount: BigNumber.from(0),
    commissionAmount: BigNumber.from(0),
    rate: BigNumber.from(0),
    slippage: BigNumber.from(0),
};
export const simulate = (query, amount, denom, pair, book) => __awaiter(void 0, void 0, void 0, function* () {
    if (amount.isZero())
        return DEFAULT_SIMULATION;
    const sell = denom.eq(pair.denoms[0]);
    const mid = book && book.base.length && book.quote.length
        ? book.base[0].quotePriceInt.add(book.quote[0].quotePriceInt).div(2)
        : BigNumber.from(0);
    let sim = book
        ? yield simulateLocal(amount, denom, pair, book).catch(() => simulateQuery(query, amount, denom, pair))
        : yield simulateQuery(query, amount, denom, pair);
    let offer = amount.mul(WEI);
    const beliefReturnAmount = sell
        ? offer.mul(mid).div(WEI).div(WEI)
        : offer.div(mid);
    const rate = sell
        ? sim.returnAmount.mul(WEI).div(amount)
        : amount.mul(WEI).div(sim.returnAmount);
    const diff = beliefReturnAmount.gt(sim.returnAmount)
        ? beliefReturnAmount.sub(sim.returnAmount)
        : sim.returnAmount.sub(beliefReturnAmount);
    const slippage = diff.mul(WEI).div(beliefReturnAmount);
    return {
        returnAmount: sim.returnAmount,
        spreadAmount: beliefReturnAmount.sub(sim.returnAmount),
        commissionAmount: sim.commissionAmount,
        rate,
        slippage,
    };
});
const simulateLocal = (amount, denom, pair, book) => __awaiter(void 0, void 0, void 0, function* () {
    // decimals from decoding are 18 dp
    const sell = denom.eq(pair.denoms[0]);
    let returned = BigNumber.from(0);
    const pools = [...(sell ? book.quote : book.base)].reverse();
    let offer = amount.mul(WEI);
    while (offer.gt(0)) {
        const pool = pools.pop();
        if (!pool)
            break;
        const price = pool.quotePriceInt;
        const poolValue = sell
            ? pool.totalOfferAmount.div(price)
            : pool.totalOfferAmount.mul(price);
        const consumedOffer = poolValue.gt(offer) ? offer : poolValue;
        const consumedAsk = sell
            ? consumedOffer.mul(price)
            : consumedOffer.div(price);
        returned = returned.add(consumedAsk);
        offer = offer.sub(consumedOffer);
    }
    if (!offer.isZero()) {
        throw new Error("Out of orders");
    }
    const commissionAmount = mulDec(returned, 0.0015);
    const netReturnAmount = returned.sub(commissionAmount);
    return { returnAmount: netReturnAmount, commissionAmount };
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
    commissionAmount: BigNumber.from(res.commission_amount),
}));
export const formatPrice = (price, denom, denoms) => {
    const [, quote] = denoms;
    return price && denom.eq(quote)
        ? factor(denoms) / price
        : price * factor(denoms);
};
