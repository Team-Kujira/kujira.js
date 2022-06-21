/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";
export const protobufPackage = "cosmos.authz.v1beta1";
const baseEventGrant = { msg_type_url: "", granter: "", grantee: "" };
export const EventGrant = {
    encode(message, writer = Writer.create()) {
        if (message.msg_type_url !== "") {
            writer.uint32(18).string(message.msg_type_url);
        }
        if (message.granter !== "") {
            writer.uint32(26).string(message.granter);
        }
        if (message.grantee !== "") {
            writer.uint32(34).string(message.grantee);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseEventGrant);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.msg_type_url = reader.string();
                    break;
                case 3:
                    message.granter = reader.string();
                    break;
                case 4:
                    message.grantee = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseEventGrant);
        if (object.msg_type_url !== undefined && object.msg_type_url !== null) {
            message.msg_type_url = String(object.msg_type_url);
        }
        else {
            message.msg_type_url = "";
        }
        if (object.granter !== undefined && object.granter !== null) {
            message.granter = String(object.granter);
        }
        else {
            message.granter = "";
        }
        if (object.grantee !== undefined && object.grantee !== null) {
            message.grantee = String(object.grantee);
        }
        else {
            message.grantee = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.msg_type_url !== undefined &&
            (obj.msg_type_url = message.msg_type_url);
        message.granter !== undefined && (obj.granter = message.granter);
        message.grantee !== undefined && (obj.grantee = message.grantee);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseEventGrant);
        if (object.msg_type_url !== undefined && object.msg_type_url !== null) {
            message.msg_type_url = object.msg_type_url;
        }
        else {
            message.msg_type_url = "";
        }
        if (object.granter !== undefined && object.granter !== null) {
            message.granter = object.granter;
        }
        else {
            message.granter = "";
        }
        if (object.grantee !== undefined && object.grantee !== null) {
            message.grantee = object.grantee;
        }
        else {
            message.grantee = "";
        }
        return message;
    },
};
const baseEventRevoke = { msg_type_url: "", granter: "", grantee: "" };
export const EventRevoke = {
    encode(message, writer = Writer.create()) {
        if (message.msg_type_url !== "") {
            writer.uint32(18).string(message.msg_type_url);
        }
        if (message.granter !== "") {
            writer.uint32(26).string(message.granter);
        }
        if (message.grantee !== "") {
            writer.uint32(34).string(message.grantee);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseEventRevoke);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.msg_type_url = reader.string();
                    break;
                case 3:
                    message.granter = reader.string();
                    break;
                case 4:
                    message.grantee = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseEventRevoke);
        if (object.msg_type_url !== undefined && object.msg_type_url !== null) {
            message.msg_type_url = String(object.msg_type_url);
        }
        else {
            message.msg_type_url = "";
        }
        if (object.granter !== undefined && object.granter !== null) {
            message.granter = String(object.granter);
        }
        else {
            message.granter = "";
        }
        if (object.grantee !== undefined && object.grantee !== null) {
            message.grantee = String(object.grantee);
        }
        else {
            message.grantee = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.msg_type_url !== undefined &&
            (obj.msg_type_url = message.msg_type_url);
        message.granter !== undefined && (obj.granter = message.granter);
        message.grantee !== undefined && (obj.grantee = message.grantee);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseEventRevoke);
        if (object.msg_type_url !== undefined && object.msg_type_url !== null) {
            message.msg_type_url = object.msg_type_url;
        }
        else {
            message.msg_type_url = "";
        }
        if (object.granter !== undefined && object.granter !== null) {
            message.granter = object.granter;
        }
        else {
            message.granter = "";
        }
        if (object.grantee !== undefined && object.grantee !== null) {
            message.grantee = object.grantee;
        }
        else {
            message.grantee = "";
        }
        return message;
    },
};
