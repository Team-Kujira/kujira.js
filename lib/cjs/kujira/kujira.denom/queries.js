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
exports.setupDenomExtension = void 0;
const utils_1 = require("@cosmjs/utils");
const query_1 = require("./types/query");
const stargate_1 = require("@cosmjs/stargate");
function setupDenomExtension(base) {
    const rpc = (0, stargate_1.createProtobufRpcClient)(base);
    const queryService = new query_1.QueryClientImpl(rpc);
    return {
        denom: {
            params: () => __awaiter(this, void 0, void 0, function* () {
                const { params } = yield queryService.Params({});
                (0, utils_1.assert)(params);
                return params;
            }),
            fromCreator: (creator) => __awaiter(this, void 0, void 0, function* () {
                const { denoms } = yield queryService.DenomsFromCreator({
                    creator,
                });
                return denoms;
            }),
            authorityMetadata: (denom) => __awaiter(this, void 0, void 0, function* () {
                const { authority_metadata } = yield queryService.DenomAuthorityMetadata({
                    denom,
                });
                (0, utils_1.assert)(authority_metadata);
                return authority_metadata;
            }),
        },
    };
}
exports.setupDenomExtension = setupDenomExtension;
