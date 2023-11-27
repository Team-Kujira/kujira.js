import { BigNumber } from "@ethersproject/bignumber";
import { Denom } from "../denom";
export declare enum Chain {
    Avalanche = "Avalanche",
    Kujira = "Kujira",
    Polkadot = "Polkadot"
}
export declare enum Protocol {
    Acala = "Acala",
    Karura = "Karura",
    Mandala = "Mandala",
    USK = "USK",
    FIN = "FIN Margin",
    PERP = "FIN Perpetuals"
}
export declare enum MarketType {
    Acala = "Lending",
    Karura = "Lending",
    Mandala = "Lending",
    USK = "Lending",
    FIN = "Margin",
    PERP = "Perpetuals"
}
export type Market = {
    label: string;
    chain: Chain;
    protocol: Protocol;
    collateralDenom: Denom;
    bidDenom: Denom;
    repayDenom: Denom;
    type: MarketType;
    address: string;
    botFirst?: boolean;
    activators?: string[];
    bidThreshold: BigNumber;
    maxSlot: number;
    premiumRatePerSlot: number;
    premiumRatePerSlotInt: BigNumber;
    waitingPeriod: number;
    markets: string[];
    liquidationFee: number;
    withdrawalFee: number;
};
export type BidResponse = {
    idx: string;
    collateral_token: string;
    premium_slot: number;
    bidder: string;
    amount: string;
    product_snapshot: string;
    sum_snapshot: string;
    pending_liquidated_collateral: string;
    wait_end?: string;
    epoch_snapshot: number;
    scale_snapshot: number;
};
export type BidPoolResponse = {
    sum_snapshot: string;
    product_snapshot: string;
    total_bid_amount: string;
    premium_rate: string;
    current_epoch: string;
    current_scale: string;
};
export type Bid = {
    idx: number;
    premiumSlot: number;
    amount: BigNumber;
    pendingLiquidatedCollateral: BigNumber;
    waitEnd: Date | null;
};
export type BidPool = {
    totalBidAmount: BigNumber;
    premiumRate: number;
    premiumRateInt: BigNumber;
    currentEpoch: number;
};
export type BidStrategy = {
    activateAt: LTVThreshold;
    deactivateAt: LTVThreshold;
};
export type LTVThreshold = {
    ltv: number;
    amount: BigNumber;
};
export interface IContract<W, Tx> {
    getCollateralAmount: () => Promise<BigNumber>;
    getBidPools: () => Promise<BidPool[]>;
    getBids: (wallet: W) => (opts?: {
        limit: number;
        startAfter: number;
    }) => Promise<Bid[]>;
    placeBid: (wallet: W) => (premiumSlot: number, amount: BigNumber) => Promise<Tx>;
    activateBids: (wallet: W) => (bids: Bid[]) => Promise<Tx>;
    retractBid: (wallet: W) => (bid: Bid) => Promise<Tx>;
    claimLiquidations: (wallet: W) => (bids: Bid[]) => Promise<Tx>;
}
