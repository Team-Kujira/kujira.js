"use strict";
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Equivocation = exports.protobufPackage = void 0;
const minimal_1 = require("protobufjs/minimal");
const types_1 = require("../../../../types");
const timestamp_1 = require("../../../../types/google/protobuf/timestamp");
exports.protobufPackage = "cosmos.evidence.v1beta1";
const baseEquivocation = { height: 0, power: 0, consensus_address: "" };
exports.Equivocation = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.height !== 0) {
            writer.uint32(8).int64(message.height);
        }
        if (message.time !== undefined) {
            timestamp_1.Timestamp.encode((0, types_1.toTimestamp)(message.time), writer.uint32(18).fork()).ldelim();
        }
        if (message.power !== 0) {
            writer.uint32(24).int64(message.power);
        }
        if (message.consensus_address !== "") {
            writer.uint32(34).string(message.consensus_address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseEquivocation);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = (0, types_1.longToNumber)(reader.int64());
                    break;
                case 2:
                    message.time = (0, types_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.power = (0, types_1.longToNumber)(reader.int64());
                    break;
                case 4:
                    message.consensus_address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseEquivocation);
        if (object.height !== undefined && object.height !== null) {
            message.height = Number(object.height);
        }
        else {
            message.height = 0;
        }
        if (object.time !== undefined && object.time !== null) {
            message.time = (0, types_1.fromJsonTimestamp)(object.time);
        }
        else {
            message.time = undefined;
        }
        if (object.power !== undefined && object.power !== null) {
            message.power = Number(object.power);
        }
        else {
            message.power = 0;
        }
        if (object.consensus_address !== undefined &&
            object.consensus_address !== null) {
            message.consensus_address = String(object.consensus_address);
        }
        else {
            message.consensus_address = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined && (obj.height = message.height);
        message.time !== undefined &&
            (obj.time =
                message.time !== undefined ? message.time.toISOString() : null);
        message.power !== undefined && (obj.power = message.power);
        message.consensus_address !== undefined &&
            (obj.consensus_address = message.consensus_address);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseEquivocation);
        if (object.height !== undefined && object.height !== null) {
            message.height = object.height;
        }
        else {
            message.height = 0;
        }
        if (object.time !== undefined && object.time !== null) {
            message.time = object.time;
        }
        else {
            message.time = undefined;
        }
        if (object.power !== undefined && object.power !== null) {
            message.power = object.power;
        }
        else {
            message.power = 0;
        }
        if (object.consensus_address !== undefined &&
            object.consensus_address !== null) {
            message.consensus_address = object.consensus_address;
        }
        else {
            message.consensus_address = "";
        }
        return message;
    },
};
