/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { longToNumber } from "../../../../types";
import { Params } from "./feemarket";
export const protobufPackage = "ethermint.feemarket.v1";
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
const baseQueryBaseFeeRequest = {};
export const QueryBaseFeeRequest = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryBaseFeeRequest);
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
        const message = Object.assign({}, baseQueryBaseFeeRequest);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseQueryBaseFeeRequest);
        return message;
    },
};
const baseQueryBaseFeeResponse = { base_fee: "" };
export const QueryBaseFeeResponse = {
    encode(message, writer = Writer.create()) {
        if (message.base_fee !== "") {
            writer.uint32(10).string(message.base_fee);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryBaseFeeResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.base_fee = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryBaseFeeResponse);
        if (object.base_fee !== undefined && object.base_fee !== null) {
            message.base_fee = String(object.base_fee);
        }
        else {
            message.base_fee = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.base_fee !== undefined && (obj.base_fee = message.base_fee);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryBaseFeeResponse);
        if (object.base_fee !== undefined && object.base_fee !== null) {
            message.base_fee = object.base_fee;
        }
        else {
            message.base_fee = "";
        }
        return message;
    },
};
const baseQueryBlockGasRequest = {};
export const QueryBlockGasRequest = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryBlockGasRequest);
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
        const message = Object.assign({}, baseQueryBlockGasRequest);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseQueryBlockGasRequest);
        return message;
    },
};
const baseQueryBlockGasResponse = { gas: 0 };
export const QueryBlockGasResponse = {
    encode(message, writer = Writer.create()) {
        if (message.gas !== 0) {
            writer.uint32(8).int64(message.gas);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryBlockGasResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.gas = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryBlockGasResponse);
        if (object.gas !== undefined && object.gas !== null) {
            message.gas = Number(object.gas);
        }
        else {
            message.gas = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.gas !== undefined && (obj.gas = message.gas);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryBlockGasResponse);
        if (object.gas !== undefined && object.gas !== null) {
            message.gas = object.gas;
        }
        else {
            message.gas = 0;
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
        const promise = this.rpc.request("ethermint.feemarket.v1.Query", "Params", data);
        return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
    }
    BaseFee(request) {
        const data = QueryBaseFeeRequest.encode(request).finish();
        const promise = this.rpc.request("ethermint.feemarket.v1.Query", "BaseFee", data);
        return promise.then((data) => QueryBaseFeeResponse.decode(new Reader(data)));
    }
    BlockGas(request) {
        const data = QueryBlockGasRequest.encode(request).finish();
        const promise = this.rpc.request("ethermint.feemarket.v1.Query", "BlockGas", data);
        return promise.then((data) => QueryBlockGasResponse.decode(new Reader(data)));
    }
}
