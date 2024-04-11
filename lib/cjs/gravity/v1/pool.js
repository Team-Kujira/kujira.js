"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventWithdrawCanceled = exports.EventWithdrawalReceived = exports.BatchFees = exports.IDSet = exports.protobufPackage = void 0;
/* eslint-disable */
const binary_1 = require("cosmjs-types/binary");
const helpers_1 = require("./helpers");
exports.protobufPackage = "gravity.v1";
function createBaseIDSet() {
    return {
        ids: [],
    };
}
exports.IDSet = {
    encode(message, writer = binary_1.BinaryWriter.create()) {
        writer.uint32(10).fork();
        for (const v of message.ids) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIDSet();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.ids.push(reader.uint64());
                        }
                    }
                    else {
                        message.ids.push(reader.uint64());
                    }
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
            ids: Array.isArray(object === null || object === void 0 ? void 0 : object.ids)
                ? object.ids.map((e) => helpers_1.Long.fromValue(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.ids) {
            obj.ids = message.ids.map((e) => (e || BigInt(0)).toString());
        }
        else {
            obj.ids = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseIDSet();
        message.ids = ((_a = object.ids) === null || _a === void 0 ? void 0 : _a.map((e) => BigInt(e))) || [];
        return message;
    },
};
function createBaseBatchFees() {
    return {
        token: "",
        totalFees: "",
        txCount: BigInt(0),
    };
}
exports.BatchFees = {
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.token !== "") {
            writer.uint32(10).string(message.token);
        }
        if (message.totalFees !== "") {
            writer.uint32(18).string(message.totalFees);
        }
        if (message.txCount !== BigInt(0)) {
            writer.uint32(24).uint64(message.txCount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBatchFees();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.token = reader.string();
                    break;
                case 2:
                    message.totalFees = reader.string();
                    break;
                case 3:
                    message.txCount = reader.uint64();
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
            token: (0, helpers_1.isSet)(object.token) ? String(object.token) : "",
            totalFees: (0, helpers_1.isSet)(object.totalFees) ? String(object.totalFees) : "",
            txCount: (0, helpers_1.isSet)(object.txCount) ? BigInt(object.txCount) : BigInt(0),
        };
    },
    toJSON(message) {
        const obj = {};
        message.token !== undefined && (obj.token = message.token);
        message.totalFees !== undefined && (obj.totalFees = message.totalFees);
        message.txCount !== undefined &&
            (obj.txCount = (message.txCount || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseBatchFees();
        message.token = (_a = object.token) !== null && _a !== void 0 ? _a : "";
        message.totalFees = (_b = object.totalFees) !== null && _b !== void 0 ? _b : "";
        message.txCount =
            object.txCount !== undefined && object.txCount !== null
                ? BigInt(object.txCount)
                : BigInt(0);
        return message;
    },
};
function createBaseEventWithdrawalReceived() {
    return {
        bridgeContract: "",
        bridgeChainId: "",
        outgoingTxId: "",
        nonce: "",
    };
}
exports.EventWithdrawalReceived = {
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.bridgeContract !== "") {
            writer.uint32(10).string(message.bridgeContract);
        }
        if (message.bridgeChainId !== "") {
            writer.uint32(18).string(message.bridgeChainId);
        }
        if (message.outgoingTxId !== "") {
            writer.uint32(26).string(message.outgoingTxId);
        }
        if (message.nonce !== "") {
            writer.uint32(34).string(message.nonce);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventWithdrawalReceived();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bridgeContract = reader.string();
                    break;
                case 2:
                    message.bridgeChainId = reader.string();
                    break;
                case 3:
                    message.outgoingTxId = reader.string();
                    break;
                case 4:
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
            bridgeContract: (0, helpers_1.isSet)(object.bridgeContract)
                ? String(object.bridgeContract)
                : "",
            bridgeChainId: (0, helpers_1.isSet)(object.bridgeChainId)
                ? String(object.bridgeChainId)
                : "",
            outgoingTxId: (0, helpers_1.isSet)(object.outgoingTxId)
                ? String(object.outgoingTxId)
                : "",
            nonce: (0, helpers_1.isSet)(object.nonce) ? String(object.nonce) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.bridgeContract !== undefined &&
            (obj.bridgeContract = message.bridgeContract);
        message.bridgeChainId !== undefined &&
            (obj.bridgeChainId = message.bridgeChainId);
        message.outgoingTxId !== undefined &&
            (obj.outgoingTxId = message.outgoingTxId);
        message.nonce !== undefined && (obj.nonce = message.nonce);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseEventWithdrawalReceived();
        message.bridgeContract = (_a = object.bridgeContract) !== null && _a !== void 0 ? _a : "";
        message.bridgeChainId = (_b = object.bridgeChainId) !== null && _b !== void 0 ? _b : "";
        message.outgoingTxId = (_c = object.outgoingTxId) !== null && _c !== void 0 ? _c : "";
        message.nonce = (_d = object.nonce) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
function createBaseEventWithdrawCanceled() {
    return {
        sender: "",
        txId: "",
        bridgeContract: "",
        bridgeChainId: "",
    };
}
exports.EventWithdrawCanceled = {
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.txId !== "") {
            writer.uint32(18).string(message.txId);
        }
        if (message.bridgeContract !== "") {
            writer.uint32(26).string(message.bridgeContract);
        }
        if (message.bridgeChainId !== "") {
            writer.uint32(34).string(message.bridgeChainId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventWithdrawCanceled();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.txId = reader.string();
                    break;
                case 3:
                    message.bridgeContract = reader.string();
                    break;
                case 4:
                    message.bridgeChainId = reader.string();
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
            sender: (0, helpers_1.isSet)(object.sender) ? String(object.sender) : "",
            txId: (0, helpers_1.isSet)(object.txId) ? String(object.txId) : "",
            bridgeContract: (0, helpers_1.isSet)(object.bridgeContract)
                ? String(object.bridgeContract)
                : "",
            bridgeChainId: (0, helpers_1.isSet)(object.bridgeChainId)
                ? String(object.bridgeChainId)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.txId !== undefined && (obj.txId = message.txId);
        message.bridgeContract !== undefined &&
            (obj.bridgeContract = message.bridgeContract);
        message.bridgeChainId !== undefined &&
            (obj.bridgeChainId = message.bridgeChainId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseEventWithdrawCanceled();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : "";
        message.txId = (_b = object.txId) !== null && _b !== void 0 ? _b : "";
        message.bridgeContract = (_c = object.bridgeContract) !== null && _c !== void 0 ? _c : "";
        message.bridgeChainId = (_d = object.bridgeChainId) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
