import { Registry, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgEthereumTx } from "./types/ethermint/evm/v1/tx";
export declare const types: (string | {
    encode(message: MsgEthereumTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): MsgEthereumTx;
    fromJSON(object: any): MsgEthereumTx;
    toJSON(message: MsgEthereumTx): unknown;
    fromPartial(object: DeepPartial<MsgEthereumTx>): MsgEthereumTx;
})[][];
export declare const MissingWalletError: Error;
export declare const registry: Registry;
export declare const txClient: {
    msgEthereumTx: (data: MsgEthereumTx) => EncodeObject;
};
export { Api };
