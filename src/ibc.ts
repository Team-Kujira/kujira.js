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
  },
};

const CHAINS: CosmosChain[] = [
  {
    $schema: "../chain.schema.json",
    chain_name: "dydx",
    status: "live",
    website: "https://dydx.exchange/",
    network_type: "mainnet",
    pretty_name: "dYdX Protocol",
    chain_id: "dydx-mainnet-1",
    bech32_prefix: "dydx",
    daemon_name: "dydxprotocold",
    node_home: "$HOME/.dydxprotocol",
    key_algos: ["secp256k1"],
    slip44: 118,
    fees: {
      fee_tokens: [
        {
          denom: "adydx",
          fixed_min_gas_price: 12500000000,
          low_gas_price: 12500000000,
          average_gas_price: 12500000000,
          high_gas_price: 20000000000,
        },
        {
          denom:
            "ibc/8E27BA2D5493AF5636760E354E46004562C46AB7EC0CC4C1CA14E9E20E2545B5",
          fixed_min_gas_price: 0.025,
          low_gas_price: 0.025,
          average_gas_price: 0.025,
          high_gas_price: 0.03,
        },
      ],
    },
    staking: {
      staking_tokens: [
        {
          denom: "adydx",
        },
      ],
    },
    codebase: {
      git_repo: "https://github.com/dydxprotocol/v4-chain/",
      recommended_version: "v1.0.1",
      compatible_versions: ["v1.0.0", "v1.0.1"],
      cosmos_sdk_version: "v0.47.4",
      cosmwasm_enabled: false,
      genesis: {
        genesis_url:
          "https://raw.githubusercontent.com/dydxopsdao/networks/main/dydx-mainnet-1/genesis.json",
      },
      versions: [
        {
          name: "v1",
          recommended_version: "v1.0.1",
          compatible_versions: ["v1.0.0", "v1.0.1"],
          cosmos_sdk_version: "v0.47.4",
        },
      ],
    },
    logo_URIs: {
      png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.png",
      svg: "https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.svg",
    },
    peers: {
      seeds: [
        {
          id: "20e1000e88125698264454a884812746c2eb4807",
          address: "seeds.lavenderfive.com:23856",
          provider: "Lavender.Five Nodes 🐝",
        },
        {
          id: "ebc272824924ea1a27ea3183dd0b9ba713494f83",
          address: "dydx-mainnet-seed.autostake.com:27366",
          provider: "AutoStake 🛡️ Slash Protected",
        },
        {
          id: "65b740ee326c9260c30af1f044e9cda63c73f7c1",
          address: "seeds.kingnodes.net:23856",
          provider: "Kingnodes",
        },
        {
          id: "4c30c8a95e26b07b249813b677caab28bf0c54eb",
          address: "rpc.dydx.nodestake.top:666",
          provider: "NodeStake",
        },
        {
          id: "400f3d9e30b69e78a7fb891f60d76fa3c73f0ecc",
          address: "dydx.rpc.kjnodes.com:17059",
          provider: "kjnodes",
        },
        {
          id: "e1b058e5cfa2b836ddaa496b10911da62dcf182e",
          address: "dydx-seed-de.allnodes.me:26656",
          provider: "Allnodes ⚡️ Nodes & Staking",
        },
        {
          id: "e726816f42831689eab9378d5d577f1d06d25716",
          address: "dydx-seed-us.allnodes.me:26656",
          provider: "Allnodes ⚡️ Nodes & Staking",
        },
        {
          id: "e726816f42831689eab9378d5d577f1d06d25716",
          address: "seeds.kingnodes.net:23856",
          provider: "Kingnodes",
        },
        {
          id: "4f20c3e303c9515051b6276aeb89c0b88ee79f8f",
          address: "seed.dydx.cros-nest.com:26656",
          provider: "Crosnest",
        },
      ],
      persistent_peers: [
        {
          id: "ebc272824924ea1a27ea3183dd0b9ba713494f83",
          address: "dydx-mainnet-peer.autostake.com:27366",
          provider: "AutoStake 🛡️ Slash Protected",
        },
      ],
    },
    apis: {
      rpc: [
        {
          address: "https://dydx-rpc.lavenderfive.com:443",
          provider: "Lavender.Five Nodes 🐝",
        },
        {
          address: "https://dydx-mainnet-rpc.autostake.com:443",
          provider: "AutoStake 🛡️ Slash Protected",
        },
        {
          address: "https://rpc-dydx.ecostake.com:443",
          provider: "ecostake",
        },
        {
          address: "https://rpc.dydx.nodestake.top:443",
          provider: "NodeStake",
        },
        {
          address: "https://rpc-dydx.cosmos-spaces.cloud",
          provider: "Cosmos Spaces",
        },
        {
          address: "https://dydx.rpc.kjnodes.com:443",
          provider: "kjnodes",
        },
        {
          address: "https://dydx-rpc.publicnode.com:443",
          provider: "Allnodes ⚡️ Nodes & Staking",
        },
        {
          address: "https://dydx-rpc.kingnodes.com:443",
          provider: "Kingnodes",
        },
      ],
      rest: [
        {
          address: "https://dydx-api.lavenderfive.com:443",
          provider: "Lavender.Five Nodes 🐝",
        },
        {
          address: "https://dydx-mainnet-lcd.autostake.com:443",
          provider: "AutoStake 🛡️ Slash Protected",
        },
        {
          address: "https://rest-dydx.ecostake.com:443",
          provider: "ecostake",
        },
        {
          address: "https://api-dydx.cosmos-spaces.cloud",
          provider: "Cosmos Spaces",
        },
        {
          address: "https://api.dydx.nodestake.top:443",
          provider: "NodeStake",
        },
        {
          address: "https://dydx.api.kjnodes.com:443",
          provider: "kjnodes",
        },
        {
          address: "https://dydx-rest.publicnode.com",
          provider: "Allnodes ⚡️ Nodes & Staking",
        },
        {
          address: "https://dydx-rest.kingnodes.com:443",
          provider: "Kingnodes",
        },
      ],
      grpc: [
        {
          address: "https://dydx-grpc.lavenderfive.com",
          provider: "Lavender.Five Nodes 🐝",
        },
        {
          address: "dydx-mainnet-grpc.autostake.com:443",
          provider: "AutoStake 🛡️ Slash Protected",
        },
        {
          address: "https://grpc.dydx.nodestake.top",
          provider: "NodeStake",
        },
        {
          address: "dydx.grpc.kjnodes.com:443",
          provider: "kjnodes",
        },
        {
          address: "grpc-dydx.cosmos-spaces.cloud:4990",
          provider: "Cosmos Spaces",
        },
        {
          address: "dydx-grpc.publicnode.com:443",
          provider: "Allnodes ⚡️ Nodes & Staking",
        },
        {
          address: "https://dydx-grpc.kingnodes.com:443",
          provider: "Kingnodes",
        },
      ],
    },
    explorers: [
      {
        kind: "mintscan",
        url: "https://www.mintscan.io/dydx",
        tx_page: "https://www.mintscan.io/dydx/txs/${txHash}",
        account_page: "https://www.mintscan.io/dydx/account/${accountAddress}",
      },
      {
        kind: "NodeStake",
        url: "https://explorer.nodestake.top/dydx/",
        tx_page: "https://explorer.nodestake.top/dydx/txs/${txHash}",
        account_page:
          "https://explorer.nodestake.top/dydx/account/${accountAddress}",
      },
    ],
    images: [
      {
        png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.png",
        svg: "https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.svg",
      },
    ],
    assets: [
      {
        description: "The native staking token of dYdX Protocol.",
        denom_units: [
          {
            denom: "adydx",
            exponent: 0,
          },
          {
            denom: "dydx",
            exponent: 18,
          },
        ],
        base: "adydx",
        name: "dYdX",
        display: "dydx",
        symbol: "DYDX",
        logo_URIs: {
          png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.png",
          svg: "https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.svg",
        },
        coingecko_id: "dydx",
        images: [
          {
            png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.png",
            svg: "https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.svg",
          },
          {
            svg: "https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx-circle.svg",
            theme: {
              circle: true,
            },
          },
        ],
      },
      {
        description: "Noble USDC on dYdX Protocol.",
        denom_units: [
          {
            denom:
              "ibc/8E27BA2D5493AF5636760E354E46004562C46AB7EC0CC4C1CA14E9E20E2545B5",
            exponent: 0,
          },
          {
            denom: "usdc",
            exponent: 18,
          },
        ],
        type_asset: "ics20",
        base: "ibc/8E27BA2D5493AF5636760E354E46004562C46AB7EC0CC4C1CA14E9E20E2545B5",
        name: "Noble USDC",
        display: "usdc",
        symbol: "USDC",
        traces: [
          {
            type: "ibc",
            counterparty: {
              chain_name: "noble",
              base_denom: "uusdc",
              channel_id: "channel-33",
            },
            chain: {
              channel_id: "channel-0",
              path: "transfer/channel-0",
            },
          },
        ],
        images: [
          {
            png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.png",
            svg: "https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.svg",
          },
        ],
        logo_URIs: {
          png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.png",
          svg: "https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.svg",
        },
      },
    ],
  },
  {
    $schema: "../chain.schema.json",
    chain_name: "celestia",
    chain_id: "celestia",
    pretty_name: "Celestia",
    status: "live",
    network_type: "mainnet",
    bech32_prefix: "celestia",
    daemon_name: "celestia-appd",
    node_home: "$HOME/.celestia-app",
    key_algos: ["secp256k1"],
    slip44: 118,
    assets: [
      {
        description: "",
        denom_units: [
          {
            denom: "utia",
            exponent: 0,
          },
          {
            denom: "tia",
            exponent: 6,
          },
        ],
        base: "utia",
        name: "Celestia",
        display: "tia",
        symbol: "TIA",
        logo_URIs: {
          svg: "https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.svg",
          png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.png",
        },
        images: [
          {
            svg: "https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.svg",
            png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.png",
          },
        ],
      },
    ],
    fees: {
      fee_tokens: [
        {
          denom: "utia",
          fixed_min_gas_price: 0,
          low_gas_price: 0.1,
          average_gas_price: 0.2,
          high_gas_price: 0.4,
        },
      ],
    },
    staking: {
      staking_tokens: [
        {
          denom: "utia",
        },
      ],
    },
    codebase: {
      git_repo: "https://github.com/celestiaorg/celestia-app",
      recommended_version: "v1.3.0",
      compatible_versions: ["v1.3.0"],
      genesis: {
        genesis_url:
          "https://raw.githubusercontent.com/celestiaorg/networks/master/celestia/genesis.json",
      },
      versions: [
        {
          name: "v1.3.0",
          recommended_version: "v1.3.0",
          compatible_versions: ["v1.3.0"],
        },
      ],
    },
    peers: {
      seeds: [
        {
          id: "e6116822e1a5e283d8a85d3ec38f4d232274eaf3",
          address: "consensus-full-seed-1.celestia-bootstrap.net:26656",
          provider: "Lunar Oasis",
        },
        {
          id: "cf7ac8b19ff56a9d47c75551bd4864883d1e24b5",
          address: "consensus-full-seed-1.celestia-bootstrap.net:26656",
          provider: "Lunar Oasis",
        },
        {
          id: "ebc272824924ea1a27ea3183dd0b9ba713494f83",
          address: "celestia-mainnet-seed.autostake.com:27206",
          provider: "AutoStake 🛡️ Slash Protected",
        },
      ],
      persistent_peers: [
        {
          id: "ebc272824924ea1a27ea3183dd0b9ba713494f83",
          address: "celestia-mainnet-peer.autostake.com:27206",
          provider: "AutoStake 🛡️ Slash Protected",
        },
      ],
    },
    apis: {
      rpc: [
        {
          address: "https://public-celestia-rpc.numia.xyz",
          provider: "Numia",
        },
        {
          address: "https://celestia-mainnet-rpc.autostake.com:443",
          provider: "AutoStake 🛡️ Slash Protected",
        },
        {
          address: "https://celestia-rpc.mesa.newmetric.xyz",
          provider: "Newmetric",
        },
        {
          address: "https://rpc.lunaroasis.net",
          provider: "Lunar Oasis",
        },
        {
          address: "https://rpc.celestia.nodestake.top",
          provider: "NodeStake",
        },
      ],
      rest: [
        {
          address: "https://public-celestia-lcd.numia.xyz",
          provider: "Numia",
        },
        {
          address: "https://celestia-mainnet-lcd.autostake.com:443",
          provider: "AutoStake 🛡️ Slash Protected",
        },
        {
          address: "https://celestia-rest.mesa.newmetric.xyz",
          provider: "Newmetric",
        },
        {
          address: "https://api.lunaroasis.net",
          provider: "Lunar Oasis",
        },
        {
          address: "https://api.celestia.nodestake.top",
          provider: "NodeStake",
        },
      ],
      grpc: [
        {
          address: "https://grpc.celestia.nodestake.top",
          provider: "NodeStake",
        },
        {
          address: "celestia-mainnet-grpc.autostake.com:443",
          provider: "AutoStake 🛡️ Slash Protected",
        },
      ],
    },
    explorers: [
      {
        kind: "Mintscan",
        url: "https://mintscan.io/celestia",
        tx_page: "https://mintscan.io/celestia/txs/${txHash}",
      },
      {
        kind: "NodeStake",
        url: "https://explorer.nodestake.top/celestia/",
        tx_page: "https://explorer.nodestake.top/celestia/txs/${txHash}",
        account_page:
          "https://explorer.nodestake.top/celestia/account/${accountAddress}",
      },
    ],
  },
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
        "linux/amd64":
          "https://github.com/archway-network/archway/releases/download/v1.0.0/archwayd_linux_amd64",
        "linux/arm64":
          "https://github.com/archway-network/archway/releases/download/v1.0.0/archwayd_linux_arm64",
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
        genesis_url:
          "https://github.com/archway-network/networks/raw/main/archway-1/genesis/genesis.json.gz",
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
            "linux/amd64":
              "https://github.com/archway-network/archway/releases/download/v1.0.0/archwayd_linux_amd64",
            "linux/arm64":
              "https://github.com/archway-network/archway/releases/download/v1.0.0/archwayd_linux_arm64",
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
        account_page:
          "https://archway.explorers.guru/account/${accountAddress}",
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
        account_page:
          "https://explorer.silknodes.io/archway/account/${accountAddress}",
      },
      {
        kind: "NodeStake Explorer",
        url: "https://explorer.nodestake.top/archway/",
        tx_page: "https://explorer.nodestake.top/archway/txs/${txHash}",
        account_page:
          "https://explorer.nodestake.top/archway/account/${accountAddress}",
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
    { mainnet: CHAINS, testnet: [] }
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
