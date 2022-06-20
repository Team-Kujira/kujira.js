/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
export const protobufPackage = "intertx";
const baseQueryInterchainAccountFromAddressRequest = {
    owner: "",
    connection_id: "",
};
export const QueryInterchainAccountFromAddressRequest = {
    encode(message, writer = Writer.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.connection_id !== "") {
            writer.uint32(18).string(message.connection_id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryInterchainAccountFromAddressRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.connection_id = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryInterchainAccountFromAddressRequest);
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = String(object.owner);
        }
        else {
            message.owner = "";
        }
        if (object.connection_id !== undefined && object.connection_id !== null) {
            message.connection_id = String(object.connection_id);
        }
        else {
            message.connection_id = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.connection_id !== undefined &&
            (obj.connection_id = message.connection_id);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryInterchainAccountFromAddressRequest);
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        else {
            message.owner = "";
        }
        if (object.connection_id !== undefined && object.connection_id !== null) {
            message.connection_id = object.connection_id;
        }
        else {
            message.connection_id = "";
        }
        return message;
    },
};
const baseQueryInterchainAccountFromAddressResponse = {
    interchain_account_address: "",
};
export const QueryInterchainAccountFromAddressResponse = {
    encode(message, writer = Writer.create()) {
        if (message.interchain_account_address !== "") {
            writer.uint32(10).string(message.interchain_account_address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryInterchainAccountFromAddressResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.interchain_account_address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryInterchainAccountFromAddressResponse);
        if (object.interchain_account_address !== undefined &&
            object.interchain_account_address !== null) {
            message.interchain_account_address = String(object.interchain_account_address);
        }
        else {
            message.interchain_account_address = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.interchain_account_address !== undefined &&
            (obj.interchain_account_address = message.interchain_account_address);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryInterchainAccountFromAddressResponse);
        if (object.interchain_account_address !== undefined &&
            object.interchain_account_address !== null) {
            message.interchain_account_address = object.interchain_account_address;
        }
        else {
            message.interchain_account_address = "";
        }
        return message;
    },
};
export class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    InterchainAccountFromAddress(request) {
        const data = QueryInterchainAccountFromAddressRequest.encode(request).finish();
        const promise = this.rpc.request("intertx.Query", "InterchainAccountFromAddress", data);
        return promise.then((data) => QueryInterchainAccountFromAddressResponse.decode(new Reader(data)));
    }
}
