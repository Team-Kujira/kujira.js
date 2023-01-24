import { StdFee } from "@cosmjs/amino";
import { CosmWasmClient, ExecuteResult, SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import { Coin } from "@cosmjs/stargate";
import { Addr, Asset, BookResponse, ConfigResponse, Decimal, FinReadOnlyInterface, OrderResponse, OrdersResponse, Precision, PriceResponse, SimulationResponse, Uint128 } from "./fin/types";
export * from "./fin";
export * from "./fin/client";
export * from "./fin/margin";
export * from "./fin/pairs";
export * from "./fin/types";
export declare class FinQueryClient implements FinReadOnlyInterface {
    client: CosmWasmClient;
    contractAddress: string;
    constructor(client: CosmWasmClient, contractAddress: string);
    config: () => Promise<ConfigResponse>;
    simulation: ({ offerAsset, }: {
        offerAsset: Asset;
    }) => Promise<SimulationResponse>;
    order: ({ orderIdx, }: {
        orderIdx: string;
    }) => Promise<OrderResponse>;
    ordersByUser: ({ address, limit, startAfter, }: {
        address: string;
        limit?: number | undefined;
        startAfter?: string | undefined;
    }) => Promise<OrdersResponse>;
    price: ({ price }: {
        price: string;
    }) => Promise<PriceResponse>;
    book: ({ limit, offset, }: {
        limit?: number | undefined;
        offset?: number | undefined;
    }) => Promise<BookResponse>;
}
export interface FinInterface extends FinReadOnlyInterface {
    contractAddress: string;
    sender: string;
    receive: ({ amount, msg, sender, }: {
        amount: string;
        msg: string;
        sender: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
    launch: (fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
    updateConfig: ({ owner, pricePrecision, }: {
        owner?: Addr;
        pricePrecision?: Precision;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
    submitOrder: ({ price, }: {
        price: Decimal;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
    swap: ({ beliefPrice, maxSpread, offerAsset, to, }: {
        beliefPrice?: Decimal;
        maxSpread?: Decimal;
        offerAsset?: Coin;
        to?: Addr;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
    retractOrder: ({ amount, orderIdx, }: {
        amount?: Uint128;
        orderIdx: Uint128;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
    retractOrders: ({ orderIdxs, }: {
        orderIdxs: Uint128[];
    }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
    withdrawOrders: ({ orderIdxs, }: {
        orderIdxs?: string[];
    }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
}
export declare class FinClient extends FinQueryClient implements FinInterface {
    client: SigningCosmWasmClient;
    sender: string;
    contractAddress: string;
    constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string);
    receive: ({ amount, msg, sender, }: {
        amount: string;
        msg: string;
        sender: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
    launch: (fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
    updateConfig: ({ owner, pricePrecision, }: {
        owner?: string | undefined;
        pricePrecision?: Precision | undefined;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
    submitOrder: ({ price, }: {
        price: Decimal;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
    swap: ({ beliefPrice, maxSpread, offerAsset, to, }: {
        beliefPrice?: string | undefined;
        maxSpread?: string | undefined;
        offerAsset?: Coin | undefined;
        to?: string | undefined;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
    retractOrder: ({ amount, orderIdx, }: {
        amount?: string | undefined;
        orderIdx: Uint128;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
    retractOrders: ({ orderIdxs, }: {
        orderIdxs: Uint128[];
    }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
    withdrawOrders: ({ orderIdxs, }: {
        orderIdxs?: string[] | undefined;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
}
