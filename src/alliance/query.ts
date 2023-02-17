/* eslint-disable */
import {
  PageRequest,
  PageResponse,
} from "cosmjs-types/cosmos/base/query/v1beta1/pagination";
import { Coin, DecCoin } from "cosmjs-types/cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet, Rpc } from "../gravity/v1/helpers";
import { AllianceAsset } from "./alliance";
import { Delegation } from "./delegations";
import { Params } from "./params";
export const protobufPackage = "alliance.alliance";
/** Params */

export interface QueryParamsRequest {}
export interface QueryParamsResponse {
  params?: Params;
}
/** Alliances */

export interface QueryAlliancesRequest {
  pagination?: PageRequest;
}
export interface QueryAlliancesResponse {
  alliances: AllianceAsset[];
  pagination?: PageResponse;
}
/** Alliance */

export interface QueryAllianceRequest {
  denom: string;
}
export interface QueryAllianceResponse {
  alliance?: AllianceAsset;
}
export interface QueryIBCAllianceRequest {
  hash: string;
}
export interface QueryAllianceValidatorRequest {
  validatorAddr: string;
}
export interface QueryAllAllianceValidatorsRequest {
  pagination?: PageRequest;
}
export interface QueryAllAlliancesDelegationsRequest {
  pagination?: PageRequest;
}
/** AlliancesDelegation */

export interface QueryAlliancesDelegationsRequest {
  delegatorAddr: string;
  pagination?: PageRequest;
}
/** AlliancesDelegationByValidator */

export interface QueryAlliancesDelegationByValidatorRequest {
  delegatorAddr: string;
  validatorAddr: string;
  pagination?: PageRequest;
}
/**
 * DelegationResponse is equivalent to Delegation except that it contains a
 * balance in addition to shares which is more suitable for client responses.
 */

export interface DelegationResponse {
  delegation?: Delegation;
  balance?: Coin;
}
export interface QueryAlliancesDelegationsResponse {
  delegations: DelegationResponse[];
  pagination?: PageResponse;
}
/** AllianceDelegation */

export interface QueryAllianceDelegationRequest {
  delegatorAddr: string;
  validatorAddr: string;
  denom: string;
  pagination?: PageRequest;
}
export interface QueryIBCAllianceDelegationRequest {
  delegatorAddr: string;
  validatorAddr: string;
  hash: string;
  pagination?: PageRequest;
}
export interface QueryAllianceDelegationResponse {
  delegation?: DelegationResponse;
}
/** AllianceDelegation */

export interface QueryAllianceDelegationRewardsRequest {
  delegatorAddr: string;
  validatorAddr: string;
  denom: string;
  pagination?: PageRequest;
}
export interface QueryIBCAllianceDelegationRewardsRequest {
  delegatorAddr: string;
  validatorAddr: string;
  hash: string;
  pagination?: PageRequest;
}
export interface QueryAllianceDelegationRewardsResponse {
  rewards: Coin[];
}
export interface QueryAllianceValidatorResponse {
  validatorAddr: string;
  totalDelegationShares: DecCoin[];
  validatorShares: DecCoin[];
  totalStaked: DecCoin[];
}
export interface QueryAllianceValidatorsResponse {
  validators: QueryAllianceValidatorResponse[];
  pagination?: PageResponse;
}

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(
    _: QueryParamsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
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

  fromJSON(_: any): QueryParamsRequest {
    return {};
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: undefined,
  };
}

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
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

  fromJSON(object: any): QueryParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
    };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromPartial(object.params)
        : undefined;
    return message;
  },
};

function createBaseQueryAlliancesRequest(): QueryAlliancesRequest {
  return {
    pagination: undefined,
  };
}

export const QueryAlliancesRequest = {
  encode(
    message: QueryAlliancesRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAlliancesRequest {
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

  fromJSON(object: any): QueryAlliancesRequest {
    return {
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryAlliancesRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryAlliancesRequest>): QueryAlliancesRequest {
    const message = createBaseQueryAlliancesRequest();
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryAlliancesResponse(): QueryAlliancesResponse {
  return {
    alliances: [],
    pagination: undefined,
  };
}

export const QueryAlliancesResponse = {
  encode(
    message: QueryAlliancesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.alliances) {
      AllianceAsset.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }

    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAlliancesResponse {
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

  fromJSON(object: any): QueryAlliancesResponse {
    return {
      alliances: Array.isArray(object?.alliances)
        ? object.alliances.map((e: any) => AllianceAsset.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryAlliancesResponse): unknown {
    const obj: any = {};

    if (message.alliances) {
      obj.alliances = message.alliances.map((e) =>
        e ? AllianceAsset.toJSON(e) : undefined
      );
    } else {
      obj.alliances = [];
    }

    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryAlliancesResponse>): QueryAlliancesResponse {
    const message = createBaseQueryAlliancesResponse();
    message.alliances =
      object.alliances?.map((e) => AllianceAsset.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryAllianceRequest(): QueryAllianceRequest {
  return {
    denom: "",
  };
}

export const QueryAllianceRequest = {
  encode(
    message: QueryAllianceRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAllianceRequest {
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

  fromJSON(object: any): QueryAllianceRequest {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
    };
  },

  toJSON(message: QueryAllianceRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(object: Partial<QueryAllianceRequest>): QueryAllianceRequest {
    const message = createBaseQueryAllianceRequest();
    message.denom = object.denom ?? "";
    return message;
  },
};

function createBaseQueryAllianceResponse(): QueryAllianceResponse {
  return {
    alliance: undefined,
  };
}

export const QueryAllianceResponse = {
  encode(
    message: QueryAllianceResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.alliance !== undefined) {
      AllianceAsset.encode(message.alliance, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAllianceResponse {
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

  fromJSON(object: any): QueryAllianceResponse {
    return {
      alliance: isSet(object.alliance)
        ? AllianceAsset.fromJSON(object.alliance)
        : undefined,
    };
  },

  toJSON(message: QueryAllianceResponse): unknown {
    const obj: any = {};
    message.alliance !== undefined &&
      (obj.alliance = message.alliance
        ? AllianceAsset.toJSON(message.alliance)
        : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryAllianceResponse>): QueryAllianceResponse {
    const message = createBaseQueryAllianceResponse();
    message.alliance =
      object.alliance !== undefined && object.alliance !== null
        ? AllianceAsset.fromPartial(object.alliance)
        : undefined;
    return message;
  },
};

function createBaseQueryIBCAllianceRequest(): QueryIBCAllianceRequest {
  return {
    hash: "",
  };
}

export const QueryIBCAllianceRequest = {
  encode(
    message: QueryIBCAllianceRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.hash !== "") {
      writer.uint32(10).string(message.hash);
    }

    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryIBCAllianceRequest {
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

  fromJSON(object: any): QueryIBCAllianceRequest {
    return {
      hash: isSet(object.hash) ? String(object.hash) : "",
    };
  },

  toJSON(message: QueryIBCAllianceRequest): unknown {
    const obj: any = {};
    message.hash !== undefined && (obj.hash = message.hash);
    return obj;
  },

  fromPartial(
    object: Partial<QueryIBCAllianceRequest>
  ): QueryIBCAllianceRequest {
    const message = createBaseQueryIBCAllianceRequest();
    message.hash = object.hash ?? "";
    return message;
  },
};

function createBaseQueryAllianceValidatorRequest(): QueryAllianceValidatorRequest {
  return {
    validatorAddr: "",
  };
}

export const QueryAllianceValidatorRequest = {
  encode(
    message: QueryAllianceValidatorRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.validatorAddr !== "") {
      writer.uint32(10).string(message.validatorAddr);
    }

    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAllianceValidatorRequest {
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

  fromJSON(object: any): QueryAllianceValidatorRequest {
    return {
      validatorAddr: isSet(object.validatorAddr)
        ? String(object.validatorAddr)
        : "",
    };
  },

  toJSON(message: QueryAllianceValidatorRequest): unknown {
    const obj: any = {};
    message.validatorAddr !== undefined &&
      (obj.validatorAddr = message.validatorAddr);
    return obj;
  },

  fromPartial(
    object: Partial<QueryAllianceValidatorRequest>
  ): QueryAllianceValidatorRequest {
    const message = createBaseQueryAllianceValidatorRequest();
    message.validatorAddr = object.validatorAddr ?? "";
    return message;
  },
};

function createBaseQueryAllAllianceValidatorsRequest(): QueryAllAllianceValidatorsRequest {
  return {
    pagination: undefined,
  };
}

export const QueryAllAllianceValidatorsRequest = {
  encode(
    message: QueryAllAllianceValidatorsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAllAllianceValidatorsRequest {
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

  fromJSON(object: any): QueryAllAllianceValidatorsRequest {
    return {
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryAllAllianceValidatorsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: Partial<QueryAllAllianceValidatorsRequest>
  ): QueryAllAllianceValidatorsRequest {
    const message = createBaseQueryAllAllianceValidatorsRequest();
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryAllAlliancesDelegationsRequest(): QueryAllAlliancesDelegationsRequest {
  return {
    pagination: undefined,
  };
}

export const QueryAllAlliancesDelegationsRequest = {
  encode(
    message: QueryAllAlliancesDelegationsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAllAlliancesDelegationsRequest {
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

  fromJSON(object: any): QueryAllAlliancesDelegationsRequest {
    return {
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryAllAlliancesDelegationsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: Partial<QueryAllAlliancesDelegationsRequest>
  ): QueryAllAlliancesDelegationsRequest {
    const message = createBaseQueryAllAlliancesDelegationsRequest();
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryAlliancesDelegationsRequest(): QueryAlliancesDelegationsRequest {
  return {
    delegatorAddr: "",
    pagination: undefined,
  };
}

export const QueryAlliancesDelegationsRequest = {
  encode(
    message: QueryAlliancesDelegationsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.delegatorAddr !== "") {
      writer.uint32(10).string(message.delegatorAddr);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAlliancesDelegationsRequest {
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

  fromJSON(object: any): QueryAlliancesDelegationsRequest {
    return {
      delegatorAddr: isSet(object.delegatorAddr)
        ? String(object.delegatorAddr)
        : "",
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryAlliancesDelegationsRequest): unknown {
    const obj: any = {};
    message.delegatorAddr !== undefined &&
      (obj.delegatorAddr = message.delegatorAddr);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: Partial<QueryAlliancesDelegationsRequest>
  ): QueryAlliancesDelegationsRequest {
    const message = createBaseQueryAlliancesDelegationsRequest();
    message.delegatorAddr = object.delegatorAddr ?? "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryAlliancesDelegationByValidatorRequest(): QueryAlliancesDelegationByValidatorRequest {
  return {
    delegatorAddr: "",
    validatorAddr: "",
    pagination: undefined,
  };
}

export const QueryAlliancesDelegationByValidatorRequest = {
  encode(
    message: QueryAlliancesDelegationByValidatorRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAlliancesDelegationByValidatorRequest {
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

  fromJSON(object: any): QueryAlliancesDelegationByValidatorRequest {
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

  toJSON(message: QueryAlliancesDelegationByValidatorRequest): unknown {
    const obj: any = {};
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

  fromPartial(
    object: Partial<QueryAlliancesDelegationByValidatorRequest>
  ): QueryAlliancesDelegationByValidatorRequest {
    const message = createBaseQueryAlliancesDelegationByValidatorRequest();
    message.delegatorAddr = object.delegatorAddr ?? "";
    message.validatorAddr = object.validatorAddr ?? "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseDelegationResponse(): DelegationResponse {
  return {
    delegation: undefined,
    balance: undefined,
  };
}

export const DelegationResponse = {
  encode(
    message: DelegationResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.delegation !== undefined) {
      Delegation.encode(message.delegation, writer.uint32(10).fork()).ldelim();
    }

    if (message.balance !== undefined) {
      Coin.encode(message.balance, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DelegationResponse {
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

  fromJSON(object: any): DelegationResponse {
    return {
      delegation: isSet(object.delegation)
        ? Delegation.fromJSON(object.delegation)
        : undefined,
      balance: isSet(object.balance)
        ? Coin.fromJSON(object.balance)
        : undefined,
    };
  },

  toJSON(message: DelegationResponse): unknown {
    const obj: any = {};
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

  fromPartial(object: Partial<DelegationResponse>): DelegationResponse {
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

function createBaseQueryAlliancesDelegationsResponse(): QueryAlliancesDelegationsResponse {
  return {
    delegations: [],
    pagination: undefined,
  };
}

export const QueryAlliancesDelegationsResponse = {
  encode(
    message: QueryAlliancesDelegationsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.delegations) {
      DelegationResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }

    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAlliancesDelegationsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAlliancesDelegationsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.delegations.push(
            DelegationResponse.decode(reader, reader.uint32())
          );
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

  fromJSON(object: any): QueryAlliancesDelegationsResponse {
    return {
      delegations: Array.isArray(object?.delegations)
        ? object.delegations.map((e: any) => DelegationResponse.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryAlliancesDelegationsResponse): unknown {
    const obj: any = {};

    if (message.delegations) {
      obj.delegations = message.delegations.map((e) =>
        e ? DelegationResponse.toJSON(e) : undefined
      );
    } else {
      obj.delegations = [];
    }

    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: Partial<QueryAlliancesDelegationsResponse>
  ): QueryAlliancesDelegationsResponse {
    const message = createBaseQueryAlliancesDelegationsResponse();
    message.delegations =
      object.delegations?.map((e) => DelegationResponse.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryAllianceDelegationRequest(): QueryAllianceDelegationRequest {
  return {
    delegatorAddr: "",
    validatorAddr: "",
    denom: "",
    pagination: undefined,
  };
}

export const QueryAllianceDelegationRequest = {
  encode(
    message: QueryAllianceDelegationRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAllianceDelegationRequest {
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

  fromJSON(object: any): QueryAllianceDelegationRequest {
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

  toJSON(message: QueryAllianceDelegationRequest): unknown {
    const obj: any = {};
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

  fromPartial(
    object: Partial<QueryAllianceDelegationRequest>
  ): QueryAllianceDelegationRequest {
    const message = createBaseQueryAllianceDelegationRequest();
    message.delegatorAddr = object.delegatorAddr ?? "";
    message.validatorAddr = object.validatorAddr ?? "";
    message.denom = object.denom ?? "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryIBCAllianceDelegationRequest(): QueryIBCAllianceDelegationRequest {
  return {
    delegatorAddr: "",
    validatorAddr: "",
    hash: "",
    pagination: undefined,
  };
}

export const QueryIBCAllianceDelegationRequest = {
  encode(
    message: QueryIBCAllianceDelegationRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryIBCAllianceDelegationRequest {
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

  fromJSON(object: any): QueryIBCAllianceDelegationRequest {
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

  toJSON(message: QueryIBCAllianceDelegationRequest): unknown {
    const obj: any = {};
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

  fromPartial(
    object: Partial<QueryIBCAllianceDelegationRequest>
  ): QueryIBCAllianceDelegationRequest {
    const message = createBaseQueryIBCAllianceDelegationRequest();
    message.delegatorAddr = object.delegatorAddr ?? "";
    message.validatorAddr = object.validatorAddr ?? "";
    message.hash = object.hash ?? "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryAllianceDelegationResponse(): QueryAllianceDelegationResponse {
  return {
    delegation: undefined,
  };
}

export const QueryAllianceDelegationResponse = {
  encode(
    message: QueryAllianceDelegationResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.delegation !== undefined) {
      DelegationResponse.encode(
        message.delegation,
        writer.uint32(10).fork()
      ).ldelim();
    }

    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAllianceDelegationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllianceDelegationResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.delegation = DelegationResponse.decode(
            reader,
            reader.uint32()
          );
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryAllianceDelegationResponse {
    return {
      delegation: isSet(object.delegation)
        ? DelegationResponse.fromJSON(object.delegation)
        : undefined,
    };
  },

  toJSON(message: QueryAllianceDelegationResponse): unknown {
    const obj: any = {};
    message.delegation !== undefined &&
      (obj.delegation = message.delegation
        ? DelegationResponse.toJSON(message.delegation)
        : undefined);
    return obj;
  },

  fromPartial(
    object: Partial<QueryAllianceDelegationResponse>
  ): QueryAllianceDelegationResponse {
    const message = createBaseQueryAllianceDelegationResponse();
    message.delegation =
      object.delegation !== undefined && object.delegation !== null
        ? DelegationResponse.fromPartial(object.delegation)
        : undefined;
    return message;
  },
};

function createBaseQueryAllianceDelegationRewardsRequest(): QueryAllianceDelegationRewardsRequest {
  return {
    delegatorAddr: "",
    validatorAddr: "",
    denom: "",
    pagination: undefined,
  };
}

export const QueryAllianceDelegationRewardsRequest = {
  encode(
    message: QueryAllianceDelegationRewardsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAllianceDelegationRewardsRequest {
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

  fromJSON(object: any): QueryAllianceDelegationRewardsRequest {
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

  toJSON(message: QueryAllianceDelegationRewardsRequest): unknown {
    const obj: any = {};
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

  fromPartial(
    object: Partial<QueryAllianceDelegationRewardsRequest>
  ): QueryAllianceDelegationRewardsRequest {
    const message = createBaseQueryAllianceDelegationRewardsRequest();
    message.delegatorAddr = object.delegatorAddr ?? "";
    message.validatorAddr = object.validatorAddr ?? "";
    message.denom = object.denom ?? "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryIBCAllianceDelegationRewardsRequest(): QueryIBCAllianceDelegationRewardsRequest {
  return {
    delegatorAddr: "",
    validatorAddr: "",
    hash: "",
    pagination: undefined,
  };
}

export const QueryIBCAllianceDelegationRewardsRequest = {
  encode(
    message: QueryIBCAllianceDelegationRewardsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryIBCAllianceDelegationRewardsRequest {
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

  fromJSON(object: any): QueryIBCAllianceDelegationRewardsRequest {
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

  toJSON(message: QueryIBCAllianceDelegationRewardsRequest): unknown {
    const obj: any = {};
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

  fromPartial(
    object: Partial<QueryIBCAllianceDelegationRewardsRequest>
  ): QueryIBCAllianceDelegationRewardsRequest {
    const message = createBaseQueryIBCAllianceDelegationRewardsRequest();
    message.delegatorAddr = object.delegatorAddr ?? "";
    message.validatorAddr = object.validatorAddr ?? "";
    message.hash = object.hash ?? "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryAllianceDelegationRewardsResponse(): QueryAllianceDelegationRewardsResponse {
  return {
    rewards: [],
  };
}

export const QueryAllianceDelegationRewardsResponse = {
  encode(
    message: QueryAllianceDelegationRewardsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.rewards) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAllianceDelegationRewardsResponse {
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

  fromJSON(object: any): QueryAllianceDelegationRewardsResponse {
    return {
      rewards: Array.isArray(object?.rewards)
        ? object.rewards.map((e: any) => Coin.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryAllianceDelegationRewardsResponse): unknown {
    const obj: any = {};

    if (message.rewards) {
      obj.rewards = message.rewards.map((e) =>
        e ? Coin.toJSON(e) : undefined
      );
    } else {
      obj.rewards = [];
    }

    return obj;
  },

  fromPartial(
    object: Partial<QueryAllianceDelegationRewardsResponse>
  ): QueryAllianceDelegationRewardsResponse {
    const message = createBaseQueryAllianceDelegationRewardsResponse();
    message.rewards = object.rewards?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryAllianceValidatorResponse(): QueryAllianceValidatorResponse {
  return {
    validatorAddr: "",
    totalDelegationShares: [],
    validatorShares: [],
    totalStaked: [],
  };
}

export const QueryAllianceValidatorResponse = {
  encode(
    message: QueryAllianceValidatorResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.validatorAddr !== "") {
      writer.uint32(10).string(message.validatorAddr);
    }

    for (const v of message.totalDelegationShares) {
      DecCoin.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.validatorShares) {
      DecCoin.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    for (const v of message.totalStaked) {
      DecCoin.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAllianceValidatorResponse {
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
          message.totalDelegationShares.push(
            DecCoin.decode(reader, reader.uint32())
          );
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

  fromJSON(object: any): QueryAllianceValidatorResponse {
    return {
      validatorAddr: isSet(object.validatorAddr)
        ? String(object.validatorAddr)
        : "",
      totalDelegationShares: Array.isArray(object?.totalDelegationShares)
        ? object.totalDelegationShares.map((e: any) => DecCoin.fromJSON(e))
        : [],
      validatorShares: Array.isArray(object?.validatorShares)
        ? object.validatorShares.map((e: any) => DecCoin.fromJSON(e))
        : [],
      totalStaked: Array.isArray(object?.totalStaked)
        ? object.totalStaked.map((e: any) => DecCoin.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryAllianceValidatorResponse): unknown {
    const obj: any = {};
    message.validatorAddr !== undefined &&
      (obj.validatorAddr = message.validatorAddr);

    if (message.totalDelegationShares) {
      obj.totalDelegationShares = message.totalDelegationShares.map((e) =>
        e ? DecCoin.toJSON(e) : undefined
      );
    } else {
      obj.totalDelegationShares = [];
    }

    if (message.validatorShares) {
      obj.validatorShares = message.validatorShares.map((e) =>
        e ? DecCoin.toJSON(e) : undefined
      );
    } else {
      obj.validatorShares = [];
    }

    if (message.totalStaked) {
      obj.totalStaked = message.totalStaked.map((e) =>
        e ? DecCoin.toJSON(e) : undefined
      );
    } else {
      obj.totalStaked = [];
    }

    return obj;
  },

  fromPartial(
    object: Partial<QueryAllianceValidatorResponse>
  ): QueryAllianceValidatorResponse {
    const message = createBaseQueryAllianceValidatorResponse();
    message.validatorAddr = object.validatorAddr ?? "";
    message.totalDelegationShares =
      object.totalDelegationShares?.map((e) => DecCoin.fromPartial(e)) || [];
    message.validatorShares =
      object.validatorShares?.map((e) => DecCoin.fromPartial(e)) || [];
    message.totalStaked =
      object.totalStaked?.map((e) => DecCoin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryAllianceValidatorsResponse(): QueryAllianceValidatorsResponse {
  return {
    validators: [],
    pagination: undefined,
  };
}

export const QueryAllianceValidatorsResponse = {
  encode(
    message: QueryAllianceValidatorsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.validators) {
      QueryAllianceValidatorResponse.encode(
        v!,
        writer.uint32(10).fork()
      ).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }

    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAllianceValidatorsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllianceValidatorsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.validators.push(
            QueryAllianceValidatorResponse.decode(reader, reader.uint32())
          );
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

  fromJSON(object: any): QueryAllianceValidatorsResponse {
    return {
      validators: Array.isArray(object?.validators)
        ? object.validators.map((e: any) =>
            QueryAllianceValidatorResponse.fromJSON(e)
          )
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryAllianceValidatorsResponse): unknown {
    const obj: any = {};

    if (message.validators) {
      obj.validators = message.validators.map((e) =>
        e ? QueryAllianceValidatorResponse.toJSON(e) : undefined
      );
    } else {
      obj.validators = [];
    }

    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: Partial<QueryAllianceValidatorsResponse>
  ): QueryAllianceValidatorsResponse {
    const message = createBaseQueryAllianceValidatorsResponse();
    message.validators =
      object.validators?.map((e) =>
        QueryAllianceValidatorResponse.fromPartial(e)
      ) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};
export interface Query {
  Params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Query paginated alliances */

  Alliances(request?: QueryAlliancesRequest): Promise<QueryAlliancesResponse>;
  /** Query a specific alliance by ibc hash */

  IBCAlliance(request: QueryIBCAllianceRequest): Promise<QueryAllianceResponse>;
  /** Query all paginated alliance delegations */

  AllAlliancesDelegations(
    request?: QueryAllAlliancesDelegationsRequest
  ): Promise<QueryAlliancesDelegationsResponse>;
  /** Query alliance validator */

  AllianceValidator(
    request: QueryAllianceValidatorRequest
  ): Promise<QueryAllianceValidatorResponse>;
  /** Query all paginated alliance validators */

  AllAllianceValidators(
    request?: QueryAllAllianceValidatorsRequest
  ): Promise<QueryAllianceValidatorsResponse>;
  /** Query all paginated alliance delegations for a delegator addr */

  AlliancesDelegation(
    request: QueryAlliancesDelegationsRequest
  ): Promise<QueryAlliancesDelegationsResponse>;
  /** Query all paginated alliance delegations for a delegator addr and validator_addr */

  AlliancesDelegationByValidator(
    request: QueryAlliancesDelegationByValidatorRequest
  ): Promise<QueryAlliancesDelegationsResponse>;
  /** Query a delegation to an alliance by delegator addr, validator_addr and denom */

  AllianceDelegation(
    request: QueryAllianceDelegationRequest
  ): Promise<QueryAllianceDelegationResponse>;
  /** Query a delegation to an alliance by delegator addr, validator_addr and denom */

  IBCAllianceDelegation(
    request: QueryIBCAllianceDelegationRequest
  ): Promise<QueryAllianceDelegationResponse>;
  /** Query for rewards by delegator addr, validator_addr and denom */

  AllianceDelegationRewards(
    request: QueryAllianceDelegationRewardsRequest
  ): Promise<QueryAllianceDelegationRewardsResponse>;
  /** Query for rewards by delegator addr, validator_addr and denom */

  IBCAllianceDelegationRewards(
    request: QueryIBCAllianceDelegationRewardsRequest
  ): Promise<QueryAllianceDelegationRewardsResponse>;
  /** Query a specific alliance by denom */

  Alliance(request: QueryAllianceRequest): Promise<QueryAllianceResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
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

  Params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("alliance.alliance.Query", "Params", data);
    return promise.then((data) =>
      QueryParamsResponse.decode(new _m0.Reader(data))
    );
  }

  Alliances(
    request: QueryAlliancesRequest = {
      pagination: undefined,
    }
  ): Promise<QueryAlliancesResponse> {
    const data = QueryAlliancesRequest.encode(request).finish();
    const promise = this.rpc.request(
      "alliance.alliance.Query",
      "Alliances",
      data
    );
    return promise.then((data) =>
      QueryAlliancesResponse.decode(new _m0.Reader(data))
    );
  }

  IBCAlliance(
    request: QueryIBCAllianceRequest
  ): Promise<QueryAllianceResponse> {
    const data = QueryIBCAllianceRequest.encode(request).finish();
    const promise = this.rpc.request(
      "alliance.alliance.Query",
      "IBCAlliance",
      data
    );
    return promise.then((data) =>
      QueryAllianceResponse.decode(new _m0.Reader(data))
    );
  }

  AllAlliancesDelegations(
    request: QueryAllAlliancesDelegationsRequest = {
      pagination: undefined,
    }
  ): Promise<QueryAlliancesDelegationsResponse> {
    const data = QueryAllAlliancesDelegationsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "alliance.alliance.Query",
      "AllAlliancesDelegations",
      data
    );
    return promise.then((data) =>
      QueryAlliancesDelegationsResponse.decode(new _m0.Reader(data))
    );
  }

  AllianceValidator(
    request: QueryAllianceValidatorRequest
  ): Promise<QueryAllianceValidatorResponse> {
    const data = QueryAllianceValidatorRequest.encode(request).finish();
    const promise = this.rpc.request(
      "alliance.alliance.Query",
      "AllianceValidator",
      data
    );
    return promise.then((data) =>
      QueryAllianceValidatorResponse.decode(new _m0.Reader(data))
    );
  }

  AllAllianceValidators(
    request: QueryAllAllianceValidatorsRequest = {
      pagination: undefined,
    }
  ): Promise<QueryAllianceValidatorsResponse> {
    const data = QueryAllAllianceValidatorsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "alliance.alliance.Query",
      "AllAllianceValidators",
      data
    );
    return promise.then((data) =>
      QueryAllianceValidatorsResponse.decode(new _m0.Reader(data))
    );
  }

  AlliancesDelegation(
    request: QueryAlliancesDelegationsRequest
  ): Promise<QueryAlliancesDelegationsResponse> {
    const data = QueryAlliancesDelegationsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "alliance.alliance.Query",
      "AlliancesDelegation",
      data
    );
    return promise.then((data) =>
      QueryAlliancesDelegationsResponse.decode(new _m0.Reader(data))
    );
  }

  AlliancesDelegationByValidator(
    request: QueryAlliancesDelegationByValidatorRequest
  ): Promise<QueryAlliancesDelegationsResponse> {
    const data =
      QueryAlliancesDelegationByValidatorRequest.encode(request).finish();
    const promise = this.rpc.request(
      "alliance.alliance.Query",
      "AlliancesDelegationByValidator",
      data
    );
    return promise.then((data) =>
      QueryAlliancesDelegationsResponse.decode(new _m0.Reader(data))
    );
  }

  AllianceDelegation(
    request: QueryAllianceDelegationRequest
  ): Promise<QueryAllianceDelegationResponse> {
    const data = QueryAllianceDelegationRequest.encode(request).finish();
    const promise = this.rpc.request(
      "alliance.alliance.Query",
      "AllianceDelegation",
      data
    );
    return promise.then((data) =>
      QueryAllianceDelegationResponse.decode(new _m0.Reader(data))
    );
  }

  IBCAllianceDelegation(
    request: QueryIBCAllianceDelegationRequest
  ): Promise<QueryAllianceDelegationResponse> {
    const data = QueryIBCAllianceDelegationRequest.encode(request).finish();
    const promise = this.rpc.request(
      "alliance.alliance.Query",
      "IBCAllianceDelegation",
      data
    );
    return promise.then((data) =>
      QueryAllianceDelegationResponse.decode(new _m0.Reader(data))
    );
  }

  AllianceDelegationRewards(
    request: QueryAllianceDelegationRewardsRequest
  ): Promise<QueryAllianceDelegationRewardsResponse> {
    const data = QueryAllianceDelegationRewardsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "alliance.alliance.Query",
      "AllianceDelegationRewards",
      data
    );
    return promise.then((data) =>
      QueryAllianceDelegationRewardsResponse.decode(new _m0.Reader(data))
    );
  }

  IBCAllianceDelegationRewards(
    request: QueryIBCAllianceDelegationRewardsRequest
  ): Promise<QueryAllianceDelegationRewardsResponse> {
    const data =
      QueryIBCAllianceDelegationRewardsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "alliance.alliance.Query",
      "IBCAllianceDelegationRewards",
      data
    );
    return promise.then((data) =>
      QueryAllianceDelegationRewardsResponse.decode(new _m0.Reader(data))
    );
  }

  Alliance(request: QueryAllianceRequest): Promise<QueryAllianceResponse> {
    const data = QueryAllianceRequest.encode(request).finish();
    const promise = this.rpc.request(
      "alliance.alliance.Query",
      "Alliance",
      data
    );
    return promise.then((data) =>
      QueryAllianceResponse.decode(new _m0.Reader(data))
    );
  }
}
