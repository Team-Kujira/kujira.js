/* eslint-disable */
import { Timestamp } from "cosmjs-types/google/protobuf/timestamp";
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { fromJsonTimestamp, fromTimestamp, isSet } from "../gravity/v1/helpers";
import { AllianceAsset, RewardWeightChangeSnapshot } from "./alliance";
import { AllianceValidatorInfo, Delegation, QueuedUndelegation, Redelegation, } from "./delegations";
import { Params } from "./params";
export const protobufPackage = "alliance.alliance";
function createBaseValidatorInfoState() {
    return {
        validatorAddress: "",
        validator: undefined,
    };
}
export const ValidatorInfoState = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.validatorAddress !== "") {
            writer.uint32(10).string(message.validatorAddress);
        }
        if (message.validator !== undefined) {
            AllianceValidatorInfo.encode(message.validator, writer.uint32(18).fork()).ldelim();
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
                    message.validator = AllianceValidatorInfo.decode(reader, reader.uint32());
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
            validatorAddress: isSet(object.validatorAddress)
                ? String(object.validatorAddress)
                : "",
            validator: isSet(object.validator)
                ? AllianceValidatorInfo.fromJSON(object.validator)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.validatorAddress !== undefined &&
            (obj.validatorAddress = message.validatorAddress);
        message.validator !== undefined &&
            (obj.validator = message.validator
                ? AllianceValidatorInfo.toJSON(message.validator)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseValidatorInfoState();
        message.validatorAddress = (_a = object.validatorAddress) !== null && _a !== void 0 ? _a : "";
        message.validator =
            object.validator !== undefined && object.validator !== null
                ? AllianceValidatorInfo.fromPartial(object.validator)
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
export const RedelegationState = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.completionTime !== undefined) {
            Timestamp.encode(message.completionTime, writer.uint32(10).fork()).ldelim();
        }
        if (message.redelegation !== undefined) {
            Redelegation.encode(message.redelegation, writer.uint32(18).fork()).ldelim();
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
                    message.completionTime = Timestamp.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.redelegation = Redelegation.decode(reader, reader.uint32());
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
            completionTime: isSet(object.completionTime)
                ? fromJsonTimestamp(object.completionTime)
                : undefined,
            redelegation: isSet(object.redelegation)
                ? Redelegation.fromJSON(object.redelegation)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.completionTime !== undefined &&
            (obj.completionTime = fromTimestamp(message.completionTime).toISOString());
        message.redelegation !== undefined &&
            (obj.redelegation = message.redelegation
                ? Redelegation.toJSON(message.redelegation)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseRedelegationState();
        message.completionTime =
            object.completionTime !== undefined && object.completionTime !== null
                ? Timestamp.fromPartial(object.completionTime)
                : undefined;
        message.redelegation =
            object.redelegation !== undefined && object.redelegation !== null
                ? Redelegation.fromPartial(object.redelegation)
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
export const UndelegationState = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.completionTime !== undefined) {
            Timestamp.encode(message.completionTime, writer.uint32(10).fork()).ldelim();
        }
        if (message.undelegation !== undefined) {
            QueuedUndelegation.encode(message.undelegation, writer.uint32(18).fork()).ldelim();
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
                    message.completionTime = Timestamp.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.undelegation = QueuedUndelegation.decode(reader, reader.uint32());
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
            completionTime: isSet(object.completionTime)
                ? fromJsonTimestamp(object.completionTime)
                : undefined,
            undelegation: isSet(object.undelegation)
                ? QueuedUndelegation.fromJSON(object.undelegation)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.completionTime !== undefined &&
            (obj.completionTime = fromTimestamp(message.completionTime).toISOString());
        message.undelegation !== undefined &&
            (obj.undelegation = message.undelegation
                ? QueuedUndelegation.toJSON(message.undelegation)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseUndelegationState();
        message.completionTime =
            object.completionTime !== undefined && object.completionTime !== null
                ? Timestamp.fromPartial(object.completionTime)
                : undefined;
        message.undelegation =
            object.undelegation !== undefined && object.undelegation !== null
                ? QueuedUndelegation.fromPartial(object.undelegation)
                : undefined;
        return message;
    },
};
function createBaseRewardWeightChangeSnapshotState() {
    return {
        height: Long.UZERO,
        validator: "",
        denom: "",
        snapshot: undefined,
    };
}
export const RewardWeightChangeSnapshotState = {
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
            RewardWeightChangeSnapshot.encode(message.snapshot, writer.uint32(34).fork()).ldelim();
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
                    message.snapshot = RewardWeightChangeSnapshot.decode(reader, reader.uint32());
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
            height: isSet(object.height) ? Long.fromValue(object.height) : Long.UZERO,
            validator: isSet(object.validator) ? String(object.validator) : "",
            denom: isSet(object.denom) ? String(object.denom) : "",
            snapshot: isSet(object.snapshot)
                ? RewardWeightChangeSnapshot.fromJSON(object.snapshot)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined &&
            (obj.height = (message.height || Long.UZERO).toString());
        message.validator !== undefined && (obj.validator = message.validator);
        message.denom !== undefined && (obj.denom = message.denom);
        message.snapshot !== undefined &&
            (obj.snapshot = message.snapshot
                ? RewardWeightChangeSnapshot.toJSON(message.snapshot)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseRewardWeightChangeSnapshotState();
        message.height =
            object.height !== undefined && object.height !== null
                ? Long.fromValue(object.height)
                : Long.UZERO;
        message.validator = (_a = object.validator) !== null && _a !== void 0 ? _a : "";
        message.denom = (_b = object.denom) !== null && _b !== void 0 ? _b : "";
        message.snapshot =
            object.snapshot !== undefined && object.snapshot !== null
                ? RewardWeightChangeSnapshot.fromPartial(object.snapshot)
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
export const GenesisState = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.assets) {
            AllianceAsset.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.validatorInfos) {
            ValidatorInfoState.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.rewardWeightChangeSnaphots) {
            RewardWeightChangeSnapshotState.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.delegations) {
            Delegation.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.redelegations) {
            RedelegationState.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.undelegations) {
            UndelegationState.encode(v, writer.uint32(58).fork()).ldelim();
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
                    message.params = Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.assets.push(AllianceAsset.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.validatorInfos.push(ValidatorInfoState.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.rewardWeightChangeSnaphots.push(RewardWeightChangeSnapshotState.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.delegations.push(Delegation.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.redelegations.push(RedelegationState.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.undelegations.push(UndelegationState.decode(reader, reader.uint32()));
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
            params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
            assets: Array.isArray(object === null || object === void 0 ? void 0 : object.assets)
                ? object.assets.map((e) => AllianceAsset.fromJSON(e))
                : [],
            validatorInfos: Array.isArray(object === null || object === void 0 ? void 0 : object.validatorInfos)
                ? object.validatorInfos.map((e) => ValidatorInfoState.fromJSON(e))
                : [],
            rewardWeightChangeSnaphots: Array.isArray(object === null || object === void 0 ? void 0 : object.rewardWeightChangeSnaphots)
                ? object.rewardWeightChangeSnaphots.map((e) => RewardWeightChangeSnapshotState.fromJSON(e))
                : [],
            delegations: Array.isArray(object === null || object === void 0 ? void 0 : object.delegations)
                ? object.delegations.map((e) => Delegation.fromJSON(e))
                : [],
            redelegations: Array.isArray(object === null || object === void 0 ? void 0 : object.redelegations)
                ? object.redelegations.map((e) => RedelegationState.fromJSON(e))
                : [],
            undelegations: Array.isArray(object === null || object === void 0 ? void 0 : object.undelegations)
                ? object.undelegations.map((e) => UndelegationState.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined &&
            (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        if (message.assets) {
            obj.assets = message.assets.map((e) => e ? AllianceAsset.toJSON(e) : undefined);
        }
        else {
            obj.assets = [];
        }
        if (message.validatorInfos) {
            obj.validatorInfos = message.validatorInfos.map((e) => e ? ValidatorInfoState.toJSON(e) : undefined);
        }
        else {
            obj.validatorInfos = [];
        }
        if (message.rewardWeightChangeSnaphots) {
            obj.rewardWeightChangeSnaphots = message.rewardWeightChangeSnaphots.map((e) => (e ? RewardWeightChangeSnapshotState.toJSON(e) : undefined));
        }
        else {
            obj.rewardWeightChangeSnaphots = [];
        }
        if (message.delegations) {
            obj.delegations = message.delegations.map((e) => e ? Delegation.toJSON(e) : undefined);
        }
        else {
            obj.delegations = [];
        }
        if (message.redelegations) {
            obj.redelegations = message.redelegations.map((e) => e ? RedelegationState.toJSON(e) : undefined);
        }
        else {
            obj.redelegations = [];
        }
        if (message.undelegations) {
            obj.undelegations = message.undelegations.map((e) => e ? UndelegationState.toJSON(e) : undefined);
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
                ? Params.fromPartial(object.params)
                : undefined;
        message.assets =
            ((_a = object.assets) === null || _a === void 0 ? void 0 : _a.map((e) => AllianceAsset.fromPartial(e))) || [];
        message.validatorInfos =
            ((_b = object.validatorInfos) === null || _b === void 0 ? void 0 : _b.map((e) => ValidatorInfoState.fromPartial(e))) ||
                [];
        message.rewardWeightChangeSnaphots =
            ((_c = object.rewardWeightChangeSnaphots) === null || _c === void 0 ? void 0 : _c.map((e) => RewardWeightChangeSnapshotState.fromPartial(e))) || [];
        message.delegations =
            ((_d = object.delegations) === null || _d === void 0 ? void 0 : _d.map((e) => Delegation.fromPartial(e))) || [];
        message.redelegations =
            ((_e = object.redelegations) === null || _e === void 0 ? void 0 : _e.map((e) => RedelegationState.fromPartial(e))) || [];
        message.undelegations =
            ((_f = object.undelegations) === null || _f === void 0 ? void 0 : _f.map((e) => UndelegationState.fromPartial(e))) || [];
        return message;
    },
};
