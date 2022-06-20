import { Registry, EncodeObject } from "@cosmjs/proto-signing";
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

export const registry = new Registry(<any>types);

const txClient = {
  msgBurn: (data: MsgBurn): EncodeObject => ({
    typeUrl: "/kujira.denom.MsgBurn",
    value: MsgBurn.fromPartial(data),
  }),
  msgChangeAdmin: (data: MsgChangeAdmin): EncodeObject => ({
    typeUrl: "/kujira.denom.MsgChangeAdmin",
    value: MsgChangeAdmin.fromPartial(data),
  }),
  msgCreateDenom: (data: MsgCreateDenom): EncodeObject => ({
    typeUrl: "/kujira.denom.MsgCreateDenom",
    value: MsgCreateDenom.fromPartial(data),
  }),
  msgMint: (data: MsgMint): EncodeObject => ({
    typeUrl: "/kujira.denom.MsgMint",
    value: MsgMint.fromPartial(data),
  }),
};

export { txClient, Api, types };
