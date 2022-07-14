"use strict";
/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Api = exports.HttpClient = exports.ContentType = void 0;
var ContentType;
(function (ContentType) {
    ContentType["Json"] = "application/json";
    ContentType["FormData"] = "multipart/form-data";
    ContentType["UrlEncoded"] = "application/x-www-form-urlencoded";
})(ContentType = exports.ContentType || (exports.ContentType = {}));
class HttpClient {
    constructor(apiConfig = {}) {
        this.baseUrl = "";
        this.securityData = null;
        this.securityWorker = null;
        this.abortControllers = new Map();
        this.baseApiParams = {
            credentials: "same-origin",
            headers: {},
            redirect: "follow",
            referrerPolicy: "no-referrer",
        };
        this.setSecurityData = (data) => {
            this.securityData = data;
        };
        this.contentFormatters = {
            [ContentType.Json]: (input) => input !== null && (typeof input === "object" || typeof input === "string")
                ? JSON.stringify(input)
                : input,
            [ContentType.FormData]: (input) => Object.keys(input || {}).reduce((data, key) => {
                data.append(key, input[key]);
                return data;
            }, new FormData()),
            [ContentType.UrlEncoded]: (input) => this.toQueryString(input),
        };
        this.createAbortSignal = (cancelToken) => {
            if (this.abortControllers.has(cancelToken)) {
                const abortController = this.abortControllers.get(cancelToken);
                if (abortController) {
                    return abortController.signal;
                }
                return void 0;
            }
            const abortController = new AbortController();
            this.abortControllers.set(cancelToken, abortController);
            return abortController.signal;
        };
        this.abortRequest = (cancelToken) => {
            const abortController = this.abortControllers.get(cancelToken);
            if (abortController) {
                abortController.abort();
                this.abortControllers.delete(cancelToken);
            }
        };
        this.request = (_a) => {
            var { body, secure, path, type, query, format = "json", baseUrl, cancelToken } = _a, params = __rest(_a, ["body", "secure", "path", "type", "query", "format", "baseUrl", "cancelToken"]);
            const secureParams = (secure &&
                this.securityWorker &&
                this.securityWorker(this.securityData)) ||
                {};
            const requestParams = this.mergeRequestParams(params, secureParams);
            const queryString = query && this.toQueryString(query);
            const payloadFormatter = this.contentFormatters[type || ContentType.Json];
            return fetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, Object.assign(Object.assign({}, requestParams), { headers: Object.assign(Object.assign({}, (type && type !== ContentType.FormData
                    ? { "Content-Type": type }
                    : {})), (requestParams.headers || {})), signal: cancelToken ? this.createAbortSignal(cancelToken) : void 0, body: typeof body === "undefined" || body === null
                    ? null
                    : payloadFormatter(body) })).then((response) => __awaiter(this, void 0, void 0, function* () {
                const r = response;
                r.data = null;
                r.error = null;
                const data = yield response[format]()
                    .then((data) => {
                    if (r.ok) {
                        r.data = data;
                    }
                    else {
                        r.error = data;
                    }
                    return r;
                })
                    .catch((e) => {
                    r.error = e;
                    return r;
                });
                if (cancelToken) {
                    this.abortControllers.delete(cancelToken);
                }
                if (!response.ok)
                    throw data;
                return data;
            }));
        };
        Object.assign(this, apiConfig);
    }
    addQueryParam(query, key) {
        const value = query[key];
        return (encodeURIComponent(key) +
            "=" +
            encodeURIComponent(Array.isArray(value)
                ? value.join(",")
                : typeof value === "number"
                    ? value
                    : `${value}`));
    }
    toQueryString(rawQuery) {
        const query = rawQuery || {};
        const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
        return keys
            .map((key) => typeof query[key] === "object" && !Array.isArray(query[key])
            ? this.toQueryString(query[key])
            : this.addQueryParam(query, key))
            .join("&");
    }
    addQueryParams(rawQuery) {
        const queryString = this.toQueryString(rawQuery);
        return queryString ? `?${queryString}` : "";
    }
    mergeRequestParams(params1, params2) {
        return Object.assign(Object.assign(Object.assign(Object.assign({}, this.baseApiParams), params1), (params2 || {})), { headers: Object.assign(Object.assign(Object.assign({}, (this.baseApiParams.headers || {})), (params1.headers || {})), ((params2 && params2.headers) || {})) });
    }
}
exports.HttpClient = HttpClient;
/**
 * @title ethermint/evm/v1/evm.proto
 * @version version not set
 */
class Api extends HttpClient {
    constructor() {
        super(...arguments);
        /**
         * No description
         *
         * @tags Query
         * @name QueryAccount
         * @summary Account queries an Ethereum account.
         * @request GET:/ethermint/evm/v1/account/{address}
         */
        this.queryAccount = (address, params = {}) => this.request(Object.assign({ path: `/ethermint/evm/v1/account/${address}`, method: "GET", format: "json" }, params));
        /**
       * No description
       *
       * @tags Query
       * @name QueryBalance
       * @summary Balance queries the balance of a the EVM denomination for a single
      EthAccount.
       * @request GET:/ethermint/evm/v1/balances/{address}
       */
        this.queryBalance = (address, params = {}) => this.request(Object.assign({ path: `/ethermint/evm/v1/balances/${address}`, method: "GET", format: "json" }, params));
        /**
       * No description
       *
       * @tags Query
       * @name QueryBaseFee
       * @summary BaseFee queries the base fee of the parent block of the current block,
      it's similar to feemarket module's method, but also checks london hardfork status.
       * @request GET:/ethermint/evm/v1/base_fee
       */
        this.queryBaseFee = (params = {}) => this.request(Object.assign({ path: `/ethermint/evm/v1/base_fee`, method: "GET", format: "json" }, params));
        /**
         * No description
         *
         * @tags Query
         * @name QueryCode
         * @summary Code queries the balance of all coins for a single account.
         * @request GET:/ethermint/evm/v1/codes/{address}
         */
        this.queryCode = (address, params = {}) => this.request(Object.assign({ path: `/ethermint/evm/v1/codes/${address}`, method: "GET", format: "json" }, params));
        /**
         * No description
         *
         * @tags Query
         * @name QueryCosmosAccount
         * @summary CosmosAccount queries an Ethereum account's Cosmos Address.
         * @request GET:/ethermint/evm/v1/cosmos_account/{address}
         */
        this.queryCosmosAccount = (address, params = {}) => this.request(Object.assign({ path: `/ethermint/evm/v1/cosmos_account/${address}`, method: "GET", format: "json" }, params));
        /**
         * No description
         *
         * @tags Query
         * @name QueryEstimateGas
         * @summary EstimateGas implements the `eth_estimateGas` rpc api
         * @request GET:/ethermint/evm/v1/estimate_gas
         */
        this.queryEstimateGas = (query, params = {}) => this.request(Object.assign({ path: `/ethermint/evm/v1/estimate_gas`, method: "GET", query: query, format: "json" }, params));
        /**
         * No description
         *
         * @tags Query
         * @name QueryEthCall
         * @summary EthCall implements the `eth_call` rpc api
         * @request GET:/ethermint/evm/v1/eth_call
         */
        this.queryEthCall = (query, params = {}) => this.request(Object.assign({ path: `/ethermint/evm/v1/eth_call`, method: "GET", query: query, format: "json" }, params));
        /**
         * No description
         *
         * @tags Msg
         * @name MsgEthereumTx
         * @summary EthereumTx defines a method submitting Ethereum transactions.
         * @request POST:/ethermint/evm/v1/ethereum_tx
         */
        this.msgEthereumTx = (query, params = {}) => this.request(Object.assign({ path: `/ethermint/evm/v1/ethereum_tx`, method: "POST", query: query, format: "json" }, params));
        /**
         * No description
         *
         * @tags Query
         * @name QueryParams
         * @summary Params queries the parameters of x/evm module.
         * @request GET:/ethermint/evm/v1/params
         */
        this.queryParams = (params = {}) => this.request(Object.assign({ path: `/ethermint/evm/v1/params`, method: "GET", format: "json" }, params));
        /**
         * No description
         *
         * @tags Query
         * @name QueryStorage
         * @summary Storage queries the balance of all coins for a single account.
         * @request GET:/ethermint/evm/v1/storage/{address}/{key}
         */
        this.queryStorage = (address, key, params = {}) => this.request(Object.assign({ path: `/ethermint/evm/v1/storage/${address}/${key}`, method: "GET", format: "json" }, params));
        /**
         * No description
         *
         * @tags Query
         * @name QueryTraceBlock
         * @summary TraceBlock implements the `debug_traceBlockByNumber` and `debug_traceBlockByHash` rpc api
         * @request GET:/ethermint/evm/v1/trace_block
         */
        this.queryTraceBlock = (query, params = {}) => this.request(Object.assign({ path: `/ethermint/evm/v1/trace_block`, method: "GET", query: query, format: "json" }, params));
        /**
         * No description
         *
         * @tags Query
         * @name QueryTraceTx
         * @summary TraceTx implements the `debug_traceTransaction` rpc api
         * @request GET:/ethermint/evm/v1/trace_tx
         */
        this.queryTraceTx = (query, params = {}) => this.request(Object.assign({ path: `/ethermint/evm/v1/trace_tx`, method: "GET", query: query, format: "json" }, params));
        /**
       * No description
       *
       * @tags Query
       * @name QueryValidatorAccount
       * @summary ValidatorAccount queries an Ethereum account's from a validator consensus
      Address.
       * @request GET:/ethermint/evm/v1/validator_account/{cons_address}
       */
        this.queryValidatorAccount = (cons_address, params = {}) => this.request(Object.assign({ path: `/ethermint/evm/v1/validator_account/${cons_address}`, method: "GET", format: "json" }, params));
    }
}
exports.Api = Api;
