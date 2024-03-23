import { DeepPartial } from "cosmjs-types";
import { Reader, Writer } from "protobufjs/minimal";
export declare const protobufPackage = "kujira.oracle";
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
export declare const Params: {
    encode(message: Params, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial(object: DeepPartial<Params>): Params;
};
export declare const Denom: {
    encode(message: Denom, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Denom;
    fromJSON(object: any): Denom;
    toJSON(message: Denom): unknown;
    fromPartial(object: DeepPartial<Denom>): Denom;
};
export declare const AggregateExchangeRatePrevote: {
    encode(message: AggregateExchangeRatePrevote, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): AggregateExchangeRatePrevote;
    fromJSON(object: any): AggregateExchangeRatePrevote;
    toJSON(message: AggregateExchangeRatePrevote): unknown;
    fromPartial(object: DeepPartial<AggregateExchangeRatePrevote>): AggregateExchangeRatePrevote;
};
export declare const AggregateExchangeRateVote: {
    encode(message: AggregateExchangeRateVote, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): AggregateExchangeRateVote;
    fromJSON(object: any): AggregateExchangeRateVote;
    toJSON(message: AggregateExchangeRateVote): unknown;
    fromPartial(object: DeepPartial<AggregateExchangeRateVote>): AggregateExchangeRateVote;
};
export declare const ExchangeRateTuple: {
    encode(message: ExchangeRateTuple, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): ExchangeRateTuple;
    fromJSON(object: any): ExchangeRateTuple;
    toJSON(message: ExchangeRateTuple): unknown;
    fromPartial(object: DeepPartial<ExchangeRateTuple>): ExchangeRateTuple;
};
