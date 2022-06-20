/* eslint-disable */
import { Proposal, Vote, VotingParams, DepositParams, TallyParams, Deposit, TallyResult, proposalStatusFromJSON, proposalStatusToJSON, } from "../../../cosmos/gov/v1beta1/gov";
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { PageRequest, PageResponse, } from "../../../cosmos/base/query/v1beta1/pagination";
export const protobufPackage = "cosmos.gov.v1beta1";
const baseQueryProposalRequest = { proposal_id: 0 };
export const QueryProposalRequest = {
    encode(message, writer = Writer.create()) {
        if (message.proposal_id !== 0) {
            writer.uint32(8).uint64(message.proposal_id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryProposalRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposal_id = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryProposalRequest);
        if (object.proposal_id !== undefined && object.proposal_id !== null) {
            message.proposal_id = Number(object.proposal_id);
        }
        else {
            message.proposal_id = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.proposal_id !== undefined &&
            (obj.proposal_id = message.proposal_id);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryProposalRequest);
        if (object.proposal_id !== undefined && object.proposal_id !== null) {
            message.proposal_id = object.proposal_id;
        }
        else {
            message.proposal_id = 0;
        }
        return message;
    },
};
const baseQueryProposalResponse = {};
export const QueryProposalResponse = {
    encode(message, writer = Writer.create()) {
        if (message.proposal !== undefined) {
            Proposal.encode(message.proposal, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryProposalResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposal = Proposal.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryProposalResponse);
        if (object.proposal !== undefined && object.proposal !== null) {
            message.proposal = Proposal.fromJSON(object.proposal);
        }
        else {
            message.proposal = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.proposal !== undefined &&
            (obj.proposal = message.proposal
                ? Proposal.toJSON(message.proposal)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryProposalResponse);
        if (object.proposal !== undefined && object.proposal !== null) {
            message.proposal = Proposal.fromPartial(object.proposal);
        }
        else {
            message.proposal = undefined;
        }
        return message;
    },
};
const baseQueryProposalsRequest = {
    proposal_status: 0,
    voter: "",
    depositor: "",
};
export const QueryProposalsRequest = {
    encode(message, writer = Writer.create()) {
        if (message.proposal_status !== 0) {
            writer.uint32(8).int32(message.proposal_status);
        }
        if (message.voter !== "") {
            writer.uint32(18).string(message.voter);
        }
        if (message.depositor !== "") {
            writer.uint32(26).string(message.depositor);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryProposalsRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposal_status = reader.int32();
                    break;
                case 2:
                    message.voter = reader.string();
                    break;
                case 3:
                    message.depositor = reader.string();
                    break;
                case 4:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryProposalsRequest);
        if (object.proposal_status !== undefined &&
            object.proposal_status !== null) {
            message.proposal_status = proposalStatusFromJSON(object.proposal_status);
        }
        else {
            message.proposal_status = 0;
        }
        if (object.voter !== undefined && object.voter !== null) {
            message.voter = String(object.voter);
        }
        else {
            message.voter = "";
        }
        if (object.depositor !== undefined && object.depositor !== null) {
            message.depositor = String(object.depositor);
        }
        else {
            message.depositor = "";
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.proposal_status !== undefined &&
            (obj.proposal_status = proposalStatusToJSON(message.proposal_status));
        message.voter !== undefined && (obj.voter = message.voter);
        message.depositor !== undefined && (obj.depositor = message.depositor);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryProposalsRequest);
        if (object.proposal_status !== undefined &&
            object.proposal_status !== null) {
            message.proposal_status = object.proposal_status;
        }
        else {
            message.proposal_status = 0;
        }
        if (object.voter !== undefined && object.voter !== null) {
            message.voter = object.voter;
        }
        else {
            message.voter = "";
        }
        if (object.depositor !== undefined && object.depositor !== null) {
            message.depositor = object.depositor;
        }
        else {
            message.depositor = "";
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryProposalsResponse = {};
export const QueryProposalsResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.proposals) {
            Proposal.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryProposalsResponse);
        message.proposals = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposals.push(Proposal.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryProposalsResponse);
        message.proposals = [];
        if (object.proposals !== undefined && object.proposals !== null) {
            for (const e of object.proposals) {
                message.proposals.push(Proposal.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.proposals) {
            obj.proposals = message.proposals.map((e) => e ? Proposal.toJSON(e) : undefined);
        }
        else {
            obj.proposals = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryProposalsResponse);
        message.proposals = [];
        if (object.proposals !== undefined && object.proposals !== null) {
            for (const e of object.proposals) {
                message.proposals.push(Proposal.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryVoteRequest = { proposal_id: 0, voter: "" };
export const QueryVoteRequest = {
    encode(message, writer = Writer.create()) {
        if (message.proposal_id !== 0) {
            writer.uint32(8).uint64(message.proposal_id);
        }
        if (message.voter !== "") {
            writer.uint32(18).string(message.voter);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryVoteRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposal_id = longToNumber(reader.uint64());
                    break;
                case 2:
                    message.voter = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryVoteRequest);
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
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.proposal_id !== undefined &&
            (obj.proposal_id = message.proposal_id);
        message.voter !== undefined && (obj.voter = message.voter);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryVoteRequest);
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
        return message;
    },
};
const baseQueryVoteResponse = {};
export const QueryVoteResponse = {
    encode(message, writer = Writer.create()) {
        if (message.vote !== undefined) {
            Vote.encode(message.vote, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryVoteResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.vote = Vote.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryVoteResponse);
        if (object.vote !== undefined && object.vote !== null) {
            message.vote = Vote.fromJSON(object.vote);
        }
        else {
            message.vote = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.vote !== undefined &&
            (obj.vote = message.vote ? Vote.toJSON(message.vote) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryVoteResponse);
        if (object.vote !== undefined && object.vote !== null) {
            message.vote = Vote.fromPartial(object.vote);
        }
        else {
            message.vote = undefined;
        }
        return message;
    },
};
const baseQueryVotesRequest = { proposal_id: 0 };
export const QueryVotesRequest = {
    encode(message, writer = Writer.create()) {
        if (message.proposal_id !== 0) {
            writer.uint32(8).uint64(message.proposal_id);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryVotesRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposal_id = longToNumber(reader.uint64());
                    break;
                case 2:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryVotesRequest);
        if (object.proposal_id !== undefined && object.proposal_id !== null) {
            message.proposal_id = Number(object.proposal_id);
        }
        else {
            message.proposal_id = 0;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.proposal_id !== undefined &&
            (obj.proposal_id = message.proposal_id);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryVotesRequest);
        if (object.proposal_id !== undefined && object.proposal_id !== null) {
            message.proposal_id = object.proposal_id;
        }
        else {
            message.proposal_id = 0;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryVotesResponse = {};
export const QueryVotesResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.votes) {
            Vote.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryVotesResponse);
        message.votes = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.votes.push(Vote.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryVotesResponse);
        message.votes = [];
        if (object.votes !== undefined && object.votes !== null) {
            for (const e of object.votes) {
                message.votes.push(Vote.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.votes) {
            obj.votes = message.votes.map((e) => (e ? Vote.toJSON(e) : undefined));
        }
        else {
            obj.votes = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryVotesResponse);
        message.votes = [];
        if (object.votes !== undefined && object.votes !== null) {
            for (const e of object.votes) {
                message.votes.push(Vote.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryParamsRequest = { params_type: "" };
export const QueryParamsRequest = {
    encode(message, writer = Writer.create()) {
        if (message.params_type !== "") {
            writer.uint32(10).string(message.params_type);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryParamsRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params_type = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryParamsRequest);
        if (object.params_type !== undefined && object.params_type !== null) {
            message.params_type = String(object.params_type);
        }
        else {
            message.params_type = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.params_type !== undefined &&
            (obj.params_type = message.params_type);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryParamsRequest);
        if (object.params_type !== undefined && object.params_type !== null) {
            message.params_type = object.params_type;
        }
        else {
            message.params_type = "";
        }
        return message;
    },
};
const baseQueryParamsResponse = {};
export const QueryParamsResponse = {
    encode(message, writer = Writer.create()) {
        if (message.voting_params !== undefined) {
            VotingParams.encode(message.voting_params, writer.uint32(10).fork()).ldelim();
        }
        if (message.deposit_params !== undefined) {
            DepositParams.encode(message.deposit_params, writer.uint32(18).fork()).ldelim();
        }
        if (message.tally_params !== undefined) {
            TallyParams.encode(message.tally_params, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryParamsResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.voting_params = VotingParams.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.deposit_params = DepositParams.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.tally_params = TallyParams.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryParamsResponse);
        if (object.voting_params !== undefined && object.voting_params !== null) {
            message.voting_params = VotingParams.fromJSON(object.voting_params);
        }
        else {
            message.voting_params = undefined;
        }
        if (object.deposit_params !== undefined && object.deposit_params !== null) {
            message.deposit_params = DepositParams.fromJSON(object.deposit_params);
        }
        else {
            message.deposit_params = undefined;
        }
        if (object.tally_params !== undefined && object.tally_params !== null) {
            message.tally_params = TallyParams.fromJSON(object.tally_params);
        }
        else {
            message.tally_params = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.voting_params !== undefined &&
            (obj.voting_params = message.voting_params
                ? VotingParams.toJSON(message.voting_params)
                : undefined);
        message.deposit_params !== undefined &&
            (obj.deposit_params = message.deposit_params
                ? DepositParams.toJSON(message.deposit_params)
                : undefined);
        message.tally_params !== undefined &&
            (obj.tally_params = message.tally_params
                ? TallyParams.toJSON(message.tally_params)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryParamsResponse);
        if (object.voting_params !== undefined && object.voting_params !== null) {
            message.voting_params = VotingParams.fromPartial(object.voting_params);
        }
        else {
            message.voting_params = undefined;
        }
        if (object.deposit_params !== undefined && object.deposit_params !== null) {
            message.deposit_params = DepositParams.fromPartial(object.deposit_params);
        }
        else {
            message.deposit_params = undefined;
        }
        if (object.tally_params !== undefined && object.tally_params !== null) {
            message.tally_params = TallyParams.fromPartial(object.tally_params);
        }
        else {
            message.tally_params = undefined;
        }
        return message;
    },
};
const baseQueryDepositRequest = { proposal_id: 0, depositor: "" };
export const QueryDepositRequest = {
    encode(message, writer = Writer.create()) {
        if (message.proposal_id !== 0) {
            writer.uint32(8).uint64(message.proposal_id);
        }
        if (message.depositor !== "") {
            writer.uint32(18).string(message.depositor);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryDepositRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposal_id = longToNumber(reader.uint64());
                    break;
                case 2:
                    message.depositor = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryDepositRequest);
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
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.proposal_id !== undefined &&
            (obj.proposal_id = message.proposal_id);
        message.depositor !== undefined && (obj.depositor = message.depositor);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryDepositRequest);
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
        return message;
    },
};
const baseQueryDepositResponse = {};
export const QueryDepositResponse = {
    encode(message, writer = Writer.create()) {
        if (message.deposit !== undefined) {
            Deposit.encode(message.deposit, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryDepositResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.deposit = Deposit.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryDepositResponse);
        if (object.deposit !== undefined && object.deposit !== null) {
            message.deposit = Deposit.fromJSON(object.deposit);
        }
        else {
            message.deposit = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.deposit !== undefined &&
            (obj.deposit = message.deposit
                ? Deposit.toJSON(message.deposit)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryDepositResponse);
        if (object.deposit !== undefined && object.deposit !== null) {
            message.deposit = Deposit.fromPartial(object.deposit);
        }
        else {
            message.deposit = undefined;
        }
        return message;
    },
};
const baseQueryDepositsRequest = { proposal_id: 0 };
export const QueryDepositsRequest = {
    encode(message, writer = Writer.create()) {
        if (message.proposal_id !== 0) {
            writer.uint32(8).uint64(message.proposal_id);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryDepositsRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposal_id = longToNumber(reader.uint64());
                    break;
                case 2:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryDepositsRequest);
        if (object.proposal_id !== undefined && object.proposal_id !== null) {
            message.proposal_id = Number(object.proposal_id);
        }
        else {
            message.proposal_id = 0;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.proposal_id !== undefined &&
            (obj.proposal_id = message.proposal_id);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryDepositsRequest);
        if (object.proposal_id !== undefined && object.proposal_id !== null) {
            message.proposal_id = object.proposal_id;
        }
        else {
            message.proposal_id = 0;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryDepositsResponse = {};
export const QueryDepositsResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.deposits) {
            Deposit.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryDepositsResponse);
        message.deposits = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.deposits.push(Deposit.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryDepositsResponse);
        message.deposits = [];
        if (object.deposits !== undefined && object.deposits !== null) {
            for (const e of object.deposits) {
                message.deposits.push(Deposit.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.deposits) {
            obj.deposits = message.deposits.map((e) => e ? Deposit.toJSON(e) : undefined);
        }
        else {
            obj.deposits = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryDepositsResponse);
        message.deposits = [];
        if (object.deposits !== undefined && object.deposits !== null) {
            for (const e of object.deposits) {
                message.deposits.push(Deposit.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryTallyResultRequest = { proposal_id: 0 };
export const QueryTallyResultRequest = {
    encode(message, writer = Writer.create()) {
        if (message.proposal_id !== 0) {
            writer.uint32(8).uint64(message.proposal_id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryTallyResultRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposal_id = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryTallyResultRequest);
        if (object.proposal_id !== undefined && object.proposal_id !== null) {
            message.proposal_id = Number(object.proposal_id);
        }
        else {
            message.proposal_id = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.proposal_id !== undefined &&
            (obj.proposal_id = message.proposal_id);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryTallyResultRequest);
        if (object.proposal_id !== undefined && object.proposal_id !== null) {
            message.proposal_id = object.proposal_id;
        }
        else {
            message.proposal_id = 0;
        }
        return message;
    },
};
const baseQueryTallyResultResponse = {};
export const QueryTallyResultResponse = {
    encode(message, writer = Writer.create()) {
        if (message.tally !== undefined) {
            TallyResult.encode(message.tally, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryTallyResultResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tally = TallyResult.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryTallyResultResponse);
        if (object.tally !== undefined && object.tally !== null) {
            message.tally = TallyResult.fromJSON(object.tally);
        }
        else {
            message.tally = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.tally !== undefined &&
            (obj.tally = message.tally
                ? TallyResult.toJSON(message.tally)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryTallyResultResponse);
        if (object.tally !== undefined && object.tally !== null) {
            message.tally = TallyResult.fromPartial(object.tally);
        }
        else {
            message.tally = undefined;
        }
        return message;
    },
};
export class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    Proposal(request) {
        const data = QueryProposalRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.gov.v1beta1.Query", "Proposal", data);
        return promise.then((data) => QueryProposalResponse.decode(new Reader(data)));
    }
    Proposals(request) {
        const data = QueryProposalsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.gov.v1beta1.Query", "Proposals", data);
        return promise.then((data) => QueryProposalsResponse.decode(new Reader(data)));
    }
    Vote(request) {
        const data = QueryVoteRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.gov.v1beta1.Query", "Vote", data);
        return promise.then((data) => QueryVoteResponse.decode(new Reader(data)));
    }
    Votes(request) {
        const data = QueryVotesRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.gov.v1beta1.Query", "Votes", data);
        return promise.then((data) => QueryVotesResponse.decode(new Reader(data)));
    }
    Params(request) {
        const data = QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.gov.v1beta1.Query", "Params", data);
        return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
    }
    Deposit(request) {
        const data = QueryDepositRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.gov.v1beta1.Query", "Deposit", data);
        return promise.then((data) => QueryDepositResponse.decode(new Reader(data)));
    }
    Deposits(request) {
        const data = QueryDepositsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.gov.v1beta1.Query", "Deposits", data);
        return promise.then((data) => QueryDepositsResponse.decode(new Reader(data)));
    }
    TallyResult(request) {
        const data = QueryTallyResultRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.gov.v1beta1.Query", "TallyResult", data);
        return promise.then((data) => QueryTallyResultResponse.decode(new Reader(data)));
    }
}
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
