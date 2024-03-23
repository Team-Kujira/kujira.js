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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.aminoTypes = void 0;
const cosmwasm_stargate_1 = require("@cosmjs/cosmwasm-stargate");
const s = __importStar(require("@cosmjs/stargate"));
const utils_1 = require("@cosmjs/utils");
const long_1 = __importDefault(require("long"));
const authz_1 = require("./amino/authz");
const extra = {
    "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation": {
        aminoType: "cosmos-sdk/MsgCancelUnbondingDelegation",
        toAmino: ({ delegatorAddress, validatorAddress, amount, creationHeight, }) => {
            (0, utils_1.assertDefinedAndNotNull)(amount, "missing amount");
            return {
                delegator_address: delegatorAddress,
                validator_address: validatorAddress,
                amount: amount,
                creation_height: creationHeight.toString(),
            };
        },
        fromAmino: ({ delegator_address, validator_address, amount, creation_height, }) => ({
            delegatorAddress: delegator_address,
            validatorAddress: validator_address,
            amount: amount,
            creationHeight: long_1.default.fromString(creation_height),
        }),
    },
    "/batch.MsgWithdrawAllDelegatorRewards": {
        aminoType: "cosmos-sdk/MsgWithdrawAllDelegatorRewards",
        toAmino: ({ delegatorAddress, }) => {
            return {
                delegator_address: delegatorAddress,
            };
        },
        fromAmino: ({ delegator_address, }) => ({
            delegatorAddress: delegator_address,
        }),
    },
};
const aminoTypes = (prefix) => new s.AminoTypes(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, (0, authz_1.createAuthzAminoConverters)()), s.createBankAminoConverters()), s.createDistributionAminoConverters()), s.createFeegrantAminoConverters()), s.createGovAminoConverters()), s.createIbcAminoConverters()), s.createStakingAminoConverters()), s.createVestingAminoConverters()), (0, cosmwasm_stargate_1.createWasmAminoConverters)()), extra));
exports.aminoTypes = aminoTypes;
