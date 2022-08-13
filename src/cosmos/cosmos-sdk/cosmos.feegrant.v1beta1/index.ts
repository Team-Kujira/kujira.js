import { Registry, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import {
  BasicAllowance,
  PeriodicAllowance,
  AllowedMsgAllowance,
} from "./types/feegrant";
import { MsgGrantAllowance, MsgRevokeAllowance } from "./types/tx";

const types = [
  ["/cosmos.feegrant.v1beta1.MsgGrantAllowance", MsgGrantAllowance],
  ["/cosmos.feegrant.v1beta1.MsgRevokeAllowance", MsgRevokeAllowance],
  ["/cosmos.feegrant.v1beta1.BasicAllowance", BasicAllowance],
  ["/cosmos.feegrant.v1beta1.PeriodicAllowance", PeriodicAllowance],
  ["/cosmos.feegrant.v1beta1.AllowedMsgAllowance", AllowedMsgAllowance],
];

export const registry = new Registry(<any>types);

const txClient = {
  msgGrantAllowance: (data: MsgGrantAllowance): EncodeObject => ({
    typeUrl: "/cosmos.feegrant.v1beta1.MsgGrantAllowance",
    value: MsgGrantAllowance.fromPartial(data),
  }),
  msgRevokeAllowance: (data: MsgRevokeAllowance): EncodeObject => ({
    typeUrl: "/cosmos.feegrant.v1beta1.MsgRevokeAllowance",
    value: MsgRevokeAllowance.fromPartial(data),
  }),
};

export { txClient, Api, types };
