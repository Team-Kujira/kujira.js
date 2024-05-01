import { Pubkey, StdFee } from "@cosmjs/amino";
import { DeliverTxResponse } from "@cosmjs/cosmwasm-stargate";
import { EncodeObject, Registry } from "@cosmjs/proto-signing";
import { GasPrice, SignerData, StargateClient, StargateClientOptions } from "@cosmjs/stargate";
import { Tendermint37Client } from "@cosmjs/tendermint-rpc";
import { TxRaw } from "cosmjs-types/cosmos/tx/v1beta1/tx";
import { Any } from "cosmjs-types/google/protobuf/any";
import { AuthnSigner } from "./AuthnSigner";
export interface AminoAuthnPubKey {
    readonly type: "tendermint/PubKeyAuthn";
    readonly value: {
        key_id: string;
        key: string;
    };
}
/**
 * Takes a pubkey in the Amino JSON object style (type/value wrapper)
 * and convertes it into a protobuf `Any`.
 *
 * This is the reverse operation to `decodePubkey`.
 */
export declare function encodePubkey(id: string, key: Uint8Array): Any;
/**
 * Decodes a pubkey from a protobuf `Any` into `Pubkey`.
 * This supports single pubkeys such as Cosmos ed25519 and secp256k1 keys
 * as well as multisig threshold pubkeys.
 */
export declare function decodePubkey(pubkey: Any): Pubkey;
/**
 * Takes a Ecdsa256 public key as raw bytes and returns the Amino JSON
 * representation of it (the type/value wrapper object).
 */
export declare function encodeAminoAuthnPubkey(id: string, pubkey: Uint8Array): AminoAuthnPubKey;
export interface AuthnClientOptions extends StargateClientOptions {
    readonly registry?: Registry;
    readonly broadcastTimeoutMs?: number;
    readonly broadcastPollIntervalMs?: number;
    readonly gasPrice?: GasPrice;
}
export declare class AuthnClient extends StargateClient {
    readonly registry: Registry;
    readonly broadcastTimeoutMs: number | undefined;
    readonly broadcastPollIntervalMs: number | undefined;
    private readonly signer;
    private readonly gasPrice;
    /**
     * Creates an instance from a manually created Tendermint client.
     * Use this to use `Tendermint37Client` instead of `Tendermint34Client`.
     */
    static createWithSigner(tmClient: Tendermint37Client, signer: AuthnSigner, options: AuthnClientOptions): Promise<AuthnClient>;
    protected constructor(tmClient: Tendermint37Client | undefined, signer: AuthnSigner, options: AuthnClientOptions);
    simulate(signerAddress: string, messages: readonly EncodeObject[], memo: string | undefined): Promise<number>;
    signAndBroadcast(signerAddress: string, messages: readonly EncodeObject[], fee: StdFee | "auto" | number, memo?: string): Promise<DeliverTxResponse>;
    /**
     * Gets account number and sequence from the API, creates a sign doc,
     * creates a single signature and assembles the signed transaction.
     *
     * You can pass signer data (account number, sequence and chain ID) explicitly instead of querying them
     * from the chain.
     */
    sign(signerAddress: string, messages: readonly EncodeObject[], fee: StdFee, memo: string, explicitSignerData?: SignerData): Promise<TxRaw>;
    signAuthn(signerAddress: string, messages: readonly EncodeObject[], fee: StdFee, memo: string, { accountNumber, sequence, chainId }: SignerData): Promise<TxRaw>;
}
