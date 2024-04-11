"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EthAccount = exports.protobufPackage = void 0;
const binary_1 = require("cosmjs-types/binary");
const auth_1 = require("cosmjs-types/cosmos/auth/v1beta1/auth");
const helpers_1 = require("cosmjs-types/helpers");
/* eslint-disable */
exports.protobufPackage = "injective.types.v1beta1";
function createBaseEthAccount() {
    return {
        baseAccount: undefined,
        codeHash: new Uint8Array(),
    };
}
exports.EthAccount = {
    typeUrl: "/injective.types.v1beta1.EthAccount",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.baseAccount !== undefined) {
            auth_1.BaseAccount.encode(message.baseAccount, writer.uint32(10).fork()).ldelim();
        }
        if (message.codeHash.length !== 0) {
            writer.uint32(18).bytes(message.codeHash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEthAccount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.baseAccount = auth_1.BaseAccount.decode(reader, reader.uint32());
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
        if ((0, helpers_1.isSet)(object.baseAccount))
            obj.baseAccount = auth_1.BaseAccount.fromJSON(object.baseAccount);
        if ((0, helpers_1.isSet)(object.codeHash))
            obj.codeHash = (0, helpers_1.bytesFromBase64)(object.codeHash);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.baseAccount !== undefined &&
            (obj.baseAccount = message.baseAccount
                ? auth_1.BaseAccount.toJSON(message.baseAccount)
                : undefined);
        message.codeHash !== undefined &&
            (obj.codeHash = (0, helpers_1.base64FromBytes)(message.codeHash !== undefined ? message.codeHash : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseEthAccount();
        if (object.baseAccount !== undefined && object.baseAccount !== null) {
            message.baseAccount = auth_1.BaseAccount.fromPartial(object.baseAccount);
        }
        message.codeHash = (_a = object.codeHash) !== null && _a !== void 0 ? _a : new Uint8Array();
        return message;
    },
};
