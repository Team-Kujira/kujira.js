"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryClientImpl = exports.QueryAllianceValidatorsResponse = exports.QueryAllianceValidatorResponse = exports.QueryAllianceDelegationRewardsResponse = exports.QueryIBCAllianceDelegationRewardsRequest = exports.QueryAllianceDelegationRewardsRequest = exports.QueryAllianceDelegationResponse = exports.QueryIBCAllianceDelegationRequest = exports.QueryAllianceDelegationRequest = exports.QueryAlliancesDelegationsResponse = exports.DelegationResponse = exports.QueryAlliancesDelegationByValidatorRequest = exports.QueryAlliancesDelegationsRequest = exports.QueryAllAlliancesDelegationsRequest = exports.QueryAllAllianceValidatorsRequest = exports.QueryAllianceValidatorRequest = exports.QueryIBCAllianceRequest = exports.QueryAllianceResponse = exports.QueryAllianceRequest = exports.QueryAlliancesResponse = exports.QueryAlliancesRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const pagination_1 = require("cosmjs-types/cosmos/base/query/v1beta1/pagination");
const coin_1 = require("cosmjs-types/cosmos/base/v1beta1/coin");
const _m0 = __importStar(require("protobufjs/minimal"));
const helpers_1 = require("../gravity/v1/helpers");
const alliance_1 = require("./alliance");
const delegations_1 = require("./delegations");
const params_1 = require("./params");
exports.protobufPackage = "alliance.alliance";
function createBaseQueryParamsRequest() {
    return {};
}
exports.QueryParamsRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseQueryParamsRequest();
        return message;
    },
};
function createBaseQueryParamsResponse() {
    return {
        params: undefined,
    };
}
exports.QueryParamsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = params_1.Params.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            params: (0, helpers_1.isSet)(object.params) ? params_1.Params.fromJSON(object.params) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined &&
            (obj.params = message.params ? params_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryParamsResponse();
        message.params =
            object.params !== undefined && object.params !== null
                ? params_1.Params.fromPartial(object.params)
                : undefined;
        return message;
    },
};
function createBaseQueryAlliancesRequest() {
    return {
        pagination: undefined,
    };
}
exports.QueryAlliancesRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAlliancesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            pagination: (0, helpers_1.isSet)(object.pagination)
                ? pagination_1.PageRequest.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAlliancesRequest();
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryAlliancesResponse() {
    return {
        alliances: [],
        pagination: undefined,
    };
}
exports.QueryAlliancesResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.alliances) {
            alliance_1.AllianceAsset.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAlliancesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.alliances.push(alliance_1.AllianceAsset.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            alliances: Array.isArray(object === null || object === void 0 ? void 0 : object.alliances)
                ? object.alliances.map((e) => alliance_1.AllianceAsset.fromJSON(e))
                : [],
            pagination: (0, helpers_1.isSet)(object.pagination)
                ? pagination_1.PageResponse.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.alliances) {
            obj.alliances = message.alliances.map((e) => e ? alliance_1.AllianceAsset.toJSON(e) : undefined);
        }
        else {
            obj.alliances = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryAlliancesResponse();
        message.alliances =
            ((_a = object.alliances) === null || _a === void 0 ? void 0 : _a.map((e) => alliance_1.AllianceAsset.fromPartial(e))) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryAllianceRequest() {
    return {
        denom: "",
    };
}
exports.QueryAllianceRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllianceRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            denom: (0, helpers_1.isSet)(object.denom) ? String(object.denom) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.denom !== undefined && (obj.denom = message.denom);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryAllianceRequest();
        message.denom = (_a = object.denom) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryAllianceResponse() {
    return {
        alliance: undefined,
    };
}
exports.QueryAllianceResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.alliance !== undefined) {
            alliance_1.AllianceAsset.encode(message.alliance, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllianceResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.alliance = alliance_1.AllianceAsset.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            alliance: (0, helpers_1.isSet)(object.alliance)
                ? alliance_1.AllianceAsset.fromJSON(object.alliance)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.alliance !== undefined &&
            (obj.alliance = message.alliance
                ? alliance_1.AllianceAsset.toJSON(message.alliance)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAllianceResponse();
        message.alliance =
            object.alliance !== undefined && object.alliance !== null
                ? alliance_1.AllianceAsset.fromPartial(object.alliance)
                : undefined;
        return message;
    },
};
function createBaseQueryIBCAllianceRequest() {
    return {
        hash: "",
    };
}
exports.QueryIBCAllianceRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.hash !== "") {
            writer.uint32(10).string(message.hash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryIBCAllianceRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hash = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            hash: (0, helpers_1.isSet)(object.hash) ? String(object.hash) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.hash !== undefined && (obj.hash = message.hash);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryIBCAllianceRequest();
        message.hash = (_a = object.hash) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryAllianceValidatorRequest() {
    return {
        validatorAddr: "",
    };
}
exports.QueryAllianceValidatorRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.validatorAddr !== "") {
            writer.uint32(10).string(message.validatorAddr);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllianceValidatorRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validatorAddr = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            validatorAddr: (0, helpers_1.isSet)(object.validatorAddr)
                ? String(object.validatorAddr)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.validatorAddr !== undefined &&
            (obj.validatorAddr = message.validatorAddr);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryAllianceValidatorRequest();
        message.validatorAddr = (_a = object.validatorAddr) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryAllAllianceValidatorsRequest() {
    return {
        pagination: undefined,
    };
}
exports.QueryAllAllianceValidatorsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllAllianceValidatorsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            pagination: (0, helpers_1.isSet)(object.pagination)
                ? pagination_1.PageRequest.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAllAllianceValidatorsRequest();
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryAllAlliancesDelegationsRequest() {
    return {
        pagination: undefined,
    };
}
exports.QueryAllAlliancesDelegationsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllAlliancesDelegationsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            pagination: (0, helpers_1.isSet)(object.pagination)
                ? pagination_1.PageRequest.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAllAlliancesDelegationsRequest();
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryAlliancesDelegationsRequest() {
    return {
        delegatorAddr: "",
        pagination: undefined,
    };
}
exports.QueryAlliancesDelegationsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.delegatorAddr !== "") {
            writer.uint32(10).string(message.delegatorAddr);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAlliancesDelegationsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegatorAddr = reader.string();
                    break;
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            delegatorAddr: (0, helpers_1.isSet)(object.delegatorAddr)
                ? String(object.delegatorAddr)
                : "",
            pagination: (0, helpers_1.isSet)(object.pagination)
                ? pagination_1.PageRequest.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.delegatorAddr !== undefined &&
            (obj.delegatorAddr = message.delegatorAddr);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryAlliancesDelegationsRequest();
        message.delegatorAddr = (_a = object.delegatorAddr) !== null && _a !== void 0 ? _a : "";
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryAlliancesDelegationByValidatorRequest() {
    return {
        delegatorAddr: "",
        validatorAddr: "",
        pagination: undefined,
    };
}
exports.QueryAlliancesDelegationByValidatorRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.delegatorAddr !== "") {
            writer.uint32(10).string(message.delegatorAddr);
        }
        if (message.validatorAddr !== "") {
            writer.uint32(18).string(message.validatorAddr);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAlliancesDelegationByValidatorRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegatorAddr = reader.string();
                    break;
                case 2:
                    message.validatorAddr = reader.string();
                    break;
                case 3:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            delegatorAddr: (0, helpers_1.isSet)(object.delegatorAddr)
                ? String(object.delegatorAddr)
                : "",
            validatorAddr: (0, helpers_1.isSet)(object.validatorAddr)
                ? String(object.validatorAddr)
                : "",
            pagination: (0, helpers_1.isSet)(object.pagination)
                ? pagination_1.PageRequest.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.delegatorAddr !== undefined &&
            (obj.delegatorAddr = message.delegatorAddr);
        message.validatorAddr !== undefined &&
            (obj.validatorAddr = message.validatorAddr);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQueryAlliancesDelegationByValidatorRequest();
        message.delegatorAddr = (_a = object.delegatorAddr) !== null && _a !== void 0 ? _a : "";
        message.validatorAddr = (_b = object.validatorAddr) !== null && _b !== void 0 ? _b : "";
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseDelegationResponse() {
    return {
        delegation: undefined,
        balance: undefined,
    };
}
exports.DelegationResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.delegation !== undefined) {
            delegations_1.Delegation.encode(message.delegation, writer.uint32(10).fork()).ldelim();
        }
        if (message.balance !== undefined) {
            coin_1.Coin.encode(message.balance, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDelegationResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegation = delegations_1.Delegation.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.balance = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            delegation: (0, helpers_1.isSet)(object.delegation)
                ? delegations_1.Delegation.fromJSON(object.delegation)
                : undefined,
            balance: (0, helpers_1.isSet)(object.balance)
                ? coin_1.Coin.fromJSON(object.balance)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.delegation !== undefined &&
            (obj.delegation = message.delegation
                ? delegations_1.Delegation.toJSON(message.delegation)
                : undefined);
        message.balance !== undefined &&
            (obj.balance = message.balance
                ? coin_1.Coin.toJSON(message.balance)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseDelegationResponse();
        message.delegation =
            object.delegation !== undefined && object.delegation !== null
                ? delegations_1.Delegation.fromPartial(object.delegation)
                : undefined;
        message.balance =
            object.balance !== undefined && object.balance !== null
                ? coin_1.Coin.fromPartial(object.balance)
                : undefined;
        return message;
    },
};
function createBaseQueryAlliancesDelegationsResponse() {
    return {
        delegations: [],
        pagination: undefined,
    };
}
exports.QueryAlliancesDelegationsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.delegations) {
            exports.DelegationResponse.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAlliancesDelegationsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegations.push(exports.DelegationResponse.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            delegations: Array.isArray(object === null || object === void 0 ? void 0 : object.delegations)
                ? object.delegations.map((e) => exports.DelegationResponse.fromJSON(e))
                : [],
            pagination: (0, helpers_1.isSet)(object.pagination)
                ? pagination_1.PageResponse.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.delegations) {
            obj.delegations = message.delegations.map((e) => e ? exports.DelegationResponse.toJSON(e) : undefined);
        }
        else {
            obj.delegations = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryAlliancesDelegationsResponse();
        message.delegations =
            ((_a = object.delegations) === null || _a === void 0 ? void 0 : _a.map((e) => exports.DelegationResponse.fromPartial(e))) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryAllianceDelegationRequest() {
    return {
        delegatorAddr: "",
        validatorAddr: "",
        denom: "",
        pagination: undefined,
    };
}
exports.QueryAllianceDelegationRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.delegatorAddr !== "") {
            writer.uint32(10).string(message.delegatorAddr);
        }
        if (message.validatorAddr !== "") {
            writer.uint32(18).string(message.validatorAddr);
        }
        if (message.denom !== "") {
            writer.uint32(26).string(message.denom);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllianceDelegationRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegatorAddr = reader.string();
                    break;
                case 2:
                    message.validatorAddr = reader.string();
                    break;
                case 3:
                    message.denom = reader.string();
                    break;
                case 4:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            delegatorAddr: (0, helpers_1.isSet)(object.delegatorAddr)
                ? String(object.delegatorAddr)
                : "",
            validatorAddr: (0, helpers_1.isSet)(object.validatorAddr)
                ? String(object.validatorAddr)
                : "",
            denom: (0, helpers_1.isSet)(object.denom) ? String(object.denom) : "",
            pagination: (0, helpers_1.isSet)(object.pagination)
                ? pagination_1.PageRequest.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.delegatorAddr !== undefined &&
            (obj.delegatorAddr = message.delegatorAddr);
        message.validatorAddr !== undefined &&
            (obj.validatorAddr = message.validatorAddr);
        message.denom !== undefined && (obj.denom = message.denom);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseQueryAllianceDelegationRequest();
        message.delegatorAddr = (_a = object.delegatorAddr) !== null && _a !== void 0 ? _a : "";
        message.validatorAddr = (_b = object.validatorAddr) !== null && _b !== void 0 ? _b : "";
        message.denom = (_c = object.denom) !== null && _c !== void 0 ? _c : "";
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryIBCAllianceDelegationRequest() {
    return {
        delegatorAddr: "",
        validatorAddr: "",
        hash: "",
        pagination: undefined,
    };
}
exports.QueryIBCAllianceDelegationRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.delegatorAddr !== "") {
            writer.uint32(10).string(message.delegatorAddr);
        }
        if (message.validatorAddr !== "") {
            writer.uint32(18).string(message.validatorAddr);
        }
        if (message.hash !== "") {
            writer.uint32(26).string(message.hash);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryIBCAllianceDelegationRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegatorAddr = reader.string();
                    break;
                case 2:
                    message.validatorAddr = reader.string();
                    break;
                case 3:
                    message.hash = reader.string();
                    break;
                case 4:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            delegatorAddr: (0, helpers_1.isSet)(object.delegatorAddr)
                ? String(object.delegatorAddr)
                : "",
            validatorAddr: (0, helpers_1.isSet)(object.validatorAddr)
                ? String(object.validatorAddr)
                : "",
            hash: (0, helpers_1.isSet)(object.hash) ? String(object.hash) : "",
            pagination: (0, helpers_1.isSet)(object.pagination)
                ? pagination_1.PageRequest.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.delegatorAddr !== undefined &&
            (obj.delegatorAddr = message.delegatorAddr);
        message.validatorAddr !== undefined &&
            (obj.validatorAddr = message.validatorAddr);
        message.hash !== undefined && (obj.hash = message.hash);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseQueryIBCAllianceDelegationRequest();
        message.delegatorAddr = (_a = object.delegatorAddr) !== null && _a !== void 0 ? _a : "";
        message.validatorAddr = (_b = object.validatorAddr) !== null && _b !== void 0 ? _b : "";
        message.hash = (_c = object.hash) !== null && _c !== void 0 ? _c : "";
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryAllianceDelegationResponse() {
    return {
        delegation: undefined,
    };
}
exports.QueryAllianceDelegationResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.delegation !== undefined) {
            exports.DelegationResponse.encode(message.delegation, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllianceDelegationResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegation = exports.DelegationResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            delegation: (0, helpers_1.isSet)(object.delegation)
                ? exports.DelegationResponse.fromJSON(object.delegation)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.delegation !== undefined &&
            (obj.delegation = message.delegation
                ? exports.DelegationResponse.toJSON(message.delegation)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAllianceDelegationResponse();
        message.delegation =
            object.delegation !== undefined && object.delegation !== null
                ? exports.DelegationResponse.fromPartial(object.delegation)
                : undefined;
        return message;
    },
};
function createBaseQueryAllianceDelegationRewardsRequest() {
    return {
        delegatorAddr: "",
        validatorAddr: "",
        denom: "",
        pagination: undefined,
    };
}
exports.QueryAllianceDelegationRewardsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.delegatorAddr !== "") {
            writer.uint32(10).string(message.delegatorAddr);
        }
        if (message.validatorAddr !== "") {
            writer.uint32(18).string(message.validatorAddr);
        }
        if (message.denom !== "") {
            writer.uint32(26).string(message.denom);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllianceDelegationRewardsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegatorAddr = reader.string();
                    break;
                case 2:
                    message.validatorAddr = reader.string();
                    break;
                case 3:
                    message.denom = reader.string();
                    break;
                case 4:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            delegatorAddr: (0, helpers_1.isSet)(object.delegatorAddr)
                ? String(object.delegatorAddr)
                : "",
            validatorAddr: (0, helpers_1.isSet)(object.validatorAddr)
                ? String(object.validatorAddr)
                : "",
            denom: (0, helpers_1.isSet)(object.denom) ? String(object.denom) : "",
            pagination: (0, helpers_1.isSet)(object.pagination)
                ? pagination_1.PageRequest.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.delegatorAddr !== undefined &&
            (obj.delegatorAddr = message.delegatorAddr);
        message.validatorAddr !== undefined &&
            (obj.validatorAddr = message.validatorAddr);
        message.denom !== undefined && (obj.denom = message.denom);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseQueryAllianceDelegationRewardsRequest();
        message.delegatorAddr = (_a = object.delegatorAddr) !== null && _a !== void 0 ? _a : "";
        message.validatorAddr = (_b = object.validatorAddr) !== null && _b !== void 0 ? _b : "";
        message.denom = (_c = object.denom) !== null && _c !== void 0 ? _c : "";
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryIBCAllianceDelegationRewardsRequest() {
    return {
        delegatorAddr: "",
        validatorAddr: "",
        hash: "",
        pagination: undefined,
    };
}
exports.QueryIBCAllianceDelegationRewardsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.delegatorAddr !== "") {
            writer.uint32(10).string(message.delegatorAddr);
        }
        if (message.validatorAddr !== "") {
            writer.uint32(18).string(message.validatorAddr);
        }
        if (message.hash !== "") {
            writer.uint32(26).string(message.hash);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryIBCAllianceDelegationRewardsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegatorAddr = reader.string();
                    break;
                case 2:
                    message.validatorAddr = reader.string();
                    break;
                case 3:
                    message.hash = reader.string();
                    break;
                case 4:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            delegatorAddr: (0, helpers_1.isSet)(object.delegatorAddr)
                ? String(object.delegatorAddr)
                : "",
            validatorAddr: (0, helpers_1.isSet)(object.validatorAddr)
                ? String(object.validatorAddr)
                : "",
            hash: (0, helpers_1.isSet)(object.hash) ? String(object.hash) : "",
            pagination: (0, helpers_1.isSet)(object.pagination)
                ? pagination_1.PageRequest.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.delegatorAddr !== undefined &&
            (obj.delegatorAddr = message.delegatorAddr);
        message.validatorAddr !== undefined &&
            (obj.validatorAddr = message.validatorAddr);
        message.hash !== undefined && (obj.hash = message.hash);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseQueryIBCAllianceDelegationRewardsRequest();
        message.delegatorAddr = (_a = object.delegatorAddr) !== null && _a !== void 0 ? _a : "";
        message.validatorAddr = (_b = object.validatorAddr) !== null && _b !== void 0 ? _b : "";
        message.hash = (_c = object.hash) !== null && _c !== void 0 ? _c : "";
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryAllianceDelegationRewardsResponse() {
    return {
        rewards: [],
    };
}
exports.QueryAllianceDelegationRewardsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.rewards) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllianceDelegationRewardsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.rewards.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            rewards: Array.isArray(object === null || object === void 0 ? void 0 : object.rewards)
                ? object.rewards.map((e) => coin_1.Coin.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.rewards) {
            obj.rewards = message.rewards.map((e) => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.rewards = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryAllianceDelegationRewardsResponse();
        message.rewards = ((_a = object.rewards) === null || _a === void 0 ? void 0 : _a.map((e) => coin_1.Coin.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryAllianceValidatorResponse() {
    return {
        validatorAddr: "",
        totalDelegationShares: [],
        validatorShares: [],
        totalStaked: [],
    };
}
exports.QueryAllianceValidatorResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.validatorAddr !== "") {
            writer.uint32(10).string(message.validatorAddr);
        }
        for (const v of message.totalDelegationShares) {
            coin_1.DecCoin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.validatorShares) {
            coin_1.DecCoin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.totalStaked) {
            coin_1.DecCoin.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllianceValidatorResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validatorAddr = reader.string();
                    break;
                case 2:
                    message.totalDelegationShares.push(coin_1.DecCoin.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.validatorShares.push(coin_1.DecCoin.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.totalStaked.push(coin_1.DecCoin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            validatorAddr: (0, helpers_1.isSet)(object.validatorAddr)
                ? String(object.validatorAddr)
                : "",
            totalDelegationShares: Array.isArray(object === null || object === void 0 ? void 0 : object.totalDelegationShares)
                ? object.totalDelegationShares.map((e) => coin_1.DecCoin.fromJSON(e))
                : [],
            validatorShares: Array.isArray(object === null || object === void 0 ? void 0 : object.validatorShares)
                ? object.validatorShares.map((e) => coin_1.DecCoin.fromJSON(e))
                : [],
            totalStaked: Array.isArray(object === null || object === void 0 ? void 0 : object.totalStaked)
                ? object.totalStaked.map((e) => coin_1.DecCoin.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.validatorAddr !== undefined &&
            (obj.validatorAddr = message.validatorAddr);
        if (message.totalDelegationShares) {
            obj.totalDelegationShares = message.totalDelegationShares.map((e) => e ? coin_1.DecCoin.toJSON(e) : undefined);
        }
        else {
            obj.totalDelegationShares = [];
        }
        if (message.validatorShares) {
            obj.validatorShares = message.validatorShares.map((e) => e ? coin_1.DecCoin.toJSON(e) : undefined);
        }
        else {
            obj.validatorShares = [];
        }
        if (message.totalStaked) {
            obj.totalStaked = message.totalStaked.map((e) => e ? coin_1.DecCoin.toJSON(e) : undefined);
        }
        else {
            obj.totalStaked = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseQueryAllianceValidatorResponse();
        message.validatorAddr = (_a = object.validatorAddr) !== null && _a !== void 0 ? _a : "";
        message.totalDelegationShares =
            ((_b = object.totalDelegationShares) === null || _b === void 0 ? void 0 : _b.map((e) => coin_1.DecCoin.fromPartial(e))) || [];
        message.validatorShares =
            ((_c = object.validatorShares) === null || _c === void 0 ? void 0 : _c.map((e) => coin_1.DecCoin.fromPartial(e))) || [];
        message.totalStaked =
            ((_d = object.totalStaked) === null || _d === void 0 ? void 0 : _d.map((e) => coin_1.DecCoin.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryAllianceValidatorsResponse() {
    return {
        validators: [],
        pagination: undefined,
    };
}
exports.QueryAllianceValidatorsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.validators) {
            exports.QueryAllianceValidatorResponse.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllianceValidatorsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validators.push(exports.QueryAllianceValidatorResponse.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            validators: Array.isArray(object === null || object === void 0 ? void 0 : object.validators)
                ? object.validators.map((e) => exports.QueryAllianceValidatorResponse.fromJSON(e))
                : [],
            pagination: (0, helpers_1.isSet)(object.pagination)
                ? pagination_1.PageResponse.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.validators) {
            obj.validators = message.validators.map((e) => e ? exports.QueryAllianceValidatorResponse.toJSON(e) : undefined);
        }
        else {
            obj.validators = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryAllianceValidatorsResponse();
        message.validators =
            ((_a = object.validators) === null || _a === void 0 ? void 0 : _a.map((e) => exports.QueryAllianceValidatorResponse.fromPartial(e))) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.Params = this.Params.bind(this);
        this.Alliances = this.Alliances.bind(this);
        this.IBCAlliance = this.IBCAlliance.bind(this);
        this.AllAlliancesDelegations = this.AllAlliancesDelegations.bind(this);
        this.AllianceValidator = this.AllianceValidator.bind(this);
        this.AllAllianceValidators = this.AllAllianceValidators.bind(this);
        this.AlliancesDelegation = this.AlliancesDelegation.bind(this);
        this.AlliancesDelegationByValidator =
            this.AlliancesDelegationByValidator.bind(this);
        this.AllianceDelegation = this.AllianceDelegation.bind(this);
        this.IBCAllianceDelegation = this.IBCAllianceDelegation.bind(this);
        this.AllianceDelegationRewards = this.AllianceDelegationRewards.bind(this);
        this.IBCAllianceDelegationRewards =
            this.IBCAllianceDelegationRewards.bind(this);
        this.Alliance = this.Alliance.bind(this);
    }
    Params(request = {}) {
        const data = exports.QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("alliance.alliance.Query", "Params", data);
        return promise.then((data) => exports.QueryParamsResponse.decode(new _m0.Reader(data)));
    }
    Alliances(request = {
        pagination: undefined,
    }) {
        const data = exports.QueryAlliancesRequest.encode(request).finish();
        const promise = this.rpc.request("alliance.alliance.Query", "Alliances", data);
        return promise.then((data) => exports.QueryAlliancesResponse.decode(new _m0.Reader(data)));
    }
    IBCAlliance(request) {
        const data = exports.QueryIBCAllianceRequest.encode(request).finish();
        const promise = this.rpc.request("alliance.alliance.Query", "IBCAlliance", data);
        return promise.then((data) => exports.QueryAllianceResponse.decode(new _m0.Reader(data)));
    }
    AllAlliancesDelegations(request = {
        pagination: undefined,
    }) {
        const data = exports.QueryAllAlliancesDelegationsRequest.encode(request).finish();
        const promise = this.rpc.request("alliance.alliance.Query", "AllAlliancesDelegations", data);
        return promise.then((data) => exports.QueryAlliancesDelegationsResponse.decode(new _m0.Reader(data)));
    }
    AllianceValidator(request) {
        const data = exports.QueryAllianceValidatorRequest.encode(request).finish();
        const promise = this.rpc.request("alliance.alliance.Query", "AllianceValidator", data);
        return promise.then((data) => exports.QueryAllianceValidatorResponse.decode(new _m0.Reader(data)));
    }
    AllAllianceValidators(request = {
        pagination: undefined,
    }) {
        const data = exports.QueryAllAllianceValidatorsRequest.encode(request).finish();
        const promise = this.rpc.request("alliance.alliance.Query", "AllAllianceValidators", data);
        return promise.then((data) => exports.QueryAllianceValidatorsResponse.decode(new _m0.Reader(data)));
    }
    AlliancesDelegation(request) {
        const data = exports.QueryAlliancesDelegationsRequest.encode(request).finish();
        const promise = this.rpc.request("alliance.alliance.Query", "AlliancesDelegation", data);
        return promise.then((data) => exports.QueryAlliancesDelegationsResponse.decode(new _m0.Reader(data)));
    }
    AlliancesDelegationByValidator(request) {
        const data = exports.QueryAlliancesDelegationByValidatorRequest.encode(request).finish();
        const promise = this.rpc.request("alliance.alliance.Query", "AlliancesDelegationByValidator", data);
        return promise.then((data) => exports.QueryAlliancesDelegationsResponse.decode(new _m0.Reader(data)));
    }
    AllianceDelegation(request) {
        const data = exports.QueryAllianceDelegationRequest.encode(request).finish();
        const promise = this.rpc.request("alliance.alliance.Query", "AllianceDelegation", data);
        return promise.then((data) => exports.QueryAllianceDelegationResponse.decode(new _m0.Reader(data)));
    }
    IBCAllianceDelegation(request) {
        const data = exports.QueryIBCAllianceDelegationRequest.encode(request).finish();
        const promise = this.rpc.request("alliance.alliance.Query", "IBCAllianceDelegation", data);
        return promise.then((data) => exports.QueryAllianceDelegationResponse.decode(new _m0.Reader(data)));
    }
    AllianceDelegationRewards(request) {
        const data = exports.QueryAllianceDelegationRewardsRequest.encode(request).finish();
        const promise = this.rpc.request("alliance.alliance.Query", "AllianceDelegationRewards", data);
        return promise.then((data) => exports.QueryAllianceDelegationRewardsResponse.decode(new _m0.Reader(data)));
    }
    IBCAllianceDelegationRewards(request) {
        const data = exports.QueryIBCAllianceDelegationRewardsRequest.encode(request).finish();
        const promise = this.rpc.request("alliance.alliance.Query", "IBCAllianceDelegationRewards", data);
        return promise.then((data) => exports.QueryAllianceDelegationRewardsResponse.decode(new _m0.Reader(data)));
    }
    Alliance(request) {
        const data = exports.QueryAllianceRequest.encode(request).finish();
        const promise = this.rpc.request("alliance.alliance.Query", "Alliance", data);
        return promise.then((data) => exports.QueryAllianceResponse.decode(new _m0.Reader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
