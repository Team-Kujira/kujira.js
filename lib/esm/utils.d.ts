import { Validator } from "cosmjs-types/cosmos/staking/v1beta1/staking";
export declare const setSignerAddress: (v: Validator) => Validator & {
    signerAddress: string;
};
