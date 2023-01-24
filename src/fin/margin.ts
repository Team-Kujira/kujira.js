import { BigNumber } from "@ethersproject/bignumber";
import { Denom } from "../denom";
import { KujiraQueryClient } from "../queryClient";
import {
  defaultPosition as defaultPositionMarket,
  fetchPosition as fetchPositionMarket,
  Position as PositionMarket,
} from "../usk";
import { castOrder } from "./client";
import { Order, OrderResponse } from "./types";

export { PositionMarket, fetchPositionMarket, defaultPositionMarket };

type PositionLimitResponse = {
  owner: string;
  deposit_amount: string;
  mint_amount: string;
  interest_amount: string;
  liquidation_price: string | null;
  order: OrderResponse;
};

export type PositionLimit = {
  owner: string;
  mint_amount: BigNumber;
  interest_amount: BigNumber;
  liquidation_price: number | null;
  order: Order;
};

const castPositionLimit =
  (denoms: [Denom, Denom]) =>
  (p: PositionLimitResponse): PositionLimit => ({
    owner: p.owner,
    mint_amount: BigNumber.from(p.mint_amount),
    interest_amount: BigNumber.from(p.interest_amount),
    liquidation_price: p.liquidation_price
      ? parseFloat(p.liquidation_price)
      : null,
    order: castOrder(denoms)(p.order),
  });

export const fetchPositionLimit = (
  queryClient: KujiraQueryClient,
  address: string,
  idx: string,
  denoms: [Denom, Denom]
): Promise<PositionLimit> =>
  queryClient.wasm
    .queryContractSmart(address, {
      position: { idx },
    })
    .then(castPositionLimit(denoms));

export const fetchPositionsLimit = (
  queryClient: KujiraQueryClient,
  address: string,
  denoms: [Denom, Denom]
): Promise<PositionLimit[]> =>
  queryClient.wasm
    .queryContractSmart(address, {
      positions: { owner: address },
    })
    .then((xs) => xs.positions.map(castPositionLimit(denoms)));
