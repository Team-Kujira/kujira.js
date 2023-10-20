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
};

export type PoolResponse = {
  owner: string;
  denoms: string[];
  price_precision: { decimal_places: number };
  decimal_delta: number;
  fin_contract: string;
  amp?: any;
  adapter?: any;
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

export const POOLS: Record<NETWORK, Record<string, Pool>> = {
  [MAINNET]: contracts[MAINNET].bow.reduce(
    (a, v) =>
      EXCLUDED.includes(v.address)
        ? a
        : {
            ...a,
            [v.address]: castPool(v.address, v.config),
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
