import { Asset, Chain } from "@chain-registry/types";
import { assets, chains } from "chain-registry";
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
    "channel-43": "teritori",
    "channel-46": "carbon",
    "channel-50": "gravitybridge",
    "channel-51": "planq",
    "channel-54": "injective",
    "channel-55": "mars",
    "channel-58": "migaloo",
    "channel-59": "sentinel",
    "channel-60": "fetch-ai",
    "channel-61": "agoric",
    "channel-62": "noble",
    "channel-63": "stafihub",
    "channel-64": "akash",
    "channel-65": "assetmantle",
    "channel-67": "crescent",
    "channel-68": "regen",
    "channel-69": "sommelier",
    "channel-70": "omniflixhub",
    "channel-71": "terra",
    "channel-75": "neutron",
    "channel-95": "kava",
  },
};

export const IBC: {
  chains: { mainnet: CosmosChain[]; testnet: CosmosChain[] };
  connections: typeof connections;
  channels: typeof channels;
  tokens: Record<string, { base_denom: string; path: string }>;
} = {
  chains: chains.reduce(
    (a, v) => {
      const assets_ =
        assets.find((a) => a.chain_name === v.chain_name)?.assets || [];
      const x = { ...v, assets: assets_ };
      const key = v.network_type === "mainnet" ? "mainnet" : "testnet";
      return { ...a, [key]: [...a[key], x] };
    },
    { mainnet: [], testnet: [] }
  ),
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

export type CosmosChainAsset = Asset;
export type CosmosChain = Chain & { assets: CosmosChainAsset[] };
