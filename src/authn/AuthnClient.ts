import { Pubkey, StdFee } from "@cosmjs/amino";
import { DeliverTxResponse } from "@cosmjs/cosmwasm-stargate";
import { fromBase64, toBase64 } from "@cosmjs/encoding";
import { Int53, Uint53, Uint64 } from "@cosmjs/math";
import {
  EncodeObject,
  Registry,
  TxBodyEncodeObject,
  makeAuthInfoBytes,
  makeSignDoc,
} from "@cosmjs/proto-signing";
import {
  Account,
  AccountParser,
  GasPrice,
  SignerData,
  StargateClient,
  StargateClientOptions,
  calculateFee,
  defaultRegistryTypes,
} from "@cosmjs/stargate";
import { Tendermint37Client } from "@cosmjs/tendermint-rpc";
import { assertDefined } from "@cosmjs/utils";
import { BaseAccount } from "cosmjs-types/cosmos/auth/v1beta1/auth";
import { TxRaw } from "cosmjs-types/cosmos/tx/v1beta1/tx";
import { Any } from "cosmjs-types/google/protobuf/any";
import { registry } from "../registry";
import { PubKey as AuthnPubKey } from "./AuthnPubKey";
import { AuthnSigner } from "./AuthnSigner";

export interface AminoAuthnPubKey {
  readonly type: "tendermint/PubKeyAuthn";
  readonly value: { key_id: string; key: string };
}

/**
 * Takes a pubkey in the Amino JSON object style (type/value wrapper)
 * and convertes it into a protobuf `Any`.
 *
 * This is the reverse operation to `decodePubkey`.
 */
export function encodePubkey(id: string, key: Uint8Array): Any {
  return Any.fromPartial({
    typeUrl: "/kujira.crypto.authn.PubKey",
    // the proto definition of the k1 key as it's just a string value at index 1
    value: AuthnPubKey.encode(
      AuthnPubKey.fromPartial({
        key_id: id,
        key,
      })
    ).finish(),
  });
}

/**
 * Decodes a pubkey from a protobuf `Any` into `Pubkey`.
 * This supports single pubkeys such as Cosmos ed25519 and secp256k1 keys
 * as well as multisig threshold pubkeys.
 */
export function decodePubkey(pubkey: Any): Pubkey {
  switch (pubkey.typeUrl) {
    case "/kujira.crypto.authn.PubKey":
      const { key_id, key } = AuthnPubKey.decode(pubkey.value);
      return encodeAminoAuthnPubkey(key_id, key);

    default:
      throw new Error(`Pubkey type_url ${pubkey.typeUrl} not recognized`);
  }
}

/**
 * Takes a Ecdsa256 public key as raw bytes and returns the Amino JSON
 * representation of it (the type/value wrapper object).
 */
export function encodeAminoAuthnPubkey(
  id: string,
  pubkey: Uint8Array
): AminoAuthnPubKey {
  if (pubkey.length !== 33 || (pubkey[0] !== 0x02 && pubkey[0] !== 0x03)) {
    throw new Error(
      "Public key must be compressed Ecdsa256, i.e. 33 bytes starting with 0x02 or 0x03"
    );
  }
  return {
    type: "tendermint/PubKeyAuthn",
    value: { key_id: id, key: toBase64(pubkey) },
  };
}

function accountFromBaseAccount(input: BaseAccount): Account {
  const { address, pubKey, accountNumber, sequence } = input;
  const pubkey = pubKey ? decodePubkey(pubKey) : null;
  return {
    address: address,
    pubkey: pubkey,
    accountNumber: uint64FromProto(accountNumber).toNumber(),
    sequence: uint64FromProto(sequence).toNumber(),
  };
}

function uint64FromProto(input: BigInt): Uint64 {
  return Uint64.fromString(input.toString());
}

const accountParser: AccountParser = (any: Any) =>
  accountFromBaseAccount(BaseAccount.decode(any.value));

export interface AuthnClientOptions extends StargateClientOptions {
  readonly registry?: Registry;
  readonly broadcastTimeoutMs?: number;
  readonly broadcastPollIntervalMs?: number;
  readonly gasPrice?: GasPrice;
}

export class AuthnClient extends StargateClient {
  public readonly registry: Registry;
  public readonly broadcastTimeoutMs: number | undefined;
  public readonly broadcastPollIntervalMs: number | undefined;

  private readonly signer: AuthnSigner;
  private readonly gasPrice: GasPrice | undefined;

  /**
   * Creates an instance from a manually created Tendermint client.
   * Use this to use `Tendermint37Client` instead of `Tendermint34Client`.
   */
  public static async createWithSigner(
    tmClient: Tendermint37Client,
    signer: AuthnSigner,
    options: AuthnClientOptions
  ): Promise<AuthnClient> {
    return new AuthnClient(tmClient, signer, {
      ...options,
      accountParser,
    });
  }

  protected constructor(
    tmClient: Tendermint37Client | undefined,
    signer: AuthnSigner,
    options: AuthnClientOptions
  ) {
    super(tmClient, options);
    const { registry = new Registry(defaultRegistryTypes) } = options;
    this.registry = registry;
    this.signer = signer;
    this.broadcastTimeoutMs = options.broadcastTimeoutMs;
    this.broadcastPollIntervalMs = options.broadcastPollIntervalMs;
    this.gasPrice = options.gasPrice;
  }

  public async simulate(
    signerAddress: string,
    messages: readonly EncodeObject[],
    memo: string | undefined
  ): Promise<number> {
    const anyMsgs = messages.map((m) => registry.encodeAsAny(m));
    const accountFromSigner = (await this.signer.getAccounts()).find(
      (account) => account.address === signerAddress
    );
    if (!accountFromSigner) {
      throw new Error("Failed to retrieve account from signer");
    }
    const pubkey = encodeAminoAuthnPubkey(
      this.signer.id(),
      accountFromSigner.pubkey
    );
    const { sequence } = await this.getSequence(signerAddress);
    const { gasInfo } = await this.forceGetQueryClient().tx.simulate(
      anyMsgs,
      memo,
      pubkey,
      sequence
    );
    assertDefined(gasInfo);
    return Uint53.fromString(gasInfo.gasUsed.toString()).toNumber();
  }

  public async signAndBroadcast(
    signerAddress: string,
    messages: readonly EncodeObject[],
    fee: StdFee | "auto" | number,
    memo = ""
  ): Promise<DeliverTxResponse> {
    let usedFee: StdFee;
    if (fee == "auto" || typeof fee === "number") {
      assertDefined(
        this.gasPrice,
        "Gas price must be set in the client options when auto gas is used."
      );
      const gasEstimation = await this.simulate(signerAddress, messages, memo);
      const multiplier = typeof fee === "number" ? fee : 1.4;
      usedFee = calculateFee(
        Math.round(gasEstimation * multiplier),
        this.gasPrice
      );
    } else {
      usedFee = fee;
    }
    const txRaw = await this.sign(signerAddress, messages, usedFee, memo);
    const txBytes = TxRaw.encode(txRaw).finish();
    return this.broadcastTx(
      txBytes,
      this.broadcastTimeoutMs,
      this.broadcastPollIntervalMs
    );
  }

  /**
   * Gets account number and sequence from the API, creates a sign doc,
   * creates a single signature and assembles the signed transaction.
   *
   * You can pass signer data (account number, sequence and chain ID) explicitly instead of querying them
   * from the chain.
   */
  public async sign(
    signerAddress: string,
    messages: readonly EncodeObject[],
    fee: StdFee,
    memo: string,
    explicitSignerData?: SignerData
  ): Promise<TxRaw> {
    let signerData: SignerData;
    if (explicitSignerData) {
      signerData = explicitSignerData;
    } else {
      const { accountNumber, sequence } = await this.getSequence(signerAddress);
      const chainId = await this.getChainId();
      signerData = {
        accountNumber: accountNumber,
        sequence: sequence,
        chainId: chainId,
      };
    }

    return this.signAuthn(signerAddress, messages, fee, memo, signerData);
  }

  public async signAuthn(
    signerAddress: string,
    messages: readonly EncodeObject[],
    fee: StdFee,
    memo: string,
    { accountNumber, sequence, chainId }: SignerData
  ): Promise<TxRaw> {
    const accountFromSigner = (await this.signer.getAccounts()).find(
      (account) => account.address === signerAddress
    );
    if (!accountFromSigner) {
      throw new Error("Failed to retrieve account from signer");
    }
    const pubkey = encodePubkey(this.signer.id(), accountFromSigner.pubkey);
    const txBodyEncodeObject: TxBodyEncodeObject = {
      typeUrl: "/cosmos.tx.v1beta1.TxBody",
      value: {
        messages: messages,
        memo: memo,
      },
    };
    const txBodyBytes = this.registry.encode(txBodyEncodeObject);
    const gasLimit = Int53.fromString(fee.gas).toNumber();
    const authInfoBytes = makeAuthInfoBytes(
      [{ pubkey, sequence }],
      fee.amount,
      gasLimit,
      fee.granter,
      fee.payer
    );
    const signDoc = makeSignDoc(
      txBodyBytes,
      authInfoBytes,
      chainId,
      accountNumber
    );
    const { signature, signed } = await this.signer.signAuthn(
      signerAddress,
      signDoc
    );
    return TxRaw.fromPartial({
      bodyBytes: signed.bodyBytes,
      authInfoBytes: signed.authInfoBytes,
      signatures: [fromBase64(signature)],
    });
  }
}
