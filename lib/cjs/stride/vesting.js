"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StridePeriodicVestingAccount = exports.Period = void 0;
const binary_1 = require("cosmjs-types/binary");
const coin_1 = require("cosmjs-types/cosmos/base/v1beta1/coin");
const vesting_1 = require("cosmjs-types/cosmos/vesting/v1beta1/vesting");
const basePeriod = {
    startTime: BigInt(0),
    length: BigInt(0),
    actionType: 0,
};
exports.Period = {
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.startTime !== BigInt(0)) {
            writer.uint32(8).int64(message.startTime);
        }
        if (message.length !== BigInt(0)) {
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
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
            message.startTime = BigInt(object.startTime);
        }
        else {
            message.startTime = BigInt(0);
        }
        if (object.length !== undefined && object.length !== null) {
            message.length = BigInt(object.length);
        }
        else {
            message.length = BigInt(0);
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
            (obj.startTime = (message.startTime || BigInt(0)).toString());
        message.length !== undefined &&
            (obj.length = (message.length || BigInt(0)).toString());
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
            message.startTime = BigInt(0);
        }
        if (object.length !== undefined && object.length !== null) {
            message.length = object.length;
        }
        else {
            message.length = BigInt(0);
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
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.baseVestingAccount !== undefined) {
            vesting_1.BaseVestingAccount.encode(message.baseVestingAccount, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.vestingPeriods) {
            exports.Period.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
