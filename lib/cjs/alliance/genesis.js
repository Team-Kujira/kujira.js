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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = exports.RewardWeightChangeSnapshotState = exports.UndelegationState = exports.RedelegationState = exports.ValidatorInfoState = exports.protobufPackage = void 0;
/* eslint-disable */
const timestamp_1 = require("cosmjs-types/google/protobuf/timestamp");
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const helpers_1 = require("../gravity/v1/helpers");
const alliance_1 = require("./alliance");
const delegations_1 = require("./delegations");
const params_1 = require("./params");
exports.protobufPackage = "alliance.alliance";
function createBaseValidatorInfoState() {
    return {
        validatorAddress: "",
        validator: undefined,
    };
}
exports.ValidatorInfoState = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.validatorAddress !== "") {
            writer.uint32(10).string(message.validatorAddress);
        }
        if (message.validator !== undefined) {
            delegations_1.AllianceValidatorInfo.encode(message.validator, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorInfoState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validatorAddress = reader.string();
                    break;
                case 2:
                    message.validator = delegations_1.AllianceValidatorInfo.decode(reader, reader.uint32());
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
            validatorAddress: (0, helpers_1.isSet)(object.validatorAddress)
                ? String(object.validatorAddress)
                : "",
            validator: (0, helpers_1.isSet)(object.validator)
                ? delegations_1.AllianceValidatorInfo.fromJSON(object.validator)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.validatorAddress !== undefined &&
            (obj.validatorAddress = message.validatorAddress);
        message.validator !== undefined &&
            (obj.validator = message.validator
                ? delegations_1.AllianceValidatorInfo.toJSON(message.validator)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseValidatorInfoState();
        message.validatorAddress = (_a = object.validatorAddress) !== null && _a !== void 0 ? _a : "";
        message.validator =
            object.validator !== undefined && object.validator !== null
                ? delegations_1.AllianceValidatorInfo.fromPartial(object.validator)
                : undefined;
        return message;
    },
};
function createBaseRedelegationState() {
    return {
        completionTime: undefined,
        redelegation: undefined,
    };
}
exports.RedelegationState = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.completionTime !== undefined) {
            timestamp_1.Timestamp.encode(message.completionTime, writer.uint32(10).fork()).ldelim();
        }
        if (message.redelegation !== undefined) {
            delegations_1.Redelegation.encode(message.redelegation, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRedelegationState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.completionTime = timestamp_1.Timestamp.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.redelegation = delegations_1.Redelegation.decode(reader, reader.uint32());
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
            completionTime: (0, helpers_1.isSet)(object.completionTime)
                ? (0, helpers_1.fromJsonTimestamp)(object.completionTime)
                : undefined,
            redelegation: (0, helpers_1.isSet)(object.redelegation)
                ? delegations_1.Redelegation.fromJSON(object.redelegation)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.completionTime !== undefined &&
            (obj.completionTime = (0, helpers_1.fromTimestamp)(message.completionTime).toISOString());
        message.redelegation !== undefined &&
            (obj.redelegation = message.redelegation
                ? delegations_1.Redelegation.toJSON(message.redelegation)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseRedelegationState();
        message.completionTime =
            object.completionTime !== undefined && object.completionTime !== null
                ? timestamp_1.Timestamp.fromPartial(object.completionTime)
                : undefined;
        message.redelegation =
            object.redelegation !== undefined && object.redelegation !== null
                ? delegations_1.Redelegation.fromPartial(object.redelegation)
                : undefined;
        return message;
    },
};
function createBaseUndelegationState() {
    return {
        completionTime: undefined,
        undelegation: undefined,
    };
}
exports.UndelegationState = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.completionTime !== undefined) {
            timestamp_1.Timestamp.encode(message.completionTime, writer.uint32(10).fork()).ldelim();
        }
        if (message.undelegation !== undefined) {
            delegations_1.QueuedUndelegation.encode(message.undelegation, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUndelegationState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.completionTime = timestamp_1.Timestamp.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.undelegation = delegations_1.QueuedUndelegation.decode(reader, reader.uint32());
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
            completionTime: (0, helpers_1.isSet)(object.completionTime)
                ? (0, helpers_1.fromJsonTimestamp)(object.completionTime)
                : undefined,
            undelegation: (0, helpers_1.isSet)(object.undelegation)
                ? delegations_1.QueuedUndelegation.fromJSON(object.undelegation)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.completionTime !== undefined &&
            (obj.completionTime = (0, helpers_1.fromTimestamp)(message.completionTime).toISOString());
        message.undelegation !== undefined &&
            (obj.undelegation = message.undelegation
                ? delegations_1.QueuedUndelegation.toJSON(message.undelegation)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseUndelegationState();
        message.completionTime =
            object.completionTime !== undefined && object.completionTime !== null
                ? timestamp_1.Timestamp.fromPartial(object.completionTime)
                : undefined;
        message.undelegation =
            object.undelegation !== undefined && object.undelegation !== null
                ? delegations_1.QueuedUndelegation.fromPartial(object.undelegation)
                : undefined;
        return message;
    },
};
function createBaseRewardWeightChangeSnapshotState() {
    return {
        height: long_1.default.UZERO,
        validator: "",
        denom: "",
        snapshot: undefined,
    };
}
exports.RewardWeightChangeSnapshotState = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.height.isZero()) {
            writer.uint32(8).uint64(message.height);
        }
        if (message.validator !== "") {
            writer.uint32(18).string(message.validator);
        }
        if (message.denom !== "") {
            writer.uint32(26).string(message.denom);
        }
        if (message.snapshot !== undefined) {
            alliance_1.RewardWeightChangeSnapshot.encode(message.snapshot, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRewardWeightChangeSnapshotState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = reader.uint64();
                    break;
                case 2:
                    message.validator = reader.string();
                    break;
                case 3:
                    message.denom = reader.string();
                    break;
                case 4:
                    message.snapshot = alliance_1.RewardWeightChangeSnapshot.decode(reader, reader.uint32());
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
            height: (0, helpers_1.isSet)(object.height) ? long_1.default.fromValue(object.height) : long_1.default.UZERO,
            validator: (0, helpers_1.isSet)(object.validator) ? String(object.validator) : "",
            denom: (0, helpers_1.isSet)(object.denom) ? String(object.denom) : "",
            snapshot: (0, helpers_1.isSet)(object.snapshot)
                ? alliance_1.RewardWeightChangeSnapshot.fromJSON(object.snapshot)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined &&
            (obj.height = (message.height || long_1.default.UZERO).toString());
        message.validator !== undefined && (obj.validator = message.validator);
        message.denom !== undefined && (obj.denom = message.denom);
        message.snapshot !== undefined &&
            (obj.snapshot = message.snapshot
                ? alliance_1.RewardWeightChangeSnapshot.toJSON(message.snapshot)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseRewardWeightChangeSnapshotState();
        message.height =
            object.height !== undefined && object.height !== null
                ? long_1.default.fromValue(object.height)
                : long_1.default.UZERO;
        message.validator = (_a = object.validator) !== null && _a !== void 0 ? _a : "";
        message.denom = (_b = object.denom) !== null && _b !== void 0 ? _b : "";
        message.snapshot =
            object.snapshot !== undefined && object.snapshot !== null
                ? alliance_1.RewardWeightChangeSnapshot.fromPartial(object.snapshot)
                : undefined;
        return message;
    },
};
function createBaseGenesisState() {
    return {
        params: undefined,
        assets: [],
        validatorInfos: [],
        rewardWeightChangeSnaphots: [],
        delegations: [],
        redelegations: [],
        undelegations: [],
    };
}
exports.GenesisState = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.assets) {
            alliance_1.AllianceAsset.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.validatorInfos) {
            exports.ValidatorInfoState.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.rewardWeightChangeSnaphots) {
            exports.RewardWeightChangeSnapshotState.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.delegations) {
            delegations_1.Delegation.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.redelegations) {
            exports.RedelegationState.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.undelegations) {
            exports.UndelegationState.encode(v, writer.uint32(58).fork()).ldelim();
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
                    message.params = params_1.Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.assets.push(alliance_1.AllianceAsset.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.validatorInfos.push(exports.ValidatorInfoState.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.rewardWeightChangeSnaphots.push(exports.RewardWeightChangeSnapshotState.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.delegations.push(delegations_1.Delegation.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.redelegations.push(exports.RedelegationState.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.undelegations.push(exports.UndelegationState.decode(reader, reader.uint32()));
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
            params: (0, helpers_1.isSet)(object.params) ? params_1.Params.fromJSON(object.params) : undefined,
            assets: Array.isArray(object === null || object === void 0 ? void 0 : object.assets)
                ? object.assets.map((e) => alliance_1.AllianceAsset.fromJSON(e))
                : [],
            validatorInfos: Array.isArray(object === null || object === void 0 ? void 0 : object.validatorInfos)
                ? object.validatorInfos.map((e) => exports.ValidatorInfoState.fromJSON(e))
                : [],
            rewardWeightChangeSnaphots: Array.isArray(object === null || object === void 0 ? void 0 : object.rewardWeightChangeSnaphots)
                ? object.rewardWeightChangeSnaphots.map((e) => exports.RewardWeightChangeSnapshotState.fromJSON(e))
                : [],
            delegations: Array.isArray(object === null || object === void 0 ? void 0 : object.delegations)
                ? object.delegations.map((e) => delegations_1.Delegation.fromJSON(e))
                : [],
            redelegations: Array.isArray(object === null || object === void 0 ? void 0 : object.redelegations)
                ? object.redelegations.map((e) => exports.RedelegationState.fromJSON(e))
                : [],
            undelegations: Array.isArray(object === null || object === void 0 ? void 0 : object.undelegations)
                ? object.undelegations.map((e) => exports.UndelegationState.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined &&
            (obj.params = message.params ? params_1.Params.toJSON(message.params) : undefined);
        if (message.assets) {
            obj.assets = message.assets.map((e) => e ? alliance_1.AllianceAsset.toJSON(e) : undefined);
        }
        else {
            obj.assets = [];
        }
        if (message.validatorInfos) {
            obj.validatorInfos = message.validatorInfos.map((e) => e ? exports.ValidatorInfoState.toJSON(e) : undefined);
        }
        else {
            obj.validatorInfos = [];
        }
        if (message.rewardWeightChangeSnaphots) {
            obj.rewardWeightChangeSnaphots = message.rewardWeightChangeSnaphots.map((e) => (e ? exports.RewardWeightChangeSnapshotState.toJSON(e) : undefined));
        }
        else {
            obj.rewardWeightChangeSnaphots = [];
        }
        if (message.delegations) {
            obj.delegations = message.delegations.map((e) => e ? delegations_1.Delegation.toJSON(e) : undefined);
        }
        else {
            obj.delegations = [];
        }
        if (message.redelegations) {
            obj.redelegations = message.redelegations.map((e) => e ? exports.RedelegationState.toJSON(e) : undefined);
        }
        else {
            obj.redelegations = [];
        }
        if (message.undelegations) {
            obj.undelegations = message.undelegations.map((e) => e ? exports.UndelegationState.toJSON(e) : undefined);
        }
        else {
            obj.undelegations = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBaseGenesisState();
        message.params =
            object.params !== undefined && object.params !== null
                ? params_1.Params.fromPartial(object.params)
                : undefined;
        message.assets =
            ((_a = object.assets) === null || _a === void 0 ? void 0 : _a.map((e) => alliance_1.AllianceAsset.fromPartial(e))) || [];
        message.validatorInfos =
            ((_b = object.validatorInfos) === null || _b === void 0 ? void 0 : _b.map((e) => exports.ValidatorInfoState.fromPartial(e))) ||
                [];
        message.rewardWeightChangeSnaphots =
            ((_c = object.rewardWeightChangeSnaphots) === null || _c === void 0 ? void 0 : _c.map((e) => exports.RewardWeightChangeSnapshotState.fromPartial(e))) || [];
        message.delegations =
            ((_d = object.delegations) === null || _d === void 0 ? void 0 : _d.map((e) => delegations_1.Delegation.fromPartial(e))) || [];
        message.redelegations =
            ((_e = object.redelegations) === null || _e === void 0 ? void 0 : _e.map((e) => exports.RedelegationState.fromPartial(e))) || [];
        message.undelegations =
            ((_f = object.undelegations) === null || _f === void 0 ? void 0 : _f.map((e) => exports.UndelegationState.fromPartial(e))) || [];
        return message;
    },
};
