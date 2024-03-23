import { DeepPartial, Exact } from "cosmjs-types";
import { Coin } from "cosmjs-types/cosmos/base/v1beta1/coin";
import { Rpc, isSet } from "cosmjs-types/helpers";
import { Reader, Writer } from "protobufjs/minimal";

/* eslint-disable */
export const protobufPackage = "batch";
/**
 * MsgWithdrawAllDelegatorRewards represents delegation withdrawal to a delegator
 * from all staked validators.
 */
export interface MsgWithdrawAllDelegatorRewards {
  delegatorAddress: string;
}
/** MsgWithdrawAllDelegatorRewardsResponse defines the Msg/WithdrawAllDelegatorRewards response type. */
export interface MsgWithdrawAllDelegatorRewardsResponse {
  amount: Coin[];
}
export interface MsgBatchResetDelegation {
  delegatorAddress: string;
  validators: string[];
  amounts: string[];
}
export interface MsgBatchResetDelegationResponse {}
function createBaseMsgWithdrawAllDelegatorRewards(): MsgWithdrawAllDelegatorRewards {
  return {
    delegatorAddress: "",
  };
}
export const MsgWithdrawAllDelegatorRewards = {
  typeUrl: "/batch.MsgWithdrawAllDelegatorRewards",
  encode(
    message: MsgWithdrawAllDelegatorRewards,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    return writer;
  },
  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgWithdrawAllDelegatorRewards {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawAllDelegatorRewards();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgWithdrawAllDelegatorRewards {
    const obj = createBaseMsgWithdrawAllDelegatorRewards();
    if (isSet(object.delegatorAddress))
      obj.delegatorAddress = String(object.delegatorAddress);
    return obj;
  },
  toJSON(message: MsgWithdrawAllDelegatorRewards): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined &&
      (obj.delegatorAddress = message.delegatorAddress);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgWithdrawAllDelegatorRewards>, I>>(
    object: I
  ): MsgWithdrawAllDelegatorRewards {
    const message = createBaseMsgWithdrawAllDelegatorRewards();
    message.delegatorAddress = object.delegatorAddress ?? "";
    return message;
  },
};
function createBaseMsgWithdrawAllDelegatorRewardsResponse(): MsgWithdrawAllDelegatorRewardsResponse {
  return {
    amount: [],
  };
}
export const MsgWithdrawAllDelegatorRewardsResponse = {
  typeUrl: "/batch.MsgWithdrawAllDelegatorRewardsResponse",
  encode(
    message: MsgWithdrawAllDelegatorRewardsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgWithdrawAllDelegatorRewardsResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawAllDelegatorRewardsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgWithdrawAllDelegatorRewardsResponse {
    const obj = createBaseMsgWithdrawAllDelegatorRewardsResponse();
    if (Array.isArray(object?.amount))
      obj.amount = object.amount.map((e: any) => Coin.fromJSON(e));
    return obj;
  },
  toJSON(message: MsgWithdrawAllDelegatorRewardsResponse): unknown {
    const obj: any = {};
    if (message.amount) {
      obj.amount = message.amount.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.amount = [];
    }
    return obj;
  },
  fromPartial<
    I extends Exact<DeepPartial<MsgWithdrawAllDelegatorRewardsResponse>, I>
  >(object: I): MsgWithdrawAllDelegatorRewardsResponse {
    const message = createBaseMsgWithdrawAllDelegatorRewardsResponse();
    message.amount = object.amount?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};
function createBaseMsgBatchResetDelegation(): MsgBatchResetDelegation {
  return {
    delegatorAddress: "",
    validators: [],
    amounts: [],
  };
}
export const MsgBatchResetDelegation = {
  typeUrl: "/batch.MsgBatchResetDelegation",
  encode(
    message: MsgBatchResetDelegation,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    for (const v of message.validators) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.amounts) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },
  decode(input: Reader | Uint8Array, length?: number): MsgBatchResetDelegation {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBatchResetDelegation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.validators.push(reader.string());
          break;
        case 3:
          message.amounts.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgBatchResetDelegation {
    const obj = createBaseMsgBatchResetDelegation();
    if (isSet(object.delegatorAddress))
      obj.delegatorAddress = String(object.delegatorAddress);
    if (Array.isArray(object?.validators))
      obj.validators = object.validators.map((e: any) => String(e));
    if (Array.isArray(object?.amounts))
      obj.amounts = object.amounts.map((e: any) => String(e));
    return obj;
  },
  toJSON(message: MsgBatchResetDelegation): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined &&
      (obj.delegatorAddress = message.delegatorAddress);
    if (message.validators) {
      obj.validators = message.validators.map((e) => e);
    } else {
      obj.validators = [];
    }
    if (message.amounts) {
      obj.amounts = message.amounts.map((e) => e);
    } else {
      obj.amounts = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgBatchResetDelegation>, I>>(
    object: I
  ): MsgBatchResetDelegation {
    const message = createBaseMsgBatchResetDelegation();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validators = object.validators?.map((e) => e) || [];
    message.amounts = object.amounts?.map((e) => e) || [];
    return message;
  },
};
function createBaseMsgBatchResetDelegationResponse(): MsgBatchResetDelegationResponse {
  return {};
}
export const MsgBatchResetDelegationResponse = {
  typeUrl: "/batch.MsgBatchResetDelegationResponse",
  encode(
    _: MsgBatchResetDelegationResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },
  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgBatchResetDelegationResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBatchResetDelegationResponse();
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
  fromJSON(_: any): MsgBatchResetDelegationResponse {
    const obj = createBaseMsgBatchResetDelegationResponse();
    return obj;
  },
  toJSON(_: MsgBatchResetDelegationResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgBatchResetDelegationResponse>, I>>(
    _: I
  ): MsgBatchResetDelegationResponse {
    const message = createBaseMsgBatchResetDelegationResponse();
    return message;
  },
};
/** Msg defines the batch Msg service. */
export interface Msg {
  /**
   * WithdrawAllDelegatorRewards defines a method to withdraw rewards of delegator
   * from all staked validators.
   */
  WithdrawAllDelegatorRewards(
    request: MsgWithdrawAllDelegatorRewards
  ): Promise<MsgWithdrawAllDelegatorRewardsResponse>;
  /**
   * BatchResetDelegation defines a method to delegate or undelegate in batches
   * from existing delegation and target delegation amount
   */
  BatchResetDelegation(
    request: MsgBatchResetDelegation
  ): Promise<MsgBatchResetDelegationResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.WithdrawAllDelegatorRewards =
      this.WithdrawAllDelegatorRewards.bind(this);
    this.BatchResetDelegation = this.BatchResetDelegation.bind(this);
  }
  WithdrawAllDelegatorRewards(
    request: MsgWithdrawAllDelegatorRewards
  ): Promise<MsgWithdrawAllDelegatorRewardsResponse> {
    const data = MsgWithdrawAllDelegatorRewards.encode(request).finish();
    const promise = this.rpc.request(
      "batch.Msg",
      "WithdrawAllDelegatorRewards",
      data
    );
    return promise.then((data) =>
      MsgWithdrawAllDelegatorRewardsResponse.decode(new Reader(data))
    );
  }
  BatchResetDelegation(
    request: MsgBatchResetDelegation
  ): Promise<MsgBatchResetDelegationResponse> {
    const data = MsgBatchResetDelegation.encode(request).finish();
    const promise = this.rpc.request("batch.Msg", "BatchResetDelegation", data);
    return promise.then((data) =>
      MsgBatchResetDelegationResponse.decode(new Reader(data))
    );
  }
}
