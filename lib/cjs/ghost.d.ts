import { BigNumber } from "@ethersproject/bignumber";
import { Denom } from "./denom";
import { NETWORK } from "./network";
export declare const FILTERED: string[];
export type OracleDenom = {
    live: string;
} | {
    static: BigNumber;
};
export type Market = {
    address: string;
    owner: string;
    collateralDenom: Denom;
    collateralOracleDenom: string;
    collateralDecimals: number;
    maxLtv: number;
    vault: Vault;
    borrowFee: BigNumber;
    orcaAddress: string;
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
export declare const castVaultState: (res: {
    deposited: string;
    borrowed: string;
    rate: string;
    apr: number;
    deposit_redemption_ratio: string;
    debt_share_ratio: string;
}) => VaultState;
export declare const DEFAULT_MARKET_STATE: MarketState;
export declare const DEFAULT_VAULT_STATE: VaultState;
export type Position = {
    collateralAmount: BigNumber;
    debtShares: BigNumber;
};
export declare const castPosition: (res: {
    debt_shares: number;
    collateral_amount: number;
}) => Position;
export type Interest = {
    type: "curve";
    value: [
        BigNumber,
        {
            linear: {
                start: [BigNumber, BigNumber];
                end: [BigNumber, BigNumber];
            };
        }
    ][];
};
export type Vault = {
    address: string;
    owner: string;
    denom: Denom;
    oracle: OracleDenom;
    decimals: number;
    receiptDenom: Denom;
    debtTokenDenom: Denom;
    interest: Interest;
    markets: {
        addr: string;
        borrowLimit: null | BigNumber;
    }[];
};
export declare const castMarket: (address: string, raw: {
    owner: string;
    collateral_denom: string;
    collateral_oracle_denom: string;
    collateral_decimals: number;
    max_ltv: string;
    vault_addr: string;
    borrow_fee: string;
    orca_addr: string;
}, vault: Vault) => Market;
export declare const castVault: (address: string, raw: {
    owner: string;
    denom: string;
    oracle: {
        live: string;
    } | {
        static: string;
    };
    decimals: number;
    receipt_denom: string;
    debt_token_denom: string;
    interest: {
        utilization_to_curve: [
            string,
            {
                linear: {
                    start: [string, string];
                    end: [string, string];
                };
            }
        ][];
    };
}, markets: {
    addr: string;
    borrow_limit: null | string;
    current_borrows: string;
}[]) => Vault;
export declare const VAULTS: Record<NETWORK, Record<string, Vault>>;
export declare const MARKETS: Record<NETWORK, Record<string, Market>>;
