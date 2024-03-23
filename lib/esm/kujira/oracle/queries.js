var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { assert } from "@cosmjs/utils";
import { QueryClientImpl, } from "./types/query";
import { createProtobufRpcClient } from "@cosmjs/stargate";
export function setupOracleExtension(base) {
    const rpc = createProtobufRpcClient(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        oracle: {
            params: () => __awaiter(this, void 0, void 0, function* () {
                const { params } = yield queryService.Params({});
                assert(params);
                return params;
            }),
            exchangeRate: (denom) => __awaiter(this, void 0, void 0, function* () { return queryService.ExchangeRate({ denom }); }),
            exchangeRates: () => __awaiter(this, void 0, void 0, function* () { return queryService.ExchangeRates({}); }),
            actives: () => __awaiter(this, void 0, void 0, function* () { return queryService.Actives({}); }),
            feederDelegation: (validator_addr) => __awaiter(this, void 0, void 0, function* () { return queryService.FeederDelegation({ validator_addr }); }),
            missCounter: (validator_addr) => __awaiter(this, void 0, void 0, function* () { return queryService.MissCounter({ validator_addr }); }),
            aggregatePrevote: (validator_addr) => __awaiter(this, void 0, void 0, function* () { return queryService.AggregatePrevote({ validator_addr }); }),
            aggregatePrevotes: () => __awaiter(this, void 0, void 0, function* () { return queryService.AggregatePrevotes({}); }),
            aggregateVote: (validator_addr) => __awaiter(this, void 0, void 0, function* () { return queryService.AggregateVote({ validator_addr }); }),
            aggregateVotes: () => __awaiter(this, void 0, void 0, function* () { return queryService.AggregateVotes({}); }),
        },
    };
}
