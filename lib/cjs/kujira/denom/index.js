"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupDenomExtension = exports.types = exports.msg = exports.registry = void 0;
const proto_signing_1 = require("@cosmjs/proto-signing");
const tx_1 = require("./types/tx");
const queries_1 = require("./queries");
Object.defineProperty(exports, "setupDenomExtension", { enumerable: true, get: function () { return queries_1.setupDenomExtension; } });
const types = [
    ["/kujira.denom.MsgBurn", tx_1.MsgBurn],
    ["/kujira.denom.MsgChangeAdmin", tx_1.MsgChangeAdmin],
    ["/kujira.denom.MsgCreateDenom", tx_1.MsgCreateDenom],
    ["/kujira.denom.MsgMint", tx_1.MsgMint],
];
exports.types = types;
exports.registry = new proto_signing_1.Registry(types);
const msg = {
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
exports.msg = msg;
