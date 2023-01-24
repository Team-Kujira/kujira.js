import { StdFee } from "@cosmjs/amino";
import {
  CosmWasmClient,
  ExecuteResult,
  SigningCosmWasmClient,
} from "@cosmjs/cosmwasm-stargate";
import { Coin } from "@cosmjs/stargate";
import {
  Addr,
  Asset,
  BookResponse,
  ConfigResponse,
  Decimal,
  FinReadOnlyInterface,
  OrderResponse,
  OrdersResponse,
  Precision,
  PriceResponse,
  SimulationResponse,
  Uint128,
} from "./fin/types";
export * from "./fin";

export class FinQueryClient implements FinReadOnlyInterface {
  client: CosmWasmClient;
  contractAddress: string;

  constructor(client: CosmWasmClient, contractAddress: string) {
    this.client = client;
    this.contractAddress = contractAddress;
    this.config = this.config.bind(this);
    this.simulation = this.simulation.bind(this);
    this.order = this.order.bind(this);
    this.ordersByUser = this.ordersByUser.bind(this);
    this.price = this.price.bind(this);
    this.book = this.book.bind(this);
  }

  config = async (): Promise<ConfigResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      config: {},
    });
  };
  simulation = async ({
    offerAsset,
  }: {
    offerAsset: Asset;
  }): Promise<SimulationResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      simulation: {
        offer_asset: offerAsset,
      },
    });
  };
  order = async ({
    orderIdx,
  }: {
    orderIdx: string;
  }): Promise<OrderResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      order: {
        order_idx: orderIdx,
      },
    });
  };
  ordersByUser = async ({
    address,
    limit,
    startAfter,
  }: {
    address: string;
    limit?: number;
    startAfter?: Uint128;
  }): Promise<OrdersResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      orders_by_user: {
        address,
        limit,
        start_after: startAfter,
      },
    });
  };
  price = async ({ price }: { price: string }): Promise<PriceResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      price: {
        price,
      },
    });
  };
  book = async ({
    limit,
    offset,
  }: {
    limit?: number;
    offset?: number;
  }): Promise<BookResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      book: {
        limit,
        offset,
      },
    });
  };
}
export interface FinInterface extends FinReadOnlyInterface {
  contractAddress: string;
  sender: string;
  receive: (
    {
      amount,
      msg,
      sender,
    }: {
      amount: string;
      msg: string;
      sender: string;
    },
    fee?: number | StdFee | "auto",
    memo?: string,
    funds?: readonly Coin[]
  ) => Promise<ExecuteResult>;
  launch: (
    fee?: number | StdFee | "auto",
    memo?: string,
    funds?: readonly Coin[]
  ) => Promise<ExecuteResult>;
  updateConfig: (
    {
      owner,
      pricePrecision,
    }: {
      owner?: Addr;
      pricePrecision?: Precision;
    },
    fee?: number | StdFee | "auto",
    memo?: string,
    funds?: readonly Coin[]
  ) => Promise<ExecuteResult>;
  submitOrder: (
    {
      price,
    }: {
      price: Decimal;
    },
    fee?: number | StdFee | "auto",
    memo?: string,
    funds?: readonly Coin[]
  ) => Promise<ExecuteResult>;
  swap: (
    {
      beliefPrice,
      maxSpread,
      offerAsset,
      to,
    }: {
      beliefPrice?: Decimal;
      maxSpread?: Decimal;
      offerAsset?: Coin;
      to?: Addr;
    },
    fee?: number | StdFee | "auto",
    memo?: string,
    funds?: readonly Coin[]
  ) => Promise<ExecuteResult>;
  retractOrder: (
    {
      amount,
      orderIdx,
    }: {
      amount?: Uint128;
      orderIdx: Uint128;
    },
    fee?: number | StdFee | "auto",
    memo?: string,
    funds?: readonly Coin[]
  ) => Promise<ExecuteResult>;
  retractOrders: (
    {
      orderIdxs,
    }: {
      orderIdxs: Uint128[];
    },
    fee?: number | StdFee | "auto",
    memo?: string,
    funds?: readonly Coin[]
  ) => Promise<ExecuteResult>;
  withdrawOrders: (
    {
      orderIdxs,
    }: {
      orderIdxs?: string[];
    },
    fee?: number | StdFee | "auto",
    memo?: string,
    funds?: readonly Coin[]
  ) => Promise<ExecuteResult>;
}
export class FinClient extends FinQueryClient implements FinInterface {
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
    this.receive = this.receive.bind(this);
    this.launch = this.launch.bind(this);
    this.updateConfig = this.updateConfig.bind(this);
    this.submitOrder = this.submitOrder.bind(this);
    this.swap = this.swap.bind(this);
    this.retractOrder = this.retractOrder.bind(this);
    this.retractOrders = this.retractOrders.bind(this);
    this.withdrawOrders = this.withdrawOrders.bind(this);
  }

  receive = async (
    {
      amount,
      msg,
      sender,
    }: {
      amount: string;
      msg: string;
      sender: string;
    },
    fee: number | StdFee | "auto" = "auto",
    memo?: string,
    funds?: readonly Coin[]
  ): Promise<ExecuteResult> => {
    return await this.client.execute(
      this.sender,
      this.contractAddress,
      {
        receive: {
          amount,
          msg,
          sender,
        },
      },
      fee,
      memo,
      funds
    );
  };
  launch = async (
    fee: number | StdFee | "auto" = "auto",
    memo?: string,
    funds?: readonly Coin[]
  ): Promise<ExecuteResult> => {
    return await this.client.execute(
      this.sender,
      this.contractAddress,
      {
        launch: {},
      },
      fee,
      memo,
      funds
    );
  };
  updateConfig = async (
    {
      owner,
      pricePrecision,
    }: {
      owner?: Addr;
      pricePrecision?: Precision;
    },
    fee: number | StdFee | "auto" = "auto",
    memo?: string,
    funds?: readonly Coin[]
  ): Promise<ExecuteResult> => {
    return await this.client.execute(
      this.sender,
      this.contractAddress,
      {
        update_config: {
          owner,
          price_precision: pricePrecision,
        },
      },
      fee,
      memo,
      funds
    );
  };
  submitOrder = async (
    {
      price,
    }: {
      price: Decimal;
    },
    fee: number | StdFee | "auto" = "auto",
    memo?: string,
    funds?: readonly Coin[]
  ): Promise<ExecuteResult> => {
    return await this.client.execute(
      this.sender,
      this.contractAddress,
      {
        submit_order: {
          price,
        },
      },
      fee,
      memo,
      funds
    );
  };
  swap = async (
    {
      beliefPrice,
      maxSpread,
      offerAsset,
      to,
    }: {
      beliefPrice?: Decimal;
      maxSpread?: Decimal;
      offerAsset?: Coin;
      to?: Addr;
    },
    fee: number | StdFee | "auto" = "auto",
    memo?: string,
    funds?: readonly Coin[]
  ): Promise<ExecuteResult> => {
    return await this.client.execute(
      this.sender,
      this.contractAddress,
      {
        swap: {
          belief_price: beliefPrice,
          max_spread: maxSpread,
          offer_asset: offerAsset,
          to,
        },
      },
      fee,
      memo,
      funds
    );
  };
  retractOrder = async (
    {
      amount,
      orderIdx,
    }: {
      amount?: Uint128;
      orderIdx: Uint128;
    },
    fee: number | StdFee | "auto" = "auto",
    memo?: string,
    funds?: readonly Coin[]
  ): Promise<ExecuteResult> => {
    return await this.client.execute(
      this.sender,
      this.contractAddress,
      {
        retract_order: {
          amount,
          order_idx: orderIdx,
        },
      },
      fee,
      memo,
      funds
    );
  };
  retractOrders = async (
    {
      orderIdxs,
    }: {
      orderIdxs: Uint128[];
    },
    fee: number | StdFee | "auto" = "auto",
    memo?: string,
    funds?: readonly Coin[]
  ): Promise<ExecuteResult> => {
    return await this.client.execute(
      this.sender,
      this.contractAddress,
      {
        retract_orders: {
          order_idxs: orderIdxs,
        },
      },
      fee,
      memo,
      funds
    );
  };
  withdrawOrders = async (
    {
      orderIdxs,
    }: {
      orderIdxs?: string[];
    },
    fee: number | StdFee | "auto" = "auto",
    memo?: string,
    funds?: readonly Coin[]
  ): Promise<ExecuteResult> => {
    return await this.client.execute(
      this.sender,
      this.contractAddress,
      {
        withdraw_orders: {
          order_idxs: orderIdxs,
        },
      },
      fee,
      memo,
      funds
    );
  };
}
