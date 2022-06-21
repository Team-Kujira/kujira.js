"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.types = exports.Api = exports.txClient = exports.registry = void 0;
const proto_signing_1 = require("@cosmjs/proto-signing");
const rest_1 = require("./rest");
Object.defineProperty(exports, "Api", { enumerable: true, get: function () { return rest_1.Api; } });
const tx_1 = require("./types/tx");
const types = [
    ["/cosmos.evidence.v1beta1.MsgSubmitEvidence", tx_1.MsgSubmitEvidence],
];
exports.types = types;
exports.registry = new proto_signing_1.Registry(types);
const txClient = {
    msgSubmitEvidence: (data) => ({
        typeUrl: "/cosmos.evidence.v1beta1.MsgSubmitEvidence",
        value: tx_1.MsgSubmitEvidence.fromPartial(data),
    }),
};
exports.txClient = txClient;
