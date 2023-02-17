/* eslint-disable */
import { Coin, DecCoin } from "cosmjs-types/cosmos/base/v1beta1/coin";
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../gravity/v1/helpers";
import { RewardHistory } from "./params";
export const protobufPackage = "alliance.alliance";
export interface Delegation {
  /** delegator_address is the bech32-encoded address of the delegator. */
  delegatorAddress: string;
  /** validator_address is the bech32-encoded address of the validator. */

  validatorAddress: string;
  /** denom of token staked */

  denom: string;
  /** shares define the delegation shares received. */

  shares: string;
  rewardHistory: RewardHistory[];
  lastRewardClaimHeight: Long;
}
export interface Redelegation {
  delegatorAddress: string;
  srcValidatorAddress: string;
  dstValidatorAddress: string;
  balance?: Coin;
}
export interface QueuedRedelegation {
  entries: Redelegation[];
}
export interface Undelegation {
  delegatorAddress: string;
  validatorAddress: string;
  balance?: Coin;
}
export interface QueuedUndelegation {
  entries: Undelegation[];
}
export interface AllianceValidatorInfo {
  globalRewardHistory: RewardHistory[];
  totalDelegatorShares: DecCoin[];
  validatorShares: DecCoin[];
}

function createBaseDelegation(): Delegation {
  return {
    delegatorAddress: "",
    validatorAddress: "",
    denom: "",
    shares: "",
    rewardHistory: [],
    lastRewardClaimHeight: Long.UZERO,
  };
}

export const Delegation = {
  encode(
    message: Delegation,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }

    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }

    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }

    if (message.shares !== "") {
      writer.uint32(34).string(message.shares);
    }

    for (const v of message.rewardHistory) {
      RewardHistory.encode(v!, writer.uint32(42).fork()).ldelim();
    }

    if (!message.lastRewardClaimHeight.isZero()) {
      writer.uint32(48).uint64(message.lastRewardClaimHeight);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Delegation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegation();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;

        case 2:
          message.validatorAddress = reader.string();
          break;

        case 3:
          message.denom = reader.string();
          break;

        case 4:
          message.shares = reader.string();
          break;

        case 5:
          message.rewardHistory.push(
            RewardHistory.decode(reader, reader.uint32())
          );
          break;

        case 6:
          message.lastRewardClaimHeight = reader.uint64() as Long;
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Delegation {
    return {
      delegatorAddress: isSet(object.delegatorAddress)
        ? String(object.delegatorAddress)
        : "",
      validatorAddress: isSet(object.validatorAddress)
        ? String(object.validatorAddress)
        : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      shares: isSet(object.shares) ? String(object.shares) : "",
      rewardHistory: Array.isArray(object?.rewardHistory)
        ? object.rewardHistory.map((e: any) => RewardHistory.fromJSON(e))
        : [],
      lastRewardClaimHeight: isSet(object.lastRewardClaimHeight)
        ? Long.fromValue(object.lastRewardClaimHeight)
        : Long.UZERO,
    };
  },

  toJSON(message: Delegation): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined &&
      (obj.delegatorAddress = message.delegatorAddress);
    message.validatorAddress !== undefined &&
      (obj.validatorAddress = message.validatorAddress);
    message.denom !== undefined && (obj.denom = message.denom);
    message.shares !== undefined && (obj.shares = message.shares);

    if (message.rewardHistory) {
      obj.rewardHistory = message.rewardHistory.map((e) =>
        e ? RewardHistory.toJSON(e) : undefined
      );
    } else {
      obj.rewardHistory = [];
    }

    message.lastRewardClaimHeight !== undefined &&
      (obj.lastRewardClaimHeight = (
        message.lastRewardClaimHeight || Long.UZERO
      ).toString());
    return obj;
  },

  fromPartial(object: Partial<Delegation>): Delegation {
    const message = createBaseDelegation();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    message.denom = object.denom ?? "";
    message.shares = object.shares ?? "";
    message.rewardHistory =
      object.rewardHistory?.map((e) => RewardHistory.fromPartial(e)) || [];
    message.lastRewardClaimHeight =
      object.lastRewardClaimHeight !== undefined &&
      object.lastRewardClaimHeight !== null
        ? Long.fromValue(object.lastRewardClaimHeight)
        : Long.UZERO;
    return message;
  },
};

function createBaseRedelegation(): Redelegation {
  return {
    delegatorAddress: "",
    srcValidatorAddress: "",
    dstValidatorAddress: "",
    balance: undefined,
  };
}

export const Redelegation = {
  encode(
    message: Redelegation,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }

    if (message.srcValidatorAddress !== "") {
      writer.uint32(18).string(message.srcValidatorAddress);
    }

    if (message.dstValidatorAddress !== "") {
      writer.uint32(26).string(message.dstValidatorAddress);
    }

    if (message.balance !== undefined) {
      Coin.encode(message.balance, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Redelegation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRedelegation();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;

        case 2:
          message.srcValidatorAddress = reader.string();
          break;

        case 3:
          message.dstValidatorAddress = reader.string();
          break;

        case 4:
          message.balance = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Redelegation {
    return {
      delegatorAddress: isSet(object.delegatorAddress)
        ? String(object.delegatorAddress)
        : "",
      srcValidatorAddress: isSet(object.srcValidatorAddress)
        ? String(object.srcValidatorAddress)
        : "",
      dstValidatorAddress: isSet(object.dstValidatorAddress)
        ? String(object.dstValidatorAddress)
        : "",
      balance: isSet(object.balance)
        ? Coin.fromJSON(object.balance)
        : undefined,
    };
  },

  toJSON(message: Redelegation): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined &&
      (obj.delegatorAddress = message.delegatorAddress);
    message.srcValidatorAddress !== undefined &&
      (obj.srcValidatorAddress = message.srcValidatorAddress);
    message.dstValidatorAddress !== undefined &&
      (obj.dstValidatorAddress = message.dstValidatorAddress);
    message.balance !== undefined &&
      (obj.balance = message.balance
        ? Coin.toJSON(message.balance)
        : undefined);
    return obj;
  },

  fromPartial(object: Partial<Redelegation>): Redelegation {
    const message = createBaseRedelegation();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.srcValidatorAddress = object.srcValidatorAddress ?? "";
    message.dstValidatorAddress = object.dstValidatorAddress ?? "";
    message.balance =
      object.balance !== undefined && object.balance !== null
        ? Coin.fromPartial(object.balance)
        : undefined;
    return message;
  },
};

function createBaseQueuedRedelegation(): QueuedRedelegation {
  return {
    entries: [],
  };
}

export const QueuedRedelegation = {
  encode(
    message: QueuedRedelegation,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.entries) {
      Redelegation.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueuedRedelegation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueuedRedelegation();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.entries.push(Redelegation.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueuedRedelegation {
    return {
      entries: Array.isArray(object?.entries)
        ? object.entries.map((e: any) => Redelegation.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueuedRedelegation): unknown {
    const obj: any = {};

    if (message.entries) {
      obj.entries = message.entries.map((e) =>
        e ? Redelegation.toJSON(e) : undefined
      );
    } else {
      obj.entries = [];
    }

    return obj;
  },

  fromPartial(object: Partial<QueuedRedelegation>): QueuedRedelegation {
    const message = createBaseQueuedRedelegation();
    message.entries =
      object.entries?.map((e) => Redelegation.fromPartial(e)) || [];
    return message;
  },
};

function createBaseUndelegation(): Undelegation {
  return {
    delegatorAddress: "",
    validatorAddress: "",
    balance: undefined,
  };
}

export const Undelegation = {
  encode(
    message: Undelegation,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }

    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }

    if (message.balance !== undefined) {
      Coin.encode(message.balance, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Undelegation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUndelegation();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;

        case 2:
          message.validatorAddress = reader.string();
          break;

        case 3:
          message.balance = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Undelegation {
    return {
      delegatorAddress: isSet(object.delegatorAddress)
        ? String(object.delegatorAddress)
        : "",
      validatorAddress: isSet(object.validatorAddress)
        ? String(object.validatorAddress)
        : "",
      balance: isSet(object.balance)
        ? Coin.fromJSON(object.balance)
        : undefined,
    };
  },

  toJSON(message: Undelegation): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined &&
      (obj.delegatorAddress = message.delegatorAddress);
    message.validatorAddress !== undefined &&
      (obj.validatorAddress = message.validatorAddress);
    message.balance !== undefined &&
      (obj.balance = message.balance
        ? Coin.toJSON(message.balance)
        : undefined);
    return obj;
  },

  fromPartial(object: Partial<Undelegation>): Undelegation {
    const message = createBaseUndelegation();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    message.balance =
      object.balance !== undefined && object.balance !== null
        ? Coin.fromPartial(object.balance)
        : undefined;
    return message;
  },
};

function createBaseQueuedUndelegation(): QueuedUndelegation {
  return {
    entries: [],
  };
}

export const QueuedUndelegation = {
  encode(
    message: QueuedUndelegation,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.entries) {
      Undelegation.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueuedUndelegation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueuedUndelegation();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.entries.push(Undelegation.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueuedUndelegation {
    return {
      entries: Array.isArray(object?.entries)
        ? object.entries.map((e: any) => Undelegation.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueuedUndelegation): unknown {
    const obj: any = {};

    if (message.entries) {
      obj.entries = message.entries.map((e) =>
        e ? Undelegation.toJSON(e) : undefined
      );
    } else {
      obj.entries = [];
    }

    return obj;
  },

  fromPartial(object: Partial<QueuedUndelegation>): QueuedUndelegation {
    const message = createBaseQueuedUndelegation();
    message.entries =
      object.entries?.map((e) => Undelegation.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAllianceValidatorInfo(): AllianceValidatorInfo {
  return {
    globalRewardHistory: [],
    totalDelegatorShares: [],
    validatorShares: [],
  };
}

export const AllianceValidatorInfo = {
  encode(
    message: AllianceValidatorInfo,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.globalRewardHistory) {
      RewardHistory.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.totalDelegatorShares) {
      DecCoin.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.validatorShares) {
      DecCoin.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AllianceValidatorInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllianceValidatorInfo();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.globalRewardHistory.push(
            RewardHistory.decode(reader, reader.uint32())
          );
          break;

        case 2:
          message.totalDelegatorShares.push(
            DecCoin.decode(reader, reader.uint32())
          );
          break;

        case 3:
          message.validatorShares.push(DecCoin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): AllianceValidatorInfo {
    return {
      globalRewardHistory: Array.isArray(object?.globalRewardHistory)
        ? object.globalRewardHistory.map((e: any) => RewardHistory.fromJSON(e))
        : [],
      totalDelegatorShares: Array.isArray(object?.totalDelegatorShares)
        ? object.totalDelegatorShares.map((e: any) => DecCoin.fromJSON(e))
        : [],
      validatorShares: Array.isArray(object?.validatorShares)
        ? object.validatorShares.map((e: any) => DecCoin.fromJSON(e))
        : [],
    };
  },

  toJSON(message: AllianceValidatorInfo): unknown {
    const obj: any = {};

    if (message.globalRewardHistory) {
      obj.globalRewardHistory = message.globalRewardHistory.map((e) =>
        e ? RewardHistory.toJSON(e) : undefined
      );
    } else {
      obj.globalRewardHistory = [];
    }

    if (message.totalDelegatorShares) {
      obj.totalDelegatorShares = message.totalDelegatorShares.map((e) =>
        e ? DecCoin.toJSON(e) : undefined
      );
    } else {
      obj.totalDelegatorShares = [];
    }

    if (message.validatorShares) {
      obj.validatorShares = message.validatorShares.map((e) =>
        e ? DecCoin.toJSON(e) : undefined
      );
    } else {
      obj.validatorShares = [];
    }

    return obj;
  },

  fromPartial(object: Partial<AllianceValidatorInfo>): AllianceValidatorInfo {
    const message = createBaseAllianceValidatorInfo();
    message.globalRewardHistory =
      object.globalRewardHistory?.map((e) => RewardHistory.fromPartial(e)) ||
      [];
    message.totalDelegatorShares =
      object.totalDelegatorShares?.map((e) => DecCoin.fromPartial(e)) || [];
    message.validatorShares =
      object.validatorShares?.map((e) => DecCoin.fromPartial(e)) || [];
    return message;
  },
};
