/* eslint-disable */
import { CommitmentProof } from "../../../../proofs";
import { Writer, Reader } from "protobufjs/minimal";
export const protobufPackage = "ibc.core.commitment.v1";
const baseMerkleRoot = {};
export const MerkleRoot = {
    encode(message, writer = Writer.create()) {
        if (message.hash.length !== 0) {
            writer.uint32(10).bytes(message.hash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMerkleRoot);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hash = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMerkleRoot);
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = bytesFromBase64(object.hash);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.hash !== undefined &&
            (obj.hash = base64FromBytes(message.hash !== undefined ? message.hash : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMerkleRoot);
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = object.hash;
        }
        else {
            message.hash = new Uint8Array();
        }
        return message;
    },
};
const baseMerklePrefix = {};
export const MerklePrefix = {
    encode(message, writer = Writer.create()) {
        if (message.key_prefix.length !== 0) {
            writer.uint32(10).bytes(message.key_prefix);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMerklePrefix);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key_prefix = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMerklePrefix);
        if (object.key_prefix !== undefined && object.key_prefix !== null) {
            message.key_prefix = bytesFromBase64(object.key_prefix);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.key_prefix !== undefined &&
            (obj.key_prefix = base64FromBytes(message.key_prefix !== undefined ? message.key_prefix : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMerklePrefix);
        if (object.key_prefix !== undefined && object.key_prefix !== null) {
            message.key_prefix = object.key_prefix;
        }
        else {
            message.key_prefix = new Uint8Array();
        }
        return message;
    },
};
const baseMerklePath = { key_path: "" };
export const MerklePath = {
    encode(message, writer = Writer.create()) {
        for (const v of message.key_path) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMerklePath);
        message.key_path = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key_path.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMerklePath);
        message.key_path = [];
        if (object.key_path !== undefined && object.key_path !== null) {
            for (const e of object.key_path) {
                message.key_path.push(String(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.key_path) {
            obj.key_path = message.key_path.map((e) => e);
        }
        else {
            obj.key_path = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMerklePath);
        message.key_path = [];
        if (object.key_path !== undefined && object.key_path !== null) {
            for (const e of object.key_path) {
                message.key_path.push(e);
            }
        }
        return message;
    },
};
const baseMerkleProof = {};
export const MerkleProof = {
    encode(message, writer = Writer.create()) {
        for (const v of message.proofs) {
            CommitmentProof.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMerkleProof);
        message.proofs = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proofs.push(CommitmentProof.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMerkleProof);
        message.proofs = [];
        if (object.proofs !== undefined && object.proofs !== null) {
            for (const e of object.proofs) {
                message.proofs.push(CommitmentProof.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.proofs) {
            obj.proofs = message.proofs.map((e) => e ? CommitmentProof.toJSON(e) : undefined);
        }
        else {
            obj.proofs = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMerkleProof);
        message.proofs = [];
        if (object.proofs !== undefined && object.proofs !== null) {
            for (const e of object.proofs) {
                message.proofs.push(CommitmentProof.fromPartial(e));
            }
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
