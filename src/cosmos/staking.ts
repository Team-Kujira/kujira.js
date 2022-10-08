import { createProtobufRpcClient, QueryClient } from "@cosmjs/stargate";
import {
  BondStatusString,
  setupStakingExtension as original,
} from "@cosmjs/stargate/build/modules/staking/queries";
import { PageRequest } from "cosmjs-types/cosmos/base/query/v1beta1/pagination";
import { QueryClientImpl } from "cosmjs-types/cosmos/staking/v1beta1/query";
import { QueryParamsResponse } from "cosmjs-types/cosmos/staking/v1beta1/query";
import { QueryDelegatorValidatorsResponse } from "cosmjs-types/cosmos/staking/v1beta1/query";
import {
  QueryDelegationResponse,
  QueryDelegatorDelegationsResponse,
  QueryDelegatorUnbondingDelegationsResponse,
  QueryDelegatorValidatorResponse,
  QueryHistoricalInfoResponse,
  QueryPoolResponse,
  QueryRedelegationsResponse,
  QueryUnbondingDelegationResponse,
  QueryValidatorResponse,
  QueryValidatorDelegationsResponse,
  QueryValidatorsResponse,
  QueryValidatorUnbondingDelegationsResponse,
} from "cosmjs-types/cosmos/staking/v1beta1/query";

export interface StakingExtension {
  readonly staking: {
    delegation: (
      delegatorAddress: string,
      validatorAddress: string
    ) => Promise<QueryDelegationResponse>;
    delegatorDelegations: (
      delegatorAddress: string,
      pagination?: PageRequest
    ) => Promise<QueryDelegatorDelegationsResponse>;
    delegatorUnbondingDelegations: (
      delegatorAddress: string,
      pagination?: PageRequest
    ) => Promise<QueryDelegatorUnbondingDelegationsResponse>;
    delegatorValidator: (
      delegatorAddress: string,
      validatorAddress: string
    ) => Promise<QueryDelegatorValidatorResponse>;
    delegatorValidators: (
      delegatorAddress: string,
      pagination?: PageRequest
    ) => Promise<QueryDelegatorValidatorsResponse>;
    historicalInfo: (height: number) => Promise<QueryHistoricalInfoResponse>;
    params: () => Promise<QueryParamsResponse>;
    pool: () => Promise<QueryPoolResponse>;
    redelegations: (
      delegatorAddress: string,
      sourceValidatorAddress: string,
      destinationValidatorAddress: string,
      pagination?: PageRequest
    ) => Promise<QueryRedelegationsResponse>;
    unbondingDelegation: (
      delegatorAddress: string,
      validatorAddress: string
    ) => Promise<QueryUnbondingDelegationResponse>;
    validator: (validatorAddress: string) => Promise<QueryValidatorResponse>;
    validatorDelegations: (
      validatorAddress: string,
      pagination?: PageRequest
    ) => Promise<QueryValidatorDelegationsResponse>;
    validators: (
      status: BondStatusString,
      pagination?: PageRequest
    ) => Promise<QueryValidatorsResponse>;
    validatorUnbondingDelegations: (
      validatorAddress: string,
      pagination?: PageRequest
    ) => Promise<QueryValidatorUnbondingDelegationsResponse>;
  };
}

export function setupStakingExtension(base: QueryClient): StakingExtension {
  // Use this service to get easy typed access to query methods
  // This cannot be used for proof verification
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);

  return {
    staking: {
      ...original(base).staking,
      delegatorDelegations: async (
        delegatorAddress: string,
        pagination?: PageRequest
      ) => {
        const response = await queryService.DelegatorDelegations({
          delegatorAddr: delegatorAddress,
          pagination: pagination && PageRequest.fromPartial(pagination),
        });
        return response;
      },
      delegatorUnbondingDelegations: async (
        delegatorAddress: string,
        pagination?: PageRequest
      ) => {
        const response = await queryService.DelegatorUnbondingDelegations({
          delegatorAddr: delegatorAddress,
          pagination: pagination && PageRequest.fromPartial(pagination),
        });
        return response;
      },
      delegatorValidators: async (
        delegatorAddress: string,
        pagination?: PageRequest
      ) => {
        const response = await queryService.DelegatorValidators({
          delegatorAddr: delegatorAddress,
          pagination: pagination && PageRequest.fromPartial(pagination),
        });
        return response;
      },
      redelegations: async (
        delegatorAddress: string,
        sourceValidatorAddress: string,
        destinationValidatorAddress: string,
        pagination?: PageRequest
      ) => {
        const response = await queryService.Redelegations({
          delegatorAddr: delegatorAddress,
          srcValidatorAddr: sourceValidatorAddress,
          dstValidatorAddr: destinationValidatorAddress,
          pagination: pagination && PageRequest.fromPartial(pagination),
        });
        return response;
      },
      validatorDelegations: async (
        validatorAddress: string,
        pagination?: PageRequest
      ) => {
        const response = await queryService.ValidatorDelegations({
          validatorAddr: validatorAddress,
          pagination: pagination && PageRequest.fromPartial(pagination),
        });
        return response;
      },
      validators: async (
        status: BondStatusString,
        pagination?: PageRequest
      ) => {
        const response = await queryService.Validators({
          status: status,
          pagination: pagination && PageRequest.fromPartial(pagination),
        });
        return response;
      },
      validatorUnbondingDelegations: async (
        validatorAddress: string,
        pagination?: PageRequest
      ) => {
        const response = await queryService.ValidatorUnbondingDelegations({
          validatorAddr: validatorAddress,
          pagination: pagination && PageRequest.fromPartial(pagination),
        });
        return response;
      },
    },
  };
}
