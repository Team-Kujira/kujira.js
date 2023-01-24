import { BigNumber } from "@ethersproject/bignumber";
import { divToNumber, mulDec } from "../bignumber";
import { Denom, factor } from "../denom";
import { KujiraQueryClient } from "../queryClient";
import {
  Book,
  BookResponse,
  Config,
  ConfigResponse,
  DenomResponse,
  Order,
  OrderResponse,
  Pair,
  Pool,
  PoolResponse,
  Simulation,
} from "./types";

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

const parseDenom = (response: DenomResponse): Denom => {
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

const filterMigrationError = (agg: Pool[], pool: Pool): Pool[] => {
  const prev = agg.at(-1);
  return prev && prev.quotePrice > pool.quotePrice ? agg : [...agg, pool];
};

export const simulate = async (
  query: KujiraQueryClient,
  amount: BigNumber,
  denom: Denom,
  pair: Pair,
  book: Book
): Promise<Simulation> => {
  const sell = denom.eq(pair.denoms[0]);

  const pools = [...(sell ? book.quote : book.base)].reverse();
  const f = BigNumber.from(10).pow(
    pair.denoms[0].decimals - pair.denoms[1].decimals
  );
  const mid = Math.floor(
    (book.base.length && book.quote.length
      ? (book.base[0].quotePrice + book.quote[0].quotePrice) / 2
      : 0) * 1000000
  );

  let offer = amount;
  const perfect = sell
    ? offer.mul(mid).div(f).div(1000000)
    : offer.mul(f).mul(1000000).div(mid); // mulDec(offer, sell ? mid / f : f / mid);

  let returned = BigNumber.from(0);
  while (offer.gt(0)) {
    const pool = pools.pop();
    if (!pool) break;

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
    const res = await query.wasm.queryContractSmart(pair.address, {
      simulation: {
        offer_asset: {
          info: { native_token: { denom: denom.reference } },
          amount: amount.toString(),
        },
      },
    });
    returned = BigNumber.from(res.return_amount);
  }

  const feeAmount = 0.0015;

  const commissionAmount = mulDec(returned, feeAmount);
  const spreadAmount = perfect.sub(returned);
  const returnAmount = returned.sub(commissionAmount);

  const slippage = divToNumber(spreadAmount, perfect);

  return {
    returnAmount: returnAmount,
    spreadAmount: spreadAmount,
    commissionAmount: commissionAmount,
    rate: sell
      ? divToNumber(returned.mul(f), amount)
      : divToNumber(returned, amount.mul(f)),
    slippage,
  };
};
