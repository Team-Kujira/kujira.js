import { Registry, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgTransfer } from "./types/applications/transfer/tx";

const types = [["/ibc.applications.transfer.v1.MsgTransfer", MsgTransfer]];

export const registry = new Registry(<any>types);

const txClient = {
  msgTransfer: (data: MsgTransfer): EncodeObject => ({
    typeUrl: "/ibc.applications.transfer.v1.MsgTransfer",
    value: MsgTransfer.fromPartial(data),
  }),
};

export { txClient, Api, types };
