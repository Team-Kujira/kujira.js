"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendAuthorization = exports.protobufPackage = void 0;
/* eslint-disable */
const minimal_1 = require("protobufjs/minimal");
const coin_1 = require("../../../../types/cosmos/base/coin");
exports.protobufPackage = "cosmos.bank.v1beta1";
const baseSendAuthorization = {};
exports.SendAuthorization = {
    encode(message, writer = minimal_1.Writer.create()) {
        for (const v of message.spend_limit) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseSendAuthorization);
        message.spend_limit = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.spend_limit.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseSendAuthorization);
        message.spend_limit = [];
        if (object.spend_limit !== undefined && object.spend_limit !== null) {
            for (const e of object.spend_limit) {
                message.spend_limit.push(coin_1.Coin.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.spend_limit) {
            obj.spend_limit = message.spend_limit.map((e) => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.spend_limit = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseSendAuthorization);
        message.spend_limit = [];
        if (object.spend_limit !== undefined && object.spend_limit !== null) {
            for (const e of object.spend_limit) {
                message.spend_limit.push(coin_1.Coin.fromPartial(e));
            }
        }
        return message;
    },
};
