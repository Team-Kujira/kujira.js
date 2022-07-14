// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { Registry, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { QueryAccountResponse } from "./types/ethermint/evm/v1/query";
import { MsgEthereumTx } from "./types/ethermint/evm/v1/tx";

export const types = [
  ["/ethermint.types.v1.EthAccount", QueryAccountResponse],
  ["/ethermint.evm.v1.MsgEthereumTx", MsgEthereumTx],
];
export const MissingWalletError = new Error("wallet is required");

export const registry = new Registry(<any>types);

export const txClient = {
  msgEthereumTx: (data: MsgEthereumTx): EncodeObject => ({
    typeUrl: "/ethermint.evm.v1.MsgEthereumTx",
    value: MsgEthereumTx.fromPartial(data),
  }),
};

export { Api };
