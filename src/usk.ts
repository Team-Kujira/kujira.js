import { BigNumber } from "@ethersproject/bignumber";
import { AccountData } from "@cosmjs/proto-signing";
import { Denom, USK, USK_TESTNET } from "./denom";
import { KujiraQueryClient } from ".";

export type Market = {
  address: string;
  owner: string;
  stable_denom: Denom;
  stable_denom_admin: string;
  collateral_denom: Denom;
  oracle_denom: string;
  max_ratio: number;
  mint_fee: number;
  interest_rate: number;
  liquidation_threshold: BigNumber;
  liquidation_ratio: number;
  max_debt: BigNumber;
};

export const MARKETS_HARPOON: Record<string, Market> = {
  kujira1atk8uwy6zf7u4r4qzg52ucgz6f74cuclthzsrc049vynjsr62lns2du3ey: {
    address:
      "kujira1atk8uwy6zf7u4r4qzg52ucgz6f74cuclthzsrc049vynjsr62lns2du3ey",
    owner: "kujira1xuy29zu6zrm9shflvthmu2pjg2wq7fhuqcf6hz",
    stable_denom: USK_TESTNET,
    stable_denom_admin:
      "kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll",
    collateral_denom: Denom.from(
      "factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo"
    ),
    oracle_denom: "ATOM",
    max_ratio: 0.6,
    mint_fee: 0.005,
    interest_rate: 0.05,
    liquidation_threshold: BigNumber.from(5000000000),
    liquidation_ratio: 0.2,
    max_debt: BigNumber.from(10000000000000),
  },
  kujira186hf4u6wq2yxjhrddgsu60jual4mkpqyfjy7l60qqp2302tw5vpqy6l58s: {
    address:
      "kujira186hf4u6wq2yxjhrddgsu60jual4mkpqyfjy7l60qqp2302tw5vpqy6l58s",
    owner: "kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5",
    stable_denom: USK_TESTNET,
    stable_denom_admin:
      "kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll",
    collateral_denom: Denom.from(
      "ibc/784AEA7C1DC3C62F9A04EB8DC3A3D1DCB7B03BA8CB2476C5825FA0C155D3018E"
    ),
    oracle_denom: "BTC",
    max_ratio: 0.6,
    mint_fee: 0.005,
    interest_rate: 0.05,
    liquidation_threshold: BigNumber.from(5000000000),
    liquidation_ratio: 0.2,
    max_debt: BigNumber.from(10000000000000),
  },
};

export const MARKETS_KAIYO: Record<string, Market> = {
  kujira1ecgazyd0waaj3g7l9cmy5gulhxkps2gmxu9ghducvuypjq68mq2smfdslf: {
    address:
      "kujira1ecgazyd0waaj3g7l9cmy5gulhxkps2gmxu9ghducvuypjq68mq2smfdslf",
    owner: "kujira1tsekaqv9vmem0zwskmf90gpf0twl6k57e8vdnq",
    stable_denom: USK,
    stable_denom_admin:
      "kujira1qk00h5atutpsv900x202pxx42npjr9thg58dnqpa72f2p7m2luase444a7",
    collateral_denom: Denom.from(
      "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2"
    ),
    oracle_denom: "ATOM",
    max_ratio: 0.6,
    mint_fee: 0.001,
    interest_rate: 0.05,
    liquidation_threshold: BigNumber.from(1000000000),
    liquidation_ratio: 0.4,
    max_debt: BigNumber.from(1000000000000),
  },
  kujira1eydneup86kyhew5zqt5r7tkxefr3w5qcsn3ssrpcw9hm4npt3wmqa7as3u: {
    address:
      "kujira1eydneup86kyhew5zqt5r7tkxefr3w5qcsn3ssrpcw9hm4npt3wmqa7as3u",
    owner: "kujira1tsekaqv9vmem0zwskmf90gpf0twl6k57e8vdnq",
    stable_denom: USK,
    stable_denom_admin:
      "kujira1qk00h5atutpsv900x202pxx42npjr9thg58dnqpa72f2p7m2luase444a7",
    collateral_denom: Denom.from(
      "ibc/B37E4D9FB5B30F3E1E20A4B2DE2A005E584C5C822C44527546556AE2470B4539"
    ),
    oracle_denom: "DOT",
    max_ratio: 0.6,
    mint_fee: 0.001,
    interest_rate: 0.05,
    liquidation_threshold: BigNumber.from(1000000000),
    liquidation_ratio: 0.4,
    max_debt: BigNumber.from(1000000000000),
  },
};

type PositionResponse = {
  owner: string;
  deposit_amount: string;
  mint_amount: string;
  interest_amount: string;
  liquidation_price: string | null;
};

export type Position = {
  owner: string;
  deposit_amount: BigNumber;
  mint_amount: BigNumber;
  interest_amount: BigNumber;
  liquidation_price: number | null;
};

const castPosition = (p: PositionResponse): Position => ({
  owner: p.owner,
  deposit_amount: BigNumber.from(p.deposit_amount),
  mint_amount: BigNumber.from(p.mint_amount),
  interest_amount: BigNumber.from(p.interest_amount),
  liquidation_price: p.liquidation_price
    ? parseFloat(p.liquidation_price)
    : null,
});

export const defaultPosition = (owner?: string): Position => ({
  owner: owner || "",
  deposit_amount: BigNumber.from(0),
  mint_amount: BigNumber.from(0),
  interest_amount: BigNumber.from(0),
  liquidation_price: null,
});

export const fetchPosition = (
  queryClient: KujiraQueryClient,
  address: string,
  account: AccountData
): Promise<Position> =>
  queryClient.wasm
    .queryContractSmart(address, {
      position: { address: account.address },
    })
    .then(castPosition);
