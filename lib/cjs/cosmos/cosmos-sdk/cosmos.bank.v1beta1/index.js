"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.types = exports.Api = exports.txClient = exports.registry = void 0;
const proto_signing_1 = require("@cosmjs/proto-signing");
const rest_1 = require("./rest");
Object.defineProperty(exports, "Api", { enumerable: true, get: function () { return rest_1.Api; } });
const tx_1 = require("./types/tx");
const types = [
    ["/cosmos.bank.v1beta1.MsgSend", tx_1.MsgSend],
    ["/cosmos.bank.v1beta1.MsgMultiSend", tx_1.MsgMultiSend],
];
exports.types = types;
exports.registry = new proto_signing_1.Registry(types);
const txClient = {
    msgSend: (data) => ({
        typeUrl: "/cosmos.bank.v1beta1.MsgSend",
        value: tx_1.MsgSend.fromPartial(data),
    }),
    msgMultiSend: (data) => ({
        typeUrl: "/cosmos.bank.v1beta1.MsgMultiSend",
        value: tx_1.MsgMultiSend.fromPartial(data),
    }),
};
exports.txClient = txClient;
