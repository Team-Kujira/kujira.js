"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgDeleteAllianceProposal = exports.MsgUpdateAllianceProposal = exports.MsgCreateAllianceProposal = exports.protobufPackage = void 0;
/* eslint-disable */
const duration_1 = require("cosmjs-types/google/protobuf/duration");
const _m0 = __importStar(require("protobufjs/minimal"));
const helpers_1 = require("../gravity/v1/helpers");
const alliance_1 = require("./alliance");
exports.protobufPackage = "alliance.alliance";
function createBaseMsgCreateAllianceProposal() {
    return {
        title: "",
        description: "",
        denom: "",
        rewardWeight: "",
        takeRate: "",
        rewardChangeRate: "",
        rewardChangeInterval: undefined,
        rewardWeightRange: undefined,
    };
}
exports.MsgCreateAllianceProposal = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.denom !== "") {
            writer.uint32(26).string(message.denom);
        }
        if (message.rewardWeight !== "") {
            writer.uint32(34).string(message.rewardWeight);
        }
        if (message.takeRate !== "") {
            writer.uint32(42).string(message.takeRate);
        }
        if (message.rewardChangeRate !== "") {
            writer.uint32(50).string(message.rewardChangeRate);
        }
        if (message.rewardChangeInterval !== undefined) {
            duration_1.Duration.encode(message.rewardChangeInterval, writer.uint32(58).fork()).ldelim();
        }
        if (message.rewardWeightRange !== undefined) {
            alliance_1.RewardWeightRange.encode(message.rewardWeightRange, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateAllianceProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.denom = reader.string();
                    break;
                case 4:
                    message.rewardWeight = reader.string();
                    break;
                case 5:
                    message.takeRate = reader.string();
                    break;
                case 6:
                    message.rewardChangeRate = reader.string();
                    break;
                case 7:
                    message.rewardChangeInterval = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.rewardWeightRange = alliance_1.RewardWeightRange.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            title: (0, helpers_1.isSet)(object.title) ? String(object.title) : "",
            description: (0, helpers_1.isSet)(object.description) ? String(object.description) : "",
            denom: (0, helpers_1.isSet)(object.denom) ? String(object.denom) : "",
            rewardWeight: (0, helpers_1.isSet)(object.rewardWeight)
                ? String(object.rewardWeight)
                : "",
            takeRate: (0, helpers_1.isSet)(object.takeRate) ? String(object.takeRate) : "",
            rewardChangeRate: (0, helpers_1.isSet)(object.rewardChangeRate)
                ? String(object.rewardChangeRate)
                : "",
            rewardChangeInterval: (0, helpers_1.isSet)(object.rewardChangeInterval)
                ? duration_1.Duration.fromJSON(object.rewardChangeInterval)
                : undefined,
            rewardWeightRange: (0, helpers_1.isSet)(object.rewardWeightRange)
                ? alliance_1.RewardWeightRange.fromJSON(object.rewardWeightRange)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined &&
            (obj.description = message.description);
        message.denom !== undefined && (obj.denom = message.denom);
        message.rewardWeight !== undefined &&
            (obj.rewardWeight = message.rewardWeight);
        message.takeRate !== undefined && (obj.takeRate = message.takeRate);
        message.rewardChangeRate !== undefined &&
            (obj.rewardChangeRate = message.rewardChangeRate);
        message.rewardChangeInterval !== undefined &&
            (obj.rewardChangeInterval = message.rewardChangeInterval
                ? duration_1.Duration.toJSON(message.rewardChangeInterval)
                : undefined);
        message.rewardWeightRange !== undefined &&
            (obj.rewardWeightRange = message.rewardWeightRange
                ? alliance_1.RewardWeightRange.toJSON(message.rewardWeightRange)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBaseMsgCreateAllianceProposal();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.denom = (_c = object.denom) !== null && _c !== void 0 ? _c : "";
        message.rewardWeight = (_d = object.rewardWeight) !== null && _d !== void 0 ? _d : "";
        message.takeRate = (_e = object.takeRate) !== null && _e !== void 0 ? _e : "";
        message.rewardChangeRate = (_f = object.rewardChangeRate) !== null && _f !== void 0 ? _f : "";
        message.rewardChangeInterval =
            object.rewardChangeInterval !== undefined &&
                object.rewardChangeInterval !== null
                ? duration_1.Duration.fromPartial(object.rewardChangeInterval)
                : undefined;
        message.rewardWeightRange =
            object.rewardWeightRange !== undefined &&
                object.rewardWeightRange !== null
                ? alliance_1.RewardWeightRange.fromPartial(object.rewardWeightRange)
                : undefined;
        return message;
    },
};
function createBaseMsgUpdateAllianceProposal() {
    return {
        title: "",
        description: "",
        denom: "",
        rewardWeight: "",
        takeRate: "",
        rewardChangeRate: "",
        rewardChangeInterval: undefined,
    };
}
exports.MsgUpdateAllianceProposal = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.denom !== "") {
            writer.uint32(26).string(message.denom);
        }
        if (message.rewardWeight !== "") {
            writer.uint32(34).string(message.rewardWeight);
        }
        if (message.takeRate !== "") {
            writer.uint32(42).string(message.takeRate);
        }
        if (message.rewardChangeRate !== "") {
            writer.uint32(50).string(message.rewardChangeRate);
        }
        if (message.rewardChangeInterval !== undefined) {
            duration_1.Duration.encode(message.rewardChangeInterval, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateAllianceProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.denom = reader.string();
                    break;
                case 4:
                    message.rewardWeight = reader.string();
                    break;
                case 5:
                    message.takeRate = reader.string();
                    break;
                case 6:
                    message.rewardChangeRate = reader.string();
                    break;
                case 7:
                    message.rewardChangeInterval = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            title: (0, helpers_1.isSet)(object.title) ? String(object.title) : "",
            description: (0, helpers_1.isSet)(object.description) ? String(object.description) : "",
            denom: (0, helpers_1.isSet)(object.denom) ? String(object.denom) : "",
            rewardWeight: (0, helpers_1.isSet)(object.rewardWeight)
                ? String(object.rewardWeight)
                : "",
            takeRate: (0, helpers_1.isSet)(object.takeRate) ? String(object.takeRate) : "",
            rewardChangeRate: (0, helpers_1.isSet)(object.rewardChangeRate)
                ? String(object.rewardChangeRate)
                : "",
            rewardChangeInterval: (0, helpers_1.isSet)(object.rewardChangeInterval)
                ? duration_1.Duration.fromJSON(object.rewardChangeInterval)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined &&
            (obj.description = message.description);
        message.denom !== undefined && (obj.denom = message.denom);
        message.rewardWeight !== undefined &&
            (obj.rewardWeight = message.rewardWeight);
        message.takeRate !== undefined && (obj.takeRate = message.takeRate);
        message.rewardChangeRate !== undefined &&
            (obj.rewardChangeRate = message.rewardChangeRate);
        message.rewardChangeInterval !== undefined &&
            (obj.rewardChangeInterval = message.rewardChangeInterval
                ? duration_1.Duration.toJSON(message.rewardChangeInterval)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBaseMsgUpdateAllianceProposal();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.denom = (_c = object.denom) !== null && _c !== void 0 ? _c : "";
        message.rewardWeight = (_d = object.rewardWeight) !== null && _d !== void 0 ? _d : "";
        message.takeRate = (_e = object.takeRate) !== null && _e !== void 0 ? _e : "";
        message.rewardChangeRate = (_f = object.rewardChangeRate) !== null && _f !== void 0 ? _f : "";
        message.rewardChangeInterval =
            object.rewardChangeInterval !== undefined &&
                object.rewardChangeInterval !== null
                ? duration_1.Duration.fromPartial(object.rewardChangeInterval)
                : undefined;
        return message;
    },
};
function createBaseMsgDeleteAllianceProposal() {
    return {
        title: "",
        description: "",
        denom: "",
    };
}
exports.MsgDeleteAllianceProposal = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.denom !== "") {
            writer.uint32(26).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDeleteAllianceProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.denom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            title: (0, helpers_1.isSet)(object.title) ? String(object.title) : "",
            description: (0, helpers_1.isSet)(object.description) ? String(object.description) : "",
            denom: (0, helpers_1.isSet)(object.denom) ? String(object.denom) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined &&
            (obj.description = message.description);
        message.denom !== undefined && (obj.denom = message.denom);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseMsgDeleteAllianceProposal();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.denom = (_c = object.denom) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
