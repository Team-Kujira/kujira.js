"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = exports.protobufPackage = void 0;
/* eslint-disable */
const minimal_1 = require("protobufjs/minimal");
const types_1 = require("../../../../types");
const feemarket_1 = require("./feemarket");
exports.protobufPackage = "ethermint.feemarket.v1";
const baseGenesisState = { block_gas: 0 };
exports.GenesisState = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.params !== undefined) {
            feemarket_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        if (message.block_gas !== 0) {
            writer.uint32(24).uint64(message.block_gas);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGenesisState);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = feemarket_1.Params.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.block_gas = (0, types_1.longToNumber)(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGenesisState);
        if (object.params !== undefined && object.params !== null) {
            message.params = feemarket_1.Params.fromJSON(object.params);
        }
        else {
            message.params = undefined;
        }
        if (object.block_gas !== undefined && object.block_gas !== null) {
            message.block_gas = Number(object.block_gas);
        }
        else {
            message.block_gas = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined &&
            (obj.params = message.params ? feemarket_1.Params.toJSON(message.params) : undefined);
        message.block_gas !== undefined && (obj.block_gas = message.block_gas);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseGenesisState);
        if (object.params !== undefined && object.params !== null) {
            message.params = feemarket_1.Params.fromPartial(object.params);
        }
        else {
            message.params = undefined;
        }
        if (object.block_gas !== undefined && object.block_gas !== null) {
            message.block_gas = object.block_gas;
        }
        else {
            message.block_gas = 0;
        }
        return message;
    },
};
