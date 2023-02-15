"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setSignerAddress = void 0;
const encoding_1 = require("@cosmjs/encoding");
const tendermint_rpc_1 = require("@cosmjs/tendermint-rpc");
const keys_1 = require("cosmjs-types/cosmos/crypto/ed25519/keys");
const setSignerAddress = (v) => {
    const decoded = v.consensusPubkey && keys_1.PubKey.decode(v.consensusPubkey.value);
    const address = decoded && (0, tendermint_rpc_1.pubkeyToAddress)("ed25519", decoded.key);
    return Object.assign(Object.assign({}, v), { signerAddress: (address && (0, encoding_1.toBech32)("kujiravalcons", (0, encoding_1.fromHex)(address))) || "" });
};
exports.setSignerAddress = setSignerAddress;
