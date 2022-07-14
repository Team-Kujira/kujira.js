/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { AccessTuple, Log } from "../../../ethermint/evm/v1/evm";
import {
  longToNumber,
  bytesFromBase64,
  base64FromBytes,
  Rpc,
  DeepPartial,
} from "../../../../../../../types";
import { Any } from "../../../../../../../types/google/protobuf/any";

export const protobufPackage = "ethermint.evm.v1";

/** MsgEthereumTx encapsulates an Ethereum transaction as an SDK message. */
export interface MsgEthereumTx {
  /** inner transaction data */
  data: Any | undefined;
  /** encoded storage size of the transaction */
  size: number;
  /** transaction hash in hex format */
  hash: string;
  /**
   * ethereum signer address in hex format. This address value is checked
   * against the address derived from the signature (V, R, S) using the
   * secp256k1 elliptic curve
   */
  from: string;
}

/**
 * LegacyTx is the transaction data of regular Ethereum transactions.
 * NOTE: All non-protected transactions (i.e non EIP155 signed) will fail if the
 * AllowUnprotectedTxs parameter is disabled.
 */
export interface LegacyTx {
  /** nonce corresponds to the account nonce (transaction sequence). */
  nonce: number;
  /** gas price defines the value for each gas unit */
  gas_price: string;
  /** gas defines the gas limit defined for the transaction. */
  gas: number;
  /** hex formatted address of the recipient */
  to: string;
  /** value defines the unsigned integer value of the transaction amount. */
  value: string;
  /** input defines the data payload bytes of the transaction. */
  data: Uint8Array;
  /** v defines the signature value */
  v: Uint8Array;
  /** r defines the signature value */
  r: Uint8Array;
  /** s define the signature value */
  s: Uint8Array;
}

/** AccessListTx is the data of EIP-2930 access list transactions. */
export interface AccessListTx {
  /** destination EVM chain ID */
  chain_id: string;
  /** nonce corresponds to the account nonce (transaction sequence). */
  nonce: number;
  /** gas price defines the value for each gas unit */
  gas_price: string;
  /** gas defines the gas limit defined for the transaction. */
  gas: number;
  /** hex formatted address of the recipient */
  to: string;
  /** value defines the unsigned integer value of the transaction amount. */
  value: string;
  /** input defines the data payload bytes of the transaction. */
  data: Uint8Array;
  accesses: AccessTuple[];
  /** v defines the signature value */
  v: Uint8Array;
  /** r defines the signature value */
  r: Uint8Array;
  /** s define the signature value */
  s: Uint8Array;
}

/** DynamicFeeTx is the data of EIP-1559 dinamic fee transactions. */
export interface DynamicFeeTx {
  /** destination EVM chain ID */
  chain_id: string;
  /** nonce corresponds to the account nonce (transaction sequence). */
  nonce: number;
  /** gas tip cap defines the max value for the gas tip */
  gas_tip_cap: string;
  /** gas fee cap defines the max value for the gas fee */
  gas_fee_cap: string;
  /** gas defines the gas limit defined for the transaction. */
  gas: number;
  /** hex formatted address of the recipient */
  to: string;
  /** value defines the the transaction amount. */
  value: string;
  /** input defines the data payload bytes of the transaction. */
  data: Uint8Array;
  accesses: AccessTuple[];
  /** v defines the signature value */
  v: Uint8Array;
  /** r defines the signature value */
  r: Uint8Array;
  /** s define the signature value */
  s: Uint8Array;
}

export interface ExtensionOptionsEthereumTx {}

/** MsgEthereumTxResponse defines the Msg/EthereumTx response type. */
export interface MsgEthereumTxResponse {
  /**
   * ethereum transaction hash in hex format. This hash differs from the
   * Tendermint sha256 hash of the transaction bytes. See
   * https://github.com/tendermint/tendermint/issues/6539 for reference
   */
  hash: string;
  /**
   * logs contains the transaction hash and the proto-compatible ethereum
   * logs.
   */
  logs: Log[];
  /**
   * returned data from evm function (result or data supplied with revert
   * opcode)
   */
  ret: Uint8Array;
  /** vm error is the error returned by vm execution */
  vm_error: string;
  /** gas consumed by the transaction */
  gas_used: number;
}

const baseMsgEthereumTx: object = { size: 0, hash: "", from: "" };

export const MsgEthereumTx = {
  encode(message: MsgEthereumTx, writer: Writer = Writer.create()): Writer {
    if (message.data !== undefined) {
      Any.encode(message.data, writer.uint32(10).fork()).ldelim();
    }
    if (message.size !== 0) {
      writer.uint32(17).double(message.size);
    }
    if (message.hash !== "") {
      writer.uint32(26).string(message.hash);
    }
    if (message.from !== "") {
      writer.uint32(34).string(message.from);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgEthereumTx {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgEthereumTx } as MsgEthereumTx;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = Any.decode(reader, reader.uint32());
          break;
        case 2:
          message.size = reader.double();
          break;
        case 3:
          message.hash = reader.string();
          break;
        case 4:
          message.from = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgEthereumTx {
    const message = { ...baseMsgEthereumTx } as MsgEthereumTx;
    if (object.data !== undefined && object.data !== null) {
      message.data = Any.fromJSON(object.data);
    } else {
      message.data = undefined;
    }
    if (object.size !== undefined && object.size !== null) {
      message.size = Number(object.size);
    } else {
      message.size = 0;
    }
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = String(object.hash);
    } else {
      message.hash = "";
    }
    if (object.from !== undefined && object.from !== null) {
      message.from = String(object.from);
    } else {
      message.from = "";
    }
    return message;
  },

  toJSON(message: MsgEthereumTx): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data ? Any.toJSON(message.data) : undefined);
    message.size !== undefined && (obj.size = message.size);
    message.hash !== undefined && (obj.hash = message.hash);
    message.from !== undefined && (obj.from = message.from);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgEthereumTx>): MsgEthereumTx {
    const message = { ...baseMsgEthereumTx } as MsgEthereumTx;
    if (object.data !== undefined && object.data !== null) {
      message.data = Any.fromPartial(object.data);
    } else {
      message.data = undefined;
    }
    if (object.size !== undefined && object.size !== null) {
      message.size = object.size;
    } else {
      message.size = 0;
    }
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = object.hash;
    } else {
      message.hash = "";
    }
    if (object.from !== undefined && object.from !== null) {
      message.from = object.from;
    } else {
      message.from = "";
    }
    return message;
  },
};

const baseLegacyTx: object = {
  nonce: 0,
  gas_price: "",
  gas: 0,
  to: "",
  value: "",
};

export const LegacyTx = {
  encode(message: LegacyTx, writer: Writer = Writer.create()): Writer {
    if (message.nonce !== 0) {
      writer.uint32(8).uint64(message.nonce);
    }
    if (message.gas_price !== "") {
      writer.uint32(18).string(message.gas_price);
    }
    if (message.gas !== 0) {
      writer.uint32(24).uint64(message.gas);
    }
    if (message.to !== "") {
      writer.uint32(34).string(message.to);
    }
    if (message.value !== "") {
      writer.uint32(42).string(message.value);
    }
    if (message.data.length !== 0) {
      writer.uint32(50).bytes(message.data);
    }
    if (message.v.length !== 0) {
      writer.uint32(58).bytes(message.v);
    }
    if (message.r.length !== 0) {
      writer.uint32(66).bytes(message.r);
    }
    if (message.s.length !== 0) {
      writer.uint32(74).bytes(message.s);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): LegacyTx {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseLegacyTx } as LegacyTx;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nonce = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.gas_price = reader.string();
          break;
        case 3:
          message.gas = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.to = reader.string();
          break;
        case 5:
          message.value = reader.string();
          break;
        case 6:
          message.data = reader.bytes();
          break;
        case 7:
          message.v = reader.bytes();
          break;
        case 8:
          message.r = reader.bytes();
          break;
        case 9:
          message.s = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LegacyTx {
    const message = { ...baseLegacyTx } as LegacyTx;
    if (object.nonce !== undefined && object.nonce !== null) {
      message.nonce = Number(object.nonce);
    } else {
      message.nonce = 0;
    }
    if (object.gas_price !== undefined && object.gas_price !== null) {
      message.gas_price = String(object.gas_price);
    } else {
      message.gas_price = "";
    }
    if (object.gas !== undefined && object.gas !== null) {
      message.gas = Number(object.gas);
    } else {
      message.gas = 0;
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = String(object.to);
    } else {
      message.to = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = String(object.value);
    } else {
      message.value = "";
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    if (object.v !== undefined && object.v !== null) {
      message.v = bytesFromBase64(object.v);
    }
    if (object.r !== undefined && object.r !== null) {
      message.r = bytesFromBase64(object.r);
    }
    if (object.s !== undefined && object.s !== null) {
      message.s = bytesFromBase64(object.s);
    }
    return message;
  },

  toJSON(message: LegacyTx): unknown {
    const obj: any = {};
    message.nonce !== undefined && (obj.nonce = message.nonce);
    message.gas_price !== undefined && (obj.gas_price = message.gas_price);
    message.gas !== undefined && (obj.gas = message.gas);
    message.to !== undefined && (obj.to = message.to);
    message.value !== undefined && (obj.value = message.value);
    message.data !== undefined &&
      (obj.data = base64FromBytes(
        message.data !== undefined ? message.data : new Uint8Array()
      ));
    message.v !== undefined &&
      (obj.v = base64FromBytes(
        message.v !== undefined ? message.v : new Uint8Array()
      ));
    message.r !== undefined &&
      (obj.r = base64FromBytes(
        message.r !== undefined ? message.r : new Uint8Array()
      ));
    message.s !== undefined &&
      (obj.s = base64FromBytes(
        message.s !== undefined ? message.s : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(object: DeepPartial<LegacyTx>): LegacyTx {
    const message = { ...baseLegacyTx } as LegacyTx;
    if (object.nonce !== undefined && object.nonce !== null) {
      message.nonce = object.nonce;
    } else {
      message.nonce = 0;
    }
    if (object.gas_price !== undefined && object.gas_price !== null) {
      message.gas_price = object.gas_price;
    } else {
      message.gas_price = "";
    }
    if (object.gas !== undefined && object.gas !== null) {
      message.gas = object.gas;
    } else {
      message.gas = 0;
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = object.to;
    } else {
      message.to = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = "";
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = object.data;
    } else {
      message.data = new Uint8Array();
    }
    if (object.v !== undefined && object.v !== null) {
      message.v = object.v;
    } else {
      message.v = new Uint8Array();
    }
    if (object.r !== undefined && object.r !== null) {
      message.r = object.r;
    } else {
      message.r = new Uint8Array();
    }
    if (object.s !== undefined && object.s !== null) {
      message.s = object.s;
    } else {
      message.s = new Uint8Array();
    }
    return message;
  },
};

const baseAccessListTx: object = {
  chain_id: "",
  nonce: 0,
  gas_price: "",
  gas: 0,
  to: "",
  value: "",
};

export const AccessListTx = {
  encode(message: AccessListTx, writer: Writer = Writer.create()): Writer {
    if (message.chain_id !== "") {
      writer.uint32(10).string(message.chain_id);
    }
    if (message.nonce !== 0) {
      writer.uint32(16).uint64(message.nonce);
    }
    if (message.gas_price !== "") {
      writer.uint32(26).string(message.gas_price);
    }
    if (message.gas !== 0) {
      writer.uint32(32).uint64(message.gas);
    }
    if (message.to !== "") {
      writer.uint32(42).string(message.to);
    }
    if (message.value !== "") {
      writer.uint32(50).string(message.value);
    }
    if (message.data.length !== 0) {
      writer.uint32(58).bytes(message.data);
    }
    for (const v of message.accesses) {
      AccessTuple.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.v.length !== 0) {
      writer.uint32(74).bytes(message.v);
    }
    if (message.r.length !== 0) {
      writer.uint32(82).bytes(message.r);
    }
    if (message.s.length !== 0) {
      writer.uint32(90).bytes(message.s);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): AccessListTx {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAccessListTx } as AccessListTx;
    message.accesses = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chain_id = reader.string();
          break;
        case 2:
          message.nonce = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.gas_price = reader.string();
          break;
        case 4:
          message.gas = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.to = reader.string();
          break;
        case 6:
          message.value = reader.string();
          break;
        case 7:
          message.data = reader.bytes();
          break;
        case 8:
          message.accesses.push(AccessTuple.decode(reader, reader.uint32()));
          break;
        case 9:
          message.v = reader.bytes();
          break;
        case 10:
          message.r = reader.bytes();
          break;
        case 11:
          message.s = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AccessListTx {
    const message = { ...baseAccessListTx } as AccessListTx;
    message.accesses = [];
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chain_id = String(object.chain_id);
    } else {
      message.chain_id = "";
    }
    if (object.nonce !== undefined && object.nonce !== null) {
      message.nonce = Number(object.nonce);
    } else {
      message.nonce = 0;
    }
    if (object.gas_price !== undefined && object.gas_price !== null) {
      message.gas_price = String(object.gas_price);
    } else {
      message.gas_price = "";
    }
    if (object.gas !== undefined && object.gas !== null) {
      message.gas = Number(object.gas);
    } else {
      message.gas = 0;
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = String(object.to);
    } else {
      message.to = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = String(object.value);
    } else {
      message.value = "";
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    if (object.accesses !== undefined && object.accesses !== null) {
      for (const e of object.accesses) {
        message.accesses.push(AccessTuple.fromJSON(e));
      }
    }
    if (object.v !== undefined && object.v !== null) {
      message.v = bytesFromBase64(object.v);
    }
    if (object.r !== undefined && object.r !== null) {
      message.r = bytesFromBase64(object.r);
    }
    if (object.s !== undefined && object.s !== null) {
      message.s = bytesFromBase64(object.s);
    }
    return message;
  },

  toJSON(message: AccessListTx): unknown {
    const obj: any = {};
    message.chain_id !== undefined && (obj.chain_id = message.chain_id);
    message.nonce !== undefined && (obj.nonce = message.nonce);
    message.gas_price !== undefined && (obj.gas_price = message.gas_price);
    message.gas !== undefined && (obj.gas = message.gas);
    message.to !== undefined && (obj.to = message.to);
    message.value !== undefined && (obj.value = message.value);
    message.data !== undefined &&
      (obj.data = base64FromBytes(
        message.data !== undefined ? message.data : new Uint8Array()
      ));
    if (message.accesses) {
      obj.accesses = message.accesses.map((e) =>
        e ? AccessTuple.toJSON(e) : undefined
      );
    } else {
      obj.accesses = [];
    }
    message.v !== undefined &&
      (obj.v = base64FromBytes(
        message.v !== undefined ? message.v : new Uint8Array()
      ));
    message.r !== undefined &&
      (obj.r = base64FromBytes(
        message.r !== undefined ? message.r : new Uint8Array()
      ));
    message.s !== undefined &&
      (obj.s = base64FromBytes(
        message.s !== undefined ? message.s : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(object: DeepPartial<AccessListTx>): AccessListTx {
    const message = { ...baseAccessListTx } as AccessListTx;
    message.accesses = [];
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chain_id = object.chain_id;
    } else {
      message.chain_id = "";
    }
    if (object.nonce !== undefined && object.nonce !== null) {
      message.nonce = object.nonce;
    } else {
      message.nonce = 0;
    }
    if (object.gas_price !== undefined && object.gas_price !== null) {
      message.gas_price = object.gas_price;
    } else {
      message.gas_price = "";
    }
    if (object.gas !== undefined && object.gas !== null) {
      message.gas = object.gas;
    } else {
      message.gas = 0;
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = object.to;
    } else {
      message.to = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = "";
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = object.data;
    } else {
      message.data = new Uint8Array();
    }
    if (object.accesses !== undefined && object.accesses !== null) {
      for (const e of object.accesses) {
        message.accesses.push(AccessTuple.fromPartial(e));
      }
    }
    if (object.v !== undefined && object.v !== null) {
      message.v = object.v;
    } else {
      message.v = new Uint8Array();
    }
    if (object.r !== undefined && object.r !== null) {
      message.r = object.r;
    } else {
      message.r = new Uint8Array();
    }
    if (object.s !== undefined && object.s !== null) {
      message.s = object.s;
    } else {
      message.s = new Uint8Array();
    }
    return message;
  },
};

const baseDynamicFeeTx: object = {
  chain_id: "",
  nonce: 0,
  gas_tip_cap: "",
  gas_fee_cap: "",
  gas: 0,
  to: "",
  value: "",
};

export const DynamicFeeTx = {
  encode(message: DynamicFeeTx, writer: Writer = Writer.create()): Writer {
    if (message.chain_id !== "") {
      writer.uint32(10).string(message.chain_id);
    }
    if (message.nonce !== 0) {
      writer.uint32(16).uint64(message.nonce);
    }
    if (message.gas_tip_cap !== "") {
      writer.uint32(26).string(message.gas_tip_cap);
    }
    if (message.gas_fee_cap !== "") {
      writer.uint32(34).string(message.gas_fee_cap);
    }
    if (message.gas !== 0) {
      writer.uint32(40).uint64(message.gas);
    }
    if (message.to !== "") {
      writer.uint32(50).string(message.to);
    }
    if (message.value !== "") {
      writer.uint32(58).string(message.value);
    }
    if (message.data.length !== 0) {
      writer.uint32(66).bytes(message.data);
    }
    for (const v of message.accesses) {
      AccessTuple.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    if (message.v.length !== 0) {
      writer.uint32(82).bytes(message.v);
    }
    if (message.r.length !== 0) {
      writer.uint32(90).bytes(message.r);
    }
    if (message.s.length !== 0) {
      writer.uint32(98).bytes(message.s);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): DynamicFeeTx {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDynamicFeeTx } as DynamicFeeTx;
    message.accesses = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chain_id = reader.string();
          break;
        case 2:
          message.nonce = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.gas_tip_cap = reader.string();
          break;
        case 4:
          message.gas_fee_cap = reader.string();
          break;
        case 5:
          message.gas = longToNumber(reader.uint64() as Long);
          break;
        case 6:
          message.to = reader.string();
          break;
        case 7:
          message.value = reader.string();
          break;
        case 8:
          message.data = reader.bytes();
          break;
        case 9:
          message.accesses.push(AccessTuple.decode(reader, reader.uint32()));
          break;
        case 10:
          message.v = reader.bytes();
          break;
        case 11:
          message.r = reader.bytes();
          break;
        case 12:
          message.s = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DynamicFeeTx {
    const message = { ...baseDynamicFeeTx } as DynamicFeeTx;
    message.accesses = [];
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chain_id = String(object.chain_id);
    } else {
      message.chain_id = "";
    }
    if (object.nonce !== undefined && object.nonce !== null) {
      message.nonce = Number(object.nonce);
    } else {
      message.nonce = 0;
    }
    if (object.gas_tip_cap !== undefined && object.gas_tip_cap !== null) {
      message.gas_tip_cap = String(object.gas_tip_cap);
    } else {
      message.gas_tip_cap = "";
    }
    if (object.gas_fee_cap !== undefined && object.gas_fee_cap !== null) {
      message.gas_fee_cap = String(object.gas_fee_cap);
    } else {
      message.gas_fee_cap = "";
    }
    if (object.gas !== undefined && object.gas !== null) {
      message.gas = Number(object.gas);
    } else {
      message.gas = 0;
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = String(object.to);
    } else {
      message.to = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = String(object.value);
    } else {
      message.value = "";
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    if (object.accesses !== undefined && object.accesses !== null) {
      for (const e of object.accesses) {
        message.accesses.push(AccessTuple.fromJSON(e));
      }
    }
    if (object.v !== undefined && object.v !== null) {
      message.v = bytesFromBase64(object.v);
    }
    if (object.r !== undefined && object.r !== null) {
      message.r = bytesFromBase64(object.r);
    }
    if (object.s !== undefined && object.s !== null) {
      message.s = bytesFromBase64(object.s);
    }
    return message;
  },

  toJSON(message: DynamicFeeTx): unknown {
    const obj: any = {};
    message.chain_id !== undefined && (obj.chain_id = message.chain_id);
    message.nonce !== undefined && (obj.nonce = message.nonce);
    message.gas_tip_cap !== undefined &&
      (obj.gas_tip_cap = message.gas_tip_cap);
    message.gas_fee_cap !== undefined &&
      (obj.gas_fee_cap = message.gas_fee_cap);
    message.gas !== undefined && (obj.gas = message.gas);
    message.to !== undefined && (obj.to = message.to);
    message.value !== undefined && (obj.value = message.value);
    message.data !== undefined &&
      (obj.data = base64FromBytes(
        message.data !== undefined ? message.data : new Uint8Array()
      ));
    if (message.accesses) {
      obj.accesses = message.accesses.map((e) =>
        e ? AccessTuple.toJSON(e) : undefined
      );
    } else {
      obj.accesses = [];
    }
    message.v !== undefined &&
      (obj.v = base64FromBytes(
        message.v !== undefined ? message.v : new Uint8Array()
      ));
    message.r !== undefined &&
      (obj.r = base64FromBytes(
        message.r !== undefined ? message.r : new Uint8Array()
      ));
    message.s !== undefined &&
      (obj.s = base64FromBytes(
        message.s !== undefined ? message.s : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(object: DeepPartial<DynamicFeeTx>): DynamicFeeTx {
    const message = { ...baseDynamicFeeTx } as DynamicFeeTx;
    message.accesses = [];
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chain_id = object.chain_id;
    } else {
      message.chain_id = "";
    }
    if (object.nonce !== undefined && object.nonce !== null) {
      message.nonce = object.nonce;
    } else {
      message.nonce = 0;
    }
    if (object.gas_tip_cap !== undefined && object.gas_tip_cap !== null) {
      message.gas_tip_cap = object.gas_tip_cap;
    } else {
      message.gas_tip_cap = "";
    }
    if (object.gas_fee_cap !== undefined && object.gas_fee_cap !== null) {
      message.gas_fee_cap = object.gas_fee_cap;
    } else {
      message.gas_fee_cap = "";
    }
    if (object.gas !== undefined && object.gas !== null) {
      message.gas = object.gas;
    } else {
      message.gas = 0;
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = object.to;
    } else {
      message.to = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = "";
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = object.data;
    } else {
      message.data = new Uint8Array();
    }
    if (object.accesses !== undefined && object.accesses !== null) {
      for (const e of object.accesses) {
        message.accesses.push(AccessTuple.fromPartial(e));
      }
    }
    if (object.v !== undefined && object.v !== null) {
      message.v = object.v;
    } else {
      message.v = new Uint8Array();
    }
    if (object.r !== undefined && object.r !== null) {
      message.r = object.r;
    } else {
      message.r = new Uint8Array();
    }
    if (object.s !== undefined && object.s !== null) {
      message.s = object.s;
    } else {
      message.s = new Uint8Array();
    }
    return message;
  },
};

const baseExtensionOptionsEthereumTx: object = {};

export const ExtensionOptionsEthereumTx = {
  encode(
    _: ExtensionOptionsEthereumTx,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): ExtensionOptionsEthereumTx {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseExtensionOptionsEthereumTx,
    } as ExtensionOptionsEthereumTx;
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

  fromJSON(_: any): ExtensionOptionsEthereumTx {
    const message = {
      ...baseExtensionOptionsEthereumTx,
    } as ExtensionOptionsEthereumTx;
    return message;
  },

  toJSON(_: ExtensionOptionsEthereumTx): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<ExtensionOptionsEthereumTx>
  ): ExtensionOptionsEthereumTx {
    const message = {
      ...baseExtensionOptionsEthereumTx,
    } as ExtensionOptionsEthereumTx;
    return message;
  },
};

const baseMsgEthereumTxResponse: object = {
  hash: "",
  vm_error: "",
  gas_used: 0,
};

export const MsgEthereumTxResponse = {
  encode(
    message: MsgEthereumTxResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.hash !== "") {
      writer.uint32(10).string(message.hash);
    }
    for (const v of message.logs) {
      Log.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.ret.length !== 0) {
      writer.uint32(26).bytes(message.ret);
    }
    if (message.vm_error !== "") {
      writer.uint32(34).string(message.vm_error);
    }
    if (message.gas_used !== 0) {
      writer.uint32(40).uint64(message.gas_used);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgEthereumTxResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgEthereumTxResponse } as MsgEthereumTxResponse;
    message.logs = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.string();
          break;
        case 2:
          message.logs.push(Log.decode(reader, reader.uint32()));
          break;
        case 3:
          message.ret = reader.bytes();
          break;
        case 4:
          message.vm_error = reader.string();
          break;
        case 5:
          message.gas_used = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgEthereumTxResponse {
    const message = { ...baseMsgEthereumTxResponse } as MsgEthereumTxResponse;
    message.logs = [];
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = String(object.hash);
    } else {
      message.hash = "";
    }
    if (object.logs !== undefined && object.logs !== null) {
      for (const e of object.logs) {
        message.logs.push(Log.fromJSON(e));
      }
    }
    if (object.ret !== undefined && object.ret !== null) {
      message.ret = bytesFromBase64(object.ret);
    }
    if (object.vm_error !== undefined && object.vm_error !== null) {
      message.vm_error = String(object.vm_error);
    } else {
      message.vm_error = "";
    }
    if (object.gas_used !== undefined && object.gas_used !== null) {
      message.gas_used = Number(object.gas_used);
    } else {
      message.gas_used = 0;
    }
    return message;
  },

  toJSON(message: MsgEthereumTxResponse): unknown {
    const obj: any = {};
    message.hash !== undefined && (obj.hash = message.hash);
    if (message.logs) {
      obj.logs = message.logs.map((e) => (e ? Log.toJSON(e) : undefined));
    } else {
      obj.logs = [];
    }
    message.ret !== undefined &&
      (obj.ret = base64FromBytes(
        message.ret !== undefined ? message.ret : new Uint8Array()
      ));
    message.vm_error !== undefined && (obj.vm_error = message.vm_error);
    message.gas_used !== undefined && (obj.gas_used = message.gas_used);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgEthereumTxResponse>
  ): MsgEthereumTxResponse {
    const message = { ...baseMsgEthereumTxResponse } as MsgEthereumTxResponse;
    message.logs = [];
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = object.hash;
    } else {
      message.hash = "";
    }
    if (object.logs !== undefined && object.logs !== null) {
      for (const e of object.logs) {
        message.logs.push(Log.fromPartial(e));
      }
    }
    if (object.ret !== undefined && object.ret !== null) {
      message.ret = object.ret;
    } else {
      message.ret = new Uint8Array();
    }
    if (object.vm_error !== undefined && object.vm_error !== null) {
      message.vm_error = object.vm_error;
    } else {
      message.vm_error = "";
    }
    if (object.gas_used !== undefined && object.gas_used !== null) {
      message.gas_used = object.gas_used;
    } else {
      message.gas_used = 0;
    }
    return message;
  },
};

/** Msg defines the evm Msg service. */
export interface Msg {
  /** EthereumTx defines a method submitting Ethereum transactions. */
  EthereumTx(request: MsgEthereumTx): Promise<MsgEthereumTxResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  EthereumTx(request: MsgEthereumTx): Promise<MsgEthereumTxResponse> {
    const data = MsgEthereumTx.encode(request).finish();
    const promise = this.rpc.request(
      "ethermint.evm.v1.Msg",
      "EthereumTx",
      data
    );
    return promise.then((data) =>
      MsgEthereumTxResponse.decode(new Reader(data))
    );
  }
}
