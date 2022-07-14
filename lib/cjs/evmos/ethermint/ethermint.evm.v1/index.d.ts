import { Registry, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { QueryAccountResponse } from "./types/ethermint/evm/v1/query";
import { MsgEthereumTx } from "./types/ethermint/evm/v1/tx";
export declare const types: ((string | {
    encode(message: QueryAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): QueryAccountResponse;
    fromJSON(object: any): QueryAccountResponse;
    toJSON(message: QueryAccountResponse): unknown;
    fromPartial(object: {
        balance?: string | undefined;
        code_hash?: string | undefined;
        nonce?: number | undefined;
    }): QueryAccountResponse;
})[] | (string | {
    encode(message: MsgEthereumTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): MsgEthereumTx;
    fromJSON(object: any): MsgEthereumTx;
    toJSON(message: MsgEthereumTx): unknown;
    fromPartial(object: {
        data?: {
            type_url?: string | undefined;
            value?: Uint8Array | undefined;
        } | undefined;
        size?: number | undefined;
        hash?: string | undefined;
        from?: string | undefined;
    }): MsgEthereumTx;
})[])[];
export declare const MissingWalletError: Error;
export declare const registry: Registry;
export declare const txClient: {
    msgEthereumTx: (data: MsgEthereumTx) => EncodeObject;
};
export { Api };
