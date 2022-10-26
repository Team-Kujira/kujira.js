import {
  CosmWasmClient,
  SigningCosmWasmClient,
  ExecuteResult,
} from "@cosmjs/cosmwasm-stargate";
import { Coin, StdFee } from "@cosmjs/amino";

import { Addr } from "./common";

export type Uint64 = string;
export interface InstantiateMsg {
  can_bid: boolean;
  denom: string;
  deposit_duration: Uint64;
  max_open: Uint64;
  open_duration: Uint64;
  registrar: string;
}
export type ExecuteMsg =
  | {
      place_bid: {
        domain: string;
      };
    }
  | {
      increase_bid: {
        domain: string;
      };
    }
  | {
      withdraw_bid: {
        domain: string;
      };
    }
  | {
      claim_auction: {
        domain: string;
      };
    }
  | {
      open_auction: {};
    }
  | {
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
export type QueryMsg =
  | {
      bids_by_domain: {
        domain: string;
        limit?: Uint64 | null;
        start_after?: Uint128 | null;
      };
    }
  | {
      bids_by_bidder: {
        bidder: string;
        limit?: Uint64 | null;
        start_after?: Uint128 | null;
      };
    }
  | {
      auction: {
        domain: string;
      };
    }
  | {
      auctions: {
        limit?: Uint64 | null;
        start_after?: string | null;
        state?: string | null;
      };
    }
  | {
      config: {};
    };
export type Uint128 = string;
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
  bidsByDomain: ({
    domain,
    limit,
    startAfter,
  }: {
    domain: string;
    limit?: Uint64;
    startAfter?: Uint128;
  }) => Promise<BidsResponse>;
  bidsByBidder: ({
    bidder,
    limit,
    startAfter,
  }: {
    bidder: string;
    limit?: Uint64;
    startAfter?: Uint128;
  }) => Promise<BidsResponse>;
  auction: ({ domain }: { domain: string }) => Promise<Auction>;
  auctions: ({
    limit,
    startAfter,
    state,
  }: {
    limit?: Uint64;
    startAfter?: string;
    state?: string;
  }) => Promise<AuctionsResponse>;
  config: () => Promise<ConfigResponse>;
}
export class AuctionsQueryClient implements AuctionsReadOnlyInterface {
  client: CosmWasmClient;
  contractAddress: string;

  constructor(client: CosmWasmClient, contractAddress: string) {
    this.client = client;
    this.contractAddress = contractAddress;
    this.bidsByDomain = this.bidsByDomain.bind(this);
    this.bidsByBidder = this.bidsByBidder.bind(this);
    this.auction = this.auction.bind(this);
    this.auctions = this.auctions.bind(this);
    this.config = this.config.bind(this);
  }

  bidsByDomain = async ({
    domain,
    limit,
    startAfter,
  }: {
    domain: string;
    limit?: Uint64;
    startAfter?: Uint128;
  }): Promise<BidsResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      bids_by_domain: {
        domain,
        limit,
        start_after: startAfter,
      },
    });
  };
  bidsByBidder = async ({
    bidder,
    limit,
    startAfter,
  }: {
    bidder: string;
    limit?: Uint64;
    startAfter?: Uint128;
  }): Promise<BidsResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      bids_by_bidder: {
        bidder,
        limit,
        start_after: startAfter,
      },
    });
  };
  auction = async ({ domain }: { domain: string }): Promise<Auction> => {
    return this.client.queryContractSmart(this.contractAddress, {
      auction: {
        domain,
      },
    });
  };
  auctions = async ({
    limit,
    startAfter,
    state,
  }: {
    limit?: Uint64;
    startAfter?: string;
    state?: string;
  }): Promise<AuctionsResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      auctions: {
        limit,
        start_after: startAfter,
        state,
      },
    });
  };
  config = async (): Promise<ConfigResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      config: {},
    });
  };
}
export interface AuctionsInterface extends AuctionsReadOnlyInterface {
  contractAddress: string;
  sender: string;
  placeBid: (
    {
      domain,
    }: {
      domain: string;
    },
    fee?: number | StdFee | "auto",
    memo?: string,
    funds?: Coin[]
  ) => Promise<ExecuteResult>;
  increaseBid: (
    {
      domain,
    }: {
      domain: string;
    },
    fee?: number | StdFee | "auto",
    memo?: string,
    funds?: Coin[]
  ) => Promise<ExecuteResult>;
  withdrawBid: (
    {
      domain,
    }: {
      domain: string;
    },
    fee?: number | StdFee | "auto",
    memo?: string,
    funds?: Coin[]
  ) => Promise<ExecuteResult>;
  claimAuction: (
    {
      domain,
    }: {
      domain: string;
    },
    fee?: number | StdFee | "auto",
    memo?: string,
    funds?: Coin[]
  ) => Promise<ExecuteResult>;
  openAuction: (
    fee?: number | StdFee | "auto",
    memo?: string,
    funds?: Coin[]
  ) => Promise<ExecuteResult>;
  configure: (
    {
      admin,
      canBid,
      denom,
      depositDuration,
      maxOpen,
      openDuration,
      registrar,
    }: {
      admin?: string;
      canBid?: boolean;
      denom?: string;
      depositDuration?: Uint64;
      maxOpen?: Uint64;
      openDuration?: Uint64;
      registrar?: string;
    },
    fee?: number | StdFee | "auto",
    memo?: string,
    funds?: Coin[]
  ) => Promise<ExecuteResult>;
}
export class AuctionsClient
  extends AuctionsQueryClient
  implements AuctionsInterface
{
  client: SigningCosmWasmClient;
  sender: string;
  contractAddress: string;

  constructor(
    client: SigningCosmWasmClient,
    sender: string,
    contractAddress: string
  ) {
    super(client, contractAddress);
    this.client = client;
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.placeBid = this.placeBid.bind(this);
    this.increaseBid = this.increaseBid.bind(this);
    this.withdrawBid = this.withdrawBid.bind(this);
    this.claimAuction = this.claimAuction.bind(this);
    this.openAuction = this.openAuction.bind(this);
    this.configure = this.configure.bind(this);
  }

  placeBid = async (
    {
      domain,
    }: {
      domain: string;
    },
    fee: number | StdFee | "auto" = "auto",
    memo?: string,
    funds?: Coin[]
  ): Promise<ExecuteResult> => {
    return await this.client.execute(
      this.sender,
      this.contractAddress,
      {
        place_bid: {
          domain,
        },
      },
      fee,
      memo,
      funds
    );
  };
  increaseBid = async (
    {
      domain,
    }: {
      domain: string;
    },
    fee: number | StdFee | "auto" = "auto",
    memo?: string,
    funds?: Coin[]
  ): Promise<ExecuteResult> => {
    return await this.client.execute(
      this.sender,
      this.contractAddress,
      {
        increase_bid: {
          domain,
        },
      },
      fee,
      memo,
      funds
    );
  };
  withdrawBid = async (
    {
      domain,
    }: {
      domain: string;
    },
    fee: number | StdFee | "auto" = "auto",
    memo?: string,
    funds?: Coin[]
  ): Promise<ExecuteResult> => {
    return await this.client.execute(
      this.sender,
      this.contractAddress,
      {
        withdraw_bid: {
          domain,
        },
      },
      fee,
      memo,
      funds
    );
  };
  claimAuction = async (
    {
      domain,
    }: {
      domain: string;
    },
    fee: number | StdFee | "auto" = "auto",
    memo?: string,
    funds?: Coin[]
  ): Promise<ExecuteResult> => {
    return await this.client.execute(
      this.sender,
      this.contractAddress,
      {
        claim_auction: {
          domain,
        },
      },
      fee,
      memo,
      funds
    );
  };
  openAuction = async (
    fee: number | StdFee | "auto" = "auto",
    memo?: string,
    funds?: Coin[]
  ): Promise<ExecuteResult> => {
    return await this.client.execute(
      this.sender,
      this.contractAddress,
      {
        open_auction: {},
      },
      fee,
      memo,
      funds
    );
  };
  configure = async (
    {
      admin,
      canBid,
      denom,
      depositDuration,
      maxOpen,
      openDuration,
      registrar,
    }: {
      admin?: string;
      canBid?: boolean;
      denom?: string;
      depositDuration?: Uint64;
      maxOpen?: Uint64;
      openDuration?: Uint64;
      registrar?: string;
    },
    fee: number | StdFee | "auto" = "auto",
    memo?: string,
    funds?: Coin[]
  ): Promise<ExecuteResult> => {
    return await this.client.execute(
      this.sender,
      this.contractAddress,
      {
        configure: {
          admin,
          can_bid: canBid,
          denom,
          deposit_duration: depositDuration,
          max_open: maxOpen,
          open_duration: openDuration,
          registrar,
        },
      },
      fee,
      memo,
      funds
    );
  };
}
