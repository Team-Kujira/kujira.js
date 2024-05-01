import { DeepPartial, Exact } from "cosmjs-types";
import { BinaryReader, BinaryWriter } from "cosmjs-types/binary";
import {
  base64FromBytes,
  bytesFromBase64,
  isSet,
} from "cosmjs-types/helpers";

/* eslint-disable */
export const protobufPackage = "kujira.crypto.authn";
/**
 * PubKey defines am authn public key
 * ID is the id returned from the registration
 * Key is the compressed form of the pubkey. The first byte depends is a 0x02 byte
 * if the y-coordinate is the lexicographically largest of the two associated with
 * the x-coordinate. Otherwise the first byte is a 0x03.
 * This prefix is followed with the x-coordinate.
 */
export interface PubKey {
  key_id: string;
  key: Uint8Array;
}

function createBasePubKey(): PubKey {
  return {
    key_id: "",
    key: new Uint8Array(),
  };
}

export const PubKey = {
  typeUrl: "/kujira.crypto.authn.PubKey",
  encode(
    message: PubKey,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    if (message.key_id !== "") {
      writer.uint32(10).string(message.key_id);
    }

    if (message.key.length !== 0) {
      writer.uint32(18).bytes(message.key);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): PubKey {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePubKey();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key_id = reader.string();
          break;
        case 2:
          message.key = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PubKey {
    const obj = createBasePubKey();
    if (isSet(object.key_id)) obj.key_id = String(object.key_id);
    if (isSet(object.key)) obj.key = bytesFromBase64(object.key);
    return obj;
  },
  toJSON(message: PubKey): unknown {
    const obj: any = {};
    message.key_id !== undefined && (obj.key_id = message.key_id);
    message.key !== undefined &&
      (obj.key = base64FromBytes(
        message.key !== undefined ? message.key : new Uint8Array()
      ));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<PubKey>, I>>(
    object: I
  ): PubKey {
    const message = createBasePubKey();
    message.key_id = object.key_id ?? "";
    message.key = object.key ?? new Uint8Array();
    return message;
  },
};
