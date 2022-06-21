"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Params = exports.ModuleAccount = exports.BaseAccount = exports.protobufPackage = void 0;
const minimal_1 = require("protobufjs/minimal");
const types_1 = require("../../../../types");
const any_1 = require("../../../../types/google/protobuf/any");
exports.protobufPackage = "cosmos.auth.v1beta1";
const baseBaseAccount = {
    address: "",
    account_number: 0,
    sequence: 0,
};
exports.BaseAccount = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.pub_key !== undefined) {
            any_1.Any.encode(message.pub_key, writer.uint32(18).fork()).ldelim();
        }
        if (message.account_number !== 0) {
            writer.uint32(24).uint64(message.account_number);
        }
        if (message.sequence !== 0) {
            writer.uint32(32).uint64(message.sequence);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseBaseAccount);
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
                    message.account_number = (0, types_1.longToNumber)(reader.uint64());
                    break;
                case 4:
                    message.sequence = (0, types_1.longToNumber)(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseBaseAccount);
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
        if (object.account_number !== undefined && object.account_number !== null) {
            message.account_number = Number(object.account_number);
        }
        else {
            message.account_number = 0;
        }
        if (object.sequence !== undefined && object.sequence !== null) {
            message.sequence = Number(object.sequence);
        }
        else {
            message.sequence = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.pub_key !== undefined &&
            (obj.pub_key = message.pub_key ? any_1.Any.toJSON(message.pub_key) : undefined);
        message.account_number !== undefined &&
            (obj.account_number = message.account_number);
        message.sequence !== undefined && (obj.sequence = message.sequence);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseBaseAccount);
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
        if (object.account_number !== undefined && object.account_number !== null) {
            message.account_number = object.account_number;
        }
        else {
            message.account_number = 0;
        }
        if (object.sequence !== undefined && object.sequence !== null) {
            message.sequence = object.sequence;
        }
        else {
            message.sequence = 0;
        }
        return message;
    },
};
const baseModuleAccount = { name: "", permissions: "" };
exports.ModuleAccount = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.base_account !== undefined) {
            exports.BaseAccount.encode(message.base_account, writer.uint32(10).fork()).ldelim();
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        for (const v of message.permissions) {
            writer.uint32(26).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseModuleAccount);
        message.permissions = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.base_account = exports.BaseAccount.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.permissions.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseModuleAccount);
        message.permissions = [];
        if (object.base_account !== undefined && object.base_account !== null) {
            message.base_account = exports.BaseAccount.fromJSON(object.base_account);
        }
        else {
            message.base_account = undefined;
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = "";
        }
        if (object.permissions !== undefined && object.permissions !== null) {
            for (const e of object.permissions) {
                message.permissions.push(String(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.base_account !== undefined &&
            (obj.base_account = message.base_account
                ? exports.BaseAccount.toJSON(message.base_account)
                : undefined);
        message.name !== undefined && (obj.name = message.name);
        if (message.permissions) {
            obj.permissions = message.permissions.map((e) => e);
        }
        else {
            obj.permissions = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseModuleAccount);
        message.permissions = [];
        if (object.base_account !== undefined && object.base_account !== null) {
            message.base_account = exports.BaseAccount.fromPartial(object.base_account);
        }
        else {
            message.base_account = undefined;
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = "";
        }
        if (object.permissions !== undefined && object.permissions !== null) {
            for (const e of object.permissions) {
                message.permissions.push(e);
            }
        }
        return message;
    },
};
const baseParams = {
    max_memo_characters: 0,
    tx_sig_limit: 0,
    tx_size_cost_per_byte: 0,
    sig_verify_cost_ed25519: 0,
    sig_verify_cost_secp256k1: 0,
};
exports.Params = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.max_memo_characters !== 0) {
            writer.uint32(8).uint64(message.max_memo_characters);
        }
        if (message.tx_sig_limit !== 0) {
            writer.uint32(16).uint64(message.tx_sig_limit);
        }
        if (message.tx_size_cost_per_byte !== 0) {
            writer.uint32(24).uint64(message.tx_size_cost_per_byte);
        }
        if (message.sig_verify_cost_ed25519 !== 0) {
            writer.uint32(32).uint64(message.sig_verify_cost_ed25519);
        }
        if (message.sig_verify_cost_secp256k1 !== 0) {
            writer.uint32(40).uint64(message.sig_verify_cost_secp256k1);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseParams);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.max_memo_characters = (0, types_1.longToNumber)(reader.uint64());
                    break;
                case 2:
                    message.tx_sig_limit = (0, types_1.longToNumber)(reader.uint64());
                    break;
                case 3:
                    message.tx_size_cost_per_byte = (0, types_1.longToNumber)(reader.uint64());
                    break;
                case 4:
                    message.sig_verify_cost_ed25519 = (0, types_1.longToNumber)(reader.uint64());
                    break;
                case 5:
                    message.sig_verify_cost_secp256k1 = (0, types_1.longToNumber)(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseParams);
        if (object.max_memo_characters !== undefined &&
            object.max_memo_characters !== null) {
            message.max_memo_characters = Number(object.max_memo_characters);
        }
        else {
            message.max_memo_characters = 0;
        }
        if (object.tx_sig_limit !== undefined && object.tx_sig_limit !== null) {
            message.tx_sig_limit = Number(object.tx_sig_limit);
        }
        else {
            message.tx_sig_limit = 0;
        }
        if (object.tx_size_cost_per_byte !== undefined &&
            object.tx_size_cost_per_byte !== null) {
            message.tx_size_cost_per_byte = Number(object.tx_size_cost_per_byte);
        }
        else {
            message.tx_size_cost_per_byte = 0;
        }
        if (object.sig_verify_cost_ed25519 !== undefined &&
            object.sig_verify_cost_ed25519 !== null) {
            message.sig_verify_cost_ed25519 = Number(object.sig_verify_cost_ed25519);
        }
        else {
            message.sig_verify_cost_ed25519 = 0;
        }
        if (object.sig_verify_cost_secp256k1 !== undefined &&
            object.sig_verify_cost_secp256k1 !== null) {
            message.sig_verify_cost_secp256k1 = Number(object.sig_verify_cost_secp256k1);
        }
        else {
            message.sig_verify_cost_secp256k1 = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.max_memo_characters !== undefined &&
            (obj.max_memo_characters = message.max_memo_characters);
        message.tx_sig_limit !== undefined &&
            (obj.tx_sig_limit = message.tx_sig_limit);
        message.tx_size_cost_per_byte !== undefined &&
            (obj.tx_size_cost_per_byte = message.tx_size_cost_per_byte);
        message.sig_verify_cost_ed25519 !== undefined &&
            (obj.sig_verify_cost_ed25519 = message.sig_verify_cost_ed25519);
        message.sig_verify_cost_secp256k1 !== undefined &&
            (obj.sig_verify_cost_secp256k1 = message.sig_verify_cost_secp256k1);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseParams);
        if (object.max_memo_characters !== undefined &&
            object.max_memo_characters !== null) {
            message.max_memo_characters = object.max_memo_characters;
        }
        else {
            message.max_memo_characters = 0;
        }
        if (object.tx_sig_limit !== undefined && object.tx_sig_limit !== null) {
            message.tx_sig_limit = object.tx_sig_limit;
        }
        else {
            message.tx_sig_limit = 0;
        }
        if (object.tx_size_cost_per_byte !== undefined &&
            object.tx_size_cost_per_byte !== null) {
            message.tx_size_cost_per_byte = object.tx_size_cost_per_byte;
        }
        else {
            message.tx_size_cost_per_byte = 0;
        }
        if (object.sig_verify_cost_ed25519 !== undefined &&
            object.sig_verify_cost_ed25519 !== null) {
            message.sig_verify_cost_ed25519 = object.sig_verify_cost_ed25519;
        }
        else {
            message.sig_verify_cost_ed25519 = 0;
        }
        if (object.sig_verify_cost_secp256k1 !== undefined &&
            object.sig_verify_cost_secp256k1 !== null) {
            message.sig_verify_cost_secp256k1 = object.sig_verify_cost_secp256k1;
        }
        else {
            message.sig_verify_cost_secp256k1 = 0;
        }
        return message;
    },
};
