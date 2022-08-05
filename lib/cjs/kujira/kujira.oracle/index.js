"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Api = exports.txClient = exports.registry = exports.MissingWalletError = exports.types = void 0;
const proto_signing_1 = require("@cosmjs/proto-signing");
const rest_1 = require("./rest");
Object.defineProperty(exports, "Api", { enumerable: true, get: function () { return rest_1.Api; } });
const tx_1 = require("./types/tx");
const tx_2 = require("./types/tx");
const tx_3 = require("./types/tx");
exports.types = [
    ["/kujira.oracle.MsgAggregateExchangeRateVote", tx_1.MsgAggregateExchangeRateVote],
    [
        "/kujira.oracle.MsgAggregateExchangeRatePrevote",
        tx_2.MsgAggregateExchangeRatePrevote,
    ],
    ["/kujira.oracle.MsgDelegateFeedConsent", tx_3.MsgDelegateFeedConsent],
];
exports.MissingWalletError = new Error("wallet is required");
exports.registry = new proto_signing_1.Registry(exports.types);
const txClient = {
    msgAggregateExchangeRateVote: (data) => ({
        typeUrl: "/kujira.oracle.MsgAggregateExchangeRateVote",
        value: tx_1.MsgAggregateExchangeRateVote.fromPartial(data),
    }),
    msgAggregateExchangeRatePrevote: (data) => ({
        typeUrl: "/kujira.oracle.MsgAggregateExchangeRatePrevote",
        value: tx_2.MsgAggregateExchangeRatePrevote.fromPartial(data),
    }),
    msgDelegateFeedConsent: (data) => ({
        typeUrl: "/kujira.oracle.MsgDelegateFeedConsent",
        value: tx_3.MsgDelegateFeedConsent.fromPartial(data),
    }),
};
exports.txClient = txClient;
