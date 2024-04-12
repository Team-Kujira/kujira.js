import {
  DirectSignResponse,
  OfflineDirectSigner,
  OfflineSigner,
} from "@cosmjs/proto-signing";
import * as k from "@keplr-wallet/types";
import { SignDoc } from "cosmjs-types/cosmos/tx/v1beta1/tx";
import Long from "long";

export const castSigner = (
  old: k.OfflineAminoSigner | k.OfflineDirectSigner
): OfflineSigner =>
  "signAmino" in old ? old : castDirectSigner(old);

const castDirectSigner = (
  old: k.OfflineDirectSigner
): OfflineDirectSigner => ({
  ...old,
  signDirect: async (
    signerAddress: string,
    signDoc: SignDoc
  ): Promise<DirectSignResponse> => {
    const res = await old.signDirect(signerAddress, {
      ...signDoc,
      accountNumber: Long.fromNumber(Number(signDoc.accountNumber)),
    });
    return {
      ...res,
      signed: {
        ...res.signed,
        accountNumber: BigInt(res.signed.accountNumber.toString()),
      },
    };
  },
});
