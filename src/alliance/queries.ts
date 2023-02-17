import { createProtobufRpcClient, QueryClient } from "@cosmjs/stargate";
import { assert } from "@cosmjs/utils";
import { Params } from "./params";

import {
  QueryAllAlliancesDelegationsRequest,
  QueryAllAllianceValidatorsRequest,
  QueryAllianceDelegationRequest,
  QueryAllianceDelegationResponse,
  QueryAllianceDelegationRewardsRequest,
  QueryAllianceDelegationRewardsResponse,
  QueryAllianceRequest,
  QueryAllianceResponse,
  QueryAlliancesDelegationByValidatorRequest,
  QueryAlliancesDelegationsRequest,
  QueryAlliancesDelegationsResponse,
  QueryAlliancesRequest,
  QueryAlliancesResponse,
  QueryAllianceValidatorRequest,
  QueryAllianceValidatorResponse,
  QueryAllianceValidatorsResponse,
  QueryClientImpl,
  QueryIBCAllianceDelegationRequest,
  QueryIBCAllianceDelegationRewardsRequest,
  QueryIBCAllianceRequest,
} from "./query";

export interface AllianceExtension {
  readonly alliance: {
    readonly params: () => Promise<Params>;

    /** Query paginated alliances */

    alliances(request?: QueryAlliancesRequest): Promise<QueryAlliancesResponse>;
    /** Query a specific alliance by ibc hash */

    ibcAlliance(
      request: QueryIBCAllianceRequest
    ): Promise<QueryAllianceResponse>;
    /** Query all paginated alliance delegations */

    allAlliancesDelegations(
      request?: QueryAllAlliancesDelegationsRequest
    ): Promise<QueryAlliancesDelegationsResponse>;
    /** Query alliance validator */

    allianceValidator(
      request: QueryAllianceValidatorRequest
    ): Promise<QueryAllianceValidatorResponse>;
    /** Query all paginated alliance validators */

    allAllianceValidators(
      request?: QueryAllAllianceValidatorsRequest
    ): Promise<QueryAllianceValidatorsResponse>;
    /** Query all paginated alliance delegations for a delegator addr */

    alliancesDelegation(
      request: QueryAlliancesDelegationsRequest
    ): Promise<QueryAlliancesDelegationsResponse>;
    /** Query all paginated alliance delegations for a delegator addr and validator_addr */

    alliancesDelegationByValidator(
      request: QueryAlliancesDelegationByValidatorRequest
    ): Promise<QueryAlliancesDelegationsResponse>;
    /** Query a delegation to an alliance by delegator addr, validator_addr and denom */

    allianceDelegation(
      request: QueryAllianceDelegationRequest
    ): Promise<QueryAllianceDelegationResponse>;
    /** Query a delegation to an alliance by delegator addr, validator_addr and denom */

    ibcAllianceDelegation(
      request: QueryIBCAllianceDelegationRequest
    ): Promise<QueryAllianceDelegationResponse>;
    /** Query for rewards by delegator addr, validator_addr and denom */

    allianceDelegationRewards(
      request: QueryAllianceDelegationRewardsRequest
    ): Promise<QueryAllianceDelegationRewardsResponse>;
    /** Query for rewards by delegator addr, validator_addr and denom */

    ibcAllianceDelegationRewards(
      request: QueryIBCAllianceDelegationRewardsRequest
    ): Promise<QueryAllianceDelegationRewardsResponse>;
    /** Query a specific alliance by denom */

    alliance(request: QueryAllianceRequest): Promise<QueryAllianceResponse>;
  };
}

export function setupAllianceExtension(base: QueryClient): AllianceExtension {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);

  return {
    alliance: {
      params: async () => {
        const { params } = await queryService.Params({});
        assert(params);
        return params;
      },

      /** Query paginated alliances */

      alliances: async (q: QueryAlliancesRequest) => {
        return queryService.Alliances(q);
      },
      /** Query a specific alliance by ibc hash */

      ibcAlliance: async (q: QueryIBCAllianceRequest) => {
        return queryService.IBCAlliance(q);
      },
      /** Query all paginated alliance delegations */

      allAlliancesDelegations: async (
        q: QueryAllAlliancesDelegationsRequest
      ) => {
        return queryService.AllAlliancesDelegations(q);
      },
      /** Query alliance validator */

      allianceValidator: async (q: QueryAllianceValidatorRequest) => {
        return queryService.AllianceValidator(q);
      },
      /** Query all paginated alliance validators */

      allAllianceValidators: async (q: QueryAllAllianceValidatorsRequest) => {
        return queryService.AllAllianceValidators(q);
      },
      /** Query all paginated alliance delegations for a delegator addr */

      alliancesDelegation: async (q: QueryAlliancesDelegationsRequest) => {
        return queryService.AlliancesDelegation(q);
      },
      /** Query all paginated alliance delegations for a delegator addr and validator_addr */

      alliancesDelegationByValidator: async (
        q: QueryAlliancesDelegationByValidatorRequest
      ) => {
        return queryService.AlliancesDelegationByValidator(q);
      },
      /** Query a delegation to an alliance by delegator addr, validator_addr and denom */

      allianceDelegation: async (q: QueryAllianceDelegationRequest) => {
        return queryService.AllianceDelegation(q);
      },
      /** Query a delegation to an alliance by delegator addr, validator_addr and denom */

      ibcAllianceDelegation: async (q: QueryIBCAllianceDelegationRequest) => {
        return queryService.IBCAllianceDelegation(q);
      },
      /** Query for rewards by delegator addr, validator_addr and denom */

      allianceDelegationRewards: async (
        q: QueryAllianceDelegationRewardsRequest
      ) => {
        return queryService.AllianceDelegationRewards(q);
      },
      /** Query for rewards by delegator addr, validator_addr and denom */

      ibcAllianceDelegationRewards: async (
        q: QueryIBCAllianceDelegationRewardsRequest
      ) => {
        return queryService.IBCAllianceDelegationRewards(q);
      },
      /** Query a specific alliance by denom */

      alliance: async (q: QueryAllianceRequest) => {
        return queryService.Alliance(q);
      },
    },
  };
}
