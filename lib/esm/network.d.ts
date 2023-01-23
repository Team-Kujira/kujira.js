import { ChainInfo } from "@keplr-wallet/types";
export declare const MAINNET = "kaiyo-1";
export declare const TESTNET = "harpoon-4";
export declare const LOCALNET = "localkujira";
export declare type NETWORK = typeof MAINNET | typeof TESTNET | typeof LOCALNET;
export declare const NETWORKS: {
    "harpoon-4": string;
    "kaiyo-1": string;
    localkujira: string;
};
export declare const RPCS: Record<NETWORK, string[]>;
export declare const CHAIN_INFO: Record<NETWORK, ChainInfo>;
export declare const NETWORK_DEFAULT = "kaiyo-1";
