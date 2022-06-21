"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisDenom = exports.GenesisState = exports.protobufPackage = void 0;
/* eslint-disable */
const params_1 = require("./params");
const authorityMetadata_1 = require("./authorityMetadata");
const minimal_1 = require("protobufjs/minimal");
exports.protobufPackage = "kujira.denom";
const baseGenesisState = {};
exports.GenesisState = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.factory_denoms) {
            exports.GenesisDenom.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGenesisState);
        message.factory_denoms = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = params_1.Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.factory_denoms.push(exports.GenesisDenom.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGenesisState);
        message.factory_denoms = [];
        if (object.params !== undefined && object.params !== null) {
            message.params = params_1.Params.fromJSON(object.params);
        }
        else {
            message.params = undefined;
        }
        if (object.factory_denoms !== undefined && object.factory_denoms !== null) {
            for (const e of object.factory_denoms) {
                message.factory_denoms.push(exports.GenesisDenom.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined &&
            (obj.params = message.params ? params_1.Params.toJSON(message.params) : undefined);
        if (message.factory_denoms) {
            obj.factory_denoms = message.factory_denoms.map((e) => e ? exports.GenesisDenom.toJSON(e) : undefined);
        }
        else {
            obj.factory_denoms = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseGenesisState);
        message.factory_denoms = [];
        if (object.params !== undefined && object.params !== null) {
            message.params = params_1.Params.fromPartial(object.params);
        }
        else {
            message.params = undefined;
        }
        if (object.factory_denoms !== undefined && object.factory_denoms !== null) {
            for (const e of object.factory_denoms) {
                message.factory_denoms.push(exports.GenesisDenom.fromPartial(e));
            }
        }
        return message;
    },
};
const baseGenesisDenom = { denom: "" };
exports.GenesisDenom = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (message.authority_metadata !== undefined) {
            authorityMetadata_1.DenomAuthorityMetadata.encode(message.authority_metadata, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGenesisDenom);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                case 2:
                    message.authority_metadata = authorityMetadata_1.DenomAuthorityMetadata.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGenesisDenom);
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = String(object.denom);
        }
        else {
            message.denom = "";
        }
        if (object.authority_metadata !== undefined &&
            object.authority_metadata !== null) {
            message.authority_metadata = authorityMetadata_1.DenomAuthorityMetadata.fromJSON(object.authority_metadata);
        }
        else {
            message.authority_metadata = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.denom !== undefined && (obj.denom = message.denom);
        message.authority_metadata !== undefined &&
            (obj.authority_metadata = message.authority_metadata
                ? authorityMetadata_1.DenomAuthorityMetadata.toJSON(message.authority_metadata)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseGenesisDenom);
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        else {
            message.denom = "";
        }
        if (object.authority_metadata !== undefined &&
            object.authority_metadata !== null) {
            message.authority_metadata = authorityMetadata_1.DenomAuthorityMetadata.fromPartial(object.authority_metadata);
        }
        else {
            message.authority_metadata = undefined;
        }
        return message;
    },
};
