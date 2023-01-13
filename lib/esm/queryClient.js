import { setupWasmExtension } from "@cosmjs/cosmwasm-stargate";
import * as s from "@cosmjs/stargate";
import { setupGovExtension } from "./cosmos/gov";
import { setupStakingExtension } from "./cosmos/staking";
import { setupDenomExtension } from "./kujira/kujira.denom";
import { setupOracleExtension } from "./kujira/kujira.oracle";
import { setupSchedulerExtension, } from "./kujira/kujira.scheduler";
export const kujiraQueryClient = ({ client, }) => s.QueryClient.withExtensions(client, s.setupAuthExtension, s.setupAuthzExtension, s.setupBankExtension, setupDenomExtension, s.setupDistributionExtension, s.setupFeegrantExtension, setupGovExtension, setupOracleExtension, setupSchedulerExtension, s.setupSlashingExtension, setupStakingExtension, s.setupTxExtension, setupWasmExtension, s.setupIbcExtension);
