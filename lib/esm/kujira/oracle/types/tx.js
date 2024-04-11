import { BinaryReader, BinaryWriter } from "cosmjs-types/binary";
export const protobufPackage = "kujira.oracle";
const baseMsgAggregateExchangeRatePrevote = {
    hash: "",
    feeder: "",
    validator: "",
};
export const MsgAggregateExchangeRatePrevote = {
    encode(message, writer = BinaryWriter.create()) {
        if (message.hash !== "") {
            writer.uint32(10).string(message.hash);
        }
        if (message.feeder !== "") {
            writer.uint32(18).string(message.feeder);
        }
        if (message.validator !== "") {
            writer.uint32(26).string(message.validator);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new BinaryReader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgAggregateExchangeRatePrevote);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hash = reader.string();
                    break;
                case 2:
                    message.feeder = reader.string();
                    break;
                case 3:
                    message.validator = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMsgAggregateExchangeRatePrevote);
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = String(object.hash);
        }
        else {
            message.hash = "";
        }
        if (object.feeder !== undefined && object.feeder !== null) {
            message.feeder = String(object.feeder);
        }
        else {
            message.feeder = "";
        }
        if (object.validator !== undefined && object.validator !== null) {
            message.validator = String(object.validator);
        }
        else {
            message.validator = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.hash !== undefined && (obj.hash = message.hash);
        message.feeder !== undefined && (obj.feeder = message.feeder);
        message.validator !== undefined && (obj.validator = message.validator);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMsgAggregateExchangeRatePrevote);
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = object.hash;
        }
        else {
            message.hash = "";
        }
        if (object.feeder !== undefined && object.feeder !== null) {
            message.feeder = object.feeder;
        }
        else {
            message.feeder = "";
        }
        if (object.validator !== undefined && object.validator !== null) {
            message.validator = object.validator;
        }
        else {
            message.validator = "";
        }
        return message;
    },
};
const baseMsgAggregateExchangeRatePrevoteResponse = {};
export const MsgAggregateExchangeRatePrevoteResponse = {
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new BinaryReader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgAggregateExchangeRatePrevoteResponse);
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
        const message = Object.assign({}, baseMsgAggregateExchangeRatePrevoteResponse);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseMsgAggregateExchangeRatePrevoteResponse);
        return message;
    },
};
const baseMsgAggregateExchangeRateVote = {
    salt: "",
    exchange_rates: "",
    feeder: "",
    validator: "",
};
export const MsgAggregateExchangeRateVote = {
    encode(message, writer = BinaryWriter.create()) {
        if (message.salt !== "") {
            writer.uint32(10).string(message.salt);
        }
        if (message.exchange_rates !== "") {
            writer.uint32(18).string(message.exchange_rates);
        }
        if (message.feeder !== "") {
            writer.uint32(26).string(message.feeder);
        }
        if (message.validator !== "") {
            writer.uint32(34).string(message.validator);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new BinaryReader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgAggregateExchangeRateVote);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.salt = reader.string();
                    break;
                case 2:
                    message.exchange_rates = reader.string();
                    break;
                case 3:
                    message.feeder = reader.string();
                    break;
                case 4:
                    message.validator = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMsgAggregateExchangeRateVote);
        if (object.salt !== undefined && object.salt !== null) {
            message.salt = String(object.salt);
        }
        else {
            message.salt = "";
        }
        if (object.exchange_rates !== undefined && object.exchange_rates !== null) {
            message.exchange_rates = String(object.exchange_rates);
        }
        else {
            message.exchange_rates = "";
        }
        if (object.feeder !== undefined && object.feeder !== null) {
            message.feeder = String(object.feeder);
        }
        else {
            message.feeder = "";
        }
        if (object.validator !== undefined && object.validator !== null) {
            message.validator = String(object.validator);
        }
        else {
            message.validator = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.salt !== undefined && (obj.salt = message.salt);
        message.exchange_rates !== undefined &&
            (obj.exchange_rates = message.exchange_rates);
        message.feeder !== undefined && (obj.feeder = message.feeder);
        message.validator !== undefined && (obj.validator = message.validator);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMsgAggregateExchangeRateVote);
        if (object.salt !== undefined && object.salt !== null) {
            message.salt = object.salt;
        }
        else {
            message.salt = "";
        }
        if (object.exchange_rates !== undefined && object.exchange_rates !== null) {
            message.exchange_rates = object.exchange_rates;
        }
        else {
            message.exchange_rates = "";
        }
        if (object.feeder !== undefined && object.feeder !== null) {
            message.feeder = object.feeder;
        }
        else {
            message.feeder = "";
        }
        if (object.validator !== undefined && object.validator !== null) {
            message.validator = object.validator;
        }
        else {
            message.validator = "";
        }
        return message;
    },
};
const baseMsgAggregateExchangeRateVoteResponse = {};
export const MsgAggregateExchangeRateVoteResponse = {
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new BinaryReader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgAggregateExchangeRateVoteResponse);
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
        const message = Object.assign({}, baseMsgAggregateExchangeRateVoteResponse);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseMsgAggregateExchangeRateVoteResponse);
        return message;
    },
};
const baseMsgDelegateFeedConsent = { operator: "", delegate: "" };
export const MsgDelegateFeedConsent = {
    encode(message, writer = BinaryWriter.create()) {
        if (message.operator !== "") {
            writer.uint32(10).string(message.operator);
        }
        if (message.delegate !== "") {
            writer.uint32(18).string(message.delegate);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new BinaryReader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgDelegateFeedConsent);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.operator = reader.string();
                    break;
                case 2:
                    message.delegate = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMsgDelegateFeedConsent);
        if (object.operator !== undefined && object.operator !== null) {
            message.operator = String(object.operator);
        }
        else {
            message.operator = "";
        }
        if (object.delegate !== undefined && object.delegate !== null) {
            message.delegate = String(object.delegate);
        }
        else {
            message.delegate = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.operator !== undefined && (obj.operator = message.operator);
        message.delegate !== undefined && (obj.delegate = message.delegate);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMsgDelegateFeedConsent);
        if (object.operator !== undefined && object.operator !== null) {
            message.operator = object.operator;
        }
        else {
            message.operator = "";
        }
        if (object.delegate !== undefined && object.delegate !== null) {
            message.delegate = object.delegate;
        }
        else {
            message.delegate = "";
        }
        return message;
    },
};
const baseMsgDelegateFeedConsentResponse = {};
export const MsgDelegateFeedConsentResponse = {
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new BinaryReader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgDelegateFeedConsentResponse);
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
        const message = Object.assign({}, baseMsgDelegateFeedConsentResponse);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseMsgDelegateFeedConsentResponse);
        return message;
    },
};
