import { Registry, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgVerifyInvariant } from "./types/cosmos/crisis/v1beta1/tx";

const types = [
  ["/cosmos.crisis.v1beta1.MsgVerifyInvariant", MsgVerifyInvariant],
];
export const MissingWalletError = new Error("wallet is required");

export const registry = new Registry(<any>types);

const txClient = {
  msgVerifyInvariant: (data: MsgVerifyInvariant): EncodeObject => ({
    typeUrl: "/cosmos.crisis.v1beta1.MsgVerifyInvariant",
    value: MsgVerifyInvariant.fromPartial(data),
  }),
};

export { txClient, Api, types };
