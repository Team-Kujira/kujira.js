import { DeepPartial } from "cosmjs-types";
import { Coin } from "cosmjs-types/cosmos/base/v1beta1/coin";
import { Reader, Writer } from "protobufjs/minimal";
export declare const protobufPackage = "kujira.denom";
/** Params holds parameters for the denom module */
export interface Params {
    creation_fee: Coin[];
}
export declare const Params: {
    encode(message: Params, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial(object: DeepPartial<Params>): Params;
};
