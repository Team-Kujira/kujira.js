"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryClientImpl = exports.QueryParamsResponse = exports.QueryParamsRequest = exports.QueryAggregateVotesResponse = exports.QueryAggregateVotesRequest = exports.QueryAggregateVoteResponse = exports.QueryAggregateVoteRequest = exports.QueryAggregatePrevotesResponse = exports.QueryAggregatePrevotesRequest = exports.QueryAggregatePrevoteResponse = exports.QueryAggregatePrevoteRequest = exports.QueryMissCounterResponse = exports.QueryMissCounterRequest = exports.QueryFeederDelegationResponse = exports.QueryFeederDelegationRequest = exports.QueryVoteTargetsResponse = exports.QueryVoteTargetsRequest = exports.QueryActivesResponse = exports.QueryActivesRequest = exports.QueryExchangeRatesResponse = exports.QueryExchangeRatesRequest = exports.QueryExchangeRateResponse = exports.QueryExchangeRateRequest = exports.protobufPackage = void 0;
const coin_1 = require("cosmjs-types/cosmos/base/v1beta1/coin");
const minimal_1 = require("protobufjs/minimal");
const oracle_1 = require("./oracle");
exports.protobufPackage = "kujira.oracle";
const baseQueryExchangeRateRequest = { denom: "" };
exports.QueryExchangeRateRequest = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryExchangeRateRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryExchangeRateRequest);
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = String(object.denom);
        }
        else {
            message.denom = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.denom !== undefined && (obj.denom = message.denom);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryExchangeRateRequest);
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        else {
            message.denom = "";
        }
        return message;
    },
};
const baseQueryExchangeRateResponse = { exchange_rate: "" };
exports.QueryExchangeRateResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.exchange_rate !== "") {
            writer.uint32(10).string(message.exchange_rate);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryExchangeRateResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.exchange_rate = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryExchangeRateResponse);
        if (object.exchange_rate !== undefined && object.exchange_rate !== null) {
            message.exchange_rate = String(object.exchange_rate);
        }
        else {
            message.exchange_rate = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.exchange_rate !== undefined &&
            (obj.exchange_rate = message.exchange_rate);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryExchangeRateResponse);
        if (object.exchange_rate !== undefined && object.exchange_rate !== null) {
            message.exchange_rate = object.exchange_rate;
        }
        else {
            message.exchange_rate = "";
        }
        return message;
    },
};
const baseQueryExchangeRatesRequest = {};
exports.QueryExchangeRatesRequest = {
    encode(_, writer = minimal_1.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryExchangeRatesRequest);
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
        const message = Object.assign({}, baseQueryExchangeRatesRequest);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseQueryExchangeRatesRequest);
        return message;
    },
};
const baseQueryExchangeRatesResponse = {};
exports.QueryExchangeRatesResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        for (const v of message.exchange_rates) {
            coin_1.DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryExchangeRatesResponse);
        message.exchange_rates = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.exchange_rates.push(coin_1.DecCoin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryExchangeRatesResponse);
        message.exchange_rates = [];
        if (object.exchange_rates !== undefined && object.exchange_rates !== null) {
            for (const e of object.exchange_rates) {
                message.exchange_rates.push(coin_1.DecCoin.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.exchange_rates) {
            obj.exchange_rates = message.exchange_rates.map((e) => e ? coin_1.DecCoin.toJSON(e) : undefined);
        }
        else {
            obj.exchange_rates = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryExchangeRatesResponse);
        message.exchange_rates = [];
        if (object.exchange_rates !== undefined && object.exchange_rates !== null) {
            for (const e of object.exchange_rates) {
                message.exchange_rates.push(coin_1.DecCoin.fromPartial(e));
            }
        }
        return message;
    },
};
const baseQueryActivesRequest = {};
exports.QueryActivesRequest = {
    encode(_, writer = minimal_1.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryActivesRequest);
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
        const message = Object.assign({}, baseQueryActivesRequest);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseQueryActivesRequest);
        return message;
    },
};
const baseQueryActivesResponse = { actives: "" };
exports.QueryActivesResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        for (const v of message.actives) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryActivesResponse);
        message.actives = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.actives.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryActivesResponse);
        message.actives = [];
        if (object.actives !== undefined && object.actives !== null) {
            for (const e of object.actives) {
                message.actives.push(String(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.actives) {
            obj.actives = message.actives.map((e) => e);
        }
        else {
            obj.actives = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryActivesResponse);
        message.actives = [];
        if (object.actives !== undefined && object.actives !== null) {
            for (const e of object.actives) {
                message.actives.push(e);
            }
        }
        return message;
    },
};
const baseQueryVoteTargetsRequest = {};
exports.QueryVoteTargetsRequest = {
    encode(_, writer = minimal_1.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryVoteTargetsRequest);
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
        const message = Object.assign({}, baseQueryVoteTargetsRequest);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseQueryVoteTargetsRequest);
        return message;
    },
};
const baseQueryVoteTargetsResponse = { vote_targets: "" };
exports.QueryVoteTargetsResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        for (const v of message.vote_targets) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryVoteTargetsResponse);
        message.vote_targets = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.vote_targets.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryVoteTargetsResponse);
        message.vote_targets = [];
        if (object.vote_targets !== undefined && object.vote_targets !== null) {
            for (const e of object.vote_targets) {
                message.vote_targets.push(String(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.vote_targets) {
            obj.vote_targets = message.vote_targets.map((e) => e);
        }
        else {
            obj.vote_targets = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryVoteTargetsResponse);
        message.vote_targets = [];
        if (object.vote_targets !== undefined && object.vote_targets !== null) {
            for (const e of object.vote_targets) {
                message.vote_targets.push(e);
            }
        }
        return message;
    },
};
const baseQueryFeederDelegationRequest = { validator_addr: "" };
exports.QueryFeederDelegationRequest = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.validator_addr !== "") {
            writer.uint32(10).string(message.validator_addr);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryFeederDelegationRequest);
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
        const message = Object.assign({}, baseQueryFeederDelegationRequest);
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
        const message = Object.assign({}, baseQueryFeederDelegationRequest);
        if (object.validator_addr !== undefined && object.validator_addr !== null) {
            message.validator_addr = object.validator_addr;
        }
        else {
            message.validator_addr = "";
        }
        return message;
    },
};
const baseQueryFeederDelegationResponse = { feeder_addr: "" };
exports.QueryFeederDelegationResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.feeder_addr !== "") {
            writer.uint32(10).string(message.feeder_addr);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryFeederDelegationResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.feeder_addr = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryFeederDelegationResponse);
        if (object.feeder_addr !== undefined && object.feeder_addr !== null) {
            message.feeder_addr = String(object.feeder_addr);
        }
        else {
            message.feeder_addr = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.feeder_addr !== undefined &&
            (obj.feeder_addr = message.feeder_addr);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryFeederDelegationResponse);
        if (object.feeder_addr !== undefined && object.feeder_addr !== null) {
            message.feeder_addr = object.feeder_addr;
        }
        else {
            message.feeder_addr = "";
        }
        return message;
    },
};
const baseQueryMissCounterRequest = { validator_addr: "" };
exports.QueryMissCounterRequest = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.validator_addr !== "") {
            writer.uint32(10).string(message.validator_addr);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryMissCounterRequest);
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
        const message = Object.assign({}, baseQueryMissCounterRequest);
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
        const message = Object.assign({}, baseQueryMissCounterRequest);
        if (object.validator_addr !== undefined && object.validator_addr !== null) {
            message.validator_addr = object.validator_addr;
        }
        else {
            message.validator_addr = "";
        }
        return message;
    },
};
const baseQueryMissCounterResponse = { miss_counter: 0 };
exports.QueryMissCounterResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.miss_counter !== 0) {
            writer.uint32(8).uint64(message.miss_counter);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryMissCounterResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.miss_counter = reader.uint64().toNumber();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryMissCounterResponse);
        if (object.miss_counter !== undefined && object.miss_counter !== null) {
            message.miss_counter = Number(object.miss_counter);
        }
        else {
            message.miss_counter = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.miss_counter !== undefined &&
            (obj.miss_counter = message.miss_counter);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryMissCounterResponse);
        if (object.miss_counter !== undefined && object.miss_counter !== null) {
            message.miss_counter = object.miss_counter;
        }
        else {
            message.miss_counter = 0;
        }
        return message;
    },
};
const baseQueryAggregatePrevoteRequest = { validator_addr: "" };
exports.QueryAggregatePrevoteRequest = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.validator_addr !== "") {
            writer.uint32(10).string(message.validator_addr);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryAggregatePrevoteRequest);
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
        const message = Object.assign({}, baseQueryAggregatePrevoteRequest);
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
        const message = Object.assign({}, baseQueryAggregatePrevoteRequest);
        if (object.validator_addr !== undefined && object.validator_addr !== null) {
            message.validator_addr = object.validator_addr;
        }
        else {
            message.validator_addr = "";
        }
        return message;
    },
};
const baseQueryAggregatePrevoteResponse = {};
exports.QueryAggregatePrevoteResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.aggregate_prevote !== undefined) {
            oracle_1.AggregateExchangeRatePrevote.encode(message.aggregate_prevote, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryAggregatePrevoteResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.aggregate_prevote = oracle_1.AggregateExchangeRatePrevote.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryAggregatePrevoteResponse);
        if (object.aggregate_prevote !== undefined &&
            object.aggregate_prevote !== null) {
            message.aggregate_prevote = oracle_1.AggregateExchangeRatePrevote.fromJSON(object.aggregate_prevote);
        }
        else {
            message.aggregate_prevote = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.aggregate_prevote !== undefined &&
            (obj.aggregate_prevote = message.aggregate_prevote
                ? oracle_1.AggregateExchangeRatePrevote.toJSON(message.aggregate_prevote)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryAggregatePrevoteResponse);
        if (object.aggregate_prevote !== undefined &&
            object.aggregate_prevote !== null) {
            message.aggregate_prevote = oracle_1.AggregateExchangeRatePrevote.fromPartial(object.aggregate_prevote);
        }
        else {
            message.aggregate_prevote = undefined;
        }
        return message;
    },
};
const baseQueryAggregatePrevotesRequest = {};
exports.QueryAggregatePrevotesRequest = {
    encode(_, writer = minimal_1.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryAggregatePrevotesRequest);
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
        const message = Object.assign({}, baseQueryAggregatePrevotesRequest);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseQueryAggregatePrevotesRequest);
        return message;
    },
};
const baseQueryAggregatePrevotesResponse = {};
exports.QueryAggregatePrevotesResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        for (const v of message.aggregate_prevotes) {
            oracle_1.AggregateExchangeRatePrevote.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryAggregatePrevotesResponse);
        message.aggregate_prevotes = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.aggregate_prevotes.push(oracle_1.AggregateExchangeRatePrevote.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryAggregatePrevotesResponse);
        message.aggregate_prevotes = [];
        if (object.aggregate_prevotes !== undefined &&
            object.aggregate_prevotes !== null) {
            for (const e of object.aggregate_prevotes) {
                message.aggregate_prevotes.push(oracle_1.AggregateExchangeRatePrevote.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.aggregate_prevotes) {
            obj.aggregate_prevotes = message.aggregate_prevotes.map((e) => e ? oracle_1.AggregateExchangeRatePrevote.toJSON(e) : undefined);
        }
        else {
            obj.aggregate_prevotes = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryAggregatePrevotesResponse);
        message.aggregate_prevotes = [];
        if (object.aggregate_prevotes !== undefined &&
            object.aggregate_prevotes !== null) {
            for (const e of object.aggregate_prevotes) {
                message.aggregate_prevotes.push(oracle_1.AggregateExchangeRatePrevote.fromPartial(e));
            }
        }
        return message;
    },
};
const baseQueryAggregateVoteRequest = { validator_addr: "" };
exports.QueryAggregateVoteRequest = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.validator_addr !== "") {
            writer.uint32(10).string(message.validator_addr);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryAggregateVoteRequest);
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
        const message = Object.assign({}, baseQueryAggregateVoteRequest);
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
        const message = Object.assign({}, baseQueryAggregateVoteRequest);
        if (object.validator_addr !== undefined && object.validator_addr !== null) {
            message.validator_addr = object.validator_addr;
        }
        else {
            message.validator_addr = "";
        }
        return message;
    },
};
const baseQueryAggregateVoteResponse = {};
exports.QueryAggregateVoteResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.aggregate_vote !== undefined) {
            oracle_1.AggregateExchangeRateVote.encode(message.aggregate_vote, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryAggregateVoteResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.aggregate_vote = oracle_1.AggregateExchangeRateVote.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryAggregateVoteResponse);
        if (object.aggregate_vote !== undefined && object.aggregate_vote !== null) {
            message.aggregate_vote = oracle_1.AggregateExchangeRateVote.fromJSON(object.aggregate_vote);
        }
        else {
            message.aggregate_vote = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.aggregate_vote !== undefined &&
            (obj.aggregate_vote = message.aggregate_vote
                ? oracle_1.AggregateExchangeRateVote.toJSON(message.aggregate_vote)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryAggregateVoteResponse);
        if (object.aggregate_vote !== undefined && object.aggregate_vote !== null) {
            message.aggregate_vote = oracle_1.AggregateExchangeRateVote.fromPartial(object.aggregate_vote);
        }
        else {
            message.aggregate_vote = undefined;
        }
        return message;
    },
};
const baseQueryAggregateVotesRequest = {};
exports.QueryAggregateVotesRequest = {
    encode(_, writer = minimal_1.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryAggregateVotesRequest);
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
        const message = Object.assign({}, baseQueryAggregateVotesRequest);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseQueryAggregateVotesRequest);
        return message;
    },
};
const baseQueryAggregateVotesResponse = {};
exports.QueryAggregateVotesResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        for (const v of message.aggregate_votes) {
            oracle_1.AggregateExchangeRateVote.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryAggregateVotesResponse);
        message.aggregate_votes = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.aggregate_votes.push(oracle_1.AggregateExchangeRateVote.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryAggregateVotesResponse);
        message.aggregate_votes = [];
        if (object.aggregate_votes !== undefined &&
            object.aggregate_votes !== null) {
            for (const e of object.aggregate_votes) {
                message.aggregate_votes.push(oracle_1.AggregateExchangeRateVote.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.aggregate_votes) {
            obj.aggregate_votes = message.aggregate_votes.map((e) => e ? oracle_1.AggregateExchangeRateVote.toJSON(e) : undefined);
        }
        else {
            obj.aggregate_votes = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryAggregateVotesResponse);
        message.aggregate_votes = [];
        if (object.aggregate_votes !== undefined &&
            object.aggregate_votes !== null) {
            for (const e of object.aggregate_votes) {
                message.aggregate_votes.push(oracle_1.AggregateExchangeRateVote.fromPartial(e));
            }
        }
        return message;
    },
};
const baseQueryParamsRequest = {};
exports.QueryParamsRequest = {
    encode(_, writer = minimal_1.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
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
exports.QueryParamsResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.params !== undefined) {
            oracle_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryParamsResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = oracle_1.Params.decode(reader, reader.uint32());
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
            message.params = oracle_1.Params.fromJSON(object.params);
        }
        else {
            message.params = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined &&
            (obj.params = message.params ? oracle_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryParamsResponse);
        if (object.params !== undefined && object.params !== null) {
            message.params = oracle_1.Params.fromPartial(object.params);
        }
        else {
            message.params = undefined;
        }
        return message;
    },
};
class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    ExchangeRate(request) {
        const data = exports.QueryExchangeRateRequest.encode(request).finish();
        const promise = this.rpc.request("kujira.oracle.Query", "ExchangeRate", data);
        return promise.then((data) => exports.QueryExchangeRateResponse.decode(new minimal_1.Reader(data)));
    }
    ExchangeRates(request) {
        const data = exports.QueryExchangeRatesRequest.encode(request).finish();
        const promise = this.rpc.request("kujira.oracle.Query", "ExchangeRates", data);
        return promise.then((data) => exports.QueryExchangeRatesResponse.decode(new minimal_1.Reader(data)));
    }
    Actives(request) {
        const data = exports.QueryActivesRequest.encode(request).finish();
        const promise = this.rpc.request("kujira.oracle.Query", "Actives", data);
        return promise.then((data) => exports.QueryActivesResponse.decode(new minimal_1.Reader(data)));
    }
    FeederDelegation(request) {
        const data = exports.QueryFeederDelegationRequest.encode(request).finish();
        const promise = this.rpc.request("kujira.oracle.Query", "FeederDelegation", data);
        return promise.then((data) => exports.QueryFeederDelegationResponse.decode(new minimal_1.Reader(data)));
    }
    MissCounter(request) {
        const data = exports.QueryMissCounterRequest.encode(request).finish();
        const promise = this.rpc.request("kujira.oracle.Query", "MissCounter", data);
        return promise.then((data) => exports.QueryMissCounterResponse.decode(new minimal_1.Reader(data)));
    }
    AggregatePrevote(request) {
        const data = exports.QueryAggregatePrevoteRequest.encode(request).finish();
        const promise = this.rpc.request("kujira.oracle.Query", "AggregatePrevote", data);
        return promise.then((data) => exports.QueryAggregatePrevoteResponse.decode(new minimal_1.Reader(data)));
    }
    AggregatePrevotes(request) {
        const data = exports.QueryAggregatePrevotesRequest.encode(request).finish();
        const promise = this.rpc.request("kujira.oracle.Query", "AggregatePrevotes", data);
        return promise.then((data) => exports.QueryAggregatePrevotesResponse.decode(new minimal_1.Reader(data)));
    }
    AggregateVote(request) {
        const data = exports.QueryAggregateVoteRequest.encode(request).finish();
        const promise = this.rpc.request("kujira.oracle.Query", "AggregateVote", data);
        return promise.then((data) => exports.QueryAggregateVoteResponse.decode(new minimal_1.Reader(data)));
    }
    AggregateVotes(request) {
        const data = exports.QueryAggregateVotesRequest.encode(request).finish();
        const promise = this.rpc.request("kujira.oracle.Query", "AggregateVotes", data);
        return promise.then((data) => exports.QueryAggregateVotesResponse.decode(new minimal_1.Reader(data)));
    }
    Params(request) {
        const data = exports.QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("kujira.oracle.Query", "Params", data);
        return promise.then((data) => exports.QueryParamsResponse.decode(new minimal_1.Reader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
