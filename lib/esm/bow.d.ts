import { BigNumber } from "@ethersproject/bignumber";
import { Denom } from "./denom";
import { NETWORK } from "./network";
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
    price_precision: {
        decimal_places: number;
    };
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
export declare const castPool: (res: PoolResponse) => Pool;
export declare const castMargin: (res: MarginResponse) => Margin;
export declare const POOLS: Record<NETWORK, Record<string, Pool>>;
