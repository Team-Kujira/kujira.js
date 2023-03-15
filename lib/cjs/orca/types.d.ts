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
export declare type Market = {
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
    waitingPeriod: number;
    markets: string[];
    liquidationFee: number;
    withdrawalFee: number;
};
export declare type Bid = {
    idx: number;
    premiumSlot: number;
    amount: BigNumber;
    pendingLiquidatedCollateral: BigNumber;
    waitEnd: Date | null;
};
export declare type BidPool = {
    totalBidAmount: BigNumber;
    premiumRate: number;
    currentEpoch: number;
};
export declare type BidStrategy = {
    activateAt: LTVThreshold;
    deactivateAt: LTVThreshold;
};
export declare type LTVThreshold = {
    ltv: number;
    amount: BigNumber;
};
export interface IContract<W, Tx> {
    getPrice: (denom: Denom) => Promise<number>;
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
