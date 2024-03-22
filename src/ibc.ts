import { Asset, Chain } from "@chain-registry/types";
import { assets, chains } from "chain-registry";
import channels from "./resources/channels.json";
import connections from "./resources/connections.json";
import tokens from "./resources/tokens.json";

export const TRANSFER_CHANNELS: Record<string, Record<string, string>> = {
  testnet: {
    "channel-44": "terra2",
    "channel-51": "theta",
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
    "channel-89": "teritori",
    "channel-95": "kava",
    "channel-99": "archway",
    "channel-102": "umee",
    "channel-113": "gateway",
    "channel-115": "realio",
    "channel-116": "nomic",
    "channel-117": "celestia",
    "channel-118": "dydx",
    "channel-119": "furya",
    "channel-122": "coreum",
    "channel-123": "andromeda",
    "channel-124": "cheqd",
    "channel-157": "odin",
    "channel-158": "persistence",
    "channel-160": "dymension",
  },
};

const EXTRA = [
  {
    chain_name: "dymension",
    status: "live",
    network_type: "mainnet",
    website: "https://portal.dymension.xyz",
    pretty_name: "Dymension Hub",
    chain_id: "dymension_1100-1",
    bech32_prefix: "dym",
    slip44: 60,
    daemon_name: "dymd",
    fees: {
      fee_tokens: [
        {
          denom: "adym",
          low_gas_price: 20000000000,
          average_gas_price: 20000000000,
          high_gas_price: 20000000000,
        },
      ],
    },
    staking: {
      staking_tokens: [
        {
          denom: "adym",
        },
      ],
    },
    logo_URIs: {
      png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.png",
      svg: "https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.svg",
    },
    description:
      "Dymension is a network of easily deployable and lightning fast modular blockchains called RollApps.",
    images: [
      {
        png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.png",
        svg: "https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.svg",
      },
    ],
    codebase: {
      git_repo: "https://github.com/dymensionxyz/dymension",
    },
    assets: [
      {
        description:
          "The native governance and staking token of the Dymension Hub",
        denom_units: [
          {
            denom: "adym",
            exponent: 0,
          },
          {
            denom: "dym",
            exponent: 18,
          },
        ],
        base: "adym",
        name: "Dymension",
        display: "dym",
        symbol: "DYM",
        logo_URIs: {
          png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.png",
          svg: "https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.svg",
        },
        images: [
          {
            png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.png",
            svg: "https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.svg",
          },
        ],
      },
    ],
  },
];

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
    { mainnet: EXTRA, testnet: [] }
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
