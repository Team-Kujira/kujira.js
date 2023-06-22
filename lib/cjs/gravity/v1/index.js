"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryParamsResponse = exports.QueryParamsRequest = exports.QueryOutgoingTxBatchesResponse = exports.QueryOutgoingTxBatchesRequest = exports.QueryOutgoingLogicCallsResponse = exports.QueryOutgoingLogicCallsRequest = exports.QueryLogicConfirmsResponse = exports.QueryLogicConfirmsRequest = exports.QueryLastValsetRequestsResponse = exports.QueryLastValsetRequestsRequest = exports.QueryLastPendingValsetRequestByAddrResponse = exports.QueryLastPendingValsetRequestByAddrRequest = exports.QueryLastPendingLogicCallByAddrResponse = exports.QueryLastPendingLogicCallByAddrRequest = exports.QueryLastPendingBatchRequestByAddrResponse = exports.QueryLastPendingBatchRequestByAddrRequest = exports.QueryLastObservedEthNonceResponse = exports.QueryLastObservedEthNonceRequest = exports.QueryLastObservedEthBlockResponse = exports.QueryLastObservedEthBlockRequest = exports.QueryLastEventNonceByAddrResponse = exports.QueryLastEventNonceByAddrRequest = exports.QueryERC20ToDenomResponse = exports.QueryERC20ToDenomRequest = exports.QueryDenomToERC20Response = exports.QueryDenomToERC20Request = exports.QueryDelegateKeysByValidatorAddressResponse = exports.QueryDelegateKeysByValidatorAddress = exports.QueryDelegateKeysByOrchestratorAddressResponse = exports.QueryDelegateKeysByOrchestratorAddress = exports.QueryDelegateKeysByEthAddressResponse = exports.QueryDelegateKeysByEthAddress = exports.QueryCurrentValsetResponse = exports.QueryCurrentValsetRequest = exports.QueryBatchRequestByNonceResponse = exports.QueryBatchRequestByNonceRequest = exports.QueryBatchFeeResponse = exports.QueryBatchFeeRequest = exports.QueryBatchConfirmsResponse = exports.QueryBatchConfirmsRequest = exports.QueryAttestationsResponse = exports.QueryAttestationsRequest = exports.Params = exports.GravityNonces = exports.GenesisState = exports.OutgoingTxBatch = exports.OutgoingTransferTx = exports.OutgoingLogicCall = exports.EventOutgoingBatchCanceled = exports.EventOutgoingBatch = void 0;
exports.types = exports.setupGravityExtension = exports.msg = exports.registry = exports.QueryValsetRequestResponse = exports.QueryValsetRequestRequest = exports.QueryValsetConfirmsByNonceResponse = exports.QueryValsetConfirmsByNonceRequest = exports.QueryValsetConfirmResponse = exports.QueryValsetConfirmRequest = exports.QueryPendingSendToEthResponse = exports.QueryPendingSendToEth = exports.QueryPendingIbcAutoForwardsResponse = exports.QueryPendingIbcAutoForwards = void 0;
const proto_signing_1 = require("@cosmjs/proto-signing");
const msgs_1 = require("./msgs");
const queries_1 = require("./queries");
Object.defineProperty(exports, "setupGravityExtension", { enumerable: true, get: function () { return queries_1.setupGravityExtension; } });
var batch_1 = require("./batch");
Object.defineProperty(exports, "EventOutgoingBatch", { enumerable: true, get: function () { return batch_1.EventOutgoingBatch; } });
Object.defineProperty(exports, "EventOutgoingBatchCanceled", { enumerable: true, get: function () { return batch_1.EventOutgoingBatchCanceled; } });
Object.defineProperty(exports, "OutgoingLogicCall", { enumerable: true, get: function () { return batch_1.OutgoingLogicCall; } });
Object.defineProperty(exports, "OutgoingTransferTx", { enumerable: true, get: function () { return batch_1.OutgoingTransferTx; } });
Object.defineProperty(exports, "OutgoingTxBatch", { enumerable: true, get: function () { return batch_1.OutgoingTxBatch; } });
var genesis_1 = require("./genesis");
Object.defineProperty(exports, "GenesisState", { enumerable: true, get: function () { return genesis_1.GenesisState; } });
Object.defineProperty(exports, "GravityNonces", { enumerable: true, get: function () { return genesis_1.GravityNonces; } });
Object.defineProperty(exports, "Params", { enumerable: true, get: function () { return genesis_1.Params; } });
var query_1 = require("./query");
Object.defineProperty(exports, "QueryAttestationsRequest", { enumerable: true, get: function () { return query_1.QueryAttestationsRequest; } });
Object.defineProperty(exports, "QueryAttestationsResponse", { enumerable: true, get: function () { return query_1.QueryAttestationsResponse; } });
Object.defineProperty(exports, "QueryBatchConfirmsRequest", { enumerable: true, get: function () { return query_1.QueryBatchConfirmsRequest; } });
Object.defineProperty(exports, "QueryBatchConfirmsResponse", { enumerable: true, get: function () { return query_1.QueryBatchConfirmsResponse; } });
Object.defineProperty(exports, "QueryBatchFeeRequest", { enumerable: true, get: function () { return query_1.QueryBatchFeeRequest; } });
Object.defineProperty(exports, "QueryBatchFeeResponse", { enumerable: true, get: function () { return query_1.QueryBatchFeeResponse; } });
Object.defineProperty(exports, "QueryBatchRequestByNonceRequest", { enumerable: true, get: function () { return query_1.QueryBatchRequestByNonceRequest; } });
Object.defineProperty(exports, "QueryBatchRequestByNonceResponse", { enumerable: true, get: function () { return query_1.QueryBatchRequestByNonceResponse; } });
Object.defineProperty(exports, "QueryCurrentValsetRequest", { enumerable: true, get: function () { return query_1.QueryCurrentValsetRequest; } });
Object.defineProperty(exports, "QueryCurrentValsetResponse", { enumerable: true, get: function () { return query_1.QueryCurrentValsetResponse; } });
Object.defineProperty(exports, "QueryDelegateKeysByEthAddress", { enumerable: true, get: function () { return query_1.QueryDelegateKeysByEthAddress; } });
Object.defineProperty(exports, "QueryDelegateKeysByEthAddressResponse", { enumerable: true, get: function () { return query_1.QueryDelegateKeysByEthAddressResponse; } });
Object.defineProperty(exports, "QueryDelegateKeysByOrchestratorAddress", { enumerable: true, get: function () { return query_1.QueryDelegateKeysByOrchestratorAddress; } });
Object.defineProperty(exports, "QueryDelegateKeysByOrchestratorAddressResponse", { enumerable: true, get: function () { return query_1.QueryDelegateKeysByOrchestratorAddressResponse; } });
Object.defineProperty(exports, "QueryDelegateKeysByValidatorAddress", { enumerable: true, get: function () { return query_1.QueryDelegateKeysByValidatorAddress; } });
Object.defineProperty(exports, "QueryDelegateKeysByValidatorAddressResponse", { enumerable: true, get: function () { return query_1.QueryDelegateKeysByValidatorAddressResponse; } });
Object.defineProperty(exports, "QueryDenomToERC20Request", { enumerable: true, get: function () { return query_1.QueryDenomToERC20Request; } });
Object.defineProperty(exports, "QueryDenomToERC20Response", { enumerable: true, get: function () { return query_1.QueryDenomToERC20Response; } });
Object.defineProperty(exports, "QueryERC20ToDenomRequest", { enumerable: true, get: function () { return query_1.QueryERC20ToDenomRequest; } });
Object.defineProperty(exports, "QueryERC20ToDenomResponse", { enumerable: true, get: function () { return query_1.QueryERC20ToDenomResponse; } });
Object.defineProperty(exports, "QueryLastEventNonceByAddrRequest", { enumerable: true, get: function () { return query_1.QueryLastEventNonceByAddrRequest; } });
Object.defineProperty(exports, "QueryLastEventNonceByAddrResponse", { enumerable: true, get: function () { return query_1.QueryLastEventNonceByAddrResponse; } });
Object.defineProperty(exports, "QueryLastObservedEthBlockRequest", { enumerable: true, get: function () { return query_1.QueryLastObservedEthBlockRequest; } });
Object.defineProperty(exports, "QueryLastObservedEthBlockResponse", { enumerable: true, get: function () { return query_1.QueryLastObservedEthBlockResponse; } });
Object.defineProperty(exports, "QueryLastObservedEthNonceRequest", { enumerable: true, get: function () { return query_1.QueryLastObservedEthNonceRequest; } });
Object.defineProperty(exports, "QueryLastObservedEthNonceResponse", { enumerable: true, get: function () { return query_1.QueryLastObservedEthNonceResponse; } });
Object.defineProperty(exports, "QueryLastPendingBatchRequestByAddrRequest", { enumerable: true, get: function () { return query_1.QueryLastPendingBatchRequestByAddrRequest; } });
Object.defineProperty(exports, "QueryLastPendingBatchRequestByAddrResponse", { enumerable: true, get: function () { return query_1.QueryLastPendingBatchRequestByAddrResponse; } });
Object.defineProperty(exports, "QueryLastPendingLogicCallByAddrRequest", { enumerable: true, get: function () { return query_1.QueryLastPendingLogicCallByAddrRequest; } });
Object.defineProperty(exports, "QueryLastPendingLogicCallByAddrResponse", { enumerable: true, get: function () { return query_1.QueryLastPendingLogicCallByAddrResponse; } });
Object.defineProperty(exports, "QueryLastPendingValsetRequestByAddrRequest", { enumerable: true, get: function () { return query_1.QueryLastPendingValsetRequestByAddrRequest; } });
Object.defineProperty(exports, "QueryLastPendingValsetRequestByAddrResponse", { enumerable: true, get: function () { return query_1.QueryLastPendingValsetRequestByAddrResponse; } });
Object.defineProperty(exports, "QueryLastValsetRequestsRequest", { enumerable: true, get: function () { return query_1.QueryLastValsetRequestsRequest; } });
Object.defineProperty(exports, "QueryLastValsetRequestsResponse", { enumerable: true, get: function () { return query_1.QueryLastValsetRequestsResponse; } });
Object.defineProperty(exports, "QueryLogicConfirmsRequest", { enumerable: true, get: function () { return query_1.QueryLogicConfirmsRequest; } });
Object.defineProperty(exports, "QueryLogicConfirmsResponse", { enumerable: true, get: function () { return query_1.QueryLogicConfirmsResponse; } });
Object.defineProperty(exports, "QueryOutgoingLogicCallsRequest", { enumerable: true, get: function () { return query_1.QueryOutgoingLogicCallsRequest; } });
Object.defineProperty(exports, "QueryOutgoingLogicCallsResponse", { enumerable: true, get: function () { return query_1.QueryOutgoingLogicCallsResponse; } });
Object.defineProperty(exports, "QueryOutgoingTxBatchesRequest", { enumerable: true, get: function () { return query_1.QueryOutgoingTxBatchesRequest; } });
Object.defineProperty(exports, "QueryOutgoingTxBatchesResponse", { enumerable: true, get: function () { return query_1.QueryOutgoingTxBatchesResponse; } });
Object.defineProperty(exports, "QueryParamsRequest", { enumerable: true, get: function () { return query_1.QueryParamsRequest; } });
Object.defineProperty(exports, "QueryParamsResponse", { enumerable: true, get: function () { return query_1.QueryParamsResponse; } });
Object.defineProperty(exports, "QueryPendingIbcAutoForwards", { enumerable: true, get: function () { return query_1.QueryPendingIbcAutoForwards; } });
Object.defineProperty(exports, "QueryPendingIbcAutoForwardsResponse", { enumerable: true, get: function () { return query_1.QueryPendingIbcAutoForwardsResponse; } });
Object.defineProperty(exports, "QueryPendingSendToEth", { enumerable: true, get: function () { return query_1.QueryPendingSendToEth; } });
Object.defineProperty(exports, "QueryPendingSendToEthResponse", { enumerable: true, get: function () { return query_1.QueryPendingSendToEthResponse; } });
Object.defineProperty(exports, "QueryValsetConfirmRequest", { enumerable: true, get: function () { return query_1.QueryValsetConfirmRequest; } });
Object.defineProperty(exports, "QueryValsetConfirmResponse", { enumerable: true, get: function () { return query_1.QueryValsetConfirmResponse; } });
Object.defineProperty(exports, "QueryValsetConfirmsByNonceRequest", { enumerable: true, get: function () { return query_1.QueryValsetConfirmsByNonceRequest; } });
Object.defineProperty(exports, "QueryValsetConfirmsByNonceResponse", { enumerable: true, get: function () { return query_1.QueryValsetConfirmsByNonceResponse; } });
Object.defineProperty(exports, "QueryValsetRequestRequest", { enumerable: true, get: function () { return query_1.QueryValsetRequestRequest; } });
Object.defineProperty(exports, "QueryValsetRequestResponse", { enumerable: true, get: function () { return query_1.QueryValsetRequestResponse; } });
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
