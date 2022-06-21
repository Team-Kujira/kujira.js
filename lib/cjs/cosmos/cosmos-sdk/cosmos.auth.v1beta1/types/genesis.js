"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = exports.protobufPackage = void 0;
/* eslint-disable */
const auth_1 = require("./auth");
const minimal_1 = require("protobufjs/minimal");
const any_1 = require("../../../../types/google/protobuf/any");
exports.protobufPackage = "cosmos.auth.v1beta1";
const baseGenesisState = {};
exports.GenesisState = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.params !== undefined) {
            auth_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.accounts) {
            any_1.Any.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGenesisState);
        message.accounts = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = auth_1.Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.accounts.push(any_1.Any.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGenesisState);
        message.accounts = [];
        if (object.params !== undefined && object.params !== null) {
            message.params = auth_1.Params.fromJSON(object.params);
        }
        else {
            message.params = undefined;
        }
        if (object.accounts !== undefined && object.accounts !== null) {
            for (const e of object.accounts) {
                message.accounts.push(any_1.Any.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined &&
            (obj.params = message.params ? auth_1.Params.toJSON(message.params) : undefined);
        if (message.accounts) {
            obj.accounts = message.accounts.map((e) => e ? any_1.Any.toJSON(e) : undefined);
        }
        else {
            obj.accounts = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseGenesisState);
        message.accounts = [];
        if (object.params !== undefined && object.params !== null) {
            message.params = auth_1.Params.fromPartial(object.params);
        }
        else {
            message.params = undefined;
        }
        if (object.accounts !== undefined && object.accounts !== null) {
            for (const e of object.accounts) {
                message.accounts.push(any_1.Any.fromPartial(e));
            }
        }
        return message;
    },
};
