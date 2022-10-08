"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupGovExtension = void 0;
const stargate_1 = require("@cosmjs/stargate");
const queryclient_1 = require("@cosmjs/stargate/build/queryclient");
const query_1 = require("cosmjs-types/cosmos/gov/v1beta1/query");
const pagination_1 = require("cosmjs-types/cosmos/base/query/v1beta1/pagination");
function setupGovExtension(base) {
    const rpc = (0, stargate_1.createProtobufRpcClient)(base);
    // Use this service to get easy typed access to query methods
    // This cannot be used for proof verification
    const queryService = new query_1.QueryClientImpl(rpc);
    return {
        gov: Object.assign(Object.assign({}, (0, stargate_1.setupGovExtension)(base).gov), { proposals: (proposalStatus, depositorAddress, voterAddress, pagination) => __awaiter(this, void 0, void 0, function* () {
                const response = yield queryService.Proposals({
                    proposalStatus,
                    depositor: depositorAddress,
                    voter: voterAddress,
                    pagination: pagination && pagination_1.PageRequest.fromPartial(pagination),
                });
                return response;
            }), deposits: (proposalId, pagination) => __awaiter(this, void 0, void 0, function* () {
                const response = yield queryService.Deposits({
                    proposalId: (0, queryclient_1.longify)(proposalId),
                    pagination: pagination && pagination_1.PageRequest.fromPartial(pagination),
                });
                return response;
            }), votes: (proposalId, pagination) => __awaiter(this, void 0, void 0, function* () {
                const response = yield queryService.Votes({
                    proposalId: (0, queryclient_1.longify)(proposalId),
                    pagination: pagination && pagination_1.PageRequest.fromPartial(pagination),
                });
                return response;
            }) }),
    };
}
exports.setupGovExtension = setupGovExtension;
