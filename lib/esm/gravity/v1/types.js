/* eslint-disable */
import { BinaryReader, BinaryWriter } from "cosmjs-types/binary";
import { Metadata } from "cosmjs-types/cosmos/bank/v1beta1/bank";
import { Coin } from "cosmjs-types/cosmos/base/v1beta1/coin";
import { base64FromBytes, bytesFromBase64, isSet } from "./helpers";
export const protobufPackage = "gravity.v1";
function createBaseBridgeValidator() {
    return {
        power: BigInt(0),
        ethereumAddress: "",
    };
}
export const BridgeValidator = {
    encode(message, writer = BinaryWriter.create()) {
        if (message.power !== BigInt(0)) {
            writer.uint32(8).uint64(message.power);
        }
        if (message.ethereumAddress !== "") {
            writer.uint32(18).string(message.ethereumAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBridgeValidator();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.power = reader.uint64();
                    break;
                case 2:
                    message.ethereumAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            power: isSet(object.power) ? BigInt(object.power) : BigInt(0),
            ethereumAddress: isSet(object.ethereumAddress)
                ? String(object.ethereumAddress)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.power !== undefined &&
            (obj.power = (message.power || BigInt(0)).toString());
        message.ethereumAddress !== undefined &&
            (obj.ethereumAddress = message.ethereumAddress);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseBridgeValidator();
        message.power =
            object.power !== undefined && object.power !== null
                ? BigInt(object.power)
                : BigInt(0);
        message.ethereumAddress = (_a = object.ethereumAddress) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseValset() {
    return {
        nonce: BigInt(0),
        members: [],
        height: BigInt(0),
        rewardAmount: "",
        rewardToken: "",
    };
}
export const Valset = {
    encode(message, writer = BinaryWriter.create()) {
        if (message.nonce !== BigInt(0)) {
            writer.uint32(8).uint64(message.nonce);
        }
        for (const v of message.members) {
            BridgeValidator.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.height !== BigInt(0)) {
            writer.uint32(24).uint64(message.height);
        }
        if (message.rewardAmount !== "") {
            writer.uint32(34).string(message.rewardAmount);
        }
        if (message.rewardToken !== "") {
            writer.uint32(42).string(message.rewardToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValset();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nonce = reader.uint64();
                    break;
                case 2:
                    message.members.push(BridgeValidator.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.height = reader.uint64();
                    break;
                case 4:
                    message.rewardAmount = reader.string();
                    break;
                case 5:
                    message.rewardToken = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            nonce: isSet(object.nonce) ? BigInt(object.nonce) : BigInt(0),
            members: Array.isArray(object === null || object === void 0 ? void 0 : object.members)
                ? object.members.map((e) => BridgeValidator.fromJSON(e))
                : [],
            height: isSet(object.height) ? BigInt(object.height) : BigInt(0),
            rewardAmount: isSet(object.rewardAmount)
                ? String(object.rewardAmount)
                : "",
            rewardToken: isSet(object.rewardToken) ? String(object.rewardToken) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.nonce !== undefined &&
            (obj.nonce = (message.nonce || BigInt(0)).toString());
        if (message.members) {
            obj.members = message.members.map((e) => e ? BridgeValidator.toJSON(e) : undefined);
        }
        else {
            obj.members = [];
        }
        message.height !== undefined &&
            (obj.height = (message.height || BigInt(0)).toString());
        message.rewardAmount !== undefined &&
            (obj.rewardAmount = message.rewardAmount);
        message.rewardToken !== undefined &&
            (obj.rewardToken = message.rewardToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseValset();
        message.nonce =
            object.nonce !== undefined && object.nonce !== null
                ? BigInt(object.nonce)
                : BigInt(0);
        message.members =
            ((_a = object.members) === null || _a === void 0 ? void 0 : _a.map((e) => BridgeValidator.fromPartial(e))) || [];
        message.height =
            object.height !== undefined && object.height !== null
                ? BigInt(object.height)
                : BigInt(0);
        message.rewardAmount = (_b = object.rewardAmount) !== null && _b !== void 0 ? _b : "";
        message.rewardToken = (_c = object.rewardToken) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseLastObservedEthereumBlockHeight() {
    return {
        cosmosBlockHeight: BigInt(0),
        ethereumBlockHeight: BigInt(0),
    };
}
export const LastObservedEthereumBlockHeight = {
    encode(message, writer = BinaryWriter.create()) {
        if (message.cosmosBlockHeight !== BigInt(0)) {
            writer.uint32(8).uint64(message.cosmosBlockHeight);
        }
        if (message.ethereumBlockHeight !== BigInt(0)) {
            writer.uint32(16).uint64(message.ethereumBlockHeight);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLastObservedEthereumBlockHeight();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cosmosBlockHeight = reader.uint64();
                    break;
                case 2:
                    message.ethereumBlockHeight = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            cosmosBlockHeight: isSet(object.cosmosBlockHeight)
                ? BigInt(object.cosmosBlockHeight)
                : BigInt(0),
            ethereumBlockHeight: isSet(object.ethereumBlockHeight)
                ? BigInt(object.ethereumBlockHeight)
                : BigInt(0),
        };
    },
    toJSON(message) {
        const obj = {};
        message.cosmosBlockHeight !== undefined &&
            (obj.cosmosBlockHeight = (message.cosmosBlockHeight || BigInt(0)).toString());
        message.ethereumBlockHeight !== undefined &&
            (obj.ethereumBlockHeight = (message.ethereumBlockHeight || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseLastObservedEthereumBlockHeight();
        message.cosmosBlockHeight =
            object.cosmosBlockHeight !== undefined &&
                object.cosmosBlockHeight !== null
                ? BigInt(object.cosmosBlockHeight)
                : BigInt(0);
        message.ethereumBlockHeight =
            object.ethereumBlockHeight !== undefined &&
                object.ethereumBlockHeight !== null
                ? BigInt(object.ethereumBlockHeight)
                : BigInt(0);
        return message;
    },
};
function createBaseERC20ToDenom() {
    return {
        erc20: "",
        denom: "",
    };
}
export const ERC20ToDenom = {
    encode(message, writer = BinaryWriter.create()) {
        if (message.erc20 !== "") {
            writer.uint32(10).string(message.erc20);
        }
        if (message.denom !== "") {
            writer.uint32(18).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseERC20ToDenom();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.erc20 = reader.string();
                    break;
                case 2:
                    message.denom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            erc20: isSet(object.erc20) ? String(object.erc20) : "",
            denom: isSet(object.denom) ? String(object.denom) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.erc20 !== undefined && (obj.erc20 = message.erc20);
        message.denom !== undefined && (obj.denom = message.denom);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseERC20ToDenom();
        message.erc20 = (_a = object.erc20) !== null && _a !== void 0 ? _a : "";
        message.denom = (_b = object.denom) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseUnhaltBridgeProposal() {
    return {
        title: "",
        description: "",
        targetNonce: BigInt(0),
    };
}
export const UnhaltBridgeProposal = {
    encode(message, writer = BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.targetNonce !== BigInt(0)) {
            writer.uint32(32).uint64(message.targetNonce);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUnhaltBridgeProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 4:
                    message.targetNonce = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            title: isSet(object.title) ? String(object.title) : "",
            description: isSet(object.description) ? String(object.description) : "",
            targetNonce: isSet(object.targetNonce)
                ? BigInt(object.targetNonce)
                : BigInt(0),
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined &&
            (obj.description = message.description);
        message.targetNonce !== undefined &&
            (obj.targetNonce = (message.targetNonce || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseUnhaltBridgeProposal();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.targetNonce =
            object.targetNonce !== undefined && object.targetNonce !== null
                ? BigInt(object.targetNonce)
                : BigInt(0);
        return message;
    },
};
function createBaseAirdropProposal() {
    return {
        title: "",
        description: "",
        denom: "",
        recipients: new Uint8Array(),
        amounts: [],
    };
}
export const AirdropProposal = {
    encode(message, writer = BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.denom !== "") {
            writer.uint32(26).string(message.denom);
        }
        if (message.recipients.length !== 0) {
            writer.uint32(34).bytes(message.recipients);
        }
        writer.uint32(42).fork();
        for (const v of message.amounts) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAirdropProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.denom = reader.string();
                    break;
                case 4:
                    message.recipients = reader.bytes();
                    break;
                case 5:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.amounts.push(reader.uint64());
                        }
                    }
                    else {
                        message.amounts.push(reader.uint64());
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            title: isSet(object.title) ? String(object.title) : "",
            description: isSet(object.description) ? String(object.description) : "",
            denom: isSet(object.denom) ? String(object.denom) : "",
            recipients: isSet(object.recipients)
                ? bytesFromBase64(object.recipients)
                : new Uint8Array(),
            amounts: Array.isArray(object === null || object === void 0 ? void 0 : object.amounts)
                ? object.amounts.map((e) => BigInt(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined &&
            (obj.description = message.description);
        message.denom !== undefined && (obj.denom = message.denom);
        message.recipients !== undefined &&
            (obj.recipients = base64FromBytes(message.recipients !== undefined ? message.recipients : new Uint8Array()));
        if (message.amounts) {
            obj.amounts = message.amounts.map((e) => (e || BigInt(0)).toString());
        }
        else {
            obj.amounts = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseAirdropProposal();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.denom = (_c = object.denom) !== null && _c !== void 0 ? _c : "";
        message.recipients = (_d = object.recipients) !== null && _d !== void 0 ? _d : new Uint8Array();
        message.amounts = ((_e = object.amounts) === null || _e === void 0 ? void 0 : _e.map((e) => BigInt(e))) || [];
        return message;
    },
};
function createBaseIBCMetadataProposal() {
    return {
        title: "",
        description: "",
        metadata: undefined,
        ibcDenom: "",
    };
}
export const IBCMetadataProposal = {
    encode(message, writer = BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.metadata !== undefined) {
            Metadata.encode(message.metadata, writer.uint32(26).fork()).ldelim();
        }
        if (message.ibcDenom !== "") {
            writer.uint32(34).string(message.ibcDenom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIBCMetadataProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.metadata = Metadata.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.ibcDenom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            title: isSet(object.title) ? String(object.title) : "",
            description: isSet(object.description) ? String(object.description) : "",
            metadata: isSet(object.metadata)
                ? Metadata.fromJSON(object.metadata)
                : undefined,
            ibcDenom: isSet(object.ibcDenom) ? String(object.ibcDenom) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined &&
            (obj.description = message.description);
        message.metadata !== undefined &&
            (obj.metadata = message.metadata
                ? Metadata.toJSON(message.metadata)
                : undefined);
        message.ibcDenom !== undefined && (obj.ibcDenom = message.ibcDenom);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseIBCMetadataProposal();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.metadata =
            object.metadata !== undefined && object.metadata !== null
                ? Metadata.fromPartial(object.metadata)
                : undefined;
        message.ibcDenom = (_c = object.ibcDenom) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBasePendingIbcAutoForward() {
    return {
        foreignReceiver: "",
        token: undefined,
        ibcChannel: "",
        eventNonce: BigInt(0),
    };
}
export const PendingIbcAutoForward = {
    encode(message, writer = BinaryWriter.create()) {
        if (message.foreignReceiver !== "") {
            writer.uint32(10).string(message.foreignReceiver);
        }
        if (message.token !== undefined) {
            Coin.encode(message.token, writer.uint32(18).fork()).ldelim();
        }
        if (message.ibcChannel !== "") {
            writer.uint32(26).string(message.ibcChannel);
        }
        if (message.eventNonce !== BigInt(0)) {
            writer.uint32(32).uint64(message.eventNonce);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePendingIbcAutoForward();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.foreignReceiver = reader.string();
                    break;
                case 2:
                    message.token = Coin.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.ibcChannel = reader.string();
                    break;
                case 4:
                    message.eventNonce = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            foreignReceiver: isSet(object.foreignReceiver)
                ? String(object.foreignReceiver)
                : "",
            token: isSet(object.token) ? Coin.fromJSON(object.token) : undefined,
            ibcChannel: isSet(object.ibcChannel) ? String(object.ibcChannel) : "",
            eventNonce: isSet(object.eventNonce)
                ? BigInt(object.eventNonce)
                : BigInt(0),
        };
    },
    toJSON(message) {
        const obj = {};
        message.foreignReceiver !== undefined &&
            (obj.foreignReceiver = message.foreignReceiver);
        message.token !== undefined &&
            (obj.token = message.token ? Coin.toJSON(message.token) : undefined);
        message.ibcChannel !== undefined && (obj.ibcChannel = message.ibcChannel);
        message.eventNonce !== undefined &&
            (obj.eventNonce = (message.eventNonce || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBasePendingIbcAutoForward();
        message.foreignReceiver = (_a = object.foreignReceiver) !== null && _a !== void 0 ? _a : "";
        message.token =
            object.token !== undefined && object.token !== null
                ? Coin.fromPartial(object.token)
                : undefined;
        message.ibcChannel = (_b = object.ibcChannel) !== null && _b !== void 0 ? _b : "";
        message.eventNonce =
            object.eventNonce !== undefined && object.eventNonce !== null
                ? BigInt(object.eventNonce)
                : BigInt(0);
        return message;
    },
};
