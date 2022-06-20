/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Params } from "../denom/params";
import { DenomAuthorityMetadata } from "../denom/authorityMetadata";
export const protobufPackage = "kujira.denom";
const baseQueryParamsRequest = {};
export const QueryParamsRequest = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryParamsRequest);
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
        const message = Object.assign({}, baseQueryParamsRequest);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseQueryParamsRequest);
        return message;
    },
};
const baseQueryParamsResponse = {};
export const QueryParamsResponse = {
    encode(message, writer = Writer.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryParamsResponse);
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
        const message = Object.assign({}, baseQueryParamsResponse);
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromJSON(object.params);
        }
        else {
            message.params = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined &&
            (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryParamsResponse);
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromPartial(object.params);
        }
        else {
            message.params = undefined;
        }
        return message;
    },
};
const baseQueryDenomAuthorityMetadataRequest = { denom: "" };
export const QueryDenomAuthorityMetadataRequest = {
    encode(message, writer = Writer.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryDenomAuthorityMetadataRequest);
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
        const message = Object.assign({}, baseQueryDenomAuthorityMetadataRequest);
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = String(object.denom);
        }
        else {
            message.denom = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.denom !== undefined && (obj.denom = message.denom);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryDenomAuthorityMetadataRequest);
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        else {
            message.denom = "";
        }
        return message;
    },
};
const baseQueryDenomAuthorityMetadataResponse = {};
export const QueryDenomAuthorityMetadataResponse = {
    encode(message, writer = Writer.create()) {
        if (message.authority_metadata !== undefined) {
            DenomAuthorityMetadata.encode(message.authority_metadata, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryDenomAuthorityMetadataResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authority_metadata = DenomAuthorityMetadata.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryDenomAuthorityMetadataResponse);
        if (object.authority_metadata !== undefined &&
            object.authority_metadata !== null) {
            message.authority_metadata = DenomAuthorityMetadata.fromJSON(object.authority_metadata);
        }
        else {
            message.authority_metadata = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.authority_metadata !== undefined &&
            (obj.authority_metadata = message.authority_metadata
                ? DenomAuthorityMetadata.toJSON(message.authority_metadata)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryDenomAuthorityMetadataResponse);
        if (object.authority_metadata !== undefined &&
            object.authority_metadata !== null) {
            message.authority_metadata = DenomAuthorityMetadata.fromPartial(object.authority_metadata);
        }
        else {
            message.authority_metadata = undefined;
        }
        return message;
    },
};
const baseQueryDenomsFromCreatorRequest = { creator: "" };
export const QueryDenomsFromCreatorRequest = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryDenomsFromCreatorRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryDenomsFromCreatorRequest);
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryDenomsFromCreatorRequest);
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        return message;
    },
};
const baseQueryDenomsFromCreatorResponse = { denoms: "" };
export const QueryDenomsFromCreatorResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.denoms) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryDenomsFromCreatorResponse);
        message.denoms = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denoms.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryDenomsFromCreatorResponse);
        message.denoms = [];
        if (object.denoms !== undefined && object.denoms !== null) {
            for (const e of object.denoms) {
                message.denoms.push(String(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.denoms) {
            obj.denoms = message.denoms.map((e) => e);
        }
        else {
            obj.denoms = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryDenomsFromCreatorResponse);
        message.denoms = [];
        if (object.denoms !== undefined && object.denoms !== null) {
            for (const e of object.denoms) {
                message.denoms.push(e);
            }
        }
        return message;
    },
};
export class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    Params(request) {
        const data = QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("kujira.denom.Query", "Params", data);
        return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
    }
    DenomAuthorityMetadata(request) {
        const data = QueryDenomAuthorityMetadataRequest.encode(request).finish();
        const promise = this.rpc.request("kujira.denom.Query", "DenomAuthorityMetadata", data);
        return promise.then((data) => QueryDenomAuthorityMetadataResponse.decode(new Reader(data)));
    }
    DenomsFromCreator(request) {
        const data = QueryDenomsFromCreatorRequest.encode(request).finish();
        const promise = this.rpc.request("kujira.denom.Query", "DenomsFromCreator", data);
        return promise.then((data) => QueryDenomsFromCreatorResponse.decode(new Reader(data)));
    }
}
