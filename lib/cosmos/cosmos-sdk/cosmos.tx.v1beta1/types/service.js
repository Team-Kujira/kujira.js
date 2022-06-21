/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Tx } from "./tx";
import { bytesFromBase64, base64FromBytes, longToNumber, } from "../../../../types";
import { TxResponse, GasInfo, Result, } from "../../../../types/cosmos/base/abci";
import { PageRequest, PageResponse, } from "../../../../types/cosmos/base/query/pagination";
import { BlockID } from "../../../../types/tendermint/types/types";
import { Block } from "../../../../types/tendermint/types/block";
export const protobufPackage = "cosmos.tx.v1beta1";
/** OrderBy defines the sorting order */
export var OrderBy;
(function (OrderBy) {
    /** ORDER_BY_UNSPECIFIED - ORDER_BY_UNSPECIFIED specifies an unknown sorting order. OrderBy defaults to ASC in this case. */
    OrderBy[OrderBy["ORDER_BY_UNSPECIFIED"] = 0] = "ORDER_BY_UNSPECIFIED";
    /** ORDER_BY_ASC - ORDER_BY_ASC defines ascending order */
    OrderBy[OrderBy["ORDER_BY_ASC"] = 1] = "ORDER_BY_ASC";
    /** ORDER_BY_DESC - ORDER_BY_DESC defines descending order */
    OrderBy[OrderBy["ORDER_BY_DESC"] = 2] = "ORDER_BY_DESC";
    OrderBy[OrderBy["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(OrderBy || (OrderBy = {}));
export function orderByFromJSON(object) {
    switch (object) {
        case 0:
        case "ORDER_BY_UNSPECIFIED":
            return OrderBy.ORDER_BY_UNSPECIFIED;
        case 1:
        case "ORDER_BY_ASC":
            return OrderBy.ORDER_BY_ASC;
        case 2:
        case "ORDER_BY_DESC":
            return OrderBy.ORDER_BY_DESC;
        case -1:
        case "UNRECOGNIZED":
        default:
            return OrderBy.UNRECOGNIZED;
    }
}
export function orderByToJSON(object) {
    switch (object) {
        case OrderBy.ORDER_BY_UNSPECIFIED:
            return "ORDER_BY_UNSPECIFIED";
        case OrderBy.ORDER_BY_ASC:
            return "ORDER_BY_ASC";
        case OrderBy.ORDER_BY_DESC:
            return "ORDER_BY_DESC";
        default:
            return "UNKNOWN";
    }
}
/** BroadcastMode specifies the broadcast mode for the TxService.Broadcast RPC method. */
export var BroadcastMode;
(function (BroadcastMode) {
    /** BROADCAST_MODE_UNSPECIFIED - zero-value for mode ordering */
    BroadcastMode[BroadcastMode["BROADCAST_MODE_UNSPECIFIED"] = 0] = "BROADCAST_MODE_UNSPECIFIED";
    /**
     * BROADCAST_MODE_BLOCK - BROADCAST_MODE_BLOCK defines a tx broadcasting mode where the client waits for
     * the tx to be committed in a block.
     */
    BroadcastMode[BroadcastMode["BROADCAST_MODE_BLOCK"] = 1] = "BROADCAST_MODE_BLOCK";
    /**
     * BROADCAST_MODE_SYNC - BROADCAST_MODE_SYNC defines a tx broadcasting mode where the client waits for
     * a CheckTx execution response only.
     */
    BroadcastMode[BroadcastMode["BROADCAST_MODE_SYNC"] = 2] = "BROADCAST_MODE_SYNC";
    /**
     * BROADCAST_MODE_ASYNC - BROADCAST_MODE_ASYNC defines a tx broadcasting mode where the client returns
     * immediately.
     */
    BroadcastMode[BroadcastMode["BROADCAST_MODE_ASYNC"] = 3] = "BROADCAST_MODE_ASYNC";
    BroadcastMode[BroadcastMode["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(BroadcastMode || (BroadcastMode = {}));
export function broadcastModeFromJSON(object) {
    switch (object) {
        case 0:
        case "BROADCAST_MODE_UNSPECIFIED":
            return BroadcastMode.BROADCAST_MODE_UNSPECIFIED;
        case 1:
        case "BROADCAST_MODE_BLOCK":
            return BroadcastMode.BROADCAST_MODE_BLOCK;
        case 2:
        case "BROADCAST_MODE_SYNC":
            return BroadcastMode.BROADCAST_MODE_SYNC;
        case 3:
        case "BROADCAST_MODE_ASYNC":
            return BroadcastMode.BROADCAST_MODE_ASYNC;
        case -1:
        case "UNRECOGNIZED":
        default:
            return BroadcastMode.UNRECOGNIZED;
    }
}
export function broadcastModeToJSON(object) {
    switch (object) {
        case BroadcastMode.BROADCAST_MODE_UNSPECIFIED:
            return "BROADCAST_MODE_UNSPECIFIED";
        case BroadcastMode.BROADCAST_MODE_BLOCK:
            return "BROADCAST_MODE_BLOCK";
        case BroadcastMode.BROADCAST_MODE_SYNC:
            return "BROADCAST_MODE_SYNC";
        case BroadcastMode.BROADCAST_MODE_ASYNC:
            return "BROADCAST_MODE_ASYNC";
        default:
            return "UNKNOWN";
    }
}
const baseGetTxsEventRequest = { events: "", order_by: 0 };
export const GetTxsEventRequest = {
    encode(message, writer = Writer.create()) {
        for (const v of message.events) {
            writer.uint32(10).string(v);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        if (message.order_by !== 0) {
            writer.uint32(24).int32(message.order_by);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetTxsEventRequest);
        message.events = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.events.push(reader.string());
                    break;
                case 2:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.order_by = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGetTxsEventRequest);
        message.events = [];
        if (object.events !== undefined && object.events !== null) {
            for (const e of object.events) {
                message.events.push(String(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        if (object.order_by !== undefined && object.order_by !== null) {
            message.order_by = orderByFromJSON(object.order_by);
        }
        else {
            message.order_by = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.events) {
            obj.events = message.events.map((e) => e);
        }
        else {
            obj.events = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageRequest.toJSON(message.pagination)
                : undefined);
        message.order_by !== undefined &&
            (obj.order_by = orderByToJSON(message.order_by));
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseGetTxsEventRequest);
        message.events = [];
        if (object.events !== undefined && object.events !== null) {
            for (const e of object.events) {
                message.events.push(e);
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        if (object.order_by !== undefined && object.order_by !== null) {
            message.order_by = object.order_by;
        }
        else {
            message.order_by = 0;
        }
        return message;
    },
};
const baseGetTxsEventResponse = {};
export const GetTxsEventResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.txs) {
            Tx.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.tx_responses) {
            TxResponse.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetTxsEventResponse);
        message.txs = [];
        message.tx_responses = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.txs.push(Tx.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.tx_responses.push(TxResponse.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGetTxsEventResponse);
        message.txs = [];
        message.tx_responses = [];
        if (object.txs !== undefined && object.txs !== null) {
            for (const e of object.txs) {
                message.txs.push(Tx.fromJSON(e));
            }
        }
        if (object.tx_responses !== undefined && object.tx_responses !== null) {
            for (const e of object.tx_responses) {
                message.tx_responses.push(TxResponse.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.txs) {
            obj.txs = message.txs.map((e) => (e ? Tx.toJSON(e) : undefined));
        }
        else {
            obj.txs = [];
        }
        if (message.tx_responses) {
            obj.tx_responses = message.tx_responses.map((e) => e ? TxResponse.toJSON(e) : undefined);
        }
        else {
            obj.tx_responses = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseGetTxsEventResponse);
        message.txs = [];
        message.tx_responses = [];
        if (object.txs !== undefined && object.txs !== null) {
            for (const e of object.txs) {
                message.txs.push(Tx.fromPartial(e));
            }
        }
        if (object.tx_responses !== undefined && object.tx_responses !== null) {
            for (const e of object.tx_responses) {
                message.tx_responses.push(TxResponse.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseBroadcastTxRequest = { mode: 0 };
export const BroadcastTxRequest = {
    encode(message, writer = Writer.create()) {
        if (message.tx_bytes.length !== 0) {
            writer.uint32(10).bytes(message.tx_bytes);
        }
        if (message.mode !== 0) {
            writer.uint32(16).int32(message.mode);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseBroadcastTxRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tx_bytes = reader.bytes();
                    break;
                case 2:
                    message.mode = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseBroadcastTxRequest);
        if (object.tx_bytes !== undefined && object.tx_bytes !== null) {
            message.tx_bytes = bytesFromBase64(object.tx_bytes);
        }
        if (object.mode !== undefined && object.mode !== null) {
            message.mode = broadcastModeFromJSON(object.mode);
        }
        else {
            message.mode = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.tx_bytes !== undefined &&
            (obj.tx_bytes = base64FromBytes(message.tx_bytes !== undefined ? message.tx_bytes : new Uint8Array()));
        message.mode !== undefined &&
            (obj.mode = broadcastModeToJSON(message.mode));
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseBroadcastTxRequest);
        if (object.tx_bytes !== undefined && object.tx_bytes !== null) {
            message.tx_bytes = object.tx_bytes;
        }
        else {
            message.tx_bytes = new Uint8Array();
        }
        if (object.mode !== undefined && object.mode !== null) {
            message.mode = object.mode;
        }
        else {
            message.mode = 0;
        }
        return message;
    },
};
const baseBroadcastTxResponse = {};
export const BroadcastTxResponse = {
    encode(message, writer = Writer.create()) {
        if (message.tx_response !== undefined) {
            TxResponse.encode(message.tx_response, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseBroadcastTxResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tx_response = TxResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseBroadcastTxResponse);
        if (object.tx_response !== undefined && object.tx_response !== null) {
            message.tx_response = TxResponse.fromJSON(object.tx_response);
        }
        else {
            message.tx_response = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.tx_response !== undefined &&
            (obj.tx_response = message.tx_response
                ? TxResponse.toJSON(message.tx_response)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseBroadcastTxResponse);
        if (object.tx_response !== undefined && object.tx_response !== null) {
            message.tx_response = TxResponse.fromPartial(object.tx_response);
        }
        else {
            message.tx_response = undefined;
        }
        return message;
    },
};
const baseSimulateRequest = {};
export const SimulateRequest = {
    encode(message, writer = Writer.create()) {
        if (message.tx !== undefined) {
            Tx.encode(message.tx, writer.uint32(10).fork()).ldelim();
        }
        if (message.tx_bytes.length !== 0) {
            writer.uint32(18).bytes(message.tx_bytes);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseSimulateRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tx = Tx.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.tx_bytes = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseSimulateRequest);
        if (object.tx !== undefined && object.tx !== null) {
            message.tx = Tx.fromJSON(object.tx);
        }
        else {
            message.tx = undefined;
        }
        if (object.tx_bytes !== undefined && object.tx_bytes !== null) {
            message.tx_bytes = bytesFromBase64(object.tx_bytes);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.tx !== undefined &&
            (obj.tx = message.tx ? Tx.toJSON(message.tx) : undefined);
        message.tx_bytes !== undefined &&
            (obj.tx_bytes = base64FromBytes(message.tx_bytes !== undefined ? message.tx_bytes : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseSimulateRequest);
        if (object.tx !== undefined && object.tx !== null) {
            message.tx = Tx.fromPartial(object.tx);
        }
        else {
            message.tx = undefined;
        }
        if (object.tx_bytes !== undefined && object.tx_bytes !== null) {
            message.tx_bytes = object.tx_bytes;
        }
        else {
            message.tx_bytes = new Uint8Array();
        }
        return message;
    },
};
const baseSimulateResponse = {};
export const SimulateResponse = {
    encode(message, writer = Writer.create()) {
        if (message.gas_info !== undefined) {
            GasInfo.encode(message.gas_info, writer.uint32(10).fork()).ldelim();
        }
        if (message.result !== undefined) {
            Result.encode(message.result, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseSimulateResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.gas_info = GasInfo.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.result = Result.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseSimulateResponse);
        if (object.gas_info !== undefined && object.gas_info !== null) {
            message.gas_info = GasInfo.fromJSON(object.gas_info);
        }
        else {
            message.gas_info = undefined;
        }
        if (object.result !== undefined && object.result !== null) {
            message.result = Result.fromJSON(object.result);
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
                ? GasInfo.toJSON(message.gas_info)
                : undefined);
        message.result !== undefined &&
            (obj.result = message.result ? Result.toJSON(message.result) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseSimulateResponse);
        if (object.gas_info !== undefined && object.gas_info !== null) {
            message.gas_info = GasInfo.fromPartial(object.gas_info);
        }
        else {
            message.gas_info = undefined;
        }
        if (object.result !== undefined && object.result !== null) {
            message.result = Result.fromPartial(object.result);
        }
        else {
            message.result = undefined;
        }
        return message;
    },
};
const baseGetTxRequest = { hash: "" };
export const GetTxRequest = {
    encode(message, writer = Writer.create()) {
        if (message.hash !== "") {
            writer.uint32(10).string(message.hash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetTxRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hash = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGetTxRequest);
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = String(object.hash);
        }
        else {
            message.hash = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.hash !== undefined && (obj.hash = message.hash);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseGetTxRequest);
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = object.hash;
        }
        else {
            message.hash = "";
        }
        return message;
    },
};
const baseGetTxResponse = {};
export const GetTxResponse = {
    encode(message, writer = Writer.create()) {
        if (message.tx !== undefined) {
            Tx.encode(message.tx, writer.uint32(10).fork()).ldelim();
        }
        if (message.tx_response !== undefined) {
            TxResponse.encode(message.tx_response, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetTxResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tx = Tx.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.tx_response = TxResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGetTxResponse);
        if (object.tx !== undefined && object.tx !== null) {
            message.tx = Tx.fromJSON(object.tx);
        }
        else {
            message.tx = undefined;
        }
        if (object.tx_response !== undefined && object.tx_response !== null) {
            message.tx_response = TxResponse.fromJSON(object.tx_response);
        }
        else {
            message.tx_response = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.tx !== undefined &&
            (obj.tx = message.tx ? Tx.toJSON(message.tx) : undefined);
        message.tx_response !== undefined &&
            (obj.tx_response = message.tx_response
                ? TxResponse.toJSON(message.tx_response)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseGetTxResponse);
        if (object.tx !== undefined && object.tx !== null) {
            message.tx = Tx.fromPartial(object.tx);
        }
        else {
            message.tx = undefined;
        }
        if (object.tx_response !== undefined && object.tx_response !== null) {
            message.tx_response = TxResponse.fromPartial(object.tx_response);
        }
        else {
            message.tx_response = undefined;
        }
        return message;
    },
};
const baseGetBlockWithTxsRequest = { height: 0 };
export const GetBlockWithTxsRequest = {
    encode(message, writer = Writer.create()) {
        if (message.height !== 0) {
            writer.uint32(8).int64(message.height);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetBlockWithTxsRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = longToNumber(reader.int64());
                    break;
                case 2:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGetBlockWithTxsRequest);
        if (object.height !== undefined && object.height !== null) {
            message.height = Number(object.height);
        }
        else {
            message.height = 0;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined && (obj.height = message.height);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseGetBlockWithTxsRequest);
        if (object.height !== undefined && object.height !== null) {
            message.height = object.height;
        }
        else {
            message.height = 0;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseGetBlockWithTxsResponse = {};
export const GetBlockWithTxsResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.txs) {
            Tx.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.block_id !== undefined) {
            BlockID.encode(message.block_id, writer.uint32(18).fork()).ldelim();
        }
        if (message.block !== undefined) {
            Block.encode(message.block, writer.uint32(26).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetBlockWithTxsResponse);
        message.txs = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.txs.push(Tx.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.block_id = BlockID.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.block = Block.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGetBlockWithTxsResponse);
        message.txs = [];
        if (object.txs !== undefined && object.txs !== null) {
            for (const e of object.txs) {
                message.txs.push(Tx.fromJSON(e));
            }
        }
        if (object.block_id !== undefined && object.block_id !== null) {
            message.block_id = BlockID.fromJSON(object.block_id);
        }
        else {
            message.block_id = undefined;
        }
        if (object.block !== undefined && object.block !== null) {
            message.block = Block.fromJSON(object.block);
        }
        else {
            message.block = undefined;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.txs) {
            obj.txs = message.txs.map((e) => (e ? Tx.toJSON(e) : undefined));
        }
        else {
            obj.txs = [];
        }
        message.block_id !== undefined &&
            (obj.block_id = message.block_id
                ? BlockID.toJSON(message.block_id)
                : undefined);
        message.block !== undefined &&
            (obj.block = message.block ? Block.toJSON(message.block) : undefined);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseGetBlockWithTxsResponse);
        message.txs = [];
        if (object.txs !== undefined && object.txs !== null) {
            for (const e of object.txs) {
                message.txs.push(Tx.fromPartial(e));
            }
        }
        if (object.block_id !== undefined && object.block_id !== null) {
            message.block_id = BlockID.fromPartial(object.block_id);
        }
        else {
            message.block_id = undefined;
        }
        if (object.block !== undefined && object.block !== null) {
            message.block = Block.fromPartial(object.block);
        }
        else {
            message.block = undefined;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
export class ServiceClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    Simulate(request) {
        const data = SimulateRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.tx.v1beta1.Service", "Simulate", data);
        return promise.then((data) => SimulateResponse.decode(new Reader(data)));
    }
    GetTx(request) {
        const data = GetTxRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.tx.v1beta1.Service", "GetTx", data);
        return promise.then((data) => GetTxResponse.decode(new Reader(data)));
    }
    BroadcastTx(request) {
        const data = BroadcastTxRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.tx.v1beta1.Service", "BroadcastTx", data);
        return promise.then((data) => BroadcastTxResponse.decode(new Reader(data)));
    }
    GetTxsEvent(request) {
        const data = GetTxsEventRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.tx.v1beta1.Service", "GetTxsEvent", data);
        return promise.then((data) => GetTxsEventResponse.decode(new Reader(data)));
    }
    GetBlockWithTxs(request) {
        const data = GetBlockWithTxsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.tx.v1beta1.Service", "GetBlockWithTxs", data);
        return promise.then((data) => GetBlockWithTxsResponse.decode(new Reader(data)));
    }
}
