"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StakeAuthorization_Validators = exports.StakeAuthorization = exports.authorizationTypeToJSON = exports.authorizationTypeFromJSON = exports.AuthorizationType = exports.protobufPackage = void 0;
/* eslint-disable */
const minimal_1 = require("protobufjs/minimal");
const coin_1 = require("../../../../types/cosmos/base/coin");
exports.protobufPackage = "cosmos.staking.v1beta1";
/**
 * AuthorizationType defines the type of staking module authorization type
 *
 * Since: cosmos-sdk 0.43
 */
var AuthorizationType;
(function (AuthorizationType) {
    /** AUTHORIZATION_TYPE_UNSPECIFIED - AUTHORIZATION_TYPE_UNSPECIFIED specifies an unknown authorization type */
    AuthorizationType[AuthorizationType["AUTHORIZATION_TYPE_UNSPECIFIED"] = 0] = "AUTHORIZATION_TYPE_UNSPECIFIED";
    /** AUTHORIZATION_TYPE_DELEGATE - AUTHORIZATION_TYPE_DELEGATE defines an authorization type for Msg/Delegate */
    AuthorizationType[AuthorizationType["AUTHORIZATION_TYPE_DELEGATE"] = 1] = "AUTHORIZATION_TYPE_DELEGATE";
    /** AUTHORIZATION_TYPE_UNDELEGATE - AUTHORIZATION_TYPE_UNDELEGATE defines an authorization type for Msg/Undelegate */
    AuthorizationType[AuthorizationType["AUTHORIZATION_TYPE_UNDELEGATE"] = 2] = "AUTHORIZATION_TYPE_UNDELEGATE";
    /** AUTHORIZATION_TYPE_REDELEGATE - AUTHORIZATION_TYPE_REDELEGATE defines an authorization type for Msg/BeginRedelegate */
    AuthorizationType[AuthorizationType["AUTHORIZATION_TYPE_REDELEGATE"] = 3] = "AUTHORIZATION_TYPE_REDELEGATE";
    AuthorizationType[AuthorizationType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(AuthorizationType = exports.AuthorizationType || (exports.AuthorizationType = {}));
function authorizationTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "AUTHORIZATION_TYPE_UNSPECIFIED":
            return AuthorizationType.AUTHORIZATION_TYPE_UNSPECIFIED;
        case 1:
        case "AUTHORIZATION_TYPE_DELEGATE":
            return AuthorizationType.AUTHORIZATION_TYPE_DELEGATE;
        case 2:
        case "AUTHORIZATION_TYPE_UNDELEGATE":
            return AuthorizationType.AUTHORIZATION_TYPE_UNDELEGATE;
        case 3:
        case "AUTHORIZATION_TYPE_REDELEGATE":
            return AuthorizationType.AUTHORIZATION_TYPE_REDELEGATE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return AuthorizationType.UNRECOGNIZED;
    }
}
exports.authorizationTypeFromJSON = authorizationTypeFromJSON;
function authorizationTypeToJSON(object) {
    switch (object) {
        case AuthorizationType.AUTHORIZATION_TYPE_UNSPECIFIED:
            return "AUTHORIZATION_TYPE_UNSPECIFIED";
        case AuthorizationType.AUTHORIZATION_TYPE_DELEGATE:
            return "AUTHORIZATION_TYPE_DELEGATE";
        case AuthorizationType.AUTHORIZATION_TYPE_UNDELEGATE:
            return "AUTHORIZATION_TYPE_UNDELEGATE";
        case AuthorizationType.AUTHORIZATION_TYPE_REDELEGATE:
            return "AUTHORIZATION_TYPE_REDELEGATE";
        default:
            return "UNKNOWN";
    }
}
exports.authorizationTypeToJSON = authorizationTypeToJSON;
const baseStakeAuthorization = { authorization_type: 0 };
exports.StakeAuthorization = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.max_tokens !== undefined) {
            coin_1.Coin.encode(message.max_tokens, writer.uint32(10).fork()).ldelim();
        }
        if (message.allow_list !== undefined) {
            exports.StakeAuthorization_Validators.encode(message.allow_list, writer.uint32(18).fork()).ldelim();
        }
        if (message.deny_list !== undefined) {
            exports.StakeAuthorization_Validators.encode(message.deny_list, writer.uint32(26).fork()).ldelim();
        }
        if (message.authorization_type !== 0) {
            writer.uint32(32).int32(message.authorization_type);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseStakeAuthorization);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.max_tokens = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.allow_list = exports.StakeAuthorization_Validators.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.deny_list = exports.StakeAuthorization_Validators.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.authorization_type = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseStakeAuthorization);
        if (object.max_tokens !== undefined && object.max_tokens !== null) {
            message.max_tokens = coin_1.Coin.fromJSON(object.max_tokens);
        }
        else {
            message.max_tokens = undefined;
        }
        if (object.allow_list !== undefined && object.allow_list !== null) {
            message.allow_list = exports.StakeAuthorization_Validators.fromJSON(object.allow_list);
        }
        else {
            message.allow_list = undefined;
        }
        if (object.deny_list !== undefined && object.deny_list !== null) {
            message.deny_list = exports.StakeAuthorization_Validators.fromJSON(object.deny_list);
        }
        else {
            message.deny_list = undefined;
        }
        if (object.authorization_type !== undefined &&
            object.authorization_type !== null) {
            message.authorization_type = authorizationTypeFromJSON(object.authorization_type);
        }
        else {
            message.authorization_type = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.max_tokens !== undefined &&
            (obj.max_tokens = message.max_tokens
                ? coin_1.Coin.toJSON(message.max_tokens)
                : undefined);
        message.allow_list !== undefined &&
            (obj.allow_list = message.allow_list
                ? exports.StakeAuthorization_Validators.toJSON(message.allow_list)
                : undefined);
        message.deny_list !== undefined &&
            (obj.deny_list = message.deny_list
                ? exports.StakeAuthorization_Validators.toJSON(message.deny_list)
                : undefined);
        message.authorization_type !== undefined &&
            (obj.authorization_type = authorizationTypeToJSON(message.authorization_type));
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseStakeAuthorization);
        if (object.max_tokens !== undefined && object.max_tokens !== null) {
            message.max_tokens = coin_1.Coin.fromPartial(object.max_tokens);
        }
        else {
            message.max_tokens = undefined;
        }
        if (object.allow_list !== undefined && object.allow_list !== null) {
            message.allow_list = exports.StakeAuthorization_Validators.fromPartial(object.allow_list);
        }
        else {
            message.allow_list = undefined;
        }
        if (object.deny_list !== undefined && object.deny_list !== null) {
            message.deny_list = exports.StakeAuthorization_Validators.fromPartial(object.deny_list);
        }
        else {
            message.deny_list = undefined;
        }
        if (object.authorization_type !== undefined &&
            object.authorization_type !== null) {
            message.authorization_type = object.authorization_type;
        }
        else {
            message.authorization_type = 0;
        }
        return message;
    },
};
const baseStakeAuthorization_Validators = { address: "" };
exports.StakeAuthorization_Validators = {
    encode(message, writer = minimal_1.Writer.create()) {
        for (const v of message.address) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseStakeAuthorization_Validators);
        message.address = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseStakeAuthorization_Validators);
        message.address = [];
        if (object.address !== undefined && object.address !== null) {
            for (const e of object.address) {
                message.address.push(String(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.address) {
            obj.address = message.address.map((e) => e);
        }
        else {
            obj.address = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseStakeAuthorization_Validators);
        message.address = [];
        if (object.address !== undefined && object.address !== null) {
            for (const e of object.address) {
                message.address.push(e);
            }
        }
        return message;
    },
};
