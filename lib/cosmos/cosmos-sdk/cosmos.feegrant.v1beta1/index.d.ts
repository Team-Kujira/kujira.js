import { Registry, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgGrantAllowance } from "./types/cosmos/feegrant/v1beta1/tx";
import { MsgRevokeAllowance } from "./types/cosmos/feegrant/v1beta1/tx";
declare const types: (string | {
    encode(message: MsgRevokeAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): MsgRevokeAllowance;
    fromJSON(object: any): MsgRevokeAllowance;
    toJSON(message: MsgRevokeAllowance): unknown;
    fromPartial(object: {
        granter?: string | undefined;
        grantee?: string | undefined;
    }): MsgRevokeAllowance;
})[][];
export declare const MissingWalletError: Error;
export declare const registry: Registry;
declare const txClient: {
    msgGrantAllowance: (data: MsgGrantAllowance) => EncodeObject;
    msgRevokeAllowance: (data: MsgRevokeAllowance) => EncodeObject;
};
export { txClient, Api, types };
