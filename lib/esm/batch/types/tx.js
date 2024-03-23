import { Coin } from "cosmjs-types/cosmos/base/v1beta1/coin";
import { isSet } from "cosmjs-types/helpers";
import { Reader, Writer } from "protobufjs/minimal";
/* eslint-disable */
export const protobufPackage = "batch";
function createBaseMsgWithdrawAllDelegatorRewards() {
    return {
        delegatorAddress: "",
    };
}
export const MsgWithdrawAllDelegatorRewards = {
    typeUrl: "/batch.MsgWithdrawAllDelegatorRewards",
    encode(message, writer = Writer.create()) {
        if (message.delegatorAddress !== "") {
            writer.uint32(10).string(message.delegatorAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Reader ? input : new Reader(input);
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
        if (isSet(object.delegatorAddress))
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
export const MsgWithdrawAllDelegatorRewardsResponse = {
    typeUrl: "/batch.MsgWithdrawAllDelegatorRewardsResponse",
    encode(message, writer = Writer.create()) {
        for (const v of message.amount) {
            Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Reader ? input : new Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgWithdrawAllDelegatorRewardsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.amount.push(Coin.decode(reader, reader.uint32()));
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
            obj.amount = object.amount.map((e) => Coin.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.amount) {
            obj.amount = message.amount.map((e) => (e ? Coin.toJSON(e) : undefined));
        }
        else {
            obj.amount = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMsgWithdrawAllDelegatorRewardsResponse();
        message.amount = ((_a = object.amount) === null || _a === void 0 ? void 0 : _a.map((e) => Coin.fromPartial(e))) || [];
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
export const MsgBatchResetDelegation = {
    typeUrl: "/batch.MsgBatchResetDelegation",
    encode(message, writer = Writer.create()) {
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
        const reader = input instanceof Reader ? input : new Reader(input);
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
        if (isSet(object.delegatorAddress))
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
export const MsgBatchResetDelegationResponse = {
    typeUrl: "/batch.MsgBatchResetDelegationResponse",
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Reader ? input : new Reader(input);
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
export class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.WithdrawAllDelegatorRewards =
            this.WithdrawAllDelegatorRewards.bind(this);
        this.BatchResetDelegation = this.BatchResetDelegation.bind(this);
    }
    WithdrawAllDelegatorRewards(request) {
        const data = MsgWithdrawAllDelegatorRewards.encode(request).finish();
        const promise = this.rpc.request("batch.Msg", "WithdrawAllDelegatorRewards", data);
        return promise.then((data) => MsgWithdrawAllDelegatorRewardsResponse.decode(new Reader(data)));
    }
    BatchResetDelegation(request) {
        const data = MsgBatchResetDelegation.encode(request).finish();
        const promise = this.rpc.request("batch.Msg", "BatchResetDelegation", data);
        return promise.then((data) => MsgBatchResetDelegationResponse.decode(new Reader(data)));
    }
}
