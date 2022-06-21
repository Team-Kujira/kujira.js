/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { ConnectionEnd, IdentifiedConnection, } from "../../../../ibc/core/connection/v1/connection";
import { Height, IdentifiedClientState, } from "../../../../ibc/core/client/v1/client";
import { PageRequest, PageResponse, } from "../../../../cosmos/base/query/v1beta1/pagination";
import { Any } from "../../../../google/protobuf/any";
export const protobufPackage = "ibc.core.connection.v1";
const baseQueryConnectionRequest = { connection_id: "" };
export const QueryConnectionRequest = {
    encode(message, writer = Writer.create()) {
        if (message.connection_id !== "") {
            writer.uint32(10).string(message.connection_id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryConnectionRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.connection_id = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryConnectionRequest);
        if (object.connection_id !== undefined && object.connection_id !== null) {
            message.connection_id = String(object.connection_id);
        }
        else {
            message.connection_id = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.connection_id !== undefined &&
            (obj.connection_id = message.connection_id);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryConnectionRequest);
        if (object.connection_id !== undefined && object.connection_id !== null) {
            message.connection_id = object.connection_id;
        }
        else {
            message.connection_id = "";
        }
        return message;
    },
};
const baseQueryConnectionResponse = {};
export const QueryConnectionResponse = {
    encode(message, writer = Writer.create()) {
        if (message.connection !== undefined) {
            ConnectionEnd.encode(message.connection, writer.uint32(10).fork()).ldelim();
        }
        if (message.proof.length !== 0) {
            writer.uint32(18).bytes(message.proof);
        }
        if (message.proof_height !== undefined) {
            Height.encode(message.proof_height, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryConnectionResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.connection = ConnectionEnd.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.proof = reader.bytes();
                    break;
                case 3:
                    message.proof_height = Height.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryConnectionResponse);
        if (object.connection !== undefined && object.connection !== null) {
            message.connection = ConnectionEnd.fromJSON(object.connection);
        }
        else {
            message.connection = undefined;
        }
        if (object.proof !== undefined && object.proof !== null) {
            message.proof = bytesFromBase64(object.proof);
        }
        if (object.proof_height !== undefined && object.proof_height !== null) {
            message.proof_height = Height.fromJSON(object.proof_height);
        }
        else {
            message.proof_height = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.connection !== undefined &&
            (obj.connection = message.connection
                ? ConnectionEnd.toJSON(message.connection)
                : undefined);
        message.proof !== undefined &&
            (obj.proof = base64FromBytes(message.proof !== undefined ? message.proof : new Uint8Array()));
        message.proof_height !== undefined &&
            (obj.proof_height = message.proof_height
                ? Height.toJSON(message.proof_height)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryConnectionResponse);
        if (object.connection !== undefined && object.connection !== null) {
            message.connection = ConnectionEnd.fromPartial(object.connection);
        }
        else {
            message.connection = undefined;
        }
        if (object.proof !== undefined && object.proof !== null) {
            message.proof = object.proof;
        }
        else {
            message.proof = new Uint8Array();
        }
        if (object.proof_height !== undefined && object.proof_height !== null) {
            message.proof_height = Height.fromPartial(object.proof_height);
        }
        else {
            message.proof_height = undefined;
        }
        return message;
    },
};
const baseQueryConnectionsRequest = {};
export const QueryConnectionsRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryConnectionsRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryConnectionsRequest);
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryConnectionsRequest);
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryConnectionsResponse = {};
export const QueryConnectionsResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.connections) {
            IdentifiedConnection.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        if (message.height !== undefined) {
            Height.encode(message.height, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryConnectionsResponse);
        message.connections = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.connections.push(IdentifiedConnection.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.height = Height.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryConnectionsResponse);
        message.connections = [];
        if (object.connections !== undefined && object.connections !== null) {
            for (const e of object.connections) {
                message.connections.push(IdentifiedConnection.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        if (object.height !== undefined && object.height !== null) {
            message.height = Height.fromJSON(object.height);
        }
        else {
            message.height = undefined;
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
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageResponse.toJSON(message.pagination)
                : undefined);
        message.height !== undefined &&
            (obj.height = message.height ? Height.toJSON(message.height) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryConnectionsResponse);
        message.connections = [];
        if (object.connections !== undefined && object.connections !== null) {
            for (const e of object.connections) {
                message.connections.push(IdentifiedConnection.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        if (object.height !== undefined && object.height !== null) {
            message.height = Height.fromPartial(object.height);
        }
        else {
            message.height = undefined;
        }
        return message;
    },
};
const baseQueryClientConnectionsRequest = { client_id: "" };
export const QueryClientConnectionsRequest = {
    encode(message, writer = Writer.create()) {
        if (message.client_id !== "") {
            writer.uint32(10).string(message.client_id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryClientConnectionsRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.client_id = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryClientConnectionsRequest);
        if (object.client_id !== undefined && object.client_id !== null) {
            message.client_id = String(object.client_id);
        }
        else {
            message.client_id = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.client_id !== undefined && (obj.client_id = message.client_id);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryClientConnectionsRequest);
        if (object.client_id !== undefined && object.client_id !== null) {
            message.client_id = object.client_id;
        }
        else {
            message.client_id = "";
        }
        return message;
    },
};
const baseQueryClientConnectionsResponse = { connection_paths: "" };
export const QueryClientConnectionsResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.connection_paths) {
            writer.uint32(10).string(v);
        }
        if (message.proof.length !== 0) {
            writer.uint32(18).bytes(message.proof);
        }
        if (message.proof_height !== undefined) {
            Height.encode(message.proof_height, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryClientConnectionsResponse);
        message.connection_paths = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.connection_paths.push(reader.string());
                    break;
                case 2:
                    message.proof = reader.bytes();
                    break;
                case 3:
                    message.proof_height = Height.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryClientConnectionsResponse);
        message.connection_paths = [];
        if (object.connection_paths !== undefined &&
            object.connection_paths !== null) {
            for (const e of object.connection_paths) {
                message.connection_paths.push(String(e));
            }
        }
        if (object.proof !== undefined && object.proof !== null) {
            message.proof = bytesFromBase64(object.proof);
        }
        if (object.proof_height !== undefined && object.proof_height !== null) {
            message.proof_height = Height.fromJSON(object.proof_height);
        }
        else {
            message.proof_height = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.connection_paths) {
            obj.connection_paths = message.connection_paths.map((e) => e);
        }
        else {
            obj.connection_paths = [];
        }
        message.proof !== undefined &&
            (obj.proof = base64FromBytes(message.proof !== undefined ? message.proof : new Uint8Array()));
        message.proof_height !== undefined &&
            (obj.proof_height = message.proof_height
                ? Height.toJSON(message.proof_height)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryClientConnectionsResponse);
        message.connection_paths = [];
        if (object.connection_paths !== undefined &&
            object.connection_paths !== null) {
            for (const e of object.connection_paths) {
                message.connection_paths.push(e);
            }
        }
        if (object.proof !== undefined && object.proof !== null) {
            message.proof = object.proof;
        }
        else {
            message.proof = new Uint8Array();
        }
        if (object.proof_height !== undefined && object.proof_height !== null) {
            message.proof_height = Height.fromPartial(object.proof_height);
        }
        else {
            message.proof_height = undefined;
        }
        return message;
    },
};
const baseQueryConnectionClientStateRequest = { connection_id: "" };
export const QueryConnectionClientStateRequest = {
    encode(message, writer = Writer.create()) {
        if (message.connection_id !== "") {
            writer.uint32(10).string(message.connection_id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryConnectionClientStateRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.connection_id = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryConnectionClientStateRequest);
        if (object.connection_id !== undefined && object.connection_id !== null) {
            message.connection_id = String(object.connection_id);
        }
        else {
            message.connection_id = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.connection_id !== undefined &&
            (obj.connection_id = message.connection_id);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryConnectionClientStateRequest);
        if (object.connection_id !== undefined && object.connection_id !== null) {
            message.connection_id = object.connection_id;
        }
        else {
            message.connection_id = "";
        }
        return message;
    },
};
const baseQueryConnectionClientStateResponse = {};
export const QueryConnectionClientStateResponse = {
    encode(message, writer = Writer.create()) {
        if (message.identified_client_state !== undefined) {
            IdentifiedClientState.encode(message.identified_client_state, writer.uint32(10).fork()).ldelim();
        }
        if (message.proof.length !== 0) {
            writer.uint32(18).bytes(message.proof);
        }
        if (message.proof_height !== undefined) {
            Height.encode(message.proof_height, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryConnectionClientStateResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.identified_client_state = IdentifiedClientState.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.proof = reader.bytes();
                    break;
                case 3:
                    message.proof_height = Height.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryConnectionClientStateResponse);
        if (object.identified_client_state !== undefined &&
            object.identified_client_state !== null) {
            message.identified_client_state = IdentifiedClientState.fromJSON(object.identified_client_state);
        }
        else {
            message.identified_client_state = undefined;
        }
        if (object.proof !== undefined && object.proof !== null) {
            message.proof = bytesFromBase64(object.proof);
        }
        if (object.proof_height !== undefined && object.proof_height !== null) {
            message.proof_height = Height.fromJSON(object.proof_height);
        }
        else {
            message.proof_height = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.identified_client_state !== undefined &&
            (obj.identified_client_state = message.identified_client_state
                ? IdentifiedClientState.toJSON(message.identified_client_state)
                : undefined);
        message.proof !== undefined &&
            (obj.proof = base64FromBytes(message.proof !== undefined ? message.proof : new Uint8Array()));
        message.proof_height !== undefined &&
            (obj.proof_height = message.proof_height
                ? Height.toJSON(message.proof_height)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryConnectionClientStateResponse);
        if (object.identified_client_state !== undefined &&
            object.identified_client_state !== null) {
            message.identified_client_state = IdentifiedClientState.fromPartial(object.identified_client_state);
        }
        else {
            message.identified_client_state = undefined;
        }
        if (object.proof !== undefined && object.proof !== null) {
            message.proof = object.proof;
        }
        else {
            message.proof = new Uint8Array();
        }
        if (object.proof_height !== undefined && object.proof_height !== null) {
            message.proof_height = Height.fromPartial(object.proof_height);
        }
        else {
            message.proof_height = undefined;
        }
        return message;
    },
};
const baseQueryConnectionConsensusStateRequest = {
    connection_id: "",
    revision_number: 0,
    revision_height: 0,
};
export const QueryConnectionConsensusStateRequest = {
    encode(message, writer = Writer.create()) {
        if (message.connection_id !== "") {
            writer.uint32(10).string(message.connection_id);
        }
        if (message.revision_number !== 0) {
            writer.uint32(16).uint64(message.revision_number);
        }
        if (message.revision_height !== 0) {
            writer.uint32(24).uint64(message.revision_height);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryConnectionConsensusStateRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.connection_id = reader.string();
                    break;
                case 2:
                    message.revision_number = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.revision_height = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryConnectionConsensusStateRequest);
        if (object.connection_id !== undefined && object.connection_id !== null) {
            message.connection_id = String(object.connection_id);
        }
        else {
            message.connection_id = "";
        }
        if (object.revision_number !== undefined &&
            object.revision_number !== null) {
            message.revision_number = Number(object.revision_number);
        }
        else {
            message.revision_number = 0;
        }
        if (object.revision_height !== undefined &&
            object.revision_height !== null) {
            message.revision_height = Number(object.revision_height);
        }
        else {
            message.revision_height = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.connection_id !== undefined &&
            (obj.connection_id = message.connection_id);
        message.revision_number !== undefined &&
            (obj.revision_number = message.revision_number);
        message.revision_height !== undefined &&
            (obj.revision_height = message.revision_height);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryConnectionConsensusStateRequest);
        if (object.connection_id !== undefined && object.connection_id !== null) {
            message.connection_id = object.connection_id;
        }
        else {
            message.connection_id = "";
        }
        if (object.revision_number !== undefined &&
            object.revision_number !== null) {
            message.revision_number = object.revision_number;
        }
        else {
            message.revision_number = 0;
        }
        if (object.revision_height !== undefined &&
            object.revision_height !== null) {
            message.revision_height = object.revision_height;
        }
        else {
            message.revision_height = 0;
        }
        return message;
    },
};
const baseQueryConnectionConsensusStateResponse = { client_id: "" };
export const QueryConnectionConsensusStateResponse = {
    encode(message, writer = Writer.create()) {
        if (message.consensus_state !== undefined) {
            Any.encode(message.consensus_state, writer.uint32(10).fork()).ldelim();
        }
        if (message.client_id !== "") {
            writer.uint32(18).string(message.client_id);
        }
        if (message.proof.length !== 0) {
            writer.uint32(26).bytes(message.proof);
        }
        if (message.proof_height !== undefined) {
            Height.encode(message.proof_height, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryConnectionConsensusStateResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.consensus_state = Any.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.client_id = reader.string();
                    break;
                case 3:
                    message.proof = reader.bytes();
                    break;
                case 4:
                    message.proof_height = Height.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryConnectionConsensusStateResponse);
        if (object.consensus_state !== undefined &&
            object.consensus_state !== null) {
            message.consensus_state = Any.fromJSON(object.consensus_state);
        }
        else {
            message.consensus_state = undefined;
        }
        if (object.client_id !== undefined && object.client_id !== null) {
            message.client_id = String(object.client_id);
        }
        else {
            message.client_id = "";
        }
        if (object.proof !== undefined && object.proof !== null) {
            message.proof = bytesFromBase64(object.proof);
        }
        if (object.proof_height !== undefined && object.proof_height !== null) {
            message.proof_height = Height.fromJSON(object.proof_height);
        }
        else {
            message.proof_height = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.consensus_state !== undefined &&
            (obj.consensus_state = message.consensus_state
                ? Any.toJSON(message.consensus_state)
                : undefined);
        message.client_id !== undefined && (obj.client_id = message.client_id);
        message.proof !== undefined &&
            (obj.proof = base64FromBytes(message.proof !== undefined ? message.proof : new Uint8Array()));
        message.proof_height !== undefined &&
            (obj.proof_height = message.proof_height
                ? Height.toJSON(message.proof_height)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryConnectionConsensusStateResponse);
        if (object.consensus_state !== undefined &&
            object.consensus_state !== null) {
            message.consensus_state = Any.fromPartial(object.consensus_state);
        }
        else {
            message.consensus_state = undefined;
        }
        if (object.client_id !== undefined && object.client_id !== null) {
            message.client_id = object.client_id;
        }
        else {
            message.client_id = "";
        }
        if (object.proof !== undefined && object.proof !== null) {
            message.proof = object.proof;
        }
        else {
            message.proof = new Uint8Array();
        }
        if (object.proof_height !== undefined && object.proof_height !== null) {
            message.proof_height = Height.fromPartial(object.proof_height);
        }
        else {
            message.proof_height = undefined;
        }
        return message;
    },
};
export class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    Connection(request) {
        const data = QueryConnectionRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.core.connection.v1.Query", "Connection", data);
        return promise.then((data) => QueryConnectionResponse.decode(new Reader(data)));
    }
    Connections(request) {
        const data = QueryConnectionsRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.core.connection.v1.Query", "Connections", data);
        return promise.then((data) => QueryConnectionsResponse.decode(new Reader(data)));
    }
    ClientConnections(request) {
        const data = QueryClientConnectionsRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.core.connection.v1.Query", "ClientConnections", data);
        return promise.then((data) => QueryClientConnectionsResponse.decode(new Reader(data)));
    }
    ConnectionClientState(request) {
        const data = QueryConnectionClientStateRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.core.connection.v1.Query", "ConnectionClientState", data);
        return promise.then((data) => QueryConnectionClientStateResponse.decode(new Reader(data)));
    }
    ConnectionConsensusState(request) {
        const data = QueryConnectionConsensusStateRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.core.connection.v1.Query", "ConnectionConsensusState", data);
        return promise.then((data) => QueryConnectionConsensusStateResponse.decode(new Reader(data)));
    }
}
