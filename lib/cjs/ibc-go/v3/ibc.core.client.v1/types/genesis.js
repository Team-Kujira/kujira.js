"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdentifiedGenesisMetadata = exports.GenesisMetadata = exports.GenesisState = exports.protobufPackage = void 0;
const minimal_1 = require("protobufjs/minimal");
const types_1 = require("../../../../types");
const client_1 = require("./client");
exports.protobufPackage = "ibc.core.client.v1";
const baseGenesisState = {
    create_localhost: false,
    next_client_sequence: 0,
};
exports.GenesisState = {
    encode(message, writer = minimal_1.Writer.create()) {
        for (const v of message.clients) {
            client_1.IdentifiedClientState.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.clients_consensus) {
            client_1.ClientConsensusStates.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.clients_metadata) {
            exports.IdentifiedGenesisMetadata.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.params !== undefined) {
            client_1.Params.encode(message.params, writer.uint32(34).fork()).ldelim();
        }
        if (message.create_localhost === true) {
            writer.uint32(40).bool(message.create_localhost);
        }
        if (message.next_client_sequence !== 0) {
            writer.uint32(48).uint64(message.next_client_sequence);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGenesisState);
        message.clients = [];
        message.clients_consensus = [];
        message.clients_metadata = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clients.push(client_1.IdentifiedClientState.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.clients_consensus.push(client_1.ClientConsensusStates.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.clients_metadata.push(exports.IdentifiedGenesisMetadata.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.params = client_1.Params.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.create_localhost = reader.bool();
                    break;
                case 6:
                    message.next_client_sequence = (0, types_1.longToNumber)(reader.uint64());
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
        message.clients = [];
        message.clients_consensus = [];
        message.clients_metadata = [];
        if (object.clients !== undefined && object.clients !== null) {
            for (const e of object.clients) {
                message.clients.push(client_1.IdentifiedClientState.fromJSON(e));
            }
        }
        if (object.clients_consensus !== undefined &&
            object.clients_consensus !== null) {
            for (const e of object.clients_consensus) {
                message.clients_consensus.push(client_1.ClientConsensusStates.fromJSON(e));
            }
        }
        if (object.clients_metadata !== undefined &&
            object.clients_metadata !== null) {
            for (const e of object.clients_metadata) {
                message.clients_metadata.push(exports.IdentifiedGenesisMetadata.fromJSON(e));
            }
        }
        if (object.params !== undefined && object.params !== null) {
            message.params = client_1.Params.fromJSON(object.params);
        }
        else {
            message.params = undefined;
        }
        if (object.create_localhost !== undefined &&
            object.create_localhost !== null) {
            message.create_localhost = Boolean(object.create_localhost);
        }
        else {
            message.create_localhost = false;
        }
        if (object.next_client_sequence !== undefined &&
            object.next_client_sequence !== null) {
            message.next_client_sequence = Number(object.next_client_sequence);
        }
        else {
            message.next_client_sequence = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.clients) {
            obj.clients = message.clients.map((e) => e ? client_1.IdentifiedClientState.toJSON(e) : undefined);
        }
        else {
            obj.clients = [];
        }
        if (message.clients_consensus) {
            obj.clients_consensus = message.clients_consensus.map((e) => e ? client_1.ClientConsensusStates.toJSON(e) : undefined);
        }
        else {
            obj.clients_consensus = [];
        }
        if (message.clients_metadata) {
            obj.clients_metadata = message.clients_metadata.map((e) => e ? exports.IdentifiedGenesisMetadata.toJSON(e) : undefined);
        }
        else {
            obj.clients_metadata = [];
        }
        message.params !== undefined &&
            (obj.params = message.params ? client_1.Params.toJSON(message.params) : undefined);
        message.create_localhost !== undefined &&
            (obj.create_localhost = message.create_localhost);
        message.next_client_sequence !== undefined &&
            (obj.next_client_sequence = message.next_client_sequence);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseGenesisState);
        message.clients = [];
        message.clients_consensus = [];
        message.clients_metadata = [];
        if (object.clients !== undefined && object.clients !== null) {
            for (const e of object.clients) {
                message.clients.push(client_1.IdentifiedClientState.fromPartial(e));
            }
        }
        if (object.clients_consensus !== undefined &&
            object.clients_consensus !== null) {
            for (const e of object.clients_consensus) {
                message.clients_consensus.push(client_1.ClientConsensusStates.fromPartial(e));
            }
        }
        if (object.clients_metadata !== undefined &&
            object.clients_metadata !== null) {
            for (const e of object.clients_metadata) {
                message.clients_metadata.push(exports.IdentifiedGenesisMetadata.fromPartial(e));
            }
        }
        if (object.params !== undefined && object.params !== null) {
            message.params = client_1.Params.fromPartial(object.params);
        }
        else {
            message.params = undefined;
        }
        if (object.create_localhost !== undefined &&
            object.create_localhost !== null) {
            message.create_localhost = object.create_localhost;
        }
        else {
            message.create_localhost = false;
        }
        if (object.next_client_sequence !== undefined &&
            object.next_client_sequence !== null) {
            message.next_client_sequence = object.next_client_sequence;
        }
        else {
            message.next_client_sequence = 0;
        }
        return message;
    },
};
const baseGenesisMetadata = {};
exports.GenesisMetadata = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.key.length !== 0) {
            writer.uint32(10).bytes(message.key);
        }
        if (message.value.length !== 0) {
            writer.uint32(18).bytes(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGenesisMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.bytes();
                    break;
                case 2:
                    message.value = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGenesisMetadata);
        if (object.key !== undefined && object.key !== null) {
            message.key = (0, types_1.bytesFromBase64)(object.key);
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = (0, types_1.bytesFromBase64)(object.value);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined &&
            (obj.key = (0, types_1.base64FromBytes)(message.key !== undefined ? message.key : new Uint8Array()));
        message.value !== undefined &&
            (obj.value = (0, types_1.base64FromBytes)(message.value !== undefined ? message.value : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseGenesisMetadata);
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        }
        else {
            message.key = new Uint8Array();
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value;
        }
        else {
            message.value = new Uint8Array();
        }
        return message;
    },
};
const baseIdentifiedGenesisMetadata = { client_id: "" };
exports.IdentifiedGenesisMetadata = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.client_id !== "") {
            writer.uint32(10).string(message.client_id);
        }
        for (const v of message.client_metadata) {
            exports.GenesisMetadata.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseIdentifiedGenesisMetadata);
        message.client_metadata = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.client_id = reader.string();
                    break;
                case 2:
                    message.client_metadata.push(exports.GenesisMetadata.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseIdentifiedGenesisMetadata);
        message.client_metadata = [];
        if (object.client_id !== undefined && object.client_id !== null) {
            message.client_id = String(object.client_id);
        }
        else {
            message.client_id = "";
        }
        if (object.client_metadata !== undefined &&
            object.client_metadata !== null) {
            for (const e of object.client_metadata) {
                message.client_metadata.push(exports.GenesisMetadata.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.client_id !== undefined && (obj.client_id = message.client_id);
        if (message.client_metadata) {
            obj.client_metadata = message.client_metadata.map((e) => e ? exports.GenesisMetadata.toJSON(e) : undefined);
        }
        else {
            obj.client_metadata = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseIdentifiedGenesisMetadata);
        message.client_metadata = [];
        if (object.client_id !== undefined && object.client_id !== null) {
            message.client_id = object.client_id;
        }
        else {
            message.client_id = "";
        }
        if (object.client_metadata !== undefined &&
            object.client_metadata !== null) {
            for (const e of object.client_metadata) {
                message.client_metadata.push(exports.GenesisMetadata.fromPartial(e));
            }
        }
        return message;
    },
};
