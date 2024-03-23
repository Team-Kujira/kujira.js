import { QueryAllHookResponse } from "./types/query";
import { Params } from "./types/params";
import { QueryClient } from "@cosmjs/stargate";
import { Hook } from "./types/hook";
export interface SchedulerExtension {
    readonly scheduler: {
        readonly params: () => Promise<Params>;
        readonly hook: (id: number) => Promise<Hook>;
        readonly allHooks: (paginationKey?: Uint8Array) => Promise<QueryAllHookResponse>;
    };
}
export declare function setupSchedulerExtension(base: QueryClient): SchedulerExtension;
