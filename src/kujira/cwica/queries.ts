import { assert } from "@cosmjs/utils";
import { QueryClientImpl, QueryInterchainAccountRequest } from "./types/query";

import { createProtobufRpcClient, QueryClient } from "@cosmjs/stargate";

export interface CwIcaExtension {
  readonly denom: {
    readonly account: (req: QueryInterchainAccountRequest) => Promise<string>;
  };
}

export function setupCwIcaExtension(base: QueryClient): CwIcaExtension {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);

  return {
    denom: {
      account: async (req: QueryInterchainAccountRequest) => {
        const { interchainAccountAddress } =
          await queryService.InterchainAccount(req);
        assert(interchainAccountAddress);
        return interchainAccountAddress;
      },
    },
  };
}
