"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventSendToCosmosExecutedIbcAutoForward = exports.EventSendToCosmosPendingIbcAutoForward = exports.EventSendToCosmosLocal = exports.EventSendToCosmos = exports.EventInvalidSendToCosmosReceiver = exports.EventObservation = exports.ERC20Token = exports.Attestation = exports.claimTypeToJSON = exports.claimTypeFromJSON = exports.ClaimType = exports.protobufPackage = void 0;
/* eslint-disable */
const any_1 = require("cosmjs-types/google/protobuf/any");
const _m0 = __importStar(require("protobufjs/minimal"));
const helpers_1 = require("./helpers");
exports.protobufPackage = "gravity.v1";
/**
 * ClaimType is the cosmos type of an event from the counterpart chain that can
 * be handled
 */
var ClaimType;
(function (ClaimType) {
    /** CLAIM_TYPE_UNSPECIFIED - An unspecified claim type */
    ClaimType[ClaimType["CLAIM_TYPE_UNSPECIFIED"] = 0] = "CLAIM_TYPE_UNSPECIFIED";
    /** CLAIM_TYPE_SEND_TO_COSMOS - A claim for a SendToCosmos transaction */
    ClaimType[ClaimType["CLAIM_TYPE_SEND_TO_COSMOS"] = 1] = "CLAIM_TYPE_SEND_TO_COSMOS";
    /** CLAIM_TYPE_BATCH_SEND_TO_ETH - A claim for when batches are relayed */
    ClaimType[ClaimType["CLAIM_TYPE_BATCH_SEND_TO_ETH"] = 2] = "CLAIM_TYPE_BATCH_SEND_TO_ETH";
    /** CLAIM_TYPE_ERC20_DEPLOYED - A claim for when an erc20 contract has been deployed */
    ClaimType[ClaimType["CLAIM_TYPE_ERC20_DEPLOYED"] = 3] = "CLAIM_TYPE_ERC20_DEPLOYED";
    /** CLAIM_TYPE_LOGIC_CALL_EXECUTED - A claim for when a logic call has been executed */
    ClaimType[ClaimType["CLAIM_TYPE_LOGIC_CALL_EXECUTED"] = 4] = "CLAIM_TYPE_LOGIC_CALL_EXECUTED";
    /** CLAIM_TYPE_VALSET_UPDATED - A claim for when a valset update has happened */
    ClaimType[ClaimType["CLAIM_TYPE_VALSET_UPDATED"] = 5] = "CLAIM_TYPE_VALSET_UPDATED";
    ClaimType[ClaimType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ClaimType = exports.ClaimType || (exports.ClaimType = {}));
function claimTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "CLAIM_TYPE_UNSPECIFIED":
            return ClaimType.CLAIM_TYPE_UNSPECIFIED;
        case 1:
        case "CLAIM_TYPE_SEND_TO_COSMOS":
            return ClaimType.CLAIM_TYPE_SEND_TO_COSMOS;
        case 2:
        case "CLAIM_TYPE_BATCH_SEND_TO_ETH":
            return ClaimType.CLAIM_TYPE_BATCH_SEND_TO_ETH;
        case 3:
        case "CLAIM_TYPE_ERC20_DEPLOYED":
            return ClaimType.CLAIM_TYPE_ERC20_DEPLOYED;
        case 4:
        case "CLAIM_TYPE_LOGIC_CALL_EXECUTED":
            return ClaimType.CLAIM_TYPE_LOGIC_CALL_EXECUTED;
        case 5:
        case "CLAIM_TYPE_VALSET_UPDATED":
            return ClaimType.CLAIM_TYPE_VALSET_UPDATED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ClaimType.UNRECOGNIZED;
    }
}
exports.claimTypeFromJSON = claimTypeFromJSON;
function claimTypeToJSON(object) {
    switch (object) {
        case ClaimType.CLAIM_TYPE_UNSPECIFIED:
            return "CLAIM_TYPE_UNSPECIFIED";
        case ClaimType.CLAIM_TYPE_SEND_TO_COSMOS:
            return "CLAIM_TYPE_SEND_TO_COSMOS";
        case ClaimType.CLAIM_TYPE_BATCH_SEND_TO_ETH:
            return "CLAIM_TYPE_BATCH_SEND_TO_ETH";
        case ClaimType.CLAIM_TYPE_ERC20_DEPLOYED:
            return "CLAIM_TYPE_ERC20_DEPLOYED";
        case ClaimType.CLAIM_TYPE_LOGIC_CALL_EXECUTED:
            return "CLAIM_TYPE_LOGIC_CALL_EXECUTED";
        case ClaimType.CLAIM_TYPE_VALSET_UPDATED:
            return "CLAIM_TYPE_VALSET_UPDATED";
        case ClaimType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.claimTypeToJSON = claimTypeToJSON;
function createBaseAttestation() {
    return {
        observed: false,
        votes: [],
        height: helpers_1.Long.UZERO,
        claim: undefined,
    };
}
exports.Attestation = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.observed === true) {
            writer.uint32(8).bool(message.observed);
        }
        for (const v of message.votes) {
            writer.uint32(18).string(v);
        }
        if (!message.height.isZero()) {
            writer.uint32(24).uint64(message.height);
        }
        if (message.claim !== undefined) {
            any_1.Any.encode(message.claim, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAttestation();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.observed = reader.bool();
                    break;
                case 2:
                    message.votes.push(reader.string());
                    break;
                case 3:
                    message.height = reader.uint64();
                    break;
                case 4:
                    message.claim = any_1.Any.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            observed: (0, helpers_1.isSet)(object.observed) ? Boolean(object.observed) : false,
            votes: Array.isArray(object === null || object === void 0 ? void 0 : object.votes)
                ? object.votes.map((e) => String(e))
                : [],
            height: (0, helpers_1.isSet)(object.height) ? helpers_1.Long.fromValue(object.height) : helpers_1.Long.UZERO,
            claim: (0, helpers_1.isSet)(object.claim) ? any_1.Any.fromJSON(object.claim) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.observed !== undefined && (obj.observed = message.observed);
        if (message.votes) {
            obj.votes = message.votes.map((e) => e);
        }
        else {
            obj.votes = [];
        }
        message.height !== undefined &&
            (obj.height = (message.height || helpers_1.Long.UZERO).toString());
        message.claim !== undefined &&
            (obj.claim = message.claim ? any_1.Any.toJSON(message.claim) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseAttestation();
        message.observed = (_a = object.observed) !== null && _a !== void 0 ? _a : false;
        message.votes = ((_b = object.votes) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        message.height =
            object.height !== undefined && object.height !== null
                ? helpers_1.Long.fromValue(object.height)
                : helpers_1.Long.UZERO;
        message.claim =
            object.claim !== undefined && object.claim !== null
                ? any_1.Any.fromPartial(object.claim)
                : undefined;
        return message;
    },
};
function createBaseERC20Token() {
    return {
        contract: "",
        amount: "",
    };
}
exports.ERC20Token = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.contract !== "") {
            writer.uint32(10).string(message.contract);
        }
        if (message.amount !== "") {
            writer.uint32(18).string(message.amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseERC20Token();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.contract = reader.string();
                    break;
                case 2:
                    message.amount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            contract: (0, helpers_1.isSet)(object.contract) ? String(object.contract) : "",
            amount: (0, helpers_1.isSet)(object.amount) ? String(object.amount) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.contract !== undefined && (obj.contract = message.contract);
        message.amount !== undefined && (obj.amount = message.amount);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseERC20Token();
        message.contract = (_a = object.contract) !== null && _a !== void 0 ? _a : "";
        message.amount = (_b = object.amount) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseEventObservation() {
    return {
        attestationType: "",
        bridgeContract: "",
        bridgeChainId: "",
        attestationId: "",
        nonce: "",
    };
}
exports.EventObservation = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.attestationType !== "") {
            writer.uint32(10).string(message.attestationType);
        }
        if (message.bridgeContract !== "") {
            writer.uint32(18).string(message.bridgeContract);
        }
        if (message.bridgeChainId !== "") {
            writer.uint32(26).string(message.bridgeChainId);
        }
        if (message.attestationId !== "") {
            writer.uint32(34).string(message.attestationId);
        }
        if (message.nonce !== "") {
            writer.uint32(42).string(message.nonce);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventObservation();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.attestationType = reader.string();
                    break;
                case 2:
                    message.bridgeContract = reader.string();
                    break;
                case 3:
                    message.bridgeChainId = reader.string();
                    break;
                case 4:
                    message.attestationId = reader.string();
                    break;
                case 5:
                    message.nonce = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            attestationType: (0, helpers_1.isSet)(object.attestationType)
                ? String(object.attestationType)
                : "",
            bridgeContract: (0, helpers_1.isSet)(object.bridgeContract)
                ? String(object.bridgeContract)
                : "",
            bridgeChainId: (0, helpers_1.isSet)(object.bridgeChainId)
                ? String(object.bridgeChainId)
                : "",
            attestationId: (0, helpers_1.isSet)(object.attestationId)
                ? String(object.attestationId)
                : "",
            nonce: (0, helpers_1.isSet)(object.nonce) ? String(object.nonce) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.attestationType !== undefined &&
            (obj.attestationType = message.attestationType);
        message.bridgeContract !== undefined &&
            (obj.bridgeContract = message.bridgeContract);
        message.bridgeChainId !== undefined &&
            (obj.bridgeChainId = message.bridgeChainId);
        message.attestationId !== undefined &&
            (obj.attestationId = message.attestationId);
        message.nonce !== undefined && (obj.nonce = message.nonce);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseEventObservation();
        message.attestationType = (_a = object.attestationType) !== null && _a !== void 0 ? _a : "";
        message.bridgeContract = (_b = object.bridgeContract) !== null && _b !== void 0 ? _b : "";
        message.bridgeChainId = (_c = object.bridgeChainId) !== null && _c !== void 0 ? _c : "";
        message.attestationId = (_d = object.attestationId) !== null && _d !== void 0 ? _d : "";
        message.nonce = (_e = object.nonce) !== null && _e !== void 0 ? _e : "";
        return message;
    },
};
function createBaseEventInvalidSendToCosmosReceiver() {
    return {
        amount: "",
        nonce: "",
        token: "",
        sender: "",
    };
}
exports.EventInvalidSendToCosmosReceiver = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.amount !== "") {
            writer.uint32(10).string(message.amount);
        }
        if (message.nonce !== "") {
            writer.uint32(18).string(message.nonce);
        }
        if (message.token !== "") {
            writer.uint32(26).string(message.token);
        }
        if (message.sender !== "") {
            writer.uint32(34).string(message.sender);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventInvalidSendToCosmosReceiver();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.amount = reader.string();
                    break;
                case 2:
                    message.nonce = reader.string();
                    break;
                case 3:
                    message.token = reader.string();
                    break;
                case 4:
                    message.sender = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            amount: (0, helpers_1.isSet)(object.amount) ? String(object.amount) : "",
            nonce: (0, helpers_1.isSet)(object.nonce) ? String(object.nonce) : "",
            token: (0, helpers_1.isSet)(object.token) ? String(object.token) : "",
            sender: (0, helpers_1.isSet)(object.sender) ? String(object.sender) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.amount !== undefined && (obj.amount = message.amount);
        message.nonce !== undefined && (obj.nonce = message.nonce);
        message.token !== undefined && (obj.token = message.token);
        message.sender !== undefined && (obj.sender = message.sender);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseEventInvalidSendToCosmosReceiver();
        message.amount = (_a = object.amount) !== null && _a !== void 0 ? _a : "";
        message.nonce = (_b = object.nonce) !== null && _b !== void 0 ? _b : "";
        message.token = (_c = object.token) !== null && _c !== void 0 ? _c : "";
        message.sender = (_d = object.sender) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
function createBaseEventSendToCosmos() {
    return {
        amount: "",
        nonce: "",
        token: "",
    };
}
exports.EventSendToCosmos = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.amount !== "") {
            writer.uint32(10).string(message.amount);
        }
        if (message.nonce !== "") {
            writer.uint32(18).string(message.nonce);
        }
        if (message.token !== "") {
            writer.uint32(26).string(message.token);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventSendToCosmos();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.amount = reader.string();
                    break;
                case 2:
                    message.nonce = reader.string();
                    break;
                case 3:
                    message.token = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            amount: (0, helpers_1.isSet)(object.amount) ? String(object.amount) : "",
            nonce: (0, helpers_1.isSet)(object.nonce) ? String(object.nonce) : "",
            token: (0, helpers_1.isSet)(object.token) ? String(object.token) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.amount !== undefined && (obj.amount = message.amount);
        message.nonce !== undefined && (obj.nonce = message.nonce);
        message.token !== undefined && (obj.token = message.token);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseEventSendToCosmos();
        message.amount = (_a = object.amount) !== null && _a !== void 0 ? _a : "";
        message.nonce = (_b = object.nonce) !== null && _b !== void 0 ? _b : "";
        message.token = (_c = object.token) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseEventSendToCosmosLocal() {
    return {
        nonce: "",
        receiver: "",
        token: "",
        amount: "",
    };
}
exports.EventSendToCosmosLocal = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.nonce !== "") {
            writer.uint32(10).string(message.nonce);
        }
        if (message.receiver !== "") {
            writer.uint32(18).string(message.receiver);
        }
        if (message.token !== "") {
            writer.uint32(26).string(message.token);
        }
        if (message.amount !== "") {
            writer.uint32(34).string(message.amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventSendToCosmosLocal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nonce = reader.string();
                    break;
                case 2:
                    message.receiver = reader.string();
                    break;
                case 3:
                    message.token = reader.string();
                    break;
                case 4:
                    message.amount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            nonce: (0, helpers_1.isSet)(object.nonce) ? String(object.nonce) : "",
            receiver: (0, helpers_1.isSet)(object.receiver) ? String(object.receiver) : "",
            token: (0, helpers_1.isSet)(object.token) ? String(object.token) : "",
            amount: (0, helpers_1.isSet)(object.amount) ? String(object.amount) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.nonce !== undefined && (obj.nonce = message.nonce);
        message.receiver !== undefined && (obj.receiver = message.receiver);
        message.token !== undefined && (obj.token = message.token);
        message.amount !== undefined && (obj.amount = message.amount);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseEventSendToCosmosLocal();
        message.nonce = (_a = object.nonce) !== null && _a !== void 0 ? _a : "";
        message.receiver = (_b = object.receiver) !== null && _b !== void 0 ? _b : "";
        message.token = (_c = object.token) !== null && _c !== void 0 ? _c : "";
        message.amount = (_d = object.amount) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
function createBaseEventSendToCosmosPendingIbcAutoForward() {
    return {
        nonce: "",
        receiver: "",
        token: "",
        amount: "",
        channel: "",
    };
}
exports.EventSendToCosmosPendingIbcAutoForward = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.nonce !== "") {
            writer.uint32(10).string(message.nonce);
        }
        if (message.receiver !== "") {
            writer.uint32(18).string(message.receiver);
        }
        if (message.token !== "") {
            writer.uint32(26).string(message.token);
        }
        if (message.amount !== "") {
            writer.uint32(34).string(message.amount);
        }
        if (message.channel !== "") {
            writer.uint32(42).string(message.channel);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventSendToCosmosPendingIbcAutoForward();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nonce = reader.string();
                    break;
                case 2:
                    message.receiver = reader.string();
                    break;
                case 3:
                    message.token = reader.string();
                    break;
                case 4:
                    message.amount = reader.string();
                    break;
                case 5:
                    message.channel = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            nonce: (0, helpers_1.isSet)(object.nonce) ? String(object.nonce) : "",
            receiver: (0, helpers_1.isSet)(object.receiver) ? String(object.receiver) : "",
            token: (0, helpers_1.isSet)(object.token) ? String(object.token) : "",
            amount: (0, helpers_1.isSet)(object.amount) ? String(object.amount) : "",
            channel: (0, helpers_1.isSet)(object.channel) ? String(object.channel) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.nonce !== undefined && (obj.nonce = message.nonce);
        message.receiver !== undefined && (obj.receiver = message.receiver);
        message.token !== undefined && (obj.token = message.token);
        message.amount !== undefined && (obj.amount = message.amount);
        message.channel !== undefined && (obj.channel = message.channel);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseEventSendToCosmosPendingIbcAutoForward();
        message.nonce = (_a = object.nonce) !== null && _a !== void 0 ? _a : "";
        message.receiver = (_b = object.receiver) !== null && _b !== void 0 ? _b : "";
        message.token = (_c = object.token) !== null && _c !== void 0 ? _c : "";
        message.amount = (_d = object.amount) !== null && _d !== void 0 ? _d : "";
        message.channel = (_e = object.channel) !== null && _e !== void 0 ? _e : "";
        return message;
    },
};
function createBaseEventSendToCosmosExecutedIbcAutoForward() {
    return {
        nonce: "",
        receiver: "",
        token: "",
        amount: "",
        channel: "",
        timeoutTime: "",
        timeoutHeight: "",
    };
}
exports.EventSendToCosmosExecutedIbcAutoForward = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.nonce !== "") {
            writer.uint32(10).string(message.nonce);
        }
        if (message.receiver !== "") {
            writer.uint32(18).string(message.receiver);
        }
        if (message.token !== "") {
            writer.uint32(26).string(message.token);
        }
        if (message.amount !== "") {
            writer.uint32(34).string(message.amount);
        }
        if (message.channel !== "") {
            writer.uint32(42).string(message.channel);
        }
        if (message.timeoutTime !== "") {
            writer.uint32(50).string(message.timeoutTime);
        }
        if (message.timeoutHeight !== "") {
            writer.uint32(58).string(message.timeoutHeight);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventSendToCosmosExecutedIbcAutoForward();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nonce = reader.string();
                    break;
                case 2:
                    message.receiver = reader.string();
                    break;
                case 3:
                    message.token = reader.string();
                    break;
                case 4:
                    message.amount = reader.string();
                    break;
                case 5:
                    message.channel = reader.string();
                    break;
                case 6:
                    message.timeoutTime = reader.string();
                    break;
                case 7:
                    message.timeoutHeight = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            nonce: (0, helpers_1.isSet)(object.nonce) ? String(object.nonce) : "",
            receiver: (0, helpers_1.isSet)(object.receiver) ? String(object.receiver) : "",
            token: (0, helpers_1.isSet)(object.token) ? String(object.token) : "",
            amount: (0, helpers_1.isSet)(object.amount) ? String(object.amount) : "",
            channel: (0, helpers_1.isSet)(object.channel) ? String(object.channel) : "",
            timeoutTime: (0, helpers_1.isSet)(object.timeoutTime) ? String(object.timeoutTime) : "",
            timeoutHeight: (0, helpers_1.isSet)(object.timeoutHeight)
                ? String(object.timeoutHeight)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.nonce !== undefined && (obj.nonce = message.nonce);
        message.receiver !== undefined && (obj.receiver = message.receiver);
        message.token !== undefined && (obj.token = message.token);
        message.amount !== undefined && (obj.amount = message.amount);
        message.channel !== undefined && (obj.channel = message.channel);
        message.timeoutTime !== undefined &&
            (obj.timeoutTime = message.timeoutTime);
        message.timeoutHeight !== undefined &&
            (obj.timeoutHeight = message.timeoutHeight);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = createBaseEventSendToCosmosExecutedIbcAutoForward();
        message.nonce = (_a = object.nonce) !== null && _a !== void 0 ? _a : "";
        message.receiver = (_b = object.receiver) !== null && _b !== void 0 ? _b : "";
        message.token = (_c = object.token) !== null && _c !== void 0 ? _c : "";
        message.amount = (_d = object.amount) !== null && _d !== void 0 ? _d : "";
        message.channel = (_e = object.channel) !== null && _e !== void 0 ? _e : "";
        message.timeoutTime = (_f = object.timeoutTime) !== null && _f !== void 0 ? _f : "";
        message.timeoutHeight = (_g = object.timeoutHeight) !== null && _g !== void 0 ? _g : "";
        return message;
    },
};
