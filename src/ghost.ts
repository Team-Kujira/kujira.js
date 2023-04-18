import { BigNumber, parseFixed } from "@ethersproject/bignumber";
import { divToNumber, mulDec } from "./bignumber";
import { Denom } from "./denom";
import { LOCALNET, MAINNET, NETWORK, TESTNET } from "./network";
import contracts from "./resources/contracts.json";

export type OracleDenom = { live: string } | { static: BigNumber };

export type Market = {
  address: string;
  owner: string;
  collateralDenom: Denom;
  collateralOracleDenom: string;
  collateralDecimals: number;
  maxLtv: number;
  vault: Vault;
  borrowFee: BigNumber;
};

export type MarketState = {
  deposited: BigNumber;
  borrowed: BigNumber;
};

export type VaultState = {
  deposited: BigNumber;
  lent: BigNumber;
  available: BigNumber;
  interestRate: number;
  apr: number;
  redemptionRate: BigNumber;
  debtShareRatio: BigNumber;
};

export const castVaultState = (res: {
  deposited: string;
  borrowed: string;
  rate: string;
  apr: number;
  deposit_redemption_ratio: string;
  debt_share_ratio: string;
}): VaultState => {
  const deposited = BigNumber.from(res.deposited);
  const lent = BigNumber.from(res.borrowed);
  const interestRate = parseFloat(res.rate);

  return {
    deposited,
    lent,
    available: deposited.sub(lent),
    interestRate,
    apr: divToNumber(mulDec(lent, interestRate), deposited),
    redemptionRate: parseFixed(res.deposit_redemption_ratio, 18),
    debtShareRatio: parseFixed(res.debt_share_ratio, 18),
  };
};

export const DEFAULT_MARKET_STATE: MarketState = {
  deposited: BigNumber.from(0),
  borrowed: BigNumber.from(0),
};

export const DEFAULT_VAULT_STATE: VaultState = {
  deposited: BigNumber.from(0),
  lent: BigNumber.from(0),
  available: BigNumber.from(0),
  interestRate: 0,
  apr: 0,
  redemptionRate: parseFixed("1", 18),
  debtShareRatio: parseFixed("1", 18),
};

export type Position = {
  collateralAmount: BigNumber;
  debtShares: BigNumber;
};

export const castPosition = (res: {
  debt_shares: number;
  collateral_amount: number;
}): Position => ({
  debtShares: BigNumber.from(res.debt_shares),
  collateralAmount: BigNumber.from(res.collateral_amount),
});

export type Vault = {
  address: string;
  owner: string;
  denom: Denom;
  oracle: OracleDenom;
  decimals: number;
  receiptDenom: Denom;
  debtTokenDenom: Denom;
  utilizationRates: [BigNumber, BigNumber][];
  markets: {
    addr: string;
    borrowLimit: null | BigNumber;
    // currentBorrows: BigNumber;
  }[];
};

export const castMarket = (
  address: string,
  raw: {
    owner: string;
    collateral_denom: string;
    collateral_oracle_denom: string;
    collateral_decimals: number;
    max_ltv: string;
    vault_addr: string;
    borrow_fee: string;
  },
  vault: Vault
): Market => ({
  address,
  owner: raw.owner,
  collateralDenom: Denom.from(raw.collateral_denom),
  collateralOracleDenom: raw.collateral_oracle_denom,
  collateralDecimals: raw.collateral_decimals,
  maxLtv: parseFloat(raw.max_ltv),
  vault,
  borrowFee: parseFixed(raw.borrow_fee, 18),
});

export const castVault = (
  address: string,
  raw: {
    owner: string;
    denom: string;
    oracle: { live: string } | { static: string };
    decimals: number;
    receipt_denom: string;
    debt_token_denom: string;
  },
  markets: {
    addr: string;
    borrow_limit: null | string;
    current_borrows: string;
  }[]
): Vault => ({
  address,
  owner: raw.owner,
  denom: Denom.from(raw.denom),
  oracle:
    "static" in raw.oracle
      ? { static: parseFixed(raw.oracle.static, 18) }
      : raw.oracle,
  decimals: raw.decimals,
  receiptDenom: Denom.from(raw.receipt_denom),
  debtTokenDenom: Denom.from(raw.debt_token_denom),
  markets: markets.map((m) => ({
    addr: m.addr,
    borrowLimit: m.borrow_limit ? BigNumber.from(m.borrow_limit) : null,
  })),
  utilizationRates: [
    ["0", "0.02"],
    ["0.01", "0.021"],
    ["0.02", "0.022"],
    ["0.03", "0.023"],
    ["0.04", "0.024"],
    ["0.05", "0.025"],
    ["0.06", "0.026"],
    ["0.07", "0.027"],
    ["0.08", "0.028"],
    ["0.09", "0.029"],
    ["0.1", "0.03"],
    ["0.11", "0.031"],
    ["0.12", "0.032"],
    ["0.13", "0.033"],
    ["0.14", "0.034"],
    ["0.15", "0.035"],
    ["0.16", "0.036"],
    ["0.17", "0.037"],
    ["0.18", "0.038"],
    ["0.19", "0.039"],
    ["0.2", "0.04"],
    ["0.21", "0.041"],
    ["0.22", "0.042"],
    ["0.23", "0.043"],
    ["0.24", "0.044"],
    ["0.25", "0.045"],
    ["0.26", "0.046"],
    ["0.27", "0.047"],
    ["0.28", "0.048"],
    ["0.29", "0.049"],
    ["0.3", "0.05"],
    ["0.31", "0.051"],
    ["0.32", "0.052"],
    ["0.33", "0.053"],
    ["0.34", "0.054"],
    ["0.35", "0.055"],
    ["0.36", "0.056"],
    ["0.37", "0.057"],
    ["0.38", "0.058"],
    ["0.39", "0.059"],
    ["0.4", "0.06"],
    ["0.41", "0.061"],
    ["0.42", "0.062"],
    ["0.43", "0.063"],
    ["0.44", "0.064"],
    ["0.45", "0.065"],
    ["0.46", "0.066"],
    ["0.47", "0.067"],
    ["0.48", "0.068"],
    ["0.49", "0.069"],
    ["0.5", "0.07"],
    ["0.51", "0.071"],
    ["0.52", "0.072"],
    ["0.53", "0.073"],
    ["0.54", "0.074"],
    ["0.55", "0.075"],
    ["0.56", "0.076"],
    ["0.57", "0.077"],
    ["0.58", "0.078"],
    ["0.59", "0.079"],
    ["0.6", "0.08"],
    ["0.61", "0.153"],
    ["0.62", "0.226"],
    ["0.63", "0.299"],
    ["0.64", "0.372"],
    ["0.65", "0.445"],
    ["0.66", "0.518"],
    ["0.67", "0.591"],
    ["0.68", "0.664"],
    ["0.69", "0.737"],
    ["0.7", "0.81"],
    ["0.71", "0.883"],
    ["0.72", "0.956"],
    ["0.73", "1.029"],
    ["0.74", "1.102"],
    ["0.75", "1.175"],
    ["0.76", "1.248"],
    ["0.77", "1.321"],
    ["0.78", "1.394"],
    ["0.79", "1.467"],
    ["0.8", "1.54"],
    ["0.81", "1.613"],
    ["0.82", "1.686"],
    ["0.83", "1.759"],
    ["0.84", "1.832"],
    ["0.85", "1.905"],
    ["0.86", "1.978"],
    ["0.87", "2.051"],
    ["0.88", "2.124"],
    ["0.89", "2.197"],
    ["0.9", "2.27"],
    ["0.91", "2.343"],
    ["0.92", "2.416"],
    ["0.93", "2.489"],
    ["0.94", "2.562"],
    ["0.95", "2.635"],
    ["0.96", "2.708"],
    ["0.97", "2.781"],
    ["0.98", "2.854"],
    ["0.99", "2.927"],
    ["1", "3"],
  ].map(([a, b]) => [parseFixed(a, 18), parseFixed(b, 18)]),
});

export const VAULTS: Record<NETWORK, Record<string, Vault>> = {
  [MAINNET]: {},
  [TESTNET]: contracts[TESTNET].ghostVault.reduce(
    (a, v) =>
      v.markets
        ? {
            ...a,
            [v.address]: castVault(v.address, v.config, v.markets),
          }
        : {
            ...a,
            [v.address]: castVault(v.address, v.config, []),
          },
    {}
  ),
  [LOCALNET]: {},
};

export const MARKETS: Record<NETWORK, Record<string, Market>> = {
  [MAINNET]: {},
  [TESTNET]: contracts[TESTNET].ghostMarket.reduce(
    (a, v) =>
      VAULTS[TESTNET][v.config.vault_addr]
        ? {
            ...a,
            [v.address]: castMarket(
              v.address,
              v.config,
              VAULTS[TESTNET][v.config.vault_addr]
            ),
          }
        : a,
    {}
  ),
  [LOCALNET]: {},
};
