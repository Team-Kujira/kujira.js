import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgExec } from "./types/cosmos/authz/v1beta1/tx";
import { MsgRevoke } from "./types/cosmos/authz/v1beta1/tx";
import { MsgGrant } from "./types/cosmos/authz/v1beta1/tx";
const types = [
    ["/cosmos.authz.v1beta1.MsgExec", MsgExec],
    ["/cosmos.authz.v1beta1.MsgRevoke", MsgRevoke],
    ["/cosmos.authz.v1beta1.MsgGrant", MsgGrant],
];
export const MissingWalletError = new Error("wallet is required");
export const registry = new Registry(types);
const txClient = {
    msgExec: (data) => ({
        typeUrl: "/cosmos.authz.v1beta1.MsgExec",
        value: MsgExec.fromPartial(data),
    }),
    msgRevoke: (data) => ({
        typeUrl: "/cosmos.authz.v1beta1.MsgRevoke",
        value: MsgRevoke.fromPartial(data),
    }),
    msgGrant: (data) => ({
        typeUrl: "/cosmos.authz.v1beta1.MsgGrant",
        value: MsgGrant.fromPartial(data),
    }),
};
export { txClient, Api, types };
