import { BigNumber } from "@ethersproject/bignumber";
import { KujiraQueryClient, NETWORK } from ".";
import { Denom } from "./denom";
export declare type Market = {
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
declare type Config = {
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
export declare const castConfig: (json: Config) => Omit<Market, "address">;
export declare const MARKETS: Record<NETWORK, Record<string, Market>>;
export declare type PositionResponse = {
    owner: string;
    deposit_amount: string;
    mint_amount: string;
    interest_amount: string;
    liquidation_price: string | null;
};
export declare type Position = {
    owner: string;
    deposit_amount: BigNumber;
    mint_amount: BigNumber;
    interest_amount: BigNumber;
    liquidation_price: number | null;
};
export declare const castPosition: (p: PositionResponse) => Position;
export declare const defaultPosition: (owner?: string) => Position;
export declare const fetchPosition: (queryClient: KujiraQueryClient, address: string, account: {
    address: string;
}) => Promise<Position>;
export {};
