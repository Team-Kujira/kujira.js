import { fromBase64 } from "@cosmjs/encoding";
import {
  AccountData,
  EncodeObject,
  makeAuthInfoBytes,
  makeSignDoc,
  OfflineSigner,
} from "@cosmjs/proto-signing";
import {
  assertIsDeliverTxSuccess,
  coins,
  DeliverTxResponse,
  SigningStargateClient,
  StargateClient,
} from "@cosmjs/stargate";
import { PubKey } from "cosmjs-types/cosmos/crypto/secp256k1/keys";
import { TxRaw } from "cosmjs-types/cosmos/tx/v1beta1/tx";
import { Any } from "cosmjs-types/google/protobuf/any";

import { ChainInfo } from "@keplr-wallet/types";
import { aminoTypes } from "../../amino";
import { registry } from "../../registry";
import { EthAccount } from "./auth";

export async function signAndBroadcast({
  rpc,
  signer,
  messages,
  sourceAccount,
  sourceChainData,
}: {
  rpc: string;
  signer: OfflineSigner;
  messages: EncodeObject[];
  sourceAccount: AccountData;
  sourceChainData: ChainInfo;
}): Promise<DeliverTxResponse> {
  if (!("signDirect" in signer))
    throw new Error("Ledger not supported for EVMOS Accounts");
  const query = await StargateClient.connect(rpc);
  const response = await query["forceGetQueryClient"]().auth.account(
    sourceAccount.address
  );
  if (!response) throw new Error("EVMOS Account not found");
  const account = EthAccount.decode(response.value);
  if (!account.base_account) throw new Error("EVMOS Account not found");

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
  const authInfoBytes = makeAuthInfoBytes(
    [
      {
        pubkey: pubk,
        sequence: Number(account.base_account.sequence),
      },
    ],
    coins(gasPrice * gasLimit, "aevmos"),
    gasLimit,
    undefined,
    undefined
  );
  const signDoc = makeSignDoc(
    txBodyBytes,
    authInfoBytes,
    sourceChainData.chainId,
    Number(account.base_account.accountNumber)
  );
  const { signature, signed } = await signer.signDirect(
    sourceAccount.address,
    signDoc
  );
  // returns txBytes for broadcast
  const tx = TxRaw.encode({
    bodyBytes: signed.bodyBytes,
    authInfoBytes: signed.authInfoBytes,
    signatures: [fromBase64(signature.signature)],
  }).finish();

  const client = await SigningStargateClient.connectWithSigner(rpc, signer, {
    registry,
    aminoTypes: aminoTypes("evmos"),
  });

  const res = await client.broadcastTx(tx);

  assertIsDeliverTxSuccess(res);

  return res;
}
