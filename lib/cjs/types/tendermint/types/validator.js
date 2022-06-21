"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleValidator = exports.Validator = exports.ValidatorSet = exports.protobufPackage = void 0;
const minimal_1 = require("protobufjs/minimal");
const __1 = require("../..");
const keys_1 = require("../../tendermint/crypto/keys");
exports.protobufPackage = "tendermint.types";
const baseValidatorSet = { total_voting_power: 0 };
exports.ValidatorSet = {
    encode(message, writer = minimal_1.Writer.create()) {
        for (const v of message.validators) {
            exports.Validator.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.proposer !== undefined) {
            exports.Validator.encode(message.proposer, writer.uint32(18).fork()).ldelim();
        }
        if (message.total_voting_power !== 0) {
            writer.uint32(24).int64(message.total_voting_power);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseValidatorSet);
        message.validators = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validators.push(exports.Validator.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.proposer = exports.Validator.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.total_voting_power = (0, __1.longToNumber)(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseValidatorSet);
        message.validators = [];
        if (object.validators !== undefined && object.validators !== null) {
            for (const e of object.validators) {
                message.validators.push(exports.Validator.fromJSON(e));
            }
        }
        if (object.proposer !== undefined && object.proposer !== null) {
            message.proposer = exports.Validator.fromJSON(object.proposer);
        }
        else {
            message.proposer = undefined;
        }
        if (object.total_voting_power !== undefined &&
            object.total_voting_power !== null) {
            message.total_voting_power = Number(object.total_voting_power);
        }
        else {
            message.total_voting_power = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.validators) {
            obj.validators = message.validators.map((e) => e ? exports.Validator.toJSON(e) : undefined);
        }
        else {
            obj.validators = [];
        }
        message.proposer !== undefined &&
            (obj.proposer = message.proposer
                ? exports.Validator.toJSON(message.proposer)
                : undefined);
        message.total_voting_power !== undefined &&
            (obj.total_voting_power = message.total_voting_power);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseValidatorSet);
        message.validators = [];
        if (object.validators !== undefined && object.validators !== null) {
            for (const e of object.validators) {
                message.validators.push(exports.Validator.fromPartial(e));
            }
        }
        if (object.proposer !== undefined && object.proposer !== null) {
            message.proposer = exports.Validator.fromPartial(object.proposer);
        }
        else {
            message.proposer = undefined;
        }
        if (object.total_voting_power !== undefined &&
            object.total_voting_power !== null) {
            message.total_voting_power = object.total_voting_power;
        }
        else {
            message.total_voting_power = 0;
        }
        return message;
    },
};
const baseValidator = { voting_power: 0, proposer_priority: 0 };
exports.Validator = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.address.length !== 0) {
            writer.uint32(10).bytes(message.address);
        }
        if (message.pub_key !== undefined) {
            keys_1.PublicKey.encode(message.pub_key, writer.uint32(18).fork()).ldelim();
        }
        if (message.voting_power !== 0) {
            writer.uint32(24).int64(message.voting_power);
        }
        if (message.proposer_priority !== 0) {
            writer.uint32(32).int64(message.proposer_priority);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseValidator);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.bytes();
                    break;
                case 2:
                    message.pub_key = keys_1.PublicKey.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.voting_power = (0, __1.longToNumber)(reader.int64());
                    break;
                case 4:
                    message.proposer_priority = (0, __1.longToNumber)(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseValidator);
        if (object.address !== undefined && object.address !== null) {
            message.address = (0, __1.bytesFromBase64)(object.address);
        }
        if (object.pub_key !== undefined && object.pub_key !== null) {
            message.pub_key = keys_1.PublicKey.fromJSON(object.pub_key);
        }
        else {
            message.pub_key = undefined;
        }
        if (object.voting_power !== undefined && object.voting_power !== null) {
            message.voting_power = Number(object.voting_power);
        }
        else {
            message.voting_power = 0;
        }
        if (object.proposer_priority !== undefined &&
            object.proposer_priority !== null) {
            message.proposer_priority = Number(object.proposer_priority);
        }
        else {
            message.proposer_priority = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined &&
            (obj.address = (0, __1.base64FromBytes)(message.address !== undefined ? message.address : new Uint8Array()));
        message.pub_key !== undefined &&
            (obj.pub_key = message.pub_key
                ? keys_1.PublicKey.toJSON(message.pub_key)
                : undefined);
        message.voting_power !== undefined &&
            (obj.voting_power = message.voting_power);
        message.proposer_priority !== undefined &&
            (obj.proposer_priority = message.proposer_priority);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseValidator);
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        else {
            message.address = new Uint8Array();
        }
        if (object.pub_key !== undefined && object.pub_key !== null) {
            message.pub_key = keys_1.PublicKey.fromPartial(object.pub_key);
        }
        else {
            message.pub_key = undefined;
        }
        if (object.voting_power !== undefined && object.voting_power !== null) {
            message.voting_power = object.voting_power;
        }
        else {
            message.voting_power = 0;
        }
        if (object.proposer_priority !== undefined &&
            object.proposer_priority !== null) {
            message.proposer_priority = object.proposer_priority;
        }
        else {
            message.proposer_priority = 0;
        }
        return message;
    },
};
const baseSimpleValidator = { voting_power: 0 };
exports.SimpleValidator = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.pub_key !== undefined) {
            keys_1.PublicKey.encode(message.pub_key, writer.uint32(10).fork()).ldelim();
        }
        if (message.voting_power !== 0) {
            writer.uint32(16).int64(message.voting_power);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseSimpleValidator);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pub_key = keys_1.PublicKey.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.voting_power = (0, __1.longToNumber)(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseSimpleValidator);
        if (object.pub_key !== undefined && object.pub_key !== null) {
            message.pub_key = keys_1.PublicKey.fromJSON(object.pub_key);
        }
        else {
            message.pub_key = undefined;
        }
        if (object.voting_power !== undefined && object.voting_power !== null) {
            message.voting_power = Number(object.voting_power);
        }
        else {
            message.voting_power = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pub_key !== undefined &&
            (obj.pub_key = message.pub_key
                ? keys_1.PublicKey.toJSON(message.pub_key)
                : undefined);
        message.voting_power !== undefined &&
            (obj.voting_power = message.voting_power);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseSimpleValidator);
        if (object.pub_key !== undefined && object.pub_key !== null) {
            message.pub_key = keys_1.PublicKey.fromPartial(object.pub_key);
        }
        else {
            message.pub_key = undefined;
        }
        if (object.voting_power !== undefined && object.voting_power !== null) {
            message.voting_power = object.voting_power;
        }
        else {
            message.voting_power = 0;
        }
        return message;
    },
};
