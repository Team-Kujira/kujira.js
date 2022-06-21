/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";
export const protobufPackage = "ibc.applications.interchain_accounts.controller.v1";
const baseParams = { controller_enabled: false };
export const Params = {
    encode(message, writer = Writer.create()) {
        if (message.controller_enabled === true) {
            writer.uint32(8).bool(message.controller_enabled);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseParams);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.controller_enabled = reader.bool();
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
        if (object.controller_enabled !== undefined &&
            object.controller_enabled !== null) {
            message.controller_enabled = Boolean(object.controller_enabled);
        }
        else {
            message.controller_enabled = false;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.controller_enabled !== undefined &&
            (obj.controller_enabled = message.controller_enabled);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseParams);
        if (object.controller_enabled !== undefined &&
            object.controller_enabled !== null) {
            message.controller_enabled = object.controller_enabled;
        }
        else {
            message.controller_enabled = false;
        }
        return message;
    },
};
