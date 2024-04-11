"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventOutgoingBatch = exports.EventOutgoingBatchCanceled = exports.OutgoingLogicCall = exports.OutgoingTransferTx = exports.OutgoingTxBatch = exports.protobufPackage = void 0;
/* eslint-disable */
const binary_1 = require("cosmjs-types/binary");
const attestation_1 = require("./attestation");
const helpers_1 = require("./helpers");
exports.protobufPackage = "gravity.v1";
function createBaseOutgoingTxBatch() {
    return {
        batchNonce: BigInt(0),
        batchTimeout: BigInt(0),
        transactions: [],
        tokenContract: "",
        cosmosBlockCreated: BigInt(0),
    };
}
exports.OutgoingTxBatch = {
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.batchNonce !== BigInt(0)) {
            writer.uint32(8).uint64(message.batchNonce);
        }
        if (message.batchTimeout !== BigInt(0)) {
            writer.uint32(16).uint64(message.batchTimeout);
        }
        for (const v of message.transactions) {
            exports.OutgoingTransferTx.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.tokenContract !== "") {
            writer.uint32(34).string(message.tokenContract);
        }
        if (message.cosmosBlockCreated !== BigInt(0)) {
            writer.uint32(40).uint64(message.cosmosBlockCreated);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOutgoingTxBatch();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.batchNonce = reader.uint64();
                    break;
                case 2:
                    message.batchTimeout = reader.uint64();
                    break;
                case 3:
                    message.transactions.push(exports.OutgoingTransferTx.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.tokenContract = reader.string();
                    break;
                case 5:
                    message.cosmosBlockCreated = reader.uint64();
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
            batchNonce: (0, helpers_1.isSet)(object.batchNonce)
                ? BigInt(object.batchNonce)
                : BigInt(0),
            batchTimeout: (0, helpers_1.isSet)(object.batchTimeout)
                ? BigInt(object.batchTimeout)
                : BigInt(0),
            transactions: Array.isArray(object === null || object === void 0 ? void 0 : object.transactions)
                ? object.transactions.map((e) => exports.OutgoingTransferTx.fromJSON(e))
                : [],
            tokenContract: (0, helpers_1.isSet)(object.tokenContract)
                ? String(object.tokenContract)
                : "",
            cosmosBlockCreated: (0, helpers_1.isSet)(object.cosmosBlockCreated)
                ? BigInt(object.cosmosBlockCreated)
                : BigInt(0),
        };
    },
    toJSON(message) {
        const obj = {};
        message.batchNonce !== undefined &&
            (obj.batchNonce = (message.batchNonce || BigInt(0)).toString());
        message.batchTimeout !== undefined &&
            (obj.batchTimeout = (message.batchTimeout || BigInt(0)).toString());
        if (message.transactions) {
            obj.transactions = message.transactions.map((e) => e ? exports.OutgoingTransferTx.toJSON(e) : undefined);
        }
        else {
            obj.transactions = [];
        }
        message.tokenContract !== undefined &&
            (obj.tokenContract = message.tokenContract);
        message.cosmosBlockCreated !== undefined &&
            (obj.cosmosBlockCreated = (message.cosmosBlockCreated || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseOutgoingTxBatch();
        message.batchNonce =
            object.batchNonce !== undefined && object.batchNonce !== null
                ? BigInt(object.batchNonce)
                : BigInt(0);
        message.batchTimeout =
            object.batchTimeout !== undefined && object.batchTimeout !== null
                ? BigInt(object.batchTimeout)
                : BigInt(0);
        message.transactions =
            ((_a = object.transactions) === null || _a === void 0 ? void 0 : _a.map((e) => exports.OutgoingTransferTx.fromPartial(e))) || [];
        message.tokenContract = (_b = object.tokenContract) !== null && _b !== void 0 ? _b : "";
        message.cosmosBlockCreated =
            object.cosmosBlockCreated !== undefined &&
                object.cosmosBlockCreated !== null
                ? BigInt(object.cosmosBlockCreated)
                : BigInt(0);
        return message;
    },
};
function createBaseOutgoingTransferTx() {
    return {
        id: BigInt(0),
        sender: "",
        destAddress: "",
        erc20Token: undefined,
        erc20Fee: undefined,
    };
}
exports.OutgoingTransferTx = {
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.id !== BigInt(0)) {
            writer.uint32(8).uint64(message.id);
        }
        if (message.sender !== "") {
            writer.uint32(18).string(message.sender);
        }
        if (message.destAddress !== "") {
            writer.uint32(26).string(message.destAddress);
        }
        if (message.erc20Token !== undefined) {
            attestation_1.ERC20Token.encode(message.erc20Token, writer.uint32(34).fork()).ldelim();
        }
        if (message.erc20Fee !== undefined) {
            attestation_1.ERC20Token.encode(message.erc20Fee, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOutgoingTransferTx();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint64();
                    break;
                case 2:
                    message.sender = reader.string();
                    break;
                case 3:
                    message.destAddress = reader.string();
                    break;
                case 4:
                    message.erc20Token = attestation_1.ERC20Token.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.erc20Fee = attestation_1.ERC20Token.decode(reader, reader.uint32());
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
            id: (0, helpers_1.isSet)(object.id) ? BigInt(object.id) : BigInt(0),
            sender: (0, helpers_1.isSet)(object.sender) ? String(object.sender) : "",
            destAddress: (0, helpers_1.isSet)(object.destAddress) ? String(object.destAddress) : "",
            erc20Token: (0, helpers_1.isSet)(object.erc20Token)
                ? attestation_1.ERC20Token.fromJSON(object.erc20Token)
                : undefined,
            erc20Fee: (0, helpers_1.isSet)(object.erc20Fee)
                ? attestation_1.ERC20Token.fromJSON(object.erc20Fee)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
        message.sender !== undefined && (obj.sender = message.sender);
        message.destAddress !== undefined &&
            (obj.destAddress = message.destAddress);
        message.erc20Token !== undefined &&
            (obj.erc20Token = message.erc20Token
                ? attestation_1.ERC20Token.toJSON(message.erc20Token)
                : undefined);
        message.erc20Fee !== undefined &&
            (obj.erc20Fee = message.erc20Fee
                ? attestation_1.ERC20Token.toJSON(message.erc20Fee)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseOutgoingTransferTx();
        message.id =
            object.id !== undefined && object.id !== null
                ? BigInt(object.id)
                : BigInt(0);
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : "";
        message.destAddress = (_b = object.destAddress) !== null && _b !== void 0 ? _b : "";
        message.erc20Token =
            object.erc20Token !== undefined && object.erc20Token !== null
                ? attestation_1.ERC20Token.fromPartial(object.erc20Token)
                : undefined;
        message.erc20Fee =
            object.erc20Fee !== undefined && object.erc20Fee !== null
                ? attestation_1.ERC20Token.fromPartial(object.erc20Fee)
                : undefined;
        return message;
    },
};
function createBaseOutgoingLogicCall() {
    return {
        transfers: [],
        fees: [],
        logicContractAddress: "",
        payload: new Uint8Array(),
        timeout: BigInt(0),
        invalidationId: new Uint8Array(),
        invalidationNonce: BigInt(0),
        cosmosBlockCreated: BigInt(0),
    };
}
exports.OutgoingLogicCall = {
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.transfers) {
            attestation_1.ERC20Token.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.fees) {
            attestation_1.ERC20Token.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.logicContractAddress !== "") {
            writer.uint32(26).string(message.logicContractAddress);
        }
        if (message.payload.length !== 0) {
            writer.uint32(34).bytes(message.payload);
        }
        if (message.timeout !== BigInt(0)) {
            writer.uint32(40).uint64(message.timeout);
        }
        if (message.invalidationId.length !== 0) {
            writer.uint32(50).bytes(message.invalidationId);
        }
        if (message.invalidationNonce !== BigInt(0)) {
            writer.uint32(56).uint64(message.invalidationNonce);
        }
        if (message.cosmosBlockCreated !== BigInt(0)) {
            writer.uint32(64).uint64(message.cosmosBlockCreated);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOutgoingLogicCall();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.transfers.push(attestation_1.ERC20Token.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.fees.push(attestation_1.ERC20Token.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.logicContractAddress = reader.string();
                    break;
                case 4:
                    message.payload = reader.bytes();
                    break;
                case 5:
                    message.timeout = reader.uint64();
                    break;
                case 6:
                    message.invalidationId = reader.bytes();
                    break;
                case 7:
                    message.invalidationNonce = reader.uint64();
                    break;
                case 8:
                    message.cosmosBlockCreated = reader.uint64();
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
            transfers: Array.isArray(object === null || object === void 0 ? void 0 : object.transfers)
                ? object.transfers.map((e) => attestation_1.ERC20Token.fromJSON(e))
                : [],
            fees: Array.isArray(object === null || object === void 0 ? void 0 : object.fees)
                ? object.fees.map((e) => attestation_1.ERC20Token.fromJSON(e))
                : [],
            logicContractAddress: (0, helpers_1.isSet)(object.logicContractAddress)
                ? String(object.logicContractAddress)
                : "",
            payload: (0, helpers_1.isSet)(object.payload)
                ? (0, helpers_1.bytesFromBase64)(object.payload)
                : new Uint8Array(),
            timeout: (0, helpers_1.isSet)(object.timeout) ? BigInt(object.timeout) : BigInt(0),
            invalidationId: (0, helpers_1.isSet)(object.invalidationId)
                ? (0, helpers_1.bytesFromBase64)(object.invalidationId)
                : new Uint8Array(),
            invalidationNonce: (0, helpers_1.isSet)(object.invalidationNonce)
                ? BigInt(object.invalidationNonce)
                : BigInt(0),
            cosmosBlockCreated: (0, helpers_1.isSet)(object.cosmosBlockCreated)
                ? BigInt(object.cosmosBlockCreated)
                : BigInt(0),
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.transfers) {
            obj.transfers = message.transfers.map((e) => e ? attestation_1.ERC20Token.toJSON(e) : undefined);
        }
        else {
            obj.transfers = [];
        }
        if (message.fees) {
            obj.fees = message.fees.map((e) => e ? attestation_1.ERC20Token.toJSON(e) : undefined);
        }
        else {
            obj.fees = [];
        }
        message.logicContractAddress !== undefined &&
            (obj.logicContractAddress = message.logicContractAddress);
        message.payload !== undefined &&
            (obj.payload = (0, helpers_1.base64FromBytes)(message.payload !== undefined ? message.payload : new Uint8Array()));
        message.timeout !== undefined &&
            (obj.timeout = (message.timeout || BigInt(0)).toString());
        message.invalidationId !== undefined &&
            (obj.invalidationId = (0, helpers_1.base64FromBytes)(message.invalidationId !== undefined
                ? message.invalidationId
                : new Uint8Array()));
        message.invalidationNonce !== undefined &&
            (obj.invalidationNonce = (message.invalidationNonce || BigInt(0)).toString());
        message.cosmosBlockCreated !== undefined &&
            (obj.cosmosBlockCreated = (message.cosmosBlockCreated || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseOutgoingLogicCall();
        message.transfers =
            ((_a = object.transfers) === null || _a === void 0 ? void 0 : _a.map((e) => attestation_1.ERC20Token.fromPartial(e))) || [];
        message.fees = ((_b = object.fees) === null || _b === void 0 ? void 0 : _b.map((e) => attestation_1.ERC20Token.fromPartial(e))) || [];
        message.logicContractAddress = (_c = object.logicContractAddress) !== null && _c !== void 0 ? _c : "";
        message.payload = (_d = object.payload) !== null && _d !== void 0 ? _d : new Uint8Array();
        message.timeout =
            object.timeout !== undefined && object.timeout !== null
                ? BigInt(object.timeout)
                : BigInt(0);
        message.invalidationId = (_e = object.invalidationId) !== null && _e !== void 0 ? _e : new Uint8Array();
        message.invalidationNonce =
            object.invalidationNonce !== undefined &&
                object.invalidationNonce !== null
                ? BigInt(object.invalidationNonce)
                : BigInt(0);
        message.cosmosBlockCreated =
            object.cosmosBlockCreated !== undefined &&
                object.cosmosBlockCreated !== null
                ? BigInt(object.cosmosBlockCreated)
                : BigInt(0);
        return message;
    },
};
function createBaseEventOutgoingBatchCanceled() {
    return {
        bridgeContract: "",
        bridgeChainId: "",
        batchId: "",
        nonce: "",
    };
}
exports.EventOutgoingBatchCanceled = {
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.bridgeContract !== "") {
            writer.uint32(10).string(message.bridgeContract);
        }
        if (message.bridgeChainId !== "") {
            writer.uint32(18).string(message.bridgeChainId);
        }
        if (message.batchId !== "") {
            writer.uint32(26).string(message.batchId);
        }
        if (message.nonce !== "") {
            writer.uint32(34).string(message.nonce);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventOutgoingBatchCanceled();
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
                    message.batchId = reader.string();
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
            bridgeContract: (0, helpers_1.isSet)(object.bridgeContract)
                ? String(object.bridgeContract)
                : "",
            bridgeChainId: (0, helpers_1.isSet)(object.bridgeChainId)
                ? String(object.bridgeChainId)
                : "",
            batchId: (0, helpers_1.isSet)(object.batchId) ? String(object.batchId) : "",
            nonce: (0, helpers_1.isSet)(object.nonce) ? String(object.nonce) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.bridgeContract !== undefined &&
            (obj.bridgeContract = message.bridgeContract);
        message.bridgeChainId !== undefined &&
            (obj.bridgeChainId = message.bridgeChainId);
        message.batchId !== undefined && (obj.batchId = message.batchId);
        message.nonce !== undefined && (obj.nonce = message.nonce);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseEventOutgoingBatchCanceled();
        message.bridgeContract = (_a = object.bridgeContract) !== null && _a !== void 0 ? _a : "";
        message.bridgeChainId = (_b = object.bridgeChainId) !== null && _b !== void 0 ? _b : "";
        message.batchId = (_c = object.batchId) !== null && _c !== void 0 ? _c : "";
        message.nonce = (_d = object.nonce) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
function createBaseEventOutgoingBatch() {
    return {
        bridgeContract: "",
        bridgeChainId: "",
        batchId: "",
        nonce: "",
    };
}
exports.EventOutgoingBatch = {
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.bridgeContract !== "") {
            writer.uint32(10).string(message.bridgeContract);
        }
        if (message.bridgeChainId !== "") {
            writer.uint32(18).string(message.bridgeChainId);
        }
        if (message.batchId !== "") {
            writer.uint32(26).string(message.batchId);
        }
        if (message.nonce !== "") {
            writer.uint32(34).string(message.nonce);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventOutgoingBatch();
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
                    message.batchId = reader.string();
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
            bridgeContract: (0, helpers_1.isSet)(object.bridgeContract)
                ? String(object.bridgeContract)
                : "",
            bridgeChainId: (0, helpers_1.isSet)(object.bridgeChainId)
                ? String(object.bridgeChainId)
                : "",
            batchId: (0, helpers_1.isSet)(object.batchId) ? String(object.batchId) : "",
            nonce: (0, helpers_1.isSet)(object.nonce) ? String(object.nonce) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.bridgeContract !== undefined &&
            (obj.bridgeContract = message.bridgeContract);
        message.bridgeChainId !== undefined &&
            (obj.bridgeChainId = message.bridgeChainId);
        message.batchId !== undefined && (obj.batchId = message.batchId);
        message.nonce !== undefined && (obj.nonce = message.nonce);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseEventOutgoingBatch();
        message.bridgeContract = (_a = object.bridgeContract) !== null && _a !== void 0 ? _a : "";
        message.bridgeChainId = (_b = object.bridgeChainId) !== null && _b !== void 0 ? _b : "";
        message.batchId = (_c = object.batchId) !== null && _c !== void 0 ? _c : "";
        message.nonce = (_d = object.nonce) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
