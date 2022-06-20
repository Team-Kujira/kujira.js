import { Registry, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgSubmitEvidence } from "./types/cosmos/evidence/v1beta1/tx";

const types = [
  ["/cosmos.evidence.v1beta1.MsgSubmitEvidence", MsgSubmitEvidence],
];
export const MissingWalletError = new Error("wallet is required");

export const registry = new Registry(<any>types);

const txClient = {
  msgSubmitEvidence: (data: MsgSubmitEvidence): EncodeObject => ({
    typeUrl: "/cosmos.evidence.v1beta1.MsgSubmitEvidence",
    value: MsgSubmitEvidence.fromPartial(data),
  }),
};

export { txClient, Api, types };
