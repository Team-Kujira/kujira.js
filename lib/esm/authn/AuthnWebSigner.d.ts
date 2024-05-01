import { SignDoc } from "cosmjs-types/cosmos/tx/v1beta1/tx";
import { AccountData, AuthnCredential, AuthnSignResponse } from "./Authn";
import { AuthnSigner } from "./AuthnSigner";
export declare class AuthnWebSigner implements AuthnSigner {
    credential: AuthnCredential;
    name: string;
    constructor(credential: AuthnCredential, name: string);
    static create(rp: PublicKeyCredentialRpEntity, name: string, opts?: PublicKeyCredentialCreationOptions): Promise<AuthnWebSigner>;
    id(): string;
    signAuthn(signerAddress: string, signDoc: SignDoc): Promise<AuthnSignResponse>;
    getAccounts(): Promise<readonly AccountData[]>;
}
