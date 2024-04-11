import { EncodeObject, Registry } from "@cosmjs/proto-signing";
import { AllianceExtension, setupAllianceExtension } from "./queries";
import { MsgClaimDelegationRewards, MsgDelegate, MsgDelegateResponse, MsgRedelegate, MsgRedelegateResponse, MsgUndelegate, MsgUndelegateResponse } from "./tx";
declare const types: (string | {
    encode(_: MsgDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): MsgDelegateResponse;
    fromJSON(_: any): MsgDelegateResponse;
    toJSON(_: MsgDelegateResponse): unknown;
    fromPartial(_: Partial<MsgDelegateResponse>): MsgDelegateResponse;
})[][];
declare const msg: {
    msgDelegate: (x: MsgDelegate) => EncodeObject;
    msgDelegateResponse: (x: MsgDelegateResponse) => EncodeObject;
    msgUndelegate: (x: MsgUndelegate) => EncodeObject;
    msgUndelegateResponse: (x: MsgUndelegateResponse) => EncodeObject;
    msgRedelegate: (x: MsgRedelegate) => EncodeObject;
    msgRedelegateResponse: (x: MsgRedelegateResponse) => EncodeObject;
    msgClaimDelegationRewards: (x: MsgClaimDelegationRewards) => EncodeObject;
};
export declare const registry: Registry;
export { msg, types, AllianceExtension, setupAllianceExtension };
