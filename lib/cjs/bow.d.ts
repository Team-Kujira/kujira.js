import { BigNumber } from "@ethersproject/bignumber";
import { Denom } from "./denom";
import { NETWORK } from "./network";
type Strategy = "xyk" | "lsd" | "stable";
export type Pool = {
    strategy: Strategy;
    address: string;
    owner: string;
    denoms: [Denom, Denom];
    pricePrecision: number;
    decimalDelta: number;
    finContract: string;
    margin?: Margin;
};
export type PoolResponse = {
    owner: string;
    denoms: string[];
    price_precision: {
        decimal_places: number;
    };
    decimal_delta: number;
    fin_contract: string;
    amp?: any;
    adapter?: any;
};
export type Margin = {
    address: string;
    owner: string;
    bowContract: string;
    denoms: [
        {
            denom: Denom;
            decimals: number;
            oracle: string;
        },
        {
            denom: Denom;
            decimals: number;
            oracle: string;
        }
    ];
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
    denoms: {
        denom: string;
        decimals: number;
        oracle: string;
    }[];
    vaults: (string | null)[];
    orcas: (string | null)[];
    max_ltv: string;
    full_liquidation_threshold: string;
    partial_liquidation_target: string;
    borrow_fee: string;
};
export type PositionResponse = {
    holder: string;
    lp_amount: string;
    ltv: string;
    debt_shares: {
        amount: string;
        denom: string;
        ratio: string;
    }[];
};
export type Position = {
    holder: string;
    lpAmount: BigNumber;
    ltv: BigNumber;
    debtShares: Record<string, {
        amount: BigNumber;
        denom: Denom;
        ratio: BigNumber;
    }>;
};
export declare const castPosition: (res: PositionResponse) => Position;
export declare const castPool: (address: string, res: PoolResponse, margin?: {
    address: string;
    config: MarginResponse;
} | undefined) => Pool;
export declare const castMargin: (address: string, res: MarginResponse) => Margin;
export declare const POOLS: Record<NETWORK, Record<string, Pool>>;
export {};
