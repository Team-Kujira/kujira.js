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
 * @title oracle/genesis.proto
 * @version version not set
 */
class Api extends HttpClient {
    constructor() {
        super(...arguments);
        /**
         * No description
         *
         * @tags Query
         * @name QueryActives
         * @summary Actives returns all active denoms
         * @request GET:/oracle/denoms/actives
         */
        this.queryActives = (params = {}) => this.request(Object.assign({ path: `/oracle/denoms/actives`, method: "GET", format: "json" }, params));
        /**
         * No description
         *
         * @tags Query
         * @name QueryExchangeRates
         * @summary ExchangeRates returns exchange rates of all denoms
         * @request GET:/oracle/denoms/exchange_rates
         */
        this.queryExchangeRates = (params = {}) => this.request(Object.assign({ path: `/oracle/denoms/exchange_rates`, method: "GET", format: "json" }, params));
        /**
         * No description
         *
         * @tags Query
         * @name QueryExchangeRate
         * @summary ExchangeRate returns exchange rate of a denom
         * @request GET:/oracle/denoms/{denom}/exchange_rate
         */
        this.queryExchangeRate = (denom, params = {}) => this.request(Object.assign({ path: `/oracle/denoms/${denom}/exchange_rate`, method: "GET", format: "json" }, params));
        /**
         * No description
         *
         * @tags Query
         * @name QueryParams
         * @summary Params queries all parameters.
         * @request GET:/oracle/params
         */
        this.queryParams = (params = {}) => this.request(Object.assign({ path: `/oracle/params`, method: "GET", format: "json" }, params));
        /**
         * No description
         *
         * @tags Query
         * @name QueryAggregateVote
         * @summary AggregateVote returns an aggregate vote of a validator
         * @request GET:/oracle/valdiators/{validator_addr}/aggregate_vote
         */
        this.queryAggregateVote = (validator_addr, params = {}) => this.request(Object.assign({ path: `/oracle/valdiators/${validator_addr}/aggregate_vote`, method: "GET", format: "json" }, params));
        /**
         * No description
         *
         * @tags Query
         * @name QueryAggregatePrevotes
         * @summary AggregatePrevotes returns aggregate prevotes of all validators
         * @request GET:/oracle/validators/aggregate_prevotes
         */
        this.queryAggregatePrevotes = (params = {}) => this.request(Object.assign({ path: `/oracle/validators/aggregate_prevotes`, method: "GET", format: "json" }, params));
        /**
         * No description
         *
         * @tags Query
         * @name QueryAggregateVotes
         * @summary AggregateVotes returns aggregate votes of all validators
         * @request GET:/oracle/validators/aggregate_votes
         */
        this.queryAggregateVotes = (params = {}) => this.request(Object.assign({ path: `/oracle/validators/aggregate_votes`, method: "GET", format: "json" }, params));
        /**
         * No description
         *
         * @tags Query
         * @name QueryAggregatePrevote
         * @summary AggregatePrevote returns an aggregate prevote of a validator
         * @request GET:/oracle/validators/{validator_addr}/aggregate_prevote
         */
        this.queryAggregatePrevote = (validator_addr, params = {}) => this.request(Object.assign({ path: `/oracle/validators/${validator_addr}/aggregate_prevote`, method: "GET", format: "json" }, params));
        /**
         * No description
         *
         * @tags Query
         * @name QueryFeederDelegation
         * @summary FeederDelegation returns feeder delegation of a validator
         * @request GET:/oracle/validators/{validator_addr}/feeder
         */
        this.queryFeederDelegation = (validator_addr, params = {}) => this.request(Object.assign({ path: `/oracle/validators/${validator_addr}/feeder`, method: "GET", format: "json" }, params));
        /**
         * No description
         *
         * @tags Query
         * @name QueryMissCounter
         * @summary MissCounter returns oracle miss counter of a validator
         * @request GET:/oracle/validators/{validator_addr}/miss
         */
        this.queryMissCounter = (validator_addr, params = {}) => this.request(Object.assign({ path: `/oracle/validators/${validator_addr}/miss`, method: "GET", format: "json" }, params));
    }
}
exports.Api = Api;
