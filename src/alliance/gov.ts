/* eslint-disable */
import { Duration } from "cosmjs-types/google/protobuf/duration";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../gravity/v1/helpers";
import { RewardWeightRange } from "./alliance";
export const protobufPackage = "alliance.alliance";
export interface MsgCreateAllianceProposal {
  /** the title of the update proposal */
  title: string;
  /** the description of the proposal */

  description: string;
  /** Denom of the asset. It could either be a native token or an IBC token */

  denom: string;
  /**
   * The reward weight specifies the ratio of rewards that will be given to each alliance asset
   * It does not need to sum to 1. rate = weight / total_weight
   * Native asset is always assumed to have a weight of 1.
   */

  rewardWeight: string;
  /**
   * A positive take rate is used for liquid staking derivatives. It defines an annualized reward rate that
   * will be redirected to the distribution rewards pool
   */

  takeRate: string;
  rewardChangeRate: string;
  rewardChangeInterval?: Duration;
  /** set a bound of weight range to limit how much reward weights can scale. */

  rewardWeightRange?: RewardWeightRange;
}
export interface MsgUpdateAllianceProposal {
  /** the title of the update proposal */
  title: string;
  /** the description of the proposal */

  description: string;
  /** Denom of the asset. It could either be a native token or an IBC token */

  denom: string;
  /**
   * The reward weight specifies the ratio of rewards that will be given to each alliance asset
   * It does not need to sum to 1. rate = weight / total_weight
   * Native asset is always assumed to have a weight of 1.
   */

  rewardWeight: string;
  takeRate: string;
  rewardChangeRate: string;
  rewardChangeInterval?: Duration;
}
export interface MsgDeleteAllianceProposal {
  /** the title of the update proposal */
  title: string;
  /** the description of the proposal */

  description: string;
  denom: string;
}

function createBaseMsgCreateAllianceProposal(): MsgCreateAllianceProposal {
  return {
    title: "",
    description: "",
    denom: "",
    rewardWeight: "",
    takeRate: "",
    rewardChangeRate: "",
    rewardChangeInterval: undefined,
    rewardWeightRange: undefined,
  };
}

export const MsgCreateAllianceProposal = {
  encode(
    message: MsgCreateAllianceProposal,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }

    if (message.rewardWeight !== "") {
      writer.uint32(34).string(message.rewardWeight);
    }

    if (message.takeRate !== "") {
      writer.uint32(42).string(message.takeRate);
    }

    if (message.rewardChangeRate !== "") {
      writer.uint32(50).string(message.rewardChangeRate);
    }

    if (message.rewardChangeInterval !== undefined) {
      Duration.encode(
        message.rewardChangeInterval,
        writer.uint32(58).fork()
      ).ldelim();
    }

    if (message.rewardWeightRange !== undefined) {
      RewardWeightRange.encode(
        message.rewardWeightRange,
        writer.uint32(66).fork()
      ).ldelim();
    }

    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCreateAllianceProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateAllianceProposal();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        case 3:
          message.denom = reader.string();
          break;

        case 4:
          message.rewardWeight = reader.string();
          break;

        case 5:
          message.takeRate = reader.string();
          break;

        case 6:
          message.rewardChangeRate = reader.string();
          break;

        case 7:
          message.rewardChangeInterval = Duration.decode(
            reader,
            reader.uint32()
          );
          break;

        case 8:
          message.rewardWeightRange = RewardWeightRange.decode(
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

  fromJSON(object: any): MsgCreateAllianceProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      rewardWeight: isSet(object.rewardWeight)
        ? String(object.rewardWeight)
        : "",
      takeRate: isSet(object.takeRate) ? String(object.takeRate) : "",
      rewardChangeRate: isSet(object.rewardChangeRate)
        ? String(object.rewardChangeRate)
        : "",
      rewardChangeInterval: isSet(object.rewardChangeInterval)
        ? Duration.fromJSON(object.rewardChangeInterval)
        : undefined,
      rewardWeightRange: isSet(object.rewardWeightRange)
        ? RewardWeightRange.fromJSON(object.rewardWeightRange)
        : undefined,
    };
  },

  toJSON(message: MsgCreateAllianceProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    message.denom !== undefined && (obj.denom = message.denom);
    message.rewardWeight !== undefined &&
      (obj.rewardWeight = message.rewardWeight);
    message.takeRate !== undefined && (obj.takeRate = message.takeRate);
    message.rewardChangeRate !== undefined &&
      (obj.rewardChangeRate = message.rewardChangeRate);
    message.rewardChangeInterval !== undefined &&
      (obj.rewardChangeInterval = message.rewardChangeInterval
        ? Duration.toJSON(message.rewardChangeInterval)
        : undefined);
    message.rewardWeightRange !== undefined &&
      (obj.rewardWeightRange = message.rewardWeightRange
        ? RewardWeightRange.toJSON(message.rewardWeightRange)
        : undefined);
    return obj;
  },

  fromPartial(
    object: Partial<MsgCreateAllianceProposal>
  ): MsgCreateAllianceProposal {
    const message = createBaseMsgCreateAllianceProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.denom = object.denom ?? "";
    message.rewardWeight = object.rewardWeight ?? "";
    message.takeRate = object.takeRate ?? "";
    message.rewardChangeRate = object.rewardChangeRate ?? "";
    message.rewardChangeInterval =
      object.rewardChangeInterval !== undefined &&
      object.rewardChangeInterval !== null
        ? Duration.fromPartial(object.rewardChangeInterval)
        : undefined;
    message.rewardWeightRange =
      object.rewardWeightRange !== undefined &&
      object.rewardWeightRange !== null
        ? RewardWeightRange.fromPartial(object.rewardWeightRange)
        : undefined;
    return message;
  },
};

function createBaseMsgUpdateAllianceProposal(): MsgUpdateAllianceProposal {
  return {
    title: "",
    description: "",
    denom: "",
    rewardWeight: "",
    takeRate: "",
    rewardChangeRate: "",
    rewardChangeInterval: undefined,
  };
}

export const MsgUpdateAllianceProposal = {
  encode(
    message: MsgUpdateAllianceProposal,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }

    if (message.rewardWeight !== "") {
      writer.uint32(34).string(message.rewardWeight);
    }

    if (message.takeRate !== "") {
      writer.uint32(42).string(message.takeRate);
    }

    if (message.rewardChangeRate !== "") {
      writer.uint32(50).string(message.rewardChangeRate);
    }

    if (message.rewardChangeInterval !== undefined) {
      Duration.encode(
        message.rewardChangeInterval,
        writer.uint32(58).fork()
      ).ldelim();
    }

    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdateAllianceProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateAllianceProposal();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        case 3:
          message.denom = reader.string();
          break;

        case 4:
          message.rewardWeight = reader.string();
          break;

        case 5:
          message.takeRate = reader.string();
          break;

        case 6:
          message.rewardChangeRate = reader.string();
          break;

        case 7:
          message.rewardChangeInterval = Duration.decode(
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

  fromJSON(object: any): MsgUpdateAllianceProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      rewardWeight: isSet(object.rewardWeight)
        ? String(object.rewardWeight)
        : "",
      takeRate: isSet(object.takeRate) ? String(object.takeRate) : "",
      rewardChangeRate: isSet(object.rewardChangeRate)
        ? String(object.rewardChangeRate)
        : "",
      rewardChangeInterval: isSet(object.rewardChangeInterval)
        ? Duration.fromJSON(object.rewardChangeInterval)
        : undefined,
    };
  },

  toJSON(message: MsgUpdateAllianceProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    message.denom !== undefined && (obj.denom = message.denom);
    message.rewardWeight !== undefined &&
      (obj.rewardWeight = message.rewardWeight);
    message.takeRate !== undefined && (obj.takeRate = message.takeRate);
    message.rewardChangeRate !== undefined &&
      (obj.rewardChangeRate = message.rewardChangeRate);
    message.rewardChangeInterval !== undefined &&
      (obj.rewardChangeInterval = message.rewardChangeInterval
        ? Duration.toJSON(message.rewardChangeInterval)
        : undefined);
    return obj;
  },

  fromPartial(
    object: Partial<MsgUpdateAllianceProposal>
  ): MsgUpdateAllianceProposal {
    const message = createBaseMsgUpdateAllianceProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.denom = object.denom ?? "";
    message.rewardWeight = object.rewardWeight ?? "";
    message.takeRate = object.takeRate ?? "";
    message.rewardChangeRate = object.rewardChangeRate ?? "";
    message.rewardChangeInterval =
      object.rewardChangeInterval !== undefined &&
      object.rewardChangeInterval !== null
        ? Duration.fromPartial(object.rewardChangeInterval)
        : undefined;
    return message;
  },
};

function createBaseMsgDeleteAllianceProposal(): MsgDeleteAllianceProposal {
  return {
    title: "",
    description: "",
    denom: "",
  };
}

export const MsgDeleteAllianceProposal = {
  encode(
    message: MsgDeleteAllianceProposal,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }

    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgDeleteAllianceProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteAllianceProposal();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        case 3:
          message.denom = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgDeleteAllianceProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
    };
  },

  toJSON(message: MsgDeleteAllianceProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(
    object: Partial<MsgDeleteAllianceProposal>
  ): MsgDeleteAllianceProposal {
    const message = createBaseMsgDeleteAllianceProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
};
