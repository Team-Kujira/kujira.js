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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllianceValidatorInfo = exports.QueuedUndelegation = exports.Undelegation = exports.QueuedRedelegation = exports.Redelegation = exports.Delegation = exports.protobufPackage = void 0;
/* eslint-disable */
const coin_1 = require("cosmjs-types/cosmos/base/v1beta1/coin");
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const helpers_1 = require("../gravity/v1/helpers");
const params_1 = require("./params");
exports.protobufPackage = "alliance.alliance";
function createBaseDelegation() {
    return {
        delegatorAddress: "",
        validatorAddress: "",
        denom: "",
        shares: "",
        rewardHistory: [],
        lastRewardClaimHeight: long_1.default.UZERO,
    };
}
exports.Delegation = {
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
            params_1.RewardHistory.encode(v, writer.uint32(42).fork()).ldelim();
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
                    message.rewardHistory.push(params_1.RewardHistory.decode(reader, reader.uint32()));
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
            delegatorAddress: (0, helpers_1.isSet)(object.delegatorAddress)
                ? String(object.delegatorAddress)
                : "",
            validatorAddress: (0, helpers_1.isSet)(object.validatorAddress)
                ? String(object.validatorAddress)
                : "",
            denom: (0, helpers_1.isSet)(object.denom) ? String(object.denom) : "",
            shares: (0, helpers_1.isSet)(object.shares) ? String(object.shares) : "",
            rewardHistory: Array.isArray(object === null || object === void 0 ? void 0 : object.rewardHistory)
                ? object.rewardHistory.map((e) => params_1.RewardHistory.fromJSON(e))
                : [],
            lastRewardClaimHeight: (0, helpers_1.isSet)(object.lastRewardClaimHeight)
                ? long_1.default.fromValue(object.lastRewardClaimHeight)
                : long_1.default.UZERO,
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
            obj.rewardHistory = message.rewardHistory.map((e) => e ? params_1.RewardHistory.toJSON(e) : undefined);
        }
        else {
            obj.rewardHistory = [];
        }
        message.lastRewardClaimHeight !== undefined &&
            (obj.lastRewardClaimHeight = (message.lastRewardClaimHeight || long_1.default.UZERO).toString());
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
            ((_e = object.rewardHistory) === null || _e === void 0 ? void 0 : _e.map((e) => params_1.RewardHistory.fromPartial(e))) || [];
        message.lastRewardClaimHeight =
            object.lastRewardClaimHeight !== undefined &&
                object.lastRewardClaimHeight !== null
                ? long_1.default.fromValue(object.lastRewardClaimHeight)
                : long_1.default.UZERO;
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
exports.Redelegation = {
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
            coin_1.Coin.encode(message.balance, writer.uint32(34).fork()).ldelim();
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
                    message.balance = coin_1.Coin.decode(reader, reader.uint32());
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
            delegatorAddress: (0, helpers_1.isSet)(object.delegatorAddress)
                ? String(object.delegatorAddress)
                : "",
            srcValidatorAddress: (0, helpers_1.isSet)(object.srcValidatorAddress)
                ? String(object.srcValidatorAddress)
                : "",
            dstValidatorAddress: (0, helpers_1.isSet)(object.dstValidatorAddress)
                ? String(object.dstValidatorAddress)
                : "",
            balance: (0, helpers_1.isSet)(object.balance)
                ? coin_1.Coin.fromJSON(object.balance)
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
                ? coin_1.Coin.toJSON(message.balance)
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
                ? coin_1.Coin.fromPartial(object.balance)
                : undefined;
        return message;
    },
};
function createBaseQueuedRedelegation() {
    return {
        entries: [],
    };
}
exports.QueuedRedelegation = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.entries) {
            exports.Redelegation.encode(v, writer.uint32(10).fork()).ldelim();
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
                    message.entries.push(exports.Redelegation.decode(reader, reader.uint32()));
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
                ? object.entries.map((e) => exports.Redelegation.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.entries) {
            obj.entries = message.entries.map((e) => e ? exports.Redelegation.toJSON(e) : undefined);
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
            ((_a = object.entries) === null || _a === void 0 ? void 0 : _a.map((e) => exports.Redelegation.fromPartial(e))) || [];
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
exports.Undelegation = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.delegatorAddress !== "") {
            writer.uint32(10).string(message.delegatorAddress);
        }
        if (message.validatorAddress !== "") {
            writer.uint32(18).string(message.validatorAddress);
        }
        if (message.balance !== undefined) {
            coin_1.Coin.encode(message.balance, writer.uint32(26).fork()).ldelim();
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
                    message.balance = coin_1.Coin.decode(reader, reader.uint32());
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
            delegatorAddress: (0, helpers_1.isSet)(object.delegatorAddress)
                ? String(object.delegatorAddress)
                : "",
            validatorAddress: (0, helpers_1.isSet)(object.validatorAddress)
                ? String(object.validatorAddress)
                : "",
            balance: (0, helpers_1.isSet)(object.balance)
                ? coin_1.Coin.fromJSON(object.balance)
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
                ? coin_1.Coin.toJSON(message.balance)
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
                ? coin_1.Coin.fromPartial(object.balance)
                : undefined;
        return message;
    },
};
function createBaseQueuedUndelegation() {
    return {
        entries: [],
    };
}
exports.QueuedUndelegation = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.entries) {
            exports.Undelegation.encode(v, writer.uint32(10).fork()).ldelim();
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
                    message.entries.push(exports.Undelegation.decode(reader, reader.uint32()));
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
                ? object.entries.map((e) => exports.Undelegation.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.entries) {
            obj.entries = message.entries.map((e) => e ? exports.Undelegation.toJSON(e) : undefined);
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
            ((_a = object.entries) === null || _a === void 0 ? void 0 : _a.map((e) => exports.Undelegation.fromPartial(e))) || [];
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
exports.AllianceValidatorInfo = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.globalRewardHistory) {
            params_1.RewardHistory.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.totalDelegatorShares) {
            coin_1.DecCoin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.validatorShares) {
            coin_1.DecCoin.encode(v, writer.uint32(26).fork()).ldelim();
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
                    message.globalRewardHistory.push(params_1.RewardHistory.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.totalDelegatorShares.push(coin_1.DecCoin.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.validatorShares.push(coin_1.DecCoin.decode(reader, reader.uint32()));
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
                ? object.globalRewardHistory.map((e) => params_1.RewardHistory.fromJSON(e))
                : [],
            totalDelegatorShares: Array.isArray(object === null || object === void 0 ? void 0 : object.totalDelegatorShares)
                ? object.totalDelegatorShares.map((e) => coin_1.DecCoin.fromJSON(e))
                : [],
            validatorShares: Array.isArray(object === null || object === void 0 ? void 0 : object.validatorShares)
                ? object.validatorShares.map((e) => coin_1.DecCoin.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.globalRewardHistory) {
            obj.globalRewardHistory = message.globalRewardHistory.map((e) => e ? params_1.RewardHistory.toJSON(e) : undefined);
        }
        else {
            obj.globalRewardHistory = [];
        }
        if (message.totalDelegatorShares) {
            obj.totalDelegatorShares = message.totalDelegatorShares.map((e) => e ? coin_1.DecCoin.toJSON(e) : undefined);
        }
        else {
            obj.totalDelegatorShares = [];
        }
        if (message.validatorShares) {
            obj.validatorShares = message.validatorShares.map((e) => e ? coin_1.DecCoin.toJSON(e) : undefined);
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
            ((_a = object.globalRewardHistory) === null || _a === void 0 ? void 0 : _a.map((e) => params_1.RewardHistory.fromPartial(e))) ||
                [];
        message.totalDelegatorShares =
            ((_b = object.totalDelegatorShares) === null || _b === void 0 ? void 0 : _b.map((e) => coin_1.DecCoin.fromPartial(e))) || [];
        message.validatorShares =
            ((_c = object.validatorShares) === null || _c === void 0 ? void 0 : _c.map((e) => coin_1.DecCoin.fromPartial(e))) || [];
        return message;
    },
};
