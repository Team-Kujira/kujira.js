/* eslint-disable */
import { Header, Data, Commit } from "../../tendermint/types/types";
import { EvidenceList } from "./evidence";
import { Writer, Reader } from "protobufjs/minimal";
export const protobufPackage = "tendermint.types";
const baseBlock = {};
export const Block = {
    encode(message, writer = Writer.create()) {
        if (message.header !== undefined) {
            Header.encode(message.header, writer.uint32(10).fork()).ldelim();
        }
        if (message.data !== undefined) {
            Data.encode(message.data, writer.uint32(18).fork()).ldelim();
        }
        if (message.evidence !== undefined) {
            EvidenceList.encode(message.evidence, writer.uint32(26).fork()).ldelim();
        }
        if (message.last_commit !== undefined) {
            Commit.encode(message.last_commit, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseBlock);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.header = Header.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.data = Data.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.evidence = EvidenceList.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.last_commit = Commit.decode(reader, reader.uint32());
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
            message.header = Header.fromJSON(object.header);
        }
        else {
            message.header = undefined;
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = Data.fromJSON(object.data);
        }
        else {
            message.data = undefined;
        }
        if (object.evidence !== undefined && object.evidence !== null) {
            message.evidence = EvidenceList.fromJSON(object.evidence);
        }
        else {
            message.evidence = undefined;
        }
        if (object.last_commit !== undefined && object.last_commit !== null) {
            message.last_commit = Commit.fromJSON(object.last_commit);
        }
        else {
            message.last_commit = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.header !== undefined &&
            (obj.header = message.header ? Header.toJSON(message.header) : undefined);
        message.data !== undefined &&
            (obj.data = message.data ? Data.toJSON(message.data) : undefined);
        message.evidence !== undefined &&
            (obj.evidence = message.evidence
                ? EvidenceList.toJSON(message.evidence)
                : undefined);
        message.last_commit !== undefined &&
            (obj.last_commit = message.last_commit
                ? Commit.toJSON(message.last_commit)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseBlock);
        if (object.header !== undefined && object.header !== null) {
            message.header = Header.fromPartial(object.header);
        }
        else {
            message.header = undefined;
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = Data.fromPartial(object.data);
        }
        else {
            message.data = undefined;
        }
        if (object.evidence !== undefined && object.evidence !== null) {
            message.evidence = EvidenceList.fromPartial(object.evidence);
        }
        else {
            message.evidence = undefined;
        }
        if (object.last_commit !== undefined && object.last_commit !== null) {
            message.last_commit = Commit.fromPartial(object.last_commit);
        }
        else {
            message.last_commit = undefined;
        }
        return message;
    },
};
