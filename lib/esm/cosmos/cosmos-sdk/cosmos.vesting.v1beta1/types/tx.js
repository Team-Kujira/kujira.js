/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { longToNumber } from "../../../../types";
import { Coin } from "../../../../types/cosmos/base/coin";
export const protobufPackage = "cosmos.vesting.v1beta1";
const baseMsgCreateVestingAccount = {
    from_address: "",
    to_address: "",
    end_time: 0,
    delayed: false,
};
export const MsgCreateVestingAccount = {
    encode(message, writer = Writer.create()) {
        if (message.from_address !== "") {
            writer.uint32(10).string(message.from_address);
        }
        if (message.to_address !== "") {
            writer.uint32(18).string(message.to_address);
        }
        for (const v of message.amount) {
            Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.end_time !== 0) {
            writer.uint32(32).int64(message.end_time);
        }
        if (message.delayed === true) {
            writer.uint32(40).bool(message.delayed);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgCreateVestingAccount);
        message.amount = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.from_address = reader.string();
                    break;
                case 2:
                    message.to_address = reader.string();
                    break;
                case 3:
                    message.amount.push(Coin.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.end_time = longToNumber(reader.int64());
                    break;
                case 5:
                    message.delayed = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMsgCreateVestingAccount);
        message.amount = [];
        if (object.from_address !== undefined && object.from_address !== null) {
            message.from_address = String(object.from_address);
        }
        else {
            message.from_address = "";
        }
        if (object.to_address !== undefined && object.to_address !== null) {
            message.to_address = String(object.to_address);
        }
        else {
            message.to_address = "";
        }
        if (object.amount !== undefined && object.amount !== null) {
            for (const e of object.amount) {
                message.amount.push(Coin.fromJSON(e));
            }
        }
        if (object.end_time !== undefined && object.end_time !== null) {
            message.end_time = Number(object.end_time);
        }
        else {
            message.end_time = 0;
        }
        if (object.delayed !== undefined && object.delayed !== null) {
            message.delayed = Boolean(object.delayed);
        }
        else {
            message.delayed = false;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.from_address !== undefined &&
            (obj.from_address = message.from_address);
        message.to_address !== undefined && (obj.to_address = message.to_address);
        if (message.amount) {
            obj.amount = message.amount.map((e) => (e ? Coin.toJSON(e) : undefined));
        }
        else {
            obj.amount = [];
        }
        message.end_time !== undefined && (obj.end_time = message.end_time);
        message.delayed !== undefined && (obj.delayed = message.delayed);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMsgCreateVestingAccount);
        message.amount = [];
        if (object.from_address !== undefined && object.from_address !== null) {
            message.from_address = object.from_address;
        }
        else {
            message.from_address = "";
        }
        if (object.to_address !== undefined && object.to_address !== null) {
            message.to_address = object.to_address;
        }
        else {
            message.to_address = "";
        }
        if (object.amount !== undefined && object.amount !== null) {
            for (const e of object.amount) {
                message.amount.push(Coin.fromPartial(e));
            }
        }
        if (object.end_time !== undefined && object.end_time !== null) {
            message.end_time = object.end_time;
        }
        else {
            message.end_time = 0;
        }
        if (object.delayed !== undefined && object.delayed !== null) {
            message.delayed = object.delayed;
        }
        else {
            message.delayed = false;
        }
        return message;
    },
};
const baseMsgCreateVestingAccountResponse = {};
export const MsgCreateVestingAccountResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgCreateVestingAccountResponse);
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
        const message = Object.assign({}, baseMsgCreateVestingAccountResponse);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseMsgCreateVestingAccountResponse);
        return message;
    },
};
export class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    CreateVestingAccount(request) {
        const data = MsgCreateVestingAccount.encode(request).finish();
        const promise = this.rpc.request("cosmos.vesting.v1beta1.Msg", "CreateVestingAccount", data);
        return promise.then((data) => MsgCreateVestingAccountResponse.decode(new Reader(data)));
    }
}
