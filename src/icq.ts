import { fromBech32 } from "@cosmjs/encoding";
import { EncodeObject } from "@cosmjs/proto-signing";
import { ProvenQuery } from "@cosmjs/stargate/build/queryclient/queryclient";
import {
  ReadonlyDateWithNanoseconds,
  tendermint37,
  Tendermint37Client,
  ValidatorPubkey,
} from "@cosmjs/tendermint-rpc";
import { arrayContentEquals } from "@cosmjs/utils";
import { Buffer } from "buffer";
import { CommitmentProof } from "cosmjs-types/cosmos/ics23/v1/proofs";
import { Timestamp } from "cosmjs-types/google/protobuf/timestamp";
import { Height } from "cosmjs-types/ibc/core/client/v1/client";
import { MerkleProof } from "cosmjs-types/ibc/core/commitment/v1/commitment";
import { Header as TendermintHeader } from "cosmjs-types/ibc/lightclients/tendermint/v1/tendermint";
import { PublicKey } from "cosmjs-types/tendermint/crypto/keys";
import {
  blockIDFlagFromJSON,
  Commit,
  Header,
  SignedHeader,
} from "cosmjs-types/tendermint/types/types";
import { ValidatorSet } from "cosmjs-types/tendermint/types/validator";
import { msg } from "./msg";

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

export const msgUpdateTendermintClient = async (
  signer: string,
  clientId: string,
  header: TendermintHeader
): Promise<EncodeObject> => {
  return msg.ibc.msgUpdateClient({
    signer,
    clientId,
    clientMessage: {
      typeUrl: "/ibc.lightclients.tendermint.v1.Header",
      value: TendermintHeader.encode(header).finish(),
    },
  });
};

// Build a tendermint header at a specific height for verification.
export const buildHeader = async (
  tm: Tendermint37Client,
  trustedHeight: Height
): Promise<TendermintHeader> => {
  const signedHeader = await getSignedHeader(tm);
  // "assert that trustedVals is NextValidators of last trusted header"
  // https://github.com/cosmos/cosmos-sdk/blob/v0.41.0/x/ibc/light-clients/07-tendermint/types/update.go#L74
  const validatorHeight = Number(trustedHeight.revisionHeight) + 1;
  /* eslint @typescript-eslint/no-non-null-assertion: "off" */
  const curHeight = Number(signedHeader.header!.height);
  return TendermintHeader.fromPartial({
    signedHeader,
    validatorSet: await getValidatorSet(tm, curHeight),
    trustedHeight,
    trustedValidators: await getValidatorSet(tm, validatorHeight),
  });
};

export const getSignedHeader = async (
  tm: Tendermint37Client,
  height?: number
): Promise<SignedHeader> => {
  const { header: rpcHeader, commit: rpcCommit } = await tm.commit(height);
  const header = Header.fromPartial({
    ...rpcHeader,
    version: {
      block: BigInt(rpcHeader.version.block),
      app: BigInt(rpcHeader.version.app),
    },
    height: BigInt(rpcHeader.height),
    time: timestampFromDateNanos(rpcHeader.time),
    lastBlockId: {
      hash: rpcHeader.lastBlockId?.hash,
      partSetHeader: rpcHeader.lastBlockId?.parts,
    },
  });

  const signatures = rpcCommit.signatures.map((sig) => ({
    ...sig,
    timestamp: sig.timestamp && timestampFromDateNanos(sig.timestamp),
    blockIdFlag: blockIDFlagFromJSON(sig.blockIdFlag),
  }));
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
};

const getValidatorSet = async (
  tm: Tendermint37Client,
  height: number
): Promise<ValidatorSet> => {
  // we need to query the header to find out who the proposer was, and pull them out
  const { proposerAddress } = await header(tm, height);
  const validators = await tm.validatorsAll(height);
  const mappedValidators = validators.validators.map((val) => ({
    address: val.address,
    pubKey: mapRpcPubKeyToProto(val.pubkey),
    votingPower: val.votingPower,
    proposerPriority: val.proposerPriority
      ? BigInt(val.proposerPriority)
      : undefined,
  }));
  const totalPower = validators.validators.reduce(
    (accumulator, v) => accumulator + v.votingPower,
    BigInt(0)
  );
  const proposer = mappedValidators.find((val) =>
    arrayContentEquals(val.address, proposerAddress)
  );
  return ValidatorSet.fromPartial({
    validators: mappedValidators,
    totalVotingPower: totalPower,
    proposer,
  });
};

const header = async (
  tm: Tendermint37Client,
  height: number
): Promise<tendermint37.Header> => {
  // TODO: expose header method on tmClient and use that
  const resp = await tm.blockchain(height, height);
  return resp.blockMetas[0].header;
};

const timestampFromDateNanos = (
  date: ReadonlyDateWithNanoseconds
): Timestamp => {
  const nanos = (date.getTime() % 1000) * 1000000 + (date.nanoseconds ?? 0);
  return Timestamp.fromPartial({
    seconds: BigInt(Math.floor(date.getTime() / 1000)),
    nanos,
  });
};

const mapRpcPubKeyToProto = (
  pubkey?: ValidatorPubkey
): PublicKey | undefined => {
  if (pubkey === undefined) {
    return undefined;
  }
  if (pubkey.algorithm == "ed25519") {
    return {
      ed25519: pubkey.data,
      secp256k1: undefined,
    };
  } else if (pubkey.algorithm == "secp256k1") {
    return {
      ed25519: undefined,
      secp256k1: pubkey.data,
    };
  } else {
    throw new Error(
      `Unknown validator pubkey type: ${(pubkey as any).algorithm}`
    );
  }
};
