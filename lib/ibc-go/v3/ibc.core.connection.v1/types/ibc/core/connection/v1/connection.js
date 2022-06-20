/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { MerklePrefix } from "../../../../ibc/core/commitment/v1/commitment";
export const protobufPackage = "ibc.core.connection.v1";
/**
 * State defines if a connection is in one of the following states:
 * INIT, TRYOPEN, OPEN or UNINITIALIZED.
 */
export var State;
(function (State) {
    /** STATE_UNINITIALIZED_UNSPECIFIED - Default State */
    State[State["STATE_UNINITIALIZED_UNSPECIFIED"] = 0] = "STATE_UNINITIALIZED_UNSPECIFIED";
    /** STATE_INIT - A connection end has just started the opening handshake. */
    State[State["STATE_INIT"] = 1] = "STATE_INIT";
    /**
     * STATE_TRYOPEN - A connection end has acknowledged the handshake step on the counterparty
     * chain.
     */
    State[State["STATE_TRYOPEN"] = 2] = "STATE_TRYOPEN";
    /** STATE_OPEN - A connection end has completed the handshake. */
    State[State["STATE_OPEN"] = 3] = "STATE_OPEN";
    State[State["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(State || (State = {}));
export function stateFromJSON(object) {
    switch (object) {
        case 0:
        case "STATE_UNINITIALIZED_UNSPECIFIED":
            return State.STATE_UNINITIALIZED_UNSPECIFIED;
        case 1:
        case "STATE_INIT":
            return State.STATE_INIT;
        case 2:
        case "STATE_TRYOPEN":
            return State.STATE_TRYOPEN;
        case 3:
        case "STATE_OPEN":
            return State.STATE_OPEN;
        case -1:
        case "UNRECOGNIZED":
        default:
            return State.UNRECOGNIZED;
    }
}
export function stateToJSON(object) {
    switch (object) {
        case State.STATE_UNINITIALIZED_UNSPECIFIED:
            return "STATE_UNINITIALIZED_UNSPECIFIED";
        case State.STATE_INIT:
            return "STATE_INIT";
        case State.STATE_TRYOPEN:
            return "STATE_TRYOPEN";
        case State.STATE_OPEN:
            return "STATE_OPEN";
        default:
            return "UNKNOWN";
    }
}
const baseConnectionEnd = { client_id: "", state: 0, delay_period: 0 };
export const ConnectionEnd = {
    encode(message, writer = Writer.create()) {
        if (message.client_id !== "") {
            writer.uint32(10).string(message.client_id);
        }
        for (const v of message.versions) {
            Version.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.state !== 0) {
            writer.uint32(24).int32(message.state);
        }
        if (message.counterparty !== undefined) {
            Counterparty.encode(message.counterparty, writer.uint32(34).fork()).ldelim();
        }
        if (message.delay_period !== 0) {
            writer.uint32(40).uint64(message.delay_period);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseConnectionEnd);
        message.versions = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.client_id = reader.string();
                    break;
                case 2:
                    message.versions.push(Version.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.state = reader.int32();
                    break;
                case 4:
                    message.counterparty = Counterparty.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.delay_period = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseConnectionEnd);
        message.versions = [];
        if (object.client_id !== undefined && object.client_id !== null) {
            message.client_id = String(object.client_id);
        }
        else {
            message.client_id = "";
        }
        if (object.versions !== undefined && object.versions !== null) {
            for (const e of object.versions) {
                message.versions.push(Version.fromJSON(e));
            }
        }
        if (object.state !== undefined && object.state !== null) {
            message.state = stateFromJSON(object.state);
        }
        else {
            message.state = 0;
        }
        if (object.counterparty !== undefined && object.counterparty !== null) {
            message.counterparty = Counterparty.fromJSON(object.counterparty);
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
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.client_id !== undefined && (obj.client_id = message.client_id);
        if (message.versions) {
            obj.versions = message.versions.map((e) => e ? Version.toJSON(e) : undefined);
        }
        else {
            obj.versions = [];
        }
        message.state !== undefined && (obj.state = stateToJSON(message.state));
        message.counterparty !== undefined &&
            (obj.counterparty = message.counterparty
                ? Counterparty.toJSON(message.counterparty)
                : undefined);
        message.delay_period !== undefined &&
            (obj.delay_period = message.delay_period);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseConnectionEnd);
        message.versions = [];
        if (object.client_id !== undefined && object.client_id !== null) {
            message.client_id = object.client_id;
        }
        else {
            message.client_id = "";
        }
        if (object.versions !== undefined && object.versions !== null) {
            for (const e of object.versions) {
                message.versions.push(Version.fromPartial(e));
            }
        }
        if (object.state !== undefined && object.state !== null) {
            message.state = object.state;
        }
        else {
            message.state = 0;
        }
        if (object.counterparty !== undefined && object.counterparty !== null) {
            message.counterparty = Counterparty.fromPartial(object.counterparty);
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
        return message;
    },
};
const baseIdentifiedConnection = {
    id: "",
    client_id: "",
    state: 0,
    delay_period: 0,
};
export const IdentifiedConnection = {
    encode(message, writer = Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.client_id !== "") {
            writer.uint32(18).string(message.client_id);
        }
        for (const v of message.versions) {
            Version.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.state !== 0) {
            writer.uint32(32).int32(message.state);
        }
        if (message.counterparty !== undefined) {
            Counterparty.encode(message.counterparty, writer.uint32(42).fork()).ldelim();
        }
        if (message.delay_period !== 0) {
            writer.uint32(48).uint64(message.delay_period);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseIdentifiedConnection);
        message.versions = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.client_id = reader.string();
                    break;
                case 3:
                    message.versions.push(Version.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.state = reader.int32();
                    break;
                case 5:
                    message.counterparty = Counterparty.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.delay_period = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseIdentifiedConnection);
        message.versions = [];
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        else {
            message.id = "";
        }
        if (object.client_id !== undefined && object.client_id !== null) {
            message.client_id = String(object.client_id);
        }
        else {
            message.client_id = "";
        }
        if (object.versions !== undefined && object.versions !== null) {
            for (const e of object.versions) {
                message.versions.push(Version.fromJSON(e));
            }
        }
        if (object.state !== undefined && object.state !== null) {
            message.state = stateFromJSON(object.state);
        }
        else {
            message.state = 0;
        }
        if (object.counterparty !== undefined && object.counterparty !== null) {
            message.counterparty = Counterparty.fromJSON(object.counterparty);
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
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.client_id !== undefined && (obj.client_id = message.client_id);
        if (message.versions) {
            obj.versions = message.versions.map((e) => e ? Version.toJSON(e) : undefined);
        }
        else {
            obj.versions = [];
        }
        message.state !== undefined && (obj.state = stateToJSON(message.state));
        message.counterparty !== undefined &&
            (obj.counterparty = message.counterparty
                ? Counterparty.toJSON(message.counterparty)
                : undefined);
        message.delay_period !== undefined &&
            (obj.delay_period = message.delay_period);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseIdentifiedConnection);
        message.versions = [];
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = "";
        }
        if (object.client_id !== undefined && object.client_id !== null) {
            message.client_id = object.client_id;
        }
        else {
            message.client_id = "";
        }
        if (object.versions !== undefined && object.versions !== null) {
            for (const e of object.versions) {
                message.versions.push(Version.fromPartial(e));
            }
        }
        if (object.state !== undefined && object.state !== null) {
            message.state = object.state;
        }
        else {
            message.state = 0;
        }
        if (object.counterparty !== undefined && object.counterparty !== null) {
            message.counterparty = Counterparty.fromPartial(object.counterparty);
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
        return message;
    },
};
const baseCounterparty = { client_id: "", connection_id: "" };
export const Counterparty = {
    encode(message, writer = Writer.create()) {
        if (message.client_id !== "") {
            writer.uint32(10).string(message.client_id);
        }
        if (message.connection_id !== "") {
            writer.uint32(18).string(message.connection_id);
        }
        if (message.prefix !== undefined) {
            MerklePrefix.encode(message.prefix, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCounterparty);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.client_id = reader.string();
                    break;
                case 2:
                    message.connection_id = reader.string();
                    break;
                case 3:
                    message.prefix = MerklePrefix.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseCounterparty);
        if (object.client_id !== undefined && object.client_id !== null) {
            message.client_id = String(object.client_id);
        }
        else {
            message.client_id = "";
        }
        if (object.connection_id !== undefined && object.connection_id !== null) {
            message.connection_id = String(object.connection_id);
        }
        else {
            message.connection_id = "";
        }
        if (object.prefix !== undefined && object.prefix !== null) {
            message.prefix = MerklePrefix.fromJSON(object.prefix);
        }
        else {
            message.prefix = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.client_id !== undefined && (obj.client_id = message.client_id);
        message.connection_id !== undefined &&
            (obj.connection_id = message.connection_id);
        message.prefix !== undefined &&
            (obj.prefix = message.prefix
                ? MerklePrefix.toJSON(message.prefix)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseCounterparty);
        if (object.client_id !== undefined && object.client_id !== null) {
            message.client_id = object.client_id;
        }
        else {
            message.client_id = "";
        }
        if (object.connection_id !== undefined && object.connection_id !== null) {
            message.connection_id = object.connection_id;
        }
        else {
            message.connection_id = "";
        }
        if (object.prefix !== undefined && object.prefix !== null) {
            message.prefix = MerklePrefix.fromPartial(object.prefix);
        }
        else {
            message.prefix = undefined;
        }
        return message;
    },
};
const baseClientPaths = { paths: "" };
export const ClientPaths = {
    encode(message, writer = Writer.create()) {
        for (const v of message.paths) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseClientPaths);
        message.paths = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.paths.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseClientPaths);
        message.paths = [];
        if (object.paths !== undefined && object.paths !== null) {
            for (const e of object.paths) {
                message.paths.push(String(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.paths) {
            obj.paths = message.paths.map((e) => e);
        }
        else {
            obj.paths = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseClientPaths);
        message.paths = [];
        if (object.paths !== undefined && object.paths !== null) {
            for (const e of object.paths) {
                message.paths.push(e);
            }
        }
        return message;
    },
};
const baseConnectionPaths = { client_id: "", paths: "" };
export const ConnectionPaths = {
    encode(message, writer = Writer.create()) {
        if (message.client_id !== "") {
            writer.uint32(10).string(message.client_id);
        }
        for (const v of message.paths) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseConnectionPaths);
        message.paths = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.client_id = reader.string();
                    break;
                case 2:
                    message.paths.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseConnectionPaths);
        message.paths = [];
        if (object.client_id !== undefined && object.client_id !== null) {
            message.client_id = String(object.client_id);
        }
        else {
            message.client_id = "";
        }
        if (object.paths !== undefined && object.paths !== null) {
            for (const e of object.paths) {
                message.paths.push(String(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.client_id !== undefined && (obj.client_id = message.client_id);
        if (message.paths) {
            obj.paths = message.paths.map((e) => e);
        }
        else {
            obj.paths = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseConnectionPaths);
        message.paths = [];
        if (object.client_id !== undefined && object.client_id !== null) {
            message.client_id = object.client_id;
        }
        else {
            message.client_id = "";
        }
        if (object.paths !== undefined && object.paths !== null) {
            for (const e of object.paths) {
                message.paths.push(e);
            }
        }
        return message;
    },
};
const baseVersion = { identifier: "", features: "" };
export const Version = {
    encode(message, writer = Writer.create()) {
        if (message.identifier !== "") {
            writer.uint32(10).string(message.identifier);
        }
        for (const v of message.features) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseVersion);
        message.features = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.identifier = reader.string();
                    break;
                case 2:
                    message.features.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseVersion);
        message.features = [];
        if (object.identifier !== undefined && object.identifier !== null) {
            message.identifier = String(object.identifier);
        }
        else {
            message.identifier = "";
        }
        if (object.features !== undefined && object.features !== null) {
            for (const e of object.features) {
                message.features.push(String(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.identifier !== undefined && (obj.identifier = message.identifier);
        if (message.features) {
            obj.features = message.features.map((e) => e);
        }
        else {
            obj.features = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseVersion);
        message.features = [];
        if (object.identifier !== undefined && object.identifier !== null) {
            message.identifier = object.identifier;
        }
        else {
            message.identifier = "";
        }
        if (object.features !== undefined && object.features !== null) {
            for (const e of object.features) {
                message.features.push(e);
            }
        }
        return message;
    },
};
const baseParams = { max_expected_time_per_block: 0 };
export const Params = {
    encode(message, writer = Writer.create()) {
        if (message.max_expected_time_per_block !== 0) {
            writer.uint32(8).uint64(message.max_expected_time_per_block);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseParams);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.max_expected_time_per_block = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseParams);
        if (object.max_expected_time_per_block !== undefined &&
            object.max_expected_time_per_block !== null) {
            message.max_expected_time_per_block = Number(object.max_expected_time_per_block);
        }
        else {
            message.max_expected_time_per_block = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.max_expected_time_per_block !== undefined &&
            (obj.max_expected_time_per_block = message.max_expected_time_per_block);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseParams);
        if (object.max_expected_time_per_block !== undefined &&
            object.max_expected_time_per_block !== null) {
            message.max_expected_time_per_block = object.max_expected_time_per_block;
        }
        else {
            message.max_expected_time_per_block = 0;
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
