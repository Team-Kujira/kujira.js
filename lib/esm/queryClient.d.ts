import * as s from "@cosmjs/stargate";
import { Coin } from "@cosmjs/stargate";
import { FeegrantExtension, SlashingExtension } from "@cosmjs/stargate/build/modules";
import { AuthzExtension } from "@cosmjs/stargate/build/modules/authz/queries";
import { Tendermint37Client } from "@cosmjs/tendermint-rpc";
import { BankExtensionExtended } from "./cosmos/bank";
import { GovExtension } from "./cosmos/gov";
import { StakingExtension } from "./cosmos/staking";
import { WasmExtensionExtended } from "./cosmwasm/wasm";
import { GravityExtension } from "./gravity/v1";
import { CwIcaExtension } from "./kujira/cwica";
import { DenomExtension } from "./kujira/denom";
import { OracleExtension } from "./kujira/oracle";
import { SchedulerExtension } from "./kujira/scheduler";
export type KujiraQueryClient = s.QueryClient & s.AuthExtension & AuthzExtension & BankExtensionExtended & s.DistributionExtension & DenomExtension & FeegrantExtension & GovExtension & OracleExtension & SchedulerExtension & SlashingExtension & StakingExtension & s.TxExtension & WasmExtensionExtended & s.IbcExtension & GravityExtension & CwIcaExtension;
export declare const kujiraQueryClient: ({ client, }: {
    client: Tendermint37Client;
}) => KujiraQueryClient;
export declare const fetchTokens: (query: KujiraQueryClient, paginationKey?: Uint8Array) => Promise<Coin[]>;
