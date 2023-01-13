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
exports.signAndBroadcast = void 0;
const encoding_1 = require("@cosmjs/encoding");
const proto_signing_1 = require("@cosmjs/proto-signing");
const stargate_1 = require("@cosmjs/stargate");
const keys_1 = require("cosmjs-types/cosmos/crypto/secp256k1/keys");
const tx_1 = require("cosmjs-types/cosmos/tx/v1beta1/tx");
const any_1 = require("cosmjs-types/google/protobuf/any");
const tendermint_rpc_1 = require("@cosmjs/tendermint-rpc");
const amino_1 = require("../../amino");
const queryClient_1 = require("../../queryClient");
const registry_1 = require("../../registry");
const auth_1 = require("./auth");
function signAndBroadcast({ rpc, signer, messages, sourceAccount, sourceChainData, }) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!("signDirect" in signer))
            throw new Error("Ledger not supported for EVMOS Accounts");
        const tm = yield tendermint_rpc_1.Tendermint34Client.connect(rpc);
        const query = (0, queryClient_1.kujiraQueryClient)({ client: tm });
        const response = yield query.auth.account(sourceAccount.address);
        if (!response)
            throw new Error("EVMOS Account not found");
        const account = auth_1.EthAccount.decode(response.value);
        if (!account.base_account)
            throw new Error("EVMOS Account not found");
        const pubk = any_1.Any.fromPartial({
            typeUrl: "/ethermint.crypto.v1.ethsecp256k1.PubKey",
            value: keys_1.PubKey.encode({ key: sourceAccount.pubkey }).finish(),
        });
        const txBodyEncodeObject = {
            typeUrl: "/cosmos.tx.v1beta1.TxBody",
            value: { messages, memo: "" },
        };
        const txBodyBytes = registry_1.registry.encode(txBodyEncodeObject);
        const gasPrice = 25;
        const gasLimit = 300000;
        const authInfoBytes = (0, proto_signing_1.makeAuthInfoBytes)([
            {
                pubkey: pubk,
                sequence: account.base_account.sequence.toNumber(),
            },
        ], (0, stargate_1.coins)(gasPrice * gasLimit, "aevmos"), gasLimit, undefined, undefined);
        const signDoc = (0, proto_signing_1.makeSignDoc)(txBodyBytes, authInfoBytes, sourceChainData.chainId, account.base_account.accountNumber.toNumber());
        const { signature, signed } = yield signer.signDirect(sourceAccount.address, signDoc);
        // returns txBytes for broadcast
        const tx = tx_1.TxRaw.encode({
            bodyBytes: signed.bodyBytes,
            authInfoBytes: signed.authInfoBytes,
            signatures: [(0, encoding_1.fromBase64)(signature.signature)],
        }).finish();
        const client = yield stargate_1.SigningStargateClient.connectWithSigner(rpc, signer, {
            registry: registry_1.registry,
            aminoTypes: (0, amino_1.aminoTypes)("evmos"),
        });
        const res = yield client.broadcastTx(tx);
        (0, stargate_1.assertIsDeliverTxSuccess)(res);
        return res;
    });
}
exports.signAndBroadcast = signAndBroadcast;
