import { assert } from "@cosmjs/utils";
import { QueryAllHookResponse, QueryClientImpl } from "./types/query";
import { Params } from "./types/params";

import {
  createPagination,
  createProtobufRpcClient,
  QueryClient,
} from "@cosmjs/stargate";
import { Hook } from "./types/hook";

export interface SchedulerExtension {
  readonly scheduler: {
    readonly params: () => Promise<Params>;
    readonly hook: (id: number) => Promise<Hook>;
    readonly allHooks: (
      paginationKey?: Uint8Array
    ) => Promise<QueryAllHookResponse>;
  };
}

export function setupSchedulerExtension(base: QueryClient): SchedulerExtension {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);

  return {
    scheduler: {
      params: async () => {
        const { params } = await queryService.Params({});
        assert(params);
        return params;
      },
      hook: async (id) => {
        const { Hook } = await queryService.Hook({ id });
        assert(Hook);
        return Hook;
      },
      allHooks: async (paginationKey?: Uint8Array) => {
        return queryService.HookAll({
          pagination: createPagination(paginationKey),
        });
      },
    },
  };
}
