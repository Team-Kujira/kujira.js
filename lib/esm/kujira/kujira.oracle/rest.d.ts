export interface OracleAggregateExchangeRatePrevote {
    hash?: string;
    voter?: string;
    /** @format uint64 */
    submit_block?: string;
}
/**
 * MsgAggregateExchangeRateVote - struct for voting on exchange rates.
 */
export interface OracleAggregateExchangeRateVote {
    exchange_rate_tuples?: OracleExchangeRateTuple[];
    voter?: string;
}
export interface OracleDenom {
    name?: string;
}
export interface OracleExchangeRateTuple {
    denom?: string;
    exchange_rate?: string;
}
/**
 * MsgAggregateExchangeRatePrevoteResponse defines the Msg/AggregateExchangeRatePrevote response type.
 */
export declare type OracleMsgAggregateExchangeRatePrevoteResponse = object;
/**
 * MsgAggregateExchangeRateVoteResponse defines the Msg/AggregateExchangeRateVote response type.
 */
export declare type OracleMsgAggregateExchangeRateVoteResponse = object;
/**
 * MsgDelegateFeedConsentResponse defines the Msg/DelegateFeedConsent response type.
 */
export declare type OracleMsgDelegateFeedConsentResponse = object;
/**
 * Params defines the parameters for the oracle module.
 */
export interface OracleParams {
    /** @format uint64 */
    vote_period?: string;
    vote_threshold?: string;
    reward_band?: string;
    /** @format uint64 */
    reward_distribution_window?: string;
    whitelist?: OracleDenom[];
    slash_fraction?: string;
    /** @format uint64 */
    slash_window?: string;
    min_valid_per_window?: string;
}
/**
* QueryActivesResponse is response type for the
Query/Actives RPC method.
*/
export interface OracleQueryActivesResponse {
    /** actives defines a list of the denomination which oracle prices aggreed upon. */
    actives?: string[];
}
/**
* QueryAggregatePrevoteResponse is response type for the
Query/AggregatePrevote RPC method.
*/
export interface OracleQueryAggregatePrevoteResponse {
    aggregate_prevote?: OracleAggregateExchangeRatePrevote;
}
/**
* QueryAggregatePrevotesResponse is response type for the
Query/AggregatePrevotes RPC method.
*/
export interface OracleQueryAggregatePrevotesResponse {
    aggregate_prevotes?: OracleAggregateExchangeRatePrevote[];
}
/**
* QueryAggregateVoteResponse is response type for the
Query/AggregateVote RPC method.
*/
export interface OracleQueryAggregateVoteResponse {
    /** MsgAggregateExchangeRateVote - struct for voting on exchange rates. */
    aggregate_vote?: OracleAggregateExchangeRateVote;
}
/**
* QueryAggregateVotesResponse is response type for the
Query/AggregateVotes RPC method.
*/
export interface OracleQueryAggregateVotesResponse {
    aggregate_votes?: OracleAggregateExchangeRateVote[];
}
/**
* QueryExchangeRateResponse is response type for the
Query/ExchangeRate RPC method.
*/
export interface OracleQueryExchangeRateResponse {
    exchange_rate?: string;
}
/**
* QueryExchangeRatesResponse is response type for the
Query/ExchangeRates RPC method.
*/
export interface OracleQueryExchangeRatesResponse {
    /** exchange_rates defines a list of the exchange rate for all whitelisted denoms. */
    exchange_rates?: V1Beta1DecCoin[];
}
/**
* QueryFeederDelegationResponse is response type for the
Query/FeederDelegation RPC method.
*/
export interface OracleQueryFeederDelegationResponse {
    feeder_addr?: string;
}
/**
* QueryMissCounterResponse is response type for the
Query/MissCounter RPC method.
*/
export interface OracleQueryMissCounterResponse {
    /** @format uint64 */
    miss_counter?: string;
}
/**
 * QueryParamsResponse is the response type for the Query/Params RPC method.
 */
export interface OracleQueryParamsResponse {
    /** params defines the parameters of the module. */
    params?: OracleParams;
}
export interface ProtobufAny {
    "@type"?: string;
}
export interface RpcStatus {
    /** @format int32 */
    code?: number;
    message?: string;
    details?: ProtobufAny[];
}
/**
* DecCoin defines a token with a denomination and a decimal amount.

NOTE: The amount field is an Dec which implements the custom method
signatures required by gogoproto.
*/
export interface V1Beta1DecCoin {
    denom?: string;
    amount?: string;
}
export declare type QueryParamsType = Record<string | number, any>;
export declare type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;
export interface FullRequestParams extends Omit<RequestInit, "body"> {
    /** set parameter to `true` for call `securityWorker` for this request */
    secure?: boolean;
    /** request path */
    path: string;
    /** content type of request body */
    type?: ContentType;
    /** query params */
    query?: QueryParamsType;
    /** format of response (i.e. response.json() -> format: "json") */
    format?: keyof Omit<Body, "body" | "bodyUsed">;
    /** request body */
    body?: unknown;
    /** base url */
    baseUrl?: string;
    /** request cancellation token */
    cancelToken?: CancelToken;
}
export declare type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;
export interface ApiConfig<SecurityDataType = unknown> {
    baseUrl?: string;
    baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
    securityWorker?: (securityData: SecurityDataType) => RequestParams | void;
}
export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
    data: D;
    error: E;
}
declare type CancelToken = Symbol | string | number;
export declare enum ContentType {
    Json = "application/json",
    FormData = "multipart/form-data",
    UrlEncoded = "application/x-www-form-urlencoded"
}
export declare class HttpClient<SecurityDataType = unknown> {
    baseUrl: string;
    private securityData;
    private securityWorker;
    private abortControllers;
    private baseApiParams;
    constructor(apiConfig?: ApiConfig<SecurityDataType>);
    setSecurityData: (data: SecurityDataType) => void;
    private addQueryParam;
    protected toQueryString(rawQuery?: QueryParamsType): string;
    protected addQueryParams(rawQuery?: QueryParamsType): string;
    private contentFormatters;
    private mergeRequestParams;
    private createAbortSignal;
    abortRequest: (cancelToken: CancelToken) => void;
    request: <T = any, E = any>({ body, secure, path, type, query, format, baseUrl, cancelToken, ...params }: FullRequestParams) => Promise<HttpResponse<T, E>>;
}
/**
 * @title oracle/genesis.proto
 * @version version not set
 */
export declare class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
    /**
     * No description
     *
     * @tags Query
     * @name QueryActives
     * @summary Actives returns all active denoms
     * @request GET:/oracle/denoms/actives
     */
    queryActives: (params?: RequestParams) => Promise<HttpResponse<OracleQueryActivesResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryExchangeRates
     * @summary ExchangeRates returns exchange rates of all denoms
     * @request GET:/oracle/denoms/exchange_rates
     */
    queryExchangeRates: (params?: RequestParams) => Promise<HttpResponse<OracleQueryExchangeRatesResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryExchangeRate
     * @summary ExchangeRate returns exchange rate of a denom
     * @request GET:/oracle/denoms/{denom}/exchange_rate
     */
    queryExchangeRate: (denom: string, params?: RequestParams) => Promise<HttpResponse<OracleQueryExchangeRateResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryParams
     * @summary Params queries all parameters.
     * @request GET:/oracle/params
     */
    queryParams: (params?: RequestParams) => Promise<HttpResponse<OracleQueryParamsResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryAggregateVote
     * @summary AggregateVote returns an aggregate vote of a validator
     * @request GET:/oracle/valdiators/{validator_addr}/aggregate_vote
     */
    queryAggregateVote: (validator_addr: string, params?: RequestParams) => Promise<HttpResponse<OracleQueryAggregateVoteResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryAggregatePrevotes
     * @summary AggregatePrevotes returns aggregate prevotes of all validators
     * @request GET:/oracle/validators/aggregate_prevotes
     */
    queryAggregatePrevotes: (params?: RequestParams) => Promise<HttpResponse<OracleQueryAggregatePrevotesResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryAggregateVotes
     * @summary AggregateVotes returns aggregate votes of all validators
     * @request GET:/oracle/validators/aggregate_votes
     */
    queryAggregateVotes: (params?: RequestParams) => Promise<HttpResponse<OracleQueryAggregateVotesResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryAggregatePrevote
     * @summary AggregatePrevote returns an aggregate prevote of a validator
     * @request GET:/oracle/validators/{validator_addr}/aggregate_prevote
     */
    queryAggregatePrevote: (validator_addr: string, params?: RequestParams) => Promise<HttpResponse<OracleQueryAggregatePrevoteResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryFeederDelegation
     * @summary FeederDelegation returns feeder delegation of a validator
     * @request GET:/oracle/validators/{validator_addr}/feeder
     */
    queryFeederDelegation: (validator_addr: string, params?: RequestParams) => Promise<HttpResponse<OracleQueryFeederDelegationResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryMissCounter
     * @summary MissCounter returns oracle miss counter of a validator
     * @request GET:/oracle/validators/{validator_addr}/miss
     */
    queryMissCounter: (validator_addr: string, params?: RequestParams) => Promise<HttpResponse<OracleQueryMissCounterResponse, RpcStatus>>;
}
export {};
