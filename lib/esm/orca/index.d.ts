import { Market, MarketConfig } from "./types";
import { NETWORK } from "../network";
export * from "./types";
export declare const marketConfigs: Record<string, MarketConfig>;
export declare const getMarkets: (network?: NETWORK) => Array<Market>;
