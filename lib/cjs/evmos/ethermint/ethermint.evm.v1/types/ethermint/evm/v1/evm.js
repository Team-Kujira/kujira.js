"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TraceConfig = exports.AccessTuple = exports.TxResult = exports.Log = exports.TransactionLogs = exports.State = exports.ChainConfig = exports.Params = exports.protobufPackage = void 0;
/* eslint-disable */
const minimal_1 = require("protobufjs/minimal");
const types_1 = require("../../../../../../../types");
exports.protobufPackage = "ethermint.evm.v1";
const baseParams = {
    evm_denom: "",
    enable_create: false,
    enable_call: false,
    extra_eips: 0,
    allow_unprotected_txs: false,
};
exports.Params = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.evm_denom !== "") {
            writer.uint32(10).string(message.evm_denom);
        }
        if (message.enable_create === true) {
            writer.uint32(16).bool(message.enable_create);
        }
        if (message.enable_call === true) {
            writer.uint32(24).bool(message.enable_call);
        }
        writer.uint32(34).fork();
        for (const v of message.extra_eips) {
            writer.int64(v);
        }
        writer.ldelim();
        if (message.chain_config !== undefined) {
            exports.ChainConfig.encode(message.chain_config, writer.uint32(42).fork()).ldelim();
        }
        if (message.allow_unprotected_txs === true) {
            writer.uint32(48).bool(message.allow_unprotected_txs);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseParams);
        message.extra_eips = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.evm_denom = reader.string();
                    break;
                case 2:
                    message.enable_create = reader.bool();
                    break;
                case 3:
                    message.enable_call = reader.bool();
                    break;
                case 4:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.extra_eips.push((0, types_1.longToNumber)(reader.int64()));
                        }
                    }
                    else {
                        message.extra_eips.push((0, types_1.longToNumber)(reader.int64()));
                    }
                    break;
                case 5:
                    message.chain_config = exports.ChainConfig.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.allow_unprotected_txs = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseParams);
        message.extra_eips = [];
        if (object.evm_denom !== undefined && object.evm_denom !== null) {
            message.evm_denom = String(object.evm_denom);
        }
        else {
            message.evm_denom = "";
        }
        if (object.enable_create !== undefined && object.enable_create !== null) {
            message.enable_create = Boolean(object.enable_create);
        }
        else {
            message.enable_create = false;
        }
        if (object.enable_call !== undefined && object.enable_call !== null) {
            message.enable_call = Boolean(object.enable_call);
        }
        else {
            message.enable_call = false;
        }
        if (object.extra_eips !== undefined && object.extra_eips !== null) {
            for (const e of object.extra_eips) {
                message.extra_eips.push(Number(e));
            }
        }
        if (object.chain_config !== undefined && object.chain_config !== null) {
            message.chain_config = exports.ChainConfig.fromJSON(object.chain_config);
        }
        else {
            message.chain_config = undefined;
        }
        if (object.allow_unprotected_txs !== undefined &&
            object.allow_unprotected_txs !== null) {
            message.allow_unprotected_txs = Boolean(object.allow_unprotected_txs);
        }
        else {
            message.allow_unprotected_txs = false;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.evm_denom !== undefined && (obj.evm_denom = message.evm_denom);
        message.enable_create !== undefined &&
            (obj.enable_create = message.enable_create);
        message.enable_call !== undefined &&
            (obj.enable_call = message.enable_call);
        if (message.extra_eips) {
            obj.extra_eips = message.extra_eips.map((e) => e);
        }
        else {
            obj.extra_eips = [];
        }
        message.chain_config !== undefined &&
            (obj.chain_config = message.chain_config
                ? exports.ChainConfig.toJSON(message.chain_config)
                : undefined);
        message.allow_unprotected_txs !== undefined &&
            (obj.allow_unprotected_txs = message.allow_unprotected_txs);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseParams);
        message.extra_eips = [];
        if (object.evm_denom !== undefined && object.evm_denom !== null) {
            message.evm_denom = object.evm_denom;
        }
        else {
            message.evm_denom = "";
        }
        if (object.enable_create !== undefined && object.enable_create !== null) {
            message.enable_create = object.enable_create;
        }
        else {
            message.enable_create = false;
        }
        if (object.enable_call !== undefined && object.enable_call !== null) {
            message.enable_call = object.enable_call;
        }
        else {
            message.enable_call = false;
        }
        if (object.extra_eips !== undefined && object.extra_eips !== null) {
            for (const e of object.extra_eips) {
                message.extra_eips.push(e);
            }
        }
        if (object.chain_config !== undefined && object.chain_config !== null) {
            message.chain_config = exports.ChainConfig.fromPartial(object.chain_config);
        }
        else {
            message.chain_config = undefined;
        }
        if (object.allow_unprotected_txs !== undefined &&
            object.allow_unprotected_txs !== null) {
            message.allow_unprotected_txs = object.allow_unprotected_txs;
        }
        else {
            message.allow_unprotected_txs = false;
        }
        return message;
    },
};
const baseChainConfig = {
    homestead_block: "",
    dao_fork_block: "",
    dao_fork_support: false,
    eip150_block: "",
    eip150_hash: "",
    eip155_block: "",
    eip158_block: "",
    byzantium_block: "",
    constantinople_block: "",
    petersburg_block: "",
    istanbul_block: "",
    muir_glacier_block: "",
    berlin_block: "",
    london_block: "",
    arrow_glacier_block: "",
    gray_glacier_block: "",
    merge_netsplit_block: "",
};
exports.ChainConfig = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.homestead_block !== "") {
            writer.uint32(10).string(message.homestead_block);
        }
        if (message.dao_fork_block !== "") {
            writer.uint32(18).string(message.dao_fork_block);
        }
        if (message.dao_fork_support === true) {
            writer.uint32(24).bool(message.dao_fork_support);
        }
        if (message.eip150_block !== "") {
            writer.uint32(34).string(message.eip150_block);
        }
        if (message.eip150_hash !== "") {
            writer.uint32(42).string(message.eip150_hash);
        }
        if (message.eip155_block !== "") {
            writer.uint32(50).string(message.eip155_block);
        }
        if (message.eip158_block !== "") {
            writer.uint32(58).string(message.eip158_block);
        }
        if (message.byzantium_block !== "") {
            writer.uint32(66).string(message.byzantium_block);
        }
        if (message.constantinople_block !== "") {
            writer.uint32(74).string(message.constantinople_block);
        }
        if (message.petersburg_block !== "") {
            writer.uint32(82).string(message.petersburg_block);
        }
        if (message.istanbul_block !== "") {
            writer.uint32(90).string(message.istanbul_block);
        }
        if (message.muir_glacier_block !== "") {
            writer.uint32(98).string(message.muir_glacier_block);
        }
        if (message.berlin_block !== "") {
            writer.uint32(106).string(message.berlin_block);
        }
        if (message.london_block !== "") {
            writer.uint32(138).string(message.london_block);
        }
        if (message.arrow_glacier_block !== "") {
            writer.uint32(146).string(message.arrow_glacier_block);
        }
        if (message.gray_glacier_block !== "") {
            writer.uint32(162).string(message.gray_glacier_block);
        }
        if (message.merge_netsplit_block !== "") {
            writer.uint32(170).string(message.merge_netsplit_block);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseChainConfig);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.homestead_block = reader.string();
                    break;
                case 2:
                    message.dao_fork_block = reader.string();
                    break;
                case 3:
                    message.dao_fork_support = reader.bool();
                    break;
                case 4:
                    message.eip150_block = reader.string();
                    break;
                case 5:
                    message.eip150_hash = reader.string();
                    break;
                case 6:
                    message.eip155_block = reader.string();
                    break;
                case 7:
                    message.eip158_block = reader.string();
                    break;
                case 8:
                    message.byzantium_block = reader.string();
                    break;
                case 9:
                    message.constantinople_block = reader.string();
                    break;
                case 10:
                    message.petersburg_block = reader.string();
                    break;
                case 11:
                    message.istanbul_block = reader.string();
                    break;
                case 12:
                    message.muir_glacier_block = reader.string();
                    break;
                case 13:
                    message.berlin_block = reader.string();
                    break;
                case 17:
                    message.london_block = reader.string();
                    break;
                case 18:
                    message.arrow_glacier_block = reader.string();
                    break;
                case 20:
                    message.gray_glacier_block = reader.string();
                    break;
                case 21:
                    message.merge_netsplit_block = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseChainConfig);
        if (object.homestead_block !== undefined &&
            object.homestead_block !== null) {
            message.homestead_block = String(object.homestead_block);
        }
        else {
            message.homestead_block = "";
        }
        if (object.dao_fork_block !== undefined && object.dao_fork_block !== null) {
            message.dao_fork_block = String(object.dao_fork_block);
        }
        else {
            message.dao_fork_block = "";
        }
        if (object.dao_fork_support !== undefined &&
            object.dao_fork_support !== null) {
            message.dao_fork_support = Boolean(object.dao_fork_support);
        }
        else {
            message.dao_fork_support = false;
        }
        if (object.eip150_block !== undefined && object.eip150_block !== null) {
            message.eip150_block = String(object.eip150_block);
        }
        else {
            message.eip150_block = "";
        }
        if (object.eip150_hash !== undefined && object.eip150_hash !== null) {
            message.eip150_hash = String(object.eip150_hash);
        }
        else {
            message.eip150_hash = "";
        }
        if (object.eip155_block !== undefined && object.eip155_block !== null) {
            message.eip155_block = String(object.eip155_block);
        }
        else {
            message.eip155_block = "";
        }
        if (object.eip158_block !== undefined && object.eip158_block !== null) {
            message.eip158_block = String(object.eip158_block);
        }
        else {
            message.eip158_block = "";
        }
        if (object.byzantium_block !== undefined &&
            object.byzantium_block !== null) {
            message.byzantium_block = String(object.byzantium_block);
        }
        else {
            message.byzantium_block = "";
        }
        if (object.constantinople_block !== undefined &&
            object.constantinople_block !== null) {
            message.constantinople_block = String(object.constantinople_block);
        }
        else {
            message.constantinople_block = "";
        }
        if (object.petersburg_block !== undefined &&
            object.petersburg_block !== null) {
            message.petersburg_block = String(object.petersburg_block);
        }
        else {
            message.petersburg_block = "";
        }
        if (object.istanbul_block !== undefined && object.istanbul_block !== null) {
            message.istanbul_block = String(object.istanbul_block);
        }
        else {
            message.istanbul_block = "";
        }
        if (object.muir_glacier_block !== undefined &&
            object.muir_glacier_block !== null) {
            message.muir_glacier_block = String(object.muir_glacier_block);
        }
        else {
            message.muir_glacier_block = "";
        }
        if (object.berlin_block !== undefined && object.berlin_block !== null) {
            message.berlin_block = String(object.berlin_block);
        }
        else {
            message.berlin_block = "";
        }
        if (object.london_block !== undefined && object.london_block !== null) {
            message.london_block = String(object.london_block);
        }
        else {
            message.london_block = "";
        }
        if (object.arrow_glacier_block !== undefined &&
            object.arrow_glacier_block !== null) {
            message.arrow_glacier_block = String(object.arrow_glacier_block);
        }
        else {
            message.arrow_glacier_block = "";
        }
        if (object.gray_glacier_block !== undefined &&
            object.gray_glacier_block !== null) {
            message.gray_glacier_block = String(object.gray_glacier_block);
        }
        else {
            message.gray_glacier_block = "";
        }
        if (object.merge_netsplit_block !== undefined &&
            object.merge_netsplit_block !== null) {
            message.merge_netsplit_block = String(object.merge_netsplit_block);
        }
        else {
            message.merge_netsplit_block = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.homestead_block !== undefined &&
            (obj.homestead_block = message.homestead_block);
        message.dao_fork_block !== undefined &&
            (obj.dao_fork_block = message.dao_fork_block);
        message.dao_fork_support !== undefined &&
            (obj.dao_fork_support = message.dao_fork_support);
        message.eip150_block !== undefined &&
            (obj.eip150_block = message.eip150_block);
        message.eip150_hash !== undefined &&
            (obj.eip150_hash = message.eip150_hash);
        message.eip155_block !== undefined &&
            (obj.eip155_block = message.eip155_block);
        message.eip158_block !== undefined &&
            (obj.eip158_block = message.eip158_block);
        message.byzantium_block !== undefined &&
            (obj.byzantium_block = message.byzantium_block);
        message.constantinople_block !== undefined &&
            (obj.constantinople_block = message.constantinople_block);
        message.petersburg_block !== undefined &&
            (obj.petersburg_block = message.petersburg_block);
        message.istanbul_block !== undefined &&
            (obj.istanbul_block = message.istanbul_block);
        message.muir_glacier_block !== undefined &&
            (obj.muir_glacier_block = message.muir_glacier_block);
        message.berlin_block !== undefined &&
            (obj.berlin_block = message.berlin_block);
        message.london_block !== undefined &&
            (obj.london_block = message.london_block);
        message.arrow_glacier_block !== undefined &&
            (obj.arrow_glacier_block = message.arrow_glacier_block);
        message.gray_glacier_block !== undefined &&
            (obj.gray_glacier_block = message.gray_glacier_block);
        message.merge_netsplit_block !== undefined &&
            (obj.merge_netsplit_block = message.merge_netsplit_block);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseChainConfig);
        if (object.homestead_block !== undefined &&
            object.homestead_block !== null) {
            message.homestead_block = object.homestead_block;
        }
        else {
            message.homestead_block = "";
        }
        if (object.dao_fork_block !== undefined && object.dao_fork_block !== null) {
            message.dao_fork_block = object.dao_fork_block;
        }
        else {
            message.dao_fork_block = "";
        }
        if (object.dao_fork_support !== undefined &&
            object.dao_fork_support !== null) {
            message.dao_fork_support = object.dao_fork_support;
        }
        else {
            message.dao_fork_support = false;
        }
        if (object.eip150_block !== undefined && object.eip150_block !== null) {
            message.eip150_block = object.eip150_block;
        }
        else {
            message.eip150_block = "";
        }
        if (object.eip150_hash !== undefined && object.eip150_hash !== null) {
            message.eip150_hash = object.eip150_hash;
        }
        else {
            message.eip150_hash = "";
        }
        if (object.eip155_block !== undefined && object.eip155_block !== null) {
            message.eip155_block = object.eip155_block;
        }
        else {
            message.eip155_block = "";
        }
        if (object.eip158_block !== undefined && object.eip158_block !== null) {
            message.eip158_block = object.eip158_block;
        }
        else {
            message.eip158_block = "";
        }
        if (object.byzantium_block !== undefined &&
            object.byzantium_block !== null) {
            message.byzantium_block = object.byzantium_block;
        }
        else {
            message.byzantium_block = "";
        }
        if (object.constantinople_block !== undefined &&
            object.constantinople_block !== null) {
            message.constantinople_block = object.constantinople_block;
        }
        else {
            message.constantinople_block = "";
        }
        if (object.petersburg_block !== undefined &&
            object.petersburg_block !== null) {
            message.petersburg_block = object.petersburg_block;
        }
        else {
            message.petersburg_block = "";
        }
        if (object.istanbul_block !== undefined && object.istanbul_block !== null) {
            message.istanbul_block = object.istanbul_block;
        }
        else {
            message.istanbul_block = "";
        }
        if (object.muir_glacier_block !== undefined &&
            object.muir_glacier_block !== null) {
            message.muir_glacier_block = object.muir_glacier_block;
        }
        else {
            message.muir_glacier_block = "";
        }
        if (object.berlin_block !== undefined && object.berlin_block !== null) {
            message.berlin_block = object.berlin_block;
        }
        else {
            message.berlin_block = "";
        }
        if (object.london_block !== undefined && object.london_block !== null) {
            message.london_block = object.london_block;
        }
        else {
            message.london_block = "";
        }
        if (object.arrow_glacier_block !== undefined &&
            object.arrow_glacier_block !== null) {
            message.arrow_glacier_block = object.arrow_glacier_block;
        }
        else {
            message.arrow_glacier_block = "";
        }
        if (object.gray_glacier_block !== undefined &&
            object.gray_glacier_block !== null) {
            message.gray_glacier_block = object.gray_glacier_block;
        }
        else {
            message.gray_glacier_block = "";
        }
        if (object.merge_netsplit_block !== undefined &&
            object.merge_netsplit_block !== null) {
            message.merge_netsplit_block = object.merge_netsplit_block;
        }
        else {
            message.merge_netsplit_block = "";
        }
        return message;
    },
};
const baseState = { key: "", value: "" };
exports.State = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== "") {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseState);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseState);
        if (object.key !== undefined && object.key !== null) {
            message.key = String(object.key);
        }
        else {
            message.key = "";
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = String(object.value);
        }
        else {
            message.value = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseState);
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        }
        else {
            message.key = "";
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value;
        }
        else {
            message.value = "";
        }
        return message;
    },
};
const baseTransactionLogs = { hash: "" };
exports.TransactionLogs = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.hash !== "") {
            writer.uint32(10).string(message.hash);
        }
        for (const v of message.logs) {
            exports.Log.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseTransactionLogs);
        message.logs = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hash = reader.string();
                    break;
                case 2:
                    message.logs.push(exports.Log.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseTransactionLogs);
        message.logs = [];
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = String(object.hash);
        }
        else {
            message.hash = "";
        }
        if (object.logs !== undefined && object.logs !== null) {
            for (const e of object.logs) {
                message.logs.push(exports.Log.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.hash !== undefined && (obj.hash = message.hash);
        if (message.logs) {
            obj.logs = message.logs.map((e) => (e ? exports.Log.toJSON(e) : undefined));
        }
        else {
            obj.logs = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseTransactionLogs);
        message.logs = [];
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = object.hash;
        }
        else {
            message.hash = "";
        }
        if (object.logs !== undefined && object.logs !== null) {
            for (const e of object.logs) {
                message.logs.push(exports.Log.fromPartial(e));
            }
        }
        return message;
    },
};
const baseLog = {
    address: "",
    topics: "",
    block_number: 0,
    tx_hash: "",
    tx_index: 0,
    block_hash: "",
    index: 0,
    removed: false,
};
exports.Log = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        for (const v of message.topics) {
            writer.uint32(18).string(v);
        }
        if (message.data.length !== 0) {
            writer.uint32(26).bytes(message.data);
        }
        if (message.block_number !== 0) {
            writer.uint32(32).uint64(message.block_number);
        }
        if (message.tx_hash !== "") {
            writer.uint32(42).string(message.tx_hash);
        }
        if (message.tx_index !== 0) {
            writer.uint32(48).uint64(message.tx_index);
        }
        if (message.block_hash !== "") {
            writer.uint32(58).string(message.block_hash);
        }
        if (message.index !== 0) {
            writer.uint32(64).uint64(message.index);
        }
        if (message.removed === true) {
            writer.uint32(72).bool(message.removed);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseLog);
        message.topics = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.topics.push(reader.string());
                    break;
                case 3:
                    message.data = reader.bytes();
                    break;
                case 4:
                    message.block_number = (0, types_1.longToNumber)(reader.uint64());
                    break;
                case 5:
                    message.tx_hash = reader.string();
                    break;
                case 6:
                    message.tx_index = (0, types_1.longToNumber)(reader.uint64());
                    break;
                case 7:
                    message.block_hash = reader.string();
                    break;
                case 8:
                    message.index = (0, types_1.longToNumber)(reader.uint64());
                    break;
                case 9:
                    message.removed = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseLog);
        message.topics = [];
        if (object.address !== undefined && object.address !== null) {
            message.address = String(object.address);
        }
        else {
            message.address = "";
        }
        if (object.topics !== undefined && object.topics !== null) {
            for (const e of object.topics) {
                message.topics.push(String(e));
            }
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = (0, types_1.bytesFromBase64)(object.data);
        }
        if (object.block_number !== undefined && object.block_number !== null) {
            message.block_number = Number(object.block_number);
        }
        else {
            message.block_number = 0;
        }
        if (object.tx_hash !== undefined && object.tx_hash !== null) {
            message.tx_hash = String(object.tx_hash);
        }
        else {
            message.tx_hash = "";
        }
        if (object.tx_index !== undefined && object.tx_index !== null) {
            message.tx_index = Number(object.tx_index);
        }
        else {
            message.tx_index = 0;
        }
        if (object.block_hash !== undefined && object.block_hash !== null) {
            message.block_hash = String(object.block_hash);
        }
        else {
            message.block_hash = "";
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = Number(object.index);
        }
        else {
            message.index = 0;
        }
        if (object.removed !== undefined && object.removed !== null) {
            message.removed = Boolean(object.removed);
        }
        else {
            message.removed = false;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        if (message.topics) {
            obj.topics = message.topics.map((e) => e);
        }
        else {
            obj.topics = [];
        }
        message.data !== undefined &&
            (obj.data = (0, types_1.base64FromBytes)(message.data !== undefined ? message.data : new Uint8Array()));
        message.block_number !== undefined &&
            (obj.block_number = message.block_number);
        message.tx_hash !== undefined && (obj.tx_hash = message.tx_hash);
        message.tx_index !== undefined && (obj.tx_index = message.tx_index);
        message.block_hash !== undefined && (obj.block_hash = message.block_hash);
        message.index !== undefined && (obj.index = message.index);
        message.removed !== undefined && (obj.removed = message.removed);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseLog);
        message.topics = [];
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        else {
            message.address = "";
        }
        if (object.topics !== undefined && object.topics !== null) {
            for (const e of object.topics) {
                message.topics.push(e);
            }
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = object.data;
        }
        else {
            message.data = new Uint8Array();
        }
        if (object.block_number !== undefined && object.block_number !== null) {
            message.block_number = object.block_number;
        }
        else {
            message.block_number = 0;
        }
        if (object.tx_hash !== undefined && object.tx_hash !== null) {
            message.tx_hash = object.tx_hash;
        }
        else {
            message.tx_hash = "";
        }
        if (object.tx_index !== undefined && object.tx_index !== null) {
            message.tx_index = object.tx_index;
        }
        else {
            message.tx_index = 0;
        }
        if (object.block_hash !== undefined && object.block_hash !== null) {
            message.block_hash = object.block_hash;
        }
        else {
            message.block_hash = "";
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = 0;
        }
        if (object.removed !== undefined && object.removed !== null) {
            message.removed = object.removed;
        }
        else {
            message.removed = false;
        }
        return message;
    },
};
const baseTxResult = {
    contract_address: "",
    reverted: false,
    gas_used: 0,
};
exports.TxResult = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.contract_address !== "") {
            writer.uint32(10).string(message.contract_address);
        }
        if (message.bloom.length !== 0) {
            writer.uint32(18).bytes(message.bloom);
        }
        if (message.tx_logs !== undefined) {
            exports.TransactionLogs.encode(message.tx_logs, writer.uint32(26).fork()).ldelim();
        }
        if (message.ret.length !== 0) {
            writer.uint32(34).bytes(message.ret);
        }
        if (message.reverted === true) {
            writer.uint32(40).bool(message.reverted);
        }
        if (message.gas_used !== 0) {
            writer.uint32(48).uint64(message.gas_used);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseTxResult);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.contract_address = reader.string();
                    break;
                case 2:
                    message.bloom = reader.bytes();
                    break;
                case 3:
                    message.tx_logs = exports.TransactionLogs.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.ret = reader.bytes();
                    break;
                case 5:
                    message.reverted = reader.bool();
                    break;
                case 6:
                    message.gas_used = (0, types_1.longToNumber)(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseTxResult);
        if (object.contract_address !== undefined &&
            object.contract_address !== null) {
            message.contract_address = String(object.contract_address);
        }
        else {
            message.contract_address = "";
        }
        if (object.bloom !== undefined && object.bloom !== null) {
            message.bloom = (0, types_1.bytesFromBase64)(object.bloom);
        }
        if (object.tx_logs !== undefined && object.tx_logs !== null) {
            message.tx_logs = exports.TransactionLogs.fromJSON(object.tx_logs);
        }
        else {
            message.tx_logs = undefined;
        }
        if (object.ret !== undefined && object.ret !== null) {
            message.ret = (0, types_1.bytesFromBase64)(object.ret);
        }
        if (object.reverted !== undefined && object.reverted !== null) {
            message.reverted = Boolean(object.reverted);
        }
        else {
            message.reverted = false;
        }
        if (object.gas_used !== undefined && object.gas_used !== null) {
            message.gas_used = Number(object.gas_used);
        }
        else {
            message.gas_used = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.contract_address !== undefined &&
            (obj.contract_address = message.contract_address);
        message.bloom !== undefined &&
            (obj.bloom = (0, types_1.base64FromBytes)(message.bloom !== undefined ? message.bloom : new Uint8Array()));
        message.tx_logs !== undefined &&
            (obj.tx_logs = message.tx_logs
                ? exports.TransactionLogs.toJSON(message.tx_logs)
                : undefined);
        message.ret !== undefined &&
            (obj.ret = (0, types_1.base64FromBytes)(message.ret !== undefined ? message.ret : new Uint8Array()));
        message.reverted !== undefined && (obj.reverted = message.reverted);
        message.gas_used !== undefined && (obj.gas_used = message.gas_used);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseTxResult);
        if (object.contract_address !== undefined &&
            object.contract_address !== null) {
            message.contract_address = object.contract_address;
        }
        else {
            message.contract_address = "";
        }
        if (object.bloom !== undefined && object.bloom !== null) {
            message.bloom = object.bloom;
        }
        else {
            message.bloom = new Uint8Array();
        }
        if (object.tx_logs !== undefined && object.tx_logs !== null) {
            message.tx_logs = exports.TransactionLogs.fromPartial(object.tx_logs);
        }
        else {
            message.tx_logs = undefined;
        }
        if (object.ret !== undefined && object.ret !== null) {
            message.ret = object.ret;
        }
        else {
            message.ret = new Uint8Array();
        }
        if (object.reverted !== undefined && object.reverted !== null) {
            message.reverted = object.reverted;
        }
        else {
            message.reverted = false;
        }
        if (object.gas_used !== undefined && object.gas_used !== null) {
            message.gas_used = object.gas_used;
        }
        else {
            message.gas_used = 0;
        }
        return message;
    },
};
const baseAccessTuple = { address: "", storage_keys: "" };
exports.AccessTuple = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        for (const v of message.storage_keys) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseAccessTuple);
        message.storage_keys = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.storage_keys.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseAccessTuple);
        message.storage_keys = [];
        if (object.address !== undefined && object.address !== null) {
            message.address = String(object.address);
        }
        else {
            message.address = "";
        }
        if (object.storage_keys !== undefined && object.storage_keys !== null) {
            for (const e of object.storage_keys) {
                message.storage_keys.push(String(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        if (message.storage_keys) {
            obj.storage_keys = message.storage_keys.map((e) => e);
        }
        else {
            obj.storage_keys = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseAccessTuple);
        message.storage_keys = [];
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        else {
            message.address = "";
        }
        if (object.storage_keys !== undefined && object.storage_keys !== null) {
            for (const e of object.storage_keys) {
                message.storage_keys.push(e);
            }
        }
        return message;
    },
};
const baseTraceConfig = {
    tracer: "",
    timeout: "",
    reexec: 0,
    disable_stack: false,
    disable_storage: false,
    debug: false,
    limit: 0,
    enable_memory: false,
    enable_return_data: false,
};
exports.TraceConfig = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.tracer !== "") {
            writer.uint32(10).string(message.tracer);
        }
        if (message.timeout !== "") {
            writer.uint32(18).string(message.timeout);
        }
        if (message.reexec !== 0) {
            writer.uint32(24).uint64(message.reexec);
        }
        if (message.disable_stack === true) {
            writer.uint32(40).bool(message.disable_stack);
        }
        if (message.disable_storage === true) {
            writer.uint32(48).bool(message.disable_storage);
        }
        if (message.debug === true) {
            writer.uint32(64).bool(message.debug);
        }
        if (message.limit !== 0) {
            writer.uint32(72).int32(message.limit);
        }
        if (message.overrides !== undefined) {
            exports.ChainConfig.encode(message.overrides, writer.uint32(82).fork()).ldelim();
        }
        if (message.enable_memory === true) {
            writer.uint32(88).bool(message.enable_memory);
        }
        if (message.enable_return_data === true) {
            writer.uint32(96).bool(message.enable_return_data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseTraceConfig);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tracer = reader.string();
                    break;
                case 2:
                    message.timeout = reader.string();
                    break;
                case 3:
                    message.reexec = (0, types_1.longToNumber)(reader.uint64());
                    break;
                case 5:
                    message.disable_stack = reader.bool();
                    break;
                case 6:
                    message.disable_storage = reader.bool();
                    break;
                case 8:
                    message.debug = reader.bool();
                    break;
                case 9:
                    message.limit = reader.int32();
                    break;
                case 10:
                    message.overrides = exports.ChainConfig.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.enable_memory = reader.bool();
                    break;
                case 12:
                    message.enable_return_data = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseTraceConfig);
        if (object.tracer !== undefined && object.tracer !== null) {
            message.tracer = String(object.tracer);
        }
        else {
            message.tracer = "";
        }
        if (object.timeout !== undefined && object.timeout !== null) {
            message.timeout = String(object.timeout);
        }
        else {
            message.timeout = "";
        }
        if (object.reexec !== undefined && object.reexec !== null) {
            message.reexec = Number(object.reexec);
        }
        else {
            message.reexec = 0;
        }
        if (object.disable_stack !== undefined && object.disable_stack !== null) {
            message.disable_stack = Boolean(object.disable_stack);
        }
        else {
            message.disable_stack = false;
        }
        if (object.disable_storage !== undefined &&
            object.disable_storage !== null) {
            message.disable_storage = Boolean(object.disable_storage);
        }
        else {
            message.disable_storage = false;
        }
        if (object.debug !== undefined && object.debug !== null) {
            message.debug = Boolean(object.debug);
        }
        else {
            message.debug = false;
        }
        if (object.limit !== undefined && object.limit !== null) {
            message.limit = Number(object.limit);
        }
        else {
            message.limit = 0;
        }
        if (object.overrides !== undefined && object.overrides !== null) {
            message.overrides = exports.ChainConfig.fromJSON(object.overrides);
        }
        else {
            message.overrides = undefined;
        }
        if (object.enable_memory !== undefined && object.enable_memory !== null) {
            message.enable_memory = Boolean(object.enable_memory);
        }
        else {
            message.enable_memory = false;
        }
        if (object.enable_return_data !== undefined &&
            object.enable_return_data !== null) {
            message.enable_return_data = Boolean(object.enable_return_data);
        }
        else {
            message.enable_return_data = false;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.tracer !== undefined && (obj.tracer = message.tracer);
        message.timeout !== undefined && (obj.timeout = message.timeout);
        message.reexec !== undefined && (obj.reexec = message.reexec);
        message.disable_stack !== undefined &&
            (obj.disable_stack = message.disable_stack);
        message.disable_storage !== undefined &&
            (obj.disable_storage = message.disable_storage);
        message.debug !== undefined && (obj.debug = message.debug);
        message.limit !== undefined && (obj.limit = message.limit);
        message.overrides !== undefined &&
            (obj.overrides = message.overrides
                ? exports.ChainConfig.toJSON(message.overrides)
                : undefined);
        message.enable_memory !== undefined &&
            (obj.enable_memory = message.enable_memory);
        message.enable_return_data !== undefined &&
            (obj.enable_return_data = message.enable_return_data);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseTraceConfig);
        if (object.tracer !== undefined && object.tracer !== null) {
            message.tracer = object.tracer;
        }
        else {
            message.tracer = "";
        }
        if (object.timeout !== undefined && object.timeout !== null) {
            message.timeout = object.timeout;
        }
        else {
            message.timeout = "";
        }
        if (object.reexec !== undefined && object.reexec !== null) {
            message.reexec = object.reexec;
        }
        else {
            message.reexec = 0;
        }
        if (object.disable_stack !== undefined && object.disable_stack !== null) {
            message.disable_stack = object.disable_stack;
        }
        else {
            message.disable_stack = false;
        }
        if (object.disable_storage !== undefined &&
            object.disable_storage !== null) {
            message.disable_storage = object.disable_storage;
        }
        else {
            message.disable_storage = false;
        }
        if (object.debug !== undefined && object.debug !== null) {
            message.debug = object.debug;
        }
        else {
            message.debug = false;
        }
        if (object.limit !== undefined && object.limit !== null) {
            message.limit = object.limit;
        }
        else {
            message.limit = 0;
        }
        if (object.overrides !== undefined && object.overrides !== null) {
            message.overrides = exports.ChainConfig.fromPartial(object.overrides);
        }
        else {
            message.overrides = undefined;
        }
        if (object.enable_memory !== undefined && object.enable_memory !== null) {
            message.enable_memory = object.enable_memory;
        }
        else {
            message.enable_memory = false;
        }
        if (object.enable_return_data !== undefined &&
            object.enable_return_data !== null) {
            message.enable_return_data = object.enable_return_data;
        }
        else {
            message.enable_return_data = false;
        }
        return message;
    },
};
