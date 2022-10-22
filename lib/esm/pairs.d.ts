import { Denom } from "./denom";
import { Precision } from "./fin";
import { NETWORK } from "./network";
import { Market } from "./usk";
export declare type Margin = {
    address: string;
    fin_address: string;
    market: Market;
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
};
export declare const PAIRS: Pair[];
