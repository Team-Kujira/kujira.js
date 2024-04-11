/* eslint-disable */
import { BinaryReader, BinaryWriter } from "cosmjs-types/binary";
import { Coin } from "cosmjs-types/cosmos/base/v1beta1/coin";
import { Any } from "cosmjs-types/google/protobuf/any";
import { base64FromBytes, bytesFromBase64, isSet } from "./helpers";
import { BridgeValidator } from "./types";
export const protobufPackage = "gravity.v1";
function createBaseMsgSetOrchestratorAddress() {
    return {
        validator: "",
        orchestrator: "",
        ethAddress: "",
    };
}
export const MsgSetOrchestratorAddress = {
    encode(message, writer = BinaryWriter.create()) {
        if (message.validator !== "") {
            writer.uint32(10).string(message.validator);
        }
        if (message.orchestrator !== "") {
            writer.uint32(18).string(message.orchestrator);
        }
        if (message.ethAddress !== "") {
            writer.uint32(26).string(message.ethAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetOrchestratorAddress();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validator = reader.string();
                    break;
                case 2:
                    message.orchestrator = reader.string();
                    break;
                case 3:
                    message.ethAddress = reader.string();
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
            validator: isSet(object.validator) ? String(object.validator) : "",
            orchestrator: isSet(object.orchestrator)
                ? String(object.orchestrator)
                : "",
            ethAddress: isSet(object.ethAddress) ? String(object.ethAddress) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.validator !== undefined && (obj.validator = message.validator);
        message.orchestrator !== undefined &&
            (obj.orchestrator = message.orchestrator);
        message.ethAddress !== undefined && (obj.ethAddress = message.ethAddress);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseMsgSetOrchestratorAddress();
        message.validator = (_a = object.validator) !== null && _a !== void 0 ? _a : "";
        message.orchestrator = (_b = object.orchestrator) !== null && _b !== void 0 ? _b : "";
        message.ethAddress = (_c = object.ethAddress) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseMsgSetOrchestratorAddressResponse() {
    return {};
}
export const MsgSetOrchestratorAddressResponse = {
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetOrchestratorAddressResponse();
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
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgSetOrchestratorAddressResponse();
        return message;
    },
};
function createBaseMsgValsetConfirm() {
    return {
        nonce: BigInt(0),
        orchestrator: "",
        ethAddress: "",
        signature: "",
    };
}
export const MsgValsetConfirm = {
    encode(message, writer = BinaryWriter.create()) {
        if (message.nonce !== BigInt(0)) {
            writer.uint32(8).uint64(message.nonce);
        }
        if (message.orchestrator !== "") {
            writer.uint32(18).string(message.orchestrator);
        }
        if (message.ethAddress !== "") {
            writer.uint32(26).string(message.ethAddress);
        }
        if (message.signature !== "") {
            writer.uint32(34).string(message.signature);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgValsetConfirm();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nonce = reader.uint64();
                    break;
                case 2:
                    message.orchestrator = reader.string();
                    break;
                case 3:
                    message.ethAddress = reader.string();
                    break;
                case 4:
                    message.signature = reader.string();
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
            orchestrator: isSet(object.orchestrator)
                ? String(object.orchestrator)
                : "",
            ethAddress: isSet(object.ethAddress) ? String(object.ethAddress) : "",
            signature: isSet(object.signature) ? String(object.signature) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.nonce !== undefined &&
            (obj.nonce = (message.nonce || BigInt(0)).toString());
        message.orchestrator !== undefined &&
            (obj.orchestrator = message.orchestrator);
        message.ethAddress !== undefined && (obj.ethAddress = message.ethAddress);
        message.signature !== undefined && (obj.signature = message.signature);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseMsgValsetConfirm();
        message.nonce =
            object.nonce !== undefined && object.nonce !== null
                ? BigInt(object.nonce)
                : BigInt(0);
        message.orchestrator = (_a = object.orchestrator) !== null && _a !== void 0 ? _a : "";
        message.ethAddress = (_b = object.ethAddress) !== null && _b !== void 0 ? _b : "";
        message.signature = (_c = object.signature) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseMsgValsetConfirmResponse() {
    return {};
}
export const MsgValsetConfirmResponse = {
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgValsetConfirmResponse();
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
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgValsetConfirmResponse();
        return message;
    },
};
function createBaseMsgSendToEth() {
    return {
        sender: "",
        ethDest: "",
        amount: undefined,
        bridgeFee: undefined,
        chainFee: undefined,
    };
}
export const MsgSendToEth = {
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.ethDest !== "") {
            writer.uint32(18).string(message.ethDest);
        }
        if (message.amount !== undefined) {
            Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
        }
        if (message.bridgeFee !== undefined) {
            Coin.encode(message.bridgeFee, writer.uint32(34).fork()).ldelim();
        }
        if (message.chainFee !== undefined) {
            Coin.encode(message.chainFee, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSendToEth();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.ethDest = reader.string();
                    break;
                case 3:
                    message.amount = Coin.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.bridgeFee = Coin.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.chainFee = Coin.decode(reader, reader.uint32());
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
            sender: isSet(object.sender) ? String(object.sender) : "",
            ethDest: isSet(object.ethDest) ? String(object.ethDest) : "",
            amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
            bridgeFee: isSet(object.bridgeFee)
                ? Coin.fromJSON(object.bridgeFee)
                : undefined,
            chainFee: isSet(object.chainFee)
                ? Coin.fromJSON(object.chainFee)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.ethDest !== undefined && (obj.ethDest = message.ethDest);
        message.amount !== undefined &&
            (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
        message.bridgeFee !== undefined &&
            (obj.bridgeFee = message.bridgeFee
                ? Coin.toJSON(message.bridgeFee)
                : undefined);
        message.chainFee !== undefined &&
            (obj.chainFee = message.chainFee
                ? Coin.toJSON(message.chainFee)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMsgSendToEth();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : "";
        message.ethDest = (_b = object.ethDest) !== null && _b !== void 0 ? _b : "";
        message.amount =
            object.amount !== undefined && object.amount !== null
                ? Coin.fromPartial(object.amount)
                : undefined;
        message.bridgeFee =
            object.bridgeFee !== undefined && object.bridgeFee !== null
                ? Coin.fromPartial(object.bridgeFee)
                : undefined;
        message.chainFee =
            object.chainFee !== undefined && object.chainFee !== null
                ? Coin.fromPartial(object.chainFee)
                : undefined;
        return message;
    },
};
function createBaseMsgSendToEthResponse() {
    return {};
}
export const MsgSendToEthResponse = {
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSendToEthResponse();
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
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgSendToEthResponse();
        return message;
    },
};
function createBaseMsgRequestBatch() {
    return {
        sender: "",
        denom: "",
    };
}
export const MsgRequestBatch = {
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.denom !== "") {
            writer.uint32(18).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRequestBatch();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
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
            sender: isSet(object.sender) ? String(object.sender) : "",
            denom: isSet(object.denom) ? String(object.denom) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.denom !== undefined && (obj.denom = message.denom);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMsgRequestBatch();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : "";
        message.denom = (_b = object.denom) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseMsgRequestBatchResponse() {
    return {};
}
export const MsgRequestBatchResponse = {
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRequestBatchResponse();
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
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgRequestBatchResponse();
        return message;
    },
};
function createBaseMsgConfirmBatch() {
    return {
        nonce: BigInt(0),
        tokenContract: "",
        ethSigner: "",
        orchestrator: "",
        signature: "",
    };
}
export const MsgConfirmBatch = {
    encode(message, writer = BinaryWriter.create()) {
        if (message.nonce !== BigInt(0)) {
            writer.uint32(8).uint64(message.nonce);
        }
        if (message.tokenContract !== "") {
            writer.uint32(18).string(message.tokenContract);
        }
        if (message.ethSigner !== "") {
            writer.uint32(26).string(message.ethSigner);
        }
        if (message.orchestrator !== "") {
            writer.uint32(34).string(message.orchestrator);
        }
        if (message.signature !== "") {
            writer.uint32(42).string(message.signature);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgConfirmBatch();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nonce = reader.uint64();
                    break;
                case 2:
                    message.tokenContract = reader.string();
                    break;
                case 3:
                    message.ethSigner = reader.string();
                    break;
                case 4:
                    message.orchestrator = reader.string();
                    break;
                case 5:
                    message.signature = reader.string();
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
            tokenContract: isSet(object.tokenContract)
                ? String(object.tokenContract)
                : "",
            ethSigner: isSet(object.ethSigner) ? String(object.ethSigner) : "",
            orchestrator: isSet(object.orchestrator)
                ? String(object.orchestrator)
                : "",
            signature: isSet(object.signature) ? String(object.signature) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.nonce !== undefined &&
            (obj.nonce = (message.nonce || BigInt(0)).toString());
        message.tokenContract !== undefined &&
            (obj.tokenContract = message.tokenContract);
        message.ethSigner !== undefined && (obj.ethSigner = message.ethSigner);
        message.orchestrator !== undefined &&
            (obj.orchestrator = message.orchestrator);
        message.signature !== undefined && (obj.signature = message.signature);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseMsgConfirmBatch();
        message.nonce =
            object.nonce !== undefined && object.nonce !== null
                ? BigInt(object.nonce)
                : BigInt(0);
        message.tokenContract = (_a = object.tokenContract) !== null && _a !== void 0 ? _a : "";
        message.ethSigner = (_b = object.ethSigner) !== null && _b !== void 0 ? _b : "";
        message.orchestrator = (_c = object.orchestrator) !== null && _c !== void 0 ? _c : "";
        message.signature = (_d = object.signature) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
function createBaseMsgConfirmBatchResponse() {
    return {};
}
export const MsgConfirmBatchResponse = {
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgConfirmBatchResponse();
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
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgConfirmBatchResponse();
        return message;
    },
};
function createBaseMsgConfirmLogicCall() {
    return {
        invalidationId: "",
        invalidationNonce: BigInt(0),
        ethSigner: "",
        orchestrator: "",
        signature: "",
    };
}
export const MsgConfirmLogicCall = {
    encode(message, writer = BinaryWriter.create()) {
        if (message.invalidationId !== "") {
            writer.uint32(10).string(message.invalidationId);
        }
        if (message.invalidationNonce !== BigInt(0)) {
            writer.uint32(16).uint64(message.invalidationNonce);
        }
        if (message.ethSigner !== "") {
            writer.uint32(26).string(message.ethSigner);
        }
        if (message.orchestrator !== "") {
            writer.uint32(34).string(message.orchestrator);
        }
        if (message.signature !== "") {
            writer.uint32(42).string(message.signature);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgConfirmLogicCall();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.invalidationId = reader.string();
                    break;
                case 2:
                    message.invalidationNonce = reader.uint64();
                    break;
                case 3:
                    message.ethSigner = reader.string();
                    break;
                case 4:
                    message.orchestrator = reader.string();
                    break;
                case 5:
                    message.signature = reader.string();
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
            invalidationId: isSet(object.invalidationId)
                ? String(object.invalidationId)
                : "",
            invalidationNonce: isSet(object.invalidationNonce)
                ? BigInt(object.invalidationNonce)
                : BigInt(0),
            ethSigner: isSet(object.ethSigner) ? String(object.ethSigner) : "",
            orchestrator: isSet(object.orchestrator)
                ? String(object.orchestrator)
                : "",
            signature: isSet(object.signature) ? String(object.signature) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.invalidationId !== undefined &&
            (obj.invalidationId = message.invalidationId);
        message.invalidationNonce !== undefined &&
            (obj.invalidationNonce = (message.invalidationNonce || BigInt(0)).toString());
        message.ethSigner !== undefined && (obj.ethSigner = message.ethSigner);
        message.orchestrator !== undefined &&
            (obj.orchestrator = message.orchestrator);
        message.signature !== undefined && (obj.signature = message.signature);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseMsgConfirmLogicCall();
        message.invalidationId = (_a = object.invalidationId) !== null && _a !== void 0 ? _a : "";
        message.invalidationNonce =
            object.invalidationNonce !== undefined &&
                object.invalidationNonce !== null
                ? BigInt(object.invalidationNonce)
                : BigInt(0);
        message.ethSigner = (_b = object.ethSigner) !== null && _b !== void 0 ? _b : "";
        message.orchestrator = (_c = object.orchestrator) !== null && _c !== void 0 ? _c : "";
        message.signature = (_d = object.signature) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
function createBaseMsgConfirmLogicCallResponse() {
    return {};
}
export const MsgConfirmLogicCallResponse = {
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgConfirmLogicCallResponse();
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
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgConfirmLogicCallResponse();
        return message;
    },
};
function createBaseMsgSendToCosmosClaim() {
    return {
        eventNonce: BigInt(0),
        ethBlockHeight: BigInt(0),
        tokenContract: "",
        amount: "",
        ethereumSender: "",
        cosmosReceiver: "",
        orchestrator: "",
    };
}
export const MsgSendToCosmosClaim = {
    encode(message, writer = BinaryWriter.create()) {
        if (message.eventNonce !== BigInt(0)) {
            writer.uint32(8).uint64(message.eventNonce);
        }
        if (message.ethBlockHeight !== BigInt(0)) {
            writer.uint32(16).uint64(message.ethBlockHeight);
        }
        if (message.tokenContract !== "") {
            writer.uint32(26).string(message.tokenContract);
        }
        if (message.amount !== "") {
            writer.uint32(34).string(message.amount);
        }
        if (message.ethereumSender !== "") {
            writer.uint32(42).string(message.ethereumSender);
        }
        if (message.cosmosReceiver !== "") {
            writer.uint32(50).string(message.cosmosReceiver);
        }
        if (message.orchestrator !== "") {
            writer.uint32(58).string(message.orchestrator);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSendToCosmosClaim();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.eventNonce = reader.uint64();
                    break;
                case 2:
                    message.ethBlockHeight = reader.uint64();
                    break;
                case 3:
                    message.tokenContract = reader.string();
                    break;
                case 4:
                    message.amount = reader.string();
                    break;
                case 5:
                    message.ethereumSender = reader.string();
                    break;
                case 6:
                    message.cosmosReceiver = reader.string();
                    break;
                case 7:
                    message.orchestrator = reader.string();
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
            eventNonce: isSet(object.eventNonce)
                ? BigInt(object.eventNonce)
                : BigInt(0),
            ethBlockHeight: isSet(object.ethBlockHeight)
                ? BigInt(object.ethBlockHeight)
                : BigInt(0),
            tokenContract: isSet(object.tokenContract)
                ? String(object.tokenContract)
                : "",
            amount: isSet(object.amount) ? String(object.amount) : "",
            ethereumSender: isSet(object.ethereumSender)
                ? String(object.ethereumSender)
                : "",
            cosmosReceiver: isSet(object.cosmosReceiver)
                ? String(object.cosmosReceiver)
                : "",
            orchestrator: isSet(object.orchestrator)
                ? String(object.orchestrator)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.eventNonce !== undefined &&
            (obj.eventNonce = (message.eventNonce || BigInt(0)).toString());
        message.ethBlockHeight !== undefined &&
            (obj.ethBlockHeight = (message.ethBlockHeight || BigInt(0)).toString());
        message.tokenContract !== undefined &&
            (obj.tokenContract = message.tokenContract);
        message.amount !== undefined && (obj.amount = message.amount);
        message.ethereumSender !== undefined &&
            (obj.ethereumSender = message.ethereumSender);
        message.cosmosReceiver !== undefined &&
            (obj.cosmosReceiver = message.cosmosReceiver);
        message.orchestrator !== undefined &&
            (obj.orchestrator = message.orchestrator);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseMsgSendToCosmosClaim();
        message.eventNonce =
            object.eventNonce !== undefined && object.eventNonce !== null
                ? BigInt(object.eventNonce)
                : BigInt(0);
        message.ethBlockHeight =
            object.ethBlockHeight !== undefined && object.ethBlockHeight !== null
                ? BigInt(object.ethBlockHeight)
                : BigInt(0);
        message.tokenContract = (_a = object.tokenContract) !== null && _a !== void 0 ? _a : "";
        message.amount = (_b = object.amount) !== null && _b !== void 0 ? _b : "";
        message.ethereumSender = (_c = object.ethereumSender) !== null && _c !== void 0 ? _c : "";
        message.cosmosReceiver = (_d = object.cosmosReceiver) !== null && _d !== void 0 ? _d : "";
        message.orchestrator = (_e = object.orchestrator) !== null && _e !== void 0 ? _e : "";
        return message;
    },
};
function createBaseMsgSendToCosmosClaimResponse() {
    return {};
}
export const MsgSendToCosmosClaimResponse = {
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSendToCosmosClaimResponse();
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
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgSendToCosmosClaimResponse();
        return message;
    },
};
function createBaseMsgExecuteIbcAutoForwards() {
    return {
        forwardsToClear: BigInt(0),
        executor: "",
    };
}
export const MsgExecuteIbcAutoForwards = {
    encode(message, writer = BinaryWriter.create()) {
        if (message.forwardsToClear !== BigInt(0)) {
            writer.uint32(8).uint64(message.forwardsToClear);
        }
        if (message.executor !== "") {
            writer.uint32(18).string(message.executor);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgExecuteIbcAutoForwards();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.forwardsToClear = reader.uint64();
                    break;
                case 2:
                    message.executor = reader.string();
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
            forwardsToClear: isSet(object.forwardsToClear)
                ? BigInt(object.forwardsToClear)
                : BigInt(0),
            executor: isSet(object.executor) ? String(object.executor) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.forwardsToClear !== undefined &&
            (obj.forwardsToClear = (message.forwardsToClear || BigInt(0)).toString());
        message.executor !== undefined && (obj.executor = message.executor);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMsgExecuteIbcAutoForwards();
        message.forwardsToClear =
            object.forwardsToClear !== undefined && object.forwardsToClear !== null
                ? BigInt(object.forwardsToClear)
                : BigInt(0);
        message.executor = (_a = object.executor) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseMsgExecuteIbcAutoForwardsResponse() {
    return {};
}
export const MsgExecuteIbcAutoForwardsResponse = {
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgExecuteIbcAutoForwardsResponse();
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
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgExecuteIbcAutoForwardsResponse();
        return message;
    },
};
function createBaseMsgBatchSendToEthClaim() {
    return {
        eventNonce: BigInt(0),
        ethBlockHeight: BigInt(0),
        batchNonce: BigInt(0),
        tokenContract: "",
        orchestrator: "",
    };
}
export const MsgBatchSendToEthClaim = {
    encode(message, writer = BinaryWriter.create()) {
        if (message.eventNonce !== BigInt(0)) {
            writer.uint32(8).uint64(message.eventNonce);
        }
        if (message.ethBlockHeight !== BigInt(0)) {
            writer.uint32(16).uint64(message.ethBlockHeight);
        }
        if (message.batchNonce !== BigInt(0)) {
            writer.uint32(24).uint64(message.batchNonce);
        }
        if (message.tokenContract !== "") {
            writer.uint32(34).string(message.tokenContract);
        }
        if (message.orchestrator !== "") {
            writer.uint32(42).string(message.orchestrator);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBatchSendToEthClaim();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.eventNonce = reader.uint64();
                    break;
                case 2:
                    message.ethBlockHeight = reader.uint64();
                    break;
                case 3:
                    message.batchNonce = reader.uint64();
                    break;
                case 4:
                    message.tokenContract = reader.string();
                    break;
                case 5:
                    message.orchestrator = reader.string();
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
            eventNonce: isSet(object.eventNonce)
                ? BigInt(object.eventNonce)
                : BigInt(0),
            ethBlockHeight: isSet(object.ethBlockHeight)
                ? BigInt(object.ethBlockHeight)
                : BigInt(0),
            batchNonce: isSet(object.batchNonce)
                ? BigInt(object.batchNonce)
                : BigInt(0),
            tokenContract: isSet(object.tokenContract)
                ? String(object.tokenContract)
                : "",
            orchestrator: isSet(object.orchestrator)
                ? String(object.orchestrator)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.eventNonce !== undefined &&
            (obj.eventNonce = (message.eventNonce || BigInt(0)).toString());
        message.ethBlockHeight !== undefined &&
            (obj.ethBlockHeight = (message.ethBlockHeight || BigInt(0)).toString());
        message.batchNonce !== undefined &&
            (obj.batchNonce = (message.batchNonce || BigInt(0)).toString());
        message.tokenContract !== undefined &&
            (obj.tokenContract = message.tokenContract);
        message.orchestrator !== undefined &&
            (obj.orchestrator = message.orchestrator);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMsgBatchSendToEthClaim();
        message.eventNonce =
            object.eventNonce !== undefined && object.eventNonce !== null
                ? BigInt(object.eventNonce)
                : BigInt(0);
        message.ethBlockHeight =
            object.ethBlockHeight !== undefined && object.ethBlockHeight !== null
                ? BigInt(object.ethBlockHeight)
                : BigInt(0);
        message.batchNonce =
            object.batchNonce !== undefined && object.batchNonce !== null
                ? BigInt(object.batchNonce)
                : BigInt(0);
        message.tokenContract = (_a = object.tokenContract) !== null && _a !== void 0 ? _a : "";
        message.orchestrator = (_b = object.orchestrator) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseMsgBatchSendToEthClaimResponse() {
    return {};
}
export const MsgBatchSendToEthClaimResponse = {
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBatchSendToEthClaimResponse();
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
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgBatchSendToEthClaimResponse();
        return message;
    },
};
function createBaseMsgERC20DeployedClaim() {
    return {
        eventNonce: BigInt(0),
        ethBlockHeight: BigInt(0),
        cosmosDenom: "",
        tokenContract: "",
        name: "",
        symbol: "",
        decimals: BigInt(0),
        orchestrator: "",
    };
}
export const MsgERC20DeployedClaim = {
    encode(message, writer = BinaryWriter.create()) {
        if (message.eventNonce !== BigInt(0)) {
            writer.uint32(8).uint64(message.eventNonce);
        }
        if (message.ethBlockHeight !== BigInt(0)) {
            writer.uint32(16).uint64(message.ethBlockHeight);
        }
        if (message.cosmosDenom !== "") {
            writer.uint32(26).string(message.cosmosDenom);
        }
        if (message.tokenContract !== "") {
            writer.uint32(34).string(message.tokenContract);
        }
        if (message.name !== "") {
            writer.uint32(42).string(message.name);
        }
        if (message.symbol !== "") {
            writer.uint32(50).string(message.symbol);
        }
        if (message.decimals !== BigInt(0)) {
            writer.uint32(56).uint64(message.decimals);
        }
        if (message.orchestrator !== "") {
            writer.uint32(66).string(message.orchestrator);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgERC20DeployedClaim();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.eventNonce = reader.uint64();
                    break;
                case 2:
                    message.ethBlockHeight = reader.uint64();
                    break;
                case 3:
                    message.cosmosDenom = reader.string();
                    break;
                case 4:
                    message.tokenContract = reader.string();
                    break;
                case 5:
                    message.name = reader.string();
                    break;
                case 6:
                    message.symbol = reader.string();
                    break;
                case 7:
                    message.decimals = reader.uint64();
                    break;
                case 8:
                    message.orchestrator = reader.string();
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
            eventNonce: isSet(object.eventNonce)
                ? BigInt(object.eventNonce)
                : BigInt(0),
            ethBlockHeight: isSet(object.ethBlockHeight)
                ? BigInt(object.ethBlockHeight)
                : BigInt(0),
            cosmosDenom: isSet(object.cosmosDenom) ? String(object.cosmosDenom) : "",
            tokenContract: isSet(object.tokenContract)
                ? String(object.tokenContract)
                : "",
            name: isSet(object.name) ? String(object.name) : "",
            symbol: isSet(object.symbol) ? String(object.symbol) : "",
            decimals: isSet(object.decimals) ? BigInt(object.decimals) : BigInt(0),
            orchestrator: isSet(object.orchestrator)
                ? String(object.orchestrator)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.eventNonce !== undefined &&
            (obj.eventNonce = (message.eventNonce || BigInt(0)).toString());
        message.ethBlockHeight !== undefined &&
            (obj.ethBlockHeight = (message.ethBlockHeight || BigInt(0)).toString());
        message.cosmosDenom !== undefined &&
            (obj.cosmosDenom = message.cosmosDenom);
        message.tokenContract !== undefined &&
            (obj.tokenContract = message.tokenContract);
        message.name !== undefined && (obj.name = message.name);
        message.symbol !== undefined && (obj.symbol = message.symbol);
        message.decimals !== undefined &&
            (obj.decimals = (message.decimals || BigInt(0)).toString());
        message.orchestrator !== undefined &&
            (obj.orchestrator = message.orchestrator);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseMsgERC20DeployedClaim();
        message.eventNonce =
            object.eventNonce !== undefined && object.eventNonce !== null
                ? BigInt(object.eventNonce)
                : BigInt(0);
        message.ethBlockHeight =
            object.ethBlockHeight !== undefined && object.ethBlockHeight !== null
                ? BigInt(object.ethBlockHeight)
                : BigInt(0);
        message.cosmosDenom = (_a = object.cosmosDenom) !== null && _a !== void 0 ? _a : "";
        message.tokenContract = (_b = object.tokenContract) !== null && _b !== void 0 ? _b : "";
        message.name = (_c = object.name) !== null && _c !== void 0 ? _c : "";
        message.symbol = (_d = object.symbol) !== null && _d !== void 0 ? _d : "";
        message.decimals =
            object.decimals !== undefined && object.decimals !== null
                ? BigInt(object.decimals)
                : BigInt(0);
        message.orchestrator = (_e = object.orchestrator) !== null && _e !== void 0 ? _e : "";
        return message;
    },
};
function createBaseMsgERC20DeployedClaimResponse() {
    return {};
}
export const MsgERC20DeployedClaimResponse = {
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgERC20DeployedClaimResponse();
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
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgERC20DeployedClaimResponse();
        return message;
    },
};
function createBaseMsgLogicCallExecutedClaim() {
    return {
        eventNonce: BigInt(0),
        ethBlockHeight: BigInt(0),
        invalidationId: new Uint8Array(),
        invalidationNonce: BigInt(0),
        orchestrator: "",
    };
}
export const MsgLogicCallExecutedClaim = {
    encode(message, writer = BinaryWriter.create()) {
        if (message.eventNonce !== BigInt(0)) {
            writer.uint32(8).uint64(message.eventNonce);
        }
        if (message.ethBlockHeight !== BigInt(0)) {
            writer.uint32(16).uint64(message.ethBlockHeight);
        }
        if (message.invalidationId.length !== 0) {
            writer.uint32(26).bytes(message.invalidationId);
        }
        if (message.invalidationNonce !== BigInt(0)) {
            writer.uint32(32).uint64(message.invalidationNonce);
        }
        if (message.orchestrator !== "") {
            writer.uint32(42).string(message.orchestrator);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgLogicCallExecutedClaim();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.eventNonce = reader.uint64();
                    break;
                case 2:
                    message.ethBlockHeight = reader.uint64();
                    break;
                case 3:
                    message.invalidationId = reader.bytes();
                    break;
                case 4:
                    message.invalidationNonce = reader.uint64();
                    break;
                case 5:
                    message.orchestrator = reader.string();
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
            eventNonce: isSet(object.eventNonce)
                ? BigInt(object.eventNonce)
                : BigInt(0),
            ethBlockHeight: isSet(object.ethBlockHeight)
                ? BigInt(object.ethBlockHeight)
                : BigInt(0),
            invalidationId: isSet(object.invalidationId)
                ? bytesFromBase64(object.invalidationId)
                : new Uint8Array(),
            invalidationNonce: isSet(object.invalidationNonce)
                ? BigInt(object.invalidationNonce)
                : BigInt(0),
            orchestrator: isSet(object.orchestrator)
                ? String(object.orchestrator)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.eventNonce !== undefined &&
            (obj.eventNonce = (message.eventNonce || BigInt(0)).toString());
        message.ethBlockHeight !== undefined &&
            (obj.ethBlockHeight = (message.ethBlockHeight || BigInt(0)).toString());
        message.invalidationId !== undefined &&
            (obj.invalidationId = base64FromBytes(message.invalidationId !== undefined
                ? message.invalidationId
                : new Uint8Array()));
        message.invalidationNonce !== undefined &&
            (obj.invalidationNonce = (message.invalidationNonce || BigInt(0)).toString());
        message.orchestrator !== undefined &&
            (obj.orchestrator = message.orchestrator);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMsgLogicCallExecutedClaim();
        message.eventNonce =
            object.eventNonce !== undefined && object.eventNonce !== null
                ? BigInt(object.eventNonce)
                : BigInt(0);
        message.ethBlockHeight =
            object.ethBlockHeight !== undefined && object.ethBlockHeight !== null
                ? BigInt(object.ethBlockHeight)
                : BigInt(0);
        message.invalidationId = (_a = object.invalidationId) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.invalidationNonce =
            object.invalidationNonce !== undefined &&
                object.invalidationNonce !== null
                ? BigInt(object.invalidationNonce)
                : BigInt(0);
        message.orchestrator = (_b = object.orchestrator) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseMsgLogicCallExecutedClaimResponse() {
    return {};
}
export const MsgLogicCallExecutedClaimResponse = {
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgLogicCallExecutedClaimResponse();
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
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgLogicCallExecutedClaimResponse();
        return message;
    },
};
function createBaseMsgValsetUpdatedClaim() {
    return {
        eventNonce: BigInt(0),
        valsetNonce: BigInt(0),
        ethBlockHeight: BigInt(0),
        members: [],
        rewardAmount: "",
        rewardToken: "",
        orchestrator: "",
    };
}
export const MsgValsetUpdatedClaim = {
    encode(message, writer = BinaryWriter.create()) {
        if (message.eventNonce !== BigInt(0)) {
            writer.uint32(8).uint64(message.eventNonce);
        }
        if (message.valsetNonce !== BigInt(0)) {
            writer.uint32(16).uint64(message.valsetNonce);
        }
        if (message.ethBlockHeight !== BigInt(0)) {
            writer.uint32(24).uint64(message.ethBlockHeight);
        }
        for (const v of message.members) {
            BridgeValidator.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.rewardAmount !== "") {
            writer.uint32(42).string(message.rewardAmount);
        }
        if (message.rewardToken !== "") {
            writer.uint32(50).string(message.rewardToken);
        }
        if (message.orchestrator !== "") {
            writer.uint32(58).string(message.orchestrator);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgValsetUpdatedClaim();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.eventNonce = reader.uint64();
                    break;
                case 2:
                    message.valsetNonce = reader.uint64();
                    break;
                case 3:
                    message.ethBlockHeight = reader.uint64();
                    break;
                case 4:
                    message.members.push(BridgeValidator.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.rewardAmount = reader.string();
                    break;
                case 6:
                    message.rewardToken = reader.string();
                    break;
                case 7:
                    message.orchestrator = reader.string();
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
            eventNonce: isSet(object.eventNonce)
                ? BigInt(object.eventNonce)
                : BigInt(0),
            valsetNonce: isSet(object.valsetNonce)
                ? BigInt(object.valsetNonce)
                : BigInt(0),
            ethBlockHeight: isSet(object.ethBlockHeight)
                ? BigInt(object.ethBlockHeight)
                : BigInt(0),
            members: Array.isArray(object === null || object === void 0 ? void 0 : object.members)
                ? object.members.map((e) => BridgeValidator.fromJSON(e))
                : [],
            rewardAmount: isSet(object.rewardAmount)
                ? String(object.rewardAmount)
                : "",
            rewardToken: isSet(object.rewardToken) ? String(object.rewardToken) : "",
            orchestrator: isSet(object.orchestrator)
                ? String(object.orchestrator)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.eventNonce !== undefined &&
            (obj.eventNonce = (message.eventNonce || BigInt(0)).toString());
        message.valsetNonce !== undefined &&
            (obj.valsetNonce = (message.valsetNonce || BigInt(0)).toString());
        message.ethBlockHeight !== undefined &&
            (obj.ethBlockHeight = (message.ethBlockHeight || BigInt(0)).toString());
        if (message.members) {
            obj.members = message.members.map((e) => e ? BridgeValidator.toJSON(e) : undefined);
        }
        else {
            obj.members = [];
        }
        message.rewardAmount !== undefined &&
            (obj.rewardAmount = message.rewardAmount);
        message.rewardToken !== undefined &&
            (obj.rewardToken = message.rewardToken);
        message.orchestrator !== undefined &&
            (obj.orchestrator = message.orchestrator);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseMsgValsetUpdatedClaim();
        message.eventNonce =
            object.eventNonce !== undefined && object.eventNonce !== null
                ? BigInt(object.eventNonce)
                : BigInt(0);
        message.valsetNonce =
            object.valsetNonce !== undefined && object.valsetNonce !== null
                ? BigInt(object.valsetNonce)
                : BigInt(0);
        message.ethBlockHeight =
            object.ethBlockHeight !== undefined && object.ethBlockHeight !== null
                ? BigInt(object.ethBlockHeight)
                : BigInt(0);
        message.members =
            ((_a = object.members) === null || _a === void 0 ? void 0 : _a.map((e) => BridgeValidator.fromPartial(e))) || [];
        message.rewardAmount = (_b = object.rewardAmount) !== null && _b !== void 0 ? _b : "";
        message.rewardToken = (_c = object.rewardToken) !== null && _c !== void 0 ? _c : "";
        message.orchestrator = (_d = object.orchestrator) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
function createBaseMsgValsetUpdatedClaimResponse() {
    return {};
}
export const MsgValsetUpdatedClaimResponse = {
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgValsetUpdatedClaimResponse();
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
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgValsetUpdatedClaimResponse();
        return message;
    },
};
function createBaseMsgCancelSendToEth() {
    return {
        transactionId: BigInt(0),
        sender: "",
    };
}
export const MsgCancelSendToEth = {
    encode(message, writer = BinaryWriter.create()) {
        if (message.transactionId !== BigInt(0)) {
            writer.uint32(8).uint64(message.transactionId);
        }
        if (message.sender !== "") {
            writer.uint32(18).string(message.sender);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCancelSendToEth();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.transactionId = reader.uint64();
                    break;
                case 2:
                    message.sender = reader.string();
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
            transactionId: isSet(object.transactionId)
                ? BigInt(object.transactionId)
                : BigInt(0),
            sender: isSet(object.sender) ? String(object.sender) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.transactionId !== undefined &&
            (obj.transactionId = (message.transactionId || BigInt(0)).toString());
        message.sender !== undefined && (obj.sender = message.sender);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMsgCancelSendToEth();
        message.transactionId =
            object.transactionId !== undefined && object.transactionId !== null
                ? BigInt(object.transactionId)
                : BigInt(0);
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseMsgCancelSendToEthResponse() {
    return {};
}
export const MsgCancelSendToEthResponse = {
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCancelSendToEthResponse();
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
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgCancelSendToEthResponse();
        return message;
    },
};
function createBaseMsgSubmitBadSignatureEvidence() {
    return {
        subject: undefined,
        signature: "",
        sender: "",
    };
}
export const MsgSubmitBadSignatureEvidence = {
    encode(message, writer = BinaryWriter.create()) {
        if (message.subject !== undefined) {
            Any.encode(message.subject, writer.uint32(10).fork()).ldelim();
        }
        if (message.signature !== "") {
            writer.uint32(18).string(message.signature);
        }
        if (message.sender !== "") {
            writer.uint32(26).string(message.sender);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSubmitBadSignatureEvidence();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subject = Any.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.signature = reader.string();
                    break;
                case 3:
                    message.sender = reader.string();
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
            subject: isSet(object.subject) ? Any.fromJSON(object.subject) : undefined,
            signature: isSet(object.signature) ? String(object.signature) : "",
            sender: isSet(object.sender) ? String(object.sender) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.subject !== undefined &&
            (obj.subject = message.subject ? Any.toJSON(message.subject) : undefined);
        message.signature !== undefined && (obj.signature = message.signature);
        message.sender !== undefined && (obj.sender = message.sender);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMsgSubmitBadSignatureEvidence();
        message.subject =
            object.subject !== undefined && object.subject !== null
                ? Any.fromPartial(object.subject)
                : undefined;
        message.signature = (_a = object.signature) !== null && _a !== void 0 ? _a : "";
        message.sender = (_b = object.sender) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseMsgSubmitBadSignatureEvidenceResponse() {
    return {};
}
export const MsgSubmitBadSignatureEvidenceResponse = {
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSubmitBadSignatureEvidenceResponse();
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
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgSubmitBadSignatureEvidenceResponse();
        return message;
    },
};
function createBaseEventSetOperatorAddress() {
    return {
        message: "",
        address: "",
    };
}
export const EventSetOperatorAddress = {
    encode(message, writer = BinaryWriter.create()) {
        if (message.message !== "") {
            writer.uint32(10).string(message.message);
        }
        if (message.address !== "") {
            writer.uint32(18).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventSetOperatorAddress();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.message = reader.string();
                    break;
                case 2:
                    message.address = reader.string();
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
            message: isSet(object.message) ? String(object.message) : "",
            address: isSet(object.address) ? String(object.address) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.message !== undefined && (obj.message = message.message);
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseEventSetOperatorAddress();
        message.message = (_a = object.message) !== null && _a !== void 0 ? _a : "";
        message.address = (_b = object.address) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseEventValsetConfirmKey() {
    return {
        message: "",
        key: "",
    };
}
export const EventValsetConfirmKey = {
    encode(message, writer = BinaryWriter.create()) {
        if (message.message !== "") {
            writer.uint32(10).string(message.message);
        }
        if (message.key !== "") {
            writer.uint32(18).string(message.key);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventValsetConfirmKey();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.message = reader.string();
                    break;
                case 2:
                    message.key = reader.string();
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
            message: isSet(object.message) ? String(object.message) : "",
            key: isSet(object.key) ? String(object.key) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.message !== undefined && (obj.message = message.message);
        message.key !== undefined && (obj.key = message.key);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseEventValsetConfirmKey();
        message.message = (_a = object.message) !== null && _a !== void 0 ? _a : "";
        message.key = (_b = object.key) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseEventBatchCreated() {
    return {
        message: "",
        batchNonce: "",
    };
}
export const EventBatchCreated = {
    encode(message, writer = BinaryWriter.create()) {
        if (message.message !== "") {
            writer.uint32(10).string(message.message);
        }
        if (message.batchNonce !== "") {
            writer.uint32(18).string(message.batchNonce);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventBatchCreated();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.message = reader.string();
                    break;
                case 2:
                    message.batchNonce = reader.string();
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
            message: isSet(object.message) ? String(object.message) : "",
            batchNonce: isSet(object.batchNonce) ? String(object.batchNonce) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.message !== undefined && (obj.message = message.message);
        message.batchNonce !== undefined && (obj.batchNonce = message.batchNonce);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseEventBatchCreated();
        message.message = (_a = object.message) !== null && _a !== void 0 ? _a : "";
        message.batchNonce = (_b = object.batchNonce) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseEventBatchConfirmKey() {
    return {
        message: "",
        batchConfirmKey: "",
    };
}
export const EventBatchConfirmKey = {
    encode(message, writer = BinaryWriter.create()) {
        if (message.message !== "") {
            writer.uint32(10).string(message.message);
        }
        if (message.batchConfirmKey !== "") {
            writer.uint32(18).string(message.batchConfirmKey);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventBatchConfirmKey();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.message = reader.string();
                    break;
                case 2:
                    message.batchConfirmKey = reader.string();
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
            message: isSet(object.message) ? String(object.message) : "",
            batchConfirmKey: isSet(object.batchConfirmKey)
                ? String(object.batchConfirmKey)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.message !== undefined && (obj.message = message.message);
        message.batchConfirmKey !== undefined &&
            (obj.batchConfirmKey = message.batchConfirmKey);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseEventBatchConfirmKey();
        message.message = (_a = object.message) !== null && _a !== void 0 ? _a : "";
        message.batchConfirmKey = (_b = object.batchConfirmKey) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseEventBatchSendToEthClaim() {
    return {
        nonce: "",
    };
}
export const EventBatchSendToEthClaim = {
    encode(message, writer = BinaryWriter.create()) {
        if (message.nonce !== "") {
            writer.uint32(10).string(message.nonce);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventBatchSendToEthClaim();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nonce = reader.string();
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
            nonce: isSet(object.nonce) ? String(object.nonce) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.nonce !== undefined && (obj.nonce = message.nonce);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseEventBatchSendToEthClaim();
        message.nonce = (_a = object.nonce) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseEventClaim() {
    return {
        message: "",
        claimHash: "",
        attestationId: "",
    };
}
export const EventClaim = {
    encode(message, writer = BinaryWriter.create()) {
        if (message.message !== "") {
            writer.uint32(10).string(message.message);
        }
        if (message.claimHash !== "") {
            writer.uint32(18).string(message.claimHash);
        }
        if (message.attestationId !== "") {
            writer.uint32(26).string(message.attestationId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventClaim();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.message = reader.string();
                    break;
                case 2:
                    message.claimHash = reader.string();
                    break;
                case 3:
                    message.attestationId = reader.string();
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
            message: isSet(object.message) ? String(object.message) : "",
            claimHash: isSet(object.claimHash) ? String(object.claimHash) : "",
            attestationId: isSet(object.attestationId)
                ? String(object.attestationId)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.message !== undefined && (obj.message = message.message);
        message.claimHash !== undefined && (obj.claimHash = message.claimHash);
        message.attestationId !== undefined &&
            (obj.attestationId = message.attestationId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseEventClaim();
        message.message = (_a = object.message) !== null && _a !== void 0 ? _a : "";
        message.claimHash = (_b = object.claimHash) !== null && _b !== void 0 ? _b : "";
        message.attestationId = (_c = object.attestationId) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseEventBadSignatureEvidence() {
    return {
        message: "",
        badEthSignature: "",
        badEthSignatureSubject: "",
    };
}
export const EventBadSignatureEvidence = {
    encode(message, writer = BinaryWriter.create()) {
        if (message.message !== "") {
            writer.uint32(10).string(message.message);
        }
        if (message.badEthSignature !== "") {
            writer.uint32(18).string(message.badEthSignature);
        }
        if (message.badEthSignatureSubject !== "") {
            writer.uint32(26).string(message.badEthSignatureSubject);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventBadSignatureEvidence();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.message = reader.string();
                    break;
                case 2:
                    message.badEthSignature = reader.string();
                    break;
                case 3:
                    message.badEthSignatureSubject = reader.string();
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
            message: isSet(object.message) ? String(object.message) : "",
            badEthSignature: isSet(object.badEthSignature)
                ? String(object.badEthSignature)
                : "",
            badEthSignatureSubject: isSet(object.badEthSignatureSubject)
                ? String(object.badEthSignatureSubject)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.message !== undefined && (obj.message = message.message);
        message.badEthSignature !== undefined &&
            (obj.badEthSignature = message.badEthSignature);
        message.badEthSignatureSubject !== undefined &&
            (obj.badEthSignatureSubject = message.badEthSignatureSubject);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseEventBadSignatureEvidence();
        message.message = (_a = object.message) !== null && _a !== void 0 ? _a : "";
        message.badEthSignature = (_b = object.badEthSignature) !== null && _b !== void 0 ? _b : "";
        message.badEthSignatureSubject = (_c = object.badEthSignatureSubject) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseEventERC20DeployedClaim() {
    return {
        token: "",
        nonce: "",
    };
}
export const EventERC20DeployedClaim = {
    encode(message, writer = BinaryWriter.create()) {
        if (message.token !== "") {
            writer.uint32(10).string(message.token);
        }
        if (message.nonce !== "") {
            writer.uint32(18).string(message.nonce);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventERC20DeployedClaim();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.token = reader.string();
                    break;
                case 2:
                    message.nonce = reader.string();
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
            token: isSet(object.token) ? String(object.token) : "",
            nonce: isSet(object.nonce) ? String(object.nonce) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.token !== undefined && (obj.token = message.token);
        message.nonce !== undefined && (obj.nonce = message.nonce);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseEventERC20DeployedClaim();
        message.token = (_a = object.token) !== null && _a !== void 0 ? _a : "";
        message.nonce = (_b = object.nonce) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseEventValsetUpdatedClaim() {
    return {
        nonce: "",
    };
}
export const EventValsetUpdatedClaim = {
    encode(message, writer = BinaryWriter.create()) {
        if (message.nonce !== "") {
            writer.uint32(10).string(message.nonce);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventValsetUpdatedClaim();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nonce = reader.string();
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
            nonce: isSet(object.nonce) ? String(object.nonce) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.nonce !== undefined && (obj.nonce = message.nonce);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseEventValsetUpdatedClaim();
        message.nonce = (_a = object.nonce) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseEventMultisigUpdateRequest() {
    return {
        bridgeContract: "",
        bridgeChainId: "",
        multisigId: "",
        nonce: "",
    };
}
export const EventMultisigUpdateRequest = {
    encode(message, writer = BinaryWriter.create()) {
        if (message.bridgeContract !== "") {
            writer.uint32(10).string(message.bridgeContract);
        }
        if (message.bridgeChainId !== "") {
            writer.uint32(18).string(message.bridgeChainId);
        }
        if (message.multisigId !== "") {
            writer.uint32(26).string(message.multisigId);
        }
        if (message.nonce !== "") {
            writer.uint32(34).string(message.nonce);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventMultisigUpdateRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bridgeContract = reader.string();
                    break;
                case 2:
                    message.bridgeChainId = reader.string();
                    break;
                case 3:
                    message.multisigId = reader.string();
                    break;
                case 4:
                    message.nonce = reader.string();
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
            bridgeContract: isSet(object.bridgeContract)
                ? String(object.bridgeContract)
                : "",
            bridgeChainId: isSet(object.bridgeChainId)
                ? String(object.bridgeChainId)
                : "",
            multisigId: isSet(object.multisigId) ? String(object.multisigId) : "",
            nonce: isSet(object.nonce) ? String(object.nonce) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.bridgeContract !== undefined &&
            (obj.bridgeContract = message.bridgeContract);
        message.bridgeChainId !== undefined &&
            (obj.bridgeChainId = message.bridgeChainId);
        message.multisigId !== undefined && (obj.multisigId = message.multisigId);
        message.nonce !== undefined && (obj.nonce = message.nonce);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseEventMultisigUpdateRequest();
        message.bridgeContract = (_a = object.bridgeContract) !== null && _a !== void 0 ? _a : "";
        message.bridgeChainId = (_b = object.bridgeChainId) !== null && _b !== void 0 ? _b : "";
        message.multisigId = (_c = object.multisigId) !== null && _c !== void 0 ? _c : "";
        message.nonce = (_d = object.nonce) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
function createBaseEventOutgoingLogicCallCanceled() {
    return {
        logicCallInvalidationId: "",
        logicCallInvalidationNonce: "",
    };
}
export const EventOutgoingLogicCallCanceled = {
    encode(message, writer = BinaryWriter.create()) {
        if (message.logicCallInvalidationId !== "") {
            writer.uint32(10).string(message.logicCallInvalidationId);
        }
        if (message.logicCallInvalidationNonce !== "") {
            writer.uint32(18).string(message.logicCallInvalidationNonce);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventOutgoingLogicCallCanceled();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.logicCallInvalidationId = reader.string();
                    break;
                case 2:
                    message.logicCallInvalidationNonce = reader.string();
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
            logicCallInvalidationId: isSet(object.logicCallInvalidationId)
                ? String(object.logicCallInvalidationId)
                : "",
            logicCallInvalidationNonce: isSet(object.logicCallInvalidationNonce)
                ? String(object.logicCallInvalidationNonce)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.logicCallInvalidationId !== undefined &&
            (obj.logicCallInvalidationId = message.logicCallInvalidationId);
        message.logicCallInvalidationNonce !== undefined &&
            (obj.logicCallInvalidationNonce = message.logicCallInvalidationNonce);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseEventOutgoingLogicCallCanceled();
        message.logicCallInvalidationId = (_a = object.logicCallInvalidationId) !== null && _a !== void 0 ? _a : "";
        message.logicCallInvalidationNonce =
            (_b = object.logicCallInvalidationNonce) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseEventSignatureSlashing() {
    return {
        type: "",
        address: "",
    };
}
export const EventSignatureSlashing = {
    encode(message, writer = BinaryWriter.create()) {
        if (message.type !== "") {
            writer.uint32(10).string(message.type);
        }
        if (message.address !== "") {
            writer.uint32(18).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventSignatureSlashing();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.string();
                    break;
                case 2:
                    message.address = reader.string();
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
            type: isSet(object.type) ? String(object.type) : "",
            address: isSet(object.address) ? String(object.address) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.type !== undefined && (obj.type = message.type);
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseEventSignatureSlashing();
        message.type = (_a = object.type) !== null && _a !== void 0 ? _a : "";
        message.address = (_b = object.address) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseEventOutgoingTxId() {
    return {
        message: "",
        txId: "",
    };
}
export const EventOutgoingTxId = {
    encode(message, writer = BinaryWriter.create()) {
        if (message.message !== "") {
            writer.uint32(10).string(message.message);
        }
        if (message.txId !== "") {
            writer.uint32(18).string(message.txId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventOutgoingTxId();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.message = reader.string();
                    break;
                case 2:
                    message.txId = reader.string();
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
            message: isSet(object.message) ? String(object.message) : "",
            txId: isSet(object.txId) ? String(object.txId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.message !== undefined && (obj.message = message.message);
        message.txId !== undefined && (obj.txId = message.txId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseEventOutgoingTxId();
        message.message = (_a = object.message) !== null && _a !== void 0 ? _a : "";
        message.txId = (_b = object.txId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseEventSendToEthFeeCollected() {
    return {
        sender: "",
        sendAmount: "",
        feeAmount: "",
    };
}
export const EventSendToEthFeeCollected = {
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.sendAmount !== "") {
            writer.uint32(18).string(message.sendAmount);
        }
        if (message.feeAmount !== "") {
            writer.uint32(26).string(message.feeAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventSendToEthFeeCollected();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.sendAmount = reader.string();
                    break;
                case 3:
                    message.feeAmount = reader.string();
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
            sender: isSet(object.sender) ? String(object.sender) : "",
            sendAmount: isSet(object.sendAmount) ? String(object.sendAmount) : "",
            feeAmount: isSet(object.feeAmount) ? String(object.feeAmount) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.sendAmount !== undefined && (obj.sendAmount = message.sendAmount);
        message.feeAmount !== undefined && (obj.feeAmount = message.feeAmount);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseEventSendToEthFeeCollected();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : "";
        message.sendAmount = (_b = object.sendAmount) !== null && _b !== void 0 ? _b : "";
        message.feeAmount = (_c = object.feeAmount) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
export class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.ValsetConfirm = this.ValsetConfirm.bind(this);
        this.SendToEth = this.SendToEth.bind(this);
        this.RequestBatch = this.RequestBatch.bind(this);
        this.ConfirmBatch = this.ConfirmBatch.bind(this);
        this.ConfirmLogicCall = this.ConfirmLogicCall.bind(this);
        this.SendToCosmosClaim = this.SendToCosmosClaim.bind(this);
        this.ExecuteIbcAutoForwards = this.ExecuteIbcAutoForwards.bind(this);
        this.BatchSendToEthClaim = this.BatchSendToEthClaim.bind(this);
        this.ValsetUpdateClaim = this.ValsetUpdateClaim.bind(this);
        this.ERC20DeployedClaim = this.ERC20DeployedClaim.bind(this);
        this.LogicCallExecutedClaim = this.LogicCallExecutedClaim.bind(this);
        this.SetOrchestratorAddress = this.SetOrchestratorAddress.bind(this);
        this.CancelSendToEth = this.CancelSendToEth.bind(this);
        this.SubmitBadSignatureEvidence =
            this.SubmitBadSignatureEvidence.bind(this);
    }
    ValsetConfirm(request) {
        const data = MsgValsetConfirm.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Msg", "ValsetConfirm", data);
        return promise.then((data) => MsgValsetConfirmResponse.decode(new BinaryReader(data)));
    }
    SendToEth(request) {
        const data = MsgSendToEth.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Msg", "SendToEth", data);
        return promise.then((data) => MsgSendToEthResponse.decode(new BinaryReader(data)));
    }
    RequestBatch(request) {
        const data = MsgRequestBatch.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Msg", "RequestBatch", data);
        return promise.then((data) => MsgRequestBatchResponse.decode(new BinaryReader(data)));
    }
    ConfirmBatch(request) {
        const data = MsgConfirmBatch.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Msg", "ConfirmBatch", data);
        return promise.then((data) => MsgConfirmBatchResponse.decode(new BinaryReader(data)));
    }
    ConfirmLogicCall(request) {
        const data = MsgConfirmLogicCall.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Msg", "ConfirmLogicCall", data);
        return promise.then((data) => MsgConfirmLogicCallResponse.decode(new BinaryReader(data)));
    }
    SendToCosmosClaim(request) {
        const data = MsgSendToCosmosClaim.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Msg", "SendToCosmosClaim", data);
        return promise.then((data) => MsgSendToCosmosClaimResponse.decode(new BinaryReader(data)));
    }
    ExecuteIbcAutoForwards(request) {
        const data = MsgExecuteIbcAutoForwards.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Msg", "ExecuteIbcAutoForwards", data);
        return promise.then((data) => MsgExecuteIbcAutoForwardsResponse.decode(new BinaryReader(data)));
    }
    BatchSendToEthClaim(request) {
        const data = MsgBatchSendToEthClaim.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Msg", "BatchSendToEthClaim", data);
        return promise.then((data) => MsgBatchSendToEthClaimResponse.decode(new BinaryReader(data)));
    }
    ValsetUpdateClaim(request) {
        const data = MsgValsetUpdatedClaim.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Msg", "ValsetUpdateClaim", data);
        return promise.then((data) => MsgValsetUpdatedClaimResponse.decode(new BinaryReader(data)));
    }
    ERC20DeployedClaim(request) {
        const data = MsgERC20DeployedClaim.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Msg", "ERC20DeployedClaim", data);
        return promise.then((data) => MsgERC20DeployedClaimResponse.decode(new BinaryReader(data)));
    }
    LogicCallExecutedClaim(request) {
        const data = MsgLogicCallExecutedClaim.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Msg", "LogicCallExecutedClaim", data);
        return promise.then((data) => MsgLogicCallExecutedClaimResponse.decode(new BinaryReader(data)));
    }
    SetOrchestratorAddress(request) {
        const data = MsgSetOrchestratorAddress.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Msg", "SetOrchestratorAddress", data);
        return promise.then((data) => MsgSetOrchestratorAddressResponse.decode(new BinaryReader(data)));
    }
    CancelSendToEth(request) {
        const data = MsgCancelSendToEth.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Msg", "CancelSendToEth", data);
        return promise.then((data) => MsgCancelSendToEthResponse.decode(new BinaryReader(data)));
    }
    SubmitBadSignatureEvidence(request) {
        const data = MsgSubmitBadSignatureEvidence.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Msg", "SubmitBadSignatureEvidence", data);
        return promise.then((data) => MsgSubmitBadSignatureEvidenceResponse.decode(new BinaryReader(data)));
    }
}
