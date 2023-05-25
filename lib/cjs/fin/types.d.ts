import { BigNumber } from "@ethersproject/bignumber";
import { Denom } from "../denom";
import * as usk from "../usk";
export type Config = {
    owner: string;
    denoms: [Denom, Denom];
    isBootstrapping: boolean;
    decimalDelta: number;
};
export type Order = {
    idx: number;
    owner: string;
    quotePrice: number;
    quotePriceInt: BigNumber;
    offerDenom: Denom;
    offerAmount: BigNumber;
    filledAmount: BigNumber;
    createdAt: Date;
    originalOfferAmount: BigNumber;
};
export type Book = {
    base: Pool[];
    quote: Pool[];
};
export type Margin = usk.Market;
export type Pair = {
    address: string;
    denoms: [Denom, Denom];
    precision: Precision;
    decimalDelta: number;
    margin?: Margin;
    multiswap: boolean;
    pool?: string;
    queue?: string;
    calc?: string;
};
export type Pool = {
    quotePrice: number;
    quotePriceInt: BigNumber;
    offerDenom: Denom;
    totalOfferAmount: BigNumber;
};
export type Simulation = {
    returnAmount: BigNumber;
    spreadAmount: BigNumber;
    commissionAmount: BigNumber;
    rate: BigNumber;
    slippage: BigNumber;
};
export type CW20Denom = {
    native: string;
} | {
    cw20: Addr;
};
export type Addr = string;
export type Decimal = string;
export type Uint128 = string;
export interface BookResponse {
    base: PoolResponse[];
    quote: PoolResponse[];
}
export interface PoolResponse {
    offer_denom: CW20Denom;
    quote_price: Decimal;
    total_offer_amount: Uint128;
}
export type Precision = {
    significant_figures: number;
} | {
    decimal_places: number;
};
export interface ConfigResponse {
    denoms: [CW20Denom, CW20Denom];
    is_bootstrapping: boolean;
    owner: Addr;
    price_precision: Precision;
    decimal_delta: number;
}
export type ExecuteMsg = {
    receive: Cw20ReceiveMsg;
} | {
    launch: {};
} | {
    update_config: {
        owner?: Addr | null;
        price_precision?: Precision | null;
    };
} | {
    submit_order: {
        price: Decimal;
    };
} | {
    swap: {
        belief_price?: Decimal | null;
        max_spread?: Decimal | null;
        offer_asset?: Coin | null;
        to?: Addr | null;
    };
} | {
    retract_order: {
        amount?: Uint128 | null;
        order_idx: Uint128;
    };
} | {
    retract_orders: {
        order_idxs: Uint128[];
    };
} | {
    withdraw_orders: {
        order_idxs?: Uint128[] | null;
    };
};
export type Binary = string;
export interface Cw20ReceiveMsg {
    amount: Uint128;
    msg: Binary;
    sender: string;
}
export interface Coin {
    amount: Uint128;
    denom: string;
}
export interface InstantiateMsg {
    denoms: [CW20Denom, CW20Denom];
    owner: Addr;
    price_precision: Precision;
}
export type Timestamp = Uint64;
export type Uint64 = string;
export interface OrderResponse {
    created_at: Timestamp;
    filled_amount: Uint128;
    idx: Uint128;
    offer_amount: Uint128;
    offer_denom: CW20Denom;
    original_offer_amount: Uint128;
    owner: Addr;
    quote_price: Decimal;
}
export interface OrdersResponse {
    orders: OrderResponse[];
}
export interface PriceResponse {
    pools: [PoolResponse, PoolResponse];
}
export type QueryMsg = {
    config: {};
} | {
    simulation: {
        offer_asset: Asset;
    };
} | {
    order: {
        order_idx: Uint128;
    };
} | {
    orders_by_user: {
        address: Addr;
        limit?: number | null;
        start_after?: Uint128 | null;
    };
} | {
    price: {
        price: Decimal;
    };
} | {
    book: {
        limit?: number | null;
        offset?: number | null;
    };
};
export type AssetInfo = {
    token: {
        contract_addr: string;
    };
} | {
    native_token: {
        denom: string;
    };
};
export interface Asset {
    amount: Uint128;
    info: AssetInfo;
}
export interface SimulationResponse {
    commission_amount: Uint128;
    return_amount: Uint128;
    spread_amount: Uint128;
}
export interface FinReadOnlyInterface {
    contractAddress: string;
    config: () => Promise<ConfigResponse>;
    simulation: ({ offerAsset, }: {
        offerAsset: Asset;
    }) => Promise<SimulationResponse>;
    order: ({ orderIdx }: {
        orderIdx: string;
    }) => Promise<OrderResponse>;
    ordersByUser: ({ address, limit, startAfter, }: {
        address: string;
        limit?: number;
        startAfter?: Uint128;
    }) => Promise<OrdersResponse>;
    price: ({ price }: {
        price: string;
    }) => Promise<PriceResponse>;
    book: ({ limit, offset, }: {
        limit?: number;
        offset?: number;
    }) => Promise<BookResponse>;
}
