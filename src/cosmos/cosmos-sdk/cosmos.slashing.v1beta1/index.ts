import { Registry, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgUnjail } from "./types/tx";

const types = [["/cosmos.slashing.v1beta1.MsgUnjail", MsgUnjail]];

export const registry = new Registry(<any>types);

const txClient = {
  msgUnjail: (data: MsgUnjail): EncodeObject => ({
    typeUrl: "/cosmos.slashing.v1beta1.MsgUnjail",
    value: MsgUnjail.fromPartial(data),
  }),
};

export { txClient, Api, types };
