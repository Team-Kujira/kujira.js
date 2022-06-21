"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = exports.protobufPackage = void 0;
const minimal_1 = require("protobufjs/minimal");
const types_1 = require("../../../../types");
const gov_1 = require("./gov");
exports.protobufPackage = "cosmos.gov.v1beta1";
const baseGenesisState = { starting_proposal_id: 0 };
exports.GenesisState = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.starting_proposal_id !== 0) {
            writer.uint32(8).uint64(message.starting_proposal_id);
        }
        for (const v of message.deposits) {
            gov_1.Deposit.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.votes) {
            gov_1.Vote.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.proposals) {
            gov_1.Proposal.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.deposit_params !== undefined) {
            gov_1.DepositParams.encode(message.deposit_params, writer.uint32(42).fork()).ldelim();
        }
        if (message.voting_params !== undefined) {
            gov_1.VotingParams.encode(message.voting_params, writer.uint32(50).fork()).ldelim();
        }
        if (message.tally_params !== undefined) {
            gov_1.TallyParams.encode(message.tally_params, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGenesisState);
        message.deposits = [];
        message.votes = [];
        message.proposals = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.starting_proposal_id = (0, types_1.longToNumber)(reader.uint64());
                    break;
                case 2:
                    message.deposits.push(gov_1.Deposit.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.votes.push(gov_1.Vote.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.proposals.push(gov_1.Proposal.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.deposit_params = gov_1.DepositParams.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.voting_params = gov_1.VotingParams.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.tally_params = gov_1.TallyParams.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGenesisState);
        message.deposits = [];
        message.votes = [];
        message.proposals = [];
        if (object.starting_proposal_id !== undefined &&
            object.starting_proposal_id !== null) {
            message.starting_proposal_id = Number(object.starting_proposal_id);
        }
        else {
            message.starting_proposal_id = 0;
        }
        if (object.deposits !== undefined && object.deposits !== null) {
            for (const e of object.deposits) {
                message.deposits.push(gov_1.Deposit.fromJSON(e));
            }
        }
        if (object.votes !== undefined && object.votes !== null) {
            for (const e of object.votes) {
                message.votes.push(gov_1.Vote.fromJSON(e));
            }
        }
        if (object.proposals !== undefined && object.proposals !== null) {
            for (const e of object.proposals) {
                message.proposals.push(gov_1.Proposal.fromJSON(e));
            }
        }
        if (object.deposit_params !== undefined && object.deposit_params !== null) {
            message.deposit_params = gov_1.DepositParams.fromJSON(object.deposit_params);
        }
        else {
            message.deposit_params = undefined;
        }
        if (object.voting_params !== undefined && object.voting_params !== null) {
            message.voting_params = gov_1.VotingParams.fromJSON(object.voting_params);
        }
        else {
            message.voting_params = undefined;
        }
        if (object.tally_params !== undefined && object.tally_params !== null) {
            message.tally_params = gov_1.TallyParams.fromJSON(object.tally_params);
        }
        else {
            message.tally_params = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.starting_proposal_id !== undefined &&
            (obj.starting_proposal_id = message.starting_proposal_id);
        if (message.deposits) {
            obj.deposits = message.deposits.map((e) => e ? gov_1.Deposit.toJSON(e) : undefined);
        }
        else {
            obj.deposits = [];
        }
        if (message.votes) {
            obj.votes = message.votes.map((e) => (e ? gov_1.Vote.toJSON(e) : undefined));
        }
        else {
            obj.votes = [];
        }
        if (message.proposals) {
            obj.proposals = message.proposals.map((e) => e ? gov_1.Proposal.toJSON(e) : undefined);
        }
        else {
            obj.proposals = [];
        }
        message.deposit_params !== undefined &&
            (obj.deposit_params = message.deposit_params
                ? gov_1.DepositParams.toJSON(message.deposit_params)
                : undefined);
        message.voting_params !== undefined &&
            (obj.voting_params = message.voting_params
                ? gov_1.VotingParams.toJSON(message.voting_params)
                : undefined);
        message.tally_params !== undefined &&
            (obj.tally_params = message.tally_params
                ? gov_1.TallyParams.toJSON(message.tally_params)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseGenesisState);
        message.deposits = [];
        message.votes = [];
        message.proposals = [];
        if (object.starting_proposal_id !== undefined &&
            object.starting_proposal_id !== null) {
            message.starting_proposal_id = object.starting_proposal_id;
        }
        else {
            message.starting_proposal_id = 0;
        }
        if (object.deposits !== undefined && object.deposits !== null) {
            for (const e of object.deposits) {
                message.deposits.push(gov_1.Deposit.fromPartial(e));
            }
        }
        if (object.votes !== undefined && object.votes !== null) {
            for (const e of object.votes) {
                message.votes.push(gov_1.Vote.fromPartial(e));
            }
        }
        if (object.proposals !== undefined && object.proposals !== null) {
            for (const e of object.proposals) {
                message.proposals.push(gov_1.Proposal.fromPartial(e));
            }
        }
        if (object.deposit_params !== undefined && object.deposit_params !== null) {
            message.deposit_params = gov_1.DepositParams.fromPartial(object.deposit_params);
        }
        else {
            message.deposit_params = undefined;
        }
        if (object.voting_params !== undefined && object.voting_params !== null) {
            message.voting_params = gov_1.VotingParams.fromPartial(object.voting_params);
        }
        else {
            message.voting_params = undefined;
        }
        if (object.tally_params !== undefined && object.tally_params !== null) {
            message.tally_params = gov_1.TallyParams.fromPartial(object.tally_params);
        }
        else {
            message.tally_params = undefined;
        }
        return message;
    },
};
