import { NETWORK } from "../network";
import { Pair } from "./types";
export declare const FILTERED: string[];
import contracts from "../resources/contracts.json";
export declare const STAKING: {
    "harpoon-4": string;
    "kaiyo-1": string;
};
declare type Config = {
    owner: string;
    denoms: string[] | {
        native: string;
    }[];
    price_precision: {
        decimal_places: number;
    };
    is_bootstrapping: boolean;
    decimal_delta?: number;
};
export declare const compile: (network: keyof typeof contracts) => (a: Record<string, Pair>, v: {
    address: string;
    config: Config;
}) => Record<string, Pair>;
export declare const PAIRS: Record<NETWORK, Record<string, Pair>>;
export {};
