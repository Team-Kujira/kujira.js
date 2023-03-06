import { wasmTypes } from "@cosmjs/cosmwasm-stargate/build/modules";
import { Registry } from "@cosmjs/proto-signing";
import * as s from "@cosmjs/stargate";
import { ibcTypes } from "@cosmjs/stargate/build/modules";
import { assert } from "@cosmjs/utils";
import { EthAccount } from "@injectivelabs/chain-api/injective/types/v1beta1/account_pb";
import { BaseAccount } from "cosmjs-types/cosmos/auth/v1beta1/auth";
import { CommunityPoolSpendProposal } from "cosmjs-types/cosmos/distribution/v1beta1/distribution";
import { TextProposal } from "cosmjs-types/cosmos/gov/v1beta1/gov";
import { ParameterChangeProposal } from "cosmjs-types/cosmos/params/v1beta1/params";
import { SoftwareUpgradeProposal } from "cosmjs-types/cosmos/upgrade/v1beta1/upgrade";
import { ClearAdminProposal, ExecuteContractProposal, InstantiateContractProposal, MigrateContractProposal, PinCodesProposal, StoreCodeProposal, UnpinCodesProposal, UpdateAdminProposal, UpdateInstantiateConfigProposal, } from "cosmjs-types/cosmwasm/wasm/v1/proposal";
import { ClientUpdateProposal } from "cosmjs-types/ibc/core/client/v1/client";
import { ClientState, ConsensusState, Header, Misbehaviour, } from "cosmjs-types/ibc/lightclients/tendermint/v1/tendermint";
import * as alliance from "./alliance";
import * as gravity from "./gravity/v1";
import * as denom from "./kujira/kujira.denom";
import * as oracle from "./kujira/kujira.oracle";
import { CreateHookProposal, DeleteHookProposal, UpdateHookProposal, } from "./kujira/kujira.scheduler/types/proposal";
import { StridePeriodicVestingAccount } from "./stride/vesting";
const proposalTypes = [
    [
        "/cosmos.distribution.v1beta1.CommunityPoolSpendProposal",
        CommunityPoolSpendProposal,
    ],
    ["/cosmos.params.v1beta1.ParameterChangeProposal", ParameterChangeProposal],
    ["/cosmwasm.wasm.v1.StoreCodeProposal", StoreCodeProposal],
    [
        "/cosmwasm.wasm.v1.InstantiateContractProposal",
        InstantiateContractProposal,
    ],
    ["/cosmwasm.wasm.v1.MigrateContractProposal", MigrateContractProposal],
    ["/cosmwasm.wasm.v1.UpdateAdminProposal", UpdateAdminProposal],
    ["/cosmwasm.wasm.v1.ClearAdminProposal", ClearAdminProposal],
    ["/cosmwasm.wasm.v1.PinCodesProposal", PinCodesProposal],
    ["/cosmwasm.wasm.v1.UnpinCodesProposal", UnpinCodesProposal],
    ["/cosmwasm.wasm.v1.ExecuteContractProposal", ExecuteContractProposal],
    [
        "/cosmwasm.wasm.v1.UpdateInstantiateConfigProposal",
        UpdateInstantiateConfigProposal,
    ],
    ["/cosmos.upgrade.v1beta1.SoftwareUpgradeProposal", SoftwareUpgradeProposal],
    ["/kujira.scheduler.CreateHookProposal", CreateHookProposal],
    ["/kujira.scheduler.UpdateHookProposal", UpdateHookProposal],
    ["/kujira.scheduler.DeleteHookProposal", DeleteHookProposal],
    ["/cosmos.gov.v1beta1.TextProposal", TextProposal],
    ["/ibc.core.client.v1.ClientUpdateProposal", ClientUpdateProposal],
];
const extraIbc = [
    ["/ibc.lightclients.tendermint.v1.Header", Header],
    ["/ibc.lightclients.tendermint.v1.ClientState", ClientState],
    ["/ibc.lightclients.tendermint.v1.ConsensusState", ConsensusState],
    ["/ibc.lightclients.tendermint.v1.Misbehaviour", Misbehaviour],
];
const types = [
    ...s.defaultRegistryTypes,
    ...denom.types,
    // ...ethermintEvm.types,
    // ...ethermintFeemarket.types,
    ...oracle.types,
    ...wasmTypes,
    ...ibcTypes,
    ...proposalTypes,
    ...extraIbc,
    ...gravity.types,
    ...alliance.types,
];
export const registry = new Registry(types);
export const accountParser = (acc) => {
    var _a;
    switch (acc.typeUrl) {
        case "/stride.vesting.StridePeriodicVestingAccount":
            const baseAccount = (_a = StridePeriodicVestingAccount.decode(acc.value)
                .baseVestingAccount) === null || _a === void 0 ? void 0 : _a.baseAccount;
            assert(baseAccount);
            return s.accountFromAny({
                typeUrl: "/cosmos.auth.v1beta1.BaseAccount",
                value: BaseAccount.encode(baseAccount).finish(),
            });
        case "/injective.types.v1beta1.EthAccount":
            const ethAccount = EthAccount.deserializeBinary(acc.value);
            const account = ethAccount.getBaseAccount();
            const pubKey = account.getPubKey();
            return {
                address: account.getAddress(),
                pubkey: pubKey
                    ? {
                        type: "/injective.crypto.v1beta1.ethsecp256k1.PubKey",
                        value: pubKey.getValue_asB64(),
                    }
                    : null,
                accountNumber: account.getAccountNumber(),
                sequence: account.getSequence(),
            };
        default:
            return s.accountFromAny(acc);
    }
};
