/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import { Timestamp } from "../../google/protobuf/timestamp";
import * as Long from "long";
import { Header } from "../../tendermint/types/types";
import { ProofOps } from "../../tendermint/crypto/proof";
import { EvidenceParams, ValidatorParams, VersionParams, } from "../../tendermint/types/params";
import { PublicKey } from "../../tendermint/crypto/keys";
export const protobufPackage = "tendermint.abci";
export var CheckTxType;
(function (CheckTxType) {
    CheckTxType[CheckTxType["NEW"] = 0] = "NEW";
    CheckTxType[CheckTxType["RECHECK"] = 1] = "RECHECK";
    CheckTxType[CheckTxType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(CheckTxType || (CheckTxType = {}));
export function checkTxTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "NEW":
            return CheckTxType.NEW;
        case 1:
        case "RECHECK":
            return CheckTxType.RECHECK;
        case -1:
        case "UNRECOGNIZED":
        default:
            return CheckTxType.UNRECOGNIZED;
    }
}
export function checkTxTypeToJSON(object) {
    switch (object) {
        case CheckTxType.NEW:
            return "NEW";
        case CheckTxType.RECHECK:
            return "RECHECK";
        default:
            return "UNKNOWN";
    }
}
export var EvidenceType;
(function (EvidenceType) {
    EvidenceType[EvidenceType["UNKNOWN"] = 0] = "UNKNOWN";
    EvidenceType[EvidenceType["DUPLICATE_VOTE"] = 1] = "DUPLICATE_VOTE";
    EvidenceType[EvidenceType["LIGHT_CLIENT_ATTACK"] = 2] = "LIGHT_CLIENT_ATTACK";
    EvidenceType[EvidenceType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(EvidenceType || (EvidenceType = {}));
export function evidenceTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "UNKNOWN":
            return EvidenceType.UNKNOWN;
        case 1:
        case "DUPLICATE_VOTE":
            return EvidenceType.DUPLICATE_VOTE;
        case 2:
        case "LIGHT_CLIENT_ATTACK":
            return EvidenceType.LIGHT_CLIENT_ATTACK;
        case -1:
        case "UNRECOGNIZED":
        default:
            return EvidenceType.UNRECOGNIZED;
    }
}
export function evidenceTypeToJSON(object) {
    switch (object) {
        case EvidenceType.UNKNOWN:
            return "UNKNOWN";
        case EvidenceType.DUPLICATE_VOTE:
            return "DUPLICATE_VOTE";
        case EvidenceType.LIGHT_CLIENT_ATTACK:
            return "LIGHT_CLIENT_ATTACK";
        default:
            return "UNKNOWN";
    }
}
export var ResponseOfferSnapshot_Result;
(function (ResponseOfferSnapshot_Result) {
    /** UNKNOWN - Unknown result, abort all snapshot restoration */
    ResponseOfferSnapshot_Result[ResponseOfferSnapshot_Result["UNKNOWN"] = 0] = "UNKNOWN";
    /** ACCEPT - Snapshot accepted, apply chunks */
    ResponseOfferSnapshot_Result[ResponseOfferSnapshot_Result["ACCEPT"] = 1] = "ACCEPT";
    /** ABORT - Abort all snapshot restoration */
    ResponseOfferSnapshot_Result[ResponseOfferSnapshot_Result["ABORT"] = 2] = "ABORT";
    /** REJECT - Reject this specific snapshot, try others */
    ResponseOfferSnapshot_Result[ResponseOfferSnapshot_Result["REJECT"] = 3] = "REJECT";
    /** REJECT_FORMAT - Reject all snapshots of this format, try others */
    ResponseOfferSnapshot_Result[ResponseOfferSnapshot_Result["REJECT_FORMAT"] = 4] = "REJECT_FORMAT";
    /** REJECT_SENDER - Reject all snapshots from the sender(s), try others */
    ResponseOfferSnapshot_Result[ResponseOfferSnapshot_Result["REJECT_SENDER"] = 5] = "REJECT_SENDER";
    ResponseOfferSnapshot_Result[ResponseOfferSnapshot_Result["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ResponseOfferSnapshot_Result || (ResponseOfferSnapshot_Result = {}));
export function responseOfferSnapshot_ResultFromJSON(object) {
    switch (object) {
        case 0:
        case "UNKNOWN":
            return ResponseOfferSnapshot_Result.UNKNOWN;
        case 1:
        case "ACCEPT":
            return ResponseOfferSnapshot_Result.ACCEPT;
        case 2:
        case "ABORT":
            return ResponseOfferSnapshot_Result.ABORT;
        case 3:
        case "REJECT":
            return ResponseOfferSnapshot_Result.REJECT;
        case 4:
        case "REJECT_FORMAT":
            return ResponseOfferSnapshot_Result.REJECT_FORMAT;
        case 5:
        case "REJECT_SENDER":
            return ResponseOfferSnapshot_Result.REJECT_SENDER;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ResponseOfferSnapshot_Result.UNRECOGNIZED;
    }
}
export function responseOfferSnapshot_ResultToJSON(object) {
    switch (object) {
        case ResponseOfferSnapshot_Result.UNKNOWN:
            return "UNKNOWN";
        case ResponseOfferSnapshot_Result.ACCEPT:
            return "ACCEPT";
        case ResponseOfferSnapshot_Result.ABORT:
            return "ABORT";
        case ResponseOfferSnapshot_Result.REJECT:
            return "REJECT";
        case ResponseOfferSnapshot_Result.REJECT_FORMAT:
            return "REJECT_FORMAT";
        case ResponseOfferSnapshot_Result.REJECT_SENDER:
            return "REJECT_SENDER";
        default:
            return "UNKNOWN";
    }
}
export var ResponseApplySnapshotChunk_Result;
(function (ResponseApplySnapshotChunk_Result) {
    /** UNKNOWN - Unknown result, abort all snapshot restoration */
    ResponseApplySnapshotChunk_Result[ResponseApplySnapshotChunk_Result["UNKNOWN"] = 0] = "UNKNOWN";
    /** ACCEPT - Chunk successfully accepted */
    ResponseApplySnapshotChunk_Result[ResponseApplySnapshotChunk_Result["ACCEPT"] = 1] = "ACCEPT";
    /** ABORT - Abort all snapshot restoration */
    ResponseApplySnapshotChunk_Result[ResponseApplySnapshotChunk_Result["ABORT"] = 2] = "ABORT";
    /** RETRY - Retry chunk (combine with refetch and reject) */
    ResponseApplySnapshotChunk_Result[ResponseApplySnapshotChunk_Result["RETRY"] = 3] = "RETRY";
    /** RETRY_SNAPSHOT - Retry snapshot (combine with refetch and reject) */
    ResponseApplySnapshotChunk_Result[ResponseApplySnapshotChunk_Result["RETRY_SNAPSHOT"] = 4] = "RETRY_SNAPSHOT";
    /** REJECT_SNAPSHOT - Reject this snapshot, try others */
    ResponseApplySnapshotChunk_Result[ResponseApplySnapshotChunk_Result["REJECT_SNAPSHOT"] = 5] = "REJECT_SNAPSHOT";
    ResponseApplySnapshotChunk_Result[ResponseApplySnapshotChunk_Result["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ResponseApplySnapshotChunk_Result || (ResponseApplySnapshotChunk_Result = {}));
export function responseApplySnapshotChunk_ResultFromJSON(object) {
    switch (object) {
        case 0:
        case "UNKNOWN":
            return ResponseApplySnapshotChunk_Result.UNKNOWN;
        case 1:
        case "ACCEPT":
            return ResponseApplySnapshotChunk_Result.ACCEPT;
        case 2:
        case "ABORT":
            return ResponseApplySnapshotChunk_Result.ABORT;
        case 3:
        case "RETRY":
            return ResponseApplySnapshotChunk_Result.RETRY;
        case 4:
        case "RETRY_SNAPSHOT":
            return ResponseApplySnapshotChunk_Result.RETRY_SNAPSHOT;
        case 5:
        case "REJECT_SNAPSHOT":
            return ResponseApplySnapshotChunk_Result.REJECT_SNAPSHOT;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ResponseApplySnapshotChunk_Result.UNRECOGNIZED;
    }
}
export function responseApplySnapshotChunk_ResultToJSON(object) {
    switch (object) {
        case ResponseApplySnapshotChunk_Result.UNKNOWN:
            return "UNKNOWN";
        case ResponseApplySnapshotChunk_Result.ACCEPT:
            return "ACCEPT";
        case ResponseApplySnapshotChunk_Result.ABORT:
            return "ABORT";
        case ResponseApplySnapshotChunk_Result.RETRY:
            return "RETRY";
        case ResponseApplySnapshotChunk_Result.RETRY_SNAPSHOT:
            return "RETRY_SNAPSHOT";
        case ResponseApplySnapshotChunk_Result.REJECT_SNAPSHOT:
            return "REJECT_SNAPSHOT";
        default:
            return "UNKNOWN";
    }
}
const baseRequest = {};
export const Request = {
    encode(message, writer = Writer.create()) {
        if (message.echo !== undefined) {
            RequestEcho.encode(message.echo, writer.uint32(10).fork()).ldelim();
        }
        if (message.flush !== undefined) {
            RequestFlush.encode(message.flush, writer.uint32(18).fork()).ldelim();
        }
        if (message.info !== undefined) {
            RequestInfo.encode(message.info, writer.uint32(26).fork()).ldelim();
        }
        if (message.set_option !== undefined) {
            RequestSetOption.encode(message.set_option, writer.uint32(34).fork()).ldelim();
        }
        if (message.init_chain !== undefined) {
            RequestInitChain.encode(message.init_chain, writer.uint32(42).fork()).ldelim();
        }
        if (message.query !== undefined) {
            RequestQuery.encode(message.query, writer.uint32(50).fork()).ldelim();
        }
        if (message.begin_block !== undefined) {
            RequestBeginBlock.encode(message.begin_block, writer.uint32(58).fork()).ldelim();
        }
        if (message.check_tx !== undefined) {
            RequestCheckTx.encode(message.check_tx, writer.uint32(66).fork()).ldelim();
        }
        if (message.deliver_tx !== undefined) {
            RequestDeliverTx.encode(message.deliver_tx, writer.uint32(74).fork()).ldelim();
        }
        if (message.end_block !== undefined) {
            RequestEndBlock.encode(message.end_block, writer.uint32(82).fork()).ldelim();
        }
        if (message.commit !== undefined) {
            RequestCommit.encode(message.commit, writer.uint32(90).fork()).ldelim();
        }
        if (message.list_snapshots !== undefined) {
            RequestListSnapshots.encode(message.list_snapshots, writer.uint32(98).fork()).ldelim();
        }
        if (message.offer_snapshot !== undefined) {
            RequestOfferSnapshot.encode(message.offer_snapshot, writer.uint32(106).fork()).ldelim();
        }
        if (message.load_snapshot_chunk !== undefined) {
            RequestLoadSnapshotChunk.encode(message.load_snapshot_chunk, writer.uint32(114).fork()).ldelim();
        }
        if (message.apply_snapshot_chunk !== undefined) {
            RequestApplySnapshotChunk.encode(message.apply_snapshot_chunk, writer.uint32(122).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.echo = RequestEcho.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.flush = RequestFlush.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.info = RequestInfo.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.set_option = RequestSetOption.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.init_chain = RequestInitChain.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.query = RequestQuery.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.begin_block = RequestBeginBlock.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.check_tx = RequestCheckTx.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.deliver_tx = RequestDeliverTx.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.end_block = RequestEndBlock.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.commit = RequestCommit.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.list_snapshots = RequestListSnapshots.decode(reader, reader.uint32());
                    break;
                case 13:
                    message.offer_snapshot = RequestOfferSnapshot.decode(reader, reader.uint32());
                    break;
                case 14:
                    message.load_snapshot_chunk = RequestLoadSnapshotChunk.decode(reader, reader.uint32());
                    break;
                case 15:
                    message.apply_snapshot_chunk = RequestApplySnapshotChunk.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseRequest);
        if (object.echo !== undefined && object.echo !== null) {
            message.echo = RequestEcho.fromJSON(object.echo);
        }
        else {
            message.echo = undefined;
        }
        if (object.flush !== undefined && object.flush !== null) {
            message.flush = RequestFlush.fromJSON(object.flush);
        }
        else {
            message.flush = undefined;
        }
        if (object.info !== undefined && object.info !== null) {
            message.info = RequestInfo.fromJSON(object.info);
        }
        else {
            message.info = undefined;
        }
        if (object.set_option !== undefined && object.set_option !== null) {
            message.set_option = RequestSetOption.fromJSON(object.set_option);
        }
        else {
            message.set_option = undefined;
        }
        if (object.init_chain !== undefined && object.init_chain !== null) {
            message.init_chain = RequestInitChain.fromJSON(object.init_chain);
        }
        else {
            message.init_chain = undefined;
        }
        if (object.query !== undefined && object.query !== null) {
            message.query = RequestQuery.fromJSON(object.query);
        }
        else {
            message.query = undefined;
        }
        if (object.begin_block !== undefined && object.begin_block !== null) {
            message.begin_block = RequestBeginBlock.fromJSON(object.begin_block);
        }
        else {
            message.begin_block = undefined;
        }
        if (object.check_tx !== undefined && object.check_tx !== null) {
            message.check_tx = RequestCheckTx.fromJSON(object.check_tx);
        }
        else {
            message.check_tx = undefined;
        }
        if (object.deliver_tx !== undefined && object.deliver_tx !== null) {
            message.deliver_tx = RequestDeliverTx.fromJSON(object.deliver_tx);
        }
        else {
            message.deliver_tx = undefined;
        }
        if (object.end_block !== undefined && object.end_block !== null) {
            message.end_block = RequestEndBlock.fromJSON(object.end_block);
        }
        else {
            message.end_block = undefined;
        }
        if (object.commit !== undefined && object.commit !== null) {
            message.commit = RequestCommit.fromJSON(object.commit);
        }
        else {
            message.commit = undefined;
        }
        if (object.list_snapshots !== undefined && object.list_snapshots !== null) {
            message.list_snapshots = RequestListSnapshots.fromJSON(object.list_snapshots);
        }
        else {
            message.list_snapshots = undefined;
        }
        if (object.offer_snapshot !== undefined && object.offer_snapshot !== null) {
            message.offer_snapshot = RequestOfferSnapshot.fromJSON(object.offer_snapshot);
        }
        else {
            message.offer_snapshot = undefined;
        }
        if (object.load_snapshot_chunk !== undefined &&
            object.load_snapshot_chunk !== null) {
            message.load_snapshot_chunk = RequestLoadSnapshotChunk.fromJSON(object.load_snapshot_chunk);
        }
        else {
            message.load_snapshot_chunk = undefined;
        }
        if (object.apply_snapshot_chunk !== undefined &&
            object.apply_snapshot_chunk !== null) {
            message.apply_snapshot_chunk = RequestApplySnapshotChunk.fromJSON(object.apply_snapshot_chunk);
        }
        else {
            message.apply_snapshot_chunk = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.echo !== undefined &&
            (obj.echo = message.echo ? RequestEcho.toJSON(message.echo) : undefined);
        message.flush !== undefined &&
            (obj.flush = message.flush
                ? RequestFlush.toJSON(message.flush)
                : undefined);
        message.info !== undefined &&
            (obj.info = message.info ? RequestInfo.toJSON(message.info) : undefined);
        message.set_option !== undefined &&
            (obj.set_option = message.set_option
                ? RequestSetOption.toJSON(message.set_option)
                : undefined);
        message.init_chain !== undefined &&
            (obj.init_chain = message.init_chain
                ? RequestInitChain.toJSON(message.init_chain)
                : undefined);
        message.query !== undefined &&
            (obj.query = message.query
                ? RequestQuery.toJSON(message.query)
                : undefined);
        message.begin_block !== undefined &&
            (obj.begin_block = message.begin_block
                ? RequestBeginBlock.toJSON(message.begin_block)
                : undefined);
        message.check_tx !== undefined &&
            (obj.check_tx = message.check_tx
                ? RequestCheckTx.toJSON(message.check_tx)
                : undefined);
        message.deliver_tx !== undefined &&
            (obj.deliver_tx = message.deliver_tx
                ? RequestDeliverTx.toJSON(message.deliver_tx)
                : undefined);
        message.end_block !== undefined &&
            (obj.end_block = message.end_block
                ? RequestEndBlock.toJSON(message.end_block)
                : undefined);
        message.commit !== undefined &&
            (obj.commit = message.commit
                ? RequestCommit.toJSON(message.commit)
                : undefined);
        message.list_snapshots !== undefined &&
            (obj.list_snapshots = message.list_snapshots
                ? RequestListSnapshots.toJSON(message.list_snapshots)
                : undefined);
        message.offer_snapshot !== undefined &&
            (obj.offer_snapshot = message.offer_snapshot
                ? RequestOfferSnapshot.toJSON(message.offer_snapshot)
                : undefined);
        message.load_snapshot_chunk !== undefined &&
            (obj.load_snapshot_chunk = message.load_snapshot_chunk
                ? RequestLoadSnapshotChunk.toJSON(message.load_snapshot_chunk)
                : undefined);
        message.apply_snapshot_chunk !== undefined &&
            (obj.apply_snapshot_chunk = message.apply_snapshot_chunk
                ? RequestApplySnapshotChunk.toJSON(message.apply_snapshot_chunk)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseRequest);
        if (object.echo !== undefined && object.echo !== null) {
            message.echo = RequestEcho.fromPartial(object.echo);
        }
        else {
            message.echo = undefined;
        }
        if (object.flush !== undefined && object.flush !== null) {
            message.flush = RequestFlush.fromPartial(object.flush);
        }
        else {
            message.flush = undefined;
        }
        if (object.info !== undefined && object.info !== null) {
            message.info = RequestInfo.fromPartial(object.info);
        }
        else {
            message.info = undefined;
        }
        if (object.set_option !== undefined && object.set_option !== null) {
            message.set_option = RequestSetOption.fromPartial(object.set_option);
        }
        else {
            message.set_option = undefined;
        }
        if (object.init_chain !== undefined && object.init_chain !== null) {
            message.init_chain = RequestInitChain.fromPartial(object.init_chain);
        }
        else {
            message.init_chain = undefined;
        }
        if (object.query !== undefined && object.query !== null) {
            message.query = RequestQuery.fromPartial(object.query);
        }
        else {
            message.query = undefined;
        }
        if (object.begin_block !== undefined && object.begin_block !== null) {
            message.begin_block = RequestBeginBlock.fromPartial(object.begin_block);
        }
        else {
            message.begin_block = undefined;
        }
        if (object.check_tx !== undefined && object.check_tx !== null) {
            message.check_tx = RequestCheckTx.fromPartial(object.check_tx);
        }
        else {
            message.check_tx = undefined;
        }
        if (object.deliver_tx !== undefined && object.deliver_tx !== null) {
            message.deliver_tx = RequestDeliverTx.fromPartial(object.deliver_tx);
        }
        else {
            message.deliver_tx = undefined;
        }
        if (object.end_block !== undefined && object.end_block !== null) {
            message.end_block = RequestEndBlock.fromPartial(object.end_block);
        }
        else {
            message.end_block = undefined;
        }
        if (object.commit !== undefined && object.commit !== null) {
            message.commit = RequestCommit.fromPartial(object.commit);
        }
        else {
            message.commit = undefined;
        }
        if (object.list_snapshots !== undefined && object.list_snapshots !== null) {
            message.list_snapshots = RequestListSnapshots.fromPartial(object.list_snapshots);
        }
        else {
            message.list_snapshots = undefined;
        }
        if (object.offer_snapshot !== undefined && object.offer_snapshot !== null) {
            message.offer_snapshot = RequestOfferSnapshot.fromPartial(object.offer_snapshot);
        }
        else {
            message.offer_snapshot = undefined;
        }
        if (object.load_snapshot_chunk !== undefined &&
            object.load_snapshot_chunk !== null) {
            message.load_snapshot_chunk = RequestLoadSnapshotChunk.fromPartial(object.load_snapshot_chunk);
        }
        else {
            message.load_snapshot_chunk = undefined;
        }
        if (object.apply_snapshot_chunk !== undefined &&
            object.apply_snapshot_chunk !== null) {
            message.apply_snapshot_chunk = RequestApplySnapshotChunk.fromPartial(object.apply_snapshot_chunk);
        }
        else {
            message.apply_snapshot_chunk = undefined;
        }
        return message;
    },
};
const baseRequestEcho = { message: "" };
export const RequestEcho = {
    encode(message, writer = Writer.create()) {
        if (message.message !== "") {
            writer.uint32(10).string(message.message);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRequestEcho);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.message = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseRequestEcho);
        if (object.message !== undefined && object.message !== null) {
            message.message = String(object.message);
        }
        else {
            message.message = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.message !== undefined && (obj.message = message.message);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseRequestEcho);
        if (object.message !== undefined && object.message !== null) {
            message.message = object.message;
        }
        else {
            message.message = "";
        }
        return message;
    },
};
const baseRequestFlush = {};
export const RequestFlush = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRequestFlush);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = Object.assign({}, baseRequestFlush);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseRequestFlush);
        return message;
    },
};
const baseRequestInfo = {
    version: "",
    block_version: 0,
    p2p_version: 0,
};
export const RequestInfo = {
    encode(message, writer = Writer.create()) {
        if (message.version !== "") {
            writer.uint32(10).string(message.version);
        }
        if (message.block_version !== 0) {
            writer.uint32(16).uint64(message.block_version);
        }
        if (message.p2p_version !== 0) {
            writer.uint32(24).uint64(message.p2p_version);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRequestInfo);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.version = reader.string();
                    break;
                case 2:
                    message.block_version = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.p2p_version = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseRequestInfo);
        if (object.version !== undefined && object.version !== null) {
            message.version = String(object.version);
        }
        else {
            message.version = "";
        }
        if (object.block_version !== undefined && object.block_version !== null) {
            message.block_version = Number(object.block_version);
        }
        else {
            message.block_version = 0;
        }
        if (object.p2p_version !== undefined && object.p2p_version !== null) {
            message.p2p_version = Number(object.p2p_version);
        }
        else {
            message.p2p_version = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.version !== undefined && (obj.version = message.version);
        message.block_version !== undefined &&
            (obj.block_version = message.block_version);
        message.p2p_version !== undefined &&
            (obj.p2p_version = message.p2p_version);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseRequestInfo);
        if (object.version !== undefined && object.version !== null) {
            message.version = object.version;
        }
        else {
            message.version = "";
        }
        if (object.block_version !== undefined && object.block_version !== null) {
            message.block_version = object.block_version;
        }
        else {
            message.block_version = 0;
        }
        if (object.p2p_version !== undefined && object.p2p_version !== null) {
            message.p2p_version = object.p2p_version;
        }
        else {
            message.p2p_version = 0;
        }
        return message;
    },
};
const baseRequestSetOption = { key: "", value: "" };
export const RequestSetOption = {
    encode(message, writer = Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== "") {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRequestSetOption);
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
        const message = Object.assign({}, baseRequestSetOption);
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
        const message = Object.assign({}, baseRequestSetOption);
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
const baseRequestInitChain = { chain_id: "", initial_height: 0 };
export const RequestInitChain = {
    encode(message, writer = Writer.create()) {
        if (message.time !== undefined) {
            Timestamp.encode(toTimestamp(message.time), writer.uint32(10).fork()).ldelim();
        }
        if (message.chain_id !== "") {
            writer.uint32(18).string(message.chain_id);
        }
        if (message.consensus_params !== undefined) {
            ConsensusParams.encode(message.consensus_params, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.validators) {
            ValidatorUpdate.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.app_state_bytes.length !== 0) {
            writer.uint32(42).bytes(message.app_state_bytes);
        }
        if (message.initial_height !== 0) {
            writer.uint32(48).int64(message.initial_height);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRequestInitChain);
        message.validators = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.chain_id = reader.string();
                    break;
                case 3:
                    message.consensus_params = ConsensusParams.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.validators.push(ValidatorUpdate.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.app_state_bytes = reader.bytes();
                    break;
                case 6:
                    message.initial_height = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseRequestInitChain);
        message.validators = [];
        if (object.time !== undefined && object.time !== null) {
            message.time = fromJsonTimestamp(object.time);
        }
        else {
            message.time = undefined;
        }
        if (object.chain_id !== undefined && object.chain_id !== null) {
            message.chain_id = String(object.chain_id);
        }
        else {
            message.chain_id = "";
        }
        if (object.consensus_params !== undefined &&
            object.consensus_params !== null) {
            message.consensus_params = ConsensusParams.fromJSON(object.consensus_params);
        }
        else {
            message.consensus_params = undefined;
        }
        if (object.validators !== undefined && object.validators !== null) {
            for (const e of object.validators) {
                message.validators.push(ValidatorUpdate.fromJSON(e));
            }
        }
        if (object.app_state_bytes !== undefined &&
            object.app_state_bytes !== null) {
            message.app_state_bytes = bytesFromBase64(object.app_state_bytes);
        }
        if (object.initial_height !== undefined && object.initial_height !== null) {
            message.initial_height = Number(object.initial_height);
        }
        else {
            message.initial_height = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.time !== undefined &&
            (obj.time =
                message.time !== undefined ? message.time.toISOString() : null);
        message.chain_id !== undefined && (obj.chain_id = message.chain_id);
        message.consensus_params !== undefined &&
            (obj.consensus_params = message.consensus_params
                ? ConsensusParams.toJSON(message.consensus_params)
                : undefined);
        if (message.validators) {
            obj.validators = message.validators.map((e) => e ? ValidatorUpdate.toJSON(e) : undefined);
        }
        else {
            obj.validators = [];
        }
        message.app_state_bytes !== undefined &&
            (obj.app_state_bytes = base64FromBytes(message.app_state_bytes !== undefined
                ? message.app_state_bytes
                : new Uint8Array()));
        message.initial_height !== undefined &&
            (obj.initial_height = message.initial_height);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseRequestInitChain);
        message.validators = [];
        if (object.time !== undefined && object.time !== null) {
            message.time = object.time;
        }
        else {
            message.time = undefined;
        }
        if (object.chain_id !== undefined && object.chain_id !== null) {
            message.chain_id = object.chain_id;
        }
        else {
            message.chain_id = "";
        }
        if (object.consensus_params !== undefined &&
            object.consensus_params !== null) {
            message.consensus_params = ConsensusParams.fromPartial(object.consensus_params);
        }
        else {
            message.consensus_params = undefined;
        }
        if (object.validators !== undefined && object.validators !== null) {
            for (const e of object.validators) {
                message.validators.push(ValidatorUpdate.fromPartial(e));
            }
        }
        if (object.app_state_bytes !== undefined &&
            object.app_state_bytes !== null) {
            message.app_state_bytes = object.app_state_bytes;
        }
        else {
            message.app_state_bytes = new Uint8Array();
        }
        if (object.initial_height !== undefined && object.initial_height !== null) {
            message.initial_height = object.initial_height;
        }
        else {
            message.initial_height = 0;
        }
        return message;
    },
};
const baseRequestQuery = { path: "", height: 0, prove: false };
export const RequestQuery = {
    encode(message, writer = Writer.create()) {
        if (message.data.length !== 0) {
            writer.uint32(10).bytes(message.data);
        }
        if (message.path !== "") {
            writer.uint32(18).string(message.path);
        }
        if (message.height !== 0) {
            writer.uint32(24).int64(message.height);
        }
        if (message.prove === true) {
            writer.uint32(32).bool(message.prove);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRequestQuery);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.data = reader.bytes();
                    break;
                case 2:
                    message.path = reader.string();
                    break;
                case 3:
                    message.height = longToNumber(reader.int64());
                    break;
                case 4:
                    message.prove = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseRequestQuery);
        if (object.data !== undefined && object.data !== null) {
            message.data = bytesFromBase64(object.data);
        }
        if (object.path !== undefined && object.path !== null) {
            message.path = String(object.path);
        }
        else {
            message.path = "";
        }
        if (object.height !== undefined && object.height !== null) {
            message.height = Number(object.height);
        }
        else {
            message.height = 0;
        }
        if (object.prove !== undefined && object.prove !== null) {
            message.prove = Boolean(object.prove);
        }
        else {
            message.prove = false;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.data !== undefined &&
            (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
        message.path !== undefined && (obj.path = message.path);
        message.height !== undefined && (obj.height = message.height);
        message.prove !== undefined && (obj.prove = message.prove);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseRequestQuery);
        if (object.data !== undefined && object.data !== null) {
            message.data = object.data;
        }
        else {
            message.data = new Uint8Array();
        }
        if (object.path !== undefined && object.path !== null) {
            message.path = object.path;
        }
        else {
            message.path = "";
        }
        if (object.height !== undefined && object.height !== null) {
            message.height = object.height;
        }
        else {
            message.height = 0;
        }
        if (object.prove !== undefined && object.prove !== null) {
            message.prove = object.prove;
        }
        else {
            message.prove = false;
        }
        return message;
    },
};
const baseRequestBeginBlock = {};
export const RequestBeginBlock = {
    encode(message, writer = Writer.create()) {
        if (message.hash.length !== 0) {
            writer.uint32(10).bytes(message.hash);
        }
        if (message.header !== undefined) {
            Header.encode(message.header, writer.uint32(18).fork()).ldelim();
        }
        if (message.last_commit_info !== undefined) {
            LastCommitInfo.encode(message.last_commit_info, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.byzantine_validators) {
            Evidence.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRequestBeginBlock);
        message.byzantine_validators = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hash = reader.bytes();
                    break;
                case 2:
                    message.header = Header.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.last_commit_info = LastCommitInfo.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.byzantine_validators.push(Evidence.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseRequestBeginBlock);
        message.byzantine_validators = [];
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = bytesFromBase64(object.hash);
        }
        if (object.header !== undefined && object.header !== null) {
            message.header = Header.fromJSON(object.header);
        }
        else {
            message.header = undefined;
        }
        if (object.last_commit_info !== undefined &&
            object.last_commit_info !== null) {
            message.last_commit_info = LastCommitInfo.fromJSON(object.last_commit_info);
        }
        else {
            message.last_commit_info = undefined;
        }
        if (object.byzantine_validators !== undefined &&
            object.byzantine_validators !== null) {
            for (const e of object.byzantine_validators) {
                message.byzantine_validators.push(Evidence.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.hash !== undefined &&
            (obj.hash = base64FromBytes(message.hash !== undefined ? message.hash : new Uint8Array()));
        message.header !== undefined &&
            (obj.header = message.header ? Header.toJSON(message.header) : undefined);
        message.last_commit_info !== undefined &&
            (obj.last_commit_info = message.last_commit_info
                ? LastCommitInfo.toJSON(message.last_commit_info)
                : undefined);
        if (message.byzantine_validators) {
            obj.byzantine_validators = message.byzantine_validators.map((e) => e ? Evidence.toJSON(e) : undefined);
        }
        else {
            obj.byzantine_validators = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseRequestBeginBlock);
        message.byzantine_validators = [];
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = object.hash;
        }
        else {
            message.hash = new Uint8Array();
        }
        if (object.header !== undefined && object.header !== null) {
            message.header = Header.fromPartial(object.header);
        }
        else {
            message.header = undefined;
        }
        if (object.last_commit_info !== undefined &&
            object.last_commit_info !== null) {
            message.last_commit_info = LastCommitInfo.fromPartial(object.last_commit_info);
        }
        else {
            message.last_commit_info = undefined;
        }
        if (object.byzantine_validators !== undefined &&
            object.byzantine_validators !== null) {
            for (const e of object.byzantine_validators) {
                message.byzantine_validators.push(Evidence.fromPartial(e));
            }
        }
        return message;
    },
};
const baseRequestCheckTx = { type: 0 };
export const RequestCheckTx = {
    encode(message, writer = Writer.create()) {
        if (message.tx.length !== 0) {
            writer.uint32(10).bytes(message.tx);
        }
        if (message.type !== 0) {
            writer.uint32(16).int32(message.type);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRequestCheckTx);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tx = reader.bytes();
                    break;
                case 2:
                    message.type = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseRequestCheckTx);
        if (object.tx !== undefined && object.tx !== null) {
            message.tx = bytesFromBase64(object.tx);
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = checkTxTypeFromJSON(object.type);
        }
        else {
            message.type = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.tx !== undefined &&
            (obj.tx = base64FromBytes(message.tx !== undefined ? message.tx : new Uint8Array()));
        message.type !== undefined && (obj.type = checkTxTypeToJSON(message.type));
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseRequestCheckTx);
        if (object.tx !== undefined && object.tx !== null) {
            message.tx = object.tx;
        }
        else {
            message.tx = new Uint8Array();
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = object.type;
        }
        else {
            message.type = 0;
        }
        return message;
    },
};
const baseRequestDeliverTx = {};
export const RequestDeliverTx = {
    encode(message, writer = Writer.create()) {
        if (message.tx.length !== 0) {
            writer.uint32(10).bytes(message.tx);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRequestDeliverTx);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tx = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseRequestDeliverTx);
        if (object.tx !== undefined && object.tx !== null) {
            message.tx = bytesFromBase64(object.tx);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.tx !== undefined &&
            (obj.tx = base64FromBytes(message.tx !== undefined ? message.tx : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseRequestDeliverTx);
        if (object.tx !== undefined && object.tx !== null) {
            message.tx = object.tx;
        }
        else {
            message.tx = new Uint8Array();
        }
        return message;
    },
};
const baseRequestEndBlock = { height: 0 };
export const RequestEndBlock = {
    encode(message, writer = Writer.create()) {
        if (message.height !== 0) {
            writer.uint32(8).int64(message.height);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRequestEndBlock);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseRequestEndBlock);
        if (object.height !== undefined && object.height !== null) {
            message.height = Number(object.height);
        }
        else {
            message.height = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined && (obj.height = message.height);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseRequestEndBlock);
        if (object.height !== undefined && object.height !== null) {
            message.height = object.height;
        }
        else {
            message.height = 0;
        }
        return message;
    },
};
const baseRequestCommit = {};
export const RequestCommit = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRequestCommit);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = Object.assign({}, baseRequestCommit);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseRequestCommit);
        return message;
    },
};
const baseRequestListSnapshots = {};
export const RequestListSnapshots = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRequestListSnapshots);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = Object.assign({}, baseRequestListSnapshots);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseRequestListSnapshots);
        return message;
    },
};
const baseRequestOfferSnapshot = {};
export const RequestOfferSnapshot = {
    encode(message, writer = Writer.create()) {
        if (message.snapshot !== undefined) {
            Snapshot.encode(message.snapshot, writer.uint32(10).fork()).ldelim();
        }
        if (message.app_hash.length !== 0) {
            writer.uint32(18).bytes(message.app_hash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRequestOfferSnapshot);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.snapshot = Snapshot.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.app_hash = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseRequestOfferSnapshot);
        if (object.snapshot !== undefined && object.snapshot !== null) {
            message.snapshot = Snapshot.fromJSON(object.snapshot);
        }
        else {
            message.snapshot = undefined;
        }
        if (object.app_hash !== undefined && object.app_hash !== null) {
            message.app_hash = bytesFromBase64(object.app_hash);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.snapshot !== undefined &&
            (obj.snapshot = message.snapshot
                ? Snapshot.toJSON(message.snapshot)
                : undefined);
        message.app_hash !== undefined &&
            (obj.app_hash = base64FromBytes(message.app_hash !== undefined ? message.app_hash : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseRequestOfferSnapshot);
        if (object.snapshot !== undefined && object.snapshot !== null) {
            message.snapshot = Snapshot.fromPartial(object.snapshot);
        }
        else {
            message.snapshot = undefined;
        }
        if (object.app_hash !== undefined && object.app_hash !== null) {
            message.app_hash = object.app_hash;
        }
        else {
            message.app_hash = new Uint8Array();
        }
        return message;
    },
};
const baseRequestLoadSnapshotChunk = { height: 0, format: 0, chunk: 0 };
export const RequestLoadSnapshotChunk = {
    encode(message, writer = Writer.create()) {
        if (message.height !== 0) {
            writer.uint32(8).uint64(message.height);
        }
        if (message.format !== 0) {
            writer.uint32(16).uint32(message.format);
        }
        if (message.chunk !== 0) {
            writer.uint32(24).uint32(message.chunk);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRequestLoadSnapshotChunk);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = longToNumber(reader.uint64());
                    break;
                case 2:
                    message.format = reader.uint32();
                    break;
                case 3:
                    message.chunk = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseRequestLoadSnapshotChunk);
        if (object.height !== undefined && object.height !== null) {
            message.height = Number(object.height);
        }
        else {
            message.height = 0;
        }
        if (object.format !== undefined && object.format !== null) {
            message.format = Number(object.format);
        }
        else {
            message.format = 0;
        }
        if (object.chunk !== undefined && object.chunk !== null) {
            message.chunk = Number(object.chunk);
        }
        else {
            message.chunk = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined && (obj.height = message.height);
        message.format !== undefined && (obj.format = message.format);
        message.chunk !== undefined && (obj.chunk = message.chunk);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseRequestLoadSnapshotChunk);
        if (object.height !== undefined && object.height !== null) {
            message.height = object.height;
        }
        else {
            message.height = 0;
        }
        if (object.format !== undefined && object.format !== null) {
            message.format = object.format;
        }
        else {
            message.format = 0;
        }
        if (object.chunk !== undefined && object.chunk !== null) {
            message.chunk = object.chunk;
        }
        else {
            message.chunk = 0;
        }
        return message;
    },
};
const baseRequestApplySnapshotChunk = { index: 0, sender: "" };
export const RequestApplySnapshotChunk = {
    encode(message, writer = Writer.create()) {
        if (message.index !== 0) {
            writer.uint32(8).uint32(message.index);
        }
        if (message.chunk.length !== 0) {
            writer.uint32(18).bytes(message.chunk);
        }
        if (message.sender !== "") {
            writer.uint32(26).string(message.sender);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRequestApplySnapshotChunk);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.index = reader.uint32();
                    break;
                case 2:
                    message.chunk = reader.bytes();
                    break;
                case 3:
                    message.sender = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseRequestApplySnapshotChunk);
        if (object.index !== undefined && object.index !== null) {
            message.index = Number(object.index);
        }
        else {
            message.index = 0;
        }
        if (object.chunk !== undefined && object.chunk !== null) {
            message.chunk = bytesFromBase64(object.chunk);
        }
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = String(object.sender);
        }
        else {
            message.sender = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.index !== undefined && (obj.index = message.index);
        message.chunk !== undefined &&
            (obj.chunk = base64FromBytes(message.chunk !== undefined ? message.chunk : new Uint8Array()));
        message.sender !== undefined && (obj.sender = message.sender);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseRequestApplySnapshotChunk);
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = 0;
        }
        if (object.chunk !== undefined && object.chunk !== null) {
            message.chunk = object.chunk;
        }
        else {
            message.chunk = new Uint8Array();
        }
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        else {
            message.sender = "";
        }
        return message;
    },
};
const baseResponse = {};
export const Response = {
    encode(message, writer = Writer.create()) {
        if (message.exception !== undefined) {
            ResponseException.encode(message.exception, writer.uint32(10).fork()).ldelim();
        }
        if (message.echo !== undefined) {
            ResponseEcho.encode(message.echo, writer.uint32(18).fork()).ldelim();
        }
        if (message.flush !== undefined) {
            ResponseFlush.encode(message.flush, writer.uint32(26).fork()).ldelim();
        }
        if (message.info !== undefined) {
            ResponseInfo.encode(message.info, writer.uint32(34).fork()).ldelim();
        }
        if (message.set_option !== undefined) {
            ResponseSetOption.encode(message.set_option, writer.uint32(42).fork()).ldelim();
        }
        if (message.init_chain !== undefined) {
            ResponseInitChain.encode(message.init_chain, writer.uint32(50).fork()).ldelim();
        }
        if (message.query !== undefined) {
            ResponseQuery.encode(message.query, writer.uint32(58).fork()).ldelim();
        }
        if (message.begin_block !== undefined) {
            ResponseBeginBlock.encode(message.begin_block, writer.uint32(66).fork()).ldelim();
        }
        if (message.check_tx !== undefined) {
            ResponseCheckTx.encode(message.check_tx, writer.uint32(74).fork()).ldelim();
        }
        if (message.deliver_tx !== undefined) {
            ResponseDeliverTx.encode(message.deliver_tx, writer.uint32(82).fork()).ldelim();
        }
        if (message.end_block !== undefined) {
            ResponseEndBlock.encode(message.end_block, writer.uint32(90).fork()).ldelim();
        }
        if (message.commit !== undefined) {
            ResponseCommit.encode(message.commit, writer.uint32(98).fork()).ldelim();
        }
        if (message.list_snapshots !== undefined) {
            ResponseListSnapshots.encode(message.list_snapshots, writer.uint32(106).fork()).ldelim();
        }
        if (message.offer_snapshot !== undefined) {
            ResponseOfferSnapshot.encode(message.offer_snapshot, writer.uint32(114).fork()).ldelim();
        }
        if (message.load_snapshot_chunk !== undefined) {
            ResponseLoadSnapshotChunk.encode(message.load_snapshot_chunk, writer.uint32(122).fork()).ldelim();
        }
        if (message.apply_snapshot_chunk !== undefined) {
            ResponseApplySnapshotChunk.encode(message.apply_snapshot_chunk, writer.uint32(130).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.exception = ResponseException.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.echo = ResponseEcho.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.flush = ResponseFlush.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.info = ResponseInfo.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.set_option = ResponseSetOption.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.init_chain = ResponseInitChain.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.query = ResponseQuery.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.begin_block = ResponseBeginBlock.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.check_tx = ResponseCheckTx.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.deliver_tx = ResponseDeliverTx.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.end_block = ResponseEndBlock.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.commit = ResponseCommit.decode(reader, reader.uint32());
                    break;
                case 13:
                    message.list_snapshots = ResponseListSnapshots.decode(reader, reader.uint32());
                    break;
                case 14:
                    message.offer_snapshot = ResponseOfferSnapshot.decode(reader, reader.uint32());
                    break;
                case 15:
                    message.load_snapshot_chunk = ResponseLoadSnapshotChunk.decode(reader, reader.uint32());
                    break;
                case 16:
                    message.apply_snapshot_chunk = ResponseApplySnapshotChunk.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseResponse);
        if (object.exception !== undefined && object.exception !== null) {
            message.exception = ResponseException.fromJSON(object.exception);
        }
        else {
            message.exception = undefined;
        }
        if (object.echo !== undefined && object.echo !== null) {
            message.echo = ResponseEcho.fromJSON(object.echo);
        }
        else {
            message.echo = undefined;
        }
        if (object.flush !== undefined && object.flush !== null) {
            message.flush = ResponseFlush.fromJSON(object.flush);
        }
        else {
            message.flush = undefined;
        }
        if (object.info !== undefined && object.info !== null) {
            message.info = ResponseInfo.fromJSON(object.info);
        }
        else {
            message.info = undefined;
        }
        if (object.set_option !== undefined && object.set_option !== null) {
            message.set_option = ResponseSetOption.fromJSON(object.set_option);
        }
        else {
            message.set_option = undefined;
        }
        if (object.init_chain !== undefined && object.init_chain !== null) {
            message.init_chain = ResponseInitChain.fromJSON(object.init_chain);
        }
        else {
            message.init_chain = undefined;
        }
        if (object.query !== undefined && object.query !== null) {
            message.query = ResponseQuery.fromJSON(object.query);
        }
        else {
            message.query = undefined;
        }
        if (object.begin_block !== undefined && object.begin_block !== null) {
            message.begin_block = ResponseBeginBlock.fromJSON(object.begin_block);
        }
        else {
            message.begin_block = undefined;
        }
        if (object.check_tx !== undefined && object.check_tx !== null) {
            message.check_tx = ResponseCheckTx.fromJSON(object.check_tx);
        }
        else {
            message.check_tx = undefined;
        }
        if (object.deliver_tx !== undefined && object.deliver_tx !== null) {
            message.deliver_tx = ResponseDeliverTx.fromJSON(object.deliver_tx);
        }
        else {
            message.deliver_tx = undefined;
        }
        if (object.end_block !== undefined && object.end_block !== null) {
            message.end_block = ResponseEndBlock.fromJSON(object.end_block);
        }
        else {
            message.end_block = undefined;
        }
        if (object.commit !== undefined && object.commit !== null) {
            message.commit = ResponseCommit.fromJSON(object.commit);
        }
        else {
            message.commit = undefined;
        }
        if (object.list_snapshots !== undefined && object.list_snapshots !== null) {
            message.list_snapshots = ResponseListSnapshots.fromJSON(object.list_snapshots);
        }
        else {
            message.list_snapshots = undefined;
        }
        if (object.offer_snapshot !== undefined && object.offer_snapshot !== null) {
            message.offer_snapshot = ResponseOfferSnapshot.fromJSON(object.offer_snapshot);
        }
        else {
            message.offer_snapshot = undefined;
        }
        if (object.load_snapshot_chunk !== undefined &&
            object.load_snapshot_chunk !== null) {
            message.load_snapshot_chunk = ResponseLoadSnapshotChunk.fromJSON(object.load_snapshot_chunk);
        }
        else {
            message.load_snapshot_chunk = undefined;
        }
        if (object.apply_snapshot_chunk !== undefined &&
            object.apply_snapshot_chunk !== null) {
            message.apply_snapshot_chunk = ResponseApplySnapshotChunk.fromJSON(object.apply_snapshot_chunk);
        }
        else {
            message.apply_snapshot_chunk = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.exception !== undefined &&
            (obj.exception = message.exception
                ? ResponseException.toJSON(message.exception)
                : undefined);
        message.echo !== undefined &&
            (obj.echo = message.echo ? ResponseEcho.toJSON(message.echo) : undefined);
        message.flush !== undefined &&
            (obj.flush = message.flush
                ? ResponseFlush.toJSON(message.flush)
                : undefined);
        message.info !== undefined &&
            (obj.info = message.info ? ResponseInfo.toJSON(message.info) : undefined);
        message.set_option !== undefined &&
            (obj.set_option = message.set_option
                ? ResponseSetOption.toJSON(message.set_option)
                : undefined);
        message.init_chain !== undefined &&
            (obj.init_chain = message.init_chain
                ? ResponseInitChain.toJSON(message.init_chain)
                : undefined);
        message.query !== undefined &&
            (obj.query = message.query
                ? ResponseQuery.toJSON(message.query)
                : undefined);
        message.begin_block !== undefined &&
            (obj.begin_block = message.begin_block
                ? ResponseBeginBlock.toJSON(message.begin_block)
                : undefined);
        message.check_tx !== undefined &&
            (obj.check_tx = message.check_tx
                ? ResponseCheckTx.toJSON(message.check_tx)
                : undefined);
        message.deliver_tx !== undefined &&
            (obj.deliver_tx = message.deliver_tx
                ? ResponseDeliverTx.toJSON(message.deliver_tx)
                : undefined);
        message.end_block !== undefined &&
            (obj.end_block = message.end_block
                ? ResponseEndBlock.toJSON(message.end_block)
                : undefined);
        message.commit !== undefined &&
            (obj.commit = message.commit
                ? ResponseCommit.toJSON(message.commit)
                : undefined);
        message.list_snapshots !== undefined &&
            (obj.list_snapshots = message.list_snapshots
                ? ResponseListSnapshots.toJSON(message.list_snapshots)
                : undefined);
        message.offer_snapshot !== undefined &&
            (obj.offer_snapshot = message.offer_snapshot
                ? ResponseOfferSnapshot.toJSON(message.offer_snapshot)
                : undefined);
        message.load_snapshot_chunk !== undefined &&
            (obj.load_snapshot_chunk = message.load_snapshot_chunk
                ? ResponseLoadSnapshotChunk.toJSON(message.load_snapshot_chunk)
                : undefined);
        message.apply_snapshot_chunk !== undefined &&
            (obj.apply_snapshot_chunk = message.apply_snapshot_chunk
                ? ResponseApplySnapshotChunk.toJSON(message.apply_snapshot_chunk)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseResponse);
        if (object.exception !== undefined && object.exception !== null) {
            message.exception = ResponseException.fromPartial(object.exception);
        }
        else {
            message.exception = undefined;
        }
        if (object.echo !== undefined && object.echo !== null) {
            message.echo = ResponseEcho.fromPartial(object.echo);
        }
        else {
            message.echo = undefined;
        }
        if (object.flush !== undefined && object.flush !== null) {
            message.flush = ResponseFlush.fromPartial(object.flush);
        }
        else {
            message.flush = undefined;
        }
        if (object.info !== undefined && object.info !== null) {
            message.info = ResponseInfo.fromPartial(object.info);
        }
        else {
            message.info = undefined;
        }
        if (object.set_option !== undefined && object.set_option !== null) {
            message.set_option = ResponseSetOption.fromPartial(object.set_option);
        }
        else {
            message.set_option = undefined;
        }
        if (object.init_chain !== undefined && object.init_chain !== null) {
            message.init_chain = ResponseInitChain.fromPartial(object.init_chain);
        }
        else {
            message.init_chain = undefined;
        }
        if (object.query !== undefined && object.query !== null) {
            message.query = ResponseQuery.fromPartial(object.query);
        }
        else {
            message.query = undefined;
        }
        if (object.begin_block !== undefined && object.begin_block !== null) {
            message.begin_block = ResponseBeginBlock.fromPartial(object.begin_block);
        }
        else {
            message.begin_block = undefined;
        }
        if (object.check_tx !== undefined && object.check_tx !== null) {
            message.check_tx = ResponseCheckTx.fromPartial(object.check_tx);
        }
        else {
            message.check_tx = undefined;
        }
        if (object.deliver_tx !== undefined && object.deliver_tx !== null) {
            message.deliver_tx = ResponseDeliverTx.fromPartial(object.deliver_tx);
        }
        else {
            message.deliver_tx = undefined;
        }
        if (object.end_block !== undefined && object.end_block !== null) {
            message.end_block = ResponseEndBlock.fromPartial(object.end_block);
        }
        else {
            message.end_block = undefined;
        }
        if (object.commit !== undefined && object.commit !== null) {
            message.commit = ResponseCommit.fromPartial(object.commit);
        }
        else {
            message.commit = undefined;
        }
        if (object.list_snapshots !== undefined && object.list_snapshots !== null) {
            message.list_snapshots = ResponseListSnapshots.fromPartial(object.list_snapshots);
        }
        else {
            message.list_snapshots = undefined;
        }
        if (object.offer_snapshot !== undefined && object.offer_snapshot !== null) {
            message.offer_snapshot = ResponseOfferSnapshot.fromPartial(object.offer_snapshot);
        }
        else {
            message.offer_snapshot = undefined;
        }
        if (object.load_snapshot_chunk !== undefined &&
            object.load_snapshot_chunk !== null) {
            message.load_snapshot_chunk = ResponseLoadSnapshotChunk.fromPartial(object.load_snapshot_chunk);
        }
        else {
            message.load_snapshot_chunk = undefined;
        }
        if (object.apply_snapshot_chunk !== undefined &&
            object.apply_snapshot_chunk !== null) {
            message.apply_snapshot_chunk = ResponseApplySnapshotChunk.fromPartial(object.apply_snapshot_chunk);
        }
        else {
            message.apply_snapshot_chunk = undefined;
        }
        return message;
    },
};
const baseResponseException = { error: "" };
export const ResponseException = {
    encode(message, writer = Writer.create()) {
        if (message.error !== "") {
            writer.uint32(10).string(message.error);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseResponseException);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.error = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseResponseException);
        if (object.error !== undefined && object.error !== null) {
            message.error = String(object.error);
        }
        else {
            message.error = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.error !== undefined && (obj.error = message.error);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseResponseException);
        if (object.error !== undefined && object.error !== null) {
            message.error = object.error;
        }
        else {
            message.error = "";
        }
        return message;
    },
};
const baseResponseEcho = { message: "" };
export const ResponseEcho = {
    encode(message, writer = Writer.create()) {
        if (message.message !== "") {
            writer.uint32(10).string(message.message);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseResponseEcho);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.message = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseResponseEcho);
        if (object.message !== undefined && object.message !== null) {
            message.message = String(object.message);
        }
        else {
            message.message = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.message !== undefined && (obj.message = message.message);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseResponseEcho);
        if (object.message !== undefined && object.message !== null) {
            message.message = object.message;
        }
        else {
            message.message = "";
        }
        return message;
    },
};
const baseResponseFlush = {};
export const ResponseFlush = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseResponseFlush);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = Object.assign({}, baseResponseFlush);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseResponseFlush);
        return message;
    },
};
const baseResponseInfo = {
    data: "",
    version: "",
    app_version: 0,
    last_block_height: 0,
};
export const ResponseInfo = {
    encode(message, writer = Writer.create()) {
        if (message.data !== "") {
            writer.uint32(10).string(message.data);
        }
        if (message.version !== "") {
            writer.uint32(18).string(message.version);
        }
        if (message.app_version !== 0) {
            writer.uint32(24).uint64(message.app_version);
        }
        if (message.last_block_height !== 0) {
            writer.uint32(32).int64(message.last_block_height);
        }
        if (message.last_block_app_hash.length !== 0) {
            writer.uint32(42).bytes(message.last_block_app_hash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseResponseInfo);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.data = reader.string();
                    break;
                case 2:
                    message.version = reader.string();
                    break;
                case 3:
                    message.app_version = longToNumber(reader.uint64());
                    break;
                case 4:
                    message.last_block_height = longToNumber(reader.int64());
                    break;
                case 5:
                    message.last_block_app_hash = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseResponseInfo);
        if (object.data !== undefined && object.data !== null) {
            message.data = String(object.data);
        }
        else {
            message.data = "";
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = String(object.version);
        }
        else {
            message.version = "";
        }
        if (object.app_version !== undefined && object.app_version !== null) {
            message.app_version = Number(object.app_version);
        }
        else {
            message.app_version = 0;
        }
        if (object.last_block_height !== undefined &&
            object.last_block_height !== null) {
            message.last_block_height = Number(object.last_block_height);
        }
        else {
            message.last_block_height = 0;
        }
        if (object.last_block_app_hash !== undefined &&
            object.last_block_app_hash !== null) {
            message.last_block_app_hash = bytesFromBase64(object.last_block_app_hash);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.data !== undefined && (obj.data = message.data);
        message.version !== undefined && (obj.version = message.version);
        message.app_version !== undefined &&
            (obj.app_version = message.app_version);
        message.last_block_height !== undefined &&
            (obj.last_block_height = message.last_block_height);
        message.last_block_app_hash !== undefined &&
            (obj.last_block_app_hash = base64FromBytes(message.last_block_app_hash !== undefined
                ? message.last_block_app_hash
                : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseResponseInfo);
        if (object.data !== undefined && object.data !== null) {
            message.data = object.data;
        }
        else {
            message.data = "";
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = object.version;
        }
        else {
            message.version = "";
        }
        if (object.app_version !== undefined && object.app_version !== null) {
            message.app_version = object.app_version;
        }
        else {
            message.app_version = 0;
        }
        if (object.last_block_height !== undefined &&
            object.last_block_height !== null) {
            message.last_block_height = object.last_block_height;
        }
        else {
            message.last_block_height = 0;
        }
        if (object.last_block_app_hash !== undefined &&
            object.last_block_app_hash !== null) {
            message.last_block_app_hash = object.last_block_app_hash;
        }
        else {
            message.last_block_app_hash = new Uint8Array();
        }
        return message;
    },
};
const baseResponseSetOption = { code: 0, log: "", info: "" };
export const ResponseSetOption = {
    encode(message, writer = Writer.create()) {
        if (message.code !== 0) {
            writer.uint32(8).uint32(message.code);
        }
        if (message.log !== "") {
            writer.uint32(26).string(message.log);
        }
        if (message.info !== "") {
            writer.uint32(34).string(message.info);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseResponseSetOption);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.code = reader.uint32();
                    break;
                case 3:
                    message.log = reader.string();
                    break;
                case 4:
                    message.info = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseResponseSetOption);
        if (object.code !== undefined && object.code !== null) {
            message.code = Number(object.code);
        }
        else {
            message.code = 0;
        }
        if (object.log !== undefined && object.log !== null) {
            message.log = String(object.log);
        }
        else {
            message.log = "";
        }
        if (object.info !== undefined && object.info !== null) {
            message.info = String(object.info);
        }
        else {
            message.info = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.code !== undefined && (obj.code = message.code);
        message.log !== undefined && (obj.log = message.log);
        message.info !== undefined && (obj.info = message.info);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseResponseSetOption);
        if (object.code !== undefined && object.code !== null) {
            message.code = object.code;
        }
        else {
            message.code = 0;
        }
        if (object.log !== undefined && object.log !== null) {
            message.log = object.log;
        }
        else {
            message.log = "";
        }
        if (object.info !== undefined && object.info !== null) {
            message.info = object.info;
        }
        else {
            message.info = "";
        }
        return message;
    },
};
const baseResponseInitChain = {};
export const ResponseInitChain = {
    encode(message, writer = Writer.create()) {
        if (message.consensus_params !== undefined) {
            ConsensusParams.encode(message.consensus_params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.validators) {
            ValidatorUpdate.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.app_hash.length !== 0) {
            writer.uint32(26).bytes(message.app_hash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseResponseInitChain);
        message.validators = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.consensus_params = ConsensusParams.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.validators.push(ValidatorUpdate.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.app_hash = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseResponseInitChain);
        message.validators = [];
        if (object.consensus_params !== undefined &&
            object.consensus_params !== null) {
            message.consensus_params = ConsensusParams.fromJSON(object.consensus_params);
        }
        else {
            message.consensus_params = undefined;
        }
        if (object.validators !== undefined && object.validators !== null) {
            for (const e of object.validators) {
                message.validators.push(ValidatorUpdate.fromJSON(e));
            }
        }
        if (object.app_hash !== undefined && object.app_hash !== null) {
            message.app_hash = bytesFromBase64(object.app_hash);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.consensus_params !== undefined &&
            (obj.consensus_params = message.consensus_params
                ? ConsensusParams.toJSON(message.consensus_params)
                : undefined);
        if (message.validators) {
            obj.validators = message.validators.map((e) => e ? ValidatorUpdate.toJSON(e) : undefined);
        }
        else {
            obj.validators = [];
        }
        message.app_hash !== undefined &&
            (obj.app_hash = base64FromBytes(message.app_hash !== undefined ? message.app_hash : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseResponseInitChain);
        message.validators = [];
        if (object.consensus_params !== undefined &&
            object.consensus_params !== null) {
            message.consensus_params = ConsensusParams.fromPartial(object.consensus_params);
        }
        else {
            message.consensus_params = undefined;
        }
        if (object.validators !== undefined && object.validators !== null) {
            for (const e of object.validators) {
                message.validators.push(ValidatorUpdate.fromPartial(e));
            }
        }
        if (object.app_hash !== undefined && object.app_hash !== null) {
            message.app_hash = object.app_hash;
        }
        else {
            message.app_hash = new Uint8Array();
        }
        return message;
    },
};
const baseResponseQuery = {
    code: 0,
    log: "",
    info: "",
    index: 0,
    height: 0,
    codespace: "",
};
export const ResponseQuery = {
    encode(message, writer = Writer.create()) {
        if (message.code !== 0) {
            writer.uint32(8).uint32(message.code);
        }
        if (message.log !== "") {
            writer.uint32(26).string(message.log);
        }
        if (message.info !== "") {
            writer.uint32(34).string(message.info);
        }
        if (message.index !== 0) {
            writer.uint32(40).int64(message.index);
        }
        if (message.key.length !== 0) {
            writer.uint32(50).bytes(message.key);
        }
        if (message.value.length !== 0) {
            writer.uint32(58).bytes(message.value);
        }
        if (message.proof_ops !== undefined) {
            ProofOps.encode(message.proof_ops, writer.uint32(66).fork()).ldelim();
        }
        if (message.height !== 0) {
            writer.uint32(72).int64(message.height);
        }
        if (message.codespace !== "") {
            writer.uint32(82).string(message.codespace);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseResponseQuery);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.code = reader.uint32();
                    break;
                case 3:
                    message.log = reader.string();
                    break;
                case 4:
                    message.info = reader.string();
                    break;
                case 5:
                    message.index = longToNumber(reader.int64());
                    break;
                case 6:
                    message.key = reader.bytes();
                    break;
                case 7:
                    message.value = reader.bytes();
                    break;
                case 8:
                    message.proof_ops = ProofOps.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.height = longToNumber(reader.int64());
                    break;
                case 10:
                    message.codespace = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseResponseQuery);
        if (object.code !== undefined && object.code !== null) {
            message.code = Number(object.code);
        }
        else {
            message.code = 0;
        }
        if (object.log !== undefined && object.log !== null) {
            message.log = String(object.log);
        }
        else {
            message.log = "";
        }
        if (object.info !== undefined && object.info !== null) {
            message.info = String(object.info);
        }
        else {
            message.info = "";
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = Number(object.index);
        }
        else {
            message.index = 0;
        }
        if (object.key !== undefined && object.key !== null) {
            message.key = bytesFromBase64(object.key);
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = bytesFromBase64(object.value);
        }
        if (object.proof_ops !== undefined && object.proof_ops !== null) {
            message.proof_ops = ProofOps.fromJSON(object.proof_ops);
        }
        else {
            message.proof_ops = undefined;
        }
        if (object.height !== undefined && object.height !== null) {
            message.height = Number(object.height);
        }
        else {
            message.height = 0;
        }
        if (object.codespace !== undefined && object.codespace !== null) {
            message.codespace = String(object.codespace);
        }
        else {
            message.codespace = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.code !== undefined && (obj.code = message.code);
        message.log !== undefined && (obj.log = message.log);
        message.info !== undefined && (obj.info = message.info);
        message.index !== undefined && (obj.index = message.index);
        message.key !== undefined &&
            (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
        message.value !== undefined &&
            (obj.value = base64FromBytes(message.value !== undefined ? message.value : new Uint8Array()));
        message.proof_ops !== undefined &&
            (obj.proof_ops = message.proof_ops
                ? ProofOps.toJSON(message.proof_ops)
                : undefined);
        message.height !== undefined && (obj.height = message.height);
        message.codespace !== undefined && (obj.codespace = message.codespace);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseResponseQuery);
        if (object.code !== undefined && object.code !== null) {
            message.code = object.code;
        }
        else {
            message.code = 0;
        }
        if (object.log !== undefined && object.log !== null) {
            message.log = object.log;
        }
        else {
            message.log = "";
        }
        if (object.info !== undefined && object.info !== null) {
            message.info = object.info;
        }
        else {
            message.info = "";
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = 0;
        }
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        }
        else {
            message.key = new Uint8Array();
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value;
        }
        else {
            message.value = new Uint8Array();
        }
        if (object.proof_ops !== undefined && object.proof_ops !== null) {
            message.proof_ops = ProofOps.fromPartial(object.proof_ops);
        }
        else {
            message.proof_ops = undefined;
        }
        if (object.height !== undefined && object.height !== null) {
            message.height = object.height;
        }
        else {
            message.height = 0;
        }
        if (object.codespace !== undefined && object.codespace !== null) {
            message.codespace = object.codespace;
        }
        else {
            message.codespace = "";
        }
        return message;
    },
};
const baseResponseBeginBlock = {};
export const ResponseBeginBlock = {
    encode(message, writer = Writer.create()) {
        for (const v of message.events) {
            Event.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseResponseBeginBlock);
        message.events = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.events.push(Event.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseResponseBeginBlock);
        message.events = [];
        if (object.events !== undefined && object.events !== null) {
            for (const e of object.events) {
                message.events.push(Event.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.events) {
            obj.events = message.events.map((e) => (e ? Event.toJSON(e) : undefined));
        }
        else {
            obj.events = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseResponseBeginBlock);
        message.events = [];
        if (object.events !== undefined && object.events !== null) {
            for (const e of object.events) {
                message.events.push(Event.fromPartial(e));
            }
        }
        return message;
    },
};
const baseResponseCheckTx = {
    code: 0,
    log: "",
    info: "",
    gas_wanted: 0,
    gas_used: 0,
    codespace: "",
};
export const ResponseCheckTx = {
    encode(message, writer = Writer.create()) {
        if (message.code !== 0) {
            writer.uint32(8).uint32(message.code);
        }
        if (message.data.length !== 0) {
            writer.uint32(18).bytes(message.data);
        }
        if (message.log !== "") {
            writer.uint32(26).string(message.log);
        }
        if (message.info !== "") {
            writer.uint32(34).string(message.info);
        }
        if (message.gas_wanted !== 0) {
            writer.uint32(40).int64(message.gas_wanted);
        }
        if (message.gas_used !== 0) {
            writer.uint32(48).int64(message.gas_used);
        }
        for (const v of message.events) {
            Event.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.codespace !== "") {
            writer.uint32(66).string(message.codespace);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseResponseCheckTx);
        message.events = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.code = reader.uint32();
                    break;
                case 2:
                    message.data = reader.bytes();
                    break;
                case 3:
                    message.log = reader.string();
                    break;
                case 4:
                    message.info = reader.string();
                    break;
                case 5:
                    message.gas_wanted = longToNumber(reader.int64());
                    break;
                case 6:
                    message.gas_used = longToNumber(reader.int64());
                    break;
                case 7:
                    message.events.push(Event.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.codespace = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseResponseCheckTx);
        message.events = [];
        if (object.code !== undefined && object.code !== null) {
            message.code = Number(object.code);
        }
        else {
            message.code = 0;
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = bytesFromBase64(object.data);
        }
        if (object.log !== undefined && object.log !== null) {
            message.log = String(object.log);
        }
        else {
            message.log = "";
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
        if (object.events !== undefined && object.events !== null) {
            for (const e of object.events) {
                message.events.push(Event.fromJSON(e));
            }
        }
        if (object.codespace !== undefined && object.codespace !== null) {
            message.codespace = String(object.codespace);
        }
        else {
            message.codespace = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.code !== undefined && (obj.code = message.code);
        message.data !== undefined &&
            (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
        message.log !== undefined && (obj.log = message.log);
        message.info !== undefined && (obj.info = message.info);
        message.gas_wanted !== undefined && (obj.gas_wanted = message.gas_wanted);
        message.gas_used !== undefined && (obj.gas_used = message.gas_used);
        if (message.events) {
            obj.events = message.events.map((e) => (e ? Event.toJSON(e) : undefined));
        }
        else {
            obj.events = [];
        }
        message.codespace !== undefined && (obj.codespace = message.codespace);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseResponseCheckTx);
        message.events = [];
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
            message.data = new Uint8Array();
        }
        if (object.log !== undefined && object.log !== null) {
            message.log = object.log;
        }
        else {
            message.log = "";
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
        if (object.events !== undefined && object.events !== null) {
            for (const e of object.events) {
                message.events.push(Event.fromPartial(e));
            }
        }
        if (object.codespace !== undefined && object.codespace !== null) {
            message.codespace = object.codespace;
        }
        else {
            message.codespace = "";
        }
        return message;
    },
};
const baseResponseDeliverTx = {
    code: 0,
    log: "",
    info: "",
    gas_wanted: 0,
    gas_used: 0,
    codespace: "",
};
export const ResponseDeliverTx = {
    encode(message, writer = Writer.create()) {
        if (message.code !== 0) {
            writer.uint32(8).uint32(message.code);
        }
        if (message.data.length !== 0) {
            writer.uint32(18).bytes(message.data);
        }
        if (message.log !== "") {
            writer.uint32(26).string(message.log);
        }
        if (message.info !== "") {
            writer.uint32(34).string(message.info);
        }
        if (message.gas_wanted !== 0) {
            writer.uint32(40).int64(message.gas_wanted);
        }
        if (message.gas_used !== 0) {
            writer.uint32(48).int64(message.gas_used);
        }
        for (const v of message.events) {
            Event.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.codespace !== "") {
            writer.uint32(66).string(message.codespace);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseResponseDeliverTx);
        message.events = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.code = reader.uint32();
                    break;
                case 2:
                    message.data = reader.bytes();
                    break;
                case 3:
                    message.log = reader.string();
                    break;
                case 4:
                    message.info = reader.string();
                    break;
                case 5:
                    message.gas_wanted = longToNumber(reader.int64());
                    break;
                case 6:
                    message.gas_used = longToNumber(reader.int64());
                    break;
                case 7:
                    message.events.push(Event.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.codespace = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseResponseDeliverTx);
        message.events = [];
        if (object.code !== undefined && object.code !== null) {
            message.code = Number(object.code);
        }
        else {
            message.code = 0;
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = bytesFromBase64(object.data);
        }
        if (object.log !== undefined && object.log !== null) {
            message.log = String(object.log);
        }
        else {
            message.log = "";
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
        if (object.events !== undefined && object.events !== null) {
            for (const e of object.events) {
                message.events.push(Event.fromJSON(e));
            }
        }
        if (object.codespace !== undefined && object.codespace !== null) {
            message.codespace = String(object.codespace);
        }
        else {
            message.codespace = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.code !== undefined && (obj.code = message.code);
        message.data !== undefined &&
            (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
        message.log !== undefined && (obj.log = message.log);
        message.info !== undefined && (obj.info = message.info);
        message.gas_wanted !== undefined && (obj.gas_wanted = message.gas_wanted);
        message.gas_used !== undefined && (obj.gas_used = message.gas_used);
        if (message.events) {
            obj.events = message.events.map((e) => (e ? Event.toJSON(e) : undefined));
        }
        else {
            obj.events = [];
        }
        message.codespace !== undefined && (obj.codespace = message.codespace);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseResponseDeliverTx);
        message.events = [];
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
            message.data = new Uint8Array();
        }
        if (object.log !== undefined && object.log !== null) {
            message.log = object.log;
        }
        else {
            message.log = "";
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
        if (object.events !== undefined && object.events !== null) {
            for (const e of object.events) {
                message.events.push(Event.fromPartial(e));
            }
        }
        if (object.codespace !== undefined && object.codespace !== null) {
            message.codespace = object.codespace;
        }
        else {
            message.codespace = "";
        }
        return message;
    },
};
const baseResponseEndBlock = {};
export const ResponseEndBlock = {
    encode(message, writer = Writer.create()) {
        for (const v of message.validator_updates) {
            ValidatorUpdate.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.consensus_param_updates !== undefined) {
            ConsensusParams.encode(message.consensus_param_updates, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.events) {
            Event.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseResponseEndBlock);
        message.validator_updates = [];
        message.events = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validator_updates.push(ValidatorUpdate.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.consensus_param_updates = ConsensusParams.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.events.push(Event.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseResponseEndBlock);
        message.validator_updates = [];
        message.events = [];
        if (object.validator_updates !== undefined &&
            object.validator_updates !== null) {
            for (const e of object.validator_updates) {
                message.validator_updates.push(ValidatorUpdate.fromJSON(e));
            }
        }
        if (object.consensus_param_updates !== undefined &&
            object.consensus_param_updates !== null) {
            message.consensus_param_updates = ConsensusParams.fromJSON(object.consensus_param_updates);
        }
        else {
            message.consensus_param_updates = undefined;
        }
        if (object.events !== undefined && object.events !== null) {
            for (const e of object.events) {
                message.events.push(Event.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.validator_updates) {
            obj.validator_updates = message.validator_updates.map((e) => e ? ValidatorUpdate.toJSON(e) : undefined);
        }
        else {
            obj.validator_updates = [];
        }
        message.consensus_param_updates !== undefined &&
            (obj.consensus_param_updates = message.consensus_param_updates
                ? ConsensusParams.toJSON(message.consensus_param_updates)
                : undefined);
        if (message.events) {
            obj.events = message.events.map((e) => (e ? Event.toJSON(e) : undefined));
        }
        else {
            obj.events = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseResponseEndBlock);
        message.validator_updates = [];
        message.events = [];
        if (object.validator_updates !== undefined &&
            object.validator_updates !== null) {
            for (const e of object.validator_updates) {
                message.validator_updates.push(ValidatorUpdate.fromPartial(e));
            }
        }
        if (object.consensus_param_updates !== undefined &&
            object.consensus_param_updates !== null) {
            message.consensus_param_updates = ConsensusParams.fromPartial(object.consensus_param_updates);
        }
        else {
            message.consensus_param_updates = undefined;
        }
        if (object.events !== undefined && object.events !== null) {
            for (const e of object.events) {
                message.events.push(Event.fromPartial(e));
            }
        }
        return message;
    },
};
const baseResponseCommit = { retain_height: 0 };
export const ResponseCommit = {
    encode(message, writer = Writer.create()) {
        if (message.data.length !== 0) {
            writer.uint32(18).bytes(message.data);
        }
        if (message.retain_height !== 0) {
            writer.uint32(24).int64(message.retain_height);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseResponseCommit);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.data = reader.bytes();
                    break;
                case 3:
                    message.retain_height = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseResponseCommit);
        if (object.data !== undefined && object.data !== null) {
            message.data = bytesFromBase64(object.data);
        }
        if (object.retain_height !== undefined && object.retain_height !== null) {
            message.retain_height = Number(object.retain_height);
        }
        else {
            message.retain_height = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.data !== undefined &&
            (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
        message.retain_height !== undefined &&
            (obj.retain_height = message.retain_height);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseResponseCommit);
        if (object.data !== undefined && object.data !== null) {
            message.data = object.data;
        }
        else {
            message.data = new Uint8Array();
        }
        if (object.retain_height !== undefined && object.retain_height !== null) {
            message.retain_height = object.retain_height;
        }
        else {
            message.retain_height = 0;
        }
        return message;
    },
};
const baseResponseListSnapshots = {};
export const ResponseListSnapshots = {
    encode(message, writer = Writer.create()) {
        for (const v of message.snapshots) {
            Snapshot.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseResponseListSnapshots);
        message.snapshots = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.snapshots.push(Snapshot.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseResponseListSnapshots);
        message.snapshots = [];
        if (object.snapshots !== undefined && object.snapshots !== null) {
            for (const e of object.snapshots) {
                message.snapshots.push(Snapshot.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.snapshots) {
            obj.snapshots = message.snapshots.map((e) => e ? Snapshot.toJSON(e) : undefined);
        }
        else {
            obj.snapshots = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseResponseListSnapshots);
        message.snapshots = [];
        if (object.snapshots !== undefined && object.snapshots !== null) {
            for (const e of object.snapshots) {
                message.snapshots.push(Snapshot.fromPartial(e));
            }
        }
        return message;
    },
};
const baseResponseOfferSnapshot = { result: 0 };
export const ResponseOfferSnapshot = {
    encode(message, writer = Writer.create()) {
        if (message.result !== 0) {
            writer.uint32(8).int32(message.result);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseResponseOfferSnapshot);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.result = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseResponseOfferSnapshot);
        if (object.result !== undefined && object.result !== null) {
            message.result = responseOfferSnapshot_ResultFromJSON(object.result);
        }
        else {
            message.result = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.result !== undefined &&
            (obj.result = responseOfferSnapshot_ResultToJSON(message.result));
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseResponseOfferSnapshot);
        if (object.result !== undefined && object.result !== null) {
            message.result = object.result;
        }
        else {
            message.result = 0;
        }
        return message;
    },
};
const baseResponseLoadSnapshotChunk = {};
export const ResponseLoadSnapshotChunk = {
    encode(message, writer = Writer.create()) {
        if (message.chunk.length !== 0) {
            writer.uint32(10).bytes(message.chunk);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseResponseLoadSnapshotChunk);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chunk = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseResponseLoadSnapshotChunk);
        if (object.chunk !== undefined && object.chunk !== null) {
            message.chunk = bytesFromBase64(object.chunk);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.chunk !== undefined &&
            (obj.chunk = base64FromBytes(message.chunk !== undefined ? message.chunk : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseResponseLoadSnapshotChunk);
        if (object.chunk !== undefined && object.chunk !== null) {
            message.chunk = object.chunk;
        }
        else {
            message.chunk = new Uint8Array();
        }
        return message;
    },
};
const baseResponseApplySnapshotChunk = {
    result: 0,
    refetch_chunks: 0,
    reject_senders: "",
};
export const ResponseApplySnapshotChunk = {
    encode(message, writer = Writer.create()) {
        if (message.result !== 0) {
            writer.uint32(8).int32(message.result);
        }
        writer.uint32(18).fork();
        for (const v of message.refetch_chunks) {
            writer.uint32(v);
        }
        writer.ldelim();
        for (const v of message.reject_senders) {
            writer.uint32(26).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseResponseApplySnapshotChunk);
        message.refetch_chunks = [];
        message.reject_senders = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.result = reader.int32();
                    break;
                case 2:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.refetch_chunks.push(reader.uint32());
                        }
                    }
                    else {
                        message.refetch_chunks.push(reader.uint32());
                    }
                    break;
                case 3:
                    message.reject_senders.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseResponseApplySnapshotChunk);
        message.refetch_chunks = [];
        message.reject_senders = [];
        if (object.result !== undefined && object.result !== null) {
            message.result = responseApplySnapshotChunk_ResultFromJSON(object.result);
        }
        else {
            message.result = 0;
        }
        if (object.refetch_chunks !== undefined && object.refetch_chunks !== null) {
            for (const e of object.refetch_chunks) {
                message.refetch_chunks.push(Number(e));
            }
        }
        if (object.reject_senders !== undefined && object.reject_senders !== null) {
            for (const e of object.reject_senders) {
                message.reject_senders.push(String(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.result !== undefined &&
            (obj.result = responseApplySnapshotChunk_ResultToJSON(message.result));
        if (message.refetch_chunks) {
            obj.refetch_chunks = message.refetch_chunks.map((e) => e);
        }
        else {
            obj.refetch_chunks = [];
        }
        if (message.reject_senders) {
            obj.reject_senders = message.reject_senders.map((e) => e);
        }
        else {
            obj.reject_senders = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseResponseApplySnapshotChunk);
        message.refetch_chunks = [];
        message.reject_senders = [];
        if (object.result !== undefined && object.result !== null) {
            message.result = object.result;
        }
        else {
            message.result = 0;
        }
        if (object.refetch_chunks !== undefined && object.refetch_chunks !== null) {
            for (const e of object.refetch_chunks) {
                message.refetch_chunks.push(e);
            }
        }
        if (object.reject_senders !== undefined && object.reject_senders !== null) {
            for (const e of object.reject_senders) {
                message.reject_senders.push(e);
            }
        }
        return message;
    },
};
const baseConsensusParams = {};
export const ConsensusParams = {
    encode(message, writer = Writer.create()) {
        if (message.block !== undefined) {
            BlockParams.encode(message.block, writer.uint32(10).fork()).ldelim();
        }
        if (message.evidence !== undefined) {
            EvidenceParams.encode(message.evidence, writer.uint32(18).fork()).ldelim();
        }
        if (message.validator !== undefined) {
            ValidatorParams.encode(message.validator, writer.uint32(26).fork()).ldelim();
        }
        if (message.version !== undefined) {
            VersionParams.encode(message.version, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseConsensusParams);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.block = BlockParams.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.evidence = EvidenceParams.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.validator = ValidatorParams.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.version = VersionParams.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseConsensusParams);
        if (object.block !== undefined && object.block !== null) {
            message.block = BlockParams.fromJSON(object.block);
        }
        else {
            message.block = undefined;
        }
        if (object.evidence !== undefined && object.evidence !== null) {
            message.evidence = EvidenceParams.fromJSON(object.evidence);
        }
        else {
            message.evidence = undefined;
        }
        if (object.validator !== undefined && object.validator !== null) {
            message.validator = ValidatorParams.fromJSON(object.validator);
        }
        else {
            message.validator = undefined;
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = VersionParams.fromJSON(object.version);
        }
        else {
            message.version = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.block !== undefined &&
            (obj.block = message.block
                ? BlockParams.toJSON(message.block)
                : undefined);
        message.evidence !== undefined &&
            (obj.evidence = message.evidence
                ? EvidenceParams.toJSON(message.evidence)
                : undefined);
        message.validator !== undefined &&
            (obj.validator = message.validator
                ? ValidatorParams.toJSON(message.validator)
                : undefined);
        message.version !== undefined &&
            (obj.version = message.version
                ? VersionParams.toJSON(message.version)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseConsensusParams);
        if (object.block !== undefined && object.block !== null) {
            message.block = BlockParams.fromPartial(object.block);
        }
        else {
            message.block = undefined;
        }
        if (object.evidence !== undefined && object.evidence !== null) {
            message.evidence = EvidenceParams.fromPartial(object.evidence);
        }
        else {
            message.evidence = undefined;
        }
        if (object.validator !== undefined && object.validator !== null) {
            message.validator = ValidatorParams.fromPartial(object.validator);
        }
        else {
            message.validator = undefined;
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = VersionParams.fromPartial(object.version);
        }
        else {
            message.version = undefined;
        }
        return message;
    },
};
const baseBlockParams = { max_bytes: 0, max_gas: 0 };
export const BlockParams = {
    encode(message, writer = Writer.create()) {
        if (message.max_bytes !== 0) {
            writer.uint32(8).int64(message.max_bytes);
        }
        if (message.max_gas !== 0) {
            writer.uint32(16).int64(message.max_gas);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseBlockParams);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.max_bytes = longToNumber(reader.int64());
                    break;
                case 2:
                    message.max_gas = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseBlockParams);
        if (object.max_bytes !== undefined && object.max_bytes !== null) {
            message.max_bytes = Number(object.max_bytes);
        }
        else {
            message.max_bytes = 0;
        }
        if (object.max_gas !== undefined && object.max_gas !== null) {
            message.max_gas = Number(object.max_gas);
        }
        else {
            message.max_gas = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.max_bytes !== undefined && (obj.max_bytes = message.max_bytes);
        message.max_gas !== undefined && (obj.max_gas = message.max_gas);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseBlockParams);
        if (object.max_bytes !== undefined && object.max_bytes !== null) {
            message.max_bytes = object.max_bytes;
        }
        else {
            message.max_bytes = 0;
        }
        if (object.max_gas !== undefined && object.max_gas !== null) {
            message.max_gas = object.max_gas;
        }
        else {
            message.max_gas = 0;
        }
        return message;
    },
};
const baseLastCommitInfo = { round: 0 };
export const LastCommitInfo = {
    encode(message, writer = Writer.create()) {
        if (message.round !== 0) {
            writer.uint32(8).int32(message.round);
        }
        for (const v of message.votes) {
            VoteInfo.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseLastCommitInfo);
        message.votes = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.round = reader.int32();
                    break;
                case 2:
                    message.votes.push(VoteInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseLastCommitInfo);
        message.votes = [];
        if (object.round !== undefined && object.round !== null) {
            message.round = Number(object.round);
        }
        else {
            message.round = 0;
        }
        if (object.votes !== undefined && object.votes !== null) {
            for (const e of object.votes) {
                message.votes.push(VoteInfo.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.round !== undefined && (obj.round = message.round);
        if (message.votes) {
            obj.votes = message.votes.map((e) => e ? VoteInfo.toJSON(e) : undefined);
        }
        else {
            obj.votes = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseLastCommitInfo);
        message.votes = [];
        if (object.round !== undefined && object.round !== null) {
            message.round = object.round;
        }
        else {
            message.round = 0;
        }
        if (object.votes !== undefined && object.votes !== null) {
            for (const e of object.votes) {
                message.votes.push(VoteInfo.fromPartial(e));
            }
        }
        return message;
    },
};
const baseEvent = { type: "" };
export const Event = {
    encode(message, writer = Writer.create()) {
        if (message.type !== "") {
            writer.uint32(10).string(message.type);
        }
        for (const v of message.attributes) {
            EventAttribute.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseEvent);
        message.attributes = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.string();
                    break;
                case 2:
                    message.attributes.push(EventAttribute.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseEvent);
        message.attributes = [];
        if (object.type !== undefined && object.type !== null) {
            message.type = String(object.type);
        }
        else {
            message.type = "";
        }
        if (object.attributes !== undefined && object.attributes !== null) {
            for (const e of object.attributes) {
                message.attributes.push(EventAttribute.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.type !== undefined && (obj.type = message.type);
        if (message.attributes) {
            obj.attributes = message.attributes.map((e) => e ? EventAttribute.toJSON(e) : undefined);
        }
        else {
            obj.attributes = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseEvent);
        message.attributes = [];
        if (object.type !== undefined && object.type !== null) {
            message.type = object.type;
        }
        else {
            message.type = "";
        }
        if (object.attributes !== undefined && object.attributes !== null) {
            for (const e of object.attributes) {
                message.attributes.push(EventAttribute.fromPartial(e));
            }
        }
        return message;
    },
};
const baseEventAttribute = { index: false };
export const EventAttribute = {
    encode(message, writer = Writer.create()) {
        if (message.key.length !== 0) {
            writer.uint32(10).bytes(message.key);
        }
        if (message.value.length !== 0) {
            writer.uint32(18).bytes(message.value);
        }
        if (message.index === true) {
            writer.uint32(24).bool(message.index);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseEventAttribute);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.bytes();
                    break;
                case 2:
                    message.value = reader.bytes();
                    break;
                case 3:
                    message.index = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseEventAttribute);
        if (object.key !== undefined && object.key !== null) {
            message.key = bytesFromBase64(object.key);
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = bytesFromBase64(object.value);
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = Boolean(object.index);
        }
        else {
            message.index = false;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined &&
            (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
        message.value !== undefined &&
            (obj.value = base64FromBytes(message.value !== undefined ? message.value : new Uint8Array()));
        message.index !== undefined && (obj.index = message.index);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseEventAttribute);
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        }
        else {
            message.key = new Uint8Array();
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value;
        }
        else {
            message.value = new Uint8Array();
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = false;
        }
        return message;
    },
};
const baseTxResult = { height: 0, index: 0 };
export const TxResult = {
    encode(message, writer = Writer.create()) {
        if (message.height !== 0) {
            writer.uint32(8).int64(message.height);
        }
        if (message.index !== 0) {
            writer.uint32(16).uint32(message.index);
        }
        if (message.tx.length !== 0) {
            writer.uint32(26).bytes(message.tx);
        }
        if (message.result !== undefined) {
            ResponseDeliverTx.encode(message.result, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseTxResult);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = longToNumber(reader.int64());
                    break;
                case 2:
                    message.index = reader.uint32();
                    break;
                case 3:
                    message.tx = reader.bytes();
                    break;
                case 4:
                    message.result = ResponseDeliverTx.decode(reader, reader.uint32());
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
        if (object.height !== undefined && object.height !== null) {
            message.height = Number(object.height);
        }
        else {
            message.height = 0;
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = Number(object.index);
        }
        else {
            message.index = 0;
        }
        if (object.tx !== undefined && object.tx !== null) {
            message.tx = bytesFromBase64(object.tx);
        }
        if (object.result !== undefined && object.result !== null) {
            message.result = ResponseDeliverTx.fromJSON(object.result);
        }
        else {
            message.result = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined && (obj.height = message.height);
        message.index !== undefined && (obj.index = message.index);
        message.tx !== undefined &&
            (obj.tx = base64FromBytes(message.tx !== undefined ? message.tx : new Uint8Array()));
        message.result !== undefined &&
            (obj.result = message.result
                ? ResponseDeliverTx.toJSON(message.result)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseTxResult);
        if (object.height !== undefined && object.height !== null) {
            message.height = object.height;
        }
        else {
            message.height = 0;
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = 0;
        }
        if (object.tx !== undefined && object.tx !== null) {
            message.tx = object.tx;
        }
        else {
            message.tx = new Uint8Array();
        }
        if (object.result !== undefined && object.result !== null) {
            message.result = ResponseDeliverTx.fromPartial(object.result);
        }
        else {
            message.result = undefined;
        }
        return message;
    },
};
const baseValidator = { power: 0 };
export const Validator = {
    encode(message, writer = Writer.create()) {
        if (message.address.length !== 0) {
            writer.uint32(10).bytes(message.address);
        }
        if (message.power !== 0) {
            writer.uint32(24).int64(message.power);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseValidator);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.bytes();
                    break;
                case 3:
                    message.power = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseValidator);
        if (object.address !== undefined && object.address !== null) {
            message.address = bytesFromBase64(object.address);
        }
        if (object.power !== undefined && object.power !== null) {
            message.power = Number(object.power);
        }
        else {
            message.power = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined &&
            (obj.address = base64FromBytes(message.address !== undefined ? message.address : new Uint8Array()));
        message.power !== undefined && (obj.power = message.power);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseValidator);
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        else {
            message.address = new Uint8Array();
        }
        if (object.power !== undefined && object.power !== null) {
            message.power = object.power;
        }
        else {
            message.power = 0;
        }
        return message;
    },
};
const baseValidatorUpdate = { power: 0 };
export const ValidatorUpdate = {
    encode(message, writer = Writer.create()) {
        if (message.pub_key !== undefined) {
            PublicKey.encode(message.pub_key, writer.uint32(10).fork()).ldelim();
        }
        if (message.power !== 0) {
            writer.uint32(16).int64(message.power);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseValidatorUpdate);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pub_key = PublicKey.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.power = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseValidatorUpdate);
        if (object.pub_key !== undefined && object.pub_key !== null) {
            message.pub_key = PublicKey.fromJSON(object.pub_key);
        }
        else {
            message.pub_key = undefined;
        }
        if (object.power !== undefined && object.power !== null) {
            message.power = Number(object.power);
        }
        else {
            message.power = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pub_key !== undefined &&
            (obj.pub_key = message.pub_key
                ? PublicKey.toJSON(message.pub_key)
                : undefined);
        message.power !== undefined && (obj.power = message.power);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseValidatorUpdate);
        if (object.pub_key !== undefined && object.pub_key !== null) {
            message.pub_key = PublicKey.fromPartial(object.pub_key);
        }
        else {
            message.pub_key = undefined;
        }
        if (object.power !== undefined && object.power !== null) {
            message.power = object.power;
        }
        else {
            message.power = 0;
        }
        return message;
    },
};
const baseVoteInfo = { signed_last_block: false };
export const VoteInfo = {
    encode(message, writer = Writer.create()) {
        if (message.validator !== undefined) {
            Validator.encode(message.validator, writer.uint32(10).fork()).ldelim();
        }
        if (message.signed_last_block === true) {
            writer.uint32(16).bool(message.signed_last_block);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseVoteInfo);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validator = Validator.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.signed_last_block = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseVoteInfo);
        if (object.validator !== undefined && object.validator !== null) {
            message.validator = Validator.fromJSON(object.validator);
        }
        else {
            message.validator = undefined;
        }
        if (object.signed_last_block !== undefined &&
            object.signed_last_block !== null) {
            message.signed_last_block = Boolean(object.signed_last_block);
        }
        else {
            message.signed_last_block = false;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.validator !== undefined &&
            (obj.validator = message.validator
                ? Validator.toJSON(message.validator)
                : undefined);
        message.signed_last_block !== undefined &&
            (obj.signed_last_block = message.signed_last_block);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseVoteInfo);
        if (object.validator !== undefined && object.validator !== null) {
            message.validator = Validator.fromPartial(object.validator);
        }
        else {
            message.validator = undefined;
        }
        if (object.signed_last_block !== undefined &&
            object.signed_last_block !== null) {
            message.signed_last_block = object.signed_last_block;
        }
        else {
            message.signed_last_block = false;
        }
        return message;
    },
};
const baseEvidence = { type: 0, height: 0, total_voting_power: 0 };
export const Evidence = {
    encode(message, writer = Writer.create()) {
        if (message.type !== 0) {
            writer.uint32(8).int32(message.type);
        }
        if (message.validator !== undefined) {
            Validator.encode(message.validator, writer.uint32(18).fork()).ldelim();
        }
        if (message.height !== 0) {
            writer.uint32(24).int64(message.height);
        }
        if (message.time !== undefined) {
            Timestamp.encode(toTimestamp(message.time), writer.uint32(34).fork()).ldelim();
        }
        if (message.total_voting_power !== 0) {
            writer.uint32(40).int64(message.total_voting_power);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseEvidence);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
                    message.validator = Validator.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.height = longToNumber(reader.int64());
                    break;
                case 4:
                    message.time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.total_voting_power = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseEvidence);
        if (object.type !== undefined && object.type !== null) {
            message.type = evidenceTypeFromJSON(object.type);
        }
        else {
            message.type = 0;
        }
        if (object.validator !== undefined && object.validator !== null) {
            message.validator = Validator.fromJSON(object.validator);
        }
        else {
            message.validator = undefined;
        }
        if (object.height !== undefined && object.height !== null) {
            message.height = Number(object.height);
        }
        else {
            message.height = 0;
        }
        if (object.time !== undefined && object.time !== null) {
            message.time = fromJsonTimestamp(object.time);
        }
        else {
            message.time = undefined;
        }
        if (object.total_voting_power !== undefined &&
            object.total_voting_power !== null) {
            message.total_voting_power = Number(object.total_voting_power);
        }
        else {
            message.total_voting_power = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.type !== undefined && (obj.type = evidenceTypeToJSON(message.type));
        message.validator !== undefined &&
            (obj.validator = message.validator
                ? Validator.toJSON(message.validator)
                : undefined);
        message.height !== undefined && (obj.height = message.height);
        message.time !== undefined &&
            (obj.time =
                message.time !== undefined ? message.time.toISOString() : null);
        message.total_voting_power !== undefined &&
            (obj.total_voting_power = message.total_voting_power);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseEvidence);
        if (object.type !== undefined && object.type !== null) {
            message.type = object.type;
        }
        else {
            message.type = 0;
        }
        if (object.validator !== undefined && object.validator !== null) {
            message.validator = Validator.fromPartial(object.validator);
        }
        else {
            message.validator = undefined;
        }
        if (object.height !== undefined && object.height !== null) {
            message.height = object.height;
        }
        else {
            message.height = 0;
        }
        if (object.time !== undefined && object.time !== null) {
            message.time = object.time;
        }
        else {
            message.time = undefined;
        }
        if (object.total_voting_power !== undefined &&
            object.total_voting_power !== null) {
            message.total_voting_power = object.total_voting_power;
        }
        else {
            message.total_voting_power = 0;
        }
        return message;
    },
};
const baseSnapshot = { height: 0, format: 0, chunks: 0 };
export const Snapshot = {
    encode(message, writer = Writer.create()) {
        if (message.height !== 0) {
            writer.uint32(8).uint64(message.height);
        }
        if (message.format !== 0) {
            writer.uint32(16).uint32(message.format);
        }
        if (message.chunks !== 0) {
            writer.uint32(24).uint32(message.chunks);
        }
        if (message.hash.length !== 0) {
            writer.uint32(34).bytes(message.hash);
        }
        if (message.metadata.length !== 0) {
            writer.uint32(42).bytes(message.metadata);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseSnapshot);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = longToNumber(reader.uint64());
                    break;
                case 2:
                    message.format = reader.uint32();
                    break;
                case 3:
                    message.chunks = reader.uint32();
                    break;
                case 4:
                    message.hash = reader.bytes();
                    break;
                case 5:
                    message.metadata = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseSnapshot);
        if (object.height !== undefined && object.height !== null) {
            message.height = Number(object.height);
        }
        else {
            message.height = 0;
        }
        if (object.format !== undefined && object.format !== null) {
            message.format = Number(object.format);
        }
        else {
            message.format = 0;
        }
        if (object.chunks !== undefined && object.chunks !== null) {
            message.chunks = Number(object.chunks);
        }
        else {
            message.chunks = 0;
        }
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = bytesFromBase64(object.hash);
        }
        if (object.metadata !== undefined && object.metadata !== null) {
            message.metadata = bytesFromBase64(object.metadata);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined && (obj.height = message.height);
        message.format !== undefined && (obj.format = message.format);
        message.chunks !== undefined && (obj.chunks = message.chunks);
        message.hash !== undefined &&
            (obj.hash = base64FromBytes(message.hash !== undefined ? message.hash : new Uint8Array()));
        message.metadata !== undefined &&
            (obj.metadata = base64FromBytes(message.metadata !== undefined ? message.metadata : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseSnapshot);
        if (object.height !== undefined && object.height !== null) {
            message.height = object.height;
        }
        else {
            message.height = 0;
        }
        if (object.format !== undefined && object.format !== null) {
            message.format = object.format;
        }
        else {
            message.format = 0;
        }
        if (object.chunks !== undefined && object.chunks !== null) {
            message.chunks = object.chunks;
        }
        else {
            message.chunks = 0;
        }
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = object.hash;
        }
        else {
            message.hash = new Uint8Array();
        }
        if (object.metadata !== undefined && object.metadata !== null) {
            message.metadata = object.metadata;
        }
        else {
            message.metadata = new Uint8Array();
        }
        return message;
    },
};
export class ABCIApplicationClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    Echo(request) {
        const data = RequestEcho.encode(request).finish();
        const promise = this.rpc.request("tendermint.abci.ABCIApplication", "Echo", data);
        return promise.then((data) => ResponseEcho.decode(new Reader(data)));
    }
    Flush(request) {
        const data = RequestFlush.encode(request).finish();
        const promise = this.rpc.request("tendermint.abci.ABCIApplication", "Flush", data);
        return promise.then((data) => ResponseFlush.decode(new Reader(data)));
    }
    Info(request) {
        const data = RequestInfo.encode(request).finish();
        const promise = this.rpc.request("tendermint.abci.ABCIApplication", "Info", data);
        return promise.then((data) => ResponseInfo.decode(new Reader(data)));
    }
    SetOption(request) {
        const data = RequestSetOption.encode(request).finish();
        const promise = this.rpc.request("tendermint.abci.ABCIApplication", "SetOption", data);
        return promise.then((data) => ResponseSetOption.decode(new Reader(data)));
    }
    DeliverTx(request) {
        const data = RequestDeliverTx.encode(request).finish();
        const promise = this.rpc.request("tendermint.abci.ABCIApplication", "DeliverTx", data);
        return promise.then((data) => ResponseDeliverTx.decode(new Reader(data)));
    }
    CheckTx(request) {
        const data = RequestCheckTx.encode(request).finish();
        const promise = this.rpc.request("tendermint.abci.ABCIApplication", "CheckTx", data);
        return promise.then((data) => ResponseCheckTx.decode(new Reader(data)));
    }
    Query(request) {
        const data = RequestQuery.encode(request).finish();
        const promise = this.rpc.request("tendermint.abci.ABCIApplication", "Query", data);
        return promise.then((data) => ResponseQuery.decode(new Reader(data)));
    }
    Commit(request) {
        const data = RequestCommit.encode(request).finish();
        const promise = this.rpc.request("tendermint.abci.ABCIApplication", "Commit", data);
        return promise.then((data) => ResponseCommit.decode(new Reader(data)));
    }
    InitChain(request) {
        const data = RequestInitChain.encode(request).finish();
        const promise = this.rpc.request("tendermint.abci.ABCIApplication", "InitChain", data);
        return promise.then((data) => ResponseInitChain.decode(new Reader(data)));
    }
    BeginBlock(request) {
        const data = RequestBeginBlock.encode(request).finish();
        const promise = this.rpc.request("tendermint.abci.ABCIApplication", "BeginBlock", data);
        return promise.then((data) => ResponseBeginBlock.decode(new Reader(data)));
    }
    EndBlock(request) {
        const data = RequestEndBlock.encode(request).finish();
        const promise = this.rpc.request("tendermint.abci.ABCIApplication", "EndBlock", data);
        return promise.then((data) => ResponseEndBlock.decode(new Reader(data)));
    }
    ListSnapshots(request) {
        const data = RequestListSnapshots.encode(request).finish();
        const promise = this.rpc.request("tendermint.abci.ABCIApplication", "ListSnapshots", data);
        return promise.then((data) => ResponseListSnapshots.decode(new Reader(data)));
    }
    OfferSnapshot(request) {
        const data = RequestOfferSnapshot.encode(request).finish();
        const promise = this.rpc.request("tendermint.abci.ABCIApplication", "OfferSnapshot", data);
        return promise.then((data) => ResponseOfferSnapshot.decode(new Reader(data)));
    }
    LoadSnapshotChunk(request) {
        const data = RequestLoadSnapshotChunk.encode(request).finish();
        const promise = this.rpc.request("tendermint.abci.ABCIApplication", "LoadSnapshotChunk", data);
        return promise.then((data) => ResponseLoadSnapshotChunk.decode(new Reader(data)));
    }
    ApplySnapshotChunk(request) {
        const data = RequestApplySnapshotChunk.encode(request).finish();
        const promise = this.rpc.request("tendermint.abci.ABCIApplication", "ApplySnapshotChunk", data);
        return promise.then((data) => ResponseApplySnapshotChunk.decode(new Reader(data)));
    }
}
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
const atob = globalThis.atob ||
    ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64) {
    const bin = atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
        arr[i] = bin.charCodeAt(i);
    }
    return arr;
}
const btoa = globalThis.btoa ||
    ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr) {
    const bin = [];
    for (let i = 0; i < arr.byteLength; ++i) {
        bin.push(String.fromCharCode(arr[i]));
    }
    return btoa(bin.join(""));
}
function toTimestamp(date) {
    const seconds = date.getTime() / 1000;
    const nanos = (date.getTime() % 1000) * 1000000;
    return { seconds, nanos };
}
function fromTimestamp(t) {
    let millis = t.seconds * 1000;
    millis += t.nanos / 1000000;
    return new Date(millis);
}
function fromJsonTimestamp(o) {
    if (o instanceof Date) {
        return o;
    }
    else if (typeof o === "string") {
        return new Date(o);
    }
    else {
        return fromTimestamp(Timestamp.fromJSON(o));
    }
}
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
