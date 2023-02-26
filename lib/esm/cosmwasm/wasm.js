var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { setupWasmExtension } from "@cosmjs/cosmwasm-stargate";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryClientImpl, } from "cosmjs-types/cosmwasm/wasm/v1/query";
import Long from "long";
export function setupWasmExtensionExtended(base) {
    const rpc = createProtobufRpcClient(base);
    // Use this service to get easy typed access to query methods
    // This cannot be used for proof verification
    const queryService = new QueryClientImpl(rpc);
    return {
        wasm: Object.assign(Object.assign({}, setupWasmExtension(base).wasm), { listCodeInfo: (pageRequest) => __awaiter(this, void 0, void 0, function* () {
                const request = {
                    pagination: pageRequest,
                };
                return queryService.Codes(request);
            }), listContractsByCodeId: (id, pageRequest) => __awaiter(this, void 0, void 0, function* () {
                const request = {
                    codeId: Long.fromNumber(id),
                    pagination: pageRequest,
                };
                return queryService.ContractsByCode(request);
            }), getContractCodeHistory: (address, pageRequest) => __awaiter(this, void 0, void 0, function* () {
                const request = {
                    address: address,
                    pagination: pageRequest,
                };
                return queryService.ContractHistory(request);
            }), getAllContractState: (address, pageRequest) => __awaiter(this, void 0, void 0, function* () {
                const request = {
                    address: address,
                    pagination: pageRequest,
                };
                return queryService.AllContractState(request);
            }) }),
    };
}
