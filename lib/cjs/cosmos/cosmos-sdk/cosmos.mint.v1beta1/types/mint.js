"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Params = exports.Minter = exports.protobufPackage = void 0;
const minimal_1 = require("protobufjs/minimal");
const types_1 = require("../../../../types");
exports.protobufPackage = "cosmos.mint.v1beta1";
const baseMinter = { inflation: "", annual_provisions: "" };
exports.Minter = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.inflation !== "") {
            writer.uint32(10).string(message.inflation);
        }
        if (message.annual_provisions !== "") {
            writer.uint32(18).string(message.annual_provisions);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMinter);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.inflation = reader.string();
                    break;
                case 2:
                    message.annual_provisions = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMinter);
        if (object.inflation !== undefined && object.inflation !== null) {
            message.inflation = String(object.inflation);
        }
        else {
            message.inflation = "";
        }
        if (object.annual_provisions !== undefined &&
            object.annual_provisions !== null) {
            message.annual_provisions = String(object.annual_provisions);
        }
        else {
            message.annual_provisions = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.inflation !== undefined && (obj.inflation = message.inflation);
        message.annual_provisions !== undefined &&
            (obj.annual_provisions = message.annual_provisions);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMinter);
        if (object.inflation !== undefined && object.inflation !== null) {
            message.inflation = object.inflation;
        }
        else {
            message.inflation = "";
        }
        if (object.annual_provisions !== undefined &&
            object.annual_provisions !== null) {
            message.annual_provisions = object.annual_provisions;
        }
        else {
            message.annual_provisions = "";
        }
        return message;
    },
};
const baseParams = {
    mint_denom: "",
    inflation_rate_change: "",
    inflation_max: "",
    inflation_min: "",
    goal_bonded: "",
    blocks_per_year: 0,
};
exports.Params = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.mint_denom !== "") {
            writer.uint32(10).string(message.mint_denom);
        }
        if (message.inflation_rate_change !== "") {
            writer.uint32(18).string(message.inflation_rate_change);
        }
        if (message.inflation_max !== "") {
            writer.uint32(26).string(message.inflation_max);
        }
        if (message.inflation_min !== "") {
            writer.uint32(34).string(message.inflation_min);
        }
        if (message.goal_bonded !== "") {
            writer.uint32(42).string(message.goal_bonded);
        }
        if (message.blocks_per_year !== 0) {
            writer.uint32(48).uint64(message.blocks_per_year);
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
                    message.mint_denom = reader.string();
                    break;
                case 2:
                    message.inflation_rate_change = reader.string();
                    break;
                case 3:
                    message.inflation_max = reader.string();
                    break;
                case 4:
                    message.inflation_min = reader.string();
                    break;
                case 5:
                    message.goal_bonded = reader.string();
                    break;
                case 6:
                    message.blocks_per_year = (0, types_1.longToNumber)(reader.uint64());
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
        if (object.mint_denom !== undefined && object.mint_denom !== null) {
            message.mint_denom = String(object.mint_denom);
        }
        else {
            message.mint_denom = "";
        }
        if (object.inflation_rate_change !== undefined &&
            object.inflation_rate_change !== null) {
            message.inflation_rate_change = String(object.inflation_rate_change);
        }
        else {
            message.inflation_rate_change = "";
        }
        if (object.inflation_max !== undefined && object.inflation_max !== null) {
            message.inflation_max = String(object.inflation_max);
        }
        else {
            message.inflation_max = "";
        }
        if (object.inflation_min !== undefined && object.inflation_min !== null) {
            message.inflation_min = String(object.inflation_min);
        }
        else {
            message.inflation_min = "";
        }
        if (object.goal_bonded !== undefined && object.goal_bonded !== null) {
            message.goal_bonded = String(object.goal_bonded);
        }
        else {
            message.goal_bonded = "";
        }
        if (object.blocks_per_year !== undefined &&
            object.blocks_per_year !== null) {
            message.blocks_per_year = Number(object.blocks_per_year);
        }
        else {
            message.blocks_per_year = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.mint_denom !== undefined && (obj.mint_denom = message.mint_denom);
        message.inflation_rate_change !== undefined &&
            (obj.inflation_rate_change = message.inflation_rate_change);
        message.inflation_max !== undefined &&
            (obj.inflation_max = message.inflation_max);
        message.inflation_min !== undefined &&
            (obj.inflation_min = message.inflation_min);
        message.goal_bonded !== undefined &&
            (obj.goal_bonded = message.goal_bonded);
        message.blocks_per_year !== undefined &&
            (obj.blocks_per_year = message.blocks_per_year);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseParams);
        if (object.mint_denom !== undefined && object.mint_denom !== null) {
            message.mint_denom = object.mint_denom;
        }
        else {
            message.mint_denom = "";
        }
        if (object.inflation_rate_change !== undefined &&
            object.inflation_rate_change !== null) {
            message.inflation_rate_change = object.inflation_rate_change;
        }
        else {
            message.inflation_rate_change = "";
        }
        if (object.inflation_max !== undefined && object.inflation_max !== null) {
            message.inflation_max = object.inflation_max;
        }
        else {
            message.inflation_max = "";
        }
        if (object.inflation_min !== undefined && object.inflation_min !== null) {
            message.inflation_min = object.inflation_min;
        }
        else {
            message.inflation_min = "";
        }
        if (object.goal_bonded !== undefined && object.goal_bonded !== null) {
            message.goal_bonded = object.goal_bonded;
        }
        else {
            message.goal_bonded = "";
        }
        if (object.blocks_per_year !== undefined &&
            object.blocks_per_year !== null) {
            message.blocks_per_year = object.blocks_per_year;
        }
        else {
            message.blocks_per_year = 0;
        }
        return message;
    },
};
