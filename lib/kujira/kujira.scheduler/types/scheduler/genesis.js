/* eslint-disable */
import Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { Params } from "../scheduler/params";
import { Hook } from "../scheduler/hook";
export const protobufPackage = "kujira.scheduler";
const baseGenesisState = { hookCount: 0 };
export const GenesisState = {
    encode(message, writer = Writer.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.hookList) {
            Hook.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.hookCount !== 0) {
            writer.uint32(24).uint64(message.hookCount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGenesisState);
        message.hookList = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.hookList.push(Hook.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.hookCount = longToNumber(reader.uint64());
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
            message.params = Params.fromJSON(object.params);
        }
        else {
            message.params = undefined;
        }
        if (object.hookList !== undefined && object.hookList !== null) {
            for (const e of object.hookList) {
                message.hookList.push(Hook.fromJSON(e));
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
            (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        if (message.hookList) {
            obj.hookList = message.hookList.map((e) => e ? Hook.toJSON(e) : undefined);
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
            message.params = Params.fromPartial(object.params);
        }
        else {
            message.params = undefined;
        }
        if (object.hookList !== undefined && object.hookList !== null) {
            for (const e of object.hookList) {
                message.hookList.push(Hook.fromPartial(e));
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
