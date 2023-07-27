import { NETWORK } from "../network";
import { Pair } from "./types";
export declare const FILTERED: string[];
export declare const NOTICES: {
    kujira1v8lkqws3gd6npr0rdk9ch54amh9guas86r4u62jq27hee88lryfsxwrvlk: string;
    kujira1cduudfszcm9slm8qxlaqvnpzg2u0hkus94fe3pwt9x446dtw6eeql8ualz: string;
};
import contracts from "../resources/contracts.json";
export declare const STAKING: {
    "harpoon-4": string;
    "kaiyo-1": string;
};
type Config = {
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
