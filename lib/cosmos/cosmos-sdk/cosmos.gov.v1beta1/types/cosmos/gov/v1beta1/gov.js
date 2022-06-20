/* eslint-disable */
import { Timestamp } from "../../../google/protobuf/timestamp";
import Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Any } from "../../../google/protobuf/any";
import { Duration } from "../../../google/protobuf/duration";
export const protobufPackage = "cosmos.gov.v1beta1";
/** VoteOption enumerates the valid vote options for a given governance proposal. */
export var VoteOption;
(function (VoteOption) {
    /** VOTE_OPTION_UNSPECIFIED - VOTE_OPTION_UNSPECIFIED defines a no-op vote option. */
    VoteOption[VoteOption["VOTE_OPTION_UNSPECIFIED"] = 0] = "VOTE_OPTION_UNSPECIFIED";
    /** VOTE_OPTION_YES - VOTE_OPTION_YES defines a yes vote option. */
    VoteOption[VoteOption["VOTE_OPTION_YES"] = 1] = "VOTE_OPTION_YES";
    /** VOTE_OPTION_ABSTAIN - VOTE_OPTION_ABSTAIN defines an abstain vote option. */
    VoteOption[VoteOption["VOTE_OPTION_ABSTAIN"] = 2] = "VOTE_OPTION_ABSTAIN";
    /** VOTE_OPTION_NO - VOTE_OPTION_NO defines a no vote option. */
    VoteOption[VoteOption["VOTE_OPTION_NO"] = 3] = "VOTE_OPTION_NO";
    /** VOTE_OPTION_NO_WITH_VETO - VOTE_OPTION_NO_WITH_VETO defines a no with veto vote option. */
    VoteOption[VoteOption["VOTE_OPTION_NO_WITH_VETO"] = 4] = "VOTE_OPTION_NO_WITH_VETO";
    VoteOption[VoteOption["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(VoteOption || (VoteOption = {}));
export function voteOptionFromJSON(object) {
    switch (object) {
        case 0:
        case "VOTE_OPTION_UNSPECIFIED":
            return VoteOption.VOTE_OPTION_UNSPECIFIED;
        case 1:
        case "VOTE_OPTION_YES":
            return VoteOption.VOTE_OPTION_YES;
        case 2:
        case "VOTE_OPTION_ABSTAIN":
            return VoteOption.VOTE_OPTION_ABSTAIN;
        case 3:
        case "VOTE_OPTION_NO":
            return VoteOption.VOTE_OPTION_NO;
        case 4:
        case "VOTE_OPTION_NO_WITH_VETO":
            return VoteOption.VOTE_OPTION_NO_WITH_VETO;
        case -1:
        case "UNRECOGNIZED":
        default:
            return VoteOption.UNRECOGNIZED;
    }
}
export function voteOptionToJSON(object) {
    switch (object) {
        case VoteOption.VOTE_OPTION_UNSPECIFIED:
            return "VOTE_OPTION_UNSPECIFIED";
        case VoteOption.VOTE_OPTION_YES:
            return "VOTE_OPTION_YES";
        case VoteOption.VOTE_OPTION_ABSTAIN:
            return "VOTE_OPTION_ABSTAIN";
        case VoteOption.VOTE_OPTION_NO:
            return "VOTE_OPTION_NO";
        case VoteOption.VOTE_OPTION_NO_WITH_VETO:
            return "VOTE_OPTION_NO_WITH_VETO";
        default:
            return "UNKNOWN";
    }
}
/** ProposalStatus enumerates the valid statuses of a proposal. */
export var ProposalStatus;
(function (ProposalStatus) {
    /** PROPOSAL_STATUS_UNSPECIFIED - PROPOSAL_STATUS_UNSPECIFIED defines the default propopsal status. */
    ProposalStatus[ProposalStatus["PROPOSAL_STATUS_UNSPECIFIED"] = 0] = "PROPOSAL_STATUS_UNSPECIFIED";
    /**
     * PROPOSAL_STATUS_DEPOSIT_PERIOD - PROPOSAL_STATUS_DEPOSIT_PERIOD defines a proposal status during the deposit
     * period.
     */
    ProposalStatus[ProposalStatus["PROPOSAL_STATUS_DEPOSIT_PERIOD"] = 1] = "PROPOSAL_STATUS_DEPOSIT_PERIOD";
    /**
     * PROPOSAL_STATUS_VOTING_PERIOD - PROPOSAL_STATUS_VOTING_PERIOD defines a proposal status during the voting
     * period.
     */
    ProposalStatus[ProposalStatus["PROPOSAL_STATUS_VOTING_PERIOD"] = 2] = "PROPOSAL_STATUS_VOTING_PERIOD";
    /**
     * PROPOSAL_STATUS_PASSED - PROPOSAL_STATUS_PASSED defines a proposal status of a proposal that has
     * passed.
     */
    ProposalStatus[ProposalStatus["PROPOSAL_STATUS_PASSED"] = 3] = "PROPOSAL_STATUS_PASSED";
    /**
     * PROPOSAL_STATUS_REJECTED - PROPOSAL_STATUS_REJECTED defines a proposal status of a proposal that has
     * been rejected.
     */
    ProposalStatus[ProposalStatus["PROPOSAL_STATUS_REJECTED"] = 4] = "PROPOSAL_STATUS_REJECTED";
    /**
     * PROPOSAL_STATUS_FAILED - PROPOSAL_STATUS_FAILED defines a proposal status of a proposal that has
     * failed.
     */
    ProposalStatus[ProposalStatus["PROPOSAL_STATUS_FAILED"] = 5] = "PROPOSAL_STATUS_FAILED";
    ProposalStatus[ProposalStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ProposalStatus || (ProposalStatus = {}));
export function proposalStatusFromJSON(object) {
    switch (object) {
        case 0:
        case "PROPOSAL_STATUS_UNSPECIFIED":
            return ProposalStatus.PROPOSAL_STATUS_UNSPECIFIED;
        case 1:
        case "PROPOSAL_STATUS_DEPOSIT_PERIOD":
            return ProposalStatus.PROPOSAL_STATUS_DEPOSIT_PERIOD;
        case 2:
        case "PROPOSAL_STATUS_VOTING_PERIOD":
            return ProposalStatus.PROPOSAL_STATUS_VOTING_PERIOD;
        case 3:
        case "PROPOSAL_STATUS_PASSED":
            return ProposalStatus.PROPOSAL_STATUS_PASSED;
        case 4:
        case "PROPOSAL_STATUS_REJECTED":
            return ProposalStatus.PROPOSAL_STATUS_REJECTED;
        case 5:
        case "PROPOSAL_STATUS_FAILED":
            return ProposalStatus.PROPOSAL_STATUS_FAILED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ProposalStatus.UNRECOGNIZED;
    }
}
export function proposalStatusToJSON(object) {
    switch (object) {
        case ProposalStatus.PROPOSAL_STATUS_UNSPECIFIED:
            return "PROPOSAL_STATUS_UNSPECIFIED";
        case ProposalStatus.PROPOSAL_STATUS_DEPOSIT_PERIOD:
            return "PROPOSAL_STATUS_DEPOSIT_PERIOD";
        case ProposalStatus.PROPOSAL_STATUS_VOTING_PERIOD:
            return "PROPOSAL_STATUS_VOTING_PERIOD";
        case ProposalStatus.PROPOSAL_STATUS_PASSED:
            return "PROPOSAL_STATUS_PASSED";
        case ProposalStatus.PROPOSAL_STATUS_REJECTED:
            return "PROPOSAL_STATUS_REJECTED";
        case ProposalStatus.PROPOSAL_STATUS_FAILED:
            return "PROPOSAL_STATUS_FAILED";
        default:
            return "UNKNOWN";
    }
}
const baseWeightedVoteOption = { option: 0, weight: "" };
export const WeightedVoteOption = {
    encode(message, writer = Writer.create()) {
        if (message.option !== 0) {
            writer.uint32(8).int32(message.option);
        }
        if (message.weight !== "") {
            writer.uint32(18).string(message.weight);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseWeightedVoteOption);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.option = reader.int32();
                    break;
                case 2:
                    message.weight = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseWeightedVoteOption);
        if (object.option !== undefined && object.option !== null) {
            message.option = voteOptionFromJSON(object.option);
        }
        else {
            message.option = 0;
        }
        if (object.weight !== undefined && object.weight !== null) {
            message.weight = String(object.weight);
        }
        else {
            message.weight = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.option !== undefined &&
            (obj.option = voteOptionToJSON(message.option));
        message.weight !== undefined && (obj.weight = message.weight);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseWeightedVoteOption);
        if (object.option !== undefined && object.option !== null) {
            message.option = object.option;
        }
        else {
            message.option = 0;
        }
        if (object.weight !== undefined && object.weight !== null) {
            message.weight = object.weight;
        }
        else {
            message.weight = "";
        }
        return message;
    },
};
const baseTextProposal = { title: "", description: "" };
export const TextProposal = {
    encode(message, writer = Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseTextProposal);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseTextProposal);
        if (object.title !== undefined && object.title !== null) {
            message.title = String(object.title);
        }
        else {
            message.title = "";
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = String(object.description);
        }
        else {
            message.description = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined &&
            (obj.description = message.description);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseTextProposal);
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        else {
            message.title = "";
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        else {
            message.description = "";
        }
        return message;
    },
};
const baseDeposit = { proposal_id: 0, depositor: "" };
export const Deposit = {
    encode(message, writer = Writer.create()) {
        if (message.proposal_id !== 0) {
            writer.uint32(8).uint64(message.proposal_id);
        }
        if (message.depositor !== "") {
            writer.uint32(18).string(message.depositor);
        }
        for (const v of message.amount) {
            Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeposit);
        message.amount = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposal_id = longToNumber(reader.uint64());
                    break;
                case 2:
                    message.depositor = reader.string();
                    break;
                case 3:
                    message.amount.push(Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeposit);
        message.amount = [];
        if (object.proposal_id !== undefined && object.proposal_id !== null) {
            message.proposal_id = Number(object.proposal_id);
        }
        else {
            message.proposal_id = 0;
        }
        if (object.depositor !== undefined && object.depositor !== null) {
            message.depositor = String(object.depositor);
        }
        else {
            message.depositor = "";
        }
        if (object.amount !== undefined && object.amount !== null) {
            for (const e of object.amount) {
                message.amount.push(Coin.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.proposal_id !== undefined &&
            (obj.proposal_id = message.proposal_id);
        message.depositor !== undefined && (obj.depositor = message.depositor);
        if (message.amount) {
            obj.amount = message.amount.map((e) => (e ? Coin.toJSON(e) : undefined));
        }
        else {
            obj.amount = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseDeposit);
        message.amount = [];
        if (object.proposal_id !== undefined && object.proposal_id !== null) {
            message.proposal_id = object.proposal_id;
        }
        else {
            message.proposal_id = 0;
        }
        if (object.depositor !== undefined && object.depositor !== null) {
            message.depositor = object.depositor;
        }
        else {
            message.depositor = "";
        }
        if (object.amount !== undefined && object.amount !== null) {
            for (const e of object.amount) {
                message.amount.push(Coin.fromPartial(e));
            }
        }
        return message;
    },
};
const baseProposal = { proposal_id: 0, status: 0 };
export const Proposal = {
    encode(message, writer = Writer.create()) {
        if (message.proposal_id !== 0) {
            writer.uint32(8).uint64(message.proposal_id);
        }
        if (message.content !== undefined) {
            Any.encode(message.content, writer.uint32(18).fork()).ldelim();
        }
        if (message.status !== 0) {
            writer.uint32(24).int32(message.status);
        }
        if (message.final_tally_result !== undefined) {
            TallyResult.encode(message.final_tally_result, writer.uint32(34).fork()).ldelim();
        }
        if (message.submit_time !== undefined) {
            Timestamp.encode(toTimestamp(message.submit_time), writer.uint32(42).fork()).ldelim();
        }
        if (message.deposit_end_time !== undefined) {
            Timestamp.encode(toTimestamp(message.deposit_end_time), writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.total_deposit) {
            Coin.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.voting_start_time !== undefined) {
            Timestamp.encode(toTimestamp(message.voting_start_time), writer.uint32(66).fork()).ldelim();
        }
        if (message.voting_end_time !== undefined) {
            Timestamp.encode(toTimestamp(message.voting_end_time), writer.uint32(74).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseProposal);
        message.total_deposit = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposal_id = longToNumber(reader.uint64());
                    break;
                case 2:
                    message.content = Any.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.status = reader.int32();
                    break;
                case 4:
                    message.final_tally_result = TallyResult.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.submit_time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.deposit_end_time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.total_deposit.push(Coin.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.voting_start_time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.voting_end_time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseProposal);
        message.total_deposit = [];
        if (object.proposal_id !== undefined && object.proposal_id !== null) {
            message.proposal_id = Number(object.proposal_id);
        }
        else {
            message.proposal_id = 0;
        }
        if (object.content !== undefined && object.content !== null) {
            message.content = Any.fromJSON(object.content);
        }
        else {
            message.content = undefined;
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = proposalStatusFromJSON(object.status);
        }
        else {
            message.status = 0;
        }
        if (object.final_tally_result !== undefined &&
            object.final_tally_result !== null) {
            message.final_tally_result = TallyResult.fromJSON(object.final_tally_result);
        }
        else {
            message.final_tally_result = undefined;
        }
        if (object.submit_time !== undefined && object.submit_time !== null) {
            message.submit_time = fromJsonTimestamp(object.submit_time);
        }
        else {
            message.submit_time = undefined;
        }
        if (object.deposit_end_time !== undefined &&
            object.deposit_end_time !== null) {
            message.deposit_end_time = fromJsonTimestamp(object.deposit_end_time);
        }
        else {
            message.deposit_end_time = undefined;
        }
        if (object.total_deposit !== undefined && object.total_deposit !== null) {
            for (const e of object.total_deposit) {
                message.total_deposit.push(Coin.fromJSON(e));
            }
        }
        if (object.voting_start_time !== undefined &&
            object.voting_start_time !== null) {
            message.voting_start_time = fromJsonTimestamp(object.voting_start_time);
        }
        else {
            message.voting_start_time = undefined;
        }
        if (object.voting_end_time !== undefined &&
            object.voting_end_time !== null) {
            message.voting_end_time = fromJsonTimestamp(object.voting_end_time);
        }
        else {
            message.voting_end_time = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.proposal_id !== undefined &&
            (obj.proposal_id = message.proposal_id);
        message.content !== undefined &&
            (obj.content = message.content ? Any.toJSON(message.content) : undefined);
        message.status !== undefined &&
            (obj.status = proposalStatusToJSON(message.status));
        message.final_tally_result !== undefined &&
            (obj.final_tally_result = message.final_tally_result
                ? TallyResult.toJSON(message.final_tally_result)
                : undefined);
        message.submit_time !== undefined &&
            (obj.submit_time =
                message.submit_time !== undefined
                    ? message.submit_time.toISOString()
                    : null);
        message.deposit_end_time !== undefined &&
            (obj.deposit_end_time =
                message.deposit_end_time !== undefined
                    ? message.deposit_end_time.toISOString()
                    : null);
        if (message.total_deposit) {
            obj.total_deposit = message.total_deposit.map((e) => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.total_deposit = [];
        }
        message.voting_start_time !== undefined &&
            (obj.voting_start_time =
                message.voting_start_time !== undefined
                    ? message.voting_start_time.toISOString()
                    : null);
        message.voting_end_time !== undefined &&
            (obj.voting_end_time =
                message.voting_end_time !== undefined
                    ? message.voting_end_time.toISOString()
                    : null);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseProposal);
        message.total_deposit = [];
        if (object.proposal_id !== undefined && object.proposal_id !== null) {
            message.proposal_id = object.proposal_id;
        }
        else {
            message.proposal_id = 0;
        }
        if (object.content !== undefined && object.content !== null) {
            message.content = Any.fromPartial(object.content);
        }
        else {
            message.content = undefined;
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
        }
        else {
            message.status = 0;
        }
        if (object.final_tally_result !== undefined &&
            object.final_tally_result !== null) {
            message.final_tally_result = TallyResult.fromPartial(object.final_tally_result);
        }
        else {
            message.final_tally_result = undefined;
        }
        if (object.submit_time !== undefined && object.submit_time !== null) {
            message.submit_time = object.submit_time;
        }
        else {
            message.submit_time = undefined;
        }
        if (object.deposit_end_time !== undefined &&
            object.deposit_end_time !== null) {
            message.deposit_end_time = object.deposit_end_time;
        }
        else {
            message.deposit_end_time = undefined;
        }
        if (object.total_deposit !== undefined && object.total_deposit !== null) {
            for (const e of object.total_deposit) {
                message.total_deposit.push(Coin.fromPartial(e));
            }
        }
        if (object.voting_start_time !== undefined &&
            object.voting_start_time !== null) {
            message.voting_start_time = object.voting_start_time;
        }
        else {
            message.voting_start_time = undefined;
        }
        if (object.voting_end_time !== undefined &&
            object.voting_end_time !== null) {
            message.voting_end_time = object.voting_end_time;
        }
        else {
            message.voting_end_time = undefined;
        }
        return message;
    },
};
const baseTallyResult = {
    yes: "",
    abstain: "",
    no: "",
    no_with_veto: "",
};
export const TallyResult = {
    encode(message, writer = Writer.create()) {
        if (message.yes !== "") {
            writer.uint32(10).string(message.yes);
        }
        if (message.abstain !== "") {
            writer.uint32(18).string(message.abstain);
        }
        if (message.no !== "") {
            writer.uint32(26).string(message.no);
        }
        if (message.no_with_veto !== "") {
            writer.uint32(34).string(message.no_with_veto);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseTallyResult);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.yes = reader.string();
                    break;
                case 2:
                    message.abstain = reader.string();
                    break;
                case 3:
                    message.no = reader.string();
                    break;
                case 4:
                    message.no_with_veto = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseTallyResult);
        if (object.yes !== undefined && object.yes !== null) {
            message.yes = String(object.yes);
        }
        else {
            message.yes = "";
        }
        if (object.abstain !== undefined && object.abstain !== null) {
            message.abstain = String(object.abstain);
        }
        else {
            message.abstain = "";
        }
        if (object.no !== undefined && object.no !== null) {
            message.no = String(object.no);
        }
        else {
            message.no = "";
        }
        if (object.no_with_veto !== undefined && object.no_with_veto !== null) {
            message.no_with_veto = String(object.no_with_veto);
        }
        else {
            message.no_with_veto = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.yes !== undefined && (obj.yes = message.yes);
        message.abstain !== undefined && (obj.abstain = message.abstain);
        message.no !== undefined && (obj.no = message.no);
        message.no_with_veto !== undefined &&
            (obj.no_with_veto = message.no_with_veto);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseTallyResult);
        if (object.yes !== undefined && object.yes !== null) {
            message.yes = object.yes;
        }
        else {
            message.yes = "";
        }
        if (object.abstain !== undefined && object.abstain !== null) {
            message.abstain = object.abstain;
        }
        else {
            message.abstain = "";
        }
        if (object.no !== undefined && object.no !== null) {
            message.no = object.no;
        }
        else {
            message.no = "";
        }
        if (object.no_with_veto !== undefined && object.no_with_veto !== null) {
            message.no_with_veto = object.no_with_veto;
        }
        else {
            message.no_with_veto = "";
        }
        return message;
    },
};
const baseVote = { proposal_id: 0, voter: "", option: 0 };
export const Vote = {
    encode(message, writer = Writer.create()) {
        if (message.proposal_id !== 0) {
            writer.uint32(8).uint64(message.proposal_id);
        }
        if (message.voter !== "") {
            writer.uint32(18).string(message.voter);
        }
        if (message.option !== 0) {
            writer.uint32(24).int32(message.option);
        }
        for (const v of message.options) {
            WeightedVoteOption.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseVote);
        message.options = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposal_id = longToNumber(reader.uint64());
                    break;
                case 2:
                    message.voter = reader.string();
                    break;
                case 3:
                    message.option = reader.int32();
                    break;
                case 4:
                    message.options.push(WeightedVoteOption.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseVote);
        message.options = [];
        if (object.proposal_id !== undefined && object.proposal_id !== null) {
            message.proposal_id = Number(object.proposal_id);
        }
        else {
            message.proposal_id = 0;
        }
        if (object.voter !== undefined && object.voter !== null) {
            message.voter = String(object.voter);
        }
        else {
            message.voter = "";
        }
        if (object.option !== undefined && object.option !== null) {
            message.option = voteOptionFromJSON(object.option);
        }
        else {
            message.option = 0;
        }
        if (object.options !== undefined && object.options !== null) {
            for (const e of object.options) {
                message.options.push(WeightedVoteOption.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.proposal_id !== undefined &&
            (obj.proposal_id = message.proposal_id);
        message.voter !== undefined && (obj.voter = message.voter);
        message.option !== undefined &&
            (obj.option = voteOptionToJSON(message.option));
        if (message.options) {
            obj.options = message.options.map((e) => e ? WeightedVoteOption.toJSON(e) : undefined);
        }
        else {
            obj.options = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseVote);
        message.options = [];
        if (object.proposal_id !== undefined && object.proposal_id !== null) {
            message.proposal_id = object.proposal_id;
        }
        else {
            message.proposal_id = 0;
        }
        if (object.voter !== undefined && object.voter !== null) {
            message.voter = object.voter;
        }
        else {
            message.voter = "";
        }
        if (object.option !== undefined && object.option !== null) {
            message.option = object.option;
        }
        else {
            message.option = 0;
        }
        if (object.options !== undefined && object.options !== null) {
            for (const e of object.options) {
                message.options.push(WeightedVoteOption.fromPartial(e));
            }
        }
        return message;
    },
};
const baseDepositParams = {};
export const DepositParams = {
    encode(message, writer = Writer.create()) {
        for (const v of message.min_deposit) {
            Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.max_deposit_period !== undefined) {
            Duration.encode(message.max_deposit_period, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDepositParams);
        message.min_deposit = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.min_deposit.push(Coin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.max_deposit_period = Duration.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDepositParams);
        message.min_deposit = [];
        if (object.min_deposit !== undefined && object.min_deposit !== null) {
            for (const e of object.min_deposit) {
                message.min_deposit.push(Coin.fromJSON(e));
            }
        }
        if (object.max_deposit_period !== undefined &&
            object.max_deposit_period !== null) {
            message.max_deposit_period = Duration.fromJSON(object.max_deposit_period);
        }
        else {
            message.max_deposit_period = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.min_deposit) {
            obj.min_deposit = message.min_deposit.map((e) => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.min_deposit = [];
        }
        message.max_deposit_period !== undefined &&
            (obj.max_deposit_period = message.max_deposit_period
                ? Duration.toJSON(message.max_deposit_period)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseDepositParams);
        message.min_deposit = [];
        if (object.min_deposit !== undefined && object.min_deposit !== null) {
            for (const e of object.min_deposit) {
                message.min_deposit.push(Coin.fromPartial(e));
            }
        }
        if (object.max_deposit_period !== undefined &&
            object.max_deposit_period !== null) {
            message.max_deposit_period = Duration.fromPartial(object.max_deposit_period);
        }
        else {
            message.max_deposit_period = undefined;
        }
        return message;
    },
};
const baseVotingParams = {};
export const VotingParams = {
    encode(message, writer = Writer.create()) {
        if (message.voting_period !== undefined) {
            Duration.encode(message.voting_period, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseVotingParams);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.voting_period = Duration.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseVotingParams);
        if (object.voting_period !== undefined && object.voting_period !== null) {
            message.voting_period = Duration.fromJSON(object.voting_period);
        }
        else {
            message.voting_period = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.voting_period !== undefined &&
            (obj.voting_period = message.voting_period
                ? Duration.toJSON(message.voting_period)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseVotingParams);
        if (object.voting_period !== undefined && object.voting_period !== null) {
            message.voting_period = Duration.fromPartial(object.voting_period);
        }
        else {
            message.voting_period = undefined;
        }
        return message;
    },
};
const baseTallyParams = {};
export const TallyParams = {
    encode(message, writer = Writer.create()) {
        if (message.quorum.length !== 0) {
            writer.uint32(10).bytes(message.quorum);
        }
        if (message.threshold.length !== 0) {
            writer.uint32(18).bytes(message.threshold);
        }
        if (message.veto_threshold.length !== 0) {
            writer.uint32(26).bytes(message.veto_threshold);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseTallyParams);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.quorum = reader.bytes();
                    break;
                case 2:
                    message.threshold = reader.bytes();
                    break;
                case 3:
                    message.veto_threshold = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseTallyParams);
        if (object.quorum !== undefined && object.quorum !== null) {
            message.quorum = bytesFromBase64(object.quorum);
        }
        if (object.threshold !== undefined && object.threshold !== null) {
            message.threshold = bytesFromBase64(object.threshold);
        }
        if (object.veto_threshold !== undefined && object.veto_threshold !== null) {
            message.veto_threshold = bytesFromBase64(object.veto_threshold);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.quorum !== undefined &&
            (obj.quorum = base64FromBytes(message.quorum !== undefined ? message.quorum : new Uint8Array()));
        message.threshold !== undefined &&
            (obj.threshold = base64FromBytes(message.threshold !== undefined ? message.threshold : new Uint8Array()));
        message.veto_threshold !== undefined &&
            (obj.veto_threshold = base64FromBytes(message.veto_threshold !== undefined
                ? message.veto_threshold
                : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseTallyParams);
        if (object.quorum !== undefined && object.quorum !== null) {
            message.quorum = object.quorum;
        }
        else {
            message.quorum = new Uint8Array();
        }
        if (object.threshold !== undefined && object.threshold !== null) {
            message.threshold = object.threshold;
        }
        else {
            message.threshold = new Uint8Array();
        }
        if (object.veto_threshold !== undefined && object.veto_threshold !== null) {
            message.veto_threshold = object.veto_threshold;
        }
        else {
            message.veto_threshold = new Uint8Array();
        }
        return message;
    },
};
var globalThis = (() => {
    if (typeof globalThis !== "undefined")
        return globalThis;
    if (typeof self !== "undefined")
        return self;
    if (typeof window !== "undefined")
        return window;
    if (typeof global !== "undefined")
        return global;
    throw "Unable to locate global object";
})();
const atob = globalThis.atob ||
    ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64) {
    const bin = atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
        arr[i] = bin.charCodeAt(i);
    }
    return arr;
}
const btoa = globalThis.btoa ||
    ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr) {
    const bin = [];
    for (let i = 0; i < arr.byteLength; ++i) {
        bin.push(String.fromCharCode(arr[i]));
    }
    return btoa(bin.join(""));
}
function toTimestamp(date) {
    const seconds = date.getTime() / 1000;
    const nanos = (date.getTime() % 1000) * 1000000;
    return { seconds, nanos };
}
function fromTimestamp(t) {
    let millis = t.seconds * 1000;
    millis += t.nanos / 1000000;
    return new Date(millis);
}
function fromJsonTimestamp(o) {
    if (o instanceof Date) {
        return o;
    }
    else if (typeof o === "string") {
        return new Date(o);
    }
    else {
        return fromTimestamp(Timestamp.fromJSON(o));
    }
}
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
    }
    return long.toNumber();
}
if (util.Long !== Long) {
    util.Long = Long;
    configure();
}
