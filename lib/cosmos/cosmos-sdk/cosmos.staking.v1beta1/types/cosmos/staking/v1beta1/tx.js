/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Description, CommissionRates, } from "../../../cosmos/staking/v1beta1/staking";
import { Any } from "../../../google/protobuf/any";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
export const protobufPackage = "cosmos.staking.v1beta1";
const baseMsgCreateValidator = {
    min_self_delegation: "",
    delegator_address: "",
    validator_address: "",
};
export const MsgCreateValidator = {
    encode(message, writer = Writer.create()) {
        if (message.description !== undefined) {
            Description.encode(message.description, writer.uint32(10).fork()).ldelim();
        }
        if (message.commission !== undefined) {
            CommissionRates.encode(message.commission, writer.uint32(18).fork()).ldelim();
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
            Any.encode(message.pubkey, writer.uint32(50).fork()).ldelim();
        }
        if (message.value !== undefined) {
            Coin.encode(message.value, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgCreateValidator);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.description = Description.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.commission = CommissionRates.decode(reader, reader.uint32());
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
                    message.pubkey = Any.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.value = Coin.decode(reader, reader.uint32());
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
        if (object.description !== undefined &&
            object.description !== null) {
            message.description = Description.fromJSON(object.description);
        }
        else {
            message.description = undefined;
        }
        if (object.commission !== undefined &&
            object.commission !== null) {
            message.commission = CommissionRates.fromJSON(object.commission);
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
            message.pubkey = Any.fromJSON(object.pubkey);
        }
        else {
            message.pubkey = undefined;
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = Coin.fromJSON(object.value);
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
                ? Description.toJSON(message.description)
                : undefined);
        message.commission !== undefined &&
            (obj.commission = message.commission
                ? CommissionRates.toJSON(message.commission)
                : undefined);
        message.min_self_delegation !== undefined &&
            (obj.min_self_delegation = message.min_self_delegation);
        message.delegator_address !== undefined &&
            (obj.delegator_address = message.delegator_address);
        message.validator_address !== undefined &&
            (obj.validator_address = message.validator_address);
        message.pubkey !== undefined &&
            (obj.pubkey = message.pubkey
                ? Any.toJSON(message.pubkey)
                : undefined);
        message.value !== undefined &&
            (obj.value = message.value
                ? Coin.toJSON(message.value)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMsgCreateValidator);
        if (object.description !== undefined &&
            object.description !== null) {
            message.description = Description.fromPartial(object.description);
        }
        else {
            message.description = undefined;
        }
        if (object.commission !== undefined &&
            object.commission !== null) {
            message.commission = CommissionRates.fromPartial(object.commission);
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
            message.pubkey = Any.fromPartial(object.pubkey);
        }
        else {
            message.pubkey = undefined;
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = Coin.fromPartial(object.value);
        }
        else {
            message.value = undefined;
        }
        return message;
    },
};
const baseMsgCreateValidatorResponse = {};
export const MsgCreateValidatorResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
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
export const MsgEditValidator = {
    encode(message, writer = Writer.create()) {
        if (message.description !== undefined) {
            Description.encode(message.description, writer.uint32(10).fork()).ldelim();
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
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgEditValidator);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.description = Description.decode(reader, reader.uint32());
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
        if (object.description !== undefined &&
            object.description !== null) {
            message.description = Description.fromJSON(object.description);
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
                ? Description.toJSON(message.description)
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
        if (object.description !== undefined &&
            object.description !== null) {
            message.description = Description.fromPartial(object.description);
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
export const MsgEditValidatorResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
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
export const MsgDelegate = {
    encode(message, writer = Writer.create()) {
        if (message.delegator_address !== "") {
            writer.uint32(10).string(message.delegator_address);
        }
        if (message.validator_address !== "") {
            writer.uint32(18).string(message.validator_address);
        }
        if (message.amount !== undefined) {
            Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
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
                    message.amount = Coin.decode(reader, reader.uint32());
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
            message.amount = Coin.fromJSON(object.amount);
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
            (obj.amount = message.amount
                ? Coin.toJSON(message.amount)
                : undefined);
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
            message.amount = Coin.fromPartial(object.amount);
        }
        else {
            message.amount = undefined;
        }
        return message;
    },
};
const baseMsgDelegateResponse = {};
export const MsgDelegateResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
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
export const MsgBeginRedelegate = {
    encode(message, writer = Writer.create()) {
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
            Coin.encode(message.amount, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
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
                    message.amount = Coin.decode(reader, reader.uint32());
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
            message.amount = Coin.fromJSON(object.amount);
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
            (obj.amount = message.amount
                ? Coin.toJSON(message.amount)
                : undefined);
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
            message.amount = Coin.fromPartial(object.amount);
        }
        else {
            message.amount = undefined;
        }
        return message;
    },
};
const baseMsgBeginRedelegateResponse = {};
export const MsgBeginRedelegateResponse = {
    encode(message, writer = Writer.create()) {
        if (message.completion_time !== undefined) {
            Timestamp.encode(toTimestamp(message.completion_time), writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgBeginRedelegateResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.completion_time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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
            message.completion_time = fromJsonTimestamp(object.completion_time);
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
export const MsgUndelegate = {
    encode(message, writer = Writer.create()) {
        if (message.delegator_address !== "") {
            writer.uint32(10).string(message.delegator_address);
        }
        if (message.validator_address !== "") {
            writer.uint32(18).string(message.validator_address);
        }
        if (message.amount !== undefined) {
            Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
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
                    message.amount = Coin.decode(reader, reader.uint32());
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
            message.amount = Coin.fromJSON(object.amount);
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
            (obj.amount = message.amount
                ? Coin.toJSON(message.amount)
                : undefined);
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
            message.amount = Coin.fromPartial(object.amount);
        }
        else {
            message.amount = undefined;
        }
        return message;
    },
};
const baseMsgUndelegateResponse = {};
export const MsgUndelegateResponse = {
    encode(message, writer = Writer.create()) {
        if (message.completion_time !== undefined) {
            Timestamp.encode(toTimestamp(message.completion_time), writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgUndelegateResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.completion_time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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
            message.completion_time = fromJsonTimestamp(object.completion_time);
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
export class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    CreateValidator(request) {
        const data = MsgCreateValidator.encode(request).finish();
        const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "CreateValidator", data);
        return promise.then((data) => MsgCreateValidatorResponse.decode(new Reader(data)));
    }
    EditValidator(request) {
        const data = MsgEditValidator.encode(request).finish();
        const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "EditValidator", data);
        return promise.then((data) => MsgEditValidatorResponse.decode(new Reader(data)));
    }
    Delegate(request) {
        const data = MsgDelegate.encode(request).finish();
        const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "Delegate", data);
        return promise.then((data) => MsgDelegateResponse.decode(new Reader(data)));
    }
    BeginRedelegate(request) {
        const data = MsgBeginRedelegate.encode(request).finish();
        const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "BeginRedelegate", data);
        return promise.then((data) => MsgBeginRedelegateResponse.decode(new Reader(data)));
    }
    Undelegate(request) {
        const data = MsgUndelegate.encode(request).finish();
        const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "Undelegate", data);
        return promise.then((data) => MsgUndelegateResponse.decode(new Reader(data)));
    }
}
function toTimestamp(date) {
    const seconds = date.getTime() / 1000;
    const nanos = (date.getTime() % 1000) * 1000000;
    return { seconds, nanos };
}
function fromTimestamp(t) {
    let millis = t.seconds * 1000;
    millis += t.nanos / 1000000;
    return new Date(millis);
}
function fromJsonTimestamp(o) {
    if (o instanceof Date) {
        return o;
    }
    else if (typeof o === "string") {
        return new Date(o);
    }
    else {
        return fromTimestamp(Timestamp.fromJSON(o));
    }
}
