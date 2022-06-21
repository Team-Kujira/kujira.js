"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryClientImpl = exports.QueryModuleVersionsResponse = exports.QueryModuleVersionsRequest = exports.QueryUpgradedConsensusStateResponse = exports.QueryUpgradedConsensusStateRequest = exports.QueryAppliedPlanResponse = exports.QueryAppliedPlanRequest = exports.QueryCurrentPlanResponse = exports.QueryCurrentPlanRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const minimal_1 = require("protobufjs/minimal");
const upgrade_1 = require("./upgrade");
const types_1 = require("../../../../types");
exports.protobufPackage = "cosmos.upgrade.v1beta1";
const baseQueryCurrentPlanRequest = {};
exports.QueryCurrentPlanRequest = {
    encode(_, writer = minimal_1.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
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
exports.QueryCurrentPlanResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.plan !== undefined) {
            upgrade_1.Plan.encode(message.plan, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryCurrentPlanResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.plan = upgrade_1.Plan.decode(reader, reader.uint32());
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
            message.plan = upgrade_1.Plan.fromJSON(object.plan);
        }
        else {
            message.plan = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.plan !== undefined &&
            (obj.plan = message.plan ? upgrade_1.Plan.toJSON(message.plan) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryCurrentPlanResponse);
        if (object.plan !== undefined && object.plan !== null) {
            message.plan = upgrade_1.Plan.fromPartial(object.plan);
        }
        else {
            message.plan = undefined;
        }
        return message;
    },
};
const baseQueryAppliedPlanRequest = { name: "" };
exports.QueryAppliedPlanRequest = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
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
exports.QueryAppliedPlanResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.height !== 0) {
            writer.uint32(8).int64(message.height);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryAppliedPlanResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = (0, types_1.longToNumber)(reader.int64());
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
exports.QueryUpgradedConsensusStateRequest = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.last_height !== 0) {
            writer.uint32(8).int64(message.last_height);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryUpgradedConsensusStateRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.last_height = (0, types_1.longToNumber)(reader.int64());
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
exports.QueryUpgradedConsensusStateResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.upgraded_consensus_state.length !== 0) {
            writer.uint32(18).bytes(message.upgraded_consensus_state);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
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
            message.upgraded_consensus_state = (0, types_1.bytesFromBase64)(object.upgraded_consensus_state);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.upgraded_consensus_state !== undefined &&
            (obj.upgraded_consensus_state = (0, types_1.base64FromBytes)(message.upgraded_consensus_state !== undefined
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
exports.QueryModuleVersionsRequest = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.module_name !== "") {
            writer.uint32(10).string(message.module_name);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
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
exports.QueryModuleVersionsResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        for (const v of message.module_versions) {
            upgrade_1.ModuleVersion.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryModuleVersionsResponse);
        message.module_versions = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.module_versions.push(upgrade_1.ModuleVersion.decode(reader, reader.uint32()));
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
                message.module_versions.push(upgrade_1.ModuleVersion.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.module_versions) {
            obj.module_versions = message.module_versions.map((e) => e ? upgrade_1.ModuleVersion.toJSON(e) : undefined);
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
                message.module_versions.push(upgrade_1.ModuleVersion.fromPartial(e));
            }
        }
        return message;
    },
};
class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    CurrentPlan(request) {
        const data = exports.QueryCurrentPlanRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.upgrade.v1beta1.Query", "CurrentPlan", data);
        return promise.then((data) => exports.QueryCurrentPlanResponse.decode(new minimal_1.Reader(data)));
    }
    AppliedPlan(request) {
        const data = exports.QueryAppliedPlanRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.upgrade.v1beta1.Query", "AppliedPlan", data);
        return promise.then((data) => exports.QueryAppliedPlanResponse.decode(new minimal_1.Reader(data)));
    }
    UpgradedConsensusState(request) {
        const data = exports.QueryUpgradedConsensusStateRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.upgrade.v1beta1.Query", "UpgradedConsensusState", data);
        return promise.then((data) => exports.QueryUpgradedConsensusStateResponse.decode(new minimal_1.Reader(data)));
    }
    ModuleVersions(request) {
        const data = exports.QueryModuleVersionsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.upgrade.v1beta1.Query", "ModuleVersions", data);
        return promise.then((data) => exports.QueryModuleVersionsResponse.decode(new minimal_1.Reader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
