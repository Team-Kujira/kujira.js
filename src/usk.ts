import { BigNumber } from "@ethersproject/bignumber";
import { Denom } from "./denom";
import { LOCALNET, MAINNET, NETWORK, TESTNET } from "./network";
import { KujiraQueryClient } from "./queryClient";
import contracts from "./resources/contracts.json";

export type Market = {
  address: string;
  owner: string;
  stableDenom: Denom;
  stableDenomAdmin: string;
  collateralDenom: Denom;
  oracleDenom: string;
  maxRatio: number;
  mintFee: number;
  interestRate: number;
  orcaAddress: string;
  maxDebt: BigNumber;
  liquidationThreshold: BigNumber;
  liquidationRatio: number;
};

type ConfigResponse = {
  owner: string;
  stable_denom: string;
  stable_denom_admin: string;
  collateral_denom: string;
  oracle_denom: string;
  max_ratio: string;
  mint_fee: string;
  interest_rate: string;
  orca_address: string;
  max_debt: string;
  liquidation_threshold: string;
  liquidation_ratio: string;
};

export type Config = {
  owner: string;
  stableDenom: string;
  stableDenomAdmin: string;
  collateralDenom: string;
  oracleDenom: string;
  maxRatio: string;
  mintFee: string;
  interestRate: string;
  orcaAddress: string;
  maxDebt: string;
  liquidationThreshold: string;
  liquidationRatio: string;
};

export type Status = {
  debtAmount: BigNumber;
};

export const castStatus = (res: { debt_amount: string }): Status => ({
  debtAmount: BigNumber.from(res.debt_amount),
});

export const castConfig = (json: ConfigResponse): Omit<Market, "address"> => ({
  owner: json.owner,
  stableDenom: Denom.from(json.stable_denom),
  stableDenomAdmin: json.stable_denom_admin,
  collateralDenom: Denom.from(json.collateral_denom),
  oracleDenom: json.oracle_denom,
  maxRatio: parseFloat(json.max_ratio),
  mintFee: parseFloat(json.mint_fee),
  interestRate: parseFloat(json.interest_rate),
  orcaAddress: json.orca_address,
  maxDebt: BigNumber.from(json.max_debt),
  liquidationThreshold: BigNumber.from(json.liquidation_threshold),
  liquidationRatio: parseFloat(json.liquidation_ratio),
});

const compile = (
  a: Record<string, Market>,
  v: { address: string; config: ConfigResponse }
) => ({
  ...a,
  [v.address]: { address: v.address, ...castConfig(v.config) },
});

export const MARKETS: Record<NETWORK, Record<string, Market>> = {
  [MAINNET]: contracts["kaiyo-1"].uskMarket.reduce(compile, {}),
  [TESTNET]: contracts["harpoon-4"].uskMarket.reduce(compile, {}),
  [LOCALNET]: {},
};

export type PositionResponse = {
  owner: string;
  deposit_amount: string;
  mint_amount: string;
  interest_amount: string;
  liquidation_price: string | null;
};

export type Position = {
  owner: string;
  deposit_amount: BigNumber;
  mint_amount: BigNumber;
  interest_amount: BigNumber;
  liquidation_price: number | null;
};

export const castPosition = (p: PositionResponse): Position => ({
  owner: p.owner,
  deposit_amount: BigNumber.from(p.deposit_amount),
  mint_amount: BigNumber.from(p.mint_amount),
  interest_amount: BigNumber.from(p.interest_amount),
  liquidation_price: p.liquidation_price
    ? parseFloat(p.liquidation_price)
    : null,
});

export const defaultPosition = (owner?: string): Position => ({
  owner: owner || "",
  deposit_amount: BigNumber.from(0),
  mint_amount: BigNumber.from(0),
  interest_amount: BigNumber.from(0),
  liquidation_price: null,
});

export const fetchPosition = (
  queryClient: KujiraQueryClient,
  address: string,
  account: { address: string }
): Promise<Position> =>
  queryClient.wasm
    .queryContractSmart(address, {
      position: { address: account.address },
    })
    .then(castPosition);
