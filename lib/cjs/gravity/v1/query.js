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
exports.QueryPendingSendToEth = exports.QueryDelegateKeysByOrchestratorAddressResponse = exports.QueryDelegateKeysByOrchestratorAddress = exports.QueryDelegateKeysByEthAddressResponse = exports.QueryDelegateKeysByEthAddress = exports.QueryDelegateKeysByValidatorAddressResponse = exports.QueryDelegateKeysByValidatorAddress = exports.QueryAttestationsResponse = exports.QueryAttestationsRequest = exports.QueryLastObservedEthNonceResponse = exports.QueryLastObservedEthNonceRequest = exports.QueryLastObservedEthBlockResponse = exports.QueryLastObservedEthBlockRequest = exports.QueryDenomToERC20Response = exports.QueryDenomToERC20Request = exports.QueryERC20ToDenomResponse = exports.QueryERC20ToDenomRequest = exports.QueryLastEventNonceByAddrResponse = exports.QueryLastEventNonceByAddrRequest = exports.QueryLogicConfirmsResponse = exports.QueryLogicConfirmsRequest = exports.QueryBatchConfirmsResponse = exports.QueryBatchConfirmsRequest = exports.QueryBatchRequestByNonceResponse = exports.QueryBatchRequestByNonceRequest = exports.QueryOutgoingLogicCallsResponse = exports.QueryOutgoingLogicCallsRequest = exports.QueryOutgoingTxBatchesResponse = exports.QueryOutgoingTxBatchesRequest = exports.QueryLastPendingLogicCallByAddrResponse = exports.QueryLastPendingLogicCallByAddrRequest = exports.QueryLastPendingBatchRequestByAddrResponse = exports.QueryLastPendingBatchRequestByAddrRequest = exports.QueryBatchFeeResponse = exports.QueryBatchFeeRequest = exports.QueryLastPendingValsetRequestByAddrResponse = exports.QueryLastPendingValsetRequestByAddrRequest = exports.QueryLastValsetRequestsResponse = exports.QueryLastValsetRequestsRequest = exports.QueryValsetConfirmsByNonceResponse = exports.QueryValsetConfirmsByNonceRequest = exports.QueryValsetConfirmResponse = exports.QueryValsetConfirmRequest = exports.QueryValsetRequestResponse = exports.QueryValsetRequestRequest = exports.QueryCurrentValsetResponse = exports.QueryCurrentValsetRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = exports.protobufPackage = void 0;
exports.QueryClientImpl = exports.QueryPendingIbcAutoForwardsResponse = exports.QueryPendingIbcAutoForwards = exports.QueryPendingSendToEthResponse = void 0;
/* eslint-disable */
const _m0 = __importStar(require("protobufjs/minimal"));
const attestation_1 = require("./attestation");
const batch_1 = require("./batch");
const genesis_1 = require("./genesis");
const helpers_1 = require("./helpers");
const msgs_1 = require("./msgs");
const pool_1 = require("./pool");
const types_1 = require("./types");
exports.protobufPackage = "gravity.v1";
function createBaseQueryParamsRequest() {
    return {};
}
exports.QueryParamsRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseQueryParamsRequest();
        return message;
    },
};
function createBaseQueryParamsResponse() {
    return {
        params: undefined,
    };
}
exports.QueryParamsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.params !== undefined) {
            genesis_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = genesis_1.Params.decode(reader, reader.uint32());
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
            params: (0, helpers_1.isSet)(object.params) ? genesis_1.Params.fromJSON(object.params) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined &&
            (obj.params = message.params ? genesis_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryParamsResponse();
        message.params =
            object.params !== undefined && object.params !== null
                ? genesis_1.Params.fromPartial(object.params)
                : undefined;
        return message;
    },
};
function createBaseQueryCurrentValsetRequest() {
    return {};
}
exports.QueryCurrentValsetRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCurrentValsetRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseQueryCurrentValsetRequest();
        return message;
    },
};
function createBaseQueryCurrentValsetResponse() {
    return {
        valset: undefined,
    };
}
exports.QueryCurrentValsetResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.valset !== undefined) {
            types_1.Valset.encode(message.valset, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCurrentValsetResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.valset = types_1.Valset.decode(reader, reader.uint32());
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
            valset: (0, helpers_1.isSet)(object.valset) ? types_1.Valset.fromJSON(object.valset) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.valset !== undefined &&
            (obj.valset = message.valset ? types_1.Valset.toJSON(message.valset) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryCurrentValsetResponse();
        message.valset =
            object.valset !== undefined && object.valset !== null
                ? types_1.Valset.fromPartial(object.valset)
                : undefined;
        return message;
    },
};
function createBaseQueryValsetRequestRequest() {
    return {
        nonce: helpers_1.Long.UZERO,
    };
}
exports.QueryValsetRequestRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.nonce.isZero()) {
            writer.uint32(8).uint64(message.nonce);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryValsetRequestRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nonce = reader.uint64();
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
            nonce: (0, helpers_1.isSet)(object.nonce) ? helpers_1.Long.fromValue(object.nonce) : helpers_1.Long.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.nonce !== undefined &&
            (obj.nonce = (message.nonce || helpers_1.Long.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryValsetRequestRequest();
        message.nonce =
            object.nonce !== undefined && object.nonce !== null
                ? helpers_1.Long.fromValue(object.nonce)
                : helpers_1.Long.UZERO;
        return message;
    },
};
function createBaseQueryValsetRequestResponse() {
    return {
        valset: undefined,
    };
}
exports.QueryValsetRequestResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.valset !== undefined) {
            types_1.Valset.encode(message.valset, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryValsetRequestResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.valset = types_1.Valset.decode(reader, reader.uint32());
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
            valset: (0, helpers_1.isSet)(object.valset) ? types_1.Valset.fromJSON(object.valset) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.valset !== undefined &&
            (obj.valset = message.valset ? types_1.Valset.toJSON(message.valset) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryValsetRequestResponse();
        message.valset =
            object.valset !== undefined && object.valset !== null
                ? types_1.Valset.fromPartial(object.valset)
                : undefined;
        return message;
    },
};
function createBaseQueryValsetConfirmRequest() {
    return {
        nonce: helpers_1.Long.UZERO,
        address: "",
    };
}
exports.QueryValsetConfirmRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.nonce.isZero()) {
            writer.uint32(8).uint64(message.nonce);
        }
        if (message.address !== "") {
            writer.uint32(18).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryValsetConfirmRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nonce = reader.uint64();
                    break;
                case 2:
                    message.address = reader.string();
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
            nonce: (0, helpers_1.isSet)(object.nonce) ? helpers_1.Long.fromValue(object.nonce) : helpers_1.Long.UZERO,
            address: (0, helpers_1.isSet)(object.address) ? String(object.address) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.nonce !== undefined &&
            (obj.nonce = (message.nonce || helpers_1.Long.UZERO).toString());
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryValsetConfirmRequest();
        message.nonce =
            object.nonce !== undefined && object.nonce !== null
                ? helpers_1.Long.fromValue(object.nonce)
                : helpers_1.Long.UZERO;
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryValsetConfirmResponse() {
    return {
        confirm: undefined,
    };
}
exports.QueryValsetConfirmResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.confirm !== undefined) {
            msgs_1.MsgValsetConfirm.encode(message.confirm, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryValsetConfirmResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.confirm = msgs_1.MsgValsetConfirm.decode(reader, reader.uint32());
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
            confirm: (0, helpers_1.isSet)(object.confirm)
                ? msgs_1.MsgValsetConfirm.fromJSON(object.confirm)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.confirm !== undefined &&
            (obj.confirm = message.confirm
                ? msgs_1.MsgValsetConfirm.toJSON(message.confirm)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryValsetConfirmResponse();
        message.confirm =
            object.confirm !== undefined && object.confirm !== null
                ? msgs_1.MsgValsetConfirm.fromPartial(object.confirm)
                : undefined;
        return message;
    },
};
function createBaseQueryValsetConfirmsByNonceRequest() {
    return {
        nonce: helpers_1.Long.UZERO,
    };
}
exports.QueryValsetConfirmsByNonceRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.nonce.isZero()) {
            writer.uint32(8).uint64(message.nonce);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryValsetConfirmsByNonceRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nonce = reader.uint64();
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
            nonce: (0, helpers_1.isSet)(object.nonce) ? helpers_1.Long.fromValue(object.nonce) : helpers_1.Long.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.nonce !== undefined &&
            (obj.nonce = (message.nonce || helpers_1.Long.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryValsetConfirmsByNonceRequest();
        message.nonce =
            object.nonce !== undefined && object.nonce !== null
                ? helpers_1.Long.fromValue(object.nonce)
                : helpers_1.Long.UZERO;
        return message;
    },
};
function createBaseQueryValsetConfirmsByNonceResponse() {
    return {
        confirms: [],
    };
}
exports.QueryValsetConfirmsByNonceResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.confirms) {
            msgs_1.MsgValsetConfirm.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryValsetConfirmsByNonceResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.confirms.push(msgs_1.MsgValsetConfirm.decode(reader, reader.uint32()));
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
            confirms: Array.isArray(object === null || object === void 0 ? void 0 : object.confirms)
                ? object.confirms.map((e) => msgs_1.MsgValsetConfirm.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.confirms) {
            obj.confirms = message.confirms.map((e) => e ? msgs_1.MsgValsetConfirm.toJSON(e) : undefined);
        }
        else {
            obj.confirms = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryValsetConfirmsByNonceResponse();
        message.confirms =
            ((_a = object.confirms) === null || _a === void 0 ? void 0 : _a.map((e) => msgs_1.MsgValsetConfirm.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryLastValsetRequestsRequest() {
    return {};
}
exports.QueryLastValsetRequestsRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLastValsetRequestsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseQueryLastValsetRequestsRequest();
        return message;
    },
};
function createBaseQueryLastValsetRequestsResponse() {
    return {
        valsets: [],
    };
}
exports.QueryLastValsetRequestsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.valsets) {
            types_1.Valset.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLastValsetRequestsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.valsets.push(types_1.Valset.decode(reader, reader.uint32()));
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
            valsets: Array.isArray(object === null || object === void 0 ? void 0 : object.valsets)
                ? object.valsets.map((e) => types_1.Valset.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.valsets) {
            obj.valsets = message.valsets.map((e) => e ? types_1.Valset.toJSON(e) : undefined);
        }
        else {
            obj.valsets = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryLastValsetRequestsResponse();
        message.valsets = ((_a = object.valsets) === null || _a === void 0 ? void 0 : _a.map((e) => types_1.Valset.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryLastPendingValsetRequestByAddrRequest() {
    return {
        address: "",
    };
}
exports.QueryLastPendingValsetRequestByAddrRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLastPendingValsetRequestByAddrRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
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
            address: (0, helpers_1.isSet)(object.address) ? String(object.address) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryLastPendingValsetRequestByAddrRequest();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryLastPendingValsetRequestByAddrResponse() {
    return {
        valsets: [],
    };
}
exports.QueryLastPendingValsetRequestByAddrResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.valsets) {
            types_1.Valset.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLastPendingValsetRequestByAddrResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.valsets.push(types_1.Valset.decode(reader, reader.uint32()));
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
            valsets: Array.isArray(object === null || object === void 0 ? void 0 : object.valsets)
                ? object.valsets.map((e) => types_1.Valset.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.valsets) {
            obj.valsets = message.valsets.map((e) => e ? types_1.Valset.toJSON(e) : undefined);
        }
        else {
            obj.valsets = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryLastPendingValsetRequestByAddrResponse();
        message.valsets = ((_a = object.valsets) === null || _a === void 0 ? void 0 : _a.map((e) => types_1.Valset.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryBatchFeeRequest() {
    return {};
}
exports.QueryBatchFeeRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBatchFeeRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseQueryBatchFeeRequest();
        return message;
    },
};
function createBaseQueryBatchFeeResponse() {
    return {
        batchFees: [],
    };
}
exports.QueryBatchFeeResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.batchFees) {
            pool_1.BatchFees.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBatchFeeResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.batchFees.push(pool_1.BatchFees.decode(reader, reader.uint32()));
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
            batchFees: Array.isArray(object === null || object === void 0 ? void 0 : object.batchFees)
                ? object.batchFees.map((e) => pool_1.BatchFees.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.batchFees) {
            obj.batchFees = message.batchFees.map((e) => e ? pool_1.BatchFees.toJSON(e) : undefined);
        }
        else {
            obj.batchFees = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryBatchFeeResponse();
        message.batchFees =
            ((_a = object.batchFees) === null || _a === void 0 ? void 0 : _a.map((e) => pool_1.BatchFees.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryLastPendingBatchRequestByAddrRequest() {
    return {
        address: "",
    };
}
exports.QueryLastPendingBatchRequestByAddrRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLastPendingBatchRequestByAddrRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
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
            address: (0, helpers_1.isSet)(object.address) ? String(object.address) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryLastPendingBatchRequestByAddrRequest();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryLastPendingBatchRequestByAddrResponse() {
    return {
        batch: [],
    };
}
exports.QueryLastPendingBatchRequestByAddrResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.batch) {
            batch_1.OutgoingTxBatch.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLastPendingBatchRequestByAddrResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.batch.push(batch_1.OutgoingTxBatch.decode(reader, reader.uint32()));
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
            batch: Array.isArray(object === null || object === void 0 ? void 0 : object.batch)
                ? object.batch.map((e) => batch_1.OutgoingTxBatch.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.batch) {
            obj.batch = message.batch.map((e) => e ? batch_1.OutgoingTxBatch.toJSON(e) : undefined);
        }
        else {
            obj.batch = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryLastPendingBatchRequestByAddrResponse();
        message.batch =
            ((_a = object.batch) === null || _a === void 0 ? void 0 : _a.map((e) => batch_1.OutgoingTxBatch.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryLastPendingLogicCallByAddrRequest() {
    return {
        address: "",
    };
}
exports.QueryLastPendingLogicCallByAddrRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLastPendingLogicCallByAddrRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
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
            address: (0, helpers_1.isSet)(object.address) ? String(object.address) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryLastPendingLogicCallByAddrRequest();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryLastPendingLogicCallByAddrResponse() {
    return {
        call: [],
    };
}
exports.QueryLastPendingLogicCallByAddrResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.call) {
            batch_1.OutgoingLogicCall.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLastPendingLogicCallByAddrResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.call.push(batch_1.OutgoingLogicCall.decode(reader, reader.uint32()));
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
            call: Array.isArray(object === null || object === void 0 ? void 0 : object.call)
                ? object.call.map((e) => batch_1.OutgoingLogicCall.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.call) {
            obj.call = message.call.map((e) => e ? batch_1.OutgoingLogicCall.toJSON(e) : undefined);
        }
        else {
            obj.call = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryLastPendingLogicCallByAddrResponse();
        message.call =
            ((_a = object.call) === null || _a === void 0 ? void 0 : _a.map((e) => batch_1.OutgoingLogicCall.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryOutgoingTxBatchesRequest() {
    return {};
}
exports.QueryOutgoingTxBatchesRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryOutgoingTxBatchesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseQueryOutgoingTxBatchesRequest();
        return message;
    },
};
function createBaseQueryOutgoingTxBatchesResponse() {
    return {
        batches: [],
    };
}
exports.QueryOutgoingTxBatchesResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.batches) {
            batch_1.OutgoingTxBatch.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryOutgoingTxBatchesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.batches.push(batch_1.OutgoingTxBatch.decode(reader, reader.uint32()));
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
            batches: Array.isArray(object === null || object === void 0 ? void 0 : object.batches)
                ? object.batches.map((e) => batch_1.OutgoingTxBatch.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.batches) {
            obj.batches = message.batches.map((e) => e ? batch_1.OutgoingTxBatch.toJSON(e) : undefined);
        }
        else {
            obj.batches = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryOutgoingTxBatchesResponse();
        message.batches =
            ((_a = object.batches) === null || _a === void 0 ? void 0 : _a.map((e) => batch_1.OutgoingTxBatch.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryOutgoingLogicCallsRequest() {
    return {};
}
exports.QueryOutgoingLogicCallsRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryOutgoingLogicCallsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseQueryOutgoingLogicCallsRequest();
        return message;
    },
};
function createBaseQueryOutgoingLogicCallsResponse() {
    return {
        calls: [],
    };
}
exports.QueryOutgoingLogicCallsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.calls) {
            batch_1.OutgoingLogicCall.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryOutgoingLogicCallsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.calls.push(batch_1.OutgoingLogicCall.decode(reader, reader.uint32()));
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
            calls: Array.isArray(object === null || object === void 0 ? void 0 : object.calls)
                ? object.calls.map((e) => batch_1.OutgoingLogicCall.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.calls) {
            obj.calls = message.calls.map((e) => e ? batch_1.OutgoingLogicCall.toJSON(e) : undefined);
        }
        else {
            obj.calls = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryOutgoingLogicCallsResponse();
        message.calls =
            ((_a = object.calls) === null || _a === void 0 ? void 0 : _a.map((e) => batch_1.OutgoingLogicCall.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryBatchRequestByNonceRequest() {
    return {
        nonce: helpers_1.Long.UZERO,
        contractAddress: "",
    };
}
exports.QueryBatchRequestByNonceRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.nonce.isZero()) {
            writer.uint32(8).uint64(message.nonce);
        }
        if (message.contractAddress !== "") {
            writer.uint32(18).string(message.contractAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBatchRequestByNonceRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nonce = reader.uint64();
                    break;
                case 2:
                    message.contractAddress = reader.string();
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
            nonce: (0, helpers_1.isSet)(object.nonce) ? helpers_1.Long.fromValue(object.nonce) : helpers_1.Long.UZERO,
            contractAddress: (0, helpers_1.isSet)(object.contractAddress)
                ? String(object.contractAddress)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.nonce !== undefined &&
            (obj.nonce = (message.nonce || helpers_1.Long.UZERO).toString());
        message.contractAddress !== undefined &&
            (obj.contractAddress = message.contractAddress);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryBatchRequestByNonceRequest();
        message.nonce =
            object.nonce !== undefined && object.nonce !== null
                ? helpers_1.Long.fromValue(object.nonce)
                : helpers_1.Long.UZERO;
        message.contractAddress = (_a = object.contractAddress) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryBatchRequestByNonceResponse() {
    return {
        batch: undefined,
    };
}
exports.QueryBatchRequestByNonceResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.batch !== undefined) {
            batch_1.OutgoingTxBatch.encode(message.batch, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBatchRequestByNonceResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.batch = batch_1.OutgoingTxBatch.decode(reader, reader.uint32());
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
            batch: (0, helpers_1.isSet)(object.batch)
                ? batch_1.OutgoingTxBatch.fromJSON(object.batch)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.batch !== undefined &&
            (obj.batch = message.batch
                ? batch_1.OutgoingTxBatch.toJSON(message.batch)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryBatchRequestByNonceResponse();
        message.batch =
            object.batch !== undefined && object.batch !== null
                ? batch_1.OutgoingTxBatch.fromPartial(object.batch)
                : undefined;
        return message;
    },
};
function createBaseQueryBatchConfirmsRequest() {
    return {
        nonce: helpers_1.Long.UZERO,
        contractAddress: "",
    };
}
exports.QueryBatchConfirmsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.nonce.isZero()) {
            writer.uint32(8).uint64(message.nonce);
        }
        if (message.contractAddress !== "") {
            writer.uint32(18).string(message.contractAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBatchConfirmsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nonce = reader.uint64();
                    break;
                case 2:
                    message.contractAddress = reader.string();
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
            nonce: (0, helpers_1.isSet)(object.nonce) ? helpers_1.Long.fromValue(object.nonce) : helpers_1.Long.UZERO,
            contractAddress: (0, helpers_1.isSet)(object.contractAddress)
                ? String(object.contractAddress)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.nonce !== undefined &&
            (obj.nonce = (message.nonce || helpers_1.Long.UZERO).toString());
        message.contractAddress !== undefined &&
            (obj.contractAddress = message.contractAddress);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryBatchConfirmsRequest();
        message.nonce =
            object.nonce !== undefined && object.nonce !== null
                ? helpers_1.Long.fromValue(object.nonce)
                : helpers_1.Long.UZERO;
        message.contractAddress = (_a = object.contractAddress) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryBatchConfirmsResponse() {
    return {
        confirms: [],
    };
}
exports.QueryBatchConfirmsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.confirms) {
            msgs_1.MsgConfirmBatch.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBatchConfirmsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.confirms.push(msgs_1.MsgConfirmBatch.decode(reader, reader.uint32()));
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
            confirms: Array.isArray(object === null || object === void 0 ? void 0 : object.confirms)
                ? object.confirms.map((e) => msgs_1.MsgConfirmBatch.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.confirms) {
            obj.confirms = message.confirms.map((e) => e ? msgs_1.MsgConfirmBatch.toJSON(e) : undefined);
        }
        else {
            obj.confirms = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryBatchConfirmsResponse();
        message.confirms =
            ((_a = object.confirms) === null || _a === void 0 ? void 0 : _a.map((e) => msgs_1.MsgConfirmBatch.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryLogicConfirmsRequest() {
    return {
        invalidationId: new Uint8Array(),
        invalidationNonce: helpers_1.Long.UZERO,
    };
}
exports.QueryLogicConfirmsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.invalidationId.length !== 0) {
            writer.uint32(10).bytes(message.invalidationId);
        }
        if (!message.invalidationNonce.isZero()) {
            writer.uint32(16).uint64(message.invalidationNonce);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLogicConfirmsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.invalidationId = reader.bytes();
                    break;
                case 2:
                    message.invalidationNonce = reader.uint64();
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
            invalidationId: (0, helpers_1.isSet)(object.invalidationId)
                ? (0, helpers_1.bytesFromBase64)(object.invalidationId)
                : new Uint8Array(),
            invalidationNonce: (0, helpers_1.isSet)(object.invalidationNonce)
                ? helpers_1.Long.fromValue(object.invalidationNonce)
                : helpers_1.Long.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.invalidationId !== undefined &&
            (obj.invalidationId = (0, helpers_1.base64FromBytes)(message.invalidationId !== undefined
                ? message.invalidationId
                : new Uint8Array()));
        message.invalidationNonce !== undefined &&
            (obj.invalidationNonce = (message.invalidationNonce || helpers_1.Long.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryLogicConfirmsRequest();
        message.invalidationId = (_a = object.invalidationId) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.invalidationNonce =
            object.invalidationNonce !== undefined &&
                object.invalidationNonce !== null
                ? helpers_1.Long.fromValue(object.invalidationNonce)
                : helpers_1.Long.UZERO;
        return message;
    },
};
function createBaseQueryLogicConfirmsResponse() {
    return {
        confirms: [],
    };
}
exports.QueryLogicConfirmsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.confirms) {
            msgs_1.MsgConfirmLogicCall.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLogicConfirmsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.confirms.push(msgs_1.MsgConfirmLogicCall.decode(reader, reader.uint32()));
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
            confirms: Array.isArray(object === null || object === void 0 ? void 0 : object.confirms)
                ? object.confirms.map((e) => msgs_1.MsgConfirmLogicCall.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.confirms) {
            obj.confirms = message.confirms.map((e) => e ? msgs_1.MsgConfirmLogicCall.toJSON(e) : undefined);
        }
        else {
            obj.confirms = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryLogicConfirmsResponse();
        message.confirms =
            ((_a = object.confirms) === null || _a === void 0 ? void 0 : _a.map((e) => msgs_1.MsgConfirmLogicCall.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryLastEventNonceByAddrRequest() {
    return {
        address: "",
    };
}
exports.QueryLastEventNonceByAddrRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLastEventNonceByAddrRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
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
            address: (0, helpers_1.isSet)(object.address) ? String(object.address) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryLastEventNonceByAddrRequest();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryLastEventNonceByAddrResponse() {
    return {
        eventNonce: helpers_1.Long.UZERO,
    };
}
exports.QueryLastEventNonceByAddrResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.eventNonce.isZero()) {
            writer.uint32(8).uint64(message.eventNonce);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLastEventNonceByAddrResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.eventNonce = reader.uint64();
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
            eventNonce: (0, helpers_1.isSet)(object.eventNonce)
                ? helpers_1.Long.fromValue(object.eventNonce)
                : helpers_1.Long.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.eventNonce !== undefined &&
            (obj.eventNonce = (message.eventNonce || helpers_1.Long.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryLastEventNonceByAddrResponse();
        message.eventNonce =
            object.eventNonce !== undefined && object.eventNonce !== null
                ? helpers_1.Long.fromValue(object.eventNonce)
                : helpers_1.Long.UZERO;
        return message;
    },
};
function createBaseQueryERC20ToDenomRequest() {
    return {
        erc20: "",
    };
}
exports.QueryERC20ToDenomRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.erc20 !== "") {
            writer.uint32(10).string(message.erc20);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryERC20ToDenomRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.erc20 = reader.string();
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
            erc20: (0, helpers_1.isSet)(object.erc20) ? String(object.erc20) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.erc20 !== undefined && (obj.erc20 = message.erc20);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryERC20ToDenomRequest();
        message.erc20 = (_a = object.erc20) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryERC20ToDenomResponse() {
    return {
        denom: "",
        cosmosOriginated: false,
    };
}
exports.QueryERC20ToDenomResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (message.cosmosOriginated === true) {
            writer.uint32(16).bool(message.cosmosOriginated);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryERC20ToDenomResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                case 2:
                    message.cosmosOriginated = reader.bool();
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
            denom: (0, helpers_1.isSet)(object.denom) ? String(object.denom) : "",
            cosmosOriginated: (0, helpers_1.isSet)(object.cosmosOriginated)
                ? Boolean(object.cosmosOriginated)
                : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.denom !== undefined && (obj.denom = message.denom);
        message.cosmosOriginated !== undefined &&
            (obj.cosmosOriginated = message.cosmosOriginated);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQueryERC20ToDenomResponse();
        message.denom = (_a = object.denom) !== null && _a !== void 0 ? _a : "";
        message.cosmosOriginated = (_b = object.cosmosOriginated) !== null && _b !== void 0 ? _b : false;
        return message;
    },
};
function createBaseQueryDenomToERC20Request() {
    return {
        denom: "",
    };
}
exports.QueryDenomToERC20Request = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDenomToERC20Request();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
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
            denom: (0, helpers_1.isSet)(object.denom) ? String(object.denom) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.denom !== undefined && (obj.denom = message.denom);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryDenomToERC20Request();
        message.denom = (_a = object.denom) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryDenomToERC20Response() {
    return {
        erc20: "",
        cosmosOriginated: false,
    };
}
exports.QueryDenomToERC20Response = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.erc20 !== "") {
            writer.uint32(10).string(message.erc20);
        }
        if (message.cosmosOriginated === true) {
            writer.uint32(16).bool(message.cosmosOriginated);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDenomToERC20Response();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.erc20 = reader.string();
                    break;
                case 2:
                    message.cosmosOriginated = reader.bool();
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
            erc20: (0, helpers_1.isSet)(object.erc20) ? String(object.erc20) : "",
            cosmosOriginated: (0, helpers_1.isSet)(object.cosmosOriginated)
                ? Boolean(object.cosmosOriginated)
                : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.erc20 !== undefined && (obj.erc20 = message.erc20);
        message.cosmosOriginated !== undefined &&
            (obj.cosmosOriginated = message.cosmosOriginated);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQueryDenomToERC20Response();
        message.erc20 = (_a = object.erc20) !== null && _a !== void 0 ? _a : "";
        message.cosmosOriginated = (_b = object.cosmosOriginated) !== null && _b !== void 0 ? _b : false;
        return message;
    },
};
function createBaseQueryLastObservedEthBlockRequest() {
    return {
        useV1Key: false,
    };
}
exports.QueryLastObservedEthBlockRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.useV1Key === true) {
            writer.uint32(8).bool(message.useV1Key);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLastObservedEthBlockRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.useV1Key = reader.bool();
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
            useV1Key: (0, helpers_1.isSet)(object.useV1Key) ? Boolean(object.useV1Key) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.useV1Key !== undefined && (obj.useV1Key = message.useV1Key);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryLastObservedEthBlockRequest();
        message.useV1Key = (_a = object.useV1Key) !== null && _a !== void 0 ? _a : false;
        return message;
    },
};
function createBaseQueryLastObservedEthBlockResponse() {
    return {
        block: helpers_1.Long.UZERO,
    };
}
exports.QueryLastObservedEthBlockResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.block.isZero()) {
            writer.uint32(8).uint64(message.block);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLastObservedEthBlockResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.block = reader.uint64();
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
            block: (0, helpers_1.isSet)(object.block) ? helpers_1.Long.fromValue(object.block) : helpers_1.Long.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.block !== undefined &&
            (obj.block = (message.block || helpers_1.Long.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryLastObservedEthBlockResponse();
        message.block =
            object.block !== undefined && object.block !== null
                ? helpers_1.Long.fromValue(object.block)
                : helpers_1.Long.UZERO;
        return message;
    },
};
function createBaseQueryLastObservedEthNonceRequest() {
    return {
        useV1Key: false,
    };
}
exports.QueryLastObservedEthNonceRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.useV1Key === true) {
            writer.uint32(8).bool(message.useV1Key);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLastObservedEthNonceRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.useV1Key = reader.bool();
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
            useV1Key: (0, helpers_1.isSet)(object.useV1Key) ? Boolean(object.useV1Key) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.useV1Key !== undefined && (obj.useV1Key = message.useV1Key);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryLastObservedEthNonceRequest();
        message.useV1Key = (_a = object.useV1Key) !== null && _a !== void 0 ? _a : false;
        return message;
    },
};
function createBaseQueryLastObservedEthNonceResponse() {
    return {
        nonce: helpers_1.Long.UZERO,
    };
}
exports.QueryLastObservedEthNonceResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.nonce.isZero()) {
            writer.uint32(8).uint64(message.nonce);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLastObservedEthNonceResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nonce = reader.uint64();
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
            nonce: (0, helpers_1.isSet)(object.nonce) ? helpers_1.Long.fromValue(object.nonce) : helpers_1.Long.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.nonce !== undefined &&
            (obj.nonce = (message.nonce || helpers_1.Long.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryLastObservedEthNonceResponse();
        message.nonce =
            object.nonce !== undefined && object.nonce !== null
                ? helpers_1.Long.fromValue(object.nonce)
                : helpers_1.Long.UZERO;
        return message;
    },
};
function createBaseQueryAttestationsRequest() {
    return {
        limit: helpers_1.Long.UZERO,
        orderBy: "",
        claimType: "",
        nonce: helpers_1.Long.UZERO,
        height: helpers_1.Long.UZERO,
        useV1Key: false,
    };
}
exports.QueryAttestationsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.limit.isZero()) {
            writer.uint32(8).uint64(message.limit);
        }
        if (message.orderBy !== "") {
            writer.uint32(18).string(message.orderBy);
        }
        if (message.claimType !== "") {
            writer.uint32(26).string(message.claimType);
        }
        if (!message.nonce.isZero()) {
            writer.uint32(32).uint64(message.nonce);
        }
        if (!message.height.isZero()) {
            writer.uint32(40).uint64(message.height);
        }
        if (message.useV1Key === true) {
            writer.uint32(48).bool(message.useV1Key);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAttestationsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.limit = reader.uint64();
                    break;
                case 2:
                    message.orderBy = reader.string();
                    break;
                case 3:
                    message.claimType = reader.string();
                    break;
                case 4:
                    message.nonce = reader.uint64();
                    break;
                case 5:
                    message.height = reader.uint64();
                    break;
                case 6:
                    message.useV1Key = reader.bool();
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
            limit: (0, helpers_1.isSet)(object.limit) ? helpers_1.Long.fromValue(object.limit) : helpers_1.Long.UZERO,
            orderBy: (0, helpers_1.isSet)(object.orderBy) ? String(object.orderBy) : "",
            claimType: (0, helpers_1.isSet)(object.claimType) ? String(object.claimType) : "",
            nonce: (0, helpers_1.isSet)(object.nonce) ? helpers_1.Long.fromValue(object.nonce) : helpers_1.Long.UZERO,
            height: (0, helpers_1.isSet)(object.height) ? helpers_1.Long.fromValue(object.height) : helpers_1.Long.UZERO,
            useV1Key: (0, helpers_1.isSet)(object.useV1Key) ? Boolean(object.useV1Key) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.limit !== undefined &&
            (obj.limit = (message.limit || helpers_1.Long.UZERO).toString());
        message.orderBy !== undefined && (obj.orderBy = message.orderBy);
        message.claimType !== undefined && (obj.claimType = message.claimType);
        message.nonce !== undefined &&
            (obj.nonce = (message.nonce || helpers_1.Long.UZERO).toString());
        message.height !== undefined &&
            (obj.height = (message.height || helpers_1.Long.UZERO).toString());
        message.useV1Key !== undefined && (obj.useV1Key = message.useV1Key);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseQueryAttestationsRequest();
        message.limit =
            object.limit !== undefined && object.limit !== null
                ? helpers_1.Long.fromValue(object.limit)
                : helpers_1.Long.UZERO;
        message.orderBy = (_a = object.orderBy) !== null && _a !== void 0 ? _a : "";
        message.claimType = (_b = object.claimType) !== null && _b !== void 0 ? _b : "";
        message.nonce =
            object.nonce !== undefined && object.nonce !== null
                ? helpers_1.Long.fromValue(object.nonce)
                : helpers_1.Long.UZERO;
        message.height =
            object.height !== undefined && object.height !== null
                ? helpers_1.Long.fromValue(object.height)
                : helpers_1.Long.UZERO;
        message.useV1Key = (_c = object.useV1Key) !== null && _c !== void 0 ? _c : false;
        return message;
    },
};
function createBaseQueryAttestationsResponse() {
    return {
        attestations: [],
    };
}
exports.QueryAttestationsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.attestations) {
            attestation_1.Attestation.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAttestationsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.attestations.push(attestation_1.Attestation.decode(reader, reader.uint32()));
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
            attestations: Array.isArray(object === null || object === void 0 ? void 0 : object.attestations)
                ? object.attestations.map((e) => attestation_1.Attestation.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.attestations) {
            obj.attestations = message.attestations.map((e) => e ? attestation_1.Attestation.toJSON(e) : undefined);
        }
        else {
            obj.attestations = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryAttestationsResponse();
        message.attestations =
            ((_a = object.attestations) === null || _a === void 0 ? void 0 : _a.map((e) => attestation_1.Attestation.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryDelegateKeysByValidatorAddress() {
    return {
        validatorAddress: "",
    };
}
exports.QueryDelegateKeysByValidatorAddress = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.validatorAddress !== "") {
            writer.uint32(10).string(message.validatorAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDelegateKeysByValidatorAddress();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validatorAddress = reader.string();
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
            validatorAddress: (0, helpers_1.isSet)(object.validatorAddress)
                ? String(object.validatorAddress)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.validatorAddress !== undefined &&
            (obj.validatorAddress = message.validatorAddress);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryDelegateKeysByValidatorAddress();
        message.validatorAddress = (_a = object.validatorAddress) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryDelegateKeysByValidatorAddressResponse() {
    return {
        ethAddress: "",
        orchestratorAddress: "",
    };
}
exports.QueryDelegateKeysByValidatorAddressResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.ethAddress !== "") {
            writer.uint32(10).string(message.ethAddress);
        }
        if (message.orchestratorAddress !== "") {
            writer.uint32(18).string(message.orchestratorAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDelegateKeysByValidatorAddressResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ethAddress = reader.string();
                    break;
                case 2:
                    message.orchestratorAddress = reader.string();
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
            ethAddress: (0, helpers_1.isSet)(object.ethAddress) ? String(object.ethAddress) : "",
            orchestratorAddress: (0, helpers_1.isSet)(object.orchestratorAddress)
                ? String(object.orchestratorAddress)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.ethAddress !== undefined && (obj.ethAddress = message.ethAddress);
        message.orchestratorAddress !== undefined &&
            (obj.orchestratorAddress = message.orchestratorAddress);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQueryDelegateKeysByValidatorAddressResponse();
        message.ethAddress = (_a = object.ethAddress) !== null && _a !== void 0 ? _a : "";
        message.orchestratorAddress = (_b = object.orchestratorAddress) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseQueryDelegateKeysByEthAddress() {
    return {
        ethAddress: "",
    };
}
exports.QueryDelegateKeysByEthAddress = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.ethAddress !== "") {
            writer.uint32(10).string(message.ethAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDelegateKeysByEthAddress();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ethAddress = reader.string();
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
            ethAddress: (0, helpers_1.isSet)(object.ethAddress) ? String(object.ethAddress) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.ethAddress !== undefined && (obj.ethAddress = message.ethAddress);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryDelegateKeysByEthAddress();
        message.ethAddress = (_a = object.ethAddress) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryDelegateKeysByEthAddressResponse() {
    return {
        validatorAddress: "",
        orchestratorAddress: "",
    };
}
exports.QueryDelegateKeysByEthAddressResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.validatorAddress !== "") {
            writer.uint32(10).string(message.validatorAddress);
        }
        if (message.orchestratorAddress !== "") {
            writer.uint32(18).string(message.orchestratorAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDelegateKeysByEthAddressResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validatorAddress = reader.string();
                    break;
                case 2:
                    message.orchestratorAddress = reader.string();
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
            validatorAddress: (0, helpers_1.isSet)(object.validatorAddress)
                ? String(object.validatorAddress)
                : "",
            orchestratorAddress: (0, helpers_1.isSet)(object.orchestratorAddress)
                ? String(object.orchestratorAddress)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.validatorAddress !== undefined &&
            (obj.validatorAddress = message.validatorAddress);
        message.orchestratorAddress !== undefined &&
            (obj.orchestratorAddress = message.orchestratorAddress);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQueryDelegateKeysByEthAddressResponse();
        message.validatorAddress = (_a = object.validatorAddress) !== null && _a !== void 0 ? _a : "";
        message.orchestratorAddress = (_b = object.orchestratorAddress) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseQueryDelegateKeysByOrchestratorAddress() {
    return {
        orchestratorAddress: "",
    };
}
exports.QueryDelegateKeysByOrchestratorAddress = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.orchestratorAddress !== "") {
            writer.uint32(10).string(message.orchestratorAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDelegateKeysByOrchestratorAddress();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.orchestratorAddress = reader.string();
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
            orchestratorAddress: (0, helpers_1.isSet)(object.orchestratorAddress)
                ? String(object.orchestratorAddress)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.orchestratorAddress !== undefined &&
            (obj.orchestratorAddress = message.orchestratorAddress);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryDelegateKeysByOrchestratorAddress();
        message.orchestratorAddress = (_a = object.orchestratorAddress) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryDelegateKeysByOrchestratorAddressResponse() {
    return {
        validatorAddress: "",
        ethAddress: "",
    };
}
exports.QueryDelegateKeysByOrchestratorAddressResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.validatorAddress !== "") {
            writer.uint32(10).string(message.validatorAddress);
        }
        if (message.ethAddress !== "") {
            writer.uint32(18).string(message.ethAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDelegateKeysByOrchestratorAddressResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validatorAddress = reader.string();
                    break;
                case 2:
                    message.ethAddress = reader.string();
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
            validatorAddress: (0, helpers_1.isSet)(object.validatorAddress)
                ? String(object.validatorAddress)
                : "",
            ethAddress: (0, helpers_1.isSet)(object.ethAddress) ? String(object.ethAddress) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.validatorAddress !== undefined &&
            (obj.validatorAddress = message.validatorAddress);
        message.ethAddress !== undefined && (obj.ethAddress = message.ethAddress);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQueryDelegateKeysByOrchestratorAddressResponse();
        message.validatorAddress = (_a = object.validatorAddress) !== null && _a !== void 0 ? _a : "";
        message.ethAddress = (_b = object.ethAddress) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseQueryPendingSendToEth() {
    return {
        senderAddress: "",
    };
}
exports.QueryPendingSendToEth = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.senderAddress !== "") {
            writer.uint32(10).string(message.senderAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPendingSendToEth();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.senderAddress = reader.string();
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
            senderAddress: (0, helpers_1.isSet)(object.senderAddress)
                ? String(object.senderAddress)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.senderAddress !== undefined &&
            (obj.senderAddress = message.senderAddress);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryPendingSendToEth();
        message.senderAddress = (_a = object.senderAddress) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryPendingSendToEthResponse() {
    return {
        transfersInBatches: [],
        unbatchedTransfers: [],
    };
}
exports.QueryPendingSendToEthResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.transfersInBatches) {
            batch_1.OutgoingTransferTx.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.unbatchedTransfers) {
            batch_1.OutgoingTransferTx.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPendingSendToEthResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.transfersInBatches.push(batch_1.OutgoingTransferTx.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.unbatchedTransfers.push(batch_1.OutgoingTransferTx.decode(reader, reader.uint32()));
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
            transfersInBatches: Array.isArray(object === null || object === void 0 ? void 0 : object.transfersInBatches)
                ? object.transfersInBatches.map((e) => batch_1.OutgoingTransferTx.fromJSON(e))
                : [],
            unbatchedTransfers: Array.isArray(object === null || object === void 0 ? void 0 : object.unbatchedTransfers)
                ? object.unbatchedTransfers.map((e) => batch_1.OutgoingTransferTx.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.transfersInBatches) {
            obj.transfersInBatches = message.transfersInBatches.map((e) => e ? batch_1.OutgoingTransferTx.toJSON(e) : undefined);
        }
        else {
            obj.transfersInBatches = [];
        }
        if (message.unbatchedTransfers) {
            obj.unbatchedTransfers = message.unbatchedTransfers.map((e) => e ? batch_1.OutgoingTransferTx.toJSON(e) : undefined);
        }
        else {
            obj.unbatchedTransfers = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQueryPendingSendToEthResponse();
        message.transfersInBatches =
            ((_a = object.transfersInBatches) === null || _a === void 0 ? void 0 : _a.map((e) => batch_1.OutgoingTransferTx.fromPartial(e))) || [];
        message.unbatchedTransfers =
            ((_b = object.unbatchedTransfers) === null || _b === void 0 ? void 0 : _b.map((e) => batch_1.OutgoingTransferTx.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryPendingIbcAutoForwards() {
    return {
        limit: helpers_1.Long.UZERO,
    };
}
exports.QueryPendingIbcAutoForwards = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.limit.isZero()) {
            writer.uint32(8).uint64(message.limit);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPendingIbcAutoForwards();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.limit = reader.uint64();
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
            limit: (0, helpers_1.isSet)(object.limit) ? helpers_1.Long.fromValue(object.limit) : helpers_1.Long.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.limit !== undefined &&
            (obj.limit = (message.limit || helpers_1.Long.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryPendingIbcAutoForwards();
        message.limit =
            object.limit !== undefined && object.limit !== null
                ? helpers_1.Long.fromValue(object.limit)
                : helpers_1.Long.UZERO;
        return message;
    },
};
function createBaseQueryPendingIbcAutoForwardsResponse() {
    return {
        pendingIbcAutoForwards: [],
    };
}
exports.QueryPendingIbcAutoForwardsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.pendingIbcAutoForwards) {
            types_1.PendingIbcAutoForward.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPendingIbcAutoForwardsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pendingIbcAutoForwards.push(types_1.PendingIbcAutoForward.decode(reader, reader.uint32()));
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
            pendingIbcAutoForwards: Array.isArray(object === null || object === void 0 ? void 0 : object.pendingIbcAutoForwards)
                ? object.pendingIbcAutoForwards.map((e) => types_1.PendingIbcAutoForward.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.pendingIbcAutoForwards) {
            obj.pendingIbcAutoForwards = message.pendingIbcAutoForwards.map((e) => e ? types_1.PendingIbcAutoForward.toJSON(e) : undefined);
        }
        else {
            obj.pendingIbcAutoForwards = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryPendingIbcAutoForwardsResponse();
        message.pendingIbcAutoForwards =
            ((_a = object.pendingIbcAutoForwards) === null || _a === void 0 ? void 0 : _a.map((e) => types_1.PendingIbcAutoForward.fromPartial(e))) || [];
        return message;
    },
};
class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.Params = this.Params.bind(this);
        this.CurrentValset = this.CurrentValset.bind(this);
        this.ValsetRequest = this.ValsetRequest.bind(this);
        this.ValsetConfirm = this.ValsetConfirm.bind(this);
        this.ValsetConfirmsByNonce = this.ValsetConfirmsByNonce.bind(this);
        this.LastValsetRequests = this.LastValsetRequests.bind(this);
        this.LastPendingValsetRequestByAddr =
            this.LastPendingValsetRequestByAddr.bind(this);
        this.LastPendingBatchRequestByAddr =
            this.LastPendingBatchRequestByAddr.bind(this);
        this.LastPendingLogicCallByAddr =
            this.LastPendingLogicCallByAddr.bind(this);
        this.LastEventNonceByAddr = this.LastEventNonceByAddr.bind(this);
        this.BatchFees = this.BatchFees.bind(this);
        this.OutgoingTxBatches = this.OutgoingTxBatches.bind(this);
        this.OutgoingLogicCalls = this.OutgoingLogicCalls.bind(this);
        this.BatchRequestByNonce = this.BatchRequestByNonce.bind(this);
        this.BatchConfirms = this.BatchConfirms.bind(this);
        this.LogicConfirms = this.LogicConfirms.bind(this);
        this.ERC20ToDenom = this.ERC20ToDenom.bind(this);
        this.DenomToERC20 = this.DenomToERC20.bind(this);
        this.GetLastObservedEthBlock = this.GetLastObservedEthBlock.bind(this);
        this.GetLastObservedEthNonce = this.GetLastObservedEthNonce.bind(this);
        this.GetAttestations = this.GetAttestations.bind(this);
        this.GetDelegateKeyByValidator = this.GetDelegateKeyByValidator.bind(this);
        this.GetDelegateKeyByEth = this.GetDelegateKeyByEth.bind(this);
        this.GetDelegateKeyByOrchestrator =
            this.GetDelegateKeyByOrchestrator.bind(this);
        this.GetPendingSendToEth = this.GetPendingSendToEth.bind(this);
        this.GetPendingIbcAutoForwards = this.GetPendingIbcAutoForwards.bind(this);
    }
    Params(request = {}) {
        const data = exports.QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "Params", data);
        return promise.then((data) => exports.QueryParamsResponse.decode(new _m0.Reader(data)));
    }
    CurrentValset(request = {}) {
        const data = exports.QueryCurrentValsetRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "CurrentValset", data);
        return promise.then((data) => exports.QueryCurrentValsetResponse.decode(new _m0.Reader(data)));
    }
    ValsetRequest(request) {
        const data = exports.QueryValsetRequestRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "ValsetRequest", data);
        return promise.then((data) => exports.QueryValsetRequestResponse.decode(new _m0.Reader(data)));
    }
    ValsetConfirm(request) {
        const data = exports.QueryValsetConfirmRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "ValsetConfirm", data);
        return promise.then((data) => exports.QueryValsetConfirmResponse.decode(new _m0.Reader(data)));
    }
    ValsetConfirmsByNonce(request) {
        const data = exports.QueryValsetConfirmsByNonceRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "ValsetConfirmsByNonce", data);
        return promise.then((data) => exports.QueryValsetConfirmsByNonceResponse.decode(new _m0.Reader(data)));
    }
    LastValsetRequests(request = {}) {
        const data = exports.QueryLastValsetRequestsRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "LastValsetRequests", data);
        return promise.then((data) => exports.QueryLastValsetRequestsResponse.decode(new _m0.Reader(data)));
    }
    LastPendingValsetRequestByAddr(request) {
        const data = exports.QueryLastPendingValsetRequestByAddrRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "LastPendingValsetRequestByAddr", data);
        return promise.then((data) => exports.QueryLastPendingValsetRequestByAddrResponse.decode(new _m0.Reader(data)));
    }
    LastPendingBatchRequestByAddr(request) {
        const data = exports.QueryLastPendingBatchRequestByAddrRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "LastPendingBatchRequestByAddr", data);
        return promise.then((data) => exports.QueryLastPendingBatchRequestByAddrResponse.decode(new _m0.Reader(data)));
    }
    LastPendingLogicCallByAddr(request) {
        const data = exports.QueryLastPendingLogicCallByAddrRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "LastPendingLogicCallByAddr", data);
        return promise.then((data) => exports.QueryLastPendingLogicCallByAddrResponse.decode(new _m0.Reader(data)));
    }
    LastEventNonceByAddr(request) {
        const data = exports.QueryLastEventNonceByAddrRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "LastEventNonceByAddr", data);
        return promise.then((data) => exports.QueryLastEventNonceByAddrResponse.decode(new _m0.Reader(data)));
    }
    BatchFees(request = {}) {
        const data = exports.QueryBatchFeeRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "BatchFees", data);
        return promise.then((data) => exports.QueryBatchFeeResponse.decode(new _m0.Reader(data)));
    }
    OutgoingTxBatches(request = {}) {
        const data = exports.QueryOutgoingTxBatchesRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "OutgoingTxBatches", data);
        return promise.then((data) => exports.QueryOutgoingTxBatchesResponse.decode(new _m0.Reader(data)));
    }
    OutgoingLogicCalls(request = {}) {
        const data = exports.QueryOutgoingLogicCallsRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "OutgoingLogicCalls", data);
        return promise.then((data) => exports.QueryOutgoingLogicCallsResponse.decode(new _m0.Reader(data)));
    }
    BatchRequestByNonce(request) {
        const data = exports.QueryBatchRequestByNonceRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "BatchRequestByNonce", data);
        return promise.then((data) => exports.QueryBatchRequestByNonceResponse.decode(new _m0.Reader(data)));
    }
    BatchConfirms(request) {
        const data = exports.QueryBatchConfirmsRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "BatchConfirms", data);
        return promise.then((data) => exports.QueryBatchConfirmsResponse.decode(new _m0.Reader(data)));
    }
    LogicConfirms(request) {
        const data = exports.QueryLogicConfirmsRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "LogicConfirms", data);
        return promise.then((data) => exports.QueryLogicConfirmsResponse.decode(new _m0.Reader(data)));
    }
    ERC20ToDenom(request) {
        const data = exports.QueryERC20ToDenomRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "ERC20ToDenom", data);
        return promise.then((data) => exports.QueryERC20ToDenomResponse.decode(new _m0.Reader(data)));
    }
    DenomToERC20(request) {
        const data = exports.QueryDenomToERC20Request.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "DenomToERC20", data);
        return promise.then((data) => exports.QueryDenomToERC20Response.decode(new _m0.Reader(data)));
    }
    GetLastObservedEthBlock(request) {
        const data = exports.QueryLastObservedEthBlockRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "GetLastObservedEthBlock", data);
        return promise.then((data) => exports.QueryLastObservedEthBlockResponse.decode(new _m0.Reader(data)));
    }
    GetLastObservedEthNonce(request) {
        const data = exports.QueryLastObservedEthNonceRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "GetLastObservedEthNonce", data);
        return promise.then((data) => exports.QueryLastObservedEthNonceResponse.decode(new _m0.Reader(data)));
    }
    GetAttestations(request) {
        const data = exports.QueryAttestationsRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "GetAttestations", data);
        return promise.then((data) => exports.QueryAttestationsResponse.decode(new _m0.Reader(data)));
    }
    GetDelegateKeyByValidator(request) {
        const data = exports.QueryDelegateKeysByValidatorAddress.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "GetDelegateKeyByValidator", data);
        return promise.then((data) => exports.QueryDelegateKeysByValidatorAddressResponse.decode(new _m0.Reader(data)));
    }
    GetDelegateKeyByEth(request) {
        const data = exports.QueryDelegateKeysByEthAddress.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "GetDelegateKeyByEth", data);
        return promise.then((data) => exports.QueryDelegateKeysByEthAddressResponse.decode(new _m0.Reader(data)));
    }
    GetDelegateKeyByOrchestrator(request) {
        const data = exports.QueryDelegateKeysByOrchestratorAddress.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "GetDelegateKeyByOrchestrator", data);
        return promise.then((data) => exports.QueryDelegateKeysByOrchestratorAddressResponse.decode(new _m0.Reader(data)));
    }
    GetPendingSendToEth(request) {
        const data = exports.QueryPendingSendToEth.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "GetPendingSendToEth", data);
        return promise.then((data) => exports.QueryPendingSendToEthResponse.decode(new _m0.Reader(data)));
    }
    GetPendingIbcAutoForwards(request) {
        const data = exports.QueryPendingIbcAutoForwards.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "GetPendingIbcAutoForwards", data);
        return promise.then((data) => exports.QueryPendingIbcAutoForwardsResponse.decode(new _m0.Reader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
