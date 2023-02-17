import { QueryClient } from "@cosmjs/stargate";
import { Params } from "./params";
import { QueryAllAlliancesDelegationsRequest, QueryAllAllianceValidatorsRequest, QueryAllianceDelegationRequest, QueryAllianceDelegationResponse, QueryAllianceDelegationRewardsRequest, QueryAllianceDelegationRewardsResponse, QueryAllianceRequest, QueryAllianceResponse, QueryAlliancesDelegationByValidatorRequest, QueryAlliancesDelegationsRequest, QueryAlliancesDelegationsResponse, QueryAlliancesRequest, QueryAlliancesResponse, QueryAllianceValidatorRequest, QueryAllianceValidatorResponse, QueryAllianceValidatorsResponse, QueryIBCAllianceDelegationRequest, QueryIBCAllianceDelegationRewardsRequest, QueryIBCAllianceRequest } from "./query";
export interface AllianceExtension {
    readonly alliance: {
        readonly params: () => Promise<Params>;
        /** Query paginated alliances */
        alliances(request?: QueryAlliancesRequest): Promise<QueryAlliancesResponse>;
        /** Query a specific alliance by ibc hash */
        ibcAlliance(request: QueryIBCAllianceRequest): Promise<QueryAllianceResponse>;
        /** Query all paginated alliance delegations */
        allAlliancesDelegations(request?: QueryAllAlliancesDelegationsRequest): Promise<QueryAlliancesDelegationsResponse>;
        /** Query alliance validator */
        allianceValidator(request: QueryAllianceValidatorRequest): Promise<QueryAllianceValidatorResponse>;
        /** Query all paginated alliance validators */
        allAllianceValidators(request?: QueryAllAllianceValidatorsRequest): Promise<QueryAllianceValidatorsResponse>;
        /** Query all paginated alliance delegations for a delegator addr */
        alliancesDelegation(request: QueryAlliancesDelegationsRequest): Promise<QueryAlliancesDelegationsResponse>;
        /** Query all paginated alliance delegations for a delegator addr and validator_addr */
        alliancesDelegationByValidator(request: QueryAlliancesDelegationByValidatorRequest): Promise<QueryAlliancesDelegationsResponse>;
        /** Query a delegation to an alliance by delegator addr, validator_addr and denom */
        allianceDelegation(request: QueryAllianceDelegationRequest): Promise<QueryAllianceDelegationResponse>;
        /** Query a delegation to an alliance by delegator addr, validator_addr and denom */
        ibcAllianceDelegation(request: QueryIBCAllianceDelegationRequest): Promise<QueryAllianceDelegationResponse>;
        /** Query for rewards by delegator addr, validator_addr and denom */
        allianceDelegationRewards(request: QueryAllianceDelegationRewardsRequest): Promise<QueryAllianceDelegationRewardsResponse>;
        /** Query for rewards by delegator addr, validator_addr and denom */
        ibcAllianceDelegationRewards(request: QueryIBCAllianceDelegationRewardsRequest): Promise<QueryAllianceDelegationRewardsResponse>;
        /** Query a specific alliance by denom */
        alliance(request: QueryAllianceRequest): Promise<QueryAllianceResponse>;
    };
}
export declare function setupAllianceExtension(base: QueryClient): AllianceExtension;
