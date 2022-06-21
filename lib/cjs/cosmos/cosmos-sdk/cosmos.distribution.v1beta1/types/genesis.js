"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = exports.ValidatorSlashEventRecord = exports.DelegatorStartingInfoRecord = exports.ValidatorCurrentRewardsRecord = exports.ValidatorHistoricalRewardsRecord = exports.ValidatorAccumulatedCommissionRecord = exports.ValidatorOutstandingRewardsRecord = exports.DelegatorWithdrawInfo = exports.protobufPackage = void 0;
const minimal_1 = require("protobufjs/minimal");
const types_1 = require("../../../../types");
const coin_1 = require("../../../../types/cosmos/base/coin");
const distribution_1 = require("./distribution");
exports.protobufPackage = "cosmos.distribution.v1beta1";
const baseDelegatorWithdrawInfo = {
    delegator_address: "",
    withdraw_address: "",
};
exports.DelegatorWithdrawInfo = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.delegator_address !== "") {
            writer.uint32(10).string(message.delegator_address);
        }
        if (message.withdraw_address !== "") {
            writer.uint32(18).string(message.withdraw_address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
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
exports.ValidatorOutstandingRewardsRecord = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.validator_address !== "") {
            writer.uint32(10).string(message.validator_address);
        }
        for (const v of message.outstanding_rewards) {
            coin_1.DecCoin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
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
                    message.outstanding_rewards.push(coin_1.DecCoin.decode(reader, reader.uint32()));
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
                message.outstanding_rewards.push(coin_1.DecCoin.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.validator_address !== undefined &&
            (obj.validator_address = message.validator_address);
        if (message.outstanding_rewards) {
            obj.outstanding_rewards = message.outstanding_rewards.map((e) => e ? coin_1.DecCoin.toJSON(e) : undefined);
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
                message.outstanding_rewards.push(coin_1.DecCoin.fromPartial(e));
            }
        }
        return message;
    },
};
const baseValidatorAccumulatedCommissionRecord = {
    validator_address: "",
};
exports.ValidatorAccumulatedCommissionRecord = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.validator_address !== "") {
            writer.uint32(10).string(message.validator_address);
        }
        if (message.accumulated !== undefined) {
            distribution_1.ValidatorAccumulatedCommission.encode(message.accumulated, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseValidatorAccumulatedCommissionRecord);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validator_address = reader.string();
                    break;
                case 2:
                    message.accumulated = distribution_1.ValidatorAccumulatedCommission.decode(reader, reader.uint32());
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
            message.accumulated = distribution_1.ValidatorAccumulatedCommission.fromJSON(object.accumulated);
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
                ? distribution_1.ValidatorAccumulatedCommission.toJSON(message.accumulated)
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
            message.accumulated = distribution_1.ValidatorAccumulatedCommission.fromPartial(object.accumulated);
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
exports.ValidatorHistoricalRewardsRecord = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.validator_address !== "") {
            writer.uint32(10).string(message.validator_address);
        }
        if (message.period !== 0) {
            writer.uint32(16).uint64(message.period);
        }
        if (message.rewards !== undefined) {
            distribution_1.ValidatorHistoricalRewards.encode(message.rewards, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseValidatorHistoricalRewardsRecord);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validator_address = reader.string();
                    break;
                case 2:
                    message.period = (0, types_1.longToNumber)(reader.uint64());
                    break;
                case 3:
                    message.rewards = distribution_1.ValidatorHistoricalRewards.decode(reader, reader.uint32());
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
            message.rewards = distribution_1.ValidatorHistoricalRewards.fromJSON(object.rewards);
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
                ? distribution_1.ValidatorHistoricalRewards.toJSON(message.rewards)
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
            message.rewards = distribution_1.ValidatorHistoricalRewards.fromPartial(object.rewards);
        }
        else {
            message.rewards = undefined;
        }
        return message;
    },
};
const baseValidatorCurrentRewardsRecord = { validator_address: "" };
exports.ValidatorCurrentRewardsRecord = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.validator_address !== "") {
            writer.uint32(10).string(message.validator_address);
        }
        if (message.rewards !== undefined) {
            distribution_1.ValidatorCurrentRewards.encode(message.rewards, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseValidatorCurrentRewardsRecord);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validator_address = reader.string();
                    break;
                case 2:
                    message.rewards = distribution_1.ValidatorCurrentRewards.decode(reader, reader.uint32());
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
            message.rewards = distribution_1.ValidatorCurrentRewards.fromJSON(object.rewards);
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
                ? distribution_1.ValidatorCurrentRewards.toJSON(message.rewards)
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
            message.rewards = distribution_1.ValidatorCurrentRewards.fromPartial(object.rewards);
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
exports.DelegatorStartingInfoRecord = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.delegator_address !== "") {
            writer.uint32(10).string(message.delegator_address);
        }
        if (message.validator_address !== "") {
            writer.uint32(18).string(message.validator_address);
        }
        if (message.starting_info !== undefined) {
            distribution_1.DelegatorStartingInfo.encode(message.starting_info, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
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
                    message.starting_info = distribution_1.DelegatorStartingInfo.decode(reader, reader.uint32());
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
            message.starting_info = distribution_1.DelegatorStartingInfo.fromJSON(object.starting_info);
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
                ? distribution_1.DelegatorStartingInfo.toJSON(message.starting_info)
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
            message.starting_info = distribution_1.DelegatorStartingInfo.fromPartial(object.starting_info);
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
exports.ValidatorSlashEventRecord = {
    encode(message, writer = minimal_1.Writer.create()) {
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
            distribution_1.ValidatorSlashEvent.encode(message.validator_slash_event, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseValidatorSlashEventRecord);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validator_address = reader.string();
                    break;
                case 2:
                    message.height = (0, types_1.longToNumber)(reader.uint64());
                    break;
                case 3:
                    message.period = (0, types_1.longToNumber)(reader.uint64());
                    break;
                case 4:
                    message.validator_slash_event = distribution_1.ValidatorSlashEvent.decode(reader, reader.uint32());
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
            message.validator_slash_event = distribution_1.ValidatorSlashEvent.fromJSON(object.validator_slash_event);
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
                ? distribution_1.ValidatorSlashEvent.toJSON(message.validator_slash_event)
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
            message.validator_slash_event = distribution_1.ValidatorSlashEvent.fromPartial(object.validator_slash_event);
        }
        else {
            message.validator_slash_event = undefined;
        }
        return message;
    },
};
const baseGenesisState = { previous_proposer: "" };
exports.GenesisState = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.params !== undefined) {
            distribution_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        if (message.fee_pool !== undefined) {
            distribution_1.FeePool.encode(message.fee_pool, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.delegator_withdraw_infos) {
            exports.DelegatorWithdrawInfo.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.previous_proposer !== "") {
            writer.uint32(34).string(message.previous_proposer);
        }
        for (const v of message.outstanding_rewards) {
            exports.ValidatorOutstandingRewardsRecord.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.validator_accumulated_commissions) {
            exports.ValidatorAccumulatedCommissionRecord.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.validator_historical_rewards) {
            exports.ValidatorHistoricalRewardsRecord.encode(v, writer.uint32(58).fork()).ldelim();
        }
        for (const v of message.validator_current_rewards) {
            exports.ValidatorCurrentRewardsRecord.encode(v, writer.uint32(66).fork()).ldelim();
        }
        for (const v of message.delegator_starting_infos) {
            exports.DelegatorStartingInfoRecord.encode(v, writer.uint32(74).fork()).ldelim();
        }
        for (const v of message.validator_slash_events) {
            exports.ValidatorSlashEventRecord.encode(v, writer.uint32(82).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
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
                    message.params = distribution_1.Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.fee_pool = distribution_1.FeePool.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.delegator_withdraw_infos.push(exports.DelegatorWithdrawInfo.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.previous_proposer = reader.string();
                    break;
                case 5:
                    message.outstanding_rewards.push(exports.ValidatorOutstandingRewardsRecord.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.validator_accumulated_commissions.push(exports.ValidatorAccumulatedCommissionRecord.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.validator_historical_rewards.push(exports.ValidatorHistoricalRewardsRecord.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.validator_current_rewards.push(exports.ValidatorCurrentRewardsRecord.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.delegator_starting_infos.push(exports.DelegatorStartingInfoRecord.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.validator_slash_events.push(exports.ValidatorSlashEventRecord.decode(reader, reader.uint32()));
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
            message.params = distribution_1.Params.fromJSON(object.params);
        }
        else {
            message.params = undefined;
        }
        if (object.fee_pool !== undefined && object.fee_pool !== null) {
            message.fee_pool = distribution_1.FeePool.fromJSON(object.fee_pool);
        }
        else {
            message.fee_pool = undefined;
        }
        if (object.delegator_withdraw_infos !== undefined &&
            object.delegator_withdraw_infos !== null) {
            for (const e of object.delegator_withdraw_infos) {
                message.delegator_withdraw_infos.push(exports.DelegatorWithdrawInfo.fromJSON(e));
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
                message.outstanding_rewards.push(exports.ValidatorOutstandingRewardsRecord.fromJSON(e));
            }
        }
        if (object.validator_accumulated_commissions !== undefined &&
            object.validator_accumulated_commissions !== null) {
            for (const e of object.validator_accumulated_commissions) {
                message.validator_accumulated_commissions.push(exports.ValidatorAccumulatedCommissionRecord.fromJSON(e));
            }
        }
        if (object.validator_historical_rewards !== undefined &&
            object.validator_historical_rewards !== null) {
            for (const e of object.validator_historical_rewards) {
                message.validator_historical_rewards.push(exports.ValidatorHistoricalRewardsRecord.fromJSON(e));
            }
        }
        if (object.validator_current_rewards !== undefined &&
            object.validator_current_rewards !== null) {
            for (const e of object.validator_current_rewards) {
                message.validator_current_rewards.push(exports.ValidatorCurrentRewardsRecord.fromJSON(e));
            }
        }
        if (object.delegator_starting_infos !== undefined &&
            object.delegator_starting_infos !== null) {
            for (const e of object.delegator_starting_infos) {
                message.delegator_starting_infos.push(exports.DelegatorStartingInfoRecord.fromJSON(e));
            }
        }
        if (object.validator_slash_events !== undefined &&
            object.validator_slash_events !== null) {
            for (const e of object.validator_slash_events) {
                message.validator_slash_events.push(exports.ValidatorSlashEventRecord.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined &&
            (obj.params = message.params ? distribution_1.Params.toJSON(message.params) : undefined);
        message.fee_pool !== undefined &&
            (obj.fee_pool = message.fee_pool
                ? distribution_1.FeePool.toJSON(message.fee_pool)
                : undefined);
        if (message.delegator_withdraw_infos) {
            obj.delegator_withdraw_infos = message.delegator_withdraw_infos.map((e) => e ? exports.DelegatorWithdrawInfo.toJSON(e) : undefined);
        }
        else {
            obj.delegator_withdraw_infos = [];
        }
        message.previous_proposer !== undefined &&
            (obj.previous_proposer = message.previous_proposer);
        if (message.outstanding_rewards) {
            obj.outstanding_rewards = message.outstanding_rewards.map((e) => e ? exports.ValidatorOutstandingRewardsRecord.toJSON(e) : undefined);
        }
        else {
            obj.outstanding_rewards = [];
        }
        if (message.validator_accumulated_commissions) {
            obj.validator_accumulated_commissions =
                message.validator_accumulated_commissions.map((e) => e ? exports.ValidatorAccumulatedCommissionRecord.toJSON(e) : undefined);
        }
        else {
            obj.validator_accumulated_commissions = [];
        }
        if (message.validator_historical_rewards) {
            obj.validator_historical_rewards =
                message.validator_historical_rewards.map((e) => e ? exports.ValidatorHistoricalRewardsRecord.toJSON(e) : undefined);
        }
        else {
            obj.validator_historical_rewards = [];
        }
        if (message.validator_current_rewards) {
            obj.validator_current_rewards = message.validator_current_rewards.map((e) => (e ? exports.ValidatorCurrentRewardsRecord.toJSON(e) : undefined));
        }
        else {
            obj.validator_current_rewards = [];
        }
        if (message.delegator_starting_infos) {
            obj.delegator_starting_infos = message.delegator_starting_infos.map((e) => e ? exports.DelegatorStartingInfoRecord.toJSON(e) : undefined);
        }
        else {
            obj.delegator_starting_infos = [];
        }
        if (message.validator_slash_events) {
            obj.validator_slash_events = message.validator_slash_events.map((e) => e ? exports.ValidatorSlashEventRecord.toJSON(e) : undefined);
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
            message.params = distribution_1.Params.fromPartial(object.params);
        }
        else {
            message.params = undefined;
        }
        if (object.fee_pool !== undefined && object.fee_pool !== null) {
            message.fee_pool = distribution_1.FeePool.fromPartial(object.fee_pool);
        }
        else {
            message.fee_pool = undefined;
        }
        if (object.delegator_withdraw_infos !== undefined &&
            object.delegator_withdraw_infos !== null) {
            for (const e of object.delegator_withdraw_infos) {
                message.delegator_withdraw_infos.push(exports.DelegatorWithdrawInfo.fromPartial(e));
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
                message.outstanding_rewards.push(exports.ValidatorOutstandingRewardsRecord.fromPartial(e));
            }
        }
        if (object.validator_accumulated_commissions !== undefined &&
            object.validator_accumulated_commissions !== null) {
            for (const e of object.validator_accumulated_commissions) {
                message.validator_accumulated_commissions.push(exports.ValidatorAccumulatedCommissionRecord.fromPartial(e));
            }
        }
        if (object.validator_historical_rewards !== undefined &&
            object.validator_historical_rewards !== null) {
            for (const e of object.validator_historical_rewards) {
                message.validator_historical_rewards.push(exports.ValidatorHistoricalRewardsRecord.fromPartial(e));
            }
        }
        if (object.validator_current_rewards !== undefined &&
            object.validator_current_rewards !== null) {
            for (const e of object.validator_current_rewards) {
                message.validator_current_rewards.push(exports.ValidatorCurrentRewardsRecord.fromPartial(e));
            }
        }
        if (object.delegator_starting_infos !== undefined &&
            object.delegator_starting_infos !== null) {
            for (const e of object.delegator_starting_infos) {
                message.delegator_starting_infos.push(exports.DelegatorStartingInfoRecord.fromPartial(e));
            }
        }
        if (object.validator_slash_events !== undefined &&
            object.validator_slash_events !== null) {
            for (const e of object.validator_slash_events) {
                message.validator_slash_events.push(exports.ValidatorSlashEventRecord.fromPartial(e));
            }
        }
        return message;
    },
};
