"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.types = exports.Api = exports.txClient = exports.registry = void 0;
const proto_signing_1 = require("@cosmjs/proto-signing");
const rest_1 = require("./rest");
Object.defineProperty(exports, "Api", { enumerable: true, get: function () { return rest_1.Api; } });
const tx_1 = require("./types/applications/transfer/tx");
const types = [["/ibc.applications.transfer.v1.MsgTransfer", tx_1.MsgTransfer]];
exports.types = types;
exports.registry = new proto_signing_1.Registry(types);
const txClient = {
    msgTransfer: (data) => ({
        typeUrl: "/ibc.applications.transfer.v1.MsgTransfer",
        value: tx_1.MsgTransfer.fromPartial(data),
    }),
};
exports.txClient = txClient;
