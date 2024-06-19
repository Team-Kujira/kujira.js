"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSignedHeader = exports.buildHeader = exports.msgUpdateTendermintClient = exports.toVerifyMembership = exports.encodePart = exports.QUERIES = exports.MODULES = void 0;
const encoding_1 = require("@cosmjs/encoding");
const utils_1 = require("@cosmjs/utils");
const buffer_1 = require("buffer");
const proofs_1 = require("cosmjs-types/cosmos/ics23/v1/proofs");
const timestamp_1 = require("cosmjs-types/google/protobuf/timestamp");
const commitment_1 = require("cosmjs-types/ibc/core/commitment/v1/commitment");
const tendermint_1 = require("cosmjs-types/ibc/lightclients/tendermint/v1/tendermint");
const types_1 = require("cosmjs-types/tendermint/types/types");
const validator_1 = require("cosmjs-types/tendermint/types/validator");
const msg_1 = require("./msg");
exports.MODULES = [
    { label: "Bank", value: "bank" },
    { label: "Staking", value: "staking" },
];
exports.QUERIES = {
    bank: [
        {
            label: "Total Supply",
            value: "TotalSupply",
            parts: [buffer_1.Buffer.from([0x00]), { value: "Denom", encoding: "string" }],
        },
        {
            label: "Balance Of",
            value: "BalanceOf",
            parts: [
                buffer_1.Buffer.from([0x02]),
                { value: "Address", encoding: "addrLen" },
                { value: "Denom", encoding: "string" },
            ],
        },
    ],
    staking: [
        {
            label: "Delegated Amount",
            value: "Delegation",
            parts: [
                buffer_1.Buffer.from([0x31]),
                { value: "Delegator Address", encoding: "addrLen" },
                { value: "Validator Address", encoding: "addrLen" },
            ],
        },
        {
            label: "Unbonding Delegation",
            value: "UnbondingDelegation",
            parts: [
                buffer_1.Buffer.from([0x32]),
                { value: "Delegator Address", encoding: "addrLen" },
                { value: "Validator Address", encoding: "addrLen" },
            ],
        },
        {
            label: "Redelegation",
            value: "Redelegation",
            parts: [
                buffer_1.Buffer.from([0x34]),
                { value: "Delegator Address", encoding: "addrLen" },
                { value: "Original Validator Address", encoding: "addrLen" },
                { value: "New Validator Address", encoding: "addrLen" },
            ],
        },
    ],
};
/** Encode data into a key
 *
 * Typically a complete key will be generated with `Buffer.concat(query.map(encodePart(data)))`
 *
 */
const encodePart = (data) => (x) => {
    if (!("encoding" in x))
        return x;
    switch (x.encoding) {
        case "string":
            return buffer_1.Buffer.from(data[x.value]);
        case "addr":
            return buffer_1.Buffer.from((0, encoding_1.fromBech32)(data[x.value]).data);
        case "addrLen":
            const val = data[x.value];
            const bytes = (0, encoding_1.fromBech32)(val).data;
            const len = bytes.length;
            return buffer_1.Buffer.from([len, ...bytes]);
    }
};
exports.encodePart = encodePart;
/** Convert a Proof into data to be submitted to the CosmWasm verify binding */
const toVerifyMembership = (chainId, connectionId, prefix, proof) => {
    // https://ibc.cosmos.network/main/ibc/overview#ibc-client-heights
    const revisionNumber = parseInt(chainId.split("-").at(-1) || "0");
    const merkleProof = commitment_1.MerkleProof.fromPartial({
        proofs: proof.proof.ops.map((x) => proofs_1.CommitmentProof.decode(x.data)),
    });
    return {
        connection: connectionId,
        // https://ibc.cosmos.network/main/ibc/overview#ibc-client-heights
        revision_number: revisionNumber,
        revision_height: proof.height,
        path_prefix: prefix,
        path_key: buffer_1.Buffer.from(proof.key).toString("base64"),
        value: buffer_1.Buffer.from(proof.value).toString("base64"),
        proof: buffer_1.Buffer.from(commitment_1.MerkleProof.encode(merkleProof).finish()).toString("base64"),
    };
};
exports.toVerifyMembership = toVerifyMembership;
const msgUpdateTendermintClient = (signer, clientId, header) => __awaiter(void 0, void 0, void 0, function* () {
    return msg_1.msg.ibc.msgUpdateClient({
        signer,
        clientId,
        clientMessage: {
            typeUrl: "/ibc.lightclients.tendermint.v1.Header",
            value: tendermint_1.Header.encode(header).finish(),
        },
    });
});
exports.msgUpdateTendermintClient = msgUpdateTendermintClient;
// Build a tendermint header at a specific height for verification.
const buildHeader = (tm, trustedHeight) => __awaiter(void 0, void 0, void 0, function* () {
    const signedHeader = yield (0, exports.getSignedHeader)(tm);
    // "assert that trustedVals is NextValidators of last trusted header"
    // https://github.com/cosmos/cosmos-sdk/blob/v0.41.0/x/ibc/light-clients/07-tendermint/types/update.go#L74
    const validatorHeight = Number(trustedHeight.revisionHeight) + 1;
    /* eslint @typescript-eslint/no-non-null-assertion: "off" */
    const curHeight = Number(signedHeader.header.height);
    return tendermint_1.Header.fromPartial({
        signedHeader,
        validatorSet: yield getValidatorSet(tm, curHeight),
        trustedHeight,
        trustedValidators: yield getValidatorSet(tm, validatorHeight),
    });
});
exports.buildHeader = buildHeader;
const getSignedHeader = (tm, height) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const { header: rpcHeader, commit: rpcCommit } = yield tm.commit(height);
    const header = types_1.Header.fromPartial(Object.assign(Object.assign({}, rpcHeader), { version: {
            block: BigInt(rpcHeader.version.block),
            app: BigInt(rpcHeader.version.app),
        }, height: BigInt(rpcHeader.height), time: timestampFromDateNanos(rpcHeader.time), lastBlockId: {
            hash: (_a = rpcHeader.lastBlockId) === null || _a === void 0 ? void 0 : _a.hash,
            partSetHeader: (_b = rpcHeader.lastBlockId) === null || _b === void 0 ? void 0 : _b.parts,
        } }));
    const signatures = rpcCommit.signatures.map((sig) => (Object.assign(Object.assign({}, sig), { timestamp: sig.timestamp && timestampFromDateNanos(sig.timestamp), blockIdFlag: (0, types_1.blockIDFlagFromJSON)(sig.blockIdFlag) })));
    const commit = types_1.Commit.fromPartial({
        height: BigInt(rpcCommit.height),
        round: rpcCommit.round,
        blockId: {
            hash: rpcCommit.blockId.hash,
            partSetHeader: rpcCommit.blockId.parts,
        },
        signatures,
    });
    // For the vote sign bytes, it checks (from the commit):
    //   Height, Round, BlockId, TimeStamp, ChainID
    return { header, commit };
});
exports.getSignedHeader = getSignedHeader;
const getValidatorSet = (tm, height) => __awaiter(void 0, void 0, void 0, function* () {
    // we need to query the header to find out who the proposer was, and pull them out
    const { proposerAddress } = yield header(tm, height);
    const validators = yield tm.validatorsAll(height);
    const mappedValidators = validators.validators.map((val) => ({
        address: val.address,
        pubKey: mapRpcPubKeyToProto(val.pubkey),
        votingPower: val.votingPower,
        proposerPriority: val.proposerPriority
            ? BigInt(val.proposerPriority)
            : undefined,
    }));
    const totalPower = validators.validators.reduce((accumulator, v) => accumulator + v.votingPower, BigInt(0));
    const proposer = mappedValidators.find((val) => (0, utils_1.arrayContentEquals)(val.address, proposerAddress));
    return validator_1.ValidatorSet.fromPartial({
        validators: mappedValidators,
        totalVotingPower: totalPower,
        proposer,
    });
});
const header = (tm, height) => __awaiter(void 0, void 0, void 0, function* () {
    // TODO: expose header method on tmClient and use that
    const resp = yield tm.blockchain(height, height);
    return resp.blockMetas[0].header;
});
const timestampFromDateNanos = (date) => {
    var _a;
    const nanos = (date.getTime() % 1000) * 1000000 + ((_a = date.nanoseconds) !== null && _a !== void 0 ? _a : 0);
    return timestamp_1.Timestamp.fromPartial({
        seconds: BigInt(Math.floor(date.getTime() / 1000)),
        nanos,
    });
};
const mapRpcPubKeyToProto = (pubkey) => {
    if (pubkey === undefined) {
        return undefined;
    }
    if (pubkey.algorithm == "ed25519") {
        return {
            ed25519: pubkey.data,
            secp256k1: undefined,
        };
    }
    else if (pubkey.algorithm == "secp256k1") {
        return {
            ed25519: undefined,
            secp256k1: pubkey.data,
        };
    }
    else {
        throw new Error(`Unknown validator pubkey type: ${pubkey.algorithm}`);
    }
};
