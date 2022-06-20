/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import Long from "long";
import { PageRequest, PageResponse, } from "../../../../cosmos/base/query/v1beta1/pagination";
import { Any } from "../../../../google/protobuf/any";
import { BlockID } from "../../../../tendermint/types/types";
import { Block } from "../../../../tendermint/types/block";
import { DefaultNodeInfo } from "../../../../tendermint/p2p/types";
export const protobufPackage = "cosmos.base.tendermint.v1beta1";
const baseGetValidatorSetByHeightRequest = { height: 0 };
export const GetValidatorSetByHeightRequest = {
    encode(message, writer = Writer.create()) {
        if (message.height !== 0) {
            writer.uint32(8).int64(message.height);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetValidatorSetByHeightRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = longToNumber(reader.int64());
                    break;
                case 2:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
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
            message.pagination = PageRequest.fromJSON(object.pagination);
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
                ? PageRequest.toJSON(message.pagination)
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
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseGetValidatorSetByHeightResponse = { block_height: 0 };
export const GetValidatorSetByHeightResponse = {
    encode(message, writer = Writer.create()) {
        if (message.block_height !== 0) {
            writer.uint32(8).int64(message.block_height);
        }
        for (const v of message.validators) {
            Validator.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetValidatorSetByHeightResponse);
        message.validators = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.block_height = longToNumber(reader.int64());
                    break;
                case 2:
                    message.validators.push(Validator.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
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
                message.validators.push(Validator.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
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
            obj.validators = message.validators.map((e) => e ? Validator.toJSON(e) : undefined);
        }
        else {
            obj.validators = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageResponse.toJSON(message.pagination)
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
                message.validators.push(Validator.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseGetLatestValidatorSetRequest = {};
export const GetLatestValidatorSetRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetLatestValidatorSetRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
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
            message.pagination = PageRequest.fromJSON(object.pagination);
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
                ? PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseGetLatestValidatorSetRequest);
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseGetLatestValidatorSetResponse = { block_height: 0 };
export const GetLatestValidatorSetResponse = {
    encode(message, writer = Writer.create()) {
        if (message.block_height !== 0) {
            writer.uint32(8).int64(message.block_height);
        }
        for (const v of message.validators) {
            Validator.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetLatestValidatorSetResponse);
        message.validators = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.block_height = longToNumber(reader.int64());
                    break;
                case 2:
                    message.validators.push(Validator.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
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
                message.validators.push(Validator.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
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
            obj.validators = message.validators.map((e) => e ? Validator.toJSON(e) : undefined);
        }
        else {
            obj.validators = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageResponse.toJSON(message.pagination)
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
                message.validators.push(Validator.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
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
export const Validator = {
    encode(message, writer = Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.pub_key !== undefined) {
            Any.encode(message.pub_key, writer.uint32(18).fork()).ldelim();
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
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseValidator);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.pub_key = Any.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.voting_power = longToNumber(reader.int64());
                    break;
                case 4:
                    message.proposer_priority = longToNumber(reader.int64());
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
            message.pub_key = Any.fromJSON(object.pub_key);
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
            (obj.pub_key = message.pub_key ? Any.toJSON(message.pub_key) : undefined);
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
            message.pub_key = Any.fromPartial(object.pub_key);
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
export const GetBlockByHeightRequest = {
    encode(message, writer = Writer.create()) {
        if (message.height !== 0) {
            writer.uint32(8).int64(message.height);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetBlockByHeightRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = longToNumber(reader.int64());
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
export const GetBlockByHeightResponse = {
    encode(message, writer = Writer.create()) {
        if (message.block_id !== undefined) {
            BlockID.encode(message.block_id, writer.uint32(10).fork()).ldelim();
        }
        if (message.block !== undefined) {
            Block.encode(message.block, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetBlockByHeightResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.block_id = BlockID.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.block = Block.decode(reader, reader.uint32());
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
            message.block_id = BlockID.fromJSON(object.block_id);
        }
        else {
            message.block_id = undefined;
        }
        if (object.block !== undefined && object.block !== null) {
            message.block = Block.fromJSON(object.block);
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
                ? BlockID.toJSON(message.block_id)
                : undefined);
        message.block !== undefined &&
            (obj.block = message.block ? Block.toJSON(message.block) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseGetBlockByHeightResponse);
        if (object.block_id !== undefined && object.block_id !== null) {
            message.block_id = BlockID.fromPartial(object.block_id);
        }
        else {
            message.block_id = undefined;
        }
        if (object.block !== undefined && object.block !== null) {
            message.block = Block.fromPartial(object.block);
        }
        else {
            message.block = undefined;
        }
        return message;
    },
};
const baseGetLatestBlockRequest = {};
export const GetLatestBlockRequest = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
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
export const GetLatestBlockResponse = {
    encode(message, writer = Writer.create()) {
        if (message.block_id !== undefined) {
            BlockID.encode(message.block_id, writer.uint32(10).fork()).ldelim();
        }
        if (message.block !== undefined) {
            Block.encode(message.block, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetLatestBlockResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.block_id = BlockID.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.block = Block.decode(reader, reader.uint32());
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
            message.block_id = BlockID.fromJSON(object.block_id);
        }
        else {
            message.block_id = undefined;
        }
        if (object.block !== undefined && object.block !== null) {
            message.block = Block.fromJSON(object.block);
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
                ? BlockID.toJSON(message.block_id)
                : undefined);
        message.block !== undefined &&
            (obj.block = message.block ? Block.toJSON(message.block) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseGetLatestBlockResponse);
        if (object.block_id !== undefined && object.block_id !== null) {
            message.block_id = BlockID.fromPartial(object.block_id);
        }
        else {
            message.block_id = undefined;
        }
        if (object.block !== undefined && object.block !== null) {
            message.block = Block.fromPartial(object.block);
        }
        else {
            message.block = undefined;
        }
        return message;
    },
};
const baseGetSyncingRequest = {};
export const GetSyncingRequest = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
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
export const GetSyncingResponse = {
    encode(message, writer = Writer.create()) {
        if (message.syncing === true) {
            writer.uint32(8).bool(message.syncing);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
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
export const GetNodeInfoRequest = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
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
export const GetNodeInfoResponse = {
    encode(message, writer = Writer.create()) {
        if (message.default_node_info !== undefined) {
            DefaultNodeInfo.encode(message.default_node_info, writer.uint32(10).fork()).ldelim();
        }
        if (message.application_version !== undefined) {
            VersionInfo.encode(message.application_version, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetNodeInfoResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.default_node_info = DefaultNodeInfo.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.application_version = VersionInfo.decode(reader, reader.uint32());
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
            message.default_node_info = DefaultNodeInfo.fromJSON(object.default_node_info);
        }
        else {
            message.default_node_info = undefined;
        }
        if (object.application_version !== undefined &&
            object.application_version !== null) {
            message.application_version = VersionInfo.fromJSON(object.application_version);
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
                ? DefaultNodeInfo.toJSON(message.default_node_info)
                : undefined);
        message.application_version !== undefined &&
            (obj.application_version = message.application_version
                ? VersionInfo.toJSON(message.application_version)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseGetNodeInfoResponse);
        if (object.default_node_info !== undefined &&
            object.default_node_info !== null) {
            message.default_node_info = DefaultNodeInfo.fromPartial(object.default_node_info);
        }
        else {
            message.default_node_info = undefined;
        }
        if (object.application_version !== undefined &&
            object.application_version !== null) {
            message.application_version = VersionInfo.fromPartial(object.application_version);
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
export const VersionInfo = {
    encode(message, writer = Writer.create()) {
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
            Module.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.cosmos_sdk_version !== "") {
            writer.uint32(66).string(message.cosmos_sdk_version);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
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
                    message.build_deps.push(Module.decode(reader, reader.uint32()));
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
                message.build_deps.push(Module.fromJSON(e));
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
            obj.build_deps = message.build_deps.map((e) => e ? Module.toJSON(e) : undefined);
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
                message.build_deps.push(Module.fromPartial(e));
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
export const Module = {
    encode(message, writer = Writer.create()) {
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
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
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
export class ServiceClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    GetNodeInfo(request) {
        const data = GetNodeInfoRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.base.tendermint.v1beta1.Service", "GetNodeInfo", data);
        return promise.then((data) => GetNodeInfoResponse.decode(new Reader(data)));
    }
    GetSyncing(request) {
        const data = GetSyncingRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.base.tendermint.v1beta1.Service", "GetSyncing", data);
        return promise.then((data) => GetSyncingResponse.decode(new Reader(data)));
    }
    GetLatestBlock(request) {
        const data = GetLatestBlockRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.base.tendermint.v1beta1.Service", "GetLatestBlock", data);
        return promise.then((data) => GetLatestBlockResponse.decode(new Reader(data)));
    }
    GetBlockByHeight(request) {
        const data = GetBlockByHeightRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.base.tendermint.v1beta1.Service", "GetBlockByHeight", data);
        return promise.then((data) => GetBlockByHeightResponse.decode(new Reader(data)));
    }
    GetLatestValidatorSet(request) {
        const data = GetLatestValidatorSetRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.base.tendermint.v1beta1.Service", "GetLatestValidatorSet", data);
        return promise.then((data) => GetLatestValidatorSetResponse.decode(new Reader(data)));
    }
    GetValidatorSetByHeight(request) {
        const data = GetValidatorSetByHeightRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.base.tendermint.v1beta1.Service", "GetValidatorSetByHeight", data);
        return promise.then((data) => GetValidatorSetByHeightResponse.decode(new Reader(data)));
    }
}
var globalThis = (() => {
    if (typeof globalThis !== "undefined")
        return globalThis;
    if (typeof self !== "undefined")
        return self;
    if (typeof window !== "undefined")
        return window;
    if (typeof global !== "undefined")
        return global;
    throw "Unable to locate global object";
})();
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
    }
    return long.toNumber();
}
if (util.Long !== Long) {
    util.Long = Long;
    configure();
}
