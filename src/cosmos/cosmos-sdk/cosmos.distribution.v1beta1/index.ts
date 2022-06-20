

import { Registry, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgSetWithdrawAddress } from "./types/cosmos/distribution/v1beta1/tx";
import { MsgWithdrawDelegatorReward } from "./types/cosmos/distribution/v1beta1/tx";
import { MsgWithdrawValidatorCommission } from "./types/cosmos/distribution/v1beta1/tx";
import { MsgFundCommunityPool } from "./types/cosmos/distribution/v1beta1/tx";

const types = [
  [
    "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress",
    MsgSetWithdrawAddress,
  ],
  [
    "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
    MsgWithdrawDelegatorReward,
  ],
  [
    "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission",
    MsgWithdrawValidatorCommission,
  ],
  [
    "/cosmos.distribution.v1beta1.MsgFundCommunityPool",
    MsgFundCommunityPool,
  ],
];
export const MissingWalletError = new Error("wallet is required");

export const registry = new Registry(<any>types);

const txClient = {
  msgSetWithdrawAddress: (
    data: MsgSetWithdrawAddress
  ): EncodeObject => ({
    typeUrl: "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress",
    value: MsgSetWithdrawAddress.fromPartial(data),
  }),
  msgWithdrawDelegatorReward: (
    data: MsgWithdrawDelegatorReward
  ): EncodeObject => ({
    typeUrl:
      "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
    value: MsgWithdrawDelegatorReward.fromPartial(data),
  }),
  msgWithdrawValidatorCommission: (
    data: MsgWithdrawValidatorCommission
  ): EncodeObject => ({
    typeUrl:
      "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission",
    value: MsgWithdrawValidatorCommission.fromPartial(data),
  }),
  msgFundCommunityPool: (
    data: MsgFundCommunityPool
  ): EncodeObject => ({
    typeUrl: "/cosmos.distribution.v1beta1.MsgFundCommunityPool",
    value: MsgFundCommunityPool.fromPartial(data),
  }),
};

export { txClient, Api, types };
