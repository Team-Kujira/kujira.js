export interface IBCConnection {
    "chain-1": {
        "chain-name": string;
        "client-id": string;
        "connection-id": string;
    };
    "chain-2": {
        "chain-name": string;
        "client-id": string;
        "connection-id": string;
    };
    channels: {
        "chain-1": {
            "channel-id": string;
            "port-id": string;
        };
        "chain-2": {
            "channel-id": string;
            "port-id": string;
        };
        ordering: string;
        version: string;
        tags: {
            status: string;
            preferred: boolean;
            dex: string;
        };
    }[];
}
/**
 * Cosmos Chain.json is a metadata file that contains information about a cosmos sdk based chain.
 */
export interface CosmosChain {
    apis?: {
        grpc?: {
            address: string;
            provider?: string;
        }[];
        rest: {
            address: string;
            provider?: string;
        }[];
        rpc: {
            address: string;
            provider?: string;
        }[];
    };
    bech32_prefix: string;
    chain_id: string;
    chain_name: string;
    codebase?: {
        compatible_versions: string[];
        git_repo: string;
        recommended_version: string;
    };
    daemon_name?: string;
    explorers?: {
        name?: string;
        url: string;
        tx_page?: string;
    }[];
    genesis: {
        genesis_url: string;
    };
    network_type: string;
    node_home?: string;
    peers?: {
        persistent_peers?: {
            address: string;
            id: string;
        }[];
        seeds?: {
            address: string;
            id: string;
            provider?: string;
        }[];
    };
    pretty_name: string;
    slip44?: number;
    status: string;
    assets?: CosmosChainAsset[];
}
export interface CosmosChainAsset {
    base: string;
    coingecko_id?: string;
    denom_units: {
        denom: string;
        exponent: number;
    }[];
    description?: string;
    display: string;
    logo_URIs?: {
        png?: string;
        svg?: string;
    };
    name: string;
    symbol: string;
}
export interface FeeToken {
    denom: string;
    fixed_min_gas_price?: number;
    low_gas_price?: number;
    average_gas_price?: number;
    high_gas_price?: number;
    [k: string]: unknown;
}
export interface Peer {
    id: string;
    address: string;
    provider?: string;
    [k: string]: unknown;
}
export interface Endpoint {
    address: string;
    provider?: string;
    [k: string]: unknown;
}
export interface Explorer {
    kind?: string;
    url?: string;
    tx_page?: string;
    account_page?: string;
    [k: string]: unknown;
}
export declare type IBCToken = {
    path: string;
    base_denom: string;
};
