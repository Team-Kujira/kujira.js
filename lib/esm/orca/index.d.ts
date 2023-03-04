import { Market } from "./types";
import { NETWORK } from "../network";
export * from "./types";
export declare type Soon = Pick<Market, "label" | "chain" | "protocol" | "collateralDenom" | "bidDenom" | "repayDenom">;
export declare const SOON: Soon[];
export declare const MARKETS: {
    "kaiyo-1": Record<string, Market>;
    "harpoon-4": Record<string, Market>;
    localkujira: {};
};
export declare const getMarkets: (network?: NETWORK) => Array<Market | Soon>;
