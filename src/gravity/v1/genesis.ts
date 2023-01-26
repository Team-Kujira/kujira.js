/* eslint-disable */
import { Coin } from "cosmjs-types/cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { Attestation } from "./attestation";
import {
  OutgoingLogicCall,
  OutgoingTransferTx,
  OutgoingTxBatch,
} from "./batch";
import { base64FromBytes, bytesFromBase64, isSet, Long } from "./helpers";
import {
  MsgConfirmBatch,
  MsgConfirmLogicCall,
  MsgSetOrchestratorAddress,
  MsgValsetConfirm,
} from "./msgs";
import { ERC20ToDenom, PendingIbcAutoForward, Valset } from "./types";
export const protobufPackage = "gravity.v1";
/**
 * The slashing fractions for the various gravity related slashing conditions. The first three
 * refer to not submitting a particular message, the third for submitting a different claim
 * for the same Ethereum event
 *
 * unbond_slashing_valsets_window
 *
 * The unbond slashing valsets window is used to determine how many blocks after starting to unbond
 * a validator needs to continue signing blocks. The goal of this paramater is that when a validator leaves
 * the set, if their leaving creates enough change in the validator set to justify an update they will sign
 * a validator set update for the Ethereum bridge that does not include themselves. Allowing us to remove them
 * from the Ethereum bridge and replace them with the new set gracefully.
 *
 * valset_reward
 *
 * These parameters allow for the bridge oracle to resolve a fork on the Ethereum chain without halting
 * the chain. Once set reset bridge state will roll back events to the nonce provided in reset_bridge_nonce
 * if and only if those events have not yet been observed (executed on the Cosmos chain). This allows for easy
 * handling of cases where for example an Ethereum hardfork has occured and more than 1/3 of the vlaidtor set
 * disagrees with the rest. Normally this would require a chain halt, manual genesis editing and restar to resolve
 * with this feature a governance proposal can be used instead
 *
 * bridge_active
 *
 * This boolean flag can be used by governance to temporarily halt the bridge due to a vulnerability or other issue
 * In this context halting the bridge means prevent the execution of any oracle events from Ethereum and preventing
 * the creation of new batches that may be relayed to Ethereum.
 * This does not prevent the creation of validator sets
 * or slashing for not submitting validator set signatures as either of these might allow key signers to leave the validator
 * set and steal funds on Ethereum without consequence.
 * The practical outcome of this flag being set to 'false' is that deposits from Ethereum will not show up and withdraws from
 * Cosmos will not execute on Ethereum.
 *
 * min_chain_fee_basis_points
 *
 * The minimum SendToEth `chain_fee` amount, in terms of basis points. e.g. 10% fee = 1000, and 0.02% fee = 2
 */

export interface Params {
  gravityId: string;
  contractSourceHash: string;
  bridgeEthereumAddress: string;
  bridgeChainId: Long;
  signedValsetsWindow: Long;
  signedBatchesWindow: Long;
  signedLogicCallsWindow: Long;
  targetBatchTimeout: Long;
  averageBlockTime: Long;
  averageEthereumBlockTime: Long;
  slashFractionValset: Uint8Array;
  slashFractionBatch: Uint8Array;
  slashFractionLogicCall: Uint8Array;
  unbondSlashingValsetsWindow: Long;
  slashFractionBadEthSignature: Uint8Array;
  valsetReward?: Coin;
  bridgeActive: boolean;
  /**
   * addresses on this blacklist are forbidden from depositing or withdrawing
   * from Ethereum to the bridge
   */

  ethereumBlacklist: string[];
  minChainFeeBasisPoints: Long;
}
/** GenesisState struct, containing all persistant data required by the Gravity module */

export interface GenesisState {
  params?: Params;
  gravityNonces?: GravityNonces;
  valsets: Valset[];
  valsetConfirms: MsgValsetConfirm[];
  batches: OutgoingTxBatch[];
  batchConfirms: MsgConfirmBatch[];
  logicCalls: OutgoingLogicCall[];
  logicCallConfirms: MsgConfirmLogicCall[];
  attestations: Attestation[];
  delegateKeys: MsgSetOrchestratorAddress[];
  erc20ToDenoms: ERC20ToDenom[];
  unbatchedTransfers: OutgoingTransferTx[];
  pendingIbcAutoForwards: PendingIbcAutoForward[];
}
/** GravityCounters contains the many noces and counters required to maintain the bridge state in the genesis */

export interface GravityNonces {
  /** the nonce of the last generated validator set */
  latestValsetNonce: Long;
  /** the last observed Gravity.sol contract event nonce */

  lastObservedNonce: Long;
  /** the last valset nonce we have slashed, to prevent double slashing */

  lastSlashedValsetNonce: Long;
  /**
   * the last batch Cosmos chain block that batch slashing has completed for
   * there is an individual batch nonce for each token type so this removes
   * the need to store them all
   */

  lastSlashedBatchBlock: Long;
  /** the last cosmos block that logic call slashing has completed for */

  lastSlashedLogicCallBlock: Long;
  /**
   * the last transaction id from the Gravity TX pool, this prevents ID
   * duplication during chain upgrades
   */

  lastTxPoolId: Long;
  /**
   * the last batch id from the Gravity batch pool, this prevents ID duplication
   * during chain upgrades
   */

  lastBatchId: Long;
}

function createBaseParams(): Params {
  return {
    gravityId: "",
    contractSourceHash: "",
    bridgeEthereumAddress: "",
    bridgeChainId: Long.UZERO,
    signedValsetsWindow: Long.UZERO,
    signedBatchesWindow: Long.UZERO,
    signedLogicCallsWindow: Long.UZERO,
    targetBatchTimeout: Long.UZERO,
    averageBlockTime: Long.UZERO,
    averageEthereumBlockTime: Long.UZERO,
    slashFractionValset: new Uint8Array(),
    slashFractionBatch: new Uint8Array(),
    slashFractionLogicCall: new Uint8Array(),
    unbondSlashingValsetsWindow: Long.UZERO,
    slashFractionBadEthSignature: new Uint8Array(),
    valsetReward: undefined,
    bridgeActive: false,
    ethereumBlacklist: [],
    minChainFeeBasisPoints: Long.UZERO,
  };
}

export const Params = {
  encode(
    message: Params,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.gravityId !== "") {
      writer.uint32(10).string(message.gravityId);
    }

    if (message.contractSourceHash !== "") {
      writer.uint32(18).string(message.contractSourceHash);
    }

    if (message.bridgeEthereumAddress !== "") {
      writer.uint32(34).string(message.bridgeEthereumAddress);
    }

    if (!message.bridgeChainId.isZero()) {
      writer.uint32(40).uint64(message.bridgeChainId);
    }

    if (!message.signedValsetsWindow.isZero()) {
      writer.uint32(48).uint64(message.signedValsetsWindow);
    }

    if (!message.signedBatchesWindow.isZero()) {
      writer.uint32(56).uint64(message.signedBatchesWindow);
    }

    if (!message.signedLogicCallsWindow.isZero()) {
      writer.uint32(64).uint64(message.signedLogicCallsWindow);
    }

    if (!message.targetBatchTimeout.isZero()) {
      writer.uint32(72).uint64(message.targetBatchTimeout);
    }

    if (!message.averageBlockTime.isZero()) {
      writer.uint32(80).uint64(message.averageBlockTime);
    }

    if (!message.averageEthereumBlockTime.isZero()) {
      writer.uint32(88).uint64(message.averageEthereumBlockTime);
    }

    if (message.slashFractionValset.length !== 0) {
      writer.uint32(98).bytes(message.slashFractionValset);
    }

    if (message.slashFractionBatch.length !== 0) {
      writer.uint32(106).bytes(message.slashFractionBatch);
    }

    if (message.slashFractionLogicCall.length !== 0) {
      writer.uint32(114).bytes(message.slashFractionLogicCall);
    }

    if (!message.unbondSlashingValsetsWindow.isZero()) {
      writer.uint32(120).uint64(message.unbondSlashingValsetsWindow);
    }

    if (message.slashFractionBadEthSignature.length !== 0) {
      writer.uint32(130).bytes(message.slashFractionBadEthSignature);
    }

    if (message.valsetReward !== undefined) {
      Coin.encode(message.valsetReward, writer.uint32(138).fork()).ldelim();
    }

    if (message.bridgeActive === true) {
      writer.uint32(144).bool(message.bridgeActive);
    }

    for (const v of message.ethereumBlacklist) {
      writer.uint32(154).string(v!);
    }

    if (!message.minChainFeeBasisPoints.isZero()) {
      writer.uint32(160).uint64(message.minChainFeeBasisPoints);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.gravityId = reader.string();
          break;

        case 2:
          message.contractSourceHash = reader.string();
          break;

        case 4:
          message.bridgeEthereumAddress = reader.string();
          break;

        case 5:
          message.bridgeChainId = reader.uint64() as Long;
          break;

        case 6:
          message.signedValsetsWindow = reader.uint64() as Long;
          break;

        case 7:
          message.signedBatchesWindow = reader.uint64() as Long;
          break;

        case 8:
          message.signedLogicCallsWindow = reader.uint64() as Long;
          break;

        case 9:
          message.targetBatchTimeout = reader.uint64() as Long;
          break;

        case 10:
          message.averageBlockTime = reader.uint64() as Long;
          break;

        case 11:
          message.averageEthereumBlockTime = reader.uint64() as Long;
          break;

        case 12:
          message.slashFractionValset = reader.bytes();
          break;

        case 13:
          message.slashFractionBatch = reader.bytes();
          break;

        case 14:
          message.slashFractionLogicCall = reader.bytes();
          break;

        case 15:
          message.unbondSlashingValsetsWindow = reader.uint64() as Long;
          break;

        case 16:
          message.slashFractionBadEthSignature = reader.bytes();
          break;

        case 17:
          message.valsetReward = Coin.decode(reader, reader.uint32());
          break;

        case 18:
          message.bridgeActive = reader.bool();
          break;

        case 19:
          message.ethereumBlacklist.push(reader.string());
          break;

        case 20:
          message.minChainFeeBasisPoints = reader.uint64() as Long;
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Params {
    return {
      gravityId: isSet(object.gravityId) ? String(object.gravityId) : "",
      contractSourceHash: isSet(object.contractSourceHash)
        ? String(object.contractSourceHash)
        : "",
      bridgeEthereumAddress: isSet(object.bridgeEthereumAddress)
        ? String(object.bridgeEthereumAddress)
        : "",
      bridgeChainId: isSet(object.bridgeChainId)
        ? Long.fromValue(object.bridgeChainId)
        : Long.UZERO,
      signedValsetsWindow: isSet(object.signedValsetsWindow)
        ? Long.fromValue(object.signedValsetsWindow)
        : Long.UZERO,
      signedBatchesWindow: isSet(object.signedBatchesWindow)
        ? Long.fromValue(object.signedBatchesWindow)
        : Long.UZERO,
      signedLogicCallsWindow: isSet(object.signedLogicCallsWindow)
        ? Long.fromValue(object.signedLogicCallsWindow)
        : Long.UZERO,
      targetBatchTimeout: isSet(object.targetBatchTimeout)
        ? Long.fromValue(object.targetBatchTimeout)
        : Long.UZERO,
      averageBlockTime: isSet(object.averageBlockTime)
        ? Long.fromValue(object.averageBlockTime)
        : Long.UZERO,
      averageEthereumBlockTime: isSet(object.averageEthereumBlockTime)
        ? Long.fromValue(object.averageEthereumBlockTime)
        : Long.UZERO,
      slashFractionValset: isSet(object.slashFractionValset)
        ? bytesFromBase64(object.slashFractionValset)
        : new Uint8Array(),
      slashFractionBatch: isSet(object.slashFractionBatch)
        ? bytesFromBase64(object.slashFractionBatch)
        : new Uint8Array(),
      slashFractionLogicCall: isSet(object.slashFractionLogicCall)
        ? bytesFromBase64(object.slashFractionLogicCall)
        : new Uint8Array(),
      unbondSlashingValsetsWindow: isSet(object.unbondSlashingValsetsWindow)
        ? Long.fromValue(object.unbondSlashingValsetsWindow)
        : Long.UZERO,
      slashFractionBadEthSignature: isSet(object.slashFractionBadEthSignature)
        ? bytesFromBase64(object.slashFractionBadEthSignature)
        : new Uint8Array(),
      valsetReward: isSet(object.valsetReward)
        ? Coin.fromJSON(object.valsetReward)
        : undefined,
      bridgeActive: isSet(object.bridgeActive)
        ? Boolean(object.bridgeActive)
        : false,
      ethereumBlacklist: Array.isArray(object?.ethereumBlacklist)
        ? object.ethereumBlacklist.map((e: any) => String(e))
        : [],
      minChainFeeBasisPoints: isSet(object.minChainFeeBasisPoints)
        ? Long.fromValue(object.minChainFeeBasisPoints)
        : Long.UZERO,
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.gravityId !== undefined && (obj.gravityId = message.gravityId);
    message.contractSourceHash !== undefined &&
      (obj.contractSourceHash = message.contractSourceHash);
    message.bridgeEthereumAddress !== undefined &&
      (obj.bridgeEthereumAddress = message.bridgeEthereumAddress);
    message.bridgeChainId !== undefined &&
      (obj.bridgeChainId = (message.bridgeChainId || Long.UZERO).toString());
    message.signedValsetsWindow !== undefined &&
      (obj.signedValsetsWindow = (
        message.signedValsetsWindow || Long.UZERO
      ).toString());
    message.signedBatchesWindow !== undefined &&
      (obj.signedBatchesWindow = (
        message.signedBatchesWindow || Long.UZERO
      ).toString());
    message.signedLogicCallsWindow !== undefined &&
      (obj.signedLogicCallsWindow = (
        message.signedLogicCallsWindow || Long.UZERO
      ).toString());
    message.targetBatchTimeout !== undefined &&
      (obj.targetBatchTimeout = (
        message.targetBatchTimeout || Long.UZERO
      ).toString());
    message.averageBlockTime !== undefined &&
      (obj.averageBlockTime = (
        message.averageBlockTime || Long.UZERO
      ).toString());
    message.averageEthereumBlockTime !== undefined &&
      (obj.averageEthereumBlockTime = (
        message.averageEthereumBlockTime || Long.UZERO
      ).toString());
    message.slashFractionValset !== undefined &&
      (obj.slashFractionValset = base64FromBytes(
        message.slashFractionValset !== undefined
          ? message.slashFractionValset
          : new Uint8Array()
      ));
    message.slashFractionBatch !== undefined &&
      (obj.slashFractionBatch = base64FromBytes(
        message.slashFractionBatch !== undefined
          ? message.slashFractionBatch
          : new Uint8Array()
      ));
    message.slashFractionLogicCall !== undefined &&
      (obj.slashFractionLogicCall = base64FromBytes(
        message.slashFractionLogicCall !== undefined
          ? message.slashFractionLogicCall
          : new Uint8Array()
      ));
    message.unbondSlashingValsetsWindow !== undefined &&
      (obj.unbondSlashingValsetsWindow = (
        message.unbondSlashingValsetsWindow || Long.UZERO
      ).toString());
    message.slashFractionBadEthSignature !== undefined &&
      (obj.slashFractionBadEthSignature = base64FromBytes(
        message.slashFractionBadEthSignature !== undefined
          ? message.slashFractionBadEthSignature
          : new Uint8Array()
      ));
    message.valsetReward !== undefined &&
      (obj.valsetReward = message.valsetReward
        ? Coin.toJSON(message.valsetReward)
        : undefined);
    message.bridgeActive !== undefined &&
      (obj.bridgeActive = message.bridgeActive);

    if (message.ethereumBlacklist) {
      obj.ethereumBlacklist = message.ethereumBlacklist.map((e) => e);
    } else {
      obj.ethereumBlacklist = [];
    }

    message.minChainFeeBasisPoints !== undefined &&
      (obj.minChainFeeBasisPoints = (
        message.minChainFeeBasisPoints || Long.UZERO
      ).toString());
    return obj;
  },

  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.gravityId = object.gravityId ?? "";
    message.contractSourceHash = object.contractSourceHash ?? "";
    message.bridgeEthereumAddress = object.bridgeEthereumAddress ?? "";
    message.bridgeChainId =
      object.bridgeChainId !== undefined && object.bridgeChainId !== null
        ? Long.fromValue(object.bridgeChainId)
        : Long.UZERO;
    message.signedValsetsWindow =
      object.signedValsetsWindow !== undefined &&
      object.signedValsetsWindow !== null
        ? Long.fromValue(object.signedValsetsWindow)
        : Long.UZERO;
    message.signedBatchesWindow =
      object.signedBatchesWindow !== undefined &&
      object.signedBatchesWindow !== null
        ? Long.fromValue(object.signedBatchesWindow)
        : Long.UZERO;
    message.signedLogicCallsWindow =
      object.signedLogicCallsWindow !== undefined &&
      object.signedLogicCallsWindow !== null
        ? Long.fromValue(object.signedLogicCallsWindow)
        : Long.UZERO;
    message.targetBatchTimeout =
      object.targetBatchTimeout !== undefined &&
      object.targetBatchTimeout !== null
        ? Long.fromValue(object.targetBatchTimeout)
        : Long.UZERO;
    message.averageBlockTime =
      object.averageBlockTime !== undefined && object.averageBlockTime !== null
        ? Long.fromValue(object.averageBlockTime)
        : Long.UZERO;
    message.averageEthereumBlockTime =
      object.averageEthereumBlockTime !== undefined &&
      object.averageEthereumBlockTime !== null
        ? Long.fromValue(object.averageEthereumBlockTime)
        : Long.UZERO;
    message.slashFractionValset =
      object.slashFractionValset ?? new Uint8Array();
    message.slashFractionBatch = object.slashFractionBatch ?? new Uint8Array();
    message.slashFractionLogicCall =
      object.slashFractionLogicCall ?? new Uint8Array();
    message.unbondSlashingValsetsWindow =
      object.unbondSlashingValsetsWindow !== undefined &&
      object.unbondSlashingValsetsWindow !== null
        ? Long.fromValue(object.unbondSlashingValsetsWindow)
        : Long.UZERO;
    message.slashFractionBadEthSignature =
      object.slashFractionBadEthSignature ?? new Uint8Array();
    message.valsetReward =
      object.valsetReward !== undefined && object.valsetReward !== null
        ? Coin.fromPartial(object.valsetReward)
        : undefined;
    message.bridgeActive = object.bridgeActive ?? false;
    message.ethereumBlacklist = object.ethereumBlacklist?.map((e) => e) || [];
    message.minChainFeeBasisPoints =
      object.minChainFeeBasisPoints !== undefined &&
      object.minChainFeeBasisPoints !== null
        ? Long.fromValue(object.minChainFeeBasisPoints)
        : Long.UZERO;
    return message;
  },
};

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    gravityNonces: undefined,
    valsets: [],
    valsetConfirms: [],
    batches: [],
    batchConfirms: [],
    logicCalls: [],
    logicCallConfirms: [],
    attestations: [],
    delegateKeys: [],
    erc20ToDenoms: [],
    unbatchedTransfers: [],
    pendingIbcAutoForwards: [],
  };
}

export const GenesisState = {
  encode(
    message: GenesisState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    if (message.gravityNonces !== undefined) {
      GravityNonces.encode(
        message.gravityNonces,
        writer.uint32(18).fork()
      ).ldelim();
    }

    for (const v of message.valsets) {
      Valset.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    for (const v of message.valsetConfirms) {
      MsgValsetConfirm.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    for (const v of message.batches) {
      OutgoingTxBatch.encode(v!, writer.uint32(42).fork()).ldelim();
    }

    for (const v of message.batchConfirms) {
      MsgConfirmBatch.encode(v!, writer.uint32(50).fork()).ldelim();
    }

    for (const v of message.logicCalls) {
      OutgoingLogicCall.encode(v!, writer.uint32(58).fork()).ldelim();
    }

    for (const v of message.logicCallConfirms) {
      MsgConfirmLogicCall.encode(v!, writer.uint32(66).fork()).ldelim();
    }

    for (const v of message.attestations) {
      Attestation.encode(v!, writer.uint32(74).fork()).ldelim();
    }

    for (const v of message.delegateKeys) {
      MsgSetOrchestratorAddress.encode(v!, writer.uint32(82).fork()).ldelim();
    }

    for (const v of message.erc20ToDenoms) {
      ERC20ToDenom.encode(v!, writer.uint32(90).fork()).ldelim();
    }

    for (const v of message.unbatchedTransfers) {
      OutgoingTransferTx.encode(v!, writer.uint32(98).fork()).ldelim();
    }

    for (const v of message.pendingIbcAutoForwards) {
      PendingIbcAutoForward.encode(v!, writer.uint32(106).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;

        case 2:
          message.gravityNonces = GravityNonces.decode(reader, reader.uint32());
          break;

        case 3:
          message.valsets.push(Valset.decode(reader, reader.uint32()));
          break;

        case 4:
          message.valsetConfirms.push(
            MsgValsetConfirm.decode(reader, reader.uint32())
          );
          break;

        case 5:
          message.batches.push(OutgoingTxBatch.decode(reader, reader.uint32()));
          break;

        case 6:
          message.batchConfirms.push(
            MsgConfirmBatch.decode(reader, reader.uint32())
          );
          break;

        case 7:
          message.logicCalls.push(
            OutgoingLogicCall.decode(reader, reader.uint32())
          );
          break;

        case 8:
          message.logicCallConfirms.push(
            MsgConfirmLogicCall.decode(reader, reader.uint32())
          );
          break;

        case 9:
          message.attestations.push(
            Attestation.decode(reader, reader.uint32())
          );
          break;

        case 10:
          message.delegateKeys.push(
            MsgSetOrchestratorAddress.decode(reader, reader.uint32())
          );
          break;

        case 11:
          message.erc20ToDenoms.push(
            ERC20ToDenom.decode(reader, reader.uint32())
          );
          break;

        case 12:
          message.unbatchedTransfers.push(
            OutgoingTransferTx.decode(reader, reader.uint32())
          );
          break;

        case 13:
          message.pendingIbcAutoForwards.push(
            PendingIbcAutoForward.decode(reader, reader.uint32())
          );
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      gravityNonces: isSet(object.gravityNonces)
        ? GravityNonces.fromJSON(object.gravityNonces)
        : undefined,
      valsets: Array.isArray(object?.valsets)
        ? object.valsets.map((e: any) => Valset.fromJSON(e))
        : [],
      valsetConfirms: Array.isArray(object?.valsetConfirms)
        ? object.valsetConfirms.map((e: any) => MsgValsetConfirm.fromJSON(e))
        : [],
      batches: Array.isArray(object?.batches)
        ? object.batches.map((e: any) => OutgoingTxBatch.fromJSON(e))
        : [],
      batchConfirms: Array.isArray(object?.batchConfirms)
        ? object.batchConfirms.map((e: any) => MsgConfirmBatch.fromJSON(e))
        : [],
      logicCalls: Array.isArray(object?.logicCalls)
        ? object.logicCalls.map((e: any) => OutgoingLogicCall.fromJSON(e))
        : [],
      logicCallConfirms: Array.isArray(object?.logicCallConfirms)
        ? object.logicCallConfirms.map((e: any) =>
            MsgConfirmLogicCall.fromJSON(e)
          )
        : [],
      attestations: Array.isArray(object?.attestations)
        ? object.attestations.map((e: any) => Attestation.fromJSON(e))
        : [],
      delegateKeys: Array.isArray(object?.delegateKeys)
        ? object.delegateKeys.map((e: any) =>
            MsgSetOrchestratorAddress.fromJSON(e)
          )
        : [],
      erc20ToDenoms: Array.isArray(object?.erc20ToDenoms)
        ? object.erc20ToDenoms.map((e: any) => ERC20ToDenom.fromJSON(e))
        : [],
      unbatchedTransfers: Array.isArray(object?.unbatchedTransfers)
        ? object.unbatchedTransfers.map((e: any) =>
            OutgoingTransferTx.fromJSON(e)
          )
        : [],
      pendingIbcAutoForwards: Array.isArray(object?.pendingIbcAutoForwards)
        ? object.pendingIbcAutoForwards.map((e: any) =>
            PendingIbcAutoForward.fromJSON(e)
          )
        : [],
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.gravityNonces !== undefined &&
      (obj.gravityNonces = message.gravityNonces
        ? GravityNonces.toJSON(message.gravityNonces)
        : undefined);

    if (message.valsets) {
      obj.valsets = message.valsets.map((e) =>
        e ? Valset.toJSON(e) : undefined
      );
    } else {
      obj.valsets = [];
    }

    if (message.valsetConfirms) {
      obj.valsetConfirms = message.valsetConfirms.map((e) =>
        e ? MsgValsetConfirm.toJSON(e) : undefined
      );
    } else {
      obj.valsetConfirms = [];
    }

    if (message.batches) {
      obj.batches = message.batches.map((e) =>
        e ? OutgoingTxBatch.toJSON(e) : undefined
      );
    } else {
      obj.batches = [];
    }

    if (message.batchConfirms) {
      obj.batchConfirms = message.batchConfirms.map((e) =>
        e ? MsgConfirmBatch.toJSON(e) : undefined
      );
    } else {
      obj.batchConfirms = [];
    }

    if (message.logicCalls) {
      obj.logicCalls = message.logicCalls.map((e) =>
        e ? OutgoingLogicCall.toJSON(e) : undefined
      );
    } else {
      obj.logicCalls = [];
    }

    if (message.logicCallConfirms) {
      obj.logicCallConfirms = message.logicCallConfirms.map((e) =>
        e ? MsgConfirmLogicCall.toJSON(e) : undefined
      );
    } else {
      obj.logicCallConfirms = [];
    }

    if (message.attestations) {
      obj.attestations = message.attestations.map((e) =>
        e ? Attestation.toJSON(e) : undefined
      );
    } else {
      obj.attestations = [];
    }

    if (message.delegateKeys) {
      obj.delegateKeys = message.delegateKeys.map((e) =>
        e ? MsgSetOrchestratorAddress.toJSON(e) : undefined
      );
    } else {
      obj.delegateKeys = [];
    }

    if (message.erc20ToDenoms) {
      obj.erc20ToDenoms = message.erc20ToDenoms.map((e) =>
        e ? ERC20ToDenom.toJSON(e) : undefined
      );
    } else {
      obj.erc20ToDenoms = [];
    }

    if (message.unbatchedTransfers) {
      obj.unbatchedTransfers = message.unbatchedTransfers.map((e) =>
        e ? OutgoingTransferTx.toJSON(e) : undefined
      );
    } else {
      obj.unbatchedTransfers = [];
    }

    if (message.pendingIbcAutoForwards) {
      obj.pendingIbcAutoForwards = message.pendingIbcAutoForwards.map((e) =>
        e ? PendingIbcAutoForward.toJSON(e) : undefined
      );
    } else {
      obj.pendingIbcAutoForwards = [];
    }

    return obj;
  },

  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromPartial(object.params)
        : undefined;
    message.gravityNonces =
      object.gravityNonces !== undefined && object.gravityNonces !== null
        ? GravityNonces.fromPartial(object.gravityNonces)
        : undefined;
    message.valsets = object.valsets?.map((e) => Valset.fromPartial(e)) || [];
    message.valsetConfirms =
      object.valsetConfirms?.map((e) => MsgValsetConfirm.fromPartial(e)) || [];
    message.batches =
      object.batches?.map((e) => OutgoingTxBatch.fromPartial(e)) || [];
    message.batchConfirms =
      object.batchConfirms?.map((e) => MsgConfirmBatch.fromPartial(e)) || [];
    message.logicCalls =
      object.logicCalls?.map((e) => OutgoingLogicCall.fromPartial(e)) || [];
    message.logicCallConfirms =
      object.logicCallConfirms?.map((e) =>
        MsgConfirmLogicCall.fromPartial(e)
      ) || [];
    message.attestations =
      object.attestations?.map((e) => Attestation.fromPartial(e)) || [];
    message.delegateKeys =
      object.delegateKeys?.map((e) =>
        MsgSetOrchestratorAddress.fromPartial(e)
      ) || [];
    message.erc20ToDenoms =
      object.erc20ToDenoms?.map((e) => ERC20ToDenom.fromPartial(e)) || [];
    message.unbatchedTransfers =
      object.unbatchedTransfers?.map((e) =>
        OutgoingTransferTx.fromPartial(e)
      ) || [];
    message.pendingIbcAutoForwards =
      object.pendingIbcAutoForwards?.map((e) =>
        PendingIbcAutoForward.fromPartial(e)
      ) || [];
    return message;
  },
};

function createBaseGravityNonces(): GravityNonces {
  return {
    latestValsetNonce: Long.UZERO,
    lastObservedNonce: Long.UZERO,
    lastSlashedValsetNonce: Long.UZERO,
    lastSlashedBatchBlock: Long.UZERO,
    lastSlashedLogicCallBlock: Long.UZERO,
    lastTxPoolId: Long.UZERO,
    lastBatchId: Long.UZERO,
  };
}

export const GravityNonces = {
  encode(
    message: GravityNonces,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.latestValsetNonce.isZero()) {
      writer.uint32(8).uint64(message.latestValsetNonce);
    }

    if (!message.lastObservedNonce.isZero()) {
      writer.uint32(16).uint64(message.lastObservedNonce);
    }

    if (!message.lastSlashedValsetNonce.isZero()) {
      writer.uint32(24).uint64(message.lastSlashedValsetNonce);
    }

    if (!message.lastSlashedBatchBlock.isZero()) {
      writer.uint32(32).uint64(message.lastSlashedBatchBlock);
    }

    if (!message.lastSlashedLogicCallBlock.isZero()) {
      writer.uint32(40).uint64(message.lastSlashedLogicCallBlock);
    }

    if (!message.lastTxPoolId.isZero()) {
      writer.uint32(48).uint64(message.lastTxPoolId);
    }

    if (!message.lastBatchId.isZero()) {
      writer.uint32(56).uint64(message.lastBatchId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GravityNonces {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGravityNonces();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.latestValsetNonce = reader.uint64() as Long;
          break;

        case 2:
          message.lastObservedNonce = reader.uint64() as Long;
          break;

        case 3:
          message.lastSlashedValsetNonce = reader.uint64() as Long;
          break;

        case 4:
          message.lastSlashedBatchBlock = reader.uint64() as Long;
          break;

        case 5:
          message.lastSlashedLogicCallBlock = reader.uint64() as Long;
          break;

        case 6:
          message.lastTxPoolId = reader.uint64() as Long;
          break;

        case 7:
          message.lastBatchId = reader.uint64() as Long;
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): GravityNonces {
    return {
      latestValsetNonce: isSet(object.latestValsetNonce)
        ? Long.fromValue(object.latestValsetNonce)
        : Long.UZERO,
      lastObservedNonce: isSet(object.lastObservedNonce)
        ? Long.fromValue(object.lastObservedNonce)
        : Long.UZERO,
      lastSlashedValsetNonce: isSet(object.lastSlashedValsetNonce)
        ? Long.fromValue(object.lastSlashedValsetNonce)
        : Long.UZERO,
      lastSlashedBatchBlock: isSet(object.lastSlashedBatchBlock)
        ? Long.fromValue(object.lastSlashedBatchBlock)
        : Long.UZERO,
      lastSlashedLogicCallBlock: isSet(object.lastSlashedLogicCallBlock)
        ? Long.fromValue(object.lastSlashedLogicCallBlock)
        : Long.UZERO,
      lastTxPoolId: isSet(object.lastTxPoolId)
        ? Long.fromValue(object.lastTxPoolId)
        : Long.UZERO,
      lastBatchId: isSet(object.lastBatchId)
        ? Long.fromValue(object.lastBatchId)
        : Long.UZERO,
    };
  },

  toJSON(message: GravityNonces): unknown {
    const obj: any = {};
    message.latestValsetNonce !== undefined &&
      (obj.latestValsetNonce = (
        message.latestValsetNonce || Long.UZERO
      ).toString());
    message.lastObservedNonce !== undefined &&
      (obj.lastObservedNonce = (
        message.lastObservedNonce || Long.UZERO
      ).toString());
    message.lastSlashedValsetNonce !== undefined &&
      (obj.lastSlashedValsetNonce = (
        message.lastSlashedValsetNonce || Long.UZERO
      ).toString());
    message.lastSlashedBatchBlock !== undefined &&
      (obj.lastSlashedBatchBlock = (
        message.lastSlashedBatchBlock || Long.UZERO
      ).toString());
    message.lastSlashedLogicCallBlock !== undefined &&
      (obj.lastSlashedLogicCallBlock = (
        message.lastSlashedLogicCallBlock || Long.UZERO
      ).toString());
    message.lastTxPoolId !== undefined &&
      (obj.lastTxPoolId = (message.lastTxPoolId || Long.UZERO).toString());
    message.lastBatchId !== undefined &&
      (obj.lastBatchId = (message.lastBatchId || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: Partial<GravityNonces>): GravityNonces {
    const message = createBaseGravityNonces();
    message.latestValsetNonce =
      object.latestValsetNonce !== undefined &&
      object.latestValsetNonce !== null
        ? Long.fromValue(object.latestValsetNonce)
        : Long.UZERO;
    message.lastObservedNonce =
      object.lastObservedNonce !== undefined &&
      object.lastObservedNonce !== null
        ? Long.fromValue(object.lastObservedNonce)
        : Long.UZERO;
    message.lastSlashedValsetNonce =
      object.lastSlashedValsetNonce !== undefined &&
      object.lastSlashedValsetNonce !== null
        ? Long.fromValue(object.lastSlashedValsetNonce)
        : Long.UZERO;
    message.lastSlashedBatchBlock =
      object.lastSlashedBatchBlock !== undefined &&
      object.lastSlashedBatchBlock !== null
        ? Long.fromValue(object.lastSlashedBatchBlock)
        : Long.UZERO;
    message.lastSlashedLogicCallBlock =
      object.lastSlashedLogicCallBlock !== undefined &&
      object.lastSlashedLogicCallBlock !== null
        ? Long.fromValue(object.lastSlashedLogicCallBlock)
        : Long.UZERO;
    message.lastTxPoolId =
      object.lastTxPoolId !== undefined && object.lastTxPoolId !== null
        ? Long.fromValue(object.lastTxPoolId)
        : Long.UZERO;
    message.lastBatchId =
      object.lastBatchId !== undefined && object.lastBatchId !== null
        ? Long.fromValue(object.lastBatchId)
        : Long.UZERO;
    return message;
  },
};
