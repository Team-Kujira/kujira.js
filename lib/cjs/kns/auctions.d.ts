import { CosmWasmClient, SigningCosmWasmClient, ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { Coin, StdFee } from "@cosmjs/amino";
import { Addr } from "./common";
export declare type Uint64 = string;
export interface InstantiateMsg {
    can_bid: boolean;
    denom: string;
    deposit_duration: Uint64;
    max_open: Uint64;
    open_duration: Uint64;
    registrar: string;
}
export declare type ExecuteMsg = {
    place_bid: {
        domain: string;
    };
} | {
    increase_bid: {
        domain: string;
    };
} | {
    withdraw_bid: {
        domain: string;
    };
} | {
    claim_auction: {
        domain: string;
    };
} | {
    open_auction: {};
} | {
    configure: {
        admin?: string | null;
        can_bid?: boolean | null;
        denom?: string | null;
        deposit_duration?: Uint64 | null;
        max_open?: Uint64 | null;
        open_duration?: Uint64 | null;
        registrar?: string | null;
    };
};
export declare type QueryMsg = {
    bids_by_domain: {
        domain: string;
        limit?: Uint64 | null;
        start_after?: Uint128 | null;
    };
} | {
    bids_by_bidder: {
        bidder: string;
        limit?: Uint64 | null;
        start_after?: Uint128 | null;
    };
} | {
    auction: {
        domain: string;
    };
} | {
    auctions: {
        limit?: Uint64 | null;
        start_after?: string | null;
        state?: string | null;
    };
} | {
    config: {};
};
export declare type Uint128 = string;
export interface Auction {
    bid_id: Uint128;
    deposit_start: Uint64;
    domain: string;
    id: Uint128;
    open_start?: Uint64 | null;
    total: Uint128;
}
export interface AuctionsResponse {
    auctions: Auction[];
}
export interface BidsResponse {
    bids: Bid[];
}
export interface Bid {
    amount: Uint128;
    auction_id: Uint128;
    bidder: Addr;
    id: Uint128;
}
export interface ConfigResponse {
    admin: string;
    can_bid: boolean;
    denom: string;
    deposit_duration: Uint64;
    max_open: Uint64;
    open_duration: Uint64;
    registrar: string;
}
export interface AuctionsReadOnlyInterface {
    contractAddress: string;
    bidsByDomain: ({ domain, limit, startAfter, }: {
        domain: string;
        limit?: Uint64;
        startAfter?: Uint128;
    }) => Promise<BidsResponse>;
    bidsByBidder: ({ bidder, limit, startAfter, }: {
        bidder: string;
        limit?: Uint64;
        startAfter?: Uint128;
    }) => Promise<BidsResponse>;
    auction: ({ domain }: {
        domain: string;
    }) => Promise<Auction>;
    auctions: ({ limit, startAfter, state, }: {
        limit?: Uint64;
        startAfter?: string;
        state?: string;
    }) => Promise<AuctionsResponse>;
    config: () => Promise<ConfigResponse>;
}
export declare class AuctionsQueryClient implements AuctionsReadOnlyInterface {
    client: CosmWasmClient;
    contractAddress: string;
    constructor(client: CosmWasmClient, contractAddress: string);
    bidsByDomain: ({ domain, limit, startAfter, }: {
        domain: string;
        limit?: string | undefined;
        startAfter?: string | undefined;
    }) => Promise<BidsResponse>;
    bidsByBidder: ({ bidder, limit, startAfter, }: {
        bidder: string;
        limit?: string | undefined;
        startAfter?: string | undefined;
    }) => Promise<BidsResponse>;
    auction: ({ domain }: {
        domain: string;
    }) => Promise<Auction>;
    auctions: ({ limit, startAfter, state, }: {
        limit?: string | undefined;
        startAfter?: string | undefined;
        state?: string | undefined;
    }) => Promise<AuctionsResponse>;
    config: () => Promise<ConfigResponse>;
}
export interface AuctionsInterface extends AuctionsReadOnlyInterface {
    contractAddress: string;
    sender: string;
    placeBid: ({ domain, }: {
        domain: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    increaseBid: ({ domain, }: {
        domain: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    withdrawBid: ({ domain, }: {
        domain: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    claimAuction: ({ domain, }: {
        domain: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    openAuction: (fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    configure: ({ admin, canBid, denom, depositDuration, maxOpen, openDuration, registrar, }: {
        admin?: string;
        canBid?: boolean;
        denom?: string;
        depositDuration?: Uint64;
        maxOpen?: Uint64;
        openDuration?: Uint64;
        registrar?: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
}
export declare class AuctionsClient extends AuctionsQueryClient implements AuctionsInterface {
    client: SigningCosmWasmClient;
    sender: string;
    contractAddress: string;
    constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string);
    placeBid: ({ domain, }: {
        domain: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    increaseBid: ({ domain, }: {
        domain: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    withdrawBid: ({ domain, }: {
        domain: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    claimAuction: ({ domain, }: {
        domain: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    openAuction: (fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    configure: ({ admin, canBid, denom, depositDuration, maxOpen, openDuration, registrar, }: {
        admin?: string | undefined;
        canBid?: boolean | undefined;
        denom?: string | undefined;
        depositDuration?: string | undefined;
        maxOpen?: string | undefined;
        openDuration?: string | undefined;
        registrar?: string | undefined;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
}
