"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.fetchTokens = exports.kujiraQueryClient = void 0;
const s = __importStar(require("@cosmjs/stargate"));
const bank_1 = require("./cosmos/bank");
const gov_1 = require("./cosmos/gov");
const staking_1 = require("./cosmos/staking");
const wasm_1 = require("./cosmwasm/wasm");
const v1_1 = require("./gravity/v1");
const cwica_1 = require("./kujira/cwica");
const denom_1 = require("./kujira/denom");
const oracle_1 = require("./kujira/oracle");
const scheduler_1 = require("./kujira/scheduler");
const kujiraQueryClient = ({ client, }) => s.QueryClient.withExtensions(client, s.setupAuthExtension, s.setupAuthzExtension, bank_1.setupBankExtensionExtended, denom_1.setupDenomExtension, s.setupDistributionExtension, s.setupFeegrantExtension, gov_1.setupGovExtension, oracle_1.setupOracleExtension, scheduler_1.setupSchedulerExtension, s.setupSlashingExtension, staking_1.setupStakingExtension, s.setupTxExtension, wasm_1.setupWasmExtensionExtended, s.setupIbcExtension, v1_1.setupGravityExtension, cwica_1.setupCwIcaExtension);
exports.kujiraQueryClient = kujiraQueryClient;
const fetchTokens = (query, paginationKey) => {
    return query.bank.totalSupply(paginationKey).then((xs) => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        return ((_a = xs.pagination) === null || _a === void 0 ? void 0 : _a.nextKey.toString())
            ? [...(yield (0, exports.fetchTokens)(query, xs.pagination.nextKey)), ...xs.supply]
            : xs.supply;
    }));
};
exports.fetchTokens = fetchTokens;
