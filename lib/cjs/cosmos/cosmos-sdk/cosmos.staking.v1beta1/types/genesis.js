"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LastValidatorPower = exports.GenesisState = exports.protobufPackage = void 0;
const minimal_1 = require("protobufjs/minimal");
const types_1 = require("../../../../types");
const staking_1 = require("./staking");
exports.protobufPackage = "cosmos.staking.v1beta1";
const baseGenesisState = { exported: false };
exports.GenesisState = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.params !== undefined) {
            staking_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        if (message.last_total_power.length !== 0) {
            writer.uint32(18).bytes(message.last_total_power);
        }
        for (const v of message.last_validator_powers) {
            exports.LastValidatorPower.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.validators) {
            staking_1.Validator.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.delegations) {
            staking_1.Delegation.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.unbonding_delegations) {
            staking_1.UnbondingDelegation.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.redelegations) {
            staking_1.Redelegation.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.exported === true) {
            writer.uint32(64).bool(message.exported);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGenesisState);
        message.last_validator_powers = [];
        message.validators = [];
        message.delegations = [];
        message.unbonding_delegations = [];
        message.redelegations = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = staking_1.Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.last_total_power = reader.bytes();
                    break;
                case 3:
                    message.last_validator_powers.push(exports.LastValidatorPower.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.validators.push(staking_1.Validator.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.delegations.push(staking_1.Delegation.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.unbonding_delegations.push(staking_1.UnbondingDelegation.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.redelegations.push(staking_1.Redelegation.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.exported = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGenesisState);
        message.last_validator_powers = [];
        message.validators = [];
        message.delegations = [];
        message.unbonding_delegations = [];
        message.redelegations = [];
        if (object.params !== undefined && object.params !== null) {
            message.params = staking_1.Params.fromJSON(object.params);
        }
        else {
            message.params = undefined;
        }
        if (object.last_total_power !== undefined &&
            object.last_total_power !== null) {
            message.last_total_power = (0, types_1.bytesFromBase64)(object.last_total_power);
        }
        if (object.last_validator_powers !== undefined &&
            object.last_validator_powers !== null) {
            for (const e of object.last_validator_powers) {
                message.last_validator_powers.push(exports.LastValidatorPower.fromJSON(e));
            }
        }
        if (object.validators !== undefined && object.validators !== null) {
            for (const e of object.validators) {
                message.validators.push(staking_1.Validator.fromJSON(e));
            }
        }
        if (object.delegations !== undefined && object.delegations !== null) {
            for (const e of object.delegations) {
                message.delegations.push(staking_1.Delegation.fromJSON(e));
            }
        }
        if (object.unbonding_delegations !== undefined &&
            object.unbonding_delegations !== null) {
            for (const e of object.unbonding_delegations) {
                message.unbonding_delegations.push(staking_1.UnbondingDelegation.fromJSON(e));
            }
        }
        if (object.redelegations !== undefined && object.redelegations !== null) {
            for (const e of object.redelegations) {
                message.redelegations.push(staking_1.Redelegation.fromJSON(e));
            }
        }
        if (object.exported !== undefined && object.exported !== null) {
            message.exported = Boolean(object.exported);
        }
        else {
            message.exported = false;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined &&
            (obj.params = message.params ? staking_1.Params.toJSON(message.params) : undefined);
        message.last_total_power !== undefined &&
            (obj.last_total_power = (0, types_1.base64FromBytes)(message.last_total_power !== undefined
                ? message.last_total_power
                : new Uint8Array()));
        if (message.last_validator_powers) {
            obj.last_validator_powers = message.last_validator_powers.map((e) => e ? exports.LastValidatorPower.toJSON(e) : undefined);
        }
        else {
            obj.last_validator_powers = [];
        }
        if (message.validators) {
            obj.validators = message.validators.map((e) => e ? staking_1.Validator.toJSON(e) : undefined);
        }
        else {
            obj.validators = [];
        }
        if (message.delegations) {
            obj.delegations = message.delegations.map((e) => e ? staking_1.Delegation.toJSON(e) : undefined);
        }
        else {
            obj.delegations = [];
        }
        if (message.unbonding_delegations) {
            obj.unbonding_delegations = message.unbonding_delegations.map((e) => e ? staking_1.UnbondingDelegation.toJSON(e) : undefined);
        }
        else {
            obj.unbonding_delegations = [];
        }
        if (message.redelegations) {
            obj.redelegations = message.redelegations.map((e) => e ? staking_1.Redelegation.toJSON(e) : undefined);
        }
        else {
            obj.redelegations = [];
        }
        message.exported !== undefined && (obj.exported = message.exported);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseGenesisState);
        message.last_validator_powers = [];
        message.validators = [];
        message.delegations = [];
        message.unbonding_delegations = [];
        message.redelegations = [];
        if (object.params !== undefined && object.params !== null) {
            message.params = staking_1.Params.fromPartial(object.params);
        }
        else {
            message.params = undefined;
        }
        if (object.last_total_power !== undefined &&
            object.last_total_power !== null) {
            message.last_total_power = object.last_total_power;
        }
        else {
            message.last_total_power = new Uint8Array();
        }
        if (object.last_validator_powers !== undefined &&
            object.last_validator_powers !== null) {
            for (const e of object.last_validator_powers) {
                message.last_validator_powers.push(exports.LastValidatorPower.fromPartial(e));
            }
        }
        if (object.validators !== undefined && object.validators !== null) {
            for (const e of object.validators) {
                message.validators.push(staking_1.Validator.fromPartial(e));
            }
        }
        if (object.delegations !== undefined && object.delegations !== null) {
            for (const e of object.delegations) {
                message.delegations.push(staking_1.Delegation.fromPartial(e));
            }
        }
        if (object.unbonding_delegations !== undefined &&
            object.unbonding_delegations !== null) {
            for (const e of object.unbonding_delegations) {
                message.unbonding_delegations.push(staking_1.UnbondingDelegation.fromPartial(e));
            }
        }
        if (object.redelegations !== undefined && object.redelegations !== null) {
            for (const e of object.redelegations) {
                message.redelegations.push(staking_1.Redelegation.fromPartial(e));
            }
        }
        if (object.exported !== undefined && object.exported !== null) {
            message.exported = object.exported;
        }
        else {
            message.exported = false;
        }
        return message;
    },
};
const baseLastValidatorPower = { address: "", power: 0 };
exports.LastValidatorPower = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.power !== 0) {
            writer.uint32(16).int64(message.power);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseLastValidatorPower);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.power = (0, types_1.longToNumber)(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseLastValidatorPower);
        if (object.address !== undefined && object.address !== null) {
            message.address = String(object.address);
        }
        else {
            message.address = "";
        }
        if (object.power !== undefined && object.power !== null) {
            message.power = Number(object.power);
        }
        else {
            message.power = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.power !== undefined && (obj.power = message.power);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseLastValidatorPower);
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        else {
            message.address = "";
        }
        if (object.power !== undefined && object.power !== null) {
            message.power = object.power;
        }
        else {
            message.power = 0;
        }
        return message;
    },
};
