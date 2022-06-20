import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";

const types: any = [];
export const MissingWalletError = new Error("wallet is required");

export const registry = new Registry(<any>types);

const txClient = {};

interface QueryClientOptions {
  addr: string;
}

const queryClient = async (
  { addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }
) => {
  return new Api({ baseUrl: addr });
};

export { txClient, Api, queryClient };
