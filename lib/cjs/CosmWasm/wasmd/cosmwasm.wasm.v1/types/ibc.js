"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgIBCCloseChannel = exports.MsgIBCSend = exports.protobufPackage = void 0;
const minimal_1 = require("protobufjs/minimal");
const types_1 = require("../../../../types");
exports.protobufPackage = "cosmwasm.wasm.v1";
const baseMsgIBCSend = {
    channel: "",
    timeout_height: 0,
    timeout_timestamp: 0,
};
exports.MsgIBCSend = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.channel !== "") {
            writer.uint32(18).string(message.channel);
        }
        if (message.timeout_height !== 0) {
            writer.uint32(32).uint64(message.timeout_height);
        }
        if (message.timeout_timestamp !== 0) {
            writer.uint32(40).uint64(message.timeout_timestamp);
        }
        if (message.data.length !== 0) {
            writer.uint32(50).bytes(message.data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgIBCSend);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.channel = reader.string();
                    break;
                case 4:
                    message.timeout_height = (0, types_1.longToNumber)(reader.uint64());
                    break;
                case 5:
                    message.timeout_timestamp = (0, types_1.longToNumber)(reader.uint64());
                    break;
                case 6:
                    message.data = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMsgIBCSend);
        if (object.channel !== undefined && object.channel !== null) {
            message.channel = String(object.channel);
        }
        else {
            message.channel = "";
        }
        if (object.timeout_height !== undefined && object.timeout_height !== null) {
            message.timeout_height = Number(object.timeout_height);
        }
        else {
            message.timeout_height = 0;
        }
        if (object.timeout_timestamp !== undefined &&
            object.timeout_timestamp !== null) {
            message.timeout_timestamp = Number(object.timeout_timestamp);
        }
        else {
            message.timeout_timestamp = 0;
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = (0, types_1.bytesFromBase64)(object.data);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.channel !== undefined && (obj.channel = message.channel);
        message.timeout_height !== undefined &&
            (obj.timeout_height = message.timeout_height);
        message.timeout_timestamp !== undefined &&
            (obj.timeout_timestamp = message.timeout_timestamp);
        message.data !== undefined &&
            (obj.data = (0, types_1.base64FromBytes)(message.data !== undefined ? message.data : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMsgIBCSend);
        if (object.channel !== undefined && object.channel !== null) {
            message.channel = object.channel;
        }
        else {
            message.channel = "";
        }
        if (object.timeout_height !== undefined && object.timeout_height !== null) {
            message.timeout_height = object.timeout_height;
        }
        else {
            message.timeout_height = 0;
        }
        if (object.timeout_timestamp !== undefined &&
            object.timeout_timestamp !== null) {
            message.timeout_timestamp = object.timeout_timestamp;
        }
        else {
            message.timeout_timestamp = 0;
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = object.data;
        }
        else {
            message.data = new Uint8Array();
        }
        return message;
    },
};
const baseMsgIBCCloseChannel = { channel: "" };
exports.MsgIBCCloseChannel = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.channel !== "") {
            writer.uint32(18).string(message.channel);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgIBCCloseChannel);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.channel = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMsgIBCCloseChannel);
        if (object.channel !== undefined && object.channel !== null) {
            message.channel = String(object.channel);
        }
        else {
            message.channel = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.channel !== undefined && (obj.channel = message.channel);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMsgIBCCloseChannel);
        if (object.channel !== undefined && object.channel !== null) {
            message.channel = object.channel;
        }
        else {
            message.channel = "";
        }
        return message;
    },
};
