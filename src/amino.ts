import { createWasmAminoConverters } from "@cosmjs/cosmwasm-stargate";
import * as s from "@cosmjs/stargate";
import { createAuthzAminoConverters } from "./amino/authz";

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
  });
