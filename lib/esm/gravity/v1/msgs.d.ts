import { Coin } from "cosmjs-types/cosmos/base/v1beta1/coin";
import { Any } from "cosmjs-types/google/protobuf/any";
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Rpc } from "./helpers";
import { BridgeValidator } from "./types";
export declare const protobufPackage = "gravity.v1";
/**
 * MsgSetOrchestratorAddress
 * this message allows validators to delegate their voting responsibilities
 * to a given key. This key is then used as an optional authentication method
 * for sigining oracle claims
 * VALIDATOR
 * The validator field is a cosmosvaloper1... string (i.e. sdk.ValAddress)
 * that references a validator in the active set
 * ORCHESTRATOR
 * The orchestrator field is a cosmos1... string  (i.e. sdk.AccAddress) that
 * references the key that is being delegated to
 * ETH_ADDRESS
 * This is a hex encoded 0x Ethereum public key that will be used by this validator
 * on Ethereum
 */
export interface MsgSetOrchestratorAddress {
    validator: string;
    orchestrator: string;
    ethAddress: string;
}
export interface MsgSetOrchestratorAddressResponse {
}
/**
 * MsgValsetConfirm
 * this is the message sent by the validators when they wish to submit their
 * signatures over the validator set at a given block height. A validator must
 * first call MsgSetEthAddress to set their Ethereum address to be used for
 * signing. Then someone (anyone) must make a ValsetRequest, the request is
 * essentially a messaging mechanism to determine which block all validators
 * should submit signatures over. Finally validators sign the validator set,
 * powers, and Ethereum addresses of the entire validator set at the height of a
 * ValsetRequest and submit that signature with this message.
 *
 * If a sufficient number of validators (66% of voting power) (A) have set
 * Ethereum addresses and (B) submit ValsetConfirm messages with their
 * signatures it is then possible for anyone to view these signatures in the
 * chain store and submit them to Ethereum to update the validator set
 * -------------
 */
export interface MsgValsetConfirm {
    nonce: Long;
    orchestrator: string;
    ethAddress: string;
    signature: string;
}
export interface MsgValsetConfirmResponse {
}
/**
 * MsgSendToEth
 * This is the message that a user calls when they want to bridge an asset
 * it will later be removed when it is included in a batch and successfully
 * submitted tokens are removed from the users balance immediately
 * -------------
 * AMOUNT:
 * the coin to send across the bridge, note the restriction that this is a
 * single coin not a set of coins that is normal in other Cosmos messages
 * BRIDGE_FEE:
 * the fee paid for the bridge, distinct from the fee paid to the chain to
 * actually send this message in the first place. So a successful send has
 * two layers of fees for the user
 * CHAIN_FEE:
 * the fee paid to the chain for handling the request, which must be a
 * certain percentage of the AMOUNT, as determined by governance.
 * This Msg will be rejected if CHAIN_FEE is insufficient.
 */
export interface MsgSendToEth {
    sender: string;
    ethDest: string;
    amount?: Coin;
    bridgeFee?: Coin;
    chainFee?: Coin;
}
export interface MsgSendToEthResponse {
}
/**
 * MsgRequestBatch
 * this is a message anyone can send that requests a batch of transactions to
 * send across the bridge be created for whatever block height this message is
 * included in. This acts as a coordination point, the handler for this message
 * looks at the AddToOutgoingPool tx's in the store and generates a batch, also
 * available in the store tied to this message. The validators then grab this
 * batch, sign it, submit the signatures with a MsgConfirmBatch before a relayer
 * can finally submit the batch
 * -------------
 */
export interface MsgRequestBatch {
    sender: string;
    denom: string;
}
export interface MsgRequestBatchResponse {
}
/**
 * MsgConfirmBatch
 * When validators observe a MsgRequestBatch they form a batch by ordering
 * transactions currently in the txqueue in order of highest to lowest fee,
 * cutting off when the batch either reaches a hardcoded maximum size (to be
 * decided, probably around 100) or when transactions stop being profitable
 * (TODO determine this without nondeterminism) This message includes the batch
 * as well as an Ethereum signature over this batch by the validator
 * -------------
 */
export interface MsgConfirmBatch {
    nonce: Long;
    tokenContract: string;
    ethSigner: string;
    orchestrator: string;
    signature: string;
}
export interface MsgConfirmBatchResponse {
}
/**
 * MsgConfirmLogicCall
 * When validators observe a MsgRequestBatch they form a batch by ordering
 * transactions currently in the txqueue in order of highest to lowest fee,
 * cutting off when the batch either reaches a hardcoded maximum size (to be
 * decided, probably around 100) or when transactions stop being profitable
 * (TODO determine this without nondeterminism) This message includes the batch
 * as well as an Ethereum signature over this batch by the validator
 * -------------
 */
export interface MsgConfirmLogicCall {
    invalidationId: string;
    invalidationNonce: Long;
    ethSigner: string;
    orchestrator: string;
    signature: string;
}
export interface MsgConfirmLogicCallResponse {
}
/**
 * MsgSendToCosmosClaim
 * When more than 66% of the active validator set has
 * claimed to have seen the deposit enter the ethereum blockchain coins are
 * issued to the Cosmos address in question
 * -------------
 */
export interface MsgSendToCosmosClaim {
    eventNonce: Long;
    ethBlockHeight: Long;
    tokenContract: string;
    amount: string;
    ethereumSender: string;
    cosmosReceiver: string;
    orchestrator: string;
}
export interface MsgSendToCosmosClaimResponse {
}
/**
 * MsgExecuteIbcAutoForwards
 * Prompts the forwarding of Pending IBC Auto-Forwards in the queue
 * The Pending forwards will be executed in order of their original SendToCosmos.EventNonce
 * The funds in the queue will be sent to a local gravity-prefixed address if IBC transfer is not possible
 */
export interface MsgExecuteIbcAutoForwards {
    /** How many queued forwards to clear, be careful about gas limits */
    forwardsToClear: Long;
    /** This message's sender */
    executor: string;
}
export interface MsgExecuteIbcAutoForwardsResponse {
}
/**
 * BatchSendToEthClaim claims that a batch of send to eth
 * operations on the bridge contract was executed.
 */
export interface MsgBatchSendToEthClaim {
    eventNonce: Long;
    ethBlockHeight: Long;
    batchNonce: Long;
    tokenContract: string;
    orchestrator: string;
}
export interface MsgBatchSendToEthClaimResponse {
}
/**
 * ERC20DeployedClaim allows the Cosmos module
 * to learn about an ERC20 that someone deployed
 * to represent a Cosmos asset
 */
export interface MsgERC20DeployedClaim {
    eventNonce: Long;
    ethBlockHeight: Long;
    cosmosDenom: string;
    tokenContract: string;
    name: string;
    symbol: string;
    decimals: Long;
    orchestrator: string;
}
export interface MsgERC20DeployedClaimResponse {
}
/**
 * This informs the Cosmos module that a logic
 * call has been executed
 */
export interface MsgLogicCallExecutedClaim {
    eventNonce: Long;
    ethBlockHeight: Long;
    invalidationId: Uint8Array;
    invalidationNonce: Long;
    orchestrator: string;
}
export interface MsgLogicCallExecutedClaimResponse {
}
/**
 * This informs the Cosmos module that a validator
 * set has been updated.
 */
export interface MsgValsetUpdatedClaim {
    eventNonce: Long;
    valsetNonce: Long;
    ethBlockHeight: Long;
    members: BridgeValidator[];
    rewardAmount: string;
    rewardToken: string;
    orchestrator: string;
}
export interface MsgValsetUpdatedClaimResponse {
}
/**
 * This call allows the sender (and only the sender)
 * to cancel a given MsgSendToEth and recieve a refund
 * of the tokens
 */
export interface MsgCancelSendToEth {
    transactionId: Long;
    sender: string;
}
export interface MsgCancelSendToEthResponse {
}
/**
 * This call allows anyone to submit evidence that a
 * validator has signed a valset, batch, or logic call that never
 * existed on the Cosmos chain.
 * Subject contains the batch, valset, or logic call.
 */
export interface MsgSubmitBadSignatureEvidence {
    subject?: Any;
    signature: string;
    sender: string;
}
export interface MsgSubmitBadSignatureEvidenceResponse {
}
export interface EventSetOperatorAddress {
    message: string;
    address: string;
}
export interface EventValsetConfirmKey {
    message: string;
    key: string;
}
export interface EventBatchCreated {
    message: string;
    batchNonce: string;
}
export interface EventBatchConfirmKey {
    message: string;
    batchConfirmKey: string;
}
export interface EventBatchSendToEthClaim {
    nonce: string;
}
export interface EventClaim {
    message: string;
    claimHash: string;
    attestationId: string;
}
export interface EventBadSignatureEvidence {
    message: string;
    badEthSignature: string;
    badEthSignatureSubject: string;
}
export interface EventERC20DeployedClaim {
    token: string;
    nonce: string;
}
export interface EventValsetUpdatedClaim {
    nonce: string;
}
export interface EventMultisigUpdateRequest {
    bridgeContract: string;
    bridgeChainId: string;
    multisigId: string;
    nonce: string;
}
export interface EventOutgoingLogicCallCanceled {
    logicCallInvalidationId: string;
    logicCallInvalidationNonce: string;
}
export interface EventSignatureSlashing {
    type: string;
    address: string;
}
export interface EventOutgoingTxId {
    message: string;
    txId: string;
}
export interface EventSendToEthFeeCollected {
    sender: string;
    sendAmount: string;
    feeAmount: string;
}
export declare const MsgSetOrchestratorAddress: {
    encode(message: MsgSetOrchestratorAddress, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetOrchestratorAddress;
    fromJSON(object: any): MsgSetOrchestratorAddress;
    toJSON(message: MsgSetOrchestratorAddress): unknown;
    fromPartial(object: Partial<MsgSetOrchestratorAddress>): MsgSetOrchestratorAddress;
};
export declare const MsgSetOrchestratorAddressResponse: {
    encode(_: MsgSetOrchestratorAddressResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetOrchestratorAddressResponse;
    fromJSON(_: any): MsgSetOrchestratorAddressResponse;
    toJSON(_: MsgSetOrchestratorAddressResponse): unknown;
    fromPartial(_: Partial<MsgSetOrchestratorAddressResponse>): MsgSetOrchestratorAddressResponse;
};
export declare const MsgValsetConfirm: {
    encode(message: MsgValsetConfirm, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgValsetConfirm;
    fromJSON(object: any): MsgValsetConfirm;
    toJSON(message: MsgValsetConfirm): unknown;
    fromPartial(object: Partial<MsgValsetConfirm>): MsgValsetConfirm;
};
export declare const MsgValsetConfirmResponse: {
    encode(_: MsgValsetConfirmResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgValsetConfirmResponse;
    fromJSON(_: any): MsgValsetConfirmResponse;
    toJSON(_: MsgValsetConfirmResponse): unknown;
    fromPartial(_: Partial<MsgValsetConfirmResponse>): MsgValsetConfirmResponse;
};
export declare const MsgSendToEth: {
    encode(message: MsgSendToEth, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendToEth;
    fromJSON(object: any): MsgSendToEth;
    toJSON(message: MsgSendToEth): unknown;
    fromPartial(object: Partial<MsgSendToEth>): MsgSendToEth;
};
export declare const MsgSendToEthResponse: {
    encode(_: MsgSendToEthResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendToEthResponse;
    fromJSON(_: any): MsgSendToEthResponse;
    toJSON(_: MsgSendToEthResponse): unknown;
    fromPartial(_: Partial<MsgSendToEthResponse>): MsgSendToEthResponse;
};
export declare const MsgRequestBatch: {
    encode(message: MsgRequestBatch, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRequestBatch;
    fromJSON(object: any): MsgRequestBatch;
    toJSON(message: MsgRequestBatch): unknown;
    fromPartial(object: Partial<MsgRequestBatch>): MsgRequestBatch;
};
export declare const MsgRequestBatchResponse: {
    encode(_: MsgRequestBatchResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRequestBatchResponse;
    fromJSON(_: any): MsgRequestBatchResponse;
    toJSON(_: MsgRequestBatchResponse): unknown;
    fromPartial(_: Partial<MsgRequestBatchResponse>): MsgRequestBatchResponse;
};
export declare const MsgConfirmBatch: {
    encode(message: MsgConfirmBatch, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgConfirmBatch;
    fromJSON(object: any): MsgConfirmBatch;
    toJSON(message: MsgConfirmBatch): unknown;
    fromPartial(object: Partial<MsgConfirmBatch>): MsgConfirmBatch;
};
export declare const MsgConfirmBatchResponse: {
    encode(_: MsgConfirmBatchResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgConfirmBatchResponse;
    fromJSON(_: any): MsgConfirmBatchResponse;
    toJSON(_: MsgConfirmBatchResponse): unknown;
    fromPartial(_: Partial<MsgConfirmBatchResponse>): MsgConfirmBatchResponse;
};
export declare const MsgConfirmLogicCall: {
    encode(message: MsgConfirmLogicCall, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgConfirmLogicCall;
    fromJSON(object: any): MsgConfirmLogicCall;
    toJSON(message: MsgConfirmLogicCall): unknown;
    fromPartial(object: Partial<MsgConfirmLogicCall>): MsgConfirmLogicCall;
};
export declare const MsgConfirmLogicCallResponse: {
    encode(_: MsgConfirmLogicCallResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgConfirmLogicCallResponse;
    fromJSON(_: any): MsgConfirmLogicCallResponse;
    toJSON(_: MsgConfirmLogicCallResponse): unknown;
    fromPartial(_: Partial<MsgConfirmLogicCallResponse>): MsgConfirmLogicCallResponse;
};
export declare const MsgSendToCosmosClaim: {
    encode(message: MsgSendToCosmosClaim, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendToCosmosClaim;
    fromJSON(object: any): MsgSendToCosmosClaim;
    toJSON(message: MsgSendToCosmosClaim): unknown;
    fromPartial(object: Partial<MsgSendToCosmosClaim>): MsgSendToCosmosClaim;
};
export declare const MsgSendToCosmosClaimResponse: {
    encode(_: MsgSendToCosmosClaimResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendToCosmosClaimResponse;
    fromJSON(_: any): MsgSendToCosmosClaimResponse;
    toJSON(_: MsgSendToCosmosClaimResponse): unknown;
    fromPartial(_: Partial<MsgSendToCosmosClaimResponse>): MsgSendToCosmosClaimResponse;
};
export declare const MsgExecuteIbcAutoForwards: {
    encode(message: MsgExecuteIbcAutoForwards, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgExecuteIbcAutoForwards;
    fromJSON(object: any): MsgExecuteIbcAutoForwards;
    toJSON(message: MsgExecuteIbcAutoForwards): unknown;
    fromPartial(object: Partial<MsgExecuteIbcAutoForwards>): MsgExecuteIbcAutoForwards;
};
export declare const MsgExecuteIbcAutoForwardsResponse: {
    encode(_: MsgExecuteIbcAutoForwardsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgExecuteIbcAutoForwardsResponse;
    fromJSON(_: any): MsgExecuteIbcAutoForwardsResponse;
    toJSON(_: MsgExecuteIbcAutoForwardsResponse): unknown;
    fromPartial(_: Partial<MsgExecuteIbcAutoForwardsResponse>): MsgExecuteIbcAutoForwardsResponse;
};
export declare const MsgBatchSendToEthClaim: {
    encode(message: MsgBatchSendToEthClaim, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBatchSendToEthClaim;
    fromJSON(object: any): MsgBatchSendToEthClaim;
    toJSON(message: MsgBatchSendToEthClaim): unknown;
    fromPartial(object: Partial<MsgBatchSendToEthClaim>): MsgBatchSendToEthClaim;
};
export declare const MsgBatchSendToEthClaimResponse: {
    encode(_: MsgBatchSendToEthClaimResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBatchSendToEthClaimResponse;
    fromJSON(_: any): MsgBatchSendToEthClaimResponse;
    toJSON(_: MsgBatchSendToEthClaimResponse): unknown;
    fromPartial(_: Partial<MsgBatchSendToEthClaimResponse>): MsgBatchSendToEthClaimResponse;
};
export declare const MsgERC20DeployedClaim: {
    encode(message: MsgERC20DeployedClaim, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgERC20DeployedClaim;
    fromJSON(object: any): MsgERC20DeployedClaim;
    toJSON(message: MsgERC20DeployedClaim): unknown;
    fromPartial(object: Partial<MsgERC20DeployedClaim>): MsgERC20DeployedClaim;
};
export declare const MsgERC20DeployedClaimResponse: {
    encode(_: MsgERC20DeployedClaimResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgERC20DeployedClaimResponse;
    fromJSON(_: any): MsgERC20DeployedClaimResponse;
    toJSON(_: MsgERC20DeployedClaimResponse): unknown;
    fromPartial(_: Partial<MsgERC20DeployedClaimResponse>): MsgERC20DeployedClaimResponse;
};
export declare const MsgLogicCallExecutedClaim: {
    encode(message: MsgLogicCallExecutedClaim, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgLogicCallExecutedClaim;
    fromJSON(object: any): MsgLogicCallExecutedClaim;
    toJSON(message: MsgLogicCallExecutedClaim): unknown;
    fromPartial(object: Partial<MsgLogicCallExecutedClaim>): MsgLogicCallExecutedClaim;
};
export declare const MsgLogicCallExecutedClaimResponse: {
    encode(_: MsgLogicCallExecutedClaimResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgLogicCallExecutedClaimResponse;
    fromJSON(_: any): MsgLogicCallExecutedClaimResponse;
    toJSON(_: MsgLogicCallExecutedClaimResponse): unknown;
    fromPartial(_: Partial<MsgLogicCallExecutedClaimResponse>): MsgLogicCallExecutedClaimResponse;
};
export declare const MsgValsetUpdatedClaim: {
    encode(message: MsgValsetUpdatedClaim, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgValsetUpdatedClaim;
    fromJSON(object: any): MsgValsetUpdatedClaim;
    toJSON(message: MsgValsetUpdatedClaim): unknown;
    fromPartial(object: Partial<MsgValsetUpdatedClaim>): MsgValsetUpdatedClaim;
};
export declare const MsgValsetUpdatedClaimResponse: {
    encode(_: MsgValsetUpdatedClaimResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgValsetUpdatedClaimResponse;
    fromJSON(_: any): MsgValsetUpdatedClaimResponse;
    toJSON(_: MsgValsetUpdatedClaimResponse): unknown;
    fromPartial(_: Partial<MsgValsetUpdatedClaimResponse>): MsgValsetUpdatedClaimResponse;
};
export declare const MsgCancelSendToEth: {
    encode(message: MsgCancelSendToEth, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelSendToEth;
    fromJSON(object: any): MsgCancelSendToEth;
    toJSON(message: MsgCancelSendToEth): unknown;
    fromPartial(object: Partial<MsgCancelSendToEth>): MsgCancelSendToEth;
};
export declare const MsgCancelSendToEthResponse: {
    encode(_: MsgCancelSendToEthResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelSendToEthResponse;
    fromJSON(_: any): MsgCancelSendToEthResponse;
    toJSON(_: MsgCancelSendToEthResponse): unknown;
    fromPartial(_: Partial<MsgCancelSendToEthResponse>): MsgCancelSendToEthResponse;
};
export declare const MsgSubmitBadSignatureEvidence: {
    encode(message: MsgSubmitBadSignatureEvidence, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitBadSignatureEvidence;
    fromJSON(object: any): MsgSubmitBadSignatureEvidence;
    toJSON(message: MsgSubmitBadSignatureEvidence): unknown;
    fromPartial(object: Partial<MsgSubmitBadSignatureEvidence>): MsgSubmitBadSignatureEvidence;
};
export declare const MsgSubmitBadSignatureEvidenceResponse: {
    encode(_: MsgSubmitBadSignatureEvidenceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitBadSignatureEvidenceResponse;
    fromJSON(_: any): MsgSubmitBadSignatureEvidenceResponse;
    toJSON(_: MsgSubmitBadSignatureEvidenceResponse): unknown;
    fromPartial(_: Partial<MsgSubmitBadSignatureEvidenceResponse>): MsgSubmitBadSignatureEvidenceResponse;
};
export declare const EventSetOperatorAddress: {
    encode(message: EventSetOperatorAddress, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventSetOperatorAddress;
    fromJSON(object: any): EventSetOperatorAddress;
    toJSON(message: EventSetOperatorAddress): unknown;
    fromPartial(object: Partial<EventSetOperatorAddress>): EventSetOperatorAddress;
};
export declare const EventValsetConfirmKey: {
    encode(message: EventValsetConfirmKey, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventValsetConfirmKey;
    fromJSON(object: any): EventValsetConfirmKey;
    toJSON(message: EventValsetConfirmKey): unknown;
    fromPartial(object: Partial<EventValsetConfirmKey>): EventValsetConfirmKey;
};
export declare const EventBatchCreated: {
    encode(message: EventBatchCreated, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventBatchCreated;
    fromJSON(object: any): EventBatchCreated;
    toJSON(message: EventBatchCreated): unknown;
    fromPartial(object: Partial<EventBatchCreated>): EventBatchCreated;
};
export declare const EventBatchConfirmKey: {
    encode(message: EventBatchConfirmKey, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventBatchConfirmKey;
    fromJSON(object: any): EventBatchConfirmKey;
    toJSON(message: EventBatchConfirmKey): unknown;
    fromPartial(object: Partial<EventBatchConfirmKey>): EventBatchConfirmKey;
};
export declare const EventBatchSendToEthClaim: {
    encode(message: EventBatchSendToEthClaim, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventBatchSendToEthClaim;
    fromJSON(object: any): EventBatchSendToEthClaim;
    toJSON(message: EventBatchSendToEthClaim): unknown;
    fromPartial(object: Partial<EventBatchSendToEthClaim>): EventBatchSendToEthClaim;
};
export declare const EventClaim: {
    encode(message: EventClaim, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventClaim;
    fromJSON(object: any): EventClaim;
    toJSON(message: EventClaim): unknown;
    fromPartial(object: Partial<EventClaim>): EventClaim;
};
export declare const EventBadSignatureEvidence: {
    encode(message: EventBadSignatureEvidence, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventBadSignatureEvidence;
    fromJSON(object: any): EventBadSignatureEvidence;
    toJSON(message: EventBadSignatureEvidence): unknown;
    fromPartial(object: Partial<EventBadSignatureEvidence>): EventBadSignatureEvidence;
};
export declare const EventERC20DeployedClaim: {
    encode(message: EventERC20DeployedClaim, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventERC20DeployedClaim;
    fromJSON(object: any): EventERC20DeployedClaim;
    toJSON(message: EventERC20DeployedClaim): unknown;
    fromPartial(object: Partial<EventERC20DeployedClaim>): EventERC20DeployedClaim;
};
export declare const EventValsetUpdatedClaim: {
    encode(message: EventValsetUpdatedClaim, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventValsetUpdatedClaim;
    fromJSON(object: any): EventValsetUpdatedClaim;
    toJSON(message: EventValsetUpdatedClaim): unknown;
    fromPartial(object: Partial<EventValsetUpdatedClaim>): EventValsetUpdatedClaim;
};
export declare const EventMultisigUpdateRequest: {
    encode(message: EventMultisigUpdateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventMultisigUpdateRequest;
    fromJSON(object: any): EventMultisigUpdateRequest;
    toJSON(message: EventMultisigUpdateRequest): unknown;
    fromPartial(object: Partial<EventMultisigUpdateRequest>): EventMultisigUpdateRequest;
};
export declare const EventOutgoingLogicCallCanceled: {
    encode(message: EventOutgoingLogicCallCanceled, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventOutgoingLogicCallCanceled;
    fromJSON(object: any): EventOutgoingLogicCallCanceled;
    toJSON(message: EventOutgoingLogicCallCanceled): unknown;
    fromPartial(object: Partial<EventOutgoingLogicCallCanceled>): EventOutgoingLogicCallCanceled;
};
export declare const EventSignatureSlashing: {
    encode(message: EventSignatureSlashing, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventSignatureSlashing;
    fromJSON(object: any): EventSignatureSlashing;
    toJSON(message: EventSignatureSlashing): unknown;
    fromPartial(object: Partial<EventSignatureSlashing>): EventSignatureSlashing;
};
export declare const EventOutgoingTxId: {
    encode(message: EventOutgoingTxId, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventOutgoingTxId;
    fromJSON(object: any): EventOutgoingTxId;
    toJSON(message: EventOutgoingTxId): unknown;
    fromPartial(object: Partial<EventOutgoingTxId>): EventOutgoingTxId;
};
export declare const EventSendToEthFeeCollected: {
    encode(message: EventSendToEthFeeCollected, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventSendToEthFeeCollected;
    fromJSON(object: any): EventSendToEthFeeCollected;
    toJSON(message: EventSendToEthFeeCollected): unknown;
    fromPartial(object: Partial<EventSendToEthFeeCollected>): EventSendToEthFeeCollected;
};
/** Msg defines the state transitions possible within gravity */
export interface Msg {
    ValsetConfirm(request: MsgValsetConfirm): Promise<MsgValsetConfirmResponse>;
    SendToEth(request: MsgSendToEth): Promise<MsgSendToEthResponse>;
    RequestBatch(request: MsgRequestBatch): Promise<MsgRequestBatchResponse>;
    ConfirmBatch(request: MsgConfirmBatch): Promise<MsgConfirmBatchResponse>;
    ConfirmLogicCall(request: MsgConfirmLogicCall): Promise<MsgConfirmLogicCallResponse>;
    SendToCosmosClaim(request: MsgSendToCosmosClaim): Promise<MsgSendToCosmosClaimResponse>;
    ExecuteIbcAutoForwards(request: MsgExecuteIbcAutoForwards): Promise<MsgExecuteIbcAutoForwardsResponse>;
    BatchSendToEthClaim(request: MsgBatchSendToEthClaim): Promise<MsgBatchSendToEthClaimResponse>;
    ValsetUpdateClaim(request: MsgValsetUpdatedClaim): Promise<MsgValsetUpdatedClaimResponse>;
    ERC20DeployedClaim(request: MsgERC20DeployedClaim): Promise<MsgERC20DeployedClaimResponse>;
    LogicCallExecutedClaim(request: MsgLogicCallExecutedClaim): Promise<MsgLogicCallExecutedClaimResponse>;
    SetOrchestratorAddress(request: MsgSetOrchestratorAddress): Promise<MsgSetOrchestratorAddressResponse>;
    CancelSendToEth(request: MsgCancelSendToEth): Promise<MsgCancelSendToEthResponse>;
    SubmitBadSignatureEvidence(request: MsgSubmitBadSignatureEvidence): Promise<MsgSubmitBadSignatureEvidenceResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    ValsetConfirm(request: MsgValsetConfirm): Promise<MsgValsetConfirmResponse>;
    SendToEth(request: MsgSendToEth): Promise<MsgSendToEthResponse>;
    RequestBatch(request: MsgRequestBatch): Promise<MsgRequestBatchResponse>;
    ConfirmBatch(request: MsgConfirmBatch): Promise<MsgConfirmBatchResponse>;
    ConfirmLogicCall(request: MsgConfirmLogicCall): Promise<MsgConfirmLogicCallResponse>;
    SendToCosmosClaim(request: MsgSendToCosmosClaim): Promise<MsgSendToCosmosClaimResponse>;
    ExecuteIbcAutoForwards(request: MsgExecuteIbcAutoForwards): Promise<MsgExecuteIbcAutoForwardsResponse>;
    BatchSendToEthClaim(request: MsgBatchSendToEthClaim): Promise<MsgBatchSendToEthClaimResponse>;
    ValsetUpdateClaim(request: MsgValsetUpdatedClaim): Promise<MsgValsetUpdatedClaimResponse>;
    ERC20DeployedClaim(request: MsgERC20DeployedClaim): Promise<MsgERC20DeployedClaimResponse>;
    LogicCallExecutedClaim(request: MsgLogicCallExecutedClaim): Promise<MsgLogicCallExecutedClaimResponse>;
    SetOrchestratorAddress(request: MsgSetOrchestratorAddress): Promise<MsgSetOrchestratorAddressResponse>;
    CancelSendToEth(request: MsgCancelSendToEth): Promise<MsgCancelSendToEthResponse>;
    SubmitBadSignatureEvidence(request: MsgSubmitBadSignatureEvidence): Promise<MsgSubmitBadSignatureEvidenceResponse>;
}
