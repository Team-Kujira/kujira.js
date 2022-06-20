import { Registry, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgSetWithdrawAddress } from "./types/cosmos/distribution/v1beta1/tx";
import { MsgWithdrawDelegatorReward } from "./types/cosmos/distribution/v1beta1/tx";
import { MsgWithdrawValidatorCommission } from "./types/cosmos/distribution/v1beta1/tx";
import { MsgFundCommunityPool } from "./types/cosmos/distribution/v1beta1/tx";
declare const types: ((string | {
    encode(message: MsgSetWithdrawAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): MsgSetWithdrawAddress;
    fromJSON(object: any): MsgSetWithdrawAddress;
    toJSON(message: MsgSetWithdrawAddress): unknown;
    fromPartial(object: {
        delegator_address?: string | undefined;
        withdraw_address?: string | undefined;
    }): MsgSetWithdrawAddress;
})[] | (string | {
    encode(message: MsgWithdrawValidatorCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): MsgWithdrawValidatorCommission;
    fromJSON(object: any): MsgWithdrawValidatorCommission;
    toJSON(message: MsgWithdrawValidatorCommission): unknown;
    fromPartial(object: {
        validator_address?: string | undefined;
    }): MsgWithdrawValidatorCommission;
})[] | (string | {
    encode(message: MsgFundCommunityPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): MsgFundCommunityPool;
    fromJSON(object: any): MsgFundCommunityPool;
    toJSON(message: MsgFundCommunityPool): unknown;
    fromPartial(object: {
        amount?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
        depositor?: string | undefined;
    }): MsgFundCommunityPool;
})[])[];
export declare const MissingWalletError: Error;
export declare const registry: Registry;
declare const txClient: {
    msgSetWithdrawAddress: (data: MsgSetWithdrawAddress) => EncodeObject;
    msgWithdrawDelegatorReward: (data: MsgWithdrawDelegatorReward) => EncodeObject;
    msgWithdrawValidatorCommission: (data: MsgWithdrawValidatorCommission) => EncodeObject;
    msgFundCommunityPool: (data: MsgFundCommunityPool) => EncodeObject;
};
export { txClient, Api, types };
