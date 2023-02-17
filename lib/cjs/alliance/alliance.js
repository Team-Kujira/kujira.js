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
exports.RewardWeightChangeSnapshot = exports.AllianceAsset = exports.RewardWeightRange = exports.protobufPackage = void 0;
/* eslint-disable */
const duration_1 = require("cosmjs-types/google/protobuf/duration");
const timestamp_1 = require("cosmjs-types/google/protobuf/timestamp");
const _m0 = __importStar(require("protobufjs/minimal"));
const helpers_1 = require("../gravity/v1/helpers");
const params_1 = require("./params");
exports.protobufPackage = "alliance.alliance";
function createBaseRewardWeightRange() {
    return {
        min: "",
        max: "",
    };
}
exports.RewardWeightRange = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.min !== "") {
            writer.uint32(10).string(message.min);
        }
        if (message.max !== "") {
            writer.uint32(18).string(message.max);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRewardWeightRange();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.min = reader.string();
                    break;
                case 2:
                    message.max = reader.string();
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
            min: (0, helpers_1.isSet)(object.min) ? String(object.min) : "",
            max: (0, helpers_1.isSet)(object.max) ? String(object.max) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.min !== undefined && (obj.min = message.min);
        message.max !== undefined && (obj.max = message.max);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseRewardWeightRange();
        message.min = (_a = object.min) !== null && _a !== void 0 ? _a : "";
        message.max = (_b = object.max) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseAllianceAsset() {
    return {
        denom: "",
        rewardWeight: "",
        takeRate: "",
        totalTokens: "",
        totalValidatorShares: "",
        rewardStartTime: undefined,
        rewardChangeRate: "",
        rewardChangeInterval: undefined,
        lastRewardChangeTime: undefined,
        rewardWeightRange: undefined,
    };
}
exports.AllianceAsset = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (message.rewardWeight !== "") {
            writer.uint32(18).string(message.rewardWeight);
        }
        if (message.takeRate !== "") {
            writer.uint32(26).string(message.takeRate);
        }
        if (message.totalTokens !== "") {
            writer.uint32(34).string(message.totalTokens);
        }
        if (message.totalValidatorShares !== "") {
            writer.uint32(42).string(message.totalValidatorShares);
        }
        if (message.rewardStartTime !== undefined) {
            timestamp_1.Timestamp.encode(message.rewardStartTime, writer.uint32(50).fork()).ldelim();
        }
        if (message.rewardChangeRate !== "") {
            writer.uint32(58).string(message.rewardChangeRate);
        }
        if (message.rewardChangeInterval !== undefined) {
            duration_1.Duration.encode(message.rewardChangeInterval, writer.uint32(66).fork()).ldelim();
        }
        if (message.lastRewardChangeTime !== undefined) {
            timestamp_1.Timestamp.encode(message.lastRewardChangeTime, writer.uint32(74).fork()).ldelim();
        }
        if (message.rewardWeightRange !== undefined) {
            exports.RewardWeightRange.encode(message.rewardWeightRange, writer.uint32(82).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAllianceAsset();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                case 2:
                    message.rewardWeight = reader.string();
                    break;
                case 3:
                    message.takeRate = reader.string();
                    break;
                case 4:
                    message.totalTokens = reader.string();
                    break;
                case 5:
                    message.totalValidatorShares = reader.string();
                    break;
                case 6:
                    message.rewardStartTime = timestamp_1.Timestamp.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.rewardChangeRate = reader.string();
                    break;
                case 8:
                    message.rewardChangeInterval = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.lastRewardChangeTime = timestamp_1.Timestamp.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.rewardWeightRange = exports.RewardWeightRange.decode(reader, reader.uint32());
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
            denom: (0, helpers_1.isSet)(object.denom) ? String(object.denom) : "",
            rewardWeight: (0, helpers_1.isSet)(object.rewardWeight)
                ? String(object.rewardWeight)
                : "",
            takeRate: (0, helpers_1.isSet)(object.takeRate) ? String(object.takeRate) : "",
            totalTokens: (0, helpers_1.isSet)(object.totalTokens) ? String(object.totalTokens) : "",
            totalValidatorShares: (0, helpers_1.isSet)(object.totalValidatorShares)
                ? String(object.totalValidatorShares)
                : "",
            rewardStartTime: (0, helpers_1.isSet)(object.rewardStartTime)
                ? (0, helpers_1.fromJsonTimestamp)(object.rewardStartTime)
                : undefined,
            rewardChangeRate: (0, helpers_1.isSet)(object.rewardChangeRate)
                ? String(object.rewardChangeRate)
                : "",
            rewardChangeInterval: (0, helpers_1.isSet)(object.rewardChangeInterval)
                ? duration_1.Duration.fromJSON(object.rewardChangeInterval)
                : undefined,
            lastRewardChangeTime: (0, helpers_1.isSet)(object.lastRewardChangeTime)
                ? (0, helpers_1.fromJsonTimestamp)(object.lastRewardChangeTime)
                : undefined,
            rewardWeightRange: (0, helpers_1.isSet)(object.rewardWeightRange)
                ? exports.RewardWeightRange.fromJSON(object.rewardWeightRange)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.denom !== undefined && (obj.denom = message.denom);
        message.rewardWeight !== undefined &&
            (obj.rewardWeight = message.rewardWeight);
        message.takeRate !== undefined && (obj.takeRate = message.takeRate);
        message.totalTokens !== undefined &&
            (obj.totalTokens = message.totalTokens);
        message.totalValidatorShares !== undefined &&
            (obj.totalValidatorShares = message.totalValidatorShares);
        message.rewardStartTime !== undefined &&
            (obj.rewardStartTime = (0, helpers_1.fromTimestamp)(message.rewardStartTime).toISOString());
        message.rewardChangeRate !== undefined &&
            (obj.rewardChangeRate = message.rewardChangeRate);
        message.rewardChangeInterval !== undefined &&
            (obj.rewardChangeInterval = message.rewardChangeInterval
                ? duration_1.Duration.toJSON(message.rewardChangeInterval)
                : undefined);
        message.lastRewardChangeTime !== undefined &&
            (obj.lastRewardChangeTime = (0, helpers_1.fromTimestamp)(message.lastRewardChangeTime).toISOString());
        message.rewardWeightRange !== undefined &&
            (obj.rewardWeightRange = message.rewardWeightRange
                ? exports.RewardWeightRange.toJSON(message.rewardWeightRange)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBaseAllianceAsset();
        message.denom = (_a = object.denom) !== null && _a !== void 0 ? _a : "";
        message.rewardWeight = (_b = object.rewardWeight) !== null && _b !== void 0 ? _b : "";
        message.takeRate = (_c = object.takeRate) !== null && _c !== void 0 ? _c : "";
        message.totalTokens = (_d = object.totalTokens) !== null && _d !== void 0 ? _d : "";
        message.totalValidatorShares = (_e = object.totalValidatorShares) !== null && _e !== void 0 ? _e : "";
        message.rewardStartTime =
            object.rewardStartTime !== undefined && object.rewardStartTime !== null
                ? timestamp_1.Timestamp.fromPartial(object.rewardStartTime)
                : undefined;
        message.rewardChangeRate = (_f = object.rewardChangeRate) !== null && _f !== void 0 ? _f : "";
        message.rewardChangeInterval =
            object.rewardChangeInterval !== undefined &&
                object.rewardChangeInterval !== null
                ? duration_1.Duration.fromPartial(object.rewardChangeInterval)
                : undefined;
        message.lastRewardChangeTime =
            object.lastRewardChangeTime !== undefined &&
                object.lastRewardChangeTime !== null
                ? timestamp_1.Timestamp.fromPartial(object.lastRewardChangeTime)
                : undefined;
        message.rewardWeightRange =
            object.rewardWeightRange !== undefined &&
                object.rewardWeightRange !== null
                ? exports.RewardWeightRange.fromPartial(object.rewardWeightRange)
                : undefined;
        return message;
    },
};
function createBaseRewardWeightChangeSnapshot() {
    return {
        prevRewardWeight: "",
        rewardHistories: [],
    };
}
exports.RewardWeightChangeSnapshot = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.prevRewardWeight !== "") {
            writer.uint32(10).string(message.prevRewardWeight);
        }
        for (const v of message.rewardHistories) {
            params_1.RewardHistory.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRewardWeightChangeSnapshot();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.prevRewardWeight = reader.string();
                    break;
                case 2:
                    message.rewardHistories.push(params_1.RewardHistory.decode(reader, reader.uint32()));
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
            prevRewardWeight: (0, helpers_1.isSet)(object.prevRewardWeight)
                ? String(object.prevRewardWeight)
                : "",
            rewardHistories: Array.isArray(object === null || object === void 0 ? void 0 : object.rewardHistories)
                ? object.rewardHistories.map((e) => params_1.RewardHistory.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.prevRewardWeight !== undefined &&
            (obj.prevRewardWeight = message.prevRewardWeight);
        if (message.rewardHistories) {
            obj.rewardHistories = message.rewardHistories.map((e) => e ? params_1.RewardHistory.toJSON(e) : undefined);
        }
        else {
            obj.rewardHistories = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseRewardWeightChangeSnapshot();
        message.prevRewardWeight = (_a = object.prevRewardWeight) !== null && _a !== void 0 ? _a : "";
        message.rewardHistories =
            ((_b = object.rewardHistories) === null || _b === void 0 ? void 0 : _b.map((e) => params_1.RewardHistory.fromPartial(e))) || [];
        return message;
    },
};
