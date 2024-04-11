"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = exports.MsgBatchResetDelegationResponse = exports.MsgBatchResetDelegation = exports.MsgWithdrawAllDelegatorRewardsResponse = exports.MsgWithdrawAllDelegatorRewards = exports.protobufPackage = void 0;
const binary_1 = require("cosmjs-types/binary");
const coin_1 = require("cosmjs-types/cosmos/base/v1beta1/coin");
const helpers_1 = require("cosmjs-types/helpers");
/* eslint-disable */
exports.protobufPackage = "batch";
function createBaseMsgWithdrawAllDelegatorRewards() {
    return {
        delegatorAddress: "",
    };
}
exports.MsgWithdrawAllDelegatorRewards = {
    typeUrl: "/batch.MsgWithdrawAllDelegatorRewards",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.delegatorAddress !== "") {
            writer.uint32(10).string(message.delegatorAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgWithdrawAllDelegatorRewards();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegatorAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgWithdrawAllDelegatorRewards();
        if ((0, helpers_1.isSet)(object.delegatorAddress))
            obj.delegatorAddress = String(object.delegatorAddress);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.delegatorAddress !== undefined &&
            (obj.delegatorAddress = message.delegatorAddress);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMsgWithdrawAllDelegatorRewards();
        message.delegatorAddress = (_a = object.delegatorAddress) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseMsgWithdrawAllDelegatorRewardsResponse() {
    return {
        amount: [],
    };
}
exports.MsgWithdrawAllDelegatorRewardsResponse = {
    typeUrl: "/batch.MsgWithdrawAllDelegatorRewardsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.amount) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgWithdrawAllDelegatorRewardsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.amount.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgWithdrawAllDelegatorRewardsResponse();
        if (Array.isArray(object === null || object === void 0 ? void 0 : object.amount))
            obj.amount = object.amount.map((e) => coin_1.Coin.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.amount) {
            obj.amount = message.amount.map((e) => (e ? coin_1.Coin.toJSON(e) : undefined));
        }
        else {
            obj.amount = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMsgWithdrawAllDelegatorRewardsResponse();
        message.amount = ((_a = object.amount) === null || _a === void 0 ? void 0 : _a.map((e) => coin_1.Coin.fromPartial(e))) || [];
        return message;
    },
};
function createBaseMsgBatchResetDelegation() {
    return {
        delegatorAddress: "",
        validators: [],
        amounts: [],
    };
}
exports.MsgBatchResetDelegation = {
    typeUrl: "/batch.MsgBatchResetDelegation",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.delegatorAddress !== "") {
            writer.uint32(10).string(message.delegatorAddress);
        }
        for (const v of message.validators) {
            writer.uint32(18).string(v);
        }
        for (const v of message.amounts) {
            writer.uint32(26).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBatchResetDelegation();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegatorAddress = reader.string();
                    break;
                case 2:
                    message.validators.push(reader.string());
                    break;
                case 3:
                    message.amounts.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgBatchResetDelegation();
        if ((0, helpers_1.isSet)(object.delegatorAddress))
            obj.delegatorAddress = String(object.delegatorAddress);
        if (Array.isArray(object === null || object === void 0 ? void 0 : object.validators))
            obj.validators = object.validators.map((e) => String(e));
        if (Array.isArray(object === null || object === void 0 ? void 0 : object.amounts))
            obj.amounts = object.amounts.map((e) => String(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.delegatorAddress !== undefined &&
            (obj.delegatorAddress = message.delegatorAddress);
        if (message.validators) {
            obj.validators = message.validators.map((e) => e);
        }
        else {
            obj.validators = [];
        }
        if (message.amounts) {
            obj.amounts = message.amounts.map((e) => e);
        }
        else {
            obj.amounts = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseMsgBatchResetDelegation();
        message.delegatorAddress = (_a = object.delegatorAddress) !== null && _a !== void 0 ? _a : "";
        message.validators = ((_b = object.validators) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        message.amounts = ((_c = object.amounts) === null || _c === void 0 ? void 0 : _c.map((e) => e)) || [];
        return message;
    },
};
function createBaseMsgBatchResetDelegationResponse() {
    return {};
}
exports.MsgBatchResetDelegationResponse = {
    typeUrl: "/batch.MsgBatchResetDelegationResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBatchResetDelegationResponse();
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
        const obj = createBaseMsgBatchResetDelegationResponse();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgBatchResetDelegationResponse();
        return message;
    },
};
class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.WithdrawAllDelegatorRewards =
            this.WithdrawAllDelegatorRewards.bind(this);
        this.BatchResetDelegation = this.BatchResetDelegation.bind(this);
    }
    WithdrawAllDelegatorRewards(request) {
        const data = exports.MsgWithdrawAllDelegatorRewards.encode(request).finish();
        const promise = this.rpc.request("batch.Msg", "WithdrawAllDelegatorRewards", data);
        return promise.then((data) => exports.MsgWithdrawAllDelegatorRewardsResponse.decode(new binary_1.BinaryReader(data)));
    }
    BatchResetDelegation(request) {
        const data = exports.MsgBatchResetDelegation.encode(request).finish();
        const promise = this.rpc.request("batch.Msg", "BatchResetDelegation", data);
        return promise.then((data) => exports.MsgBatchResetDelegationResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
