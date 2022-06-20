import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgBurn } from "./types/denom/tx";
import { MsgChangeAdmin } from "./types/denom/tx";
import { MsgCreateDenom } from "./types/denom/tx";
import { MsgMint } from "./types/denom/tx";
const types = [
    ["/kujira.denom.MsgBurn", MsgBurn],
    ["/kujira.denom.MsgChangeAdmin", MsgChangeAdmin],
    ["/kujira.denom.MsgCreateDenom", MsgCreateDenom],
    ["/kujira.denom.MsgMint", MsgMint],
];
export const MissingWalletError = new Error("wallet is required");
export const registry = new Registry(types);
const txClient = {
    msgBurn: (data) => ({
        typeUrl: "/kujira.denom.MsgBurn",
        value: MsgBurn.fromPartial(data),
    }),
    msgChangeAdmin: (data) => ({
        typeUrl: "/kujira.denom.MsgChangeAdmin",
        value: MsgChangeAdmin.fromPartial(data),
    }),
    msgCreateDenom: (data) => ({
        typeUrl: "/kujira.denom.MsgCreateDenom",
        value: MsgCreateDenom.fromPartial(data),
    }),
    msgMint: (data) => ({
        typeUrl: "/kujira.denom.MsgMint",
        value: MsgMint.fromPartial(data),
    }),
};
export { txClient, Api, types };
