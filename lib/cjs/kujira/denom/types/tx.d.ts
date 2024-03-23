import { DeepPartial } from "cosmjs-types";
import { Coin } from "cosmjs-types/cosmos/base/v1beta1/coin";
import { Reader, Writer } from "protobufjs/minimal";
export declare const protobufPackage = "kujira.denom";
/**
 * MsgCreateDenom is the sdk.Msg type for allowing an account to create
 * a new denom.  It requires a sender address and a unique nonce
 * (to allow accounts to create multiple denoms)
 */
export interface MsgCreateDenom {
    sender: string;
    nonce: string;
}
/**
 * MsgCreateDenomResponse is the return value of MsgCreateDenom
 * It returns the full string of the newly created denom
 */
export interface MsgCreateDenomResponse {
    new_token_denom: string;
}
/**
 * MsgMint is the sdk.Msg type for allowing an admin account to mint
 * more of a token.
 */
export interface MsgMint {
    sender: string;
    amount: Coin | undefined;
    recipient: string;
}
export interface MsgMintResponse {
}
/**
 * MsgBurn is the sdk.Msg type for allowing an admin account to burn
 * a token.  For now, we only support burning from the sender account.
 */
export interface MsgBurn {
    sender: string;
    amount: Coin | undefined;
}
export interface MsgBurnResponse {
}
/**
 * MsgChangeAdmin is the sdk.Msg type for allowing an admin account to reassign
 * adminship of a denom to a new account
 */
export interface MsgChangeAdmin {
    sender: string;
    denom: string;
    newAdmin: string;
}
export interface MsgChangeAdminResponse {
}
export declare const MsgCreateDenom: {
    encode(message: MsgCreateDenom, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateDenom;
    fromJSON(object: any): MsgCreateDenom;
    toJSON(message: MsgCreateDenom): unknown;
    fromPartial(object: DeepPartial<MsgCreateDenom>): MsgCreateDenom;
};
export declare const MsgCreateDenomResponse: {
    encode(message: MsgCreateDenomResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateDenomResponse;
    fromJSON(object: any): MsgCreateDenomResponse;
    toJSON(message: MsgCreateDenomResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateDenomResponse>): MsgCreateDenomResponse;
};
export declare const MsgMint: {
    encode(message: MsgMint, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgMint;
    fromJSON(object: any): MsgMint;
    toJSON(message: MsgMint): unknown;
    fromPartial(object: DeepPartial<MsgMint>): MsgMint;
};
export declare const MsgMintResponse: {
    encode(_: MsgMintResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgMintResponse;
    fromJSON(_: any): MsgMintResponse;
    toJSON(_: MsgMintResponse): unknown;
    fromPartial(_: DeepPartial<MsgMintResponse>): MsgMintResponse;
};
export declare const MsgBurn: {
    encode(message: MsgBurn, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgBurn;
    fromJSON(object: any): MsgBurn;
    toJSON(message: MsgBurn): unknown;
    fromPartial(object: DeepPartial<MsgBurn>): MsgBurn;
};
export declare const MsgBurnResponse: {
    encode(_: MsgBurnResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgBurnResponse;
    fromJSON(_: any): MsgBurnResponse;
    toJSON(_: MsgBurnResponse): unknown;
    fromPartial(_: DeepPartial<MsgBurnResponse>): MsgBurnResponse;
};
export declare const MsgChangeAdmin: {
    encode(message: MsgChangeAdmin, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgChangeAdmin;
    fromJSON(object: any): MsgChangeAdmin;
    toJSON(message: MsgChangeAdmin): unknown;
    fromPartial(object: DeepPartial<MsgChangeAdmin>): MsgChangeAdmin;
};
export declare const MsgChangeAdminResponse: {
    encode(_: MsgChangeAdminResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgChangeAdminResponse;
    fromJSON(_: any): MsgChangeAdminResponse;
    toJSON(_: MsgChangeAdminResponse): unknown;
    fromPartial(_: DeepPartial<MsgChangeAdminResponse>): MsgChangeAdminResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    CreateDenom(request: MsgCreateDenom): Promise<MsgCreateDenomResponse>;
    Mint(request: MsgMint): Promise<MsgMintResponse>;
    Burn(request: MsgBurn): Promise<MsgBurnResponse>;
    /**
     * ForceTransfer is deactivated for now because we need to think through edge
     * cases rpc ForceTransfer(MsgForceTransfer) returns
     * (MsgForceTransferResponse);
     */
    ChangeAdmin(request: MsgChangeAdmin): Promise<MsgChangeAdminResponse>;
}
