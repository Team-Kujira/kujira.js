import { fromBech32 } from "@cosmjs/encoding";
import { ProvenQuery } from "@cosmjs/stargate/build/queryclient/queryclient";
import { Buffer } from "buffer";
import { CommitmentProof } from "cosmjs-types/cosmos/ics23/v1/proofs";
import { MerkleProof } from "cosmjs-types/ibc/core/commitment/v1/commitment";

export type StoreKey = "bank" | "staking";

export const MODULES: { label: string; value: StoreKey }[] = [
  { label: "Bank", value: "bank" },
  { label: "Staking", value: "staking" },
];

export type Part =
  | {
      value: string;
      encoding: "string" | "addr" | "addrLen";
    }
  | Uint8Array;

export interface Query {
  label: string;
  value: string;
  parts: Part[];
}

export const QUERIES: Record<StoreKey, Query[]> = {
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
export const encodePart =
  (data: Record<string, string>) =>
  (x: Part): Uint8Array => {
    if (!("encoding" in x)) return x;
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

export interface VerifyMembership {
  connection: string;
  revision_number: number;
  revision_height: number;
  /** Base64 encoded bytes */
  proof: string;
  /** Base64 encoded bytes */
  value: string;
  path_prefix: string;
  path_key: string;
}

/** Convert a Proof into data to be submitted to the CosmWasm verify binding */
export const toVerifyMembership = (
  chainId: string,
  connectionId: string,
  prefix: string,
  proof: ProvenQuery
): VerifyMembership => {
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
    proof: Buffer.from(MerkleProof.encode(merkleProof).finish()).toString(
      "base64"
    ),
  };
};
