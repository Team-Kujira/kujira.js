import { BigNumber, parseFixed } from "@ethersproject/bignumber";
import { Denom } from "../denom";
import { MAINNET, NETWORK, POND, TESTNET } from "../network";
import contracts from "../resources/contracts.json";
import {
  Bid,
  BidPool,
  BidPoolResponse,
  BidResponse,
  Chain,
  Market,
  MarketType,
  Protocol,
} from "./types";
export * from "./types";

export const castBidPool = (response: BidPoolResponse): BidPool => ({
  totalBidAmount: BigNumber.from(response.total_bid_amount),
  premiumRate: parseFloat(response.premium_rate),
  premiumRateInt: parseFixed(response.premium_rate, 18),
  currentEpoch: parseInt(response.current_epoch),
});

export const castBid = (response: BidResponse): Bid => ({
  idx: parseInt(response.idx),
  premiumSlot: response.premium_slot,
  amount: BigNumber.from(response.amount),
  pendingLiquidatedCollateral: BigNumber.from(
    response.pending_liquidated_collateral
  ),
  waitEnd:
    (response.wait_end && new Date(parseInt(response.wait_end) * 1000)) || null,
});

export const FILTERED = [
  "kujira1pq2qqjuxwm93sxhr9s3vlpj7lrtjfdml68qjf3a3qfpw5ctj67nsdfmkrv",
  "kujira13wd3tqd3k2hldhcpqm6wnf00rdx98yf5a2sv3s7mzs7uwgqzvpnsk9kygc",
  "kujira1utx63kua509ys806g0nu87lpmrppwhfzguctj8p7qr9d8h8cj0hsavaw8e",
];

const insertMarket = (
  a: Record<string, Market>,
  v: {
    id: number;
    address: string;
    config: {
      owner: string;
      markets: string[];
      bid_denom: string;
      collateral_denom: string;
      bid_threshold: string;
      max_slot: number;
      premium_rate_per_slot: string;
      closed_slots: number[];
      waiting_period: number;
      liquidation_fee: string;
      withdrawal_fee: string;
      fee_address: string;
    };
  }
): Record<string, Market> => {
  if (FILTERED.includes(v.address)) return a;
  const collateralDenom = Denom.from(v.config.collateral_denom);
  return {
    ...a,
    [v.address]: {
      label: collateralDenom.symbol,
      chain: Chain.Kujira,
      protocol: Protocol.USK,
      collateralDenom,
      bidDenom: Denom.from(v.config.bid_denom),
      repayDenom: Denom.from(v.config.bid_denom),
      type: MarketType.USK,
      address: v.address,
      botFirst: false,
      activators: ["kujira16a03hk5ev6963a4yj3kcrvmh4hej3w3j70kv2n"],
      bidThreshold: BigNumber.from(v.config.bid_threshold),
      maxSlot: v.config.max_slot,
      premiumRatePerSlot: parseFloat(v.config.premium_rate_per_slot),
      premiumRatePerSlotInt: parseFixed(v.config.premium_rate_per_slot, 18),
      waitingPeriod: v.config.waiting_period,
      markets: v.config.markets,
      liquidationFee: parseFloat(v.config.liquidation_fee),
      withdrawalFee: parseFloat(v.config.withdrawal_fee),
    },
  };
};

export const MARKETS = {
  [MAINNET]: Object.values(contracts[MAINNET].orca).reduce(insertMarket, {}),
  [TESTNET]: Object.values(contracts[TESTNET].orca).reduce(insertMarket, {}),
  [POND]: {},
};

export const getMarkets = (network?: NETWORK): Array<Market> => {
  const markets = Object.values(MARKETS[network || MAINNET]);
  return markets.sort((a, b) => a.collateralDenom.compare(b.collateralDenom));
};
