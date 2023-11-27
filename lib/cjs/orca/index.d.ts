import { NETWORK } from "../network";
import { Bid, BidPool, BidPoolResponse, BidResponse, Market } from "./types";
export * from "./types";
export declare const castBidPool: (response: BidPoolResponse) => BidPool;
export declare const castBid: (response: BidResponse) => Bid;
export declare const FILTERED: string[];
export declare const MARKETS: {
    "kaiyo-1": Record<string, Market>;
    "harpoon-4": Record<string, Market>;
    "pond-1": {};
};
export declare const getMarkets: (network?: NETWORK) => Array<Market>;
