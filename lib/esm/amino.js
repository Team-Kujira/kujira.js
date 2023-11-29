import { createWasmAminoConverters } from "@cosmjs/cosmwasm-stargate";
import * as s from "@cosmjs/stargate";
import { assertDefinedAndNotNull } from "@cosmjs/utils";
import Long from "long";
import { createAuthzAminoConverters } from "./amino/authz";
const extra = {
    "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation": {
        aminoType: "cosmos-sdk/MsgCancelUnbondingDelegation",
        toAmino: ({ delegatorAddress, validatorAddress, amount, creationHeight, }) => {
            assertDefinedAndNotNull(amount, "missing amount");
            return {
                delegator_address: delegatorAddress,
                validator_address: validatorAddress,
                amount: amount,
                creation_height: creationHeight.toString(),
            };
        },
        fromAmino: ({ delegator_address, validator_address, amount, creation_height, }) => ({
            delegatorAddress: delegator_address,
            validatorAddress: validator_address,
            amount: amount,
            creationHeight: Long.fromString(creation_height),
        }),
    },
};
export const aminoTypes = (prefix) => new s.AminoTypes(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, createAuthzAminoConverters()), s.createBankAminoConverters()), s.createDistributionAminoConverters()), s.createFeegrantAminoConverters()), s.createGovAminoConverters()), s.createIbcAminoConverters()), s.createStakingAminoConverters()), s.createVestingAminoConverters()), createWasmAminoConverters()), extra));
