import ibc from "./resources/tokens.json";

const labels: Record<string, string> = {
  wei: "OKT",
  ugraviton: "GRAV",
  usdt: "USDT",
  usat: "NBTC",
  uausdc: "axlUSDC",
  uusdc: "axlUSDC",
  uausdt: "axlUSDT",
  uusdt: "axlUSDT",
  atevmos: "EVMOS",
  "wavax-wei": "wAVAX",
  basecro: "CRO",
  "weth-wei": "wETH",
  "link-wei": "LINK",
  "dot-planck": "DOT",
  aevmos: "EVMOS",
  demo: "DEMO",
  local: "LOCAL",
  swth: "SWTH",
  aacre: "ACRE",
  aplanq: "PLANQ",
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
  gravity0x45804880De22913dAFE09f4980848ECE6EcbAf78: "gPAXG",
  gravity0xfB5c6815cA3AC72Ce9F5006869AE67f18bF77006: "gPSTAKE",
  gravity0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2: "gwETH",
  gravity0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48: "gUSDC",
  gravity0xdAC17F958D2ee523a2206206994597C13D831ec7: "gUSDT",
  gravity0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599: "gwBTC",
  gravity0x6B175474E89094C44Da98b954EedeAC495271d0F: "gDAI",
  gravity0x77E06c9eCCf2E797fd462A92B6D7642EF85b0A44: "wTAO",
  "erc20/0xAE6D3334989a22A65228732446731438672418F2": "CNTO",
  "frax-wei": "FRAX",
  inj: "INJ",
  "dai-wei": "DAI",
  "wbtc-satoshi": "wBTC",
  "wbnb-wei": "wBNB",
  "wftm-wei": "wFTM",
  "wmatic-wei": "wMATIC",
  "wglmr-wei": "wGLMR",
  "cw20:juno1qsrercqegvs4ye0yqg93knv73ye5dc3prqwd6jcdcuj8ggp6w0us66deup":
    "LOOP",
  "cw20:juno1cltgm8v842gu54srmejewghnd6uqa26lzkpa635wzra9m9xuudkqa2gtcz":
    "FURY",
  "cw20:juno1hnftys64ectjfynm6qjk9my8jd3f6l9dq9utcd3dy8ehwrsx9q4q7n9uxt":
    "AQUA",
  "cw20:juno168ctmpyppk90d34p3jjy658zf5a5l3w8wk35wht6ccqj4mr0yv8s4j5awr":
    "NETA",
  "cw20:terra1ecgazyd0waaj3g7l9cmy5gulhxkps2gmxu9ghducvuypjq68mq2s5lvsct":
    "ampLUNA",
  "cw20:terra1xzkel96e5e8vfmqw7valzdzzv9hqasfyslclvnmvxdejvpda3xwsskxzus":
    "whLOCAL",
  "cw20:terra1nsuqsk6kh58ulczatwev87ttq2z6r3pusulg9r24mfj2fvtzd4uq3exn26":
    "ASTRO",

  "cw20:terra1x62mjnme4y0rdnag3r8rfgjuutsqlkkyuh4ndgex0wl3wue25uksau39q8":
    "xASTRO",
  "cw20:secret1qfql357amn448duf5gvp9gr48sxx9tsnhupu3d": "SHD",
  "cw20:terra17gck626vgax9jpe6utm7dhx4vdzawfkt0jhru03l7a3dzu98wedsfad4sz":
    "dUST",

  terra18zqcnl83z98tf6lly37gghm7238k7lh79u4z9a: "bATOM",
  terra1dzhzukyezv0etz22ud940z7adyv7xgcjkahuun: "bETH",
  terra1kc87mu460fwkqte29rquh4hc20m54fxwtsx7gp: "bLUNA",
  terra1c00vskhyzdv0z63z2tyetzx2qma67n2z3vzyn0: "bSOL",
  terra1z3e2e4jpk4n0xzzwlkgcfvc95pc5ldq0xcny58: "sAVAX",
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

  return baseDenom.startsWith("u")
    ? baseDenom.replace(/^u/, "").toUpperCase()
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

  // SHD
  "cw20:secret1qfql357amn448duf5gvp9gr48sxx9tsnhupu3d": {
    contract: "secret1qfql357amn448duf5gvp9gr48sxx9tsnhupu3d",
    router: "secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4",
    channel: "channel-46",
  },

  // dUST
  "cw20:terra17gck626vgax9jpe6utm7dhx4vdzawfkt0jhru03l7a3dzu98wedsfad4sz": {
    contract:
      "terra17gck626vgax9jpe6utm7dhx4vdzawfkt0jhru03l7a3dzu98wedsfad4sz",
    router: "terra1d90p5lacfxnqgjxjupu234lxnxyeu8fdeef4d0e0nqy3p30r7gss4myn9x",
    channel: "channel-34",
  },
};

const UNDERLYING: Record<string, string[]> = {
  "factory/kujira1a9fha3f02xyzvmanxxl4p3djrnp40ewwkrfkm4gr0exlv028ze3slhv4fn/ulp":
    [
      "factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo",
      "factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk",
    ],
  "factory/kujira19kxd9sqk09zlzqfykk7tzyf70hl009hkekufq8q0ud90ejtqvvxs8xg5cq/ulp":
    ["ukuji", "factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo"],
  "factory/kujira1g9xcvvh48jlckgzw8ajl6dkvhsuqgsx2g8u3v0a6fx69h7f8hffqaqu36t/ulp":
    [
      "ukuji",
      "factory/kujira1qk00h5atutpsv900x202pxx42npjr9thg58dnqpa72f2p7m2luase444a7/uusk",
    ],
  "factory/kujira1sx99fxy4lqx0nv3ys86tkdrch82qygxyec5c8dxsk9raz4at5zpq72gypx/ulp":
    [
      "ukuji",
      "ibc/295548A78785A1007F232DE286149A6FF512F180AF5657780FC89C009E2C348F",
    ],
  "factory/kujira13y8hs83sk0la7na2w5g5nzrnjjpnkvmd7e87yd35g8dcph7dn0ksenay2a/ulp":
    [
      "ukuji",
      "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2",
    ],
  "factory/kujira12506pfme6layua70svszn2xza0pt9mnqu2u24lszrdyywmpvnw5qfz8sfq/ulp":
    [
      "ibc/295548A78785A1007F232DE286149A6FF512F180AF5657780FC89C009E2C348F",
      "factory/kujira1qk00h5atutpsv900x202pxx42npjr9thg58dnqpa72f2p7m2luase444a7/uusk",
    ],
  "factory/kujira1yncutssgh2vj9scaymtteg949hwcft07c6qmgarxnaf04yesq3jsn6g2uv/ulp":
    [
      "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2",
      "factory/kujira1qk00h5atutpsv900x202pxx42npjr9thg58dnqpa72f2p7m2luase444a7/uusk",
    ],
  "factory/kujira14wv3whn3v9sgf8r0dm7a46v7m7pukhs87x73e0ude3ktuzztfj9qxndumz/ulp":
    [
      "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2",
      "ibc/295548A78785A1007F232DE286149A6FF512F180AF5657780FC89C009E2C348F",
    ],
  "factory/kujira1uchf9h2suq6a9a0ksyp5rh9536uqxydswm37sswa888kxxx2kqgqsx3n6h/ulp":
    [
      "ibc/B37E4D9FB5B30F3E1E20A4B2DE2A005E584C5C822C44527546556AE2470B4539",
      "factory/kujira1qk00h5atutpsv900x202pxx42npjr9thg58dnqpa72f2p7m2luase444a7/uusk",
    ],
  "factory/kujira1337sclk2nc6srd77w4v8qule0nv9r70mrt56r2j8zak3rlg6xc0sl27tar/ulp":
    [
      "ibc/B37E4D9FB5B30F3E1E20A4B2DE2A005E584C5C822C44527546556AE2470B4539",
      "ibc/295548A78785A1007F232DE286149A6FF512F180AF5657780FC89C009E2C348F",
    ],
  "factory/kujira1hgq0fgqnv0dk2r474pfax3va86wfh9ffgdhx6q6jls00g7nv8vmsx2jnjt/ulp":
    [
      "ibc/53796B3762678CD80784A7DD426EB45B89C024BE3D45224CC83FDE3DED7DA0A1",
      "factory/kujira1qk00h5atutpsv900x202pxx42npjr9thg58dnqpa72f2p7m2luase444a7/uusk",
    ],
  "factory/kujira1ngqlypl5h0mkgxmk4why878eq4y5yh6yhdtrw8hdxfz202xluzrs097qn5/ulp":
    [
      "ibc/1B38805B1C75352B28169284F96DF56BDEBD9E8FAC005BDCC8CF0378C82AA8E7",
      "ibc/295548A78785A1007F232DE286149A6FF512F180AF5657780FC89C009E2C348F",
    ],
  "factory/kujira1xwvvjq5w0887v2vz4e83kcu38s0jq8q8lqa3z5hxm295q7y4uejqp24la7/ulp":
    [
      "ibc/1B38805B1C75352B28169284F96DF56BDEBD9E8FAC005BDCC8CF0378C82AA8E7",
      "factory/kujira1qk00h5atutpsv900x202pxx42npjr9thg58dnqpa72f2p7m2luase444a7/uusk",
    ],

  "factory/kujira1n648rfqqvjxm6c7zgfnfqay85rkapgg0z7da9pnmjazz5m5d7l0qxdtq90/ulp":
    [
      "ibc/4F393C3FCA4190C0A6756CE7F6D897D5D1BE57D6CCB80D0BC87393566A7B6602",
      "factory/kujira1qk00h5atutpsv900x202pxx42npjr9thg58dnqpa72f2p7m2luase444a7/uusk",
    ],

  "factory/kujira1d4h7hnnn5na2zy9lh7k4atjscj9sxtpj7avnyelykgd22e5kyh2qpnsd5n/ulp":
    [
      "ibc/DADB399E742FCEE71853E98225D13E44E90292852CD0033DF5CABAB96F80B833",
      "ibc/295548A78785A1007F232DE286149A6FF512F180AF5657780FC89C009E2C348F",
    ],
  "factory/kujira196yp2agkqa4fqh0asg4lhn53t7fuw5fd8p3avktvy9j0qxf5zlmsz25v0n/ulp":
    [
      "ibc/DADB399E742FCEE71853E98225D13E44E90292852CD0033DF5CABAB96F80B833",
      "factory/kujira1qk00h5atutpsv900x202pxx42npjr9thg58dnqpa72f2p7m2luase444a7/uusk",
    ],

  "factory/kujira10sx8wxzev270zrmpq6z3asgpurdjfh9f6rwtgt55mar9m6gtw40s9nfxcy/ulp":
    [
      "ibc/A358D7F19237777AF6D8AD0E0F53268F8B18AE8A53ED318095C14D6D7F3B2DB5",
      "factory/kujira1qk00h5atutpsv900x202pxx42npjr9thg58dnqpa72f2p7m2luase444a7/uusk",
    ],

  "factory/kujira14qpyduhanevay6rhk3z308nwjxa83a8x37kmn5rct5x6kszj3gmqpuq7m6/ulp":
    [
      "ibc/F33B313325B1C99B646B1B786F1EA621E3794D787B90C204C30FE1D4D45970AE",
      "factory/kujira1qk00h5atutpsv900x202pxx42npjr9thg58dnqpa72f2p7m2luase444a7/uusk",
    ],
  "factory/kujira1kgpsdn4gh24fpe5n8k4tvs5wn5s8w6825ewexkk7j2hq4467hf5s7qc23l/ulp":
    [
      "ibc/640E1C3E28FD45F611971DF891AE3DC90C825DF759DF8FAA8F33F7F72B35AD56",
      "factory/kujira1qk00h5atutpsv900x202pxx42npjr9thg58dnqpa72f2p7m2luase444a7/uusk",
    ],
  "factory/kujira1kupjzlp96l4ypt0fdpse8slmkdkkz3g0t5evy033va0gvtw867sq0cm6q0/ulp":
    [
      "ibc/D36D2BBE441D3605EEF340EAFAC57D669880597073050A2650B1468F1634A5F5",
      "factory/kujira1qk00h5atutpsv900x202pxx42npjr9thg58dnqpa72f2p7m2luase444a7/uusk",
    ],
  "factory/kujira1rpqhczdrgaa6w0h9fukdcppme3074zcay8ge8lazwefdawp03vwsnpc7ya/ulp":
    [
      "ibc/C01154C2547F4CB10A985EA78E7CD4BA891C1504360703A37E1D7043F06B5E1F",
      "factory/kujira1qk00h5atutpsv900x202pxx42npjr9thg58dnqpa72f2p7m2luase444a7/uusk",
    ],
  "factory/kujira1zr5ywldgav8tnlplw9wnu7evp66xvp3ttymdg2jnfgaktcw9lqxs8trkpc/ulp":
    [
      "ibc/BBC45F1B65B6D3C11C3C56A9428D38C3A8D03944473791C52DFB7CD3F8342CBC",
      "factory/kujira1qk00h5atutpsv900x202pxx42npjr9thg58dnqpa72f2p7m2luase444a7/uusk",
    ],
  "factory/kujira14sar6zdyljp7t9u5zwcwcjrw98kcmqq8685sz7ezfknvauqg23sqrmr6kg/ulp":
    [
      "ibc/EFF323CC632EC4F747C61BCE238A758EFDB7699C3226565F7C20DA06509D59A5",
      "factory/kujira1qk00h5atutpsv900x202pxx42npjr9thg58dnqpa72f2p7m2luase444a7/uusk",
    ],
  "factory/kujira1y0v5znl0ucc6nsdalr9xeg0r3zyw44yn0uyd8tsgc8gl4j8stjcs9vmmr7/ulp":
    [
      "ibc/DA59C009A0B3B95E0549E6BF7B075C8239285989FF457A8EDDBB56F10B2A6986",
      "factory/kujira1qk00h5atutpsv900x202pxx42npjr9thg58dnqpa72f2p7m2luase444a7/uusk",
    ],
  "factory/kujira1hrvxn66u46r47zxsd45jecvuyr3munl2d5xle9gnltpge3dqh7sqd64znl/ulp":
    [
      "ibc/47BD209179859CDE4A2806763D7189B6E6FE13A17880FE2B42DE1E6C1E329E23",
      "factory/kujira1qk00h5atutpsv900x202pxx42npjr9thg58dnqpa72f2p7m2luase444a7/uusk",
    ],
  "factory/kujira1r0sn3fcz2lda7hvs37rchnk4pq6jt5hjeqw7dcc765v39rhmv0tqj59760/ulp":
    [
      "ibc/21038E447A2D4A1183628C0EC366FE79C2E0B0BD91F9A85E6C906CD911FD676E",
      "factory/kujira1qk00h5atutpsv900x202pxx42npjr9thg58dnqpa72f2p7m2luase444a7/uusk",
    ],
  "factory/kujira1hmy36p0a87fsv36l8vdmy5uaka69j392s07qgnc5aum9cg9vj88qq8tfgh/ulp":
    [
      "ibc/239BFF83852F67DF5243DB89F339FF7FDBF858437F961CAB6DA5B5ADEFB2BC07",
      "factory/kujira1qk00h5atutpsv900x202pxx42npjr9thg58dnqpa72f2p7m2luase444a7/uusk",
    ],
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
    if (this.reference.startsWith("ibc/")) {
      this.trace = (ibc as Record<string, any>)[this.reference];
    }

    this.symbol = baseDenomToSymbol(this.reference);

    if (this.underlying) {
      this.symbol = `${this.symbol} ${this.underlying
        .map((d) => d.symbol)
        .join("-")}`;
    }

    this.decimals = 6;
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
    if (this.symbol === "NBTC") this.decimals = 14;
    if (this.symbol === "BOOT") this.decimals = 0;
    if (this.symbol === "DOT") this.decimals = 10;
    if (this.symbol === "SHD") this.decimals = 8;
    if (this.symbol === "INJ") this.decimals = 18;
    if (this.symbol === "CNTO") this.decimals = 18;
    if (this.symbol === "wTAO") this.decimals = 9;
    if (this.symbol === "ACRE") this.decimals = 18;
    if (this.symbol === "PLANQ") this.decimals = 18;
    if (this.symbol === "SWTH") this.decimals = 8;
    // OKX USDT
    if (
      this.reference ===
      "ibc/EA20485E9BEBF77BB3638A79F60A0E1D0A12A6289972F30E475529C80BF5C960"
    )
      this.decimals = 18;

    this.ics20 = ics20[this.reference];
  }

  public static from(string: string): Denom {
    return new Denom(
      string,
      UNDERLYING[string] && UNDERLYING[string].map((x) => new Denom(x))
    );
  }

  public eq = (other: Denom): boolean => this.reference == other.reference;
}

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

export const USDC = Denom.from(
  "ibc/295548A78785A1007F232DE286149A6FF512F180AF5657780FC89C009E2C348F"
);

export const USDT = Denom.from(
  "ibc/F2331645B9683116188EF36FC04A809C28BD36B54555E8705A37146D0182F045"
);
export const wETH = Denom.from(
  "ibc/1B38805B1C75352B28169284F96DF56BDEBD9E8FAC005BDCC8CF0378C82AA8E7"
);
export const wMATIC = Denom.from(
  "ibc/A64467480BBE4CCFC3CF7E25AD1446AA9BDBD4F5BCB9EF6038B83D6964C784E6"
);
export const wBNB = Denom.from(
  "ibc/DADB399E742FCEE71853E98225D13E44E90292852CD0033DF5CABAB96F80B833"
);
export const wAVAX = Denom.from(
  "ibc/004EBF085BBED1029326D56BE8A2E67C08CECE670A94AC1947DF413EF5130EB2"
);
export const wGLMR = Denom.from(
  "ibc/C8D63703F5805CE6A2B20555139CF6ED9CDFA870389648EB08D688B94B0AE2C1"
);
export const wFTM = Denom.from(
  "ibc/E67ADA2204A941CD4743E70771BA08E24885E1ADD6FD140CE1F9E0FEBB68C6B2"
);

export const factor = ([base, quote]: [Denom, Denom]): number => {
  return 10 ** (base.decimals - quote.decimals);
};
