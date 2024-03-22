import { BigNumber, parseFixed } from "@ethersproject/bignumber";
import { Denom } from "./denom";
import { MAINNET, NETWORK, POND, TESTNET } from "./network";
import contracts from "./resources/contracts.json";

export const EXCLUDED = [
  "kujira188p624ykuepun8h8kjmcfs553mz2jgeanetyqv7l6xltdld497vqespn6c",
  "kujira136rwqvwy3flttm9wfnc5xgnlr6mu5k8e2elgzs2hdhuwf50w3l2qp807cx",
  "kujira1xgjefq7fs4yj29t9gk0t9esgw52s68j83yeac3ru2mefdp529qsqca7hhv",
  "kujira167gut7dskwurax8an630m3yy2cwa2fp3kmcpdzucyy6ppg7njgyqhl7w50",
  "kujira1ywlrdpqymukghjwhfyp2n98r49j56wej36n4l08egkdlwj4fn87ql2l2ey",
  "kujira1dj2s8uvup63fsmpfdfpmu570es4whswp806w0p6usdamtglhwvfqd5jx40",
  "kujira1cdy6aje8zszx5vryttkkm5rn9g2n53ltfds753fsn63m09cmhx0sgp6v6m",
  "kujira1h356yzzk2yw7q5s26dewdgaptw05fxplgmxdxcfqcatjyurckuks6zfay8",
  "kujira19a0wethewg36vny9jremekzlx66lwljp2htrhe255mp6djv652dqsu2l76",
  "kujira1xdjt8r39nvm03fs4d9cwyw2sks5dahs52msza59y4vevdgdwhtlq9e3vvg",
  "kujira1kupjzlp96l4ypt0fdpse8slmkdkkz3g0t5evy033va0gvtw867sq0cm6q0",
  "kujira1qx3hcr297qmgjt5f6u9peldf4phxqufvmew8d3eey3ns29e8qp3snj6jfu",
  "kujira19vmgdwz0p9wzfmeje6x9cw2rhlsdwysxm86k45l9xxw5t53pxg9qmlqnqp",
  "kujira1zdedwnk5e9axmg5efpu49hy6v06ypu3putvmu86jaw5rpzztqqks4x64f6",
  "kujira15t6pjrwvsgszgp3g9jwcgkvq9zawur6d2ncz7rzn9pc4ns9kudssxhn9v7",
  "kujira1kgs5gafvv8qmyf8r2vu34vhrtc22jeyt2m4lrn5sa4vywgn8h6kqua5rm5",
  "kujira1kggddmdvjjxl43luez7dp9snt96jwyj05k5hyxzstvj886u6entsu2na4z",
  "kujira1rpqhczdrgaa6w0h9fukdcppme3074zcay8ge8lazwefdawp03vwsnpc7ya",
  "kujira13ta4a6cu29na9dch3rtyqasgx57ju3z98530cet46tn5v7sx6k2qg7g3zk",
  "kujira1qxx58hln33sgasp5t6tdvhvwacqvkngq7y8mj0pzxhjy6ap9d2qs6u8jk7",
  "kujira1kxjqngkqxv43nk7r3rnp4k28yh697atyydu83j0hp7gh3ryfxnvqa76twh",
  "kujira1hu7uw5unyr5wnc5shkg2sfflmnkrx38hu3k5l0h3welm3mc9x82qhg425v",
  "kujira1yps6lf07smvq6th3f77hspj8fcj3rz8n52wgdu6j4j867runy95qd4clmz",
  "kujira1ngn4dwwwv25t38phsv3ulwckm4kf35v9dgq858x9q5gj6e520jns537m3a",
  "kujira10ecrs8u7l3stdqvv9yjhcwa7tnqkma27s06vq6zs75dk3evk0u2qzruunt",
  "kujira1rkurt0cxe42ml0usj3cm3ycdxg3z8afw4rllvu0jyu9rqmrdj6us2u0wyv",
];

export type Strategy = "xyk" | "lsd" | "stable";

export type Pool = {
  strategy: Strategy;
  address: string;
  owner: string;
  denoms: [Denom, Denom];
  pricePrecision: number;
  decimalDelta: number;
  finContract: string;
  margin?: Margin;
  adapter?: { contract: { address: string } };
};

export type PoolResponse = {
  owner: string;
  denoms: string[];
  price_precision: { decimal_places: number };
  decimal_delta: number;
  fin_contract: string;
  amp?: any;
  adapter?:
    | {
        contract:
          | { address: string }
          // legacy
          | string;
      }
    | { oracle: any };
};

export type Margin = {
  address: string;
  owner: string;
  bowContract: string;
  denoms: [
    { denom: Denom; decimals: number; oracle: string },
    { denom: Denom; decimals: number; oracle: string }
  ];
  vaults: [string | null, string | null];
  orcas: [string | null, string | null];
  maxLtv: BigNumber;
  fullLiquidationThreshold: BigNumber;
  partialLiquidationTarget: BigNumber;
  borrowFee: BigNumber;
};

export type MarginResponse = {
  owner: string;
  bow_contract: string;
  denoms: { denom: string; decimals: number; oracle: string }[];
  vaults: (string | null)[];
  orcas: (string | null)[];
  max_ltv: string;
  full_liquidation_threshold: string;
  partial_liquidation_target: string;
  borrow_fee: string;
};

export type PositionResponse = {
  idx: string;
  holder: string;
  lp_amount: string;
  ltv: string;
  debt_shares: {
    amount: string;
    denom: string;
    ratio: string;
  }[];
};

export type Position = {
  idx: string;
  holder: string;
  lpAmount: BigNumber;
  ltv: BigNumber;
  debtShares: Record<
    string,
    {
      amount: BigNumber;
      denom: Denom;
      ratio: BigNumber;
    }
  >;
};

export const castPosition = (res: PositionResponse): Position => ({
  idx: res.idx,
  holder: res.holder,
  lpAmount: BigNumber.from(res.lp_amount),
  ltv: parseFixed(res.ltv, 18),
  debtShares: res.debt_shares.reduce(
    (a, v) => ({
      ...a,
      [v.denom]: {
        amount: BigNumber.from(v.amount),
        denom: Denom.from(v.denom),
        ratio: parseFixed(v.ratio, 18),
      },
    }),
    {}
  ),
});

export const castPool = (
  address: string,
  res: PoolResponse,
  margin?: { address: string; config: MarginResponse }
): Pool => ({
  strategy: "amp" in res ? "xyk" : "adapter" in res ? "lsd" : "stable",
  address,
  owner: res.owner,
  denoms: [Denom.from(res.denoms[0]), Denom.from(res.denoms[1])],
  pricePrecision: res.price_precision.decimal_places,
  decimalDelta: res.decimal_delta,
  finContract: res.fin_contract,
  margin: margin && castMargin(margin.address, margin.config),
  adapter: res.adapter && castAdapter(res.adapter),
});

export const castMargin = (address: string, res: MarginResponse): Margin => ({
  address,
  owner: res.owner,
  bowContract: res.bow_contract,
  denoms: [
    {
      denom: Denom.from(res.denoms[0].denom),
      decimals: res.denoms[0].decimals,
      oracle: res.denoms[0].oracle,
    },
    {
      denom: Denom.from(res.denoms[1].denom),
      decimals: res.denoms[1].decimals,
      oracle: res.denoms[1].oracle,
    },
  ],
  vaults: [res.vaults[0], res.vaults[1]],
  orcas: [res.orcas[0], res.orcas[1]],
  maxLtv: parseFixed(res.max_ltv, 18),
  fullLiquidationThreshold: BigNumber.from(res.full_liquidation_threshold),
  partialLiquidationTarget: parseFixed(res.partial_liquidation_target, 18),
  borrowFee: parseFixed(res.borrow_fee, 18),
});

const castAdapter = (
  res:
    | {
        contract:
          | { address: string }
          // legacy
          | string;
      }
    | { oracle: any }
): { contract: { address: string } } | undefined => {
  if ("oracle" in res) return undefined;
  if (typeof res.contract === "string")
    return { contract: { address: res.contract } };
  return { contract: { address: res.contract.address } };
};

export const POOLS: Record<NETWORK, Record<string, Pool>> = {
  [MAINNET]: contracts[MAINNET].bow.reduce(
    (a, v) =>
      EXCLUDED.includes(v.address)
        ? a
        : {
            ...a,
            [v.address]: castPool(
              v.address,
              v.config,
              Object.values(contracts[MAINNET].bowMargin).find(
                (x) => x.config.bow_contract === v.address
              )
            ),
          },
    {}
  ),
  [TESTNET]: contracts[TESTNET].bow.reduce(
    (a, v) =>
      EXCLUDED.includes(v.address)
        ? a
        : {
            ...a,
            [v.address]: castPool(
              v.address,
              v.config,
              Object.values(contracts[TESTNET].bowMargin).find(
                (x) => x.config.bow_contract === v.address
              )
            ),
          },
    {}
  ),
  [POND]: {},
};
