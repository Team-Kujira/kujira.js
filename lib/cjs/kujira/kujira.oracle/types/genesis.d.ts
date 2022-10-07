import { Writer, Reader } from "protobufjs/minimal";
import { DeepPartial } from "cosmjs-types/cosmos/staking/v1beta1/tx";
import { Params, ExchangeRateTuple, AggregateExchangeRatePrevote, AggregateExchangeRateVote } from "./oracle";
export declare const protobufPackage = "kujira.oracle";
/** GenesisState defines the oracle module's genesis state. */
export interface GenesisState {
    params: Params | undefined;
    feeder_delegations: FeederDelegation[];
    exchange_rates: ExchangeRateTuple[];
    miss_counters: MissCounter[];
    aggregate_exchange_rate_prevotes: AggregateExchangeRatePrevote[];
    aggregate_exchange_rate_votes: AggregateExchangeRateVote[];
}
/**
 * FeederDelegation is the address for where oracle feeder authority are
 * delegated to. By default this struct is only used at genesis to feed in
 * default feeder addresses.
 */
export interface FeederDelegation {
    feeder_address: string;
    validator_address: string;
}
/**
 * MissCounter defines an miss counter and validator address pair used in
 * oracle module's genesis state
 */
export interface MissCounter {
    validator_address: string;
    miss_counter: number;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
export declare const FeederDelegation: {
    encode(message: FeederDelegation, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): FeederDelegation;
    fromJSON(object: any): FeederDelegation;
    toJSON(message: FeederDelegation): unknown;
    fromPartial(object: DeepPartial<FeederDelegation>): FeederDelegation;
};
export declare const MissCounter: {
    encode(message: MissCounter, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MissCounter;
    fromJSON(object: any): MissCounter;
    toJSON(message: MissCounter): unknown;
    fromPartial(object: DeepPartial<MissCounter>): MissCounter;
};
