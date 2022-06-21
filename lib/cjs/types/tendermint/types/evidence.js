"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvidenceList = exports.LightClientAttackEvidence = exports.DuplicateVoteEvidence = exports.Evidence = exports.protobufPackage = void 0;
/* eslint-disable */
const timestamp_1 = require("../../google/protobuf/timestamp");
const minimal_1 = require("protobufjs/minimal");
const types_1 = require("../../tendermint/types/types");
const validator_1 = require("../../tendermint/types/validator");
const __1 = require("../..");
exports.protobufPackage = "tendermint.types";
const baseEvidence = {};
exports.Evidence = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.duplicate_vote_evidence !== undefined) {
            exports.DuplicateVoteEvidence.encode(message.duplicate_vote_evidence, writer.uint32(10).fork()).ldelim();
        }
        if (message.light_client_attack_evidence !== undefined) {
            exports.LightClientAttackEvidence.encode(message.light_client_attack_evidence, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseEvidence);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.duplicate_vote_evidence = exports.DuplicateVoteEvidence.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.light_client_attack_evidence =
                        exports.LightClientAttackEvidence.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseEvidence);
        if (object.duplicate_vote_evidence !== undefined &&
            object.duplicate_vote_evidence !== null) {
            message.duplicate_vote_evidence = exports.DuplicateVoteEvidence.fromJSON(object.duplicate_vote_evidence);
        }
        else {
            message.duplicate_vote_evidence = undefined;
        }
        if (object.light_client_attack_evidence !== undefined &&
            object.light_client_attack_evidence !== null) {
            message.light_client_attack_evidence = exports.LightClientAttackEvidence.fromJSON(object.light_client_attack_evidence);
        }
        else {
            message.light_client_attack_evidence = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.duplicate_vote_evidence !== undefined &&
            (obj.duplicate_vote_evidence = message.duplicate_vote_evidence
                ? exports.DuplicateVoteEvidence.toJSON(message.duplicate_vote_evidence)
                : undefined);
        message.light_client_attack_evidence !== undefined &&
            (obj.light_client_attack_evidence = message.light_client_attack_evidence
                ? exports.LightClientAttackEvidence.toJSON(message.light_client_attack_evidence)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseEvidence);
        if (object.duplicate_vote_evidence !== undefined &&
            object.duplicate_vote_evidence !== null) {
            message.duplicate_vote_evidence = exports.DuplicateVoteEvidence.fromPartial(object.duplicate_vote_evidence);
        }
        else {
            message.duplicate_vote_evidence = undefined;
        }
        if (object.light_client_attack_evidence !== undefined &&
            object.light_client_attack_evidence !== null) {
            message.light_client_attack_evidence =
                exports.LightClientAttackEvidence.fromPartial(object.light_client_attack_evidence);
        }
        else {
            message.light_client_attack_evidence = undefined;
        }
        return message;
    },
};
const baseDuplicateVoteEvidence = {
    total_voting_power: 0,
    validator_power: 0,
};
exports.DuplicateVoteEvidence = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.vote_a !== undefined) {
            types_1.Vote.encode(message.vote_a, writer.uint32(10).fork()).ldelim();
        }
        if (message.vote_b !== undefined) {
            types_1.Vote.encode(message.vote_b, writer.uint32(18).fork()).ldelim();
        }
        if (message.total_voting_power !== 0) {
            writer.uint32(24).int64(message.total_voting_power);
        }
        if (message.validator_power !== 0) {
            writer.uint32(32).int64(message.validator_power);
        }
        if (message.timestamp !== undefined) {
            timestamp_1.Timestamp.encode((0, __1.toTimestamp)(message.timestamp), writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDuplicateVoteEvidence);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.vote_a = types_1.Vote.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.vote_b = types_1.Vote.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.total_voting_power = (0, __1.longToNumber)(reader.int64());
                    break;
                case 4:
                    message.validator_power = (0, __1.longToNumber)(reader.int64());
                    break;
                case 5:
                    message.timestamp = (0, __1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDuplicateVoteEvidence);
        if (object.vote_a !== undefined && object.vote_a !== null) {
            message.vote_a = types_1.Vote.fromJSON(object.vote_a);
        }
        else {
            message.vote_a = undefined;
        }
        if (object.vote_b !== undefined && object.vote_b !== null) {
            message.vote_b = types_1.Vote.fromJSON(object.vote_b);
        }
        else {
            message.vote_b = undefined;
        }
        if (object.total_voting_power !== undefined &&
            object.total_voting_power !== null) {
            message.total_voting_power = Number(object.total_voting_power);
        }
        else {
            message.total_voting_power = 0;
        }
        if (object.validator_power !== undefined &&
            object.validator_power !== null) {
            message.validator_power = Number(object.validator_power);
        }
        else {
            message.validator_power = 0;
        }
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = (0, __1.fromJsonTimestamp)(object.timestamp);
        }
        else {
            message.timestamp = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.vote_a !== undefined &&
            (obj.vote_a = message.vote_a ? types_1.Vote.toJSON(message.vote_a) : undefined);
        message.vote_b !== undefined &&
            (obj.vote_b = message.vote_b ? types_1.Vote.toJSON(message.vote_b) : undefined);
        message.total_voting_power !== undefined &&
            (obj.total_voting_power = message.total_voting_power);
        message.validator_power !== undefined &&
            (obj.validator_power = message.validator_power);
        message.timestamp !== undefined &&
            (obj.timestamp =
                message.timestamp !== undefined
                    ? message.timestamp.toISOString()
                    : null);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseDuplicateVoteEvidence);
        if (object.vote_a !== undefined && object.vote_a !== null) {
            message.vote_a = types_1.Vote.fromPartial(object.vote_a);
        }
        else {
            message.vote_a = undefined;
        }
        if (object.vote_b !== undefined && object.vote_b !== null) {
            message.vote_b = types_1.Vote.fromPartial(object.vote_b);
        }
        else {
            message.vote_b = undefined;
        }
        if (object.total_voting_power !== undefined &&
            object.total_voting_power !== null) {
            message.total_voting_power = object.total_voting_power;
        }
        else {
            message.total_voting_power = 0;
        }
        if (object.validator_power !== undefined &&
            object.validator_power !== null) {
            message.validator_power = object.validator_power;
        }
        else {
            message.validator_power = 0;
        }
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = object.timestamp;
        }
        else {
            message.timestamp = undefined;
        }
        return message;
    },
};
const baseLightClientAttackEvidence = {
    common_height: 0,
    total_voting_power: 0,
};
exports.LightClientAttackEvidence = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.conflicting_block !== undefined) {
            types_1.LightBlock.encode(message.conflicting_block, writer.uint32(10).fork()).ldelim();
        }
        if (message.common_height !== 0) {
            writer.uint32(16).int64(message.common_height);
        }
        for (const v of message.byzantine_validators) {
            validator_1.Validator.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.total_voting_power !== 0) {
            writer.uint32(32).int64(message.total_voting_power);
        }
        if (message.timestamp !== undefined) {
            timestamp_1.Timestamp.encode((0, __1.toTimestamp)(message.timestamp), writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseLightClientAttackEvidence);
        message.byzantine_validators = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.conflicting_block = types_1.LightBlock.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.common_height = (0, __1.longToNumber)(reader.int64());
                    break;
                case 3:
                    message.byzantine_validators.push(validator_1.Validator.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.total_voting_power = (0, __1.longToNumber)(reader.int64());
                    break;
                case 5:
                    message.timestamp = (0, __1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseLightClientAttackEvidence);
        message.byzantine_validators = [];
        if (object.conflicting_block !== undefined &&
            object.conflicting_block !== null) {
            message.conflicting_block = types_1.LightBlock.fromJSON(object.conflicting_block);
        }
        else {
            message.conflicting_block = undefined;
        }
        if (object.common_height !== undefined && object.common_height !== null) {
            message.common_height = Number(object.common_height);
        }
        else {
            message.common_height = 0;
        }
        if (object.byzantine_validators !== undefined &&
            object.byzantine_validators !== null) {
            for (const e of object.byzantine_validators) {
                message.byzantine_validators.push(validator_1.Validator.fromJSON(e));
            }
        }
        if (object.total_voting_power !== undefined &&
            object.total_voting_power !== null) {
            message.total_voting_power = Number(object.total_voting_power);
        }
        else {
            message.total_voting_power = 0;
        }
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = (0, __1.fromJsonTimestamp)(object.timestamp);
        }
        else {
            message.timestamp = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.conflicting_block !== undefined &&
            (obj.conflicting_block = message.conflicting_block
                ? types_1.LightBlock.toJSON(message.conflicting_block)
                : undefined);
        message.common_height !== undefined &&
            (obj.common_height = message.common_height);
        if (message.byzantine_validators) {
            obj.byzantine_validators = message.byzantine_validators.map((e) => e ? validator_1.Validator.toJSON(e) : undefined);
        }
        else {
            obj.byzantine_validators = [];
        }
        message.total_voting_power !== undefined &&
            (obj.total_voting_power = message.total_voting_power);
        message.timestamp !== undefined &&
            (obj.timestamp =
                message.timestamp !== undefined
                    ? message.timestamp.toISOString()
                    : null);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseLightClientAttackEvidence);
        message.byzantine_validators = [];
        if (object.conflicting_block !== undefined &&
            object.conflicting_block !== null) {
            message.conflicting_block = types_1.LightBlock.fromPartial(object.conflicting_block);
        }
        else {
            message.conflicting_block = undefined;
        }
        if (object.common_height !== undefined && object.common_height !== null) {
            message.common_height = object.common_height;
        }
        else {
            message.common_height = 0;
        }
        if (object.byzantine_validators !== undefined &&
            object.byzantine_validators !== null) {
            for (const e of object.byzantine_validators) {
                message.byzantine_validators.push(validator_1.Validator.fromPartial(e));
            }
        }
        if (object.total_voting_power !== undefined &&
            object.total_voting_power !== null) {
            message.total_voting_power = object.total_voting_power;
        }
        else {
            message.total_voting_power = 0;
        }
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = object.timestamp;
        }
        else {
            message.timestamp = undefined;
        }
        return message;
    },
};
const baseEvidenceList = {};
exports.EvidenceList = {
    encode(message, writer = minimal_1.Writer.create()) {
        for (const v of message.evidence) {
            exports.Evidence.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseEvidenceList);
        message.evidence = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.evidence.push(exports.Evidence.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseEvidenceList);
        message.evidence = [];
        if (object.evidence !== undefined && object.evidence !== null) {
            for (const e of object.evidence) {
                message.evidence.push(exports.Evidence.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.evidence) {
            obj.evidence = message.evidence.map((e) => e ? exports.Evidence.toJSON(e) : undefined);
        }
        else {
            obj.evidence = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseEvidenceList);
        message.evidence = [];
        if (object.evidence !== undefined && object.evidence !== null) {
            for (const e of object.evidence) {
                message.evidence.push(exports.Evidence.fromPartial(e));
            }
        }
        return message;
    },
};
