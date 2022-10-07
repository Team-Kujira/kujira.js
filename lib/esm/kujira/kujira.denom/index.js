import { Registry } from "@cosmjs/proto-signing";
import { MsgBurn, MsgChangeAdmin, MsgCreateDenom, MsgMint } from "./types/tx";
import { setupDenomExtension } from "./queries";
const types = [
    ["/kujira.denom.MsgBurn", MsgBurn],
    ["/kujira.denom.MsgChangeAdmin", MsgChangeAdmin],
    ["/kujira.denom.MsgCreateDenom", MsgCreateDenom],
    ["/kujira.denom.MsgMint", MsgMint],
];
export const registry = new Registry(types);
const msg = {
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
export { msg, types, setupDenomExtension };
