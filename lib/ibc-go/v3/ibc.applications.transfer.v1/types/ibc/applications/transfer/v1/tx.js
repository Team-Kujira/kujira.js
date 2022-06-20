/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import Long from "long";
import { Coin } from "../../../../cosmos/base/v1beta1/coin";
import { Height } from "../../../../ibc/core/client/v1/client";
export const protobufPackage = "ibc.applications.transfer.v1";
const baseMsgTransfer = {
    source_port: "",
    source_channel: "",
    sender: "",
    receiver: "",
    timeout_timestamp: 0,
};
export const MsgTransfer = {
    encode(message, writer = Writer.create()) {
        if (message.source_port !== "") {
            writer.uint32(10).string(message.source_port);
        }
        if (message.source_channel !== "") {
            writer.uint32(18).string(message.source_channel);
        }
        if (message.token !== undefined) {
            Coin.encode(message.token, writer.uint32(26).fork()).ldelim();
        }
        if (message.sender !== "") {
            writer.uint32(34).string(message.sender);
        }
        if (message.receiver !== "") {
            writer.uint32(42).string(message.receiver);
        }
        if (message.timeout_height !== undefined) {
            Height.encode(message.timeout_height, writer.uint32(50).fork()).ldelim();
        }
        if (message.timeout_timestamp !== 0) {
            writer.uint32(56).uint64(message.timeout_timestamp);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgTransfer);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.source_port = reader.string();
                    break;
                case 2:
                    message.source_channel = reader.string();
                    break;
                case 3:
                    message.token = Coin.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.sender = reader.string();
                    break;
                case 5:
                    message.receiver = reader.string();
                    break;
                case 6:
                    message.timeout_height = Height.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.timeout_timestamp = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMsgTransfer);
        if (object.source_port !== undefined && object.source_port !== null) {
            message.source_port = String(object.source_port);
        }
        else {
            message.source_port = "";
        }
        if (object.source_channel !== undefined && object.source_channel !== null) {
            message.source_channel = String(object.source_channel);
        }
        else {
            message.source_channel = "";
        }
        if (object.token !== undefined && object.token !== null) {
            message.token = Coin.fromJSON(object.token);
        }
        else {
            message.token = undefined;
        }
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = String(object.sender);
        }
        else {
            message.sender = "";
        }
        if (object.receiver !== undefined && object.receiver !== null) {
            message.receiver = String(object.receiver);
        }
        else {
            message.receiver = "";
        }
        if (object.timeout_height !== undefined && object.timeout_height !== null) {
            message.timeout_height = Height.fromJSON(object.timeout_height);
        }
        else {
            message.timeout_height = undefined;
        }
        if (object.timeout_timestamp !== undefined &&
            object.timeout_timestamp !== null) {
            message.timeout_timestamp = Number(object.timeout_timestamp);
        }
        else {
            message.timeout_timestamp = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.source_port !== undefined &&
            (obj.source_port = message.source_port);
        message.source_channel !== undefined &&
            (obj.source_channel = message.source_channel);
        message.token !== undefined &&
            (obj.token = message.token ? Coin.toJSON(message.token) : undefined);
        message.sender !== undefined && (obj.sender = message.sender);
        message.receiver !== undefined && (obj.receiver = message.receiver);
        message.timeout_height !== undefined &&
            (obj.timeout_height = message.timeout_height
                ? Height.toJSON(message.timeout_height)
                : undefined);
        message.timeout_timestamp !== undefined &&
            (obj.timeout_timestamp = message.timeout_timestamp);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMsgTransfer);
        if (object.source_port !== undefined && object.source_port !== null) {
            message.source_port = object.source_port;
        }
        else {
            message.source_port = "";
        }
        if (object.source_channel !== undefined && object.source_channel !== null) {
            message.source_channel = object.source_channel;
        }
        else {
            message.source_channel = "";
        }
        if (object.token !== undefined && object.token !== null) {
            message.token = Coin.fromPartial(object.token);
        }
        else {
            message.token = undefined;
        }
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        else {
            message.sender = "";
        }
        if (object.receiver !== undefined && object.receiver !== null) {
            message.receiver = object.receiver;
        }
        else {
            message.receiver = "";
        }
        if (object.timeout_height !== undefined && object.timeout_height !== null) {
            message.timeout_height = Height.fromPartial(object.timeout_height);
        }
        else {
            message.timeout_height = undefined;
        }
        if (object.timeout_timestamp !== undefined &&
            object.timeout_timestamp !== null) {
            message.timeout_timestamp = object.timeout_timestamp;
        }
        else {
            message.timeout_timestamp = 0;
        }
        return message;
    },
};
const baseMsgTransferResponse = {};
export const MsgTransferResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgTransferResponse);
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
        const message = Object.assign({}, baseMsgTransferResponse);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseMsgTransferResponse);
        return message;
    },
};
export class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    Transfer(request) {
        const data = MsgTransfer.encode(request).finish();
        const promise = this.rpc.request("ibc.applications.transfer.v1.Msg", "Transfer", data);
        return promise.then((data) => MsgTransferResponse.decode(new Reader(data)));
    }
}
var globalThis = (() => {
    if (typeof globalThis !== "undefined")
        return globalThis;
    if (typeof self !== "undefined")
        return self;
    if (typeof window !== "undefined")
        return window;
    if (typeof global !== "undefined")
        return global;
    throw "Unable to locate global object";
})();
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
    }
    return long.toNumber();
}
if (util.Long !== Long) {
    util.Long = Long;
    configure();
}
