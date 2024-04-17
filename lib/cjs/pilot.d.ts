import { Coin } from "@cosmjs/stargate";
import { BigNumber } from "@ethersproject/bignumber";
import { NETWORK } from "./network";
import * as orca from "./orca";
import { KujiraQueryClient } from "./queryClient";
type SaleResponse = {
    idx: string;
    title: string;
    description: string;
    url: string;
    price: string;
    owner: string;
    beneficiary: string;
    amount: {
        amount: string;
        denom: string;
    };
    status: StatusResponse;
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
type StatusResponse = {
    live: {
        closes_at: string;
    };
} | {
    retracted: string;
} | {
    executed: {
        at: string;
        raise_total: string;
        raise_fee: string;
        raise_amount: string;
    };
};
export declare const castSale: (network: NETWORK, res: SaleResponse) => Market;
export type Sale = {
    idx: string;
    amount: BigNumber;
    owner: string;
    beneficiary: string;
    price: number;
    title: string;
    description: string;
    status: Status;
};
type Status = {
    live: {
        closesAt: Date;
    };
} | {
    retracted: Date;
} | {
    executed: {
        at: Date;
        raiseTotal: BigNumber;
        raiseFee: BigNumber;
        raiseAmount: BigNumber;
    };
};
export type Market = Omit<orca.Market, "chain" | "protocol" | "repayDenom" | "type"> & {
    sale: Sale;
};
export type Pilot = {
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
