"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupAllianceExtension = exports.types = exports.msg = exports.registry = void 0;
const proto_signing_1 = require("@cosmjs/proto-signing");
const gov_1 = require("./gov");
const queries_1 = require("./queries");
Object.defineProperty(exports, "setupAllianceExtension", { enumerable: true, get: function () { return queries_1.setupAllianceExtension; } });
const tx_1 = require("./tx");
const types = [
    ["/alliance.alliance.MsgDelegate", tx_1.MsgDelegate],
    ["/alliance.alliance.MsgDelegateResponse", tx_1.MsgDelegateResponse],
    ["/alliance.alliance.MsgUndelegate", tx_1.MsgUndelegate],
    ["/alliance.alliance.MsgUndelegateResponse", tx_1.MsgUndelegateResponse],
    ["/alliance.alliance.MsgRedelegate", tx_1.MsgRedelegate],
    ["/alliance.alliance.MsgRedelegateResponse", tx_1.MsgRedelegateResponse],
    ["/alliance.alliance.MsgClaimDelegationRewards", tx_1.MsgClaimDelegationRewards],
    ["/alliance.alliance.MsgCreateAllianceProposal", gov_1.MsgCreateAllianceProposal],
    ["/alliance.alliance.MsgUpdateAllianceProposal", gov_1.MsgUpdateAllianceProposal],
    ["/alliance.alliance.MsgDeleteAllianceProposal", gov_1.MsgDeleteAllianceProposal],
];
exports.types = types;
const msg = {
    msgDelegate: (x) => ({
        typeUrl: "/alliance.alliance.MsgDelegate",
        value: tx_1.MsgDelegate.fromPartial(x),
    }),
    msgDelegateResponse: (x) => ({
        typeUrl: "/alliance.alliance.MsgDelegateResponse",
        value: tx_1.MsgDelegateResponse.fromPartial(x),
    }),
    msgUndelegate: (x) => ({
        typeUrl: "/alliance.alliance.MsgUndelegate",
        value: tx_1.MsgUndelegate.fromPartial(x),
    }),
    msgUndelegateResponse: (x) => ({
        typeUrl: "/alliance.alliance.MsgUndelegateResponse",
        value: tx_1.MsgUndelegateResponse.fromPartial(x),
    }),
    msgRedelegate: (x) => ({
        typeUrl: "/alliance.alliance.MsgRedelegate",
        value: tx_1.MsgRedelegate.fromPartial(x),
    }),
    msgRedelegateResponse: (x) => ({
        typeUrl: "/alliance.alliance.MsgRedelegateResponse",
        value: tx_1.MsgRedelegateResponse.fromPartial(x),
    }),
    msgClaimDelegationRewards: (x) => ({
        typeUrl: "/alliance.alliance.MsgClaimDelegationRewards",
        value: tx_1.MsgClaimDelegationRewards.fromPartial(x),
    }),
};
exports.msg = msg;
exports.registry = new proto_signing_1.Registry(types);
