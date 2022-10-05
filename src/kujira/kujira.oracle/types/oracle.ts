/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";
import { DeepPartial } from "cosmjs-types/cosmos/staking/v1beta1/tx";

export const protobufPackage = "kujira.oracle";

/** Params defines the parameters for the oracle module. */
export interface Params {
  vote_period: number;
  vote_threshold: string;
  reward_band: string;
  reward_distribution_window: number;
  whitelist: Denom[];
  slash_fraction: string;
  slash_window: number;
  min_valid_per_window: string;
}

/** Denom - the object to hold configurations of each denom */
export interface Denom {
  name: string;
}

/**
 * struct for aggregate prevoting on the ExchangeRateVote.
 * The purpose of aggregate prevote is to hide vote exchange rates with hash
 * which is formatted as hex string in SHA256("{salt}:{exchange rate}{denom},...,{exchange rate}{denom}:{voter}")
 */
export interface AggregateExchangeRatePrevote {
  hash: string;
  voter: string;
  submit_block: number;
}

/** MsgAggregateExchangeRateVote - struct for voting on exchange rates. */
export interface AggregateExchangeRateVote {
  exchange_rate_tuples: ExchangeRateTuple[];
  voter: string;
}

/** ExchangeRateTuple - struct to store interpreted exchange rates data to store */
export interface ExchangeRateTuple {
  denom: string;
  exchange_rate: string;
}

const baseParams: object = {
  vote_period: 0,
  vote_threshold: "",
  reward_band: "",
  reward_distribution_window: 0,
  slash_fraction: "",
  slash_window: 0,
  min_valid_per_window: "",
};

export const Params = {
  encode(message: Params, writer: Writer = Writer.create()): Writer {
    if (message.vote_period !== 0) {
      writer.uint32(8).uint64(message.vote_period);
    }
    if (message.vote_threshold !== "") {
      writer.uint32(18).string(message.vote_threshold);
    }
    if (message.reward_band !== "") {
      writer.uint32(26).string(message.reward_band);
    }
    if (message.reward_distribution_window !== 0) {
      writer.uint32(32).uint64(message.reward_distribution_window);
    }
    for (const v of message.whitelist) {
      Denom.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.slash_fraction !== "") {
      writer.uint32(50).string(message.slash_fraction);
    }
    if (message.slash_window !== 0) {
      writer.uint32(56).uint64(message.slash_window);
    }
    if (message.min_valid_per_window !== "") {
      writer.uint32(66).string(message.min_valid_per_window);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseParams } as Params;
    message.whitelist = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vote_period = (reader.uint64() as Long).toNumber();
          break;
        case 2:
          message.vote_threshold = reader.string();
          break;
        case 3:
          message.reward_band = reader.string();
          break;
        case 4:
          message.reward_distribution_window = (
            reader.uint64() as Long
          ).toNumber();
          break;
        case 5:
          message.whitelist.push(Denom.decode(reader, reader.uint32()));
          break;
        case 6:
          message.slash_fraction = reader.string();
          break;
        case 7:
          message.slash_window = (reader.uint64() as Long).toNumber();
          break;
        case 8:
          message.min_valid_per_window = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Params {
    const message = { ...baseParams } as Params;
    message.whitelist = [];
    if (object.vote_period !== undefined && object.vote_period !== null) {
      message.vote_period = Number(object.vote_period);
    } else {
      message.vote_period = 0;
    }
    if (object.vote_threshold !== undefined && object.vote_threshold !== null) {
      message.vote_threshold = String(object.vote_threshold);
    } else {
      message.vote_threshold = "";
    }
    if (object.reward_band !== undefined && object.reward_band !== null) {
      message.reward_band = String(object.reward_band);
    } else {
      message.reward_band = "";
    }
    if (
      object.reward_distribution_window !== undefined &&
      object.reward_distribution_window !== null
    ) {
      message.reward_distribution_window = Number(
        object.reward_distribution_window
      );
    } else {
      message.reward_distribution_window = 0;
    }
    if (object.whitelist !== undefined && object.whitelist !== null) {
      for (const e of object.whitelist) {
        message.whitelist.push(Denom.fromJSON(e));
      }
    }
    if (object.slash_fraction !== undefined && object.slash_fraction !== null) {
      message.slash_fraction = String(object.slash_fraction);
    } else {
      message.slash_fraction = "";
    }
    if (object.slash_window !== undefined && object.slash_window !== null) {
      message.slash_window = Number(object.slash_window);
    } else {
      message.slash_window = 0;
    }
    if (
      object.min_valid_per_window !== undefined &&
      object.min_valid_per_window !== null
    ) {
      message.min_valid_per_window = String(object.min_valid_per_window);
    } else {
      message.min_valid_per_window = "";
    }
    return message;
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.vote_period !== undefined &&
      (obj.vote_period = message.vote_period);
    message.vote_threshold !== undefined &&
      (obj.vote_threshold = message.vote_threshold);
    message.reward_band !== undefined &&
      (obj.reward_band = message.reward_band);
    message.reward_distribution_window !== undefined &&
      (obj.reward_distribution_window = message.reward_distribution_window);
    if (message.whitelist) {
      obj.whitelist = message.whitelist.map((e) =>
        e ? Denom.toJSON(e) : undefined
      );
    } else {
      obj.whitelist = [];
    }
    message.slash_fraction !== undefined &&
      (obj.slash_fraction = message.slash_fraction);
    message.slash_window !== undefined &&
      (obj.slash_window = message.slash_window);
    message.min_valid_per_window !== undefined &&
      (obj.min_valid_per_window = message.min_valid_per_window);
    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = { ...baseParams } as Params;
    message.whitelist = [];
    if (object.vote_period !== undefined && object.vote_period !== null) {
      message.vote_period = object.vote_period;
    } else {
      message.vote_period = 0;
    }
    if (object.vote_threshold !== undefined && object.vote_threshold !== null) {
      message.vote_threshold = object.vote_threshold;
    } else {
      message.vote_threshold = "";
    }
    if (object.reward_band !== undefined && object.reward_band !== null) {
      message.reward_band = object.reward_band;
    } else {
      message.reward_band = "";
    }
    if (
      object.reward_distribution_window !== undefined &&
      object.reward_distribution_window !== null
    ) {
      message.reward_distribution_window = object.reward_distribution_window;
    } else {
      message.reward_distribution_window = 0;
    }
    if (object.whitelist !== undefined && object.whitelist !== null) {
      for (const e of object.whitelist) {
        message.whitelist.push(Denom.fromPartial(e));
      }
    }
    if (object.slash_fraction !== undefined && object.slash_fraction !== null) {
      message.slash_fraction = object.slash_fraction;
    } else {
      message.slash_fraction = "";
    }
    if (object.slash_window !== undefined && object.slash_window !== null) {
      message.slash_window = object.slash_window;
    } else {
      message.slash_window = 0;
    }
    if (
      object.min_valid_per_window !== undefined &&
      object.min_valid_per_window !== null
    ) {
      message.min_valid_per_window = object.min_valid_per_window;
    } else {
      message.min_valid_per_window = "";
    }
    return message;
  },
};

const baseDenom: object = { name: "" };

export const Denom = {
  encode(message: Denom, writer: Writer = Writer.create()): Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Denom {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDenom } as Denom;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Denom {
    const message = { ...baseDenom } as Denom;
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    return message;
  },

  toJSON(message: Denom): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial(object: DeepPartial<Denom>): Denom {
    const message = { ...baseDenom } as Denom;
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    return message;
  },
};

const baseAggregateExchangeRatePrevote: object = {
  hash: "",
  voter: "",
  submit_block: 0,
};

export const AggregateExchangeRatePrevote = {
  encode(
    message: AggregateExchangeRatePrevote,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.hash !== "") {
      writer.uint32(10).string(message.hash);
    }
    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }
    if (message.submit_block !== 0) {
      writer.uint32(24).uint64(message.submit_block);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): AggregateExchangeRatePrevote {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseAggregateExchangeRatePrevote,
    } as AggregateExchangeRatePrevote;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.string();
          break;
        case 2:
          message.voter = reader.string();
          break;
        case 3:
          message.submit_block = (reader.uint64() as Long).toNumber();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AggregateExchangeRatePrevote {
    const message = {
      ...baseAggregateExchangeRatePrevote,
    } as AggregateExchangeRatePrevote;
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = String(object.hash);
    } else {
      message.hash = "";
    }
    if (object.voter !== undefined && object.voter !== null) {
      message.voter = String(object.voter);
    } else {
      message.voter = "";
    }
    if (object.submit_block !== undefined && object.submit_block !== null) {
      message.submit_block = Number(object.submit_block);
    } else {
      message.submit_block = 0;
    }
    return message;
  },

  toJSON(message: AggregateExchangeRatePrevote): unknown {
    const obj: any = {};
    message.hash !== undefined && (obj.hash = message.hash);
    message.voter !== undefined && (obj.voter = message.voter);
    message.submit_block !== undefined &&
      (obj.submit_block = message.submit_block);
    return obj;
  },

  fromPartial(
    object: DeepPartial<AggregateExchangeRatePrevote>
  ): AggregateExchangeRatePrevote {
    const message = {
      ...baseAggregateExchangeRatePrevote,
    } as AggregateExchangeRatePrevote;
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = object.hash;
    } else {
      message.hash = "";
    }
    if (object.voter !== undefined && object.voter !== null) {
      message.voter = object.voter;
    } else {
      message.voter = "";
    }
    if (object.submit_block !== undefined && object.submit_block !== null) {
      message.submit_block = object.submit_block;
    } else {
      message.submit_block = 0;
    }
    return message;
  },
};

const baseAggregateExchangeRateVote: object = { voter: "" };

export const AggregateExchangeRateVote = {
  encode(
    message: AggregateExchangeRateVote,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.exchange_rate_tuples) {
      ExchangeRateTuple.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): AggregateExchangeRateVote {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseAggregateExchangeRateVote,
    } as AggregateExchangeRateVote;
    message.exchange_rate_tuples = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.exchange_rate_tuples.push(
            ExchangeRateTuple.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.voter = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AggregateExchangeRateVote {
    const message = {
      ...baseAggregateExchangeRateVote,
    } as AggregateExchangeRateVote;
    message.exchange_rate_tuples = [];
    if (
      object.exchange_rate_tuples !== undefined &&
      object.exchange_rate_tuples !== null
    ) {
      for (const e of object.exchange_rate_tuples) {
        message.exchange_rate_tuples.push(ExchangeRateTuple.fromJSON(e));
      }
    }
    if (object.voter !== undefined && object.voter !== null) {
      message.voter = String(object.voter);
    } else {
      message.voter = "";
    }
    return message;
  },

  toJSON(message: AggregateExchangeRateVote): unknown {
    const obj: any = {};
    if (message.exchange_rate_tuples) {
      obj.exchange_rate_tuples = message.exchange_rate_tuples.map((e) =>
        e ? ExchangeRateTuple.toJSON(e) : undefined
      );
    } else {
      obj.exchange_rate_tuples = [];
    }
    message.voter !== undefined && (obj.voter = message.voter);
    return obj;
  },

  fromPartial(
    object: DeepPartial<AggregateExchangeRateVote>
  ): AggregateExchangeRateVote {
    const message = {
      ...baseAggregateExchangeRateVote,
    } as AggregateExchangeRateVote;
    message.exchange_rate_tuples = [];
    if (
      object.exchange_rate_tuples !== undefined &&
      object.exchange_rate_tuples !== null
    ) {
      for (const e of object.exchange_rate_tuples) {
        message.exchange_rate_tuples.push(ExchangeRateTuple.fromPartial(e));
      }
    }
    if (object.voter !== undefined && object.voter !== null) {
      message.voter = object.voter;
    } else {
      message.voter = "";
    }
    return message;
  },
};

const baseExchangeRateTuple: object = { denom: "", exchange_rate: "" };

export const ExchangeRateTuple = {
  encode(message: ExchangeRateTuple, writer: Writer = Writer.create()): Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.exchange_rate !== "") {
      writer.uint32(18).string(message.exchange_rate);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ExchangeRateTuple {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseExchangeRateTuple } as ExchangeRateTuple;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.exchange_rate = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ExchangeRateTuple {
    const message = { ...baseExchangeRateTuple } as ExchangeRateTuple;
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = String(object.denom);
    } else {
      message.denom = "";
    }
    if (object.exchange_rate !== undefined && object.exchange_rate !== null) {
      message.exchange_rate = String(object.exchange_rate);
    } else {
      message.exchange_rate = "";
    }
    return message;
  },

  toJSON(message: ExchangeRateTuple): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.exchange_rate !== undefined &&
      (obj.exchange_rate = message.exchange_rate);
    return obj;
  },

  fromPartial(object: DeepPartial<ExchangeRateTuple>): ExchangeRateTuple {
    const message = { ...baseExchangeRateTuple } as ExchangeRateTuple;
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    } else {
      message.denom = "";
    }
    if (object.exchange_rate !== undefined && object.exchange_rate !== null) {
      message.exchange_rate = object.exchange_rate;
    } else {
      message.exchange_rate = "";
    }
    return message;
  },
};
