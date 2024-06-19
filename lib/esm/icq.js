var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { fromBech32 } from "@cosmjs/encoding";
import { arrayContentEquals } from "@cosmjs/utils";
import { Buffer } from "buffer";
import { CommitmentProof } from "cosmjs-types/cosmos/ics23/v1/proofs";
import { Timestamp } from "cosmjs-types/google/protobuf/timestamp";
import { MerkleProof } from "cosmjs-types/ibc/core/commitment/v1/commitment";
import { Header as TendermintHeader } from "cosmjs-types/ibc/lightclients/tendermint/v1/tendermint";
import { blockIDFlagFromJSON, Commit, Header, } from "cosmjs-types/tendermint/types/types";
import { ValidatorSet } from "cosmjs-types/tendermint/types/validator";
import { msg } from "./msg";
export const MODULES = [
    { label: "Bank", value: "bank" },
    { label: "Staking", value: "staking" },
];
export const QUERIES = {
    bank: [
        {
            label: "Total Supply",
            value: "TotalSupply",
            parts: [Buffer.from([0x00]), { value: "Denom", encoding: "string" }],
        },
        {
            label: "Balance Of",
            value: "BalanceOf",
            parts: [
                Buffer.from([0x02]),
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
                Buffer.from([0x31]),
                { value: "Delegator Address", encoding: "addrLen" },
                { value: "Validator Address", encoding: "addrLen" },
            ],
        },
        {
            label: "Unbonding Delegation",
            value: "UnbondingDelegation",
            parts: [
                Buffer.from([0x32]),
                { value: "Delegator Address", encoding: "addrLen" },
                { value: "Validator Address", encoding: "addrLen" },
            ],
        },
        {
            label: "Redelegation",
            value: "Redelegation",
            parts: [
                Buffer.from([0x34]),
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
export const encodePart = (data) => (x) => {
    if (!("encoding" in x))
        return x;
    switch (x.encoding) {
        case "string":
            return Buffer.from(data[x.value]);
        case "addr":
            return Buffer.from(fromBech32(data[x.value]).data);
        case "addrLen":
            const val = data[x.value];
            const bytes = fromBech32(val).data;
            const len = bytes.length;
            return Buffer.from([len, ...bytes]);
    }
};
/** Convert a Proof into data to be submitted to the CosmWasm verify binding */
export const toVerifyMembership = (chainId, connectionId, prefix, proof) => {
    // https://ibc.cosmos.network/main/ibc/overview#ibc-client-heights
    const revisionNumber = parseInt(chainId.split("-").at(-1) || "0");
    const merkleProof = MerkleProof.fromPartial({
        proofs: proof.proof.ops.map((x) => CommitmentProof.decode(x.data)),
    });
    return {
        connection: connectionId,
        // https://ibc.cosmos.network/main/ibc/overview#ibc-client-heights
        revision_number: revisionNumber,
        revision_height: proof.height,
        path_prefix: prefix,
        path_key: Buffer.from(proof.key).toString("base64"),
        value: Buffer.from(proof.value).toString("base64"),
        proof: Buffer.from(MerkleProof.encode(merkleProof).finish()).toString("base64"),
    };
};
export const msgUpdateTendermintClient = (signer, clientId, header) => __awaiter(void 0, void 0, void 0, function* () {
    return msg.ibc.msgUpdateClient({
        signer,
        clientId,
        clientMessage: {
            typeUrl: "/ibc.lightclients.tendermint.v1.Header",
            value: TendermintHeader.encode(header).finish(),
        },
    });
});
// Build a tendermint header at a specific height for verification.
export const buildHeader = (tm, trustedHeight) => __awaiter(void 0, void 0, void 0, function* () {
    const signedHeader = yield getSignedHeader(tm);
    // "assert that trustedVals is NextValidators of last trusted header"
    // https://github.com/cosmos/cosmos-sdk/blob/v0.41.0/x/ibc/light-clients/07-tendermint/types/update.go#L74
    const validatorHeight = Number(trustedHeight.revisionHeight) + 1;
    /* eslint @typescript-eslint/no-non-null-assertion: "off" */
    const curHeight = Number(signedHeader.header.height);
    return TendermintHeader.fromPartial({
        signedHeader,
        validatorSet: yield getValidatorSet(tm, curHeight),
        trustedHeight,
        trustedValidators: yield getValidatorSet(tm, validatorHeight),
    });
});
export const getSignedHeader = (tm, height) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const { header: rpcHeader, commit: rpcCommit } = yield tm.commit(height);
    const header = Header.fromPartial(Object.assign(Object.assign({}, rpcHeader), { version: {
            block: BigInt(rpcHeader.version.block),
            app: BigInt(rpcHeader.version.app),
        }, height: BigInt(rpcHeader.height), time: timestampFromDateNanos(rpcHeader.time), lastBlockId: {
            hash: (_a = rpcHeader.lastBlockId) === null || _a === void 0 ? void 0 : _a.hash,
            partSetHeader: (_b = rpcHeader.lastBlockId) === null || _b === void 0 ? void 0 : _b.parts,
        } }));
    const signatures = rpcCommit.signatures.map((sig) => (Object.assign(Object.assign({}, sig), { timestamp: sig.timestamp && timestampFromDateNanos(sig.timestamp), blockIdFlag: blockIDFlagFromJSON(sig.blockIdFlag) })));
    const commit = Commit.fromPartial({
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
    const proposer = mappedValidators.find((val) => arrayContentEquals(val.address, proposerAddress));
    return ValidatorSet.fromPartial({
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
    return Timestamp.fromPartial({
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
