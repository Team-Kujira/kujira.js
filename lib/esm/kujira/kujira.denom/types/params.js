import { Coin } from "cosmjs-types/cosmos/base/v1beta1/coin";
import { Reader, Writer } from "protobufjs/minimal";
export const protobufPackage = "kujira.denom";
const baseParams = {};
export const Params = {
    encode(message, writer = Writer.create()) {
        for (const v of message.creation_fee) {
            Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseParams);
        message.creation_fee = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creation_fee.push(Coin.decode(reader, reader.uint32()));
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
        message.creation_fee = [];
        if (object.creation_fee !== undefined && object.creation_fee !== null) {
            for (const e of object.creation_fee) {
                message.creation_fee.push(Coin.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.creation_fee) {
            obj.creation_fee = message.creation_fee.map((e) => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.creation_fee = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseParams);
        message.creation_fee = [];
        if (object.creation_fee !== undefined && object.creation_fee !== null) {
            for (const e of object.creation_fee) {
                message.creation_fee.push(Coin.fromPartial(e));
            }
        }
        return message;
    },
};
