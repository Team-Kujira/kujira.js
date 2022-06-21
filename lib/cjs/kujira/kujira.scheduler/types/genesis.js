"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = exports.protobufPackage = void 0;
const minimal_1 = require("protobufjs/minimal");
const params_1 = require("./params");
const hook_1 = require("./hook");
const types_1 = require("../../../types");
exports.protobufPackage = "kujira.scheduler";
const baseGenesisState = { hookCount: 0 };
exports.GenesisState = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.hookList) {
            hook_1.Hook.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.hookCount !== 0) {
            writer.uint32(24).uint64(message.hookCount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGenesisState);
        message.hookList = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = params_1.Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.hookList.push(hook_1.Hook.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.hookCount = (0, types_1.longToNumber)(reader.uint64());
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
        message.hookList = [];
        if (object.params !== undefined && object.params !== null) {
            message.params = params_1.Params.fromJSON(object.params);
        }
        else {
            message.params = undefined;
        }
        if (object.hookList !== undefined && object.hookList !== null) {
            for (const e of object.hookList) {
                message.hookList.push(hook_1.Hook.fromJSON(e));
            }
        }
        if (object.hookCount !== undefined && object.hookCount !== null) {
            message.hookCount = Number(object.hookCount);
        }
        else {
            message.hookCount = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined &&
            (obj.params = message.params ? params_1.Params.toJSON(message.params) : undefined);
        if (message.hookList) {
            obj.hookList = message.hookList.map((e) => e ? hook_1.Hook.toJSON(e) : undefined);
        }
        else {
            obj.hookList = [];
        }
        message.hookCount !== undefined && (obj.hookCount = message.hookCount);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseGenesisState);
        message.hookList = [];
        if (object.params !== undefined && object.params !== null) {
            message.params = params_1.Params.fromPartial(object.params);
        }
        else {
            message.params = undefined;
        }
        if (object.hookList !== undefined && object.hookList !== null) {
            for (const e of object.hookList) {
                message.hookList.push(hook_1.Hook.fromPartial(e));
            }
        }
        if (object.hookCount !== undefined && object.hookCount !== null) {
            message.hookCount = object.hookCount;
        }
        else {
            message.hookCount = 0;
        }
        return message;
    },
};
