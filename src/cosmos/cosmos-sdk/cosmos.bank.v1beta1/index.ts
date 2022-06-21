import { Registry, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgMultiSend, MsgSend } from "./types/tx";

const types = [
  ["/cosmos.bank.v1beta1.MsgSend", MsgSend],
  ["/cosmos.bank.v1beta1.MsgMultiSend", MsgMultiSend],
];

export const registry = new Registry(<any>types);

const txClient = {
  msgSend: (data: MsgSend): EncodeObject => ({
    typeUrl: "/cosmos.bank.v1beta1.MsgSend",
    value: MsgSend.fromPartial(data),
  }),
  msgMultiSend: (data: MsgMultiSend): EncodeObject => ({
    typeUrl: "/cosmos.bank.v1beta1.MsgMultiSend",
    value: MsgMultiSend.fromPartial(data),
  }),
};

export { txClient, Api, types };
