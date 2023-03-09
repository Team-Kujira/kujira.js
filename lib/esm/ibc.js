import chains from "./resources/chains.json";
import channels from "./resources/channels.json";
import connections from "./resources/connections.json";
import tokens from "./resources/tokens.json";
export const TRANSFER_CHANNELS = {
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
    },
};
export const IBC = {
    chains,
    connections,
    channels: {
        mainnet: channels.mainnet.filter((x) => !!TRANSFER_CHANNELS.mainnet[x.channelId]),
        testnet: channels.testnet.filter((x) => !!TRANSFER_CHANNELS.testnet[x.channelId]),
    },
    tokens,
};
