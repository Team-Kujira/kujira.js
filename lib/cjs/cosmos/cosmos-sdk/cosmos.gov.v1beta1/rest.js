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
exports.Api = exports.HttpClient = exports.ContentType = exports.V1Beta1VoteOption = exports.V1Beta1ProposalStatus = void 0;
/**
* ProposalStatus enumerates the valid statuses of a proposal.

 - PROPOSAL_STATUS_UNSPECIFIED: PROPOSAL_STATUS_UNSPECIFIED defines the default propopsal status.
 - PROPOSAL_STATUS_DEPOSIT_PERIOD: PROPOSAL_STATUS_DEPOSIT_PERIOD defines a proposal status during the deposit
period.
 - PROPOSAL_STATUS_VOTING_PERIOD: PROPOSAL_STATUS_VOTING_PERIOD defines a proposal status during the voting
period.
 - PROPOSAL_STATUS_PASSED: PROPOSAL_STATUS_PASSED defines a proposal status of a proposal that has
passed.
 - PROPOSAL_STATUS_REJECTED: PROPOSAL_STATUS_REJECTED defines a proposal status of a proposal that has
been rejected.
 - PROPOSAL_STATUS_FAILED: PROPOSAL_STATUS_FAILED defines a proposal status of a proposal that has
failed.
*/
var V1Beta1ProposalStatus;
(function (V1Beta1ProposalStatus) {
    V1Beta1ProposalStatus["PROPOSAL_STATUS_UNSPECIFIED"] = "PROPOSAL_STATUS_UNSPECIFIED";
    V1Beta1ProposalStatus["PROPOSAL_STATUS_DEPOSIT_PERIOD"] = "PROPOSAL_STATUS_DEPOSIT_PERIOD";
    V1Beta1ProposalStatus["PROPOSAL_STATUS_VOTING_PERIOD"] = "PROPOSAL_STATUS_VOTING_PERIOD";
    V1Beta1ProposalStatus["PROPOSAL_STATUS_PASSED"] = "PROPOSAL_STATUS_PASSED";
    V1Beta1ProposalStatus["PROPOSAL_STATUS_REJECTED"] = "PROPOSAL_STATUS_REJECTED";
    V1Beta1ProposalStatus["PROPOSAL_STATUS_FAILED"] = "PROPOSAL_STATUS_FAILED";
})(V1Beta1ProposalStatus = exports.V1Beta1ProposalStatus || (exports.V1Beta1ProposalStatus = {}));
/**
* VoteOption enumerates the valid vote options for a given governance proposal.

 - VOTE_OPTION_UNSPECIFIED: VOTE_OPTION_UNSPECIFIED defines a no-op vote option.
 - VOTE_OPTION_YES: VOTE_OPTION_YES defines a yes vote option.
 - VOTE_OPTION_ABSTAIN: VOTE_OPTION_ABSTAIN defines an abstain vote option.
 - VOTE_OPTION_NO: VOTE_OPTION_NO defines a no vote option.
 - VOTE_OPTION_NO_WITH_VETO: VOTE_OPTION_NO_WITH_VETO defines a no with veto vote option.
*/
var V1Beta1VoteOption;
(function (V1Beta1VoteOption) {
    V1Beta1VoteOption["VOTE_OPTION_UNSPECIFIED"] = "VOTE_OPTION_UNSPECIFIED";
    V1Beta1VoteOption["VOTE_OPTION_YES"] = "VOTE_OPTION_YES";
    V1Beta1VoteOption["VOTE_OPTION_ABSTAIN"] = "VOTE_OPTION_ABSTAIN";
    V1Beta1VoteOption["VOTE_OPTION_NO"] = "VOTE_OPTION_NO";
    V1Beta1VoteOption["VOTE_OPTION_NO_WITH_VETO"] = "VOTE_OPTION_NO_WITH_VETO";
})(V1Beta1VoteOption = exports.V1Beta1VoteOption || (exports.V1Beta1VoteOption = {}));
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
 * @title cosmos/gov/v1beta1/genesis.proto
 * @version version not set
 */
class Api extends HttpClient {
    constructor() {
        super(...arguments);
        /**
         * No description
         *
         * @tags Query
         * @name QueryParams
         * @summary Params queries all parameters of the gov module.
         * @request GET:/cosmos/gov/v1beta1/params/{params_type}
         */
        this.queryParams = (params_type, params = {}) => this.request(Object.assign({ path: `/cosmos/gov/v1beta1/params/${params_type}`, method: "GET", format: "json" }, params));
        /**
         * No description
         *
         * @tags Query
         * @name QueryProposals
         * @summary Proposals queries all proposals based on given status.
         * @request GET:/cosmos/gov/v1beta1/proposals
         */
        this.queryProposals = (query, params = {}) => this.request(Object.assign({ path: `/cosmos/gov/v1beta1/proposals`, method: "GET", query: query, format: "json" }, params));
        /**
         * No description
         *
         * @tags Query
         * @name QueryProposal
         * @summary Proposal queries proposal details based on ProposalID.
         * @request GET:/cosmos/gov/v1beta1/proposals/{proposal_id}
         */
        this.queryProposal = (proposal_id, params = {}) => this.request(Object.assign({ path: `/cosmos/gov/v1beta1/proposals/${proposal_id}`, method: "GET", format: "json" }, params));
        /**
         * No description
         *
         * @tags Query
         * @name QueryDeposits
         * @summary Deposits queries all deposits of a single proposal.
         * @request GET:/cosmos/gov/v1beta1/proposals/{proposal_id}/deposits
         */
        this.queryDeposits = (proposal_id, query, params = {}) => this.request(Object.assign({ path: `/cosmos/gov/v1beta1/proposals/${proposal_id}/deposits`, method: "GET", query: query, format: "json" }, params));
        /**
         * No description
         *
         * @tags Query
         * @name QueryDeposit
         * @summary Deposit queries single deposit information based proposalID, depositAddr.
         * @request GET:/cosmos/gov/v1beta1/proposals/{proposal_id}/deposits/{depositor}
         */
        this.queryDeposit = (proposal_id, depositor, params = {}) => this.request(Object.assign({ path: `/cosmos/gov/v1beta1/proposals/${proposal_id}/deposits/${depositor}`, method: "GET", format: "json" }, params));
        /**
         * No description
         *
         * @tags Query
         * @name QueryTallyResult
         * @summary TallyResult queries the tally of a proposal vote.
         * @request GET:/cosmos/gov/v1beta1/proposals/{proposal_id}/tally
         */
        this.queryTallyResult = (proposal_id, params = {}) => this.request(Object.assign({ path: `/cosmos/gov/v1beta1/proposals/${proposal_id}/tally`, method: "GET", format: "json" }, params));
        /**
         * No description
         *
         * @tags Query
         * @name QueryVotes
         * @summary Votes queries votes of a given proposal.
         * @request GET:/cosmos/gov/v1beta1/proposals/{proposal_id}/votes
         */
        this.queryVotes = (proposal_id, query, params = {}) => this.request(Object.assign({ path: `/cosmos/gov/v1beta1/proposals/${proposal_id}/votes`, method: "GET", query: query, format: "json" }, params));
        /**
         * No description
         *
         * @tags Query
         * @name QueryVote
         * @summary Vote queries voted information based on proposalID, voterAddr.
         * @request GET:/cosmos/gov/v1beta1/proposals/{proposal_id}/votes/{voter}
         */
        this.queryVote = (proposal_id, voter, params = {}) => this.request(Object.assign({ path: `/cosmos/gov/v1beta1/proposals/${proposal_id}/votes/${voter}`, method: "GET", format: "json" }, params));
    }
}
exports.Api = Api;
