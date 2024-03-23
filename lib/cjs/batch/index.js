"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.types = exports.msg = exports.registry = void 0;
const proto_signing_1 = require("@cosmjs/proto-signing");
const tx_1 = require("./types/tx");
const types = [
    ["/batch.MsgWithdrawAllDelegatorRewards", tx_1.MsgWithdrawAllDelegatorRewards],
    ["/batch.MsgBatchResetDelegation", tx_1.MsgBatchResetDelegation],
];
exports.types = types;
exports.registry = new proto_signing_1.Registry(types);
const msg = {
    msgWithdrawAllDelegatorRewards: (data) => ({
        typeUrl: "/batch.MsgWithdrawAllDelegatorRewards",
        value: tx_1.MsgWithdrawAllDelegatorRewards.fromPartial(data),
    }),
    msgBatchResetDelegation: (data) => ({
        typeUrl: "/batch.MsgBatchResetDelegation",
        value: tx_1.MsgBatchResetDelegation.fromPartial(data),
    }),
};
exports.msg = msg;
