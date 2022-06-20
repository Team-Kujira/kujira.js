/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import Long from "long";
import { Plan, ModuleVersion } from "../../../cosmos/upgrade/v1beta1/upgrade";
export const protobufPackage = "cosmos.upgrade.v1beta1";
const baseQueryCurrentPlanRequest = {};
export const QueryCurrentPlanRequest = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryCurrentPlanRequest);
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
        const message = Object.assign({}, baseQueryCurrentPlanRequest);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseQueryCurrentPlanRequest);
        return message;
    },
};
const baseQueryCurrentPlanResponse = {};
export const QueryCurrentPlanResponse = {
    encode(message, writer = Writer.create()) {
        if (message.plan !== undefined) {
            Plan.encode(message.plan, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryCurrentPlanResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.plan = Plan.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryCurrentPlanResponse);
        if (object.plan !== undefined && object.plan !== null) {
            message.plan = Plan.fromJSON(object.plan);
        }
        else {
            message.plan = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.plan !== undefined &&
            (obj.plan = message.plan ? Plan.toJSON(message.plan) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryCurrentPlanResponse);
        if (object.plan !== undefined && object.plan !== null) {
            message.plan = Plan.fromPartial(object.plan);
        }
        else {
            message.plan = undefined;
        }
        return message;
    },
};
const baseQueryAppliedPlanRequest = { name: "" };
export const QueryAppliedPlanRequest = {
    encode(message, writer = Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryAppliedPlanRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryAppliedPlanRequest);
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryAppliedPlanRequest);
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = "";
        }
        return message;
    },
};
const baseQueryAppliedPlanResponse = { height: 0 };
export const QueryAppliedPlanResponse = {
    encode(message, writer = Writer.create()) {
        if (message.height !== 0) {
            writer.uint32(8).int64(message.height);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryAppliedPlanResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryAppliedPlanResponse);
        if (object.height !== undefined && object.height !== null) {
            message.height = Number(object.height);
        }
        else {
            message.height = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined && (obj.height = message.height);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryAppliedPlanResponse);
        if (object.height !== undefined && object.height !== null) {
            message.height = object.height;
        }
        else {
            message.height = 0;
        }
        return message;
    },
};
const baseQueryUpgradedConsensusStateRequest = { last_height: 0 };
export const QueryUpgradedConsensusStateRequest = {
    encode(message, writer = Writer.create()) {
        if (message.last_height !== 0) {
            writer.uint32(8).int64(message.last_height);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryUpgradedConsensusStateRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.last_height = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryUpgradedConsensusStateRequest);
        if (object.last_height !== undefined && object.last_height !== null) {
            message.last_height = Number(object.last_height);
        }
        else {
            message.last_height = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.last_height !== undefined &&
            (obj.last_height = message.last_height);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryUpgradedConsensusStateRequest);
        if (object.last_height !== undefined && object.last_height !== null) {
            message.last_height = object.last_height;
        }
        else {
            message.last_height = 0;
        }
        return message;
    },
};
const baseQueryUpgradedConsensusStateResponse = {};
export const QueryUpgradedConsensusStateResponse = {
    encode(message, writer = Writer.create()) {
        if (message.upgraded_consensus_state.length !== 0) {
            writer.uint32(18).bytes(message.upgraded_consensus_state);
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
                case 2:
                    message.upgraded_consensus_state = reader.bytes();
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
            message.upgraded_consensus_state = bytesFromBase64(object.upgraded_consensus_state);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.upgraded_consensus_state !== undefined &&
            (obj.upgraded_consensus_state = base64FromBytes(message.upgraded_consensus_state !== undefined
                ? message.upgraded_consensus_state
                : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryUpgradedConsensusStateResponse);
        if (object.upgraded_consensus_state !== undefined &&
            object.upgraded_consensus_state !== null) {
            message.upgraded_consensus_state = object.upgraded_consensus_state;
        }
        else {
            message.upgraded_consensus_state = new Uint8Array();
        }
        return message;
    },
};
const baseQueryModuleVersionsRequest = { module_name: "" };
export const QueryModuleVersionsRequest = {
    encode(message, writer = Writer.create()) {
        if (message.module_name !== "") {
            writer.uint32(10).string(message.module_name);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryModuleVersionsRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.module_name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryModuleVersionsRequest);
        if (object.module_name !== undefined && object.module_name !== null) {
            message.module_name = String(object.module_name);
        }
        else {
            message.module_name = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.module_name !== undefined &&
            (obj.module_name = message.module_name);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryModuleVersionsRequest);
        if (object.module_name !== undefined && object.module_name !== null) {
            message.module_name = object.module_name;
        }
        else {
            message.module_name = "";
        }
        return message;
    },
};
const baseQueryModuleVersionsResponse = {};
export const QueryModuleVersionsResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.module_versions) {
            ModuleVersion.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryModuleVersionsResponse);
        message.module_versions = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.module_versions.push(ModuleVersion.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryModuleVersionsResponse);
        message.module_versions = [];
        if (object.module_versions !== undefined &&
            object.module_versions !== null) {
            for (const e of object.module_versions) {
                message.module_versions.push(ModuleVersion.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.module_versions) {
            obj.module_versions = message.module_versions.map((e) => e ? ModuleVersion.toJSON(e) : undefined);
        }
        else {
            obj.module_versions = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryModuleVersionsResponse);
        message.module_versions = [];
        if (object.module_versions !== undefined &&
            object.module_versions !== null) {
            for (const e of object.module_versions) {
                message.module_versions.push(ModuleVersion.fromPartial(e));
            }
        }
        return message;
    },
};
export class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    CurrentPlan(request) {
        const data = QueryCurrentPlanRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.upgrade.v1beta1.Query", "CurrentPlan", data);
        return promise.then((data) => QueryCurrentPlanResponse.decode(new Reader(data)));
    }
    AppliedPlan(request) {
        const data = QueryAppliedPlanRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.upgrade.v1beta1.Query", "AppliedPlan", data);
        return promise.then((data) => QueryAppliedPlanResponse.decode(new Reader(data)));
    }
    UpgradedConsensusState(request) {
        const data = QueryUpgradedConsensusStateRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.upgrade.v1beta1.Query", "UpgradedConsensusState", data);
        return promise.then((data) => QueryUpgradedConsensusStateResponse.decode(new Reader(data)));
    }
    ModuleVersions(request) {
        const data = QueryModuleVersionsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.upgrade.v1beta1.Query", "ModuleVersions", data);
        return promise.then((data) => QueryModuleVersionsResponse.decode(new Reader(data)));
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
