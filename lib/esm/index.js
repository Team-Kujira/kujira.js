var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Registry } from "@cosmjs/proto-signing";
import * as s from "@cosmjs/stargate";
import { Tendermint34Client } from "@cosmjs/tendermint-rpc";
import { createWasmAminoConverters, setupWasmExtension, } from "@cosmjs/cosmwasm-stargate";
import Long from "long";
import { util, configure } from "protobufjs/minimal";
import * as denom from "./kujira/kujira.denom";
import * as oracle from "./kujira/kujira.oracle";
import * as scheduler from "./kujira/kujira.scheduler";
import * as ethermintEvm from "./evmos/ethermint/ethermint.evm.v1";
import * as ethermintFeemarket from "./evmos/ethermint/ethermint.feemarket.v1";
import { wasmTypes } from "@cosmjs/cosmwasm-stargate/build/modules";
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
];
export const registry = new Registry(types);
export { FinClient, FinQueryClient } from "./fin";
export const aminoTypes = (prefix) => new s.AminoTypes(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, s.createAuthzAminoConverters()), s.createBankAminoConverters()), s.createDistributionAminoConverters()), s.createFeegrantAminoConverters()), s.createGovAminoConverters()), s.createIbcAminoConverters()), s.createStakingAminoConverters(prefix)), createWasmAminoConverters()));
// {
//   auth: auth.Api<unknown>;
//   authz: authz.Api<unknown>;
//   bank: bank.Api<unknown>;
//   distribution: distribution.Api<unknown>;
//   ethermintEvm: ethermintEvm.Api<unknown>;
//   ethermintFeemarket: ethermintFeemarket.Api<unknown>;
//   gov: gov.Api<unknown>;
//   ibcTransfer: ibcTransfer.Api<unknown>;
//   oracle: oracle.Api<unknown>;
//   slashing: slashing.Api<unknown>;
//   staking: staking.Api<unknown>;
//   tendermint: tendermint.Api<unknown>;
//   tx: tx_.Api<unknown>;
//   wasm: wasm.Api<unknown>;
// };
export const queryClient = ({ rpc, }) => __awaiter(void 0, void 0, void 0, function* () {
    return s.QueryClient.withExtensions(yield Tendermint34Client.connect(rpc), s.setupAuthExtension, s.setupAuthzExtension, s.setupBankExtension, s.setupDistributionExtension, s.setupFeegrantExtension, s.setupGovExtension, s.setupSlashingExtension, s.setupStakingExtension, s.setupTxExtension, setupWasmExtension);
});
// {
//   return {
//     auth: new auth.Api({ baseUrl: rest }),
//     authz: new authz.Api({ baseUrl: rest }),
//     bank: new bank.Api({ baseUrl: rest }),
//     distribution: new distribution.Api({ baseUrl: rest }),
//     ethermintEvm: new ethermintEvm.Api({ baseUrl: rest }),
//     ethermintFeemarket: new ethermintFeemarket.Api({ baseUrl: rest }),
//     gov: new gov.Api({ baseUrl: rest }),
//     ibcTransfer: new ibcTransfer.Api({ baseUrl: rest }),
//     oracle: new oracle.Api({ baseUrl: rest }),
//     slashing: new slashing.Api({ baseUrl: rest }),
//     staking: new staking.Api({ baseUrl: rest }),
//     tx: new tx_.Api({ baseUrl: rest }),
//     tendermint: new tendermint.Api({ baseUrl: rest }),
//     wasm: new wasm.Api({ baseUrl: rest }),
//   };
// };
if (util.Long !== Long) {
    util.Long = Long;
    configure();
}
