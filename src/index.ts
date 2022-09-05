import { Registry } from "@cosmjs/proto-signing";
import {
  AminoTypes,
  AminoConverters,
  AminoConverter,
  createAuthzAminoConverters,
  createBankAminoConverters,
  createDistributionAminoConverters,
  createGovAminoConverters,
  createStakingAminoConverters,
  createIbcAminoConverters,
  createFreegrantAminoConverters,
} from "@cosmjs/stargate";
import { toUtf8 } from "@cosmjs/encoding";
import { createWasmAminoConverters } from "@cosmjs/cosmwasm-stargate";
import Long from "long";
import { util, configure } from "protobufjs/minimal";

import * as auth from "./cosmos/cosmos-sdk/cosmos.auth.v1beta1";
import * as authz from "./cosmos/cosmos-sdk/cosmos.authz.v1beta1";
import * as bank from "./cosmos/cosmos-sdk/cosmos.bank.v1beta1";
import * as crisis from "./cosmos/cosmos-sdk/cosmos.crisis.v1beta1";
import * as denom from "./kujira/kujira.denom";
import * as distribution from "./cosmos/cosmos-sdk/cosmos.distribution.v1beta1";
import * as evidence from "./cosmos/cosmos-sdk/cosmos.evidence.v1beta1";
import * as feegrant from "./cosmos/cosmos-sdk/cosmos.feegrant.v1beta1";
import * as gov from "./cosmos/cosmos-sdk/cosmos.gov.v1beta1";
import * as ibcTransfer from "./ibc-go/v3/ibc.applications.transfer.v1";
import * as oracle from "./kujira/kujira.oracle";
import * as params from "./cosmos/cosmos-sdk/cosmos.params.v1beta1";
import * as scheduler from "./kujira/kujira.scheduler";
import * as slashing from "./cosmos/cosmos-sdk/cosmos.slashing.v1beta1";
import * as staking from "./cosmos/cosmos-sdk/cosmos.staking.v1beta1";
import * as tendermint from "./cosmos/cosmos-sdk/cosmos.base.tendermint.v1beta1";
import * as tx_ from "./cosmos/cosmos-sdk/cosmos.tx.v1beta1";
import * as vesting from "./cosmos/cosmos-sdk/cosmos.vesting.v1beta1";
import * as wasm from "./CosmWasm/wasmd/cosmwasm.wasm.v1";
import * as ethermintEvm from "./evmos/ethermint/ethermint.evm.v1";
import * as ethermintFeemarket from "./evmos/ethermint/ethermint.feemarket.v1";

export { ProtobufAny } from "./types";

export {
  BaseAccount,
  ModuleAccount,
} from "./cosmos/cosmos-sdk/cosmos.auth.v1beta1/types/auth";
export {
  V1Beta1Coin,
  V1Beta1DenomUnit,
  V1Beta1Input,
  V1Beta1Output,
  V1Beta1Metadata,
} from "./cosmos/cosmos-sdk/cosmos.bank.v1beta1/rest";
export { MsgSend } from "./cosmos/cosmos-sdk/cosmos.bank.v1beta1/types/tx";
export {
  V1Beta1ValidatorOutstandingRewards,
  V1Beta1ValidatorAccumulatedCommission,
  V1Beta1DelegationDelegatorReward,
  V1Beta1DecCoin,
} from "./cosmos/cosmos-sdk/cosmos.distribution.v1beta1/rest";
export * from "./cosmos/cosmos-sdk/cosmos.feegrant.v1beta1/types/feegrant";
export { voteOptionFromJSON } from "./cosmos/cosmos-sdk/cosmos.gov.v1beta1/types/gov";
export { V1Beta1Deposit } from "./cosmos/cosmos-sdk/cosmos.gov.v1beta1/rest";
export { MsgVote } from "./cosmos/cosmos-sdk/cosmos.gov.v1beta1/types/tx";
export { ValidatorSigningInfo } from "./cosmos/cosmos-sdk/cosmos.slashing.v1beta1/types/slashing";
export {
  V1Beta1UnbondingDelegation,
  Stakingv1Beta1Validator,
  V1Beta1BondStatus,
  V1Beta1DelegationResponse,
  V1Beta1Params,
  V1Beta1Pool,
  V1Beta1RedelegationResponse,
  V1Beta1UnbondingDelegationEntry,
} from "./cosmos/cosmos-sdk/cosmos.staking.v1beta1/rest";
export {
  TypesBlock,
  V1Beta1Tx,
  V1Beta1TxResponse,
} from "./cosmos/cosmos-sdk/cosmos.tx.v1beta1/rest";
export { Tx } from "./cosmos/cosmos-sdk/cosmos.tx.v1beta1/types/tx";
export { ContinuousVestingAccount } from "./cosmos/cosmos-sdk/cosmos.vesting.v1beta1/types/vesting";
export {
  V1Beta1Proposal,
  V1Beta1ProposalStatus,
  V1Beta1TallyParams,
  V1Beta1TallyResult,
  V1Beta1Vote,
  V1Beta1VoteOption,
  V1Beta1VotingParams,
} from "./cosmos/cosmos-sdk/cosmos.gov.v1beta1/rest";
export {
  V1ContractCodeHistoryEntry,
  V1ContractCodeHistoryOperationType,
  V1ContractInfo,
} from "./CosmWasm/wasmd/cosmwasm.wasm.v1/rest";
export { MsgExecuteContract } from "./CosmWasm/wasmd/cosmwasm.wasm.v1/types/tx";
export { InstantiateContractProposal } from "./CosmWasm/wasmd/cosmwasm.wasm.v1/types/proposal";
export { TxResult } from "./types/tendermint/abci/types";
export { Coin } from "./types/cosmos/base/coin";
export { EthAccount } from "./evmos/ethermint/ethermint.evm.v1/types/auth";
export { OracleQueryExchangeRateResponse } from "./kujira/kujira.oracle/rest";

const types = [
  ...authz.types,
  ...bank.types,
  ...crisis.types,
  ...denom.types,
  ...distribution.types,
  ...ethermintEvm.types,
  ...ethermintFeemarket.types,
  ...evidence.types,
  ...feegrant.types,
  ...gov.types,
  ...ibcTransfer.types,
  ...oracle.types,
  ...params.types,
  ...scheduler.types,
  ...slashing.types,
  ...staking.types,
  ...vesting.types,
  ...wasm.types,
];

export const registry = new Registry(<any>types);

export { FinClient, FinQueryClient } from "./fin";

function createDefaultTypes(prefix: string): AminoConverters {
  return {
    ...createAuthzAminoConverters(),
    ...createBankAminoConverters(),
    ...createDistributionAminoConverters(),
    ...createFreegrantAminoConverters(),
    ...createGovAminoConverters(),
    ...createIbcAminoConverters(),
    ...createStakingAminoConverters(prefix),
    ...createWasmAminoConverters(),
  };
}

const convert = (converters: AminoConverters): AminoConverters =>
  Object.entries(converters).reduce(
    (a, [k, c]: [string, AminoConverter | "not_supported_by_chain"]) => {
      if (c !== "not_supported_by_chain") {
        const originalTo = c.toAmino;
        const toAmino = (input: object) =>
          originalTo(
            Object.entries(input).reduce(
              (a, [k, v]) => ({
                ...a,
                [k.replaceAll(/_([a-z])/g, (_, l: string) => l.toUpperCase())]:
                  v,
              }),
              {}
            )
          );

        const fromAmino = (f: any) => {
          return { ...f, msg: toUtf8(JSON.stringify(f.msg)) };
        };

        c = {
          aminoType: c.aminoType,
          toAmino: toAmino,
          fromAmino,
        };
      }
      return { ...a, [k]: c };
    },
    {}
  );

export const aminoTypes = (prefix: string): AminoTypes =>
  new AminoTypes({
    ...convert(createDefaultTypes(prefix)),
    ...vesting.aminoConverter,
  });

export type TxClient = {
  authz: typeof authz.txClient;
  bank: typeof bank.txClient;
  distribution: typeof distribution.txClient;
  ethermintEvm: typeof ethermintEvm.txClient;
  ethermintFeemarket: typeof ethermintFeemarket.txClient;
  feegrant: typeof feegrant.txClient;
  gov: typeof gov.txClient;
  ibcTransfer: typeof ibcTransfer.txClient;
  slashing: typeof slashing.txClient;
  staking: typeof staking.txClient;
  vesting: typeof vesting.txClient;
  wasm: typeof wasm.txClient;
};

export const tx: TxClient = {
  authz: authz.txClient,
  bank: bank.txClient,
  distribution: distribution.txClient,
  ethermintEvm: ethermintEvm.txClient,
  ethermintFeemarket: ethermintFeemarket.txClient,
  feegrant: feegrant.txClient,
  gov: gov.txClient,
  ibcTransfer: ibcTransfer.txClient,
  slashing: slashing.txClient,
  staking: staking.txClient,
  vesting: vesting.txClient,
  wasm: wasm.txClient,
};

export type QueryClient = {
  auth: auth.Api<unknown>;
  bank: bank.Api<unknown>;
  distribution: distribution.Api<unknown>;
  ethermintEvm: ethermintEvm.Api<unknown>;
  ethermintFeemarket: ethermintFeemarket.Api<unknown>;
  gov: gov.Api<unknown>;
  ibcTransfer: ibcTransfer.Api<unknown>;
  oracle: oracle.Api<unknown>;
  slashing: slashing.Api<unknown>;
  staking: staking.Api<unknown>;
  tendermint: tendermint.Api<unknown>;
  tx: tx_.Api<unknown>;
  wasm: wasm.Api<unknown>;
};

export const query = ({ rest }: { rest: string }): QueryClient => {
  return {
    auth: new auth.Api({ baseUrl: rest }),
    bank: new bank.Api({ baseUrl: rest }),
    distribution: new distribution.Api({ baseUrl: rest }),
    ethermintEvm: new ethermintEvm.Api({ baseUrl: rest }),
    ethermintFeemarket: new ethermintFeemarket.Api({ baseUrl: rest }),
    gov: new gov.Api({ baseUrl: rest }),
    ibcTransfer: new ibcTransfer.Api({ baseUrl: rest }),
    oracle: new oracle.Api({ baseUrl: rest }),
    slashing: new slashing.Api({ baseUrl: rest }),
    staking: new staking.Api({ baseUrl: rest }),
    tx: new tx_.Api({ baseUrl: rest }),
    tendermint: new tendermint.Api({ baseUrl: rest }),
    wasm: new wasm.Api({ baseUrl: rest }),
  };
};

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
