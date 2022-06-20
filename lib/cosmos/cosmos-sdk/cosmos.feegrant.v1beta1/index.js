import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgGrantAllowance } from "./types/cosmos/feegrant/v1beta1/tx";
import { MsgRevokeAllowance } from "./types/cosmos/feegrant/v1beta1/tx";
const types = [
    ["/cosmos.feegrant.v1beta1.MsgGrantAllowance", MsgGrantAllowance],
    ["/cosmos.feegrant.v1beta1.MsgRevokeAllowance", MsgRevokeAllowance],
];
export const MissingWalletError = new Error("wallet is required");
export const registry = new Registry(types);
const txClient = {
    msgGrantAllowance: (data) => ({
        typeUrl: "/cosmos.feegrant.v1beta1.MsgGrantAllowance",
        value: MsgGrantAllowance.fromPartial(data),
    }),
    msgRevokeAllowance: (data) => ({
        typeUrl: "/cosmos.feegrant.v1beta1.MsgRevokeAllowance",
        value: MsgRevokeAllowance.fromPartial(data),
    }),
};
export { txClient, Api, types };
