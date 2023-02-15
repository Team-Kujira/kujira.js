import { fromHex, toBech32 } from "@cosmjs/encoding";
import { pubkeyToAddress } from "@cosmjs/tendermint-rpc";
import { PubKey } from "cosmjs-types/cosmos/crypto/ed25519/keys";
export const setSignerAddress = (v) => {
    const decoded = v.consensusPubkey && PubKey.decode(v.consensusPubkey.value);
    const address = decoded && pubkeyToAddress("ed25519", decoded.key);
    return Object.assign(Object.assign({}, v), { signerAddress: (address && toBech32("kujiravalcons", fromHex(address))) || "" });
};
