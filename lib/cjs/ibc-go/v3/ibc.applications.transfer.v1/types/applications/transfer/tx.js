"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = exports.MsgTransferResponse = exports.MsgTransfer = exports.protobufPackage = void 0;
/* eslint-disable */
const minimal_1 = require("protobufjs/minimal");
const coin_1 = require("../../../../../../types/cosmos/base/coin");
const client_1 = require("../../core/client/client");
const types_1 = require("../../../../../../types");
exports.protobufPackage = "ibc.applications.transfer.v1";
const baseMsgTransfer = {
    source_port: "",
    source_channel: "",
    sender: "",
    receiver: "",
    timeout_timestamp: 0,
};
exports.MsgTransfer = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.source_port !== "") {
            writer.uint32(10).string(message.source_port);
        }
        if (message.source_channel !== "") {
            writer.uint32(18).string(message.source_channel);
        }
        if (message.token !== undefined) {
            coin_1.Coin.encode(message.token, writer.uint32(26).fork()).ldelim();
        }
        if (message.sender !== "") {
            writer.uint32(34).string(message.sender);
        }
        if (message.receiver !== "") {
            writer.uint32(42).string(message.receiver);
        }
        if (message.timeout_height !== undefined) {
            client_1.Height.encode(message.timeout_height, writer.uint32(50).fork()).ldelim();
        }
        if (message.timeout_timestamp !== 0) {
            writer.uint32(56).uint64(message.timeout_timestamp);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
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
                    message.token = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.sender = reader.string();
                    break;
                case 5:
                    message.receiver = reader.string();
                    break;
                case 6:
                    message.timeout_height = client_1.Height.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.timeout_timestamp = (0, types_1.longToNumber)(reader.uint64());
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
            message.token = coin_1.Coin.fromJSON(object.token);
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
            message.timeout_height = client_1.Height.fromJSON(object.timeout_height);
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
            (obj.token = message.token ? coin_1.Coin.toJSON(message.token) : undefined);
        message.sender !== undefined && (obj.sender = message.sender);
        message.receiver !== undefined && (obj.receiver = message.receiver);
        message.timeout_height !== undefined &&
            (obj.timeout_height = message.timeout_height
                ? client_1.Height.toJSON(message.timeout_height)
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
            message.token = coin_1.Coin.fromPartial(object.token);
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
            message.timeout_height = client_1.Height.fromPartial(object.timeout_height);
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
exports.MsgTransferResponse = {
    encode(_, writer = minimal_1.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
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
class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    Transfer(request) {
        const data = exports.MsgTransfer.encode(request).finish();
        const promise = this.rpc.request("ibc.applications.transfer.v1.Msg", "Transfer", data);
        return promise.then((data) => exports.MsgTransferResponse.decode(new minimal_1.Reader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
