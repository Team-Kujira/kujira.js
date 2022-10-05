/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import {
  AggregateExchangeRatePrevote,
  AggregateExchangeRateVote,
  Params,
} from "./oracle";
import { DeepPartial } from "cosmjs-types/cosmos/staking/v1beta1/tx";
import { DecCoin } from "cosmjs-types/cosmos/base/v1beta1/coin";

export const protobufPackage = "kujira.oracle";

/** QueryExchangeRateRequest is the request type for the Query/ExchangeRate RPC method. */
export interface QueryExchangeRateRequest {
  /** denom defines the denomination to query for. */
  denom: string;
}

/**
 * QueryExchangeRateResponse is response type for the
 * Query/ExchangeRate RPC method.
 */
export interface QueryExchangeRateResponse {
  /** exchange_rate defines the exchange rate of whitelisted assets */
  exchange_rate: string;
}

/** QueryExchangeRatesRequest is the request type for the Query/ExchangeRates RPC method. */
export interface QueryExchangeRatesRequest {}

/**
 * QueryExchangeRatesResponse is response type for the
 * Query/ExchangeRates RPC method.
 */
export interface QueryExchangeRatesResponse {
  /** exchange_rates defines a list of the exchange rate for all whitelisted denoms. */
  exchange_rates: DecCoin[];
}

/** QueryActivesRequest is the request type for the Query/Actives RPC method. */
export interface QueryActivesRequest {}

/**
 * QueryActivesResponse is response type for the
 * Query/Actives RPC method.
 */
export interface QueryActivesResponse {
  /** actives defines a list of the denomination which oracle prices aggreed upon. */
  actives: string[];
}

/** QueryVoteTargetsRequest is the request type for the Query/VoteTargets RPC method. */
export interface QueryVoteTargetsRequest {}

/**
 * QueryVoteTargetsResponse is response type for the
 * Query/VoteTargets RPC method.
 */
export interface QueryVoteTargetsResponse {
  /**
   * vote_targets defines a list of the denomination in which everyone
   * should vote in the current vote period.
   */
  vote_targets: string[];
}

/** QueryFeederDelegationRequest is the request type for the Query/FeederDelegation RPC method. */
export interface QueryFeederDelegationRequest {
  /** validator defines the validator address to query for. */
  validator_addr: string;
}

/**
 * QueryFeederDelegationResponse is response type for the
 * Query/FeederDelegation RPC method.
 */
export interface QueryFeederDelegationResponse {
  /** feeder_addr defines the feeder delegation of a validator */
  feeder_addr: string;
}

/** QueryMissCounterRequest is the request type for the Query/MissCounter RPC method. */
export interface QueryMissCounterRequest {
  /** validator defines the validator address to query for. */
  validator_addr: string;
}

/**
 * QueryMissCounterResponse is response type for the
 * Query/MissCounter RPC method.
 */
export interface QueryMissCounterResponse {
  /** miss_counter defines the oracle miss counter of a validator */
  miss_counter: number;
}

/** QueryAggregatePrevoteRequest is the request type for the Query/AggregatePrevote RPC method. */
export interface QueryAggregatePrevoteRequest {
  /** validator defines the validator address to query for. */
  validator_addr: string;
}

/**
 * QueryAggregatePrevoteResponse is response type for the
 * Query/AggregatePrevote RPC method.
 */
export interface QueryAggregatePrevoteResponse {
  /** aggregate_prevote defines oracle aggregate prevote submitted by a validator in the current vote period */
  aggregate_prevote: AggregateExchangeRatePrevote | undefined;
}

/** QueryAggregatePrevotesRequest is the request type for the Query/AggregatePrevotes RPC method. */
export interface QueryAggregatePrevotesRequest {}

/**
 * QueryAggregatePrevotesResponse is response type for the
 * Query/AggregatePrevotes RPC method.
 */
export interface QueryAggregatePrevotesResponse {
  /** aggregate_prevotes defines all oracle aggregate prevotes submitted in the current vote period */
  aggregate_prevotes: AggregateExchangeRatePrevote[];
}

/** QueryAggregateVoteRequest is the request type for the Query/AggregateVote RPC method. */
export interface QueryAggregateVoteRequest {
  /** validator defines the validator address to query for. */
  validator_addr: string;
}

/**
 * QueryAggregateVoteResponse is response type for the
 * Query/AggregateVote RPC method.
 */
export interface QueryAggregateVoteResponse {
  /** aggregate_vote defines oracle aggregate vote submitted by a validator in the current vote period */
  aggregate_vote: AggregateExchangeRateVote | undefined;
}

/** QueryAggregateVotesRequest is the request type for the Query/AggregateVotes RPC method. */
export interface QueryAggregateVotesRequest {}

/**
 * QueryAggregateVotesResponse is response type for the
 * Query/AggregateVotes RPC method.
 */
export interface QueryAggregateVotesResponse {
  /** aggregate_votes defines all oracle aggregate votes submitted in the current vote period */
  aggregate_votes: AggregateExchangeRateVote[];
}

/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params defines the parameters of the module. */
  params: Params | undefined;
}

const baseQueryExchangeRateRequest: object = { denom: "" };

export const QueryExchangeRateRequest = {
  encode(
    message: QueryExchangeRateRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryExchangeRateRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryExchangeRateRequest,
    } as QueryExchangeRateRequest;
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

  fromJSON(object: any): QueryExchangeRateRequest {
    const message = {
      ...baseQueryExchangeRateRequest,
    } as QueryExchangeRateRequest;
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = String(object.denom);
    } else {
      message.denom = "";
    }
    return message;
  },

  toJSON(message: QueryExchangeRateRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryExchangeRateRequest>
  ): QueryExchangeRateRequest {
    const message = {
      ...baseQueryExchangeRateRequest,
    } as QueryExchangeRateRequest;
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    } else {
      message.denom = "";
    }
    return message;
  },
};

const baseQueryExchangeRateResponse: object = { exchange_rate: "" };

export const QueryExchangeRateResponse = {
  encode(
    message: QueryExchangeRateResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.exchange_rate !== "") {
      writer.uint32(10).string(message.exchange_rate);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryExchangeRateResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryExchangeRateResponse,
    } as QueryExchangeRateResponse;
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

  fromJSON(object: any): QueryExchangeRateResponse {
    const message = {
      ...baseQueryExchangeRateResponse,
    } as QueryExchangeRateResponse;
    if (object.exchange_rate !== undefined && object.exchange_rate !== null) {
      message.exchange_rate = String(object.exchange_rate);
    } else {
      message.exchange_rate = "";
    }
    return message;
  },

  toJSON(message: QueryExchangeRateResponse): unknown {
    const obj: any = {};
    message.exchange_rate !== undefined &&
      (obj.exchange_rate = message.exchange_rate);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryExchangeRateResponse>
  ): QueryExchangeRateResponse {
    const message = {
      ...baseQueryExchangeRateResponse,
    } as QueryExchangeRateResponse;
    if (object.exchange_rate !== undefined && object.exchange_rate !== null) {
      message.exchange_rate = object.exchange_rate;
    } else {
      message.exchange_rate = "";
    }
    return message;
  },
};

const baseQueryExchangeRatesRequest: object = {};

export const QueryExchangeRatesRequest = {
  encode(
    _: QueryExchangeRatesRequest,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryExchangeRatesRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryExchangeRatesRequest,
    } as QueryExchangeRatesRequest;
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

  fromJSON(_: any): QueryExchangeRatesRequest {
    const message = {
      ...baseQueryExchangeRatesRequest,
    } as QueryExchangeRatesRequest;
    return message;
  },

  toJSON(_: QueryExchangeRatesRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryExchangeRatesRequest>
  ): QueryExchangeRatesRequest {
    const message = {
      ...baseQueryExchangeRatesRequest,
    } as QueryExchangeRatesRequest;
    return message;
  },
};

const baseQueryExchangeRatesResponse: object = {};

export const QueryExchangeRatesResponse = {
  encode(
    message: QueryExchangeRatesResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.exchange_rates) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryExchangeRatesResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryExchangeRatesResponse,
    } as QueryExchangeRatesResponse;
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

  fromJSON(object: any): QueryExchangeRatesResponse {
    const message = {
      ...baseQueryExchangeRatesResponse,
    } as QueryExchangeRatesResponse;
    message.exchange_rates = [];
    if (object.exchange_rates !== undefined && object.exchange_rates !== null) {
      for (const e of object.exchange_rates) {
        message.exchange_rates.push(DecCoin.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: QueryExchangeRatesResponse): unknown {
    const obj: any = {};
    if (message.exchange_rates) {
      obj.exchange_rates = message.exchange_rates.map((e) =>
        e ? DecCoin.toJSON(e) : undefined
      );
    } else {
      obj.exchange_rates = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryExchangeRatesResponse>
  ): QueryExchangeRatesResponse {
    const message = {
      ...baseQueryExchangeRatesResponse,
    } as QueryExchangeRatesResponse;
    message.exchange_rates = [];
    if (object.exchange_rates !== undefined && object.exchange_rates !== null) {
      for (const e of object.exchange_rates) {
        message.exchange_rates.push(DecCoin.fromPartial(e));
      }
    }
    return message;
  },
};

const baseQueryActivesRequest: object = {};

export const QueryActivesRequest = {
  encode(_: QueryActivesRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryActivesRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryActivesRequest } as QueryActivesRequest;
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

  fromJSON(_: any): QueryActivesRequest {
    const message = { ...baseQueryActivesRequest } as QueryActivesRequest;
    return message;
  },

  toJSON(_: QueryActivesRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryActivesRequest>): QueryActivesRequest {
    const message = { ...baseQueryActivesRequest } as QueryActivesRequest;
    return message;
  },
};

const baseQueryActivesResponse: object = { actives: "" };

export const QueryActivesResponse = {
  encode(
    message: QueryActivesResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.actives) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryActivesResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryActivesResponse } as QueryActivesResponse;
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

  fromJSON(object: any): QueryActivesResponse {
    const message = { ...baseQueryActivesResponse } as QueryActivesResponse;
    message.actives = [];
    if (object.actives !== undefined && object.actives !== null) {
      for (const e of object.actives) {
        message.actives.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: QueryActivesResponse): unknown {
    const obj: any = {};
    if (message.actives) {
      obj.actives = message.actives.map((e) => e);
    } else {
      obj.actives = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<QueryActivesResponse>): QueryActivesResponse {
    const message = { ...baseQueryActivesResponse } as QueryActivesResponse;
    message.actives = [];
    if (object.actives !== undefined && object.actives !== null) {
      for (const e of object.actives) {
        message.actives.push(e);
      }
    }
    return message;
  },
};

const baseQueryVoteTargetsRequest: object = {};

export const QueryVoteTargetsRequest = {
  encode(_: QueryVoteTargetsRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryVoteTargetsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryVoteTargetsRequest,
    } as QueryVoteTargetsRequest;
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

  fromJSON(_: any): QueryVoteTargetsRequest {
    const message = {
      ...baseQueryVoteTargetsRequest,
    } as QueryVoteTargetsRequest;
    return message;
  },

  toJSON(_: QueryVoteTargetsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryVoteTargetsRequest>
  ): QueryVoteTargetsRequest {
    const message = {
      ...baseQueryVoteTargetsRequest,
    } as QueryVoteTargetsRequest;
    return message;
  },
};

const baseQueryVoteTargetsResponse: object = { vote_targets: "" };

export const QueryVoteTargetsResponse = {
  encode(
    message: QueryVoteTargetsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.vote_targets) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryVoteTargetsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryVoteTargetsResponse,
    } as QueryVoteTargetsResponse;
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

  fromJSON(object: any): QueryVoteTargetsResponse {
    const message = {
      ...baseQueryVoteTargetsResponse,
    } as QueryVoteTargetsResponse;
    message.vote_targets = [];
    if (object.vote_targets !== undefined && object.vote_targets !== null) {
      for (const e of object.vote_targets) {
        message.vote_targets.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: QueryVoteTargetsResponse): unknown {
    const obj: any = {};
    if (message.vote_targets) {
      obj.vote_targets = message.vote_targets.map((e) => e);
    } else {
      obj.vote_targets = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryVoteTargetsResponse>
  ): QueryVoteTargetsResponse {
    const message = {
      ...baseQueryVoteTargetsResponse,
    } as QueryVoteTargetsResponse;
    message.vote_targets = [];
    if (object.vote_targets !== undefined && object.vote_targets !== null) {
      for (const e of object.vote_targets) {
        message.vote_targets.push(e);
      }
    }
    return message;
  },
};

const baseQueryFeederDelegationRequest: object = { validator_addr: "" };

export const QueryFeederDelegationRequest = {
  encode(
    message: QueryFeederDelegationRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.validator_addr !== "") {
      writer.uint32(10).string(message.validator_addr);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryFeederDelegationRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryFeederDelegationRequest,
    } as QueryFeederDelegationRequest;
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

  fromJSON(object: any): QueryFeederDelegationRequest {
    const message = {
      ...baseQueryFeederDelegationRequest,
    } as QueryFeederDelegationRequest;
    if (object.validator_addr !== undefined && object.validator_addr !== null) {
      message.validator_addr = String(object.validator_addr);
    } else {
      message.validator_addr = "";
    }
    return message;
  },

  toJSON(message: QueryFeederDelegationRequest): unknown {
    const obj: any = {};
    message.validator_addr !== undefined &&
      (obj.validator_addr = message.validator_addr);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryFeederDelegationRequest>
  ): QueryFeederDelegationRequest {
    const message = {
      ...baseQueryFeederDelegationRequest,
    } as QueryFeederDelegationRequest;
    if (object.validator_addr !== undefined && object.validator_addr !== null) {
      message.validator_addr = object.validator_addr;
    } else {
      message.validator_addr = "";
    }
    return message;
  },
};

const baseQueryFeederDelegationResponse: object = { feeder_addr: "" };

export const QueryFeederDelegationResponse = {
  encode(
    message: QueryFeederDelegationResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.feeder_addr !== "") {
      writer.uint32(10).string(message.feeder_addr);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryFeederDelegationResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryFeederDelegationResponse,
    } as QueryFeederDelegationResponse;
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

  fromJSON(object: any): QueryFeederDelegationResponse {
    const message = {
      ...baseQueryFeederDelegationResponse,
    } as QueryFeederDelegationResponse;
    if (object.feeder_addr !== undefined && object.feeder_addr !== null) {
      message.feeder_addr = String(object.feeder_addr);
    } else {
      message.feeder_addr = "";
    }
    return message;
  },

  toJSON(message: QueryFeederDelegationResponse): unknown {
    const obj: any = {};
    message.feeder_addr !== undefined &&
      (obj.feeder_addr = message.feeder_addr);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryFeederDelegationResponse>
  ): QueryFeederDelegationResponse {
    const message = {
      ...baseQueryFeederDelegationResponse,
    } as QueryFeederDelegationResponse;
    if (object.feeder_addr !== undefined && object.feeder_addr !== null) {
      message.feeder_addr = object.feeder_addr;
    } else {
      message.feeder_addr = "";
    }
    return message;
  },
};

const baseQueryMissCounterRequest: object = { validator_addr: "" };

export const QueryMissCounterRequest = {
  encode(
    message: QueryMissCounterRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.validator_addr !== "") {
      writer.uint32(10).string(message.validator_addr);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryMissCounterRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryMissCounterRequest,
    } as QueryMissCounterRequest;
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

  fromJSON(object: any): QueryMissCounterRequest {
    const message = {
      ...baseQueryMissCounterRequest,
    } as QueryMissCounterRequest;
    if (object.validator_addr !== undefined && object.validator_addr !== null) {
      message.validator_addr = String(object.validator_addr);
    } else {
      message.validator_addr = "";
    }
    return message;
  },

  toJSON(message: QueryMissCounterRequest): unknown {
    const obj: any = {};
    message.validator_addr !== undefined &&
      (obj.validator_addr = message.validator_addr);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryMissCounterRequest>
  ): QueryMissCounterRequest {
    const message = {
      ...baseQueryMissCounterRequest,
    } as QueryMissCounterRequest;
    if (object.validator_addr !== undefined && object.validator_addr !== null) {
      message.validator_addr = object.validator_addr;
    } else {
      message.validator_addr = "";
    }
    return message;
  },
};

const baseQueryMissCounterResponse: object = { miss_counter: 0 };

export const QueryMissCounterResponse = {
  encode(
    message: QueryMissCounterResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.miss_counter !== 0) {
      writer.uint32(8).uint64(message.miss_counter);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryMissCounterResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryMissCounterResponse,
    } as QueryMissCounterResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.miss_counter = (reader.uint64() as Long).toNumber();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryMissCounterResponse {
    const message = {
      ...baseQueryMissCounterResponse,
    } as QueryMissCounterResponse;
    if (object.miss_counter !== undefined && object.miss_counter !== null) {
      message.miss_counter = Number(object.miss_counter);
    } else {
      message.miss_counter = 0;
    }
    return message;
  },

  toJSON(message: QueryMissCounterResponse): unknown {
    const obj: any = {};
    message.miss_counter !== undefined &&
      (obj.miss_counter = message.miss_counter);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryMissCounterResponse>
  ): QueryMissCounterResponse {
    const message = {
      ...baseQueryMissCounterResponse,
    } as QueryMissCounterResponse;
    if (object.miss_counter !== undefined && object.miss_counter !== null) {
      message.miss_counter = object.miss_counter;
    } else {
      message.miss_counter = 0;
    }
    return message;
  },
};

const baseQueryAggregatePrevoteRequest: object = { validator_addr: "" };

export const QueryAggregatePrevoteRequest = {
  encode(
    message: QueryAggregatePrevoteRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.validator_addr !== "") {
      writer.uint32(10).string(message.validator_addr);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAggregatePrevoteRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAggregatePrevoteRequest,
    } as QueryAggregatePrevoteRequest;
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

  fromJSON(object: any): QueryAggregatePrevoteRequest {
    const message = {
      ...baseQueryAggregatePrevoteRequest,
    } as QueryAggregatePrevoteRequest;
    if (object.validator_addr !== undefined && object.validator_addr !== null) {
      message.validator_addr = String(object.validator_addr);
    } else {
      message.validator_addr = "";
    }
    return message;
  },

  toJSON(message: QueryAggregatePrevoteRequest): unknown {
    const obj: any = {};
    message.validator_addr !== undefined &&
      (obj.validator_addr = message.validator_addr);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAggregatePrevoteRequest>
  ): QueryAggregatePrevoteRequest {
    const message = {
      ...baseQueryAggregatePrevoteRequest,
    } as QueryAggregatePrevoteRequest;
    if (object.validator_addr !== undefined && object.validator_addr !== null) {
      message.validator_addr = object.validator_addr;
    } else {
      message.validator_addr = "";
    }
    return message;
  },
};

const baseQueryAggregatePrevoteResponse: object = {};

export const QueryAggregatePrevoteResponse = {
  encode(
    message: QueryAggregatePrevoteResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.aggregate_prevote !== undefined) {
      AggregateExchangeRatePrevote.encode(
        message.aggregate_prevote,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAggregatePrevoteResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAggregatePrevoteResponse,
    } as QueryAggregatePrevoteResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.aggregate_prevote = AggregateExchangeRatePrevote.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAggregatePrevoteResponse {
    const message = {
      ...baseQueryAggregatePrevoteResponse,
    } as QueryAggregatePrevoteResponse;
    if (
      object.aggregate_prevote !== undefined &&
      object.aggregate_prevote !== null
    ) {
      message.aggregate_prevote = AggregateExchangeRatePrevote.fromJSON(
        object.aggregate_prevote
      );
    } else {
      message.aggregate_prevote = undefined;
    }
    return message;
  },

  toJSON(message: QueryAggregatePrevoteResponse): unknown {
    const obj: any = {};
    message.aggregate_prevote !== undefined &&
      (obj.aggregate_prevote = message.aggregate_prevote
        ? AggregateExchangeRatePrevote.toJSON(message.aggregate_prevote)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAggregatePrevoteResponse>
  ): QueryAggregatePrevoteResponse {
    const message = {
      ...baseQueryAggregatePrevoteResponse,
    } as QueryAggregatePrevoteResponse;
    if (
      object.aggregate_prevote !== undefined &&
      object.aggregate_prevote !== null
    ) {
      message.aggregate_prevote = AggregateExchangeRatePrevote.fromPartial(
        object.aggregate_prevote
      );
    } else {
      message.aggregate_prevote = undefined;
    }
    return message;
  },
};

const baseQueryAggregatePrevotesRequest: object = {};

export const QueryAggregatePrevotesRequest = {
  encode(
    _: QueryAggregatePrevotesRequest,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAggregatePrevotesRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAggregatePrevotesRequest,
    } as QueryAggregatePrevotesRequest;
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

  fromJSON(_: any): QueryAggregatePrevotesRequest {
    const message = {
      ...baseQueryAggregatePrevotesRequest,
    } as QueryAggregatePrevotesRequest;
    return message;
  },

  toJSON(_: QueryAggregatePrevotesRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryAggregatePrevotesRequest>
  ): QueryAggregatePrevotesRequest {
    const message = {
      ...baseQueryAggregatePrevotesRequest,
    } as QueryAggregatePrevotesRequest;
    return message;
  },
};

const baseQueryAggregatePrevotesResponse: object = {};

export const QueryAggregatePrevotesResponse = {
  encode(
    message: QueryAggregatePrevotesResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.aggregate_prevotes) {
      AggregateExchangeRatePrevote.encode(
        v!,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAggregatePrevotesResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAggregatePrevotesResponse,
    } as QueryAggregatePrevotesResponse;
    message.aggregate_prevotes = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.aggregate_prevotes.push(
            AggregateExchangeRatePrevote.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAggregatePrevotesResponse {
    const message = {
      ...baseQueryAggregatePrevotesResponse,
    } as QueryAggregatePrevotesResponse;
    message.aggregate_prevotes = [];
    if (
      object.aggregate_prevotes !== undefined &&
      object.aggregate_prevotes !== null
    ) {
      for (const e of object.aggregate_prevotes) {
        message.aggregate_prevotes.push(
          AggregateExchangeRatePrevote.fromJSON(e)
        );
      }
    }
    return message;
  },

  toJSON(message: QueryAggregatePrevotesResponse): unknown {
    const obj: any = {};
    if (message.aggregate_prevotes) {
      obj.aggregate_prevotes = message.aggregate_prevotes.map((e) =>
        e ? AggregateExchangeRatePrevote.toJSON(e) : undefined
      );
    } else {
      obj.aggregate_prevotes = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAggregatePrevotesResponse>
  ): QueryAggregatePrevotesResponse {
    const message = {
      ...baseQueryAggregatePrevotesResponse,
    } as QueryAggregatePrevotesResponse;
    message.aggregate_prevotes = [];
    if (
      object.aggregate_prevotes !== undefined &&
      object.aggregate_prevotes !== null
    ) {
      for (const e of object.aggregate_prevotes) {
        message.aggregate_prevotes.push(
          AggregateExchangeRatePrevote.fromPartial(e)
        );
      }
    }
    return message;
  },
};

const baseQueryAggregateVoteRequest: object = { validator_addr: "" };

export const QueryAggregateVoteRequest = {
  encode(
    message: QueryAggregateVoteRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.validator_addr !== "") {
      writer.uint32(10).string(message.validator_addr);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAggregateVoteRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAggregateVoteRequest,
    } as QueryAggregateVoteRequest;
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

  fromJSON(object: any): QueryAggregateVoteRequest {
    const message = {
      ...baseQueryAggregateVoteRequest,
    } as QueryAggregateVoteRequest;
    if (object.validator_addr !== undefined && object.validator_addr !== null) {
      message.validator_addr = String(object.validator_addr);
    } else {
      message.validator_addr = "";
    }
    return message;
  },

  toJSON(message: QueryAggregateVoteRequest): unknown {
    const obj: any = {};
    message.validator_addr !== undefined &&
      (obj.validator_addr = message.validator_addr);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAggregateVoteRequest>
  ): QueryAggregateVoteRequest {
    const message = {
      ...baseQueryAggregateVoteRequest,
    } as QueryAggregateVoteRequest;
    if (object.validator_addr !== undefined && object.validator_addr !== null) {
      message.validator_addr = object.validator_addr;
    } else {
      message.validator_addr = "";
    }
    return message;
  },
};

const baseQueryAggregateVoteResponse: object = {};

export const QueryAggregateVoteResponse = {
  encode(
    message: QueryAggregateVoteResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.aggregate_vote !== undefined) {
      AggregateExchangeRateVote.encode(
        message.aggregate_vote,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAggregateVoteResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAggregateVoteResponse,
    } as QueryAggregateVoteResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.aggregate_vote = AggregateExchangeRateVote.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAggregateVoteResponse {
    const message = {
      ...baseQueryAggregateVoteResponse,
    } as QueryAggregateVoteResponse;
    if (object.aggregate_vote !== undefined && object.aggregate_vote !== null) {
      message.aggregate_vote = AggregateExchangeRateVote.fromJSON(
        object.aggregate_vote
      );
    } else {
      message.aggregate_vote = undefined;
    }
    return message;
  },

  toJSON(message: QueryAggregateVoteResponse): unknown {
    const obj: any = {};
    message.aggregate_vote !== undefined &&
      (obj.aggregate_vote = message.aggregate_vote
        ? AggregateExchangeRateVote.toJSON(message.aggregate_vote)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAggregateVoteResponse>
  ): QueryAggregateVoteResponse {
    const message = {
      ...baseQueryAggregateVoteResponse,
    } as QueryAggregateVoteResponse;
    if (object.aggregate_vote !== undefined && object.aggregate_vote !== null) {
      message.aggregate_vote = AggregateExchangeRateVote.fromPartial(
        object.aggregate_vote
      );
    } else {
      message.aggregate_vote = undefined;
    }
    return message;
  },
};

const baseQueryAggregateVotesRequest: object = {};

export const QueryAggregateVotesRequest = {
  encode(
    _: QueryAggregateVotesRequest,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAggregateVotesRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAggregateVotesRequest,
    } as QueryAggregateVotesRequest;
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

  fromJSON(_: any): QueryAggregateVotesRequest {
    const message = {
      ...baseQueryAggregateVotesRequest,
    } as QueryAggregateVotesRequest;
    return message;
  },

  toJSON(_: QueryAggregateVotesRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryAggregateVotesRequest>
  ): QueryAggregateVotesRequest {
    const message = {
      ...baseQueryAggregateVotesRequest,
    } as QueryAggregateVotesRequest;
    return message;
  },
};

const baseQueryAggregateVotesResponse: object = {};

export const QueryAggregateVotesResponse = {
  encode(
    message: QueryAggregateVotesResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.aggregate_votes) {
      AggregateExchangeRateVote.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAggregateVotesResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAggregateVotesResponse,
    } as QueryAggregateVotesResponse;
    message.aggregate_votes = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.aggregate_votes.push(
            AggregateExchangeRateVote.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAggregateVotesResponse {
    const message = {
      ...baseQueryAggregateVotesResponse,
    } as QueryAggregateVotesResponse;
    message.aggregate_votes = [];
    if (
      object.aggregate_votes !== undefined &&
      object.aggregate_votes !== null
    ) {
      for (const e of object.aggregate_votes) {
        message.aggregate_votes.push(AggregateExchangeRateVote.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: QueryAggregateVotesResponse): unknown {
    const obj: any = {};
    if (message.aggregate_votes) {
      obj.aggregate_votes = message.aggregate_votes.map((e) =>
        e ? AggregateExchangeRateVote.toJSON(e) : undefined
      );
    } else {
      obj.aggregate_votes = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAggregateVotesResponse>
  ): QueryAggregateVotesResponse {
    const message = {
      ...baseQueryAggregateVotesResponse,
    } as QueryAggregateVotesResponse;
    message.aggregate_votes = [];
    if (
      object.aggregate_votes !== undefined &&
      object.aggregate_votes !== null
    ) {
      for (const e of object.aggregate_votes) {
        message.aggregate_votes.push(AggregateExchangeRateVote.fromPartial(e));
      }
    }
    return message;
  },
};

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
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

  fromJSON(_: any): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
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

  fromJSON(object: any): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** ExchangeRate returns exchange rate of a denom */
  ExchangeRate(
    request: QueryExchangeRateRequest
  ): Promise<QueryExchangeRateResponse>;
  /** ExchangeRates returns exchange rates of all denoms */
  ExchangeRates(
    request: QueryExchangeRatesRequest
  ): Promise<QueryExchangeRatesResponse>;
  /** Actives returns all active denoms */
  Actives(request: QueryActivesRequest): Promise<QueryActivesResponse>;
  /** FeederDelegation returns feeder delegation of a validator */
  FeederDelegation(
    request: QueryFeederDelegationRequest
  ): Promise<QueryFeederDelegationResponse>;
  /** MissCounter returns oracle miss counter of a validator */
  MissCounter(
    request: QueryMissCounterRequest
  ): Promise<QueryMissCounterResponse>;
  /** AggregatePrevote returns an aggregate prevote of a validator */
  AggregatePrevote(
    request: QueryAggregatePrevoteRequest
  ): Promise<QueryAggregatePrevoteResponse>;
  /** AggregatePrevotes returns aggregate prevotes of all validators */
  AggregatePrevotes(
    request: QueryAggregatePrevotesRequest
  ): Promise<QueryAggregatePrevotesResponse>;
  /** AggregateVote returns an aggregate vote of a validator */
  AggregateVote(
    request: QueryAggregateVoteRequest
  ): Promise<QueryAggregateVoteResponse>;
  /** AggregateVotes returns aggregate votes of all validators */
  AggregateVotes(
    request: QueryAggregateVotesRequest
  ): Promise<QueryAggregateVotesResponse>;
  /** Params queries all parameters. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  ExchangeRate(
    request: QueryExchangeRateRequest
  ): Promise<QueryExchangeRateResponse> {
    const data = QueryExchangeRateRequest.encode(request).finish();
    const promise = this.rpc.request(
      "kujira.oracle.Query",
      "ExchangeRate",
      data
    );
    return promise.then((data) =>
      QueryExchangeRateResponse.decode(new Reader(data))
    );
  }

  ExchangeRates(
    request: QueryExchangeRatesRequest
  ): Promise<QueryExchangeRatesResponse> {
    const data = QueryExchangeRatesRequest.encode(request).finish();
    const promise = this.rpc.request(
      "kujira.oracle.Query",
      "ExchangeRates",
      data
    );
    return promise.then((data) =>
      QueryExchangeRatesResponse.decode(new Reader(data))
    );
  }

  Actives(request: QueryActivesRequest): Promise<QueryActivesResponse> {
    const data = QueryActivesRequest.encode(request).finish();
    const promise = this.rpc.request("kujira.oracle.Query", "Actives", data);
    return promise.then((data) =>
      QueryActivesResponse.decode(new Reader(data))
    );
  }

  FeederDelegation(
    request: QueryFeederDelegationRequest
  ): Promise<QueryFeederDelegationResponse> {
    const data = QueryFeederDelegationRequest.encode(request).finish();
    const promise = this.rpc.request(
      "kujira.oracle.Query",
      "FeederDelegation",
      data
    );
    return promise.then((data) =>
      QueryFeederDelegationResponse.decode(new Reader(data))
    );
  }

  MissCounter(
    request: QueryMissCounterRequest
  ): Promise<QueryMissCounterResponse> {
    const data = QueryMissCounterRequest.encode(request).finish();
    const promise = this.rpc.request(
      "kujira.oracle.Query",
      "MissCounter",
      data
    );
    return promise.then((data) =>
      QueryMissCounterResponse.decode(new Reader(data))
    );
  }

  AggregatePrevote(
    request: QueryAggregatePrevoteRequest
  ): Promise<QueryAggregatePrevoteResponse> {
    const data = QueryAggregatePrevoteRequest.encode(request).finish();
    const promise = this.rpc.request(
      "kujira.oracle.Query",
      "AggregatePrevote",
      data
    );
    return promise.then((data) =>
      QueryAggregatePrevoteResponse.decode(new Reader(data))
    );
  }

  AggregatePrevotes(
    request: QueryAggregatePrevotesRequest
  ): Promise<QueryAggregatePrevotesResponse> {
    const data = QueryAggregatePrevotesRequest.encode(request).finish();
    const promise = this.rpc.request(
      "kujira.oracle.Query",
      "AggregatePrevotes",
      data
    );
    return promise.then((data) =>
      QueryAggregatePrevotesResponse.decode(new Reader(data))
    );
  }

  AggregateVote(
    request: QueryAggregateVoteRequest
  ): Promise<QueryAggregateVoteResponse> {
    const data = QueryAggregateVoteRequest.encode(request).finish();
    const promise = this.rpc.request(
      "kujira.oracle.Query",
      "AggregateVote",
      data
    );
    return promise.then((data) =>
      QueryAggregateVoteResponse.decode(new Reader(data))
    );
  }

  AggregateVotes(
    request: QueryAggregateVotesRequest
  ): Promise<QueryAggregateVotesResponse> {
    const data = QueryAggregateVotesRequest.encode(request).finish();
    const promise = this.rpc.request(
      "kujira.oracle.Query",
      "AggregateVotes",
      data
    );
    return promise.then((data) =>
      QueryAggregateVotesResponse.decode(new Reader(data))
    );
  }

  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("kujira.oracle.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}
