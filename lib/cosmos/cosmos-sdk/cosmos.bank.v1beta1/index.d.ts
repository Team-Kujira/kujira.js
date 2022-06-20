import { Registry, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgSend } from "./types/cosmos/bank/v1beta1/tx";
import { MsgMultiSend } from "./types/cosmos/bank/v1beta1/tx";
declare const types: ((string | {
    encode(message: MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): MsgSend;
    fromJSON(object: any): MsgSend;
    toJSON(message: MsgSend): unknown;
    fromPartial(object: {
        from_address?: string | undefined;
        to_address?: string | undefined;
        amount?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
    }): MsgSend;
})[] | (string | {
    encode(message: MsgMultiSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): MsgMultiSend;
    fromJSON(object: any): MsgMultiSend;
    toJSON(message: MsgMultiSend): unknown;
    fromPartial(object: {
        inputs?: {
            address?: string | undefined;
            coins?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
        }[] | undefined;
        outputs?: {
            address?: string | undefined;
            coins?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
        }[] | undefined;
    }): MsgMultiSend;
})[])[];
export declare const MissingWalletError: Error;
export declare const registry: Registry;
declare const txClient: {
    msgSend: (data: MsgSend) => EncodeObject;
    msgMultiSend: (data: MsgMultiSend) => EncodeObject;
};
export { txClient, Api, types };
