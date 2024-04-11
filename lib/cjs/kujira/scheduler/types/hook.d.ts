import { DeepPartial } from "cosmjs-types";
import { BinaryReader, BinaryWriter } from "cosmjs-types/binary";
import { Coin } from "cosmjs-types/cosmos/base/v1beta1/coin";
export declare const protobufPackage = "kujira.scheduler";
export interface Hook {
    id: bigint;
    executor: string;
    contract: string;
    msg: Uint8Array;
    frequency: bigint;
    funds: Coin[];
}
export declare const Hook: {
    encode(message: Hook, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Hook;
    fromJSON(object: any): Hook;
    toJSON(message: Hook): unknown;
    fromPartial(object: DeepPartial<Hook>): Hook;
};
export declare function bytesFromBase64(b64: string): Uint8Array;
export declare function base64FromBytes(arr: Uint8Array): string;
