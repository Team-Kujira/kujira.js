/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import Long from "long";
import { PageRequest, PageResponse, } from "../../../cosmos/base/query/v1beta1/pagination";
import { Validator, DelegationResponse, UnbondingDelegation, RedelegationResponse, HistoricalInfo, Pool, Params, } from "../../../cosmos/staking/v1beta1/staking";
export const protobufPackage = "cosmos.staking.v1beta1";
const baseQueryValidatorsRequest = { status: "" };
export const QueryValidatorsRequest = {
    encode(message, writer = Writer.create()) {
        if (message.status !== "") {
            writer.uint32(10).string(message.status);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryValidatorsRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.status = reader.string();
                    break;
                case 2:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryValidatorsRequest);
        if (object.status !== undefined && object.status !== null) {
            message.status = String(object.status);
        }
        else {
            message.status = "";
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.status !== undefined && (obj.status = message.status);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryValidatorsRequest);
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
        }
        else {
            message.status = "";
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryValidatorsResponse = {};
export const QueryValidatorsResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.validators) {
            Validator.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryValidatorsResponse);
        message.validators = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validators.push(Validator.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryValidatorsResponse);
        message.validators = [];
        if (object.validators !== undefined && object.validators !== null) {
            for (const e of object.validators) {
                message.validators.push(Validator.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.validators) {
            obj.validators = message.validators.map((e) => e ? Validator.toJSON(e) : undefined);
        }
        else {
            obj.validators = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryValidatorsResponse);
        message.validators = [];
        if (object.validators !== undefined && object.validators !== null) {
            for (const e of object.validators) {
                message.validators.push(Validator.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryValidatorRequest = { validator_addr: "" };
export const QueryValidatorRequest = {
    encode(message, writer = Writer.create()) {
        if (message.validator_addr !== "") {
            writer.uint32(10).string(message.validator_addr);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryValidatorRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validator_addr = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryValidatorRequest);
        if (object.validator_addr !== undefined && object.validator_addr !== null) {
            message.validator_addr = String(object.validator_addr);
        }
        else {
            message.validator_addr = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.validator_addr !== undefined &&
            (obj.validator_addr = message.validator_addr);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryValidatorRequest);
        if (object.validator_addr !== undefined && object.validator_addr !== null) {
            message.validator_addr = object.validator_addr;
        }
        else {
            message.validator_addr = "";
        }
        return message;
    },
};
const baseQueryValidatorResponse = {};
export const QueryValidatorResponse = {
    encode(message, writer = Writer.create()) {
        if (message.validator !== undefined) {
            Validator.encode(message.validator, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryValidatorResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validator = Validator.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryValidatorResponse);
        if (object.validator !== undefined && object.validator !== null) {
            message.validator = Validator.fromJSON(object.validator);
        }
        else {
            message.validator = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.validator !== undefined &&
            (obj.validator = message.validator
                ? Validator.toJSON(message.validator)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryValidatorResponse);
        if (object.validator !== undefined && object.validator !== null) {
            message.validator = Validator.fromPartial(object.validator);
        }
        else {
            message.validator = undefined;
        }
        return message;
    },
};
const baseQueryValidatorDelegationsRequest = { validator_addr: "" };
export const QueryValidatorDelegationsRequest = {
    encode(message, writer = Writer.create()) {
        if (message.validator_addr !== "") {
            writer.uint32(10).string(message.validator_addr);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryValidatorDelegationsRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validator_addr = reader.string();
                    break;
                case 2:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryValidatorDelegationsRequest);
        if (object.validator_addr !== undefined && object.validator_addr !== null) {
            message.validator_addr = String(object.validator_addr);
        }
        else {
            message.validator_addr = "";
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.validator_addr !== undefined &&
            (obj.validator_addr = message.validator_addr);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryValidatorDelegationsRequest);
        if (object.validator_addr !== undefined && object.validator_addr !== null) {
            message.validator_addr = object.validator_addr;
        }
        else {
            message.validator_addr = "";
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryValidatorDelegationsResponse = {};
export const QueryValidatorDelegationsResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.delegation_responses) {
            DelegationResponse.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryValidatorDelegationsResponse);
        message.delegation_responses = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegation_responses.push(DelegationResponse.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryValidatorDelegationsResponse);
        message.delegation_responses = [];
        if (object.delegation_responses !== undefined &&
            object.delegation_responses !== null) {
            for (const e of object.delegation_responses) {
                message.delegation_responses.push(DelegationResponse.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.delegation_responses) {
            obj.delegation_responses = message.delegation_responses.map((e) => e ? DelegationResponse.toJSON(e) : undefined);
        }
        else {
            obj.delegation_responses = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryValidatorDelegationsResponse);
        message.delegation_responses = [];
        if (object.delegation_responses !== undefined &&
            object.delegation_responses !== null) {
            for (const e of object.delegation_responses) {
                message.delegation_responses.push(DelegationResponse.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryValidatorUnbondingDelegationsRequest = {
    validator_addr: "",
};
export const QueryValidatorUnbondingDelegationsRequest = {
    encode(message, writer = Writer.create()) {
        if (message.validator_addr !== "") {
            writer.uint32(10).string(message.validator_addr);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryValidatorUnbondingDelegationsRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validator_addr = reader.string();
                    break;
                case 2:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryValidatorUnbondingDelegationsRequest);
        if (object.validator_addr !== undefined && object.validator_addr !== null) {
            message.validator_addr = String(object.validator_addr);
        }
        else {
            message.validator_addr = "";
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.validator_addr !== undefined &&
            (obj.validator_addr = message.validator_addr);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryValidatorUnbondingDelegationsRequest);
        if (object.validator_addr !== undefined && object.validator_addr !== null) {
            message.validator_addr = object.validator_addr;
        }
        else {
            message.validator_addr = "";
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryValidatorUnbondingDelegationsResponse = {};
export const QueryValidatorUnbondingDelegationsResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.unbonding_responses) {
            UnbondingDelegation.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryValidatorUnbondingDelegationsResponse);
        message.unbonding_responses = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.unbonding_responses.push(UnbondingDelegation.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryValidatorUnbondingDelegationsResponse);
        message.unbonding_responses = [];
        if (object.unbonding_responses !== undefined &&
            object.unbonding_responses !== null) {
            for (const e of object.unbonding_responses) {
                message.unbonding_responses.push(UnbondingDelegation.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.unbonding_responses) {
            obj.unbonding_responses = message.unbonding_responses.map((e) => e ? UnbondingDelegation.toJSON(e) : undefined);
        }
        else {
            obj.unbonding_responses = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryValidatorUnbondingDelegationsResponse);
        message.unbonding_responses = [];
        if (object.unbonding_responses !== undefined &&
            object.unbonding_responses !== null) {
            for (const e of object.unbonding_responses) {
                message.unbonding_responses.push(UnbondingDelegation.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryDelegationRequest = {
    delegator_addr: "",
    validator_addr: "",
};
export const QueryDelegationRequest = {
    encode(message, writer = Writer.create()) {
        if (message.delegator_addr !== "") {
            writer.uint32(10).string(message.delegator_addr);
        }
        if (message.validator_addr !== "") {
            writer.uint32(18).string(message.validator_addr);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryDelegationRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegator_addr = reader.string();
                    break;
                case 2:
                    message.validator_addr = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryDelegationRequest);
        if (object.delegator_addr !== undefined && object.delegator_addr !== null) {
            message.delegator_addr = String(object.delegator_addr);
        }
        else {
            message.delegator_addr = "";
        }
        if (object.validator_addr !== undefined && object.validator_addr !== null) {
            message.validator_addr = String(object.validator_addr);
        }
        else {
            message.validator_addr = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.delegator_addr !== undefined &&
            (obj.delegator_addr = message.delegator_addr);
        message.validator_addr !== undefined &&
            (obj.validator_addr = message.validator_addr);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryDelegationRequest);
        if (object.delegator_addr !== undefined && object.delegator_addr !== null) {
            message.delegator_addr = object.delegator_addr;
        }
        else {
            message.delegator_addr = "";
        }
        if (object.validator_addr !== undefined && object.validator_addr !== null) {
            message.validator_addr = object.validator_addr;
        }
        else {
            message.validator_addr = "";
        }
        return message;
    },
};
const baseQueryDelegationResponse = {};
export const QueryDelegationResponse = {
    encode(message, writer = Writer.create()) {
        if (message.delegation_response !== undefined) {
            DelegationResponse.encode(message.delegation_response, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryDelegationResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegation_response = DelegationResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryDelegationResponse);
        if (object.delegation_response !== undefined &&
            object.delegation_response !== null) {
            message.delegation_response = DelegationResponse.fromJSON(object.delegation_response);
        }
        else {
            message.delegation_response = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.delegation_response !== undefined &&
            (obj.delegation_response = message.delegation_response
                ? DelegationResponse.toJSON(message.delegation_response)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryDelegationResponse);
        if (object.delegation_response !== undefined &&
            object.delegation_response !== null) {
            message.delegation_response = DelegationResponse.fromPartial(object.delegation_response);
        }
        else {
            message.delegation_response = undefined;
        }
        return message;
    },
};
const baseQueryUnbondingDelegationRequest = {
    delegator_addr: "",
    validator_addr: "",
};
export const QueryUnbondingDelegationRequest = {
    encode(message, writer = Writer.create()) {
        if (message.delegator_addr !== "") {
            writer.uint32(10).string(message.delegator_addr);
        }
        if (message.validator_addr !== "") {
            writer.uint32(18).string(message.validator_addr);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryUnbondingDelegationRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegator_addr = reader.string();
                    break;
                case 2:
                    message.validator_addr = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryUnbondingDelegationRequest);
        if (object.delegator_addr !== undefined && object.delegator_addr !== null) {
            message.delegator_addr = String(object.delegator_addr);
        }
        else {
            message.delegator_addr = "";
        }
        if (object.validator_addr !== undefined && object.validator_addr !== null) {
            message.validator_addr = String(object.validator_addr);
        }
        else {
            message.validator_addr = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.delegator_addr !== undefined &&
            (obj.delegator_addr = message.delegator_addr);
        message.validator_addr !== undefined &&
            (obj.validator_addr = message.validator_addr);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryUnbondingDelegationRequest);
        if (object.delegator_addr !== undefined && object.delegator_addr !== null) {
            message.delegator_addr = object.delegator_addr;
        }
        else {
            message.delegator_addr = "";
        }
        if (object.validator_addr !== undefined && object.validator_addr !== null) {
            message.validator_addr = object.validator_addr;
        }
        else {
            message.validator_addr = "";
        }
        return message;
    },
};
const baseQueryUnbondingDelegationResponse = {};
export const QueryUnbondingDelegationResponse = {
    encode(message, writer = Writer.create()) {
        if (message.unbond !== undefined) {
            UnbondingDelegation.encode(message.unbond, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryUnbondingDelegationResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.unbond = UnbondingDelegation.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryUnbondingDelegationResponse);
        if (object.unbond !== undefined && object.unbond !== null) {
            message.unbond = UnbondingDelegation.fromJSON(object.unbond);
        }
        else {
            message.unbond = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.unbond !== undefined &&
            (obj.unbond = message.unbond
                ? UnbondingDelegation.toJSON(message.unbond)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryUnbondingDelegationResponse);
        if (object.unbond !== undefined && object.unbond !== null) {
            message.unbond = UnbondingDelegation.fromPartial(object.unbond);
        }
        else {
            message.unbond = undefined;
        }
        return message;
    },
};
const baseQueryDelegatorDelegationsRequest = { delegator_addr: "" };
export const QueryDelegatorDelegationsRequest = {
    encode(message, writer = Writer.create()) {
        if (message.delegator_addr !== "") {
            writer.uint32(10).string(message.delegator_addr);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryDelegatorDelegationsRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegator_addr = reader.string();
                    break;
                case 2:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryDelegatorDelegationsRequest);
        if (object.delegator_addr !== undefined && object.delegator_addr !== null) {
            message.delegator_addr = String(object.delegator_addr);
        }
        else {
            message.delegator_addr = "";
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.delegator_addr !== undefined &&
            (obj.delegator_addr = message.delegator_addr);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryDelegatorDelegationsRequest);
        if (object.delegator_addr !== undefined && object.delegator_addr !== null) {
            message.delegator_addr = object.delegator_addr;
        }
        else {
            message.delegator_addr = "";
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryDelegatorDelegationsResponse = {};
export const QueryDelegatorDelegationsResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.delegation_responses) {
            DelegationResponse.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryDelegatorDelegationsResponse);
        message.delegation_responses = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegation_responses.push(DelegationResponse.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryDelegatorDelegationsResponse);
        message.delegation_responses = [];
        if (object.delegation_responses !== undefined &&
            object.delegation_responses !== null) {
            for (const e of object.delegation_responses) {
                message.delegation_responses.push(DelegationResponse.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.delegation_responses) {
            obj.delegation_responses = message.delegation_responses.map((e) => e ? DelegationResponse.toJSON(e) : undefined);
        }
        else {
            obj.delegation_responses = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryDelegatorDelegationsResponse);
        message.delegation_responses = [];
        if (object.delegation_responses !== undefined &&
            object.delegation_responses !== null) {
            for (const e of object.delegation_responses) {
                message.delegation_responses.push(DelegationResponse.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryDelegatorUnbondingDelegationsRequest = {
    delegator_addr: "",
};
export const QueryDelegatorUnbondingDelegationsRequest = {
    encode(message, writer = Writer.create()) {
        if (message.delegator_addr !== "") {
            writer.uint32(10).string(message.delegator_addr);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryDelegatorUnbondingDelegationsRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegator_addr = reader.string();
                    break;
                case 2:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryDelegatorUnbondingDelegationsRequest);
        if (object.delegator_addr !== undefined && object.delegator_addr !== null) {
            message.delegator_addr = String(object.delegator_addr);
        }
        else {
            message.delegator_addr = "";
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.delegator_addr !== undefined &&
            (obj.delegator_addr = message.delegator_addr);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryDelegatorUnbondingDelegationsRequest);
        if (object.delegator_addr !== undefined && object.delegator_addr !== null) {
            message.delegator_addr = object.delegator_addr;
        }
        else {
            message.delegator_addr = "";
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryDelegatorUnbondingDelegationsResponse = {};
export const QueryDelegatorUnbondingDelegationsResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.unbonding_responses) {
            UnbondingDelegation.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryDelegatorUnbondingDelegationsResponse);
        message.unbonding_responses = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.unbonding_responses.push(UnbondingDelegation.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryDelegatorUnbondingDelegationsResponse);
        message.unbonding_responses = [];
        if (object.unbonding_responses !== undefined &&
            object.unbonding_responses !== null) {
            for (const e of object.unbonding_responses) {
                message.unbonding_responses.push(UnbondingDelegation.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.unbonding_responses) {
            obj.unbonding_responses = message.unbonding_responses.map((e) => e ? UnbondingDelegation.toJSON(e) : undefined);
        }
        else {
            obj.unbonding_responses = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryDelegatorUnbondingDelegationsResponse);
        message.unbonding_responses = [];
        if (object.unbonding_responses !== undefined &&
            object.unbonding_responses !== null) {
            for (const e of object.unbonding_responses) {
                message.unbonding_responses.push(UnbondingDelegation.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryRedelegationsRequest = {
    delegator_addr: "",
    src_validator_addr: "",
    dst_validator_addr: "",
};
export const QueryRedelegationsRequest = {
    encode(message, writer = Writer.create()) {
        if (message.delegator_addr !== "") {
            writer.uint32(10).string(message.delegator_addr);
        }
        if (message.src_validator_addr !== "") {
            writer.uint32(18).string(message.src_validator_addr);
        }
        if (message.dst_validator_addr !== "") {
            writer.uint32(26).string(message.dst_validator_addr);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryRedelegationsRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegator_addr = reader.string();
                    break;
                case 2:
                    message.src_validator_addr = reader.string();
                    break;
                case 3:
                    message.dst_validator_addr = reader.string();
                    break;
                case 4:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryRedelegationsRequest);
        if (object.delegator_addr !== undefined && object.delegator_addr !== null) {
            message.delegator_addr = String(object.delegator_addr);
        }
        else {
            message.delegator_addr = "";
        }
        if (object.src_validator_addr !== undefined &&
            object.src_validator_addr !== null) {
            message.src_validator_addr = String(object.src_validator_addr);
        }
        else {
            message.src_validator_addr = "";
        }
        if (object.dst_validator_addr !== undefined &&
            object.dst_validator_addr !== null) {
            message.dst_validator_addr = String(object.dst_validator_addr);
        }
        else {
            message.dst_validator_addr = "";
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.delegator_addr !== undefined &&
            (obj.delegator_addr = message.delegator_addr);
        message.src_validator_addr !== undefined &&
            (obj.src_validator_addr = message.src_validator_addr);
        message.dst_validator_addr !== undefined &&
            (obj.dst_validator_addr = message.dst_validator_addr);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryRedelegationsRequest);
        if (object.delegator_addr !== undefined && object.delegator_addr !== null) {
            message.delegator_addr = object.delegator_addr;
        }
        else {
            message.delegator_addr = "";
        }
        if (object.src_validator_addr !== undefined &&
            object.src_validator_addr !== null) {
            message.src_validator_addr = object.src_validator_addr;
        }
        else {
            message.src_validator_addr = "";
        }
        if (object.dst_validator_addr !== undefined &&
            object.dst_validator_addr !== null) {
            message.dst_validator_addr = object.dst_validator_addr;
        }
        else {
            message.dst_validator_addr = "";
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryRedelegationsResponse = {};
export const QueryRedelegationsResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.redelegation_responses) {
            RedelegationResponse.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryRedelegationsResponse);
        message.redelegation_responses = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.redelegation_responses.push(RedelegationResponse.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryRedelegationsResponse);
        message.redelegation_responses = [];
        if (object.redelegation_responses !== undefined &&
            object.redelegation_responses !== null) {
            for (const e of object.redelegation_responses) {
                message.redelegation_responses.push(RedelegationResponse.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.redelegation_responses) {
            obj.redelegation_responses = message.redelegation_responses.map((e) => e ? RedelegationResponse.toJSON(e) : undefined);
        }
        else {
            obj.redelegation_responses = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryRedelegationsResponse);
        message.redelegation_responses = [];
        if (object.redelegation_responses !== undefined &&
            object.redelegation_responses !== null) {
            for (const e of object.redelegation_responses) {
                message.redelegation_responses.push(RedelegationResponse.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryDelegatorValidatorsRequest = { delegator_addr: "" };
export const QueryDelegatorValidatorsRequest = {
    encode(message, writer = Writer.create()) {
        if (message.delegator_addr !== "") {
            writer.uint32(10).string(message.delegator_addr);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryDelegatorValidatorsRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegator_addr = reader.string();
                    break;
                case 2:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryDelegatorValidatorsRequest);
        if (object.delegator_addr !== undefined && object.delegator_addr !== null) {
            message.delegator_addr = String(object.delegator_addr);
        }
        else {
            message.delegator_addr = "";
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.delegator_addr !== undefined &&
            (obj.delegator_addr = message.delegator_addr);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryDelegatorValidatorsRequest);
        if (object.delegator_addr !== undefined && object.delegator_addr !== null) {
            message.delegator_addr = object.delegator_addr;
        }
        else {
            message.delegator_addr = "";
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryDelegatorValidatorsResponse = {};
export const QueryDelegatorValidatorsResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.validators) {
            Validator.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryDelegatorValidatorsResponse);
        message.validators = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validators.push(Validator.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryDelegatorValidatorsResponse);
        message.validators = [];
        if (object.validators !== undefined && object.validators !== null) {
            for (const e of object.validators) {
                message.validators.push(Validator.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.validators) {
            obj.validators = message.validators.map((e) => e ? Validator.toJSON(e) : undefined);
        }
        else {
            obj.validators = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryDelegatorValidatorsResponse);
        message.validators = [];
        if (object.validators !== undefined && object.validators !== null) {
            for (const e of object.validators) {
                message.validators.push(Validator.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryDelegatorValidatorRequest = {
    delegator_addr: "",
    validator_addr: "",
};
export const QueryDelegatorValidatorRequest = {
    encode(message, writer = Writer.create()) {
        if (message.delegator_addr !== "") {
            writer.uint32(10).string(message.delegator_addr);
        }
        if (message.validator_addr !== "") {
            writer.uint32(18).string(message.validator_addr);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryDelegatorValidatorRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegator_addr = reader.string();
                    break;
                case 2:
                    message.validator_addr = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryDelegatorValidatorRequest);
        if (object.delegator_addr !== undefined && object.delegator_addr !== null) {
            message.delegator_addr = String(object.delegator_addr);
        }
        else {
            message.delegator_addr = "";
        }
        if (object.validator_addr !== undefined && object.validator_addr !== null) {
            message.validator_addr = String(object.validator_addr);
        }
        else {
            message.validator_addr = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.delegator_addr !== undefined &&
            (obj.delegator_addr = message.delegator_addr);
        message.validator_addr !== undefined &&
            (obj.validator_addr = message.validator_addr);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryDelegatorValidatorRequest);
        if (object.delegator_addr !== undefined && object.delegator_addr !== null) {
            message.delegator_addr = object.delegator_addr;
        }
        else {
            message.delegator_addr = "";
        }
        if (object.validator_addr !== undefined && object.validator_addr !== null) {
            message.validator_addr = object.validator_addr;
        }
        else {
            message.validator_addr = "";
        }
        return message;
    },
};
const baseQueryDelegatorValidatorResponse = {};
export const QueryDelegatorValidatorResponse = {
    encode(message, writer = Writer.create()) {
        if (message.validator !== undefined) {
            Validator.encode(message.validator, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryDelegatorValidatorResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validator = Validator.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryDelegatorValidatorResponse);
        if (object.validator !== undefined && object.validator !== null) {
            message.validator = Validator.fromJSON(object.validator);
        }
        else {
            message.validator = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.validator !== undefined &&
            (obj.validator = message.validator
                ? Validator.toJSON(message.validator)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryDelegatorValidatorResponse);
        if (object.validator !== undefined && object.validator !== null) {
            message.validator = Validator.fromPartial(object.validator);
        }
        else {
            message.validator = undefined;
        }
        return message;
    },
};
const baseQueryHistoricalInfoRequest = { height: 0 };
export const QueryHistoricalInfoRequest = {
    encode(message, writer = Writer.create()) {
        if (message.height !== 0) {
            writer.uint32(8).int64(message.height);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryHistoricalInfoRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryHistoricalInfoRequest);
        if (object.height !== undefined && object.height !== null) {
            message.height = Number(object.height);
        }
        else {
            message.height = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined && (obj.height = message.height);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryHistoricalInfoRequest);
        if (object.height !== undefined && object.height !== null) {
            message.height = object.height;
        }
        else {
            message.height = 0;
        }
        return message;
    },
};
const baseQueryHistoricalInfoResponse = {};
export const QueryHistoricalInfoResponse = {
    encode(message, writer = Writer.create()) {
        if (message.hist !== undefined) {
            HistoricalInfo.encode(message.hist, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryHistoricalInfoResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hist = HistoricalInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryHistoricalInfoResponse);
        if (object.hist !== undefined && object.hist !== null) {
            message.hist = HistoricalInfo.fromJSON(object.hist);
        }
        else {
            message.hist = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.hist !== undefined &&
            (obj.hist = message.hist
                ? HistoricalInfo.toJSON(message.hist)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryHistoricalInfoResponse);
        if (object.hist !== undefined && object.hist !== null) {
            message.hist = HistoricalInfo.fromPartial(object.hist);
        }
        else {
            message.hist = undefined;
        }
        return message;
    },
};
const baseQueryPoolRequest = {};
export const QueryPoolRequest = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryPoolRequest);
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
        const message = Object.assign({}, baseQueryPoolRequest);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseQueryPoolRequest);
        return message;
    },
};
const baseQueryPoolResponse = {};
export const QueryPoolResponse = {
    encode(message, writer = Writer.create()) {
        if (message.pool !== undefined) {
            Pool.encode(message.pool, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryPoolResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pool = Pool.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryPoolResponse);
        if (object.pool !== undefined && object.pool !== null) {
            message.pool = Pool.fromJSON(object.pool);
        }
        else {
            message.pool = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pool !== undefined &&
            (obj.pool = message.pool ? Pool.toJSON(message.pool) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryPoolResponse);
        if (object.pool !== undefined && object.pool !== null) {
            message.pool = Pool.fromPartial(object.pool);
        }
        else {
            message.pool = undefined;
        }
        return message;
    },
};
const baseQueryParamsRequest = {};
export const QueryParamsRequest = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryParamsRequest);
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
        const message = Object.assign({}, baseQueryParamsRequest);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseQueryParamsRequest);
        return message;
    },
};
const baseQueryParamsResponse = {};
export const QueryParamsResponse = {
    encode(message, writer = Writer.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryParamsResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = Params.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryParamsResponse);
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromJSON(object.params);
        }
        else {
            message.params = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined &&
            (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryParamsResponse);
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromPartial(object.params);
        }
        else {
            message.params = undefined;
        }
        return message;
    },
};
export class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    Validators(request) {
        const data = QueryValidatorsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Validators", data);
        return promise.then((data) => QueryValidatorsResponse.decode(new Reader(data)));
    }
    Validator(request) {
        const data = QueryValidatorRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Validator", data);
        return promise.then((data) => QueryValidatorResponse.decode(new Reader(data)));
    }
    ValidatorDelegations(request) {
        const data = QueryValidatorDelegationsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "ValidatorDelegations", data);
        return promise.then((data) => QueryValidatorDelegationsResponse.decode(new Reader(data)));
    }
    ValidatorUnbondingDelegations(request) {
        const data = QueryValidatorUnbondingDelegationsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "ValidatorUnbondingDelegations", data);
        return promise.then((data) => QueryValidatorUnbondingDelegationsResponse.decode(new Reader(data)));
    }
    Delegation(request) {
        const data = QueryDelegationRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Delegation", data);
        return promise.then((data) => QueryDelegationResponse.decode(new Reader(data)));
    }
    UnbondingDelegation(request) {
        const data = QueryUnbondingDelegationRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "UnbondingDelegation", data);
        return promise.then((data) => QueryUnbondingDelegationResponse.decode(new Reader(data)));
    }
    DelegatorDelegations(request) {
        const data = QueryDelegatorDelegationsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "DelegatorDelegations", data);
        return promise.then((data) => QueryDelegatorDelegationsResponse.decode(new Reader(data)));
    }
    DelegatorUnbondingDelegations(request) {
        const data = QueryDelegatorUnbondingDelegationsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "DelegatorUnbondingDelegations", data);
        return promise.then((data) => QueryDelegatorUnbondingDelegationsResponse.decode(new Reader(data)));
    }
    Redelegations(request) {
        const data = QueryRedelegationsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Redelegations", data);
        return promise.then((data) => QueryRedelegationsResponse.decode(new Reader(data)));
    }
    DelegatorValidators(request) {
        const data = QueryDelegatorValidatorsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "DelegatorValidators", data);
        return promise.then((data) => QueryDelegatorValidatorsResponse.decode(new Reader(data)));
    }
    DelegatorValidator(request) {
        const data = QueryDelegatorValidatorRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "DelegatorValidator", data);
        return promise.then((data) => QueryDelegatorValidatorResponse.decode(new Reader(data)));
    }
    HistoricalInfo(request) {
        const data = QueryHistoricalInfoRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "HistoricalInfo", data);
        return promise.then((data) => QueryHistoricalInfoResponse.decode(new Reader(data)));
    }
    Pool(request) {
        const data = QueryPoolRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Pool", data);
        return promise.then((data) => QueryPoolResponse.decode(new Reader(data)));
    }
    Params(request) {
        const data = QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Params", data);
        return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
    }
}
var globalThis = (() => {
    if (typeof globalThis !== "undefined")
        return globalThis;
    if (typeof self !== "undefined")
        return self;
    if (typeof window !== "undefined")
        return window;
    if (typeof global !== "undefined")
        return global;
    throw "Unable to locate global object";
})();
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
    }
    return long.toNumber();
}
if (util.Long !== Long) {
    util.Long = Long;
    configure();
}
