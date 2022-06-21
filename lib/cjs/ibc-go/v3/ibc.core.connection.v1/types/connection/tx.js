"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = exports.MsgConnectionOpenConfirmResponse = exports.MsgConnectionOpenConfirm = exports.MsgConnectionOpenAckResponse = exports.MsgConnectionOpenAck = exports.MsgConnectionOpenTryResponse = exports.MsgConnectionOpenTry = exports.MsgConnectionOpenInitResponse = exports.MsgConnectionOpenInit = exports.protobufPackage = void 0;
/* eslint-disable */
const minimal_1 = require("protobufjs/minimal");
const client_1 = require("../client");
const connection_1 = require("./connection");
const types_1 = require("../../../../../types");
const any_1 = require("../../../../../types/google/protobuf/any");
exports.protobufPackage = "ibc.core.connection.v1";
const baseMsgConnectionOpenInit = {
    client_id: "",
    delay_period: 0,
    signer: "",
};
exports.MsgConnectionOpenInit = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.client_id !== "") {
            writer.uint32(10).string(message.client_id);
        }
        if (message.counterparty !== undefined) {
            connection_1.Counterparty.encode(message.counterparty, writer.uint32(18).fork()).ldelim();
        }
        if (message.version !== undefined) {
            connection_1.Version.encode(message.version, writer.uint32(26).fork()).ldelim();
        }
        if (message.delay_period !== 0) {
            writer.uint32(32).uint64(message.delay_period);
        }
        if (message.signer !== "") {
            writer.uint32(42).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgConnectionOpenInit);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.client_id = reader.string();
                    break;
                case 2:
                    message.counterparty = connection_1.Counterparty.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.version = connection_1.Version.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.delay_period = (0, types_1.longToNumber)(reader.uint64());
                    break;
                case 5:
                    message.signer = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMsgConnectionOpenInit);
        if (object.client_id !== undefined && object.client_id !== null) {
            message.client_id = String(object.client_id);
        }
        else {
            message.client_id = "";
        }
        if (object.counterparty !== undefined && object.counterparty !== null) {
            message.counterparty = connection_1.Counterparty.fromJSON(object.counterparty);
        }
        else {
            message.counterparty = undefined;
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = connection_1.Version.fromJSON(object.version);
        }
        else {
            message.version = undefined;
        }
        if (object.delay_period !== undefined && object.delay_period !== null) {
            message.delay_period = Number(object.delay_period);
        }
        else {
            message.delay_period = 0;
        }
        if (object.signer !== undefined && object.signer !== null) {
            message.signer = String(object.signer);
        }
        else {
            message.signer = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.client_id !== undefined && (obj.client_id = message.client_id);
        message.counterparty !== undefined &&
            (obj.counterparty = message.counterparty
                ? connection_1.Counterparty.toJSON(message.counterparty)
                : undefined);
        message.version !== undefined &&
            (obj.version = message.version
                ? connection_1.Version.toJSON(message.version)
                : undefined);
        message.delay_period !== undefined &&
            (obj.delay_period = message.delay_period);
        message.signer !== undefined && (obj.signer = message.signer);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMsgConnectionOpenInit);
        if (object.client_id !== undefined && object.client_id !== null) {
            message.client_id = object.client_id;
        }
        else {
            message.client_id = "";
        }
        if (object.counterparty !== undefined && object.counterparty !== null) {
            message.counterparty = connection_1.Counterparty.fromPartial(object.counterparty);
        }
        else {
            message.counterparty = undefined;
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = connection_1.Version.fromPartial(object.version);
        }
        else {
            message.version = undefined;
        }
        if (object.delay_period !== undefined && object.delay_period !== null) {
            message.delay_period = object.delay_period;
        }
        else {
            message.delay_period = 0;
        }
        if (object.signer !== undefined && object.signer !== null) {
            message.signer = object.signer;
        }
        else {
            message.signer = "";
        }
        return message;
    },
};
const baseMsgConnectionOpenInitResponse = {};
exports.MsgConnectionOpenInitResponse = {
    encode(_, writer = minimal_1.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgConnectionOpenInitResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = Object.assign({}, baseMsgConnectionOpenInitResponse);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseMsgConnectionOpenInitResponse);
        return message;
    },
};
const baseMsgConnectionOpenTry = {
    client_id: "",
    previous_connection_id: "",
    delay_period: 0,
    signer: "",
};
exports.MsgConnectionOpenTry = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.client_id !== "") {
            writer.uint32(10).string(message.client_id);
        }
        if (message.previous_connection_id !== "") {
            writer.uint32(18).string(message.previous_connection_id);
        }
        if (message.client_state !== undefined) {
            any_1.Any.encode(message.client_state, writer.uint32(26).fork()).ldelim();
        }
        if (message.counterparty !== undefined) {
            connection_1.Counterparty.encode(message.counterparty, writer.uint32(34).fork()).ldelim();
        }
        if (message.delay_period !== 0) {
            writer.uint32(40).uint64(message.delay_period);
        }
        for (const v of message.counterparty_versions) {
            connection_1.Version.encode(v, writer.uint32(50).fork()).ldelim();
        }
        if (message.proof_height !== undefined) {
            client_1.Height.encode(message.proof_height, writer.uint32(58).fork()).ldelim();
        }
        if (message.proof_init.length !== 0) {
            writer.uint32(66).bytes(message.proof_init);
        }
        if (message.proof_client.length !== 0) {
            writer.uint32(74).bytes(message.proof_client);
        }
        if (message.proof_consensus.length !== 0) {
            writer.uint32(82).bytes(message.proof_consensus);
        }
        if (message.consensus_height !== undefined) {
            client_1.Height.encode(message.consensus_height, writer.uint32(90).fork()).ldelim();
        }
        if (message.signer !== "") {
            writer.uint32(98).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgConnectionOpenTry);
        message.counterparty_versions = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.client_id = reader.string();
                    break;
                case 2:
                    message.previous_connection_id = reader.string();
                    break;
                case 3:
                    message.client_state = any_1.Any.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.counterparty = connection_1.Counterparty.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.delay_period = (0, types_1.longToNumber)(reader.uint64());
                    break;
                case 6:
                    message.counterparty_versions.push(connection_1.Version.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.proof_height = client_1.Height.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.proof_init = reader.bytes();
                    break;
                case 9:
                    message.proof_client = reader.bytes();
                    break;
                case 10:
                    message.proof_consensus = reader.bytes();
                    break;
                case 11:
                    message.consensus_height = client_1.Height.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.signer = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMsgConnectionOpenTry);
        message.counterparty_versions = [];
        if (object.client_id !== undefined && object.client_id !== null) {
            message.client_id = String(object.client_id);
        }
        else {
            message.client_id = "";
        }
        if (object.previous_connection_id !== undefined &&
            object.previous_connection_id !== null) {
            message.previous_connection_id = String(object.previous_connection_id);
        }
        else {
            message.previous_connection_id = "";
        }
        if (object.client_state !== undefined && object.client_state !== null) {
            message.client_state = any_1.Any.fromJSON(object.client_state);
        }
        else {
            message.client_state = undefined;
        }
        if (object.counterparty !== undefined && object.counterparty !== null) {
            message.counterparty = connection_1.Counterparty.fromJSON(object.counterparty);
        }
        else {
            message.counterparty = undefined;
        }
        if (object.delay_period !== undefined && object.delay_period !== null) {
            message.delay_period = Number(object.delay_period);
        }
        else {
            message.delay_period = 0;
        }
        if (object.counterparty_versions !== undefined &&
            object.counterparty_versions !== null) {
            for (const e of object.counterparty_versions) {
                message.counterparty_versions.push(connection_1.Version.fromJSON(e));
            }
        }
        if (object.proof_height !== undefined && object.proof_height !== null) {
            message.proof_height = client_1.Height.fromJSON(object.proof_height);
        }
        else {
            message.proof_height = undefined;
        }
        if (object.proof_init !== undefined && object.proof_init !== null) {
            message.proof_init = (0, types_1.bytesFromBase64)(object.proof_init);
        }
        if (object.proof_client !== undefined && object.proof_client !== null) {
            message.proof_client = (0, types_1.bytesFromBase64)(object.proof_client);
        }
        if (object.proof_consensus !== undefined &&
            object.proof_consensus !== null) {
            message.proof_consensus = (0, types_1.bytesFromBase64)(object.proof_consensus);
        }
        if (object.consensus_height !== undefined &&
            object.consensus_height !== null) {
            message.consensus_height = client_1.Height.fromJSON(object.consensus_height);
        }
        else {
            message.consensus_height = undefined;
        }
        if (object.signer !== undefined && object.signer !== null) {
            message.signer = String(object.signer);
        }
        else {
            message.signer = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.client_id !== undefined && (obj.client_id = message.client_id);
        message.previous_connection_id !== undefined &&
            (obj.previous_connection_id = message.previous_connection_id);
        message.client_state !== undefined &&
            (obj.client_state = message.client_state
                ? any_1.Any.toJSON(message.client_state)
                : undefined);
        message.counterparty !== undefined &&
            (obj.counterparty = message.counterparty
                ? connection_1.Counterparty.toJSON(message.counterparty)
                : undefined);
        message.delay_period !== undefined &&
            (obj.delay_period = message.delay_period);
        if (message.counterparty_versions) {
            obj.counterparty_versions = message.counterparty_versions.map((e) => e ? connection_1.Version.toJSON(e) : undefined);
        }
        else {
            obj.counterparty_versions = [];
        }
        message.proof_height !== undefined &&
            (obj.proof_height = message.proof_height
                ? client_1.Height.toJSON(message.proof_height)
                : undefined);
        message.proof_init !== undefined &&
            (obj.proof_init = (0, types_1.base64FromBytes)(message.proof_init !== undefined ? message.proof_init : new Uint8Array()));
        message.proof_client !== undefined &&
            (obj.proof_client = (0, types_1.base64FromBytes)(message.proof_client !== undefined
                ? message.proof_client
                : new Uint8Array()));
        message.proof_consensus !== undefined &&
            (obj.proof_consensus = (0, types_1.base64FromBytes)(message.proof_consensus !== undefined
                ? message.proof_consensus
                : new Uint8Array()));
        message.consensus_height !== undefined &&
            (obj.consensus_height = message.consensus_height
                ? client_1.Height.toJSON(message.consensus_height)
                : undefined);
        message.signer !== undefined && (obj.signer = message.signer);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMsgConnectionOpenTry);
        message.counterparty_versions = [];
        if (object.client_id !== undefined && object.client_id !== null) {
            message.client_id = object.client_id;
        }
        else {
            message.client_id = "";
        }
        if (object.previous_connection_id !== undefined &&
            object.previous_connection_id !== null) {
            message.previous_connection_id = object.previous_connection_id;
        }
        else {
            message.previous_connection_id = "";
        }
        if (object.client_state !== undefined && object.client_state !== null) {
            message.client_state = any_1.Any.fromPartial(object.client_state);
        }
        else {
            message.client_state = undefined;
        }
        if (object.counterparty !== undefined && object.counterparty !== null) {
            message.counterparty = connection_1.Counterparty.fromPartial(object.counterparty);
        }
        else {
            message.counterparty = undefined;
        }
        if (object.delay_period !== undefined && object.delay_period !== null) {
            message.delay_period = object.delay_period;
        }
        else {
            message.delay_period = 0;
        }
        if (object.counterparty_versions !== undefined &&
            object.counterparty_versions !== null) {
            for (const e of object.counterparty_versions) {
                message.counterparty_versions.push(connection_1.Version.fromPartial(e));
            }
        }
        if (object.proof_height !== undefined && object.proof_height !== null) {
            message.proof_height = client_1.Height.fromPartial(object.proof_height);
        }
        else {
            message.proof_height = undefined;
        }
        if (object.proof_init !== undefined && object.proof_init !== null) {
            message.proof_init = object.proof_init;
        }
        else {
            message.proof_init = new Uint8Array();
        }
        if (object.proof_client !== undefined && object.proof_client !== null) {
            message.proof_client = object.proof_client;
        }
        else {
            message.proof_client = new Uint8Array();
        }
        if (object.proof_consensus !== undefined &&
            object.proof_consensus !== null) {
            message.proof_consensus = object.proof_consensus;
        }
        else {
            message.proof_consensus = new Uint8Array();
        }
        if (object.consensus_height !== undefined &&
            object.consensus_height !== null) {
            message.consensus_height = client_1.Height.fromPartial(object.consensus_height);
        }
        else {
            message.consensus_height = undefined;
        }
        if (object.signer !== undefined && object.signer !== null) {
            message.signer = object.signer;
        }
        else {
            message.signer = "";
        }
        return message;
    },
};
const baseMsgConnectionOpenTryResponse = {};
exports.MsgConnectionOpenTryResponse = {
    encode(_, writer = minimal_1.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgConnectionOpenTryResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = Object.assign({}, baseMsgConnectionOpenTryResponse);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseMsgConnectionOpenTryResponse);
        return message;
    },
};
const baseMsgConnectionOpenAck = {
    connection_id: "",
    counterparty_connection_id: "",
    signer: "",
};
exports.MsgConnectionOpenAck = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.connection_id !== "") {
            writer.uint32(10).string(message.connection_id);
        }
        if (message.counterparty_connection_id !== "") {
            writer.uint32(18).string(message.counterparty_connection_id);
        }
        if (message.version !== undefined) {
            connection_1.Version.encode(message.version, writer.uint32(26).fork()).ldelim();
        }
        if (message.client_state !== undefined) {
            any_1.Any.encode(message.client_state, writer.uint32(34).fork()).ldelim();
        }
        if (message.proof_height !== undefined) {
            client_1.Height.encode(message.proof_height, writer.uint32(42).fork()).ldelim();
        }
        if (message.proof_try.length !== 0) {
            writer.uint32(50).bytes(message.proof_try);
        }
        if (message.proof_client.length !== 0) {
            writer.uint32(58).bytes(message.proof_client);
        }
        if (message.proof_consensus.length !== 0) {
            writer.uint32(66).bytes(message.proof_consensus);
        }
        if (message.consensus_height !== undefined) {
            client_1.Height.encode(message.consensus_height, writer.uint32(74).fork()).ldelim();
        }
        if (message.signer !== "") {
            writer.uint32(82).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgConnectionOpenAck);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.connection_id = reader.string();
                    break;
                case 2:
                    message.counterparty_connection_id = reader.string();
                    break;
                case 3:
                    message.version = connection_1.Version.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.client_state = any_1.Any.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.proof_height = client_1.Height.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.proof_try = reader.bytes();
                    break;
                case 7:
                    message.proof_client = reader.bytes();
                    break;
                case 8:
                    message.proof_consensus = reader.bytes();
                    break;
                case 9:
                    message.consensus_height = client_1.Height.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.signer = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMsgConnectionOpenAck);
        if (object.connection_id !== undefined && object.connection_id !== null) {
            message.connection_id = String(object.connection_id);
        }
        else {
            message.connection_id = "";
        }
        if (object.counterparty_connection_id !== undefined &&
            object.counterparty_connection_id !== null) {
            message.counterparty_connection_id = String(object.counterparty_connection_id);
        }
        else {
            message.counterparty_connection_id = "";
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = connection_1.Version.fromJSON(object.version);
        }
        else {
            message.version = undefined;
        }
        if (object.client_state !== undefined && object.client_state !== null) {
            message.client_state = any_1.Any.fromJSON(object.client_state);
        }
        else {
            message.client_state = undefined;
        }
        if (object.proof_height !== undefined && object.proof_height !== null) {
            message.proof_height = client_1.Height.fromJSON(object.proof_height);
        }
        else {
            message.proof_height = undefined;
        }
        if (object.proof_try !== undefined && object.proof_try !== null) {
            message.proof_try = (0, types_1.bytesFromBase64)(object.proof_try);
        }
        if (object.proof_client !== undefined && object.proof_client !== null) {
            message.proof_client = (0, types_1.bytesFromBase64)(object.proof_client);
        }
        if (object.proof_consensus !== undefined &&
            object.proof_consensus !== null) {
            message.proof_consensus = (0, types_1.bytesFromBase64)(object.proof_consensus);
        }
        if (object.consensus_height !== undefined &&
            object.consensus_height !== null) {
            message.consensus_height = client_1.Height.fromJSON(object.consensus_height);
        }
        else {
            message.consensus_height = undefined;
        }
        if (object.signer !== undefined && object.signer !== null) {
            message.signer = String(object.signer);
        }
        else {
            message.signer = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.connection_id !== undefined &&
            (obj.connection_id = message.connection_id);
        message.counterparty_connection_id !== undefined &&
            (obj.counterparty_connection_id = message.counterparty_connection_id);
        message.version !== undefined &&
            (obj.version = message.version
                ? connection_1.Version.toJSON(message.version)
                : undefined);
        message.client_state !== undefined &&
            (obj.client_state = message.client_state
                ? any_1.Any.toJSON(message.client_state)
                : undefined);
        message.proof_height !== undefined &&
            (obj.proof_height = message.proof_height
                ? client_1.Height.toJSON(message.proof_height)
                : undefined);
        message.proof_try !== undefined &&
            (obj.proof_try = (0, types_1.base64FromBytes)(message.proof_try !== undefined ? message.proof_try : new Uint8Array()));
        message.proof_client !== undefined &&
            (obj.proof_client = (0, types_1.base64FromBytes)(message.proof_client !== undefined
                ? message.proof_client
                : new Uint8Array()));
        message.proof_consensus !== undefined &&
            (obj.proof_consensus = (0, types_1.base64FromBytes)(message.proof_consensus !== undefined
                ? message.proof_consensus
                : new Uint8Array()));
        message.consensus_height !== undefined &&
            (obj.consensus_height = message.consensus_height
                ? client_1.Height.toJSON(message.consensus_height)
                : undefined);
        message.signer !== undefined && (obj.signer = message.signer);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMsgConnectionOpenAck);
        if (object.connection_id !== undefined && object.connection_id !== null) {
            message.connection_id = object.connection_id;
        }
        else {
            message.connection_id = "";
        }
        if (object.counterparty_connection_id !== undefined &&
            object.counterparty_connection_id !== null) {
            message.counterparty_connection_id = object.counterparty_connection_id;
        }
        else {
            message.counterparty_connection_id = "";
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = connection_1.Version.fromPartial(object.version);
        }
        else {
            message.version = undefined;
        }
        if (object.client_state !== undefined && object.client_state !== null) {
            message.client_state = any_1.Any.fromPartial(object.client_state);
        }
        else {
            message.client_state = undefined;
        }
        if (object.proof_height !== undefined && object.proof_height !== null) {
            message.proof_height = client_1.Height.fromPartial(object.proof_height);
        }
        else {
            message.proof_height = undefined;
        }
        if (object.proof_try !== undefined && object.proof_try !== null) {
            message.proof_try = object.proof_try;
        }
        else {
            message.proof_try = new Uint8Array();
        }
        if (object.proof_client !== undefined && object.proof_client !== null) {
            message.proof_client = object.proof_client;
        }
        else {
            message.proof_client = new Uint8Array();
        }
        if (object.proof_consensus !== undefined &&
            object.proof_consensus !== null) {
            message.proof_consensus = object.proof_consensus;
        }
        else {
            message.proof_consensus = new Uint8Array();
        }
        if (object.consensus_height !== undefined &&
            object.consensus_height !== null) {
            message.consensus_height = client_1.Height.fromPartial(object.consensus_height);
        }
        else {
            message.consensus_height = undefined;
        }
        if (object.signer !== undefined && object.signer !== null) {
            message.signer = object.signer;
        }
        else {
            message.signer = "";
        }
        return message;
    },
};
const baseMsgConnectionOpenAckResponse = {};
exports.MsgConnectionOpenAckResponse = {
    encode(_, writer = minimal_1.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgConnectionOpenAckResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = Object.assign({}, baseMsgConnectionOpenAckResponse);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseMsgConnectionOpenAckResponse);
        return message;
    },
};
const baseMsgConnectionOpenConfirm = { connection_id: "", signer: "" };
exports.MsgConnectionOpenConfirm = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.connection_id !== "") {
            writer.uint32(10).string(message.connection_id);
        }
        if (message.proof_ack.length !== 0) {
            writer.uint32(18).bytes(message.proof_ack);
        }
        if (message.proof_height !== undefined) {
            client_1.Height.encode(message.proof_height, writer.uint32(26).fork()).ldelim();
        }
        if (message.signer !== "") {
            writer.uint32(34).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgConnectionOpenConfirm);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.connection_id = reader.string();
                    break;
                case 2:
                    message.proof_ack = reader.bytes();
                    break;
                case 3:
                    message.proof_height = client_1.Height.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.signer = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMsgConnectionOpenConfirm);
        if (object.connection_id !== undefined && object.connection_id !== null) {
            message.connection_id = String(object.connection_id);
        }
        else {
            message.connection_id = "";
        }
        if (object.proof_ack !== undefined && object.proof_ack !== null) {
            message.proof_ack = (0, types_1.bytesFromBase64)(object.proof_ack);
        }
        if (object.proof_height !== undefined && object.proof_height !== null) {
            message.proof_height = client_1.Height.fromJSON(object.proof_height);
        }
        else {
            message.proof_height = undefined;
        }
        if (object.signer !== undefined && object.signer !== null) {
            message.signer = String(object.signer);
        }
        else {
            message.signer = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.connection_id !== undefined &&
            (obj.connection_id = message.connection_id);
        message.proof_ack !== undefined &&
            (obj.proof_ack = (0, types_1.base64FromBytes)(message.proof_ack !== undefined ? message.proof_ack : new Uint8Array()));
        message.proof_height !== undefined &&
            (obj.proof_height = message.proof_height
                ? client_1.Height.toJSON(message.proof_height)
                : undefined);
        message.signer !== undefined && (obj.signer = message.signer);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMsgConnectionOpenConfirm);
        if (object.connection_id !== undefined && object.connection_id !== null) {
            message.connection_id = object.connection_id;
        }
        else {
            message.connection_id = "";
        }
        if (object.proof_ack !== undefined && object.proof_ack !== null) {
            message.proof_ack = object.proof_ack;
        }
        else {
            message.proof_ack = new Uint8Array();
        }
        if (object.proof_height !== undefined && object.proof_height !== null) {
            message.proof_height = client_1.Height.fromPartial(object.proof_height);
        }
        else {
            message.proof_height = undefined;
        }
        if (object.signer !== undefined && object.signer !== null) {
            message.signer = object.signer;
        }
        else {
            message.signer = "";
        }
        return message;
    },
};
const baseMsgConnectionOpenConfirmResponse = {};
exports.MsgConnectionOpenConfirmResponse = {
    encode(_, writer = minimal_1.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgConnectionOpenConfirmResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = Object.assign({}, baseMsgConnectionOpenConfirmResponse);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseMsgConnectionOpenConfirmResponse);
        return message;
    },
};
class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    ConnectionOpenInit(request) {
        const data = exports.MsgConnectionOpenInit.encode(request).finish();
        const promise = this.rpc.request("ibc.core.connection.v1.Msg", "ConnectionOpenInit", data);
        return promise.then((data) => exports.MsgConnectionOpenInitResponse.decode(new minimal_1.Reader(data)));
    }
    ConnectionOpenTry(request) {
        const data = exports.MsgConnectionOpenTry.encode(request).finish();
        const promise = this.rpc.request("ibc.core.connection.v1.Msg", "ConnectionOpenTry", data);
        return promise.then((data) => exports.MsgConnectionOpenTryResponse.decode(new minimal_1.Reader(data)));
    }
    ConnectionOpenAck(request) {
        const data = exports.MsgConnectionOpenAck.encode(request).finish();
        const promise = this.rpc.request("ibc.core.connection.v1.Msg", "ConnectionOpenAck", data);
        return promise.then((data) => exports.MsgConnectionOpenAckResponse.decode(new minimal_1.Reader(data)));
    }
    ConnectionOpenConfirm(request) {
        const data = exports.MsgConnectionOpenConfirm.encode(request).finish();
        const promise = this.rpc.request("ibc.core.connection.v1.Msg", "ConnectionOpenConfirm", data);
        return promise.then((data) => exports.MsgConnectionOpenConfirmResponse.decode(new minimal_1.Reader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
