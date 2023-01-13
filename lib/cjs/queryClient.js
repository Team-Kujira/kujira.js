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
Object.defineProperty(exports, "__esModule", { value: true });
exports.kujiraQueryClient = void 0;
const cosmwasm_stargate_1 = require("@cosmjs/cosmwasm-stargate");
const s = __importStar(require("@cosmjs/stargate"));
const gov_1 = require("./cosmos/gov");
const staking_1 = require("./cosmos/staking");
const kujira_denom_1 = require("./kujira/kujira.denom");
const kujira_oracle_1 = require("./kujira/kujira.oracle");
const kujira_scheduler_1 = require("./kujira/kujira.scheduler");
const kujiraQueryClient = ({ client, }) => s.QueryClient.withExtensions(client, s.setupAuthExtension, s.setupAuthzExtension, s.setupBankExtension, kujira_denom_1.setupDenomExtension, s.setupDistributionExtension, s.setupFeegrantExtension, gov_1.setupGovExtension, kujira_oracle_1.setupOracleExtension, kujira_scheduler_1.setupSchedulerExtension, s.setupSlashingExtension, staking_1.setupStakingExtension, s.setupTxExtension, cosmwasm_stargate_1.setupWasmExtension, s.setupIbcExtension);
exports.kujiraQueryClient = kujiraQueryClient;
