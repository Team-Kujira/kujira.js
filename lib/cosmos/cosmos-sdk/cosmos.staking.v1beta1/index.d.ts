import { Registry, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCreateValidator } from "./types/cosmos/staking/v1beta1/tx";
import { MsgDelegate } from "./types/cosmos/staking/v1beta1/tx";
import { MsgBeginRedelegate } from "./types/cosmos/staking/v1beta1/tx";
import { MsgEditValidator } from "./types/cosmos/staking/v1beta1/tx";
import { MsgUndelegate } from "./types/cosmos/staking/v1beta1/tx";
export declare const types: ((string | {
    encode(message: MsgCreateValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): MsgCreateValidator;
    fromJSON(object: any): MsgCreateValidator;
    toJSON(message: MsgCreateValidator): unknown;
    fromPartial(object: {
        description?: {
            moniker?: string | undefined;
            identity?: string | undefined;
            website?: string | undefined;
            security_contact?: string | undefined;
            details?: string | undefined;
        } | undefined;
        commission?: {
            rate?: string | undefined;
            max_rate?: string | undefined;
            max_change_rate?: string | undefined;
        } | undefined;
        min_self_delegation?: string | undefined;
        delegator_address?: string | undefined;
        validator_address?: string | undefined;
        pubkey?: {
            type_url?: string | undefined;
            value?: Uint8Array | undefined;
        } | undefined;
        value?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
    }): MsgCreateValidator;
})[] | (string | {
    encode(message: MsgDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): MsgDelegate;
    fromJSON(object: any): MsgDelegate;
    toJSON(message: MsgDelegate): unknown;
    fromPartial(object: {
        delegator_address?: string | undefined;
        validator_address?: string | undefined;
        amount?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
    }): MsgDelegate;
})[] | (string | {
    encode(message: MsgBeginRedelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): MsgBeginRedelegate;
    fromJSON(object: any): MsgBeginRedelegate;
    toJSON(message: MsgBeginRedelegate): unknown;
    fromPartial(object: {
        delegator_address?: string | undefined;
        validator_src_address?: string | undefined;
        validator_dst_address?: string | undefined;
        amount?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
    }): MsgBeginRedelegate;
})[] | (string | {
    encode(message: MsgEditValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): MsgEditValidator;
    fromJSON(object: any): MsgEditValidator;
    toJSON(message: MsgEditValidator): unknown;
    fromPartial(object: {
        description?: {
            moniker?: string | undefined;
            identity?: string | undefined;
            website?: string | undefined;
            security_contact?: string | undefined;
            details?: string | undefined;
        } | undefined;
        validator_address?: string | undefined;
        commission_rate?: string | undefined;
        min_self_delegation?: string | undefined;
    }): MsgEditValidator;
})[])[];
export declare const MissingWalletError: Error;
export declare const registry: Registry;
declare const txClient: {
    msgCreateValidator: (data: MsgCreateValidator) => EncodeObject;
    msgDelegate: (data: MsgDelegate) => EncodeObject;
    msgBeginRedelegate: (data: MsgBeginRedelegate) => EncodeObject;
    msgEditValidator: (data: MsgEditValidator) => EncodeObject;
    msgUndelegate: (data: MsgUndelegate) => EncodeObject;
};
export { txClient, Api };
