import * as s from "@cosmjs/stargate";
import { Coin } from "@cosmjs/stargate";
import { FeegrantExtension, SlashingExtension } from "@cosmjs/stargate/build/modules";
import { AuthzExtension } from "@cosmjs/stargate/build/modules/authz/queries";
import { TendermintClient } from "@cosmjs/tendermint-rpc";
import { AllianceExtension } from "./alliance";
import { BankExtensionExtended } from "./cosmos/bank";
import { GovExtension } from "./cosmos/gov";
import { StakingExtension } from "./cosmos/staking";
import { WasmExtensionExtended } from "./cosmwasm/wasm";
import { GravityExtension } from "./gravity/v1";
import { DenomExtension } from "./kujira/kujira.denom";
import { OracleExtension } from "./kujira/kujira.oracle";
import { SchedulerExtension } from "./kujira/kujira.scheduler";
export type KujiraQueryClient = s.QueryClient & s.AuthExtension & AuthzExtension & BankExtensionExtended & s.DistributionExtension & DenomExtension & FeegrantExtension & GovExtension & OracleExtension & SchedulerExtension & SlashingExtension & StakingExtension & s.TxExtension & WasmExtensionExtended & s.IbcExtension & GravityExtension & AllianceExtension;
export declare const kujiraQueryClient: ({ client, }: {
    client: TendermintClient;
}) => KujiraQueryClient;
export declare const fetchTokens: (query: KujiraQueryClient, paginationKey?: Uint8Array) => Promise<Coin[]>;
