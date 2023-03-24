"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IBC = exports.TRANSFER_CHANNELS = void 0;
const chains_json_1 = __importDefault(require("./resources/chains.json"));
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
    },
};
exports.IBC = {
    chains: chains_json_1.default,
    connections: connections_json_1.default,
    channels: {
        mainnet: channels_json_1.default.mainnet.filter((x) => !!exports.TRANSFER_CHANNELS.mainnet[x.channelId]),
        testnet: channels_json_1.default.testnet.filter((x) => !!exports.TRANSFER_CHANNELS.testnet[x.channelId]),
    },
    tokens: tokens_json_1.default,
};
