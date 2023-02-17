import { EncodeObject, Registry } from "@cosmjs/proto-signing";
import {
  MsgCreateAllianceProposal,
  MsgDeleteAllianceProposal,
  MsgUpdateAllianceProposal,
} from "./gov";
import { AllianceExtension, setupAllianceExtension } from "./queries";
import {
  MsgClaimDelegationRewards,
  MsgDelegate,
  MsgDelegateResponse,
  MsgRedelegate,
  MsgRedelegateResponse,
  MsgUndelegate,
  MsgUndelegateResponse,
} from "./tx";

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
  msgDelegate: (x: MsgDelegate): EncodeObject => ({
    typeUrl: "/alliance.alliance.MsgDelegate",
    value: MsgDelegate.fromPartial(x),
  }),
  msgDelegateResponse: (x: MsgDelegateResponse): EncodeObject => ({
    typeUrl: "/alliance.alliance.MsgDelegateResponse",
    value: MsgDelegateResponse.fromPartial(x),
  }),
  msgUndelegate: (x: MsgUndelegate): EncodeObject => ({
    typeUrl: "/alliance.alliance.MsgUndelegate",
    value: MsgUndelegate.fromPartial(x),
  }),
  msgUndelegateResponse: (x: MsgUndelegateResponse): EncodeObject => ({
    typeUrl: "/alliance.alliance.MsgUndelegateResponse",
    value: MsgUndelegateResponse.fromPartial(x),
  }),
  msgRedelegate: (x: MsgRedelegate): EncodeObject => ({
    typeUrl: "/alliance.alliance.MsgRedelegate",
    value: MsgRedelegate.fromPartial(x),
  }),
  msgRedelegateResponse: (x: MsgRedelegateResponse): EncodeObject => ({
    typeUrl: "/alliance.alliance.MsgRedelegateResponse",
    value: MsgRedelegateResponse.fromPartial(x),
  }),
  msgClaimDelegationRewards: (x: MsgClaimDelegationRewards): EncodeObject => ({
    typeUrl: "/alliance.alliance.MsgClaimDelegationRewards",
    value: MsgClaimDelegationRewards.fromPartial(x),
  }),
};

export const registry = new Registry(<any>types);

export { msg, types, AllianceExtension, setupAllianceExtension };
