import { Registry } from "@cosmjs/proto-signing";
import * as s from "@cosmjs/stargate";
import { AuthzExtension } from "@cosmjs/stargate/build/modules/authz/queries";
import { FeegrantExtension, SlashingExtension } from "@cosmjs/stargate/build/modules";
import { WasmExtension } from "@cosmjs/cosmwasm-stargate";
export { ProtobufAny } from "./types";
export { EthAccount } from "./evmos/ethermint/ethermint.evm.v1/types/auth";
export declare const registry: Registry;
export { FinClient, FinQueryClient } from "./fin";
export declare const aminoTypes: (prefix: string) => s.AminoTypes;
export declare type QueryClient = s.QueryClient & s.AuthExtension & AuthzExtension & s.BankExtension & s.DistributionExtension & FeegrantExtension & s.GovExtension & SlashingExtension & s.StakingExtension & s.TxExtension & WasmExtension;
export declare const queryClient: ({ rpc, }: {
    rpc: string;
}) => Promise<QueryClient>;
