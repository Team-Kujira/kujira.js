import { Registry, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgSubmitProposal } from "./types/cosmos/gov/v1beta1/tx";
import { MsgVote } from "./types/cosmos/gov/v1beta1/tx";
import { MsgVoteWeighted } from "./types/cosmos/gov/v1beta1/tx";
import { MsgDeposit } from "./types/cosmos/gov/v1beta1/tx";
declare const types: ((string | {
    encode(message: MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): MsgSubmitProposal;
    fromJSON(object: any): MsgSubmitProposal;
    toJSON(message: MsgSubmitProposal): unknown;
    fromPartial(object: {
        content?: {
            type_url?: string | undefined;
            value?: Uint8Array | undefined;
        } | undefined;
        initial_deposit?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
        proposer?: string | undefined;
    }): MsgSubmitProposal;
})[] | (string | {
    encode(message: MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): MsgVote;
    fromJSON(object: any): MsgVote;
    toJSON(message: MsgVote): unknown;
    fromPartial(object: {
        proposal_id?: number | undefined;
        voter?: string | undefined;
        option?: import("./types/cosmos/gov/v1beta1/gov").VoteOption | undefined;
    }): MsgVote;
})[] | (string | {
    encode(message: MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): MsgVoteWeighted;
    fromJSON(object: any): MsgVoteWeighted;
    toJSON(message: MsgVoteWeighted): unknown;
    fromPartial(object: {
        proposal_id?: number | undefined;
        voter?: string | undefined;
        options?: {
            option?: import("./types/cosmos/gov/v1beta1/gov").VoteOption | undefined;
            weight?: string | undefined;
        }[] | undefined;
    }): MsgVoteWeighted;
})[] | (string | {
    encode(message: MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): MsgDeposit;
    fromJSON(object: any): MsgDeposit;
    toJSON(message: MsgDeposit): unknown;
    fromPartial(object: {
        proposal_id?: number | undefined;
        depositor?: string | undefined;
        amount?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
    }): MsgDeposit;
})[])[];
export declare const MissingWalletError: Error;
export declare const registry: Registry;
declare const txClient: {
    msgSubmitProposal: (data: MsgSubmitProposal) => EncodeObject;
    msgVote: (data: MsgVote) => EncodeObject;
    msgVoteWeighted: (data: MsgVoteWeighted) => EncodeObject;
    msgDeposit: (data: MsgDeposit) => EncodeObject;
};
export { types, txClient, Api };
