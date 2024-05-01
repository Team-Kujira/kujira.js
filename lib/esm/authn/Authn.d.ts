import { SignDoc } from "cosmjs-types/cosmos/tx/v1beta1/tx";
export type Algo = "secp256r1";
export interface AccountData {
    /** A printable address (typically bech32 encoded) */
    readonly address: string;
    readonly algo: Algo;
    readonly pubkey: Uint8Array;
}
export interface AuthnSignResponse {
    /**
     * The sign doc that was signed.
     * This may be different from the input signDoc when the signer modifies it as part of the signing process.
     */
    readonly signed: SignDoc;
    readonly signature: string;
}
export interface CBORSignature {
    readonly authenticatorData: string;
    readonly clientDataJSON: string;
    readonly signature: string;
}
export interface AuthnCredential {
    id: string;
    address: string;
    pubkey: string;
}
interface COSEKey {
    crv: number;
    x: Uint8Array;
    y: Uint8Array;
    privateKey?: Uint8Array;
    /**
     * Identification of the key type
     * Lookup in COSE Key Common Parameters
     */
    kty: string | number;
    /**
     * Key identification value -- match to kid in message
     */
    kid: Uint8Array;
    /**
     * Key usage restruction to this algorithm
     * Lookup in COSE Algorithms
     */
    alg: COSEAlgorithmIdentifier;
    /**
     * Restrict set of premissible operations
     */
    key_ops: (string | number)[];
    /**
     * Base IV to be xor-ed with Partial IVs
     */
    "Base IV": Uint8Array;
}
export declare const decodeAttestationObject: (bytes: Uint8Array) => {
    authData: {
        rpIdHash: Uint8Array;
        flags: Uint8Array;
        signCount: Uint8Array;
        attestedCredentialData: {
            AAGUID: Uint8Array;
            credentialIdLength: Uint8Array;
            credentialId: Uint8Array;
            credentialPublicKey: COSEKey;
        };
    };
    fmt: "none";
    attStmt: {};
};
export declare const toCredential: (rawId: ArrayBuffer, { x, y }: COSEKey) => AuthnCredential;
export {};
