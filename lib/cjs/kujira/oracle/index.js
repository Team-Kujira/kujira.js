"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupOracleExtension = exports.msg = exports.registry = exports.MissingWalletError = exports.types = void 0;
const proto_signing_1 = require("@cosmjs/proto-signing");
const tx_1 = require("./types/tx");
const tx_2 = require("./types/tx");
const tx_3 = require("./types/tx");
const queries_1 = require("./queries");
Object.defineProperty(exports, "setupOracleExtension", { enumerable: true, get: function () { return queries_1.setupOracleExtension; } });
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
const msg = {
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
exports.msg = msg;
