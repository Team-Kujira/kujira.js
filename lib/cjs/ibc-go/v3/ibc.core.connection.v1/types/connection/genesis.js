"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = exports.protobufPackage = void 0;
const minimal_1 = require("protobufjs/minimal");
const types_1 = require("../../../../../types");
const connection_1 = require("./connection");
exports.protobufPackage = "ibc.core.connection.v1";
const baseGenesisState = { next_connection_sequence: 0 };
exports.GenesisState = {
    encode(message, writer = minimal_1.Writer.create()) {
        for (const v of message.connections) {
            connection_1.IdentifiedConnection.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.client_connection_paths) {
            connection_1.ConnectionPaths.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.next_connection_sequence !== 0) {
            writer.uint32(24).uint64(message.next_connection_sequence);
        }
        if (message.params !== undefined) {
            connection_1.Params.encode(message.params, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGenesisState);
        message.connections = [];
        message.client_connection_paths = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.connections.push(connection_1.IdentifiedConnection.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.client_connection_paths.push(connection_1.ConnectionPaths.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.next_connection_sequence = (0, types_1.longToNumber)(reader.uint64());
                    break;
                case 4:
                    message.params = connection_1.Params.decode(reader, reader.uint32());
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
                message.connections.push(connection_1.IdentifiedConnection.fromJSON(e));
            }
        }
        if (object.client_connection_paths !== undefined &&
            object.client_connection_paths !== null) {
            for (const e of object.client_connection_paths) {
                message.client_connection_paths.push(connection_1.ConnectionPaths.fromJSON(e));
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
            message.params = connection_1.Params.fromJSON(object.params);
        }
        else {
            message.params = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.connections) {
            obj.connections = message.connections.map((e) => e ? connection_1.IdentifiedConnection.toJSON(e) : undefined);
        }
        else {
            obj.connections = [];
        }
        if (message.client_connection_paths) {
            obj.client_connection_paths = message.client_connection_paths.map((e) => e ? connection_1.ConnectionPaths.toJSON(e) : undefined);
        }
        else {
            obj.client_connection_paths = [];
        }
        message.next_connection_sequence !== undefined &&
            (obj.next_connection_sequence = message.next_connection_sequence);
        message.params !== undefined &&
            (obj.params = message.params ? connection_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseGenesisState);
        message.connections = [];
        message.client_connection_paths = [];
        if (object.connections !== undefined && object.connections !== null) {
            for (const e of object.connections) {
                message.connections.push(connection_1.IdentifiedConnection.fromPartial(e));
            }
        }
        if (object.client_connection_paths !== undefined &&
            object.client_connection_paths !== null) {
            for (const e of object.client_connection_paths) {
                message.client_connection_paths.push(connection_1.ConnectionPaths.fromPartial(e));
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
            message.params = connection_1.Params.fromPartial(object.params);
        }
        else {
            message.params = undefined;
        }
        return message;
    },
};
