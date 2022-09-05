import { Registry, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { GenericAuthorization } from "./types/authz";
import { MsgExec, MsgRevoke, MsgGrant } from "./types/tx";

const types = [
  ["/cosmos.authz.v1beta1.MsgExec", MsgExec],
  ["/cosmos.authz.v1beta1.MsgRevoke", MsgRevoke],
  ["/cosmos.authz.v1beta1.MsgGrant", MsgGrant],
  ["/cosmos.authz.v1beta1.GenericAuthorization", GenericAuthorization],
];

export const registry = new Registry(<any>types);

const txClient = {
  msgExec: (data: MsgExec): EncodeObject => ({
    typeUrl: "/cosmos.authz.v1beta1.MsgExec",
    value: MsgExec.fromPartial(data),
  }),
  msgRevoke: (data: MsgRevoke): EncodeObject => ({
    typeUrl: "/cosmos.authz.v1beta1.MsgRevoke",
    value: MsgRevoke.fromPartial(data),
  }),
  msgGrant: (data: MsgGrant): EncodeObject => ({
    typeUrl: "/cosmos.authz.v1beta1.MsgGrant",
    value: MsgGrant.fromPartial(data),
  }),
};

export { txClient, Api, types };
