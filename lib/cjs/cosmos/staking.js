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
exports.setupStakingExtension = void 0;
const stargate_1 = require("@cosmjs/stargate");
const queries_1 = require("@cosmjs/stargate/build/modules/staking/queries");
const pagination_1 = require("cosmjs-types/cosmos/base/query/v1beta1/pagination");
const query_1 = require("cosmjs-types/cosmos/staking/v1beta1/query");
function setupStakingExtension(base) {
    // Use this service to get easy typed access to query methods
    // This cannot be used for proof verification
    const rpc = (0, stargate_1.createProtobufRpcClient)(base);
    const queryService = new query_1.QueryClientImpl(rpc);
    return {
        staking: Object.assign(Object.assign({}, (0, queries_1.setupStakingExtension)(base).staking), { delegatorDelegations: (delegatorAddress, pagination) => __awaiter(this, void 0, void 0, function* () {
                const response = yield queryService.DelegatorDelegations({
                    delegatorAddr: delegatorAddress,
                    pagination: pagination && pagination_1.PageRequest.fromPartial(pagination),
                });
                return response;
            }), delegatorUnbondingDelegations: (delegatorAddress, pagination) => __awaiter(this, void 0, void 0, function* () {
                const response = yield queryService.DelegatorUnbondingDelegations({
                    delegatorAddr: delegatorAddress,
                    pagination: pagination && pagination_1.PageRequest.fromPartial(pagination),
                });
                return response;
            }), delegatorValidators: (delegatorAddress, pagination) => __awaiter(this, void 0, void 0, function* () {
                const response = yield queryService.DelegatorValidators({
                    delegatorAddr: delegatorAddress,
                    pagination: pagination && pagination_1.PageRequest.fromPartial(pagination),
                });
                return response;
            }), redelegations: (delegatorAddress, sourceValidatorAddress, destinationValidatorAddress, pagination) => __awaiter(this, void 0, void 0, function* () {
                const response = yield queryService.Redelegations({
                    delegatorAddr: delegatorAddress,
                    srcValidatorAddr: sourceValidatorAddress,
                    dstValidatorAddr: destinationValidatorAddress,
                    pagination: pagination && pagination_1.PageRequest.fromPartial(pagination),
                });
                return response;
            }), validatorDelegations: (validatorAddress, pagination) => __awaiter(this, void 0, void 0, function* () {
                const response = yield queryService.ValidatorDelegations({
                    validatorAddr: validatorAddress,
                    pagination: pagination && pagination_1.PageRequest.fromPartial(pagination),
                });
                return response;
            }), validators: (status, pagination) => __awaiter(this, void 0, void 0, function* () {
                const response = yield queryService.Validators({
                    status: status,
                    pagination: pagination && pagination_1.PageRequest.fromPartial(pagination),
                });
                return response;
            }), validatorUnbondingDelegations: (validatorAddress, pagination) => __awaiter(this, void 0, void 0, function* () {
                const response = yield queryService.ValidatorUnbondingDelegations({
                    validatorAddr: validatorAddress,
                    pagination: pagination && pagination_1.PageRequest.fromPartial(pagination),
                });
                return response;
            }) }),
    };
}
exports.setupStakingExtension = setupStakingExtension;
