import { BigNumber } from "@ethersproject/bignumber";
import { Denom } from "./denom";
import { NETWORK } from "./network";
import { KujiraQueryClient } from "./queryClient";
export declare type Market = {
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
declare type ConfigResponse = {
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
export declare type Config = {
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
export declare type Status = {
    debtAmount: BigNumber;
};
export declare const castStatus: (res: {
    debt_amount: string;
}) => Status;
export declare const castConfig: (json: ConfigResponse) => Omit<Market, "address">;
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
