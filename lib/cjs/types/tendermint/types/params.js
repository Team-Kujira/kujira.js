"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HashedParams = exports.VersionParams = exports.ValidatorParams = exports.EvidenceParams = exports.BlockParams = exports.ConsensusParams = exports.protobufPackage = void 0;
const minimal_1 = require("protobufjs/minimal");
const __1 = require("../..");
const duration_1 = require("../../google/protobuf/duration");
exports.protobufPackage = "tendermint.types";
const baseConsensusParams = {};
exports.ConsensusParams = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.block !== undefined) {
            exports.BlockParams.encode(message.block, writer.uint32(10).fork()).ldelim();
        }
        if (message.evidence !== undefined) {
            exports.EvidenceParams.encode(message.evidence, writer.uint32(18).fork()).ldelim();
        }
        if (message.validator !== undefined) {
            exports.ValidatorParams.encode(message.validator, writer.uint32(26).fork()).ldelim();
        }
        if (message.version !== undefined) {
            exports.VersionParams.encode(message.version, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseConsensusParams);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.block = exports.BlockParams.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.evidence = exports.EvidenceParams.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.validator = exports.ValidatorParams.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.version = exports.VersionParams.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseConsensusParams);
        if (object.block !== undefined && object.block !== null) {
            message.block = exports.BlockParams.fromJSON(object.block);
        }
        else {
            message.block = undefined;
        }
        if (object.evidence !== undefined && object.evidence !== null) {
            message.evidence = exports.EvidenceParams.fromJSON(object.evidence);
        }
        else {
            message.evidence = undefined;
        }
        if (object.validator !== undefined && object.validator !== null) {
            message.validator = exports.ValidatorParams.fromJSON(object.validator);
        }
        else {
            message.validator = undefined;
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = exports.VersionParams.fromJSON(object.version);
        }
        else {
            message.version = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.block !== undefined &&
            (obj.block = message.block
                ? exports.BlockParams.toJSON(message.block)
                : undefined);
        message.evidence !== undefined &&
            (obj.evidence = message.evidence
                ? exports.EvidenceParams.toJSON(message.evidence)
                : undefined);
        message.validator !== undefined &&
            (obj.validator = message.validator
                ? exports.ValidatorParams.toJSON(message.validator)
                : undefined);
        message.version !== undefined &&
            (obj.version = message.version
                ? exports.VersionParams.toJSON(message.version)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseConsensusParams);
        if (object.block !== undefined && object.block !== null) {
            message.block = exports.BlockParams.fromPartial(object.block);
        }
        else {
            message.block = undefined;
        }
        if (object.evidence !== undefined && object.evidence !== null) {
            message.evidence = exports.EvidenceParams.fromPartial(object.evidence);
        }
        else {
            message.evidence = undefined;
        }
        if (object.validator !== undefined && object.validator !== null) {
            message.validator = exports.ValidatorParams.fromPartial(object.validator);
        }
        else {
            message.validator = undefined;
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = exports.VersionParams.fromPartial(object.version);
        }
        else {
            message.version = undefined;
        }
        return message;
    },
};
const baseBlockParams = { max_bytes: 0, max_gas: 0, time_iota_ms: 0 };
exports.BlockParams = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.max_bytes !== 0) {
            writer.uint32(8).int64(message.max_bytes);
        }
        if (message.max_gas !== 0) {
            writer.uint32(16).int64(message.max_gas);
        }
        if (message.time_iota_ms !== 0) {
            writer.uint32(24).int64(message.time_iota_ms);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseBlockParams);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.max_bytes = (0, __1.longToNumber)(reader.int64());
                    break;
                case 2:
                    message.max_gas = (0, __1.longToNumber)(reader.int64());
                    break;
                case 3:
                    message.time_iota_ms = (0, __1.longToNumber)(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseBlockParams);
        if (object.max_bytes !== undefined && object.max_bytes !== null) {
            message.max_bytes = Number(object.max_bytes);
        }
        else {
            message.max_bytes = 0;
        }
        if (object.max_gas !== undefined && object.max_gas !== null) {
            message.max_gas = Number(object.max_gas);
        }
        else {
            message.max_gas = 0;
        }
        if (object.time_iota_ms !== undefined && object.time_iota_ms !== null) {
            message.time_iota_ms = Number(object.time_iota_ms);
        }
        else {
            message.time_iota_ms = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.max_bytes !== undefined && (obj.max_bytes = message.max_bytes);
        message.max_gas !== undefined && (obj.max_gas = message.max_gas);
        message.time_iota_ms !== undefined &&
            (obj.time_iota_ms = message.time_iota_ms);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseBlockParams);
        if (object.max_bytes !== undefined && object.max_bytes !== null) {
            message.max_bytes = object.max_bytes;
        }
        else {
            message.max_bytes = 0;
        }
        if (object.max_gas !== undefined && object.max_gas !== null) {
            message.max_gas = object.max_gas;
        }
        else {
            message.max_gas = 0;
        }
        if (object.time_iota_ms !== undefined && object.time_iota_ms !== null) {
            message.time_iota_ms = object.time_iota_ms;
        }
        else {
            message.time_iota_ms = 0;
        }
        return message;
    },
};
const baseEvidenceParams = { max_age_num_blocks: 0, max_bytes: 0 };
exports.EvidenceParams = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.max_age_num_blocks !== 0) {
            writer.uint32(8).int64(message.max_age_num_blocks);
        }
        if (message.max_age_duration !== undefined) {
            duration_1.Duration.encode(message.max_age_duration, writer.uint32(18).fork()).ldelim();
        }
        if (message.max_bytes !== 0) {
            writer.uint32(24).int64(message.max_bytes);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseEvidenceParams);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.max_age_num_blocks = (0, __1.longToNumber)(reader.int64());
                    break;
                case 2:
                    message.max_age_duration = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.max_bytes = (0, __1.longToNumber)(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseEvidenceParams);
        if (object.max_age_num_blocks !== undefined &&
            object.max_age_num_blocks !== null) {
            message.max_age_num_blocks = Number(object.max_age_num_blocks);
        }
        else {
            message.max_age_num_blocks = 0;
        }
        if (object.max_age_duration !== undefined &&
            object.max_age_duration !== null) {
            message.max_age_duration = duration_1.Duration.fromJSON(object.max_age_duration);
        }
        else {
            message.max_age_duration = undefined;
        }
        if (object.max_bytes !== undefined && object.max_bytes !== null) {
            message.max_bytes = Number(object.max_bytes);
        }
        else {
            message.max_bytes = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.max_age_num_blocks !== undefined &&
            (obj.max_age_num_blocks = message.max_age_num_blocks);
        message.max_age_duration !== undefined &&
            (obj.max_age_duration = message.max_age_duration
                ? duration_1.Duration.toJSON(message.max_age_duration)
                : undefined);
        message.max_bytes !== undefined && (obj.max_bytes = message.max_bytes);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseEvidenceParams);
        if (object.max_age_num_blocks !== undefined &&
            object.max_age_num_blocks !== null) {
            message.max_age_num_blocks = object.max_age_num_blocks;
        }
        else {
            message.max_age_num_blocks = 0;
        }
        if (object.max_age_duration !== undefined &&
            object.max_age_duration !== null) {
            message.max_age_duration = duration_1.Duration.fromPartial(object.max_age_duration);
        }
        else {
            message.max_age_duration = undefined;
        }
        if (object.max_bytes !== undefined && object.max_bytes !== null) {
            message.max_bytes = object.max_bytes;
        }
        else {
            message.max_bytes = 0;
        }
        return message;
    },
};
const baseValidatorParams = { pub_key_types: "" };
exports.ValidatorParams = {
    encode(message, writer = minimal_1.Writer.create()) {
        for (const v of message.pub_key_types) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseValidatorParams);
        message.pub_key_types = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pub_key_types.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseValidatorParams);
        message.pub_key_types = [];
        if (object.pub_key_types !== undefined && object.pub_key_types !== null) {
            for (const e of object.pub_key_types) {
                message.pub_key_types.push(String(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.pub_key_types) {
            obj.pub_key_types = message.pub_key_types.map((e) => e);
        }
        else {
            obj.pub_key_types = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseValidatorParams);
        message.pub_key_types = [];
        if (object.pub_key_types !== undefined && object.pub_key_types !== null) {
            for (const e of object.pub_key_types) {
                message.pub_key_types.push(e);
            }
        }
        return message;
    },
};
const baseVersionParams = { app_version: 0 };
exports.VersionParams = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.app_version !== 0) {
            writer.uint32(8).uint64(message.app_version);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseVersionParams);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.app_version = (0, __1.longToNumber)(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseVersionParams);
        if (object.app_version !== undefined && object.app_version !== null) {
            message.app_version = Number(object.app_version);
        }
        else {
            message.app_version = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.app_version !== undefined &&
            (obj.app_version = message.app_version);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseVersionParams);
        if (object.app_version !== undefined && object.app_version !== null) {
            message.app_version = object.app_version;
        }
        else {
            message.app_version = 0;
        }
        return message;
    },
};
const baseHashedParams = { block_max_bytes: 0, block_max_gas: 0 };
exports.HashedParams = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.block_max_bytes !== 0) {
            writer.uint32(8).int64(message.block_max_bytes);
        }
        if (message.block_max_gas !== 0) {
            writer.uint32(16).int64(message.block_max_gas);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseHashedParams);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.block_max_bytes = (0, __1.longToNumber)(reader.int64());
                    break;
                case 2:
                    message.block_max_gas = (0, __1.longToNumber)(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseHashedParams);
        if (object.block_max_bytes !== undefined &&
            object.block_max_bytes !== null) {
            message.block_max_bytes = Number(object.block_max_bytes);
        }
        else {
            message.block_max_bytes = 0;
        }
        if (object.block_max_gas !== undefined && object.block_max_gas !== null) {
            message.block_max_gas = Number(object.block_max_gas);
        }
        else {
            message.block_max_gas = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.block_max_bytes !== undefined &&
            (obj.block_max_bytes = message.block_max_bytes);
        message.block_max_gas !== undefined &&
            (obj.block_max_gas = message.block_max_gas);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseHashedParams);
        if (object.block_max_bytes !== undefined &&
            object.block_max_bytes !== null) {
            message.block_max_bytes = object.block_max_bytes;
        }
        else {
            message.block_max_bytes = 0;
        }
        if (object.block_max_gas !== undefined && object.block_max_gas !== null) {
            message.block_max_gas = object.block_max_gas;
        }
        else {
            message.block_max_gas = 0;
        }
        return message;
    },
};
