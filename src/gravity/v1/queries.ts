import { assert } from "@cosmjs/utils";
import { QueryClientImpl } from "./query";

import { createProtobufRpcClient, QueryClient } from "@cosmjs/stargate";
import { Params } from "./genesis";

export interface GravityExtension {
  readonly gravity: {
    readonly params: () => Promise<Params>;
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
    },
  };
}
