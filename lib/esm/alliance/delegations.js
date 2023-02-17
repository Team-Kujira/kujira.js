/* eslint-disable */
import { Coin, DecCoin } from "cosmjs-types/cosmos/base/v1beta1/coin";
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../gravity/v1/helpers";
import { RewardHistory } from "./params";
export const protobufPackage = "alliance.alliance";
function createBaseDelegation() {
    return {
        delegatorAddress: "",
        validatorAddress: "",
        denom: "",
        shares: "",
        rewardHistory: [],
        lastRewardClaimHeight: Long.UZERO,
    };
}
export const Delegation = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.delegatorAddress !== "") {
            writer.uint32(10).string(message.delegatorAddress);
        }
        if (message.validatorAddress !== "") {
            writer.uint32(18).string(message.validatorAddress);
        }
        if (message.denom !== "") {
            writer.uint32(26).string(message.denom);
        }
        if (message.shares !== "") {
            writer.uint32(34).string(message.shares);
        }
        for (const v of message.rewardHistory) {
            RewardHistory.encode(v, writer.uint32(42).fork()).ldelim();
        }
        if (!message.lastRewardClaimHeight.isZero()) {
            writer.uint32(48).uint64(message.lastRewardClaimHeight);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDelegation();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegatorAddress = reader.string();
                    break;
                case 2:
                    message.validatorAddress = reader.string();
                    break;
                case 3:
                    message.denom = reader.string();
                    break;
                case 4:
                    message.shares = reader.string();
                    break;
                case 5:
                    message.rewardHistory.push(RewardHistory.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.lastRewardClaimHeight = reader.uint64();
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
            delegatorAddress: isSet(object.delegatorAddress)
                ? String(object.delegatorAddress)
                : "",
            validatorAddress: isSet(object.validatorAddress)
                ? String(object.validatorAddress)
                : "",
            denom: isSet(object.denom) ? String(object.denom) : "",
            shares: isSet(object.shares) ? String(object.shares) : "",
            rewardHistory: Array.isArray(object === null || object === void 0 ? void 0 : object.rewardHistory)
                ? object.rewardHistory.map((e) => RewardHistory.fromJSON(e))
                : [],
            lastRewardClaimHeight: isSet(object.lastRewardClaimHeight)
                ? Long.fromValue(object.lastRewardClaimHeight)
                : Long.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.delegatorAddress !== undefined &&
            (obj.delegatorAddress = message.delegatorAddress);
        message.validatorAddress !== undefined &&
            (obj.validatorAddress = message.validatorAddress);
        message.denom !== undefined && (obj.denom = message.denom);
        message.shares !== undefined && (obj.shares = message.shares);
        if (message.rewardHistory) {
            obj.rewardHistory = message.rewardHistory.map((e) => e ? RewardHistory.toJSON(e) : undefined);
        }
        else {
            obj.rewardHistory = [];
        }
        message.lastRewardClaimHeight !== undefined &&
            (obj.lastRewardClaimHeight = (message.lastRewardClaimHeight || Long.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseDelegation();
        message.delegatorAddress = (_a = object.delegatorAddress) !== null && _a !== void 0 ? _a : "";
        message.validatorAddress = (_b = object.validatorAddress) !== null && _b !== void 0 ? _b : "";
        message.denom = (_c = object.denom) !== null && _c !== void 0 ? _c : "";
        message.shares = (_d = object.shares) !== null && _d !== void 0 ? _d : "";
        message.rewardHistory =
            ((_e = object.rewardHistory) === null || _e === void 0 ? void 0 : _e.map((e) => RewardHistory.fromPartial(e))) || [];
        message.lastRewardClaimHeight =
            object.lastRewardClaimHeight !== undefined &&
                object.lastRewardClaimHeight !== null
                ? Long.fromValue(object.lastRewardClaimHeight)
                : Long.UZERO;
        return message;
    },
};
function createBaseRedelegation() {
    return {
        delegatorAddress: "",
        srcValidatorAddress: "",
        dstValidatorAddress: "",
        balance: undefined,
    };
}
export const Redelegation = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.delegatorAddress !== "") {
            writer.uint32(10).string(message.delegatorAddress);
        }
        if (message.srcValidatorAddress !== "") {
            writer.uint32(18).string(message.srcValidatorAddress);
        }
        if (message.dstValidatorAddress !== "") {
            writer.uint32(26).string(message.dstValidatorAddress);
        }
        if (message.balance !== undefined) {
            Coin.encode(message.balance, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRedelegation();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegatorAddress = reader.string();
                    break;
                case 2:
                    message.srcValidatorAddress = reader.string();
                    break;
                case 3:
                    message.dstValidatorAddress = reader.string();
                    break;
                case 4:
                    message.balance = Coin.decode(reader, reader.uint32());
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
            delegatorAddress: isSet(object.delegatorAddress)
                ? String(object.delegatorAddress)
                : "",
            srcValidatorAddress: isSet(object.srcValidatorAddress)
                ? String(object.srcValidatorAddress)
                : "",
            dstValidatorAddress: isSet(object.dstValidatorAddress)
                ? String(object.dstValidatorAddress)
                : "",
            balance: isSet(object.balance)
                ? Coin.fromJSON(object.balance)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.delegatorAddress !== undefined &&
            (obj.delegatorAddress = message.delegatorAddress);
        message.srcValidatorAddress !== undefined &&
            (obj.srcValidatorAddress = message.srcValidatorAddress);
        message.dstValidatorAddress !== undefined &&
            (obj.dstValidatorAddress = message.dstValidatorAddress);
        message.balance !== undefined &&
            (obj.balance = message.balance
                ? Coin.toJSON(message.balance)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseRedelegation();
        message.delegatorAddress = (_a = object.delegatorAddress) !== null && _a !== void 0 ? _a : "";
        message.srcValidatorAddress = (_b = object.srcValidatorAddress) !== null && _b !== void 0 ? _b : "";
        message.dstValidatorAddress = (_c = object.dstValidatorAddress) !== null && _c !== void 0 ? _c : "";
        message.balance =
            object.balance !== undefined && object.balance !== null
                ? Coin.fromPartial(object.balance)
                : undefined;
        return message;
    },
};
function createBaseQueuedRedelegation() {
    return {
        entries: [],
    };
}
export const QueuedRedelegation = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.entries) {
            Redelegation.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueuedRedelegation();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.entries.push(Redelegation.decode(reader, reader.uint32()));
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
            entries: Array.isArray(object === null || object === void 0 ? void 0 : object.entries)
                ? object.entries.map((e) => Redelegation.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.entries) {
            obj.entries = message.entries.map((e) => e ? Redelegation.toJSON(e) : undefined);
        }
        else {
            obj.entries = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueuedRedelegation();
        message.entries =
            ((_a = object.entries) === null || _a === void 0 ? void 0 : _a.map((e) => Redelegation.fromPartial(e))) || [];
        return message;
    },
};
function createBaseUndelegation() {
    return {
        delegatorAddress: "",
        validatorAddress: "",
        balance: undefined,
    };
}
export const Undelegation = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.delegatorAddress !== "") {
            writer.uint32(10).string(message.delegatorAddress);
        }
        if (message.validatorAddress !== "") {
            writer.uint32(18).string(message.validatorAddress);
        }
        if (message.balance !== undefined) {
            Coin.encode(message.balance, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUndelegation();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegatorAddress = reader.string();
                    break;
                case 2:
                    message.validatorAddress = reader.string();
                    break;
                case 3:
                    message.balance = Coin.decode(reader, reader.uint32());
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
            delegatorAddress: isSet(object.delegatorAddress)
                ? String(object.delegatorAddress)
                : "",
            validatorAddress: isSet(object.validatorAddress)
                ? String(object.validatorAddress)
                : "",
            balance: isSet(object.balance)
                ? Coin.fromJSON(object.balance)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.delegatorAddress !== undefined &&
            (obj.delegatorAddress = message.delegatorAddress);
        message.validatorAddress !== undefined &&
            (obj.validatorAddress = message.validatorAddress);
        message.balance !== undefined &&
            (obj.balance = message.balance
                ? Coin.toJSON(message.balance)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseUndelegation();
        message.delegatorAddress = (_a = object.delegatorAddress) !== null && _a !== void 0 ? _a : "";
        message.validatorAddress = (_b = object.validatorAddress) !== null && _b !== void 0 ? _b : "";
        message.balance =
            object.balance !== undefined && object.balance !== null
                ? Coin.fromPartial(object.balance)
                : undefined;
        return message;
    },
};
function createBaseQueuedUndelegation() {
    return {
        entries: [],
    };
}
export const QueuedUndelegation = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.entries) {
            Undelegation.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueuedUndelegation();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.entries.push(Undelegation.decode(reader, reader.uint32()));
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
            entries: Array.isArray(object === null || object === void 0 ? void 0 : object.entries)
                ? object.entries.map((e) => Undelegation.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.entries) {
            obj.entries = message.entries.map((e) => e ? Undelegation.toJSON(e) : undefined);
        }
        else {
            obj.entries = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueuedUndelegation();
        message.entries =
            ((_a = object.entries) === null || _a === void 0 ? void 0 : _a.map((e) => Undelegation.fromPartial(e))) || [];
        return message;
    },
};
function createBaseAllianceValidatorInfo() {
    return {
        globalRewardHistory: [],
        totalDelegatorShares: [],
        validatorShares: [],
    };
}
export const AllianceValidatorInfo = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.globalRewardHistory) {
            RewardHistory.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.totalDelegatorShares) {
            DecCoin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.validatorShares) {
            DecCoin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAllianceValidatorInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.globalRewardHistory.push(RewardHistory.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.totalDelegatorShares.push(DecCoin.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.validatorShares.push(DecCoin.decode(reader, reader.uint32()));
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
            globalRewardHistory: Array.isArray(object === null || object === void 0 ? void 0 : object.globalRewardHistory)
                ? object.globalRewardHistory.map((e) => RewardHistory.fromJSON(e))
                : [],
            totalDelegatorShares: Array.isArray(object === null || object === void 0 ? void 0 : object.totalDelegatorShares)
                ? object.totalDelegatorShares.map((e) => DecCoin.fromJSON(e))
                : [],
            validatorShares: Array.isArray(object === null || object === void 0 ? void 0 : object.validatorShares)
                ? object.validatorShares.map((e) => DecCoin.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.globalRewardHistory) {
            obj.globalRewardHistory = message.globalRewardHistory.map((e) => e ? RewardHistory.toJSON(e) : undefined);
        }
        else {
            obj.globalRewardHistory = [];
        }
        if (message.totalDelegatorShares) {
            obj.totalDelegatorShares = message.totalDelegatorShares.map((e) => e ? DecCoin.toJSON(e) : undefined);
        }
        else {
            obj.totalDelegatorShares = [];
        }
        if (message.validatorShares) {
            obj.validatorShares = message.validatorShares.map((e) => e ? DecCoin.toJSON(e) : undefined);
        }
        else {
            obj.validatorShares = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseAllianceValidatorInfo();
        message.globalRewardHistory =
            ((_a = object.globalRewardHistory) === null || _a === void 0 ? void 0 : _a.map((e) => RewardHistory.fromPartial(e))) ||
                [];
        message.totalDelegatorShares =
            ((_b = object.totalDelegatorShares) === null || _b === void 0 ? void 0 : _b.map((e) => DecCoin.fromPartial(e))) || [];
        message.validatorShares =
            ((_c = object.validatorShares) === null || _c === void 0 ? void 0 : _c.map((e) => DecCoin.fromPartial(e))) || [];
        return message;
    },
};
