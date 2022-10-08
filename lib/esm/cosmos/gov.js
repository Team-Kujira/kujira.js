var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { createProtobufRpcClient, setupGovExtension as original, } from "@cosmjs/stargate";
import { longify } from "@cosmjs/stargate/build/queryclient";
import { QueryClientImpl, } from "cosmjs-types/cosmos/gov/v1beta1/query";
import { PageRequest } from "cosmjs-types/cosmos/base/query/v1beta1/pagination";
export function setupGovExtension(base) {
    const rpc = createProtobufRpcClient(base);
    // Use this service to get easy typed access to query methods
    // This cannot be used for proof verification
    const queryService = new QueryClientImpl(rpc);
    return {
        gov: Object.assign(Object.assign({}, original(base).gov), { proposals: (proposalStatus, depositorAddress, voterAddress, pagination) => __awaiter(this, void 0, void 0, function* () {
                const response = yield queryService.Proposals({
                    proposalStatus,
                    depositor: depositorAddress,
                    voter: voterAddress,
                    pagination: pagination && PageRequest.fromPartial(pagination),
                });
                return response;
            }), deposits: (proposalId, pagination) => __awaiter(this, void 0, void 0, function* () {
                const response = yield queryService.Deposits({
                    proposalId: longify(proposalId),
                    pagination: pagination && PageRequest.fromPartial(pagination),
                });
                return response;
            }), votes: (proposalId, pagination) => __awaiter(this, void 0, void 0, function* () {
                const response = yield queryService.Votes({
                    proposalId: longify(proposalId),
                    pagination: pagination && PageRequest.fromPartial(pagination),
                });
                return response;
            }) }),
    };
}
