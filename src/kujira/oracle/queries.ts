import { assert } from "@cosmjs/utils";
import {
  QueryActivesResponse,
  QueryAggregatePrevoteResponse,
  QueryAggregatePrevotesResponse,
  QueryAggregateVoteResponse,
  QueryAggregateVotesResponse,
  QueryClientImpl,
  QueryExchangeRateResponse,
  QueryExchangeRatesResponse,
  QueryFeederDelegationResponse,
  QueryMissCounterResponse,
} from "./types/query";
import { Params } from "./types/oracle";

import { createProtobufRpcClient, QueryClient } from "@cosmjs/stargate";

export interface OracleExtension {
  readonly oracle: {
    readonly params: () => Promise<Params>;
    readonly exchangeRate: (
      denom: string
    ) => Promise<QueryExchangeRateResponse>;
    readonly exchangeRates: () => Promise<QueryExchangeRatesResponse>;
    readonly actives: () => Promise<QueryActivesResponse>;
    readonly feederDelegation: (
      validator_addr: string
    ) => Promise<QueryFeederDelegationResponse>;
    readonly missCounter: (
      validator_addr: string
    ) => Promise<QueryMissCounterResponse>;
    readonly aggregatePrevote: (
      validator_addr: string
    ) => Promise<QueryAggregatePrevoteResponse>;
    readonly aggregatePrevotes: () => Promise<QueryAggregatePrevotesResponse>;
    readonly aggregateVote: (
      validator_addr: string
    ) => Promise<QueryAggregateVoteResponse>;
    readonly aggregateVotes: () => Promise<QueryAggregateVotesResponse>;
  };
}

export function setupOracleExtension(base: QueryClient): OracleExtension {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);

  return {
    oracle: {
      params: async () => {
        const { params } = await queryService.Params({});
        assert(params);
        return params;
      },
      exchangeRate: async (denom) => queryService.ExchangeRate({ denom }),
      exchangeRates: async () => queryService.ExchangeRates({}),
      actives: async () => queryService.Actives({}),
      feederDelegation: async (validator_addr) =>
        queryService.FeederDelegation({ validator_addr }),
      missCounter: async (validator_addr: string) =>
        queryService.MissCounter({ validator_addr }),
      aggregatePrevote: async (validator_addr: string) =>
        queryService.AggregatePrevote({ validator_addr }),
      aggregatePrevotes: async () => queryService.AggregatePrevotes({}),
      aggregateVote: async (validator_addr: string) =>
        queryService.AggregateVote({ validator_addr }),
      aggregateVotes: async () => queryService.AggregateVotes({}),
    },
  };
}
