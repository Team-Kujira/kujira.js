import { Writer, Reader } from "protobufjs/minimal";
import { DeepPartial } from "../../../../types";
export declare const protobufPackage = "ibc.applications.interchain_accounts.host.v1";
/**
 * Params defines the set of on-chain interchain accounts parameters.
 * The following parameters may be used to disable the host submodule.
 */
export interface Params {
    /** host_enabled enables or disables the host submodule. */
    host_enabled: boolean;
    /** allow_messages defines a list of sdk message typeURLs allowed to be executed on a host chain. */
    allow_messages: string[];
}
export declare const Params: {
    encode(message: Params, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial(object: DeepPartial<Params>): Params;
};
