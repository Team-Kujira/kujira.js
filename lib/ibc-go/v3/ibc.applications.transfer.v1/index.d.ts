import { Registry, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgTransfer } from "./types/ibc/applications/transfer/v1/tx";
declare const types: (string | {
    encode(message: MsgTransfer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): MsgTransfer;
    fromJSON(object: any): MsgTransfer;
    toJSON(message: MsgTransfer): unknown;
    fromPartial(object: {
        source_port?: string | undefined;
        source_channel?: string | undefined;
        token?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
        sender?: string | undefined;
        receiver?: string | undefined;
        timeout_height?: {
            revision_number?: number | undefined;
            revision_height?: number | undefined;
        } | undefined;
        timeout_timestamp?: number | undefined;
    }): MsgTransfer;
})[][];
export declare const MissingWalletError: Error;
export declare const registry: Registry;
declare const txClient: {
    msgTransfer: (data: MsgTransfer) => EncodeObject;
};
export { txClient, Api, types };
