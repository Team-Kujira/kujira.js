import { EncodeObject } from "@cosmjs/proto-signing";
import { ProvenQuery } from "@cosmjs/stargate/build/queryclient/queryclient";
import { Tendermint37Client } from "@cosmjs/tendermint-rpc";
import { Height } from "cosmjs-types/ibc/core/client/v1/client";
import { Header as TendermintHeader } from "cosmjs-types/ibc/lightclients/tendermint/v1/tendermint";
import { SignedHeader } from "cosmjs-types/tendermint/types/types";
export type StoreKey = "bank" | "staking";
export declare const MODULES: {
    label: string;
    value: StoreKey;
}[];
export type Part = {
    value: string;
    encoding: "string" | "addr" | "addrLen";
} | Uint8Array;
export interface Query {
    label: string;
    value: string;
    parts: Part[];
}
export declare const QUERIES: Record<StoreKey, Query[]>;
/** Encode data into a key
 *
 * Typically a complete key will be generated with `Buffer.concat(query.map(encodePart(data)))`
 *
 */
export declare const encodePart: (data: Record<string, string>) => (x: Part) => Uint8Array;
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
export declare const toVerifyMembership: (chainId: string, connectionId: string, prefix: string, proof: ProvenQuery) => VerifyMembership;
export declare const msgUpdateTendermintClient: (signer: string, clientId: string, header: TendermintHeader) => Promise<EncodeObject>;
export declare const buildHeader: (tm: Tendermint37Client, trustedHeight: Height) => Promise<TendermintHeader>;
export declare const getSignedHeader: (tm: Tendermint37Client, height?: number) => Promise<SignedHeader>;
