"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DenomAuthorityMetadata = exports.protobufPackage = void 0;
/* eslint-disable */
const minimal_1 = require("protobufjs/minimal");
exports.protobufPackage = "kujira.denom";
const baseDenomAuthorityMetadata = { Admin: "" };
exports.DenomAuthorityMetadata = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.Admin !== "") {
            writer.uint32(10).string(message.Admin);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDenomAuthorityMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.Admin = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDenomAuthorityMetadata);
        if (object.Admin !== undefined && object.Admin !== null) {
            message.Admin = String(object.Admin);
        }
        else {
            message.Admin = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.Admin !== undefined && (obj.Admin = message.Admin);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseDenomAuthorityMetadata);
        if (object.Admin !== undefined && object.Admin !== null) {
            message.Admin = object.Admin;
        }
        else {
            message.Admin = "";
        }
        return message;
    },
};
