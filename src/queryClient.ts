import * as s from "@cosmjs/stargate";
import { Coin } from "@cosmjs/stargate";
import {
  FeegrantExtension,
  SlashingExtension,
} from "@cosmjs/stargate/build/modules";
import { AuthzExtension } from "@cosmjs/stargate/build/modules/authz/queries";
import {} from "@cosmjs/stargate/build/modules/distribution/messages";
import { Tendermint37Client } from "@cosmjs/tendermint-rpc";
import { AllianceExtension, setupAllianceExtension } from "./alliance";
import {
  BankExtensionExtended,
  setupBankExtensionExtended,
} from "./cosmos/bank";
import { GovExtension, setupGovExtension } from "./cosmos/gov";
import { StakingExtension, setupStakingExtension } from "./cosmos/staking";
import {
  WasmExtensionExtended,
  setupWasmExtensionExtended,
} from "./cosmwasm/wasm";
import { GravityExtension, setupGravityExtension } from "./gravity/v1";
import { DenomExtension, setupDenomExtension } from "./kujira/kujira.denom";
import { OracleExtension, setupOracleExtension } from "./kujira/kujira.oracle";
import {
  SchedulerExtension,
  setupSchedulerExtension,
} from "./kujira/kujira.scheduler";

export type KujiraQueryClient = s.QueryClient &
  s.AuthExtension &
  AuthzExtension &
  BankExtensionExtended &
  s.DistributionExtension &
  DenomExtension &
  FeegrantExtension &
  GovExtension &
  OracleExtension &
  SchedulerExtension &
  SlashingExtension &
  StakingExtension &
  s.TxExtension &
  WasmExtensionExtended &
  s.IbcExtension &
  GravityExtension &
  AllianceExtension;

export const kujiraQueryClient = ({
  client,
}: {
  client: Tendermint37Client;
}): KujiraQueryClient =>
  s.QueryClient.withExtensions(
    client,
    s.setupAuthExtension,
    s.setupAuthzExtension,
    setupBankExtensionExtended,
    setupDenomExtension,
    s.setupDistributionExtension,
    s.setupFeegrantExtension,
    setupGovExtension,
    setupOracleExtension,
    setupSchedulerExtension,
    s.setupSlashingExtension,
    setupStakingExtension,
    s.setupTxExtension,
    setupWasmExtensionExtended,
    s.setupIbcExtension,
    setupGravityExtension,
    setupAllianceExtension
  );

export const fetchTokens = (
  query: KujiraQueryClient,
  paginationKey?: Uint8Array
): Promise<Coin[]> => {
  return query.bank.totalSupply(paginationKey).then(async (xs) => {
    return xs.pagination?.nextKey.toString()
      ? [...(await fetchTokens(query, xs.pagination.nextKey)), ...xs.supply]
      : xs.supply;
  });
};
