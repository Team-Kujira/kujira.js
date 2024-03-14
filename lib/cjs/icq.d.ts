import { ProvenQuery } from "@cosmjs/stargate/build/queryclient/queryclient";
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
