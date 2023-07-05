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
    },
};
exports.IBC = {
    chains: chain_registry_1.chains.reduce((a, v) => {
        var _a;
        const assets_ = ((_a = chain_registry_1.assets.find((a) => a.chain_name === v.chain_name)) === null || _a === void 0 ? void 0 : _a.assets) || [];
        const x = Object.assign(Object.assign({}, v), { assets: assets_ });
        const key = v.network_type === "mainnet" ? "mainnet" : "testnet";
        return Object.assign(Object.assign({}, a), { [key]: [...a[key], x] });
    }, { mainnet: [], testnet: [] }),
    connections: connections_json_1.default,
    channels: {
        mainnet: channels_json_1.default.mainnet.filter((x) => !!exports.TRANSFER_CHANNELS.mainnet[x.channelId]),
        testnet: channels_json_1.default.testnet.filter((x) => !!exports.TRANSFER_CHANNELS.testnet[x.channelId]),
    },
    tokens: tokens_json_1.default,
};
