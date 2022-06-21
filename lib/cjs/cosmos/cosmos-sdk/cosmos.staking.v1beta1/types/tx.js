"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = exports.MsgUndelegateResponse = exports.MsgUndelegate = exports.MsgBeginRedelegateResponse = exports.MsgBeginRedelegate = exports.MsgDelegateResponse = exports.MsgDelegate = exports.MsgEditValidatorResponse = exports.MsgEditValidator = exports.MsgCreateValidatorResponse = exports.MsgCreateValidator = exports.protobufPackage = void 0;
/* eslint-disable */
const minimal_1 = require("protobufjs/minimal");
const types_1 = require("../../../../types");
const coin_1 = require("../../../../types/cosmos/base/coin");
const any_1 = require("../../../../types/google/protobuf/any");
const timestamp_1 = require("../../../../types/google/protobuf/timestamp");
const staking_1 = require("./staking");
exports.protobufPackage = "cosmos.staking.v1beta1";
const baseMsgCreateValidator = {
    min_self_delegation: "",
    delegator_address: "",
    validator_address: "",
};
exports.MsgCreateValidator = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.description !== undefined) {
            staking_1.Description.encode(message.description, writer.uint32(10).fork()).ldelim();
        }
        if (message.commission !== undefined) {
            staking_1.CommissionRates.encode(message.commission, writer.uint32(18).fork()).ldelim();
        }
        if (message.min_self_delegation !== "") {
            writer.uint32(26).string(message.min_self_delegation);
        }
        if (message.delegator_address !== "") {
            writer.uint32(34).string(message.delegator_address);
        }
        if (message.validator_address !== "") {
            writer.uint32(42).string(message.validator_address);
        }
        if (message.pubkey !== undefined) {
            any_1.Any.encode(message.pubkey, writer.uint32(50).fork()).ldelim();
        }
        if (message.value !== undefined) {
            coin_1.Coin.encode(message.value, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgCreateValidator);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.description = staking_1.Description.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.commission = staking_1.CommissionRates.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.min_self_delegation = reader.string();
                    break;
                case 4:
                    message.delegator_address = reader.string();
                    break;
                case 5:
                    message.validator_address = reader.string();
                    break;
                case 6:
                    message.pubkey = any_1.Any.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.value = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMsgCreateValidator);
        if (object.description !== undefined && object.description !== null) {
            message.description = staking_1.Description.fromJSON(object.description);
        }
        else {
            message.description = undefined;
        }
        if (object.commission !== undefined && object.commission !== null) {
            message.commission = staking_1.CommissionRates.fromJSON(object.commission);
        }
        else {
            message.commission = undefined;
        }
        if (object.min_self_delegation !== undefined &&
            object.min_self_delegation !== null) {
            message.min_self_delegation = String(object.min_self_delegation);
        }
        else {
            message.min_self_delegation = "";
        }
        if (object.delegator_address !== undefined &&
            object.delegator_address !== null) {
            message.delegator_address = String(object.delegator_address);
        }
        else {
            message.delegator_address = "";
        }
        if (object.validator_address !== undefined &&
            object.validator_address !== null) {
            message.validator_address = String(object.validator_address);
        }
        else {
            message.validator_address = "";
        }
        if (object.pubkey !== undefined && object.pubkey !== null) {
            message.pubkey = any_1.Any.fromJSON(object.pubkey);
        }
        else {
            message.pubkey = undefined;
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = coin_1.Coin.fromJSON(object.value);
        }
        else {
            message.value = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.description !== undefined &&
            (obj.description = message.description
                ? staking_1.Description.toJSON(message.description)
                : undefined);
        message.commission !== undefined &&
            (obj.commission = message.commission
                ? staking_1.CommissionRates.toJSON(message.commission)
                : undefined);
        message.min_self_delegation !== undefined &&
            (obj.min_self_delegation = message.min_self_delegation);
        message.delegator_address !== undefined &&
            (obj.delegator_address = message.delegator_address);
        message.validator_address !== undefined &&
            (obj.validator_address = message.validator_address);
        message.pubkey !== undefined &&
            (obj.pubkey = message.pubkey ? any_1.Any.toJSON(message.pubkey) : undefined);
        message.value !== undefined &&
            (obj.value = message.value ? coin_1.Coin.toJSON(message.value) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMsgCreateValidator);
        if (object.description !== undefined && object.description !== null) {
            message.description = staking_1.Description.fromPartial(object.description);
        }
        else {
            message.description = undefined;
        }
        if (object.commission !== undefined && object.commission !== null) {
            message.commission = staking_1.CommissionRates.fromPartial(object.commission);
        }
        else {
            message.commission = undefined;
        }
        if (object.min_self_delegation !== undefined &&
            object.min_self_delegation !== null) {
            message.min_self_delegation = object.min_self_delegation;
        }
        else {
            message.min_self_delegation = "";
        }
        if (object.delegator_address !== undefined &&
            object.delegator_address !== null) {
            message.delegator_address = object.delegator_address;
        }
        else {
            message.delegator_address = "";
        }
        if (object.validator_address !== undefined &&
            object.validator_address !== null) {
            message.validator_address = object.validator_address;
        }
        else {
            message.validator_address = "";
        }
        if (object.pubkey !== undefined && object.pubkey !== null) {
            message.pubkey = any_1.Any.fromPartial(object.pubkey);
        }
        else {
            message.pubkey = undefined;
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = coin_1.Coin.fromPartial(object.value);
        }
        else {
            message.value = undefined;
        }
        return message;
    },
};
const baseMsgCreateValidatorResponse = {};
exports.MsgCreateValidatorResponse = {
    encode(_, writer = minimal_1.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgCreateValidatorResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = Object.assign({}, baseMsgCreateValidatorResponse);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseMsgCreateValidatorResponse);
        return message;
    },
};
const baseMsgEditValidator = {
    validator_address: "",
    commission_rate: "",
    min_self_delegation: "",
};
exports.MsgEditValidator = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.description !== undefined) {
            staking_1.Description.encode(message.description, writer.uint32(10).fork()).ldelim();
        }
        if (message.validator_address !== "") {
            writer.uint32(18).string(message.validator_address);
        }
        if (message.commission_rate !== "") {
            writer.uint32(26).string(message.commission_rate);
        }
        if (message.min_self_delegation !== "") {
            writer.uint32(34).string(message.min_self_delegation);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgEditValidator);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.description = staking_1.Description.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.validator_address = reader.string();
                    break;
                case 3:
                    message.commission_rate = reader.string();
                    break;
                case 4:
                    message.min_self_delegation = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMsgEditValidator);
        if (object.description !== undefined && object.description !== null) {
            message.description = staking_1.Description.fromJSON(object.description);
        }
        else {
            message.description = undefined;
        }
        if (object.validator_address !== undefined &&
            object.validator_address !== null) {
            message.validator_address = String(object.validator_address);
        }
        else {
            message.validator_address = "";
        }
        if (object.commission_rate !== undefined &&
            object.commission_rate !== null) {
            message.commission_rate = String(object.commission_rate);
        }
        else {
            message.commission_rate = "";
        }
        if (object.min_self_delegation !== undefined &&
            object.min_self_delegation !== null) {
            message.min_self_delegation = String(object.min_self_delegation);
        }
        else {
            message.min_self_delegation = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.description !== undefined &&
            (obj.description = message.description
                ? staking_1.Description.toJSON(message.description)
                : undefined);
        message.validator_address !== undefined &&
            (obj.validator_address = message.validator_address);
        message.commission_rate !== undefined &&
            (obj.commission_rate = message.commission_rate);
        message.min_self_delegation !== undefined &&
            (obj.min_self_delegation = message.min_self_delegation);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMsgEditValidator);
        if (object.description !== undefined && object.description !== null) {
            message.description = staking_1.Description.fromPartial(object.description);
        }
        else {
            message.description = undefined;
        }
        if (object.validator_address !== undefined &&
            object.validator_address !== null) {
            message.validator_address = object.validator_address;
        }
        else {
            message.validator_address = "";
        }
        if (object.commission_rate !== undefined &&
            object.commission_rate !== null) {
            message.commission_rate = object.commission_rate;
        }
        else {
            message.commission_rate = "";
        }
        if (object.min_self_delegation !== undefined &&
            object.min_self_delegation !== null) {
            message.min_self_delegation = object.min_self_delegation;
        }
        else {
            message.min_self_delegation = "";
        }
        return message;
    },
};
const baseMsgEditValidatorResponse = {};
exports.MsgEditValidatorResponse = {
    encode(_, writer = minimal_1.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgEditValidatorResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = Object.assign({}, baseMsgEditValidatorResponse);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseMsgEditValidatorResponse);
        return message;
    },
};
const baseMsgDelegate = {
    delegator_address: "",
    validator_address: "",
};
exports.MsgDelegate = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.delegator_address !== "") {
            writer.uint32(10).string(message.delegator_address);
        }
        if (message.validator_address !== "") {
            writer.uint32(18).string(message.validator_address);
        }
        if (message.amount !== undefined) {
            coin_1.Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgDelegate);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegator_address = reader.string();
                    break;
                case 2:
                    message.validator_address = reader.string();
                    break;
                case 3:
                    message.amount = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMsgDelegate);
        if (object.delegator_address !== undefined &&
            object.delegator_address !== null) {
            message.delegator_address = String(object.delegator_address);
        }
        else {
            message.delegator_address = "";
        }
        if (object.validator_address !== undefined &&
            object.validator_address !== null) {
            message.validator_address = String(object.validator_address);
        }
        else {
            message.validator_address = "";
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = coin_1.Coin.fromJSON(object.amount);
        }
        else {
            message.amount = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.delegator_address !== undefined &&
            (obj.delegator_address = message.delegator_address);
        message.validator_address !== undefined &&
            (obj.validator_address = message.validator_address);
        message.amount !== undefined &&
            (obj.amount = message.amount ? coin_1.Coin.toJSON(message.amount) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMsgDelegate);
        if (object.delegator_address !== undefined &&
            object.delegator_address !== null) {
            message.delegator_address = object.delegator_address;
        }
        else {
            message.delegator_address = "";
        }
        if (object.validator_address !== undefined &&
            object.validator_address !== null) {
            message.validator_address = object.validator_address;
        }
        else {
            message.validator_address = "";
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = coin_1.Coin.fromPartial(object.amount);
        }
        else {
            message.amount = undefined;
        }
        return message;
    },
};
const baseMsgDelegateResponse = {};
exports.MsgDelegateResponse = {
    encode(_, writer = minimal_1.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgDelegateResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = Object.assign({}, baseMsgDelegateResponse);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseMsgDelegateResponse);
        return message;
    },
};
const baseMsgBeginRedelegate = {
    delegator_address: "",
    validator_src_address: "",
    validator_dst_address: "",
};
exports.MsgBeginRedelegate = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.delegator_address !== "") {
            writer.uint32(10).string(message.delegator_address);
        }
        if (message.validator_src_address !== "") {
            writer.uint32(18).string(message.validator_src_address);
        }
        if (message.validator_dst_address !== "") {
            writer.uint32(26).string(message.validator_dst_address);
        }
        if (message.amount !== undefined) {
            coin_1.Coin.encode(message.amount, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgBeginRedelegate);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegator_address = reader.string();
                    break;
                case 2:
                    message.validator_src_address = reader.string();
                    break;
                case 3:
                    message.validator_dst_address = reader.string();
                    break;
                case 4:
                    message.amount = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMsgBeginRedelegate);
        if (object.delegator_address !== undefined &&
            object.delegator_address !== null) {
            message.delegator_address = String(object.delegator_address);
        }
        else {
            message.delegator_address = "";
        }
        if (object.validator_src_address !== undefined &&
            object.validator_src_address !== null) {
            message.validator_src_address = String(object.validator_src_address);
        }
        else {
            message.validator_src_address = "";
        }
        if (object.validator_dst_address !== undefined &&
            object.validator_dst_address !== null) {
            message.validator_dst_address = String(object.validator_dst_address);
        }
        else {
            message.validator_dst_address = "";
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = coin_1.Coin.fromJSON(object.amount);
        }
        else {
            message.amount = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.delegator_address !== undefined &&
            (obj.delegator_address = message.delegator_address);
        message.validator_src_address !== undefined &&
            (obj.validator_src_address = message.validator_src_address);
        message.validator_dst_address !== undefined &&
            (obj.validator_dst_address = message.validator_dst_address);
        message.amount !== undefined &&
            (obj.amount = message.amount ? coin_1.Coin.toJSON(message.amount) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMsgBeginRedelegate);
        if (object.delegator_address !== undefined &&
            object.delegator_address !== null) {
            message.delegator_address = object.delegator_address;
        }
        else {
            message.delegator_address = "";
        }
        if (object.validator_src_address !== undefined &&
            object.validator_src_address !== null) {
            message.validator_src_address = object.validator_src_address;
        }
        else {
            message.validator_src_address = "";
        }
        if (object.validator_dst_address !== undefined &&
            object.validator_dst_address !== null) {
            message.validator_dst_address = object.validator_dst_address;
        }
        else {
            message.validator_dst_address = "";
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = coin_1.Coin.fromPartial(object.amount);
        }
        else {
            message.amount = undefined;
        }
        return message;
    },
};
const baseMsgBeginRedelegateResponse = {};
exports.MsgBeginRedelegateResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.completion_time !== undefined) {
            timestamp_1.Timestamp.encode((0, types_1.toTimestamp)(message.completion_time), writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgBeginRedelegateResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.completion_time = (0, types_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMsgBeginRedelegateResponse);
        if (object.completion_time !== undefined &&
            object.completion_time !== null) {
            message.completion_time = (0, types_1.fromJsonTimestamp)(object.completion_time);
        }
        else {
            message.completion_time = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.completion_time !== undefined &&
            (obj.completion_time =
                message.completion_time !== undefined
                    ? message.completion_time.toISOString()
                    : null);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMsgBeginRedelegateResponse);
        if (object.completion_time !== undefined &&
            object.completion_time !== null) {
            message.completion_time = object.completion_time;
        }
        else {
            message.completion_time = undefined;
        }
        return message;
    },
};
const baseMsgUndelegate = {
    delegator_address: "",
    validator_address: "",
};
exports.MsgUndelegate = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.delegator_address !== "") {
            writer.uint32(10).string(message.delegator_address);
        }
        if (message.validator_address !== "") {
            writer.uint32(18).string(message.validator_address);
        }
        if (message.amount !== undefined) {
            coin_1.Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgUndelegate);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegator_address = reader.string();
                    break;
                case 2:
                    message.validator_address = reader.string();
                    break;
                case 3:
                    message.amount = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMsgUndelegate);
        if (object.delegator_address !== undefined &&
            object.delegator_address !== null) {
            message.delegator_address = String(object.delegator_address);
        }
        else {
            message.delegator_address = "";
        }
        if (object.validator_address !== undefined &&
            object.validator_address !== null) {
            message.validator_address = String(object.validator_address);
        }
        else {
            message.validator_address = "";
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = coin_1.Coin.fromJSON(object.amount);
        }
        else {
            message.amount = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.delegator_address !== undefined &&
            (obj.delegator_address = message.delegator_address);
        message.validator_address !== undefined &&
            (obj.validator_address = message.validator_address);
        message.amount !== undefined &&
            (obj.amount = message.amount ? coin_1.Coin.toJSON(message.amount) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMsgUndelegate);
        if (object.delegator_address !== undefined &&
            object.delegator_address !== null) {
            message.delegator_address = object.delegator_address;
        }
        else {
            message.delegator_address = "";
        }
        if (object.validator_address !== undefined &&
            object.validator_address !== null) {
            message.validator_address = object.validator_address;
        }
        else {
            message.validator_address = "";
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = coin_1.Coin.fromPartial(object.amount);
        }
        else {
            message.amount = undefined;
        }
        return message;
    },
};
const baseMsgUndelegateResponse = {};
exports.MsgUndelegateResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.completion_time !== undefined) {
            timestamp_1.Timestamp.encode((0, types_1.toTimestamp)(message.completion_time), writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgUndelegateResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.completion_time = (0, types_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMsgUndelegateResponse);
        if (object.completion_time !== undefined &&
            object.completion_time !== null) {
            message.completion_time = (0, types_1.fromJsonTimestamp)(object.completion_time);
        }
        else {
            message.completion_time = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.completion_time !== undefined &&
            (obj.completion_time =
                message.completion_time !== undefined
                    ? message.completion_time.toISOString()
                    : null);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMsgUndelegateResponse);
        if (object.completion_time !== undefined &&
            object.completion_time !== null) {
            message.completion_time = object.completion_time;
        }
        else {
            message.completion_time = undefined;
        }
        return message;
    },
};
class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    CreateValidator(request) {
        const data = exports.MsgCreateValidator.encode(request).finish();
        const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "CreateValidator", data);
        return promise.then((data) => exports.MsgCreateValidatorResponse.decode(new minimal_1.Reader(data)));
    }
    EditValidator(request) {
        const data = exports.MsgEditValidator.encode(request).finish();
        const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "EditValidator", data);
        return promise.then((data) => exports.MsgEditValidatorResponse.decode(new minimal_1.Reader(data)));
    }
    Delegate(request) {
        const data = exports.MsgDelegate.encode(request).finish();
        const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "Delegate", data);
        return promise.then((data) => exports.MsgDelegateResponse.decode(new minimal_1.Reader(data)));
    }
    BeginRedelegate(request) {
        const data = exports.MsgBeginRedelegate.encode(request).finish();
        const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "BeginRedelegate", data);
        return promise.then((data) => exports.MsgBeginRedelegateResponse.decode(new minimal_1.Reader(data)));
    }
    Undelegate(request) {
        const data = exports.MsgUndelegate.encode(request).finish();
        const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "Undelegate", data);
        return promise.then((data) => exports.MsgUndelegateResponse.decode(new minimal_1.Reader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
