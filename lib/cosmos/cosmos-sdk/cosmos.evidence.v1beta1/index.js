import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgSubmitEvidence } from "./types/tx";
const types = [
    ["/cosmos.evidence.v1beta1.MsgSubmitEvidence", MsgSubmitEvidence],
];
export const registry = new Registry(types);
const txClient = {
    msgSubmitEvidence: (data) => ({
        typeUrl: "/cosmos.evidence.v1beta1.MsgSubmitEvidence",
        value: MsgSubmitEvidence.fromPartial(data),
    }),
};
export { txClient, Api, types };
