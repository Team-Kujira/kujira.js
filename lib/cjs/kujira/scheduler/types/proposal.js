"use strict";
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteHookProposal = exports.UpdateHookProposal = exports.CreateHookProposal = exports.protobufPackage = void 0;
const binary_1 = require("cosmjs-types/binary");
const coin_1 = require("cosmjs-types/cosmos/base/v1beta1/coin");
const hook_1 = require("./hook");
exports.protobufPackage = "kujira.scheduler";
const baseCreateHookProposal = {
    title: "",
    description: "",
    executor: "",
    contract: "",
    frequency: 0,
};
exports.CreateHookProposal = {
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.executor !== "") {
            writer.uint32(26).string(message.executor);
        }
        if (message.contract !== "") {
            writer.uint32(34).string(message.contract);
        }
        if (message.msg.length !== 0) {
            writer.uint32(42).bytes(message.msg);
        }
        if (message.frequency !== 0) {
            writer.uint32(48).int64(message.frequency);
        }
        for (const v of message.funds) {
            coin_1.Coin.encode(v, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new binary_1.BinaryReader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateHookProposal);
        message.funds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.executor = reader.string();
                    break;
                case 4:
                    message.contract = reader.string();
                    break;
                case 5:
                    message.msg = reader.bytes();
                    break;
                case 6:
                    message.frequency = reader.int32();
                    break;
                case 7:
                    message.funds.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseCreateHookProposal);
        message.funds = [];
        if (object.title !== undefined && object.title !== null) {
            message.title = String(object.title);
        }
        else {
            message.title = "";
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = String(object.description);
        }
        else {
            message.description = "";
        }
        if (object.executor !== undefined && object.executor !== null) {
            message.executor = String(object.executor);
        }
        else {
            message.executor = "";
        }
        if (object.contract !== undefined && object.contract !== null) {
            message.contract = String(object.contract);
        }
        else {
            message.contract = "";
        }
        if (object.msg !== undefined && object.msg !== null) {
            message.msg = (0, hook_1.bytesFromBase64)(object.msg);
        }
        if (object.frequency !== undefined && object.frequency !== null) {
            message.frequency = Number(object.frequency);
        }
        else {
            message.frequency = 0;
        }
        if (object.funds !== undefined && object.funds !== null) {
            for (const e of object.funds) {
                message.funds.push(coin_1.Coin.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined &&
            (obj.description = message.description);
        message.executor !== undefined && (obj.executor = message.executor);
        message.contract !== undefined && (obj.contract = message.contract);
        message.msg !== undefined &&
            (obj.msg = (0, hook_1.base64FromBytes)(message.msg !== undefined ? message.msg : new Uint8Array()));
        message.frequency !== undefined && (obj.frequency = message.frequency);
        if (message.funds) {
            obj.funds = message.funds.map((e) => (e ? coin_1.Coin.toJSON(e) : undefined));
        }
        else {
            obj.funds = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseCreateHookProposal);
        message.funds = [];
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        else {
            message.title = "";
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        else {
            message.description = "";
        }
        if (object.executor !== undefined && object.executor !== null) {
            message.executor = object.executor;
        }
        else {
            message.executor = "";
        }
        if (object.contract !== undefined && object.contract !== null) {
            message.contract = object.contract;
        }
        else {
            message.contract = "";
        }
        if (object.msg !== undefined && object.msg !== null) {
            message.msg = object.msg;
        }
        else {
            message.msg = new Uint8Array();
        }
        if (object.frequency !== undefined && object.frequency !== null) {
            message.frequency = object.frequency;
        }
        else {
            message.frequency = 0;
        }
        if (object.funds !== undefined && object.funds !== null) {
            for (const e of object.funds) {
                message.funds.push(coin_1.Coin.fromPartial(e));
            }
        }
        return message;
    },
};
const baseUpdateHookProposal = {
    title: "",
    description: "",
    id: 0,
    executor: "",
    contract: "",
    frequency: 0,
};
exports.UpdateHookProposal = {
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.id !== 0) {
            writer.uint32(24).uint64(message.id);
        }
        if (message.executor !== "") {
            writer.uint32(34).string(message.executor);
        }
        if (message.contract !== "") {
            writer.uint32(42).string(message.contract);
        }
        if (message.msg.length !== 0) {
            writer.uint32(50).bytes(message.msg);
        }
        if (message.frequency !== 0) {
            writer.uint32(56).int64(message.frequency);
        }
        for (const v of message.funds) {
            coin_1.Coin.encode(v, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new binary_1.BinaryReader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateHookProposal);
        message.funds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.id = reader.uint32();
                    break;
                case 4:
                    message.executor = reader.string();
                    break;
                case 5:
                    message.contract = reader.string();
                    break;
                case 6:
                    message.msg = reader.bytes();
                    break;
                case 7:
                    message.frequency = reader.int32();
                    break;
                case 8:
                    message.funds.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseUpdateHookProposal);
        message.funds = [];
        if (object.title !== undefined && object.title !== null) {
            message.title = String(object.title);
        }
        else {
            message.title = "";
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = String(object.description);
        }
        else {
            message.description = "";
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        if (object.executor !== undefined && object.executor !== null) {
            message.executor = String(object.executor);
        }
        else {
            message.executor = "";
        }
        if (object.contract !== undefined && object.contract !== null) {
            message.contract = String(object.contract);
        }
        else {
            message.contract = "";
        }
        if (object.msg !== undefined && object.msg !== null) {
            message.msg = (0, hook_1.bytesFromBase64)(object.msg);
        }
        if (object.frequency !== undefined && object.frequency !== null) {
            message.frequency = Number(object.frequency);
        }
        else {
            message.frequency = 0;
        }
        if (object.funds !== undefined && object.funds !== null) {
            for (const e of object.funds) {
                message.funds.push(coin_1.Coin.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined &&
            (obj.description = message.description);
        message.id !== undefined && (obj.id = message.id);
        message.executor !== undefined && (obj.executor = message.executor);
        message.contract !== undefined && (obj.contract = message.contract);
        message.msg !== undefined &&
            (obj.msg = (0, hook_1.base64FromBytes)(message.msg !== undefined ? message.msg : new Uint8Array()));
        message.frequency !== undefined && (obj.frequency = message.frequency);
        if (message.funds) {
            obj.funds = message.funds.map((e) => (e ? coin_1.Coin.toJSON(e) : undefined));
        }
        else {
            obj.funds = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseUpdateHookProposal);
        message.funds = [];
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        else {
            message.title = "";
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        else {
            message.description = "";
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        if (object.executor !== undefined && object.executor !== null) {
            message.executor = object.executor;
        }
        else {
            message.executor = "";
        }
        if (object.contract !== undefined && object.contract !== null) {
            message.contract = object.contract;
        }
        else {
            message.contract = "";
        }
        if (object.msg !== undefined && object.msg !== null) {
            message.msg = object.msg;
        }
        else {
            message.msg = new Uint8Array();
        }
        if (object.frequency !== undefined && object.frequency !== null) {
            message.frequency = object.frequency;
        }
        else {
            message.frequency = 0;
        }
        if (object.funds !== undefined && object.funds !== null) {
            for (const e of object.funds) {
                message.funds.push(coin_1.Coin.fromPartial(e));
            }
        }
        return message;
    },
};
const baseDeleteHookProposal = {
    title: "",
    description: "",
    id: 0,
};
exports.DeleteHookProposal = {
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.id !== 0) {
            writer.uint32(24).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new binary_1.BinaryReader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteHookProposal);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.id = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteHookProposal);
        if (object.title !== undefined && object.title !== null) {
            message.title = String(object.title);
        }
        else {
            message.title = "";
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = String(object.description);
        }
        else {
            message.description = "";
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined &&
            (obj.description = message.description);
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseDeleteHookProposal);
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        else {
            message.title = "";
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        else {
            message.description = "";
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    },
};
