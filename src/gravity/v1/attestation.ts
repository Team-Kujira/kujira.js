/* eslint-disable */
import { BinaryReader, BinaryWriter } from "cosmjs-types/binary";
import { Any } from "cosmjs-types/google/protobuf/any";
import { isSet } from "./helpers";
export const protobufPackage = "gravity.v1";
/**
 * ClaimType is the cosmos type of an event from the counterpart chain that can
 * be handled
 */

export enum ClaimType {
  /** CLAIM_TYPE_UNSPECIFIED - An unspecified claim type */
  CLAIM_TYPE_UNSPECIFIED = 0,

  /** CLAIM_TYPE_SEND_TO_COSMOS - A claim for a SendToCosmos transaction */
  CLAIM_TYPE_SEND_TO_COSMOS = 1,

  /** CLAIM_TYPE_BATCH_SEND_TO_ETH - A claim for when batches are relayed */
  CLAIM_TYPE_BATCH_SEND_TO_ETH = 2,

  /** CLAIM_TYPE_ERC20_DEPLOYED - A claim for when an erc20 contract has been deployed */
  CLAIM_TYPE_ERC20_DEPLOYED = 3,

  /** CLAIM_TYPE_LOGIC_CALL_EXECUTED - A claim for when a logic call has been executed */
  CLAIM_TYPE_LOGIC_CALL_EXECUTED = 4,

  /** CLAIM_TYPE_VALSET_UPDATED - A claim for when a valset update has happened */
  CLAIM_TYPE_VALSET_UPDATED = 5,
  UNRECOGNIZED = -1,
}
export function claimTypeFromJSON(object: any): ClaimType {
  switch (object) {
    case 0:
    case "CLAIM_TYPE_UNSPECIFIED":
      return ClaimType.CLAIM_TYPE_UNSPECIFIED;

    case 1:
    case "CLAIM_TYPE_SEND_TO_COSMOS":
      return ClaimType.CLAIM_TYPE_SEND_TO_COSMOS;

    case 2:
    case "CLAIM_TYPE_BATCH_SEND_TO_ETH":
      return ClaimType.CLAIM_TYPE_BATCH_SEND_TO_ETH;

    case 3:
    case "CLAIM_TYPE_ERC20_DEPLOYED":
      return ClaimType.CLAIM_TYPE_ERC20_DEPLOYED;

    case 4:
    case "CLAIM_TYPE_LOGIC_CALL_EXECUTED":
      return ClaimType.CLAIM_TYPE_LOGIC_CALL_EXECUTED;

    case 5:
    case "CLAIM_TYPE_VALSET_UPDATED":
      return ClaimType.CLAIM_TYPE_VALSET_UPDATED;

    case -1:
    case "UNRECOGNIZED":
    default:
      return ClaimType.UNRECOGNIZED;
  }
}
export function claimTypeToJSON(object: ClaimType): string {
  switch (object) {
    case ClaimType.CLAIM_TYPE_UNSPECIFIED:
      return "CLAIM_TYPE_UNSPECIFIED";

    case ClaimType.CLAIM_TYPE_SEND_TO_COSMOS:
      return "CLAIM_TYPE_SEND_TO_COSMOS";

    case ClaimType.CLAIM_TYPE_BATCH_SEND_TO_ETH:
      return "CLAIM_TYPE_BATCH_SEND_TO_ETH";

    case ClaimType.CLAIM_TYPE_ERC20_DEPLOYED:
      return "CLAIM_TYPE_ERC20_DEPLOYED";

    case ClaimType.CLAIM_TYPE_LOGIC_CALL_EXECUTED:
      return "CLAIM_TYPE_LOGIC_CALL_EXECUTED";

    case ClaimType.CLAIM_TYPE_VALSET_UPDATED:
      return "CLAIM_TYPE_VALSET_UPDATED";

    case ClaimType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * Attestation is an aggregate of `claims` that eventually becomes `observed` by
 * all orchestrators
 * EVENT_NONCE:
 * EventNonce a nonce provided by the gravity contract that is unique per event fired
 * These event nonces must be relayed in order. This is a correctness issue,
 * if relaying out of order transaction replay attacks become possible
 * OBSERVED:
 * Observed indicates that >67% of validators have attested to the event,
 * and that the event should be executed by the gravity state machine
 *
 * The actual content of the claims is passed in with the transaction making the claim
 * and then passed through the call stack alongside the attestation while it is processed
 * the key in which the attestation is stored is keyed on the exact details of the claim
 * but there is no reason to store those exact details becuause the next message sender
 * will kindly provide you with them.
 */

export interface Attestation {
  observed: boolean;
  votes: string[];
  height: bigint;
  claim?: Any;
}
/**
 * ERC20Token unique identifier for an Ethereum ERC20 token.
 * CONTRACT:
 * The contract address on ETH of the token, this could be a Cosmos
 * originated token, if so it will be the ERC20 address of the representation
 * (note: developers should look up the token symbol using the address on ETH to display for UI)
 */

export interface ERC20Token {
  contract: string;
  amount: string;
}
export interface EventObservation {
  attestationType: string;
  bridgeContract: string;
  bridgeChainId: string;
  attestationId: string;
  nonce: string;
}
export interface EventInvalidSendToCosmosReceiver {
  amount: string;
  nonce: string;
  token: string;
  sender: string;
}
export interface EventSendToCosmos {
  amount: string;
  nonce: string;
  token: string;
}
export interface EventSendToCosmosLocal {
  nonce: string;
  receiver: string;
  token: string;
  amount: string;
}
export interface EventSendToCosmosPendingIbcAutoForward {
  nonce: string;
  receiver: string;
  token: string;
  amount: string;
  channel: string;
}
export interface EventSendToCosmosExecutedIbcAutoForward {
  nonce: string;
  receiver: string;
  token: string;
  amount: string;
  channel: string;
  timeoutTime: string;
  timeoutHeight: string;
}

function createBaseAttestation(): Attestation {
  return {
    observed: false,
    votes: [],
    height: BigInt(0),
    claim: undefined,
  };
}

export const Attestation = {
  encode(
    message: Attestation,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    if (message.observed === true) {
      writer.uint32(8).bool(message.observed);
    }

    for (const v of message.votes) {
      writer.uint32(18).string(v!);
    }

    if (message.height != BigInt(0)) {
      writer.uint32(24).uint64(message.height);
    }

    if (message.claim !== undefined) {
      Any.encode(message.claim, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Attestation {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttestation();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.observed = reader.bool();
          break;

        case 2:
          message.votes.push(reader.string());
          break;

        case 3:
          message.height = reader.uint64();
          break;

        case 4:
          message.claim = Any.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Attestation {
    return {
      observed: isSet(object.observed) ? Boolean(object.observed) : false,
      votes: Array.isArray(object?.votes)
        ? object.votes.map((e: any) => String(e))
        : [],
      height: isSet(object.height) ? BigInt(object.height) : BigInt(0),
      claim: isSet(object.claim) ? Any.fromJSON(object.claim) : undefined,
    };
  },

  toJSON(message: Attestation): unknown {
    const obj: any = {};
    message.observed !== undefined && (obj.observed = message.observed);

    if (message.votes) {
      obj.votes = message.votes.map((e) => e);
    } else {
      obj.votes = [];
    }

    message.height !== undefined &&
      (obj.height = (message.height || BigInt(0)).toString());
    message.claim !== undefined &&
      (obj.claim = message.claim ? Any.toJSON(message.claim) : undefined);
    return obj;
  },

  fromPartial(object: Partial<Attestation>): Attestation {
    const message = createBaseAttestation();
    message.observed = object.observed ?? false;
    message.votes = object.votes?.map((e) => e) || [];
    message.height =
      object.height !== undefined && object.height !== null
        ? BigInt(object.height)
        : BigInt(0);
    message.claim =
      object.claim !== undefined && object.claim !== null
        ? Any.fromPartial(object.claim)
        : undefined;
    return message;
  },
};

function createBaseERC20Token(): ERC20Token {
  return {
    contract: "",
    amount: "",
  };
}

export const ERC20Token = {
  encode(
    message: ERC20Token,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    if (message.contract !== "") {
      writer.uint32(10).string(message.contract);
    }

    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }

    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ERC20Token {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseERC20Token();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.contract = reader.string();
          break;

        case 2:
          message.amount = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ERC20Token {
    return {
      contract: isSet(object.contract) ? String(object.contract) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
    };
  },

  toJSON(message: ERC20Token): unknown {
    const obj: any = {};
    message.contract !== undefined && (obj.contract = message.contract);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial(object: Partial<ERC20Token>): ERC20Token {
    const message = createBaseERC20Token();
    message.contract = object.contract ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
};

function createBaseEventObservation(): EventObservation {
  return {
    attestationType: "",
    bridgeContract: "",
    bridgeChainId: "",
    attestationId: "",
    nonce: "",
  };
}

export const EventObservation = {
  encode(
    message: EventObservation,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    if (message.attestationType !== "") {
      writer.uint32(10).string(message.attestationType);
    }

    if (message.bridgeContract !== "") {
      writer.uint32(18).string(message.bridgeContract);
    }

    if (message.bridgeChainId !== "") {
      writer.uint32(26).string(message.bridgeChainId);
    }

    if (message.attestationId !== "") {
      writer.uint32(34).string(message.attestationId);
    }

    if (message.nonce !== "") {
      writer.uint32(42).string(message.nonce);
    }

    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): EventObservation {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventObservation();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.attestationType = reader.string();
          break;

        case 2:
          message.bridgeContract = reader.string();
          break;

        case 3:
          message.bridgeChainId = reader.string();
          break;

        case 4:
          message.attestationId = reader.string();
          break;

        case 5:
          message.nonce = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventObservation {
    return {
      attestationType: isSet(object.attestationType)
        ? String(object.attestationType)
        : "",
      bridgeContract: isSet(object.bridgeContract)
        ? String(object.bridgeContract)
        : "",
      bridgeChainId: isSet(object.bridgeChainId)
        ? String(object.bridgeChainId)
        : "",
      attestationId: isSet(object.attestationId)
        ? String(object.attestationId)
        : "",
      nonce: isSet(object.nonce) ? String(object.nonce) : "",
    };
  },

  toJSON(message: EventObservation): unknown {
    const obj: any = {};
    message.attestationType !== undefined &&
      (obj.attestationType = message.attestationType);
    message.bridgeContract !== undefined &&
      (obj.bridgeContract = message.bridgeContract);
    message.bridgeChainId !== undefined &&
      (obj.bridgeChainId = message.bridgeChainId);
    message.attestationId !== undefined &&
      (obj.attestationId = message.attestationId);
    message.nonce !== undefined && (obj.nonce = message.nonce);
    return obj;
  },

  fromPartial(object: Partial<EventObservation>): EventObservation {
    const message = createBaseEventObservation();
    message.attestationType = object.attestationType ?? "";
    message.bridgeContract = object.bridgeContract ?? "";
    message.bridgeChainId = object.bridgeChainId ?? "";
    message.attestationId = object.attestationId ?? "";
    message.nonce = object.nonce ?? "";
    return message;
  },
};

function createBaseEventInvalidSendToCosmosReceiver(): EventInvalidSendToCosmosReceiver {
  return {
    amount: "",
    nonce: "",
    token: "",
    sender: "",
  };
}

export const EventInvalidSendToCosmosReceiver = {
  encode(
    message: EventInvalidSendToCosmosReceiver,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    if (message.amount !== "") {
      writer.uint32(10).string(message.amount);
    }

    if (message.nonce !== "") {
      writer.uint32(18).string(message.nonce);
    }

    if (message.token !== "") {
      writer.uint32(26).string(message.token);
    }

    if (message.sender !== "") {
      writer.uint32(34).string(message.sender);
    }

    return writer;
  },

  decode(
    input: BinaryReader | Uint8Array,
    length?: number
  ): EventInvalidSendToCosmosReceiver {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventInvalidSendToCosmosReceiver();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.amount = reader.string();
          break;

        case 2:
          message.nonce = reader.string();
          break;

        case 3:
          message.token = reader.string();
          break;

        case 4:
          message.sender = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventInvalidSendToCosmosReceiver {
    return {
      amount: isSet(object.amount) ? String(object.amount) : "",
      nonce: isSet(object.nonce) ? String(object.nonce) : "",
      token: isSet(object.token) ? String(object.token) : "",
      sender: isSet(object.sender) ? String(object.sender) : "",
    };
  },

  toJSON(message: EventInvalidSendToCosmosReceiver): unknown {
    const obj: any = {};
    message.amount !== undefined && (obj.amount = message.amount);
    message.nonce !== undefined && (obj.nonce = message.nonce);
    message.token !== undefined && (obj.token = message.token);
    message.sender !== undefined && (obj.sender = message.sender);
    return obj;
  },

  fromPartial(
    object: Partial<EventInvalidSendToCosmosReceiver>
  ): EventInvalidSendToCosmosReceiver {
    const message = createBaseEventInvalidSendToCosmosReceiver();
    message.amount = object.amount ?? "";
    message.nonce = object.nonce ?? "";
    message.token = object.token ?? "";
    message.sender = object.sender ?? "";
    return message;
  },
};

function createBaseEventSendToCosmos(): EventSendToCosmos {
  return {
    amount: "",
    nonce: "",
    token: "",
  };
}

export const EventSendToCosmos = {
  encode(
    message: EventSendToCosmos,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    if (message.amount !== "") {
      writer.uint32(10).string(message.amount);
    }

    if (message.nonce !== "") {
      writer.uint32(18).string(message.nonce);
    }

    if (message.token !== "") {
      writer.uint32(26).string(message.token);
    }

    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): EventSendToCosmos {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSendToCosmos();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.amount = reader.string();
          break;

        case 2:
          message.nonce = reader.string();
          break;

        case 3:
          message.token = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventSendToCosmos {
    return {
      amount: isSet(object.amount) ? String(object.amount) : "",
      nonce: isSet(object.nonce) ? String(object.nonce) : "",
      token: isSet(object.token) ? String(object.token) : "",
    };
  },

  toJSON(message: EventSendToCosmos): unknown {
    const obj: any = {};
    message.amount !== undefined && (obj.amount = message.amount);
    message.nonce !== undefined && (obj.nonce = message.nonce);
    message.token !== undefined && (obj.token = message.token);
    return obj;
  },

  fromPartial(object: Partial<EventSendToCosmos>): EventSendToCosmos {
    const message = createBaseEventSendToCosmos();
    message.amount = object.amount ?? "";
    message.nonce = object.nonce ?? "";
    message.token = object.token ?? "";
    return message;
  },
};

function createBaseEventSendToCosmosLocal(): EventSendToCosmosLocal {
  return {
    nonce: "",
    receiver: "",
    token: "",
    amount: "",
  };
}

export const EventSendToCosmosLocal = {
  encode(
    message: EventSendToCosmosLocal,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    if (message.nonce !== "") {
      writer.uint32(10).string(message.nonce);
    }

    if (message.receiver !== "") {
      writer.uint32(18).string(message.receiver);
    }

    if (message.token !== "") {
      writer.uint32(26).string(message.token);
    }

    if (message.amount !== "") {
      writer.uint32(34).string(message.amount);
    }

    return writer;
  },

  decode(
    input: BinaryReader | Uint8Array,
    length?: number
  ): EventSendToCosmosLocal {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSendToCosmosLocal();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.nonce = reader.string();
          break;

        case 2:
          message.receiver = reader.string();
          break;

        case 3:
          message.token = reader.string();
          break;

        case 4:
          message.amount = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventSendToCosmosLocal {
    return {
      nonce: isSet(object.nonce) ? String(object.nonce) : "",
      receiver: isSet(object.receiver) ? String(object.receiver) : "",
      token: isSet(object.token) ? String(object.token) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
    };
  },

  toJSON(message: EventSendToCosmosLocal): unknown {
    const obj: any = {};
    message.nonce !== undefined && (obj.nonce = message.nonce);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    message.token !== undefined && (obj.token = message.token);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial(object: Partial<EventSendToCosmosLocal>): EventSendToCosmosLocal {
    const message = createBaseEventSendToCosmosLocal();
    message.nonce = object.nonce ?? "";
    message.receiver = object.receiver ?? "";
    message.token = object.token ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
};

function createBaseEventSendToCosmosPendingIbcAutoForward(): EventSendToCosmosPendingIbcAutoForward {
  return {
    nonce: "",
    receiver: "",
    token: "",
    amount: "",
    channel: "",
  };
}

export const EventSendToCosmosPendingIbcAutoForward = {
  encode(
    message: EventSendToCosmosPendingIbcAutoForward,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    if (message.nonce !== "") {
      writer.uint32(10).string(message.nonce);
    }

    if (message.receiver !== "") {
      writer.uint32(18).string(message.receiver);
    }

    if (message.token !== "") {
      writer.uint32(26).string(message.token);
    }

    if (message.amount !== "") {
      writer.uint32(34).string(message.amount);
    }

    if (message.channel !== "") {
      writer.uint32(42).string(message.channel);
    }

    return writer;
  },

  decode(
    input: BinaryReader | Uint8Array,
    length?: number
  ): EventSendToCosmosPendingIbcAutoForward {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSendToCosmosPendingIbcAutoForward();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.nonce = reader.string();
          break;

        case 2:
          message.receiver = reader.string();
          break;

        case 3:
          message.token = reader.string();
          break;

        case 4:
          message.amount = reader.string();
          break;

        case 5:
          message.channel = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventSendToCosmosPendingIbcAutoForward {
    return {
      nonce: isSet(object.nonce) ? String(object.nonce) : "",
      receiver: isSet(object.receiver) ? String(object.receiver) : "",
      token: isSet(object.token) ? String(object.token) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      channel: isSet(object.channel) ? String(object.channel) : "",
    };
  },

  toJSON(message: EventSendToCosmosPendingIbcAutoForward): unknown {
    const obj: any = {};
    message.nonce !== undefined && (obj.nonce = message.nonce);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    message.token !== undefined && (obj.token = message.token);
    message.amount !== undefined && (obj.amount = message.amount);
    message.channel !== undefined && (obj.channel = message.channel);
    return obj;
  },

  fromPartial(
    object: Partial<EventSendToCosmosPendingIbcAutoForward>
  ): EventSendToCosmosPendingIbcAutoForward {
    const message = createBaseEventSendToCosmosPendingIbcAutoForward();
    message.nonce = object.nonce ?? "";
    message.receiver = object.receiver ?? "";
    message.token = object.token ?? "";
    message.amount = object.amount ?? "";
    message.channel = object.channel ?? "";
    return message;
  },
};

function createBaseEventSendToCosmosExecutedIbcAutoForward(): EventSendToCosmosExecutedIbcAutoForward {
  return {
    nonce: "",
    receiver: "",
    token: "",
    amount: "",
    channel: "",
    timeoutTime: "",
    timeoutHeight: "",
  };
}

export const EventSendToCosmosExecutedIbcAutoForward = {
  encode(
    message: EventSendToCosmosExecutedIbcAutoForward,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    if (message.nonce !== "") {
      writer.uint32(10).string(message.nonce);
    }

    if (message.receiver !== "") {
      writer.uint32(18).string(message.receiver);
    }

    if (message.token !== "") {
      writer.uint32(26).string(message.token);
    }

    if (message.amount !== "") {
      writer.uint32(34).string(message.amount);
    }

    if (message.channel !== "") {
      writer.uint32(42).string(message.channel);
    }

    if (message.timeoutTime !== "") {
      writer.uint32(50).string(message.timeoutTime);
    }

    if (message.timeoutHeight !== "") {
      writer.uint32(58).string(message.timeoutHeight);
    }

    return writer;
  },

  decode(
    input: BinaryReader | Uint8Array,
    length?: number
  ): EventSendToCosmosExecutedIbcAutoForward {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSendToCosmosExecutedIbcAutoForward();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.nonce = reader.string();
          break;

        case 2:
          message.receiver = reader.string();
          break;

        case 3:
          message.token = reader.string();
          break;

        case 4:
          message.amount = reader.string();
          break;

        case 5:
          message.channel = reader.string();
          break;

        case 6:
          message.timeoutTime = reader.string();
          break;

        case 7:
          message.timeoutHeight = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventSendToCosmosExecutedIbcAutoForward {
    return {
      nonce: isSet(object.nonce) ? String(object.nonce) : "",
      receiver: isSet(object.receiver) ? String(object.receiver) : "",
      token: isSet(object.token) ? String(object.token) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      channel: isSet(object.channel) ? String(object.channel) : "",
      timeoutTime: isSet(object.timeoutTime) ? String(object.timeoutTime) : "",
      timeoutHeight: isSet(object.timeoutHeight)
        ? String(object.timeoutHeight)
        : "",
    };
  },

  toJSON(message: EventSendToCosmosExecutedIbcAutoForward): unknown {
    const obj: any = {};
    message.nonce !== undefined && (obj.nonce = message.nonce);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    message.token !== undefined && (obj.token = message.token);
    message.amount !== undefined && (obj.amount = message.amount);
    message.channel !== undefined && (obj.channel = message.channel);
    message.timeoutTime !== undefined &&
      (obj.timeoutTime = message.timeoutTime);
    message.timeoutHeight !== undefined &&
      (obj.timeoutHeight = message.timeoutHeight);
    return obj;
  },

  fromPartial(
    object: Partial<EventSendToCosmosExecutedIbcAutoForward>
  ): EventSendToCosmosExecutedIbcAutoForward {
    const message = createBaseEventSendToCosmosExecutedIbcAutoForward();
    message.nonce = object.nonce ?? "";
    message.receiver = object.receiver ?? "";
    message.token = object.token ?? "";
    message.amount = object.amount ?? "";
    message.channel = object.channel ?? "";
    message.timeoutTime = object.timeoutTime ?? "";
    message.timeoutHeight = object.timeoutHeight ?? "";
    return message;
  },
};
