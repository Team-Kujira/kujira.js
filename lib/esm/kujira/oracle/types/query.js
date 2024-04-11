import { BinaryReader, BinaryWriter } from "cosmjs-types/binary";
import { DecCoin } from "cosmjs-types/cosmos/base/v1beta1/coin";
import { AggregateExchangeRatePrevote, AggregateExchangeRateVote, Params, } from "./oracle";
export const protobufPackage = "kujira.oracle";
const baseQueryExchangeRateRequest = { denom: "" };
export const QueryExchangeRateRequest = {
    encode(message, writer = BinaryWriter.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new BinaryReader(input) : input;
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
export const QueryExchangeRateResponse = {
    encode(message, writer = BinaryWriter.create()) {
        if (message.exchange_rate !== "") {
            writer.uint32(10).string(message.exchange_rate);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new BinaryReader(input) : input;
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
export const QueryExchangeRatesRequest = {
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new BinaryReader(input) : input;
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
export const QueryExchangeRatesResponse = {
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.exchange_rates) {
            DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new BinaryReader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryExchangeRatesResponse);
        message.exchange_rates = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.exchange_rates.push(DecCoin.decode(reader, reader.uint32()));
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
                message.exchange_rates.push(DecCoin.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.exchange_rates) {
            obj.exchange_rates = message.exchange_rates.map((e) => e ? DecCoin.toJSON(e) : undefined);
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
                message.exchange_rates.push(DecCoin.fromPartial(e));
            }
        }
        return message;
    },
};
const baseQueryActivesRequest = {};
export const QueryActivesRequest = {
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new BinaryReader(input) : input;
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
export const QueryActivesResponse = {
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.actives) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new BinaryReader(input) : input;
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
export const QueryVoteTargetsRequest = {
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new BinaryReader(input) : input;
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
export const QueryVoteTargetsResponse = {
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.vote_targets) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new BinaryReader(input) : input;
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
export const QueryFeederDelegationRequest = {
    encode(message, writer = BinaryWriter.create()) {
        if (message.validator_addr !== "") {
            writer.uint32(10).string(message.validator_addr);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new BinaryReader(input) : input;
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
export const QueryFeederDelegationResponse = {
    encode(message, writer = BinaryWriter.create()) {
        if (message.feeder_addr !== "") {
            writer.uint32(10).string(message.feeder_addr);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new BinaryReader(input) : input;
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
export const QueryMissCounterRequest = {
    encode(message, writer = BinaryWriter.create()) {
        if (message.validator_addr !== "") {
            writer.uint32(10).string(message.validator_addr);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new BinaryReader(input) : input;
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
export const QueryMissCounterResponse = {
    encode(message, writer = BinaryWriter.create()) {
        if (message.miss_counter !== 0) {
            writer.uint32(8).uint64(message.miss_counter);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new BinaryReader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryMissCounterResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.miss_counter = reader.uint32();
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
export const QueryAggregatePrevoteRequest = {
    encode(message, writer = BinaryWriter.create()) {
        if (message.validator_addr !== "") {
            writer.uint32(10).string(message.validator_addr);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new BinaryReader(input) : input;
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
export const QueryAggregatePrevoteResponse = {
    encode(message, writer = BinaryWriter.create()) {
        if (message.aggregate_prevote !== undefined) {
            AggregateExchangeRatePrevote.encode(message.aggregate_prevote, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new BinaryReader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryAggregatePrevoteResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.aggregate_prevote = AggregateExchangeRatePrevote.decode(reader, reader.uint32());
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
            message.aggregate_prevote = AggregateExchangeRatePrevote.fromJSON(object.aggregate_prevote);
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
                ? AggregateExchangeRatePrevote.toJSON(message.aggregate_prevote)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryAggregatePrevoteResponse);
        if (object.aggregate_prevote !== undefined &&
            object.aggregate_prevote !== null) {
            message.aggregate_prevote = AggregateExchangeRatePrevote.fromPartial(object.aggregate_prevote);
        }
        else {
            message.aggregate_prevote = undefined;
        }
        return message;
    },
};
const baseQueryAggregatePrevotesRequest = {};
export const QueryAggregatePrevotesRequest = {
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new BinaryReader(input) : input;
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
export const QueryAggregatePrevotesResponse = {
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.aggregate_prevotes) {
            AggregateExchangeRatePrevote.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new BinaryReader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryAggregatePrevotesResponse);
        message.aggregate_prevotes = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.aggregate_prevotes.push(AggregateExchangeRatePrevote.decode(reader, reader.uint32()));
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
                message.aggregate_prevotes.push(AggregateExchangeRatePrevote.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.aggregate_prevotes) {
            obj.aggregate_prevotes = message.aggregate_prevotes.map((e) => e ? AggregateExchangeRatePrevote.toJSON(e) : undefined);
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
                message.aggregate_prevotes.push(AggregateExchangeRatePrevote.fromPartial(e));
            }
        }
        return message;
    },
};
const baseQueryAggregateVoteRequest = { validator_addr: "" };
export const QueryAggregateVoteRequest = {
    encode(message, writer = BinaryWriter.create()) {
        if (message.validator_addr !== "") {
            writer.uint32(10).string(message.validator_addr);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new BinaryReader(input) : input;
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
export const QueryAggregateVoteResponse = {
    encode(message, writer = BinaryWriter.create()) {
        if (message.aggregate_vote !== undefined) {
            AggregateExchangeRateVote.encode(message.aggregate_vote, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new BinaryReader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryAggregateVoteResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.aggregate_vote = AggregateExchangeRateVote.decode(reader, reader.uint32());
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
            message.aggregate_vote = AggregateExchangeRateVote.fromJSON(object.aggregate_vote);
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
                ? AggregateExchangeRateVote.toJSON(message.aggregate_vote)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryAggregateVoteResponse);
        if (object.aggregate_vote !== undefined && object.aggregate_vote !== null) {
            message.aggregate_vote = AggregateExchangeRateVote.fromPartial(object.aggregate_vote);
        }
        else {
            message.aggregate_vote = undefined;
        }
        return message;
    },
};
const baseQueryAggregateVotesRequest = {};
export const QueryAggregateVotesRequest = {
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new BinaryReader(input) : input;
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
export const QueryAggregateVotesResponse = {
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.aggregate_votes) {
            AggregateExchangeRateVote.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new BinaryReader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryAggregateVotesResponse);
        message.aggregate_votes = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.aggregate_votes.push(AggregateExchangeRateVote.decode(reader, reader.uint32()));
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
                message.aggregate_votes.push(AggregateExchangeRateVote.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.aggregate_votes) {
            obj.aggregate_votes = message.aggregate_votes.map((e) => e ? AggregateExchangeRateVote.toJSON(e) : undefined);
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
                message.aggregate_votes.push(AggregateExchangeRateVote.fromPartial(e));
            }
        }
        return message;
    },
};
const baseQueryParamsRequest = {};
export const QueryParamsRequest = {
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new BinaryReader(input) : input;
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
    encode(message, writer = BinaryWriter.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new BinaryReader(input) : input;
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
    ExchangeRate(request) {
        const data = QueryExchangeRateRequest.encode(request).finish();
        const promise = this.rpc.request("kujira.oracle.Query", "ExchangeRate", data);
        return promise.then((data) => QueryExchangeRateResponse.decode(new BinaryReader(data)));
    }
    ExchangeRates(request) {
        const data = QueryExchangeRatesRequest.encode(request).finish();
        const promise = this.rpc.request("kujira.oracle.Query", "ExchangeRates", data);
        return promise.then((data) => QueryExchangeRatesResponse.decode(new BinaryReader(data)));
    }
    Actives(request) {
        const data = QueryActivesRequest.encode(request).finish();
        const promise = this.rpc.request("kujira.oracle.Query", "Actives", data);
        return promise.then((data) => QueryActivesResponse.decode(new BinaryReader(data)));
    }
    FeederDelegation(request) {
        const data = QueryFeederDelegationRequest.encode(request).finish();
        const promise = this.rpc.request("kujira.oracle.Query", "FeederDelegation", data);
        return promise.then((data) => QueryFeederDelegationResponse.decode(new BinaryReader(data)));
    }
    MissCounter(request) {
        const data = QueryMissCounterRequest.encode(request).finish();
        const promise = this.rpc.request("kujira.oracle.Query", "MissCounter", data);
        return promise.then((data) => QueryMissCounterResponse.decode(new BinaryReader(data)));
    }
    AggregatePrevote(request) {
        const data = QueryAggregatePrevoteRequest.encode(request).finish();
        const promise = this.rpc.request("kujira.oracle.Query", "AggregatePrevote", data);
        return promise.then((data) => QueryAggregatePrevoteResponse.decode(new BinaryReader(data)));
    }
    AggregatePrevotes(request) {
        const data = QueryAggregatePrevotesRequest.encode(request).finish();
        const promise = this.rpc.request("kujira.oracle.Query", "AggregatePrevotes", data);
        return promise.then((data) => QueryAggregatePrevotesResponse.decode(new BinaryReader(data)));
    }
    AggregateVote(request) {
        const data = QueryAggregateVoteRequest.encode(request).finish();
        const promise = this.rpc.request("kujira.oracle.Query", "AggregateVote", data);
        return promise.then((data) => QueryAggregateVoteResponse.decode(new BinaryReader(data)));
    }
    AggregateVotes(request) {
        const data = QueryAggregateVotesRequest.encode(request).finish();
        const promise = this.rpc.request("kujira.oracle.Query", "AggregateVotes", data);
        return promise.then((data) => QueryAggregateVotesResponse.decode(new BinaryReader(data)));
    }
    Params(request) {
        const data = QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("kujira.oracle.Query", "Params", data);
        return promise.then((data) => QueryParamsResponse.decode(new BinaryReader(data)));
    }
}
