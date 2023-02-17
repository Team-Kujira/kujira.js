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
exports.setupAllianceExtension = void 0;
const stargate_1 = require("@cosmjs/stargate");
const utils_1 = require("@cosmjs/utils");
const query_1 = require("./query");
function setupAllianceExtension(base) {
    const rpc = (0, stargate_1.createProtobufRpcClient)(base);
    const queryService = new query_1.QueryClientImpl(rpc);
    return {
        alliance: {
            params: () => __awaiter(this, void 0, void 0, function* () {
                const { params } = yield queryService.Params({});
                (0, utils_1.assert)(params);
                return params;
            }),
            /** Query paginated alliances */
            alliances: (q) => __awaiter(this, void 0, void 0, function* () {
                return queryService.Alliances(q);
            }),
            /** Query a specific alliance by ibc hash */
            ibcAlliance: (q) => __awaiter(this, void 0, void 0, function* () {
                return queryService.IBCAlliance(q);
            }),
            /** Query all paginated alliance delegations */
            allAlliancesDelegations: (q) => __awaiter(this, void 0, void 0, function* () {
                return queryService.AllAlliancesDelegations(q);
            }),
            /** Query alliance validator */
            allianceValidator: (q) => __awaiter(this, void 0, void 0, function* () {
                return queryService.AllianceValidator(q);
            }),
            /** Query all paginated alliance validators */
            allAllianceValidators: (q) => __awaiter(this, void 0, void 0, function* () {
                return queryService.AllAllianceValidators(q);
            }),
            /** Query all paginated alliance delegations for a delegator addr */
            alliancesDelegation: (q) => __awaiter(this, void 0, void 0, function* () {
                return queryService.AlliancesDelegation(q);
            }),
            /** Query all paginated alliance delegations for a delegator addr and validator_addr */
            alliancesDelegationByValidator: (q) => __awaiter(this, void 0, void 0, function* () {
                return queryService.AlliancesDelegationByValidator(q);
            }),
            /** Query a delegation to an alliance by delegator addr, validator_addr and denom */
            allianceDelegation: (q) => __awaiter(this, void 0, void 0, function* () {
                return queryService.AllianceDelegation(q);
            }),
            /** Query a delegation to an alliance by delegator addr, validator_addr and denom */
            ibcAllianceDelegation: (q) => __awaiter(this, void 0, void 0, function* () {
                return queryService.IBCAllianceDelegation(q);
            }),
            /** Query for rewards by delegator addr, validator_addr and denom */
            allianceDelegationRewards: (q) => __awaiter(this, void 0, void 0, function* () {
                return queryService.AllianceDelegationRewards(q);
            }),
            /** Query for rewards by delegator addr, validator_addr and denom */
            ibcAllianceDelegationRewards: (q) => __awaiter(this, void 0, void 0, function* () {
                return queryService.IBCAllianceDelegationRewards(q);
            }),
            /** Query a specific alliance by denom */
            alliance: (q) => __awaiter(this, void 0, void 0, function* () {
                return queryService.Alliance(q);
            }),
        },
    };
}
exports.setupAllianceExtension = setupAllianceExtension;
