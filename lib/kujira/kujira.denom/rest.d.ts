/**
* DenomAuthorityMetadata specifies metadata for addresses that have specific
capabilities over a token factory denom. Right now there is only one Admin
permission, but is planned to be extended to the future.
*/
export interface DenomDenomAuthorityMetadata {
    Admin?: string;
}
export declare type DenomMsgBurnResponse = object;
export declare type DenomMsgChangeAdminResponse = object;
export interface DenomMsgCreateDenomResponse {
    new_token_denom?: string;
}
export declare type DenomMsgMintResponse = object;
export interface DenomParams {
    creation_fee?: V1Beta1Coin[];
}
export interface DenomQueryDenomAuthorityMetadataResponse {
    /**
     * DenomAuthorityMetadata specifies metadata for addresses that have specific
     * capabilities over a token factory denom. Right now there is only one Admin
     * permission, but is planned to be extended to the future.
     */
    authority_metadata?: DenomDenomAuthorityMetadata;
}
export interface DenomQueryDenomsFromCreatorResponse {
    denoms?: string[];
}
/**
 * QueryParamsResponse is the response type for the Query/Params RPC method.
 */
export interface DenomQueryParamsResponse {
    /** params defines the parameters of the module. */
    params?: DenomParams;
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
* Coin defines a token with a denomination and an amount.

NOTE: The amount field is an Int which implements the custom method
signatures required by gogoproto.
*/
export interface V1Beta1Coin {
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
 * @title denom/authorityMetadata.proto
 * @version version not set
 */
export declare class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
    /**
     * No description
     *
     * @tags Query
     * @name QueryDenomsFromCreator
     * @request GET:/kujira/denoms/by_creator/{creator}
     */
    queryDenomsFromCreator: (creator: string, params?: RequestParams) => Promise<HttpResponse<DenomQueryDenomsFromCreatorResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryParams
     * @summary Params returns the total set of minting parameters.
     * @request GET:/kujira/denoms/params
     */
    queryParams: (params?: RequestParams) => Promise<HttpResponse<DenomQueryParamsResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryDenomAuthorityMetadata
     * @request GET:/kujira/denoms/{denom}/authority_metadata
     */
    queryDenomAuthorityMetadata: (denom: string, params?: RequestParams) => Promise<HttpResponse<DenomQueryDenomAuthorityMetadataResponse, RpcStatus>>;
}
export {};
