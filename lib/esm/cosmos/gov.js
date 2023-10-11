var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { createProtobufRpcClient, } from "@cosmjs/stargate";
import { longify } from "@cosmjs/stargate/build/queryclient";
import { PageRequest } from "cosmjs-types/cosmos/base/query/v1beta1/pagination";
import { QueryClientImpl, } from "cosmjs-types/cosmos/gov/v1/query";
export function setupGovExtension(base) {
    const rpc = createProtobufRpcClient(base);
    // Use this service to get easy typed access to query methods
    // This cannot be used for proof verification
    const queryService = new QueryClientImpl(rpc);
    return {
        gov: {
            params: (parametersType) => __awaiter(this, void 0, void 0, function* () {
                const response = yield queryService.Params({
                    paramsType: parametersType,
                });
                return response;
            }),
            proposal: (proposalId) => __awaiter(this, void 0, void 0, function* () {
                const response = yield queryService.Proposal({
                    proposalId: longify(proposalId),
                });
                return response;
            }),
            proposals: (proposalStatus, depositorAddress, voterAddress, pagination) => __awaiter(this, void 0, void 0, function* () {
                const response = yield queryService.Proposals({
                    proposalStatus,
                    depositor: depositorAddress,
                    voter: voterAddress,
                    pagination: pagination && PageRequest.fromPartial(pagination),
                });
                return response;
            }),
            deposit: (proposalId, depositorAddress) => __awaiter(this, void 0, void 0, function* () {
                const response = yield queryService.Deposit({
                    proposalId: longify(proposalId),
                    depositor: depositorAddress,
                });
                return response;
            }),
            deposits: (proposalId, pagination) => __awaiter(this, void 0, void 0, function* () {
                const response = yield queryService.Deposits({
                    proposalId: longify(proposalId),
                    pagination: pagination && PageRequest.fromPartial(pagination),
                });
                return response;
            }),
            vote: (proposalId, voterAddress) => __awaiter(this, void 0, void 0, function* () {
                const response = yield queryService.Vote({
                    proposalId: longify(proposalId),
                    voter: voterAddress,
                });
                return response;
            }),
            votes: (proposalId, pagination) => __awaiter(this, void 0, void 0, function* () {
                const response = yield queryService.Votes({
                    proposalId: longify(proposalId),
                    pagination: pagination && PageRequest.fromPartial(pagination),
                });
                return response;
            }),
            tally: (proposalId) => __awaiter(this, void 0, void 0, function* () {
                const response = yield queryService.TallyResult({
                    proposalId: longify(proposalId),
                });
                return response;
            }),
        },
    };
}
