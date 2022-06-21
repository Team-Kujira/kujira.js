"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchTxsResult = exports.TxMsgData = exports.MsgData = exports.SimulationResponse = exports.Result = exports.GasInfo = exports.Attribute = exports.StringEvent = exports.ABCIMessageLog = exports.TxResponse = exports.protobufPackage = void 0;
const minimal_1 = require("protobufjs/minimal");
const __1 = require("../..");
const any_1 = require("../../google/protobuf/any");
const types_1 = require("../../tendermint/abci/types");
exports.protobufPackage = "cosmos.base.abci.v1beta1";
const baseTxResponse = {
    height: 0,
    txhash: "",
    codespace: "",
    code: 0,
    data: "",
    raw_log: "",
    info: "",
    gas_wanted: 0,
    gas_used: 0,
    timestamp: "",
};
exports.TxResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.height !== 0) {
            writer.uint32(8).int64(message.height);
        }
        if (message.txhash !== "") {
            writer.uint32(18).string(message.txhash);
        }
        if (message.codespace !== "") {
            writer.uint32(26).string(message.codespace);
        }
        if (message.code !== 0) {
            writer.uint32(32).uint32(message.code);
        }
        if (message.data !== "") {
            writer.uint32(42).string(message.data);
        }
        if (message.raw_log !== "") {
            writer.uint32(50).string(message.raw_log);
        }
        for (const v of message.logs) {
            exports.ABCIMessageLog.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.info !== "") {
            writer.uint32(66).string(message.info);
        }
        if (message.gas_wanted !== 0) {
            writer.uint32(72).int64(message.gas_wanted);
        }
        if (message.gas_used !== 0) {
            writer.uint32(80).int64(message.gas_used);
        }
        if (message.tx !== undefined) {
            any_1.Any.encode(message.tx, writer.uint32(90).fork()).ldelim();
        }
        if (message.timestamp !== "") {
            writer.uint32(98).string(message.timestamp);
        }
        for (const v of message.events) {
            types_1.Event.encode(v, writer.uint32(106).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseTxResponse);
        message.logs = [];
        message.events = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = (0, __1.longToNumber)(reader.int64());
                    break;
                case 2:
                    message.txhash = reader.string();
                    break;
                case 3:
                    message.codespace = reader.string();
                    break;
                case 4:
                    message.code = reader.uint32();
                    break;
                case 5:
                    message.data = reader.string();
                    break;
                case 6:
                    message.raw_log = reader.string();
                    break;
                case 7:
                    message.logs.push(exports.ABCIMessageLog.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.info = reader.string();
                    break;
                case 9:
                    message.gas_wanted = (0, __1.longToNumber)(reader.int64());
                    break;
                case 10:
                    message.gas_used = (0, __1.longToNumber)(reader.int64());
                    break;
                case 11:
                    message.tx = any_1.Any.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.timestamp = reader.string();
                    break;
                case 13:
                    message.events.push(types_1.Event.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseTxResponse);
        message.logs = [];
        message.events = [];
        if (object.height !== undefined && object.height !== null) {
            message.height = Number(object.height);
        }
        else {
            message.height = 0;
        }
        if (object.txhash !== undefined && object.txhash !== null) {
            message.txhash = String(object.txhash);
        }
        else {
            message.txhash = "";
        }
        if (object.codespace !== undefined && object.codespace !== null) {
            message.codespace = String(object.codespace);
        }
        else {
            message.codespace = "";
        }
        if (object.code !== undefined && object.code !== null) {
            message.code = Number(object.code);
        }
        else {
            message.code = 0;
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = String(object.data);
        }
        else {
            message.data = "";
        }
        if (object.raw_log !== undefined && object.raw_log !== null) {
            message.raw_log = String(object.raw_log);
        }
        else {
            message.raw_log = "";
        }
        if (object.logs !== undefined && object.logs !== null) {
            for (const e of object.logs) {
                message.logs.push(exports.ABCIMessageLog.fromJSON(e));
            }
        }
        if (object.info !== undefined && object.info !== null) {
            message.info = String(object.info);
        }
        else {
            message.info = "";
        }
        if (object.gas_wanted !== undefined && object.gas_wanted !== null) {
            message.gas_wanted = Number(object.gas_wanted);
        }
        else {
            message.gas_wanted = 0;
        }
        if (object.gas_used !== undefined && object.gas_used !== null) {
            message.gas_used = Number(object.gas_used);
        }
        else {
            message.gas_used = 0;
        }
        if (object.tx !== undefined && object.tx !== null) {
            message.tx = any_1.Any.fromJSON(object.tx);
        }
        else {
            message.tx = undefined;
        }
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = String(object.timestamp);
        }
        else {
            message.timestamp = "";
        }
        if (object.events !== undefined && object.events !== null) {
            for (const e of object.events) {
                message.events.push(types_1.Event.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined && (obj.height = message.height);
        message.txhash !== undefined && (obj.txhash = message.txhash);
        message.codespace !== undefined && (obj.codespace = message.codespace);
        message.code !== undefined && (obj.code = message.code);
        message.data !== undefined && (obj.data = message.data);
        message.raw_log !== undefined && (obj.raw_log = message.raw_log);
        if (message.logs) {
            obj.logs = message.logs.map((e) => e ? exports.ABCIMessageLog.toJSON(e) : undefined);
        }
        else {
            obj.logs = [];
        }
        message.info !== undefined && (obj.info = message.info);
        message.gas_wanted !== undefined && (obj.gas_wanted = message.gas_wanted);
        message.gas_used !== undefined && (obj.gas_used = message.gas_used);
        message.tx !== undefined &&
            (obj.tx = message.tx ? any_1.Any.toJSON(message.tx) : undefined);
        message.timestamp !== undefined && (obj.timestamp = message.timestamp);
        if (message.events) {
            obj.events = message.events.map((e) => (e ? types_1.Event.toJSON(e) : undefined));
        }
        else {
            obj.events = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseTxResponse);
        message.logs = [];
        message.events = [];
        if (object.height !== undefined && object.height !== null) {
            message.height = object.height;
        }
        else {
            message.height = 0;
        }
        if (object.txhash !== undefined && object.txhash !== null) {
            message.txhash = object.txhash;
        }
        else {
            message.txhash = "";
        }
        if (object.codespace !== undefined && object.codespace !== null) {
            message.codespace = object.codespace;
        }
        else {
            message.codespace = "";
        }
        if (object.code !== undefined && object.code !== null) {
            message.code = object.code;
        }
        else {
            message.code = 0;
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = object.data;
        }
        else {
            message.data = "";
        }
        if (object.raw_log !== undefined && object.raw_log !== null) {
            message.raw_log = object.raw_log;
        }
        else {
            message.raw_log = "";
        }
        if (object.logs !== undefined && object.logs !== null) {
            for (const e of object.logs) {
                message.logs.push(exports.ABCIMessageLog.fromPartial(e));
            }
        }
        if (object.info !== undefined && object.info !== null) {
            message.info = object.info;
        }
        else {
            message.info = "";
        }
        if (object.gas_wanted !== undefined && object.gas_wanted !== null) {
            message.gas_wanted = object.gas_wanted;
        }
        else {
            message.gas_wanted = 0;
        }
        if (object.gas_used !== undefined && object.gas_used !== null) {
            message.gas_used = object.gas_used;
        }
        else {
            message.gas_used = 0;
        }
        if (object.tx !== undefined && object.tx !== null) {
            message.tx = any_1.Any.fromPartial(object.tx);
        }
        else {
            message.tx = undefined;
        }
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = object.timestamp;
        }
        else {
            message.timestamp = "";
        }
        if (object.events !== undefined && object.events !== null) {
            for (const e of object.events) {
                message.events.push(types_1.Event.fromPartial(e));
            }
        }
        return message;
    },
};
const baseABCIMessageLog = { msg_index: 0, log: "" };
exports.ABCIMessageLog = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.msg_index !== 0) {
            writer.uint32(8).uint32(message.msg_index);
        }
        if (message.log !== "") {
            writer.uint32(18).string(message.log);
        }
        for (const v of message.events) {
            exports.StringEvent.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseABCIMessageLog);
        message.events = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.msg_index = reader.uint32();
                    break;
                case 2:
                    message.log = reader.string();
                    break;
                case 3:
                    message.events.push(exports.StringEvent.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseABCIMessageLog);
        message.events = [];
        if (object.msg_index !== undefined && object.msg_index !== null) {
            message.msg_index = Number(object.msg_index);
        }
        else {
            message.msg_index = 0;
        }
        if (object.log !== undefined && object.log !== null) {
            message.log = String(object.log);
        }
        else {
            message.log = "";
        }
        if (object.events !== undefined && object.events !== null) {
            for (const e of object.events) {
                message.events.push(exports.StringEvent.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.msg_index !== undefined && (obj.msg_index = message.msg_index);
        message.log !== undefined && (obj.log = message.log);
        if (message.events) {
            obj.events = message.events.map((e) => e ? exports.StringEvent.toJSON(e) : undefined);
        }
        else {
            obj.events = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseABCIMessageLog);
        message.events = [];
        if (object.msg_index !== undefined && object.msg_index !== null) {
            message.msg_index = object.msg_index;
        }
        else {
            message.msg_index = 0;
        }
        if (object.log !== undefined && object.log !== null) {
            message.log = object.log;
        }
        else {
            message.log = "";
        }
        if (object.events !== undefined && object.events !== null) {
            for (const e of object.events) {
                message.events.push(exports.StringEvent.fromPartial(e));
            }
        }
        return message;
    },
};
const baseStringEvent = { type: "" };
exports.StringEvent = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.type !== "") {
            writer.uint32(10).string(message.type);
        }
        for (const v of message.attributes) {
            exports.Attribute.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseStringEvent);
        message.attributes = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.string();
                    break;
                case 2:
                    message.attributes.push(exports.Attribute.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseStringEvent);
        message.attributes = [];
        if (object.type !== undefined && object.type !== null) {
            message.type = String(object.type);
        }
        else {
            message.type = "";
        }
        if (object.attributes !== undefined && object.attributes !== null) {
            for (const e of object.attributes) {
                message.attributes.push(exports.Attribute.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.type !== undefined && (obj.type = message.type);
        if (message.attributes) {
            obj.attributes = message.attributes.map((e) => e ? exports.Attribute.toJSON(e) : undefined);
        }
        else {
            obj.attributes = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseStringEvent);
        message.attributes = [];
        if (object.type !== undefined && object.type !== null) {
            message.type = object.type;
        }
        else {
            message.type = "";
        }
        if (object.attributes !== undefined && object.attributes !== null) {
            for (const e of object.attributes) {
                message.attributes.push(exports.Attribute.fromPartial(e));
            }
        }
        return message;
    },
};
const baseAttribute = { key: "", value: "" };
exports.Attribute = {
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
        const message = Object.assign({}, baseAttribute);
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
        const message = Object.assign({}, baseAttribute);
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
        const message = Object.assign({}, baseAttribute);
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
const baseGasInfo = { gas_wanted: 0, gas_used: 0 };
exports.GasInfo = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.gas_wanted !== 0) {
            writer.uint32(8).uint64(message.gas_wanted);
        }
        if (message.gas_used !== 0) {
            writer.uint32(16).uint64(message.gas_used);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGasInfo);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.gas_wanted = (0, __1.longToNumber)(reader.uint64());
                    break;
                case 2:
                    message.gas_used = (0, __1.longToNumber)(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGasInfo);
        if (object.gas_wanted !== undefined && object.gas_wanted !== null) {
            message.gas_wanted = Number(object.gas_wanted);
        }
        else {
            message.gas_wanted = 0;
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
        message.gas_wanted !== undefined && (obj.gas_wanted = message.gas_wanted);
        message.gas_used !== undefined && (obj.gas_used = message.gas_used);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseGasInfo);
        if (object.gas_wanted !== undefined && object.gas_wanted !== null) {
            message.gas_wanted = object.gas_wanted;
        }
        else {
            message.gas_wanted = 0;
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
const baseResult = { log: "" };
exports.Result = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.data.length !== 0) {
            writer.uint32(10).bytes(message.data);
        }
        if (message.log !== "") {
            writer.uint32(18).string(message.log);
        }
        for (const v of message.events) {
            types_1.Event.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseResult);
        message.events = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.data = reader.bytes();
                    break;
                case 2:
                    message.log = reader.string();
                    break;
                case 3:
                    message.events.push(types_1.Event.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseResult);
        message.events = [];
        if (object.data !== undefined && object.data !== null) {
            message.data = (0, __1.bytesFromBase64)(object.data);
        }
        if (object.log !== undefined && object.log !== null) {
            message.log = String(object.log);
        }
        else {
            message.log = "";
        }
        if (object.events !== undefined && object.events !== null) {
            for (const e of object.events) {
                message.events.push(types_1.Event.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.data !== undefined &&
            (obj.data = (0, __1.base64FromBytes)(message.data !== undefined ? message.data : new Uint8Array()));
        message.log !== undefined && (obj.log = message.log);
        if (message.events) {
            obj.events = message.events.map((e) => (e ? types_1.Event.toJSON(e) : undefined));
        }
        else {
            obj.events = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseResult);
        message.events = [];
        if (object.data !== undefined && object.data !== null) {
            message.data = object.data;
        }
        else {
            message.data = new Uint8Array();
        }
        if (object.log !== undefined && object.log !== null) {
            message.log = object.log;
        }
        else {
            message.log = "";
        }
        if (object.events !== undefined && object.events !== null) {
            for (const e of object.events) {
                message.events.push(types_1.Event.fromPartial(e));
            }
        }
        return message;
    },
};
const baseSimulationResponse = {};
exports.SimulationResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.gas_info !== undefined) {
            exports.GasInfo.encode(message.gas_info, writer.uint32(10).fork()).ldelim();
        }
        if (message.result !== undefined) {
            exports.Result.encode(message.result, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseSimulationResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.gas_info = exports.GasInfo.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.result = exports.Result.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseSimulationResponse);
        if (object.gas_info !== undefined && object.gas_info !== null) {
            message.gas_info = exports.GasInfo.fromJSON(object.gas_info);
        }
        else {
            message.gas_info = undefined;
        }
        if (object.result !== undefined && object.result !== null) {
            message.result = exports.Result.fromJSON(object.result);
        }
        else {
            message.result = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.gas_info !== undefined &&
            (obj.gas_info = message.gas_info
                ? exports.GasInfo.toJSON(message.gas_info)
                : undefined);
        message.result !== undefined &&
            (obj.result = message.result ? exports.Result.toJSON(message.result) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseSimulationResponse);
        if (object.gas_info !== undefined && object.gas_info !== null) {
            message.gas_info = exports.GasInfo.fromPartial(object.gas_info);
        }
        else {
            message.gas_info = undefined;
        }
        if (object.result !== undefined && object.result !== null) {
            message.result = exports.Result.fromPartial(object.result);
        }
        else {
            message.result = undefined;
        }
        return message;
    },
};
const baseMsgData = { msg_type: "" };
exports.MsgData = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.msg_type !== "") {
            writer.uint32(10).string(message.msg_type);
        }
        if (message.data.length !== 0) {
            writer.uint32(18).bytes(message.data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgData);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.msg_type = reader.string();
                    break;
                case 2:
                    message.data = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMsgData);
        if (object.msg_type !== undefined && object.msg_type !== null) {
            message.msg_type = String(object.msg_type);
        }
        else {
            message.msg_type = "";
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = (0, __1.bytesFromBase64)(object.data);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.msg_type !== undefined && (obj.msg_type = message.msg_type);
        message.data !== undefined &&
            (obj.data = (0, __1.base64FromBytes)(message.data !== undefined ? message.data : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMsgData);
        if (object.msg_type !== undefined && object.msg_type !== null) {
            message.msg_type = object.msg_type;
        }
        else {
            message.msg_type = "";
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = object.data;
        }
        else {
            message.data = new Uint8Array();
        }
        return message;
    },
};
const baseTxMsgData = {};
exports.TxMsgData = {
    encode(message, writer = minimal_1.Writer.create()) {
        for (const v of message.data) {
            exports.MsgData.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseTxMsgData);
        message.data = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.data.push(exports.MsgData.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseTxMsgData);
        message.data = [];
        if (object.data !== undefined && object.data !== null) {
            for (const e of object.data) {
                message.data.push(exports.MsgData.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.data) {
            obj.data = message.data.map((e) => (e ? exports.MsgData.toJSON(e) : undefined));
        }
        else {
            obj.data = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseTxMsgData);
        message.data = [];
        if (object.data !== undefined && object.data !== null) {
            for (const e of object.data) {
                message.data.push(exports.MsgData.fromPartial(e));
            }
        }
        return message;
    },
};
const baseSearchTxsResult = {
    total_count: 0,
    count: 0,
    page_number: 0,
    page_total: 0,
    limit: 0,
};
exports.SearchTxsResult = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.total_count !== 0) {
            writer.uint32(8).uint64(message.total_count);
        }
        if (message.count !== 0) {
            writer.uint32(16).uint64(message.count);
        }
        if (message.page_number !== 0) {
            writer.uint32(24).uint64(message.page_number);
        }
        if (message.page_total !== 0) {
            writer.uint32(32).uint64(message.page_total);
        }
        if (message.limit !== 0) {
            writer.uint32(40).uint64(message.limit);
        }
        for (const v of message.txs) {
            exports.TxResponse.encode(v, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseSearchTxsResult);
        message.txs = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.total_count = (0, __1.longToNumber)(reader.uint64());
                    break;
                case 2:
                    message.count = (0, __1.longToNumber)(reader.uint64());
                    break;
                case 3:
                    message.page_number = (0, __1.longToNumber)(reader.uint64());
                    break;
                case 4:
                    message.page_total = (0, __1.longToNumber)(reader.uint64());
                    break;
                case 5:
                    message.limit = (0, __1.longToNumber)(reader.uint64());
                    break;
                case 6:
                    message.txs.push(exports.TxResponse.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseSearchTxsResult);
        message.txs = [];
        if (object.total_count !== undefined && object.total_count !== null) {
            message.total_count = Number(object.total_count);
        }
        else {
            message.total_count = 0;
        }
        if (object.count !== undefined && object.count !== null) {
            message.count = Number(object.count);
        }
        else {
            message.count = 0;
        }
        if (object.page_number !== undefined && object.page_number !== null) {
            message.page_number = Number(object.page_number);
        }
        else {
            message.page_number = 0;
        }
        if (object.page_total !== undefined && object.page_total !== null) {
            message.page_total = Number(object.page_total);
        }
        else {
            message.page_total = 0;
        }
        if (object.limit !== undefined && object.limit !== null) {
            message.limit = Number(object.limit);
        }
        else {
            message.limit = 0;
        }
        if (object.txs !== undefined && object.txs !== null) {
            for (const e of object.txs) {
                message.txs.push(exports.TxResponse.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.total_count !== undefined &&
            (obj.total_count = message.total_count);
        message.count !== undefined && (obj.count = message.count);
        message.page_number !== undefined &&
            (obj.page_number = message.page_number);
        message.page_total !== undefined && (obj.page_total = message.page_total);
        message.limit !== undefined && (obj.limit = message.limit);
        if (message.txs) {
            obj.txs = message.txs.map((e) => (e ? exports.TxResponse.toJSON(e) : undefined));
        }
        else {
            obj.txs = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseSearchTxsResult);
        message.txs = [];
        if (object.total_count !== undefined && object.total_count !== null) {
            message.total_count = object.total_count;
        }
        else {
            message.total_count = 0;
        }
        if (object.count !== undefined && object.count !== null) {
            message.count = object.count;
        }
        else {
            message.count = 0;
        }
        if (object.page_number !== undefined && object.page_number !== null) {
            message.page_number = object.page_number;
        }
        else {
            message.page_number = 0;
        }
        if (object.page_total !== undefined && object.page_total !== null) {
            message.page_total = object.page_total;
        }
        else {
            message.page_total = 0;
        }
        if (object.limit !== undefined && object.limit !== null) {
            message.limit = object.limit;
        }
        else {
            message.limit = 0;
        }
        if (object.txs !== undefined && object.txs !== null) {
            for (const e of object.txs) {
                message.txs.push(exports.TxResponse.fromPartial(e));
            }
        }
        return message;
    },
};
