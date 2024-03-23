import { QueryActivesResponse, QueryAggregatePrevoteResponse, QueryAggregatePrevotesResponse, QueryAggregateVoteResponse, QueryAggregateVotesResponse, QueryExchangeRateResponse, QueryExchangeRatesResponse, QueryFeederDelegationResponse, QueryMissCounterResponse } from "./types/query";
import { Params } from "./types/oracle";
import { QueryClient } from "@cosmjs/stargate";
export interface OracleExtension {
    readonly oracle: {
        readonly params: () => Promise<Params>;
        readonly exchangeRate: (denom: string) => Promise<QueryExchangeRateResponse>;
        readonly exchangeRates: () => Promise<QueryExchangeRatesResponse>;
        readonly actives: () => Promise<QueryActivesResponse>;
        readonly feederDelegation: (validator_addr: string) => Promise<QueryFeederDelegationResponse>;
        readonly missCounter: (validator_addr: string) => Promise<QueryMissCounterResponse>;
        readonly aggregatePrevote: (validator_addr: string) => Promise<QueryAggregatePrevoteResponse>;
        readonly aggregatePrevotes: () => Promise<QueryAggregatePrevotesResponse>;
        readonly aggregateVote: (validator_addr: string) => Promise<QueryAggregateVoteResponse>;
        readonly aggregateVotes: () => Promise<QueryAggregateVotesResponse>;
    };
}
export declare function setupOracleExtension(base: QueryClient): OracleExtension;
