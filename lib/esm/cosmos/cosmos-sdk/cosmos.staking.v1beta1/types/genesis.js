import { Writer, Reader } from "protobufjs/minimal";
import { bytesFromBase64, base64FromBytes, longToNumber, } from "../../../../types";
import { Params, Validator, Delegation, UnbondingDelegation, Redelegation, } from "./staking";
export const protobufPackage = "cosmos.staking.v1beta1";
const baseGenesisState = { exported: false };
export const GenesisState = {
    encode(message, writer = Writer.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        if (message.last_total_power.length !== 0) {
            writer.uint32(18).bytes(message.last_total_power);
        }
        for (const v of message.last_validator_powers) {
            LastValidatorPower.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.validators) {
            Validator.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.delegations) {
            Delegation.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.unbonding_delegations) {
            UnbondingDelegation.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.redelegations) {
            Redelegation.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.exported === true) {
            writer.uint32(64).bool(message.exported);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
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
                    message.params = Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.last_total_power = reader.bytes();
                    break;
                case 3:
                    message.last_validator_powers.push(LastValidatorPower.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.validators.push(Validator.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.delegations.push(Delegation.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.unbonding_delegations.push(UnbondingDelegation.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.redelegations.push(Redelegation.decode(reader, reader.uint32()));
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
            message.params = Params.fromJSON(object.params);
        }
        else {
            message.params = undefined;
        }
        if (object.last_total_power !== undefined &&
            object.last_total_power !== null) {
            message.last_total_power = bytesFromBase64(object.last_total_power);
        }
        if (object.last_validator_powers !== undefined &&
            object.last_validator_powers !== null) {
            for (const e of object.last_validator_powers) {
                message.last_validator_powers.push(LastValidatorPower.fromJSON(e));
            }
        }
        if (object.validators !== undefined && object.validators !== null) {
            for (const e of object.validators) {
                message.validators.push(Validator.fromJSON(e));
            }
        }
        if (object.delegations !== undefined && object.delegations !== null) {
            for (const e of object.delegations) {
                message.delegations.push(Delegation.fromJSON(e));
            }
        }
        if (object.unbonding_delegations !== undefined &&
            object.unbonding_delegations !== null) {
            for (const e of object.unbonding_delegations) {
                message.unbonding_delegations.push(UnbondingDelegation.fromJSON(e));
            }
        }
        if (object.redelegations !== undefined && object.redelegations !== null) {
            for (const e of object.redelegations) {
                message.redelegations.push(Redelegation.fromJSON(e));
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
            (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        message.last_total_power !== undefined &&
            (obj.last_total_power = base64FromBytes(message.last_total_power !== undefined
                ? message.last_total_power
                : new Uint8Array()));
        if (message.last_validator_powers) {
            obj.last_validator_powers = message.last_validator_powers.map((e) => e ? LastValidatorPower.toJSON(e) : undefined);
        }
        else {
            obj.last_validator_powers = [];
        }
        if (message.validators) {
            obj.validators = message.validators.map((e) => e ? Validator.toJSON(e) : undefined);
        }
        else {
            obj.validators = [];
        }
        if (message.delegations) {
            obj.delegations = message.delegations.map((e) => e ? Delegation.toJSON(e) : undefined);
        }
        else {
            obj.delegations = [];
        }
        if (message.unbonding_delegations) {
            obj.unbonding_delegations = message.unbonding_delegations.map((e) => e ? UnbondingDelegation.toJSON(e) : undefined);
        }
        else {
            obj.unbonding_delegations = [];
        }
        if (message.redelegations) {
            obj.redelegations = message.redelegations.map((e) => e ? Redelegation.toJSON(e) : undefined);
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
            message.params = Params.fromPartial(object.params);
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
                message.last_validator_powers.push(LastValidatorPower.fromPartial(e));
            }
        }
        if (object.validators !== undefined && object.validators !== null) {
            for (const e of object.validators) {
                message.validators.push(Validator.fromPartial(e));
            }
        }
        if (object.delegations !== undefined && object.delegations !== null) {
            for (const e of object.delegations) {
                message.delegations.push(Delegation.fromPartial(e));
            }
        }
        if (object.unbonding_delegations !== undefined &&
            object.unbonding_delegations !== null) {
            for (const e of object.unbonding_delegations) {
                message.unbonding_delegations.push(UnbondingDelegation.fromPartial(e));
            }
        }
        if (object.redelegations !== undefined && object.redelegations !== null) {
            for (const e of object.redelegations) {
                message.redelegations.push(Redelegation.fromPartial(e));
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
export const LastValidatorPower = {
    encode(message, writer = Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.power !== 0) {
            writer.uint32(16).int64(message.power);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseLastValidatorPower);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.power = longToNumber(reader.int64());
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
