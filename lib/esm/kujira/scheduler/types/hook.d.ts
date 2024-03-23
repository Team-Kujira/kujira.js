import { DeepPartial } from "cosmjs-types";
import { Coin } from "cosmjs-types/cosmos/base/v1beta1/coin";
import { Reader, Writer } from "protobufjs/minimal";
export declare const protobufPackage = "kujira.scheduler";
export interface Hook {
    id: number;
    executor: string;
    contract: string;
    msg: Uint8Array;
    frequency: number;
    funds: Coin[];
}
export declare const Hook: {
    encode(message: Hook, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Hook;
    fromJSON(object: any): Hook;
    toJSON(message: Hook): unknown;
    fromPartial(object: DeepPartial<Hook>): Hook;
};
export declare function bytesFromBase64(b64: string): Uint8Array;
export declare function base64FromBytes(arr: Uint8Array): string;
