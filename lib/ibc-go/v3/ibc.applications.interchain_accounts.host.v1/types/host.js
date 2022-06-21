/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";
export const protobufPackage = "ibc.applications.interchain_accounts.host.v1";
const baseParams = { host_enabled: false, allow_messages: "" };
export const Params = {
    encode(message, writer = Writer.create()) {
        if (message.host_enabled === true) {
            writer.uint32(8).bool(message.host_enabled);
        }
        for (const v of message.allow_messages) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseParams);
        message.allow_messages = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.host_enabled = reader.bool();
                    break;
                case 2:
                    message.allow_messages.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseParams);
        message.allow_messages = [];
        if (object.host_enabled !== undefined && object.host_enabled !== null) {
            message.host_enabled = Boolean(object.host_enabled);
        }
        else {
            message.host_enabled = false;
        }
        if (object.allow_messages !== undefined && object.allow_messages !== null) {
            for (const e of object.allow_messages) {
                message.allow_messages.push(String(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.host_enabled !== undefined &&
            (obj.host_enabled = message.host_enabled);
        if (message.allow_messages) {
            obj.allow_messages = message.allow_messages.map((e) => e);
        }
        else {
            obj.allow_messages = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseParams);
        message.allow_messages = [];
        if (object.host_enabled !== undefined && object.host_enabled !== null) {
            message.host_enabled = object.host_enabled;
        }
        else {
            message.host_enabled = false;
        }
        if (object.allow_messages !== undefined && object.allow_messages !== null) {
            for (const e of object.allow_messages) {
                message.allow_messages.push(e);
            }
        }
        return message;
    },
};
