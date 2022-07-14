"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryClientImpl = exports.QueryBaseFeeResponse = exports.QueryBaseFeeRequest = exports.QueryTraceBlockResponse = exports.QueryTraceBlockRequest = exports.QueryTraceTxResponse = exports.QueryTraceTxRequest = exports.EstimateGasResponse = exports.EthCallRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = exports.QueryTxLogsResponse = exports.QueryTxLogsRequest = exports.QueryCodeResponse = exports.QueryCodeRequest = exports.QueryStorageResponse = exports.QueryStorageRequest = exports.QueryBalanceResponse = exports.QueryBalanceRequest = exports.QueryValidatorAccountResponse = exports.QueryValidatorAccountRequest = exports.QueryCosmosAccountResponse = exports.QueryCosmosAccountRequest = exports.QueryAccountResponse = exports.QueryAccountRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const minimal_1 = require("protobufjs/minimal");
const evm_1 = require("../../../ethermint/evm/v1/evm");
const tx_1 = require("../../../ethermint/evm/v1/tx");
const types_1 = require("../../../../../../../types");
const pagination_1 = require("../../../../../../../types/cosmos/base/query/pagination");
const timestamp_1 = require("../../../../../../../types/google/protobuf/timestamp");
exports.protobufPackage = "ethermint.evm.v1";
const baseQueryAccountRequest = { address: "" };
exports.QueryAccountRequest = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryAccountRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryAccountRequest);
        if (object.address !== undefined && object.address !== null) {
            message.address = String(object.address);
        }
        else {
            message.address = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryAccountRequest);
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        else {
            message.address = "";
        }
        return message;
    },
};
const baseQueryAccountResponse = {
    balance: "",
    code_hash: "",
    nonce: 0,
};
exports.QueryAccountResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.balance !== "") {
            writer.uint32(10).string(message.balance);
        }
        if (message.code_hash !== "") {
            writer.uint32(18).string(message.code_hash);
        }
        if (message.nonce !== 0) {
            writer.uint32(24).uint64(message.nonce);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryAccountResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.balance = reader.string();
                    break;
                case 2:
                    message.code_hash = reader.string();
                    break;
                case 3:
                    message.nonce = (0, types_1.longToNumber)(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryAccountResponse);
        if (object.balance !== undefined && object.balance !== null) {
            message.balance = String(object.balance);
        }
        else {
            message.balance = "";
        }
        if (object.code_hash !== undefined && object.code_hash !== null) {
            message.code_hash = String(object.code_hash);
        }
        else {
            message.code_hash = "";
        }
        if (object.nonce !== undefined && object.nonce !== null) {
            message.nonce = Number(object.nonce);
        }
        else {
            message.nonce = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.balance !== undefined && (obj.balance = message.balance);
        message.code_hash !== undefined && (obj.code_hash = message.code_hash);
        message.nonce !== undefined && (obj.nonce = message.nonce);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryAccountResponse);
        if (object.balance !== undefined && object.balance !== null) {
            message.balance = object.balance;
        }
        else {
            message.balance = "";
        }
        if (object.code_hash !== undefined && object.code_hash !== null) {
            message.code_hash = object.code_hash;
        }
        else {
            message.code_hash = "";
        }
        if (object.nonce !== undefined && object.nonce !== null) {
            message.nonce = object.nonce;
        }
        else {
            message.nonce = 0;
        }
        return message;
    },
};
const baseQueryCosmosAccountRequest = { address: "" };
exports.QueryCosmosAccountRequest = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryCosmosAccountRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryCosmosAccountRequest);
        if (object.address !== undefined && object.address !== null) {
            message.address = String(object.address);
        }
        else {
            message.address = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryCosmosAccountRequest);
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        else {
            message.address = "";
        }
        return message;
    },
};
const baseQueryCosmosAccountResponse = {
    cosmos_address: "",
    sequence: 0,
    account_number: 0,
};
exports.QueryCosmosAccountResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.cosmos_address !== "") {
            writer.uint32(10).string(message.cosmos_address);
        }
        if (message.sequence !== 0) {
            writer.uint32(16).uint64(message.sequence);
        }
        if (message.account_number !== 0) {
            writer.uint32(24).uint64(message.account_number);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryCosmosAccountResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cosmos_address = reader.string();
                    break;
                case 2:
                    message.sequence = (0, types_1.longToNumber)(reader.uint64());
                    break;
                case 3:
                    message.account_number = (0, types_1.longToNumber)(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryCosmosAccountResponse);
        if (object.cosmos_address !== undefined && object.cosmos_address !== null) {
            message.cosmos_address = String(object.cosmos_address);
        }
        else {
            message.cosmos_address = "";
        }
        if (object.sequence !== undefined && object.sequence !== null) {
            message.sequence = Number(object.sequence);
        }
        else {
            message.sequence = 0;
        }
        if (object.account_number !== undefined && object.account_number !== null) {
            message.account_number = Number(object.account_number);
        }
        else {
            message.account_number = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.cosmos_address !== undefined &&
            (obj.cosmos_address = message.cosmos_address);
        message.sequence !== undefined && (obj.sequence = message.sequence);
        message.account_number !== undefined &&
            (obj.account_number = message.account_number);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryCosmosAccountResponse);
        if (object.cosmos_address !== undefined && object.cosmos_address !== null) {
            message.cosmos_address = object.cosmos_address;
        }
        else {
            message.cosmos_address = "";
        }
        if (object.sequence !== undefined && object.sequence !== null) {
            message.sequence = object.sequence;
        }
        else {
            message.sequence = 0;
        }
        if (object.account_number !== undefined && object.account_number !== null) {
            message.account_number = object.account_number;
        }
        else {
            message.account_number = 0;
        }
        return message;
    },
};
const baseQueryValidatorAccountRequest = { cons_address: "" };
exports.QueryValidatorAccountRequest = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.cons_address !== "") {
            writer.uint32(10).string(message.cons_address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryValidatorAccountRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cons_address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryValidatorAccountRequest);
        if (object.cons_address !== undefined && object.cons_address !== null) {
            message.cons_address = String(object.cons_address);
        }
        else {
            message.cons_address = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.cons_address !== undefined &&
            (obj.cons_address = message.cons_address);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryValidatorAccountRequest);
        if (object.cons_address !== undefined && object.cons_address !== null) {
            message.cons_address = object.cons_address;
        }
        else {
            message.cons_address = "";
        }
        return message;
    },
};
const baseQueryValidatorAccountResponse = {
    account_address: "",
    sequence: 0,
    account_number: 0,
};
exports.QueryValidatorAccountResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.account_address !== "") {
            writer.uint32(10).string(message.account_address);
        }
        if (message.sequence !== 0) {
            writer.uint32(16).uint64(message.sequence);
        }
        if (message.account_number !== 0) {
            writer.uint32(24).uint64(message.account_number);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryValidatorAccountResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.account_address = reader.string();
                    break;
                case 2:
                    message.sequence = (0, types_1.longToNumber)(reader.uint64());
                    break;
                case 3:
                    message.account_number = (0, types_1.longToNumber)(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryValidatorAccountResponse);
        if (object.account_address !== undefined &&
            object.account_address !== null) {
            message.account_address = String(object.account_address);
        }
        else {
            message.account_address = "";
        }
        if (object.sequence !== undefined && object.sequence !== null) {
            message.sequence = Number(object.sequence);
        }
        else {
            message.sequence = 0;
        }
        if (object.account_number !== undefined && object.account_number !== null) {
            message.account_number = Number(object.account_number);
        }
        else {
            message.account_number = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.account_address !== undefined &&
            (obj.account_address = message.account_address);
        message.sequence !== undefined && (obj.sequence = message.sequence);
        message.account_number !== undefined &&
            (obj.account_number = message.account_number);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryValidatorAccountResponse);
        if (object.account_address !== undefined &&
            object.account_address !== null) {
            message.account_address = object.account_address;
        }
        else {
            message.account_address = "";
        }
        if (object.sequence !== undefined && object.sequence !== null) {
            message.sequence = object.sequence;
        }
        else {
            message.sequence = 0;
        }
        if (object.account_number !== undefined && object.account_number !== null) {
            message.account_number = object.account_number;
        }
        else {
            message.account_number = 0;
        }
        return message;
    },
};
const baseQueryBalanceRequest = { address: "" };
exports.QueryBalanceRequest = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryBalanceRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryBalanceRequest);
        if (object.address !== undefined && object.address !== null) {
            message.address = String(object.address);
        }
        else {
            message.address = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryBalanceRequest);
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        else {
            message.address = "";
        }
        return message;
    },
};
const baseQueryBalanceResponse = { balance: "" };
exports.QueryBalanceResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.balance !== "") {
            writer.uint32(10).string(message.balance);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryBalanceResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.balance = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryBalanceResponse);
        if (object.balance !== undefined && object.balance !== null) {
            message.balance = String(object.balance);
        }
        else {
            message.balance = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.balance !== undefined && (obj.balance = message.balance);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryBalanceResponse);
        if (object.balance !== undefined && object.balance !== null) {
            message.balance = object.balance;
        }
        else {
            message.balance = "";
        }
        return message;
    },
};
const baseQueryStorageRequest = { address: "", key: "" };
exports.QueryStorageRequest = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.key !== "") {
            writer.uint32(18).string(message.key);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryStorageRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.key = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryStorageRequest);
        if (object.address !== undefined && object.address !== null) {
            message.address = String(object.address);
        }
        else {
            message.address = "";
        }
        if (object.key !== undefined && object.key !== null) {
            message.key = String(object.key);
        }
        else {
            message.key = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.key !== undefined && (obj.key = message.key);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryStorageRequest);
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        else {
            message.address = "";
        }
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        }
        else {
            message.key = "";
        }
        return message;
    },
};
const baseQueryStorageResponse = { value: "" };
exports.QueryStorageResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.value !== "") {
            writer.uint32(10).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryStorageResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.value = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryStorageResponse);
        if (object.value !== undefined && object.value !== null) {
            message.value = String(object.value);
        }
        else {
            message.value = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryStorageResponse);
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value;
        }
        else {
            message.value = "";
        }
        return message;
    },
};
const baseQueryCodeRequest = { address: "" };
exports.QueryCodeRequest = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryCodeRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryCodeRequest);
        if (object.address !== undefined && object.address !== null) {
            message.address = String(object.address);
        }
        else {
            message.address = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryCodeRequest);
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        else {
            message.address = "";
        }
        return message;
    },
};
const baseQueryCodeResponse = {};
exports.QueryCodeResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.code.length !== 0) {
            writer.uint32(10).bytes(message.code);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryCodeResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.code = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryCodeResponse);
        if (object.code !== undefined && object.code !== null) {
            message.code = (0, types_1.bytesFromBase64)(object.code);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.code !== undefined &&
            (obj.code = (0, types_1.base64FromBytes)(message.code !== undefined ? message.code : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryCodeResponse);
        if (object.code !== undefined && object.code !== null) {
            message.code = object.code;
        }
        else {
            message.code = new Uint8Array();
        }
        return message;
    },
};
const baseQueryTxLogsRequest = { hash: "" };
exports.QueryTxLogsRequest = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.hash !== "") {
            writer.uint32(10).string(message.hash);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryTxLogsRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hash = reader.string();
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
        const message = Object.assign({}, baseQueryTxLogsRequest);
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = String(object.hash);
        }
        else {
            message.hash = "";
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
        message.hash !== undefined && (obj.hash = message.hash);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryTxLogsRequest);
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = object.hash;
        }
        else {
            message.hash = "";
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
const baseQueryTxLogsResponse = {};
exports.QueryTxLogsResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        for (const v of message.logs) {
            evm_1.Log.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryTxLogsResponse);
        message.logs = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.logs.push(evm_1.Log.decode(reader, reader.uint32()));
                    break;
                case 2:
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
        const message = Object.assign({}, baseQueryTxLogsResponse);
        message.logs = [];
        if (object.logs !== undefined && object.logs !== null) {
            for (const e of object.logs) {
                message.logs.push(evm_1.Log.fromJSON(e));
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
        if (message.logs) {
            obj.logs = message.logs.map((e) => (e ? evm_1.Log.toJSON(e) : undefined));
        }
        else {
            obj.logs = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryTxLogsResponse);
        message.logs = [];
        if (object.logs !== undefined && object.logs !== null) {
            for (const e of object.logs) {
                message.logs.push(evm_1.Log.fromPartial(e));
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
const baseQueryParamsRequest = {};
exports.QueryParamsRequest = {
    encode(_, writer = minimal_1.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryParamsRequest);
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
        const message = Object.assign({}, baseQueryParamsRequest);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseQueryParamsRequest);
        return message;
    },
};
const baseQueryParamsResponse = {};
exports.QueryParamsResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.params !== undefined) {
            evm_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryParamsResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = evm_1.Params.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryParamsResponse);
        if (object.params !== undefined && object.params !== null) {
            message.params = evm_1.Params.fromJSON(object.params);
        }
        else {
            message.params = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined &&
            (obj.params = message.params ? evm_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryParamsResponse);
        if (object.params !== undefined && object.params !== null) {
            message.params = evm_1.Params.fromPartial(object.params);
        }
        else {
            message.params = undefined;
        }
        return message;
    },
};
const baseEthCallRequest = { gas_cap: 0 };
exports.EthCallRequest = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.args.length !== 0) {
            writer.uint32(10).bytes(message.args);
        }
        if (message.gas_cap !== 0) {
            writer.uint32(16).uint64(message.gas_cap);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseEthCallRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.args = reader.bytes();
                    break;
                case 2:
                    message.gas_cap = (0, types_1.longToNumber)(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseEthCallRequest);
        if (object.args !== undefined && object.args !== null) {
            message.args = (0, types_1.bytesFromBase64)(object.args);
        }
        if (object.gas_cap !== undefined && object.gas_cap !== null) {
            message.gas_cap = Number(object.gas_cap);
        }
        else {
            message.gas_cap = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.args !== undefined &&
            (obj.args = (0, types_1.base64FromBytes)(message.args !== undefined ? message.args : new Uint8Array()));
        message.gas_cap !== undefined && (obj.gas_cap = message.gas_cap);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseEthCallRequest);
        if (object.args !== undefined && object.args !== null) {
            message.args = object.args;
        }
        else {
            message.args = new Uint8Array();
        }
        if (object.gas_cap !== undefined && object.gas_cap !== null) {
            message.gas_cap = object.gas_cap;
        }
        else {
            message.gas_cap = 0;
        }
        return message;
    },
};
const baseEstimateGasResponse = { gas: 0 };
exports.EstimateGasResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.gas !== 0) {
            writer.uint32(8).uint64(message.gas);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseEstimateGasResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.gas = (0, types_1.longToNumber)(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseEstimateGasResponse);
        if (object.gas !== undefined && object.gas !== null) {
            message.gas = Number(object.gas);
        }
        else {
            message.gas = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.gas !== undefined && (obj.gas = message.gas);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseEstimateGasResponse);
        if (object.gas !== undefined && object.gas !== null) {
            message.gas = object.gas;
        }
        else {
            message.gas = 0;
        }
        return message;
    },
};
const baseQueryTraceTxRequest = { block_number: 0, block_hash: "" };
exports.QueryTraceTxRequest = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.msg !== undefined) {
            tx_1.MsgEthereumTx.encode(message.msg, writer.uint32(10).fork()).ldelim();
        }
        if (message.trace_config !== undefined) {
            evm_1.TraceConfig.encode(message.trace_config, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.predecessors) {
            tx_1.MsgEthereumTx.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.block_number !== 0) {
            writer.uint32(40).int64(message.block_number);
        }
        if (message.block_hash !== "") {
            writer.uint32(50).string(message.block_hash);
        }
        if (message.block_time !== undefined) {
            timestamp_1.Timestamp.encode((0, types_1.toTimestamp)(message.block_time), writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryTraceTxRequest);
        message.predecessors = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.msg = tx_1.MsgEthereumTx.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.trace_config = evm_1.TraceConfig.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.predecessors.push(tx_1.MsgEthereumTx.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.block_number = (0, types_1.longToNumber)(reader.int64());
                    break;
                case 6:
                    message.block_hash = reader.string();
                    break;
                case 7:
                    message.block_time = (0, types_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryTraceTxRequest);
        message.predecessors = [];
        if (object.msg !== undefined && object.msg !== null) {
            message.msg = tx_1.MsgEthereumTx.fromJSON(object.msg);
        }
        else {
            message.msg = undefined;
        }
        if (object.trace_config !== undefined && object.trace_config !== null) {
            message.trace_config = evm_1.TraceConfig.fromJSON(object.trace_config);
        }
        else {
            message.trace_config = undefined;
        }
        if (object.predecessors !== undefined && object.predecessors !== null) {
            for (const e of object.predecessors) {
                message.predecessors.push(tx_1.MsgEthereumTx.fromJSON(e));
            }
        }
        if (object.block_number !== undefined && object.block_number !== null) {
            message.block_number = Number(object.block_number);
        }
        else {
            message.block_number = 0;
        }
        if (object.block_hash !== undefined && object.block_hash !== null) {
            message.block_hash = String(object.block_hash);
        }
        else {
            message.block_hash = "";
        }
        if (object.block_time !== undefined && object.block_time !== null) {
            message.block_time = (0, types_1.fromJsonTimestamp)(object.block_time);
        }
        else {
            message.block_time = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.msg !== undefined &&
            (obj.msg = message.msg ? tx_1.MsgEthereumTx.toJSON(message.msg) : undefined);
        message.trace_config !== undefined &&
            (obj.trace_config = message.trace_config
                ? evm_1.TraceConfig.toJSON(message.trace_config)
                : undefined);
        if (message.predecessors) {
            obj.predecessors = message.predecessors.map((e) => e ? tx_1.MsgEthereumTx.toJSON(e) : undefined);
        }
        else {
            obj.predecessors = [];
        }
        message.block_number !== undefined &&
            (obj.block_number = message.block_number);
        message.block_hash !== undefined && (obj.block_hash = message.block_hash);
        message.block_time !== undefined &&
            (obj.block_time =
                message.block_time !== undefined
                    ? message.block_time.toISOString()
                    : null);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryTraceTxRequest);
        message.predecessors = [];
        if (object.msg !== undefined && object.msg !== null) {
            message.msg = tx_1.MsgEthereumTx.fromPartial(object.msg);
        }
        else {
            message.msg = undefined;
        }
        if (object.trace_config !== undefined && object.trace_config !== null) {
            message.trace_config = evm_1.TraceConfig.fromPartial(object.trace_config);
        }
        else {
            message.trace_config = undefined;
        }
        if (object.predecessors !== undefined && object.predecessors !== null) {
            for (const e of object.predecessors) {
                message.predecessors.push(tx_1.MsgEthereumTx.fromPartial(e));
            }
        }
        if (object.block_number !== undefined && object.block_number !== null) {
            message.block_number = object.block_number;
        }
        else {
            message.block_number = 0;
        }
        if (object.block_hash !== undefined && object.block_hash !== null) {
            message.block_hash = object.block_hash;
        }
        else {
            message.block_hash = "";
        }
        if (object.block_time !== undefined && object.block_time !== null) {
            message.block_time = object.block_time;
        }
        else {
            message.block_time = undefined;
        }
        return message;
    },
};
const baseQueryTraceTxResponse = {};
exports.QueryTraceTxResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.data.length !== 0) {
            writer.uint32(10).bytes(message.data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryTraceTxResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.data = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryTraceTxResponse);
        if (object.data !== undefined && object.data !== null) {
            message.data = (0, types_1.bytesFromBase64)(object.data);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.data !== undefined &&
            (obj.data = (0, types_1.base64FromBytes)(message.data !== undefined ? message.data : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryTraceTxResponse);
        if (object.data !== undefined && object.data !== null) {
            message.data = object.data;
        }
        else {
            message.data = new Uint8Array();
        }
        return message;
    },
};
const baseQueryTraceBlockRequest = { block_number: 0, block_hash: "" };
exports.QueryTraceBlockRequest = {
    encode(message, writer = minimal_1.Writer.create()) {
        for (const v of message.txs) {
            tx_1.MsgEthereumTx.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.trace_config !== undefined) {
            evm_1.TraceConfig.encode(message.trace_config, writer.uint32(26).fork()).ldelim();
        }
        if (message.block_number !== 0) {
            writer.uint32(40).int64(message.block_number);
        }
        if (message.block_hash !== "") {
            writer.uint32(50).string(message.block_hash);
        }
        if (message.block_time !== undefined) {
            timestamp_1.Timestamp.encode((0, types_1.toTimestamp)(message.block_time), writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryTraceBlockRequest);
        message.txs = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.txs.push(tx_1.MsgEthereumTx.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.trace_config = evm_1.TraceConfig.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.block_number = (0, types_1.longToNumber)(reader.int64());
                    break;
                case 6:
                    message.block_hash = reader.string();
                    break;
                case 7:
                    message.block_time = (0, types_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryTraceBlockRequest);
        message.txs = [];
        if (object.txs !== undefined && object.txs !== null) {
            for (const e of object.txs) {
                message.txs.push(tx_1.MsgEthereumTx.fromJSON(e));
            }
        }
        if (object.trace_config !== undefined && object.trace_config !== null) {
            message.trace_config = evm_1.TraceConfig.fromJSON(object.trace_config);
        }
        else {
            message.trace_config = undefined;
        }
        if (object.block_number !== undefined && object.block_number !== null) {
            message.block_number = Number(object.block_number);
        }
        else {
            message.block_number = 0;
        }
        if (object.block_hash !== undefined && object.block_hash !== null) {
            message.block_hash = String(object.block_hash);
        }
        else {
            message.block_hash = "";
        }
        if (object.block_time !== undefined && object.block_time !== null) {
            message.block_time = (0, types_1.fromJsonTimestamp)(object.block_time);
        }
        else {
            message.block_time = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.txs) {
            obj.txs = message.txs.map((e) => e ? tx_1.MsgEthereumTx.toJSON(e) : undefined);
        }
        else {
            obj.txs = [];
        }
        message.trace_config !== undefined &&
            (obj.trace_config = message.trace_config
                ? evm_1.TraceConfig.toJSON(message.trace_config)
                : undefined);
        message.block_number !== undefined &&
            (obj.block_number = message.block_number);
        message.block_hash !== undefined && (obj.block_hash = message.block_hash);
        message.block_time !== undefined &&
            (obj.block_time =
                message.block_time !== undefined
                    ? message.block_time.toISOString()
                    : null);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryTraceBlockRequest);
        message.txs = [];
        if (object.txs !== undefined && object.txs !== null) {
            for (const e of object.txs) {
                message.txs.push(tx_1.MsgEthereumTx.fromPartial(e));
            }
        }
        if (object.trace_config !== undefined && object.trace_config !== null) {
            message.trace_config = evm_1.TraceConfig.fromPartial(object.trace_config);
        }
        else {
            message.trace_config = undefined;
        }
        if (object.block_number !== undefined && object.block_number !== null) {
            message.block_number = object.block_number;
        }
        else {
            message.block_number = 0;
        }
        if (object.block_hash !== undefined && object.block_hash !== null) {
            message.block_hash = object.block_hash;
        }
        else {
            message.block_hash = "";
        }
        if (object.block_time !== undefined && object.block_time !== null) {
            message.block_time = object.block_time;
        }
        else {
            message.block_time = undefined;
        }
        return message;
    },
};
const baseQueryTraceBlockResponse = {};
exports.QueryTraceBlockResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.data.length !== 0) {
            writer.uint32(10).bytes(message.data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryTraceBlockResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.data = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryTraceBlockResponse);
        if (object.data !== undefined && object.data !== null) {
            message.data = (0, types_1.bytesFromBase64)(object.data);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.data !== undefined &&
            (obj.data = (0, types_1.base64FromBytes)(message.data !== undefined ? message.data : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryTraceBlockResponse);
        if (object.data !== undefined && object.data !== null) {
            message.data = object.data;
        }
        else {
            message.data = new Uint8Array();
        }
        return message;
    },
};
const baseQueryBaseFeeRequest = {};
exports.QueryBaseFeeRequest = {
    encode(_, writer = minimal_1.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryBaseFeeRequest);
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
        const message = Object.assign({}, baseQueryBaseFeeRequest);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseQueryBaseFeeRequest);
        return message;
    },
};
const baseQueryBaseFeeResponse = { base_fee: "" };
exports.QueryBaseFeeResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.base_fee !== "") {
            writer.uint32(10).string(message.base_fee);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryBaseFeeResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.base_fee = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryBaseFeeResponse);
        if (object.base_fee !== undefined && object.base_fee !== null) {
            message.base_fee = String(object.base_fee);
        }
        else {
            message.base_fee = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.base_fee !== undefined && (obj.base_fee = message.base_fee);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryBaseFeeResponse);
        if (object.base_fee !== undefined && object.base_fee !== null) {
            message.base_fee = object.base_fee;
        }
        else {
            message.base_fee = "";
        }
        return message;
    },
};
class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    Account(request) {
        const data = exports.QueryAccountRequest.encode(request).finish();
        const promise = this.rpc.request("ethermint.evm.v1.Query", "Account", data);
        return promise.then((data) => exports.QueryAccountResponse.decode(new minimal_1.Reader(data)));
    }
    CosmosAccount(request) {
        const data = exports.QueryCosmosAccountRequest.encode(request).finish();
        const promise = this.rpc.request("ethermint.evm.v1.Query", "CosmosAccount", data);
        return promise.then((data) => exports.QueryCosmosAccountResponse.decode(new minimal_1.Reader(data)));
    }
    ValidatorAccount(request) {
        const data = exports.QueryValidatorAccountRequest.encode(request).finish();
        const promise = this.rpc.request("ethermint.evm.v1.Query", "ValidatorAccount", data);
        return promise.then((data) => exports.QueryValidatorAccountResponse.decode(new minimal_1.Reader(data)));
    }
    Balance(request) {
        const data = exports.QueryBalanceRequest.encode(request).finish();
        const promise = this.rpc.request("ethermint.evm.v1.Query", "Balance", data);
        return promise.then((data) => exports.QueryBalanceResponse.decode(new minimal_1.Reader(data)));
    }
    Storage(request) {
        const data = exports.QueryStorageRequest.encode(request).finish();
        const promise = this.rpc.request("ethermint.evm.v1.Query", "Storage", data);
        return promise.then((data) => exports.QueryStorageResponse.decode(new minimal_1.Reader(data)));
    }
    Code(request) {
        const data = exports.QueryCodeRequest.encode(request).finish();
        const promise = this.rpc.request("ethermint.evm.v1.Query", "Code", data);
        return promise.then((data) => exports.QueryCodeResponse.decode(new minimal_1.Reader(data)));
    }
    Params(request) {
        const data = exports.QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("ethermint.evm.v1.Query", "Params", data);
        return promise.then((data) => exports.QueryParamsResponse.decode(new minimal_1.Reader(data)));
    }
    EthCall(request) {
        const data = exports.EthCallRequest.encode(request).finish();
        const promise = this.rpc.request("ethermint.evm.v1.Query", "EthCall", data);
        return promise.then((data) => tx_1.MsgEthereumTxResponse.decode(new minimal_1.Reader(data)));
    }
    EstimateGas(request) {
        const data = exports.EthCallRequest.encode(request).finish();
        const promise = this.rpc.request("ethermint.evm.v1.Query", "EstimateGas", data);
        return promise.then((data) => exports.EstimateGasResponse.decode(new minimal_1.Reader(data)));
    }
    TraceTx(request) {
        const data = exports.QueryTraceTxRequest.encode(request).finish();
        const promise = this.rpc.request("ethermint.evm.v1.Query", "TraceTx", data);
        return promise.then((data) => exports.QueryTraceTxResponse.decode(new minimal_1.Reader(data)));
    }
    TraceBlock(request) {
        const data = exports.QueryTraceBlockRequest.encode(request).finish();
        const promise = this.rpc.request("ethermint.evm.v1.Query", "TraceBlock", data);
        return promise.then((data) => exports.QueryTraceBlockResponse.decode(new minimal_1.Reader(data)));
    }
    BaseFee(request) {
        const data = exports.QueryBaseFeeRequest.encode(request).finish();
        const promise = this.rpc.request("ethermint.evm.v1.Query", "BaseFee", data);
        return promise.then((data) => exports.QueryBaseFeeResponse.decode(new minimal_1.Reader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
