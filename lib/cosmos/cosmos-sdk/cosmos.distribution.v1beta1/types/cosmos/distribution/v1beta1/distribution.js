/* eslint-disable */
import Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { DecCoin, Coin } from "../../../cosmos/base/v1beta1/coin";
export const protobufPackage = "cosmos.distribution.v1beta1";
const baseParams = {
    community_tax: "",
    base_proposer_reward: "",
    bonus_proposer_reward: "",
    withdraw_addr_enabled: false,
};
export const Params = {
    encode(message, writer = Writer.create()) {
        if (message.community_tax !== "") {
            writer.uint32(10).string(message.community_tax);
        }
        if (message.base_proposer_reward !== "") {
            writer.uint32(18).string(message.base_proposer_reward);
        }
        if (message.bonus_proposer_reward !== "") {
            writer.uint32(26).string(message.bonus_proposer_reward);
        }
        if (message.withdraw_addr_enabled === true) {
            writer.uint32(32).bool(message.withdraw_addr_enabled);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseParams);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.community_tax = reader.string();
                    break;
                case 2:
                    message.base_proposer_reward = reader.string();
                    break;
                case 3:
                    message.bonus_proposer_reward = reader.string();
                    break;
                case 4:
                    message.withdraw_addr_enabled = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseParams);
        if (object.community_tax !== undefined && object.community_tax !== null) {
            message.community_tax = String(object.community_tax);
        }
        else {
            message.community_tax = "";
        }
        if (object.base_proposer_reward !== undefined &&
            object.base_proposer_reward !== null) {
            message.base_proposer_reward = String(object.base_proposer_reward);
        }
        else {
            message.base_proposer_reward = "";
        }
        if (object.bonus_proposer_reward !== undefined &&
            object.bonus_proposer_reward !== null) {
            message.bonus_proposer_reward = String(object.bonus_proposer_reward);
        }
        else {
            message.bonus_proposer_reward = "";
        }
        if (object.withdraw_addr_enabled !== undefined &&
            object.withdraw_addr_enabled !== null) {
            message.withdraw_addr_enabled = Boolean(object.withdraw_addr_enabled);
        }
        else {
            message.withdraw_addr_enabled = false;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.community_tax !== undefined &&
            (obj.community_tax = message.community_tax);
        message.base_proposer_reward !== undefined &&
            (obj.base_proposer_reward = message.base_proposer_reward);
        message.bonus_proposer_reward !== undefined &&
            (obj.bonus_proposer_reward = message.bonus_proposer_reward);
        message.withdraw_addr_enabled !== undefined &&
            (obj.withdraw_addr_enabled = message.withdraw_addr_enabled);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseParams);
        if (object.community_tax !== undefined && object.community_tax !== null) {
            message.community_tax = object.community_tax;
        }
        else {
            message.community_tax = "";
        }
        if (object.base_proposer_reward !== undefined &&
            object.base_proposer_reward !== null) {
            message.base_proposer_reward = object.base_proposer_reward;
        }
        else {
            message.base_proposer_reward = "";
        }
        if (object.bonus_proposer_reward !== undefined &&
            object.bonus_proposer_reward !== null) {
            message.bonus_proposer_reward = object.bonus_proposer_reward;
        }
        else {
            message.bonus_proposer_reward = "";
        }
        if (object.withdraw_addr_enabled !== undefined &&
            object.withdraw_addr_enabled !== null) {
            message.withdraw_addr_enabled = object.withdraw_addr_enabled;
        }
        else {
            message.withdraw_addr_enabled = false;
        }
        return message;
    },
};
const baseValidatorHistoricalRewards = { reference_count: 0 };
export const ValidatorHistoricalRewards = {
    encode(message, writer = Writer.create()) {
        for (const v of message.cumulative_reward_ratio) {
            DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.reference_count !== 0) {
            writer.uint32(16).uint32(message.reference_count);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseValidatorHistoricalRewards);
        message.cumulative_reward_ratio = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cumulative_reward_ratio.push(DecCoin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.reference_count = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseValidatorHistoricalRewards);
        message.cumulative_reward_ratio = [];
        if (object.cumulative_reward_ratio !== undefined &&
            object.cumulative_reward_ratio !== null) {
            for (const e of object.cumulative_reward_ratio) {
                message.cumulative_reward_ratio.push(DecCoin.fromJSON(e));
            }
        }
        if (object.reference_count !== undefined &&
            object.reference_count !== null) {
            message.reference_count = Number(object.reference_count);
        }
        else {
            message.reference_count = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.cumulative_reward_ratio) {
            obj.cumulative_reward_ratio = message.cumulative_reward_ratio.map((e) => e ? DecCoin.toJSON(e) : undefined);
        }
        else {
            obj.cumulative_reward_ratio = [];
        }
        message.reference_count !== undefined &&
            (obj.reference_count = message.reference_count);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseValidatorHistoricalRewards);
        message.cumulative_reward_ratio = [];
        if (object.cumulative_reward_ratio !== undefined &&
            object.cumulative_reward_ratio !== null) {
            for (const e of object.cumulative_reward_ratio) {
                message.cumulative_reward_ratio.push(DecCoin.fromPartial(e));
            }
        }
        if (object.reference_count !== undefined &&
            object.reference_count !== null) {
            message.reference_count = object.reference_count;
        }
        else {
            message.reference_count = 0;
        }
        return message;
    },
};
const baseValidatorCurrentRewards = { period: 0 };
export const ValidatorCurrentRewards = {
    encode(message, writer = Writer.create()) {
        for (const v of message.rewards) {
            DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.period !== 0) {
            writer.uint32(16).uint64(message.period);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseValidatorCurrentRewards);
        message.rewards = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.rewards.push(DecCoin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.period = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseValidatorCurrentRewards);
        message.rewards = [];
        if (object.rewards !== undefined && object.rewards !== null) {
            for (const e of object.rewards) {
                message.rewards.push(DecCoin.fromJSON(e));
            }
        }
        if (object.period !== undefined && object.period !== null) {
            message.period = Number(object.period);
        }
        else {
            message.period = 0;
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
        message.period !== undefined && (obj.period = message.period);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseValidatorCurrentRewards);
        message.rewards = [];
        if (object.rewards !== undefined && object.rewards !== null) {
            for (const e of object.rewards) {
                message.rewards.push(DecCoin.fromPartial(e));
            }
        }
        if (object.period !== undefined && object.period !== null) {
            message.period = object.period;
        }
        else {
            message.period = 0;
        }
        return message;
    },
};
const baseValidatorAccumulatedCommission = {};
export const ValidatorAccumulatedCommission = {
    encode(message, writer = Writer.create()) {
        for (const v of message.commission) {
            DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseValidatorAccumulatedCommission);
        message.commission = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.commission.push(DecCoin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseValidatorAccumulatedCommission);
        message.commission = [];
        if (object.commission !== undefined && object.commission !== null) {
            for (const e of object.commission) {
                message.commission.push(DecCoin.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.commission) {
            obj.commission = message.commission.map((e) => e ? DecCoin.toJSON(e) : undefined);
        }
        else {
            obj.commission = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseValidatorAccumulatedCommission);
        message.commission = [];
        if (object.commission !== undefined && object.commission !== null) {
            for (const e of object.commission) {
                message.commission.push(DecCoin.fromPartial(e));
            }
        }
        return message;
    },
};
const baseValidatorOutstandingRewards = {};
export const ValidatorOutstandingRewards = {
    encode(message, writer = Writer.create()) {
        for (const v of message.rewards) {
            DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseValidatorOutstandingRewards);
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
        const message = Object.assign({}, baseValidatorOutstandingRewards);
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
        const message = Object.assign({}, baseValidatorOutstandingRewards);
        message.rewards = [];
        if (object.rewards !== undefined && object.rewards !== null) {
            for (const e of object.rewards) {
                message.rewards.push(DecCoin.fromPartial(e));
            }
        }
        return message;
    },
};
const baseValidatorSlashEvent = { validator_period: 0, fraction: "" };
export const ValidatorSlashEvent = {
    encode(message, writer = Writer.create()) {
        if (message.validator_period !== 0) {
            writer.uint32(8).uint64(message.validator_period);
        }
        if (message.fraction !== "") {
            writer.uint32(18).string(message.fraction);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseValidatorSlashEvent);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validator_period = longToNumber(reader.uint64());
                    break;
                case 2:
                    message.fraction = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseValidatorSlashEvent);
        if (object.validator_period !== undefined &&
            object.validator_period !== null) {
            message.validator_period = Number(object.validator_period);
        }
        else {
            message.validator_period = 0;
        }
        if (object.fraction !== undefined && object.fraction !== null) {
            message.fraction = String(object.fraction);
        }
        else {
            message.fraction = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.validator_period !== undefined &&
            (obj.validator_period = message.validator_period);
        message.fraction !== undefined && (obj.fraction = message.fraction);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseValidatorSlashEvent);
        if (object.validator_period !== undefined &&
            object.validator_period !== null) {
            message.validator_period = object.validator_period;
        }
        else {
            message.validator_period = 0;
        }
        if (object.fraction !== undefined && object.fraction !== null) {
            message.fraction = object.fraction;
        }
        else {
            message.fraction = "";
        }
        return message;
    },
};
const baseValidatorSlashEvents = {};
export const ValidatorSlashEvents = {
    encode(message, writer = Writer.create()) {
        for (const v of message.validator_slash_events) {
            ValidatorSlashEvent.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseValidatorSlashEvents);
        message.validator_slash_events = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validator_slash_events.push(ValidatorSlashEvent.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseValidatorSlashEvents);
        message.validator_slash_events = [];
        if (object.validator_slash_events !== undefined &&
            object.validator_slash_events !== null) {
            for (const e of object.validator_slash_events) {
                message.validator_slash_events.push(ValidatorSlashEvent.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.validator_slash_events) {
            obj.validator_slash_events = message.validator_slash_events.map((e) => e ? ValidatorSlashEvent.toJSON(e) : undefined);
        }
        else {
            obj.validator_slash_events = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseValidatorSlashEvents);
        message.validator_slash_events = [];
        if (object.validator_slash_events !== undefined &&
            object.validator_slash_events !== null) {
            for (const e of object.validator_slash_events) {
                message.validator_slash_events.push(ValidatorSlashEvent.fromPartial(e));
            }
        }
        return message;
    },
};
const baseFeePool = {};
export const FeePool = {
    encode(message, writer = Writer.create()) {
        for (const v of message.community_pool) {
            DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseFeePool);
        message.community_pool = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.community_pool.push(DecCoin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseFeePool);
        message.community_pool = [];
        if (object.community_pool !== undefined && object.community_pool !== null) {
            for (const e of object.community_pool) {
                message.community_pool.push(DecCoin.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.community_pool) {
            obj.community_pool = message.community_pool.map((e) => e ? DecCoin.toJSON(e) : undefined);
        }
        else {
            obj.community_pool = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseFeePool);
        message.community_pool = [];
        if (object.community_pool !== undefined && object.community_pool !== null) {
            for (const e of object.community_pool) {
                message.community_pool.push(DecCoin.fromPartial(e));
            }
        }
        return message;
    },
};
const baseCommunityPoolSpendProposal = {
    title: "",
    description: "",
    recipient: "",
};
export const CommunityPoolSpendProposal = {
    encode(message, writer = Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.recipient !== "") {
            writer.uint32(26).string(message.recipient);
        }
        for (const v of message.amount) {
            Coin.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCommunityPoolSpendProposal);
        message.amount = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.recipient = reader.string();
                    break;
                case 4:
                    message.amount.push(Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseCommunityPoolSpendProposal);
        message.amount = [];
        if (object.title !== undefined && object.title !== null) {
            message.title = String(object.title);
        }
        else {
            message.title = "";
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = String(object.description);
        }
        else {
            message.description = "";
        }
        if (object.recipient !== undefined && object.recipient !== null) {
            message.recipient = String(object.recipient);
        }
        else {
            message.recipient = "";
        }
        if (object.amount !== undefined && object.amount !== null) {
            for (const e of object.amount) {
                message.amount.push(Coin.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined &&
            (obj.description = message.description);
        message.recipient !== undefined && (obj.recipient = message.recipient);
        if (message.amount) {
            obj.amount = message.amount.map((e) => (e ? Coin.toJSON(e) : undefined));
        }
        else {
            obj.amount = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseCommunityPoolSpendProposal);
        message.amount = [];
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        else {
            message.title = "";
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        else {
            message.description = "";
        }
        if (object.recipient !== undefined && object.recipient !== null) {
            message.recipient = object.recipient;
        }
        else {
            message.recipient = "";
        }
        if (object.amount !== undefined && object.amount !== null) {
            for (const e of object.amount) {
                message.amount.push(Coin.fromPartial(e));
            }
        }
        return message;
    },
};
const baseDelegatorStartingInfo = {
    previous_period: 0,
    stake: "",
    height: 0,
};
export const DelegatorStartingInfo = {
    encode(message, writer = Writer.create()) {
        if (message.previous_period !== 0) {
            writer.uint32(8).uint64(message.previous_period);
        }
        if (message.stake !== "") {
            writer.uint32(18).string(message.stake);
        }
        if (message.height !== 0) {
            writer.uint32(24).uint64(message.height);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDelegatorStartingInfo);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.previous_period = longToNumber(reader.uint64());
                    break;
                case 2:
                    message.stake = reader.string();
                    break;
                case 3:
                    message.height = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDelegatorStartingInfo);
        if (object.previous_period !== undefined &&
            object.previous_period !== null) {
            message.previous_period = Number(object.previous_period);
        }
        else {
            message.previous_period = 0;
        }
        if (object.stake !== undefined && object.stake !== null) {
            message.stake = String(object.stake);
        }
        else {
            message.stake = "";
        }
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
        message.previous_period !== undefined &&
            (obj.previous_period = message.previous_period);
        message.stake !== undefined && (obj.stake = message.stake);
        message.height !== undefined && (obj.height = message.height);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseDelegatorStartingInfo);
        if (object.previous_period !== undefined &&
            object.previous_period !== null) {
            message.previous_period = object.previous_period;
        }
        else {
            message.previous_period = 0;
        }
        if (object.stake !== undefined && object.stake !== null) {
            message.stake = object.stake;
        }
        else {
            message.stake = "";
        }
        if (object.height !== undefined && object.height !== null) {
            message.height = object.height;
        }
        else {
            message.height = 0;
        }
        return message;
    },
};
const baseDelegationDelegatorReward = { validator_address: "" };
export const DelegationDelegatorReward = {
    encode(message, writer = Writer.create()) {
        if (message.validator_address !== "") {
            writer.uint32(10).string(message.validator_address);
        }
        for (const v of message.reward) {
            DecCoin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDelegationDelegatorReward);
        message.reward = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validator_address = reader.string();
                    break;
                case 2:
                    message.reward.push(DecCoin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDelegationDelegatorReward);
        message.reward = [];
        if (object.validator_address !== undefined &&
            object.validator_address !== null) {
            message.validator_address = String(object.validator_address);
        }
        else {
            message.validator_address = "";
        }
        if (object.reward !== undefined && object.reward !== null) {
            for (const e of object.reward) {
                message.reward.push(DecCoin.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.validator_address !== undefined &&
            (obj.validator_address = message.validator_address);
        if (message.reward) {
            obj.reward = message.reward.map((e) => e ? DecCoin.toJSON(e) : undefined);
        }
        else {
            obj.reward = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseDelegationDelegatorReward);
        message.reward = [];
        if (object.validator_address !== undefined &&
            object.validator_address !== null) {
            message.validator_address = object.validator_address;
        }
        else {
            message.validator_address = "";
        }
        if (object.reward !== undefined && object.reward !== null) {
            for (const e of object.reward) {
                message.reward.push(DecCoin.fromPartial(e));
            }
        }
        return message;
    },
};
const baseCommunityPoolSpendProposalWithDeposit = {
    title: "",
    description: "",
    recipient: "",
    amount: "",
    deposit: "",
};
export const CommunityPoolSpendProposalWithDeposit = {
    encode(message, writer = Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.recipient !== "") {
            writer.uint32(26).string(message.recipient);
        }
        if (message.amount !== "") {
            writer.uint32(34).string(message.amount);
        }
        if (message.deposit !== "") {
            writer.uint32(42).string(message.deposit);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCommunityPoolSpendProposalWithDeposit);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.recipient = reader.string();
                    break;
                case 4:
                    message.amount = reader.string();
                    break;
                case 5:
                    message.deposit = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseCommunityPoolSpendProposalWithDeposit);
        if (object.title !== undefined && object.title !== null) {
            message.title = String(object.title);
        }
        else {
            message.title = "";
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = String(object.description);
        }
        else {
            message.description = "";
        }
        if (object.recipient !== undefined && object.recipient !== null) {
            message.recipient = String(object.recipient);
        }
        else {
            message.recipient = "";
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = String(object.amount);
        }
        else {
            message.amount = "";
        }
        if (object.deposit !== undefined && object.deposit !== null) {
            message.deposit = String(object.deposit);
        }
        else {
            message.deposit = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined &&
            (obj.description = message.description);
        message.recipient !== undefined && (obj.recipient = message.recipient);
        message.amount !== undefined && (obj.amount = message.amount);
        message.deposit !== undefined && (obj.deposit = message.deposit);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseCommunityPoolSpendProposalWithDeposit);
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        else {
            message.title = "";
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        else {
            message.description = "";
        }
        if (object.recipient !== undefined && object.recipient !== null) {
            message.recipient = object.recipient;
        }
        else {
            message.recipient = "";
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = object.amount;
        }
        else {
            message.amount = "";
        }
        if (object.deposit !== undefined && object.deposit !== null) {
            message.deposit = object.deposit;
        }
        else {
            message.deposit = "";
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
