import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgMultiSend, MsgSend } from "./types/tx";
const types = [
    ["/cosmos.bank.v1beta1.MsgSend", MsgSend],
    ["/cosmos.bank.v1beta1.MsgMultiSend", MsgMultiSend],
];
export const registry = new Registry(types);
const txClient = {
    msgSend: (data) => ({
        typeUrl: "/cosmos.bank.v1beta1.MsgSend",
        value: MsgSend.fromPartial(data),
    }),
    msgMultiSend: (data) => ({
        typeUrl: "/cosmos.bank.v1beta1.MsgMultiSend",
        value: MsgMultiSend.fromPartial(data),
    }),
};
export { txClient, Api, types };
