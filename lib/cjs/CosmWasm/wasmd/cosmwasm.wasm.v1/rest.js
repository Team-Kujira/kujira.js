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
exports.Api = exports.HttpClient = exports.ContentType = exports.V1ContractCodeHistoryOperationType = exports.V1AccessType = void 0;
/**
* - ACCESS_TYPE_UNSPECIFIED: AccessTypeUnspecified placeholder for empty value
 - ACCESS_TYPE_NOBODY: AccessTypeNobody forbidden
 - ACCESS_TYPE_ONLY_ADDRESS: AccessTypeOnlyAddress restricted to an address
 - ACCESS_TYPE_EVERYBODY: AccessTypeEverybody unrestricted
*/
var V1AccessType;
(function (V1AccessType) {
    V1AccessType["ACCESS_TYPE_UNSPECIFIED"] = "ACCESS_TYPE_UNSPECIFIED";
    V1AccessType["ACCESS_TYPE_NOBODY"] = "ACCESS_TYPE_NOBODY";
    V1AccessType["ACCESS_TYPE_ONLY_ADDRESS"] = "ACCESS_TYPE_ONLY_ADDRESS";
    V1AccessType["ACCESS_TYPE_EVERYBODY"] = "ACCESS_TYPE_EVERYBODY";
})(V1AccessType = exports.V1AccessType || (exports.V1AccessType = {}));
/**
* - CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED: ContractCodeHistoryOperationTypeUnspecified placeholder for empty value
 - CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT: ContractCodeHistoryOperationTypeInit on chain contract instantiation
 - CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE: ContractCodeHistoryOperationTypeMigrate code migration
 - CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS: ContractCodeHistoryOperationTypeGenesis based on genesis data
*/
var V1ContractCodeHistoryOperationType;
(function (V1ContractCodeHistoryOperationType) {
    V1ContractCodeHistoryOperationType["CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED"] = "CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED";
    V1ContractCodeHistoryOperationType["CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT"] = "CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT";
    V1ContractCodeHistoryOperationType["CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE"] = "CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE";
    V1ContractCodeHistoryOperationType["CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS"] = "CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS";
})(V1ContractCodeHistoryOperationType = exports.V1ContractCodeHistoryOperationType || (exports.V1ContractCodeHistoryOperationType = {}));
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
 * @title cosmwasm/wasm/v1/genesis.proto
 * @version version not set
 */
class Api extends HttpClient {
    constructor() {
        super(...arguments);
        /**
         * No description
         *
         * @tags Query
         * @name QueryCodes
         * @summary Codes gets the metadata for all stored wasm codes
         * @request GET:/cosmwasm/wasm/v1/code
         */
        this.queryCodes = (query, params = {}) => this.request(Object.assign({ path: `/cosmwasm/wasm/v1/code`, method: "GET", query: query, format: "json" }, params));
        /**
         * No description
         *
         * @tags Query
         * @name QueryCode
         * @summary Code gets the binary code and metadata for a singe wasm code
         * @request GET:/cosmwasm/wasm/v1/code/{code_id}
         */
        this.queryCode = (code_id, params = {}) => this.request(Object.assign({ path: `/cosmwasm/wasm/v1/code/${code_id}`, method: "GET", format: "json" }, params));
        /**
         * No description
         *
         * @tags Query
         * @name QueryContractsByCode
         * @summary ContractsByCode lists all smart contracts for a code id
         * @request GET:/cosmwasm/wasm/v1/code/{code_id}/contracts
         */
        this.queryContractsByCode = (code_id, query, params = {}) => this.request(Object.assign({ path: `/cosmwasm/wasm/v1/code/${code_id}/contracts`, method: "GET", query: query, format: "json" }, params));
        /**
         * No description
         *
         * @tags Query
         * @name QueryPinnedCodes
         * @summary PinnedCodes gets the pinned code ids
         * @request GET:/cosmwasm/wasm/v1/codes/pinned
         */
        this.queryPinnedCodes = (query, params = {}) => this.request(Object.assign({ path: `/cosmwasm/wasm/v1/codes/pinned`, method: "GET", query: query, format: "json" }, params));
        /**
         * No description
         *
         * @tags Query
         * @name QueryContractInfo
         * @summary ContractInfo gets the contract meta data
         * @request GET:/cosmwasm/wasm/v1/contract/{address}
         */
        this.queryContractInfo = (address, params = {}) => this.request(Object.assign({ path: `/cosmwasm/wasm/v1/contract/${address}`, method: "GET", format: "json" }, params));
        /**
         * No description
         *
         * @tags Query
         * @name QueryContractHistory
         * @summary ContractHistory gets the contract code history
         * @request GET:/cosmwasm/wasm/v1/contract/{address}/history
         */
        this.queryContractHistory = (address, query, params = {}) => this.request(Object.assign({ path: `/cosmwasm/wasm/v1/contract/${address}/history`, method: "GET", query: query, format: "json" }, params));
        /**
         * No description
         *
         * @tags Query
         * @name QueryRawContractState
         * @summary RawContractState gets single key from the raw store data of a contract
         * @request GET:/cosmwasm/wasm/v1/contract/{address}/raw/{query_data}
         */
        this.queryRawContractState = (address, query_data, params = {}) => this.request(Object.assign({ path: `/cosmwasm/wasm/v1/contract/${address}/raw/${query_data}`, method: "GET", format: "json" }, params));
        /**
         * No description
         *
         * @tags Query
         * @name QuerySmartContractState
         * @summary SmartContractState get smart query result from the contract
         * @request GET:/cosmwasm/wasm/v1/contract/{address}/smart/{query_data}
         */
        this.querySmartContractState = (address, query_data, castFn, params = {}) => {
            const query = Buffer.from(JSON.stringify(query_data)).toString("base64");
            return this.request(Object.assign({ path: `/cosmwasm/wasm/v1/contract/${address}/smart/${query}`, method: "GET", format: "json" }, params)).then((resp) => resp.data.data && castFn(resp.data.data));
        };
        /**
         * No description
         *
         * @tags Query
         * @name QueryAllContractState
         * @summary AllContractState gets all raw store data for a single contract
         * @request GET:/cosmwasm/wasm/v1/contract/{address}/state
         */
        this.queryAllContractState = (address, query, params = {}) => this.request(Object.assign({ path: `/cosmwasm/wasm/v1/contract/${address}/state`, method: "GET", query: query, format: "json" }, params));
    }
}
exports.Api = Api;
