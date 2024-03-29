import { sha256 } from "@cosmjs/crypto";
import { assets } from "chain-registry";
import { MAINNET, TESTNET } from "./network";
import contracts from "./resources/contracts.json";
import osmosis from "./resources/osmosis.json";
import ibc from "./resources/tokens.json";

const ghostVaults = [
  ...contracts[MAINNET].ghostVault,
  ...contracts[TESTNET].ghostVault,
];

const wormholeAssets =
  assets.find((x) => x.chain_name === "gateway")?.assets || [];

const labels: Record<string, string> = {
  ulp: "LP ",
  wei: "OKT",
  ugraviton: "GRAV",
  usdt: "USDT",
  usat: "nBTC",
  uregen: "REGEN",
  // Noble USDC
  "ibc/FE98AAD68F02F03565E9FA39A5E627946699B2B07115889ED812D8BA639576A9":
    "USDC",
  "ibc/119334C55720942481F458C9C462F5C0CD1F1E7EEAC4679D674AA67221916AEA":
    "LUNC",
  "ibc/217755344C0D40C75036110E20B0427CC6505760F071BE4080DAD5AC845969EE":
    "USTC",
  "ibc/217755344c0d40c75036110e20b0427cc6505760f071be4080dad5ac845969ee":
    "USTC",

  uausdc: "USDC",
  uusdc: "USDC",
  uausdt: "USDT",
  uusdt: "USDT",
  atevmos: "EVMOS",
  staevmos: "stEVMOS",
  "wavax-wei": "wAVAX",
  "arb-wei": "ARB",
  basecro: "CRO",
  "weth-wei": "wETH",
  "link-wei": "LINK",
  "wsteth-wei": "wstETH",
  "reth-wei": "rETH",
  "dot-planck": "DOT",
  "pepe-wei": "PEPE",
  "yieldeth-wei": "yieldETH",
  aevmos: "EVMOS",
  afet: "FET",
  adydx: "DYDX",
  demo: "DEMO",
  local: "LOCAL",
  swth: "SWTH",
  aarch: "ARCH",
  aacre: "ACRE",
  aplanq: "PLQ",
  ufrienzies: "FRNZ",
  ubedrock: "ROCK",
  stinj: "stINJ",
  nanomobx: "MOBX",
  ario: "RIO",
  ophir: "OPHIR",
  adym: "DYM",
  loki: "ODIN",
  "factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo": "DEMO",
  "factory/kujira12w0ua4eqnkk0aahtnjlt6h3dhxael6x25s507w/local": "LOCAL",
  "factory/kujira1swkuyt08z74n5jl7zr6hx0ru5sa2yev5v896p6/local": "LOCAL",
  "factory/kujira1503w3cjnzpd06m4apje4v0nx47h5gevkywxar8r25gce8r727jxqe4cehk/LOCAL":
    "LOCAL",
  "factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk":
    "USK",
  "factory:kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll:uusk":
    "USK",
  "factory/kujira1qk00h5atutpsv900x202pxx42npjr9thg58dnqpa72f2p7m2luase444a7/uusk":
    "USK",
  "factory:kujira1qk00h5atutpsv900x202pxx42npjr9thg58dnqpa72f2p7m2luase444a7:uusk":
    "USK",
  "factory/kujira1sc6a0347cc5q3k890jj0pf3ylx2s38rh4sza4t/urfuzn": "rFUZN",
  "factory/kujira1v3hcejcerf0d9em9ds8rpyyq68vx3u9u4k0fvw4e9hacdy8nn6pqx4urcw/urcpt":
    "cMNTA",

  "factory/kujira1qzu3up50auxhqyzfq56znuj8n38q2ra7daaf9ef7vg8gu66jh4fqd2wd2y/urcpt":
    "qcMNTA",

  "factory/kujira1m96ucsfpt2yy72w09z2rxjdj38y5qd8lqx5jtggnejmdua2ynpnsxyvjex/urcpt":
    "qcKUJI",

  "factory/kujira14el9xd5e688s7g8yra2rjjv26dmjatfrkgrpkyly5hh9hswn2ngs3p9vag/urcpt":
    "qcMNTA",

  // Old testnet qcKUJI
  "factory/kujira1jaf8tsgvchqfmycv8wmncv52t4fcv3ehuh57gsd9ycce5ewn87ksnwhlkr/urcpt":
    "qcKUJI",

  "factory/kujira1eqqr3ad0lh84ua4m5qu2n4jjz6h73d64jfwvng0w2k0lnhltt4jqdex4z9/urcpt":
    "qcKUJI",

  "factory/kujira1l04ged98c7a7s9tllu62ld09ztylwf442qgm4thfgmadrvngeumsz4zrh2/urcpt":
    "qcFUZN",
  "factory/migaloo1eqntnl6tzcj9h86psg4y4h6hh05g2h9nj8e09l/urac": "RAC",
  "factory/osmo1mlng7pz4pnyxtpq0akfwall37czyk9lukaucsrn30ameplhhshtqdvfm5c/ulvn":
    "LVN",
  "factory/osmo1z0qrq605sjgcqpylfl4aa6s90x738j7m58wyatt0tdzflg2ha26q67k743/wbtc":
    "wBTC",
  gravity0x45804880De22913dAFE09f4980848ECE6EcbAf78: "gPAXG",
  gravity0xfB5c6815cA3AC72Ce9F5006869AE67f18bF77006: "gPSTAKE",
  gravity0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2: "gwETH",
  gravity0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48: "gUSDC",
  gravity0xdAC17F958D2ee523a2206206994597C13D831ec7: "gUSDT",
  gravity0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599: "gwBTC",
  gravity0x6B175474E89094C44Da98b954EedeAC495271d0F: "gDAI",
  gravity0x77E06c9eCCf2E797fd462A92B6D7642EF85b0A44: "wTAO",
  gravity0xa0b93B9e90aB887E53F9FB8728c009746e989B53: "gTST",
  gravity0xe28b3B32B6c345A34Ff64674606124Dd5Aceca30: "gINJ",
  gravity0xB50721BCf8d664c30412Cfbc6cf7a15145234ad1: "gARB",
  gravity0x4c11249814f11b9346808179Cf06e71ac328c1b5: "gORAI",
  gravity0x93581991f68DBaE1eA105233b67f7FA0D6BDeE7b: "gwEVMOS",
  gravity0x35a532d376FFd9a705d0Bb319532837337A398E7: "gwDOGE",
  gravity0x07baC35846e5eD502aA91AdF6A9e7aA210F2DcbE: "gerowan",
  gravity0xd2877702675e6cEb975b4A1dFf9fb7BAF4C91ea9: "gwLUNC",
  gravity0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE: "gSHIB",

  // 18
  gravity0xAa6E8127831c9DE45ae56bB1b0d4D4Da6e5665BD: "gETH2x-FLI",
  // 6
  gravity0x44017598f2AF1bD733F9D87b5017b4E7c1B28DDE: "gstkATOM",
  // 18
  gravity0xBA11D00c5f74255f56a5E366F4F77f5A186d7f55: "gBAND",
  // 6
  gravity0xEa5A82B35244d9e5E48781F00b11B14E627D2951: "gATOM",
  // 18
  gravity0x83F20F44975D03b1b09e64809B757c47f942BEeA: "gsDAI",
  // 18
  gravity0x6982508145454Ce325dDbE47a25d4ec3d2311933: "gPEPE",
  // 18
  gravity0x817bbDbC3e8A1204f3691d14bB44992841e3dB35: "gCUDOS",
  // 18
  gravity0xd23Ed8cA350CE2631F7EcDC5E6bf80D0A1DeBB7B: "gPLQ",
  // 18
  gravity0xd3E4Ba569045546D09CF021ECC5dFe42b1d7f6E4: "gMNW",
  // 18
  gravity0x514910771AF9Ca656af840dff83E8264EcF986CA: "gLINK",

  "erc20/0xAE6D3334989a22A65228732446731438672418F2": "CNTO",
  "frax-wei": "FRAX",
  inj: "INJ",
  "dai-wei": "DAI",
  "wbtc-satoshi": "wBTC",
  "wbnb-wei": "wBNB",
  "wftm-wei": "wFTM",
  "uni-wei": "UNI",
  "wmatic-wei": "wMATIC",
  "wglmr-wei": "wGLMR",
  "busd-wei": "BUSD",
  ncheq: "CHEQ",
  "cw20:juno1qsrercqegvs4ye0yqg93knv73ye5dc3prqwd6jcdcuj8ggp6w0us66deup":
    "LOOP",
  "cw20:juno1cltgm8v842gu54srmejewghnd6uqa26lzkpa635wzra9m9xuudkqa2gtcz":
    "FURY.legacy",
  "cw20:juno1hnftys64ectjfynm6qjk9my8jd3f6l9dq9utcd3dy8ehwrsx9q4q7n9uxt":
    "AQUA",
  "cw20:juno168ctmpyppk90d34p3jjy658zf5a5l3w8wk35wht6ccqj4mr0yv8s4j5awr":
    "NETA",
  "cw20:juno1r4pzw8f9z0sypct5l9j906d47z998ulwvhvqe5xdwgy8wf84583sxwh0pa":
    "RAC.legacy",
  "cw20:juno1j0a9ymgngasfn3l5me8qpd53l5zlm9wurfdk7r65s5mg6tkxal3qpgf5se":
    "GLTO",
  "cw20:terra1ecgazyd0waaj3g7l9cmy5gulhxkps2gmxu9ghducvuypjq68mq2s5lvsct":
    "ampLUNA",
  "cw20:terra1xzkel96e5e8vfmqw7valzdzzv9hqasfyslclvnmvxdejvpda3xwsskxzus":
    "whLOCAL",
  "cw20:terra1nsuqsk6kh58ulczatwev87ttq2z6r3pusulg9r24mfj2fvtzd4uq3exn26":
    "ASTRO",

  "cw20:terra1x62mjnme4y0rdnag3r8rfgjuutsqlkkyuh4ndgex0wl3wue25uksau39q8":
    "xASTRO",
  "cw20:secret1qfql357amn448duf5gvp9gr48sxx9tsnhupu3d": "SHD.legacy",
  "cw20:terra17gck626vgax9jpe6utm7dhx4vdzawfkt0jhru03l7a3dzu98wedsfad4sz":
    "dUST",
  "cw20:terra1lxx40s29qvkrcj8fsa3yzyehy7w50umdvvnls2r830rys6lu2zns63eelv":
    "ROAR",
  "cw20:terra1xp9hrhthzddnl7j5du83gqqr4wmdjm5t0guzg9jp6jwrtpukwfjsjgy4f3":
    "SAYVE",
  "cw20:terra1lalvk0r6nhruel7fvzdppk3tup3mh5j4d4eadrqzfhle4zrf52as58hh9t":
    "CUB",
  "cw20:terra1gwrz9xzhqsygyr5asrgyq3pu0ewpn00mv2zenu86yvx2nlwpe8lqppv584":
    "BLUE",
  "cw20:terra17aj4ty4sz4yhgm08na8drc0v03v2jwr3waxcqrwhajj729zhl7zqnpc0ml":
    "boneLUNA",
  "cw20:terra1sxe8u2hjczlekwfkcq0rs28egt38pg3wqzfx4zcrese4fnvzzupsk9gjkq":
    "BMOS",

  "cw20:secret1s09x2xvfd2lp2skgzm29w2xtena7s8fq98v852": "AMBER",
  "cw20:secret1k6u0cy4feepm6pehnz804zmwakuwdapm69tuc4": "stkd-SCRT",
  "cw20:secret1yxcexylwyxlq58umhgsjgstgcg2a0ytfy4d9lt": "BUTT",
  "cw20:secret153wu605vvp934xhd4k9dtd640zsep5jkesstdm": "SHD",
  "cw20:secret1fl449muk5yq8dlad7a22nje4p5d2pnsgymhjfd": "SILK",

  "cw20:terra1xfsdgcemqwxp4hhnyk4rle6wr22sseq7j07dnn": "KUJIC",
  "cw20:terra188w26t95tf4dz77raftme8p75rggatxjxfeknw": "SKUJIC",

  terra18zqcnl83z98tf6lly37gghm7238k7lh79u4z9a: "bATOM",
  terra1dzhzukyezv0etz22ud940z7adyv7xgcjkahuun: "bETH",
  terra1kc87mu460fwkqte29rquh4hc20m54fxwtsx7gp: "bLUNA",
  terra1c00vskhyzdv0z63z2tyetzx2qma67n2z3vzyn0: "bSOL",
  terra1z3e2e4jpk4n0xzzwlkgcfvc95pc5ldq0xcny58: "sAVAX",
  "factory/migaloo1436kxs0w2es6xlqpp9rd35e3d0cjnw4sv8j3a7483sgks29jqwgshqdky4/ampWHALE":
    "ampWHALE",
  "erc20/0x655ecB57432CC1370f65e5dc2309588b71b473A9": "NEOK",
  "factory/neutron1p8d89wvxyjcnawmgw72klknr3lg9gwwl6ypxda/newt": "NEWT",
  "erc20/tether/usdt": "USDT",

  ...wormholeAssets.reduce((a, v) => ({ ...a, [v.base]: `wh${v.symbol}` }), {}),
};

const terra: Record<string, string> = {
  uaud: "AUT",
  ucad: "CAT",
  uchf: "CHT",
  ucny: "CNT",
  udkk: "DKT",
  ueur: "EUT",
  ugbp: "GBT",
  uhkd: "HKT",
  uidr: "IDT",
  uinr: "INT",
  ujpy: "JPT",
  umnt: "MNT",
  umyr: "MYT",
  unok: "NOT",
  uphp: "PHT",
  usdr: "SDT",
  usek: "SET",
  usgd: "SGT",
  uthb: "THT",
  utwd: "TWT",
  uusd: "UST",
};

const baseDenomToSymbol = (denom: string): string => {
  const raw = labels[denom];
  if (raw) return raw;

  const factoryAddress = denom.split("/")[1];
  const ghost =
    factoryAddress && ghostVaults.find((a) => a.address === factoryAddress);
  if (ghost) return denom.endsWith("/udebt") ? `debt` : `x`;

  const baseDenom = denom.startsWith("ibc/")
    ? (ibc as Record<string, any>)[denom]?.base_denom
    : denom.startsWith("factory/")
    ? denom.split("/")[2]
    : denom.startsWith("factory:")
    ? denom.split(":")[2]
    : denom;

  if (!baseDenom) return "Unknown";

  const label = labels[baseDenom];

  if (label) return label;

  const t = terra[denom];
  if (t) return t;

  // Stafi
  return baseDenom.startsWith("ur")
    ? "r" + baseDenom.replace(/^ur/, "").toUpperCase()
    : baseDenom.startsWith("u")
    ? baseDenom.replace(/^u/, "").toUpperCase()
    : // Persistence
    baseDenom.startsWith("stk/")
    ? `stk${baseDenomToSymbol(baseDenom.replace(/^stk\//, ""))}`
    : // Stride
    baseDenom.startsWith("stu")
    ? `st${baseDenomToSymbol(baseDenom.replace(/^st/, ""))}`
    : baseDenom;
};

const avalanche = {
  // Mainnet
  "0x2b2c81e08f1af8835a78bb2a90ae924ace0ea4be": "sAVAX",
};

type ICS20 = {
  contract: string;
  router: string;
  channel: string;
};

const ics20: Record<string, ICS20> = {
  "cw20:juno1qsrercqegvs4ye0yqg93knv73ye5dc3prqwd6jcdcuj8ggp6w0us66deup": {
    contract: "juno1qsrercqegvs4ye0yqg93knv73ye5dc3prqwd6jcdcuj8ggp6w0us66deup",
    router: "juno1lkv72wruk6m39a2j4ps036hzxyhjccwncgfzzcaqxuwndg5x0ghqa8mrhg",
    channel: "channel-97",
  },

  "cw20:juno1r4pzw8f9z0sypct5l9j906d47z998ulwvhvqe5xdwgy8wf84583sxwh0pa": {
    contract: "juno1r4pzw8f9z0sypct5l9j906d47z998ulwvhvqe5xdwgy8wf84583sxwh0pa",
    router: "juno1lkv72wruk6m39a2j4ps036hzxyhjccwncgfzzcaqxuwndg5x0ghqa8mrhg",
    channel: "channel-97",
  },

  "cw20:juno1cltgm8v842gu54srmejewghnd6uqa26lzkpa635wzra9m9xuudkqa2gtcz": {
    contract: "juno1cltgm8v842gu54srmejewghnd6uqa26lzkpa635wzra9m9xuudkqa2gtcz",
    router: "juno1lkv72wruk6m39a2j4ps036hzxyhjccwncgfzzcaqxuwndg5x0ghqa8mrhg",
    channel: "channel-97",
  },
  "cw20:juno1hnftys64ectjfynm6qjk9my8jd3f6l9dq9utcd3dy8ehwrsx9q4q7n9uxt": {
    contract: "juno1hnftys64ectjfynm6qjk9my8jd3f6l9dq9utcd3dy8ehwrsx9q4q7n9uxt",
    router: "juno1lkv72wruk6m39a2j4ps036hzxyhjccwncgfzzcaqxuwndg5x0ghqa8mrhg",
    channel: "channel-97",
  },
  "cw20:juno1j0a9ymgngasfn3l5me8qpd53l5zlm9wurfdk7r65s5mg6tkxal3qpgf5se": {
    contract: "juno1j0a9ymgngasfn3l5me8qpd53l5zlm9wurfdk7r65s5mg6tkxal3qpgf5se",
    router: "juno1lkv72wruk6m39a2j4ps036hzxyhjccwncgfzzcaqxuwndg5x0ghqa8mrhg",
    channel: "channel-97",
  },
  // whLOCAL
  "cw20:terra1xzkel96e5e8vfmqw7valzdzzv9hqasfyslclvnmvxdejvpda3xwsskxzus": {
    contract:
      "terra1xzkel96e5e8vfmqw7valzdzzv9hqasfyslclvnmvxdejvpda3xwsskxzus",
    router: "terra1d90p5lacfxnqgjxjupu234lxnxyeu8fdeef4d0e0nqy3p30r7gss4myn9x",
    channel: "channel-34",
  },
  // ASTRO
  "cw20:terra1nsuqsk6kh58ulczatwev87ttq2z6r3pusulg9r24mfj2fvtzd4uq3exn26": {
    contract:
      "terra1nsuqsk6kh58ulczatwev87ttq2z6r3pusulg9r24mfj2fvtzd4uq3exn26",
    router: "terra1d90p5lacfxnqgjxjupu234lxnxyeu8fdeef4d0e0nqy3p30r7gss4myn9x",
    channel: "channel-34",
  },
  // xASTRO
  "cw20:terra1x62mjnme4y0rdnag3r8rfgjuutsqlkkyuh4ndgex0wl3wue25uksau39q8": {
    contract:
      "terra1x62mjnme4y0rdnag3r8rfgjuutsqlkkyuh4ndgex0wl3wue25uksau39q8",
    router: "terra1d90p5lacfxnqgjxjupu234lxnxyeu8fdeef4d0e0nqy3p30r7gss4myn9x",
    channel: "channel-34",
  },
  // ampLUNA
  "cw20:terra1ecgazyd0waaj3g7l9cmy5gulhxkps2gmxu9ghducvuypjq68mq2s5lvsct": {
    contract:
      "terra1ecgazyd0waaj3g7l9cmy5gulhxkps2gmxu9ghducvuypjq68mq2s5lvsct",
    router: "terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au",
    channel: "channel-28",
  },

  // ROAR
  "cw20:terra1lxx40s29qvkrcj8fsa3yzyehy7w50umdvvnls2r830rys6lu2zns63eelv": {
    contract:
      "terra1lxx40s29qvkrcj8fsa3yzyehy7w50umdvvnls2r830rys6lu2zns63eelv",
    router: "terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au",
    channel: "channel-28",
  },

  // SAYVE
  "cw20:terra1xp9hrhthzddnl7j5du83gqqr4wmdjm5t0guzg9jp6jwrtpukwfjsjgy4f3": {
    contract:
      "terra1xp9hrhthzddnl7j5du83gqqr4wmdjm5t0guzg9jp6jwrtpukwfjsjgy4f3",
    router: "terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au",
    channel: "channel-28",
  },

  // CUB
  "cw20:terra1lalvk0r6nhruel7fvzdppk3tup3mh5j4d4eadrqzfhle4zrf52as58hh9t": {
    contract:
      "terra1lalvk0r6nhruel7fvzdppk3tup3mh5j4d4eadrqzfhle4zrf52as58hh9t",
    router: "terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au",
    channel: "channel-28",
  },

  // BLUE
  "cw20:terra1gwrz9xzhqsygyr5asrgyq3pu0ewpn00mv2zenu86yvx2nlwpe8lqppv584": {
    contract:
      "terra1gwrz9xzhqsygyr5asrgyq3pu0ewpn00mv2zenu86yvx2nlwpe8lqppv584",
    router: "terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au",
    channel: "channel-28",
  },

  // bLUNA
  "cw20:terra17aj4ty4sz4yhgm08na8drc0v03v2jwr3waxcqrwhajj729zhl7zqnpc0ml": {
    contract:
      "terra17aj4ty4sz4yhgm08na8drc0v03v2jwr3waxcqrwhajj729zhl7zqnpc0ml",
    router: "terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au",
    channel: "channel-28",
  },

  // SHD
  // "cw20:secret1qfql357amn448duf5gvp9gr48sxx9tsnhupu3d": {
  //   contract: "secret1qfql357amn448duf5gvp9gr48sxx9tsnhupu3d",
  //   router: "secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4",
  //   channel: "channel-46",
  // },

  // dUST
  "cw20:terra17gck626vgax9jpe6utm7dhx4vdzawfkt0jhru03l7a3dzu98wedsfad4sz": {
    contract:
      "terra17gck626vgax9jpe6utm7dhx4vdzawfkt0jhru03l7a3dzu98wedsfad4sz",
    router: "terra1d90p5lacfxnqgjxjupu234lxnxyeu8fdeef4d0e0nqy3p30r7gss4myn9x",
    channel: "channel-34",
  },

  // KUJIC
  "cw20:terra1xfsdgcemqwxp4hhnyk4rle6wr22sseq7j07dnn": {
    contract: "terra1xfsdgcemqwxp4hhnyk4rle6wr22sseq7j07dnn",
    router: "terra1lwdvjtl5lecxcyfl7hc362gczqh03msgcwlh76xa0fcu0usf7ejskkfulk",
    channel: "",
  },
  // SKUJIC
  "cw20:terra188w26t95tf4dz77raftme8p75rggatxjxfeknw": {
    contract: "terra188w26t95tf4dz77raftme8p75rggatxjxfeknw",
    router: "terra1lwdvjtl5lecxcyfl7hc362gczqh03msgcwlh76xa0fcu0usf7ejskkfulk",
    channel: "",
  },

  // Bitmos
  "cw20:terra1sxe8u2hjczlekwfkcq0rs28egt38pg3wqzfx4zcrese4fnvzzupsk9gjkq": {
    contract:
      "terra1sxe8u2hjczlekwfkcq0rs28egt38pg3wqzfx4zcrese4fnvzzupsk9gjkq",
    router: "terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au",
    channel: "channel-28",
  },
};

export class Denom {
  public symbol: string;
  public decimals = 6;
  public trace?: { path: string; base_denom: string };
  public ics20?: {
    contract: string;
    router: string;
    channel: string;
  };

  constructor(public reference: string, public underlying?: Denom[]) {
    this.symbol = "";
    if (this.reference.startsWith("ibc/")) {
      this.trace = (ibc as Record<string, any>)[this.reference];
      if (this.trace?.path === "transfer/channel-9") {
        this.symbol = "axl";
      }
    }

    this.symbol += baseDenomToSymbol(this.reference);
    if (this.trace?.base_denom.startsWith("gamm")) {
      this.symbol = "Osmosis LP ";
    }

    if (this.underlying) {
      this.symbol = `${this.symbol}${this.underlying
        .map((d) => d.symbol)
        .join("-")}`;
    }

    this.decimals = 6;

    // wormhole
    if (this.trace?.path === `transfer/channel-113`) {
      this.decimals =
        wormholeAssets
          .find((a) => a.base === this.trace?.base_denom)
          ?.denom_units.at(-1)?.exponent || this.decimals;
    }

    if ((this.trace?.base_denom || this.reference).startsWith("erc20/"))
      this.decimals = 18;
    if ((this.trace?.base_denom || this.reference).startsWith("gravity"))
      this.decimals = 18;
    if ((this.trace?.base_denom || this.reference).endsWith("wei"))
      this.decimals = 18;
    if ((this.trace?.base_denom || this.reference).endsWith("-satoshi"))
      this.decimals = 8;
    if (this.symbol === "gPAXG") this.decimals = 18;
    if (this.symbol === "EVMOS") this.decimals = 18;
    if (this.symbol === "wAVAX") this.decimals = 18;
    if (this.symbol === "wETH") this.decimals = 18;
    if (this.symbol === "CRO") this.decimals = 8;
    if (this.symbol === "EL1") this.decimals = 18;
    if (this.symbol === "nBTC") this.decimals = 14;
    if (this.symbol === "BOOT") this.decimals = 0;
    if (this.symbol === "DOT") this.decimals = 10;
    if (this.symbol === "SHD") this.decimals = 8;
    if (this.symbol === "SHD,legacy") this.decimals = 8;
    if (this.symbol === "INJ") this.decimals = 18;
    if (this.symbol === "gINJ") this.decimals = 18;
    if (this.symbol === "stINJ") this.decimals = 18;
    if (this.symbol === "CNTO") this.decimals = 18;
    if (this.symbol === "wTAO") this.decimals = 9;
    if (this.symbol === "ACRE") this.decimals = 18;
    if (this.symbol === "PLQ") this.decimals = 18;
    if (this.symbol === "SWTH") this.decimals = 8;
    if (this.symbol === "gTST") this.decimals = 18;
    if (this.symbol === "ARB") this.decimals = 18;
    if (this.symbol === "FET") this.decimals = 18;
    if (this.symbol === "HANS") this.decimals = 18;
    if (this.symbol === "ORAI") this.decimals = 18;
    if (this.symbol === "wEVMOS") this.decimals = 18;
    if (this.symbol === "wDOGE") this.decimals = 18;
    if (this.symbol === "erowan") this.decimals = 18;
    if (this.symbol === "wLUNC") this.decimals = 18;
    if (this.symbol === "SHIB") this.decimals = 18;
    if (this.symbol === "MOBX") this.decimals = 9;
    if (this.symbol === "ARCH") this.decimals = 18;
    if (this.symbol === "RIO") this.decimals = 18;
    if (this.symbol === "DYDX") this.decimals = 18;
    if (this.symbol === "DYM") this.decimals = 18;
    if (this.symbol === "CHEQ") this.decimals = 9;
    if (
      this.underlying?.length === 2 &&
      this.underlying[0].decimals === this.underlying[1].decimals
    ) {
      this.decimals = this.underlying[0].decimals;
    }
    // OKX USDT
    if (
      this.reference ===
      "ibc/EA20485E9BEBF77BB3638A79F60A0E1D0A12A6289972F30E475529C80BF5C960"
    )
      this.decimals = 18;

    // Handle ghost underlying
    if (this.underlying?.length === 1 && this.decimals === 6)
      this.decimals = this.underlying[0].decimals;

    this.ics20 = ics20[this.reference];
  }

  public static from(string: string): Denom {
    const bowUnderlying = Object.values(contracts)
      .flatMap((x) => x.bow)
      .find((x) => `factory/${x.address}/ulp` === string)
      ?.config.denoms?.map(Denom.from);

    let osmosisUnderlying;
    if (string.startsWith("ibc/")) {
      const trace = (ibc as Record<string, any>)[string];
      osmosisUnderlying = osmosis
        .find((x) => `gamm/pool/${x.id}` === trace?.base_denom)
        ?.assets?.map((x) => Denom.from(x.token.denom));
    }

    const factoryAddress =
      string.startsWith("factory/") && string.split("/")[1];
    const ghostVault = ghostVaults.find((f) => f.address === factoryAddress);

    return new Denom(
      string,
      bowUnderlying ||
        osmosisUnderlying ||
        (ghostVault ? [Denom.from(ghostVault.config.denom)] : undefined)
    );
  }

  /*
  Method for creating a denom that hasn't yet been IBC'd and so doesn't have an 
  entry in tokens.json
  */
  public static from_path(port: string, channel: string, denom: string): Denom {
    let d = new Denom(ibcDenom(port, channel, denom));
    d.trace = { base_denom: denom, path: `${port}/${channel}` };
    return d;
  }

  public eq = (other: Denom): boolean => this.reference == other.reference;
  public compare = (other: Denom): number =>
    this.symbol
      .replace(/[a-z]+/, "")
      .localeCompare(other.symbol.replace(/[a-z]+/, ""));

  public normalizedReference = (): string => {
    if (this.reference.startsWith("ibc/")) {
      return `ibc/${this.reference.replace("ibc/", "").toLocaleUpperCase()}`;
    }
    return this.reference;
  };
}

const ibcDenom = (port: string, channel: string, denom: string): string =>
  "ibc/" +
  Buffer.from(sha256(Buffer.from(`${port}/${channel}/${denom}`)))
    .toString("hex")
    .toUpperCase();

export const USK_TESTNET = Denom.from(
  "factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk"
);

export const USK = Denom.from(
  "factory/kujira1qk00h5atutpsv900x202pxx42npjr9thg58dnqpa72f2p7m2luase444a7/uusk"
);

export const KUJI = Denom.from("ukuji");
export const DEMO = Denom.from(
  "factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo"
);

export const ATOM = Denom.from(
  "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2"
);

export const axlUSDC = Denom.from(
  "ibc/295548A78785A1007F232DE286149A6FF512F180AF5657780FC89C009E2C348F"
);

export const nobleUSDC = Denom.from_path("transfer", "channel-62", "uusdc");

export const axlUSDT = Denom.from(
  "ibc/F2331645B9683116188EF36FC04A809C28BD36B54555E8705A37146D0182F045"
);
export const axlwETH = Denom.from(
  "ibc/1B38805B1C75352B28169284F96DF56BDEBD9E8FAC005BDCC8CF0378C82AA8E7"
);
export const axlwMATIC = Denom.from(
  "ibc/A64467480BBE4CCFC3CF7E25AD1446AA9BDBD4F5BCB9EF6038B83D6964C784E6"
);
export const axlwBNB = Denom.from(
  "ibc/DADB399E742FCEE71853E98225D13E44E90292852CD0033DF5CABAB96F80B833"
);
export const axlwAVAX = Denom.from(
  "ibc/004EBF085BBED1029326D56BE8A2E67C08CECE670A94AC1947DF413EF5130EB2"
);
export const axlwGLMR = Denom.from(
  "ibc/C8D63703F5805CE6A2B20555139CF6ED9CDFA870389648EB08D688B94B0AE2C1"
);
export const axlwFTM = Denom.from(
  "ibc/E67ADA2204A941CD4743E70771BA08E24885E1ADD6FD140CE1F9E0FEBB68C6B2"
);

export const factor = ([base, quote]: [Denom, Denom]): number => {
  return 10 ** (base.decimals - quote.decimals);
};
