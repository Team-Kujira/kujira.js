/* eslint-disable */
import { Duration } from "cosmjs-types/google/protobuf/duration";
import { Timestamp } from "cosmjs-types/google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { fromJsonTimestamp, fromTimestamp, isSet } from "../gravity/v1/helpers";
import { RewardHistory } from "./params";
export const protobufPackage = "alliance.alliance";
function createBaseRewardWeightRange() {
    return {
        min: "",
        max: "",
    };
}
export const RewardWeightRange = {
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
            min: isSet(object.min) ? String(object.min) : "",
            max: isSet(object.max) ? String(object.max) : "",
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
export const AllianceAsset = {
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
            Timestamp.encode(message.rewardStartTime, writer.uint32(50).fork()).ldelim();
        }
        if (message.rewardChangeRate !== "") {
            writer.uint32(58).string(message.rewardChangeRate);
        }
        if (message.rewardChangeInterval !== undefined) {
            Duration.encode(message.rewardChangeInterval, writer.uint32(66).fork()).ldelim();
        }
        if (message.lastRewardChangeTime !== undefined) {
            Timestamp.encode(message.lastRewardChangeTime, writer.uint32(74).fork()).ldelim();
        }
        if (message.rewardWeightRange !== undefined) {
            RewardWeightRange.encode(message.rewardWeightRange, writer.uint32(82).fork()).ldelim();
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
                    message.rewardStartTime = Timestamp.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.rewardChangeRate = reader.string();
                    break;
                case 8:
                    message.rewardChangeInterval = Duration.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.lastRewardChangeTime = Timestamp.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.rewardWeightRange = RewardWeightRange.decode(reader, reader.uint32());
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
            denom: isSet(object.denom) ? String(object.denom) : "",
            rewardWeight: isSet(object.rewardWeight)
                ? String(object.rewardWeight)
                : "",
            takeRate: isSet(object.takeRate) ? String(object.takeRate) : "",
            totalTokens: isSet(object.totalTokens) ? String(object.totalTokens) : "",
            totalValidatorShares: isSet(object.totalValidatorShares)
                ? String(object.totalValidatorShares)
                : "",
            rewardStartTime: isSet(object.rewardStartTime)
                ? fromJsonTimestamp(object.rewardStartTime)
                : undefined,
            rewardChangeRate: isSet(object.rewardChangeRate)
                ? String(object.rewardChangeRate)
                : "",
            rewardChangeInterval: isSet(object.rewardChangeInterval)
                ? Duration.fromJSON(object.rewardChangeInterval)
                : undefined,
            lastRewardChangeTime: isSet(object.lastRewardChangeTime)
                ? fromJsonTimestamp(object.lastRewardChangeTime)
                : undefined,
            rewardWeightRange: isSet(object.rewardWeightRange)
                ? RewardWeightRange.fromJSON(object.rewardWeightRange)
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
            (obj.rewardStartTime = fromTimestamp(message.rewardStartTime).toISOString());
        message.rewardChangeRate !== undefined &&
            (obj.rewardChangeRate = message.rewardChangeRate);
        message.rewardChangeInterval !== undefined &&
            (obj.rewardChangeInterval = message.rewardChangeInterval
                ? Duration.toJSON(message.rewardChangeInterval)
                : undefined);
        message.lastRewardChangeTime !== undefined &&
            (obj.lastRewardChangeTime = fromTimestamp(message.lastRewardChangeTime).toISOString());
        message.rewardWeightRange !== undefined &&
            (obj.rewardWeightRange = message.rewardWeightRange
                ? RewardWeightRange.toJSON(message.rewardWeightRange)
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
                ? Timestamp.fromPartial(object.rewardStartTime)
                : undefined;
        message.rewardChangeRate = (_f = object.rewardChangeRate) !== null && _f !== void 0 ? _f : "";
        message.rewardChangeInterval =
            object.rewardChangeInterval !== undefined &&
                object.rewardChangeInterval !== null
                ? Duration.fromPartial(object.rewardChangeInterval)
                : undefined;
        message.lastRewardChangeTime =
            object.lastRewardChangeTime !== undefined &&
                object.lastRewardChangeTime !== null
                ? Timestamp.fromPartial(object.lastRewardChangeTime)
                : undefined;
        message.rewardWeightRange =
            object.rewardWeightRange !== undefined &&
                object.rewardWeightRange !== null
                ? RewardWeightRange.fromPartial(object.rewardWeightRange)
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
export const RewardWeightChangeSnapshot = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.prevRewardWeight !== "") {
            writer.uint32(10).string(message.prevRewardWeight);
        }
        for (const v of message.rewardHistories) {
            RewardHistory.encode(v, writer.uint32(18).fork()).ldelim();
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
                    message.rewardHistories.push(RewardHistory.decode(reader, reader.uint32()));
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
            prevRewardWeight: isSet(object.prevRewardWeight)
                ? String(object.prevRewardWeight)
                : "",
            rewardHistories: Array.isArray(object === null || object === void 0 ? void 0 : object.rewardHistories)
                ? object.rewardHistories.map((e) => RewardHistory.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.prevRewardWeight !== undefined &&
            (obj.prevRewardWeight = message.prevRewardWeight);
        if (message.rewardHistories) {
            obj.rewardHistories = message.rewardHistories.map((e) => e ? RewardHistory.toJSON(e) : undefined);
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
            ((_b = object.rewardHistories) === null || _b === void 0 ? void 0 : _b.map((e) => RewardHistory.fromPartial(e))) || [];
        return message;
    },
};
