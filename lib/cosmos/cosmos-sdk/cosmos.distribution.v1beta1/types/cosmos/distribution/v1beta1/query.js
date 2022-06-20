/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import Long from "long";
import { Params, ValidatorOutstandingRewards, ValidatorAccumulatedCommission, ValidatorSlashEvent, DelegationDelegatorReward, } from "../../../cosmos/distribution/v1beta1/distribution";
import { PageRequest, PageResponse, } from "../../../cosmos/base/query/v1beta1/pagination";
import { DecCoin } from "../../../cosmos/base/v1beta1/coin";
export const protobufPackage = "cosmos.distribution.v1beta1";
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
const baseQueryValidatorOutstandingRewardsRequest = {
    validator_address: "",
};
export const QueryValidatorOutstandingRewardsRequest = {
    encode(message, writer = Writer.create()) {
        if (message.validator_address !== "") {
            writer.uint32(10).string(message.validator_address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryValidatorOutstandingRewardsRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validator_address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryValidatorOutstandingRewardsRequest);
        if (object.validator_address !== undefined &&
            object.validator_address !== null) {
            message.validator_address = String(object.validator_address);
        }
        else {
            message.validator_address = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.validator_address !== undefined &&
            (obj.validator_address = message.validator_address);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryValidatorOutstandingRewardsRequest);
        if (object.validator_address !== undefined &&
            object.validator_address !== null) {
            message.validator_address = object.validator_address;
        }
        else {
            message.validator_address = "";
        }
        return message;
    },
};
const baseQueryValidatorOutstandingRewardsResponse = {};
export const QueryValidatorOutstandingRewardsResponse = {
    encode(message, writer = Writer.create()) {
        if (message.rewards !== undefined) {
            ValidatorOutstandingRewards.encode(message.rewards, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryValidatorOutstandingRewardsResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.rewards = ValidatorOutstandingRewards.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryValidatorOutstandingRewardsResponse);
        if (object.rewards !== undefined && object.rewards !== null) {
            message.rewards = ValidatorOutstandingRewards.fromJSON(object.rewards);
        }
        else {
            message.rewards = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.rewards !== undefined &&
            (obj.rewards = message.rewards
                ? ValidatorOutstandingRewards.toJSON(message.rewards)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryValidatorOutstandingRewardsResponse);
        if (object.rewards !== undefined && object.rewards !== null) {
            message.rewards = ValidatorOutstandingRewards.fromPartial(object.rewards);
        }
        else {
            message.rewards = undefined;
        }
        return message;
    },
};
const baseQueryValidatorCommissionRequest = { validator_address: "" };
export const QueryValidatorCommissionRequest = {
    encode(message, writer = Writer.create()) {
        if (message.validator_address !== "") {
            writer.uint32(10).string(message.validator_address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryValidatorCommissionRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validator_address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryValidatorCommissionRequest);
        if (object.validator_address !== undefined &&
            object.validator_address !== null) {
            message.validator_address = String(object.validator_address);
        }
        else {
            message.validator_address = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.validator_address !== undefined &&
            (obj.validator_address = message.validator_address);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryValidatorCommissionRequest);
        if (object.validator_address !== undefined &&
            object.validator_address !== null) {
            message.validator_address = object.validator_address;
        }
        else {
            message.validator_address = "";
        }
        return message;
    },
};
const baseQueryValidatorCommissionResponse = {};
export const QueryValidatorCommissionResponse = {
    encode(message, writer = Writer.create()) {
        if (message.commission !== undefined) {
            ValidatorAccumulatedCommission.encode(message.commission, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryValidatorCommissionResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.commission = ValidatorAccumulatedCommission.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryValidatorCommissionResponse);
        if (object.commission !== undefined && object.commission !== null) {
            message.commission = ValidatorAccumulatedCommission.fromJSON(object.commission);
        }
        else {
            message.commission = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.commission !== undefined &&
            (obj.commission = message.commission
                ? ValidatorAccumulatedCommission.toJSON(message.commission)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryValidatorCommissionResponse);
        if (object.commission !== undefined && object.commission !== null) {
            message.commission = ValidatorAccumulatedCommission.fromPartial(object.commission);
        }
        else {
            message.commission = undefined;
        }
        return message;
    },
};
const baseQueryValidatorSlashesRequest = {
    validator_address: "",
    starting_height: 0,
    ending_height: 0,
};
export const QueryValidatorSlashesRequest = {
    encode(message, writer = Writer.create()) {
        if (message.validator_address !== "") {
            writer.uint32(10).string(message.validator_address);
        }
        if (message.starting_height !== 0) {
            writer.uint32(16).uint64(message.starting_height);
        }
        if (message.ending_height !== 0) {
            writer.uint32(24).uint64(message.ending_height);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryValidatorSlashesRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validator_address = reader.string();
                    break;
                case 2:
                    message.starting_height = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.ending_height = longToNumber(reader.uint64());
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
        const message = Object.assign({}, baseQueryValidatorSlashesRequest);
        if (object.validator_address !== undefined &&
            object.validator_address !== null) {
            message.validator_address = String(object.validator_address);
        }
        else {
            message.validator_address = "";
        }
        if (object.starting_height !== undefined &&
            object.starting_height !== null) {
            message.starting_height = Number(object.starting_height);
        }
        else {
            message.starting_height = 0;
        }
        if (object.ending_height !== undefined && object.ending_height !== null) {
            message.ending_height = Number(object.ending_height);
        }
        else {
            message.ending_height = 0;
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
        message.validator_address !== undefined &&
            (obj.validator_address = message.validator_address);
        message.starting_height !== undefined &&
            (obj.starting_height = message.starting_height);
        message.ending_height !== undefined &&
            (obj.ending_height = message.ending_height);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryValidatorSlashesRequest);
        if (object.validator_address !== undefined &&
            object.validator_address !== null) {
            message.validator_address = object.validator_address;
        }
        else {
            message.validator_address = "";
        }
        if (object.starting_height !== undefined &&
            object.starting_height !== null) {
            message.starting_height = object.starting_height;
        }
        else {
            message.starting_height = 0;
        }
        if (object.ending_height !== undefined && object.ending_height !== null) {
            message.ending_height = object.ending_height;
        }
        else {
            message.ending_height = 0;
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
const baseQueryValidatorSlashesResponse = {};
export const QueryValidatorSlashesResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.slashes) {
            ValidatorSlashEvent.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryValidatorSlashesResponse);
        message.slashes = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.slashes.push(ValidatorSlashEvent.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseQueryValidatorSlashesResponse);
        message.slashes = [];
        if (object.slashes !== undefined && object.slashes !== null) {
            for (const e of object.slashes) {
                message.slashes.push(ValidatorSlashEvent.fromJSON(e));
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
        if (message.slashes) {
            obj.slashes = message.slashes.map((e) => e ? ValidatorSlashEvent.toJSON(e) : undefined);
        }
        else {
            obj.slashes = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryValidatorSlashesResponse);
        message.slashes = [];
        if (object.slashes !== undefined && object.slashes !== null) {
            for (const e of object.slashes) {
                message.slashes.push(ValidatorSlashEvent.fromPartial(e));
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
const baseQueryDelegationRewardsRequest = {
    delegator_address: "",
    validator_address: "",
};
export const QueryDelegationRewardsRequest = {
    encode(message, writer = Writer.create()) {
        if (message.delegator_address !== "") {
            writer.uint32(10).string(message.delegator_address);
        }
        if (message.validator_address !== "") {
            writer.uint32(18).string(message.validator_address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryDelegationRewardsRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegator_address = reader.string();
                    break;
                case 2:
                    message.validator_address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryDelegationRewardsRequest);
        if (object.delegator_address !== undefined &&
            object.delegator_address !== null) {
            message.delegator_address = String(object.delegator_address);
        }
        else {
            message.delegator_address = "";
        }
        if (object.validator_address !== undefined &&
            object.validator_address !== null) {
            message.validator_address = String(object.validator_address);
        }
        else {
            message.validator_address = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.delegator_address !== undefined &&
            (obj.delegator_address = message.delegator_address);
        message.validator_address !== undefined &&
            (obj.validator_address = message.validator_address);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryDelegationRewardsRequest);
        if (object.delegator_address !== undefined &&
            object.delegator_address !== null) {
            message.delegator_address = object.delegator_address;
        }
        else {
            message.delegator_address = "";
        }
        if (object.validator_address !== undefined &&
            object.validator_address !== null) {
            message.validator_address = object.validator_address;
        }
        else {
            message.validator_address = "";
        }
        return message;
    },
};
const baseQueryDelegationRewardsResponse = {};
export const QueryDelegationRewardsResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.rewards) {
            DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryDelegationRewardsResponse);
        message.rewards = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.rewards.push(DecCoin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryDelegationRewardsResponse);
        message.rewards = [];
        if (object.rewards !== undefined && object.rewards !== null) {
            for (const e of object.rewards) {
                message.rewards.push(DecCoin.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.rewards) {
            obj.rewards = message.rewards.map((e) => e ? DecCoin.toJSON(e) : undefined);
        }
        else {
            obj.rewards = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryDelegationRewardsResponse);
        message.rewards = [];
        if (object.rewards !== undefined && object.rewards !== null) {
            for (const e of object.rewards) {
                message.rewards.push(DecCoin.fromPartial(e));
            }
        }
        return message;
    },
};
const baseQueryDelegationTotalRewardsRequest = {
    delegator_address: "",
};
export const QueryDelegationTotalRewardsRequest = {
    encode(message, writer = Writer.create()) {
        if (message.delegator_address !== "") {
            writer.uint32(10).string(message.delegator_address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryDelegationTotalRewardsRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegator_address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryDelegationTotalRewardsRequest);
        if (object.delegator_address !== undefined &&
            object.delegator_address !== null) {
            message.delegator_address = String(object.delegator_address);
        }
        else {
            message.delegator_address = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.delegator_address !== undefined &&
            (obj.delegator_address = message.delegator_address);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryDelegationTotalRewardsRequest);
        if (object.delegator_address !== undefined &&
            object.delegator_address !== null) {
            message.delegator_address = object.delegator_address;
        }
        else {
            message.delegator_address = "";
        }
        return message;
    },
};
const baseQueryDelegationTotalRewardsResponse = {};
export const QueryDelegationTotalRewardsResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.rewards) {
            DelegationDelegatorReward.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.total) {
            DecCoin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryDelegationTotalRewardsResponse);
        message.rewards = [];
        message.total = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.rewards.push(DelegationDelegatorReward.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.total.push(DecCoin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryDelegationTotalRewardsResponse);
        message.rewards = [];
        message.total = [];
        if (object.rewards !== undefined && object.rewards !== null) {
            for (const e of object.rewards) {
                message.rewards.push(DelegationDelegatorReward.fromJSON(e));
            }
        }
        if (object.total !== undefined && object.total !== null) {
            for (const e of object.total) {
                message.total.push(DecCoin.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.rewards) {
            obj.rewards = message.rewards.map((e) => e ? DelegationDelegatorReward.toJSON(e) : undefined);
        }
        else {
            obj.rewards = [];
        }
        if (message.total) {
            obj.total = message.total.map((e) => (e ? DecCoin.toJSON(e) : undefined));
        }
        else {
            obj.total = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryDelegationTotalRewardsResponse);
        message.rewards = [];
        message.total = [];
        if (object.rewards !== undefined && object.rewards !== null) {
            for (const e of object.rewards) {
                message.rewards.push(DelegationDelegatorReward.fromPartial(e));
            }
        }
        if (object.total !== undefined && object.total !== null) {
            for (const e of object.total) {
                message.total.push(DecCoin.fromPartial(e));
            }
        }
        return message;
    },
};
const baseQueryDelegatorValidatorsRequest = { delegator_address: "" };
export const QueryDelegatorValidatorsRequest = {
    encode(message, writer = Writer.create()) {
        if (message.delegator_address !== "") {
            writer.uint32(10).string(message.delegator_address);
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
                    message.delegator_address = reader.string();
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
        if (object.delegator_address !== undefined &&
            object.delegator_address !== null) {
            message.delegator_address = String(object.delegator_address);
        }
        else {
            message.delegator_address = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.delegator_address !== undefined &&
            (obj.delegator_address = message.delegator_address);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryDelegatorValidatorsRequest);
        if (object.delegator_address !== undefined &&
            object.delegator_address !== null) {
            message.delegator_address = object.delegator_address;
        }
        else {
            message.delegator_address = "";
        }
        return message;
    },
};
const baseQueryDelegatorValidatorsResponse = { validators: "" };
export const QueryDelegatorValidatorsResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.validators) {
            writer.uint32(10).string(v);
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
                    message.validators.push(reader.string());
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
                message.validators.push(String(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.validators) {
            obj.validators = message.validators.map((e) => e);
        }
        else {
            obj.validators = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryDelegatorValidatorsResponse);
        message.validators = [];
        if (object.validators !== undefined && object.validators !== null) {
            for (const e of object.validators) {
                message.validators.push(e);
            }
        }
        return message;
    },
};
const baseQueryDelegatorWithdrawAddressRequest = {
    delegator_address: "",
};
export const QueryDelegatorWithdrawAddressRequest = {
    encode(message, writer = Writer.create()) {
        if (message.delegator_address !== "") {
            writer.uint32(10).string(message.delegator_address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryDelegatorWithdrawAddressRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegator_address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryDelegatorWithdrawAddressRequest);
        if (object.delegator_address !== undefined &&
            object.delegator_address !== null) {
            message.delegator_address = String(object.delegator_address);
        }
        else {
            message.delegator_address = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.delegator_address !== undefined &&
            (obj.delegator_address = message.delegator_address);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryDelegatorWithdrawAddressRequest);
        if (object.delegator_address !== undefined &&
            object.delegator_address !== null) {
            message.delegator_address = object.delegator_address;
        }
        else {
            message.delegator_address = "";
        }
        return message;
    },
};
const baseQueryDelegatorWithdrawAddressResponse = {
    withdraw_address: "",
};
export const QueryDelegatorWithdrawAddressResponse = {
    encode(message, writer = Writer.create()) {
        if (message.withdraw_address !== "") {
            writer.uint32(10).string(message.withdraw_address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryDelegatorWithdrawAddressResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.withdraw_address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryDelegatorWithdrawAddressResponse);
        if (object.withdraw_address !== undefined &&
            object.withdraw_address !== null) {
            message.withdraw_address = String(object.withdraw_address);
        }
        else {
            message.withdraw_address = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.withdraw_address !== undefined &&
            (obj.withdraw_address = message.withdraw_address);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryDelegatorWithdrawAddressResponse);
        if (object.withdraw_address !== undefined &&
            object.withdraw_address !== null) {
            message.withdraw_address = object.withdraw_address;
        }
        else {
            message.withdraw_address = "";
        }
        return message;
    },
};
const baseQueryCommunityPoolRequest = {};
export const QueryCommunityPoolRequest = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryCommunityPoolRequest);
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
        const message = Object.assign({}, baseQueryCommunityPoolRequest);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseQueryCommunityPoolRequest);
        return message;
    },
};
const baseQueryCommunityPoolResponse = {};
export const QueryCommunityPoolResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.pool) {
            DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryCommunityPoolResponse);
        message.pool = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pool.push(DecCoin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryCommunityPoolResponse);
        message.pool = [];
        if (object.pool !== undefined && object.pool !== null) {
            for (const e of object.pool) {
                message.pool.push(DecCoin.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.pool) {
            obj.pool = message.pool.map((e) => (e ? DecCoin.toJSON(e) : undefined));
        }
        else {
            obj.pool = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryCommunityPoolResponse);
        message.pool = [];
        if (object.pool !== undefined && object.pool !== null) {
            for (const e of object.pool) {
                message.pool.push(DecCoin.fromPartial(e));
            }
        }
        return message;
    },
};
export class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    Params(request) {
        const data = QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "Params", data);
        return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
    }
    ValidatorOutstandingRewards(request) {
        const data = QueryValidatorOutstandingRewardsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "ValidatorOutstandingRewards", data);
        return promise.then((data) => QueryValidatorOutstandingRewardsResponse.decode(new Reader(data)));
    }
    ValidatorCommission(request) {
        const data = QueryValidatorCommissionRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "ValidatorCommission", data);
        return promise.then((data) => QueryValidatorCommissionResponse.decode(new Reader(data)));
    }
    ValidatorSlashes(request) {
        const data = QueryValidatorSlashesRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "ValidatorSlashes", data);
        return promise.then((data) => QueryValidatorSlashesResponse.decode(new Reader(data)));
    }
    DelegationRewards(request) {
        const data = QueryDelegationRewardsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "DelegationRewards", data);
        return promise.then((data) => QueryDelegationRewardsResponse.decode(new Reader(data)));
    }
    DelegationTotalRewards(request) {
        const data = QueryDelegationTotalRewardsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "DelegationTotalRewards", data);
        return promise.then((data) => QueryDelegationTotalRewardsResponse.decode(new Reader(data)));
    }
    DelegatorValidators(request) {
        const data = QueryDelegatorValidatorsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "DelegatorValidators", data);
        return promise.then((data) => QueryDelegatorValidatorsResponse.decode(new Reader(data)));
    }
    DelegatorWithdrawAddress(request) {
        const data = QueryDelegatorWithdrawAddressRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "DelegatorWithdrawAddress", data);
        return promise.then((data) => QueryDelegatorWithdrawAddressResponse.decode(new Reader(data)));
    }
    CommunityPool(request) {
        const data = QueryCommunityPoolRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "CommunityPool", data);
        return promise.then((data) => QueryCommunityPoolResponse.decode(new Reader(data)));
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
