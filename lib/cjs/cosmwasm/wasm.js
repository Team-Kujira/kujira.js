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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupWasmExtensionExtended = void 0;
const cosmwasm_stargate_1 = require("@cosmjs/cosmwasm-stargate");
const stargate_1 = require("@cosmjs/stargate");
const query_1 = require("cosmjs-types/cosmwasm/wasm/v1/query");
const long_1 = __importDefault(require("long"));
function setupWasmExtensionExtended(base) {
    const rpc = (0, stargate_1.createProtobufRpcClient)(base);
    // Use this service to get easy typed access to query methods
    // This cannot be used for proof verification
    const queryService = new query_1.QueryClientImpl(rpc);
    return {
        wasm: Object.assign(Object.assign({}, (0, cosmwasm_stargate_1.setupWasmExtension)(base).wasm), { listCodeInfo: (pageRequest) => __awaiter(this, void 0, void 0, function* () {
                const request = {
                    pagination: pageRequest,
                };
                return queryService.Codes(request);
            }), listContractsByCodeId: (id, pageRequest) => __awaiter(this, void 0, void 0, function* () {
                const request = {
                    codeId: long_1.default.fromNumber(id),
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
exports.setupWasmExtensionExtended = setupWasmExtensionExtended;
