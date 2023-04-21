import { Reader, Writer } from "protobufjs/minimal";
import { DenomAuthorityMetadata } from "./authorityMetadata";
import { Params } from "./params";
export const protobufPackage = "kujira.denom";
const baseGenesisState = {};
export const GenesisState = {
    encode(message, writer = Writer.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.factory_denoms) {
            GenesisDenom.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGenesisState);
        message.factory_denoms = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.factory_denoms.push(GenesisDenom.decode(reader, reader.uint32()));
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
            message.params = Params.fromJSON(object.params);
        }
        else {
            message.params = undefined;
        }
        if (object.factory_denoms !== undefined && object.factory_denoms !== null) {
            for (const e of object.factory_denoms) {
                message.factory_denoms.push(GenesisDenom.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined &&
            (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        if (message.factory_denoms) {
            obj.factory_denoms = message.factory_denoms.map((e) => e ? GenesisDenom.toJSON(e) : undefined);
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
            message.params = Params.fromPartial(object.params);
        }
        else {
            message.params = undefined;
        }
        if (object.factory_denoms !== undefined && object.factory_denoms !== null) {
            for (const e of object.factory_denoms) {
                message.factory_denoms.push(GenesisDenom.fromPartial(e));
            }
        }
        return message;
    },
};
const baseGenesisDenom = { denom: "" };
export const GenesisDenom = {
    encode(message, writer = Writer.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (message.authority_metadata !== undefined) {
            DenomAuthorityMetadata.encode(message.authority_metadata, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGenesisDenom);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                case 2:
                    message.authority_metadata = DenomAuthorityMetadata.decode(reader, reader.uint32());
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
            message.authority_metadata = DenomAuthorityMetadata.fromJSON(object.authority_metadata);
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
                ? DenomAuthorityMetadata.toJSON(message.authority_metadata)
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
            message.authority_metadata = DenomAuthorityMetadata.fromPartial(object.authority_metadata);
        }
        else {
            message.authority_metadata = undefined;
        }
        return message;
    },
};
