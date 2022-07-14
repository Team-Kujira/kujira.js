/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Log, Params, TraceConfig } from "../../../ethermint/evm/v1/evm";
import { MsgEthereumTx, MsgEthereumTxResponse, } from "../../../ethermint/evm/v1/tx";
import { base64FromBytes, bytesFromBase64, fromJsonTimestamp, fromTimestamp, longToNumber, toTimestamp, } from "../../../../../../../types";
import { PageRequest, PageResponse, } from "../../../../../../../types/cosmos/base/query/pagination";
import { Timestamp } from "../../../../../../../types/google/protobuf/timestamp";
export const protobufPackage = "ethermint.evm.v1";
const baseQueryAccountRequest = { address: "" };
export const QueryAccountRequest = {
    encode(message, writer = Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
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
export const QueryAccountResponse = {
    encode(message, writer = Writer.create()) {
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
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
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
                    message.nonce = longToNumber(reader.uint64());
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
export const QueryCosmosAccountRequest = {
    encode(message, writer = Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
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
export const QueryCosmosAccountResponse = {
    encode(message, writer = Writer.create()) {
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
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryCosmosAccountResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cosmos_address = reader.string();
                    break;
                case 2:
                    message.sequence = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.account_number = longToNumber(reader.uint64());
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
export const QueryValidatorAccountRequest = {
    encode(message, writer = Writer.create()) {
        if (message.cons_address !== "") {
            writer.uint32(10).string(message.cons_address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
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
export const QueryValidatorAccountResponse = {
    encode(message, writer = Writer.create()) {
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
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryValidatorAccountResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.account_address = reader.string();
                    break;
                case 2:
                    message.sequence = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.account_number = longToNumber(reader.uint64());
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
export const QueryBalanceRequest = {
    encode(message, writer = Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
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
export const QueryBalanceResponse = {
    encode(message, writer = Writer.create()) {
        if (message.balance !== "") {
            writer.uint32(10).string(message.balance);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
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
export const QueryStorageRequest = {
    encode(message, writer = Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.key !== "") {
            writer.uint32(18).string(message.key);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
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
export const QueryStorageResponse = {
    encode(message, writer = Writer.create()) {
        if (message.value !== "") {
            writer.uint32(10).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
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
export const QueryCodeRequest = {
    encode(message, writer = Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
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
export const QueryCodeResponse = {
    encode(message, writer = Writer.create()) {
        if (message.code.length !== 0) {
            writer.uint32(10).bytes(message.code);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
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
            message.code = bytesFromBase64(object.code);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.code !== undefined &&
            (obj.code = base64FromBytes(message.code !== undefined ? message.code : new Uint8Array()));
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
export const QueryTxLogsRequest = {
    encode(message, writer = Writer.create()) {
        if (message.hash !== "") {
            writer.uint32(10).string(message.hash);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryTxLogsRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hash = reader.string();
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
        const message = Object.assign({}, baseQueryTxLogsRequest);
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = String(object.hash);
        }
        else {
            message.hash = "";
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
        message.hash !== undefined && (obj.hash = message.hash);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageRequest.toJSON(message.pagination)
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
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryTxLogsResponse = {};
export const QueryTxLogsResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.logs) {
            Log.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryTxLogsResponse);
        message.logs = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.logs.push(Log.decode(reader, reader.uint32()));
                    break;
                case 2:
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
        const message = Object.assign({}, baseQueryTxLogsResponse);
        message.logs = [];
        if (object.logs !== undefined && object.logs !== null) {
            for (const e of object.logs) {
                message.logs.push(Log.fromJSON(e));
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
        if (message.logs) {
            obj.logs = message.logs.map((e) => (e ? Log.toJSON(e) : undefined));
        }
        else {
            obj.logs = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryTxLogsResponse);
        message.logs = [];
        if (object.logs !== undefined && object.logs !== null) {
            for (const e of object.logs) {
                message.logs.push(Log.fromPartial(e));
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
const baseQueryParamsRequest = {};
export const QueryParamsRequest = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
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
export const QueryParamsResponse = {
    encode(message, writer = Writer.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryParamsResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = Params.decode(reader, reader.uint32());
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
            message.params = Params.fromJSON(object.params);
        }
        else {
            message.params = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined &&
            (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryParamsResponse);
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromPartial(object.params);
        }
        else {
            message.params = undefined;
        }
        return message;
    },
};
const baseEthCallRequest = { gas_cap: 0 };
export const EthCallRequest = {
    encode(message, writer = Writer.create()) {
        if (message.args.length !== 0) {
            writer.uint32(10).bytes(message.args);
        }
        if (message.gas_cap !== 0) {
            writer.uint32(16).uint64(message.gas_cap);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseEthCallRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.args = reader.bytes();
                    break;
                case 2:
                    message.gas_cap = longToNumber(reader.uint64());
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
            message.args = bytesFromBase64(object.args);
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
            (obj.args = base64FromBytes(message.args !== undefined ? message.args : new Uint8Array()));
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
export const EstimateGasResponse = {
    encode(message, writer = Writer.create()) {
        if (message.gas !== 0) {
            writer.uint32(8).uint64(message.gas);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseEstimateGasResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.gas = longToNumber(reader.uint64());
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
export const QueryTraceTxRequest = {
    encode(message, writer = Writer.create()) {
        if (message.msg !== undefined) {
            MsgEthereumTx.encode(message.msg, writer.uint32(10).fork()).ldelim();
        }
        if (message.trace_config !== undefined) {
            TraceConfig.encode(message.trace_config, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.predecessors) {
            MsgEthereumTx.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.block_number !== 0) {
            writer.uint32(40).int64(message.block_number);
        }
        if (message.block_hash !== "") {
            writer.uint32(50).string(message.block_hash);
        }
        if (message.block_time !== undefined) {
            Timestamp.encode(toTimestamp(message.block_time), writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryTraceTxRequest);
        message.predecessors = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.msg = MsgEthereumTx.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.trace_config = TraceConfig.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.predecessors.push(MsgEthereumTx.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.block_number = longToNumber(reader.int64());
                    break;
                case 6:
                    message.block_hash = reader.string();
                    break;
                case 7:
                    message.block_time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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
            message.msg = MsgEthereumTx.fromJSON(object.msg);
        }
        else {
            message.msg = undefined;
        }
        if (object.trace_config !== undefined && object.trace_config !== null) {
            message.trace_config = TraceConfig.fromJSON(object.trace_config);
        }
        else {
            message.trace_config = undefined;
        }
        if (object.predecessors !== undefined && object.predecessors !== null) {
            for (const e of object.predecessors) {
                message.predecessors.push(MsgEthereumTx.fromJSON(e));
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
            message.block_time = fromJsonTimestamp(object.block_time);
        }
        else {
            message.block_time = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.msg !== undefined &&
            (obj.msg = message.msg ? MsgEthereumTx.toJSON(message.msg) : undefined);
        message.trace_config !== undefined &&
            (obj.trace_config = message.trace_config
                ? TraceConfig.toJSON(message.trace_config)
                : undefined);
        if (message.predecessors) {
            obj.predecessors = message.predecessors.map((e) => e ? MsgEthereumTx.toJSON(e) : undefined);
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
            message.msg = MsgEthereumTx.fromPartial(object.msg);
        }
        else {
            message.msg = undefined;
        }
        if (object.trace_config !== undefined && object.trace_config !== null) {
            message.trace_config = TraceConfig.fromPartial(object.trace_config);
        }
        else {
            message.trace_config = undefined;
        }
        if (object.predecessors !== undefined && object.predecessors !== null) {
            for (const e of object.predecessors) {
                message.predecessors.push(MsgEthereumTx.fromPartial(e));
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
export const QueryTraceTxResponse = {
    encode(message, writer = Writer.create()) {
        if (message.data.length !== 0) {
            writer.uint32(10).bytes(message.data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
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
            message.data = bytesFromBase64(object.data);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.data !== undefined &&
            (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
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
export const QueryTraceBlockRequest = {
    encode(message, writer = Writer.create()) {
        for (const v of message.txs) {
            MsgEthereumTx.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.trace_config !== undefined) {
            TraceConfig.encode(message.trace_config, writer.uint32(26).fork()).ldelim();
        }
        if (message.block_number !== 0) {
            writer.uint32(40).int64(message.block_number);
        }
        if (message.block_hash !== "") {
            writer.uint32(50).string(message.block_hash);
        }
        if (message.block_time !== undefined) {
            Timestamp.encode(toTimestamp(message.block_time), writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryTraceBlockRequest);
        message.txs = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.txs.push(MsgEthereumTx.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.trace_config = TraceConfig.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.block_number = longToNumber(reader.int64());
                    break;
                case 6:
                    message.block_hash = reader.string();
                    break;
                case 7:
                    message.block_time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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
                message.txs.push(MsgEthereumTx.fromJSON(e));
            }
        }
        if (object.trace_config !== undefined && object.trace_config !== null) {
            message.trace_config = TraceConfig.fromJSON(object.trace_config);
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
            message.block_time = fromJsonTimestamp(object.block_time);
        }
        else {
            message.block_time = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.txs) {
            obj.txs = message.txs.map((e) => e ? MsgEthereumTx.toJSON(e) : undefined);
        }
        else {
            obj.txs = [];
        }
        message.trace_config !== undefined &&
            (obj.trace_config = message.trace_config
                ? TraceConfig.toJSON(message.trace_config)
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
                message.txs.push(MsgEthereumTx.fromPartial(e));
            }
        }
        if (object.trace_config !== undefined && object.trace_config !== null) {
            message.trace_config = TraceConfig.fromPartial(object.trace_config);
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
export const QueryTraceBlockResponse = {
    encode(message, writer = Writer.create()) {
        if (message.data.length !== 0) {
            writer.uint32(10).bytes(message.data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
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
            message.data = bytesFromBase64(object.data);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.data !== undefined &&
            (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
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
export const QueryBaseFeeRequest = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
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
export const QueryBaseFeeResponse = {
    encode(message, writer = Writer.create()) {
        if (message.base_fee !== "") {
            writer.uint32(10).string(message.base_fee);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
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
export class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    Account(request) {
        const data = QueryAccountRequest.encode(request).finish();
        const promise = this.rpc.request("ethermint.evm.v1.Query", "Account", data);
        return promise.then((data) => QueryAccountResponse.decode(new Reader(data)));
    }
    CosmosAccount(request) {
        const data = QueryCosmosAccountRequest.encode(request).finish();
        const promise = this.rpc.request("ethermint.evm.v1.Query", "CosmosAccount", data);
        return promise.then((data) => QueryCosmosAccountResponse.decode(new Reader(data)));
    }
    ValidatorAccount(request) {
        const data = QueryValidatorAccountRequest.encode(request).finish();
        const promise = this.rpc.request("ethermint.evm.v1.Query", "ValidatorAccount", data);
        return promise.then((data) => QueryValidatorAccountResponse.decode(new Reader(data)));
    }
    Balance(request) {
        const data = QueryBalanceRequest.encode(request).finish();
        const promise = this.rpc.request("ethermint.evm.v1.Query", "Balance", data);
        return promise.then((data) => QueryBalanceResponse.decode(new Reader(data)));
    }
    Storage(request) {
        const data = QueryStorageRequest.encode(request).finish();
        const promise = this.rpc.request("ethermint.evm.v1.Query", "Storage", data);
        return promise.then((data) => QueryStorageResponse.decode(new Reader(data)));
    }
    Code(request) {
        const data = QueryCodeRequest.encode(request).finish();
        const promise = this.rpc.request("ethermint.evm.v1.Query", "Code", data);
        return promise.then((data) => QueryCodeResponse.decode(new Reader(data)));
    }
    Params(request) {
        const data = QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("ethermint.evm.v1.Query", "Params", data);
        return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
    }
    EthCall(request) {
        const data = EthCallRequest.encode(request).finish();
        const promise = this.rpc.request("ethermint.evm.v1.Query", "EthCall", data);
        return promise.then((data) => MsgEthereumTxResponse.decode(new Reader(data)));
    }
    EstimateGas(request) {
        const data = EthCallRequest.encode(request).finish();
        const promise = this.rpc.request("ethermint.evm.v1.Query", "EstimateGas", data);
        return promise.then((data) => EstimateGasResponse.decode(new Reader(data)));
    }
    TraceTx(request) {
        const data = QueryTraceTxRequest.encode(request).finish();
        const promise = this.rpc.request("ethermint.evm.v1.Query", "TraceTx", data);
        return promise.then((data) => QueryTraceTxResponse.decode(new Reader(data)));
    }
    TraceBlock(request) {
        const data = QueryTraceBlockRequest.encode(request).finish();
        const promise = this.rpc.request("ethermint.evm.v1.Query", "TraceBlock", data);
        return promise.then((data) => QueryTraceBlockResponse.decode(new Reader(data)));
    }
    BaseFee(request) {
        const data = QueryBaseFeeRequest.encode(request).finish();
        const promise = this.rpc.request("ethermint.evm.v1.Query", "BaseFee", data);
        return promise.then((data) => QueryBaseFeeResponse.decode(new Reader(data)));
    }
}
