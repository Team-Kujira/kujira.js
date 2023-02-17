import { PageRequest, PageResponse } from "cosmjs-types/cosmos/base/query/v1beta1/pagination";
import { Coin, DecCoin } from "cosmjs-types/cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { Rpc } from "../gravity/v1/helpers";
import { AllianceAsset } from "./alliance";
import { Delegation } from "./delegations";
import { Params } from "./params";
export declare const protobufPackage = "alliance.alliance";
/** Params */
export interface QueryParamsRequest {
}
export interface QueryParamsResponse {
    params?: Params;
}
/** Alliances */
export interface QueryAlliancesRequest {
    pagination?: PageRequest;
}
export interface QueryAlliancesResponse {
    alliances: AllianceAsset[];
    pagination?: PageResponse;
}
/** Alliance */
export interface QueryAllianceRequest {
    denom: string;
}
export interface QueryAllianceResponse {
    alliance?: AllianceAsset;
}
export interface QueryIBCAllianceRequest {
    hash: string;
}
export interface QueryAllianceValidatorRequest {
    validatorAddr: string;
}
export interface QueryAllAllianceValidatorsRequest {
    pagination?: PageRequest;
}
export interface QueryAllAlliancesDelegationsRequest {
    pagination?: PageRequest;
}
/** AlliancesDelegation */
export interface QueryAlliancesDelegationsRequest {
    delegatorAddr: string;
    pagination?: PageRequest;
}
/** AlliancesDelegationByValidator */
export interface QueryAlliancesDelegationByValidatorRequest {
    delegatorAddr: string;
    validatorAddr: string;
    pagination?: PageRequest;
}
/**
 * DelegationResponse is equivalent to Delegation except that it contains a
 * balance in addition to shares which is more suitable for client responses.
 */
export interface DelegationResponse {
    delegation?: Delegation;
    balance?: Coin;
}
export interface QueryAlliancesDelegationsResponse {
    delegations: DelegationResponse[];
    pagination?: PageResponse;
}
/** AllianceDelegation */
export interface QueryAllianceDelegationRequest {
    delegatorAddr: string;
    validatorAddr: string;
    denom: string;
    pagination?: PageRequest;
}
export interface QueryIBCAllianceDelegationRequest {
    delegatorAddr: string;
    validatorAddr: string;
    hash: string;
    pagination?: PageRequest;
}
export interface QueryAllianceDelegationResponse {
    delegation?: DelegationResponse;
}
/** AllianceDelegation */
export interface QueryAllianceDelegationRewardsRequest {
    delegatorAddr: string;
    validatorAddr: string;
    denom: string;
    pagination?: PageRequest;
}
export interface QueryIBCAllianceDelegationRewardsRequest {
    delegatorAddr: string;
    validatorAddr: string;
    hash: string;
    pagination?: PageRequest;
}
export interface QueryAllianceDelegationRewardsResponse {
    rewards: Coin[];
}
export interface QueryAllianceValidatorResponse {
    validatorAddr: string;
    totalDelegationShares: DecCoin[];
    validatorShares: DecCoin[];
    totalStaked: DecCoin[];
}
export interface QueryAllianceValidatorsResponse {
    validators: QueryAllianceValidatorResponse[];
    pagination?: PageResponse;
}
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): unknown;
    fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse;
};
export declare const QueryAlliancesRequest: {
    encode(message: QueryAlliancesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAlliancesRequest;
    fromJSON(object: any): QueryAlliancesRequest;
    toJSON(message: QueryAlliancesRequest): unknown;
    fromPartial(object: Partial<QueryAlliancesRequest>): QueryAlliancesRequest;
};
export declare const QueryAlliancesResponse: {
    encode(message: QueryAlliancesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAlliancesResponse;
    fromJSON(object: any): QueryAlliancesResponse;
    toJSON(message: QueryAlliancesResponse): unknown;
    fromPartial(object: Partial<QueryAlliancesResponse>): QueryAlliancesResponse;
};
export declare const QueryAllianceRequest: {
    encode(message: QueryAllianceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllianceRequest;
    fromJSON(object: any): QueryAllianceRequest;
    toJSON(message: QueryAllianceRequest): unknown;
    fromPartial(object: Partial<QueryAllianceRequest>): QueryAllianceRequest;
};
export declare const QueryAllianceResponse: {
    encode(message: QueryAllianceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllianceResponse;
    fromJSON(object: any): QueryAllianceResponse;
    toJSON(message: QueryAllianceResponse): unknown;
    fromPartial(object: Partial<QueryAllianceResponse>): QueryAllianceResponse;
};
export declare const QueryIBCAllianceRequest: {
    encode(message: QueryIBCAllianceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryIBCAllianceRequest;
    fromJSON(object: any): QueryIBCAllianceRequest;
    toJSON(message: QueryIBCAllianceRequest): unknown;
    fromPartial(object: Partial<QueryIBCAllianceRequest>): QueryIBCAllianceRequest;
};
export declare const QueryAllianceValidatorRequest: {
    encode(message: QueryAllianceValidatorRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllianceValidatorRequest;
    fromJSON(object: any): QueryAllianceValidatorRequest;
    toJSON(message: QueryAllianceValidatorRequest): unknown;
    fromPartial(object: Partial<QueryAllianceValidatorRequest>): QueryAllianceValidatorRequest;
};
export declare const QueryAllAllianceValidatorsRequest: {
    encode(message: QueryAllAllianceValidatorsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllAllianceValidatorsRequest;
    fromJSON(object: any): QueryAllAllianceValidatorsRequest;
    toJSON(message: QueryAllAllianceValidatorsRequest): unknown;
    fromPartial(object: Partial<QueryAllAllianceValidatorsRequest>): QueryAllAllianceValidatorsRequest;
};
export declare const QueryAllAlliancesDelegationsRequest: {
    encode(message: QueryAllAlliancesDelegationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllAlliancesDelegationsRequest;
    fromJSON(object: any): QueryAllAlliancesDelegationsRequest;
    toJSON(message: QueryAllAlliancesDelegationsRequest): unknown;
    fromPartial(object: Partial<QueryAllAlliancesDelegationsRequest>): QueryAllAlliancesDelegationsRequest;
};
export declare const QueryAlliancesDelegationsRequest: {
    encode(message: QueryAlliancesDelegationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAlliancesDelegationsRequest;
    fromJSON(object: any): QueryAlliancesDelegationsRequest;
    toJSON(message: QueryAlliancesDelegationsRequest): unknown;
    fromPartial(object: Partial<QueryAlliancesDelegationsRequest>): QueryAlliancesDelegationsRequest;
};
export declare const QueryAlliancesDelegationByValidatorRequest: {
    encode(message: QueryAlliancesDelegationByValidatorRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAlliancesDelegationByValidatorRequest;
    fromJSON(object: any): QueryAlliancesDelegationByValidatorRequest;
    toJSON(message: QueryAlliancesDelegationByValidatorRequest): unknown;
    fromPartial(object: Partial<QueryAlliancesDelegationByValidatorRequest>): QueryAlliancesDelegationByValidatorRequest;
};
export declare const DelegationResponse: {
    encode(message: DelegationResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DelegationResponse;
    fromJSON(object: any): DelegationResponse;
    toJSON(message: DelegationResponse): unknown;
    fromPartial(object: Partial<DelegationResponse>): DelegationResponse;
};
export declare const QueryAlliancesDelegationsResponse: {
    encode(message: QueryAlliancesDelegationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAlliancesDelegationsResponse;
    fromJSON(object: any): QueryAlliancesDelegationsResponse;
    toJSON(message: QueryAlliancesDelegationsResponse): unknown;
    fromPartial(object: Partial<QueryAlliancesDelegationsResponse>): QueryAlliancesDelegationsResponse;
};
export declare const QueryAllianceDelegationRequest: {
    encode(message: QueryAllianceDelegationRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllianceDelegationRequest;
    fromJSON(object: any): QueryAllianceDelegationRequest;
    toJSON(message: QueryAllianceDelegationRequest): unknown;
    fromPartial(object: Partial<QueryAllianceDelegationRequest>): QueryAllianceDelegationRequest;
};
export declare const QueryIBCAllianceDelegationRequest: {
    encode(message: QueryIBCAllianceDelegationRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryIBCAllianceDelegationRequest;
    fromJSON(object: any): QueryIBCAllianceDelegationRequest;
    toJSON(message: QueryIBCAllianceDelegationRequest): unknown;
    fromPartial(object: Partial<QueryIBCAllianceDelegationRequest>): QueryIBCAllianceDelegationRequest;
};
export declare const QueryAllianceDelegationResponse: {
    encode(message: QueryAllianceDelegationResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllianceDelegationResponse;
    fromJSON(object: any): QueryAllianceDelegationResponse;
    toJSON(message: QueryAllianceDelegationResponse): unknown;
    fromPartial(object: Partial<QueryAllianceDelegationResponse>): QueryAllianceDelegationResponse;
};
export declare const QueryAllianceDelegationRewardsRequest: {
    encode(message: QueryAllianceDelegationRewardsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllianceDelegationRewardsRequest;
    fromJSON(object: any): QueryAllianceDelegationRewardsRequest;
    toJSON(message: QueryAllianceDelegationRewardsRequest): unknown;
    fromPartial(object: Partial<QueryAllianceDelegationRewardsRequest>): QueryAllianceDelegationRewardsRequest;
};
export declare const QueryIBCAllianceDelegationRewardsRequest: {
    encode(message: QueryIBCAllianceDelegationRewardsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryIBCAllianceDelegationRewardsRequest;
    fromJSON(object: any): QueryIBCAllianceDelegationRewardsRequest;
    toJSON(message: QueryIBCAllianceDelegationRewardsRequest): unknown;
    fromPartial(object: Partial<QueryIBCAllianceDelegationRewardsRequest>): QueryIBCAllianceDelegationRewardsRequest;
};
export declare const QueryAllianceDelegationRewardsResponse: {
    encode(message: QueryAllianceDelegationRewardsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllianceDelegationRewardsResponse;
    fromJSON(object: any): QueryAllianceDelegationRewardsResponse;
    toJSON(message: QueryAllianceDelegationRewardsResponse): unknown;
    fromPartial(object: Partial<QueryAllianceDelegationRewardsResponse>): QueryAllianceDelegationRewardsResponse;
};
export declare const QueryAllianceValidatorResponse: {
    encode(message: QueryAllianceValidatorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllianceValidatorResponse;
    fromJSON(object: any): QueryAllianceValidatorResponse;
    toJSON(message: QueryAllianceValidatorResponse): unknown;
    fromPartial(object: Partial<QueryAllianceValidatorResponse>): QueryAllianceValidatorResponse;
};
export declare const QueryAllianceValidatorsResponse: {
    encode(message: QueryAllianceValidatorsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllianceValidatorsResponse;
    fromJSON(object: any): QueryAllianceValidatorsResponse;
    toJSON(message: QueryAllianceValidatorsResponse): unknown;
    fromPartial(object: Partial<QueryAllianceValidatorsResponse>): QueryAllianceValidatorsResponse;
};
export interface Query {
    Params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** Query paginated alliances */
    Alliances(request?: QueryAlliancesRequest): Promise<QueryAlliancesResponse>;
    /** Query a specific alliance by ibc hash */
    IBCAlliance(request: QueryIBCAllianceRequest): Promise<QueryAllianceResponse>;
    /** Query all paginated alliance delegations */
    AllAlliancesDelegations(request?: QueryAllAlliancesDelegationsRequest): Promise<QueryAlliancesDelegationsResponse>;
    /** Query alliance validator */
    AllianceValidator(request: QueryAllianceValidatorRequest): Promise<QueryAllianceValidatorResponse>;
    /** Query all paginated alliance validators */
    AllAllianceValidators(request?: QueryAllAllianceValidatorsRequest): Promise<QueryAllianceValidatorsResponse>;
    /** Query all paginated alliance delegations for a delegator addr */
    AlliancesDelegation(request: QueryAlliancesDelegationsRequest): Promise<QueryAlliancesDelegationsResponse>;
    /** Query all paginated alliance delegations for a delegator addr and validator_addr */
    AlliancesDelegationByValidator(request: QueryAlliancesDelegationByValidatorRequest): Promise<QueryAlliancesDelegationsResponse>;
    /** Query a delegation to an alliance by delegator addr, validator_addr and denom */
    AllianceDelegation(request: QueryAllianceDelegationRequest): Promise<QueryAllianceDelegationResponse>;
    /** Query a delegation to an alliance by delegator addr, validator_addr and denom */
    IBCAllianceDelegation(request: QueryIBCAllianceDelegationRequest): Promise<QueryAllianceDelegationResponse>;
    /** Query for rewards by delegator addr, validator_addr and denom */
    AllianceDelegationRewards(request: QueryAllianceDelegationRewardsRequest): Promise<QueryAllianceDelegationRewardsResponse>;
    /** Query for rewards by delegator addr, validator_addr and denom */
    IBCAllianceDelegationRewards(request: QueryIBCAllianceDelegationRewardsRequest): Promise<QueryAllianceDelegationRewardsResponse>;
    /** Query a specific alliance by denom */
    Alliance(request: QueryAllianceRequest): Promise<QueryAllianceResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    Alliances(request?: QueryAlliancesRequest): Promise<QueryAlliancesResponse>;
    IBCAlliance(request: QueryIBCAllianceRequest): Promise<QueryAllianceResponse>;
    AllAlliancesDelegations(request?: QueryAllAlliancesDelegationsRequest): Promise<QueryAlliancesDelegationsResponse>;
    AllianceValidator(request: QueryAllianceValidatorRequest): Promise<QueryAllianceValidatorResponse>;
    AllAllianceValidators(request?: QueryAllAllianceValidatorsRequest): Promise<QueryAllianceValidatorsResponse>;
    AlliancesDelegation(request: QueryAlliancesDelegationsRequest): Promise<QueryAlliancesDelegationsResponse>;
    AlliancesDelegationByValidator(request: QueryAlliancesDelegationByValidatorRequest): Promise<QueryAlliancesDelegationsResponse>;
    AllianceDelegation(request: QueryAllianceDelegationRequest): Promise<QueryAllianceDelegationResponse>;
    IBCAllianceDelegation(request: QueryIBCAllianceDelegationRequest): Promise<QueryAllianceDelegationResponse>;
    AllianceDelegationRewards(request: QueryAllianceDelegationRewardsRequest): Promise<QueryAllianceDelegationRewardsResponse>;
    IBCAllianceDelegationRewards(request: QueryIBCAllianceDelegationRewardsRequest): Promise<QueryAllianceDelegationRewardsResponse>;
    Alliance(request: QueryAllianceRequest): Promise<QueryAllianceResponse>;
}
