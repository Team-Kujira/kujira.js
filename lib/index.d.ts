import { Registry } from "@cosmjs/proto-signing";
import { AminoTypes } from "@cosmjs/stargate";
import * as auth from "./cosmos/cosmos-sdk/cosmos.auth.v1beta1";
import * as bank from "./cosmos/cosmos-sdk/cosmos.bank.v1beta1";
import * as distribution from "./cosmos/cosmos-sdk/cosmos.distribution.v1beta1";
import * as gov from "./cosmos/cosmos-sdk/cosmos.gov.v1beta1";
import * as slashing from "./cosmos/cosmos-sdk/cosmos.slashing.v1beta1";
import * as staking from "./cosmos/cosmos-sdk/cosmos.staking.v1beta1";
import * as tendermint from "./cosmos/cosmos-sdk/cosmos.base.tendermint.v1beta1";
import * as tx_ from "./cosmos/cosmos-sdk/cosmos.tx.v1beta1";
import * as wasm from "./CosmWasm/wasmd/cosmwasm.wasm.v1";
export declare const registry: Registry;
export declare const aminoTypes: (prefix: string) => AminoTypes;
export declare type TxClient = {
    bank: typeof bank.txClient;
    distribution: typeof distribution.txClient;
    gov: typeof gov.txClient;
    slashing: typeof slashing.txClient;
    staking: typeof staking.txClient;
    wasm: typeof wasm.txClient;
};
export declare const tx: TxClient;
export declare type QueryClient = {
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
export declare const query: ({ rest }: {
    rest: string;
}) => {
    auth: auth.Api<unknown>;
    bank: bank.Api<unknown>;
    distribution: distribution.Api<unknown>;
    gov: gov.Api<unknown>;
    slashing: slashing.Api<unknown>;
    staking: staking.Api<unknown>;
    tx: tx_.Api<unknown>;
    tendermint: tendermint.Api<unknown>;
    wasm: wasm.Api<unknown>;
};
