"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryClientImpl = exports.QueryAllEvidenceResponse = exports.QueryAllEvidenceRequest = exports.QueryEvidenceResponse = exports.QueryEvidenceRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const minimal_1 = require("protobufjs/minimal");
const types_1 = require("../../../../types");
const pagination_1 = require("../../../../types/cosmos/base/query/pagination");
const any_1 = require("../../../../types/google/protobuf/any");
exports.protobufPackage = "cosmos.evidence.v1beta1";
const baseQueryEvidenceRequest = {};
exports.QueryEvidenceRequest = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.evidence_hash.length !== 0) {
            writer.uint32(10).bytes(message.evidence_hash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryEvidenceRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.evidence_hash = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryEvidenceRequest);
        if (object.evidence_hash !== undefined && object.evidence_hash !== null) {
            message.evidence_hash = (0, types_1.bytesFromBase64)(object.evidence_hash);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.evidence_hash !== undefined &&
            (obj.evidence_hash = (0, types_1.base64FromBytes)(message.evidence_hash !== undefined
                ? message.evidence_hash
                : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryEvidenceRequest);
        if (object.evidence_hash !== undefined && object.evidence_hash !== null) {
            message.evidence_hash = object.evidence_hash;
        }
        else {
            message.evidence_hash = new Uint8Array();
        }
        return message;
    },
};
const baseQueryEvidenceResponse = {};
exports.QueryEvidenceResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.evidence !== undefined) {
            any_1.Any.encode(message.evidence, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryEvidenceResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.evidence = any_1.Any.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryEvidenceResponse);
        if (object.evidence !== undefined && object.evidence !== null) {
            message.evidence = any_1.Any.fromJSON(object.evidence);
        }
        else {
            message.evidence = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.evidence !== undefined &&
            (obj.evidence = message.evidence
                ? any_1.Any.toJSON(message.evidence)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryEvidenceResponse);
        if (object.evidence !== undefined && object.evidence !== null) {
            message.evidence = any_1.Any.fromPartial(object.evidence);
        }
        else {
            message.evidence = undefined;
        }
        return message;
    },
};
const baseQueryAllEvidenceRequest = {};
exports.QueryAllEvidenceRequest = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryAllEvidenceRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryAllEvidenceRequest);
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryAllEvidenceRequest);
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryAllEvidenceResponse = {};
exports.QueryAllEvidenceResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        for (const v of message.evidence) {
            any_1.Any.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryAllEvidenceResponse);
        message.evidence = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.evidence.push(any_1.Any.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryAllEvidenceResponse);
        message.evidence = [];
        if (object.evidence !== undefined && object.evidence !== null) {
            for (const e of object.evidence) {
                message.evidence.push(any_1.Any.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.evidence) {
            obj.evidence = message.evidence.map((e) => e ? any_1.Any.toJSON(e) : undefined);
        }
        else {
            obj.evidence = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryAllEvidenceResponse);
        message.evidence = [];
        if (object.evidence !== undefined && object.evidence !== null) {
            for (const e of object.evidence) {
                message.evidence.push(any_1.Any.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    Evidence(request) {
        const data = exports.QueryEvidenceRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.evidence.v1beta1.Query", "Evidence", data);
        return promise.then((data) => exports.QueryEvidenceResponse.decode(new minimal_1.Reader(data)));
    }
    AllEvidence(request) {
        const data = exports.QueryAllEvidenceRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.evidence.v1beta1.Query", "AllEvidence", data);
        return promise.then((data) => exports.QueryAllEvidenceResponse.decode(new minimal_1.Reader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
