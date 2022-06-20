import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgSend } from "./types/cosmos/bank/v1beta1/tx";
import { MsgMultiSend } from "./types/cosmos/bank/v1beta1/tx";
const types = [
    ["/cosmos.bank.v1beta1.MsgSend", MsgSend],
    ["/cosmos.bank.v1beta1.MsgMultiSend", MsgMultiSend],
];
export const MissingWalletError = new Error("wallet is required");
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
