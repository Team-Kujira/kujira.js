var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { setupStakingExtension as original, } from "@cosmjs/stargate/build/modules/staking/queries";
import { PageRequest } from "cosmjs-types/cosmos/base/query/v1beta1/pagination";
import { QueryClientImpl } from "cosmjs-types/cosmos/staking/v1beta1/query";
export function setupStakingExtension(base) {
    // Use this service to get easy typed access to query methods
    // This cannot be used for proof verification
    const rpc = createProtobufRpcClient(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        staking: Object.assign(Object.assign({}, original(base).staking), { delegatorDelegations: (delegatorAddress, pagination) => __awaiter(this, void 0, void 0, function* () {
                const response = yield queryService.DelegatorDelegations({
                    delegatorAddr: delegatorAddress,
                    pagination: pagination && PageRequest.fromPartial(pagination),
                });
                return response;
            }), delegatorUnbondingDelegations: (delegatorAddress, pagination) => __awaiter(this, void 0, void 0, function* () {
                const response = yield queryService.DelegatorUnbondingDelegations({
                    delegatorAddr: delegatorAddress,
                    pagination: pagination && PageRequest.fromPartial(pagination),
                });
                return response;
            }), delegatorValidators: (delegatorAddress, pagination) => __awaiter(this, void 0, void 0, function* () {
                const response = yield queryService.DelegatorValidators({
                    delegatorAddr: delegatorAddress,
                    pagination: pagination && PageRequest.fromPartial(pagination),
                });
                return response;
            }), redelegations: (delegatorAddress, sourceValidatorAddress, destinationValidatorAddress, pagination) => __awaiter(this, void 0, void 0, function* () {
                const response = yield queryService.Redelegations({
                    delegatorAddr: delegatorAddress,
                    srcValidatorAddr: sourceValidatorAddress,
                    dstValidatorAddr: destinationValidatorAddress,
                    pagination: pagination && PageRequest.fromPartial(pagination),
                });
                return response;
            }), validatorDelegations: (validatorAddress, pagination) => __awaiter(this, void 0, void 0, function* () {
                const response = yield queryService.ValidatorDelegations({
                    validatorAddr: validatorAddress,
                    pagination: pagination && PageRequest.fromPartial(pagination),
                });
                return response;
            }), validators: (status, pagination) => __awaiter(this, void 0, void 0, function* () {
                const response = yield queryService.Validators({
                    status: status,
                    pagination: pagination && PageRequest.fromPartial(pagination),
                });
                return response;
            }), validatorUnbondingDelegations: (validatorAddress, pagination) => __awaiter(this, void 0, void 0, function* () {
                const response = yield queryService.ValidatorUnbondingDelegations({
                    validatorAddr: validatorAddress,
                    pagination: pagination && PageRequest.fromPartial(pagination),
                });
                return response;
            }) }),
    };
}
