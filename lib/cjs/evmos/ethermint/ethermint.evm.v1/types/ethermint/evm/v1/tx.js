"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = exports.MsgEthereumTxResponse = exports.ExtensionOptionsEthereumTx = exports.DynamicFeeTx = exports.AccessListTx = exports.LegacyTx = exports.MsgEthereumTx = exports.protobufPackage = void 0;
/* eslint-disable */
const minimal_1 = require("protobufjs/minimal");
const evm_1 = require("../../../ethermint/evm/v1/evm");
const types_1 = require("../../../../../../../types");
const any_1 = require("../../../../../../../types/google/protobuf/any");
exports.protobufPackage = "ethermint.evm.v1";
const baseMsgEthereumTx = { size: 0, hash: "", from: "" };
exports.MsgEthereumTx = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.data !== undefined) {
            any_1.Any.encode(message.data, writer.uint32(10).fork()).ldelim();
        }
        if (message.size !== 0) {
            writer.uint32(17).double(message.size);
        }
        if (message.hash !== "") {
            writer.uint32(26).string(message.hash);
        }
        if (message.from !== "") {
            writer.uint32(34).string(message.from);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgEthereumTx);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.data = any_1.Any.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.size = reader.double();
                    break;
                case 3:
                    message.hash = reader.string();
                    break;
                case 4:
                    message.from = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMsgEthereumTx);
        if (object.data !== undefined && object.data !== null) {
            message.data = any_1.Any.fromJSON(object.data);
        }
        else {
            message.data = undefined;
        }
        if (object.size !== undefined && object.size !== null) {
            message.size = Number(object.size);
        }
        else {
            message.size = 0;
        }
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = String(object.hash);
        }
        else {
            message.hash = "";
        }
        if (object.from !== undefined && object.from !== null) {
            message.from = String(object.from);
        }
        else {
            message.from = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.data !== undefined &&
            (obj.data = message.data ? any_1.Any.toJSON(message.data) : undefined);
        message.size !== undefined && (obj.size = message.size);
        message.hash !== undefined && (obj.hash = message.hash);
        message.from !== undefined && (obj.from = message.from);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMsgEthereumTx);
        if (object.data !== undefined && object.data !== null) {
            message.data = any_1.Any.fromPartial(object.data);
        }
        else {
            message.data = undefined;
        }
        if (object.size !== undefined && object.size !== null) {
            message.size = object.size;
        }
        else {
            message.size = 0;
        }
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = object.hash;
        }
        else {
            message.hash = "";
        }
        if (object.from !== undefined && object.from !== null) {
            message.from = object.from;
        }
        else {
            message.from = "";
        }
        return message;
    },
};
const baseLegacyTx = {
    nonce: 0,
    gas_price: "",
    gas: 0,
    to: "",
    value: "",
};
exports.LegacyTx = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.nonce !== 0) {
            writer.uint32(8).uint64(message.nonce);
        }
        if (message.gas_price !== "") {
            writer.uint32(18).string(message.gas_price);
        }
        if (message.gas !== 0) {
            writer.uint32(24).uint64(message.gas);
        }
        if (message.to !== "") {
            writer.uint32(34).string(message.to);
        }
        if (message.value !== "") {
            writer.uint32(42).string(message.value);
        }
        if (message.data.length !== 0) {
            writer.uint32(50).bytes(message.data);
        }
        if (message.v.length !== 0) {
            writer.uint32(58).bytes(message.v);
        }
        if (message.r.length !== 0) {
            writer.uint32(66).bytes(message.r);
        }
        if (message.s.length !== 0) {
            writer.uint32(74).bytes(message.s);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseLegacyTx);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nonce = (0, types_1.longToNumber)(reader.uint64());
                    break;
                case 2:
                    message.gas_price = reader.string();
                    break;
                case 3:
                    message.gas = (0, types_1.longToNumber)(reader.uint64());
                    break;
                case 4:
                    message.to = reader.string();
                    break;
                case 5:
                    message.value = reader.string();
                    break;
                case 6:
                    message.data = reader.bytes();
                    break;
                case 7:
                    message.v = reader.bytes();
                    break;
                case 8:
                    message.r = reader.bytes();
                    break;
                case 9:
                    message.s = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseLegacyTx);
        if (object.nonce !== undefined && object.nonce !== null) {
            message.nonce = Number(object.nonce);
        }
        else {
            message.nonce = 0;
        }
        if (object.gas_price !== undefined && object.gas_price !== null) {
            message.gas_price = String(object.gas_price);
        }
        else {
            message.gas_price = "";
        }
        if (object.gas !== undefined && object.gas !== null) {
            message.gas = Number(object.gas);
        }
        else {
            message.gas = 0;
        }
        if (object.to !== undefined && object.to !== null) {
            message.to = String(object.to);
        }
        else {
            message.to = "";
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = String(object.value);
        }
        else {
            message.value = "";
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = (0, types_1.bytesFromBase64)(object.data);
        }
        if (object.v !== undefined && object.v !== null) {
            message.v = (0, types_1.bytesFromBase64)(object.v);
        }
        if (object.r !== undefined && object.r !== null) {
            message.r = (0, types_1.bytesFromBase64)(object.r);
        }
        if (object.s !== undefined && object.s !== null) {
            message.s = (0, types_1.bytesFromBase64)(object.s);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.nonce !== undefined && (obj.nonce = message.nonce);
        message.gas_price !== undefined && (obj.gas_price = message.gas_price);
        message.gas !== undefined && (obj.gas = message.gas);
        message.to !== undefined && (obj.to = message.to);
        message.value !== undefined && (obj.value = message.value);
        message.data !== undefined &&
            (obj.data = (0, types_1.base64FromBytes)(message.data !== undefined ? message.data : new Uint8Array()));
        message.v !== undefined &&
            (obj.v = (0, types_1.base64FromBytes)(message.v !== undefined ? message.v : new Uint8Array()));
        message.r !== undefined &&
            (obj.r = (0, types_1.base64FromBytes)(message.r !== undefined ? message.r : new Uint8Array()));
        message.s !== undefined &&
            (obj.s = (0, types_1.base64FromBytes)(message.s !== undefined ? message.s : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseLegacyTx);
        if (object.nonce !== undefined && object.nonce !== null) {
            message.nonce = object.nonce;
        }
        else {
            message.nonce = 0;
        }
        if (object.gas_price !== undefined && object.gas_price !== null) {
            message.gas_price = object.gas_price;
        }
        else {
            message.gas_price = "";
        }
        if (object.gas !== undefined && object.gas !== null) {
            message.gas = object.gas;
        }
        else {
            message.gas = 0;
        }
        if (object.to !== undefined && object.to !== null) {
            message.to = object.to;
        }
        else {
            message.to = "";
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value;
        }
        else {
            message.value = "";
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = object.data;
        }
        else {
            message.data = new Uint8Array();
        }
        if (object.v !== undefined && object.v !== null) {
            message.v = object.v;
        }
        else {
            message.v = new Uint8Array();
        }
        if (object.r !== undefined && object.r !== null) {
            message.r = object.r;
        }
        else {
            message.r = new Uint8Array();
        }
        if (object.s !== undefined && object.s !== null) {
            message.s = object.s;
        }
        else {
            message.s = new Uint8Array();
        }
        return message;
    },
};
const baseAccessListTx = {
    chain_id: "",
    nonce: 0,
    gas_price: "",
    gas: 0,
    to: "",
    value: "",
};
exports.AccessListTx = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.chain_id !== "") {
            writer.uint32(10).string(message.chain_id);
        }
        if (message.nonce !== 0) {
            writer.uint32(16).uint64(message.nonce);
        }
        if (message.gas_price !== "") {
            writer.uint32(26).string(message.gas_price);
        }
        if (message.gas !== 0) {
            writer.uint32(32).uint64(message.gas);
        }
        if (message.to !== "") {
            writer.uint32(42).string(message.to);
        }
        if (message.value !== "") {
            writer.uint32(50).string(message.value);
        }
        if (message.data.length !== 0) {
            writer.uint32(58).bytes(message.data);
        }
        for (const v of message.accesses) {
            evm_1.AccessTuple.encode(v, writer.uint32(66).fork()).ldelim();
        }
        if (message.v.length !== 0) {
            writer.uint32(74).bytes(message.v);
        }
        if (message.r.length !== 0) {
            writer.uint32(82).bytes(message.r);
        }
        if (message.s.length !== 0) {
            writer.uint32(90).bytes(message.s);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseAccessListTx);
        message.accesses = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chain_id = reader.string();
                    break;
                case 2:
                    message.nonce = (0, types_1.longToNumber)(reader.uint64());
                    break;
                case 3:
                    message.gas_price = reader.string();
                    break;
                case 4:
                    message.gas = (0, types_1.longToNumber)(reader.uint64());
                    break;
                case 5:
                    message.to = reader.string();
                    break;
                case 6:
                    message.value = reader.string();
                    break;
                case 7:
                    message.data = reader.bytes();
                    break;
                case 8:
                    message.accesses.push(evm_1.AccessTuple.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.v = reader.bytes();
                    break;
                case 10:
                    message.r = reader.bytes();
                    break;
                case 11:
                    message.s = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseAccessListTx);
        message.accesses = [];
        if (object.chain_id !== undefined && object.chain_id !== null) {
            message.chain_id = String(object.chain_id);
        }
        else {
            message.chain_id = "";
        }
        if (object.nonce !== undefined && object.nonce !== null) {
            message.nonce = Number(object.nonce);
        }
        else {
            message.nonce = 0;
        }
        if (object.gas_price !== undefined && object.gas_price !== null) {
            message.gas_price = String(object.gas_price);
        }
        else {
            message.gas_price = "";
        }
        if (object.gas !== undefined && object.gas !== null) {
            message.gas = Number(object.gas);
        }
        else {
            message.gas = 0;
        }
        if (object.to !== undefined && object.to !== null) {
            message.to = String(object.to);
        }
        else {
            message.to = "";
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = String(object.value);
        }
        else {
            message.value = "";
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = (0, types_1.bytesFromBase64)(object.data);
        }
        if (object.accesses !== undefined && object.accesses !== null) {
            for (const e of object.accesses) {
                message.accesses.push(evm_1.AccessTuple.fromJSON(e));
            }
        }
        if (object.v !== undefined && object.v !== null) {
            message.v = (0, types_1.bytesFromBase64)(object.v);
        }
        if (object.r !== undefined && object.r !== null) {
            message.r = (0, types_1.bytesFromBase64)(object.r);
        }
        if (object.s !== undefined && object.s !== null) {
            message.s = (0, types_1.bytesFromBase64)(object.s);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.chain_id !== undefined && (obj.chain_id = message.chain_id);
        message.nonce !== undefined && (obj.nonce = message.nonce);
        message.gas_price !== undefined && (obj.gas_price = message.gas_price);
        message.gas !== undefined && (obj.gas = message.gas);
        message.to !== undefined && (obj.to = message.to);
        message.value !== undefined && (obj.value = message.value);
        message.data !== undefined &&
            (obj.data = (0, types_1.base64FromBytes)(message.data !== undefined ? message.data : new Uint8Array()));
        if (message.accesses) {
            obj.accesses = message.accesses.map((e) => e ? evm_1.AccessTuple.toJSON(e) : undefined);
        }
        else {
            obj.accesses = [];
        }
        message.v !== undefined &&
            (obj.v = (0, types_1.base64FromBytes)(message.v !== undefined ? message.v : new Uint8Array()));
        message.r !== undefined &&
            (obj.r = (0, types_1.base64FromBytes)(message.r !== undefined ? message.r : new Uint8Array()));
        message.s !== undefined &&
            (obj.s = (0, types_1.base64FromBytes)(message.s !== undefined ? message.s : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseAccessListTx);
        message.accesses = [];
        if (object.chain_id !== undefined && object.chain_id !== null) {
            message.chain_id = object.chain_id;
        }
        else {
            message.chain_id = "";
        }
        if (object.nonce !== undefined && object.nonce !== null) {
            message.nonce = object.nonce;
        }
        else {
            message.nonce = 0;
        }
        if (object.gas_price !== undefined && object.gas_price !== null) {
            message.gas_price = object.gas_price;
        }
        else {
            message.gas_price = "";
        }
        if (object.gas !== undefined && object.gas !== null) {
            message.gas = object.gas;
        }
        else {
            message.gas = 0;
        }
        if (object.to !== undefined && object.to !== null) {
            message.to = object.to;
        }
        else {
            message.to = "";
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value;
        }
        else {
            message.value = "";
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = object.data;
        }
        else {
            message.data = new Uint8Array();
        }
        if (object.accesses !== undefined && object.accesses !== null) {
            for (const e of object.accesses) {
                message.accesses.push(evm_1.AccessTuple.fromPartial(e));
            }
        }
        if (object.v !== undefined && object.v !== null) {
            message.v = object.v;
        }
        else {
            message.v = new Uint8Array();
        }
        if (object.r !== undefined && object.r !== null) {
            message.r = object.r;
        }
        else {
            message.r = new Uint8Array();
        }
        if (object.s !== undefined && object.s !== null) {
            message.s = object.s;
        }
        else {
            message.s = new Uint8Array();
        }
        return message;
    },
};
const baseDynamicFeeTx = {
    chain_id: "",
    nonce: 0,
    gas_tip_cap: "",
    gas_fee_cap: "",
    gas: 0,
    to: "",
    value: "",
};
exports.DynamicFeeTx = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.chain_id !== "") {
            writer.uint32(10).string(message.chain_id);
        }
        if (message.nonce !== 0) {
            writer.uint32(16).uint64(message.nonce);
        }
        if (message.gas_tip_cap !== "") {
            writer.uint32(26).string(message.gas_tip_cap);
        }
        if (message.gas_fee_cap !== "") {
            writer.uint32(34).string(message.gas_fee_cap);
        }
        if (message.gas !== 0) {
            writer.uint32(40).uint64(message.gas);
        }
        if (message.to !== "") {
            writer.uint32(50).string(message.to);
        }
        if (message.value !== "") {
            writer.uint32(58).string(message.value);
        }
        if (message.data.length !== 0) {
            writer.uint32(66).bytes(message.data);
        }
        for (const v of message.accesses) {
            evm_1.AccessTuple.encode(v, writer.uint32(74).fork()).ldelim();
        }
        if (message.v.length !== 0) {
            writer.uint32(82).bytes(message.v);
        }
        if (message.r.length !== 0) {
            writer.uint32(90).bytes(message.r);
        }
        if (message.s.length !== 0) {
            writer.uint32(98).bytes(message.s);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDynamicFeeTx);
        message.accesses = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chain_id = reader.string();
                    break;
                case 2:
                    message.nonce = (0, types_1.longToNumber)(reader.uint64());
                    break;
                case 3:
                    message.gas_tip_cap = reader.string();
                    break;
                case 4:
                    message.gas_fee_cap = reader.string();
                    break;
                case 5:
                    message.gas = (0, types_1.longToNumber)(reader.uint64());
                    break;
                case 6:
                    message.to = reader.string();
                    break;
                case 7:
                    message.value = reader.string();
                    break;
                case 8:
                    message.data = reader.bytes();
                    break;
                case 9:
                    message.accesses.push(evm_1.AccessTuple.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.v = reader.bytes();
                    break;
                case 11:
                    message.r = reader.bytes();
                    break;
                case 12:
                    message.s = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDynamicFeeTx);
        message.accesses = [];
        if (object.chain_id !== undefined && object.chain_id !== null) {
            message.chain_id = String(object.chain_id);
        }
        else {
            message.chain_id = "";
        }
        if (object.nonce !== undefined && object.nonce !== null) {
            message.nonce = Number(object.nonce);
        }
        else {
            message.nonce = 0;
        }
        if (object.gas_tip_cap !== undefined && object.gas_tip_cap !== null) {
            message.gas_tip_cap = String(object.gas_tip_cap);
        }
        else {
            message.gas_tip_cap = "";
        }
        if (object.gas_fee_cap !== undefined && object.gas_fee_cap !== null) {
            message.gas_fee_cap = String(object.gas_fee_cap);
        }
        else {
            message.gas_fee_cap = "";
        }
        if (object.gas !== undefined && object.gas !== null) {
            message.gas = Number(object.gas);
        }
        else {
            message.gas = 0;
        }
        if (object.to !== undefined && object.to !== null) {
            message.to = String(object.to);
        }
        else {
            message.to = "";
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = String(object.value);
        }
        else {
            message.value = "";
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = (0, types_1.bytesFromBase64)(object.data);
        }
        if (object.accesses !== undefined && object.accesses !== null) {
            for (const e of object.accesses) {
                message.accesses.push(evm_1.AccessTuple.fromJSON(e));
            }
        }
        if (object.v !== undefined && object.v !== null) {
            message.v = (0, types_1.bytesFromBase64)(object.v);
        }
        if (object.r !== undefined && object.r !== null) {
            message.r = (0, types_1.bytesFromBase64)(object.r);
        }
        if (object.s !== undefined && object.s !== null) {
            message.s = (0, types_1.bytesFromBase64)(object.s);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.chain_id !== undefined && (obj.chain_id = message.chain_id);
        message.nonce !== undefined && (obj.nonce = message.nonce);
        message.gas_tip_cap !== undefined &&
            (obj.gas_tip_cap = message.gas_tip_cap);
        message.gas_fee_cap !== undefined &&
            (obj.gas_fee_cap = message.gas_fee_cap);
        message.gas !== undefined && (obj.gas = message.gas);
        message.to !== undefined && (obj.to = message.to);
        message.value !== undefined && (obj.value = message.value);
        message.data !== undefined &&
            (obj.data = (0, types_1.base64FromBytes)(message.data !== undefined ? message.data : new Uint8Array()));
        if (message.accesses) {
            obj.accesses = message.accesses.map((e) => e ? evm_1.AccessTuple.toJSON(e) : undefined);
        }
        else {
            obj.accesses = [];
        }
        message.v !== undefined &&
            (obj.v = (0, types_1.base64FromBytes)(message.v !== undefined ? message.v : new Uint8Array()));
        message.r !== undefined &&
            (obj.r = (0, types_1.base64FromBytes)(message.r !== undefined ? message.r : new Uint8Array()));
        message.s !== undefined &&
            (obj.s = (0, types_1.base64FromBytes)(message.s !== undefined ? message.s : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseDynamicFeeTx);
        message.accesses = [];
        if (object.chain_id !== undefined && object.chain_id !== null) {
            message.chain_id = object.chain_id;
        }
        else {
            message.chain_id = "";
        }
        if (object.nonce !== undefined && object.nonce !== null) {
            message.nonce = object.nonce;
        }
        else {
            message.nonce = 0;
        }
        if (object.gas_tip_cap !== undefined && object.gas_tip_cap !== null) {
            message.gas_tip_cap = object.gas_tip_cap;
        }
        else {
            message.gas_tip_cap = "";
        }
        if (object.gas_fee_cap !== undefined && object.gas_fee_cap !== null) {
            message.gas_fee_cap = object.gas_fee_cap;
        }
        else {
            message.gas_fee_cap = "";
        }
        if (object.gas !== undefined && object.gas !== null) {
            message.gas = object.gas;
        }
        else {
            message.gas = 0;
        }
        if (object.to !== undefined && object.to !== null) {
            message.to = object.to;
        }
        else {
            message.to = "";
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value;
        }
        else {
            message.value = "";
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = object.data;
        }
        else {
            message.data = new Uint8Array();
        }
        if (object.accesses !== undefined && object.accesses !== null) {
            for (const e of object.accesses) {
                message.accesses.push(evm_1.AccessTuple.fromPartial(e));
            }
        }
        if (object.v !== undefined && object.v !== null) {
            message.v = object.v;
        }
        else {
            message.v = new Uint8Array();
        }
        if (object.r !== undefined && object.r !== null) {
            message.r = object.r;
        }
        else {
            message.r = new Uint8Array();
        }
        if (object.s !== undefined && object.s !== null) {
            message.s = object.s;
        }
        else {
            message.s = new Uint8Array();
        }
        return message;
    },
};
const baseExtensionOptionsEthereumTx = {};
exports.ExtensionOptionsEthereumTx = {
    encode(_, writer = minimal_1.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseExtensionOptionsEthereumTx);
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
        const message = Object.assign({}, baseExtensionOptionsEthereumTx);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseExtensionOptionsEthereumTx);
        return message;
    },
};
const baseMsgEthereumTxResponse = {
    hash: "",
    vm_error: "",
    gas_used: 0,
};
exports.MsgEthereumTxResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.hash !== "") {
            writer.uint32(10).string(message.hash);
        }
        for (const v of message.logs) {
            evm_1.Log.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.ret.length !== 0) {
            writer.uint32(26).bytes(message.ret);
        }
        if (message.vm_error !== "") {
            writer.uint32(34).string(message.vm_error);
        }
        if (message.gas_used !== 0) {
            writer.uint32(40).uint64(message.gas_used);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgEthereumTxResponse);
        message.logs = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hash = reader.string();
                    break;
                case 2:
                    message.logs.push(evm_1.Log.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.ret = reader.bytes();
                    break;
                case 4:
                    message.vm_error = reader.string();
                    break;
                case 5:
                    message.gas_used = (0, types_1.longToNumber)(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMsgEthereumTxResponse);
        message.logs = [];
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = String(object.hash);
        }
        else {
            message.hash = "";
        }
        if (object.logs !== undefined && object.logs !== null) {
            for (const e of object.logs) {
                message.logs.push(evm_1.Log.fromJSON(e));
            }
        }
        if (object.ret !== undefined && object.ret !== null) {
            message.ret = (0, types_1.bytesFromBase64)(object.ret);
        }
        if (object.vm_error !== undefined && object.vm_error !== null) {
            message.vm_error = String(object.vm_error);
        }
        else {
            message.vm_error = "";
        }
        if (object.gas_used !== undefined && object.gas_used !== null) {
            message.gas_used = Number(object.gas_used);
        }
        else {
            message.gas_used = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.hash !== undefined && (obj.hash = message.hash);
        if (message.logs) {
            obj.logs = message.logs.map((e) => (e ? evm_1.Log.toJSON(e) : undefined));
        }
        else {
            obj.logs = [];
        }
        message.ret !== undefined &&
            (obj.ret = (0, types_1.base64FromBytes)(message.ret !== undefined ? message.ret : new Uint8Array()));
        message.vm_error !== undefined && (obj.vm_error = message.vm_error);
        message.gas_used !== undefined && (obj.gas_used = message.gas_used);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMsgEthereumTxResponse);
        message.logs = [];
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = object.hash;
        }
        else {
            message.hash = "";
        }
        if (object.logs !== undefined && object.logs !== null) {
            for (const e of object.logs) {
                message.logs.push(evm_1.Log.fromPartial(e));
            }
        }
        if (object.ret !== undefined && object.ret !== null) {
            message.ret = object.ret;
        }
        else {
            message.ret = new Uint8Array();
        }
        if (object.vm_error !== undefined && object.vm_error !== null) {
            message.vm_error = object.vm_error;
        }
        else {
            message.vm_error = "";
        }
        if (object.gas_used !== undefined && object.gas_used !== null) {
            message.gas_used = object.gas_used;
        }
        else {
            message.gas_used = 0;
        }
        return message;
    },
};
class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    EthereumTx(request) {
        const data = exports.MsgEthereumTx.encode(request).finish();
        const promise = this.rpc.request("ethermint.evm.v1.Msg", "EthereumTx", data);
        return promise.then((data) => exports.MsgEthereumTxResponse.decode(new minimal_1.Reader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
