import { ATOM, Denom, KUJI, USDC, USDT, USK, USK_TESTNET } from "./denom";
import { Precision } from "./fin";
import { MAINNET, NETWORK, TESTNET } from "./network";
import { Market, MARKETS_HARPOON, MARKETS_KAIYO } from "./usk";

export type Margin = {
  address: string;
  fin_address: string;
  market: Market;
};

export type Pair = {
  address: string;
  chainID: NETWORK;
  denoms: [Denom, Denom];
  precision: Precision;
  decimalDelta: number;
  margin?: Margin;
  multiswap: boolean;
  pool?: string;
};

export const PAIRS: Pair[] = [
  {
    address:
      "kujira14hj2tavq8fpesdwxxcu44rty3hh90vhujrvcmstl4zr3txmfvw9sl4e867",
    chainID: MAINNET,
    denoms: [KUJI, USDC],
    precision: { decimal_places: 3 },
    decimalDelta: 0,
    multiswap: true,
  },

  {
    address:
      "kujira18v47nqmhvejx3vc498pantg8vr435xa0rt6x0m6kzhp6yuqmcp8s4x8j2c",
    chainID: MAINNET,
    denoms: [KUJI, ATOM],
    precision: { decimal_places: 4 },
    decimalDelta: 0,
    multiswap: true,
  },
  {
    address:
      "kujira193dzcmy7lwuj4eda3zpwwt9ejal00xva0vawcvhgsyyp5cfh6jyq66wfrf",
    chainID: MAINNET,
    denoms: [KUJI, USK],
    precision: { decimal_places: 3 },
    decimalDelta: 0,
    multiswap: true,
  },
  {
    address:
      "kujira1rwx6w02alc4kaz7xpyg3rlxpjl4g63x5jq292mkxgg65zqpn5llq202vh5",
    chainID: MAINNET,
    denoms: [USDC, USK],
    precision: { decimal_places: 4 },
    decimalDelta: 0,
    multiswap: true,
  },
  {
    address:
      "kujira1xut80d09q0tgtch8p0z4k5f88d3uvt8cvtzm5h3tu3tsy4jk9xlscem692",
    chainID: MAINNET,
    denoms: [USDT, USDC],
    precision: { decimal_places: 4 },
    decimalDelta: 0,
    multiswap: true,
  },

  {
    address:
      "kujira1yum4v0v5l92jkxn8xpn9mjg7wuldk784ctg424ue8gqvdp88qzlqr2qp2j",
    chainID: MAINNET,
    denoms: [ATOM, USK],
    precision: { decimal_places: 3 },
    decimalDelta: 0,
    multiswap: true,
    margin: {
      address:
        "kujira1m0z0kk0qqug74n9u9ul23e28x5fszr628h20xwt6jywjpp64xn4qkxmjq3",
      fin_address:
        "kujira1yum4v0v5l92jkxn8xpn9mjg7wuldk784ctg424ue8gqvdp88qzlqr2qp2j",
      market:
        MARKETS_KAIYO.kujira1ecgazyd0waaj3g7l9cmy5gulhxkps2gmxu9ghducvuypjq68mq2smfdslf,
    },
  },

  {
    address:
      "kujira13l8gwanf37938wgfv5yktmfzxjwaj4ysn4gl96vj78xcqqxlcrgssfl797",
    chainID: MAINNET,
    denoms: [
      Denom.from(
        "ibc/D36D2BBE441D3605EEF340EAFAC57D669880597073050A2650B1468F1634A5F5"
      ),
      USK,
    ],
    precision: { decimal_places: 4 },
    decimalDelta: 0,
    multiswap: false,
  },

  {
    address:
      "kujira1dtaqwlmzlk3jku5un6h6rfunttmwsqnfz7evvdf4pwr0wypsl68q49aaud",
    chainID: MAINNET,
    denoms: [
      Denom.from(
        "ibc/C01154C2547F4CB10A985EA78E7CD4BA891C1504360703A37E1D7043F06B5E1F"
      ),
      USK,
    ],
    precision: { decimal_places: 4 },
    decimalDelta: 0,
    multiswap: true,
  },

  {
    address:
      "kujira10j648ftg2g8p5vhgsu5kzfh6d907vpkrn0a5l3qch479eqy2qssqm905c4",
    chainID: MAINNET,
    denoms: [
      Denom.from(
        "ibc/BBC45F1B65B6D3C11C3C56A9428D38C3A8D03944473791C52DFB7CD3F8342CBC"
      ),
      USK,
    ],
    precision: { decimal_places: 4 },
    decimalDelta: 2,
    multiswap: false,
  },

  {
    address:
      "kujira1jlzw6xal0n2c580g3wxs09tjhlzdht9y8dgszq3tupf8fhl7xjus7ep7ap",
    chainID: MAINNET,
    denoms: [
      Denom.from(
        "ibc/B37E4D9FB5B30F3E1E20A4B2DE2A005E584C5C822C44527546556AE2470B4539"
      ),
      USK,
    ],
    precision: { decimal_places: 3 },
    decimalDelta: 4,
    multiswap: false,
  },

  {
    address:
      "kujira1v8lkqws3gd6npr0rdk9ch54amh9guas86r4u62jq27hee88lryfsxwrvlk",
    chainID: MAINNET,
    denoms: [
      Denom.from(
        "ibc/53796B3762678CD80784A7DD426EB45B89C024BE3D45224CC83FDE3DED7DA0A1"
      ),
      USK,
    ],
    precision: { decimal_places: 4 },
    decimalDelta: 0,
    multiswap: false,
  },

  {
    address:
      "kujira1xr3rq8yvd7qplsw5yx90ftsr2zdhg4e9z60h5duusgxpv72hud3sl8nek6",
    chainID: MAINNET,
    denoms: [ATOM, USDC],
    precision: { decimal_places: 3 },
    decimalDelta: 0,
    multiswap: true,
  },

  {
    address:
      "kujira1hulx7cgvpfcvg83wk5h96sedqgn72n026w6nl47uht554xhvj9nsra5j5u",
    chainID: MAINNET,
    denoms: [
      ATOM,
      Denom.from(
        "ibc/47BD209179859CDE4A2806763D7189B6E6FE13A17880FE2B42DE1E6C1E329E23"
      ),
    ],
    precision: { decimal_places: 3 },
    decimalDelta: 0,
    multiswap: true,
  },

  {
    address:
      "kujira16y344e8ryydmeu2g8yyfznq79j7jfnar4p59ngpvaazcj83jzsms6tju67",
    chainID: MAINNET,
    denoms: [
      Denom.from(
        "ibc/3607EB5B5E64DD1C0E12E07F077FF470D5BC4706AFCBC98FE1BA960E5AE4CE07"
      ),
      USDC,
    ],
    precision: { decimal_places: 3 },
    decimalDelta: 0,
    multiswap: true,
  },

  {
    address:
      "kujira182nff4ttmvshn6yjlqj5czapfcav9434l2qzz8aahf5pxnyd33tsz30aw6",
    chainID: MAINNET,
    denoms: [
      Denom.from(
        "ibc/F3AA7EF362EC5E791FE78A0F4CCC69FEE1F9A7485EB1A8CAB3F6601C00522F10"
      ),
      USDC,
    ],
    precision: { decimal_places: 3 },
    decimalDelta: 12,
    multiswap: false,
  },

  {
    address:
      "kujira1z7asfxkwv0t863rllul570eh5pf2zk07k3d86ag4vtghaue37l5s9epdvn",
    chainID: MAINNET,
    denoms: [
      Denom.from(
        "ibc/EFF323CC632EC4F747C61BCE238A758EFDB7699C3226565F7C20DA06509D59A5"
      ),
      USDC,
    ],
    precision: { decimal_places: 3 },
    decimalDelta: 0,
    multiswap: true,
  },
  {
    address:
      "kujira10fqy0npt7djm8lg847v9rqlng88kqfdvl8tyt4ge204wf52sy68qwmj07l",
    chainID: MAINNET,
    denoms: [
      Denom.from(
        "ibc/8318B7E036E50C0CF799848F23ED84778AAA8749D9C0BCD4FF3F4AF73C53387F"
      ),
      USDC,
    ],
    precision: { decimal_places: 4 },
    decimalDelta: 0,
    multiswap: true,
  },
  {
    address:
      "kujira1yg8930mj8pk288lmkjex0qz85mj8wgtns5uzwyn2hs25pwdnw42skp0kur",
    chainID: MAINNET,
    denoms: [
      Denom.from(
        "ibc/DA59C009A0B3B95E0549E6BF7B075C8239285989FF457A8EDDBB56F10B2A6986"
      ),
      USDC,
    ],
    precision: { decimal_places: 3 },
    decimalDelta: 0,
    multiswap: true,
  },

  {
    address:
      "kujira1aakfpghcanxtc45gpqlx8j3rq0zcpyf49qmhm9mdjrfx036h4z5sfmexun",
    chainID: MAINNET,
    denoms: [
      Denom.from(
        "ibc/47BD209179859CDE4A2806763D7189B6E6FE13A17880FE2B42DE1E6C1E329E23"
      ),
      USDC,
    ],
    precision: { decimal_places: 3 },
    decimalDelta: 0,
    multiswap: true,
  },

  {
    address:
      "kujira1fkwjqyfdyktgu5f59jpwhvl23zh8aav7f98ml9quly62jx2sehysqa4unf",
    chainID: MAINNET,
    denoms: [
      Denom.from(
        "ibc/A358D7F19237777AF6D8AD0E0F53268F8B18AE8A53ED318095C14D6D7F3B2DB5"
      ),
      USDC,
    ],
    precision: { decimal_places: 2 },
    decimalDelta: 0,
    multiswap: true,
  },

  {
    address:
      "kujira1jkte0pytr85qg0whmgux3vmz9ehmh82w40h8gaqeg435fnkyfxqq5m32qy",
    chainID: MAINNET,
    denoms: [
      Denom.from(
        "ibc/4F393C3FCA4190C0A6756CE7F6D897D5D1BE57D6CCB80D0BC87393566A7B6602"
      ),
      USDC,
    ],
    precision: { decimal_places: 3 },
    decimalDelta: 0,
    multiswap: true,
  },

  {
    address:
      "kujira1qjxu65ucccpg8c5kac8ng6yxfqq85fluwd0p9nt74g2304qw8eyq930y7w",
    chainID: MAINNET,
    denoms: [
      Denom.from(
        "ibc/004EBF085BBED1029326D56BE8A2E67C08CECE670A94AC1947DF413EF5130EB2"
      ),
      USDC,
    ],
    precision: { decimal_places: 3 },
    decimalDelta: 12,
    multiswap: false,
  },

  {
    address:
      "kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh",
    chainID: MAINNET,
    denoms: [
      Denom.from(
        "ibc/1B38805B1C75352B28169284F96DF56BDEBD9E8FAC005BDCC8CF0378C82AA8E7"
      ),
      USDC,
    ],
    precision: { decimal_places: 2 },
    decimalDelta: 12,
    multiswap: false,
  },

  {
    address:
      "kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg",
    chainID: TESTNET,
    denoms: [
      Denom.from("factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo"),
      USK_TESTNET,
    ],
    precision: { decimal_places: 3 },
    decimalDelta: 0,
    multiswap: true,
    margin: {
      address:
        "kujira1vmnntr773a5p7s4k0t39v6vcgcq87kq2zaw94cy85850n79jx2kq56sqhs",
      fin_address:
        "kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg",
      market:
        MARKETS_HARPOON.kujira1atk8uwy6zf7u4r4qzg52ucgz6f74cuclthzsrc049vynjsr62lns2du3ey,
    },
  },

  {
    address:
      "kujira12cks8zuclf9339tnanpdd8z8ycf5ygdgy885sejc7kyhvryzfyzsvjpasw",
    chainID: TESTNET,
    denoms: [
      Denom.from(
        "ibc/784AEA7C1DC3C62F9A04EB8DC3A3D1DCB7B03BA8CB2476C5825FA0C155D3018E"
      ),
      USK_TESTNET,
    ],
    precision: { decimal_places: 0 },
    decimalDelta: 8,
    multiswap: true,
  },

  {
    address:
      "kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh",
    chainID: TESTNET,
    denoms: [
      KUJI,
      Denom.from("factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo"),
    ],
    precision: { decimal_places: 3 },
    decimalDelta: 0,
    multiswap: true,
  },
  {
    address:
      "kujira10qt8wg0n7z740ssvf3urmvgtjhxpyp74hxqvqt7z226gykuus7eqedsw8k",
    chainID: TESTNET,
    denoms: [
      KUJI,
      Denom.from(
        "ibc/F91EA2C0A23697A1048E08C2F787E3A58AC6F706A1CD2257A504925158CFC0F3"
      ),
    ],
    precision: { decimal_places: 3 },
    decimalDelta: 0,
    multiswap: true,
  },
  {
    address:
      "kujira14hj2tavq8fpesdwxxcu44rty3hh90vhujrvcmstl4zr3txmfvw9sl4e867",
    chainID: TESTNET,
    denoms: [
      KUJI,
      Denom.from(
        "ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518"
      ),
    ],
    precision: { decimal_places: 3 },
    decimalDelta: 0,
    multiswap: true,
  },
  {
    address:
      "kujira1mf6ptkssddfmxvhdx0ech0k03ktp6kf9yk59renau2gvht3nq2gqx97zgq",
    chainID: TESTNET,
    denoms: [
      KUJI,
      Denom.from(
        "ibc/A1E1A20C1E4F2F76F301DA625CC476FBD0FCD8CA94DAF60814CA5257B6CD3E3E"
      ),
    ],
    precision: { decimal_places: 3 },
    decimalDelta: 0,
    multiswap: true,
  },
  {
    address:
      "kujira1pvrwmjuusn9wh34j7y520g8gumuy9xtl3gvprlljfdpwju3x7ucseu6vw3",
    chainID: TESTNET,
    denoms: [
      KUJI,
      Denom.from(
        "ibc/85CE72EE820A66F0ABD5EE3907A34E243E4BE2D6CFAEB4C08DF85BD6C0784FA2"
      ),
    ],
    precision: { decimal_places: 3 },
    decimalDelta: 0,
    multiswap: true,
  },
  {
    address:
      "kujira1yyca08xqdgvjz0psg56z67ejh9xms6l436u8y58m82npdqqhmmtqdyphsd",
    chainID: TESTNET,
    denoms: [
      KUJI,
      Denom.from(
        "ibc/0607DD7B560C5E40B0E05CB30AECBD12514539D7C986D040FFDEAA0AE9911088"
      ),
    ],
    precision: { decimal_places: 3 },
    decimalDelta: 12,
    multiswap: true,
  },
  {
    address:
      "kujira1chejx4qqtvwxy6684yrsmf6pylancxqhk3vsmtleg5ta3zrffljq4xf685",
    chainID: TESTNET,
    denoms: [
      KUJI,
      Denom.from("factory/kujira12w0ua4eqnkk0aahtnjlt6h3dhxael6x25s507w/local"),
    ],
    precision: { decimal_places: 3 },
    decimalDelta: 0,
    multiswap: true,
  },
  // USDCet-UST
  // {
  //   address: "terra17psckgayzuuvf5e4ywdl4y6sufy6h55xeczqaq",
  //   chainID: "columbus-5",
  //   denoms: [
  //     Denom.from("terra1pepwcav40nvj3kh60qqgrk8k07ydmc00xyat06"),
  //     Denom.from("uusd"),
  //   ],
  //   precision: { decimal_places: 4 },
  // },
];
