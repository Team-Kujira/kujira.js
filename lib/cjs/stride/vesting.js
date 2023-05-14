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
exports.StridePeriodicVestingAccount = exports.Period = void 0;
const coin_1 = require("cosmjs-types/cosmos/base/v1beta1/coin");
const vesting_1 = require("cosmjs-types/cosmos/vesting/v1beta1/vesting");
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const basePeriod = {
    startTime: long_1.default.ZERO,
    length: long_1.default.ZERO,
    actionType: 0,
};
exports.Period = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.startTime.isZero()) {
            writer.uint32(8).int64(message.startTime);
        }
        if (!message.length.isZero()) {
            writer.uint32(16).int64(message.length);
        }
        for (const v of message.amount) {
            coin_1.Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.actionType !== 0) {
            writer.uint32(32).int32(message.actionType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, basePeriod);
        message.amount = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.startTime = reader.int64();
                    break;
                case 2:
                    message.length = reader.int64();
                    break;
                case 3:
                    message.amount.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.actionType = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, basePeriod);
        message.amount = [];
        if (object.startTime !== undefined && object.startTime !== null) {
            message.startTime = long_1.default.fromString(object.startTime);
        }
        else {
            message.startTime = long_1.default.ZERO;
        }
        if (object.length !== undefined && object.length !== null) {
            message.length = long_1.default.fromString(object.length);
        }
        else {
            message.length = long_1.default.ZERO;
        }
        if (object.amount !== undefined && object.amount !== null) {
            for (const e of object.amount) {
                message.amount.push(coin_1.Coin.fromJSON(e));
            }
        }
        if (object.actionType !== undefined && object.actionType !== null) {
            message.actionType = Number(object.actionType);
        }
        else {
            message.actionType = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.startTime !== undefined &&
            (obj.startTime = (message.startTime || long_1.default.ZERO).toString());
        message.length !== undefined &&
            (obj.length = (message.length || long_1.default.ZERO).toString());
        if (message.amount) {
            obj.amount = message.amount.map((e) => (e ? coin_1.Coin.toJSON(e) : undefined));
        }
        else {
            obj.amount = [];
        }
        message.actionType !== undefined && (obj.actionType = message.actionType);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, basePeriod);
        message.amount = [];
        if (object.startTime !== undefined && object.startTime !== null) {
            message.startTime = object.startTime;
        }
        else {
            message.startTime = long_1.default.ZERO;
        }
        if (object.length !== undefined && object.length !== null) {
            message.length = object.length;
        }
        else {
            message.length = long_1.default.ZERO;
        }
        if (object.amount !== undefined && object.amount !== null) {
            for (const e of object.amount) {
                message.amount.push(coin_1.Coin.fromPartial(e));
            }
        }
        if (object.actionType !== undefined && object.actionType !== null) {
            message.actionType = object.actionType;
        }
        else {
            message.actionType = 0;
        }
        return message;
    },
};
function createBaseStridePeriodicVestingAccount() {
    return {
        baseVestingAccount: undefined,
        vestingPeriods: [],
    };
}
exports.StridePeriodicVestingAccount = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.baseVestingAccount !== undefined) {
            vesting_1.BaseVestingAccount.encode(message.baseVestingAccount, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.vestingPeriods) {
            exports.Period.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStridePeriodicVestingAccount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.baseVestingAccount = vesting_1.BaseVestingAccount.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.vestingPeriods.push(exports.Period.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseStridePeriodicVestingAccount();
        message.baseVestingAccount =
            object.baseVestingAccount !== undefined &&
                object.baseVestingAccount !== null
                ? vesting_1.BaseVestingAccount.fromPartial(object.baseVestingAccount)
                : undefined;
        message.vestingPeriods =
            ((_a = object.vestingPeriods) === null || _a === void 0 ? void 0 : _a.map((e) => exports.Period.fromPartial(e))) || [];
        return message;
    },
};
