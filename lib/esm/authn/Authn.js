import { Sha256, sha256 } from "@cosmjs/crypto";
import { toAscii, toBech32 } from "@cosmjs/encoding";
import { decode } from "cbor-x";
import elliptic from "elliptic";
const p256 = new elliptic.ec("p256");
export const decodeAttestationObject = (bytes) => {
    const decoded = decode(bytes);
    let authData = decoded.authData;
    const rpIdHash = authData.slice(0, 32);
    const flags = authData.slice(32, 33);
    const signCount = authData.slice(33, 37);
    const attestedCredentialData = authData.slice(37);
    const AAGUID = attestedCredentialData.slice(0, 16);
    const credentialIdLength = attestedCredentialData.slice(16, 18);
    const credentialIdLenghInt = Buffer.from(credentialIdLength).readUIntBE(0, credentialIdLength.length);
    const credentialId = attestedCredentialData.slice(18, 18 + credentialIdLenghInt);
    const credentialPublicKey = attestedCredentialData.slice(18 + credentialIdLenghInt);
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
const decodeCredentialPublicKey = (res) => {
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
export const toCredential = (rawId, { x, y }) => {
    console.log({ rawId });
    const uncompressed = new Uint8Array([0x04, ...x, ...y]);
    const keyBytes = Uint8Array.from(p256.keyFromPublic(uncompressed).getPublic(true, "array"));
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
