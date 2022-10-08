import { QueryClient } from "@cosmjs/stargate";
import { BondStatusString } from "@cosmjs/stargate/build/modules/staking/queries";
import { PageRequest } from "cosmjs-types/cosmos/base/query/v1beta1/pagination";
import { QueryParamsResponse } from "cosmjs-types/cosmos/staking/v1beta1/query";
import { QueryDelegatorValidatorsResponse } from "cosmjs-types/cosmos/staking/v1beta1/query";
import { QueryDelegationResponse, QueryDelegatorDelegationsResponse, QueryDelegatorUnbondingDelegationsResponse, QueryDelegatorValidatorResponse, QueryHistoricalInfoResponse, QueryPoolResponse, QueryRedelegationsResponse, QueryUnbondingDelegationResponse, QueryValidatorResponse, QueryValidatorDelegationsResponse, QueryValidatorsResponse, QueryValidatorUnbondingDelegationsResponse } from "cosmjs-types/cosmos/staking/v1beta1/query";
export interface StakingExtension {
    readonly staking: {
        delegation: (delegatorAddress: string, validatorAddress: string) => Promise<QueryDelegationResponse>;
        delegatorDelegations: (delegatorAddress: string, pagination?: PageRequest) => Promise<QueryDelegatorDelegationsResponse>;
        delegatorUnbondingDelegations: (delegatorAddress: string, pagination?: PageRequest) => Promise<QueryDelegatorUnbondingDelegationsResponse>;
        delegatorValidator: (delegatorAddress: string, validatorAddress: string) => Promise<QueryDelegatorValidatorResponse>;
        delegatorValidators: (delegatorAddress: string, pagination?: PageRequest) => Promise<QueryDelegatorValidatorsResponse>;
        historicalInfo: (height: number) => Promise<QueryHistoricalInfoResponse>;
        params: () => Promise<QueryParamsResponse>;
        pool: () => Promise<QueryPoolResponse>;
        redelegations: (delegatorAddress: string, sourceValidatorAddress: string, destinationValidatorAddress: string, pagination?: PageRequest) => Promise<QueryRedelegationsResponse>;
        unbondingDelegation: (delegatorAddress: string, validatorAddress: string) => Promise<QueryUnbondingDelegationResponse>;
        validator: (validatorAddress: string) => Promise<QueryValidatorResponse>;
        validatorDelegations: (validatorAddress: string, pagination?: PageRequest) => Promise<QueryValidatorDelegationsResponse>;
        validators: (status: BondStatusString, pagination?: PageRequest) => Promise<QueryValidatorsResponse>;
        validatorUnbondingDelegations: (validatorAddress: string, pagination?: PageRequest) => Promise<QueryValidatorUnbondingDelegationsResponse>;
    };
}
export declare function setupStakingExtension(base: QueryClient): StakingExtension;
