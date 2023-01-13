import { createWasmAminoConverters } from "@cosmjs/cosmwasm-stargate";
import * as s from "@cosmjs/stargate";

export const aminoTypes = (prefix: string): s.AminoTypes =>
  new s.AminoTypes({
    ...s.createAuthzAminoConverters(),
    ...s.createBankAminoConverters(),
    ...s.createDistributionAminoConverters(),
    ...s.createFeegrantAminoConverters(),
    ...s.createGovAminoConverters(),
    ...s.createIbcAminoConverters(),
    ...s.createStakingAminoConverters(prefix),
    ...s.createVestingAminoConverters(),
    ...createWasmAminoConverters(),
  });
