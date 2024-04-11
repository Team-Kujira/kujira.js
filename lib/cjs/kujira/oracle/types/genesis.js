"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MissCounter = exports.FeederDelegation = exports.GenesisState = exports.protobufPackage = void 0;
const binary_1 = require("cosmjs-types/binary");
const oracle_1 = require("./oracle");
exports.protobufPackage = "kujira.oracle";
const baseGenesisState = {};
exports.GenesisState = {
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            oracle_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.feeder_delegations) {
            exports.FeederDelegation.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.exchange_rates) {
            oracle_1.ExchangeRateTuple.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.miss_counters) {
            exports.MissCounter.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.aggregate_exchange_rate_prevotes) {
            oracle_1.AggregateExchangeRatePrevote.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.aggregate_exchange_rate_votes) {
            oracle_1.AggregateExchangeRateVote.encode(v, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new binary_1.BinaryReader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGenesisState);
        message.feeder_delegations = [];
        message.exchange_rates = [];
        message.miss_counters = [];
        message.aggregate_exchange_rate_prevotes = [];
        message.aggregate_exchange_rate_votes = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = oracle_1.Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.feeder_delegations.push(exports.FeederDelegation.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.exchange_rates.push(oracle_1.ExchangeRateTuple.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.miss_counters.push(exports.MissCounter.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.aggregate_exchange_rate_prevotes.push(oracle_1.AggregateExchangeRatePrevote.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.aggregate_exchange_rate_votes.push(oracle_1.AggregateExchangeRateVote.decode(reader, reader.uint32()));
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
        message.feeder_delegations = [];
        message.exchange_rates = [];
        message.miss_counters = [];
        message.aggregate_exchange_rate_prevotes = [];
        message.aggregate_exchange_rate_votes = [];
        if (object.params !== undefined && object.params !== null) {
            message.params = oracle_1.Params.fromJSON(object.params);
        }
        else {
            message.params = undefined;
        }
        if (object.feeder_delegations !== undefined &&
            object.feeder_delegations !== null) {
            for (const e of object.feeder_delegations) {
                message.feeder_delegations.push(exports.FeederDelegation.fromJSON(e));
            }
        }
        if (object.exchange_rates !== undefined && object.exchange_rates !== null) {
            for (const e of object.exchange_rates) {
                message.exchange_rates.push(oracle_1.ExchangeRateTuple.fromJSON(e));
            }
        }
        if (object.miss_counters !== undefined && object.miss_counters !== null) {
            for (const e of object.miss_counters) {
                message.miss_counters.push(exports.MissCounter.fromJSON(e));
            }
        }
        if (object.aggregate_exchange_rate_prevotes !== undefined &&
            object.aggregate_exchange_rate_prevotes !== null) {
            for (const e of object.aggregate_exchange_rate_prevotes) {
                message.aggregate_exchange_rate_prevotes.push(oracle_1.AggregateExchangeRatePrevote.fromJSON(e));
            }
        }
        if (object.aggregate_exchange_rate_votes !== undefined &&
            object.aggregate_exchange_rate_votes !== null) {
            for (const e of object.aggregate_exchange_rate_votes) {
                message.aggregate_exchange_rate_votes.push(oracle_1.AggregateExchangeRateVote.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined &&
            (obj.params = message.params ? oracle_1.Params.toJSON(message.params) : undefined);
        if (message.feeder_delegations) {
            obj.feeder_delegations = message.feeder_delegations.map((e) => e ? exports.FeederDelegation.toJSON(e) : undefined);
        }
        else {
            obj.feeder_delegations = [];
        }
        if (message.exchange_rates) {
            obj.exchange_rates = message.exchange_rates.map((e) => e ? oracle_1.ExchangeRateTuple.toJSON(e) : undefined);
        }
        else {
            obj.exchange_rates = [];
        }
        if (message.miss_counters) {
            obj.miss_counters = message.miss_counters.map((e) => e ? exports.MissCounter.toJSON(e) : undefined);
        }
        else {
            obj.miss_counters = [];
        }
        if (message.aggregate_exchange_rate_prevotes) {
            obj.aggregate_exchange_rate_prevotes =
                message.aggregate_exchange_rate_prevotes.map((e) => e ? oracle_1.AggregateExchangeRatePrevote.toJSON(e) : undefined);
        }
        else {
            obj.aggregate_exchange_rate_prevotes = [];
        }
        if (message.aggregate_exchange_rate_votes) {
            obj.aggregate_exchange_rate_votes =
                message.aggregate_exchange_rate_votes.map((e) => e ? oracle_1.AggregateExchangeRateVote.toJSON(e) : undefined);
        }
        else {
            obj.aggregate_exchange_rate_votes = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseGenesisState);
        message.feeder_delegations = [];
        message.exchange_rates = [];
        message.miss_counters = [];
        message.aggregate_exchange_rate_prevotes = [];
        message.aggregate_exchange_rate_votes = [];
        if (object.params !== undefined && object.params !== null) {
            message.params = oracle_1.Params.fromPartial(object.params);
        }
        else {
            message.params = undefined;
        }
        if (object.feeder_delegations !== undefined &&
            object.feeder_delegations !== null) {
            for (const e of object.feeder_delegations) {
                message.feeder_delegations.push(exports.FeederDelegation.fromPartial(e));
            }
        }
        if (object.exchange_rates !== undefined && object.exchange_rates !== null) {
            for (const e of object.exchange_rates) {
                message.exchange_rates.push(oracle_1.ExchangeRateTuple.fromPartial(e));
            }
        }
        if (object.miss_counters !== undefined && object.miss_counters !== null) {
            for (const e of object.miss_counters) {
                message.miss_counters.push(exports.MissCounter.fromPartial(e));
            }
        }
        if (object.aggregate_exchange_rate_prevotes !== undefined &&
            object.aggregate_exchange_rate_prevotes !== null) {
            for (const e of object.aggregate_exchange_rate_prevotes) {
                message.aggregate_exchange_rate_prevotes.push(oracle_1.AggregateExchangeRatePrevote.fromPartial(e));
            }
        }
        if (object.aggregate_exchange_rate_votes !== undefined &&
            object.aggregate_exchange_rate_votes !== null) {
            for (const e of object.aggregate_exchange_rate_votes) {
                message.aggregate_exchange_rate_votes.push(oracle_1.AggregateExchangeRateVote.fromPartial(e));
            }
        }
        return message;
    },
};
const baseFeederDelegation = {
    feeder_address: "",
    validator_address: "",
};
exports.FeederDelegation = {
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.feeder_address !== "") {
            writer.uint32(10).string(message.feeder_address);
        }
        if (message.validator_address !== "") {
            writer.uint32(18).string(message.validator_address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new binary_1.BinaryReader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseFeederDelegation);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.feeder_address = reader.string();
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
        const message = Object.assign({}, baseFeederDelegation);
        if (object.feeder_address !== undefined && object.feeder_address !== null) {
            message.feeder_address = String(object.feeder_address);
        }
        else {
            message.feeder_address = "";
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
        message.feeder_address !== undefined &&
            (obj.feeder_address = message.feeder_address);
        message.validator_address !== undefined &&
            (obj.validator_address = message.validator_address);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseFeederDelegation);
        if (object.feeder_address !== undefined && object.feeder_address !== null) {
            message.feeder_address = object.feeder_address;
        }
        else {
            message.feeder_address = "";
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
const baseMissCounter = { validator_address: "", miss_counter: 0 };
exports.MissCounter = {
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.validator_address !== "") {
            writer.uint32(10).string(message.validator_address);
        }
        if (message.miss_counter !== BigInt(0)) {
            writer.uint32(16).uint64(message.miss_counter);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new binary_1.BinaryReader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMissCounter);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validator_address = reader.string();
                    break;
                case 2:
                    message.miss_counter = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMissCounter);
        if (object.validator_address !== undefined &&
            object.validator_address !== null) {
            message.validator_address = String(object.validator_address);
        }
        else {
            message.validator_address = "";
        }
        if (object.miss_counter !== undefined && object.miss_counter !== null) {
            message.miss_counter = BigInt(object.miss_counter);
        }
        else {
            message.miss_counter = BigInt(0);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.validator_address !== undefined &&
            (obj.validator_address = message.validator_address);
        message.miss_counter !== undefined &&
            (obj.miss_counter = message.miss_counter);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMissCounter);
        if (object.validator_address !== undefined &&
            object.validator_address !== null) {
            message.validator_address = object.validator_address;
        }
        else {
            message.validator_address = "";
        }
        if (object.miss_counter !== undefined && object.miss_counter !== null) {
            message.miss_counter = object.miss_counter;
        }
        else {
            message.miss_counter = BigInt(0);
        }
        return message;
    },
};
