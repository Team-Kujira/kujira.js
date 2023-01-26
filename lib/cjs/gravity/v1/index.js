"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupGravityExtension = exports.types = exports.msg = exports.registry = void 0;
const proto_signing_1 = require("@cosmjs/proto-signing");
const msgs_1 = require("./msgs");
const queries_1 = require("./queries");
Object.defineProperty(exports, "setupGravityExtension", { enumerable: true, get: function () { return queries_1.setupGravityExtension; } });
const types = [
    ["/gravity.v1.MsgBatchSendToEthClaim", msgs_1.MsgBatchSendToEthClaim],
    [
        "/gravity.v1.MsgBatchSendToEthClaimResponse",
        msgs_1.MsgBatchSendToEthClaimResponse,
    ],
    ["/gravity.v1.MsgCancelSendToEth", msgs_1.MsgCancelSendToEth],
    ["/gravity.v1.MsgCancelSendToEthResponse", msgs_1.MsgCancelSendToEthResponse],
    ["/gravity.v1.MsgConfirmBatch", msgs_1.MsgConfirmBatch],
    ["/gravity.v1.MsgConfirmBatchResponse", msgs_1.MsgConfirmBatchResponse],
    ["/gravity.v1.MsgConfirmLogicCall", msgs_1.MsgConfirmLogicCall],
    ["/gravity.v1.MsgConfirmLogicCallResponse", msgs_1.MsgConfirmLogicCallResponse],
    ["/gravity.v1.MsgERC20DeployedClaim", msgs_1.MsgERC20DeployedClaim],
    ["/gravity.v1.MsgERC20DeployedClaimResponse", msgs_1.MsgERC20DeployedClaimResponse],
    ["/gravity.v1.MsgExecuteIbcAutoForwards", msgs_1.MsgExecuteIbcAutoForwards],
    [
        "/gravity.v1.MsgExecuteIbcAutoForwardsResponse",
        msgs_1.MsgExecuteIbcAutoForwardsResponse,
    ],
    ["/gravity.v1.MsgLogicCallExecutedClaim", msgs_1.MsgLogicCallExecutedClaim],
    [
        "/gravity.v1.MsgLogicCallExecutedClaimResponse",
        msgs_1.MsgLogicCallExecutedClaimResponse,
    ],
    ["/gravity.v1.MsgRequestBatch", msgs_1.MsgRequestBatch],
    ["/gravity.v1.MsgRequestBatchResponse", msgs_1.MsgRequestBatchResponse],
    ["/gravity.v1.MsgSendToCosmosClaim", msgs_1.MsgSendToCosmosClaim],
    ["/gravity.v1.MsgSendToCosmosClaimResponse", msgs_1.MsgSendToCosmosClaimResponse],
    ["/gravity.v1.MsgSendToEth", msgs_1.MsgSendToEth],
    ["/gravity.v1.MsgSendToEthResponse", msgs_1.MsgSendToEthResponse],
    ["/gravity.v1.MsgSetOrchestratorAddress", msgs_1.MsgSetOrchestratorAddress],
    [
        "/gravity.v1.MsgSetOrchestratorAddressResponse",
        msgs_1.MsgSetOrchestratorAddressResponse,
    ],
    ["/gravity.v1.MsgSubmitBadSignatureEvidence", msgs_1.MsgSubmitBadSignatureEvidence],
    [
        "/gravity.v1.MsgSubmitBadSignatureEvidenceResponse",
        msgs_1.MsgSubmitBadSignatureEvidenceResponse,
    ],
    ["/gravity.v1.MsgValsetConfirm", msgs_1.MsgValsetConfirm],
    ["/gravity.v1.MsgValsetConfirmResponse", msgs_1.MsgValsetConfirmResponse],
    ["/gravity.v1.MsgValsetUpdatedClaim", msgs_1.MsgValsetUpdatedClaim],
    ["/gravity.v1.MsgValsetUpdatedClaimResponse", msgs_1.MsgValsetUpdatedClaimResponse],
];
exports.types = types;
exports.registry = new proto_signing_1.Registry(types);
const msg = {
    msgBatchSendToEthClaim: (data) => ({
        typeUrl: "/gravity.v1.MsgBatchSendToEthClaim",
        value: msgs_1.MsgBatchSendToEthClaim.fromPartial(data),
    }),
    msgBatchSendToEthClaimResponse: (data) => ({
        typeUrl: "/gravity.v1.MsgBatchSendToEthClaimResponse",
        value: msgs_1.MsgBatchSendToEthClaimResponse.fromPartial(data),
    }),
    msgCancelSendToEth: (data) => ({
        typeUrl: "/gravity.v1.MsgCancelSendToEth",
        value: msgs_1.MsgCancelSendToEth.fromPartial(data),
    }),
    msgCancelSendToEthResponse: (data) => ({
        typeUrl: "/gravity.v1.MsgCancelSendToEthResponse",
        value: msgs_1.MsgCancelSendToEthResponse.fromPartial(data),
    }),
    msgConfirmBatch: (data) => ({
        typeUrl: "/gravity.v1.MsgConfirmBatch",
        value: msgs_1.MsgConfirmBatch.fromPartial(data),
    }),
    msgConfirmBatchResponse: (data) => ({
        typeUrl: "/gravity.v1.MsgConfirmBatchResponse",
        value: msgs_1.MsgConfirmBatchResponse.fromPartial(data),
    }),
    msgConfirmLogicCall: (data) => ({
        typeUrl: "/gravity.v1.MsgConfirmLogicCall",
        value: msgs_1.MsgConfirmLogicCall.fromPartial(data),
    }),
    msgConfirmLogicCallResponse: (data) => ({
        typeUrl: "/gravity.v1.MsgConfirmLogicCallResponse",
        value: msgs_1.MsgConfirmLogicCallResponse.fromPartial(data),
    }),
    msgERC20DeployedClaim: (data) => ({
        typeUrl: "/gravity.v1.MsgERC20DeployedClaim",
        value: msgs_1.MsgERC20DeployedClaim.fromPartial(data),
    }),
    msgERC20DeployedClaimResponse: (data) => ({
        typeUrl: "/gravity.v1.MsgERC20DeployedClaimResponse",
        value: msgs_1.MsgERC20DeployedClaimResponse.fromPartial(data),
    }),
    msgExecuteIbcAutoForwards: (data) => ({
        typeUrl: "/gravity.v1.MsgExecuteIbcAutoForwards",
        value: msgs_1.MsgExecuteIbcAutoForwards.fromPartial(data),
    }),
    msgExecuteIbcAutoForwardsResponse: (data) => ({
        typeUrl: "/gravity.v1.MsgExecuteIbcAutoForwardsResponse",
        value: msgs_1.MsgExecuteIbcAutoForwardsResponse.fromPartial(data),
    }),
    msgLogicCallExecutedClaim: (data) => ({
        typeUrl: "/gravity.v1.MsgLogicCallExecutedClaim",
        value: msgs_1.MsgLogicCallExecutedClaim.fromPartial(data),
    }),
    msgLogicCallExecutedClaimResponse: (data) => ({
        typeUrl: "/gravity.v1.MsgLogicCallExecutedClaimResponse",
        value: msgs_1.MsgLogicCallExecutedClaimResponse.fromPartial(data),
    }),
    msgRequestBatch: (data) => ({
        typeUrl: "/gravity.v1.MsgRequestBatch",
        value: msgs_1.MsgRequestBatch.fromPartial(data),
    }),
    msgRequestBatchResponse: (data) => ({
        typeUrl: "/gravity.v1.MsgRequestBatchResponse",
        value: msgs_1.MsgRequestBatchResponse.fromPartial(data),
    }),
    msgSendToCosmosClaim: (data) => ({
        typeUrl: "/gravity.v1.MsgSendToCosmosClaim",
        value: msgs_1.MsgSendToCosmosClaim.fromPartial(data),
    }),
    msgSendToCosmosClaimResponse: (data) => ({
        typeUrl: "/gravity.v1.MsgSendToCosmosClaimResponse",
        value: msgs_1.MsgSendToCosmosClaimResponse.fromPartial(data),
    }),
    msgSendToEth: (data) => ({
        typeUrl: "/gravity.v1.MsgSendToEth",
        value: msgs_1.MsgSendToEth.fromPartial(data),
    }),
    msgSendToEthResponse: (data) => ({
        typeUrl: "/gravity.v1.MsgSendToEthResponse",
        value: msgs_1.MsgSendToEthResponse.fromPartial(data),
    }),
    msgSetOrchestratorAddress: (data) => ({
        typeUrl: "/gravity.v1.MsgSetOrchestratorAddress",
        value: msgs_1.MsgSetOrchestratorAddress.fromPartial(data),
    }),
    msgSetOrchestratorAddressResponse: (data) => ({
        typeUrl: "/gravity.v1.MsgSetOrchestratorAddressResponse",
        value: msgs_1.MsgSetOrchestratorAddressResponse.fromPartial(data),
    }),
    msgSubmitBadSignatureEvidence: (data) => ({
        typeUrl: "/gravity.v1.MsgSubmitBadSignatureEvidence",
        value: msgs_1.MsgSubmitBadSignatureEvidence.fromPartial(data),
    }),
    msgSubmitBadSignatureEvidenceResponse: (data) => ({
        typeUrl: "/gravity.v1.MsgSubmitBadSignatureEvidenceResponse",
        value: msgs_1.MsgSubmitBadSignatureEvidenceResponse.fromPartial(data),
    }),
    msgValsetConfirm: (data) => ({
        typeUrl: "/gravity.v1.MsgValsetConfirm",
        value: msgs_1.MsgValsetConfirm.fromPartial(data),
    }),
    msgValsetConfirmResponse: (data) => ({
        typeUrl: "/gravity.v1.MsgValsetConfirmResponse",
        value: msgs_1.MsgValsetConfirmResponse.fromPartial(data),
    }),
    msgValsetUpdatedClaim: (data) => ({
        typeUrl: "/gravity.v1.MsgValsetUpdatedClaim",
        value: msgs_1.MsgValsetUpdatedClaim.fromPartial(data),
    }),
    msgValsetUpdatedClaimResponse: (data) => ({
        typeUrl: "/gravity.v1.MsgValsetUpdatedClaimResponse",
        value: msgs_1.MsgValsetUpdatedClaimResponse.fromPartial(data),
    }),
};
exports.msg = msg;
