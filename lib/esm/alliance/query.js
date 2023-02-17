/* eslint-disable */
import { PageRequest, PageResponse, } from "cosmjs-types/cosmos/base/query/v1beta1/pagination";
import { Coin, DecCoin } from "cosmjs-types/cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../gravity/v1/helpers";
import { AllianceAsset } from "./alliance";
import { Delegation } from "./delegations";
import { Params } from "./params";
export const protobufPackage = "alliance.alliance";
function createBaseQueryParamsRequest() {
    return {};
}
export const QueryParamsRequest = {
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
export const QueryParamsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
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
                    message.params = Params.decode(reader, reader.uint32());
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
            params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined &&
            (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryParamsResponse();
        message.params =
            object.params !== undefined && object.params !== null
                ? Params.fromPartial(object.params)
                : undefined;
        return message;
    },
};
function createBaseQueryAlliancesRequest() {
    return {
        pagination: undefined,
    };
}
export const QueryAlliancesRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
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
                    message.pagination = PageRequest.decode(reader, reader.uint32());
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
            pagination: isSet(object.pagination)
                ? PageRequest.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAlliancesRequest();
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? PageRequest.fromPartial(object.pagination)
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
export const QueryAlliancesResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.alliances) {
            AllianceAsset.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
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
                    message.alliances.push(AllianceAsset.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
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
                ? object.alliances.map((e) => AllianceAsset.fromJSON(e))
                : [],
            pagination: isSet(object.pagination)
                ? PageResponse.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.alliances) {
            obj.alliances = message.alliances.map((e) => e ? AllianceAsset.toJSON(e) : undefined);
        }
        else {
            obj.alliances = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryAlliancesResponse();
        message.alliances =
            ((_a = object.alliances) === null || _a === void 0 ? void 0 : _a.map((e) => AllianceAsset.fromPartial(e))) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryAllianceRequest() {
    return {
        denom: "",
    };
}
export const QueryAllianceRequest = {
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
            denom: isSet(object.denom) ? String(object.denom) : "",
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
export const QueryAllianceResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.alliance !== undefined) {
            AllianceAsset.encode(message.alliance, writer.uint32(10).fork()).ldelim();
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
                    message.alliance = AllianceAsset.decode(reader, reader.uint32());
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
            alliance: isSet(object.alliance)
                ? AllianceAsset.fromJSON(object.alliance)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.alliance !== undefined &&
            (obj.alliance = message.alliance
                ? AllianceAsset.toJSON(message.alliance)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAllianceResponse();
        message.alliance =
            object.alliance !== undefined && object.alliance !== null
                ? AllianceAsset.fromPartial(object.alliance)
                : undefined;
        return message;
    },
};
function createBaseQueryIBCAllianceRequest() {
    return {
        hash: "",
    };
}
export const QueryIBCAllianceRequest = {
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
            hash: isSet(object.hash) ? String(object.hash) : "",
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
export const QueryAllianceValidatorRequest = {
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
            validatorAddr: isSet(object.validatorAddr)
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
export const QueryAllAllianceValidatorsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
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
                    message.pagination = PageRequest.decode(reader, reader.uint32());
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
            pagination: isSet(object.pagination)
                ? PageRequest.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAllAllianceValidatorsRequest();
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryAllAlliancesDelegationsRequest() {
    return {
        pagination: undefined,
    };
}
export const QueryAllAlliancesDelegationsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
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
                    message.pagination = PageRequest.decode(reader, reader.uint32());
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
            pagination: isSet(object.pagination)
                ? PageRequest.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAllAlliancesDelegationsRequest();
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? PageRequest.fromPartial(object.pagination)
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
export const QueryAlliancesDelegationsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.delegatorAddr !== "") {
            writer.uint32(10).string(message.delegatorAddr);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
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
                    message.pagination = PageRequest.decode(reader, reader.uint32());
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
            delegatorAddr: isSet(object.delegatorAddr)
                ? String(object.delegatorAddr)
                : "",
            pagination: isSet(object.pagination)
                ? PageRequest.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.delegatorAddr !== undefined &&
            (obj.delegatorAddr = message.delegatorAddr);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryAlliancesDelegationsRequest();
        message.delegatorAddr = (_a = object.delegatorAddr) !== null && _a !== void 0 ? _a : "";
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? PageRequest.fromPartial(object.pagination)
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
export const QueryAlliancesDelegationByValidatorRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.delegatorAddr !== "") {
            writer.uint32(10).string(message.delegatorAddr);
        }
        if (message.validatorAddr !== "") {
            writer.uint32(18).string(message.validatorAddr);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
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
                    message.pagination = PageRequest.decode(reader, reader.uint32());
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
            delegatorAddr: isSet(object.delegatorAddr)
                ? String(object.delegatorAddr)
                : "",
            validatorAddr: isSet(object.validatorAddr)
                ? String(object.validatorAddr)
                : "",
            pagination: isSet(object.pagination)
                ? PageRequest.fromJSON(object.pagination)
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
                ? PageRequest.toJSON(message.pagination)
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
                ? PageRequest.fromPartial(object.pagination)
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
export const DelegationResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.delegation !== undefined) {
            Delegation.encode(message.delegation, writer.uint32(10).fork()).ldelim();
        }
        if (message.balance !== undefined) {
            Coin.encode(message.balance, writer.uint32(18).fork()).ldelim();
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
                    message.delegation = Delegation.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.balance = Coin.decode(reader, reader.uint32());
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
            delegation: isSet(object.delegation)
                ? Delegation.fromJSON(object.delegation)
                : undefined,
            balance: isSet(object.balance)
                ? Coin.fromJSON(object.balance)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.delegation !== undefined &&
            (obj.delegation = message.delegation
                ? Delegation.toJSON(message.delegation)
                : undefined);
        message.balance !== undefined &&
            (obj.balance = message.balance
                ? Coin.toJSON(message.balance)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseDelegationResponse();
        message.delegation =
            object.delegation !== undefined && object.delegation !== null
                ? Delegation.fromPartial(object.delegation)
                : undefined;
        message.balance =
            object.balance !== undefined && object.balance !== null
                ? Coin.fromPartial(object.balance)
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
export const QueryAlliancesDelegationsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.delegations) {
            DelegationResponse.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
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
                    message.delegations.push(DelegationResponse.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
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
                ? object.delegations.map((e) => DelegationResponse.fromJSON(e))
                : [],
            pagination: isSet(object.pagination)
                ? PageResponse.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.delegations) {
            obj.delegations = message.delegations.map((e) => e ? DelegationResponse.toJSON(e) : undefined);
        }
        else {
            obj.delegations = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryAlliancesDelegationsResponse();
        message.delegations =
            ((_a = object.delegations) === null || _a === void 0 ? void 0 : _a.map((e) => DelegationResponse.fromPartial(e))) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? PageResponse.fromPartial(object.pagination)
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
export const QueryAllianceDelegationRequest = {
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
            PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
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
                    message.pagination = PageRequest.decode(reader, reader.uint32());
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
            delegatorAddr: isSet(object.delegatorAddr)
                ? String(object.delegatorAddr)
                : "",
            validatorAddr: isSet(object.validatorAddr)
                ? String(object.validatorAddr)
                : "",
            denom: isSet(object.denom) ? String(object.denom) : "",
            pagination: isSet(object.pagination)
                ? PageRequest.fromJSON(object.pagination)
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
                ? PageRequest.toJSON(message.pagination)
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
                ? PageRequest.fromPartial(object.pagination)
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
export const QueryIBCAllianceDelegationRequest = {
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
            PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
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
                    message.pagination = PageRequest.decode(reader, reader.uint32());
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
            delegatorAddr: isSet(object.delegatorAddr)
                ? String(object.delegatorAddr)
                : "",
            validatorAddr: isSet(object.validatorAddr)
                ? String(object.validatorAddr)
                : "",
            hash: isSet(object.hash) ? String(object.hash) : "",
            pagination: isSet(object.pagination)
                ? PageRequest.fromJSON(object.pagination)
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
                ? PageRequest.toJSON(message.pagination)
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
                ? PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryAllianceDelegationResponse() {
    return {
        delegation: undefined,
    };
}
export const QueryAllianceDelegationResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.delegation !== undefined) {
            DelegationResponse.encode(message.delegation, writer.uint32(10).fork()).ldelim();
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
                    message.delegation = DelegationResponse.decode(reader, reader.uint32());
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
            delegation: isSet(object.delegation)
                ? DelegationResponse.fromJSON(object.delegation)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.delegation !== undefined &&
            (obj.delegation = message.delegation
                ? DelegationResponse.toJSON(message.delegation)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAllianceDelegationResponse();
        message.delegation =
            object.delegation !== undefined && object.delegation !== null
                ? DelegationResponse.fromPartial(object.delegation)
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
export const QueryAllianceDelegationRewardsRequest = {
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
            PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
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
                    message.pagination = PageRequest.decode(reader, reader.uint32());
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
            delegatorAddr: isSet(object.delegatorAddr)
                ? String(object.delegatorAddr)
                : "",
            validatorAddr: isSet(object.validatorAddr)
                ? String(object.validatorAddr)
                : "",
            denom: isSet(object.denom) ? String(object.denom) : "",
            pagination: isSet(object.pagination)
                ? PageRequest.fromJSON(object.pagination)
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
                ? PageRequest.toJSON(message.pagination)
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
                ? PageRequest.fromPartial(object.pagination)
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
export const QueryIBCAllianceDelegationRewardsRequest = {
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
            PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
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
                    message.pagination = PageRequest.decode(reader, reader.uint32());
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
            delegatorAddr: isSet(object.delegatorAddr)
                ? String(object.delegatorAddr)
                : "",
            validatorAddr: isSet(object.validatorAddr)
                ? String(object.validatorAddr)
                : "",
            hash: isSet(object.hash) ? String(object.hash) : "",
            pagination: isSet(object.pagination)
                ? PageRequest.fromJSON(object.pagination)
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
                ? PageRequest.toJSON(message.pagination)
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
                ? PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryAllianceDelegationRewardsResponse() {
    return {
        rewards: [],
    };
}
export const QueryAllianceDelegationRewardsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.rewards) {
            Coin.encode(v, writer.uint32(10).fork()).ldelim();
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
                    message.rewards.push(Coin.decode(reader, reader.uint32()));
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
                ? object.rewards.map((e) => Coin.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.rewards) {
            obj.rewards = message.rewards.map((e) => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.rewards = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryAllianceDelegationRewardsResponse();
        message.rewards = ((_a = object.rewards) === null || _a === void 0 ? void 0 : _a.map((e) => Coin.fromPartial(e))) || [];
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
export const QueryAllianceValidatorResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.validatorAddr !== "") {
            writer.uint32(10).string(message.validatorAddr);
        }
        for (const v of message.totalDelegationShares) {
            DecCoin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.validatorShares) {
            DecCoin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.totalStaked) {
            DecCoin.encode(v, writer.uint32(34).fork()).ldelim();
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
                    message.totalDelegationShares.push(DecCoin.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.validatorShares.push(DecCoin.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.totalStaked.push(DecCoin.decode(reader, reader.uint32()));
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
            validatorAddr: isSet(object.validatorAddr)
                ? String(object.validatorAddr)
                : "",
            totalDelegationShares: Array.isArray(object === null || object === void 0 ? void 0 : object.totalDelegationShares)
                ? object.totalDelegationShares.map((e) => DecCoin.fromJSON(e))
                : [],
            validatorShares: Array.isArray(object === null || object === void 0 ? void 0 : object.validatorShares)
                ? object.validatorShares.map((e) => DecCoin.fromJSON(e))
                : [],
            totalStaked: Array.isArray(object === null || object === void 0 ? void 0 : object.totalStaked)
                ? object.totalStaked.map((e) => DecCoin.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.validatorAddr !== undefined &&
            (obj.validatorAddr = message.validatorAddr);
        if (message.totalDelegationShares) {
            obj.totalDelegationShares = message.totalDelegationShares.map((e) => e ? DecCoin.toJSON(e) : undefined);
        }
        else {
            obj.totalDelegationShares = [];
        }
        if (message.validatorShares) {
            obj.validatorShares = message.validatorShares.map((e) => e ? DecCoin.toJSON(e) : undefined);
        }
        else {
            obj.validatorShares = [];
        }
        if (message.totalStaked) {
            obj.totalStaked = message.totalStaked.map((e) => e ? DecCoin.toJSON(e) : undefined);
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
            ((_b = object.totalDelegationShares) === null || _b === void 0 ? void 0 : _b.map((e) => DecCoin.fromPartial(e))) || [];
        message.validatorShares =
            ((_c = object.validatorShares) === null || _c === void 0 ? void 0 : _c.map((e) => DecCoin.fromPartial(e))) || [];
        message.totalStaked =
            ((_d = object.totalStaked) === null || _d === void 0 ? void 0 : _d.map((e) => DecCoin.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryAllianceValidatorsResponse() {
    return {
        validators: [],
        pagination: undefined,
    };
}
export const QueryAllianceValidatorsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.validators) {
            QueryAllianceValidatorResponse.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
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
                    message.validators.push(QueryAllianceValidatorResponse.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
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
                ? object.validators.map((e) => QueryAllianceValidatorResponse.fromJSON(e))
                : [],
            pagination: isSet(object.pagination)
                ? PageResponse.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.validators) {
            obj.validators = message.validators.map((e) => e ? QueryAllianceValidatorResponse.toJSON(e) : undefined);
        }
        else {
            obj.validators = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryAllianceValidatorsResponse();
        message.validators =
            ((_a = object.validators) === null || _a === void 0 ? void 0 : _a.map((e) => QueryAllianceValidatorResponse.fromPartial(e))) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
export class QueryClientImpl {
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
        const data = QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("alliance.alliance.Query", "Params", data);
        return promise.then((data) => QueryParamsResponse.decode(new _m0.Reader(data)));
    }
    Alliances(request = {
        pagination: undefined,
    }) {
        const data = QueryAlliancesRequest.encode(request).finish();
        const promise = this.rpc.request("alliance.alliance.Query", "Alliances", data);
        return promise.then((data) => QueryAlliancesResponse.decode(new _m0.Reader(data)));
    }
    IBCAlliance(request) {
        const data = QueryIBCAllianceRequest.encode(request).finish();
        const promise = this.rpc.request("alliance.alliance.Query", "IBCAlliance", data);
        return promise.then((data) => QueryAllianceResponse.decode(new _m0.Reader(data)));
    }
    AllAlliancesDelegations(request = {
        pagination: undefined,
    }) {
        const data = QueryAllAlliancesDelegationsRequest.encode(request).finish();
        const promise = this.rpc.request("alliance.alliance.Query", "AllAlliancesDelegations", data);
        return promise.then((data) => QueryAlliancesDelegationsResponse.decode(new _m0.Reader(data)));
    }
    AllianceValidator(request) {
        const data = QueryAllianceValidatorRequest.encode(request).finish();
        const promise = this.rpc.request("alliance.alliance.Query", "AllianceValidator", data);
        return promise.then((data) => QueryAllianceValidatorResponse.decode(new _m0.Reader(data)));
    }
    AllAllianceValidators(request = {
        pagination: undefined,
    }) {
        const data = QueryAllAllianceValidatorsRequest.encode(request).finish();
        const promise = this.rpc.request("alliance.alliance.Query", "AllAllianceValidators", data);
        return promise.then((data) => QueryAllianceValidatorsResponse.decode(new _m0.Reader(data)));
    }
    AlliancesDelegation(request) {
        const data = QueryAlliancesDelegationsRequest.encode(request).finish();
        const promise = this.rpc.request("alliance.alliance.Query", "AlliancesDelegation", data);
        return promise.then((data) => QueryAlliancesDelegationsResponse.decode(new _m0.Reader(data)));
    }
    AlliancesDelegationByValidator(request) {
        const data = QueryAlliancesDelegationByValidatorRequest.encode(request).finish();
        const promise = this.rpc.request("alliance.alliance.Query", "AlliancesDelegationByValidator", data);
        return promise.then((data) => QueryAlliancesDelegationsResponse.decode(new _m0.Reader(data)));
    }
    AllianceDelegation(request) {
        const data = QueryAllianceDelegationRequest.encode(request).finish();
        const promise = this.rpc.request("alliance.alliance.Query", "AllianceDelegation", data);
        return promise.then((data) => QueryAllianceDelegationResponse.decode(new _m0.Reader(data)));
    }
    IBCAllianceDelegation(request) {
        const data = QueryIBCAllianceDelegationRequest.encode(request).finish();
        const promise = this.rpc.request("alliance.alliance.Query", "IBCAllianceDelegation", data);
        return promise.then((data) => QueryAllianceDelegationResponse.decode(new _m0.Reader(data)));
    }
    AllianceDelegationRewards(request) {
        const data = QueryAllianceDelegationRewardsRequest.encode(request).finish();
        const promise = this.rpc.request("alliance.alliance.Query", "AllianceDelegationRewards", data);
        return promise.then((data) => QueryAllianceDelegationRewardsResponse.decode(new _m0.Reader(data)));
    }
    IBCAllianceDelegationRewards(request) {
        const data = QueryIBCAllianceDelegationRewardsRequest.encode(request).finish();
        const promise = this.rpc.request("alliance.alliance.Query", "IBCAllianceDelegationRewards", data);
        return promise.then((data) => QueryAllianceDelegationRewardsResponse.decode(new _m0.Reader(data)));
    }
    Alliance(request) {
        const data = QueryAllianceRequest.encode(request).finish();
        const promise = this.rpc.request("alliance.alliance.Query", "Alliance", data);
        return promise.then((data) => QueryAllianceResponse.decode(new _m0.Reader(data)));
    }
}
