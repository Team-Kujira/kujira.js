"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.types = exports.Api = exports.txClient = exports.registry = void 0;
const proto_signing_1 = require("@cosmjs/proto-signing");
const rest_1 = require("./rest");
Object.defineProperty(exports, "Api", { enumerable: true, get: function () { return rest_1.Api; } });
const tx_1 = require("./types/tx");
const types = [
    ["/cosmos.distribution.v1beta1.MsgSetWithdrawAddress", tx_1.MsgSetWithdrawAddress],
    [
        "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
        tx_1.MsgWithdrawDelegatorReward,
    ],
    [
        "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission",
        tx_1.MsgWithdrawValidatorCommission,
    ],
    ["/cosmos.distribution.v1beta1.MsgFundCommunityPool", tx_1.MsgFundCommunityPool],
];
exports.types = types;
exports.registry = new proto_signing_1.Registry(types);
const txClient = {
    msgSetWithdrawAddress: (data) => ({
        typeUrl: "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress",
        value: tx_1.MsgSetWithdrawAddress.fromPartial(data),
    }),
    msgWithdrawDelegatorReward: (data) => ({
        typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
        value: tx_1.MsgWithdrawDelegatorReward.fromPartial(data),
    }),
    msgWithdrawValidatorCommission: (data) => ({
        typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission",
        value: tx_1.MsgWithdrawValidatorCommission.fromPartial(data),
    }),
    msgFundCommunityPool: (data) => ({
        typeUrl: "/cosmos.distribution.v1beta1.MsgFundCommunityPool",
        value: tx_1.MsgFundCommunityPool.fromPartial(data),
    }),
};
exports.txClient = txClient;
