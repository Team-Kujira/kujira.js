import { assert } from "@cosmjs/utils";
import {
  QueryClientImpl,
  QueryDenomToERC20Request,
  QueryDenomToERC20Response,
  QueryPendingSendToEth,
  QueryPendingSendToEthResponse,
} from "./query";

import { createProtobufRpcClient, QueryClient } from "@cosmjs/stargate";
import { Params } from "./genesis";

export interface GravityExtension {
  readonly gravity: {
    readonly params: () => Promise<Params>;
    readonly pendingSendToEth: (
      q: QueryPendingSendToEth
    ) => Promise<QueryPendingSendToEthResponse>;
    readonly denomToERC20: (
      q: QueryDenomToERC20Request
    ) => Promise<QueryDenomToERC20Response>;
  };
}

export function setupGravityExtension(base: QueryClient): GravityExtension {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);

  return {
    gravity: {
      params: async () => {
        const { params } = await queryService.Params({});
        assert(params);
        return params;
      },
      pendingSendToEth: async (q: QueryPendingSendToEth) => {
        return queryService.GetPendingSendToEth(q);
      },
      denomToERC20: async (q: QueryDenomToERC20Request) => {
        return queryService.DenomToERC20(q);
      },
    },
  };
}
