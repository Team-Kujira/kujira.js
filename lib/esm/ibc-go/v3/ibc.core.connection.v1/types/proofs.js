/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";
export const protobufPackage = "ics23";
export var HashOp;
(function (HashOp) {
    /** NO_HASH - NO_HASH is the default if no data passed. Note this is an illegal argument some places. */
    HashOp[HashOp["NO_HASH"] = 0] = "NO_HASH";
    HashOp[HashOp["SHA256"] = 1] = "SHA256";
    HashOp[HashOp["SHA512"] = 2] = "SHA512";
    HashOp[HashOp["KECCAK"] = 3] = "KECCAK";
    HashOp[HashOp["RIPEMD160"] = 4] = "RIPEMD160";
    /** BITCOIN - ripemd160(sha256(x)) */
    HashOp[HashOp["BITCOIN"] = 5] = "BITCOIN";
    HashOp[HashOp["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(HashOp || (HashOp = {}));
export function hashOpFromJSON(object) {
    switch (object) {
        case 0:
        case "NO_HASH":
            return HashOp.NO_HASH;
        case 1:
        case "SHA256":
            return HashOp.SHA256;
        case 2:
        case "SHA512":
            return HashOp.SHA512;
        case 3:
        case "KECCAK":
            return HashOp.KECCAK;
        case 4:
        case "RIPEMD160":
            return HashOp.RIPEMD160;
        case 5:
        case "BITCOIN":
            return HashOp.BITCOIN;
        case -1:
        case "UNRECOGNIZED":
        default:
            return HashOp.UNRECOGNIZED;
    }
}
export function hashOpToJSON(object) {
    switch (object) {
        case HashOp.NO_HASH:
            return "NO_HASH";
        case HashOp.SHA256:
            return "SHA256";
        case HashOp.SHA512:
            return "SHA512";
        case HashOp.KECCAK:
            return "KECCAK";
        case HashOp.RIPEMD160:
            return "RIPEMD160";
        case HashOp.BITCOIN:
            return "BITCOIN";
        default:
            return "UNKNOWN";
    }
}
/**
 * LengthOp defines how to process the key and value of the LeafOp
 * to include length information. After encoding the length with the given
 * algorithm, the length will be prepended to the key and value bytes.
 * (Each one with it's own encoded length)
 */
export var LengthOp;
(function (LengthOp) {
    /** NO_PREFIX - NO_PREFIX don't include any length info */
    LengthOp[LengthOp["NO_PREFIX"] = 0] = "NO_PREFIX";
    /** VAR_PROTO - VAR_PROTO uses protobuf (and go-amino) varint encoding of the length */
    LengthOp[LengthOp["VAR_PROTO"] = 1] = "VAR_PROTO";
    /** VAR_RLP - VAR_RLP uses rlp int encoding of the length */
    LengthOp[LengthOp["VAR_RLP"] = 2] = "VAR_RLP";
    /** FIXED32_BIG - FIXED32_BIG uses big-endian encoding of the length as a 32 bit integer */
    LengthOp[LengthOp["FIXED32_BIG"] = 3] = "FIXED32_BIG";
    /** FIXED32_LITTLE - FIXED32_LITTLE uses little-endian encoding of the length as a 32 bit integer */
    LengthOp[LengthOp["FIXED32_LITTLE"] = 4] = "FIXED32_LITTLE";
    /** FIXED64_BIG - FIXED64_BIG uses big-endian encoding of the length as a 64 bit integer */
    LengthOp[LengthOp["FIXED64_BIG"] = 5] = "FIXED64_BIG";
    /** FIXED64_LITTLE - FIXED64_LITTLE uses little-endian encoding of the length as a 64 bit integer */
    LengthOp[LengthOp["FIXED64_LITTLE"] = 6] = "FIXED64_LITTLE";
    /** REQUIRE_32_BYTES - REQUIRE_32_BYTES is like NONE, but will fail if the input is not exactly 32 bytes (sha256 output) */
    LengthOp[LengthOp["REQUIRE_32_BYTES"] = 7] = "REQUIRE_32_BYTES";
    /** REQUIRE_64_BYTES - REQUIRE_64_BYTES is like NONE, but will fail if the input is not exactly 64 bytes (sha512 output) */
    LengthOp[LengthOp["REQUIRE_64_BYTES"] = 8] = "REQUIRE_64_BYTES";
    LengthOp[LengthOp["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(LengthOp || (LengthOp = {}));
export function lengthOpFromJSON(object) {
    switch (object) {
        case 0:
        case "NO_PREFIX":
            return LengthOp.NO_PREFIX;
        case 1:
        case "VAR_PROTO":
            return LengthOp.VAR_PROTO;
        case 2:
        case "VAR_RLP":
            return LengthOp.VAR_RLP;
        case 3:
        case "FIXED32_BIG":
            return LengthOp.FIXED32_BIG;
        case 4:
        case "FIXED32_LITTLE":
            return LengthOp.FIXED32_LITTLE;
        case 5:
        case "FIXED64_BIG":
            return LengthOp.FIXED64_BIG;
        case 6:
        case "FIXED64_LITTLE":
            return LengthOp.FIXED64_LITTLE;
        case 7:
        case "REQUIRE_32_BYTES":
            return LengthOp.REQUIRE_32_BYTES;
        case 8:
        case "REQUIRE_64_BYTES":
            return LengthOp.REQUIRE_64_BYTES;
        case -1:
        case "UNRECOGNIZED":
        default:
            return LengthOp.UNRECOGNIZED;
    }
}
export function lengthOpToJSON(object) {
    switch (object) {
        case LengthOp.NO_PREFIX:
            return "NO_PREFIX";
        case LengthOp.VAR_PROTO:
            return "VAR_PROTO";
        case LengthOp.VAR_RLP:
            return "VAR_RLP";
        case LengthOp.FIXED32_BIG:
            return "FIXED32_BIG";
        case LengthOp.FIXED32_LITTLE:
            return "FIXED32_LITTLE";
        case LengthOp.FIXED64_BIG:
            return "FIXED64_BIG";
        case LengthOp.FIXED64_LITTLE:
            return "FIXED64_LITTLE";
        case LengthOp.REQUIRE_32_BYTES:
            return "REQUIRE_32_BYTES";
        case LengthOp.REQUIRE_64_BYTES:
            return "REQUIRE_64_BYTES";
        default:
            return "UNKNOWN";
    }
}
const baseExistenceProof = {};
export const ExistenceProof = {
    encode(message, writer = Writer.create()) {
        if (message.key.length !== 0) {
            writer.uint32(10).bytes(message.key);
        }
        if (message.value.length !== 0) {
            writer.uint32(18).bytes(message.value);
        }
        if (message.leaf !== undefined) {
            LeafOp.encode(message.leaf, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.path) {
            InnerOp.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseExistenceProof);
        message.path = [];
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
                    message.leaf = LeafOp.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.path.push(InnerOp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseExistenceProof);
        message.path = [];
        if (object.key !== undefined && object.key !== null) {
            message.key = bytesFromBase64(object.key);
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = bytesFromBase64(object.value);
        }
        if (object.leaf !== undefined && object.leaf !== null) {
            message.leaf = LeafOp.fromJSON(object.leaf);
        }
        else {
            message.leaf = undefined;
        }
        if (object.path !== undefined && object.path !== null) {
            for (const e of object.path) {
                message.path.push(InnerOp.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined &&
            (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
        message.value !== undefined &&
            (obj.value = base64FromBytes(message.value !== undefined ? message.value : new Uint8Array()));
        message.leaf !== undefined &&
            (obj.leaf = message.leaf ? LeafOp.toJSON(message.leaf) : undefined);
        if (message.path) {
            obj.path = message.path.map((e) => (e ? InnerOp.toJSON(e) : undefined));
        }
        else {
            obj.path = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseExistenceProof);
        message.path = [];
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
        if (object.leaf !== undefined && object.leaf !== null) {
            message.leaf = LeafOp.fromPartial(object.leaf);
        }
        else {
            message.leaf = undefined;
        }
        if (object.path !== undefined && object.path !== null) {
            for (const e of object.path) {
                message.path.push(InnerOp.fromPartial(e));
            }
        }
        return message;
    },
};
const baseNonExistenceProof = {};
export const NonExistenceProof = {
    encode(message, writer = Writer.create()) {
        if (message.key.length !== 0) {
            writer.uint32(10).bytes(message.key);
        }
        if (message.left !== undefined) {
            ExistenceProof.encode(message.left, writer.uint32(18).fork()).ldelim();
        }
        if (message.right !== undefined) {
            ExistenceProof.encode(message.right, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseNonExistenceProof);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.bytes();
                    break;
                case 2:
                    message.left = ExistenceProof.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.right = ExistenceProof.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseNonExistenceProof);
        if (object.key !== undefined && object.key !== null) {
            message.key = bytesFromBase64(object.key);
        }
        if (object.left !== undefined && object.left !== null) {
            message.left = ExistenceProof.fromJSON(object.left);
        }
        else {
            message.left = undefined;
        }
        if (object.right !== undefined && object.right !== null) {
            message.right = ExistenceProof.fromJSON(object.right);
        }
        else {
            message.right = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined &&
            (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
        message.left !== undefined &&
            (obj.left = message.left
                ? ExistenceProof.toJSON(message.left)
                : undefined);
        message.right !== undefined &&
            (obj.right = message.right
                ? ExistenceProof.toJSON(message.right)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseNonExistenceProof);
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        }
        else {
            message.key = new Uint8Array();
        }
        if (object.left !== undefined && object.left !== null) {
            message.left = ExistenceProof.fromPartial(object.left);
        }
        else {
            message.left = undefined;
        }
        if (object.right !== undefined && object.right !== null) {
            message.right = ExistenceProof.fromPartial(object.right);
        }
        else {
            message.right = undefined;
        }
        return message;
    },
};
const baseCommitmentProof = {};
export const CommitmentProof = {
    encode(message, writer = Writer.create()) {
        if (message.exist !== undefined) {
            ExistenceProof.encode(message.exist, writer.uint32(10).fork()).ldelim();
        }
        if (message.nonexist !== undefined) {
            NonExistenceProof.encode(message.nonexist, writer.uint32(18).fork()).ldelim();
        }
        if (message.batch !== undefined) {
            BatchProof.encode(message.batch, writer.uint32(26).fork()).ldelim();
        }
        if (message.compressed !== undefined) {
            CompressedBatchProof.encode(message.compressed, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCommitmentProof);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.exist = ExistenceProof.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.nonexist = NonExistenceProof.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.batch = BatchProof.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.compressed = CompressedBatchProof.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseCommitmentProof);
        if (object.exist !== undefined && object.exist !== null) {
            message.exist = ExistenceProof.fromJSON(object.exist);
        }
        else {
            message.exist = undefined;
        }
        if (object.nonexist !== undefined && object.nonexist !== null) {
            message.nonexist = NonExistenceProof.fromJSON(object.nonexist);
        }
        else {
            message.nonexist = undefined;
        }
        if (object.batch !== undefined && object.batch !== null) {
            message.batch = BatchProof.fromJSON(object.batch);
        }
        else {
            message.batch = undefined;
        }
        if (object.compressed !== undefined && object.compressed !== null) {
            message.compressed = CompressedBatchProof.fromJSON(object.compressed);
        }
        else {
            message.compressed = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.exist !== undefined &&
            (obj.exist = message.exist
                ? ExistenceProof.toJSON(message.exist)
                : undefined);
        message.nonexist !== undefined &&
            (obj.nonexist = message.nonexist
                ? NonExistenceProof.toJSON(message.nonexist)
                : undefined);
        message.batch !== undefined &&
            (obj.batch = message.batch
                ? BatchProof.toJSON(message.batch)
                : undefined);
        message.compressed !== undefined &&
            (obj.compressed = message.compressed
                ? CompressedBatchProof.toJSON(message.compressed)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseCommitmentProof);
        if (object.exist !== undefined && object.exist !== null) {
            message.exist = ExistenceProof.fromPartial(object.exist);
        }
        else {
            message.exist = undefined;
        }
        if (object.nonexist !== undefined && object.nonexist !== null) {
            message.nonexist = NonExistenceProof.fromPartial(object.nonexist);
        }
        else {
            message.nonexist = undefined;
        }
        if (object.batch !== undefined && object.batch !== null) {
            message.batch = BatchProof.fromPartial(object.batch);
        }
        else {
            message.batch = undefined;
        }
        if (object.compressed !== undefined && object.compressed !== null) {
            message.compressed = CompressedBatchProof.fromPartial(object.compressed);
        }
        else {
            message.compressed = undefined;
        }
        return message;
    },
};
const baseLeafOp = {
    hash: 0,
    prehash_key: 0,
    prehash_value: 0,
    length: 0,
};
export const LeafOp = {
    encode(message, writer = Writer.create()) {
        if (message.hash !== 0) {
            writer.uint32(8).int32(message.hash);
        }
        if (message.prehash_key !== 0) {
            writer.uint32(16).int32(message.prehash_key);
        }
        if (message.prehash_value !== 0) {
            writer.uint32(24).int32(message.prehash_value);
        }
        if (message.length !== 0) {
            writer.uint32(32).int32(message.length);
        }
        if (message.prefix.length !== 0) {
            writer.uint32(42).bytes(message.prefix);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseLeafOp);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hash = reader.int32();
                    break;
                case 2:
                    message.prehash_key = reader.int32();
                    break;
                case 3:
                    message.prehash_value = reader.int32();
                    break;
                case 4:
                    message.length = reader.int32();
                    break;
                case 5:
                    message.prefix = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseLeafOp);
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = hashOpFromJSON(object.hash);
        }
        else {
            message.hash = 0;
        }
        if (object.prehash_key !== undefined && object.prehash_key !== null) {
            message.prehash_key = hashOpFromJSON(object.prehash_key);
        }
        else {
            message.prehash_key = 0;
        }
        if (object.prehash_value !== undefined && object.prehash_value !== null) {
            message.prehash_value = hashOpFromJSON(object.prehash_value);
        }
        else {
            message.prehash_value = 0;
        }
        if (object.length !== undefined && object.length !== null) {
            message.length = lengthOpFromJSON(object.length);
        }
        else {
            message.length = 0;
        }
        if (object.prefix !== undefined && object.prefix !== null) {
            message.prefix = bytesFromBase64(object.prefix);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.hash !== undefined && (obj.hash = hashOpToJSON(message.hash));
        message.prehash_key !== undefined &&
            (obj.prehash_key = hashOpToJSON(message.prehash_key));
        message.prehash_value !== undefined &&
            (obj.prehash_value = hashOpToJSON(message.prehash_value));
        message.length !== undefined &&
            (obj.length = lengthOpToJSON(message.length));
        message.prefix !== undefined &&
            (obj.prefix = base64FromBytes(message.prefix !== undefined ? message.prefix : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseLeafOp);
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = object.hash;
        }
        else {
            message.hash = 0;
        }
        if (object.prehash_key !== undefined && object.prehash_key !== null) {
            message.prehash_key = object.prehash_key;
        }
        else {
            message.prehash_key = 0;
        }
        if (object.prehash_value !== undefined && object.prehash_value !== null) {
            message.prehash_value = object.prehash_value;
        }
        else {
            message.prehash_value = 0;
        }
        if (object.length !== undefined && object.length !== null) {
            message.length = object.length;
        }
        else {
            message.length = 0;
        }
        if (object.prefix !== undefined && object.prefix !== null) {
            message.prefix = object.prefix;
        }
        else {
            message.prefix = new Uint8Array();
        }
        return message;
    },
};
const baseInnerOp = { hash: 0 };
export const InnerOp = {
    encode(message, writer = Writer.create()) {
        if (message.hash !== 0) {
            writer.uint32(8).int32(message.hash);
        }
        if (message.prefix.length !== 0) {
            writer.uint32(18).bytes(message.prefix);
        }
        if (message.suffix.length !== 0) {
            writer.uint32(26).bytes(message.suffix);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseInnerOp);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hash = reader.int32();
                    break;
                case 2:
                    message.prefix = reader.bytes();
                    break;
                case 3:
                    message.suffix = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseInnerOp);
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = hashOpFromJSON(object.hash);
        }
        else {
            message.hash = 0;
        }
        if (object.prefix !== undefined && object.prefix !== null) {
            message.prefix = bytesFromBase64(object.prefix);
        }
        if (object.suffix !== undefined && object.suffix !== null) {
            message.suffix = bytesFromBase64(object.suffix);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.hash !== undefined && (obj.hash = hashOpToJSON(message.hash));
        message.prefix !== undefined &&
            (obj.prefix = base64FromBytes(message.prefix !== undefined ? message.prefix : new Uint8Array()));
        message.suffix !== undefined &&
            (obj.suffix = base64FromBytes(message.suffix !== undefined ? message.suffix : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseInnerOp);
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = object.hash;
        }
        else {
            message.hash = 0;
        }
        if (object.prefix !== undefined && object.prefix !== null) {
            message.prefix = object.prefix;
        }
        else {
            message.prefix = new Uint8Array();
        }
        if (object.suffix !== undefined && object.suffix !== null) {
            message.suffix = object.suffix;
        }
        else {
            message.suffix = new Uint8Array();
        }
        return message;
    },
};
const baseProofSpec = { max_depth: 0, min_depth: 0 };
export const ProofSpec = {
    encode(message, writer = Writer.create()) {
        if (message.leaf_spec !== undefined) {
            LeafOp.encode(message.leaf_spec, writer.uint32(10).fork()).ldelim();
        }
        if (message.inner_spec !== undefined) {
            InnerSpec.encode(message.inner_spec, writer.uint32(18).fork()).ldelim();
        }
        if (message.max_depth !== 0) {
            writer.uint32(24).int32(message.max_depth);
        }
        if (message.min_depth !== 0) {
            writer.uint32(32).int32(message.min_depth);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseProofSpec);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.leaf_spec = LeafOp.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.inner_spec = InnerSpec.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.max_depth = reader.int32();
                    break;
                case 4:
                    message.min_depth = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseProofSpec);
        if (object.leaf_spec !== undefined && object.leaf_spec !== null) {
            message.leaf_spec = LeafOp.fromJSON(object.leaf_spec);
        }
        else {
            message.leaf_spec = undefined;
        }
        if (object.inner_spec !== undefined && object.inner_spec !== null) {
            message.inner_spec = InnerSpec.fromJSON(object.inner_spec);
        }
        else {
            message.inner_spec = undefined;
        }
        if (object.max_depth !== undefined && object.max_depth !== null) {
            message.max_depth = Number(object.max_depth);
        }
        else {
            message.max_depth = 0;
        }
        if (object.min_depth !== undefined && object.min_depth !== null) {
            message.min_depth = Number(object.min_depth);
        }
        else {
            message.min_depth = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.leaf_spec !== undefined &&
            (obj.leaf_spec = message.leaf_spec
                ? LeafOp.toJSON(message.leaf_spec)
                : undefined);
        message.inner_spec !== undefined &&
            (obj.inner_spec = message.inner_spec
                ? InnerSpec.toJSON(message.inner_spec)
                : undefined);
        message.max_depth !== undefined && (obj.max_depth = message.max_depth);
        message.min_depth !== undefined && (obj.min_depth = message.min_depth);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseProofSpec);
        if (object.leaf_spec !== undefined && object.leaf_spec !== null) {
            message.leaf_spec = LeafOp.fromPartial(object.leaf_spec);
        }
        else {
            message.leaf_spec = undefined;
        }
        if (object.inner_spec !== undefined && object.inner_spec !== null) {
            message.inner_spec = InnerSpec.fromPartial(object.inner_spec);
        }
        else {
            message.inner_spec = undefined;
        }
        if (object.max_depth !== undefined && object.max_depth !== null) {
            message.max_depth = object.max_depth;
        }
        else {
            message.max_depth = 0;
        }
        if (object.min_depth !== undefined && object.min_depth !== null) {
            message.min_depth = object.min_depth;
        }
        else {
            message.min_depth = 0;
        }
        return message;
    },
};
const baseInnerSpec = {
    child_order: 0,
    child_size: 0,
    min_prefix_length: 0,
    max_prefix_length: 0,
    hash: 0,
};
export const InnerSpec = {
    encode(message, writer = Writer.create()) {
        writer.uint32(10).fork();
        for (const v of message.child_order) {
            writer.int32(v);
        }
        writer.ldelim();
        if (message.child_size !== 0) {
            writer.uint32(16).int32(message.child_size);
        }
        if (message.min_prefix_length !== 0) {
            writer.uint32(24).int32(message.min_prefix_length);
        }
        if (message.max_prefix_length !== 0) {
            writer.uint32(32).int32(message.max_prefix_length);
        }
        if (message.empty_child.length !== 0) {
            writer.uint32(42).bytes(message.empty_child);
        }
        if (message.hash !== 0) {
            writer.uint32(48).int32(message.hash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseInnerSpec);
        message.child_order = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.child_order.push(reader.int32());
                        }
                    }
                    else {
                        message.child_order.push(reader.int32());
                    }
                    break;
                case 2:
                    message.child_size = reader.int32();
                    break;
                case 3:
                    message.min_prefix_length = reader.int32();
                    break;
                case 4:
                    message.max_prefix_length = reader.int32();
                    break;
                case 5:
                    message.empty_child = reader.bytes();
                    break;
                case 6:
                    message.hash = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseInnerSpec);
        message.child_order = [];
        if (object.child_order !== undefined && object.child_order !== null) {
            for (const e of object.child_order) {
                message.child_order.push(Number(e));
            }
        }
        if (object.child_size !== undefined && object.child_size !== null) {
            message.child_size = Number(object.child_size);
        }
        else {
            message.child_size = 0;
        }
        if (object.min_prefix_length !== undefined &&
            object.min_prefix_length !== null) {
            message.min_prefix_length = Number(object.min_prefix_length);
        }
        else {
            message.min_prefix_length = 0;
        }
        if (object.max_prefix_length !== undefined &&
            object.max_prefix_length !== null) {
            message.max_prefix_length = Number(object.max_prefix_length);
        }
        else {
            message.max_prefix_length = 0;
        }
        if (object.empty_child !== undefined && object.empty_child !== null) {
            message.empty_child = bytesFromBase64(object.empty_child);
        }
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = hashOpFromJSON(object.hash);
        }
        else {
            message.hash = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.child_order) {
            obj.child_order = message.child_order.map((e) => e);
        }
        else {
            obj.child_order = [];
        }
        message.child_size !== undefined && (obj.child_size = message.child_size);
        message.min_prefix_length !== undefined &&
            (obj.min_prefix_length = message.min_prefix_length);
        message.max_prefix_length !== undefined &&
            (obj.max_prefix_length = message.max_prefix_length);
        message.empty_child !== undefined &&
            (obj.empty_child = base64FromBytes(message.empty_child !== undefined
                ? message.empty_child
                : new Uint8Array()));
        message.hash !== undefined && (obj.hash = hashOpToJSON(message.hash));
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseInnerSpec);
        message.child_order = [];
        if (object.child_order !== undefined && object.child_order !== null) {
            for (const e of object.child_order) {
                message.child_order.push(e);
            }
        }
        if (object.child_size !== undefined && object.child_size !== null) {
            message.child_size = object.child_size;
        }
        else {
            message.child_size = 0;
        }
        if (object.min_prefix_length !== undefined &&
            object.min_prefix_length !== null) {
            message.min_prefix_length = object.min_prefix_length;
        }
        else {
            message.min_prefix_length = 0;
        }
        if (object.max_prefix_length !== undefined &&
            object.max_prefix_length !== null) {
            message.max_prefix_length = object.max_prefix_length;
        }
        else {
            message.max_prefix_length = 0;
        }
        if (object.empty_child !== undefined && object.empty_child !== null) {
            message.empty_child = object.empty_child;
        }
        else {
            message.empty_child = new Uint8Array();
        }
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = object.hash;
        }
        else {
            message.hash = 0;
        }
        return message;
    },
};
const baseBatchProof = {};
export const BatchProof = {
    encode(message, writer = Writer.create()) {
        for (const v of message.entries) {
            BatchEntry.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseBatchProof);
        message.entries = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.entries.push(BatchEntry.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseBatchProof);
        message.entries = [];
        if (object.entries !== undefined && object.entries !== null) {
            for (const e of object.entries) {
                message.entries.push(BatchEntry.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.entries) {
            obj.entries = message.entries.map((e) => e ? BatchEntry.toJSON(e) : undefined);
        }
        else {
            obj.entries = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseBatchProof);
        message.entries = [];
        if (object.entries !== undefined && object.entries !== null) {
            for (const e of object.entries) {
                message.entries.push(BatchEntry.fromPartial(e));
            }
        }
        return message;
    },
};
const baseBatchEntry = {};
export const BatchEntry = {
    encode(message, writer = Writer.create()) {
        if (message.exist !== undefined) {
            ExistenceProof.encode(message.exist, writer.uint32(10).fork()).ldelim();
        }
        if (message.nonexist !== undefined) {
            NonExistenceProof.encode(message.nonexist, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseBatchEntry);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.exist = ExistenceProof.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.nonexist = NonExistenceProof.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseBatchEntry);
        if (object.exist !== undefined && object.exist !== null) {
            message.exist = ExistenceProof.fromJSON(object.exist);
        }
        else {
            message.exist = undefined;
        }
        if (object.nonexist !== undefined && object.nonexist !== null) {
            message.nonexist = NonExistenceProof.fromJSON(object.nonexist);
        }
        else {
            message.nonexist = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.exist !== undefined &&
            (obj.exist = message.exist
                ? ExistenceProof.toJSON(message.exist)
                : undefined);
        message.nonexist !== undefined &&
            (obj.nonexist = message.nonexist
                ? NonExistenceProof.toJSON(message.nonexist)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseBatchEntry);
        if (object.exist !== undefined && object.exist !== null) {
            message.exist = ExistenceProof.fromPartial(object.exist);
        }
        else {
            message.exist = undefined;
        }
        if (object.nonexist !== undefined && object.nonexist !== null) {
            message.nonexist = NonExistenceProof.fromPartial(object.nonexist);
        }
        else {
            message.nonexist = undefined;
        }
        return message;
    },
};
const baseCompressedBatchProof = {};
export const CompressedBatchProof = {
    encode(message, writer = Writer.create()) {
        for (const v of message.entries) {
            CompressedBatchEntry.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.lookup_inners) {
            InnerOp.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCompressedBatchProof);
        message.entries = [];
        message.lookup_inners = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.entries.push(CompressedBatchEntry.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.lookup_inners.push(InnerOp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseCompressedBatchProof);
        message.entries = [];
        message.lookup_inners = [];
        if (object.entries !== undefined && object.entries !== null) {
            for (const e of object.entries) {
                message.entries.push(CompressedBatchEntry.fromJSON(e));
            }
        }
        if (object.lookup_inners !== undefined && object.lookup_inners !== null) {
            for (const e of object.lookup_inners) {
                message.lookup_inners.push(InnerOp.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.entries) {
            obj.entries = message.entries.map((e) => e ? CompressedBatchEntry.toJSON(e) : undefined);
        }
        else {
            obj.entries = [];
        }
        if (message.lookup_inners) {
            obj.lookup_inners = message.lookup_inners.map((e) => e ? InnerOp.toJSON(e) : undefined);
        }
        else {
            obj.lookup_inners = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseCompressedBatchProof);
        message.entries = [];
        message.lookup_inners = [];
        if (object.entries !== undefined && object.entries !== null) {
            for (const e of object.entries) {
                message.entries.push(CompressedBatchEntry.fromPartial(e));
            }
        }
        if (object.lookup_inners !== undefined && object.lookup_inners !== null) {
            for (const e of object.lookup_inners) {
                message.lookup_inners.push(InnerOp.fromPartial(e));
            }
        }
        return message;
    },
};
const baseCompressedBatchEntry = {};
export const CompressedBatchEntry = {
    encode(message, writer = Writer.create()) {
        if (message.exist !== undefined) {
            CompressedExistenceProof.encode(message.exist, writer.uint32(10).fork()).ldelim();
        }
        if (message.nonexist !== undefined) {
            CompressedNonExistenceProof.encode(message.nonexist, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCompressedBatchEntry);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.exist = CompressedExistenceProof.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.nonexist = CompressedNonExistenceProof.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseCompressedBatchEntry);
        if (object.exist !== undefined && object.exist !== null) {
            message.exist = CompressedExistenceProof.fromJSON(object.exist);
        }
        else {
            message.exist = undefined;
        }
        if (object.nonexist !== undefined && object.nonexist !== null) {
            message.nonexist = CompressedNonExistenceProof.fromJSON(object.nonexist);
        }
        else {
            message.nonexist = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.exist !== undefined &&
            (obj.exist = message.exist
                ? CompressedExistenceProof.toJSON(message.exist)
                : undefined);
        message.nonexist !== undefined &&
            (obj.nonexist = message.nonexist
                ? CompressedNonExistenceProof.toJSON(message.nonexist)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseCompressedBatchEntry);
        if (object.exist !== undefined && object.exist !== null) {
            message.exist = CompressedExistenceProof.fromPartial(object.exist);
        }
        else {
            message.exist = undefined;
        }
        if (object.nonexist !== undefined && object.nonexist !== null) {
            message.nonexist = CompressedNonExistenceProof.fromPartial(object.nonexist);
        }
        else {
            message.nonexist = undefined;
        }
        return message;
    },
};
const baseCompressedExistenceProof = { path: 0 };
export const CompressedExistenceProof = {
    encode(message, writer = Writer.create()) {
        if (message.key.length !== 0) {
            writer.uint32(10).bytes(message.key);
        }
        if (message.value.length !== 0) {
            writer.uint32(18).bytes(message.value);
        }
        if (message.leaf !== undefined) {
            LeafOp.encode(message.leaf, writer.uint32(26).fork()).ldelim();
        }
        writer.uint32(34).fork();
        for (const v of message.path) {
            writer.int32(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCompressedExistenceProof);
        message.path = [];
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
                    message.leaf = LeafOp.decode(reader, reader.uint32());
                    break;
                case 4:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.path.push(reader.int32());
                        }
                    }
                    else {
                        message.path.push(reader.int32());
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseCompressedExistenceProof);
        message.path = [];
        if (object.key !== undefined && object.key !== null) {
            message.key = bytesFromBase64(object.key);
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = bytesFromBase64(object.value);
        }
        if (object.leaf !== undefined && object.leaf !== null) {
            message.leaf = LeafOp.fromJSON(object.leaf);
        }
        else {
            message.leaf = undefined;
        }
        if (object.path !== undefined && object.path !== null) {
            for (const e of object.path) {
                message.path.push(Number(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined &&
            (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
        message.value !== undefined &&
            (obj.value = base64FromBytes(message.value !== undefined ? message.value : new Uint8Array()));
        message.leaf !== undefined &&
            (obj.leaf = message.leaf ? LeafOp.toJSON(message.leaf) : undefined);
        if (message.path) {
            obj.path = message.path.map((e) => e);
        }
        else {
            obj.path = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseCompressedExistenceProof);
        message.path = [];
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
        if (object.leaf !== undefined && object.leaf !== null) {
            message.leaf = LeafOp.fromPartial(object.leaf);
        }
        else {
            message.leaf = undefined;
        }
        if (object.path !== undefined && object.path !== null) {
            for (const e of object.path) {
                message.path.push(e);
            }
        }
        return message;
    },
};
const baseCompressedNonExistenceProof = {};
export const CompressedNonExistenceProof = {
    encode(message, writer = Writer.create()) {
        if (message.key.length !== 0) {
            writer.uint32(10).bytes(message.key);
        }
        if (message.left !== undefined) {
            CompressedExistenceProof.encode(message.left, writer.uint32(18).fork()).ldelim();
        }
        if (message.right !== undefined) {
            CompressedExistenceProof.encode(message.right, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCompressedNonExistenceProof);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.bytes();
                    break;
                case 2:
                    message.left = CompressedExistenceProof.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.right = CompressedExistenceProof.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseCompressedNonExistenceProof);
        if (object.key !== undefined && object.key !== null) {
            message.key = bytesFromBase64(object.key);
        }
        if (object.left !== undefined && object.left !== null) {
            message.left = CompressedExistenceProof.fromJSON(object.left);
        }
        else {
            message.left = undefined;
        }
        if (object.right !== undefined && object.right !== null) {
            message.right = CompressedExistenceProof.fromJSON(object.right);
        }
        else {
            message.right = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined &&
            (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
        message.left !== undefined &&
            (obj.left = message.left
                ? CompressedExistenceProof.toJSON(message.left)
                : undefined);
        message.right !== undefined &&
            (obj.right = message.right
                ? CompressedExistenceProof.toJSON(message.right)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseCompressedNonExistenceProof);
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        }
        else {
            message.key = new Uint8Array();
        }
        if (object.left !== undefined && object.left !== null) {
            message.left = CompressedExistenceProof.fromPartial(object.left);
        }
        else {
            message.left = undefined;
        }
        if (object.right !== undefined && object.right !== null) {
            message.right = CompressedExistenceProof.fromPartial(object.right);
        }
        else {
            message.right = undefined;
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
