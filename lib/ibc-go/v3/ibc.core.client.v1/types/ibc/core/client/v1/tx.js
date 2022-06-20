/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Any } from "../../../../google/protobuf/any";
export const protobufPackage = "ibc.core.client.v1";
const baseMsgCreateClient = { signer: "" };
export const MsgCreateClient = {
    encode(message, writer = Writer.create()) {
        if (message.client_state !== undefined) {
            Any.encode(message.client_state, writer.uint32(10).fork()).ldelim();
        }
        if (message.consensus_state !== undefined) {
            Any.encode(message.consensus_state, writer.uint32(18).fork()).ldelim();
        }
        if (message.signer !== "") {
            writer.uint32(26).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgCreateClient);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.client_state = Any.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.consensus_state = Any.decode(reader, reader.uint32());
                    break;
                case 3:
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
        const message = Object.assign({}, baseMsgCreateClient);
        if (object.client_state !== undefined && object.client_state !== null) {
            message.client_state = Any.fromJSON(object.client_state);
        }
        else {
            message.client_state = undefined;
        }
        if (object.consensus_state !== undefined &&
            object.consensus_state !== null) {
            message.consensus_state = Any.fromJSON(object.consensus_state);
        }
        else {
            message.consensus_state = undefined;
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
        message.client_state !== undefined &&
            (obj.client_state = message.client_state
                ? Any.toJSON(message.client_state)
                : undefined);
        message.consensus_state !== undefined &&
            (obj.consensus_state = message.consensus_state
                ? Any.toJSON(message.consensus_state)
                : undefined);
        message.signer !== undefined && (obj.signer = message.signer);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMsgCreateClient);
        if (object.client_state !== undefined && object.client_state !== null) {
            message.client_state = Any.fromPartial(object.client_state);
        }
        else {
            message.client_state = undefined;
        }
        if (object.consensus_state !== undefined &&
            object.consensus_state !== null) {
            message.consensus_state = Any.fromPartial(object.consensus_state);
        }
        else {
            message.consensus_state = undefined;
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
const baseMsgCreateClientResponse = {};
export const MsgCreateClientResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgCreateClientResponse);
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
        const message = Object.assign({}, baseMsgCreateClientResponse);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseMsgCreateClientResponse);
        return message;
    },
};
const baseMsgUpdateClient = { client_id: "", signer: "" };
export const MsgUpdateClient = {
    encode(message, writer = Writer.create()) {
        if (message.client_id !== "") {
            writer.uint32(10).string(message.client_id);
        }
        if (message.header !== undefined) {
            Any.encode(message.header, writer.uint32(18).fork()).ldelim();
        }
        if (message.signer !== "") {
            writer.uint32(26).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgUpdateClient);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.client_id = reader.string();
                    break;
                case 2:
                    message.header = Any.decode(reader, reader.uint32());
                    break;
                case 3:
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
        const message = Object.assign({}, baseMsgUpdateClient);
        if (object.client_id !== undefined && object.client_id !== null) {
            message.client_id = String(object.client_id);
        }
        else {
            message.client_id = "";
        }
        if (object.header !== undefined && object.header !== null) {
            message.header = Any.fromJSON(object.header);
        }
        else {
            message.header = undefined;
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
        message.header !== undefined &&
            (obj.header = message.header ? Any.toJSON(message.header) : undefined);
        message.signer !== undefined && (obj.signer = message.signer);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMsgUpdateClient);
        if (object.client_id !== undefined && object.client_id !== null) {
            message.client_id = object.client_id;
        }
        else {
            message.client_id = "";
        }
        if (object.header !== undefined && object.header !== null) {
            message.header = Any.fromPartial(object.header);
        }
        else {
            message.header = undefined;
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
const baseMsgUpdateClientResponse = {};
export const MsgUpdateClientResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgUpdateClientResponse);
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
        const message = Object.assign({}, baseMsgUpdateClientResponse);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseMsgUpdateClientResponse);
        return message;
    },
};
const baseMsgUpgradeClient = { client_id: "", signer: "" };
export const MsgUpgradeClient = {
    encode(message, writer = Writer.create()) {
        if (message.client_id !== "") {
            writer.uint32(10).string(message.client_id);
        }
        if (message.client_state !== undefined) {
            Any.encode(message.client_state, writer.uint32(18).fork()).ldelim();
        }
        if (message.consensus_state !== undefined) {
            Any.encode(message.consensus_state, writer.uint32(26).fork()).ldelim();
        }
        if (message.proof_upgrade_client.length !== 0) {
            writer.uint32(34).bytes(message.proof_upgrade_client);
        }
        if (message.proof_upgrade_consensus_state.length !== 0) {
            writer.uint32(42).bytes(message.proof_upgrade_consensus_state);
        }
        if (message.signer !== "") {
            writer.uint32(50).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgUpgradeClient);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.client_id = reader.string();
                    break;
                case 2:
                    message.client_state = Any.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.consensus_state = Any.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.proof_upgrade_client = reader.bytes();
                    break;
                case 5:
                    message.proof_upgrade_consensus_state = reader.bytes();
                    break;
                case 6:
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
        const message = Object.assign({}, baseMsgUpgradeClient);
        if (object.client_id !== undefined && object.client_id !== null) {
            message.client_id = String(object.client_id);
        }
        else {
            message.client_id = "";
        }
        if (object.client_state !== undefined && object.client_state !== null) {
            message.client_state = Any.fromJSON(object.client_state);
        }
        else {
            message.client_state = undefined;
        }
        if (object.consensus_state !== undefined &&
            object.consensus_state !== null) {
            message.consensus_state = Any.fromJSON(object.consensus_state);
        }
        else {
            message.consensus_state = undefined;
        }
        if (object.proof_upgrade_client !== undefined &&
            object.proof_upgrade_client !== null) {
            message.proof_upgrade_client = bytesFromBase64(object.proof_upgrade_client);
        }
        if (object.proof_upgrade_consensus_state !== undefined &&
            object.proof_upgrade_consensus_state !== null) {
            message.proof_upgrade_consensus_state = bytesFromBase64(object.proof_upgrade_consensus_state);
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
        message.client_state !== undefined &&
            (obj.client_state = message.client_state
                ? Any.toJSON(message.client_state)
                : undefined);
        message.consensus_state !== undefined &&
            (obj.consensus_state = message.consensus_state
                ? Any.toJSON(message.consensus_state)
                : undefined);
        message.proof_upgrade_client !== undefined &&
            (obj.proof_upgrade_client = base64FromBytes(message.proof_upgrade_client !== undefined
                ? message.proof_upgrade_client
                : new Uint8Array()));
        message.proof_upgrade_consensus_state !== undefined &&
            (obj.proof_upgrade_consensus_state = base64FromBytes(message.proof_upgrade_consensus_state !== undefined
                ? message.proof_upgrade_consensus_state
                : new Uint8Array()));
        message.signer !== undefined && (obj.signer = message.signer);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMsgUpgradeClient);
        if (object.client_id !== undefined && object.client_id !== null) {
            message.client_id = object.client_id;
        }
        else {
            message.client_id = "";
        }
        if (object.client_state !== undefined && object.client_state !== null) {
            message.client_state = Any.fromPartial(object.client_state);
        }
        else {
            message.client_state = undefined;
        }
        if (object.consensus_state !== undefined &&
            object.consensus_state !== null) {
            message.consensus_state = Any.fromPartial(object.consensus_state);
        }
        else {
            message.consensus_state = undefined;
        }
        if (object.proof_upgrade_client !== undefined &&
            object.proof_upgrade_client !== null) {
            message.proof_upgrade_client = object.proof_upgrade_client;
        }
        else {
            message.proof_upgrade_client = new Uint8Array();
        }
        if (object.proof_upgrade_consensus_state !== undefined &&
            object.proof_upgrade_consensus_state !== null) {
            message.proof_upgrade_consensus_state =
                object.proof_upgrade_consensus_state;
        }
        else {
            message.proof_upgrade_consensus_state = new Uint8Array();
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
const baseMsgUpgradeClientResponse = {};
export const MsgUpgradeClientResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgUpgradeClientResponse);
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
        const message = Object.assign({}, baseMsgUpgradeClientResponse);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseMsgUpgradeClientResponse);
        return message;
    },
};
const baseMsgSubmitMisbehaviour = { client_id: "", signer: "" };
export const MsgSubmitMisbehaviour = {
    encode(message, writer = Writer.create()) {
        if (message.client_id !== "") {
            writer.uint32(10).string(message.client_id);
        }
        if (message.misbehaviour !== undefined) {
            Any.encode(message.misbehaviour, writer.uint32(18).fork()).ldelim();
        }
        if (message.signer !== "") {
            writer.uint32(26).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgSubmitMisbehaviour);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.client_id = reader.string();
                    break;
                case 2:
                    message.misbehaviour = Any.decode(reader, reader.uint32());
                    break;
                case 3:
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
        const message = Object.assign({}, baseMsgSubmitMisbehaviour);
        if (object.client_id !== undefined && object.client_id !== null) {
            message.client_id = String(object.client_id);
        }
        else {
            message.client_id = "";
        }
        if (object.misbehaviour !== undefined && object.misbehaviour !== null) {
            message.misbehaviour = Any.fromJSON(object.misbehaviour);
        }
        else {
            message.misbehaviour = undefined;
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
        message.misbehaviour !== undefined &&
            (obj.misbehaviour = message.misbehaviour
                ? Any.toJSON(message.misbehaviour)
                : undefined);
        message.signer !== undefined && (obj.signer = message.signer);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMsgSubmitMisbehaviour);
        if (object.client_id !== undefined && object.client_id !== null) {
            message.client_id = object.client_id;
        }
        else {
            message.client_id = "";
        }
        if (object.misbehaviour !== undefined && object.misbehaviour !== null) {
            message.misbehaviour = Any.fromPartial(object.misbehaviour);
        }
        else {
            message.misbehaviour = undefined;
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
const baseMsgSubmitMisbehaviourResponse = {};
export const MsgSubmitMisbehaviourResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgSubmitMisbehaviourResponse);
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
        const message = Object.assign({}, baseMsgSubmitMisbehaviourResponse);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseMsgSubmitMisbehaviourResponse);
        return message;
    },
};
export class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    CreateClient(request) {
        const data = MsgCreateClient.encode(request).finish();
        const promise = this.rpc.request("ibc.core.client.v1.Msg", "CreateClient", data);
        return promise.then((data) => MsgCreateClientResponse.decode(new Reader(data)));
    }
    UpdateClient(request) {
        const data = MsgUpdateClient.encode(request).finish();
        const promise = this.rpc.request("ibc.core.client.v1.Msg", "UpdateClient", data);
        return promise.then((data) => MsgUpdateClientResponse.decode(new Reader(data)));
    }
    UpgradeClient(request) {
        const data = MsgUpgradeClient.encode(request).finish();
        const promise = this.rpc.request("ibc.core.client.v1.Msg", "UpgradeClient", data);
        return promise.then((data) => MsgUpgradeClientResponse.decode(new Reader(data)));
    }
    SubmitMisbehaviour(request) {
        const data = MsgSubmitMisbehaviour.encode(request).finish();
        const promise = this.rpc.request("ibc.core.client.v1.Msg", "SubmitMisbehaviour", data);
        return promise.then((data) => MsgSubmitMisbehaviourResponse.decode(new Reader(data)));
    }
}
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
const atob = globalThis.atob ||
    ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64) {
    const bin = atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
        arr[i] = bin.charCodeAt(i);
    }
    return arr;
}
const btoa = globalThis.btoa ||
    ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr) {
    const bin = [];
    for (let i = 0; i < arr.byteLength; ++i) {
        bin.push(String.fromCharCode(arr[i]));
    }
    return btoa(bin.join(""));
}
