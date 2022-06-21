"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.types = exports.Api = exports.txClient = exports.registry = void 0;
const proto_signing_1 = require("@cosmjs/proto-signing");
const rest_1 = require("./rest");
Object.defineProperty(exports, "Api", { enumerable: true, get: function () { return rest_1.Api; } });
const tx_1 = require("./types/tx");
const types = [
    ["/cosmos.vesting.v1beta1.MsgCreateVestingAccount", tx_1.MsgCreateVestingAccount],
];
exports.types = types;
exports.registry = new proto_signing_1.Registry(types);
const txClient = {
    msgCreateVestingAccount: (data) => ({
        typeUrl: "/cosmos.vesting.v1beta1.MsgCreateVestingAccount",
        value: tx_1.MsgCreateVestingAccount.fromPartial(data),
    }),
};
exports.txClient = txClient;
