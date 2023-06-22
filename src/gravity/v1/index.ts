import { EncodeObject, Registry } from "@cosmjs/proto-signing";
import {
  MsgBatchSendToEthClaim,
  MsgBatchSendToEthClaimResponse,
  MsgCancelSendToEth,
  MsgCancelSendToEthResponse,
  MsgConfirmBatch,
  MsgConfirmBatchResponse,
  MsgConfirmLogicCall,
  MsgConfirmLogicCallResponse,
  MsgERC20DeployedClaim,
  MsgERC20DeployedClaimResponse,
  MsgExecuteIbcAutoForwards,
  MsgExecuteIbcAutoForwardsResponse,
  MsgLogicCallExecutedClaim,
  MsgLogicCallExecutedClaimResponse,
  MsgRequestBatch,
  MsgRequestBatchResponse,
  MsgSendToCosmosClaim,
  MsgSendToCosmosClaimResponse,
  MsgSendToEth,
  MsgSendToEthResponse,
  MsgSetOrchestratorAddress,
  MsgSetOrchestratorAddressResponse,
  MsgSubmitBadSignatureEvidence,
  MsgSubmitBadSignatureEvidenceResponse,
  MsgValsetConfirm,
  MsgValsetConfirmResponse,
  MsgValsetUpdatedClaim,
  MsgValsetUpdatedClaimResponse,
} from "./msgs";
import { GravityExtension, setupGravityExtension } from "./queries";
export {
  EventOutgoingBatch,
  EventOutgoingBatchCanceled,
  OutgoingLogicCall,
  OutgoingTransferTx,
  OutgoingTxBatch,
} from "./batch";
export {
  Query,
  QueryAttestationsRequest,
  QueryAttestationsResponse,
  QueryBatchConfirmsRequest,
  QueryBatchConfirmsResponse,
  QueryBatchFeeRequest,
  QueryBatchFeeResponse,
  QueryBatchRequestByNonceRequest,
  QueryBatchRequestByNonceResponse,
  QueryCurrentValsetRequest,
  QueryCurrentValsetResponse,
  QueryDelegateKeysByEthAddress,
  QueryDelegateKeysByEthAddressResponse,
  QueryDelegateKeysByOrchestratorAddress,
  QueryDelegateKeysByOrchestratorAddressResponse,
  QueryDelegateKeysByValidatorAddress,
  QueryDelegateKeysByValidatorAddressResponse,
  QueryDenomToERC20Request,
  QueryDenomToERC20Response,
  QueryERC20ToDenomRequest,
  QueryERC20ToDenomResponse,
  QueryLastEventNonceByAddrRequest,
  QueryLastEventNonceByAddrResponse,
  QueryLastObservedEthBlockRequest,
  QueryLastObservedEthBlockResponse,
  QueryLastObservedEthNonceRequest,
  QueryLastObservedEthNonceResponse,
  QueryLastPendingBatchRequestByAddrRequest,
  QueryLastPendingBatchRequestByAddrResponse,
  QueryLastPendingLogicCallByAddrRequest,
  QueryLastPendingLogicCallByAddrResponse,
  QueryLastPendingValsetRequestByAddrRequest,
  QueryLastPendingValsetRequestByAddrResponse,
  QueryLastValsetRequestsRequest,
  QueryLastValsetRequestsResponse,
  QueryLogicConfirmsRequest,
  QueryLogicConfirmsResponse,
  QueryOutgoingLogicCallsRequest,
  QueryOutgoingLogicCallsResponse,
  QueryOutgoingTxBatchesRequest,
  QueryOutgoingTxBatchesResponse,
  QueryParamsRequest,
  QueryParamsResponse,
  QueryPendingIbcAutoForwards,
  QueryPendingIbcAutoForwardsResponse,
  QueryPendingSendToEth,
  QueryPendingSendToEthResponse,
  QueryValsetConfirmRequest,
  QueryValsetConfirmResponse,
  QueryValsetConfirmsByNonceRequest,
  QueryValsetConfirmsByNonceResponse,
  QueryValsetRequestRequest,
  QueryValsetRequestResponse,
} from "./query";

const types = [
  ["/gravity.v1.MsgBatchSendToEthClaim", MsgBatchSendToEthClaim],
  [
    "/gravity.v1.MsgBatchSendToEthClaimResponse",
    MsgBatchSendToEthClaimResponse,
  ],
  ["/gravity.v1.MsgCancelSendToEth", MsgCancelSendToEth],
  ["/gravity.v1.MsgCancelSendToEthResponse", MsgCancelSendToEthResponse],
  ["/gravity.v1.MsgConfirmBatch", MsgConfirmBatch],
  ["/gravity.v1.MsgConfirmBatchResponse", MsgConfirmBatchResponse],
  ["/gravity.v1.MsgConfirmLogicCall", MsgConfirmLogicCall],
  ["/gravity.v1.MsgConfirmLogicCallResponse", MsgConfirmLogicCallResponse],
  ["/gravity.v1.MsgERC20DeployedClaim", MsgERC20DeployedClaim],
  ["/gravity.v1.MsgERC20DeployedClaimResponse", MsgERC20DeployedClaimResponse],
  ["/gravity.v1.MsgExecuteIbcAutoForwards", MsgExecuteIbcAutoForwards],
  [
    "/gravity.v1.MsgExecuteIbcAutoForwardsResponse",
    MsgExecuteIbcAutoForwardsResponse,
  ],
  ["/gravity.v1.MsgLogicCallExecutedClaim", MsgLogicCallExecutedClaim],
  [
    "/gravity.v1.MsgLogicCallExecutedClaimResponse",
    MsgLogicCallExecutedClaimResponse,
  ],
  ["/gravity.v1.MsgRequestBatch", MsgRequestBatch],
  ["/gravity.v1.MsgRequestBatchResponse", MsgRequestBatchResponse],
  ["/gravity.v1.MsgSendToCosmosClaim", MsgSendToCosmosClaim],
  ["/gravity.v1.MsgSendToCosmosClaimResponse", MsgSendToCosmosClaimResponse],
  ["/gravity.v1.MsgSendToEth", MsgSendToEth],
  ["/gravity.v1.MsgSendToEthResponse", MsgSendToEthResponse],
  ["/gravity.v1.MsgSetOrchestratorAddress", MsgSetOrchestratorAddress],
  [
    "/gravity.v1.MsgSetOrchestratorAddressResponse",
    MsgSetOrchestratorAddressResponse,
  ],
  ["/gravity.v1.MsgSubmitBadSignatureEvidence", MsgSubmitBadSignatureEvidence],
  [
    "/gravity.v1.MsgSubmitBadSignatureEvidenceResponse",
    MsgSubmitBadSignatureEvidenceResponse,
  ],
  ["/gravity.v1.MsgValsetConfirm", MsgValsetConfirm],
  ["/gravity.v1.MsgValsetConfirmResponse", MsgValsetConfirmResponse],
  ["/gravity.v1.MsgValsetUpdatedClaim", MsgValsetUpdatedClaim],
  ["/gravity.v1.MsgValsetUpdatedClaimResponse", MsgValsetUpdatedClaimResponse],
];

export const registry = new Registry(<any>types);

const msg = {
  msgBatchSendToEthClaim: (data: MsgBatchSendToEthClaim): EncodeObject => ({
    typeUrl: "/gravity.v1.MsgBatchSendToEthClaim",
    value: MsgBatchSendToEthClaim.fromPartial(data),
  }),
  msgBatchSendToEthClaimResponse: (
    data: MsgBatchSendToEthClaimResponse
  ): EncodeObject => ({
    typeUrl: "/gravity.v1.MsgBatchSendToEthClaimResponse",
    value: MsgBatchSendToEthClaimResponse.fromPartial(data),
  }),
  msgCancelSendToEth: (data: MsgCancelSendToEth): EncodeObject => ({
    typeUrl: "/gravity.v1.MsgCancelSendToEth",
    value: MsgCancelSendToEth.fromPartial(data),
  }),
  msgCancelSendToEthResponse: (
    data: MsgCancelSendToEthResponse
  ): EncodeObject => ({
    typeUrl: "/gravity.v1.MsgCancelSendToEthResponse",
    value: MsgCancelSendToEthResponse.fromPartial(data),
  }),
  msgConfirmBatch: (data: MsgConfirmBatch): EncodeObject => ({
    typeUrl: "/gravity.v1.MsgConfirmBatch",
    value: MsgConfirmBatch.fromPartial(data),
  }),
  msgConfirmBatchResponse: (data: MsgConfirmBatchResponse): EncodeObject => ({
    typeUrl: "/gravity.v1.MsgConfirmBatchResponse",
    value: MsgConfirmBatchResponse.fromPartial(data),
  }),
  msgConfirmLogicCall: (data: MsgConfirmLogicCall): EncodeObject => ({
    typeUrl: "/gravity.v1.MsgConfirmLogicCall",
    value: MsgConfirmLogicCall.fromPartial(data),
  }),
  msgConfirmLogicCallResponse: (
    data: MsgConfirmLogicCallResponse
  ): EncodeObject => ({
    typeUrl: "/gravity.v1.MsgConfirmLogicCallResponse",
    value: MsgConfirmLogicCallResponse.fromPartial(data),
  }),
  msgERC20DeployedClaim: (data: MsgERC20DeployedClaim): EncodeObject => ({
    typeUrl: "/gravity.v1.MsgERC20DeployedClaim",
    value: MsgERC20DeployedClaim.fromPartial(data),
  }),
  msgERC20DeployedClaimResponse: (
    data: MsgERC20DeployedClaimResponse
  ): EncodeObject => ({
    typeUrl: "/gravity.v1.MsgERC20DeployedClaimResponse",
    value: MsgERC20DeployedClaimResponse.fromPartial(data),
  }),
  msgExecuteIbcAutoForwards: (
    data: MsgExecuteIbcAutoForwards
  ): EncodeObject => ({
    typeUrl: "/gravity.v1.MsgExecuteIbcAutoForwards",
    value: MsgExecuteIbcAutoForwards.fromPartial(data),
  }),
  msgExecuteIbcAutoForwardsResponse: (
    data: MsgExecuteIbcAutoForwardsResponse
  ): EncodeObject => ({
    typeUrl: "/gravity.v1.MsgExecuteIbcAutoForwardsResponse",
    value: MsgExecuteIbcAutoForwardsResponse.fromPartial(data),
  }),
  msgLogicCallExecutedClaim: (
    data: MsgLogicCallExecutedClaim
  ): EncodeObject => ({
    typeUrl: "/gravity.v1.MsgLogicCallExecutedClaim",
    value: MsgLogicCallExecutedClaim.fromPartial(data),
  }),
  msgLogicCallExecutedClaimResponse: (
    data: MsgLogicCallExecutedClaimResponse
  ): EncodeObject => ({
    typeUrl: "/gravity.v1.MsgLogicCallExecutedClaimResponse",
    value: MsgLogicCallExecutedClaimResponse.fromPartial(data),
  }),
  msgRequestBatch: (data: MsgRequestBatch): EncodeObject => ({
    typeUrl: "/gravity.v1.MsgRequestBatch",
    value: MsgRequestBatch.fromPartial(data),
  }),
  msgRequestBatchResponse: (data: MsgRequestBatchResponse): EncodeObject => ({
    typeUrl: "/gravity.v1.MsgRequestBatchResponse",
    value: MsgRequestBatchResponse.fromPartial(data),
  }),
  msgSendToCosmosClaim: (data: MsgSendToCosmosClaim): EncodeObject => ({
    typeUrl: "/gravity.v1.MsgSendToCosmosClaim",
    value: MsgSendToCosmosClaim.fromPartial(data),
  }),
  msgSendToCosmosClaimResponse: (
    data: MsgSendToCosmosClaimResponse
  ): EncodeObject => ({
    typeUrl: "/gravity.v1.MsgSendToCosmosClaimResponse",
    value: MsgSendToCosmosClaimResponse.fromPartial(data),
  }),
  msgSendToEth: (data: MsgSendToEth): EncodeObject => ({
    typeUrl: "/gravity.v1.MsgSendToEth",
    value: MsgSendToEth.fromPartial(data),
  }),
  msgSendToEthResponse: (data: MsgSendToEthResponse): EncodeObject => ({
    typeUrl: "/gravity.v1.MsgSendToEthResponse",
    value: MsgSendToEthResponse.fromPartial(data),
  }),
  msgSetOrchestratorAddress: (
    data: MsgSetOrchestratorAddress
  ): EncodeObject => ({
    typeUrl: "/gravity.v1.MsgSetOrchestratorAddress",
    value: MsgSetOrchestratorAddress.fromPartial(data),
  }),
  msgSetOrchestratorAddressResponse: (
    data: MsgSetOrchestratorAddressResponse
  ): EncodeObject => ({
    typeUrl: "/gravity.v1.MsgSetOrchestratorAddressResponse",
    value: MsgSetOrchestratorAddressResponse.fromPartial(data),
  }),
  msgSubmitBadSignatureEvidence: (
    data: MsgSubmitBadSignatureEvidence
  ): EncodeObject => ({
    typeUrl: "/gravity.v1.MsgSubmitBadSignatureEvidence",
    value: MsgSubmitBadSignatureEvidence.fromPartial(data),
  }),
  msgSubmitBadSignatureEvidenceResponse: (
    data: MsgSubmitBadSignatureEvidenceResponse
  ): EncodeObject => ({
    typeUrl: "/gravity.v1.MsgSubmitBadSignatureEvidenceResponse",
    value: MsgSubmitBadSignatureEvidenceResponse.fromPartial(data),
  }),
  msgValsetConfirm: (data: MsgValsetConfirm): EncodeObject => ({
    typeUrl: "/gravity.v1.MsgValsetConfirm",
    value: MsgValsetConfirm.fromPartial(data),
  }),
  msgValsetConfirmResponse: (data: MsgValsetConfirmResponse): EncodeObject => ({
    typeUrl: "/gravity.v1.MsgValsetConfirmResponse",
    value: MsgValsetConfirmResponse.fromPartial(data),
  }),
  msgValsetUpdatedClaim: (data: MsgValsetUpdatedClaim): EncodeObject => ({
    typeUrl: "/gravity.v1.MsgValsetUpdatedClaim",
    value: MsgValsetUpdatedClaim.fromPartial(data),
  }),
  msgValsetUpdatedClaimResponse: (
    data: MsgValsetUpdatedClaimResponse
  ): EncodeObject => ({
    typeUrl: "/gravity.v1.MsgValsetUpdatedClaimResponse",
    value: MsgValsetUpdatedClaimResponse.fromPartial(data),
  }),
};

export { GravityExtension, msg, setupGravityExtension, types };
