"use strict";
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultNodeInfoOther = exports.DefaultNodeInfo = exports.ProtocolVersion = exports.NetAddress = exports.protobufPackage = void 0;
const minimal_1 = require("protobufjs/minimal");
const __1 = require("../..");
exports.protobufPackage = "tendermint.p2p";
const baseNetAddress = { id: "", ip: "", port: 0 };
exports.NetAddress = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.ip !== "") {
            writer.uint32(18).string(message.ip);
        }
        if (message.port !== 0) {
            writer.uint32(24).uint32(message.port);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseNetAddress);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.ip = reader.string();
                    break;
                case 3:
                    message.port = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseNetAddress);
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        else {
            message.id = "";
        }
        if (object.ip !== undefined && object.ip !== null) {
            message.ip = String(object.ip);
        }
        else {
            message.ip = "";
        }
        if (object.port !== undefined && object.port !== null) {
            message.port = Number(object.port);
        }
        else {
            message.port = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.ip !== undefined && (obj.ip = message.ip);
        message.port !== undefined && (obj.port = message.port);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseNetAddress);
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = "";
        }
        if (object.ip !== undefined && object.ip !== null) {
            message.ip = object.ip;
        }
        else {
            message.ip = "";
        }
        if (object.port !== undefined && object.port !== null) {
            message.port = object.port;
        }
        else {
            message.port = 0;
        }
        return message;
    },
};
const baseProtocolVersion = { p2p: 0, block: 0, app: 0 };
exports.ProtocolVersion = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.p2p !== 0) {
            writer.uint32(8).uint64(message.p2p);
        }
        if (message.block !== 0) {
            writer.uint32(16).uint64(message.block);
        }
        if (message.app !== 0) {
            writer.uint32(24).uint64(message.app);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseProtocolVersion);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.p2p = (0, __1.longToNumber)(reader.uint64());
                    break;
                case 2:
                    message.block = (0, __1.longToNumber)(reader.uint64());
                    break;
                case 3:
                    message.app = (0, __1.longToNumber)(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseProtocolVersion);
        if (object.p2p !== undefined && object.p2p !== null) {
            message.p2p = Number(object.p2p);
        }
        else {
            message.p2p = 0;
        }
        if (object.block !== undefined && object.block !== null) {
            message.block = Number(object.block);
        }
        else {
            message.block = 0;
        }
        if (object.app !== undefined && object.app !== null) {
            message.app = Number(object.app);
        }
        else {
            message.app = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.p2p !== undefined && (obj.p2p = message.p2p);
        message.block !== undefined && (obj.block = message.block);
        message.app !== undefined && (obj.app = message.app);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseProtocolVersion);
        if (object.p2p !== undefined && object.p2p !== null) {
            message.p2p = object.p2p;
        }
        else {
            message.p2p = 0;
        }
        if (object.block !== undefined && object.block !== null) {
            message.block = object.block;
        }
        else {
            message.block = 0;
        }
        if (object.app !== undefined && object.app !== null) {
            message.app = object.app;
        }
        else {
            message.app = 0;
        }
        return message;
    },
};
const baseDefaultNodeInfo = {
    default_node_id: "",
    listen_addr: "",
    network: "",
    version: "",
    moniker: "",
};
exports.DefaultNodeInfo = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.protocol_version !== undefined) {
            exports.ProtocolVersion.encode(message.protocol_version, writer.uint32(10).fork()).ldelim();
        }
        if (message.default_node_id !== "") {
            writer.uint32(18).string(message.default_node_id);
        }
        if (message.listen_addr !== "") {
            writer.uint32(26).string(message.listen_addr);
        }
        if (message.network !== "") {
            writer.uint32(34).string(message.network);
        }
        if (message.version !== "") {
            writer.uint32(42).string(message.version);
        }
        if (message.channels.length !== 0) {
            writer.uint32(50).bytes(message.channels);
        }
        if (message.moniker !== "") {
            writer.uint32(58).string(message.moniker);
        }
        if (message.other !== undefined) {
            exports.DefaultNodeInfoOther.encode(message.other, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDefaultNodeInfo);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.protocol_version = exports.ProtocolVersion.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.default_node_id = reader.string();
                    break;
                case 3:
                    message.listen_addr = reader.string();
                    break;
                case 4:
                    message.network = reader.string();
                    break;
                case 5:
                    message.version = reader.string();
                    break;
                case 6:
                    message.channels = reader.bytes();
                    break;
                case 7:
                    message.moniker = reader.string();
                    break;
                case 8:
                    message.other = exports.DefaultNodeInfoOther.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDefaultNodeInfo);
        if (object.protocol_version !== undefined &&
            object.protocol_version !== null) {
            message.protocol_version = exports.ProtocolVersion.fromJSON(object.protocol_version);
        }
        else {
            message.protocol_version = undefined;
        }
        if (object.default_node_id !== undefined &&
            object.default_node_id !== null) {
            message.default_node_id = String(object.default_node_id);
        }
        else {
            message.default_node_id = "";
        }
        if (object.listen_addr !== undefined && object.listen_addr !== null) {
            message.listen_addr = String(object.listen_addr);
        }
        else {
            message.listen_addr = "";
        }
        if (object.network !== undefined && object.network !== null) {
            message.network = String(object.network);
        }
        else {
            message.network = "";
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = String(object.version);
        }
        else {
            message.version = "";
        }
        if (object.channels !== undefined && object.channels !== null) {
            message.channels = (0, __1.bytesFromBase64)(object.channels);
        }
        if (object.moniker !== undefined && object.moniker !== null) {
            message.moniker = String(object.moniker);
        }
        else {
            message.moniker = "";
        }
        if (object.other !== undefined && object.other !== null) {
            message.other = exports.DefaultNodeInfoOther.fromJSON(object.other);
        }
        else {
            message.other = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.protocol_version !== undefined &&
            (obj.protocol_version = message.protocol_version
                ? exports.ProtocolVersion.toJSON(message.protocol_version)
                : undefined);
        message.default_node_id !== undefined &&
            (obj.default_node_id = message.default_node_id);
        message.listen_addr !== undefined &&
            (obj.listen_addr = message.listen_addr);
        message.network !== undefined && (obj.network = message.network);
        message.version !== undefined && (obj.version = message.version);
        message.channels !== undefined &&
            (obj.channels = (0, __1.base64FromBytes)(message.channels !== undefined ? message.channels : new Uint8Array()));
        message.moniker !== undefined && (obj.moniker = message.moniker);
        message.other !== undefined &&
            (obj.other = message.other
                ? exports.DefaultNodeInfoOther.toJSON(message.other)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseDefaultNodeInfo);
        if (object.protocol_version !== undefined &&
            object.protocol_version !== null) {
            message.protocol_version = exports.ProtocolVersion.fromPartial(object.protocol_version);
        }
        else {
            message.protocol_version = undefined;
        }
        if (object.default_node_id !== undefined &&
            object.default_node_id !== null) {
            message.default_node_id = object.default_node_id;
        }
        else {
            message.default_node_id = "";
        }
        if (object.listen_addr !== undefined && object.listen_addr !== null) {
            message.listen_addr = object.listen_addr;
        }
        else {
            message.listen_addr = "";
        }
        if (object.network !== undefined && object.network !== null) {
            message.network = object.network;
        }
        else {
            message.network = "";
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = object.version;
        }
        else {
            message.version = "";
        }
        if (object.channels !== undefined && object.channels !== null) {
            message.channels = object.channels;
        }
        else {
            message.channels = new Uint8Array();
        }
        if (object.moniker !== undefined && object.moniker !== null) {
            message.moniker = object.moniker;
        }
        else {
            message.moniker = "";
        }
        if (object.other !== undefined && object.other !== null) {
            message.other = exports.DefaultNodeInfoOther.fromPartial(object.other);
        }
        else {
            message.other = undefined;
        }
        return message;
    },
};
const baseDefaultNodeInfoOther = { tx_index: "", rpc_address: "" };
exports.DefaultNodeInfoOther = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.tx_index !== "") {
            writer.uint32(10).string(message.tx_index);
        }
        if (message.rpc_address !== "") {
            writer.uint32(18).string(message.rpc_address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDefaultNodeInfoOther);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tx_index = reader.string();
                    break;
                case 2:
                    message.rpc_address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDefaultNodeInfoOther);
        if (object.tx_index !== undefined && object.tx_index !== null) {
            message.tx_index = String(object.tx_index);
        }
        else {
            message.tx_index = "";
        }
        if (object.rpc_address !== undefined && object.rpc_address !== null) {
            message.rpc_address = String(object.rpc_address);
        }
        else {
            message.rpc_address = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.tx_index !== undefined && (obj.tx_index = message.tx_index);
        message.rpc_address !== undefined &&
            (obj.rpc_address = message.rpc_address);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseDefaultNodeInfoOther);
        if (object.tx_index !== undefined && object.tx_index !== null) {
            message.tx_index = object.tx_index;
        }
        else {
            message.tx_index = "";
        }
        if (object.rpc_address !== undefined && object.rpc_address !== null) {
            message.rpc_address = object.rpc_address;
        }
        else {
            message.rpc_address = "";
        }
        return message;
    },
};
