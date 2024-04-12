import { Coin } from "@cosmjs/stargate";
import { BigNumber, parseFixed } from "@ethersproject/bignumber";
import { Denom } from "./denom";
import { NETWORK } from "./network";
import * as orca from "./orca";
import { KujiraQueryClient } from "./queryClient";
import contracts from "./resources/contracts.json";

type SaleResponse =
  | {
      idx: string;
      title: string;
      description: string;
      url: string;
      price: string;
      owner: string;
      beneficiary: string;
      amount: { amount: string; denom: string };
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
    }
  // Legacy, Mainnet
  | {
      idx: string;
      title: string;
      description: string;
      price: string;
      owner: string;
      beneficiary: string;
      amount: { denom: string; amount: string };
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

type StatusResponse =
  | { live: { closes_at: string } }
  | { retracted: string }
  | {
      executed: {
        at: string;
        raise_total: string;
        raise_fee: string;
        raise_amount: string;
      };
    };

export const castSale = (network: NETWORK, res: SaleResponse): Market => ({
  label: Denom.from(res.amount.denom).symbol,
  collateralDenom: Denom.from(res.amount.denom),
  bidDenom: Denom.from(res.orca_config.bid_denom),
  address: res.orca_address,
  bidThreshold: BigNumber.from(res.orca_config.bid_threshold),
  maxSlot: res.orca_config.max_slot,
  premiumRatePerSlot: parseFloat(res.orca_config.premium_rate_per_slot),
  premiumRatePerSlotInt: parseFixed(res.orca_config.premium_rate_per_slot, 18),
  waitingPeriod: res.orca_config.waiting_period,
  markets: res.orca_config.markets,
  activators: ["kujira1mrwwpea5emn05wmj7d7eweppmw98qj2a642r0e"],
  sale:
    "status" in res
      ? {
          idx: res.idx,
          title: res.title,
          owner: res.owner,
          beneficiary: res.beneficiary,
          description: res.description,
          price: parseFloat(res.price),
          amount: BigNumber.from(res.amount.amount),
          status:
            "live" in res.status
              ? {
                  live: {
                    closesAt: new Date(
                      parseInt(res.status.live.closes_at) / 1000000
                    ),
                  },
                }
              : "retracted" in res.status
              ? {
                  retracted: new Date(parseInt(res.status.retracted) / 1000000),
                }
              : {
                  executed: {
                    at: new Date(parseInt(res.status.executed.at) / 1000000),
                    raiseAmount: BigNumber.from(
                      res.status.executed.raise_amount
                    ),
                    raiseTotal: BigNumber.from(res.status.executed.raise_total),
                    raiseFee: BigNumber.from(res.status.executed.raise_fee),
                  },
                },
        }
      : {
          idx: res.idx,
          title: res.title,
          owner: res.owner,
          beneficiary: res.beneficiary,
          description: res.description,
          price: parseFloat(res.price),
          amount: BigNumber.from(res.amount.amount),
          opens: new Date(parseInt(res.opens) / 1000000),
          closes: new Date(parseInt(res.closes) / 1000000),
          executed: res.executed
            ? new Date(parseInt(res.executed) / 1000000)
            : null,
          retracted: res.retracted
            ? new Date(parseInt(res.retracted) / 1000000)
            : null,
        },
  liquidationFee: parseFloat(res.orca_config.liquidation_fee),
  withdrawalFee: parseFloat(res.orca_config.withdrawal_fee),
});

export type Sale =
  | {
      idx: string;
      amount: BigNumber;
      owner: string;
      beneficiary: string;
      price: number;
      title: string;
      description: string;
      status: Status;
    }
  // Legacy, mainnet
  | {
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

type Status =
  | { live: { closesAt: Date } }
  | { retracted: Date }
  | {
      executed: {
        at: Date;
        raiseTotal: BigNumber;
        raiseFee: BigNumber;
        raiseAmount: BigNumber;
      };
    };

export type Market = Omit<
  orca.Market,
  "chain" | "protocol" | "repayDenom" | "type"
> & { sale: Sale };

const castPilot = (res: {
  id: number;
  address: string;
  config: {
    owner: string;
    deposit: {
      denom: string;
      amount: string;
    };
    orca_code_id: number;
    sale_fee: string;
    withdrawal_fee: string;
  };
  pairs: boolean;
  markets: boolean;
}): Pilot => ({
  address: res.address,
  owner: res.config.owner,
  deposit: res.config.deposit,
  orcaCodeId: res.config.orca_code_id,
  saleFee: parseFloat(res.config.sale_fee),
  withdrawalFee: parseFloat(res.config.withdrawal_fee),
});

export type Pilot = {
  address: string;
  owner: string;
  deposit: Coin;
  orcaCodeId: number;
  saleFee: number;
  withdrawalFee: number;
};

export const config = (network: "harpoon-4" | "kaiyo-1"): Pilot | null => {
  const contract = contracts[network].pilot[0];
  if (!contract) return null;
  return castPilot(contract);
};

export const getMarkets = async (
  query: KujiraQueryClient,
  network: "harpoon-4" | "kaiyo-1"
): Promise<Record<string, Market>> => {
  const contract = contracts[network].pilot.reverse()[0];
  if (!contract) return {};
  return query.wasm
    .queryContractSmart(contract.address, { sales: {} })
    .then((x: any) =>
      x.sales.reduce(
        (a: Record<string, Market>, v: SaleResponse) => ({
          ...a,
          [v.orca_address]: castSale(network, v),
        }),
        {}
      )
    );
};
