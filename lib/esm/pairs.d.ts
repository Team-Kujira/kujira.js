import { Denom } from "./denom";
import { Precision } from "./fin";
import { NETWORK } from "./network";
import { Market } from "./usk";
export declare type Margin = {
    market: string;
    limit?: string;
    fin_address: string;
    config: Market;
};
export declare type Pair = {
    address: string;
    chainID: NETWORK;
    denoms: [Denom, Denom];
    precision: Precision;
    decimalDelta: number;
    margin?: Margin;
    multiswap: boolean;
    pool?: string;
    queue?: string;
    calc?: string;
};
export declare const STAKING: {
    "harpoon-4": string;
    "kaiyo-1": string;
};
export declare const PAIRS: Pair[];
