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
exports.AuthnWebSigner = void 0;
const proto_signing_1 = require("@cosmjs/proto-signing");
const uuid_1 = require("uuid");
const Authn_1 = require("./Authn");
class AuthnWebSigner {
    constructor(credential, name) {
        this.credential = credential;
        this.name = name;
    }
    static create(rp, name, opts) {
        return __awaiter(this, void 0, void 0, function* () {
            const challenge = new Uint8Array(32);
            self.crypto.getRandomValues(challenge);
            const id = (0, uuid_1.v4)();
            const credentialCreationOptions = {
                publicKey: Object.assign({ rp, user: {
                        id: new Uint8Array(Buffer.from(id)),
                        name: name,
                        displayName: name,
                    }, pubKeyCredParams: [{ alg: -7, type: "public-key" }], challenge, timeout: 60000, excludeCredentials: [], authenticatorSelection: {
                        authenticatorAttachment: "platform",
                        requireResidentKey: false,
                        userVerification: "preferred",
                    }, attestation: "direct" }, opts),
            };
            const credential = yield navigator.credentials.create(credentialCreationOptions);
            const createCredential = assertPublicKeyCredential(credential);
            const attestationResponse = assertAttestationResponse(createCredential.response);
            const decoded = (0, Authn_1.decodeAttestationObject)(new Uint8Array(attestationResponse.attestationObject));
            return new AuthnWebSigner((0, Authn_1.toCredential)(createCredential.rawId, decoded.authData.attestedCredentialData.credentialPublicKey), name);
        });
    }
    id() {
        return this.credential.id;
    }
    signAuthn(signerAddress, signDoc) {
        return __awaiter(this, void 0, void 0, function* () {
            const signBytes = (0, proto_signing_1.makeSignBytes)(signDoc);
            const credentialRequestOptions = {
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
            const credential = yield navigator.credentials.get(credentialRequestOptions);
            const getCredential = assertPublicKeyCredential(credential);
            const response = assertAssertionResponse(getCredential.response);
            const signature = {
                authenticatorData: Buffer.from(response.authenticatorData).toString("hex"),
                clientDataJSON: Buffer.from(response.clientDataJSON).toString("hex"),
                signature: Buffer.from(response.signature).toString("hex"),
            };
            return {
                signed: signDoc,
                signature: Buffer.from(JSON.stringify(signature)).toString("base64"),
            };
        });
    }
    getAccounts() {
        return __awaiter(this, void 0, void 0, function* () {
            return [
                {
                    address: this.credential.address,
                    algo: "secp256r1",
                    pubkey: Buffer.from(this.credential.pubkey, "hex"),
                },
            ];
        });
    }
}
exports.AuthnWebSigner = AuthnWebSigner;
const assertPublicKeyCredential = (credential) => {
    if (!credential)
        throw new Error(`No Credential`);
    if (credential && "rawId" in credential)
        return credential;
    throw new Error(`Invalid Create Credential`);
};
const assertAttestationResponse = (response) => {
    if (response && "attestationObject" in response)
        return response;
    throw new Error(`Invalid Attestaion Response`);
};
const assertAssertionResponse = (response) => {
    if (response && "authenticatorData" in response)
        return response;
    throw new Error(`Invalid Attestaion Response`);
};
