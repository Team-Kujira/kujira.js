/* eslint-disable */
import { Duration } from "cosmjs-types/google/protobuf/duration";
import { Timestamp } from "cosmjs-types/google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { fromJsonTimestamp, fromTimestamp, isSet } from "../gravity/v1/helpers";
export const protobufPackage = "alliance.alliance";
function createBaseParams() {
    return {
        rewardDelayTime: undefined,
        takeRateClaimInterval: undefined,
        lastTakeRateClaimTime: undefined,
    };
}
export const Params = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.rewardDelayTime !== undefined) {
            Duration.encode(message.rewardDelayTime, writer.uint32(10).fork()).ldelim();
        }
        if (message.takeRateClaimInterval !== undefined) {
            Duration.encode(message.takeRateClaimInterval, writer.uint32(18).fork()).ldelim();
        }
        if (message.lastTakeRateClaimTime !== undefined) {
            Timestamp.encode(message.lastTakeRateClaimTime, writer.uint32(26).fork()).ldelim();
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
                    message.rewardDelayTime = Duration.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.takeRateClaimInterval = Duration.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.lastTakeRateClaimTime = Timestamp.decode(reader, reader.uint32());
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
            rewardDelayTime: isSet(object.rewardDelayTime)
                ? Duration.fromJSON(object.rewardDelayTime)
                : undefined,
            takeRateClaimInterval: isSet(object.takeRateClaimInterval)
                ? Duration.fromJSON(object.takeRateClaimInterval)
                : undefined,
            lastTakeRateClaimTime: isSet(object.lastTakeRateClaimTime)
                ? fromJsonTimestamp(object.lastTakeRateClaimTime)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.rewardDelayTime !== undefined &&
            (obj.rewardDelayTime = message.rewardDelayTime
                ? Duration.toJSON(message.rewardDelayTime)
                : undefined);
        message.takeRateClaimInterval !== undefined &&
            (obj.takeRateClaimInterval = message.takeRateClaimInterval
                ? Duration.toJSON(message.takeRateClaimInterval)
                : undefined);
        message.lastTakeRateClaimTime !== undefined &&
            (obj.lastTakeRateClaimTime = fromTimestamp(message.lastTakeRateClaimTime).toISOString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.rewardDelayTime =
            object.rewardDelayTime !== undefined && object.rewardDelayTime !== null
                ? Duration.fromPartial(object.rewardDelayTime)
                : undefined;
        message.takeRateClaimInterval =
            object.takeRateClaimInterval !== undefined &&
                object.takeRateClaimInterval !== null
                ? Duration.fromPartial(object.takeRateClaimInterval)
                : undefined;
        message.lastTakeRateClaimTime =
            object.lastTakeRateClaimTime !== undefined &&
                object.lastTakeRateClaimTime !== null
                ? Timestamp.fromPartial(object.lastTakeRateClaimTime)
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
export const RewardHistory = {
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
            denom: isSet(object.denom) ? String(object.denom) : "",
            index: isSet(object.index) ? String(object.index) : "",
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
