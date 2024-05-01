import { BinaryReader, BinaryWriter } from "cosmjs-types/binary";
import { base64FromBytes, bytesFromBase64, isSet, } from "cosmjs-types/helpers";
/* eslint-disable */
export const protobufPackage = "kujira.crypto.authn";
function createBasePubKey() {
    return {
        key_id: "",
        key: new Uint8Array(),
    };
}
export const PubKey = {
    typeUrl: "/kujira.crypto.authn.PubKey",
    encode(message, writer = BinaryWriter.create()) {
        if (message.key_id !== "") {
            writer.uint32(10).string(message.key_id);
        }
        if (message.key.length !== 0) {
            writer.uint32(18).bytes(message.key);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    fromJSON(object) {
        const obj = createBasePubKey();
        if (isSet(object.key_id))
            obj.key_id = String(object.key_id);
        if (isSet(object.key))
            obj.key = bytesFromBase64(object.key);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.key_id !== undefined && (obj.key_id = message.key_id);
        message.key !== undefined &&
            (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBasePubKey();
        message.key_id = (_a = object.key_id) !== null && _a !== void 0 ? _a : "";
        message.key = (_b = object.key) !== null && _b !== void 0 ? _b : new Uint8Array();
        return message;
    },
};
