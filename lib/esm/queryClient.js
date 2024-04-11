var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as s from "@cosmjs/stargate";
import { setupBankExtensionExtended, } from "./cosmos/bank";
import { setupGovExtension } from "./cosmos/gov";
import { setupStakingExtension } from "./cosmos/staking";
import { setupWasmExtensionExtended, } from "./cosmwasm/wasm";
import { setupGravityExtension } from "./gravity/v1";
import { setupCwIcaExtension } from "./kujira/cwica";
import { setupDenomExtension } from "./kujira/denom";
import { setupOracleExtension } from "./kujira/oracle";
import { setupSchedulerExtension, } from "./kujira/scheduler";
export const kujiraQueryClient = ({ client, }) => s.QueryClient.withExtensions(client, s.setupAuthExtension, s.setupAuthzExtension, setupBankExtensionExtended, setupDenomExtension, s.setupDistributionExtension, s.setupFeegrantExtension, setupGovExtension, setupOracleExtension, setupSchedulerExtension, s.setupSlashingExtension, setupStakingExtension, s.setupTxExtension, setupWasmExtensionExtended, s.setupIbcExtension, setupGravityExtension, setupCwIcaExtension);
export const fetchTokens = (query, paginationKey) => {
    return query.bank.totalSupply(paginationKey).then((xs) => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        return ((_a = xs.pagination) === null || _a === void 0 ? void 0 : _a.nextKey.toString())
            ? [...(yield fetchTokens(query, xs.pagination.nextKey)), ...xs.supply]
            : xs.supply;
    }));
};
