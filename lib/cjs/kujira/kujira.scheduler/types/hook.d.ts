import { Writer, Reader } from "protobufjs/minimal";
import { DeepPartial } from "../../../types";
import { Coin } from "../../../types/cosmos/base/coin";
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
