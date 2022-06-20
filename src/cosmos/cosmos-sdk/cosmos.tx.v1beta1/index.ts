import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";

const types: any = [];
export const MissingWalletError = new Error("wallet is required");

export const registry = new Registry(<any>types);

export { Api };
