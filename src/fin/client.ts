import { BigNumber } from "@ethersproject/bignumber";
import { divToNumber, mulDec } from "../bignumber";
import { Denom, factor } from "../denom";
import { KujiraQueryClient } from "../queryClient";
import {
  Book,
  BookResponse,
  Config,
  ConfigResponse,
  CW20Denom,
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
  decimalDelta: response.decimal_delta,
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
      offerDenom: parseDenom(response.offer_denom),
      totalOfferAmount: BigNumber.from(response.total_offer_amount),
    };
  };

export const simulate = async (
  query: KujiraQueryClient,
  amount: BigNumber,
  denom: Denom,
  pair: Pair,
  book: Book | null
): Promise<Simulation> => {
  let sim = book
    ? await simulateLocal(amount, denom, pair, book).catch(() =>
        simulateQuery(query, amount, denom, pair)
      )
    : await simulateQuery(query, amount, denom, pair);

  const beliefReturnAmount = sim.returnAmount.add(sim.commissionAmount);
  const slippage = divToNumber(
    beliefReturnAmount.sub(sim.returnAmount),
    beliefReturnAmount
  );

  return {
    returnAmount: sim.returnAmount,
    spreadAmount: sim.spreadAmount,
    commissionAmount: sim.commissionAmount,
    rate: divToNumber(sim.returnAmount, amount),
    slippage,
  };
};

const simulateLocal = async (
  amount: BigNumber,
  denom: Denom,
  pair: Pair,
  book: Book
): Promise<
  Pick<Simulation, "returnAmount" | "spreadAmount" | "commissionAmount">
> => {
  const sell = denom.eq(pair.denoms[0]);
  let returned = BigNumber.from(0);
  const pools = [...(sell ? book.quote : book.base)].reverse();
  const mid = Math.floor(
    (book.base.length && book.quote.length
      ? (book.base[0].quotePrice + book.quote[0].quotePrice) / 2
      : 0) * 1000000
  );

  let offer = amount;
  const perfect = sell ? mulDec(offer, mid) : mulDec(offer, 1 / mid); // mulDec(offer, sell ? mid / f : f / mid);

  while (offer.gt(0)) {
    const pool = pools.pop();

    if (!pool) break;

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
};

const simulateQuery = (
  query: KujiraQueryClient,
  amount: BigNumber,
  denom: Denom,
  pair: Pair
): Promise<
  Pick<Simulation, "returnAmount" | "spreadAmount" | "commissionAmount">
> =>
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
      spreadAmount: BigNumber.from(res.commission_amount),
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
