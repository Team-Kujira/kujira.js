import { BinaryReader, BinaryWriter } from "cosmjs-types/binary";
import { BaseAccount } from "cosmjs-types/cosmos/auth/v1beta1/auth";
import { base64FromBytes, bytesFromBase64, isSet, } from "cosmjs-types/helpers";
/* eslint-disable */
export const protobufPackage = "ethermint.types.v1";
function createBaseEthAccount() {
    return {
        baseAccount: undefined,
        codeHash: new Uint8Array(),
    };
}
export const EthAccount = {
    typeUrl: "/ethermint.types.v1.EthAccount",
    encode(message, writer = BinaryWriter.create()) {
        if (message.baseAccount !== undefined) {
            BaseAccount.encode(message.baseAccount, writer.uint32(10).fork()).ldelim();
        }
        if (message.codeHash.length !== 0) {
            writer.uint32(18).bytes(message.codeHash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    fromJSON(object) {
        const obj = createBaseEthAccount();
        if (isSet(object.baseAccount))
            obj.baseAccount = BaseAccount.fromJSON(object.baseAccount);
        if (isSet(object.codeHash))
            obj.codeHash = bytesFromBase64(object.codeHash);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.baseAccount !== undefined &&
            (obj.baseAccount = message.baseAccount
                ? BaseAccount.toJSON(message.baseAccount)
                : undefined);
        message.codeHash !== undefined &&
            (obj.codeHash = base64FromBytes(message.codeHash !== undefined ? message.codeHash : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseEthAccount();
        if (object.baseAccount !== undefined && object.baseAccount !== null) {
            message.baseAccount = BaseAccount.fromPartial(object.baseAccount);
        }
        message.codeHash = (_a = object.codeHash) !== null && _a !== void 0 ? _a : new Uint8Array();
        return message;
    },
};
