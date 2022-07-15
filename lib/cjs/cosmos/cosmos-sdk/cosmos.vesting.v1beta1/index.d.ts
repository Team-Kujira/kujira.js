import { Registry, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCreateVestingAccount } from "./types/tx";
export { aminoConverter } from "./types/amino";
declare const types: (string | {
    encode(message: MsgCreateVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): MsgCreateVestingAccount;
    fromJSON(object: any): MsgCreateVestingAccount;
    toJSON(message: MsgCreateVestingAccount): unknown;
    fromPartial(object: {
        from_address?: string | undefined;
        to_address?: string | undefined;
        amount?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
        end_time?: number | undefined;
        delayed?: boolean | undefined;
    }): MsgCreateVestingAccount;
})[][];
export declare const registry: Registry;
declare const txClient: {
    msgCreateVestingAccount: (data: MsgCreateVestingAccount) => EncodeObject;
};
export { txClient, Api, types };
