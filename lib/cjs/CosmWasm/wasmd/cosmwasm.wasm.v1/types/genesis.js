"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sequence = exports.Contract = exports.Code = exports.GenesisState_GenMsgs = exports.GenesisState = exports.protobufPackage = void 0;
const minimal_1 = require("protobufjs/minimal");
const types_1 = require("./types");
const tx_1 = require("./tx");
const types_2 = require("../../../../types");
exports.protobufPackage = "cosmwasm.wasm.v1";
const baseGenesisState = {};
exports.GenesisState = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.params !== undefined) {
            types_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.codes) {
            exports.Code.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.contracts) {
            exports.Contract.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.sequences) {
            exports.Sequence.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.gen_msgs) {
            exports.GenesisState_GenMsgs.encode(v, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGenesisState);
        message.codes = [];
        message.contracts = [];
        message.sequences = [];
        message.gen_msgs = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = types_1.Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.codes.push(exports.Code.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.contracts.push(exports.Contract.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.sequences.push(exports.Sequence.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.gen_msgs.push(exports.GenesisState_GenMsgs.decode(reader, reader.uint32()));
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
        message.codes = [];
        message.contracts = [];
        message.sequences = [];
        message.gen_msgs = [];
        if (object.params !== undefined && object.params !== null) {
            message.params = types_1.Params.fromJSON(object.params);
        }
        else {
            message.params = undefined;
        }
        if (object.codes !== undefined && object.codes !== null) {
            for (const e of object.codes) {
                message.codes.push(exports.Code.fromJSON(e));
            }
        }
        if (object.contracts !== undefined && object.contracts !== null) {
            for (const e of object.contracts) {
                message.contracts.push(exports.Contract.fromJSON(e));
            }
        }
        if (object.sequences !== undefined && object.sequences !== null) {
            for (const e of object.sequences) {
                message.sequences.push(exports.Sequence.fromJSON(e));
            }
        }
        if (object.gen_msgs !== undefined && object.gen_msgs !== null) {
            for (const e of object.gen_msgs) {
                message.gen_msgs.push(exports.GenesisState_GenMsgs.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined &&
            (obj.params = message.params ? types_1.Params.toJSON(message.params) : undefined);
        if (message.codes) {
            obj.codes = message.codes.map((e) => (e ? exports.Code.toJSON(e) : undefined));
        }
        else {
            obj.codes = [];
        }
        if (message.contracts) {
            obj.contracts = message.contracts.map((e) => e ? exports.Contract.toJSON(e) : undefined);
        }
        else {
            obj.contracts = [];
        }
        if (message.sequences) {
            obj.sequences = message.sequences.map((e) => e ? exports.Sequence.toJSON(e) : undefined);
        }
        else {
            obj.sequences = [];
        }
        if (message.gen_msgs) {
            obj.gen_msgs = message.gen_msgs.map((e) => e ? exports.GenesisState_GenMsgs.toJSON(e) : undefined);
        }
        else {
            obj.gen_msgs = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseGenesisState);
        message.codes = [];
        message.contracts = [];
        message.sequences = [];
        message.gen_msgs = [];
        if (object.params !== undefined && object.params !== null) {
            message.params = types_1.Params.fromPartial(object.params);
        }
        else {
            message.params = undefined;
        }
        if (object.codes !== undefined && object.codes !== null) {
            for (const e of object.codes) {
                message.codes.push(exports.Code.fromPartial(e));
            }
        }
        if (object.contracts !== undefined && object.contracts !== null) {
            for (const e of object.contracts) {
                message.contracts.push(exports.Contract.fromPartial(e));
            }
        }
        if (object.sequences !== undefined && object.sequences !== null) {
            for (const e of object.sequences) {
                message.sequences.push(exports.Sequence.fromPartial(e));
            }
        }
        if (object.gen_msgs !== undefined && object.gen_msgs !== null) {
            for (const e of object.gen_msgs) {
                message.gen_msgs.push(exports.GenesisState_GenMsgs.fromPartial(e));
            }
        }
        return message;
    },
};
const baseGenesisState_GenMsgs = {};
exports.GenesisState_GenMsgs = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.store_code !== undefined) {
            tx_1.MsgStoreCode.encode(message.store_code, writer.uint32(10).fork()).ldelim();
        }
        if (message.instantiate_contract !== undefined) {
            tx_1.MsgInstantiateContract.encode(message.instantiate_contract, writer.uint32(18).fork()).ldelim();
        }
        if (message.execute_contract !== undefined) {
            tx_1.MsgExecuteContract.encode(message.execute_contract, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGenesisState_GenMsgs);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.store_code = tx_1.MsgStoreCode.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.instantiate_contract = tx_1.MsgInstantiateContract.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.execute_contract = tx_1.MsgExecuteContract.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGenesisState_GenMsgs);
        if (object.store_code !== undefined && object.store_code !== null) {
            message.store_code = tx_1.MsgStoreCode.fromJSON(object.store_code);
        }
        else {
            message.store_code = undefined;
        }
        if (object.instantiate_contract !== undefined &&
            object.instantiate_contract !== null) {
            message.instantiate_contract = tx_1.MsgInstantiateContract.fromJSON(object.instantiate_contract);
        }
        else {
            message.instantiate_contract = undefined;
        }
        if (object.execute_contract !== undefined &&
            object.execute_contract !== null) {
            message.execute_contract = tx_1.MsgExecuteContract.fromJSON(object.execute_contract);
        }
        else {
            message.execute_contract = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.store_code !== undefined &&
            (obj.store_code = message.store_code
                ? tx_1.MsgStoreCode.toJSON(message.store_code)
                : undefined);
        message.instantiate_contract !== undefined &&
            (obj.instantiate_contract = message.instantiate_contract
                ? tx_1.MsgInstantiateContract.toJSON(message.instantiate_contract)
                : undefined);
        message.execute_contract !== undefined &&
            (obj.execute_contract = message.execute_contract
                ? tx_1.MsgExecuteContract.toJSON(message.execute_contract)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseGenesisState_GenMsgs);
        if (object.store_code !== undefined && object.store_code !== null) {
            message.store_code = tx_1.MsgStoreCode.fromPartial(object.store_code);
        }
        else {
            message.store_code = undefined;
        }
        if (object.instantiate_contract !== undefined &&
            object.instantiate_contract !== null) {
            message.instantiate_contract = tx_1.MsgInstantiateContract.fromPartial(object.instantiate_contract);
        }
        else {
            message.instantiate_contract = undefined;
        }
        if (object.execute_contract !== undefined &&
            object.execute_contract !== null) {
            message.execute_contract = tx_1.MsgExecuteContract.fromPartial(object.execute_contract);
        }
        else {
            message.execute_contract = undefined;
        }
        return message;
    },
};
const baseCode = { code_id: 0, pinned: false };
exports.Code = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.code_id !== 0) {
            writer.uint32(8).uint64(message.code_id);
        }
        if (message.code_info !== undefined) {
            types_1.CodeInfo.encode(message.code_info, writer.uint32(18).fork()).ldelim();
        }
        if (message.code_bytes.length !== 0) {
            writer.uint32(26).bytes(message.code_bytes);
        }
        if (message.pinned === true) {
            writer.uint32(32).bool(message.pinned);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCode);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.code_id = (0, types_2.longToNumber)(reader.uint64());
                    break;
                case 2:
                    message.code_info = types_1.CodeInfo.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.code_bytes = reader.bytes();
                    break;
                case 4:
                    message.pinned = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseCode);
        if (object.code_id !== undefined && object.code_id !== null) {
            message.code_id = Number(object.code_id);
        }
        else {
            message.code_id = 0;
        }
        if (object.code_info !== undefined && object.code_info !== null) {
            message.code_info = types_1.CodeInfo.fromJSON(object.code_info);
        }
        else {
            message.code_info = undefined;
        }
        if (object.code_bytes !== undefined && object.code_bytes !== null) {
            message.code_bytes = (0, types_2.bytesFromBase64)(object.code_bytes);
        }
        if (object.pinned !== undefined && object.pinned !== null) {
            message.pinned = Boolean(object.pinned);
        }
        else {
            message.pinned = false;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.code_id !== undefined && (obj.code_id = message.code_id);
        message.code_info !== undefined &&
            (obj.code_info = message.code_info
                ? types_1.CodeInfo.toJSON(message.code_info)
                : undefined);
        message.code_bytes !== undefined &&
            (obj.code_bytes = (0, types_2.base64FromBytes)(message.code_bytes !== undefined ? message.code_bytes : new Uint8Array()));
        message.pinned !== undefined && (obj.pinned = message.pinned);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseCode);
        if (object.code_id !== undefined && object.code_id !== null) {
            message.code_id = object.code_id;
        }
        else {
            message.code_id = 0;
        }
        if (object.code_info !== undefined && object.code_info !== null) {
            message.code_info = types_1.CodeInfo.fromPartial(object.code_info);
        }
        else {
            message.code_info = undefined;
        }
        if (object.code_bytes !== undefined && object.code_bytes !== null) {
            message.code_bytes = object.code_bytes;
        }
        else {
            message.code_bytes = new Uint8Array();
        }
        if (object.pinned !== undefined && object.pinned !== null) {
            message.pinned = object.pinned;
        }
        else {
            message.pinned = false;
        }
        return message;
    },
};
const baseContract = { contract_address: "" };
exports.Contract = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.contract_address !== "") {
            writer.uint32(10).string(message.contract_address);
        }
        if (message.contract_info !== undefined) {
            types_1.ContractInfo.encode(message.contract_info, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.contract_state) {
            types_1.Model.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseContract);
        message.contract_state = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.contract_address = reader.string();
                    break;
                case 2:
                    message.contract_info = types_1.ContractInfo.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.contract_state.push(types_1.Model.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseContract);
        message.contract_state = [];
        if (object.contract_address !== undefined &&
            object.contract_address !== null) {
            message.contract_address = String(object.contract_address);
        }
        else {
            message.contract_address = "";
        }
        if (object.contract_info !== undefined && object.contract_info !== null) {
            message.contract_info = types_1.ContractInfo.fromJSON(object.contract_info);
        }
        else {
            message.contract_info = undefined;
        }
        if (object.contract_state !== undefined && object.contract_state !== null) {
            for (const e of object.contract_state) {
                message.contract_state.push(types_1.Model.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.contract_address !== undefined &&
            (obj.contract_address = message.contract_address);
        message.contract_info !== undefined &&
            (obj.contract_info = message.contract_info
                ? types_1.ContractInfo.toJSON(message.contract_info)
                : undefined);
        if (message.contract_state) {
            obj.contract_state = message.contract_state.map((e) => e ? types_1.Model.toJSON(e) : undefined);
        }
        else {
            obj.contract_state = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseContract);
        message.contract_state = [];
        if (object.contract_address !== undefined &&
            object.contract_address !== null) {
            message.contract_address = object.contract_address;
        }
        else {
            message.contract_address = "";
        }
        if (object.contract_info !== undefined && object.contract_info !== null) {
            message.contract_info = types_1.ContractInfo.fromPartial(object.contract_info);
        }
        else {
            message.contract_info = undefined;
        }
        if (object.contract_state !== undefined && object.contract_state !== null) {
            for (const e of object.contract_state) {
                message.contract_state.push(types_1.Model.fromPartial(e));
            }
        }
        return message;
    },
};
const baseSequence = { value: 0 };
exports.Sequence = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.id_key.length !== 0) {
            writer.uint32(10).bytes(message.id_key);
        }
        if (message.value !== 0) {
            writer.uint32(16).uint64(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseSequence);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id_key = reader.bytes();
                    break;
                case 2:
                    message.value = (0, types_2.longToNumber)(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseSequence);
        if (object.id_key !== undefined && object.id_key !== null) {
            message.id_key = (0, types_2.bytesFromBase64)(object.id_key);
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = Number(object.value);
        }
        else {
            message.value = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id_key !== undefined &&
            (obj.id_key = (0, types_2.base64FromBytes)(message.id_key !== undefined ? message.id_key : new Uint8Array()));
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseSequence);
        if (object.id_key !== undefined && object.id_key !== null) {
            message.id_key = object.id_key;
        }
        else {
            message.id_key = new Uint8Array();
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value;
        }
        else {
            message.value = 0;
        }
        return message;
    },
};
