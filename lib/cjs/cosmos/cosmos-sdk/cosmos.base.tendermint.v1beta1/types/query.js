"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceClientImpl = exports.Module = exports.VersionInfo = exports.GetNodeInfoResponse = exports.GetNodeInfoRequest = exports.GetSyncingResponse = exports.GetSyncingRequest = exports.GetLatestBlockResponse = exports.GetLatestBlockRequest = exports.GetBlockByHeightResponse = exports.GetBlockByHeightRequest = exports.Validator = exports.GetLatestValidatorSetResponse = exports.GetLatestValidatorSetRequest = exports.GetValidatorSetByHeightResponse = exports.GetValidatorSetByHeightRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const minimal_1 = require("protobufjs/minimal");
const types_1 = require("../../../../types");
const pagination_1 = require("../../../../types/cosmos/base/query/pagination");
const any_1 = require("../../../../types/google/protobuf/any");
const types_2 = require("../../../../types/tendermint/types/types");
const block_1 = require("../../../../types/tendermint/types/block");
const types_3 = require("../../../../types/tendermint/p2p/types");
exports.protobufPackage = "cosmos.base.tendermint.v1beta1";
const baseGetValidatorSetByHeightRequest = { height: 0 };
exports.GetValidatorSetByHeightRequest = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.height !== 0) {
            writer.uint32(8).int64(message.height);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetValidatorSetByHeightRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = (0, types_1.longToNumber)(reader.int64());
                    break;
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGetValidatorSetByHeightRequest);
        if (object.height !== undefined && object.height !== null) {
            message.height = Number(object.height);
        }
        else {
            message.height = 0;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined && (obj.height = message.height);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseGetValidatorSetByHeightRequest);
        if (object.height !== undefined && object.height !== null) {
            message.height = object.height;
        }
        else {
            message.height = 0;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseGetValidatorSetByHeightResponse = { block_height: 0 };
exports.GetValidatorSetByHeightResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.block_height !== 0) {
            writer.uint32(8).int64(message.block_height);
        }
        for (const v of message.validators) {
            exports.Validator.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetValidatorSetByHeightResponse);
        message.validators = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.block_height = (0, types_1.longToNumber)(reader.int64());
                    break;
                case 2:
                    message.validators.push(exports.Validator.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGetValidatorSetByHeightResponse);
        message.validators = [];
        if (object.block_height !== undefined && object.block_height !== null) {
            message.block_height = Number(object.block_height);
        }
        else {
            message.block_height = 0;
        }
        if (object.validators !== undefined && object.validators !== null) {
            for (const e of object.validators) {
                message.validators.push(exports.Validator.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.block_height !== undefined &&
            (obj.block_height = message.block_height);
        if (message.validators) {
            obj.validators = message.validators.map((e) => e ? exports.Validator.toJSON(e) : undefined);
        }
        else {
            obj.validators = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseGetValidatorSetByHeightResponse);
        message.validators = [];
        if (object.block_height !== undefined && object.block_height !== null) {
            message.block_height = object.block_height;
        }
        else {
            message.block_height = 0;
        }
        if (object.validators !== undefined && object.validators !== null) {
            for (const e of object.validators) {
                message.validators.push(exports.Validator.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseGetLatestValidatorSetRequest = {};
exports.GetLatestValidatorSetRequest = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetLatestValidatorSetRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGetLatestValidatorSetRequest);
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseGetLatestValidatorSetRequest);
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseGetLatestValidatorSetResponse = { block_height: 0 };
exports.GetLatestValidatorSetResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.block_height !== 0) {
            writer.uint32(8).int64(message.block_height);
        }
        for (const v of message.validators) {
            exports.Validator.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetLatestValidatorSetResponse);
        message.validators = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.block_height = (0, types_1.longToNumber)(reader.int64());
                    break;
                case 2:
                    message.validators.push(exports.Validator.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGetLatestValidatorSetResponse);
        message.validators = [];
        if (object.block_height !== undefined && object.block_height !== null) {
            message.block_height = Number(object.block_height);
        }
        else {
            message.block_height = 0;
        }
        if (object.validators !== undefined && object.validators !== null) {
            for (const e of object.validators) {
                message.validators.push(exports.Validator.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.block_height !== undefined &&
            (obj.block_height = message.block_height);
        if (message.validators) {
            obj.validators = message.validators.map((e) => e ? exports.Validator.toJSON(e) : undefined);
        }
        else {
            obj.validators = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseGetLatestValidatorSetResponse);
        message.validators = [];
        if (object.block_height !== undefined && object.block_height !== null) {
            message.block_height = object.block_height;
        }
        else {
            message.block_height = 0;
        }
        if (object.validators !== undefined && object.validators !== null) {
            for (const e of object.validators) {
                message.validators.push(exports.Validator.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseValidator = {
    address: "",
    voting_power: 0,
    proposer_priority: 0,
};
exports.Validator = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.pub_key !== undefined) {
            any_1.Any.encode(message.pub_key, writer.uint32(18).fork()).ldelim();
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
                    message.address = reader.string();
                    break;
                case 2:
                    message.pub_key = any_1.Any.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.voting_power = (0, types_1.longToNumber)(reader.int64());
                    break;
                case 4:
                    message.proposer_priority = (0, types_1.longToNumber)(reader.int64());
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
            message.address = String(object.address);
        }
        else {
            message.address = "";
        }
        if (object.pub_key !== undefined && object.pub_key !== null) {
            message.pub_key = any_1.Any.fromJSON(object.pub_key);
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
        message.address !== undefined && (obj.address = message.address);
        message.pub_key !== undefined &&
            (obj.pub_key = message.pub_key ? any_1.Any.toJSON(message.pub_key) : undefined);
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
            message.address = "";
        }
        if (object.pub_key !== undefined && object.pub_key !== null) {
            message.pub_key = any_1.Any.fromPartial(object.pub_key);
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
const baseGetBlockByHeightRequest = { height: 0 };
exports.GetBlockByHeightRequest = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.height !== 0) {
            writer.uint32(8).int64(message.height);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetBlockByHeightRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = (0, types_1.longToNumber)(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGetBlockByHeightRequest);
        if (object.height !== undefined && object.height !== null) {
            message.height = Number(object.height);
        }
        else {
            message.height = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined && (obj.height = message.height);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseGetBlockByHeightRequest);
        if (object.height !== undefined && object.height !== null) {
            message.height = object.height;
        }
        else {
            message.height = 0;
        }
        return message;
    },
};
const baseGetBlockByHeightResponse = {};
exports.GetBlockByHeightResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.block_id !== undefined) {
            types_2.BlockID.encode(message.block_id, writer.uint32(10).fork()).ldelim();
        }
        if (message.block !== undefined) {
            block_1.Block.encode(message.block, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetBlockByHeightResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.block_id = types_2.BlockID.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.block = block_1.Block.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGetBlockByHeightResponse);
        if (object.block_id !== undefined && object.block_id !== null) {
            message.block_id = types_2.BlockID.fromJSON(object.block_id);
        }
        else {
            message.block_id = undefined;
        }
        if (object.block !== undefined && object.block !== null) {
            message.block = block_1.Block.fromJSON(object.block);
        }
        else {
            message.block = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.block_id !== undefined &&
            (obj.block_id = message.block_id
                ? types_2.BlockID.toJSON(message.block_id)
                : undefined);
        message.block !== undefined &&
            (obj.block = message.block ? block_1.Block.toJSON(message.block) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseGetBlockByHeightResponse);
        if (object.block_id !== undefined && object.block_id !== null) {
            message.block_id = types_2.BlockID.fromPartial(object.block_id);
        }
        else {
            message.block_id = undefined;
        }
        if (object.block !== undefined && object.block !== null) {
            message.block = block_1.Block.fromPartial(object.block);
        }
        else {
            message.block = undefined;
        }
        return message;
    },
};
const baseGetLatestBlockRequest = {};
exports.GetLatestBlockRequest = {
    encode(_, writer = minimal_1.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetLatestBlockRequest);
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
        const message = Object.assign({}, baseGetLatestBlockRequest);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseGetLatestBlockRequest);
        return message;
    },
};
const baseGetLatestBlockResponse = {};
exports.GetLatestBlockResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.block_id !== undefined) {
            types_2.BlockID.encode(message.block_id, writer.uint32(10).fork()).ldelim();
        }
        if (message.block !== undefined) {
            block_1.Block.encode(message.block, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetLatestBlockResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.block_id = types_2.BlockID.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.block = block_1.Block.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGetLatestBlockResponse);
        if (object.block_id !== undefined && object.block_id !== null) {
            message.block_id = types_2.BlockID.fromJSON(object.block_id);
        }
        else {
            message.block_id = undefined;
        }
        if (object.block !== undefined && object.block !== null) {
            message.block = block_1.Block.fromJSON(object.block);
        }
        else {
            message.block = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.block_id !== undefined &&
            (obj.block_id = message.block_id
                ? types_2.BlockID.toJSON(message.block_id)
                : undefined);
        message.block !== undefined &&
            (obj.block = message.block ? block_1.Block.toJSON(message.block) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseGetLatestBlockResponse);
        if (object.block_id !== undefined && object.block_id !== null) {
            message.block_id = types_2.BlockID.fromPartial(object.block_id);
        }
        else {
            message.block_id = undefined;
        }
        if (object.block !== undefined && object.block !== null) {
            message.block = block_1.Block.fromPartial(object.block);
        }
        else {
            message.block = undefined;
        }
        return message;
    },
};
const baseGetSyncingRequest = {};
exports.GetSyncingRequest = {
    encode(_, writer = minimal_1.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetSyncingRequest);
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
        const message = Object.assign({}, baseGetSyncingRequest);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseGetSyncingRequest);
        return message;
    },
};
const baseGetSyncingResponse = { syncing: false };
exports.GetSyncingResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.syncing === true) {
            writer.uint32(8).bool(message.syncing);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetSyncingResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.syncing = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGetSyncingResponse);
        if (object.syncing !== undefined && object.syncing !== null) {
            message.syncing = Boolean(object.syncing);
        }
        else {
            message.syncing = false;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.syncing !== undefined && (obj.syncing = message.syncing);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseGetSyncingResponse);
        if (object.syncing !== undefined && object.syncing !== null) {
            message.syncing = object.syncing;
        }
        else {
            message.syncing = false;
        }
        return message;
    },
};
const baseGetNodeInfoRequest = {};
exports.GetNodeInfoRequest = {
    encode(_, writer = minimal_1.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetNodeInfoRequest);
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
        const message = Object.assign({}, baseGetNodeInfoRequest);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseGetNodeInfoRequest);
        return message;
    },
};
const baseGetNodeInfoResponse = {};
exports.GetNodeInfoResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.default_node_info !== undefined) {
            types_3.DefaultNodeInfo.encode(message.default_node_info, writer.uint32(10).fork()).ldelim();
        }
        if (message.application_version !== undefined) {
            exports.VersionInfo.encode(message.application_version, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetNodeInfoResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.default_node_info = types_3.DefaultNodeInfo.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.application_version = exports.VersionInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGetNodeInfoResponse);
        if (object.default_node_info !== undefined &&
            object.default_node_info !== null) {
            message.default_node_info = types_3.DefaultNodeInfo.fromJSON(object.default_node_info);
        }
        else {
            message.default_node_info = undefined;
        }
        if (object.application_version !== undefined &&
            object.application_version !== null) {
            message.application_version = exports.VersionInfo.fromJSON(object.application_version);
        }
        else {
            message.application_version = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.default_node_info !== undefined &&
            (obj.default_node_info = message.default_node_info
                ? types_3.DefaultNodeInfo.toJSON(message.default_node_info)
                : undefined);
        message.application_version !== undefined &&
            (obj.application_version = message.application_version
                ? exports.VersionInfo.toJSON(message.application_version)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseGetNodeInfoResponse);
        if (object.default_node_info !== undefined &&
            object.default_node_info !== null) {
            message.default_node_info = types_3.DefaultNodeInfo.fromPartial(object.default_node_info);
        }
        else {
            message.default_node_info = undefined;
        }
        if (object.application_version !== undefined &&
            object.application_version !== null) {
            message.application_version = exports.VersionInfo.fromPartial(object.application_version);
        }
        else {
            message.application_version = undefined;
        }
        return message;
    },
};
const baseVersionInfo = {
    name: "",
    app_name: "",
    version: "",
    git_commit: "",
    build_tags: "",
    go_version: "",
    cosmos_sdk_version: "",
};
exports.VersionInfo = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.app_name !== "") {
            writer.uint32(18).string(message.app_name);
        }
        if (message.version !== "") {
            writer.uint32(26).string(message.version);
        }
        if (message.git_commit !== "") {
            writer.uint32(34).string(message.git_commit);
        }
        if (message.build_tags !== "") {
            writer.uint32(42).string(message.build_tags);
        }
        if (message.go_version !== "") {
            writer.uint32(50).string(message.go_version);
        }
        for (const v of message.build_deps) {
            exports.Module.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.cosmos_sdk_version !== "") {
            writer.uint32(66).string(message.cosmos_sdk_version);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseVersionInfo);
        message.build_deps = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.app_name = reader.string();
                    break;
                case 3:
                    message.version = reader.string();
                    break;
                case 4:
                    message.git_commit = reader.string();
                    break;
                case 5:
                    message.build_tags = reader.string();
                    break;
                case 6:
                    message.go_version = reader.string();
                    break;
                case 7:
                    message.build_deps.push(exports.Module.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.cosmos_sdk_version = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseVersionInfo);
        message.build_deps = [];
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = "";
        }
        if (object.app_name !== undefined && object.app_name !== null) {
            message.app_name = String(object.app_name);
        }
        else {
            message.app_name = "";
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = String(object.version);
        }
        else {
            message.version = "";
        }
        if (object.git_commit !== undefined && object.git_commit !== null) {
            message.git_commit = String(object.git_commit);
        }
        else {
            message.git_commit = "";
        }
        if (object.build_tags !== undefined && object.build_tags !== null) {
            message.build_tags = String(object.build_tags);
        }
        else {
            message.build_tags = "";
        }
        if (object.go_version !== undefined && object.go_version !== null) {
            message.go_version = String(object.go_version);
        }
        else {
            message.go_version = "";
        }
        if (object.build_deps !== undefined && object.build_deps !== null) {
            for (const e of object.build_deps) {
                message.build_deps.push(exports.Module.fromJSON(e));
            }
        }
        if (object.cosmos_sdk_version !== undefined &&
            object.cosmos_sdk_version !== null) {
            message.cosmos_sdk_version = String(object.cosmos_sdk_version);
        }
        else {
            message.cosmos_sdk_version = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.app_name !== undefined && (obj.app_name = message.app_name);
        message.version !== undefined && (obj.version = message.version);
        message.git_commit !== undefined && (obj.git_commit = message.git_commit);
        message.build_tags !== undefined && (obj.build_tags = message.build_tags);
        message.go_version !== undefined && (obj.go_version = message.go_version);
        if (message.build_deps) {
            obj.build_deps = message.build_deps.map((e) => e ? exports.Module.toJSON(e) : undefined);
        }
        else {
            obj.build_deps = [];
        }
        message.cosmos_sdk_version !== undefined &&
            (obj.cosmos_sdk_version = message.cosmos_sdk_version);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseVersionInfo);
        message.build_deps = [];
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = "";
        }
        if (object.app_name !== undefined && object.app_name !== null) {
            message.app_name = object.app_name;
        }
        else {
            message.app_name = "";
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = object.version;
        }
        else {
            message.version = "";
        }
        if (object.git_commit !== undefined && object.git_commit !== null) {
            message.git_commit = object.git_commit;
        }
        else {
            message.git_commit = "";
        }
        if (object.build_tags !== undefined && object.build_tags !== null) {
            message.build_tags = object.build_tags;
        }
        else {
            message.build_tags = "";
        }
        if (object.go_version !== undefined && object.go_version !== null) {
            message.go_version = object.go_version;
        }
        else {
            message.go_version = "";
        }
        if (object.build_deps !== undefined && object.build_deps !== null) {
            for (const e of object.build_deps) {
                message.build_deps.push(exports.Module.fromPartial(e));
            }
        }
        if (object.cosmos_sdk_version !== undefined &&
            object.cosmos_sdk_version !== null) {
            message.cosmos_sdk_version = object.cosmos_sdk_version;
        }
        else {
            message.cosmos_sdk_version = "";
        }
        return message;
    },
};
const baseModule = { path: "", version: "", sum: "" };
exports.Module = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.path !== "") {
            writer.uint32(10).string(message.path);
        }
        if (message.version !== "") {
            writer.uint32(18).string(message.version);
        }
        if (message.sum !== "") {
            writer.uint32(26).string(message.sum);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseModule);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.path = reader.string();
                    break;
                case 2:
                    message.version = reader.string();
                    break;
                case 3:
                    message.sum = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseModule);
        if (object.path !== undefined && object.path !== null) {
            message.path = String(object.path);
        }
        else {
            message.path = "";
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = String(object.version);
        }
        else {
            message.version = "";
        }
        if (object.sum !== undefined && object.sum !== null) {
            message.sum = String(object.sum);
        }
        else {
            message.sum = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.path !== undefined && (obj.path = message.path);
        message.version !== undefined && (obj.version = message.version);
        message.sum !== undefined && (obj.sum = message.sum);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseModule);
        if (object.path !== undefined && object.path !== null) {
            message.path = object.path;
        }
        else {
            message.path = "";
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = object.version;
        }
        else {
            message.version = "";
        }
        if (object.sum !== undefined && object.sum !== null) {
            message.sum = object.sum;
        }
        else {
            message.sum = "";
        }
        return message;
    },
};
class ServiceClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    GetNodeInfo(request) {
        const data = exports.GetNodeInfoRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.base.tendermint.v1beta1.Service", "GetNodeInfo", data);
        return promise.then((data) => exports.GetNodeInfoResponse.decode(new minimal_1.Reader(data)));
    }
    GetSyncing(request) {
        const data = exports.GetSyncingRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.base.tendermint.v1beta1.Service", "GetSyncing", data);
        return promise.then((data) => exports.GetSyncingResponse.decode(new minimal_1.Reader(data)));
    }
    GetLatestBlock(request) {
        const data = exports.GetLatestBlockRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.base.tendermint.v1beta1.Service", "GetLatestBlock", data);
        return promise.then((data) => exports.GetLatestBlockResponse.decode(new minimal_1.Reader(data)));
    }
    GetBlockByHeight(request) {
        const data = exports.GetBlockByHeightRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.base.tendermint.v1beta1.Service", "GetBlockByHeight", data);
        return promise.then((data) => exports.GetBlockByHeightResponse.decode(new minimal_1.Reader(data)));
    }
    GetLatestValidatorSet(request) {
        const data = exports.GetLatestValidatorSetRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.base.tendermint.v1beta1.Service", "GetLatestValidatorSet", data);
        return promise.then((data) => exports.GetLatestValidatorSetResponse.decode(new minimal_1.Reader(data)));
    }
    GetValidatorSetByHeight(request) {
        const data = exports.GetValidatorSetByHeightRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.base.tendermint.v1beta1.Service", "GetValidatorSetByHeight", data);
        return promise.then((data) => exports.GetValidatorSetByHeightResponse.decode(new minimal_1.Reader(data)));
    }
}
exports.ServiceClientImpl = ServiceClientImpl;
