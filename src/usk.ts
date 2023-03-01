import { BigNumber } from "@ethersproject/bignumber";
import { KujiraQueryClient, LOCALNET, MAINNET, NETWORK, TESTNET } from ".";
import { Denom } from "./denom";
import contracts from "./resources/contracts.json";

export type Market = {
  address: string;
  owner: string;
  stable_denom: Denom;
  stable_denom_admin: string;
  collateral_denom: Denom;
  oracle_denom: string;
  max_ratio: number;
  mint_fee: number;
  interest_rate: number;
  orca_address: string;
  max_debt: BigNumber;
  liquidation_threshold: BigNumber;
  liquidation_ratio: number;
};

type Config = {
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

const castConfig = (json: Config): Omit<Market, "address"> => ({
  owner: json.owner,
  stable_denom: Denom.from(json.stable_denom),
  stable_denom_admin: json.stable_denom_admin,
  collateral_denom: Denom.from(json.collateral_denom),
  oracle_denom: json.oracle_denom,
  max_ratio: parseFloat(json.max_ratio),
  mint_fee: parseFloat(json.mint_fee),
  interest_rate: parseFloat(json.interest_rate),
  orca_address: json.orca_address,
  max_debt: BigNumber.from(json.max_debt),
  liquidation_threshold: BigNumber.from(json.liquidation_threshold),
  liquidation_ratio: parseFloat(json.liquidation_ratio),
});

const compile = (
  a: Record<string, Market>,
  v: { address: string; config: Config }
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
