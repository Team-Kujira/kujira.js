

import { Registry, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgSubmitProposal } from "./types/cosmos/gov/v1beta1/tx";
import { MsgVote } from "./types/cosmos/gov/v1beta1/tx";
import { MsgVoteWeighted } from "./types/cosmos/gov/v1beta1/tx";
import { MsgDeposit } from "./types/cosmos/gov/v1beta1/tx";

const types = [
  ["/cosmos.gov.v1beta1.MsgSubmitProposal", MsgSubmitProposal],
  ["/cosmos.gov.v1beta1.MsgVote", MsgVote],
  ["/cosmos.gov.v1beta1.MsgVoteWeighted", MsgVoteWeighted],
  ["/cosmos.gov.v1beta1.MsgDeposit", MsgDeposit],
];
export const MissingWalletError = new Error("wallet is required");

export const registry = new Registry(<any>types);

const txClient = {
  msgSubmitProposal: (data: MsgSubmitProposal): EncodeObject => ({
    typeUrl: "/cosmos.gov.v1beta1.MsgSubmitProposal",
    value: MsgSubmitProposal.fromPartial(data),
  }),
  msgVote: (data: MsgVote): EncodeObject => ({
    typeUrl: "/cosmos.gov.v1beta1.MsgVote",
    value: MsgVote.fromPartial(data),
  }),
  msgVoteWeighted: (data: MsgVoteWeighted): EncodeObject => ({
    typeUrl: "/cosmos.gov.v1beta1.MsgVoteWeighted",
    value: MsgVoteWeighted.fromPartial(data),
  }),
  msgDeposit: (data: MsgDeposit): EncodeObject => ({
    typeUrl: "/cosmos.gov.v1beta1.MsgDeposit",
    value: MsgDeposit.fromPartial(data),
  }),
};

export { types, txClient, Api };
