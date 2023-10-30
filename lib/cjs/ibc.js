"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IBC = exports.TRANSFER_CHANNELS = void 0;
const chain_registry_1 = require("chain-registry");
const channels_json_1 = __importDefault(require("./resources/channels.json"));
const connections_json_1 = __importDefault(require("./resources/connections.json"));
const tokens_json_1 = __importDefault(require("./resources/tokens.json"));
exports.TRANSFER_CHANNELS = {
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
        "channel-115": "realio",
        "channel-116": "nomic",
    },
};
const CHAINS = [
    {
        $schema: "../chain.schema.json",
        chain_name: "archway",
        status: "live",
        network_type: "mainnet",
        website: "https://archway.io/",
        pretty_name: "Archway",
        chain_id: "archway-1",
        bech32_prefix: "archway",
        daemon_name: "archwayd",
        node_home: "$HOME/.archway",
        key_algos: ["secp256k1"],
        slip44: 118,
        fees: {
            fee_tokens: [
                {
                    denom: "aarch",
                    fixed_min_gas_price: 900000000000,
                    low_gas_price: 1000000000000,
                    average_gas_price: 1500000000000,
                    high_gas_price: 2000000000000,
                },
            ],
        },
        staking: {
            staking_tokens: [
                {
                    denom: "aarch",
                },
            ],
            lock_duration: {
                time: "1209600s",
            },
        },
        codebase: {
            git_repo: "https://github.com/archway-network/archway",
            recommended_version: "v1.0.0",
            compatible_versions: ["v1.0.0"],
            binaries: {
                "linux/amd64": "https://github.com/archway-network/archway/releases/download/v1.0.0/archwayd_linux_amd64",
                "linux/arm64": "https://github.com/archway-network/archway/releases/download/v1.0.0/archwayd_linux_arm64",
            },
            cosmos_sdk_version: "v0.45.16",
            consensus: {
                type: "tendermint",
                version: "v0.34.27",
            },
            cosmwasm_version: "v0.32.0",
            cosmwasm_enabled: true,
            ibc_go_version: "v4.3.1",
            genesis: {
                genesis_url: "https://github.com/archway-network/networks/raw/main/archway-1/genesis/genesis.json.gz",
            },
            versions: [
                {
                    name: "v1.0.0",
                    recommended_version: "v1.0.0",
                    compatible_versions: ["v1.0.0"],
                    tag: "v1.0.0",
                    height: 1,
                    consensus: {
                        type: "tendermint",
                        version: "v0.34.27",
                    },
                    cosmos_sdk_version: "v0.45.16",
                    cosmwasm_version: "v0.32.0",
                    cosmwasm_enabled: true,
                    ibc_go_version: "v4.3.1",
                    binaries: {
                        "linux/amd64": "https://github.com/archway-network/archway/releases/download/v1.0.0/archwayd_linux_amd64",
                        "linux/arm64": "https://github.com/archway-network/archway/releases/download/v1.0.0/archwayd_linux_arm64",
                    },
                },
            ],
        },
        logo_URIs: {
            png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/archway.png",
            svg: "https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/archway.svg",
        },
        peers: {
            seeds: [
                {
                    id: "3ba7bf08f00e228026177e9cdc027f6ef6eb2b39",
                    address: "35.232.234.58:26656",
                    provider: "Archway Foundation",
                },
                {
                    id: "b308dda41e4db2ee00852d91846f981c49943d46",
                    address: "161.97.96.91:46656",
                    provider: "AM Solutions",
                },
                {
                    id: "d2362ebcdd562500ac8c4cfa2214a89ad811033c",
                    address: "seeds.whispernode.com:11556",
                    provider: "WhisperNode🤐",
                },
            ],
        },
        apis: {
            rpc: [
                {
                    address: "https://rpc.mainnet.archway.io",
                    provider: "Archway Foundation",
                },
                {
                    address: "https://m-archway.rpc.utsa.tech",
                    provider: "𝐥𝐞𝐬𝐧𝐢𝐤 | 𝐔𝐓𝐒𝐀",
                },
                {
                    address: "https://rpc-1.archway.nodes.guru",
                    provider: "Nodes.Guru",
                },
                {
                    address: "https://archway.rpc.silknodes.io/",
                    provider: "Silk Nodes",
                },
                {
                    address: "https://archway.rpc.kjnodes.com",
                    provider: "kjnodes",
                },
                {
                    address: "https://rpc-archway.cryptech.com.ua",
                    provider: "cryptech",
                },
                {
                    address: "https://rpc.archway.nodestake.top",
                    provider: "NodeStake",
                },
                {
                    address: "https://rpc-archway.theamsolutions.info",
                    provider: "AM Solutions",
                },
                {
                    address: "https://rpc-archway.whispernode.com",
                    provider: "WhisperNode🤐",
                },
            ],
            rest: [
                {
                    address: "https://api.mainnet.archway.io",
                    provider: "Archway Foundation",
                },
                {
                    address: "https://m-archway.api.utsa.tech",
                    provider: "𝐥𝐞𝐬𝐧𝐢𝐤 | 𝐔𝐓𝐒𝐀",
                },
                {
                    address: "https://api-1.archway.nodes.guru",
                    provider: "Nodes.Guru",
                },
                {
                    address: "https://archway.api.silknodes.io/",
                    provider: "Silk Nodes",
                },
                {
                    address: "https://archway.api.kjnodes.com",
                    provider: "kjnodes",
                },
                {
                    address: "https://api-archway.cryptech.com.ua",
                    provider: "cryptech",
                },
                {
                    address: "https://api.archway.nodestake.top",
                    provider: "NodeStake",
                },
                {
                    address: "https://rest-archway.theamsolutions.info",
                    provider: "AM Solutions",
                },
                {
                    address: "https://lcd-archway.whispernode.com:443",
                    provider: "WhisperNode🤐",
                },
            ],
            grpc: [
                {
                    address: "grpc.mainnet.archway.io:443",
                    provider: "Archway Foundation",
                },
                {
                    address: "grpc-1.archway.nodes.guru:10690",
                    provider: "Nodes.Guru",
                },
                {
                    address: "archway.grpc.kjnodes.com:15690",
                    provider: "kjnodes",
                },
                {
                    address: "https://grpc-archway.cryptech.com.ua",
                    provider: "cryptech",
                },
                {
                    address: "https://grpc.archway.nodestake.top:443",
                    provider: "NodeStake",
                },
                {
                    address: "grpc-archway.theamsolutions.info:443",
                    provider: "AM Solutions",
                },
            ],
        },
        explorers: [
            {
                kind: "Nodes Guru",
                url: "https://archway.explorers.guru/",
                tx_page: "https://archway.explorers.guru/transaction/${txHash}",
                account_page: "https://archway.explorers.guru/account/${accountAddress}",
            },
            {
                kind: "𝐥𝐞𝐬𝐧𝐢𝐤 | 𝐔𝐓𝐒𝐀",
                url: "https://exp.utsa.tech/archway",
                tx_page: "https://exp.utsa.tech/archway/tx/${txHash}",
                account_page: "https://exp.utsa.tech/archway/account/${accountAddress}",
            },
            {
                kind: "Mintscan",
                url: "https://mintscan.io/archway/",
                tx_page: "https://mintscan.io/archway/txs/${txHash}",
                account_page: "https://mintscan.io/archway/account/${accountAddress}",
            },
            {
                kind: "Silk Nodes",
                url: "https://explorer.silknodes.io/archway",
                tx_page: "https://explorer.silknodes.io/archway/tx/${txHash}",
                account_page: "https://explorer.silknodes.io/archway/account/${accountAddress}",
            },
            {
                kind: "NodeStake Explorer",
                url: "https://explorer.nodestake.top/archway/",
                tx_page: "https://explorer.nodestake.top/archway/txs/${txHash}",
                account_page: "https://explorer.nodestake.top/archway/account/${accountAddress}",
            },
            {
                kind: "Exploreme",
                url: "https://archway.exploreme.pro/",
                tx_page: "https://archway.exploreme.pro/transaction/${txHash}",
                account_page: "https://archway.exploreme.pro/account/${accountAddress}",
            },
        ],
        assets: [
            {
                description: "The native token of Archway network",
                denom_units: [
                    {
                        denom: "aarch",
                        exponent: 0,
                    },
                    {
                        denom: "uarch",
                        exponent: 12,
                    },
                    {
                        denom: "arch",
                        exponent: 18,
                    },
                ],
                base: "aarch",
                name: "Archway",
                display: "arch",
                symbol: "ARCH",
                logo_URIs: {
                    png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/archway.png",
                    svg: "https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/archway.svg",
                },
                coingecko_id: "archway",
            },
        ],
    },
];
exports.IBC = {
    chains: chain_registry_1.chains.reduce((a, v) => {
        var _a;
        const assets_ = ((_a = chain_registry_1.assets.find((a) => a.chain_name === v.chain_name)) === null || _a === void 0 ? void 0 : _a.assets) || [];
        const x = Object.assign(Object.assign({}, v), { assets: assets_ });
        const key = v.network_type === "mainnet" ? "mainnet" : "testnet";
        return Object.assign(Object.assign({}, a), { [key]: [...a[key], x] });
    }, { mainnet: CHAINS, testnet: [] }),
    connections: connections_json_1.default,
    channels: {
        mainnet: channels_json_1.default.mainnet.filter((x) => !!exports.TRANSFER_CHANNELS.mainnet[x.channelId]),
        testnet: channels_json_1.default.testnet.filter((x) => !!exports.TRANSFER_CHANNELS.testnet[x.channelId]),
    },
    tokens: tokens_json_1.default,
};
