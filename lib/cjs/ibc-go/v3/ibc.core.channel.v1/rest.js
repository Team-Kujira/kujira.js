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
exports.Api = exports.HttpClient = exports.ContentType = exports.V1State = exports.V1ResponseResultType = exports.V1Order = void 0;
/**
* - ORDER_NONE_UNSPECIFIED: zero-value for channel ordering
 - ORDER_UNORDERED: packets can be delivered in any order, which may differ from the order in
which they were sent.
 - ORDER_ORDERED: packets are delivered exactly in the order which they were sent
*/
var V1Order;
(function (V1Order) {
    V1Order["ORDER_NONE_UNSPECIFIED"] = "ORDER_NONE_UNSPECIFIED";
    V1Order["ORDER_UNORDERED"] = "ORDER_UNORDERED";
    V1Order["ORDER_ORDERED"] = "ORDER_ORDERED";
})(V1Order = exports.V1Order || (exports.V1Order = {}));
/**
* - RESPONSE_RESULT_UNSPECIFIED: Default zero value enumeration
 - RESPONSE_RESULT_NOOP: The message did not call the IBC application callbacks (because, for example, the packet had already been relayed)
 - RESPONSE_RESULT_SUCCESS: The message was executed successfully
*/
var V1ResponseResultType;
(function (V1ResponseResultType) {
    V1ResponseResultType["RESPONSE_RESULT_UNSPECIFIED"] = "RESPONSE_RESULT_UNSPECIFIED";
    V1ResponseResultType["RESPONSE_RESULT_NOOP"] = "RESPONSE_RESULT_NOOP";
    V1ResponseResultType["RESPONSE_RESULT_SUCCESS"] = "RESPONSE_RESULT_SUCCESS";
})(V1ResponseResultType = exports.V1ResponseResultType || (exports.V1ResponseResultType = {}));
/**
* State defines if a channel is in one of the following states:
CLOSED, INIT, TRYOPEN, OPEN or UNINITIALIZED.

 - STATE_UNINITIALIZED_UNSPECIFIED: Default State
 - STATE_INIT: A channel has just started the opening handshake.
 - STATE_TRYOPEN: A channel has acknowledged the handshake step on the counterparty chain.
 - STATE_OPEN: A channel has completed the handshake. Open channels are
ready to send and receive packets.
 - STATE_CLOSED: A channel has been closed and can no longer be used to send or receive
packets.
*/
var V1State;
(function (V1State) {
    V1State["STATE_UNINITIALIZED_UNSPECIFIED"] = "STATE_UNINITIALIZED_UNSPECIFIED";
    V1State["STATE_INIT"] = "STATE_INIT";
    V1State["STATE_TRYOPEN"] = "STATE_TRYOPEN";
    V1State["STATE_OPEN"] = "STATE_OPEN";
    V1State["STATE_CLOSED"] = "STATE_CLOSED";
})(V1State = exports.V1State || (exports.V1State = {}));
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
 * @title ibc/core/channel/v1/channel.proto
 * @version version not set
 */
class Api extends HttpClient {
    constructor() {
        super(...arguments);
        /**
         * No description
         *
         * @tags Query
         * @name QueryChannels
         * @summary Channels queries all the IBC channels of a chain.
         * @request GET:/ibc/core/channel/v1/channels
         */
        this.queryChannels = (query, params = {}) => this.request(Object.assign({ path: `/ibc/core/channel/v1/channels`, method: "GET", query: query, format: "json" }, params));
        /**
         * No description
         *
         * @tags Query
         * @name QueryChannel
         * @summary Channel queries an IBC Channel.
         * @request GET:/ibc/core/channel/v1/channels/{channel_id}/ports/{port_id}
         */
        this.queryChannel = (channel_id, port_id, params = {}) => this.request(Object.assign({ path: `/ibc/core/channel/v1/channels/${channel_id}/ports/${port_id}`, method: "GET", format: "json" }, params));
        /**
       * No description
       *
       * @tags Query
       * @name QueryChannelClientState
       * @summary ChannelClientState queries for the client state for the channel associated
      with the provided channel identifiers.
       * @request GET:/ibc/core/channel/v1/channels/{channel_id}/ports/{port_id}/client_state
       */
        this.queryChannelClientState = (channel_id, port_id, params = {}) => this.request(Object.assign({ path: `/ibc/core/channel/v1/channels/${channel_id}/ports/${port_id}/client_state`, method: "GET", format: "json" }, params));
        /**
       * No description
       *
       * @tags Query
       * @name QueryChannelConsensusState
       * @summary ChannelConsensusState queries for the consensus state for the channel
      associated with the provided channel identifiers.
       * @request GET:/ibc/core/channel/v1/channels/{channel_id}/ports/{port_id}/consensus_state/revision/{revision_number}/height/{revision_height}
       */
        this.queryChannelConsensusState = (channel_id, port_id, revision_number, revision_height, params = {}) => this.request(Object.assign({ path: `/ibc/core/channel/v1/channels/${channel_id}/ports/${port_id}/consensus_state/revision/${revision_number}/height/${revision_height}`, method: "GET", format: "json" }, params));
        /**
         * No description
         *
         * @tags Query
         * @name QueryNextSequenceReceive
         * @summary NextSequenceReceive returns the next receive sequence for a given channel.
         * @request GET:/ibc/core/channel/v1/channels/{channel_id}/ports/{port_id}/next_sequence
         */
        this.queryNextSequenceReceive = (channel_id, port_id, params = {}) => this.request(Object.assign({ path: `/ibc/core/channel/v1/channels/${channel_id}/ports/${port_id}/next_sequence`, method: "GET", format: "json" }, params));
        /**
       * No description
       *
       * @tags Query
       * @name QueryPacketAcknowledgements
       * @summary PacketAcknowledgements returns all the packet acknowledgements associated
      with a channel.
       * @request GET:/ibc/core/channel/v1/channels/{channel_id}/ports/{port_id}/packet_acknowledgements
       */
        this.queryPacketAcknowledgements = (channel_id, port_id, query, params = {}) => this.request(Object.assign({ path: `/ibc/core/channel/v1/channels/${channel_id}/ports/${port_id}/packet_acknowledgements`, method: "GET", query: query, format: "json" }, params));
        /**
         * No description
         *
         * @tags Query
         * @name QueryPacketAcknowledgement
         * @summary PacketAcknowledgement queries a stored packet acknowledgement hash.
         * @request GET:/ibc/core/channel/v1/channels/{channel_id}/ports/{port_id}/packet_acks/{sequence}
         */
        this.queryPacketAcknowledgement = (channel_id, port_id, sequence, params = {}) => this.request(Object.assign({ path: `/ibc/core/channel/v1/channels/${channel_id}/ports/${port_id}/packet_acks/${sequence}`, method: "GET", format: "json" }, params));
        /**
       * No description
       *
       * @tags Query
       * @name QueryPacketCommitments
       * @summary PacketCommitments returns all the packet commitments hashes associated
      with a channel.
       * @request GET:/ibc/core/channel/v1/channels/{channel_id}/ports/{port_id}/packet_commitments
       */
        this.queryPacketCommitments = (channel_id, port_id, query, params = {}) => this.request(Object.assign({ path: `/ibc/core/channel/v1/channels/${channel_id}/ports/${port_id}/packet_commitments`, method: "GET", query: query, format: "json" }, params));
        /**
       * No description
       *
       * @tags Query
       * @name QueryUnreceivedAcks
       * @summary UnreceivedAcks returns all the unreceived IBC acknowledgements associated
      with a channel and sequences.
       * @request GET:/ibc/core/channel/v1/channels/{channel_id}/ports/{port_id}/packet_commitments/{packet_ack_sequences}/unreceived_acks
       */
        this.queryUnreceivedAcks = (channel_id, port_id, packet_ack_sequences, params = {}) => this.request(Object.assign({ path: `/ibc/core/channel/v1/channels/${channel_id}/ports/${port_id}/packet_commitments/${packet_ack_sequences}/unreceived_acks`, method: "GET", format: "json" }, params));
        /**
       * No description
       *
       * @tags Query
       * @name QueryUnreceivedPackets
       * @summary UnreceivedPackets returns all the unreceived IBC packets associated with a
      channel and sequences.
       * @request GET:/ibc/core/channel/v1/channels/{channel_id}/ports/{port_id}/packet_commitments/{packet_commitment_sequences}/unreceived_packets
       */
        this.queryUnreceivedPackets = (channel_id, port_id, packet_commitment_sequences, params = {}) => this.request(Object.assign({ path: `/ibc/core/channel/v1/channels/${channel_id}/ports/${port_id}/packet_commitments/${packet_commitment_sequences}/unreceived_packets`, method: "GET", format: "json" }, params));
        /**
         * No description
         *
         * @tags Query
         * @name QueryPacketCommitment
         * @summary PacketCommitment queries a stored packet commitment hash.
         * @request GET:/ibc/core/channel/v1/channels/{channel_id}/ports/{port_id}/packet_commitments/{sequence}
         */
        this.queryPacketCommitment = (channel_id, port_id, sequence, params = {}) => this.request(Object.assign({ path: `/ibc/core/channel/v1/channels/${channel_id}/ports/${port_id}/packet_commitments/${sequence}`, method: "GET", format: "json" }, params));
        /**
       * No description
       *
       * @tags Query
       * @name QueryPacketReceipt
       * @summary PacketReceipt queries if a given packet sequence has been received on the
      queried chain
       * @request GET:/ibc/core/channel/v1/channels/{channel_id}/ports/{port_id}/packet_receipts/{sequence}
       */
        this.queryPacketReceipt = (channel_id, port_id, sequence, params = {}) => this.request(Object.assign({ path: `/ibc/core/channel/v1/channels/${channel_id}/ports/${port_id}/packet_receipts/${sequence}`, method: "GET", format: "json" }, params));
        /**
       * No description
       *
       * @tags Query
       * @name QueryConnectionChannels
       * @summary ConnectionChannels queries all the channels associated with a connection
      end.
       * @request GET:/ibc/core/channel/v1/connections/{connection}/channels
       */
        this.queryConnectionChannels = (connection, query, params = {}) => this.request(Object.assign({ path: `/ibc/core/channel/v1/connections/${connection}/channels`, method: "GET", query: query, format: "json" }, params));
    }
}
exports.Api = Api;
