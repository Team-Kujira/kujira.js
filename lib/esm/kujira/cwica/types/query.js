import { isSet } from "cosmjs-types/helpers";
import { Reader, Writer } from "protobufjs/minimal";
/* eslint-disable */
export const protobufPackage = "kujira.cwica";
function createBaseQueryInterchainAccountRequest() {
    return {
        owner: "",
        connectionId: "",
        accountId: "",
    };
}
export const QueryInterchainAccountRequest = {
    typeUrl: "/kujira.cwica.QueryInterchainAccountRequest",
    encode(message, writer = Writer.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.connectionId !== "") {
            writer.uint32(18).string(message.connectionId);
        }
        if (message.accountId !== "") {
            writer.uint32(26).string(message.accountId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Reader ? input : new Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryInterchainAccountRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.connectionId = reader.string();
                    break;
                case 3:
                    message.accountId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryInterchainAccountRequest();
        if (isSet(object.owner))
            obj.owner = String(object.owner);
        if (isSet(object.connectionId))
            obj.connectionId = String(object.connectionId);
        if (isSet(object.accountId))
            obj.accountId = String(object.accountId);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.connectionId !== undefined &&
            (obj.connectionId = message.connectionId);
        message.accountId !== undefined && (obj.accountId = message.accountId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseQueryInterchainAccountRequest();
        message.owner = (_a = object.owner) !== null && _a !== void 0 ? _a : "";
        message.connectionId = (_b = object.connectionId) !== null && _b !== void 0 ? _b : "";
        message.accountId = (_c = object.accountId) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseQueryInterchainAccountResponse() {
    return {
        interchainAccountAddress: "",
    };
}
export const QueryInterchainAccountResponse = {
    typeUrl: "/kujira.cwica.QueryInterchainAccountResponse",
    encode(message, writer = Writer.create()) {
        if (message.interchainAccountAddress !== "") {
            writer.uint32(10).string(message.interchainAccountAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Reader ? input : new Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryInterchainAccountResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.interchainAccountAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryInterchainAccountResponse();
        if (isSet(object.interchainAccountAddress))
            obj.interchainAccountAddress = String(object.interchainAccountAddress);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.interchainAccountAddress !== undefined &&
            (obj.interchainAccountAddress = message.interchainAccountAddress);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryInterchainAccountResponse();
        message.interchainAccountAddress = (_a = object.interchainAccountAddress) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
export class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.InterchainAccount = this.InterchainAccount.bind(this);
    }
    InterchainAccount(request) {
        const data = QueryInterchainAccountRequest.encode(request).finish();
        const promise = this.rpc.request("kujira.cwica.Query", "InterchainAccount", data);
        return promise.then((data) => QueryInterchainAccountResponse.decode(new Reader(data)));
    }
}
