"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GravityNonces = exports.GenesisState = exports.Params = exports.protobufPackage = void 0;
/* eslint-disable */
const coin_1 = require("cosmjs-types/cosmos/base/v1beta1/coin");
const _m0 = __importStar(require("protobufjs/minimal"));
const attestation_1 = require("./attestation");
const batch_1 = require("./batch");
const helpers_1 = require("./helpers");
const msgs_1 = require("./msgs");
const types_1 = require("./types");
exports.protobufPackage = "gravity.v1";
function createBaseParams() {
    return {
        gravityId: "",
        contractSourceHash: "",
        bridgeEthereumAddress: "",
        bridgeChainId: helpers_1.Long.UZERO,
        signedValsetsWindow: helpers_1.Long.UZERO,
        signedBatchesWindow: helpers_1.Long.UZERO,
        signedLogicCallsWindow: helpers_1.Long.UZERO,
        targetBatchTimeout: helpers_1.Long.UZERO,
        averageBlockTime: helpers_1.Long.UZERO,
        averageEthereumBlockTime: helpers_1.Long.UZERO,
        slashFractionValset: new Uint8Array(),
        slashFractionBatch: new Uint8Array(),
        slashFractionLogicCall: new Uint8Array(),
        unbondSlashingValsetsWindow: helpers_1.Long.UZERO,
        slashFractionBadEthSignature: new Uint8Array(),
        valsetReward: undefined,
        bridgeActive: false,
        ethereumBlacklist: [],
        minChainFeeBasisPoints: helpers_1.Long.UZERO,
    };
}
exports.Params = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.gravityId !== "") {
            writer.uint32(10).string(message.gravityId);
        }
        if (message.contractSourceHash !== "") {
            writer.uint32(18).string(message.contractSourceHash);
        }
        if (message.bridgeEthereumAddress !== "") {
            writer.uint32(34).string(message.bridgeEthereumAddress);
        }
        if (!message.bridgeChainId.isZero()) {
            writer.uint32(40).uint64(message.bridgeChainId);
        }
        if (!message.signedValsetsWindow.isZero()) {
            writer.uint32(48).uint64(message.signedValsetsWindow);
        }
        if (!message.signedBatchesWindow.isZero()) {
            writer.uint32(56).uint64(message.signedBatchesWindow);
        }
        if (!message.signedLogicCallsWindow.isZero()) {
            writer.uint32(64).uint64(message.signedLogicCallsWindow);
        }
        if (!message.targetBatchTimeout.isZero()) {
            writer.uint32(72).uint64(message.targetBatchTimeout);
        }
        if (!message.averageBlockTime.isZero()) {
            writer.uint32(80).uint64(message.averageBlockTime);
        }
        if (!message.averageEthereumBlockTime.isZero()) {
            writer.uint32(88).uint64(message.averageEthereumBlockTime);
        }
        if (message.slashFractionValset.length !== 0) {
            writer.uint32(98).bytes(message.slashFractionValset);
        }
        if (message.slashFractionBatch.length !== 0) {
            writer.uint32(106).bytes(message.slashFractionBatch);
        }
        if (message.slashFractionLogicCall.length !== 0) {
            writer.uint32(114).bytes(message.slashFractionLogicCall);
        }
        if (!message.unbondSlashingValsetsWindow.isZero()) {
            writer.uint32(120).uint64(message.unbondSlashingValsetsWindow);
        }
        if (message.slashFractionBadEthSignature.length !== 0) {
            writer.uint32(130).bytes(message.slashFractionBadEthSignature);
        }
        if (message.valsetReward !== undefined) {
            coin_1.Coin.encode(message.valsetReward, writer.uint32(138).fork()).ldelim();
        }
        if (message.bridgeActive === true) {
            writer.uint32(144).bool(message.bridgeActive);
        }
        for (const v of message.ethereumBlacklist) {
            writer.uint32(154).string(v);
        }
        if (!message.minChainFeeBasisPoints.isZero()) {
            writer.uint32(160).uint64(message.minChainFeeBasisPoints);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.gravityId = reader.string();
                    break;
                case 2:
                    message.contractSourceHash = reader.string();
                    break;
                case 4:
                    message.bridgeEthereumAddress = reader.string();
                    break;
                case 5:
                    message.bridgeChainId = reader.uint64();
                    break;
                case 6:
                    message.signedValsetsWindow = reader.uint64();
                    break;
                case 7:
                    message.signedBatchesWindow = reader.uint64();
                    break;
                case 8:
                    message.signedLogicCallsWindow = reader.uint64();
                    break;
                case 9:
                    message.targetBatchTimeout = reader.uint64();
                    break;
                case 10:
                    message.averageBlockTime = reader.uint64();
                    break;
                case 11:
                    message.averageEthereumBlockTime = reader.uint64();
                    break;
                case 12:
                    message.slashFractionValset = reader.bytes();
                    break;
                case 13:
                    message.slashFractionBatch = reader.bytes();
                    break;
                case 14:
                    message.slashFractionLogicCall = reader.bytes();
                    break;
                case 15:
                    message.unbondSlashingValsetsWindow = reader.uint64();
                    break;
                case 16:
                    message.slashFractionBadEthSignature = reader.bytes();
                    break;
                case 17:
                    message.valsetReward = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 18:
                    message.bridgeActive = reader.bool();
                    break;
                case 19:
                    message.ethereumBlacklist.push(reader.string());
                    break;
                case 20:
                    message.minChainFeeBasisPoints = reader.uint64();
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
            gravityId: (0, helpers_1.isSet)(object.gravityId) ? String(object.gravityId) : "",
            contractSourceHash: (0, helpers_1.isSet)(object.contractSourceHash)
                ? String(object.contractSourceHash)
                : "",
            bridgeEthereumAddress: (0, helpers_1.isSet)(object.bridgeEthereumAddress)
                ? String(object.bridgeEthereumAddress)
                : "",
            bridgeChainId: (0, helpers_1.isSet)(object.bridgeChainId)
                ? helpers_1.Long.fromValue(object.bridgeChainId)
                : helpers_1.Long.UZERO,
            signedValsetsWindow: (0, helpers_1.isSet)(object.signedValsetsWindow)
                ? helpers_1.Long.fromValue(object.signedValsetsWindow)
                : helpers_1.Long.UZERO,
            signedBatchesWindow: (0, helpers_1.isSet)(object.signedBatchesWindow)
                ? helpers_1.Long.fromValue(object.signedBatchesWindow)
                : helpers_1.Long.UZERO,
            signedLogicCallsWindow: (0, helpers_1.isSet)(object.signedLogicCallsWindow)
                ? helpers_1.Long.fromValue(object.signedLogicCallsWindow)
                : helpers_1.Long.UZERO,
            targetBatchTimeout: (0, helpers_1.isSet)(object.targetBatchTimeout)
                ? helpers_1.Long.fromValue(object.targetBatchTimeout)
                : helpers_1.Long.UZERO,
            averageBlockTime: (0, helpers_1.isSet)(object.averageBlockTime)
                ? helpers_1.Long.fromValue(object.averageBlockTime)
                : helpers_1.Long.UZERO,
            averageEthereumBlockTime: (0, helpers_1.isSet)(object.averageEthereumBlockTime)
                ? helpers_1.Long.fromValue(object.averageEthereumBlockTime)
                : helpers_1.Long.UZERO,
            slashFractionValset: (0, helpers_1.isSet)(object.slashFractionValset)
                ? (0, helpers_1.bytesFromBase64)(object.slashFractionValset)
                : new Uint8Array(),
            slashFractionBatch: (0, helpers_1.isSet)(object.slashFractionBatch)
                ? (0, helpers_1.bytesFromBase64)(object.slashFractionBatch)
                : new Uint8Array(),
            slashFractionLogicCall: (0, helpers_1.isSet)(object.slashFractionLogicCall)
                ? (0, helpers_1.bytesFromBase64)(object.slashFractionLogicCall)
                : new Uint8Array(),
            unbondSlashingValsetsWindow: (0, helpers_1.isSet)(object.unbondSlashingValsetsWindow)
                ? helpers_1.Long.fromValue(object.unbondSlashingValsetsWindow)
                : helpers_1.Long.UZERO,
            slashFractionBadEthSignature: (0, helpers_1.isSet)(object.slashFractionBadEthSignature)
                ? (0, helpers_1.bytesFromBase64)(object.slashFractionBadEthSignature)
                : new Uint8Array(),
            valsetReward: (0, helpers_1.isSet)(object.valsetReward)
                ? coin_1.Coin.fromJSON(object.valsetReward)
                : undefined,
            bridgeActive: (0, helpers_1.isSet)(object.bridgeActive)
                ? Boolean(object.bridgeActive)
                : false,
            ethereumBlacklist: Array.isArray(object === null || object === void 0 ? void 0 : object.ethereumBlacklist)
                ? object.ethereumBlacklist.map((e) => String(e))
                : [],
            minChainFeeBasisPoints: (0, helpers_1.isSet)(object.minChainFeeBasisPoints)
                ? helpers_1.Long.fromValue(object.minChainFeeBasisPoints)
                : helpers_1.Long.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.gravityId !== undefined && (obj.gravityId = message.gravityId);
        message.contractSourceHash !== undefined &&
            (obj.contractSourceHash = message.contractSourceHash);
        message.bridgeEthereumAddress !== undefined &&
            (obj.bridgeEthereumAddress = message.bridgeEthereumAddress);
        message.bridgeChainId !== undefined &&
            (obj.bridgeChainId = (message.bridgeChainId || helpers_1.Long.UZERO).toString());
        message.signedValsetsWindow !== undefined &&
            (obj.signedValsetsWindow = (message.signedValsetsWindow || helpers_1.Long.UZERO).toString());
        message.signedBatchesWindow !== undefined &&
            (obj.signedBatchesWindow = (message.signedBatchesWindow || helpers_1.Long.UZERO).toString());
        message.signedLogicCallsWindow !== undefined &&
            (obj.signedLogicCallsWindow = (message.signedLogicCallsWindow || helpers_1.Long.UZERO).toString());
        message.targetBatchTimeout !== undefined &&
            (obj.targetBatchTimeout = (message.targetBatchTimeout || helpers_1.Long.UZERO).toString());
        message.averageBlockTime !== undefined &&
            (obj.averageBlockTime = (message.averageBlockTime || helpers_1.Long.UZERO).toString());
        message.averageEthereumBlockTime !== undefined &&
            (obj.averageEthereumBlockTime = (message.averageEthereumBlockTime || helpers_1.Long.UZERO).toString());
        message.slashFractionValset !== undefined &&
            (obj.slashFractionValset = (0, helpers_1.base64FromBytes)(message.slashFractionValset !== undefined
                ? message.slashFractionValset
                : new Uint8Array()));
        message.slashFractionBatch !== undefined &&
            (obj.slashFractionBatch = (0, helpers_1.base64FromBytes)(message.slashFractionBatch !== undefined
                ? message.slashFractionBatch
                : new Uint8Array()));
        message.slashFractionLogicCall !== undefined &&
            (obj.slashFractionLogicCall = (0, helpers_1.base64FromBytes)(message.slashFractionLogicCall !== undefined
                ? message.slashFractionLogicCall
                : new Uint8Array()));
        message.unbondSlashingValsetsWindow !== undefined &&
            (obj.unbondSlashingValsetsWindow = (message.unbondSlashingValsetsWindow || helpers_1.Long.UZERO).toString());
        message.slashFractionBadEthSignature !== undefined &&
            (obj.slashFractionBadEthSignature = (0, helpers_1.base64FromBytes)(message.slashFractionBadEthSignature !== undefined
                ? message.slashFractionBadEthSignature
                : new Uint8Array()));
        message.valsetReward !== undefined &&
            (obj.valsetReward = message.valsetReward
                ? coin_1.Coin.toJSON(message.valsetReward)
                : undefined);
        message.bridgeActive !== undefined &&
            (obj.bridgeActive = message.bridgeActive);
        if (message.ethereumBlacklist) {
            obj.ethereumBlacklist = message.ethereumBlacklist.map((e) => e);
        }
        else {
            obj.ethereumBlacklist = [];
        }
        message.minChainFeeBasisPoints !== undefined &&
            (obj.minChainFeeBasisPoints = (message.minChainFeeBasisPoints || helpers_1.Long.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const message = createBaseParams();
        message.gravityId = (_a = object.gravityId) !== null && _a !== void 0 ? _a : "";
        message.contractSourceHash = (_b = object.contractSourceHash) !== null && _b !== void 0 ? _b : "";
        message.bridgeEthereumAddress = (_c = object.bridgeEthereumAddress) !== null && _c !== void 0 ? _c : "";
        message.bridgeChainId =
            object.bridgeChainId !== undefined && object.bridgeChainId !== null
                ? helpers_1.Long.fromValue(object.bridgeChainId)
                : helpers_1.Long.UZERO;
        message.signedValsetsWindow =
            object.signedValsetsWindow !== undefined &&
                object.signedValsetsWindow !== null
                ? helpers_1.Long.fromValue(object.signedValsetsWindow)
                : helpers_1.Long.UZERO;
        message.signedBatchesWindow =
            object.signedBatchesWindow !== undefined &&
                object.signedBatchesWindow !== null
                ? helpers_1.Long.fromValue(object.signedBatchesWindow)
                : helpers_1.Long.UZERO;
        message.signedLogicCallsWindow =
            object.signedLogicCallsWindow !== undefined &&
                object.signedLogicCallsWindow !== null
                ? helpers_1.Long.fromValue(object.signedLogicCallsWindow)
                : helpers_1.Long.UZERO;
        message.targetBatchTimeout =
            object.targetBatchTimeout !== undefined &&
                object.targetBatchTimeout !== null
                ? helpers_1.Long.fromValue(object.targetBatchTimeout)
                : helpers_1.Long.UZERO;
        message.averageBlockTime =
            object.averageBlockTime !== undefined && object.averageBlockTime !== null
                ? helpers_1.Long.fromValue(object.averageBlockTime)
                : helpers_1.Long.UZERO;
        message.averageEthereumBlockTime =
            object.averageEthereumBlockTime !== undefined &&
                object.averageEthereumBlockTime !== null
                ? helpers_1.Long.fromValue(object.averageEthereumBlockTime)
                : helpers_1.Long.UZERO;
        message.slashFractionValset =
            (_d = object.slashFractionValset) !== null && _d !== void 0 ? _d : new Uint8Array();
        message.slashFractionBatch = (_e = object.slashFractionBatch) !== null && _e !== void 0 ? _e : new Uint8Array();
        message.slashFractionLogicCall =
            (_f = object.slashFractionLogicCall) !== null && _f !== void 0 ? _f : new Uint8Array();
        message.unbondSlashingValsetsWindow =
            object.unbondSlashingValsetsWindow !== undefined &&
                object.unbondSlashingValsetsWindow !== null
                ? helpers_1.Long.fromValue(object.unbondSlashingValsetsWindow)
                : helpers_1.Long.UZERO;
        message.slashFractionBadEthSignature =
            (_g = object.slashFractionBadEthSignature) !== null && _g !== void 0 ? _g : new Uint8Array();
        message.valsetReward =
            object.valsetReward !== undefined && object.valsetReward !== null
                ? coin_1.Coin.fromPartial(object.valsetReward)
                : undefined;
        message.bridgeActive = (_h = object.bridgeActive) !== null && _h !== void 0 ? _h : false;
        message.ethereumBlacklist = ((_j = object.ethereumBlacklist) === null || _j === void 0 ? void 0 : _j.map((e) => e)) || [];
        message.minChainFeeBasisPoints =
            object.minChainFeeBasisPoints !== undefined &&
                object.minChainFeeBasisPoints !== null
                ? helpers_1.Long.fromValue(object.minChainFeeBasisPoints)
                : helpers_1.Long.UZERO;
        return message;
    },
};
function createBaseGenesisState() {
    return {
        params: undefined,
        gravityNonces: undefined,
        valsets: [],
        valsetConfirms: [],
        batches: [],
        batchConfirms: [],
        logicCalls: [],
        logicCallConfirms: [],
        attestations: [],
        delegateKeys: [],
        erc20ToDenoms: [],
        unbatchedTransfers: [],
        pendingIbcAutoForwards: [],
    };
}
exports.GenesisState = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.params !== undefined) {
            exports.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        if (message.gravityNonces !== undefined) {
            exports.GravityNonces.encode(message.gravityNonces, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.valsets) {
            types_1.Valset.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.valsetConfirms) {
            msgs_1.MsgValsetConfirm.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.batches) {
            batch_1.OutgoingTxBatch.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.batchConfirms) {
            msgs_1.MsgConfirmBatch.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.logicCalls) {
            batch_1.OutgoingLogicCall.encode(v, writer.uint32(58).fork()).ldelim();
        }
        for (const v of message.logicCallConfirms) {
            msgs_1.MsgConfirmLogicCall.encode(v, writer.uint32(66).fork()).ldelim();
        }
        for (const v of message.attestations) {
            attestation_1.Attestation.encode(v, writer.uint32(74).fork()).ldelim();
        }
        for (const v of message.delegateKeys) {
            msgs_1.MsgSetOrchestratorAddress.encode(v, writer.uint32(82).fork()).ldelim();
        }
        for (const v of message.erc20ToDenoms) {
            types_1.ERC20ToDenom.encode(v, writer.uint32(90).fork()).ldelim();
        }
        for (const v of message.unbatchedTransfers) {
            batch_1.OutgoingTransferTx.encode(v, writer.uint32(98).fork()).ldelim();
        }
        for (const v of message.pendingIbcAutoForwards) {
            types_1.PendingIbcAutoForward.encode(v, writer.uint32(106).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = exports.Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.gravityNonces = exports.GravityNonces.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.valsets.push(types_1.Valset.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.valsetConfirms.push(msgs_1.MsgValsetConfirm.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.batches.push(batch_1.OutgoingTxBatch.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.batchConfirms.push(msgs_1.MsgConfirmBatch.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.logicCalls.push(batch_1.OutgoingLogicCall.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.logicCallConfirms.push(msgs_1.MsgConfirmLogicCall.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.attestations.push(attestation_1.Attestation.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.delegateKeys.push(msgs_1.MsgSetOrchestratorAddress.decode(reader, reader.uint32()));
                    break;
                case 11:
                    message.erc20ToDenoms.push(types_1.ERC20ToDenom.decode(reader, reader.uint32()));
                    break;
                case 12:
                    message.unbatchedTransfers.push(batch_1.OutgoingTransferTx.decode(reader, reader.uint32()));
                    break;
                case 13:
                    message.pendingIbcAutoForwards.push(types_1.PendingIbcAutoForward.decode(reader, reader.uint32()));
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
            params: (0, helpers_1.isSet)(object.params) ? exports.Params.fromJSON(object.params) : undefined,
            gravityNonces: (0, helpers_1.isSet)(object.gravityNonces)
                ? exports.GravityNonces.fromJSON(object.gravityNonces)
                : undefined,
            valsets: Array.isArray(object === null || object === void 0 ? void 0 : object.valsets)
                ? object.valsets.map((e) => types_1.Valset.fromJSON(e))
                : [],
            valsetConfirms: Array.isArray(object === null || object === void 0 ? void 0 : object.valsetConfirms)
                ? object.valsetConfirms.map((e) => msgs_1.MsgValsetConfirm.fromJSON(e))
                : [],
            batches: Array.isArray(object === null || object === void 0 ? void 0 : object.batches)
                ? object.batches.map((e) => batch_1.OutgoingTxBatch.fromJSON(e))
                : [],
            batchConfirms: Array.isArray(object === null || object === void 0 ? void 0 : object.batchConfirms)
                ? object.batchConfirms.map((e) => msgs_1.MsgConfirmBatch.fromJSON(e))
                : [],
            logicCalls: Array.isArray(object === null || object === void 0 ? void 0 : object.logicCalls)
                ? object.logicCalls.map((e) => batch_1.OutgoingLogicCall.fromJSON(e))
                : [],
            logicCallConfirms: Array.isArray(object === null || object === void 0 ? void 0 : object.logicCallConfirms)
                ? object.logicCallConfirms.map((e) => msgs_1.MsgConfirmLogicCall.fromJSON(e))
                : [],
            attestations: Array.isArray(object === null || object === void 0 ? void 0 : object.attestations)
                ? object.attestations.map((e) => attestation_1.Attestation.fromJSON(e))
                : [],
            delegateKeys: Array.isArray(object === null || object === void 0 ? void 0 : object.delegateKeys)
                ? object.delegateKeys.map((e) => msgs_1.MsgSetOrchestratorAddress.fromJSON(e))
                : [],
            erc20ToDenoms: Array.isArray(object === null || object === void 0 ? void 0 : object.erc20ToDenoms)
                ? object.erc20ToDenoms.map((e) => types_1.ERC20ToDenom.fromJSON(e))
                : [],
            unbatchedTransfers: Array.isArray(object === null || object === void 0 ? void 0 : object.unbatchedTransfers)
                ? object.unbatchedTransfers.map((e) => batch_1.OutgoingTransferTx.fromJSON(e))
                : [],
            pendingIbcAutoForwards: Array.isArray(object === null || object === void 0 ? void 0 : object.pendingIbcAutoForwards)
                ? object.pendingIbcAutoForwards.map((e) => types_1.PendingIbcAutoForward.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined &&
            (obj.params = message.params ? exports.Params.toJSON(message.params) : undefined);
        message.gravityNonces !== undefined &&
            (obj.gravityNonces = message.gravityNonces
                ? exports.GravityNonces.toJSON(message.gravityNonces)
                : undefined);
        if (message.valsets) {
            obj.valsets = message.valsets.map((e) => e ? types_1.Valset.toJSON(e) : undefined);
        }
        else {
            obj.valsets = [];
        }
        if (message.valsetConfirms) {
            obj.valsetConfirms = message.valsetConfirms.map((e) => e ? msgs_1.MsgValsetConfirm.toJSON(e) : undefined);
        }
        else {
            obj.valsetConfirms = [];
        }
        if (message.batches) {
            obj.batches = message.batches.map((e) => e ? batch_1.OutgoingTxBatch.toJSON(e) : undefined);
        }
        else {
            obj.batches = [];
        }
        if (message.batchConfirms) {
            obj.batchConfirms = message.batchConfirms.map((e) => e ? msgs_1.MsgConfirmBatch.toJSON(e) : undefined);
        }
        else {
            obj.batchConfirms = [];
        }
        if (message.logicCalls) {
            obj.logicCalls = message.logicCalls.map((e) => e ? batch_1.OutgoingLogicCall.toJSON(e) : undefined);
        }
        else {
            obj.logicCalls = [];
        }
        if (message.logicCallConfirms) {
            obj.logicCallConfirms = message.logicCallConfirms.map((e) => e ? msgs_1.MsgConfirmLogicCall.toJSON(e) : undefined);
        }
        else {
            obj.logicCallConfirms = [];
        }
        if (message.attestations) {
            obj.attestations = message.attestations.map((e) => e ? attestation_1.Attestation.toJSON(e) : undefined);
        }
        else {
            obj.attestations = [];
        }
        if (message.delegateKeys) {
            obj.delegateKeys = message.delegateKeys.map((e) => e ? msgs_1.MsgSetOrchestratorAddress.toJSON(e) : undefined);
        }
        else {
            obj.delegateKeys = [];
        }
        if (message.erc20ToDenoms) {
            obj.erc20ToDenoms = message.erc20ToDenoms.map((e) => e ? types_1.ERC20ToDenom.toJSON(e) : undefined);
        }
        else {
            obj.erc20ToDenoms = [];
        }
        if (message.unbatchedTransfers) {
            obj.unbatchedTransfers = message.unbatchedTransfers.map((e) => e ? batch_1.OutgoingTransferTx.toJSON(e) : undefined);
        }
        else {
            obj.unbatchedTransfers = [];
        }
        if (message.pendingIbcAutoForwards) {
            obj.pendingIbcAutoForwards = message.pendingIbcAutoForwards.map((e) => e ? types_1.PendingIbcAutoForward.toJSON(e) : undefined);
        }
        else {
            obj.pendingIbcAutoForwards = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        const message = createBaseGenesisState();
        message.params =
            object.params !== undefined && object.params !== null
                ? exports.Params.fromPartial(object.params)
                : undefined;
        message.gravityNonces =
            object.gravityNonces !== undefined && object.gravityNonces !== null
                ? exports.GravityNonces.fromPartial(object.gravityNonces)
                : undefined;
        message.valsets = ((_a = object.valsets) === null || _a === void 0 ? void 0 : _a.map((e) => types_1.Valset.fromPartial(e))) || [];
        message.valsetConfirms =
            ((_b = object.valsetConfirms) === null || _b === void 0 ? void 0 : _b.map((e) => msgs_1.MsgValsetConfirm.fromPartial(e))) || [];
        message.batches =
            ((_c = object.batches) === null || _c === void 0 ? void 0 : _c.map((e) => batch_1.OutgoingTxBatch.fromPartial(e))) || [];
        message.batchConfirms =
            ((_d = object.batchConfirms) === null || _d === void 0 ? void 0 : _d.map((e) => msgs_1.MsgConfirmBatch.fromPartial(e))) || [];
        message.logicCalls =
            ((_e = object.logicCalls) === null || _e === void 0 ? void 0 : _e.map((e) => batch_1.OutgoingLogicCall.fromPartial(e))) || [];
        message.logicCallConfirms =
            ((_f = object.logicCallConfirms) === null || _f === void 0 ? void 0 : _f.map((e) => msgs_1.MsgConfirmLogicCall.fromPartial(e))) || [];
        message.attestations =
            ((_g = object.attestations) === null || _g === void 0 ? void 0 : _g.map((e) => attestation_1.Attestation.fromPartial(e))) || [];
        message.delegateKeys =
            ((_h = object.delegateKeys) === null || _h === void 0 ? void 0 : _h.map((e) => msgs_1.MsgSetOrchestratorAddress.fromPartial(e))) || [];
        message.erc20ToDenoms =
            ((_j = object.erc20ToDenoms) === null || _j === void 0 ? void 0 : _j.map((e) => types_1.ERC20ToDenom.fromPartial(e))) || [];
        message.unbatchedTransfers =
            ((_k = object.unbatchedTransfers) === null || _k === void 0 ? void 0 : _k.map((e) => batch_1.OutgoingTransferTx.fromPartial(e))) || [];
        message.pendingIbcAutoForwards =
            ((_l = object.pendingIbcAutoForwards) === null || _l === void 0 ? void 0 : _l.map((e) => types_1.PendingIbcAutoForward.fromPartial(e))) || [];
        return message;
    },
};
function createBaseGravityNonces() {
    return {
        latestValsetNonce: helpers_1.Long.UZERO,
        lastObservedNonce: helpers_1.Long.UZERO,
        lastSlashedValsetNonce: helpers_1.Long.UZERO,
        lastSlashedBatchBlock: helpers_1.Long.UZERO,
        lastSlashedLogicCallBlock: helpers_1.Long.UZERO,
        lastTxPoolId: helpers_1.Long.UZERO,
        lastBatchId: helpers_1.Long.UZERO,
    };
}
exports.GravityNonces = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.latestValsetNonce.isZero()) {
            writer.uint32(8).uint64(message.latestValsetNonce);
        }
        if (!message.lastObservedNonce.isZero()) {
            writer.uint32(16).uint64(message.lastObservedNonce);
        }
        if (!message.lastSlashedValsetNonce.isZero()) {
            writer.uint32(24).uint64(message.lastSlashedValsetNonce);
        }
        if (!message.lastSlashedBatchBlock.isZero()) {
            writer.uint32(32).uint64(message.lastSlashedBatchBlock);
        }
        if (!message.lastSlashedLogicCallBlock.isZero()) {
            writer.uint32(40).uint64(message.lastSlashedLogicCallBlock);
        }
        if (!message.lastTxPoolId.isZero()) {
            writer.uint32(48).uint64(message.lastTxPoolId);
        }
        if (!message.lastBatchId.isZero()) {
            writer.uint32(56).uint64(message.lastBatchId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGravityNonces();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.latestValsetNonce = reader.uint64();
                    break;
                case 2:
                    message.lastObservedNonce = reader.uint64();
                    break;
                case 3:
                    message.lastSlashedValsetNonce = reader.uint64();
                    break;
                case 4:
                    message.lastSlashedBatchBlock = reader.uint64();
                    break;
                case 5:
                    message.lastSlashedLogicCallBlock = reader.uint64();
                    break;
                case 6:
                    message.lastTxPoolId = reader.uint64();
                    break;
                case 7:
                    message.lastBatchId = reader.uint64();
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
            latestValsetNonce: (0, helpers_1.isSet)(object.latestValsetNonce)
                ? helpers_1.Long.fromValue(object.latestValsetNonce)
                : helpers_1.Long.UZERO,
            lastObservedNonce: (0, helpers_1.isSet)(object.lastObservedNonce)
                ? helpers_1.Long.fromValue(object.lastObservedNonce)
                : helpers_1.Long.UZERO,
            lastSlashedValsetNonce: (0, helpers_1.isSet)(object.lastSlashedValsetNonce)
                ? helpers_1.Long.fromValue(object.lastSlashedValsetNonce)
                : helpers_1.Long.UZERO,
            lastSlashedBatchBlock: (0, helpers_1.isSet)(object.lastSlashedBatchBlock)
                ? helpers_1.Long.fromValue(object.lastSlashedBatchBlock)
                : helpers_1.Long.UZERO,
            lastSlashedLogicCallBlock: (0, helpers_1.isSet)(object.lastSlashedLogicCallBlock)
                ? helpers_1.Long.fromValue(object.lastSlashedLogicCallBlock)
                : helpers_1.Long.UZERO,
            lastTxPoolId: (0, helpers_1.isSet)(object.lastTxPoolId)
                ? helpers_1.Long.fromValue(object.lastTxPoolId)
                : helpers_1.Long.UZERO,
            lastBatchId: (0, helpers_1.isSet)(object.lastBatchId)
                ? helpers_1.Long.fromValue(object.lastBatchId)
                : helpers_1.Long.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.latestValsetNonce !== undefined &&
            (obj.latestValsetNonce = (message.latestValsetNonce || helpers_1.Long.UZERO).toString());
        message.lastObservedNonce !== undefined &&
            (obj.lastObservedNonce = (message.lastObservedNonce || helpers_1.Long.UZERO).toString());
        message.lastSlashedValsetNonce !== undefined &&
            (obj.lastSlashedValsetNonce = (message.lastSlashedValsetNonce || helpers_1.Long.UZERO).toString());
        message.lastSlashedBatchBlock !== undefined &&
            (obj.lastSlashedBatchBlock = (message.lastSlashedBatchBlock || helpers_1.Long.UZERO).toString());
        message.lastSlashedLogicCallBlock !== undefined &&
            (obj.lastSlashedLogicCallBlock = (message.lastSlashedLogicCallBlock || helpers_1.Long.UZERO).toString());
        message.lastTxPoolId !== undefined &&
            (obj.lastTxPoolId = (message.lastTxPoolId || helpers_1.Long.UZERO).toString());
        message.lastBatchId !== undefined &&
            (obj.lastBatchId = (message.lastBatchId || helpers_1.Long.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGravityNonces();
        message.latestValsetNonce =
            object.latestValsetNonce !== undefined &&
                object.latestValsetNonce !== null
                ? helpers_1.Long.fromValue(object.latestValsetNonce)
                : helpers_1.Long.UZERO;
        message.lastObservedNonce =
            object.lastObservedNonce !== undefined &&
                object.lastObservedNonce !== null
                ? helpers_1.Long.fromValue(object.lastObservedNonce)
                : helpers_1.Long.UZERO;
        message.lastSlashedValsetNonce =
            object.lastSlashedValsetNonce !== undefined &&
                object.lastSlashedValsetNonce !== null
                ? helpers_1.Long.fromValue(object.lastSlashedValsetNonce)
                : helpers_1.Long.UZERO;
        message.lastSlashedBatchBlock =
            object.lastSlashedBatchBlock !== undefined &&
                object.lastSlashedBatchBlock !== null
                ? helpers_1.Long.fromValue(object.lastSlashedBatchBlock)
                : helpers_1.Long.UZERO;
        message.lastSlashedLogicCallBlock =
            object.lastSlashedLogicCallBlock !== undefined &&
                object.lastSlashedLogicCallBlock !== null
                ? helpers_1.Long.fromValue(object.lastSlashedLogicCallBlock)
                : helpers_1.Long.UZERO;
        message.lastTxPoolId =
            object.lastTxPoolId !== undefined && object.lastTxPoolId !== null
                ? helpers_1.Long.fromValue(object.lastTxPoolId)
                : helpers_1.Long.UZERO;
        message.lastBatchId =
            object.lastBatchId !== undefined && object.lastBatchId !== null
                ? helpers_1.Long.fromValue(object.lastBatchId)
                : helpers_1.Long.UZERO;
        return message;
    },
};
