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
exports.setupBankExtensionExtended = void 0;
const stargate_1 = require("@cosmjs/stargate");
const query_1 = require("cosmjs-types/cosmos/bank/v1beta1/query");
require("text-encoding");
function setupBankExtensionExtended(base) {
    const rpc = (0, stargate_1.createProtobufRpcClient)(base);
    // Use this service to get easy typed access to query methods
    // This cannot be used for proof verification
    const queryService = new query_1.QueryClientImpl(rpc);
    return {
        bank: Object.assign(Object.assign({}, (0, stargate_1.setupBankExtension)(base).bank), { spendableBalances: (address) => __awaiter(this, void 0, void 0, function* () {
                const { balances } = yield queryService.SpendableBalances({
                    address: address,
                });
                return balances;
            }) }),
    };
}
exports.setupBankExtensionExtended = setupBankExtensionExtended;
