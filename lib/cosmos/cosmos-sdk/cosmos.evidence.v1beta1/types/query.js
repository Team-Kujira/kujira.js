/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { base64FromBytes, bytesFromBase64, } from "../../../../types";
import { PageRequest, PageResponse, } from "../../../../types/cosmos/base/query/pagination";
import { Any } from "../../../../types/google/protobuf/any";
export const protobufPackage = "cosmos.evidence.v1beta1";
const baseQueryEvidenceRequest = {};
export const QueryEvidenceRequest = {
    encode(message, writer = Writer.create()) {
        if (message.evidence_hash.length !== 0) {
            writer.uint32(10).bytes(message.evidence_hash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
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
            message.evidence_hash = bytesFromBase64(object.evidence_hash);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.evidence_hash !== undefined &&
            (obj.evidence_hash = base64FromBytes(message.evidence_hash !== undefined
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
export const QueryEvidenceResponse = {
    encode(message, writer = Writer.create()) {
        if (message.evidence !== undefined) {
            Any.encode(message.evidence, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryEvidenceResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.evidence = Any.decode(reader, reader.uint32());
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
            message.evidence = Any.fromJSON(object.evidence);
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
                ? Any.toJSON(message.evidence)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryEvidenceResponse);
        if (object.evidence !== undefined && object.evidence !== null) {
            message.evidence = Any.fromPartial(object.evidence);
        }
        else {
            message.evidence = undefined;
        }
        return message;
    },
};
const baseQueryAllEvidenceRequest = {};
export const QueryAllEvidenceRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryAllEvidenceRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
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
            message.pagination = PageRequest.fromJSON(object.pagination);
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
                ? PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryAllEvidenceRequest);
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryAllEvidenceResponse = {};
export const QueryAllEvidenceResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.evidence) {
            Any.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryAllEvidenceResponse);
        message.evidence = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.evidence.push(Any.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
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
                message.evidence.push(Any.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.evidence) {
            obj.evidence = message.evidence.map((e) => e ? Any.toJSON(e) : undefined);
        }
        else {
            obj.evidence = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryAllEvidenceResponse);
        message.evidence = [];
        if (object.evidence !== undefined && object.evidence !== null) {
            for (const e of object.evidence) {
                message.evidence.push(Any.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
export class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    Evidence(request) {
        const data = QueryEvidenceRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.evidence.v1beta1.Query", "Evidence", data);
        return promise.then((data) => QueryEvidenceResponse.decode(new Reader(data)));
    }
    AllEvidence(request) {
        const data = QueryAllEvidenceRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.evidence.v1beta1.Query", "AllEvidence", data);
        return promise.then((data) => QueryAllEvidenceResponse.decode(new Reader(data)));
    }
}
