import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
const types = [];
export const MissingWalletError = new Error("wallet is required");
export const registry = new Registry(types);
const txClient = {};
export { txClient, Api };
