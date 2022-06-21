"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.types = exports.Api = exports.txClient = exports.registry = void 0;
const proto_signing_1 = require("@cosmjs/proto-signing");
const rest_1 = require("./rest");
Object.defineProperty(exports, "Api", { enumerable: true, get: function () { return rest_1.Api; } });
const tx_1 = require("./types/tx");
const types = [
    ["/kujira.denom.MsgBurn", tx_1.MsgBurn],
    ["/kujira.denom.MsgChangeAdmin", tx_1.MsgChangeAdmin],
    ["/kujira.denom.MsgCreateDenom", tx_1.MsgCreateDenom],
    ["/kujira.denom.MsgMint", tx_1.MsgMint],
];
exports.types = types;
exports.registry = new proto_signing_1.Registry(types);
const txClient = {
    msgBurn: (data) => ({
        typeUrl: "/kujira.denom.MsgBurn",
        value: tx_1.MsgBurn.fromPartial(data),
    }),
    msgChangeAdmin: (data) => ({
        typeUrl: "/kujira.denom.MsgChangeAdmin",
        value: tx_1.MsgChangeAdmin.fromPartial(data),
    }),
    msgCreateDenom: (data) => ({
        typeUrl: "/kujira.denom.MsgCreateDenom",
        value: tx_1.MsgCreateDenom.fromPartial(data),
    }),
    msgMint: (data) => ({
        typeUrl: "/kujira.denom.MsgMint",
        value: tx_1.MsgMint.fromPartial(data),
    }),
};
exports.txClient = txClient;
