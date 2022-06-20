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
import * as params from "./cosmos/cosmos-sdk/cosmos.params.v1beta1";
import * as scheduler from "./kujira/kujira.scheduler";
import * as slashing from "./cosmos/cosmos-sdk/cosmos.slashing.v1beta1";
import * as staking from "./cosmos/cosmos-sdk/cosmos.staking.v1beta1";
import * as tendermint from "./cosmos/cosmos-sdk/cosmos.base.tendermint.v1beta1";
import * as tx_ from "./cosmos/cosmos-sdk/cosmos.tx.v1beta1";
import * as vesting from "./cosmos/cosmos-sdk/cosmos.vesting.v1beta1";
import * as wasm from "./CosmWasm/wasmd/cosmwasm.wasm.v1";

const types = [
  ...authz.types,
  ...bank.types,
  ...crisis.types,
  ...denom.types,
  ...distribution.types,
  ...evidence.types,
  ...feegrant.types,
  ...gov.types,
  ...ibcTransfer.types,
  ...params.types,
  ...scheduler.types,
  ...slashing.types,
  ...staking.types,
  ...vesting.types,
  ...wasm.types,
];

export const registry = new Registry(<any>types);

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
  new AminoTypes(convert(createDefaultTypes(prefix)));

export type TxClient = {
  bank: typeof bank.txClient;
  distribution: typeof distribution.txClient;
  gov: typeof gov.txClient;
  slashing: typeof slashing.txClient;
  staking: typeof staking.txClient;
  wasm: typeof wasm.txClient;
};

export const tx: TxClient = {
  bank: bank.txClient,
  distribution: distribution.txClient,
  gov: gov.txClient,
  slashing: slashing.txClient,
  staking: staking.txClient,
  wasm: wasm.txClient,
};

export type QueryClient = {
  auth: auth.Api<unknown>;
  bank: bank.Api<unknown>;
  distribution: distribution.Api<unknown>;
  gov: gov.Api<unknown>;
  slashing: slashing.Api<unknown>;
  staking: staking.Api<unknown>;
  tendermint: tendermint.Api<unknown>;
  tx: tx_.Api<unknown>;
  wasm: wasm.Api<unknown>;
};

export const query = ({ rest }: { rest: string }) => {
  return {
    auth: new auth.Api({ baseUrl: rest }),
    bank: new bank.Api({ baseUrl: rest }),
    distribution: new distribution.Api({ baseUrl: rest }),
    gov: new gov.Api({ baseUrl: rest }),
    slashing: new slashing.Api({ baseUrl: rest }),
    staking: new staking.Api({ baseUrl: rest }),
    tx: new tx_.Api({ baseUrl: rest }),
    tendermint: new tendermint.Api({ baseUrl: rest }),
    wasm: new wasm.Api({ baseUrl: rest }),
  };
};
