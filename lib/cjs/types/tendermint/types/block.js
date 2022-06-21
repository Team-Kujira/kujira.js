"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Block = exports.protobufPackage = void 0;
/* eslint-disable */
const types_1 = require("../../tendermint/types/types");
const evidence_1 = require("./evidence");
const minimal_1 = require("protobufjs/minimal");
exports.protobufPackage = "tendermint.types";
const baseBlock = {};
exports.Block = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.header !== undefined) {
            types_1.Header.encode(message.header, writer.uint32(10).fork()).ldelim();
        }
        if (message.data !== undefined) {
            types_1.Data.encode(message.data, writer.uint32(18).fork()).ldelim();
        }
        if (message.evidence !== undefined) {
            evidence_1.EvidenceList.encode(message.evidence, writer.uint32(26).fork()).ldelim();
        }
        if (message.last_commit !== undefined) {
            types_1.Commit.encode(message.last_commit, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseBlock);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.header = types_1.Header.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.data = types_1.Data.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.evidence = evidence_1.EvidenceList.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.last_commit = types_1.Commit.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseBlock);
        if (object.header !== undefined && object.header !== null) {
            message.header = types_1.Header.fromJSON(object.header);
        }
        else {
            message.header = undefined;
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = types_1.Data.fromJSON(object.data);
        }
        else {
            message.data = undefined;
        }
        if (object.evidence !== undefined && object.evidence !== null) {
            message.evidence = evidence_1.EvidenceList.fromJSON(object.evidence);
        }
        else {
            message.evidence = undefined;
        }
        if (object.last_commit !== undefined && object.last_commit !== null) {
            message.last_commit = types_1.Commit.fromJSON(object.last_commit);
        }
        else {
            message.last_commit = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.header !== undefined &&
            (obj.header = message.header ? types_1.Header.toJSON(message.header) : undefined);
        message.data !== undefined &&
            (obj.data = message.data ? types_1.Data.toJSON(message.data) : undefined);
        message.evidence !== undefined &&
            (obj.evidence = message.evidence
                ? evidence_1.EvidenceList.toJSON(message.evidence)
                : undefined);
        message.last_commit !== undefined &&
            (obj.last_commit = message.last_commit
                ? types_1.Commit.toJSON(message.last_commit)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseBlock);
        if (object.header !== undefined && object.header !== null) {
            message.header = types_1.Header.fromPartial(object.header);
        }
        else {
            message.header = undefined;
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = types_1.Data.fromPartial(object.data);
        }
        else {
            message.data = undefined;
        }
        if (object.evidence !== undefined && object.evidence !== null) {
            message.evidence = evidence_1.EvidenceList.fromPartial(object.evidence);
        }
        else {
            message.evidence = undefined;
        }
        if (object.last_commit !== undefined && object.last_commit !== null) {
            message.last_commit = types_1.Commit.fromPartial(object.last_commit);
        }
        else {
            message.last_commit = undefined;
        }
        return message;
    },
};
