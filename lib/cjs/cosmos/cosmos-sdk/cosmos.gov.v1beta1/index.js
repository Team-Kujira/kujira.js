"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Api = exports.txClient = exports.types = exports.registry = void 0;
const proto_signing_1 = require("@cosmjs/proto-signing");
const rest_1 = require("./rest");
Object.defineProperty(exports, "Api", { enumerable: true, get: function () { return rest_1.Api; } });
const tx_1 = require("./types/tx");
const types = [
    ["/cosmos.gov.v1beta1.MsgSubmitProposal", tx_1.MsgSubmitProposal],
    ["/cosmos.gov.v1beta1.MsgVote", tx_1.MsgVote],
    ["/cosmos.gov.v1beta1.MsgVoteWeighted", tx_1.MsgVoteWeighted],
    ["/cosmos.gov.v1beta1.MsgDeposit", tx_1.MsgDeposit],
];
exports.types = types;
exports.registry = new proto_signing_1.Registry(types);
const txClient = {
    msgSubmitProposal: (data) => ({
        typeUrl: "/cosmos.gov.v1beta1.MsgSubmitProposal",
        value: tx_1.MsgSubmitProposal.fromPartial(data),
    }),
    msgVote: (data) => ({
        typeUrl: "/cosmos.gov.v1beta1.MsgVote",
        value: tx_1.MsgVote.fromPartial(data),
    }),
    msgVoteWeighted: (data) => ({
        typeUrl: "/cosmos.gov.v1beta1.MsgVoteWeighted",
        value: tx_1.MsgVoteWeighted.fromPartial(data),
    }),
    msgDeposit: (data) => ({
        typeUrl: "/cosmos.gov.v1beta1.MsgDeposit",
        value: tx_1.MsgDeposit.fromPartial(data),
    }),
};
exports.txClient = txClient;
