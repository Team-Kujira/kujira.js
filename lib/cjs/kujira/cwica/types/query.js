"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryClientImpl = exports.QueryInterchainAccountResponse = exports.QueryInterchainAccountRequest = exports.protobufPackage = void 0;
const binary_1 = require("cosmjs-types/binary");
const helpers_1 = require("cosmjs-types/helpers");
/* eslint-disable */
exports.protobufPackage = "kujira.cwica";
function createBaseQueryInterchainAccountRequest() {
    return {
        owner: "",
        connectionId: "",
        accountId: "",
    };
}
exports.QueryInterchainAccountRequest = {
    typeUrl: "/kujira.cwica.QueryInterchainAccountRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
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
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        if ((0, helpers_1.isSet)(object.owner))
            obj.owner = String(object.owner);
        if ((0, helpers_1.isSet)(object.connectionId))
            obj.connectionId = String(object.connectionId);
        if ((0, helpers_1.isSet)(object.accountId))
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
exports.QueryInterchainAccountResponse = {
    typeUrl: "/kujira.cwica.QueryInterchainAccountResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.interchainAccountAddress !== "") {
            writer.uint32(10).string(message.interchainAccountAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        if ((0, helpers_1.isSet)(object.interchainAccountAddress))
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
class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.InterchainAccount = this.InterchainAccount.bind(this);
    }
    InterchainAccount(request) {
        const data = exports.QueryInterchainAccountRequest.encode(request).finish();
        const promise = this.rpc.request("kujira.cwica.Query", "InterchainAccount", data);
        return promise.then((data) => exports.QueryInterchainAccountResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
