import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgUnjail } from "./types/cosmos/slashing/v1beta1/tx";
const types = [["/cosmos.slashing.v1beta1.MsgUnjail", MsgUnjail]];
export const MissingWalletError = new Error("wallet is required");
export const registry = new Registry(types);
const txClient = {
    msgUnjail: (data) => ({
        typeUrl: "/cosmos.slashing.v1beta1.MsgUnjail",
        value: MsgUnjail.fromPartial(data),
    }),
};
export { txClient, Api, types };
