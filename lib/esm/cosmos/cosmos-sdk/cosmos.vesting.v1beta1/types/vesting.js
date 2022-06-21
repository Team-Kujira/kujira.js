import { Writer, Reader } from "protobufjs/minimal";
import { longToNumber } from "../../../../types";
import { Coin } from "../../../../types/cosmos/base/coin";
import { BaseAccount } from "./auth";
export const protobufPackage = "cosmos.vesting.v1beta1";
const baseBaseVestingAccount = { end_time: 0 };
export const BaseVestingAccount = {
    encode(message, writer = Writer.create()) {
        if (message.base_account !== undefined) {
            BaseAccount.encode(message.base_account, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.original_vesting) {
            Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.delegated_free) {
            Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.delegated_vesting) {
            Coin.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.end_time !== 0) {
            writer.uint32(40).int64(message.end_time);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseBaseVestingAccount);
        message.original_vesting = [];
        message.delegated_free = [];
        message.delegated_vesting = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.base_account = BaseAccount.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.original_vesting.push(Coin.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.delegated_free.push(Coin.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.delegated_vesting.push(Coin.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.end_time = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseBaseVestingAccount);
        message.original_vesting = [];
        message.delegated_free = [];
        message.delegated_vesting = [];
        if (object.base_account !== undefined && object.base_account !== null) {
            message.base_account = BaseAccount.fromJSON(object.base_account);
        }
        else {
            message.base_account = undefined;
        }
        if (object.original_vesting !== undefined &&
            object.original_vesting !== null) {
            for (const e of object.original_vesting) {
                message.original_vesting.push(Coin.fromJSON(e));
            }
        }
        if (object.delegated_free !== undefined && object.delegated_free !== null) {
            for (const e of object.delegated_free) {
                message.delegated_free.push(Coin.fromJSON(e));
            }
        }
        if (object.delegated_vesting !== undefined &&
            object.delegated_vesting !== null) {
            for (const e of object.delegated_vesting) {
                message.delegated_vesting.push(Coin.fromJSON(e));
            }
        }
        if (object.end_time !== undefined && object.end_time !== null) {
            message.end_time = Number(object.end_time);
        }
        else {
            message.end_time = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.base_account !== undefined &&
            (obj.base_account = message.base_account
                ? BaseAccount.toJSON(message.base_account)
                : undefined);
        if (message.original_vesting) {
            obj.original_vesting = message.original_vesting.map((e) => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.original_vesting = [];
        }
        if (message.delegated_free) {
            obj.delegated_free = message.delegated_free.map((e) => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.delegated_free = [];
        }
        if (message.delegated_vesting) {
            obj.delegated_vesting = message.delegated_vesting.map((e) => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.delegated_vesting = [];
        }
        message.end_time !== undefined && (obj.end_time = message.end_time);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseBaseVestingAccount);
        message.original_vesting = [];
        message.delegated_free = [];
        message.delegated_vesting = [];
        if (object.base_account !== undefined && object.base_account !== null) {
            message.base_account = BaseAccount.fromPartial(object.base_account);
        }
        else {
            message.base_account = undefined;
        }
        if (object.original_vesting !== undefined &&
            object.original_vesting !== null) {
            for (const e of object.original_vesting) {
                message.original_vesting.push(Coin.fromPartial(e));
            }
        }
        if (object.delegated_free !== undefined && object.delegated_free !== null) {
            for (const e of object.delegated_free) {
                message.delegated_free.push(Coin.fromPartial(e));
            }
        }
        if (object.delegated_vesting !== undefined &&
            object.delegated_vesting !== null) {
            for (const e of object.delegated_vesting) {
                message.delegated_vesting.push(Coin.fromPartial(e));
            }
        }
        if (object.end_time !== undefined && object.end_time !== null) {
            message.end_time = object.end_time;
        }
        else {
            message.end_time = 0;
        }
        return message;
    },
};
const baseContinuousVestingAccount = { start_time: 0 };
export const ContinuousVestingAccount = {
    encode(message, writer = Writer.create()) {
        if (message.base_vesting_account !== undefined) {
            BaseVestingAccount.encode(message.base_vesting_account, writer.uint32(10).fork()).ldelim();
        }
        if (message.start_time !== 0) {
            writer.uint32(16).int64(message.start_time);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseContinuousVestingAccount);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.base_vesting_account = BaseVestingAccount.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.start_time = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseContinuousVestingAccount);
        if (object.base_vesting_account !== undefined &&
            object.base_vesting_account !== null) {
            message.base_vesting_account = BaseVestingAccount.fromJSON(object.base_vesting_account);
        }
        else {
            message.base_vesting_account = undefined;
        }
        if (object.start_time !== undefined && object.start_time !== null) {
            message.start_time = Number(object.start_time);
        }
        else {
            message.start_time = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.base_vesting_account !== undefined &&
            (obj.base_vesting_account = message.base_vesting_account
                ? BaseVestingAccount.toJSON(message.base_vesting_account)
                : undefined);
        message.start_time !== undefined && (obj.start_time = message.start_time);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseContinuousVestingAccount);
        if (object.base_vesting_account !== undefined &&
            object.base_vesting_account !== null) {
            message.base_vesting_account = BaseVestingAccount.fromPartial(object.base_vesting_account);
        }
        else {
            message.base_vesting_account = undefined;
        }
        if (object.start_time !== undefined && object.start_time !== null) {
            message.start_time = object.start_time;
        }
        else {
            message.start_time = 0;
        }
        return message;
    },
};
const baseDelayedVestingAccount = {};
export const DelayedVestingAccount = {
    encode(message, writer = Writer.create()) {
        if (message.base_vesting_account !== undefined) {
            BaseVestingAccount.encode(message.base_vesting_account, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDelayedVestingAccount);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.base_vesting_account = BaseVestingAccount.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDelayedVestingAccount);
        if (object.base_vesting_account !== undefined &&
            object.base_vesting_account !== null) {
            message.base_vesting_account = BaseVestingAccount.fromJSON(object.base_vesting_account);
        }
        else {
            message.base_vesting_account = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.base_vesting_account !== undefined &&
            (obj.base_vesting_account = message.base_vesting_account
                ? BaseVestingAccount.toJSON(message.base_vesting_account)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseDelayedVestingAccount);
        if (object.base_vesting_account !== undefined &&
            object.base_vesting_account !== null) {
            message.base_vesting_account = BaseVestingAccount.fromPartial(object.base_vesting_account);
        }
        else {
            message.base_vesting_account = undefined;
        }
        return message;
    },
};
const basePeriod = { length: 0 };
export const Period = {
    encode(message, writer = Writer.create()) {
        if (message.length !== 0) {
            writer.uint32(8).int64(message.length);
        }
        for (const v of message.amount) {
            Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, basePeriod);
        message.amount = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.length = longToNumber(reader.int64());
                    break;
                case 2:
                    message.amount.push(Coin.decode(reader, reader.uint32()));
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
        if (object.length !== undefined && object.length !== null) {
            message.length = Number(object.length);
        }
        else {
            message.length = 0;
        }
        if (object.amount !== undefined && object.amount !== null) {
            for (const e of object.amount) {
                message.amount.push(Coin.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.length !== undefined && (obj.length = message.length);
        if (message.amount) {
            obj.amount = message.amount.map((e) => (e ? Coin.toJSON(e) : undefined));
        }
        else {
            obj.amount = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, basePeriod);
        message.amount = [];
        if (object.length !== undefined && object.length !== null) {
            message.length = object.length;
        }
        else {
            message.length = 0;
        }
        if (object.amount !== undefined && object.amount !== null) {
            for (const e of object.amount) {
                message.amount.push(Coin.fromPartial(e));
            }
        }
        return message;
    },
};
const basePeriodicVestingAccount = { start_time: 0 };
export const PeriodicVestingAccount = {
    encode(message, writer = Writer.create()) {
        if (message.base_vesting_account !== undefined) {
            BaseVestingAccount.encode(message.base_vesting_account, writer.uint32(10).fork()).ldelim();
        }
        if (message.start_time !== 0) {
            writer.uint32(16).int64(message.start_time);
        }
        for (const v of message.vesting_periods) {
            Period.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, basePeriodicVestingAccount);
        message.vesting_periods = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.base_vesting_account = BaseVestingAccount.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.start_time = longToNumber(reader.int64());
                    break;
                case 3:
                    message.vesting_periods.push(Period.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, basePeriodicVestingAccount);
        message.vesting_periods = [];
        if (object.base_vesting_account !== undefined &&
            object.base_vesting_account !== null) {
            message.base_vesting_account = BaseVestingAccount.fromJSON(object.base_vesting_account);
        }
        else {
            message.base_vesting_account = undefined;
        }
        if (object.start_time !== undefined && object.start_time !== null) {
            message.start_time = Number(object.start_time);
        }
        else {
            message.start_time = 0;
        }
        if (object.vesting_periods !== undefined &&
            object.vesting_periods !== null) {
            for (const e of object.vesting_periods) {
                message.vesting_periods.push(Period.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.base_vesting_account !== undefined &&
            (obj.base_vesting_account = message.base_vesting_account
                ? BaseVestingAccount.toJSON(message.base_vesting_account)
                : undefined);
        message.start_time !== undefined && (obj.start_time = message.start_time);
        if (message.vesting_periods) {
            obj.vesting_periods = message.vesting_periods.map((e) => e ? Period.toJSON(e) : undefined);
        }
        else {
            obj.vesting_periods = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, basePeriodicVestingAccount);
        message.vesting_periods = [];
        if (object.base_vesting_account !== undefined &&
            object.base_vesting_account !== null) {
            message.base_vesting_account = BaseVestingAccount.fromPartial(object.base_vesting_account);
        }
        else {
            message.base_vesting_account = undefined;
        }
        if (object.start_time !== undefined && object.start_time !== null) {
            message.start_time = object.start_time;
        }
        else {
            message.start_time = 0;
        }
        if (object.vesting_periods !== undefined &&
            object.vesting_periods !== null) {
            for (const e of object.vesting_periods) {
                message.vesting_periods.push(Period.fromPartial(e));
            }
        }
        return message;
    },
};
const basePermanentLockedAccount = {};
export const PermanentLockedAccount = {
    encode(message, writer = Writer.create()) {
        if (message.base_vesting_account !== undefined) {
            BaseVestingAccount.encode(message.base_vesting_account, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, basePermanentLockedAccount);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.base_vesting_account = BaseVestingAccount.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, basePermanentLockedAccount);
        if (object.base_vesting_account !== undefined &&
            object.base_vesting_account !== null) {
            message.base_vesting_account = BaseVestingAccount.fromJSON(object.base_vesting_account);
        }
        else {
            message.base_vesting_account = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.base_vesting_account !== undefined &&
            (obj.base_vesting_account = message.base_vesting_account
                ? BaseVestingAccount.toJSON(message.base_vesting_account)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, basePermanentLockedAccount);
        if (object.base_vesting_account !== undefined &&
            object.base_vesting_account !== null) {
            message.base_vesting_account = BaseVestingAccount.fromPartial(object.base_vesting_account);
        }
        else {
            message.base_vesting_account = undefined;
        }
        return message;
    },
};
