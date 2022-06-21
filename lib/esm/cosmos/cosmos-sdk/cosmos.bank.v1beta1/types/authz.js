/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";
import { Coin } from "../../../../types/cosmos/base/coin";
export const protobufPackage = "cosmos.bank.v1beta1";
const baseSendAuthorization = {};
export const SendAuthorization = {
    encode(message, writer = Writer.create()) {
        for (const v of message.spend_limit) {
            Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseSendAuthorization);
        message.spend_limit = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.spend_limit.push(Coin.decode(reader, reader.uint32()));
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
                message.spend_limit.push(Coin.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.spend_limit) {
            obj.spend_limit = message.spend_limit.map((e) => e ? Coin.toJSON(e) : undefined);
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
                message.spend_limit.push(Coin.fromPartial(e));
            }
        }
        return message;
    },
};
