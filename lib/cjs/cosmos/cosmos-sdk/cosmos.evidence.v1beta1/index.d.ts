import { Registry, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgSubmitEvidence } from "./types/tx";
declare const types: (string | {
    encode(message: MsgSubmitEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): MsgSubmitEvidence;
    fromJSON(object: any): MsgSubmitEvidence;
    toJSON(message: MsgSubmitEvidence): unknown;
    fromPartial(object: {
        submitter?: string | undefined;
        evidence?: {
            type_url?: string | undefined;
            value?: Uint8Array | undefined;
        } | undefined;
    }): MsgSubmitEvidence;
})[][];
export declare const registry: Registry;
declare const txClient: {
    msgSubmitEvidence: (data: MsgSubmitEvidence) => EncodeObject;
};
export { txClient, Api, types };
