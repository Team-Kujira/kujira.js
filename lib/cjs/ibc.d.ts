import { Asset, Chain } from "@chain-registry/types";
import channels from "./resources/channels.json";
import connections from "./resources/connections.json";
export declare const TRANSFER_CHANNELS: Record<string, Record<string, string>>;
export declare const IBC: {
    chains: {
        mainnet: CosmosChain[];
        testnet: CosmosChain[];
    };
    connections: typeof connections;
    channels: typeof channels;
    tokens: Record<string, {
        base_denom: string;
        path: string;
    }>;
};
export declare type CosmosChainAsset = Asset;
export declare type CosmosChain = Chain & {
    assets: CosmosChainAsset[];
};
