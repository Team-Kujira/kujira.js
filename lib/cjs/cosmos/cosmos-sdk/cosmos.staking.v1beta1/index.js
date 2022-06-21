"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Api = exports.txClient = exports.registry = exports.types = void 0;
const proto_signing_1 = require("@cosmjs/proto-signing");
const rest_1 = require("./rest");
Object.defineProperty(exports, "Api", { enumerable: true, get: function () { return rest_1.Api; } });
const tx_1 = require("./types/tx");
exports.types = [
    ["/cosmos.staking.v1beta1.MsgCreateValidator", tx_1.MsgCreateValidator],
    ["/cosmos.staking.v1beta1.MsgDelegate", tx_1.MsgDelegate],
    ["/cosmos.staking.v1beta1.MsgBeginRedelegate", tx_1.MsgBeginRedelegate],
    ["/cosmos.staking.v1beta1.MsgEditValidator", tx_1.MsgEditValidator],
    ["/cosmos.staking.v1beta1.MsgUndelegate", tx_1.MsgUndelegate],
];
exports.registry = new proto_signing_1.Registry(exports.types);
const txClient = {
    msgCreateValidator: (data) => ({
        typeUrl: "/cosmos.staking.v1beta1.MsgCreateValidator",
        value: tx_1.MsgCreateValidator.fromPartial(data),
    }),
    msgDelegate: (data) => ({
        typeUrl: "/cosmos.staking.v1beta1.MsgDelegate",
        value: tx_1.MsgDelegate.fromPartial(data),
    }),
    msgBeginRedelegate: (data) => ({
        typeUrl: "/cosmos.staking.v1beta1.MsgBeginRedelegate",
        value: tx_1.MsgBeginRedelegate.fromPartial(data),
    }),
    msgEditValidator: (data) => ({
        typeUrl: "/cosmos.staking.v1beta1.MsgEditValidator",
        value: tx_1.MsgEditValidator.fromPartial(data),
    }),
    msgUndelegate: (data) => ({
        typeUrl: "/cosmos.staking.v1beta1.MsgUndelegate",
        value: tx_1.MsgUndelegate.fromPartial(data),
    }),
};
exports.txClient = txClient;
