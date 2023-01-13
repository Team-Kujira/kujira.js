var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { fromBase64 } from "@cosmjs/encoding";
import { makeAuthInfoBytes, makeSignDoc, } from "@cosmjs/proto-signing";
import { assertIsDeliverTxSuccess, coins, SigningStargateClient, } from "@cosmjs/stargate";
import { PubKey } from "cosmjs-types/cosmos/crypto/secp256k1/keys";
import { TxRaw } from "cosmjs-types/cosmos/tx/v1beta1/tx";
import { Any } from "cosmjs-types/google/protobuf/any";
import { Tendermint34Client } from "@cosmjs/tendermint-rpc";
import { aminoTypes } from "../../amino";
import { kujiraQueryClient } from "../../queryClient";
import { registry } from "../../registry";
import { EthAccount } from "./auth";
export function signAndBroadcast({ rpc, signer, messages, sourceAccount, sourceChainData, }) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!("signDirect" in signer))
            throw new Error("Ledger not supported for EVMOS Accounts");
        const tm = yield Tendermint34Client.connect(rpc);
        const query = kujiraQueryClient({ client: tm });
        const response = yield query.auth.account(sourceAccount.address);
        if (!response)
            throw new Error("EVMOS Account not found");
        const account = EthAccount.decode(response.value);
        if (!account.base_account)
            throw new Error("EVMOS Account not found");
        const pubk = Any.fromPartial({
            typeUrl: "/ethermint.crypto.v1.ethsecp256k1.PubKey",
            value: PubKey.encode({ key: sourceAccount.pubkey }).finish(),
        });
        const txBodyEncodeObject = {
            typeUrl: "/cosmos.tx.v1beta1.TxBody",
            value: { messages, memo: "" },
        };
        const txBodyBytes = registry.encode(txBodyEncodeObject);
        const gasPrice = 25;
        const gasLimit = 300000;
        const authInfoBytes = makeAuthInfoBytes([
            {
                pubkey: pubk,
                sequence: account.base_account.sequence.toNumber(),
            },
        ], coins(gasPrice * gasLimit, "aevmos"), gasLimit, undefined, undefined);
        const signDoc = makeSignDoc(txBodyBytes, authInfoBytes, sourceChainData.chainId, account.base_account.accountNumber.toNumber());
        const { signature, signed } = yield signer.signDirect(sourceAccount.address, signDoc);
        // returns txBytes for broadcast
        const tx = TxRaw.encode({
            bodyBytes: signed.bodyBytes,
            authInfoBytes: signed.authInfoBytes,
            signatures: [fromBase64(signature.signature)],
        }).finish();
        const client = yield SigningStargateClient.connectWithSigner(rpc, signer, {
            registry,
            aminoTypes: aminoTypes("evmos"),
        });
        const res = yield client.broadcastTx(tx);
        assertIsDeliverTxSuccess(res);
        return res;
    });
}
