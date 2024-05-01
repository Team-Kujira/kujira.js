import { makeSignBytes } from "@cosmjs/proto-signing";
import { SignDoc } from "cosmjs-types/cosmos/tx/v1beta1/tx";
import { v4 } from "uuid";
import {
  AccountData,
  AuthnCredential,
  AuthnSignResponse,
  CBORSignature,
  decodeAttestationObject,
  toCredential,
} from "./Authn";
import { AuthnSigner } from "./AuthnSigner";

export class AuthnWebSigner implements AuthnSigner {
  constructor(
    public credential: AuthnCredential,
    public name: string
  ) {}

  static async create(
    rp: PublicKeyCredentialRpEntity,
    name: string,
    opts?: PublicKeyCredentialCreationOptions
  ): Promise<AuthnWebSigner> {
    const challenge = new Uint8Array(32);
    self.crypto.getRandomValues(challenge);
    const id = v4();
    const credentialCreationOptions: CredentialCreationOptions = {
      publicKey: {
        rp,
        user: {
          id: new Uint8Array(Buffer.from(id)),
          name: name,
          displayName: name,
        },
        pubKeyCredParams: [{ alg: -7, type: "public-key" }],
        challenge,
        timeout: 60000,
        excludeCredentials: [],
        authenticatorSelection: {
          authenticatorAttachment: "platform",
          requireResidentKey: false,
          userVerification: "preferred",
        },
        attestation: "direct",
        ...opts,
      },
    };

    const credential = await navigator.credentials.create(
      credentialCreationOptions
    );

    const createCredential = assertPublicKeyCredential(credential);
    const attestationResponse = assertAttestationResponse(
      createCredential.response
    );

    const decoded = decodeAttestationObject(
      new Uint8Array(attestationResponse.attestationObject)
    );

    return new AuthnWebSigner(
      toCredential(
        createCredential.rawId,
        decoded.authData.attestedCredentialData.credentialPublicKey
      ),
      name
    );
  }

  id(): string {
    return this.credential.id;
  }

  async signAuthn(
    signerAddress: string,
    signDoc: SignDoc
  ): Promise<AuthnSignResponse> {
    const signBytes = makeSignBytes(signDoc);

    const credentialRequestOptions: CredentialRequestOptions = {
      publicKey: {
        allowCredentials: [
          {
            id: Buffer.from(this.credential.id, "hex"),
            type: "public-key",
            transports: ["internal"],
          },
        ],
        challenge: signBytes,
        timeout: 60000,
      },
    };
    const credential = await navigator.credentials.get(
      credentialRequestOptions
    );
    const getCredential = assertPublicKeyCredential(credential);
    const response = assertAssertionResponse(getCredential.response);
    const signature: CBORSignature = {
      authenticatorData: Buffer.from(
        response.authenticatorData
      ).toString("hex"),
      clientDataJSON: Buffer.from(response.clientDataJSON).toString(
        "hex"
      ),
      signature: Buffer.from(response.signature).toString("hex"),
    };

    return {
      signed: signDoc,
      signature: Buffer.from(JSON.stringify(signature)).toString(
        "base64"
      ),
    };
  }

  async getAccounts(): Promise<readonly AccountData[]> {
    return [
      {
        address: this.credential.address,
        algo: "secp256r1",
        pubkey: Buffer.from(this.credential.pubkey, "hex"),
      },
    ];
  }
}

const assertPublicKeyCredential = (
  credential: Credential | PublicKeyCredential | null
): PublicKeyCredential => {
  if (!credential) throw new Error(`No Credential`);
  if (credential && "rawId" in credential) return credential;
  throw new Error(`Invalid Create Credential`);
};

const assertAttestationResponse = (
  response: AuthenticatorResponse | AuthenticatorAttestationResponse
): AuthenticatorAttestationResponse => {
  if (response && "attestationObject" in response) return response;
  throw new Error(`Invalid Attestaion Response`);
};

const assertAssertionResponse = (
  response: AuthenticatorResponse | AuthenticatorAssertionResponse
): AuthenticatorAssertionResponse => {
  if (response && "authenticatorData" in response) return response;
  throw new Error(`Invalid Attestaion Response`);
};
