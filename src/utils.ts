import { fromHex, toBech32 } from "@cosmjs/encoding";
import { pubkeyToAddress } from "@cosmjs/tendermint-rpc";
import { PubKey } from "cosmjs-types/cosmos/crypto/ed25519/keys";
import { Validator } from "cosmjs-types/cosmos/staking/v1beta1/staking";

export const setSignerAddress = (
  v: Validator
): Validator & { signerAddress: string } => {
  const decoded = v.consensusPubkey && PubKey.decode(v.consensusPubkey.value);
  const address = decoded && pubkeyToAddress("ed25519", decoded.key);

  return {
    ...v,
    signerAddress:
      (address && toBech32("kujiravalcons", fromHex(address))) || "",
  };
};
