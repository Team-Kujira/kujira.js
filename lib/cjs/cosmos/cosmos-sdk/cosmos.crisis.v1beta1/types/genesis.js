"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = exports.protobufPackage = void 0;
/* eslint-disable */
const minimal_1 = require("protobufjs/minimal");
const coin_1 = require("../../../../types/cosmos/base/coin");
exports.protobufPackage = "cosmos.crisis.v1beta1";
const baseGenesisState = {};
exports.GenesisState = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.constant_fee !== undefined) {
            coin_1.Coin.encode(message.constant_fee, writer.uint32(26).fork()).ldelim();
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
                case 3:
                    message.constant_fee = coin_1.Coin.decode(reader, reader.uint32());
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
        if (object.constant_fee !== undefined && object.constant_fee !== null) {
            message.constant_fee = coin_1.Coin.fromJSON(object.constant_fee);
        }
        else {
            message.constant_fee = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.constant_fee !== undefined &&
            (obj.constant_fee = message.constant_fee
                ? coin_1.Coin.toJSON(message.constant_fee)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseGenesisState);
        if (object.constant_fee !== undefined && object.constant_fee !== null) {
            message.constant_fee = coin_1.Coin.fromPartial(object.constant_fee);
        }
        else {
            message.constant_fee = undefined;
        }
        return message;
    },
};
