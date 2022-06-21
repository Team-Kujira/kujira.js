/* eslint-disable */
import { Params, Metadata } from "./bank";
import { Writer, Reader } from "protobufjs/minimal";
import { Coin } from "../../../../types/cosmos/base/coin";
export const protobufPackage = "cosmos.bank.v1beta1";
const baseGenesisState = {};
export const GenesisState = {
    encode(message, writer = Writer.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.balances) {
            Balance.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.supply) {
            Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.denom_metadata) {
            Metadata.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGenesisState);
        message.balances = [];
        message.supply = [];
        message.denom_metadata = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.balances.push(Balance.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.supply.push(Coin.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.denom_metadata.push(Metadata.decode(reader, reader.uint32()));
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
        message.balances = [];
        message.supply = [];
        message.denom_metadata = [];
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromJSON(object.params);
        }
        else {
            message.params = undefined;
        }
        if (object.balances !== undefined && object.balances !== null) {
            for (const e of object.balances) {
                message.balances.push(Balance.fromJSON(e));
            }
        }
        if (object.supply !== undefined && object.supply !== null) {
            for (const e of object.supply) {
                message.supply.push(Coin.fromJSON(e));
            }
        }
        if (object.denom_metadata !== undefined && object.denom_metadata !== null) {
            for (const e of object.denom_metadata) {
                message.denom_metadata.push(Metadata.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined &&
            (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        if (message.balances) {
            obj.balances = message.balances.map((e) => e ? Balance.toJSON(e) : undefined);
        }
        else {
            obj.balances = [];
        }
        if (message.supply) {
            obj.supply = message.supply.map((e) => (e ? Coin.toJSON(e) : undefined));
        }
        else {
            obj.supply = [];
        }
        if (message.denom_metadata) {
            obj.denom_metadata = message.denom_metadata.map((e) => e ? Metadata.toJSON(e) : undefined);
        }
        else {
            obj.denom_metadata = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseGenesisState);
        message.balances = [];
        message.supply = [];
        message.denom_metadata = [];
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromPartial(object.params);
        }
        else {
            message.params = undefined;
        }
        if (object.balances !== undefined && object.balances !== null) {
            for (const e of object.balances) {
                message.balances.push(Balance.fromPartial(e));
            }
        }
        if (object.supply !== undefined && object.supply !== null) {
            for (const e of object.supply) {
                message.supply.push(Coin.fromPartial(e));
            }
        }
        if (object.denom_metadata !== undefined && object.denom_metadata !== null) {
            for (const e of object.denom_metadata) {
                message.denom_metadata.push(Metadata.fromPartial(e));
            }
        }
        return message;
    },
};
const baseBalance = { address: "" };
export const Balance = {
    encode(message, writer = Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        for (const v of message.coins) {
            Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseBalance);
        message.coins = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.coins.push(Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseBalance);
        message.coins = [];
        if (object.address !== undefined && object.address !== null) {
            message.address = String(object.address);
        }
        else {
            message.address = "";
        }
        if (object.coins !== undefined && object.coins !== null) {
            for (const e of object.coins) {
                message.coins.push(Coin.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        if (message.coins) {
            obj.coins = message.coins.map((e) => (e ? Coin.toJSON(e) : undefined));
        }
        else {
            obj.coins = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseBalance);
        message.coins = [];
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        else {
            message.address = "";
        }
        if (object.coins !== undefined && object.coins !== null) {
            for (const e of object.coins) {
                message.coins.push(Coin.fromPartial(e));
            }
        }
        return message;
    },
};
