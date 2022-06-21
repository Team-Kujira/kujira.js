"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MissedBlock = exports.ValidatorMissedBlocks = exports.SigningInfo = exports.GenesisState = exports.protobufPackage = void 0;
const minimal_1 = require("protobufjs/minimal");
const types_1 = require("../../../../types");
const slashing_1 = require("./slashing");
exports.protobufPackage = "cosmos.slashing.v1beta1";
const baseGenesisState = {};
exports.GenesisState = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.params !== undefined) {
            slashing_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.signing_infos) {
            exports.SigningInfo.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.missed_blocks) {
            exports.ValidatorMissedBlocks.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGenesisState);
        message.signing_infos = [];
        message.missed_blocks = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = slashing_1.Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.signing_infos.push(exports.SigningInfo.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.missed_blocks.push(exports.ValidatorMissedBlocks.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGenesisState);
        message.signing_infos = [];
        message.missed_blocks = [];
        if (object.params !== undefined && object.params !== null) {
            message.params = slashing_1.Params.fromJSON(object.params);
        }
        else {
            message.params = undefined;
        }
        if (object.signing_infos !== undefined && object.signing_infos !== null) {
            for (const e of object.signing_infos) {
                message.signing_infos.push(exports.SigningInfo.fromJSON(e));
            }
        }
        if (object.missed_blocks !== undefined && object.missed_blocks !== null) {
            for (const e of object.missed_blocks) {
                message.missed_blocks.push(exports.ValidatorMissedBlocks.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined &&
            (obj.params = message.params ? slashing_1.Params.toJSON(message.params) : undefined);
        if (message.signing_infos) {
            obj.signing_infos = message.signing_infos.map((e) => e ? exports.SigningInfo.toJSON(e) : undefined);
        }
        else {
            obj.signing_infos = [];
        }
        if (message.missed_blocks) {
            obj.missed_blocks = message.missed_blocks.map((e) => e ? exports.ValidatorMissedBlocks.toJSON(e) : undefined);
        }
        else {
            obj.missed_blocks = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseGenesisState);
        message.signing_infos = [];
        message.missed_blocks = [];
        if (object.params !== undefined && object.params !== null) {
            message.params = slashing_1.Params.fromPartial(object.params);
        }
        else {
            message.params = undefined;
        }
        if (object.signing_infos !== undefined && object.signing_infos !== null) {
            for (const e of object.signing_infos) {
                message.signing_infos.push(exports.SigningInfo.fromPartial(e));
            }
        }
        if (object.missed_blocks !== undefined && object.missed_blocks !== null) {
            for (const e of object.missed_blocks) {
                message.missed_blocks.push(exports.ValidatorMissedBlocks.fromPartial(e));
            }
        }
        return message;
    },
};
const baseSigningInfo = { address: "" };
exports.SigningInfo = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.validator_signing_info !== undefined) {
            slashing_1.ValidatorSigningInfo.encode(message.validator_signing_info, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseSigningInfo);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.validator_signing_info = slashing_1.ValidatorSigningInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseSigningInfo);
        if (object.address !== undefined && object.address !== null) {
            message.address = String(object.address);
        }
        else {
            message.address = "";
        }
        if (object.validator_signing_info !== undefined &&
            object.validator_signing_info !== null) {
            message.validator_signing_info = slashing_1.ValidatorSigningInfo.fromJSON(object.validator_signing_info);
        }
        else {
            message.validator_signing_info = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.validator_signing_info !== undefined &&
            (obj.validator_signing_info = message.validator_signing_info
                ? slashing_1.ValidatorSigningInfo.toJSON(message.validator_signing_info)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseSigningInfo);
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        else {
            message.address = "";
        }
        if (object.validator_signing_info !== undefined &&
            object.validator_signing_info !== null) {
            message.validator_signing_info = slashing_1.ValidatorSigningInfo.fromPartial(object.validator_signing_info);
        }
        else {
            message.validator_signing_info = undefined;
        }
        return message;
    },
};
const baseValidatorMissedBlocks = { address: "" };
exports.ValidatorMissedBlocks = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        for (const v of message.missed_blocks) {
            exports.MissedBlock.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseValidatorMissedBlocks);
        message.missed_blocks = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.missed_blocks.push(exports.MissedBlock.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseValidatorMissedBlocks);
        message.missed_blocks = [];
        if (object.address !== undefined && object.address !== null) {
            message.address = String(object.address);
        }
        else {
            message.address = "";
        }
        if (object.missed_blocks !== undefined && object.missed_blocks !== null) {
            for (const e of object.missed_blocks) {
                message.missed_blocks.push(exports.MissedBlock.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        if (message.missed_blocks) {
            obj.missed_blocks = message.missed_blocks.map((e) => e ? exports.MissedBlock.toJSON(e) : undefined);
        }
        else {
            obj.missed_blocks = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseValidatorMissedBlocks);
        message.missed_blocks = [];
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        else {
            message.address = "";
        }
        if (object.missed_blocks !== undefined && object.missed_blocks !== null) {
            for (const e of object.missed_blocks) {
                message.missed_blocks.push(exports.MissedBlock.fromPartial(e));
            }
        }
        return message;
    },
};
const baseMissedBlock = { index: 0, missed: false };
exports.MissedBlock = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.index !== 0) {
            writer.uint32(8).int64(message.index);
        }
        if (message.missed === true) {
            writer.uint32(16).bool(message.missed);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMissedBlock);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.index = (0, types_1.longToNumber)(reader.int64());
                    break;
                case 2:
                    message.missed = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMissedBlock);
        if (object.index !== undefined && object.index !== null) {
            message.index = Number(object.index);
        }
        else {
            message.index = 0;
        }
        if (object.missed !== undefined && object.missed !== null) {
            message.missed = Boolean(object.missed);
        }
        else {
            message.missed = false;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.index !== undefined && (obj.index = message.index);
        message.missed !== undefined && (obj.missed = message.missed);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMissedBlock);
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = 0;
        }
        if (object.missed !== undefined && object.missed !== null) {
            message.missed = object.missed;
        }
        else {
            message.missed = false;
        }
        return message;
    },
};
