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
exports.RewardHistory = exports.Params = exports.protobufPackage = void 0;
/* eslint-disable */
const duration_1 = require("cosmjs-types/google/protobuf/duration");
const timestamp_1 = require("cosmjs-types/google/protobuf/timestamp");
const _m0 = __importStar(require("protobufjs/minimal"));
const helpers_1 = require("../gravity/v1/helpers");
exports.protobufPackage = "alliance.alliance";
function createBaseParams() {
    return {
        rewardDelayTime: undefined,
        takeRateClaimInterval: undefined,
        lastTakeRateClaimTime: undefined,
    };
}
exports.Params = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.rewardDelayTime !== undefined) {
            duration_1.Duration.encode(message.rewardDelayTime, writer.uint32(10).fork()).ldelim();
        }
        if (message.takeRateClaimInterval !== undefined) {
            duration_1.Duration.encode(message.takeRateClaimInterval, writer.uint32(18).fork()).ldelim();
        }
        if (message.lastTakeRateClaimTime !== undefined) {
            timestamp_1.Timestamp.encode(message.lastTakeRateClaimTime, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.rewardDelayTime = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.takeRateClaimInterval = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.lastTakeRateClaimTime = timestamp_1.Timestamp.decode(reader, reader.uint32());
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
            rewardDelayTime: (0, helpers_1.isSet)(object.rewardDelayTime)
                ? duration_1.Duration.fromJSON(object.rewardDelayTime)
                : undefined,
            takeRateClaimInterval: (0, helpers_1.isSet)(object.takeRateClaimInterval)
                ? duration_1.Duration.fromJSON(object.takeRateClaimInterval)
                : undefined,
            lastTakeRateClaimTime: (0, helpers_1.isSet)(object.lastTakeRateClaimTime)
                ? (0, helpers_1.fromJsonTimestamp)(object.lastTakeRateClaimTime)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.rewardDelayTime !== undefined &&
            (obj.rewardDelayTime = message.rewardDelayTime
                ? duration_1.Duration.toJSON(message.rewardDelayTime)
                : undefined);
        message.takeRateClaimInterval !== undefined &&
            (obj.takeRateClaimInterval = message.takeRateClaimInterval
                ? duration_1.Duration.toJSON(message.takeRateClaimInterval)
                : undefined);
        message.lastTakeRateClaimTime !== undefined &&
            (obj.lastTakeRateClaimTime = (0, helpers_1.fromTimestamp)(message.lastTakeRateClaimTime).toISOString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.rewardDelayTime =
            object.rewardDelayTime !== undefined && object.rewardDelayTime !== null
                ? duration_1.Duration.fromPartial(object.rewardDelayTime)
                : undefined;
        message.takeRateClaimInterval =
            object.takeRateClaimInterval !== undefined &&
                object.takeRateClaimInterval !== null
                ? duration_1.Duration.fromPartial(object.takeRateClaimInterval)
                : undefined;
        message.lastTakeRateClaimTime =
            object.lastTakeRateClaimTime !== undefined &&
                object.lastTakeRateClaimTime !== null
                ? timestamp_1.Timestamp.fromPartial(object.lastTakeRateClaimTime)
                : undefined;
        return message;
    },
};
function createBaseRewardHistory() {
    return {
        denom: "",
        index: "",
    };
}
exports.RewardHistory = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (message.index !== "") {
            writer.uint32(18).string(message.index);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRewardHistory();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                case 2:
                    message.index = reader.string();
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
            index: (0, helpers_1.isSet)(object.index) ? String(object.index) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.denom !== undefined && (obj.denom = message.denom);
        message.index !== undefined && (obj.index = message.index);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseRewardHistory();
        message.denom = (_a = object.denom) !== null && _a !== void 0 ? _a : "";
        message.index = (_b = object.index) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
