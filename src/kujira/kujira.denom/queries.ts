import { assert } from "@cosmjs/utils";
import { QueryClientImpl } from "./types/query";
import { Params } from "./types/params";
import { DenomAuthorityMetadata } from "./types/authorityMetadata";

import { createProtobufRpcClient, QueryClient } from "@cosmjs/stargate";

export interface DenomExtension {
  readonly denom: {
    readonly params: () => Promise<Params>;
    readonly fromCreator: (creator: string) => Promise<string[]>;
    readonly authorityMetadata: (
      denom: string
    ) => Promise<DenomAuthorityMetadata>;
  };
}

export function setupDenomExtension(base: QueryClient): DenomExtension {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);

  return {
    denom: {
      params: async () => {
        const { params } = await queryService.Params({});
        assert(params);
        return params;
      },
      fromCreator: async (creator: string) => {
        const { denoms } = await queryService.DenomsFromCreator({
          creator,
        });
        return denoms;
      },
      authorityMetadata: async (denom: string) => {
        const { authority_metadata } =
          await queryService.DenomAuthorityMetadata({
            denom,
          });
        assert(authority_metadata);
        return authority_metadata;
      },
    },
  };
}
