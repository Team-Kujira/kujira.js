import { Sha256, sha256 } from "@cosmjs/crypto";
import { toAscii, toBech32 } from "@cosmjs/encoding";
import { decode } from "cbor-x";
import { SignDoc } from "cosmjs-types/cosmos/tx/v1beta1/tx";
import elliptic from "elliptic";
const p256 = new elliptic.ec("p256");

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
  //  EC identifier - Taken from the  "COSE Elliptic Curves" registry
  crv: number;
  // x-coordinate
  x: Uint8Array;
  // y-coordinate
  y: Uint8Array;
  privateKey?: Uint8Array;
  // RFC 8152 p 34
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

export const decodeAttestationObject = (
  bytes: Uint8Array
): {
  authData: {
    // 32 bytes
    rpIdHash: Uint8Array;
    // 1 byte
    flags: Uint8Array;
    // 4 bytes
    signCount: Uint8Array;
    // var - https://developer.mozilla.org/en-US/docs/Web/API/Web_Authentication_API/Authenticator_data#attestedcredentialdata
    attestedCredentialData: {
      // 16 bytes
      AAGUID: Uint8Array;
      // 2 bytes
      credentialIdLength: Uint8Array;
      // credentialIdLength bytes
      credentialId: Uint8Array;
      // var
      credentialPublicKey: COSEKey;
    };
  };
  fmt: "none";
  attStmt: {};
} => {
  const decoded = decode(bytes);
  let authData: Uint8Array = decoded.authData;
  const rpIdHash = authData.slice(0, 32);
  const flags = authData.slice(32, 33);
  const signCount = authData.slice(33, 37);
  const attestedCredentialData = authData.slice(37);
  const AAGUID = attestedCredentialData.slice(0, 16);
  const credentialIdLength = attestedCredentialData.slice(16, 18);
  const credentialIdLenghInt = Buffer.from(credentialIdLength).readUIntBE(
    0,
    credentialIdLength.length
  );
  const credentialId = attestedCredentialData.slice(
    18,
    18 + credentialIdLenghInt
  );
  const credentialPublicKey = attestedCredentialData.slice(
    18 + credentialIdLenghInt
  );

  return {
    fmt: decoded.fmt,
    attStmt: decoded.attStmt,
    authData: {
      rpIdHash,
      flags,
      signCount,
      attestedCredentialData: {
        AAGUID,
        credentialIdLength,
        credentialId,
        credentialPublicKey: decodeCredentialPublicKey(credentialPublicKey),
        // bech32PublicKey,
      },
    },
  };
};

const decodeCredentialPublicKey = (res: Uint8Array): COSEKey => {
  const decoded = decode(res);
  return {
    crv: decoded[-1],
    x: decoded[-2],
    y: decoded[-3],
    privateKey: decoded[-4],
    kty: decoded[1],
    kid: decoded[2],
    alg: decoded[3],
    key_ops: decoded[4],
    "Base IV": decoded[5],
  };
};

export const toCredential = (
  rawId: ArrayBuffer,
  { x, y }: COSEKey
): AuthnCredential => {
  console.log({ rawId });

  const uncompressed = new Uint8Array([0x04, ...x, ...y]);
  const keyBytes = Uint8Array.from(
    p256.keyFromPublic(uncompressed).getPublic(true, "array")
  );
  const addressBytes = new Sha256(sha256(toAscii("kujira.crypto.authn.PubKey")))
    .update(keyBytes)
    .digest();

  const address = toBech32("kujira", addressBytes);
  const id = Buffer.from(rawId).toString("hex");
  return {
    id,
    address,
    pubkey: Buffer.from(keyBytes).toString("hex"),
  };
};
