"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.types = exports.Api = exports.txClient = exports.registry = void 0;
const proto_signing_1 = require("@cosmjs/proto-signing");
const rest_1 = require("./rest");
Object.defineProperty(exports, "Api", { enumerable: true, get: function () { return rest_1.Api; } });
const authz_1 = require("./types/authz");
const tx_1 = require("./types/tx");
const types = [
    ["/cosmos.authz.v1beta1.MsgExec", tx_1.MsgExec],
    ["/cosmos.authz.v1beta1.MsgRevoke", tx_1.MsgRevoke],
    ["/cosmos.authz.v1beta1.MsgGrant", tx_1.MsgGrant],
    ["/cosmos.authz.v1beta1.GenericAuthorization", authz_1.GenericAuthorization],
];
exports.types = types;
exports.registry = new proto_signing_1.Registry(types);
const txClient = {
    msgExec: (data) => ({
        typeUrl: "/cosmos.authz.v1beta1.MsgExec",
        value: tx_1.MsgExec.fromPartial(data),
    }),
    msgRevoke: (data) => ({
        typeUrl: "/cosmos.authz.v1beta1.MsgRevoke",
        value: tx_1.MsgRevoke.fromPartial(data),
    }),
    msgGrant: (data) => ({
        typeUrl: "/cosmos.authz.v1beta1.MsgGrant",
        value: tx_1.MsgGrant.fromPartial(data),
    }),
};
exports.txClient = txClient;
