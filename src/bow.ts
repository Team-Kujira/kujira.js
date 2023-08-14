import { BigNumber, parseFixed } from "@ethersproject/bignumber";
import { Denom } from "./denom";
import { LOCALNET, MAINNET, NETWORK, TESTNET } from "./network";
import contracts from "./resources/contracts.json";

export type Pool = {
  owner: string;
  denoms: [Denom, Denom];
  pricePrecision: number;
  decimalDelta: number;
  finContract: string;
  intervals: BigNumber[];
  fee: BigNumber;
  amp: BigNumber;
  margin?: Margin;
};

export type PoolResponse = {
  owner: string;
  denoms: string[];
  price_precision: { decimal_places: number };
  decimal_delta: number;
  fin_contract: string;
  intervals: string[];
  fee: string;
  amp: string;
};

export type Margin = {
  owner: string;
  bowContract: string;
  denoms: [Denom, Denom];
  vaults: [string | null, string | null];
  orcas: [string | null, string | null];
  maxLtv: BigNumber;
  fullLiquidationThreshold: BigNumber;
  partialLiquidationTarget: BigNumber;
  borrowFee: BigNumber;
};

export type MarginResponse = {
  owner: string;
  bow_contract: string;
  denoms: [[string, number], [string, number]];
  vaults: (string | null)[];
  orcas: (string | null)[];
  max_ltv: string;
  full_liquidation_threshold: string;
  partial_liquidation_target: string;
  borrow_fee: string;
};

export const castPool = (res: PoolResponse): Pool => ({
  owner: res.owner,
  denoms: [Denom.from(res.denoms[0]), Denom.from(res.denoms[1])],
  pricePrecision: res.price_precision.decimal_places,
  decimalDelta: res.decimal_delta,
  finContract: res.fin_contract,
  intervals: res.intervals.map((x) => parseFixed(x, 18)),
  amp: parseFixed(res.amp, 18),
  fee: parseFixed(res.fee, 18),
});

export const castMargin = (res: MarginResponse): Margin => ({
  owner: res.owner,
  bowContract: res.bow_contract,
  denoms: [Denom.from(res.denoms[0][0]), Denom.from(res.denoms[1][0])],
  vaults: [res.vaults[0], res.vaults[1]],
  orcas: [res.orcas[0], res.orcas[1]],
  maxLtv: parseFixed(res.max_ltv, 18),
  fullLiquidationThreshold: BigNumber.from(res.full_liquidation_threshold),
  partialLiquidationTarget: parseFixed(res.partial_liquidation_target, 18),
  borrowFee: parseFixed(res.borrow_fee, 18),
});

export const POOLS: Record<NETWORK, Record<string, Pool>> = {
  [MAINNET]: contracts[MAINNET].bow.reduce(
    (a, v) => ({
      ...a,
      [v.address]: castPool(v.config),
    }),
    {}
  ),
  [TESTNET]: contracts[TESTNET].bow.reduce(
    (a, v) => ({
      ...a,
      [v.address]: castPool(v.config),
    }),
    {}
  ),
  [LOCALNET]: {},
};
