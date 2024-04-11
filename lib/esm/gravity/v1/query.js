/* eslint-disable */
import { BinaryReader, BinaryWriter } from "cosmjs-types/binary";
import { Attestation } from "./attestation";
import { OutgoingLogicCall, OutgoingTransferTx, OutgoingTxBatch, } from "./batch";
import { Params } from "./genesis";
import { base64FromBytes, bytesFromBase64, isSet } from "./helpers";
import { MsgConfirmBatch, MsgConfirmLogicCall, MsgValsetConfirm } from "./msgs";
import { BatchFees } from "./pool";
import { PendingIbcAutoForward, Valset } from "./types";
export const protobufPackage = "gravity.v1";
function createBaseQueryParamsRequest() {
    return {};
}
export const QueryParamsRequest = {
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
export const QueryParamsResponse = {
    encode(message, writer = BinaryWriter.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = Params.decode(reader, reader.uint32());
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
            params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined &&
            (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryParamsResponse();
        message.params =
            object.params !== undefined && object.params !== null
                ? Params.fromPartial(object.params)
                : undefined;
        return message;
    },
};
function createBaseQueryCurrentValsetRequest() {
    return {};
}
export const QueryCurrentValsetRequest = {
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
export const QueryCurrentValsetResponse = {
    encode(message, writer = BinaryWriter.create()) {
        if (message.valset !== undefined) {
            Valset.encode(message.valset, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCurrentValsetResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.valset = Valset.decode(reader, reader.uint32());
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
            valset: isSet(object.valset) ? Valset.fromJSON(object.valset) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.valset !== undefined &&
            (obj.valset = message.valset ? Valset.toJSON(message.valset) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryCurrentValsetResponse();
        message.valset =
            object.valset !== undefined && object.valset !== null
                ? Valset.fromPartial(object.valset)
                : undefined;
        return message;
    },
};
function createBaseQueryValsetRequestRequest() {
    return {
        nonce: BigInt(0),
    };
}
export const QueryValsetRequestRequest = {
    encode(message, writer = BinaryWriter.create()) {
        if (message.nonce !== BigInt(0)) {
            writer.uint32(8).uint64(message.nonce);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            nonce: isSet(object.nonce) ? BigInt(object.nonce) : BigInt(0),
        };
    },
    toJSON(message) {
        const obj = {};
        message.nonce !== undefined &&
            (obj.nonce = (message.nonce || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryValsetRequestRequest();
        message.nonce =
            object.nonce !== undefined && object.nonce !== null
                ? BigInt(object.nonce)
                : BigInt(0);
        return message;
    },
};
function createBaseQueryValsetRequestResponse() {
    return {
        valset: undefined,
    };
}
export const QueryValsetRequestResponse = {
    encode(message, writer = BinaryWriter.create()) {
        if (message.valset !== undefined) {
            Valset.encode(message.valset, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryValsetRequestResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.valset = Valset.decode(reader, reader.uint32());
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
            valset: isSet(object.valset) ? Valset.fromJSON(object.valset) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.valset !== undefined &&
            (obj.valset = message.valset ? Valset.toJSON(message.valset) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryValsetRequestResponse();
        message.valset =
            object.valset !== undefined && object.valset !== null
                ? Valset.fromPartial(object.valset)
                : undefined;
        return message;
    },
};
function createBaseQueryValsetConfirmRequest() {
    return {
        nonce: BigInt(0),
        address: "",
    };
}
export const QueryValsetConfirmRequest = {
    encode(message, writer = BinaryWriter.create()) {
        if (message.nonce !== BigInt(0)) {
            writer.uint32(8).uint64(message.nonce);
        }
        if (message.address !== "") {
            writer.uint32(18).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            nonce: isSet(object.nonce) ? BigInt(object.nonce) : BigInt(0),
            address: isSet(object.address) ? String(object.address) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.nonce !== undefined &&
            (obj.nonce = (message.nonce || BigInt(0)).toString());
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryValsetConfirmRequest();
        message.nonce =
            object.nonce !== undefined && object.nonce !== null
                ? BigInt(object.nonce)
                : BigInt(0);
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryValsetConfirmResponse() {
    return {
        confirm: undefined,
    };
}
export const QueryValsetConfirmResponse = {
    encode(message, writer = BinaryWriter.create()) {
        if (message.confirm !== undefined) {
            MsgValsetConfirm.encode(message.confirm, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryValsetConfirmResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.confirm = MsgValsetConfirm.decode(reader, reader.uint32());
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
            confirm: isSet(object.confirm)
                ? MsgValsetConfirm.fromJSON(object.confirm)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.confirm !== undefined &&
            (obj.confirm = message.confirm
                ? MsgValsetConfirm.toJSON(message.confirm)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryValsetConfirmResponse();
        message.confirm =
            object.confirm !== undefined && object.confirm !== null
                ? MsgValsetConfirm.fromPartial(object.confirm)
                : undefined;
        return message;
    },
};
function createBaseQueryValsetConfirmsByNonceRequest() {
    return {
        nonce: BigInt(0),
    };
}
export const QueryValsetConfirmsByNonceRequest = {
    encode(message, writer = BinaryWriter.create()) {
        if (message.nonce !== BigInt(0)) {
            writer.uint32(8).uint64(message.nonce);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            nonce: isSet(object.nonce) ? BigInt(object.nonce) : BigInt(0),
        };
    },
    toJSON(message) {
        const obj = {};
        message.nonce !== undefined &&
            (obj.nonce = (message.nonce || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryValsetConfirmsByNonceRequest();
        message.nonce =
            object.nonce !== undefined && object.nonce !== null
                ? BigInt(object.nonce)
                : BigInt(0);
        return message;
    },
};
function createBaseQueryValsetConfirmsByNonceResponse() {
    return {
        confirms: [],
    };
}
export const QueryValsetConfirmsByNonceResponse = {
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.confirms) {
            MsgValsetConfirm.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryValsetConfirmsByNonceResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.confirms.push(MsgValsetConfirm.decode(reader, reader.uint32()));
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
                ? object.confirms.map((e) => MsgValsetConfirm.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.confirms) {
            obj.confirms = message.confirms.map((e) => e ? MsgValsetConfirm.toJSON(e) : undefined);
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
            ((_a = object.confirms) === null || _a === void 0 ? void 0 : _a.map((e) => MsgValsetConfirm.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryLastValsetRequestsRequest() {
    return {};
}
export const QueryLastValsetRequestsRequest = {
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
export const QueryLastValsetRequestsResponse = {
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.valsets) {
            Valset.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLastValsetRequestsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.valsets.push(Valset.decode(reader, reader.uint32()));
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
                ? object.valsets.map((e) => Valset.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.valsets) {
            obj.valsets = message.valsets.map((e) => e ? Valset.toJSON(e) : undefined);
        }
        else {
            obj.valsets = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryLastValsetRequestsResponse();
        message.valsets = ((_a = object.valsets) === null || _a === void 0 ? void 0 : _a.map((e) => Valset.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryLastPendingValsetRequestByAddrRequest() {
    return {
        address: "",
    };
}
export const QueryLastPendingValsetRequestByAddrRequest = {
    encode(message, writer = BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            address: isSet(object.address) ? String(object.address) : "",
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
export const QueryLastPendingValsetRequestByAddrResponse = {
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.valsets) {
            Valset.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLastPendingValsetRequestByAddrResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.valsets.push(Valset.decode(reader, reader.uint32()));
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
                ? object.valsets.map((e) => Valset.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.valsets) {
            obj.valsets = message.valsets.map((e) => e ? Valset.toJSON(e) : undefined);
        }
        else {
            obj.valsets = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryLastPendingValsetRequestByAddrResponse();
        message.valsets = ((_a = object.valsets) === null || _a === void 0 ? void 0 : _a.map((e) => Valset.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryBatchFeeRequest() {
    return {};
}
export const QueryBatchFeeRequest = {
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
export const QueryBatchFeeResponse = {
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.batchFees) {
            BatchFees.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBatchFeeResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.batchFees.push(BatchFees.decode(reader, reader.uint32()));
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
                ? object.batchFees.map((e) => BatchFees.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.batchFees) {
            obj.batchFees = message.batchFees.map((e) => e ? BatchFees.toJSON(e) : undefined);
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
            ((_a = object.batchFees) === null || _a === void 0 ? void 0 : _a.map((e) => BatchFees.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryLastPendingBatchRequestByAddrRequest() {
    return {
        address: "",
    };
}
export const QueryLastPendingBatchRequestByAddrRequest = {
    encode(message, writer = BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            address: isSet(object.address) ? String(object.address) : "",
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
export const QueryLastPendingBatchRequestByAddrResponse = {
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.batch) {
            OutgoingTxBatch.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLastPendingBatchRequestByAddrResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.batch.push(OutgoingTxBatch.decode(reader, reader.uint32()));
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
                ? object.batch.map((e) => OutgoingTxBatch.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.batch) {
            obj.batch = message.batch.map((e) => e ? OutgoingTxBatch.toJSON(e) : undefined);
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
            ((_a = object.batch) === null || _a === void 0 ? void 0 : _a.map((e) => OutgoingTxBatch.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryLastPendingLogicCallByAddrRequest() {
    return {
        address: "",
    };
}
export const QueryLastPendingLogicCallByAddrRequest = {
    encode(message, writer = BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            address: isSet(object.address) ? String(object.address) : "",
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
export const QueryLastPendingLogicCallByAddrResponse = {
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.call) {
            OutgoingLogicCall.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLastPendingLogicCallByAddrResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.call.push(OutgoingLogicCall.decode(reader, reader.uint32()));
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
                ? object.call.map((e) => OutgoingLogicCall.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.call) {
            obj.call = message.call.map((e) => e ? OutgoingLogicCall.toJSON(e) : undefined);
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
            ((_a = object.call) === null || _a === void 0 ? void 0 : _a.map((e) => OutgoingLogicCall.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryOutgoingTxBatchesRequest() {
    return {};
}
export const QueryOutgoingTxBatchesRequest = {
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
export const QueryOutgoingTxBatchesResponse = {
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.batches) {
            OutgoingTxBatch.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryOutgoingTxBatchesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.batches.push(OutgoingTxBatch.decode(reader, reader.uint32()));
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
                ? object.batches.map((e) => OutgoingTxBatch.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.batches) {
            obj.batches = message.batches.map((e) => e ? OutgoingTxBatch.toJSON(e) : undefined);
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
            ((_a = object.batches) === null || _a === void 0 ? void 0 : _a.map((e) => OutgoingTxBatch.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryOutgoingLogicCallsRequest() {
    return {};
}
export const QueryOutgoingLogicCallsRequest = {
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
export const QueryOutgoingLogicCallsResponse = {
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.calls) {
            OutgoingLogicCall.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryOutgoingLogicCallsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.calls.push(OutgoingLogicCall.decode(reader, reader.uint32()));
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
                ? object.calls.map((e) => OutgoingLogicCall.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.calls) {
            obj.calls = message.calls.map((e) => e ? OutgoingLogicCall.toJSON(e) : undefined);
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
            ((_a = object.calls) === null || _a === void 0 ? void 0 : _a.map((e) => OutgoingLogicCall.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryBatchRequestByNonceRequest() {
    return {
        nonce: BigInt(0),
        contractAddress: "",
    };
}
export const QueryBatchRequestByNonceRequest = {
    encode(message, writer = BinaryWriter.create()) {
        if (message.nonce !== BigInt(0)) {
            writer.uint32(8).uint64(message.nonce);
        }
        if (message.contractAddress !== "") {
            writer.uint32(18).string(message.contractAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            nonce: isSet(object.nonce) ? BigInt(object.nonce) : BigInt(0),
            contractAddress: isSet(object.contractAddress)
                ? String(object.contractAddress)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.nonce !== undefined &&
            (obj.nonce = (message.nonce || BigInt(0)).toString());
        message.contractAddress !== undefined &&
            (obj.contractAddress = message.contractAddress);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryBatchRequestByNonceRequest();
        message.nonce =
            object.nonce !== undefined && object.nonce !== null
                ? BigInt(object.nonce)
                : BigInt(0);
        message.contractAddress = (_a = object.contractAddress) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryBatchRequestByNonceResponse() {
    return {
        batch: undefined,
    };
}
export const QueryBatchRequestByNonceResponse = {
    encode(message, writer = BinaryWriter.create()) {
        if (message.batch !== undefined) {
            OutgoingTxBatch.encode(message.batch, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBatchRequestByNonceResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.batch = OutgoingTxBatch.decode(reader, reader.uint32());
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
            batch: isSet(object.batch)
                ? OutgoingTxBatch.fromJSON(object.batch)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.batch !== undefined &&
            (obj.batch = message.batch
                ? OutgoingTxBatch.toJSON(message.batch)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryBatchRequestByNonceResponse();
        message.batch =
            object.batch !== undefined && object.batch !== null
                ? OutgoingTxBatch.fromPartial(object.batch)
                : undefined;
        return message;
    },
};
function createBaseQueryBatchConfirmsRequest() {
    return {
        nonce: BigInt(0),
        contractAddress: "",
    };
}
export const QueryBatchConfirmsRequest = {
    encode(message, writer = BinaryWriter.create()) {
        if (message.nonce !== BigInt(0)) {
            writer.uint32(8).uint64(message.nonce);
        }
        if (message.contractAddress !== "") {
            writer.uint32(18).string(message.contractAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            nonce: isSet(object.nonce) ? BigInt(object.nonce) : BigInt(0),
            contractAddress: isSet(object.contractAddress)
                ? String(object.contractAddress)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.nonce !== undefined &&
            (obj.nonce = (message.nonce || BigInt(0)).toString());
        message.contractAddress !== undefined &&
            (obj.contractAddress = message.contractAddress);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryBatchConfirmsRequest();
        message.nonce =
            object.nonce !== undefined && object.nonce !== null
                ? BigInt(object.nonce)
                : BigInt(0);
        message.contractAddress = (_a = object.contractAddress) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryBatchConfirmsResponse() {
    return {
        confirms: [],
    };
}
export const QueryBatchConfirmsResponse = {
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.confirms) {
            MsgConfirmBatch.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBatchConfirmsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.confirms.push(MsgConfirmBatch.decode(reader, reader.uint32()));
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
                ? object.confirms.map((e) => MsgConfirmBatch.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.confirms) {
            obj.confirms = message.confirms.map((e) => e ? MsgConfirmBatch.toJSON(e) : undefined);
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
            ((_a = object.confirms) === null || _a === void 0 ? void 0 : _a.map((e) => MsgConfirmBatch.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryLogicConfirmsRequest() {
    return {
        invalidationId: new Uint8Array(),
        invalidationNonce: BigInt(0),
    };
}
export const QueryLogicConfirmsRequest = {
    encode(message, writer = BinaryWriter.create()) {
        if (message.invalidationId.length !== 0) {
            writer.uint32(10).bytes(message.invalidationId);
        }
        if (message.invalidationNonce !== BigInt(0)) {
            writer.uint32(16).uint64(message.invalidationNonce);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            invalidationId: isSet(object.invalidationId)
                ? bytesFromBase64(object.invalidationId)
                : new Uint8Array(),
            invalidationNonce: isSet(object.invalidationNonce)
                ? BigInt(object.invalidationNonce)
                : BigInt(0),
        };
    },
    toJSON(message) {
        const obj = {};
        message.invalidationId !== undefined &&
            (obj.invalidationId = base64FromBytes(message.invalidationId !== undefined
                ? message.invalidationId
                : new Uint8Array()));
        message.invalidationNonce !== undefined &&
            (obj.invalidationNonce = (message.invalidationNonce || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryLogicConfirmsRequest();
        message.invalidationId = (_a = object.invalidationId) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.invalidationNonce =
            object.invalidationNonce !== undefined &&
                object.invalidationNonce !== null
                ? BigInt(object.invalidationNonce)
                : BigInt(0);
        return message;
    },
};
function createBaseQueryLogicConfirmsResponse() {
    return {
        confirms: [],
    };
}
export const QueryLogicConfirmsResponse = {
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.confirms) {
            MsgConfirmLogicCall.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLogicConfirmsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.confirms.push(MsgConfirmLogicCall.decode(reader, reader.uint32()));
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
                ? object.confirms.map((e) => MsgConfirmLogicCall.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.confirms) {
            obj.confirms = message.confirms.map((e) => e ? MsgConfirmLogicCall.toJSON(e) : undefined);
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
            ((_a = object.confirms) === null || _a === void 0 ? void 0 : _a.map((e) => MsgConfirmLogicCall.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryLastEventNonceByAddrRequest() {
    return {
        address: "",
    };
}
export const QueryLastEventNonceByAddrRequest = {
    encode(message, writer = BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            address: isSet(object.address) ? String(object.address) : "",
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
        eventNonce: BigInt(0),
    };
}
export const QueryLastEventNonceByAddrResponse = {
    encode(message, writer = BinaryWriter.create()) {
        if (message.eventNonce !== BigInt(0)) {
            writer.uint32(8).uint64(message.eventNonce);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            eventNonce: isSet(object.eventNonce)
                ? BigInt(object.eventNonce)
                : BigInt(0),
        };
    },
    toJSON(message) {
        const obj = {};
        message.eventNonce !== undefined &&
            (obj.eventNonce = (message.eventNonce || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryLastEventNonceByAddrResponse();
        message.eventNonce =
            object.eventNonce !== undefined && object.eventNonce !== null
                ? BigInt(object.eventNonce)
                : BigInt(0);
        return message;
    },
};
function createBaseQueryERC20ToDenomRequest() {
    return {
        erc20: "",
    };
}
export const QueryERC20ToDenomRequest = {
    encode(message, writer = BinaryWriter.create()) {
        if (message.erc20 !== "") {
            writer.uint32(10).string(message.erc20);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            erc20: isSet(object.erc20) ? String(object.erc20) : "",
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
export const QueryERC20ToDenomResponse = {
    encode(message, writer = BinaryWriter.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (message.cosmosOriginated === true) {
            writer.uint32(16).bool(message.cosmosOriginated);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            denom: isSet(object.denom) ? String(object.denom) : "",
            cosmosOriginated: isSet(object.cosmosOriginated)
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
export const QueryDenomToERC20Request = {
    encode(message, writer = BinaryWriter.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            denom: isSet(object.denom) ? String(object.denom) : "",
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
export const QueryDenomToERC20Response = {
    encode(message, writer = BinaryWriter.create()) {
        if (message.erc20 !== "") {
            writer.uint32(10).string(message.erc20);
        }
        if (message.cosmosOriginated === true) {
            writer.uint32(16).bool(message.cosmosOriginated);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            erc20: isSet(object.erc20) ? String(object.erc20) : "",
            cosmosOriginated: isSet(object.cosmosOriginated)
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
export const QueryLastObservedEthBlockRequest = {
    encode(message, writer = BinaryWriter.create()) {
        if (message.useV1Key === true) {
            writer.uint32(8).bool(message.useV1Key);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            useV1Key: isSet(object.useV1Key) ? Boolean(object.useV1Key) : false,
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
        block: BigInt(0),
    };
}
export const QueryLastObservedEthBlockResponse = {
    encode(message, writer = BinaryWriter.create()) {
        if (message.block !== BigInt(0)) {
            writer.uint32(8).uint64(message.block);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            block: isSet(object.block) ? BigInt(object.block) : BigInt(0),
        };
    },
    toJSON(message) {
        const obj = {};
        message.block !== undefined &&
            (obj.block = (message.block || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryLastObservedEthBlockResponse();
        message.block =
            object.block !== undefined && object.block !== null
                ? BigInt(object.block)
                : BigInt(0);
        return message;
    },
};
function createBaseQueryLastObservedEthNonceRequest() {
    return {
        useV1Key: false,
    };
}
export const QueryLastObservedEthNonceRequest = {
    encode(message, writer = BinaryWriter.create()) {
        if (message.useV1Key === true) {
            writer.uint32(8).bool(message.useV1Key);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            useV1Key: isSet(object.useV1Key) ? Boolean(object.useV1Key) : false,
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
        nonce: BigInt(0),
    };
}
export const QueryLastObservedEthNonceResponse = {
    encode(message, writer = BinaryWriter.create()) {
        if (message.nonce !== BigInt(0)) {
            writer.uint32(8).uint64(message.nonce);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            nonce: isSet(object.nonce) ? BigInt(object.nonce) : BigInt(0),
        };
    },
    toJSON(message) {
        const obj = {};
        message.nonce !== undefined &&
            (obj.nonce = (message.nonce || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryLastObservedEthNonceResponse();
        message.nonce =
            object.nonce !== undefined && object.nonce !== null
                ? BigInt(object.nonce)
                : BigInt(0);
        return message;
    },
};
function createBaseQueryAttestationsRequest() {
    return {
        limit: BigInt(0),
        orderBy: "",
        claimType: "",
        nonce: BigInt(0),
        height: BigInt(0),
        useV1Key: false,
    };
}
export const QueryAttestationsRequest = {
    encode(message, writer = BinaryWriter.create()) {
        if (message.limit !== BigInt(0)) {
            writer.uint32(8).uint64(message.limit);
        }
        if (message.orderBy !== "") {
            writer.uint32(18).string(message.orderBy);
        }
        if (message.claimType !== "") {
            writer.uint32(26).string(message.claimType);
        }
        if (message.nonce !== BigInt(0)) {
            writer.uint32(32).uint64(message.nonce);
        }
        if (message.height !== BigInt(0)) {
            writer.uint32(40).uint64(message.height);
        }
        if (message.useV1Key === true) {
            writer.uint32(48).bool(message.useV1Key);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            limit: isSet(object.limit) ? BigInt(object.limit) : BigInt(0),
            orderBy: isSet(object.orderBy) ? String(object.orderBy) : "",
            claimType: isSet(object.claimType) ? String(object.claimType) : "",
            nonce: isSet(object.nonce) ? BigInt(object.nonce) : BigInt(0),
            height: isSet(object.height) ? BigInt(object.height) : BigInt(0),
            useV1Key: isSet(object.useV1Key) ? Boolean(object.useV1Key) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.limit !== undefined &&
            (obj.limit = (message.limit || BigInt(0)).toString());
        message.orderBy !== undefined && (obj.orderBy = message.orderBy);
        message.claimType !== undefined && (obj.claimType = message.claimType);
        message.nonce !== undefined &&
            (obj.nonce = (message.nonce || BigInt(0)).toString());
        message.height !== undefined &&
            (obj.height = (message.height || BigInt(0)).toString());
        message.useV1Key !== undefined && (obj.useV1Key = message.useV1Key);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseQueryAttestationsRequest();
        message.limit =
            object.limit !== undefined && object.limit !== null
                ? BigInt(object.limit)
                : BigInt(0);
        message.orderBy = (_a = object.orderBy) !== null && _a !== void 0 ? _a : "";
        message.claimType = (_b = object.claimType) !== null && _b !== void 0 ? _b : "";
        message.nonce =
            object.nonce !== undefined && object.nonce !== null
                ? BigInt(object.nonce)
                : BigInt(0);
        message.height =
            object.height !== undefined && object.height !== null
                ? BigInt(object.height)
                : BigInt(0);
        message.useV1Key = (_c = object.useV1Key) !== null && _c !== void 0 ? _c : false;
        return message;
    },
};
function createBaseQueryAttestationsResponse() {
    return {
        attestations: [],
    };
}
export const QueryAttestationsResponse = {
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.attestations) {
            Attestation.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAttestationsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.attestations.push(Attestation.decode(reader, reader.uint32()));
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
                ? object.attestations.map((e) => Attestation.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.attestations) {
            obj.attestations = message.attestations.map((e) => e ? Attestation.toJSON(e) : undefined);
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
            ((_a = object.attestations) === null || _a === void 0 ? void 0 : _a.map((e) => Attestation.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryDelegateKeysByValidatorAddress() {
    return {
        validatorAddress: "",
    };
}
export const QueryDelegateKeysByValidatorAddress = {
    encode(message, writer = BinaryWriter.create()) {
        if (message.validatorAddress !== "") {
            writer.uint32(10).string(message.validatorAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            validatorAddress: isSet(object.validatorAddress)
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
export const QueryDelegateKeysByValidatorAddressResponse = {
    encode(message, writer = BinaryWriter.create()) {
        if (message.ethAddress !== "") {
            writer.uint32(10).string(message.ethAddress);
        }
        if (message.orchestratorAddress !== "") {
            writer.uint32(18).string(message.orchestratorAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            ethAddress: isSet(object.ethAddress) ? String(object.ethAddress) : "",
            orchestratorAddress: isSet(object.orchestratorAddress)
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
export const QueryDelegateKeysByEthAddress = {
    encode(message, writer = BinaryWriter.create()) {
        if (message.ethAddress !== "") {
            writer.uint32(10).string(message.ethAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            ethAddress: isSet(object.ethAddress) ? String(object.ethAddress) : "",
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
export const QueryDelegateKeysByEthAddressResponse = {
    encode(message, writer = BinaryWriter.create()) {
        if (message.validatorAddress !== "") {
            writer.uint32(10).string(message.validatorAddress);
        }
        if (message.orchestratorAddress !== "") {
            writer.uint32(18).string(message.orchestratorAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            validatorAddress: isSet(object.validatorAddress)
                ? String(object.validatorAddress)
                : "",
            orchestratorAddress: isSet(object.orchestratorAddress)
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
export const QueryDelegateKeysByOrchestratorAddress = {
    encode(message, writer = BinaryWriter.create()) {
        if (message.orchestratorAddress !== "") {
            writer.uint32(10).string(message.orchestratorAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            orchestratorAddress: isSet(object.orchestratorAddress)
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
export const QueryDelegateKeysByOrchestratorAddressResponse = {
    encode(message, writer = BinaryWriter.create()) {
        if (message.validatorAddress !== "") {
            writer.uint32(10).string(message.validatorAddress);
        }
        if (message.ethAddress !== "") {
            writer.uint32(18).string(message.ethAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            validatorAddress: isSet(object.validatorAddress)
                ? String(object.validatorAddress)
                : "",
            ethAddress: isSet(object.ethAddress) ? String(object.ethAddress) : "",
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
export const QueryPendingSendToEth = {
    encode(message, writer = BinaryWriter.create()) {
        if (message.senderAddress !== "") {
            writer.uint32(10).string(message.senderAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            senderAddress: isSet(object.senderAddress)
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
export const QueryPendingSendToEthResponse = {
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.transfersInBatches) {
            OutgoingTransferTx.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.unbatchedTransfers) {
            OutgoingTransferTx.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPendingSendToEthResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.transfersInBatches.push(OutgoingTransferTx.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.unbatchedTransfers.push(OutgoingTransferTx.decode(reader, reader.uint32()));
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
                ? object.transfersInBatches.map((e) => OutgoingTransferTx.fromJSON(e))
                : [],
            unbatchedTransfers: Array.isArray(object === null || object === void 0 ? void 0 : object.unbatchedTransfers)
                ? object.unbatchedTransfers.map((e) => OutgoingTransferTx.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.transfersInBatches) {
            obj.transfersInBatches = message.transfersInBatches.map((e) => e ? OutgoingTransferTx.toJSON(e) : undefined);
        }
        else {
            obj.transfersInBatches = [];
        }
        if (message.unbatchedTransfers) {
            obj.unbatchedTransfers = message.unbatchedTransfers.map((e) => e ? OutgoingTransferTx.toJSON(e) : undefined);
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
            ((_a = object.transfersInBatches) === null || _a === void 0 ? void 0 : _a.map((e) => OutgoingTransferTx.fromPartial(e))) || [];
        message.unbatchedTransfers =
            ((_b = object.unbatchedTransfers) === null || _b === void 0 ? void 0 : _b.map((e) => OutgoingTransferTx.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryPendingIbcAutoForwards() {
    return {
        limit: BigInt(0),
    };
}
export const QueryPendingIbcAutoForwards = {
    encode(message, writer = BinaryWriter.create()) {
        if (message.limit !== BigInt(0)) {
            writer.uint32(8).uint64(message.limit);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            limit: isSet(object.limit) ? BigInt(object.limit) : BigInt(0),
        };
    },
    toJSON(message) {
        const obj = {};
        message.limit !== undefined &&
            (obj.limit = (message.limit || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryPendingIbcAutoForwards();
        message.limit =
            object.limit !== undefined && object.limit !== null
                ? BigInt(object.limit)
                : BigInt(0);
        return message;
    },
};
function createBaseQueryPendingIbcAutoForwardsResponse() {
    return {
        pendingIbcAutoForwards: [],
    };
}
export const QueryPendingIbcAutoForwardsResponse = {
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.pendingIbcAutoForwards) {
            PendingIbcAutoForward.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPendingIbcAutoForwardsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pendingIbcAutoForwards.push(PendingIbcAutoForward.decode(reader, reader.uint32()));
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
                ? object.pendingIbcAutoForwards.map((e) => PendingIbcAutoForward.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.pendingIbcAutoForwards) {
            obj.pendingIbcAutoForwards = message.pendingIbcAutoForwards.map((e) => e ? PendingIbcAutoForward.toJSON(e) : undefined);
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
            ((_a = object.pendingIbcAutoForwards) === null || _a === void 0 ? void 0 : _a.map((e) => PendingIbcAutoForward.fromPartial(e))) || [];
        return message;
    },
};
export class QueryClientImpl {
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
        const data = QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "Params", data);
        return promise.then((data) => QueryParamsResponse.decode(new BinaryReader(data)));
    }
    CurrentValset(request = {}) {
        const data = QueryCurrentValsetRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "CurrentValset", data);
        return promise.then((data) => QueryCurrentValsetResponse.decode(new BinaryReader(data)));
    }
    ValsetRequest(request) {
        const data = QueryValsetRequestRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "ValsetRequest", data);
        return promise.then((data) => QueryValsetRequestResponse.decode(new BinaryReader(data)));
    }
    ValsetConfirm(request) {
        const data = QueryValsetConfirmRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "ValsetConfirm", data);
        return promise.then((data) => QueryValsetConfirmResponse.decode(new BinaryReader(data)));
    }
    ValsetConfirmsByNonce(request) {
        const data = QueryValsetConfirmsByNonceRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "ValsetConfirmsByNonce", data);
        return promise.then((data) => QueryValsetConfirmsByNonceResponse.decode(new BinaryReader(data)));
    }
    LastValsetRequests(request = {}) {
        const data = QueryLastValsetRequestsRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "LastValsetRequests", data);
        return promise.then((data) => QueryLastValsetRequestsResponse.decode(new BinaryReader(data)));
    }
    LastPendingValsetRequestByAddr(request) {
        const data = QueryLastPendingValsetRequestByAddrRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "LastPendingValsetRequestByAddr", data);
        return promise.then((data) => QueryLastPendingValsetRequestByAddrResponse.decode(new BinaryReader(data)));
    }
    LastPendingBatchRequestByAddr(request) {
        const data = QueryLastPendingBatchRequestByAddrRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "LastPendingBatchRequestByAddr", data);
        return promise.then((data) => QueryLastPendingBatchRequestByAddrResponse.decode(new BinaryReader(data)));
    }
    LastPendingLogicCallByAddr(request) {
        const data = QueryLastPendingLogicCallByAddrRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "LastPendingLogicCallByAddr", data);
        return promise.then((data) => QueryLastPendingLogicCallByAddrResponse.decode(new BinaryReader(data)));
    }
    LastEventNonceByAddr(request) {
        const data = QueryLastEventNonceByAddrRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "LastEventNonceByAddr", data);
        return promise.then((data) => QueryLastEventNonceByAddrResponse.decode(new BinaryReader(data)));
    }
    BatchFees(request = {}) {
        const data = QueryBatchFeeRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "BatchFees", data);
        return promise.then((data) => QueryBatchFeeResponse.decode(new BinaryReader(data)));
    }
    OutgoingTxBatches(request = {}) {
        const data = QueryOutgoingTxBatchesRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "OutgoingTxBatches", data);
        return promise.then((data) => QueryOutgoingTxBatchesResponse.decode(new BinaryReader(data)));
    }
    OutgoingLogicCalls(request = {}) {
        const data = QueryOutgoingLogicCallsRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "OutgoingLogicCalls", data);
        return promise.then((data) => QueryOutgoingLogicCallsResponse.decode(new BinaryReader(data)));
    }
    BatchRequestByNonce(request) {
        const data = QueryBatchRequestByNonceRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "BatchRequestByNonce", data);
        return promise.then((data) => QueryBatchRequestByNonceResponse.decode(new BinaryReader(data)));
    }
    BatchConfirms(request) {
        const data = QueryBatchConfirmsRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "BatchConfirms", data);
        return promise.then((data) => QueryBatchConfirmsResponse.decode(new BinaryReader(data)));
    }
    LogicConfirms(request) {
        const data = QueryLogicConfirmsRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "LogicConfirms", data);
        return promise.then((data) => QueryLogicConfirmsResponse.decode(new BinaryReader(data)));
    }
    ERC20ToDenom(request) {
        const data = QueryERC20ToDenomRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "ERC20ToDenom", data);
        return promise.then((data) => QueryERC20ToDenomResponse.decode(new BinaryReader(data)));
    }
    DenomToERC20(request) {
        const data = QueryDenomToERC20Request.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "DenomToERC20", data);
        return promise.then((data) => QueryDenomToERC20Response.decode(new BinaryReader(data)));
    }
    GetLastObservedEthBlock(request) {
        const data = QueryLastObservedEthBlockRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "GetLastObservedEthBlock", data);
        return promise.then((data) => QueryLastObservedEthBlockResponse.decode(new BinaryReader(data)));
    }
    GetLastObservedEthNonce(request) {
        const data = QueryLastObservedEthNonceRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "GetLastObservedEthNonce", data);
        return promise.then((data) => QueryLastObservedEthNonceResponse.decode(new BinaryReader(data)));
    }
    GetAttestations(request) {
        const data = QueryAttestationsRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "GetAttestations", data);
        return promise.then((data) => QueryAttestationsResponse.decode(new BinaryReader(data)));
    }
    GetDelegateKeyByValidator(request) {
        const data = QueryDelegateKeysByValidatorAddress.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "GetDelegateKeyByValidator", data);
        return promise.then((data) => QueryDelegateKeysByValidatorAddressResponse.decode(new BinaryReader(data)));
    }
    GetDelegateKeyByEth(request) {
        const data = QueryDelegateKeysByEthAddress.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "GetDelegateKeyByEth", data);
        return promise.then((data) => QueryDelegateKeysByEthAddressResponse.decode(new BinaryReader(data)));
    }
    GetDelegateKeyByOrchestrator(request) {
        const data = QueryDelegateKeysByOrchestratorAddress.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "GetDelegateKeyByOrchestrator", data);
        return promise.then((data) => QueryDelegateKeysByOrchestratorAddressResponse.decode(new BinaryReader(data)));
    }
    GetPendingSendToEth(request) {
        const data = QueryPendingSendToEth.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "GetPendingSendToEth", data);
        return promise.then((data) => QueryPendingSendToEthResponse.decode(new BinaryReader(data)));
    }
    GetPendingIbcAutoForwards(request) {
        const data = QueryPendingIbcAutoForwards.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "GetPendingIbcAutoForwards", data);
        return promise.then((data) => QueryPendingIbcAutoForwardsResponse.decode(new BinaryReader(data)));
    }
}
