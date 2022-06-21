"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Event = exports.LastCommitInfo = exports.BlockParams = exports.ConsensusParams = exports.ResponseApplySnapshotChunk = exports.ResponseLoadSnapshotChunk = exports.ResponseOfferSnapshot = exports.ResponseListSnapshots = exports.ResponseCommit = exports.ResponseEndBlock = exports.ResponseDeliverTx = exports.ResponseCheckTx = exports.ResponseBeginBlock = exports.ResponseQuery = exports.ResponseInitChain = exports.ResponseSetOption = exports.ResponseInfo = exports.ResponseFlush = exports.ResponseEcho = exports.ResponseException = exports.Response = exports.RequestApplySnapshotChunk = exports.RequestLoadSnapshotChunk = exports.RequestOfferSnapshot = exports.RequestListSnapshots = exports.RequestCommit = exports.RequestEndBlock = exports.RequestDeliverTx = exports.RequestCheckTx = exports.RequestBeginBlock = exports.RequestQuery = exports.RequestInitChain = exports.RequestSetOption = exports.RequestInfo = exports.RequestFlush = exports.RequestEcho = exports.Request = exports.responseApplySnapshotChunk_ResultToJSON = exports.responseApplySnapshotChunk_ResultFromJSON = exports.ResponseApplySnapshotChunk_Result = exports.responseOfferSnapshot_ResultToJSON = exports.responseOfferSnapshot_ResultFromJSON = exports.ResponseOfferSnapshot_Result = exports.evidenceTypeToJSON = exports.evidenceTypeFromJSON = exports.EvidenceType = exports.checkTxTypeToJSON = exports.checkTxTypeFromJSON = exports.CheckTxType = exports.protobufPackage = void 0;
exports.ABCIApplicationClientImpl = exports.Snapshot = exports.Evidence = exports.VoteInfo = exports.ValidatorUpdate = exports.Validator = exports.TxResult = exports.EventAttribute = void 0;
/* eslint-disable */
const minimal_1 = require("protobufjs/minimal");
const timestamp_1 = require("../../google/protobuf/timestamp");
const types_1 = require("../../tendermint/types/types");
const proof_1 = require("../../tendermint/crypto/proof");
const params_1 = require("../../tendermint/types/params");
const keys_1 = require("../../tendermint/crypto/keys");
const __1 = require("../..");
exports.protobufPackage = "tendermint.abci";
var CheckTxType;
(function (CheckTxType) {
    CheckTxType[CheckTxType["NEW"] = 0] = "NEW";
    CheckTxType[CheckTxType["RECHECK"] = 1] = "RECHECK";
    CheckTxType[CheckTxType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(CheckTxType = exports.CheckTxType || (exports.CheckTxType = {}));
function checkTxTypeFromJSON(object) {
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
exports.checkTxTypeFromJSON = checkTxTypeFromJSON;
function checkTxTypeToJSON(object) {
    switch (object) {
        case CheckTxType.NEW:
            return "NEW";
        case CheckTxType.RECHECK:
            return "RECHECK";
        default:
            return "UNKNOWN";
    }
}
exports.checkTxTypeToJSON = checkTxTypeToJSON;
var EvidenceType;
(function (EvidenceType) {
    EvidenceType[EvidenceType["UNKNOWN"] = 0] = "UNKNOWN";
    EvidenceType[EvidenceType["DUPLICATE_VOTE"] = 1] = "DUPLICATE_VOTE";
    EvidenceType[EvidenceType["LIGHT_CLIENT_ATTACK"] = 2] = "LIGHT_CLIENT_ATTACK";
    EvidenceType[EvidenceType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(EvidenceType = exports.EvidenceType || (exports.EvidenceType = {}));
function evidenceTypeFromJSON(object) {
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
exports.evidenceTypeFromJSON = evidenceTypeFromJSON;
function evidenceTypeToJSON(object) {
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
exports.evidenceTypeToJSON = evidenceTypeToJSON;
var ResponseOfferSnapshot_Result;
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
})(ResponseOfferSnapshot_Result = exports.ResponseOfferSnapshot_Result || (exports.ResponseOfferSnapshot_Result = {}));
function responseOfferSnapshot_ResultFromJSON(object) {
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
exports.responseOfferSnapshot_ResultFromJSON = responseOfferSnapshot_ResultFromJSON;
function responseOfferSnapshot_ResultToJSON(object) {
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
exports.responseOfferSnapshot_ResultToJSON = responseOfferSnapshot_ResultToJSON;
var ResponseApplySnapshotChunk_Result;
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
})(ResponseApplySnapshotChunk_Result = exports.ResponseApplySnapshotChunk_Result || (exports.ResponseApplySnapshotChunk_Result = {}));
function responseApplySnapshotChunk_ResultFromJSON(object) {
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
exports.responseApplySnapshotChunk_ResultFromJSON = responseApplySnapshotChunk_ResultFromJSON;
function responseApplySnapshotChunk_ResultToJSON(object) {
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
exports.responseApplySnapshotChunk_ResultToJSON = responseApplySnapshotChunk_ResultToJSON;
const baseRequest = {};
exports.Request = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.echo !== undefined) {
            exports.RequestEcho.encode(message.echo, writer.uint32(10).fork()).ldelim();
        }
        if (message.flush !== undefined) {
            exports.RequestFlush.encode(message.flush, writer.uint32(18).fork()).ldelim();
        }
        if (message.info !== undefined) {
            exports.RequestInfo.encode(message.info, writer.uint32(26).fork()).ldelim();
        }
        if (message.set_option !== undefined) {
            exports.RequestSetOption.encode(message.set_option, writer.uint32(34).fork()).ldelim();
        }
        if (message.init_chain !== undefined) {
            exports.RequestInitChain.encode(message.init_chain, writer.uint32(42).fork()).ldelim();
        }
        if (message.query !== undefined) {
            exports.RequestQuery.encode(message.query, writer.uint32(50).fork()).ldelim();
        }
        if (message.begin_block !== undefined) {
            exports.RequestBeginBlock.encode(message.begin_block, writer.uint32(58).fork()).ldelim();
        }
        if (message.check_tx !== undefined) {
            exports.RequestCheckTx.encode(message.check_tx, writer.uint32(66).fork()).ldelim();
        }
        if (message.deliver_tx !== undefined) {
            exports.RequestDeliverTx.encode(message.deliver_tx, writer.uint32(74).fork()).ldelim();
        }
        if (message.end_block !== undefined) {
            exports.RequestEndBlock.encode(message.end_block, writer.uint32(82).fork()).ldelim();
        }
        if (message.commit !== undefined) {
            exports.RequestCommit.encode(message.commit, writer.uint32(90).fork()).ldelim();
        }
        if (message.list_snapshots !== undefined) {
            exports.RequestListSnapshots.encode(message.list_snapshots, writer.uint32(98).fork()).ldelim();
        }
        if (message.offer_snapshot !== undefined) {
            exports.RequestOfferSnapshot.encode(message.offer_snapshot, writer.uint32(106).fork()).ldelim();
        }
        if (message.load_snapshot_chunk !== undefined) {
            exports.RequestLoadSnapshotChunk.encode(message.load_snapshot_chunk, writer.uint32(114).fork()).ldelim();
        }
        if (message.apply_snapshot_chunk !== undefined) {
            exports.RequestApplySnapshotChunk.encode(message.apply_snapshot_chunk, writer.uint32(122).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.echo = exports.RequestEcho.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.flush = exports.RequestFlush.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.info = exports.RequestInfo.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.set_option = exports.RequestSetOption.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.init_chain = exports.RequestInitChain.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.query = exports.RequestQuery.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.begin_block = exports.RequestBeginBlock.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.check_tx = exports.RequestCheckTx.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.deliver_tx = exports.RequestDeliverTx.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.end_block = exports.RequestEndBlock.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.commit = exports.RequestCommit.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.list_snapshots = exports.RequestListSnapshots.decode(reader, reader.uint32());
                    break;
                case 13:
                    message.offer_snapshot = exports.RequestOfferSnapshot.decode(reader, reader.uint32());
                    break;
                case 14:
                    message.load_snapshot_chunk = exports.RequestLoadSnapshotChunk.decode(reader, reader.uint32());
                    break;
                case 15:
                    message.apply_snapshot_chunk = exports.RequestApplySnapshotChunk.decode(reader, reader.uint32());
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
            message.echo = exports.RequestEcho.fromJSON(object.echo);
        }
        else {
            message.echo = undefined;
        }
        if (object.flush !== undefined && object.flush !== null) {
            message.flush = exports.RequestFlush.fromJSON(object.flush);
        }
        else {
            message.flush = undefined;
        }
        if (object.info !== undefined && object.info !== null) {
            message.info = exports.RequestInfo.fromJSON(object.info);
        }
        else {
            message.info = undefined;
        }
        if (object.set_option !== undefined && object.set_option !== null) {
            message.set_option = exports.RequestSetOption.fromJSON(object.set_option);
        }
        else {
            message.set_option = undefined;
        }
        if (object.init_chain !== undefined && object.init_chain !== null) {
            message.init_chain = exports.RequestInitChain.fromJSON(object.init_chain);
        }
        else {
            message.init_chain = undefined;
        }
        if (object.query !== undefined && object.query !== null) {
            message.query = exports.RequestQuery.fromJSON(object.query);
        }
        else {
            message.query = undefined;
        }
        if (object.begin_block !== undefined && object.begin_block !== null) {
            message.begin_block = exports.RequestBeginBlock.fromJSON(object.begin_block);
        }
        else {
            message.begin_block = undefined;
        }
        if (object.check_tx !== undefined && object.check_tx !== null) {
            message.check_tx = exports.RequestCheckTx.fromJSON(object.check_tx);
        }
        else {
            message.check_tx = undefined;
        }
        if (object.deliver_tx !== undefined && object.deliver_tx !== null) {
            message.deliver_tx = exports.RequestDeliverTx.fromJSON(object.deliver_tx);
        }
        else {
            message.deliver_tx = undefined;
        }
        if (object.end_block !== undefined && object.end_block !== null) {
            message.end_block = exports.RequestEndBlock.fromJSON(object.end_block);
        }
        else {
            message.end_block = undefined;
        }
        if (object.commit !== undefined && object.commit !== null) {
            message.commit = exports.RequestCommit.fromJSON(object.commit);
        }
        else {
            message.commit = undefined;
        }
        if (object.list_snapshots !== undefined && object.list_snapshots !== null) {
            message.list_snapshots = exports.RequestListSnapshots.fromJSON(object.list_snapshots);
        }
        else {
            message.list_snapshots = undefined;
        }
        if (object.offer_snapshot !== undefined && object.offer_snapshot !== null) {
            message.offer_snapshot = exports.RequestOfferSnapshot.fromJSON(object.offer_snapshot);
        }
        else {
            message.offer_snapshot = undefined;
        }
        if (object.load_snapshot_chunk !== undefined &&
            object.load_snapshot_chunk !== null) {
            message.load_snapshot_chunk = exports.RequestLoadSnapshotChunk.fromJSON(object.load_snapshot_chunk);
        }
        else {
            message.load_snapshot_chunk = undefined;
        }
        if (object.apply_snapshot_chunk !== undefined &&
            object.apply_snapshot_chunk !== null) {
            message.apply_snapshot_chunk = exports.RequestApplySnapshotChunk.fromJSON(object.apply_snapshot_chunk);
        }
        else {
            message.apply_snapshot_chunk = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.echo !== undefined &&
            (obj.echo = message.echo ? exports.RequestEcho.toJSON(message.echo) : undefined);
        message.flush !== undefined &&
            (obj.flush = message.flush
                ? exports.RequestFlush.toJSON(message.flush)
                : undefined);
        message.info !== undefined &&
            (obj.info = message.info ? exports.RequestInfo.toJSON(message.info) : undefined);
        message.set_option !== undefined &&
            (obj.set_option = message.set_option
                ? exports.RequestSetOption.toJSON(message.set_option)
                : undefined);
        message.init_chain !== undefined &&
            (obj.init_chain = message.init_chain
                ? exports.RequestInitChain.toJSON(message.init_chain)
                : undefined);
        message.query !== undefined &&
            (obj.query = message.query
                ? exports.RequestQuery.toJSON(message.query)
                : undefined);
        message.begin_block !== undefined &&
            (obj.begin_block = message.begin_block
                ? exports.RequestBeginBlock.toJSON(message.begin_block)
                : undefined);
        message.check_tx !== undefined &&
            (obj.check_tx = message.check_tx
                ? exports.RequestCheckTx.toJSON(message.check_tx)
                : undefined);
        message.deliver_tx !== undefined &&
            (obj.deliver_tx = message.deliver_tx
                ? exports.RequestDeliverTx.toJSON(message.deliver_tx)
                : undefined);
        message.end_block !== undefined &&
            (obj.end_block = message.end_block
                ? exports.RequestEndBlock.toJSON(message.end_block)
                : undefined);
        message.commit !== undefined &&
            (obj.commit = message.commit
                ? exports.RequestCommit.toJSON(message.commit)
                : undefined);
        message.list_snapshots !== undefined &&
            (obj.list_snapshots = message.list_snapshots
                ? exports.RequestListSnapshots.toJSON(message.list_snapshots)
                : undefined);
        message.offer_snapshot !== undefined &&
            (obj.offer_snapshot = message.offer_snapshot
                ? exports.RequestOfferSnapshot.toJSON(message.offer_snapshot)
                : undefined);
        message.load_snapshot_chunk !== undefined &&
            (obj.load_snapshot_chunk = message.load_snapshot_chunk
                ? exports.RequestLoadSnapshotChunk.toJSON(message.load_snapshot_chunk)
                : undefined);
        message.apply_snapshot_chunk !== undefined &&
            (obj.apply_snapshot_chunk = message.apply_snapshot_chunk
                ? exports.RequestApplySnapshotChunk.toJSON(message.apply_snapshot_chunk)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseRequest);
        if (object.echo !== undefined && object.echo !== null) {
            message.echo = exports.RequestEcho.fromPartial(object.echo);
        }
        else {
            message.echo = undefined;
        }
        if (object.flush !== undefined && object.flush !== null) {
            message.flush = exports.RequestFlush.fromPartial(object.flush);
        }
        else {
            message.flush = undefined;
        }
        if (object.info !== undefined && object.info !== null) {
            message.info = exports.RequestInfo.fromPartial(object.info);
        }
        else {
            message.info = undefined;
        }
        if (object.set_option !== undefined && object.set_option !== null) {
            message.set_option = exports.RequestSetOption.fromPartial(object.set_option);
        }
        else {
            message.set_option = undefined;
        }
        if (object.init_chain !== undefined && object.init_chain !== null) {
            message.init_chain = exports.RequestInitChain.fromPartial(object.init_chain);
        }
        else {
            message.init_chain = undefined;
        }
        if (object.query !== undefined && object.query !== null) {
            message.query = exports.RequestQuery.fromPartial(object.query);
        }
        else {
            message.query = undefined;
        }
        if (object.begin_block !== undefined && object.begin_block !== null) {
            message.begin_block = exports.RequestBeginBlock.fromPartial(object.begin_block);
        }
        else {
            message.begin_block = undefined;
        }
        if (object.check_tx !== undefined && object.check_tx !== null) {
            message.check_tx = exports.RequestCheckTx.fromPartial(object.check_tx);
        }
        else {
            message.check_tx = undefined;
        }
        if (object.deliver_tx !== undefined && object.deliver_tx !== null) {
            message.deliver_tx = exports.RequestDeliverTx.fromPartial(object.deliver_tx);
        }
        else {
            message.deliver_tx = undefined;
        }
        if (object.end_block !== undefined && object.end_block !== null) {
            message.end_block = exports.RequestEndBlock.fromPartial(object.end_block);
        }
        else {
            message.end_block = undefined;
        }
        if (object.commit !== undefined && object.commit !== null) {
            message.commit = exports.RequestCommit.fromPartial(object.commit);
        }
        else {
            message.commit = undefined;
        }
        if (object.list_snapshots !== undefined && object.list_snapshots !== null) {
            message.list_snapshots = exports.RequestListSnapshots.fromPartial(object.list_snapshots);
        }
        else {
            message.list_snapshots = undefined;
        }
        if (object.offer_snapshot !== undefined && object.offer_snapshot !== null) {
            message.offer_snapshot = exports.RequestOfferSnapshot.fromPartial(object.offer_snapshot);
        }
        else {
            message.offer_snapshot = undefined;
        }
        if (object.load_snapshot_chunk !== undefined &&
            object.load_snapshot_chunk !== null) {
            message.load_snapshot_chunk = exports.RequestLoadSnapshotChunk.fromPartial(object.load_snapshot_chunk);
        }
        else {
            message.load_snapshot_chunk = undefined;
        }
        if (object.apply_snapshot_chunk !== undefined &&
            object.apply_snapshot_chunk !== null) {
            message.apply_snapshot_chunk = exports.RequestApplySnapshotChunk.fromPartial(object.apply_snapshot_chunk);
        }
        else {
            message.apply_snapshot_chunk = undefined;
        }
        return message;
    },
};
const baseRequestEcho = { message: "" };
exports.RequestEcho = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.message !== "") {
            writer.uint32(10).string(message.message);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
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
exports.RequestFlush = {
    encode(_, writer = minimal_1.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
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
exports.RequestInfo = {
    encode(message, writer = minimal_1.Writer.create()) {
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
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRequestInfo);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.version = reader.string();
                    break;
                case 2:
                    message.block_version = (0, __1.longToNumber)(reader.uint64());
                    break;
                case 3:
                    message.p2p_version = (0, __1.longToNumber)(reader.uint64());
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
exports.RequestSetOption = {
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
exports.RequestInitChain = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.time !== undefined) {
            timestamp_1.Timestamp.encode((0, __1.toTimestamp)(message.time), writer.uint32(10).fork()).ldelim();
        }
        if (message.chain_id !== "") {
            writer.uint32(18).string(message.chain_id);
        }
        if (message.consensus_params !== undefined) {
            exports.ConsensusParams.encode(message.consensus_params, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.validators) {
            exports.ValidatorUpdate.encode(v, writer.uint32(34).fork()).ldelim();
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
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRequestInitChain);
        message.validators = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.time = (0, __1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.chain_id = reader.string();
                    break;
                case 3:
                    message.consensus_params = exports.ConsensusParams.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.validators.push(exports.ValidatorUpdate.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.app_state_bytes = reader.bytes();
                    break;
                case 6:
                    message.initial_height = (0, __1.longToNumber)(reader.int64());
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
            message.time = (0, __1.fromJsonTimestamp)(object.time);
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
            message.consensus_params = exports.ConsensusParams.fromJSON(object.consensus_params);
        }
        else {
            message.consensus_params = undefined;
        }
        if (object.validators !== undefined && object.validators !== null) {
            for (const e of object.validators) {
                message.validators.push(exports.ValidatorUpdate.fromJSON(e));
            }
        }
        if (object.app_state_bytes !== undefined &&
            object.app_state_bytes !== null) {
            message.app_state_bytes = (0, __1.bytesFromBase64)(object.app_state_bytes);
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
                ? exports.ConsensusParams.toJSON(message.consensus_params)
                : undefined);
        if (message.validators) {
            obj.validators = message.validators.map((e) => e ? exports.ValidatorUpdate.toJSON(e) : undefined);
        }
        else {
            obj.validators = [];
        }
        message.app_state_bytes !== undefined &&
            (obj.app_state_bytes = (0, __1.base64FromBytes)(message.app_state_bytes !== undefined
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
            message.consensus_params = exports.ConsensusParams.fromPartial(object.consensus_params);
        }
        else {
            message.consensus_params = undefined;
        }
        if (object.validators !== undefined && object.validators !== null) {
            for (const e of object.validators) {
                message.validators.push(exports.ValidatorUpdate.fromPartial(e));
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
exports.RequestQuery = {
    encode(message, writer = minimal_1.Writer.create()) {
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
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
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
                    message.height = (0, __1.longToNumber)(reader.int64());
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
            message.data = (0, __1.bytesFromBase64)(object.data);
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
            (obj.data = (0, __1.base64FromBytes)(message.data !== undefined ? message.data : new Uint8Array()));
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
exports.RequestBeginBlock = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.hash.length !== 0) {
            writer.uint32(10).bytes(message.hash);
        }
        if (message.header !== undefined) {
            types_1.Header.encode(message.header, writer.uint32(18).fork()).ldelim();
        }
        if (message.last_commit_info !== undefined) {
            exports.LastCommitInfo.encode(message.last_commit_info, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.byzantine_validators) {
            exports.Evidence.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
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
                    message.header = types_1.Header.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.last_commit_info = exports.LastCommitInfo.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.byzantine_validators.push(exports.Evidence.decode(reader, reader.uint32()));
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
            message.hash = (0, __1.bytesFromBase64)(object.hash);
        }
        if (object.header !== undefined && object.header !== null) {
            message.header = types_1.Header.fromJSON(object.header);
        }
        else {
            message.header = undefined;
        }
        if (object.last_commit_info !== undefined &&
            object.last_commit_info !== null) {
            message.last_commit_info = exports.LastCommitInfo.fromJSON(object.last_commit_info);
        }
        else {
            message.last_commit_info = undefined;
        }
        if (object.byzantine_validators !== undefined &&
            object.byzantine_validators !== null) {
            for (const e of object.byzantine_validators) {
                message.byzantine_validators.push(exports.Evidence.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.hash !== undefined &&
            (obj.hash = (0, __1.base64FromBytes)(message.hash !== undefined ? message.hash : new Uint8Array()));
        message.header !== undefined &&
            (obj.header = message.header ? types_1.Header.toJSON(message.header) : undefined);
        message.last_commit_info !== undefined &&
            (obj.last_commit_info = message.last_commit_info
                ? exports.LastCommitInfo.toJSON(message.last_commit_info)
                : undefined);
        if (message.byzantine_validators) {
            obj.byzantine_validators = message.byzantine_validators.map((e) => e ? exports.Evidence.toJSON(e) : undefined);
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
            message.header = types_1.Header.fromPartial(object.header);
        }
        else {
            message.header = undefined;
        }
        if (object.last_commit_info !== undefined &&
            object.last_commit_info !== null) {
            message.last_commit_info = exports.LastCommitInfo.fromPartial(object.last_commit_info);
        }
        else {
            message.last_commit_info = undefined;
        }
        if (object.byzantine_validators !== undefined &&
            object.byzantine_validators !== null) {
            for (const e of object.byzantine_validators) {
                message.byzantine_validators.push(exports.Evidence.fromPartial(e));
            }
        }
        return message;
    },
};
const baseRequestCheckTx = { type: 0 };
exports.RequestCheckTx = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.tx.length !== 0) {
            writer.uint32(10).bytes(message.tx);
        }
        if (message.type !== 0) {
            writer.uint32(16).int32(message.type);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
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
            message.tx = (0, __1.bytesFromBase64)(object.tx);
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
            (obj.tx = (0, __1.base64FromBytes)(message.tx !== undefined ? message.tx : new Uint8Array()));
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
exports.RequestDeliverTx = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.tx.length !== 0) {
            writer.uint32(10).bytes(message.tx);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
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
            message.tx = (0, __1.bytesFromBase64)(object.tx);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.tx !== undefined &&
            (obj.tx = (0, __1.base64FromBytes)(message.tx !== undefined ? message.tx : new Uint8Array()));
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
exports.RequestEndBlock = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.height !== 0) {
            writer.uint32(8).int64(message.height);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRequestEndBlock);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = (0, __1.longToNumber)(reader.int64());
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
exports.RequestCommit = {
    encode(_, writer = minimal_1.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
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
exports.RequestListSnapshots = {
    encode(_, writer = minimal_1.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
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
exports.RequestOfferSnapshot = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.snapshot !== undefined) {
            exports.Snapshot.encode(message.snapshot, writer.uint32(10).fork()).ldelim();
        }
        if (message.app_hash.length !== 0) {
            writer.uint32(18).bytes(message.app_hash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRequestOfferSnapshot);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.snapshot = exports.Snapshot.decode(reader, reader.uint32());
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
            message.snapshot = exports.Snapshot.fromJSON(object.snapshot);
        }
        else {
            message.snapshot = undefined;
        }
        if (object.app_hash !== undefined && object.app_hash !== null) {
            message.app_hash = (0, __1.bytesFromBase64)(object.app_hash);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.snapshot !== undefined &&
            (obj.snapshot = message.snapshot
                ? exports.Snapshot.toJSON(message.snapshot)
                : undefined);
        message.app_hash !== undefined &&
            (obj.app_hash = (0, __1.base64FromBytes)(message.app_hash !== undefined ? message.app_hash : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseRequestOfferSnapshot);
        if (object.snapshot !== undefined && object.snapshot !== null) {
            message.snapshot = exports.Snapshot.fromPartial(object.snapshot);
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
exports.RequestLoadSnapshotChunk = {
    encode(message, writer = minimal_1.Writer.create()) {
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
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRequestLoadSnapshotChunk);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = (0, __1.longToNumber)(reader.uint64());
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
exports.RequestApplySnapshotChunk = {
    encode(message, writer = minimal_1.Writer.create()) {
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
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
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
            message.chunk = (0, __1.bytesFromBase64)(object.chunk);
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
            (obj.chunk = (0, __1.base64FromBytes)(message.chunk !== undefined ? message.chunk : new Uint8Array()));
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
exports.Response = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.exception !== undefined) {
            exports.ResponseException.encode(message.exception, writer.uint32(10).fork()).ldelim();
        }
        if (message.echo !== undefined) {
            exports.ResponseEcho.encode(message.echo, writer.uint32(18).fork()).ldelim();
        }
        if (message.flush !== undefined) {
            exports.ResponseFlush.encode(message.flush, writer.uint32(26).fork()).ldelim();
        }
        if (message.info !== undefined) {
            exports.ResponseInfo.encode(message.info, writer.uint32(34).fork()).ldelim();
        }
        if (message.set_option !== undefined) {
            exports.ResponseSetOption.encode(message.set_option, writer.uint32(42).fork()).ldelim();
        }
        if (message.init_chain !== undefined) {
            exports.ResponseInitChain.encode(message.init_chain, writer.uint32(50).fork()).ldelim();
        }
        if (message.query !== undefined) {
            exports.ResponseQuery.encode(message.query, writer.uint32(58).fork()).ldelim();
        }
        if (message.begin_block !== undefined) {
            exports.ResponseBeginBlock.encode(message.begin_block, writer.uint32(66).fork()).ldelim();
        }
        if (message.check_tx !== undefined) {
            exports.ResponseCheckTx.encode(message.check_tx, writer.uint32(74).fork()).ldelim();
        }
        if (message.deliver_tx !== undefined) {
            exports.ResponseDeliverTx.encode(message.deliver_tx, writer.uint32(82).fork()).ldelim();
        }
        if (message.end_block !== undefined) {
            exports.ResponseEndBlock.encode(message.end_block, writer.uint32(90).fork()).ldelim();
        }
        if (message.commit !== undefined) {
            exports.ResponseCommit.encode(message.commit, writer.uint32(98).fork()).ldelim();
        }
        if (message.list_snapshots !== undefined) {
            exports.ResponseListSnapshots.encode(message.list_snapshots, writer.uint32(106).fork()).ldelim();
        }
        if (message.offer_snapshot !== undefined) {
            exports.ResponseOfferSnapshot.encode(message.offer_snapshot, writer.uint32(114).fork()).ldelim();
        }
        if (message.load_snapshot_chunk !== undefined) {
            exports.ResponseLoadSnapshotChunk.encode(message.load_snapshot_chunk, writer.uint32(122).fork()).ldelim();
        }
        if (message.apply_snapshot_chunk !== undefined) {
            exports.ResponseApplySnapshotChunk.encode(message.apply_snapshot_chunk, writer.uint32(130).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.exception = exports.ResponseException.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.echo = exports.ResponseEcho.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.flush = exports.ResponseFlush.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.info = exports.ResponseInfo.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.set_option = exports.ResponseSetOption.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.init_chain = exports.ResponseInitChain.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.query = exports.ResponseQuery.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.begin_block = exports.ResponseBeginBlock.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.check_tx = exports.ResponseCheckTx.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.deliver_tx = exports.ResponseDeliverTx.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.end_block = exports.ResponseEndBlock.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.commit = exports.ResponseCommit.decode(reader, reader.uint32());
                    break;
                case 13:
                    message.list_snapshots = exports.ResponseListSnapshots.decode(reader, reader.uint32());
                    break;
                case 14:
                    message.offer_snapshot = exports.ResponseOfferSnapshot.decode(reader, reader.uint32());
                    break;
                case 15:
                    message.load_snapshot_chunk = exports.ResponseLoadSnapshotChunk.decode(reader, reader.uint32());
                    break;
                case 16:
                    message.apply_snapshot_chunk = exports.ResponseApplySnapshotChunk.decode(reader, reader.uint32());
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
            message.exception = exports.ResponseException.fromJSON(object.exception);
        }
        else {
            message.exception = undefined;
        }
        if (object.echo !== undefined && object.echo !== null) {
            message.echo = exports.ResponseEcho.fromJSON(object.echo);
        }
        else {
            message.echo = undefined;
        }
        if (object.flush !== undefined && object.flush !== null) {
            message.flush = exports.ResponseFlush.fromJSON(object.flush);
        }
        else {
            message.flush = undefined;
        }
        if (object.info !== undefined && object.info !== null) {
            message.info = exports.ResponseInfo.fromJSON(object.info);
        }
        else {
            message.info = undefined;
        }
        if (object.set_option !== undefined && object.set_option !== null) {
            message.set_option = exports.ResponseSetOption.fromJSON(object.set_option);
        }
        else {
            message.set_option = undefined;
        }
        if (object.init_chain !== undefined && object.init_chain !== null) {
            message.init_chain = exports.ResponseInitChain.fromJSON(object.init_chain);
        }
        else {
            message.init_chain = undefined;
        }
        if (object.query !== undefined && object.query !== null) {
            message.query = exports.ResponseQuery.fromJSON(object.query);
        }
        else {
            message.query = undefined;
        }
        if (object.begin_block !== undefined && object.begin_block !== null) {
            message.begin_block = exports.ResponseBeginBlock.fromJSON(object.begin_block);
        }
        else {
            message.begin_block = undefined;
        }
        if (object.check_tx !== undefined && object.check_tx !== null) {
            message.check_tx = exports.ResponseCheckTx.fromJSON(object.check_tx);
        }
        else {
            message.check_tx = undefined;
        }
        if (object.deliver_tx !== undefined && object.deliver_tx !== null) {
            message.deliver_tx = exports.ResponseDeliverTx.fromJSON(object.deliver_tx);
        }
        else {
            message.deliver_tx = undefined;
        }
        if (object.end_block !== undefined && object.end_block !== null) {
            message.end_block = exports.ResponseEndBlock.fromJSON(object.end_block);
        }
        else {
            message.end_block = undefined;
        }
        if (object.commit !== undefined && object.commit !== null) {
            message.commit = exports.ResponseCommit.fromJSON(object.commit);
        }
        else {
            message.commit = undefined;
        }
        if (object.list_snapshots !== undefined && object.list_snapshots !== null) {
            message.list_snapshots = exports.ResponseListSnapshots.fromJSON(object.list_snapshots);
        }
        else {
            message.list_snapshots = undefined;
        }
        if (object.offer_snapshot !== undefined && object.offer_snapshot !== null) {
            message.offer_snapshot = exports.ResponseOfferSnapshot.fromJSON(object.offer_snapshot);
        }
        else {
            message.offer_snapshot = undefined;
        }
        if (object.load_snapshot_chunk !== undefined &&
            object.load_snapshot_chunk !== null) {
            message.load_snapshot_chunk = exports.ResponseLoadSnapshotChunk.fromJSON(object.load_snapshot_chunk);
        }
        else {
            message.load_snapshot_chunk = undefined;
        }
        if (object.apply_snapshot_chunk !== undefined &&
            object.apply_snapshot_chunk !== null) {
            message.apply_snapshot_chunk = exports.ResponseApplySnapshotChunk.fromJSON(object.apply_snapshot_chunk);
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
                ? exports.ResponseException.toJSON(message.exception)
                : undefined);
        message.echo !== undefined &&
            (obj.echo = message.echo ? exports.ResponseEcho.toJSON(message.echo) : undefined);
        message.flush !== undefined &&
            (obj.flush = message.flush
                ? exports.ResponseFlush.toJSON(message.flush)
                : undefined);
        message.info !== undefined &&
            (obj.info = message.info ? exports.ResponseInfo.toJSON(message.info) : undefined);
        message.set_option !== undefined &&
            (obj.set_option = message.set_option
                ? exports.ResponseSetOption.toJSON(message.set_option)
                : undefined);
        message.init_chain !== undefined &&
            (obj.init_chain = message.init_chain
                ? exports.ResponseInitChain.toJSON(message.init_chain)
                : undefined);
        message.query !== undefined &&
            (obj.query = message.query
                ? exports.ResponseQuery.toJSON(message.query)
                : undefined);
        message.begin_block !== undefined &&
            (obj.begin_block = message.begin_block
                ? exports.ResponseBeginBlock.toJSON(message.begin_block)
                : undefined);
        message.check_tx !== undefined &&
            (obj.check_tx = message.check_tx
                ? exports.ResponseCheckTx.toJSON(message.check_tx)
                : undefined);
        message.deliver_tx !== undefined &&
            (obj.deliver_tx = message.deliver_tx
                ? exports.ResponseDeliverTx.toJSON(message.deliver_tx)
                : undefined);
        message.end_block !== undefined &&
            (obj.end_block = message.end_block
                ? exports.ResponseEndBlock.toJSON(message.end_block)
                : undefined);
        message.commit !== undefined &&
            (obj.commit = message.commit
                ? exports.ResponseCommit.toJSON(message.commit)
                : undefined);
        message.list_snapshots !== undefined &&
            (obj.list_snapshots = message.list_snapshots
                ? exports.ResponseListSnapshots.toJSON(message.list_snapshots)
                : undefined);
        message.offer_snapshot !== undefined &&
            (obj.offer_snapshot = message.offer_snapshot
                ? exports.ResponseOfferSnapshot.toJSON(message.offer_snapshot)
                : undefined);
        message.load_snapshot_chunk !== undefined &&
            (obj.load_snapshot_chunk = message.load_snapshot_chunk
                ? exports.ResponseLoadSnapshotChunk.toJSON(message.load_snapshot_chunk)
                : undefined);
        message.apply_snapshot_chunk !== undefined &&
            (obj.apply_snapshot_chunk = message.apply_snapshot_chunk
                ? exports.ResponseApplySnapshotChunk.toJSON(message.apply_snapshot_chunk)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseResponse);
        if (object.exception !== undefined && object.exception !== null) {
            message.exception = exports.ResponseException.fromPartial(object.exception);
        }
        else {
            message.exception = undefined;
        }
        if (object.echo !== undefined && object.echo !== null) {
            message.echo = exports.ResponseEcho.fromPartial(object.echo);
        }
        else {
            message.echo = undefined;
        }
        if (object.flush !== undefined && object.flush !== null) {
            message.flush = exports.ResponseFlush.fromPartial(object.flush);
        }
        else {
            message.flush = undefined;
        }
        if (object.info !== undefined && object.info !== null) {
            message.info = exports.ResponseInfo.fromPartial(object.info);
        }
        else {
            message.info = undefined;
        }
        if (object.set_option !== undefined && object.set_option !== null) {
            message.set_option = exports.ResponseSetOption.fromPartial(object.set_option);
        }
        else {
            message.set_option = undefined;
        }
        if (object.init_chain !== undefined && object.init_chain !== null) {
            message.init_chain = exports.ResponseInitChain.fromPartial(object.init_chain);
        }
        else {
            message.init_chain = undefined;
        }
        if (object.query !== undefined && object.query !== null) {
            message.query = exports.ResponseQuery.fromPartial(object.query);
        }
        else {
            message.query = undefined;
        }
        if (object.begin_block !== undefined && object.begin_block !== null) {
            message.begin_block = exports.ResponseBeginBlock.fromPartial(object.begin_block);
        }
        else {
            message.begin_block = undefined;
        }
        if (object.check_tx !== undefined && object.check_tx !== null) {
            message.check_tx = exports.ResponseCheckTx.fromPartial(object.check_tx);
        }
        else {
            message.check_tx = undefined;
        }
        if (object.deliver_tx !== undefined && object.deliver_tx !== null) {
            message.deliver_tx = exports.ResponseDeliverTx.fromPartial(object.deliver_tx);
        }
        else {
            message.deliver_tx = undefined;
        }
        if (object.end_block !== undefined && object.end_block !== null) {
            message.end_block = exports.ResponseEndBlock.fromPartial(object.end_block);
        }
        else {
            message.end_block = undefined;
        }
        if (object.commit !== undefined && object.commit !== null) {
            message.commit = exports.ResponseCommit.fromPartial(object.commit);
        }
        else {
            message.commit = undefined;
        }
        if (object.list_snapshots !== undefined && object.list_snapshots !== null) {
            message.list_snapshots = exports.ResponseListSnapshots.fromPartial(object.list_snapshots);
        }
        else {
            message.list_snapshots = undefined;
        }
        if (object.offer_snapshot !== undefined && object.offer_snapshot !== null) {
            message.offer_snapshot = exports.ResponseOfferSnapshot.fromPartial(object.offer_snapshot);
        }
        else {
            message.offer_snapshot = undefined;
        }
        if (object.load_snapshot_chunk !== undefined &&
            object.load_snapshot_chunk !== null) {
            message.load_snapshot_chunk = exports.ResponseLoadSnapshotChunk.fromPartial(object.load_snapshot_chunk);
        }
        else {
            message.load_snapshot_chunk = undefined;
        }
        if (object.apply_snapshot_chunk !== undefined &&
            object.apply_snapshot_chunk !== null) {
            message.apply_snapshot_chunk = exports.ResponseApplySnapshotChunk.fromPartial(object.apply_snapshot_chunk);
        }
        else {
            message.apply_snapshot_chunk = undefined;
        }
        return message;
    },
};
const baseResponseException = { error: "" };
exports.ResponseException = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.error !== "") {
            writer.uint32(10).string(message.error);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
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
exports.ResponseEcho = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.message !== "") {
            writer.uint32(10).string(message.message);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
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
exports.ResponseFlush = {
    encode(_, writer = minimal_1.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
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
exports.ResponseInfo = {
    encode(message, writer = minimal_1.Writer.create()) {
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
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
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
                    message.app_version = (0, __1.longToNumber)(reader.uint64());
                    break;
                case 4:
                    message.last_block_height = (0, __1.longToNumber)(reader.int64());
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
            message.last_block_app_hash = (0, __1.bytesFromBase64)(object.last_block_app_hash);
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
            (obj.last_block_app_hash = (0, __1.base64FromBytes)(message.last_block_app_hash !== undefined
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
exports.ResponseSetOption = {
    encode(message, writer = minimal_1.Writer.create()) {
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
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
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
exports.ResponseInitChain = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.consensus_params !== undefined) {
            exports.ConsensusParams.encode(message.consensus_params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.validators) {
            exports.ValidatorUpdate.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.app_hash.length !== 0) {
            writer.uint32(26).bytes(message.app_hash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseResponseInitChain);
        message.validators = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.consensus_params = exports.ConsensusParams.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.validators.push(exports.ValidatorUpdate.decode(reader, reader.uint32()));
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
            message.consensus_params = exports.ConsensusParams.fromJSON(object.consensus_params);
        }
        else {
            message.consensus_params = undefined;
        }
        if (object.validators !== undefined && object.validators !== null) {
            for (const e of object.validators) {
                message.validators.push(exports.ValidatorUpdate.fromJSON(e));
            }
        }
        if (object.app_hash !== undefined && object.app_hash !== null) {
            message.app_hash = (0, __1.bytesFromBase64)(object.app_hash);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.consensus_params !== undefined &&
            (obj.consensus_params = message.consensus_params
                ? exports.ConsensusParams.toJSON(message.consensus_params)
                : undefined);
        if (message.validators) {
            obj.validators = message.validators.map((e) => e ? exports.ValidatorUpdate.toJSON(e) : undefined);
        }
        else {
            obj.validators = [];
        }
        message.app_hash !== undefined &&
            (obj.app_hash = (0, __1.base64FromBytes)(message.app_hash !== undefined ? message.app_hash : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseResponseInitChain);
        message.validators = [];
        if (object.consensus_params !== undefined &&
            object.consensus_params !== null) {
            message.consensus_params = exports.ConsensusParams.fromPartial(object.consensus_params);
        }
        else {
            message.consensus_params = undefined;
        }
        if (object.validators !== undefined && object.validators !== null) {
            for (const e of object.validators) {
                message.validators.push(exports.ValidatorUpdate.fromPartial(e));
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
exports.ResponseQuery = {
    encode(message, writer = minimal_1.Writer.create()) {
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
            proof_1.ProofOps.encode(message.proof_ops, writer.uint32(66).fork()).ldelim();
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
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
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
                    message.index = (0, __1.longToNumber)(reader.int64());
                    break;
                case 6:
                    message.key = reader.bytes();
                    break;
                case 7:
                    message.value = reader.bytes();
                    break;
                case 8:
                    message.proof_ops = proof_1.ProofOps.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.height = (0, __1.longToNumber)(reader.int64());
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
            message.key = (0, __1.bytesFromBase64)(object.key);
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = (0, __1.bytesFromBase64)(object.value);
        }
        if (object.proof_ops !== undefined && object.proof_ops !== null) {
            message.proof_ops = proof_1.ProofOps.fromJSON(object.proof_ops);
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
            (obj.key = (0, __1.base64FromBytes)(message.key !== undefined ? message.key : new Uint8Array()));
        message.value !== undefined &&
            (obj.value = (0, __1.base64FromBytes)(message.value !== undefined ? message.value : new Uint8Array()));
        message.proof_ops !== undefined &&
            (obj.proof_ops = message.proof_ops
                ? proof_1.ProofOps.toJSON(message.proof_ops)
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
            message.proof_ops = proof_1.ProofOps.fromPartial(object.proof_ops);
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
exports.ResponseBeginBlock = {
    encode(message, writer = minimal_1.Writer.create()) {
        for (const v of message.events) {
            exports.Event.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseResponseBeginBlock);
        message.events = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.events.push(exports.Event.decode(reader, reader.uint32()));
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
                message.events.push(exports.Event.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.events) {
            obj.events = message.events.map((e) => (e ? exports.Event.toJSON(e) : undefined));
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
                message.events.push(exports.Event.fromPartial(e));
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
exports.ResponseCheckTx = {
    encode(message, writer = minimal_1.Writer.create()) {
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
            exports.Event.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.codespace !== "") {
            writer.uint32(66).string(message.codespace);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
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
                    message.gas_wanted = (0, __1.longToNumber)(reader.int64());
                    break;
                case 6:
                    message.gas_used = (0, __1.longToNumber)(reader.int64());
                    break;
                case 7:
                    message.events.push(exports.Event.decode(reader, reader.uint32()));
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
            message.data = (0, __1.bytesFromBase64)(object.data);
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
                message.events.push(exports.Event.fromJSON(e));
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
            (obj.data = (0, __1.base64FromBytes)(message.data !== undefined ? message.data : new Uint8Array()));
        message.log !== undefined && (obj.log = message.log);
        message.info !== undefined && (obj.info = message.info);
        message.gas_wanted !== undefined && (obj.gas_wanted = message.gas_wanted);
        message.gas_used !== undefined && (obj.gas_used = message.gas_used);
        if (message.events) {
            obj.events = message.events.map((e) => (e ? exports.Event.toJSON(e) : undefined));
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
                message.events.push(exports.Event.fromPartial(e));
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
exports.ResponseDeliverTx = {
    encode(message, writer = minimal_1.Writer.create()) {
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
            exports.Event.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.codespace !== "") {
            writer.uint32(66).string(message.codespace);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
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
                    message.gas_wanted = (0, __1.longToNumber)(reader.int64());
                    break;
                case 6:
                    message.gas_used = (0, __1.longToNumber)(reader.int64());
                    break;
                case 7:
                    message.events.push(exports.Event.decode(reader, reader.uint32()));
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
            message.data = (0, __1.bytesFromBase64)(object.data);
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
                message.events.push(exports.Event.fromJSON(e));
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
            (obj.data = (0, __1.base64FromBytes)(message.data !== undefined ? message.data : new Uint8Array()));
        message.log !== undefined && (obj.log = message.log);
        message.info !== undefined && (obj.info = message.info);
        message.gas_wanted !== undefined && (obj.gas_wanted = message.gas_wanted);
        message.gas_used !== undefined && (obj.gas_used = message.gas_used);
        if (message.events) {
            obj.events = message.events.map((e) => (e ? exports.Event.toJSON(e) : undefined));
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
                message.events.push(exports.Event.fromPartial(e));
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
exports.ResponseEndBlock = {
    encode(message, writer = minimal_1.Writer.create()) {
        for (const v of message.validator_updates) {
            exports.ValidatorUpdate.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.consensus_param_updates !== undefined) {
            exports.ConsensusParams.encode(message.consensus_param_updates, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.events) {
            exports.Event.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseResponseEndBlock);
        message.validator_updates = [];
        message.events = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validator_updates.push(exports.ValidatorUpdate.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.consensus_param_updates = exports.ConsensusParams.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.events.push(exports.Event.decode(reader, reader.uint32()));
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
                message.validator_updates.push(exports.ValidatorUpdate.fromJSON(e));
            }
        }
        if (object.consensus_param_updates !== undefined &&
            object.consensus_param_updates !== null) {
            message.consensus_param_updates = exports.ConsensusParams.fromJSON(object.consensus_param_updates);
        }
        else {
            message.consensus_param_updates = undefined;
        }
        if (object.events !== undefined && object.events !== null) {
            for (const e of object.events) {
                message.events.push(exports.Event.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.validator_updates) {
            obj.validator_updates = message.validator_updates.map((e) => e ? exports.ValidatorUpdate.toJSON(e) : undefined);
        }
        else {
            obj.validator_updates = [];
        }
        message.consensus_param_updates !== undefined &&
            (obj.consensus_param_updates = message.consensus_param_updates
                ? exports.ConsensusParams.toJSON(message.consensus_param_updates)
                : undefined);
        if (message.events) {
            obj.events = message.events.map((e) => (e ? exports.Event.toJSON(e) : undefined));
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
                message.validator_updates.push(exports.ValidatorUpdate.fromPartial(e));
            }
        }
        if (object.consensus_param_updates !== undefined &&
            object.consensus_param_updates !== null) {
            message.consensus_param_updates = exports.ConsensusParams.fromPartial(object.consensus_param_updates);
        }
        else {
            message.consensus_param_updates = undefined;
        }
        if (object.events !== undefined && object.events !== null) {
            for (const e of object.events) {
                message.events.push(exports.Event.fromPartial(e));
            }
        }
        return message;
    },
};
const baseResponseCommit = { retain_height: 0 };
exports.ResponseCommit = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.data.length !== 0) {
            writer.uint32(18).bytes(message.data);
        }
        if (message.retain_height !== 0) {
            writer.uint32(24).int64(message.retain_height);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseResponseCommit);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.data = reader.bytes();
                    break;
                case 3:
                    message.retain_height = (0, __1.longToNumber)(reader.int64());
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
            message.data = (0, __1.bytesFromBase64)(object.data);
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
            (obj.data = (0, __1.base64FromBytes)(message.data !== undefined ? message.data : new Uint8Array()));
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
exports.ResponseListSnapshots = {
    encode(message, writer = minimal_1.Writer.create()) {
        for (const v of message.snapshots) {
            exports.Snapshot.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseResponseListSnapshots);
        message.snapshots = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.snapshots.push(exports.Snapshot.decode(reader, reader.uint32()));
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
                message.snapshots.push(exports.Snapshot.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.snapshots) {
            obj.snapshots = message.snapshots.map((e) => e ? exports.Snapshot.toJSON(e) : undefined);
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
                message.snapshots.push(exports.Snapshot.fromPartial(e));
            }
        }
        return message;
    },
};
const baseResponseOfferSnapshot = { result: 0 };
exports.ResponseOfferSnapshot = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.result !== 0) {
            writer.uint32(8).int32(message.result);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
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
exports.ResponseLoadSnapshotChunk = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.chunk.length !== 0) {
            writer.uint32(10).bytes(message.chunk);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
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
            message.chunk = (0, __1.bytesFromBase64)(object.chunk);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.chunk !== undefined &&
            (obj.chunk = (0, __1.base64FromBytes)(message.chunk !== undefined ? message.chunk : new Uint8Array()));
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
exports.ResponseApplySnapshotChunk = {
    encode(message, writer = minimal_1.Writer.create()) {
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
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
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
exports.ConsensusParams = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.block !== undefined) {
            exports.BlockParams.encode(message.block, writer.uint32(10).fork()).ldelim();
        }
        if (message.evidence !== undefined) {
            params_1.EvidenceParams.encode(message.evidence, writer.uint32(18).fork()).ldelim();
        }
        if (message.validator !== undefined) {
            params_1.ValidatorParams.encode(message.validator, writer.uint32(26).fork()).ldelim();
        }
        if (message.version !== undefined) {
            params_1.VersionParams.encode(message.version, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseConsensusParams);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.block = exports.BlockParams.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.evidence = params_1.EvidenceParams.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.validator = params_1.ValidatorParams.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.version = params_1.VersionParams.decode(reader, reader.uint32());
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
            message.block = exports.BlockParams.fromJSON(object.block);
        }
        else {
            message.block = undefined;
        }
        if (object.evidence !== undefined && object.evidence !== null) {
            message.evidence = params_1.EvidenceParams.fromJSON(object.evidence);
        }
        else {
            message.evidence = undefined;
        }
        if (object.validator !== undefined && object.validator !== null) {
            message.validator = params_1.ValidatorParams.fromJSON(object.validator);
        }
        else {
            message.validator = undefined;
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = params_1.VersionParams.fromJSON(object.version);
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
                ? exports.BlockParams.toJSON(message.block)
                : undefined);
        message.evidence !== undefined &&
            (obj.evidence = message.evidence
                ? params_1.EvidenceParams.toJSON(message.evidence)
                : undefined);
        message.validator !== undefined &&
            (obj.validator = message.validator
                ? params_1.ValidatorParams.toJSON(message.validator)
                : undefined);
        message.version !== undefined &&
            (obj.version = message.version
                ? params_1.VersionParams.toJSON(message.version)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseConsensusParams);
        if (object.block !== undefined && object.block !== null) {
            message.block = exports.BlockParams.fromPartial(object.block);
        }
        else {
            message.block = undefined;
        }
        if (object.evidence !== undefined && object.evidence !== null) {
            message.evidence = params_1.EvidenceParams.fromPartial(object.evidence);
        }
        else {
            message.evidence = undefined;
        }
        if (object.validator !== undefined && object.validator !== null) {
            message.validator = params_1.ValidatorParams.fromPartial(object.validator);
        }
        else {
            message.validator = undefined;
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = params_1.VersionParams.fromPartial(object.version);
        }
        else {
            message.version = undefined;
        }
        return message;
    },
};
const baseBlockParams = { max_bytes: 0, max_gas: 0 };
exports.BlockParams = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.max_bytes !== 0) {
            writer.uint32(8).int64(message.max_bytes);
        }
        if (message.max_gas !== 0) {
            writer.uint32(16).int64(message.max_gas);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseBlockParams);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.max_bytes = (0, __1.longToNumber)(reader.int64());
                    break;
                case 2:
                    message.max_gas = (0, __1.longToNumber)(reader.int64());
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
exports.LastCommitInfo = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.round !== 0) {
            writer.uint32(8).int32(message.round);
        }
        for (const v of message.votes) {
            exports.VoteInfo.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
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
                    message.votes.push(exports.VoteInfo.decode(reader, reader.uint32()));
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
                message.votes.push(exports.VoteInfo.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.round !== undefined && (obj.round = message.round);
        if (message.votes) {
            obj.votes = message.votes.map((e) => e ? exports.VoteInfo.toJSON(e) : undefined);
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
                message.votes.push(exports.VoteInfo.fromPartial(e));
            }
        }
        return message;
    },
};
const baseEvent = { type: "" };
exports.Event = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.type !== "") {
            writer.uint32(10).string(message.type);
        }
        for (const v of message.attributes) {
            exports.EventAttribute.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
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
                    message.attributes.push(exports.EventAttribute.decode(reader, reader.uint32()));
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
                message.attributes.push(exports.EventAttribute.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.type !== undefined && (obj.type = message.type);
        if (message.attributes) {
            obj.attributes = message.attributes.map((e) => e ? exports.EventAttribute.toJSON(e) : undefined);
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
                message.attributes.push(exports.EventAttribute.fromPartial(e));
            }
        }
        return message;
    },
};
const baseEventAttribute = { index: false };
exports.EventAttribute = {
    encode(message, writer = minimal_1.Writer.create()) {
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
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
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
            message.key = (0, __1.bytesFromBase64)(object.key);
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = (0, __1.bytesFromBase64)(object.value);
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
            (obj.key = (0, __1.base64FromBytes)(message.key !== undefined ? message.key : new Uint8Array()));
        message.value !== undefined &&
            (obj.value = (0, __1.base64FromBytes)(message.value !== undefined ? message.value : new Uint8Array()));
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
exports.TxResult = {
    encode(message, writer = minimal_1.Writer.create()) {
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
            exports.ResponseDeliverTx.encode(message.result, writer.uint32(34).fork()).ldelim();
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
                    message.height = (0, __1.longToNumber)(reader.int64());
                    break;
                case 2:
                    message.index = reader.uint32();
                    break;
                case 3:
                    message.tx = reader.bytes();
                    break;
                case 4:
                    message.result = exports.ResponseDeliverTx.decode(reader, reader.uint32());
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
            message.tx = (0, __1.bytesFromBase64)(object.tx);
        }
        if (object.result !== undefined && object.result !== null) {
            message.result = exports.ResponseDeliverTx.fromJSON(object.result);
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
            (obj.tx = (0, __1.base64FromBytes)(message.tx !== undefined ? message.tx : new Uint8Array()));
        message.result !== undefined &&
            (obj.result = message.result
                ? exports.ResponseDeliverTx.toJSON(message.result)
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
            message.result = exports.ResponseDeliverTx.fromPartial(object.result);
        }
        else {
            message.result = undefined;
        }
        return message;
    },
};
const baseValidator = { power: 0 };
exports.Validator = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.address.length !== 0) {
            writer.uint32(10).bytes(message.address);
        }
        if (message.power !== 0) {
            writer.uint32(24).int64(message.power);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseValidator);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.bytes();
                    break;
                case 3:
                    message.power = (0, __1.longToNumber)(reader.int64());
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
            message.address = (0, __1.bytesFromBase64)(object.address);
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
            (obj.address = (0, __1.base64FromBytes)(message.address !== undefined ? message.address : new Uint8Array()));
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
exports.ValidatorUpdate = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.pub_key !== undefined) {
            keys_1.PublicKey.encode(message.pub_key, writer.uint32(10).fork()).ldelim();
        }
        if (message.power !== 0) {
            writer.uint32(16).int64(message.power);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseValidatorUpdate);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pub_key = keys_1.PublicKey.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.power = (0, __1.longToNumber)(reader.int64());
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
            message.pub_key = keys_1.PublicKey.fromJSON(object.pub_key);
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
                ? keys_1.PublicKey.toJSON(message.pub_key)
                : undefined);
        message.power !== undefined && (obj.power = message.power);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseValidatorUpdate);
        if (object.pub_key !== undefined && object.pub_key !== null) {
            message.pub_key = keys_1.PublicKey.fromPartial(object.pub_key);
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
exports.VoteInfo = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.validator !== undefined) {
            exports.Validator.encode(message.validator, writer.uint32(10).fork()).ldelim();
        }
        if (message.signed_last_block === true) {
            writer.uint32(16).bool(message.signed_last_block);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseVoteInfo);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validator = exports.Validator.decode(reader, reader.uint32());
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
            message.validator = exports.Validator.fromJSON(object.validator);
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
                ? exports.Validator.toJSON(message.validator)
                : undefined);
        message.signed_last_block !== undefined &&
            (obj.signed_last_block = message.signed_last_block);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseVoteInfo);
        if (object.validator !== undefined && object.validator !== null) {
            message.validator = exports.Validator.fromPartial(object.validator);
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
exports.Evidence = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.type !== 0) {
            writer.uint32(8).int32(message.type);
        }
        if (message.validator !== undefined) {
            exports.Validator.encode(message.validator, writer.uint32(18).fork()).ldelim();
        }
        if (message.height !== 0) {
            writer.uint32(24).int64(message.height);
        }
        if (message.time !== undefined) {
            timestamp_1.Timestamp.encode((0, __1.toTimestamp)(message.time), writer.uint32(34).fork()).ldelim();
        }
        if (message.total_voting_power !== 0) {
            writer.uint32(40).int64(message.total_voting_power);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseEvidence);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
                    message.validator = exports.Validator.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.height = (0, __1.longToNumber)(reader.int64());
                    break;
                case 4:
                    message.time = (0, __1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.total_voting_power = (0, __1.longToNumber)(reader.int64());
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
            message.validator = exports.Validator.fromJSON(object.validator);
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
            message.time = (0, __1.fromJsonTimestamp)(object.time);
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
                ? exports.Validator.toJSON(message.validator)
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
            message.validator = exports.Validator.fromPartial(object.validator);
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
exports.Snapshot = {
    encode(message, writer = minimal_1.Writer.create()) {
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
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseSnapshot);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = (0, __1.longToNumber)(reader.uint64());
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
            message.hash = (0, __1.bytesFromBase64)(object.hash);
        }
        if (object.metadata !== undefined && object.metadata !== null) {
            message.metadata = (0, __1.bytesFromBase64)(object.metadata);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined && (obj.height = message.height);
        message.format !== undefined && (obj.format = message.format);
        message.chunks !== undefined && (obj.chunks = message.chunks);
        message.hash !== undefined &&
            (obj.hash = (0, __1.base64FromBytes)(message.hash !== undefined ? message.hash : new Uint8Array()));
        message.metadata !== undefined &&
            (obj.metadata = (0, __1.base64FromBytes)(message.metadata !== undefined ? message.metadata : new Uint8Array()));
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
class ABCIApplicationClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    Echo(request) {
        const data = exports.RequestEcho.encode(request).finish();
        const promise = this.rpc.request("tendermint.abci.ABCIApplication", "Echo", data);
        return promise.then((data) => exports.ResponseEcho.decode(new minimal_1.Reader(data)));
    }
    Flush(request) {
        const data = exports.RequestFlush.encode(request).finish();
        const promise = this.rpc.request("tendermint.abci.ABCIApplication", "Flush", data);
        return promise.then((data) => exports.ResponseFlush.decode(new minimal_1.Reader(data)));
    }
    Info(request) {
        const data = exports.RequestInfo.encode(request).finish();
        const promise = this.rpc.request("tendermint.abci.ABCIApplication", "Info", data);
        return promise.then((data) => exports.ResponseInfo.decode(new minimal_1.Reader(data)));
    }
    SetOption(request) {
        const data = exports.RequestSetOption.encode(request).finish();
        const promise = this.rpc.request("tendermint.abci.ABCIApplication", "SetOption", data);
        return promise.then((data) => exports.ResponseSetOption.decode(new minimal_1.Reader(data)));
    }
    DeliverTx(request) {
        const data = exports.RequestDeliverTx.encode(request).finish();
        const promise = this.rpc.request("tendermint.abci.ABCIApplication", "DeliverTx", data);
        return promise.then((data) => exports.ResponseDeliverTx.decode(new minimal_1.Reader(data)));
    }
    CheckTx(request) {
        const data = exports.RequestCheckTx.encode(request).finish();
        const promise = this.rpc.request("tendermint.abci.ABCIApplication", "CheckTx", data);
        return promise.then((data) => exports.ResponseCheckTx.decode(new minimal_1.Reader(data)));
    }
    Query(request) {
        const data = exports.RequestQuery.encode(request).finish();
        const promise = this.rpc.request("tendermint.abci.ABCIApplication", "Query", data);
        return promise.then((data) => exports.ResponseQuery.decode(new minimal_1.Reader(data)));
    }
    Commit(request) {
        const data = exports.RequestCommit.encode(request).finish();
        const promise = this.rpc.request("tendermint.abci.ABCIApplication", "Commit", data);
        return promise.then((data) => exports.ResponseCommit.decode(new minimal_1.Reader(data)));
    }
    InitChain(request) {
        const data = exports.RequestInitChain.encode(request).finish();
        const promise = this.rpc.request("tendermint.abci.ABCIApplication", "InitChain", data);
        return promise.then((data) => exports.ResponseInitChain.decode(new minimal_1.Reader(data)));
    }
    BeginBlock(request) {
        const data = exports.RequestBeginBlock.encode(request).finish();
        const promise = this.rpc.request("tendermint.abci.ABCIApplication", "BeginBlock", data);
        return promise.then((data) => exports.ResponseBeginBlock.decode(new minimal_1.Reader(data)));
    }
    EndBlock(request) {
        const data = exports.RequestEndBlock.encode(request).finish();
        const promise = this.rpc.request("tendermint.abci.ABCIApplication", "EndBlock", data);
        return promise.then((data) => exports.ResponseEndBlock.decode(new minimal_1.Reader(data)));
    }
    ListSnapshots(request) {
        const data = exports.RequestListSnapshots.encode(request).finish();
        const promise = this.rpc.request("tendermint.abci.ABCIApplication", "ListSnapshots", data);
        return promise.then((data) => exports.ResponseListSnapshots.decode(new minimal_1.Reader(data)));
    }
    OfferSnapshot(request) {
        const data = exports.RequestOfferSnapshot.encode(request).finish();
        const promise = this.rpc.request("tendermint.abci.ABCIApplication", "OfferSnapshot", data);
        return promise.then((data) => exports.ResponseOfferSnapshot.decode(new minimal_1.Reader(data)));
    }
    LoadSnapshotChunk(request) {
        const data = exports.RequestLoadSnapshotChunk.encode(request).finish();
        const promise = this.rpc.request("tendermint.abci.ABCIApplication", "LoadSnapshotChunk", data);
        return promise.then((data) => exports.ResponseLoadSnapshotChunk.decode(new minimal_1.Reader(data)));
    }
    ApplySnapshotChunk(request) {
        const data = exports.RequestApplySnapshotChunk.encode(request).finish();
        const promise = this.rpc.request("tendermint.abci.ABCIApplication", "ApplySnapshotChunk", data);
        return promise.then((data) => exports.ResponseApplySnapshotChunk.decode(new minimal_1.Reader(data)));
    }
}
exports.ABCIApplicationClientImpl = ABCIApplicationClientImpl;
