import { SignDoc } from "cosmjs-types/cosmos/tx/v1beta1/tx";
import { AccountData, AuthnSignResponse } from "./Authn";
export interface AuthnSigner {
    id(): string;
    signAuthn(signerAddress: string, signDoc: SignDoc): Promise<AuthnSignResponse>;
    getAccounts(): Promise<readonly AccountData[]>;
}
