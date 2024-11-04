import { ChainInfo, FeeCurrency } from "@keplr-wallet/types";

export const MAINNET = "kaiyo-1";
export const TESTNET = "harpoon-4";
export const POND = "pond-1";

export type NETWORK = typeof MAINNET | typeof TESTNET | typeof POND;

export const NETWORKS = {
  [TESTNET]: "Testnet",
  [MAINNET]: "Mainnet",
  [POND]: "Pond",
};

export const RPCS: Record<string, string[]> = {
  [TESTNET]: [
    // "https://rpc.harpoon.kujira.setten.io",
    "https://kujira-testnet-rpc.polkachu.com",
    "https://rpc-harpoon-4.starsquid.io",
    "https://test-rpc-kujira.mintthemoon.xyz",
    // "https://dev-rpc-kujira.mintthemoon.xyz",
  ],
  [MAINNET]: [
    "https://kujira-mainnet-rpc.autostake.com",
    "https://kujira-rpc.ibs.team",
    "https://kujira-rpc.defiantlabs.net",
    "https://kujira-rpc.openbitlab.com",
    "https://kujira-rpc.theamsolutions.info",
    "https://kujira.rpc.ghostinnet.com",
    "https://kujira.rpc.kjnodes.com",
    "https://kujira-rpc.publicnode.com",
    "https://rpc-kujira.capybaralabs.com/",
    "https://rpc-kujira.mintthemoon.xyz",
    "https://rpc-kujira.mms.team",
    "https://rpc-kujira.rorcualnodes.com",
    "https://rpc-kujira.starsquid.io",
    "https://rpc-kujira.synergynodes.com",
    "https://rpc.kujira.rektdao.club",
    "https://rpc-kujira.goldenratiostaking.net",
    "https://kujira.interstellar-lounge.org",
    // "https://kuji-rpc.kleomedes.network",
    // "https://kujira-rpc.lavenderfive.com",
    // "https://kujira-rpc.polkachu.com",
    // "https://rpc-kujira.whispernode.com",
    // "https://rpc.kaiyo.kujira.setten.io",
  ],
  [POND]: ["http://127.0.0.1:10157"],
  "gravity-bridge-3": [
    "https://gravity-rpc.synergynodes.com",
    "https://gravitybridge.rpc.kjnodes.com",
    "https://gravitybridge-rpc.lavenderfive.com",
  ],
};

const chainInfo = (
  chainId: string,
  chainName: string,
  rpc: string,
  rest: string,
  fees: FeeCurrency[] = []
) => ({
  chainId,
  chainName,
  rpc,
  rest,
  bip44: {
    coinType: 118,
  },
  bech32Config: {
    bech32PrefixAccAddr: "kujira",
    bech32PrefixAccPub: "kujira" + "pub",
    bech32PrefixValAddr: "kujira" + "valoper",
    bech32PrefixValPub: "kujira" + "valoperpub",
    bech32PrefixConsAddr: "kujira" + "valcons",
    bech32PrefixConsPub: "kujira" + "valconspub",
  },
  currencies: fees,
  feeCurrencies: fees,
  stakeCurrency: {
    coinDenom: "KUJI",
    coinMinimalDenom: "ukuji",
    coinDecimals: 6,
    coinGeckoId: "kujira",
  },
});

export const CHAIN_INFO: Record<NETWORK, ChainInfo> = {
  [TESTNET]: chainInfo(
    TESTNET,
    "Kujira Testnet",
    "https://test-rpc-kujira.mintthemoon.xyz",
    "https://test-lcd-kujira.mintthemoon.xyz",
    [
      {
        coinDenom: "KUJI",
        coinMinimalDenom: "ukuji",
        coinDecimals: 6,
        coinGeckoId: "kujira",
        gasPriceStep: { low: 0.0034, average: 0.0051, high: 0.00681 },
      },

      {
        coinDenom: "DEMO",
        coinMinimalDenom:
          "factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo",
        coinDecimals: 6,
        coinGeckoId: "kujira",
        gasPriceStep: {
          low: 0.00125,
          average: 0.0025,
          high: 0.00375,
        },
      },
    ]
  ),
  [POND]: chainInfo(
    POND,
    "Kujira Pond",
    "http://127.0.0.1:10157",
    "http://127.0.0.1:10117",
    [
      {
        coinDenom: "KUJI",
        coinMinimalDenom: "ukuji",
        coinDecimals: 6,
        coinGeckoId: "kujira",
        gasPriceStep: { low: 0.0034, average: 0.0051, high: 0.00681 },
      },
    ]
  ),
  [MAINNET]: chainInfo(
    MAINNET,
    "Kujira",
    "https://rpc.cosmos.directory/kujira",
    "https://rest.cosmos.directory/kujira",
    [
      {
        coinDenom: "KUJI",
        coinMinimalDenom: "ukuji",
        coinDecimals: 6,
        coinGeckoId: "kujira",
        gasPriceStep: { low: 0.0034, average: 0.0051, high: 0.00681 },
      },
      {
        coinDenom: "USK",
        coinMinimalDenom:
          "factory/kujira1qk00h5atutpsv900x202pxx42npjr9thg58dnqpa72f2p7m2luase444a7/uusk",
        coinDecimals: 6,
        coinGeckoId: "usk",
        gasPriceStep: { low: 0.01186, average: 0.01779, high: 0.02372 },
      },
      {
        coinDenom: "axlUSDC",
        coinMinimalDenom:
          "ibc/295548A78785A1007F232DE286149A6FF512F180AF5657780FC89C009E2C348F",
        coinDecimals: 6,
        coinGeckoId: "axlusdc",
        gasPriceStep: { low: 0.0119, average: 0.01785, high: 0.02379 },
      },
      {
        coinDenom: "ATOM",
        coinMinimalDenom:
          "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2",
        coinDecimals: 6,
        coinGeckoId: "cosmos",
        gasPriceStep: { low: 0.00129, average: 0.00193, high: 0.00258 },
      },
      {
        coinDenom: "OSMO",
        coinMinimalDenom:
          "ibc/47BD209179859CDE4A2806763D7189B6E6FE13A17880FE2B42DE1E6C1E329E23",
        coinDecimals: 6,
        coinGeckoId: "osmosis",
        gasPriceStep: { low: 0.01795, average: 0.02692, high: 0.0359 },
      },
      {
        coinDenom: "CMDX",
        coinMinimalDenom:
          "ibc/3607EB5B5E64DD1C0E12E07F077FF470D5BC4706AFCBC98FE1BA960E5AE4CE07",
        coinDecimals: 6,
        coinGeckoId: "comdex",
        gasPriceStep: { low: 0.65943, average: 0.98915, high: 1.31887 },
      },
      {
        coinDenom: "EVMOS",
        coinMinimalDenom:
          "ibc/F3AA7EF362EC5E791FE78A0F4CCC69FEE1F9A7485EB1A8CAB3F6601C00522F10",
        coinDecimals: 18,
        coinGeckoId: "evmos",
        gasPriceStep: {
          low: 160416396197,
          average: 240624594296,
          high: 320832792394,
        },
      },
      {
        coinDenom: "JUNO",
        coinMinimalDenom:
          "ibc/EFF323CC632EC4F747C61BCE238A758EFDB7699C3226565F7C20DA06509D59A5",
        coinDecimals: 6,
        coinGeckoId: "juno-network",
        gasPriceStep: { low: 0.02689, average: 0.04034, high: 0.05379 },
      },
      {
        coinDenom: "LUNA",
        coinMinimalDenom:
          "ibc/DA59C009A0B3B95E0549E6BF7B075C8239285989FF457A8EDDBB56F10B2A6986",
        coinDecimals: 6,
        coinGeckoId: "terra-luna-2",
        gasPriceStep: { low: 0.01495, average: 0.02243, high: 0.02991 },
      },
      {
        coinDenom: "SCRT",
        coinMinimalDenom:
          "ibc/A358D7F19237777AF6D8AD0E0F53268F8B18AE8A53ED318095C14D6D7F3B2DB5",
        coinDecimals: 6,
        coinGeckoId: "secret",
        gasPriceStep: { low: 0.03139, average: 0.04709, high: 0.06278 },
      },
      {
        coinDenom: "STARS",
        coinMinimalDenom:
          "ibc/4F393C3FCA4190C0A6756CE7F6D897D5D1BE57D6CCB80D0BC87393566A7B6602",
        coinDecimals: 6,
        coinGeckoId: "stargaze",
        gasPriceStep: { low: 0.90403, average: 1.35605, high: 1.80806 },
      },
      {
        coinDenom: "AVAX",
        coinMinimalDenom:
          "ibc/004EBF085BBED1029326D56BE8A2E67C08CECE670A94AC1947DF413EF5130EB2",
        coinDecimals: 18,
        coinGeckoId: "avalanche-2",
        gasPriceStep: { low: 559196837, average: 838795256, high: 1118393675 },
      },
      {
        coinDenom: "ETH",
        coinMinimalDenom:
          "ibc/1B38805B1C75352B28169284F96DF56BDEBD9E8FAC005BDCC8CF0378C82AA8E7",
        coinDecimals: 18,
        coinGeckoId: "ethereum",
        gasPriceStep: { low: 5772801, average: 8659201, high: 11545602 },
      },
      {
        coinDenom: "MNTA",
        coinMinimalDenom:
          "factory/kujira1643jxg8wasy5cfcn7xm8rd742yeazcksqlg4d7/umnta",
        coinDecimals: 6,
        coinGeckoId: "mantadao",
        gasPriceStep: { low: 0.01807, average: 0.02711, high: 0.03615 },
      },
      {
        coinDenom: "USDC",
        coinMinimalDenom:
          "ibc/FE98AAD68F02F03565E9FA39A5E627946699B2B07115889ED812D8BA639576A9",
        coinDecimals: 6,
        coinGeckoId: "usd-coin",
        gasPriceStep: { low: 0.01194, average: 0.01792, high: 0.02389 },
      },
      {
        coinDenom: "SOL",
        coinMinimalDenom:
          "ibc/E5CA126979E2FFB4C70C072F8094D07ECF27773B37623AD2BF7582AD0726F0F3",
        coinDecimals: 8,
        coinGeckoId: "solana",
        gasPriceStep: { low: 0.00019, average: 0.00029, high: 0.00039 },
      },
    ]
  ),
};

export const NETWORK_DEFAULT = "kaiyo-1";
