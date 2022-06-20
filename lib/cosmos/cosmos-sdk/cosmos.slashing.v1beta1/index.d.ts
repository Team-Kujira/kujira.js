import { Registry, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgUnjail } from "./types/cosmos/slashing/v1beta1/tx";
declare const types: (string | {
    encode(message: MsgUnjail, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): MsgUnjail;
    fromJSON(object: any): MsgUnjail;
    toJSON(message: MsgUnjail): unknown;
    fromPartial(object: {
        validator_addr?: string | undefined;
    }): MsgUnjail;
})[][];
export declare const MissingWalletError: Error;
export declare const registry: Registry;
declare const txClient: {
    msgUnjail: (data: MsgUnjail) => EncodeObject;
};
export { txClient, Api, types };
