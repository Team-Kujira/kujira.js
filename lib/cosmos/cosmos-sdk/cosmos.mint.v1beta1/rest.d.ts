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
 * Params holds parameters for the mint module.
 */
export interface V1Beta1Params {
    mint_denom?: string;
    inflation_rate_change?: string;
    inflation_max?: string;
    inflation_min?: string;
    goal_bonded?: string;
    /** @format uint64 */
    blocks_per_year?: string;
}
/**
* QueryAnnualProvisionsResponse is the response type for the
Query/AnnualProvisions RPC method.
*/
export interface V1Beta1QueryAnnualProvisionsResponse {
    /**
     * annual_provisions is the current minting annual provisions value.
     * @format byte
     */
    annual_provisions?: string;
}
/**
* QueryInflationResponse is the response type for the Query/Inflation RPC
method.
*/
export interface V1Beta1QueryInflationResponse {
    /**
     * inflation is the current minting inflation value.
     * @format byte
     */
    inflation?: string;
}
/**
 * QueryParamsResponse is the response type for the Query/Params RPC method.
 */
export interface V1Beta1QueryParamsResponse {
    /** params defines the parameters of the module. */
    params?: V1Beta1Params;
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
 * @title cosmos/mint/v1beta1/genesis.proto
 * @version version not set
 */
export declare class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
    /**
     * No description
     *
     * @tags Query
     * @name QueryAnnualProvisions
     * @summary AnnualProvisions current minting annual provisions value.
     * @request GET:/cosmos/mint/v1beta1/annual_provisions
     */
    queryAnnualProvisions: (params?: RequestParams) => Promise<HttpResponse<V1Beta1QueryAnnualProvisionsResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryInflation
     * @summary Inflation returns the current minting inflation value.
     * @request GET:/cosmos/mint/v1beta1/inflation
     */
    queryInflation: (params?: RequestParams) => Promise<HttpResponse<V1Beta1QueryInflationResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryParams
     * @summary Params returns the total set of minting parameters.
     * @request GET:/cosmos/mint/v1beta1/params
     */
    queryParams: (params?: RequestParams) => Promise<HttpResponse<V1Beta1QueryParamsResponse, RpcStatus>>;
}
export {};
