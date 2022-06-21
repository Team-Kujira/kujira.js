import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgVerifyInvariant } from "./types/tx";
const types = [
    ["/cosmos.crisis.v1beta1.MsgVerifyInvariant", MsgVerifyInvariant],
];
export const registry = new Registry(types);
const txClient = {
    msgVerifyInvariant: (data) => ({
        typeUrl: "/cosmos.crisis.v1beta1.MsgVerifyInvariant",
        value: MsgVerifyInvariant.fromPartial(data),
    }),
};
export { txClient, Api, types };
