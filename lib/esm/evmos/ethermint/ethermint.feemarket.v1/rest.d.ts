export interface ProtobufAny {
    "@type"?: string;
}
export interface RpcStatus {
    /** @format int32 */
    code?: number;
    message?: string;
    details?: ProtobufAny[];
}
export interface V1Params {
    no_base_fee?: boolean;
    /**
     * base fee change denominator bounds the amount the base fee can change
     * between blocks.
     * @format int64
     */
    base_fee_change_denominator?: number;
    /**
     * elasticity multiplier bounds the maximum gas limit an EIP-1559 block may
     * have.
     * @format int64
     */
    elasticity_multiplier?: number;
    /**
     * height at which the base fee calculation is enabled.
     * @format int64
     */
    enable_height?: string;
    /** base fee for EIP-1559 blocks. */
    base_fee?: string;
    min_gas_price?: string;
    min_gas_multiplier?: string;
}
/**
 * BaseFeeResponse returns the EIP1559 base fee.
 */
export interface V1QueryBaseFeeResponse {
    base_fee?: string;
}
/**
 * QueryBlockGasResponse returns block gas used for a given height.
 */
export interface V1QueryBlockGasResponse {
    /** @format int64 */
    gas?: string;
}
/**
 * QueryParamsResponse defines the response type for querying x/evm parameters.
 */
export interface V1QueryParamsResponse {
    /** params define the evm module parameters. */
    params?: V1Params;
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
 * @title ethermint/feemarket/v1/feemarket.proto
 * @version version not set
 */
export declare class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
    /**
     * No description
     *
     * @tags Query
     * @name QueryBaseFee
     * @summary BaseFee queries the base fee of the parent block of the current block.
     * @request GET:/ethermint/feemarket/v1/base_fee
     */
    queryBaseFee: (params?: RequestParams) => Promise<HttpResponse<V1QueryBaseFeeResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryBlockGas
     * @summary BlockGas queries the gas used at a given block height
     * @request GET:/ethermint/feemarket/v1/block_gas
     */
    queryBlockGas: (params?: RequestParams) => Promise<HttpResponse<V1QueryBlockGasResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryParams
     * @summary Params queries the parameters of x/feemarket module.
     * @request GET:/ethermint/feemarket/v1/params
     */
    queryParams: (params?: RequestParams) => Promise<HttpResponse<V1QueryParamsResponse, RpcStatus>>;
}
export {};
