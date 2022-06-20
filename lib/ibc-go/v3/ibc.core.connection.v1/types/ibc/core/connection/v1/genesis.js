/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { IdentifiedConnection, ConnectionPaths, Params, } from "../../../../ibc/core/connection/v1/connection";
export const protobufPackage = "ibc.core.connection.v1";
const baseGenesisState = { next_connection_sequence: 0 };
export const GenesisState = {
    encode(message, writer = Writer.create()) {
        for (const v of message.connections) {
            IdentifiedConnection.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.client_connection_paths) {
            ConnectionPaths.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.next_connection_sequence !== 0) {
            writer.uint32(24).uint64(message.next_connection_sequence);
        }
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGenesisState);
        message.connections = [];
        message.client_connection_paths = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.connections.push(IdentifiedConnection.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.client_connection_paths.push(ConnectionPaths.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.next_connection_sequence = longToNumber(reader.uint64());
                    break;
                case 4:
                    message.params = Params.decode(reader, reader.uint32());
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
        message.connections = [];
        message.client_connection_paths = [];
        if (object.connections !== undefined && object.connections !== null) {
            for (const e of object.connections) {
                message.connections.push(IdentifiedConnection.fromJSON(e));
            }
        }
        if (object.client_connection_paths !== undefined &&
            object.client_connection_paths !== null) {
            for (const e of object.client_connection_paths) {
                message.client_connection_paths.push(ConnectionPaths.fromJSON(e));
            }
        }
        if (object.next_connection_sequence !== undefined &&
            object.next_connection_sequence !== null) {
            message.next_connection_sequence = Number(object.next_connection_sequence);
        }
        else {
            message.next_connection_sequence = 0;
        }
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromJSON(object.params);
        }
        else {
            message.params = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.connections) {
            obj.connections = message.connections.map((e) => e ? IdentifiedConnection.toJSON(e) : undefined);
        }
        else {
            obj.connections = [];
        }
        if (message.client_connection_paths) {
            obj.client_connection_paths = message.client_connection_paths.map((e) => e ? ConnectionPaths.toJSON(e) : undefined);
        }
        else {
            obj.client_connection_paths = [];
        }
        message.next_connection_sequence !== undefined &&
            (obj.next_connection_sequence = message.next_connection_sequence);
        message.params !== undefined &&
            (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseGenesisState);
        message.connections = [];
        message.client_connection_paths = [];
        if (object.connections !== undefined && object.connections !== null) {
            for (const e of object.connections) {
                message.connections.push(IdentifiedConnection.fromPartial(e));
            }
        }
        if (object.client_connection_paths !== undefined &&
            object.client_connection_paths !== null) {
            for (const e of object.client_connection_paths) {
                message.client_connection_paths.push(ConnectionPaths.fromPartial(e));
            }
        }
        if (object.next_connection_sequence !== undefined &&
            object.next_connection_sequence !== null) {
            message.next_connection_sequence = object.next_connection_sequence;
        }
        else {
            message.next_connection_sequence = 0;
        }
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromPartial(object.params);
        }
        else {
            message.params = undefined;
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
