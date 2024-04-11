import { BinaryReader, BinaryWriter } from "cosmjs-types/binary";
import { BaseAccount } from "cosmjs-types/cosmos/auth/v1beta1/auth";
import {
  DeepPartial,
  Exact,
  base64FromBytes,
  bytesFromBase64,
  isSet,
} from "cosmjs-types/helpers";

/* eslint-disable */
export const protobufPackage = "ethermint.types.v1";
/**
 * EthAccount implements the authtypes.AccountI interface and embeds an
 * authtypes.BaseAccount type. It is compatible with the auth AccountKeeper.
 */
export interface EthAccount {
  baseAccount?: BaseAccount;
  codeHash: Uint8Array;
}
function createBaseEthAccount(): EthAccount {
  return {
    baseAccount: undefined,
    codeHash: new Uint8Array(),
  };
}
export const EthAccount = {
  typeUrl: "/ethermint.types.v1.EthAccount",
  encode(
    message: EthAccount,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    if (message.baseAccount !== undefined) {
      BaseAccount.encode(
        message.baseAccount,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.codeHash.length !== 0) {
      writer.uint32(18).bytes(message.codeHash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EthAccount {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEthAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.baseAccount = BaseAccount.decode(reader, reader.uint32());
          break;
        case 2:
          message.codeHash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EthAccount {
    const obj = createBaseEthAccount();
    if (isSet(object.baseAccount))
      obj.baseAccount = BaseAccount.fromJSON(object.baseAccount);
    if (isSet(object.codeHash)) obj.codeHash = bytesFromBase64(object.codeHash);
    return obj;
  },
  toJSON(message: EthAccount): unknown {
    const obj: any = {};
    message.baseAccount !== undefined &&
      (obj.baseAccount = message.baseAccount
        ? BaseAccount.toJSON(message.baseAccount)
        : undefined);
    message.codeHash !== undefined &&
      (obj.codeHash = base64FromBytes(
        message.codeHash !== undefined ? message.codeHash : new Uint8Array()
      ));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EthAccount>, I>>(
    object: I
  ): EthAccount {
    const message = createBaseEthAccount();
    if (object.baseAccount !== undefined && object.baseAccount !== null) {
      message.baseAccount = BaseAccount.fromPartial(object.baseAccount);
    }
    message.codeHash = object.codeHash ?? new Uint8Array();
    return message;
  },
};
