import chains from "./resources/chains.json";
import channels from "./resources/channels.json";
import connections from "./resources/connections.json";
import tokens from "./resources/tokens.json";

export const TRANSFER_CHANNELS: Record<string, Record<string, string>> = {
  testnet: {
    "channel-44": "terra2",
  },
  mainnet: {
    "channel-0": "cosmoshub",
    "channel-1": "juno",
    "channel-3": "osmosis",
    "channel-5": "terra2",
    "channel-6": "cryptoorgchain",
    "channel-7": "stargaze",
    "channel-9": "axelar",
    "channel-10": "secretnetwork",
    "channel-13": "persistence",
    "channel-14": "band",
    "channel-15": "bitsong",
    "channel-16": "cerberus",
    "channel-17": "chihuahua",
    "channel-18": "comdex",
    "channel-19": "lum",
    "channel-20": "vidulum",
    "channel-21": "emoney",
    "channel-23": "evmos",
    "channel-27": "okexchain",
    "channel-32": "stride",
    "channel-46": "carbon",
    "channel-50": "gravitybridge",
    "channel-51": "planq",
    "channel-54": "injective",
    "channel-55": "mars",
    "channel-58": "migaloo",
    "channel-59": "sentinel",
    "channel-60": "fetch-ai",
    "channel-61": "agoric",
  },
};

export const IBC: {
  chains: { mainnet: CosmosChain[]; testnet: CosmosChain[] };
  connections: typeof connections;
  channels: typeof channels;
  tokens: Record<string, { base_denom: string; path: string }>;
} = {
  chains,
  connections,
  channels: {
    mainnet: channels.mainnet.filter(
      (x) => !!TRANSFER_CHANNELS.mainnet[x.channelId]
    ),
    testnet: channels.testnet.filter(
      (x) => !!TRANSFER_CHANNELS.testnet[x.channelId]
    ),
  },
  tokens,
};

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
    seeds?: { address: string; id: string; provider?: string }[];
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

export type IBCToken = {
  path: string;
  base_denom: string;
};
