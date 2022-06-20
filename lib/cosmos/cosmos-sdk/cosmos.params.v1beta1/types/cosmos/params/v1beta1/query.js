/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { ParamChange } from "../../../cosmos/params/v1beta1/params";
export const protobufPackage = "cosmos.params.v1beta1";
const baseQueryParamsRequest = { subspace: "", key: "" };
export const QueryParamsRequest = {
    encode(message, writer = Writer.create()) {
        if (message.subspace !== "") {
            writer.uint32(10).string(message.subspace);
        }
        if (message.key !== "") {
            writer.uint32(18).string(message.key);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryParamsRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subspace = reader.string();
                    break;
                case 2:
                    message.key = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryParamsRequest);
        if (object.subspace !== undefined && object.subspace !== null) {
            message.subspace = String(object.subspace);
        }
        else {
            message.subspace = "";
        }
        if (object.key !== undefined && object.key !== null) {
            message.key = String(object.key);
        }
        else {
            message.key = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.subspace !== undefined && (obj.subspace = message.subspace);
        message.key !== undefined && (obj.key = message.key);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryParamsRequest);
        if (object.subspace !== undefined && object.subspace !== null) {
            message.subspace = object.subspace;
        }
        else {
            message.subspace = "";
        }
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        }
        else {
            message.key = "";
        }
        return message;
    },
};
const baseQueryParamsResponse = {};
export const QueryParamsResponse = {
    encode(message, writer = Writer.create()) {
        if (message.param !== undefined) {
            ParamChange.encode(message.param, writer.uint32(10).fork()).ldelim();
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
                    message.param = ParamChange.decode(reader, reader.uint32());
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
        if (object.param !== undefined && object.param !== null) {
            message.param = ParamChange.fromJSON(object.param);
        }
        else {
            message.param = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.param !== undefined &&
            (obj.param = message.param
                ? ParamChange.toJSON(message.param)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryParamsResponse);
        if (object.param !== undefined && object.param !== null) {
            message.param = ParamChange.fromPartial(object.param);
        }
        else {
            message.param = undefined;
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
        const promise = this.rpc.request("cosmos.params.v1beta1.Query", "Params", data);
        return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
    }
}
