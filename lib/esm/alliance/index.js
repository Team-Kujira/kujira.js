import { Registry } from "@cosmjs/proto-signing";
import { MsgCreateAllianceProposal, MsgDeleteAllianceProposal, MsgUpdateAllianceProposal, } from "./gov";
import { setupAllianceExtension } from "./queries";
import { MsgClaimDelegationRewards, MsgDelegate, MsgDelegateResponse, MsgRedelegate, MsgRedelegateResponse, MsgUndelegate, MsgUndelegateResponse, } from "./tx";
const types = [
    ["/alliance.alliance.MsgDelegate", MsgDelegate],
    ["/alliance.alliance.MsgDelegateResponse", MsgDelegateResponse],
    ["/alliance.alliance.MsgUndelegate", MsgUndelegate],
    ["/alliance.alliance.MsgUndelegateResponse", MsgUndelegateResponse],
    ["/alliance.alliance.MsgRedelegate", MsgRedelegate],
    ["/alliance.alliance.MsgRedelegateResponse", MsgRedelegateResponse],
    ["/alliance.alliance.MsgClaimDelegationRewards", MsgClaimDelegationRewards],
    ["/alliance.alliance.MsgCreateAllianceProposal", MsgCreateAllianceProposal],
    ["/alliance.alliance.MsgUpdateAllianceProposal", MsgUpdateAllianceProposal],
    ["/alliance.alliance.MsgDeleteAllianceProposal", MsgDeleteAllianceProposal],
];
const msg = {
    msgDelegate: (x) => ({
        typeUrl: "/alliance.alliance.MsgDelegate",
        value: MsgDelegate.fromPartial(x),
    }),
    msgDelegateResponse: (x) => ({
        typeUrl: "/alliance.alliance.MsgDelegateResponse",
        value: MsgDelegateResponse.fromPartial(x),
    }),
    msgUndelegate: (x) => ({
        typeUrl: "/alliance.alliance.MsgUndelegate",
        value: MsgUndelegate.fromPartial(x),
    }),
    msgUndelegateResponse: (x) => ({
        typeUrl: "/alliance.alliance.MsgUndelegateResponse",
        value: MsgUndelegateResponse.fromPartial(x),
    }),
    msgRedelegate: (x) => ({
        typeUrl: "/alliance.alliance.MsgRedelegate",
        value: MsgRedelegate.fromPartial(x),
    }),
    msgRedelegateResponse: (x) => ({
        typeUrl: "/alliance.alliance.MsgRedelegateResponse",
        value: MsgRedelegateResponse.fromPartial(x),
    }),
    msgClaimDelegationRewards: (x) => ({
        typeUrl: "/alliance.alliance.MsgClaimDelegationRewards",
        value: MsgClaimDelegationRewards.fromPartial(x),
    }),
};
export const registry = new Registry(types);
export { msg, types, setupAllianceExtension };
