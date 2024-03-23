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
import { QueryClientImpl } from "./types/query";
import { createPagination, createProtobufRpcClient, } from "@cosmjs/stargate";
export function setupSchedulerExtension(base) {
    const rpc = createProtobufRpcClient(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        scheduler: {
            params: () => __awaiter(this, void 0, void 0, function* () {
                const { params } = yield queryService.Params({});
                assert(params);
                return params;
            }),
            hook: (id) => __awaiter(this, void 0, void 0, function* () {
                const { Hook } = yield queryService.Hook({ id });
                assert(Hook);
                return Hook;
            }),
            allHooks: (paginationKey) => __awaiter(this, void 0, void 0, function* () {
                return queryService.HookAll({
                    pagination: createPagination(paginationKey),
                });
            }),
        },
    };
}
