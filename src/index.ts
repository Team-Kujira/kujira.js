import { Registry } from "@cosmjs/proto-signing";
import * as s from "@cosmjs/stargate";
import { AuthzExtension } from "@cosmjs/stargate/build/modules/authz/queries";
import {
  FeegrantExtension,
  ibcTypes,
  SlashingExtension,
} from "@cosmjs/stargate/build/modules";
import { Tendermint34Client } from "@cosmjs/tendermint-rpc";
import {
  createWasmAminoConverters,
  setupWasmExtension,
  WasmExtension,
} from "@cosmjs/cosmwasm-stargate";
import Long from "long";
import { util, configure } from "protobufjs/minimal";

import * as denom from "./kujira/kujira.denom";
import * as oracle from "./kujira/kujira.oracle";
import * as scheduler from "./kujira/kujira.scheduler";
import * as ethermintEvm from "./evmos/ethermint/ethermint.evm.v1";
import * as ethermintFeemarket from "./evmos/ethermint/ethermint.feemarket.v1";
import { wasmTypes } from "@cosmjs/cosmwasm-stargate/build/modules";

export { ProtobufAny } from "./types";
export { EthAccount } from "./evmos/ethermint/ethermint.evm.v1/types/auth";

const types = [
  ...s.defaultRegistryTypes,
  // ...crisis.types,
  ...denom.types,
  ...ethermintEvm.types,
  ...ethermintFeemarket.types,
  // ...evidence.types,
  ...oracle.types,
  ...scheduler.types,
  ...wasmTypes,
  ...ibcTypes,
];

export const registry = new Registry(<any>types);

export { FinClient, FinQueryClient } from "./fin";

export const aminoTypes = (prefix: string): s.AminoTypes =>
  new s.AminoTypes({
    ...s.createAuthzAminoConverters(),
    ...s.createBankAminoConverters(),
    ...s.createDistributionAminoConverters(),
    ...s.createFeegrantAminoConverters(),
    ...s.createGovAminoConverters(),
    ...s.createIbcAminoConverters(),
    ...s.createStakingAminoConverters(prefix),
    ...createWasmAminoConverters(),
  });

export type QueryClient = s.QueryClient &
  s.AuthExtension &
  AuthzExtension &
  s.BankExtension &
  s.DistributionExtension &
  // DenomExtension &
  // EthermintEvmExtension &
  // EthermintFeemarketExtension &

  FeegrantExtension &
  s.GovExtension &
  // OracleExtension &
  // IbcTransferExtension &
  SlashingExtension &
  s.StakingExtension &
  s.TxExtension &
  WasmExtension &
  s.IbcExtension;

export const queryClient = async ({
  rpc,
}: {
  rpc: string;
}): Promise<QueryClient> =>
  s.QueryClient.withExtensions(
    await Tendermint34Client.connect(rpc),
    s.setupAuthExtension,
    s.setupAuthzExtension,
    s.setupBankExtension,
    // setupDenomExtension,
    s.setupDistributionExtension,
    // setupEthermintEvmExtension,
    // setupEthermintFeemarketExtension,
    s.setupFeegrantExtension,
    s.setupGovExtension,
    // setupOracleExtension,
    // setupIbcTransferExtension,
    s.setupSlashingExtension,
    s.setupStakingExtension,
    s.setupTxExtension,
    setupWasmExtension,
    s.setupIbcExtension
  );

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
