import { AminoMsg } from "@cosmjs/amino";
import { createWasmAminoConverters } from "@cosmjs/cosmwasm-stargate";
import * as s from "@cosmjs/stargate";
import { assertDefinedAndNotNull } from "@cosmjs/utils";
import { MsgCancelUnbondingDelegation } from "cosmjs-types/cosmos/staking/v1beta1/tx";
import Long from "long";
import { createAuthzAminoConverters } from "./amino/authz";

/** Performs an undelegation from a delegate and a validator */
export interface AminoMsgCancelUnbondingDelegation extends AminoMsg {
  readonly type: "cosmos-sdk/MsgCancelUnbondingDelegatio";
  readonly value: {
    /** Bech32 encoded delegator address */
    readonly delegator_address: string;
    /** Bech32 encoded validator address */
    readonly validator_address: string;
    readonly amount: s.Coin;
    readonly creation_height: string;
  };
}

const extra = {
  "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation": {
    aminoType: "cosmos-sdk/MsgCancelUnbondingDelegation",
    toAmino: ({
      delegatorAddress,
      validatorAddress,
      amount,
      creationHeight,
    }: MsgCancelUnbondingDelegation): AminoMsgCancelUnbondingDelegation["value"] => {
      assertDefinedAndNotNull(amount, "missing amount");
      return {
        delegator_address: delegatorAddress,
        validator_address: validatorAddress,
        amount: amount,
        creation_height: creationHeight.toString(),
      };
    },
    fromAmino: ({
      delegator_address,
      validator_address,
      amount,
      creation_height,
    }: AminoMsgCancelUnbondingDelegation["value"]): MsgCancelUnbondingDelegation => ({
      delegatorAddress: delegator_address,
      validatorAddress: validator_address,
      amount: amount,
      creationHeight: Long.fromString(creation_height),
    }),
  },
};

export const aminoTypes = (prefix: string): s.AminoTypes =>
  new s.AminoTypes({
    ...createAuthzAminoConverters(),
    ...s.createBankAminoConverters(),
    ...s.createDistributionAminoConverters(),
    ...s.createFeegrantAminoConverters(),
    ...s.createGovAminoConverters(),
    ...s.createIbcAminoConverters(),
    ...s.createStakingAminoConverters(),
    ...s.createVestingAminoConverters(),
    ...createWasmAminoConverters(),
    ...extra,
  });
