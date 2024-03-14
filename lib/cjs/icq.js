"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toVerifyMembership = exports.encodePart = exports.QUERIES = exports.MODULES = void 0;
const encoding_1 = require("@cosmjs/encoding");
const proofs_1 = require("cosmjs-types/cosmos/ics23/v1/proofs");
const commitment_1 = require("cosmjs-types/ibc/core/commitment/v1/commitment");
exports.MODULES = [
    { label: "Bank", value: "bank" },
    { label: "Staking", value: "staking" },
];
exports.QUERIES = {
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
const encodePart = (data) => (x) => {
    if (!("encoding" in x))
        return x;
    switch (x.encoding) {
        case "string":
            return Buffer.from(data[x.value]);
        case "addr":
            return Buffer.from((0, encoding_1.fromBech32)(data[x.value]).data);
        case "addrLen":
            const val = data[x.value];
            const bytes = (0, encoding_1.fromBech32)(val).data;
            const len = bytes.length;
            return Buffer.from([len, ...bytes]);
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
        path_key: Buffer.from(proof.key).toString("base64"),
        value: Buffer.from(proof.value).toString("base64"),
        proof: Buffer.from(commitment_1.MerkleProof.encode(merkleProof).finish()).toString("base64"),
    };
};
exports.toVerifyMembership = toVerifyMembership;
