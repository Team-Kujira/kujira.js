import { BigNumber, parseFixed } from "@ethersproject/bignumber";
import { mulDec } from "../bignumber";
import { Denom, factor } from "../denom";
import { KujiraQueryClient } from "../queryClient";
import {
  Book,
  BookResponse,
  CW20Denom,
  Config,
  ConfigResponse,
  Order,
  OrderResponse,
  Pair,
  Pool,
  PoolResponse,
  Simulation,
  SimulationResponse,
} from "./types";

const filterMigrationError = (agg: Pool[], pool: Pool): Pool[] => {
  const prev = agg[agg.length - 1];
  return prev && prev.quotePrice > pool.quotePrice ? agg : [...agg, pool];
};

export const castBook =
  (denoms: [Denom, Denom]) =>
  (response: BookResponse): Book => ({
    base: response.base.map(castPool(denoms)).reduce(filterMigrationError, []),
    quote: response.quote.map(castPool(denoms)),
  });

export const castConfig = (response: ConfigResponse): Config => ({
  owner: response.owner,
  denoms: [parseDenom(response.denoms[0]), parseDenom(response.denoms[1])],
  isBootstrapping: response.is_bootstrapping,
  decimalDelta: response.decimal_delta || 0,
});

export type History = {
  time: Date;
  open: number;
  close: number;
  high: number;
  low: number;
  volume: number;
}[];

const parseDenom = (response: CW20Denom): Denom => {
  if ("string" === typeof response) {
    return Denom.from(response);
  }
  if ("native" in response) {
    return Denom.from(response.native);
  }
  return Denom.from(response.cw20);
};

export const castOrder =
  (denoms: [Denom, Denom]) =>
  (response: OrderResponse): Order => ({
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

const castPool =
  (denoms: [Denom, Denom]) =>
  (response: PoolResponse): Pool => {
    return {
      quotePrice: parseFloat(response.quote_price) * factor(denoms),
      quotePriceInt: parseFixed(response.quote_price, 18),
      offerDenom: parseDenom(response.offer_denom),
      totalOfferAmount: BigNumber.from(response.total_offer_amount),
    };
  };

const WEI = BigNumber.from(10).pow(18);

export const DEFAULT_SIMULATION: Simulation = {
  returnAmount: BigNumber.from(0),
  spreadAmount: BigNumber.from(0),
  commissionAmount: BigNumber.from(0),
  rate: BigNumber.from(0),
  slippage: BigNumber.from(0),
};

export const simulate = async (
  query: KujiraQueryClient,
  amount: BigNumber,
  denom: Denom,
  pair: Pair,
  book: Book | null
): Promise<Simulation> => {
  if (amount.isZero()) return DEFAULT_SIMULATION;
  const sell = denom.eq(pair.denoms[0]);
  const mid =
    book && book.base.length && book.quote.length
      ? book.base[0].quotePriceInt.add(book.quote[0].quotePriceInt).div(2)
      : BigNumber.from(0);

  let sim = book
    ? await simulateLocal(amount, denom, pair, book).catch(() =>
        simulateQuery(query, amount, denom, pair)
      )
    : await simulateQuery(query, amount, denom, pair);

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
};
const simulateLocal = async (
  amount: BigNumber,
  denom: Denom,
  pair: Pair,
  book: Book
): Promise<Pick<Simulation, "returnAmount" | "commissionAmount">> => {
  // decimals from decoding are 18 dp
  const sell = denom.eq(pair.denoms[0]);
  let returned = BigNumber.from(0);
  const pools = [...(sell ? book.quote : book.base)].reverse();

  let offer = amount;

  while (offer.gt(0)) {
    const pool = pools.pop();
    if (!pool) break;

    const price = pool.quotePriceInt;

    const poolValue = sell
      ? pool.totalOfferAmount.mul(WEI).div(price)
      : pool.totalOfferAmount.mul(price).div(WEI);

    const consumedOffer = poolValue.gt(offer) ? offer : poolValue;

    const consumedAsk = sell
      ? consumedOffer.mul(price).div(WEI)
      : consumedOffer.mul(WEI).div(price);

    returned = returned.add(consumedAsk);
    offer = offer.sub(consumedOffer);
  }

  if (!offer.isZero()) {
    throw new Error("Out of orders");
  }

  const commissionAmount = mulDec(returned, 0.0015);
  const netReturnAmount = returned.sub(commissionAmount);
  return { returnAmount: netReturnAmount, commissionAmount };
};

const simulateQuery = (
  query: KujiraQueryClient,
  amount: BigNumber,
  denom: Denom,
  pair: Pair
): Promise<Pick<Simulation, "returnAmount" | "commissionAmount">> =>
  query.wasm
    .queryContractSmart(pair.address, {
      simulation: {
        offer_asset: {
          info: { native_token: { denom: denom.reference } },
          amount: amount.toString(),
        },
      },
    })
    .then((res: SimulationResponse) => ({
      returnAmount: BigNumber.from(res.return_amount),
      commissionAmount: BigNumber.from(res.commission_amount),
    }));

export const formatPrice = (
  price: number,
  denom: Denom,
  denoms: [Denom, Denom]
): number => {
  const [, quote] = denoms;
  return price && denom.eq(quote)
    ? factor(denoms) / price
    : price * factor(denoms);
};
