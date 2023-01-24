import { AccountData } from "@cosmjs/launchpad";
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
  idx: string;
  owner: string;
  deposit_amount: string;
  margin_amount: string;
  mint_amount: string;
  interest_amount: string;
  liquidation_price: string | null;
  order: OrderResponse;
};

export type PositionLimit = {
  idx: string;
  owner: string;
  margin_amount: BigNumber;
  mint_amount: BigNumber;
  interest_amount: BigNumber;
  liquidation_price: number | null;
  order: Order;
};

const castPositionLimit =
  (denoms: [Denom, Denom]) =>
  (p: PositionLimitResponse): PositionLimit => ({
    idx: p.idx,
    owner: p.owner,
    margin_amount: BigNumber.from(p.margin_amount),
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
  account: AccountData,
  denoms: [Denom, Denom]
): Promise<PositionLimit[]> =>
  queryClient.wasm
    .queryContractSmart(address, {
      positions: { owner: account.address },
    })
    .then((xs) => xs.positions.map(castPositionLimit(denoms)));
