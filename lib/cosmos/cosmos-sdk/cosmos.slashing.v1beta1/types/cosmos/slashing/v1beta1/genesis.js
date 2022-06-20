/* eslint-disable */
import Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { Params, ValidatorSigningInfo, } from "../../../cosmos/slashing/v1beta1/slashing";
export const protobufPackage = "cosmos.slashing.v1beta1";
const baseGenesisState = {};
export const GenesisState = {
    encode(message, writer = Writer.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.signing_infos) {
            SigningInfo.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.missed_blocks) {
            ValidatorMissedBlocks.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGenesisState);
        message.signing_infos = [];
        message.missed_blocks = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.signing_infos.push(SigningInfo.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.missed_blocks.push(ValidatorMissedBlocks.decode(reader, reader.uint32()));
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
        message.signing_infos = [];
        message.missed_blocks = [];
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromJSON(object.params);
        }
        else {
            message.params = undefined;
        }
        if (object.signing_infos !== undefined && object.signing_infos !== null) {
            for (const e of object.signing_infos) {
                message.signing_infos.push(SigningInfo.fromJSON(e));
            }
        }
        if (object.missed_blocks !== undefined && object.missed_blocks !== null) {
            for (const e of object.missed_blocks) {
                message.missed_blocks.push(ValidatorMissedBlocks.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined &&
            (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        if (message.signing_infos) {
            obj.signing_infos = message.signing_infos.map((e) => e ? SigningInfo.toJSON(e) : undefined);
        }
        else {
            obj.signing_infos = [];
        }
        if (message.missed_blocks) {
            obj.missed_blocks = message.missed_blocks.map((e) => e ? ValidatorMissedBlocks.toJSON(e) : undefined);
        }
        else {
            obj.missed_blocks = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseGenesisState);
        message.signing_infos = [];
        message.missed_blocks = [];
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromPartial(object.params);
        }
        else {
            message.params = undefined;
        }
        if (object.signing_infos !== undefined && object.signing_infos !== null) {
            for (const e of object.signing_infos) {
                message.signing_infos.push(SigningInfo.fromPartial(e));
            }
        }
        if (object.missed_blocks !== undefined && object.missed_blocks !== null) {
            for (const e of object.missed_blocks) {
                message.missed_blocks.push(ValidatorMissedBlocks.fromPartial(e));
            }
        }
        return message;
    },
};
const baseSigningInfo = { address: "" };
export const SigningInfo = {
    encode(message, writer = Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.validator_signing_info !== undefined) {
            ValidatorSigningInfo.encode(message.validator_signing_info, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseSigningInfo);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.validator_signing_info = ValidatorSigningInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseSigningInfo);
        if (object.address !== undefined && object.address !== null) {
            message.address = String(object.address);
        }
        else {
            message.address = "";
        }
        if (object.validator_signing_info !== undefined &&
            object.validator_signing_info !== null) {
            message.validator_signing_info = ValidatorSigningInfo.fromJSON(object.validator_signing_info);
        }
        else {
            message.validator_signing_info = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.validator_signing_info !== undefined &&
            (obj.validator_signing_info = message.validator_signing_info
                ? ValidatorSigningInfo.toJSON(message.validator_signing_info)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseSigningInfo);
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        else {
            message.address = "";
        }
        if (object.validator_signing_info !== undefined &&
            object.validator_signing_info !== null) {
            message.validator_signing_info = ValidatorSigningInfo.fromPartial(object.validator_signing_info);
        }
        else {
            message.validator_signing_info = undefined;
        }
        return message;
    },
};
const baseValidatorMissedBlocks = { address: "" };
export const ValidatorMissedBlocks = {
    encode(message, writer = Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        for (const v of message.missed_blocks) {
            MissedBlock.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseValidatorMissedBlocks);
        message.missed_blocks = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.missed_blocks.push(MissedBlock.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseValidatorMissedBlocks);
        message.missed_blocks = [];
        if (object.address !== undefined && object.address !== null) {
            message.address = String(object.address);
        }
        else {
            message.address = "";
        }
        if (object.missed_blocks !== undefined && object.missed_blocks !== null) {
            for (const e of object.missed_blocks) {
                message.missed_blocks.push(MissedBlock.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        if (message.missed_blocks) {
            obj.missed_blocks = message.missed_blocks.map((e) => e ? MissedBlock.toJSON(e) : undefined);
        }
        else {
            obj.missed_blocks = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseValidatorMissedBlocks);
        message.missed_blocks = [];
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        else {
            message.address = "";
        }
        if (object.missed_blocks !== undefined && object.missed_blocks !== null) {
            for (const e of object.missed_blocks) {
                message.missed_blocks.push(MissedBlock.fromPartial(e));
            }
        }
        return message;
    },
};
const baseMissedBlock = { index: 0, missed: false };
export const MissedBlock = {
    encode(message, writer = Writer.create()) {
        if (message.index !== 0) {
            writer.uint32(8).int64(message.index);
        }
        if (message.missed === true) {
            writer.uint32(16).bool(message.missed);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMissedBlock);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.index = longToNumber(reader.int64());
                    break;
                case 2:
                    message.missed = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMissedBlock);
        if (object.index !== undefined && object.index !== null) {
            message.index = Number(object.index);
        }
        else {
            message.index = 0;
        }
        if (object.missed !== undefined && object.missed !== null) {
            message.missed = Boolean(object.missed);
        }
        else {
            message.missed = false;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.index !== undefined && (obj.index = message.index);
        message.missed !== undefined && (obj.missed = message.missed);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMissedBlock);
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = 0;
        }
        if (object.missed !== undefined && object.missed !== null) {
            message.missed = object.missed;
        }
        else {
            message.missed = false;
        }
        return message;
    },
};
var globalThis = (() => {
    if (typeof globalThis !== "undefined")
        return globalThis;
    if (typeof self !== "undefined")
        return self;
    if (typeof window !== "undefined")
        return window;
    if (typeof global !== "undefined")
        return global;
    throw "Unable to locate global object";
})();
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
    }
    return long.toNumber();
}
if (util.Long !== Long) {
    util.Long = Long;
    configure();
}
