import { Market } from "./types";
import { NETWORK } from "../network";
export * from "./types";
export declare const getMarkets: (network?: NETWORK) => Array<Market | Pick<Market, "label" | "chain" | "protocol" | "collateralDenom" | "bidDenom" | "repayDenom">>;
