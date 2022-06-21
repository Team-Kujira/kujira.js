import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
export declare const registry: Registry;
declare const txClient: {};
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, Api, queryClient };
