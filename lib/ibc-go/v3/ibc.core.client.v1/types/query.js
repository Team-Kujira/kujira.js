/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Height, IdentifiedClientState, ConsensusStateWithHeight, Params, } from "./client";
import { bytesFromBase64, base64FromBytes, longToNumber, } from "../../../../types";
import { PageRequest, PageResponse, } from "../../../../types/cosmos/base/query/pagination";
import { Any } from "../../../../types/google/protobuf/any";
export const protobufPackage = "ibc.core.client.v1";
const baseQueryClientStateRequest = { client_id: "" };
export const QueryClientStateRequest = {
    encode(message, writer = Writer.create()) {
        if (message.client_id !== "") {
            writer.uint32(10).string(message.client_id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryClientStateRequest);
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
        const message = Object.assign({}, baseQueryClientStateRequest);
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
        const message = Object.assign({}, baseQueryClientStateRequest);
        if (object.client_id !== undefined && object.client_id !== null) {
            message.client_id = object.client_id;
        }
        else {
            message.client_id = "";
        }
        return message;
    },
};
const baseQueryClientStateResponse = {};
export const QueryClientStateResponse = {
    encode(message, writer = Writer.create()) {
        if (message.client_state !== undefined) {
            Any.encode(message.client_state, writer.uint32(10).fork()).ldelim();
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
        const message = Object.assign({}, baseQueryClientStateResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.client_state = Any.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseQueryClientStateResponse);
        if (object.client_state !== undefined && object.client_state !== null) {
            message.client_state = Any.fromJSON(object.client_state);
        }
        else {
            message.client_state = undefined;
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
        message.client_state !== undefined &&
            (obj.client_state = message.client_state
                ? Any.toJSON(message.client_state)
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
        const message = Object.assign({}, baseQueryClientStateResponse);
        if (object.client_state !== undefined && object.client_state !== null) {
            message.client_state = Any.fromPartial(object.client_state);
        }
        else {
            message.client_state = undefined;
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
const baseQueryClientStatesRequest = {};
export const QueryClientStatesRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryClientStatesRequest);
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
        const message = Object.assign({}, baseQueryClientStatesRequest);
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
        const message = Object.assign({}, baseQueryClientStatesRequest);
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryClientStatesResponse = {};
export const QueryClientStatesResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.client_states) {
            IdentifiedClientState.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryClientStatesResponse);
        message.client_states = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.client_states.push(IdentifiedClientState.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryClientStatesResponse);
        message.client_states = [];
        if (object.client_states !== undefined && object.client_states !== null) {
            for (const e of object.client_states) {
                message.client_states.push(IdentifiedClientState.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.client_states) {
            obj.client_states = message.client_states.map((e) => e ? IdentifiedClientState.toJSON(e) : undefined);
        }
        else {
            obj.client_states = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryClientStatesResponse);
        message.client_states = [];
        if (object.client_states !== undefined && object.client_states !== null) {
            for (const e of object.client_states) {
                message.client_states.push(IdentifiedClientState.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryConsensusStateRequest = {
    client_id: "",
    revision_number: 0,
    revision_height: 0,
    latest_height: false,
};
export const QueryConsensusStateRequest = {
    encode(message, writer = Writer.create()) {
        if (message.client_id !== "") {
            writer.uint32(10).string(message.client_id);
        }
        if (message.revision_number !== 0) {
            writer.uint32(16).uint64(message.revision_number);
        }
        if (message.revision_height !== 0) {
            writer.uint32(24).uint64(message.revision_height);
        }
        if (message.latest_height === true) {
            writer.uint32(32).bool(message.latest_height);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryConsensusStateRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.client_id = reader.string();
                    break;
                case 2:
                    message.revision_number = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.revision_height = longToNumber(reader.uint64());
                    break;
                case 4:
                    message.latest_height = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryConsensusStateRequest);
        if (object.client_id !== undefined && object.client_id !== null) {
            message.client_id = String(object.client_id);
        }
        else {
            message.client_id = "";
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
        if (object.latest_height !== undefined && object.latest_height !== null) {
            message.latest_height = Boolean(object.latest_height);
        }
        else {
            message.latest_height = false;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.client_id !== undefined && (obj.client_id = message.client_id);
        message.revision_number !== undefined &&
            (obj.revision_number = message.revision_number);
        message.revision_height !== undefined &&
            (obj.revision_height = message.revision_height);
        message.latest_height !== undefined &&
            (obj.latest_height = message.latest_height);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryConsensusStateRequest);
        if (object.client_id !== undefined && object.client_id !== null) {
            message.client_id = object.client_id;
        }
        else {
            message.client_id = "";
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
        if (object.latest_height !== undefined && object.latest_height !== null) {
            message.latest_height = object.latest_height;
        }
        else {
            message.latest_height = false;
        }
        return message;
    },
};
const baseQueryConsensusStateResponse = {};
export const QueryConsensusStateResponse = {
    encode(message, writer = Writer.create()) {
        if (message.consensus_state !== undefined) {
            Any.encode(message.consensus_state, writer.uint32(10).fork()).ldelim();
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
        const message = Object.assign({}, baseQueryConsensusStateResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.consensus_state = Any.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseQueryConsensusStateResponse);
        if (object.consensus_state !== undefined &&
            object.consensus_state !== null) {
            message.consensus_state = Any.fromJSON(object.consensus_state);
        }
        else {
            message.consensus_state = undefined;
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
        message.proof !== undefined &&
            (obj.proof = base64FromBytes(message.proof !== undefined ? message.proof : new Uint8Array()));
        message.proof_height !== undefined &&
            (obj.proof_height = message.proof_height
                ? Height.toJSON(message.proof_height)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryConsensusStateResponse);
        if (object.consensus_state !== undefined &&
            object.consensus_state !== null) {
            message.consensus_state = Any.fromPartial(object.consensus_state);
        }
        else {
            message.consensus_state = undefined;
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
const baseQueryConsensusStatesRequest = { client_id: "" };
export const QueryConsensusStatesRequest = {
    encode(message, writer = Writer.create()) {
        if (message.client_id !== "") {
            writer.uint32(10).string(message.client_id);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryConsensusStatesRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.client_id = reader.string();
                    break;
                case 2:
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
        const message = Object.assign({}, baseQueryConsensusStatesRequest);
        if (object.client_id !== undefined && object.client_id !== null) {
            message.client_id = String(object.client_id);
        }
        else {
            message.client_id = "";
        }
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
        message.client_id !== undefined && (obj.client_id = message.client_id);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryConsensusStatesRequest);
        if (object.client_id !== undefined && object.client_id !== null) {
            message.client_id = object.client_id;
        }
        else {
            message.client_id = "";
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryConsensusStatesResponse = {};
export const QueryConsensusStatesResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.consensus_states) {
            ConsensusStateWithHeight.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryConsensusStatesResponse);
        message.consensus_states = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.consensus_states.push(ConsensusStateWithHeight.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryConsensusStatesResponse);
        message.consensus_states = [];
        if (object.consensus_states !== undefined &&
            object.consensus_states !== null) {
            for (const e of object.consensus_states) {
                message.consensus_states.push(ConsensusStateWithHeight.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.consensus_states) {
            obj.consensus_states = message.consensus_states.map((e) => e ? ConsensusStateWithHeight.toJSON(e) : undefined);
        }
        else {
            obj.consensus_states = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryConsensusStatesResponse);
        message.consensus_states = [];
        if (object.consensus_states !== undefined &&
            object.consensus_states !== null) {
            for (const e of object.consensus_states) {
                message.consensus_states.push(ConsensusStateWithHeight.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryClientStatusRequest = { client_id: "" };
export const QueryClientStatusRequest = {
    encode(message, writer = Writer.create()) {
        if (message.client_id !== "") {
            writer.uint32(10).string(message.client_id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryClientStatusRequest);
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
        const message = Object.assign({}, baseQueryClientStatusRequest);
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
        const message = Object.assign({}, baseQueryClientStatusRequest);
        if (object.client_id !== undefined && object.client_id !== null) {
            message.client_id = object.client_id;
        }
        else {
            message.client_id = "";
        }
        return message;
    },
};
const baseQueryClientStatusResponse = { status: "" };
export const QueryClientStatusResponse = {
    encode(message, writer = Writer.create()) {
        if (message.status !== "") {
            writer.uint32(10).string(message.status);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryClientStatusResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.status = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryClientStatusResponse);
        if (object.status !== undefined && object.status !== null) {
            message.status = String(object.status);
        }
        else {
            message.status = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.status !== undefined && (obj.status = message.status);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryClientStatusResponse);
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
        }
        else {
            message.status = "";
        }
        return message;
    },
};
const baseQueryClientParamsRequest = {};
export const QueryClientParamsRequest = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryClientParamsRequest);
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
        const message = Object.assign({}, baseQueryClientParamsRequest);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseQueryClientParamsRequest);
        return message;
    },
};
const baseQueryClientParamsResponse = {};
export const QueryClientParamsResponse = {
    encode(message, writer = Writer.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryClientParamsResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const message = Object.assign({}, baseQueryClientParamsResponse);
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
        message.params !== undefined &&
            (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryClientParamsResponse);
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromPartial(object.params);
        }
        else {
            message.params = undefined;
        }
        return message;
    },
};
const baseQueryUpgradedClientStateRequest = {};
export const QueryUpgradedClientStateRequest = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryUpgradedClientStateRequest);
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
        const message = Object.assign({}, baseQueryUpgradedClientStateRequest);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseQueryUpgradedClientStateRequest);
        return message;
    },
};
const baseQueryUpgradedClientStateResponse = {};
export const QueryUpgradedClientStateResponse = {
    encode(message, writer = Writer.create()) {
        if (message.upgraded_client_state !== undefined) {
            Any.encode(message.upgraded_client_state, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryUpgradedClientStateResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.upgraded_client_state = Any.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryUpgradedClientStateResponse);
        if (object.upgraded_client_state !== undefined &&
            object.upgraded_client_state !== null) {
            message.upgraded_client_state = Any.fromJSON(object.upgraded_client_state);
        }
        else {
            message.upgraded_client_state = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.upgraded_client_state !== undefined &&
            (obj.upgraded_client_state = message.upgraded_client_state
                ? Any.toJSON(message.upgraded_client_state)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryUpgradedClientStateResponse);
        if (object.upgraded_client_state !== undefined &&
            object.upgraded_client_state !== null) {
            message.upgraded_client_state = Any.fromPartial(object.upgraded_client_state);
        }
        else {
            message.upgraded_client_state = undefined;
        }
        return message;
    },
};
const baseQueryUpgradedConsensusStateRequest = {};
export const QueryUpgradedConsensusStateRequest = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryUpgradedConsensusStateRequest);
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
        const message = Object.assign({}, baseQueryUpgradedConsensusStateRequest);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseQueryUpgradedConsensusStateRequest);
        return message;
    },
};
const baseQueryUpgradedConsensusStateResponse = {};
export const QueryUpgradedConsensusStateResponse = {
    encode(message, writer = Writer.create()) {
        if (message.upgraded_consensus_state !== undefined) {
            Any.encode(message.upgraded_consensus_state, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryUpgradedConsensusStateResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.upgraded_consensus_state = Any.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryUpgradedConsensusStateResponse);
        if (object.upgraded_consensus_state !== undefined &&
            object.upgraded_consensus_state !== null) {
            message.upgraded_consensus_state = Any.fromJSON(object.upgraded_consensus_state);
        }
        else {
            message.upgraded_consensus_state = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.upgraded_consensus_state !== undefined &&
            (obj.upgraded_consensus_state = message.upgraded_consensus_state
                ? Any.toJSON(message.upgraded_consensus_state)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryUpgradedConsensusStateResponse);
        if (object.upgraded_consensus_state !== undefined &&
            object.upgraded_consensus_state !== null) {
            message.upgraded_consensus_state = Any.fromPartial(object.upgraded_consensus_state);
        }
        else {
            message.upgraded_consensus_state = undefined;
        }
        return message;
    },
};
export class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    ClientState(request) {
        const data = QueryClientStateRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.core.client.v1.Query", "ClientState", data);
        return promise.then((data) => QueryClientStateResponse.decode(new Reader(data)));
    }
    ClientStates(request) {
        const data = QueryClientStatesRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.core.client.v1.Query", "ClientStates", data);
        return promise.then((data) => QueryClientStatesResponse.decode(new Reader(data)));
    }
    ConsensusState(request) {
        const data = QueryConsensusStateRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.core.client.v1.Query", "ConsensusState", data);
        return promise.then((data) => QueryConsensusStateResponse.decode(new Reader(data)));
    }
    ConsensusStates(request) {
        const data = QueryConsensusStatesRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.core.client.v1.Query", "ConsensusStates", data);
        return promise.then((data) => QueryConsensusStatesResponse.decode(new Reader(data)));
    }
    ClientStatus(request) {
        const data = QueryClientStatusRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.core.client.v1.Query", "ClientStatus", data);
        return promise.then((data) => QueryClientStatusResponse.decode(new Reader(data)));
    }
    ClientParams(request) {
        const data = QueryClientParamsRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.core.client.v1.Query", "ClientParams", data);
        return promise.then((data) => QueryClientParamsResponse.decode(new Reader(data)));
    }
    UpgradedClientState(request) {
        const data = QueryUpgradedClientStateRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.core.client.v1.Query", "UpgradedClientState", data);
        return promise.then((data) => QueryUpgradedClientStateResponse.decode(new Reader(data)));
    }
    UpgradedConsensusState(request) {
        const data = QueryUpgradedConsensusStateRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.core.client.v1.Query", "UpgradedConsensusState", data);
        return promise.then((data) => QueryUpgradedConsensusStateResponse.decode(new Reader(data)));
    }
}
