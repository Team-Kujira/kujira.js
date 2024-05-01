"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthnClient = exports.encodeAminoAuthnPubkey = exports.decodePubkey = exports.encodePubkey = void 0;
const encoding_1 = require("@cosmjs/encoding");
const math_1 = require("@cosmjs/math");
const proto_signing_1 = require("@cosmjs/proto-signing");
const stargate_1 = require("@cosmjs/stargate");
const utils_1 = require("@cosmjs/utils");
const auth_1 = require("cosmjs-types/cosmos/auth/v1beta1/auth");
const tx_1 = require("cosmjs-types/cosmos/tx/v1beta1/tx");
const any_1 = require("cosmjs-types/google/protobuf/any");
const registry_1 = require("../registry");
const AuthnPubKey_1 = require("./AuthnPubKey");
/**
 * Takes a pubkey in the Amino JSON object style (type/value wrapper)
 * and convertes it into a protobuf `Any`.
 *
 * This is the reverse operation to `decodePubkey`.
 */
function encodePubkey(id, key) {
    return any_1.Any.fromPartial({
        typeUrl: "/kujira.crypto.authn.PubKey",
        // the proto definition of the k1 key as it's just a string value at index 1
        value: AuthnPubKey_1.PubKey.encode(AuthnPubKey_1.PubKey.fromPartial({
            key_id: id,
            key,
        })).finish(),
    });
}
exports.encodePubkey = encodePubkey;
/**
 * Decodes a pubkey from a protobuf `Any` into `Pubkey`.
 * This supports single pubkeys such as Cosmos ed25519 and secp256k1 keys
 * as well as multisig threshold pubkeys.
 */
function decodePubkey(pubkey) {
    switch (pubkey.typeUrl) {
        case "/kujira.crypto.authn.PubKey":
            const { key_id, key } = AuthnPubKey_1.PubKey.decode(pubkey.value);
            return encodeAminoAuthnPubkey(key_id, key);
        default:
            throw new Error(`Pubkey type_url ${pubkey.typeUrl} not recognized`);
    }
}
exports.decodePubkey = decodePubkey;
/**
 * Takes a Ecdsa256 public key as raw bytes and returns the Amino JSON
 * representation of it (the type/value wrapper object).
 */
function encodeAminoAuthnPubkey(id, pubkey) {
    if (pubkey.length !== 33 || (pubkey[0] !== 0x02 && pubkey[0] !== 0x03)) {
        throw new Error("Public key must be compressed Ecdsa256, i.e. 33 bytes starting with 0x02 or 0x03");
    }
    return {
        type: "tendermint/PubKeyAuthn",
        value: { key_id: id, key: (0, encoding_1.toBase64)(pubkey) },
    };
}
exports.encodeAminoAuthnPubkey = encodeAminoAuthnPubkey;
function accountFromBaseAccount(input) {
    const { address, pubKey, accountNumber, sequence } = input;
    const pubkey = pubKey ? decodePubkey(pubKey) : null;
    return {
        address: address,
        pubkey: pubkey,
        accountNumber: uint64FromProto(accountNumber).toNumber(),
        sequence: uint64FromProto(sequence).toNumber(),
    };
}
function uint64FromProto(input) {
    return math_1.Uint64.fromString(input.toString());
}
const accountParser = (any) => accountFromBaseAccount(auth_1.BaseAccount.decode(any.value));
class AuthnClient extends stargate_1.StargateClient {
    /**
     * Creates an instance from a manually created Tendermint client.
     * Use this to use `Tendermint37Client` instead of `Tendermint34Client`.
     */
    static createWithSigner(tmClient, signer, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return new AuthnClient(tmClient, signer, Object.assign(Object.assign({}, options), { accountParser }));
        });
    }
    constructor(tmClient, signer, options) {
        super(tmClient, options);
        const { registry = new proto_signing_1.Registry(stargate_1.defaultRegistryTypes) } = options;
        this.registry = registry;
        this.signer = signer;
        this.broadcastTimeoutMs = options.broadcastTimeoutMs;
        this.broadcastPollIntervalMs = options.broadcastPollIntervalMs;
        this.gasPrice = options.gasPrice;
    }
    simulate(signerAddress, messages, memo) {
        return __awaiter(this, void 0, void 0, function* () {
            const anyMsgs = messages.map((m) => registry_1.registry.encodeAsAny(m));
            const accountFromSigner = (yield this.signer.getAccounts()).find((account) => account.address === signerAddress);
            if (!accountFromSigner) {
                throw new Error("Failed to retrieve account from signer");
            }
            const pubkey = encodeAminoAuthnPubkey(this.signer.id(), accountFromSigner.pubkey);
            const { sequence } = yield this.getSequence(signerAddress);
            const { gasInfo } = yield this.forceGetQueryClient().tx.simulate(anyMsgs, memo, pubkey, sequence);
            (0, utils_1.assertDefined)(gasInfo);
            return math_1.Uint53.fromString(gasInfo.gasUsed.toString()).toNumber();
        });
    }
    signAndBroadcast(signerAddress, messages, fee, memo = "") {
        return __awaiter(this, void 0, void 0, function* () {
            let usedFee;
            if (fee == "auto" || typeof fee === "number") {
                (0, utils_1.assertDefined)(this.gasPrice, "Gas price must be set in the client options when auto gas is used.");
                const gasEstimation = yield this.simulate(signerAddress, messages, memo);
                const multiplier = typeof fee === "number" ? fee : 1.4;
                usedFee = (0, stargate_1.calculateFee)(Math.round(gasEstimation * multiplier), this.gasPrice);
            }
            else {
                usedFee = fee;
            }
            const txRaw = yield this.sign(signerAddress, messages, usedFee, memo);
            const txBytes = tx_1.TxRaw.encode(txRaw).finish();
            return this.broadcastTx(txBytes, this.broadcastTimeoutMs, this.broadcastPollIntervalMs);
        });
    }
    /**
     * Gets account number and sequence from the API, creates a sign doc,
     * creates a single signature and assembles the signed transaction.
     *
     * You can pass signer data (account number, sequence and chain ID) explicitly instead of querying them
     * from the chain.
     */
    sign(signerAddress, messages, fee, memo, explicitSignerData) {
        return __awaiter(this, void 0, void 0, function* () {
            let signerData;
            if (explicitSignerData) {
                signerData = explicitSignerData;
            }
            else {
                const { accountNumber, sequence } = yield this.getSequence(signerAddress);
                const chainId = yield this.getChainId();
                signerData = {
                    accountNumber: accountNumber,
                    sequence: sequence,
                    chainId: chainId,
                };
            }
            return this.signAuthn(signerAddress, messages, fee, memo, signerData);
        });
    }
    signAuthn(signerAddress, messages, fee, memo, { accountNumber, sequence, chainId }) {
        return __awaiter(this, void 0, void 0, function* () {
            const accountFromSigner = (yield this.signer.getAccounts()).find((account) => account.address === signerAddress);
            if (!accountFromSigner) {
                throw new Error("Failed to retrieve account from signer");
            }
            const pubkey = encodePubkey(this.signer.id(), accountFromSigner.pubkey);
            const txBodyEncodeObject = {
                typeUrl: "/cosmos.tx.v1beta1.TxBody",
                value: {
                    messages: messages,
                    memo: memo,
                },
            };
            const txBodyBytes = this.registry.encode(txBodyEncodeObject);
            const gasLimit = math_1.Int53.fromString(fee.gas).toNumber();
            const authInfoBytes = (0, proto_signing_1.makeAuthInfoBytes)([{ pubkey, sequence }], fee.amount, gasLimit, fee.granter, fee.payer);
            const signDoc = (0, proto_signing_1.makeSignDoc)(txBodyBytes, authInfoBytes, chainId, accountNumber);
            const { signature, signed } = yield this.signer.signAuthn(signerAddress, signDoc);
            return tx_1.TxRaw.fromPartial({
                bodyBytes: signed.bodyBytes,
                authInfoBytes: signed.authInfoBytes,
                signatures: [(0, encoding_1.fromBase64)(signature)],
            });
        });
    }
}
exports.AuthnClient = AuthnClient;
