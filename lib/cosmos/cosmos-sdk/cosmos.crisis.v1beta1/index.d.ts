import { Registry, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgVerifyInvariant } from "./types/cosmos/crisis/v1beta1/tx";
declare const types: (string | {
    encode(message: MsgVerifyInvariant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): MsgVerifyInvariant;
    fromJSON(object: any): MsgVerifyInvariant;
    toJSON(message: MsgVerifyInvariant): unknown;
    fromPartial(object: {
        sender?: string | undefined;
        invariant_module_name?: string | undefined;
        invariant_route?: string | undefined;
    }): MsgVerifyInvariant;
})[][];
export declare const MissingWalletError: Error;
export declare const registry: Registry;
declare const txClient: {
    msgVerifyInvariant: (data: MsgVerifyInvariant) => EncodeObject;
};
export { txClient, Api, types };
