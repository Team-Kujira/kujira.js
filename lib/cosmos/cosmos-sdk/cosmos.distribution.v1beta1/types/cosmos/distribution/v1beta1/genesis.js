/* eslint-disable */
import Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { DecCoin } from "../../../cosmos/base/v1beta1/coin";
import { ValidatorAccumulatedCommission, ValidatorHistoricalRewards, ValidatorCurrentRewards, DelegatorStartingInfo, ValidatorSlashEvent, Params, FeePool, } from "../../../cosmos/distribution/v1beta1/distribution";
export const protobufPackage = "cosmos.distribution.v1beta1";
const baseDelegatorWithdrawInfo = {
    delegator_address: "",
    withdraw_address: "",
};
export const DelegatorWithdrawInfo = {
    encode(message, writer = Writer.create()) {
        if (message.delegator_address !== "") {
            writer.uint32(10).string(message.delegator_address);
        }
        if (message.withdraw_address !== "") {
            writer.uint32(18).string(message.withdraw_address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDelegatorWithdrawInfo);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegator_address = reader.string();
                    break;
                case 2:
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
        const message = Object.assign({}, baseDelegatorWithdrawInfo);
        if (object.delegator_address !== undefined &&
            object.delegator_address !== null) {
            message.delegator_address = String(object.delegator_address);
        }
        else {
            message.delegator_address = "";
        }
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
        message.delegator_address !== undefined &&
            (obj.delegator_address = message.delegator_address);
        message.withdraw_address !== undefined &&
            (obj.withdraw_address = message.withdraw_address);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseDelegatorWithdrawInfo);
        if (object.delegator_address !== undefined &&
            object.delegator_address !== null) {
            message.delegator_address = object.delegator_address;
        }
        else {
            message.delegator_address = "";
        }
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
const baseValidatorOutstandingRewardsRecord = { validator_address: "" };
export const ValidatorOutstandingRewardsRecord = {
    encode(message, writer = Writer.create()) {
        if (message.validator_address !== "") {
            writer.uint32(10).string(message.validator_address);
        }
        for (const v of message.outstanding_rewards) {
            DecCoin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseValidatorOutstandingRewardsRecord);
        message.outstanding_rewards = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validator_address = reader.string();
                    break;
                case 2:
                    message.outstanding_rewards.push(DecCoin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseValidatorOutstandingRewardsRecord);
        message.outstanding_rewards = [];
        if (object.validator_address !== undefined &&
            object.validator_address !== null) {
            message.validator_address = String(object.validator_address);
        }
        else {
            message.validator_address = "";
        }
        if (object.outstanding_rewards !== undefined &&
            object.outstanding_rewards !== null) {
            for (const e of object.outstanding_rewards) {
                message.outstanding_rewards.push(DecCoin.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.validator_address !== undefined &&
            (obj.validator_address = message.validator_address);
        if (message.outstanding_rewards) {
            obj.outstanding_rewards = message.outstanding_rewards.map((e) => e ? DecCoin.toJSON(e) : undefined);
        }
        else {
            obj.outstanding_rewards = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseValidatorOutstandingRewardsRecord);
        message.outstanding_rewards = [];
        if (object.validator_address !== undefined &&
            object.validator_address !== null) {
            message.validator_address = object.validator_address;
        }
        else {
            message.validator_address = "";
        }
        if (object.outstanding_rewards !== undefined &&
            object.outstanding_rewards !== null) {
            for (const e of object.outstanding_rewards) {
                message.outstanding_rewards.push(DecCoin.fromPartial(e));
            }
        }
        return message;
    },
};
const baseValidatorAccumulatedCommissionRecord = {
    validator_address: "",
};
export const ValidatorAccumulatedCommissionRecord = {
    encode(message, writer = Writer.create()) {
        if (message.validator_address !== "") {
            writer.uint32(10).string(message.validator_address);
        }
        if (message.accumulated !== undefined) {
            ValidatorAccumulatedCommission.encode(message.accumulated, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseValidatorAccumulatedCommissionRecord);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validator_address = reader.string();
                    break;
                case 2:
                    message.accumulated = ValidatorAccumulatedCommission.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseValidatorAccumulatedCommissionRecord);
        if (object.validator_address !== undefined &&
            object.validator_address !== null) {
            message.validator_address = String(object.validator_address);
        }
        else {
            message.validator_address = "";
        }
        if (object.accumulated !== undefined && object.accumulated !== null) {
            message.accumulated = ValidatorAccumulatedCommission.fromJSON(object.accumulated);
        }
        else {
            message.accumulated = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.validator_address !== undefined &&
            (obj.validator_address = message.validator_address);
        message.accumulated !== undefined &&
            (obj.accumulated = message.accumulated
                ? ValidatorAccumulatedCommission.toJSON(message.accumulated)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseValidatorAccumulatedCommissionRecord);
        if (object.validator_address !== undefined &&
            object.validator_address !== null) {
            message.validator_address = object.validator_address;
        }
        else {
            message.validator_address = "";
        }
        if (object.accumulated !== undefined && object.accumulated !== null) {
            message.accumulated = ValidatorAccumulatedCommission.fromPartial(object.accumulated);
        }
        else {
            message.accumulated = undefined;
        }
        return message;
    },
};
const baseValidatorHistoricalRewardsRecord = {
    validator_address: "",
    period: 0,
};
export const ValidatorHistoricalRewardsRecord = {
    encode(message, writer = Writer.create()) {
        if (message.validator_address !== "") {
            writer.uint32(10).string(message.validator_address);
        }
        if (message.period !== 0) {
            writer.uint32(16).uint64(message.period);
        }
        if (message.rewards !== undefined) {
            ValidatorHistoricalRewards.encode(message.rewards, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseValidatorHistoricalRewardsRecord);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validator_address = reader.string();
                    break;
                case 2:
                    message.period = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.rewards = ValidatorHistoricalRewards.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseValidatorHistoricalRewardsRecord);
        if (object.validator_address !== undefined &&
            object.validator_address !== null) {
            message.validator_address = String(object.validator_address);
        }
        else {
            message.validator_address = "";
        }
        if (object.period !== undefined && object.period !== null) {
            message.period = Number(object.period);
        }
        else {
            message.period = 0;
        }
        if (object.rewards !== undefined && object.rewards !== null) {
            message.rewards = ValidatorHistoricalRewards.fromJSON(object.rewards);
        }
        else {
            message.rewards = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.validator_address !== undefined &&
            (obj.validator_address = message.validator_address);
        message.period !== undefined && (obj.period = message.period);
        message.rewards !== undefined &&
            (obj.rewards = message.rewards
                ? ValidatorHistoricalRewards.toJSON(message.rewards)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseValidatorHistoricalRewardsRecord);
        if (object.validator_address !== undefined &&
            object.validator_address !== null) {
            message.validator_address = object.validator_address;
        }
        else {
            message.validator_address = "";
        }
        if (object.period !== undefined && object.period !== null) {
            message.period = object.period;
        }
        else {
            message.period = 0;
        }
        if (object.rewards !== undefined && object.rewards !== null) {
            message.rewards = ValidatorHistoricalRewards.fromPartial(object.rewards);
        }
        else {
            message.rewards = undefined;
        }
        return message;
    },
};
const baseValidatorCurrentRewardsRecord = { validator_address: "" };
export const ValidatorCurrentRewardsRecord = {
    encode(message, writer = Writer.create()) {
        if (message.validator_address !== "") {
            writer.uint32(10).string(message.validator_address);
        }
        if (message.rewards !== undefined) {
            ValidatorCurrentRewards.encode(message.rewards, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseValidatorCurrentRewardsRecord);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validator_address = reader.string();
                    break;
                case 2:
                    message.rewards = ValidatorCurrentRewards.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseValidatorCurrentRewardsRecord);
        if (object.validator_address !== undefined &&
            object.validator_address !== null) {
            message.validator_address = String(object.validator_address);
        }
        else {
            message.validator_address = "";
        }
        if (object.rewards !== undefined && object.rewards !== null) {
            message.rewards = ValidatorCurrentRewards.fromJSON(object.rewards);
        }
        else {
            message.rewards = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.validator_address !== undefined &&
            (obj.validator_address = message.validator_address);
        message.rewards !== undefined &&
            (obj.rewards = message.rewards
                ? ValidatorCurrentRewards.toJSON(message.rewards)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseValidatorCurrentRewardsRecord);
        if (object.validator_address !== undefined &&
            object.validator_address !== null) {
            message.validator_address = object.validator_address;
        }
        else {
            message.validator_address = "";
        }
        if (object.rewards !== undefined && object.rewards !== null) {
            message.rewards = ValidatorCurrentRewards.fromPartial(object.rewards);
        }
        else {
            message.rewards = undefined;
        }
        return message;
    },
};
const baseDelegatorStartingInfoRecord = {
    delegator_address: "",
    validator_address: "",
};
export const DelegatorStartingInfoRecord = {
    encode(message, writer = Writer.create()) {
        if (message.delegator_address !== "") {
            writer.uint32(10).string(message.delegator_address);
        }
        if (message.validator_address !== "") {
            writer.uint32(18).string(message.validator_address);
        }
        if (message.starting_info !== undefined) {
            DelegatorStartingInfo.encode(message.starting_info, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDelegatorStartingInfoRecord);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegator_address = reader.string();
                    break;
                case 2:
                    message.validator_address = reader.string();
                    break;
                case 3:
                    message.starting_info = DelegatorStartingInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDelegatorStartingInfoRecord);
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
        if (object.starting_info !== undefined && object.starting_info !== null) {
            message.starting_info = DelegatorStartingInfo.fromJSON(object.starting_info);
        }
        else {
            message.starting_info = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.delegator_address !== undefined &&
            (obj.delegator_address = message.delegator_address);
        message.validator_address !== undefined &&
            (obj.validator_address = message.validator_address);
        message.starting_info !== undefined &&
            (obj.starting_info = message.starting_info
                ? DelegatorStartingInfo.toJSON(message.starting_info)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseDelegatorStartingInfoRecord);
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
        if (object.starting_info !== undefined && object.starting_info !== null) {
            message.starting_info = DelegatorStartingInfo.fromPartial(object.starting_info);
        }
        else {
            message.starting_info = undefined;
        }
        return message;
    },
};
const baseValidatorSlashEventRecord = {
    validator_address: "",
    height: 0,
    period: 0,
};
export const ValidatorSlashEventRecord = {
    encode(message, writer = Writer.create()) {
        if (message.validator_address !== "") {
            writer.uint32(10).string(message.validator_address);
        }
        if (message.height !== 0) {
            writer.uint32(16).uint64(message.height);
        }
        if (message.period !== 0) {
            writer.uint32(24).uint64(message.period);
        }
        if (message.validator_slash_event !== undefined) {
            ValidatorSlashEvent.encode(message.validator_slash_event, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseValidatorSlashEventRecord);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validator_address = reader.string();
                    break;
                case 2:
                    message.height = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.period = longToNumber(reader.uint64());
                    break;
                case 4:
                    message.validator_slash_event = ValidatorSlashEvent.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseValidatorSlashEventRecord);
        if (object.validator_address !== undefined &&
            object.validator_address !== null) {
            message.validator_address = String(object.validator_address);
        }
        else {
            message.validator_address = "";
        }
        if (object.height !== undefined && object.height !== null) {
            message.height = Number(object.height);
        }
        else {
            message.height = 0;
        }
        if (object.period !== undefined && object.period !== null) {
            message.period = Number(object.period);
        }
        else {
            message.period = 0;
        }
        if (object.validator_slash_event !== undefined &&
            object.validator_slash_event !== null) {
            message.validator_slash_event = ValidatorSlashEvent.fromJSON(object.validator_slash_event);
        }
        else {
            message.validator_slash_event = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.validator_address !== undefined &&
            (obj.validator_address = message.validator_address);
        message.height !== undefined && (obj.height = message.height);
        message.period !== undefined && (obj.period = message.period);
        message.validator_slash_event !== undefined &&
            (obj.validator_slash_event = message.validator_slash_event
                ? ValidatorSlashEvent.toJSON(message.validator_slash_event)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseValidatorSlashEventRecord);
        if (object.validator_address !== undefined &&
            object.validator_address !== null) {
            message.validator_address = object.validator_address;
        }
        else {
            message.validator_address = "";
        }
        if (object.height !== undefined && object.height !== null) {
            message.height = object.height;
        }
        else {
            message.height = 0;
        }
        if (object.period !== undefined && object.period !== null) {
            message.period = object.period;
        }
        else {
            message.period = 0;
        }
        if (object.validator_slash_event !== undefined &&
            object.validator_slash_event !== null) {
            message.validator_slash_event = ValidatorSlashEvent.fromPartial(object.validator_slash_event);
        }
        else {
            message.validator_slash_event = undefined;
        }
        return message;
    },
};
const baseGenesisState = { previous_proposer: "" };
export const GenesisState = {
    encode(message, writer = Writer.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        if (message.fee_pool !== undefined) {
            FeePool.encode(message.fee_pool, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.delegator_withdraw_infos) {
            DelegatorWithdrawInfo.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.previous_proposer !== "") {
            writer.uint32(34).string(message.previous_proposer);
        }
        for (const v of message.outstanding_rewards) {
            ValidatorOutstandingRewardsRecord.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.validator_accumulated_commissions) {
            ValidatorAccumulatedCommissionRecord.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.validator_historical_rewards) {
            ValidatorHistoricalRewardsRecord.encode(v, writer.uint32(58).fork()).ldelim();
        }
        for (const v of message.validator_current_rewards) {
            ValidatorCurrentRewardsRecord.encode(v, writer.uint32(66).fork()).ldelim();
        }
        for (const v of message.delegator_starting_infos) {
            DelegatorStartingInfoRecord.encode(v, writer.uint32(74).fork()).ldelim();
        }
        for (const v of message.validator_slash_events) {
            ValidatorSlashEventRecord.encode(v, writer.uint32(82).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGenesisState);
        message.delegator_withdraw_infos = [];
        message.outstanding_rewards = [];
        message.validator_accumulated_commissions = [];
        message.validator_historical_rewards = [];
        message.validator_current_rewards = [];
        message.delegator_starting_infos = [];
        message.validator_slash_events = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.fee_pool = FeePool.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.delegator_withdraw_infos.push(DelegatorWithdrawInfo.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.previous_proposer = reader.string();
                    break;
                case 5:
                    message.outstanding_rewards.push(ValidatorOutstandingRewardsRecord.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.validator_accumulated_commissions.push(ValidatorAccumulatedCommissionRecord.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.validator_historical_rewards.push(ValidatorHistoricalRewardsRecord.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.validator_current_rewards.push(ValidatorCurrentRewardsRecord.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.delegator_starting_infos.push(DelegatorStartingInfoRecord.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.validator_slash_events.push(ValidatorSlashEventRecord.decode(reader, reader.uint32()));
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
        message.delegator_withdraw_infos = [];
        message.outstanding_rewards = [];
        message.validator_accumulated_commissions = [];
        message.validator_historical_rewards = [];
        message.validator_current_rewards = [];
        message.delegator_starting_infos = [];
        message.validator_slash_events = [];
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromJSON(object.params);
        }
        else {
            message.params = undefined;
        }
        if (object.fee_pool !== undefined && object.fee_pool !== null) {
            message.fee_pool = FeePool.fromJSON(object.fee_pool);
        }
        else {
            message.fee_pool = undefined;
        }
        if (object.delegator_withdraw_infos !== undefined &&
            object.delegator_withdraw_infos !== null) {
            for (const e of object.delegator_withdraw_infos) {
                message.delegator_withdraw_infos.push(DelegatorWithdrawInfo.fromJSON(e));
            }
        }
        if (object.previous_proposer !== undefined &&
            object.previous_proposer !== null) {
            message.previous_proposer = String(object.previous_proposer);
        }
        else {
            message.previous_proposer = "";
        }
        if (object.outstanding_rewards !== undefined &&
            object.outstanding_rewards !== null) {
            for (const e of object.outstanding_rewards) {
                message.outstanding_rewards.push(ValidatorOutstandingRewardsRecord.fromJSON(e));
            }
        }
        if (object.validator_accumulated_commissions !== undefined &&
            object.validator_accumulated_commissions !== null) {
            for (const e of object.validator_accumulated_commissions) {
                message.validator_accumulated_commissions.push(ValidatorAccumulatedCommissionRecord.fromJSON(e));
            }
        }
        if (object.validator_historical_rewards !== undefined &&
            object.validator_historical_rewards !== null) {
            for (const e of object.validator_historical_rewards) {
                message.validator_historical_rewards.push(ValidatorHistoricalRewardsRecord.fromJSON(e));
            }
        }
        if (object.validator_current_rewards !== undefined &&
            object.validator_current_rewards !== null) {
            for (const e of object.validator_current_rewards) {
                message.validator_current_rewards.push(ValidatorCurrentRewardsRecord.fromJSON(e));
            }
        }
        if (object.delegator_starting_infos !== undefined &&
            object.delegator_starting_infos !== null) {
            for (const e of object.delegator_starting_infos) {
                message.delegator_starting_infos.push(DelegatorStartingInfoRecord.fromJSON(e));
            }
        }
        if (object.validator_slash_events !== undefined &&
            object.validator_slash_events !== null) {
            for (const e of object.validator_slash_events) {
                message.validator_slash_events.push(ValidatorSlashEventRecord.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined &&
            (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        message.fee_pool !== undefined &&
            (obj.fee_pool = message.fee_pool
                ? FeePool.toJSON(message.fee_pool)
                : undefined);
        if (message.delegator_withdraw_infos) {
            obj.delegator_withdraw_infos = message.delegator_withdraw_infos.map((e) => e ? DelegatorWithdrawInfo.toJSON(e) : undefined);
        }
        else {
            obj.delegator_withdraw_infos = [];
        }
        message.previous_proposer !== undefined &&
            (obj.previous_proposer = message.previous_proposer);
        if (message.outstanding_rewards) {
            obj.outstanding_rewards = message.outstanding_rewards.map((e) => e ? ValidatorOutstandingRewardsRecord.toJSON(e) : undefined);
        }
        else {
            obj.outstanding_rewards = [];
        }
        if (message.validator_accumulated_commissions) {
            obj.validator_accumulated_commissions =
                message.validator_accumulated_commissions.map((e) => e ? ValidatorAccumulatedCommissionRecord.toJSON(e) : undefined);
        }
        else {
            obj.validator_accumulated_commissions = [];
        }
        if (message.validator_historical_rewards) {
            obj.validator_historical_rewards =
                message.validator_historical_rewards.map((e) => e ? ValidatorHistoricalRewardsRecord.toJSON(e) : undefined);
        }
        else {
            obj.validator_historical_rewards = [];
        }
        if (message.validator_current_rewards) {
            obj.validator_current_rewards = message.validator_current_rewards.map((e) => (e ? ValidatorCurrentRewardsRecord.toJSON(e) : undefined));
        }
        else {
            obj.validator_current_rewards = [];
        }
        if (message.delegator_starting_infos) {
            obj.delegator_starting_infos = message.delegator_starting_infos.map((e) => e ? DelegatorStartingInfoRecord.toJSON(e) : undefined);
        }
        else {
            obj.delegator_starting_infos = [];
        }
        if (message.validator_slash_events) {
            obj.validator_slash_events = message.validator_slash_events.map((e) => e ? ValidatorSlashEventRecord.toJSON(e) : undefined);
        }
        else {
            obj.validator_slash_events = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseGenesisState);
        message.delegator_withdraw_infos = [];
        message.outstanding_rewards = [];
        message.validator_accumulated_commissions = [];
        message.validator_historical_rewards = [];
        message.validator_current_rewards = [];
        message.delegator_starting_infos = [];
        message.validator_slash_events = [];
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromPartial(object.params);
        }
        else {
            message.params = undefined;
        }
        if (object.fee_pool !== undefined && object.fee_pool !== null) {
            message.fee_pool = FeePool.fromPartial(object.fee_pool);
        }
        else {
            message.fee_pool = undefined;
        }
        if (object.delegator_withdraw_infos !== undefined &&
            object.delegator_withdraw_infos !== null) {
            for (const e of object.delegator_withdraw_infos) {
                message.delegator_withdraw_infos.push(DelegatorWithdrawInfo.fromPartial(e));
            }
        }
        if (object.previous_proposer !== undefined &&
            object.previous_proposer !== null) {
            message.previous_proposer = object.previous_proposer;
        }
        else {
            message.previous_proposer = "";
        }
        if (object.outstanding_rewards !== undefined &&
            object.outstanding_rewards !== null) {
            for (const e of object.outstanding_rewards) {
                message.outstanding_rewards.push(ValidatorOutstandingRewardsRecord.fromPartial(e));
            }
        }
        if (object.validator_accumulated_commissions !== undefined &&
            object.validator_accumulated_commissions !== null) {
            for (const e of object.validator_accumulated_commissions) {
                message.validator_accumulated_commissions.push(ValidatorAccumulatedCommissionRecord.fromPartial(e));
            }
        }
        if (object.validator_historical_rewards !== undefined &&
            object.validator_historical_rewards !== null) {
            for (const e of object.validator_historical_rewards) {
                message.validator_historical_rewards.push(ValidatorHistoricalRewardsRecord.fromPartial(e));
            }
        }
        if (object.validator_current_rewards !== undefined &&
            object.validator_current_rewards !== null) {
            for (const e of object.validator_current_rewards) {
                message.validator_current_rewards.push(ValidatorCurrentRewardsRecord.fromPartial(e));
            }
        }
        if (object.delegator_starting_infos !== undefined &&
            object.delegator_starting_infos !== null) {
            for (const e of object.delegator_starting_infos) {
                message.delegator_starting_infos.push(DelegatorStartingInfoRecord.fromPartial(e));
            }
        }
        if (object.validator_slash_events !== undefined &&
            object.validator_slash_events !== null) {
            for (const e of object.validator_slash_events) {
                message.validator_slash_events.push(ValidatorSlashEventRecord.fromPartial(e));
            }
        }
        return message;
    },
};
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
