import { EncodeObject, Registry } from "@cosmjs/proto-signing";
import { MsgBatchResetDelegation, MsgWithdrawAllDelegatorRewards } from "./types/tx";
declare const types: ((string | {
    typeUrl: string;
    encode(message: MsgWithdrawAllDelegatorRewards, writer?: import("cosmjs-types/binary").BinaryWriter): import("cosmjs-types/binary").BinaryWriter;
    decode(input: import("cosmjs-types/binary").BinaryReader | Uint8Array, length?: number | undefined): MsgWithdrawAllDelegatorRewards;
    fromJSON(object: any): MsgWithdrawAllDelegatorRewards;
    toJSON(message: MsgWithdrawAllDelegatorRewards): unknown;
    fromPartial<I extends {
        delegatorAddress?: string | undefined;
    } & {
        delegatorAddress?: string | undefined;
    } & Record<Exclude<keyof I, "delegatorAddress">, never>>(object: I): MsgWithdrawAllDelegatorRewards;
})[] | (string | {
    typeUrl: string;
    encode(message: MsgBatchResetDelegation, writer?: import("cosmjs-types/binary").BinaryWriter): import("cosmjs-types/binary").BinaryWriter;
    decode(input: import("cosmjs-types/binary").BinaryReader | Uint8Array, length?: number | undefined): MsgBatchResetDelegation;
    fromJSON(object: any): MsgBatchResetDelegation;
    toJSON(message: MsgBatchResetDelegation): unknown;
    fromPartial<I_1 extends {
        delegatorAddress?: string | undefined;
        validators?: string[] | undefined;
        amounts?: string[] | undefined;
    } & {
        delegatorAddress?: string | undefined;
        validators?: (string[] & string[] & Record<Exclude<keyof I_1["validators"], keyof string[]>, never>) | undefined;
        amounts?: (string[] & string[] & Record<Exclude<keyof I_1["amounts"], keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I_1, keyof MsgBatchResetDelegation>, never>>(object: I_1): MsgBatchResetDelegation;
})[])[];
export declare const registry: Registry;
declare const msg: {
    msgWithdrawAllDelegatorRewards: (data: MsgWithdrawAllDelegatorRewards) => EncodeObject;
    msgBatchResetDelegation: (data: MsgBatchResetDelegation) => EncodeObject;
};
export { msg, types };
