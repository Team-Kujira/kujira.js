import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";

const types: any = [];

export const registry = new Registry(<any>types);

const txClient = {};

export { txClient, Api };
