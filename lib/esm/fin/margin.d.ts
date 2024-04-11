import { AccountData } from "@cosmjs/proto-signing";
import { BigNumber } from "@ethersproject/bignumber";
import { Denom } from "../denom";
import { KujiraQueryClient } from "../queryClient";
import { defaultPosition as defaultPositionMarket, fetchPosition as fetchPositionMarket, Position as PositionMarket } from "../usk";
import { Order } from "./types";
export { defaultPositionMarket, fetchPositionMarket, PositionMarket };
export type PositionLimit = {
    idx: string;
    owner: string;
    margin_amount: BigNumber;
    mint_amount: BigNumber;
    interest_amount: BigNumber;
    liquidation_price: number | null;
    order: Order;
};
export declare const fetchPositionLimit: (queryClient: KujiraQueryClient, address: string, idx: string, denoms: [Denom, Denom]) => Promise<PositionLimit>;
export declare const fetchPositionsLimit: (queryClient: KujiraQueryClient, address: string, account: AccountData, denoms: [Denom, Denom]) => Promise<PositionLimit[]>;
