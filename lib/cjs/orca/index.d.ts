import { Market } from "./types";
import { NETWORK } from "../network";
export * from "./types";
export declare const FILTERED: string[];
export declare const MARKETS: {
    "kaiyo-1": Record<string, Market>;
    "harpoon-4": Record<string, Market>;
    "pond-1": {};
};
export declare const getMarkets: (network?: NETWORK) => Array<Market>;
