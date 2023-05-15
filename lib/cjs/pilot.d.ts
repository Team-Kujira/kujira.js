import { Coin } from "@cosmjs/stargate";
import { BigNumber } from "@ethersproject/bignumber";
import { NETWORK } from "./network";
import * as orca from "./orca";
import { KujiraQueryClient } from "./queryClient";
declare type SaleResponse = {
    idx: string;
    title: string;
    description: string;
    price: string;
    owner: string;
    beneficiary: string;
    amount: {
        denom: string;
        amount: string;
    };
    opens: string;
    closes: string;
    executed: null | string;
    retracted: null | string;
    orca_address: string;
    orca_config: {
        owner: string;
        markets: [];
        bid_denom: string;
        collateral_denom: string;
        bid_threshold: string;
        max_slot: number;
        premium_rate_per_slot: string;
        waiting_period: 600;
        liquidation_fee: string;
        withdrawal_fee: string;
        fee_address: string;
    };
};
export declare const castSale: (network: NETWORK, res: SaleResponse) => Market;
export declare type Sale = {
    idx: string;
    amount: BigNumber;
    owner: string;
    beneficiary: string;
    opens: Date;
    closes: Date;
    price: number;
    title: string;
    executed: Date | null;
    retracted: Date | null;
    description: string;
};
export declare type Market = Omit<orca.Market, "chain" | "protocol" | "repayDenom" | "type"> & {
    sale: Sale;
};
export declare type Pilot = {
    address: string;
    owner: string;
    deposit: Coin;
    orcaCodeId: number;
    saleFee: number;
    withdrawalFee: number;
};
export declare const config: (network: "harpoon-4" | "kaiyo-1") => Pilot | null;
export declare const getMarkets: (query: KujiraQueryClient, network: "harpoon-4" | "kaiyo-1") => Promise<Record<string, Market>>;
export {};
