import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgFundCommunityPool, MsgSetWithdrawAddress, MsgWithdrawDelegatorReward, MsgWithdrawValidatorCommission, } from "./types/tx";
const types = [
    ["/cosmos.distribution.v1beta1.MsgSetWithdrawAddress", MsgSetWithdrawAddress],
    [
        "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
        MsgWithdrawDelegatorReward,
    ],
    [
        "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission",
        MsgWithdrawValidatorCommission,
    ],
    ["/cosmos.distribution.v1beta1.MsgFundCommunityPool", MsgFundCommunityPool],
];
export const registry = new Registry(types);
const txClient = {
    msgSetWithdrawAddress: (data) => ({
        typeUrl: "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress",
        value: MsgSetWithdrawAddress.fromPartial(data),
    }),
    msgWithdrawDelegatorReward: (data) => ({
        typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
        value: MsgWithdrawDelegatorReward.fromPartial(data),
    }),
    msgWithdrawValidatorCommission: (data) => ({
        typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission",
        value: MsgWithdrawValidatorCommission.fromPartial(data),
    }),
    msgFundCommunityPool: (data) => ({
        typeUrl: "/cosmos.distribution.v1beta1.MsgFundCommunityPool",
        value: MsgFundCommunityPool.fromPartial(data),
    }),
};
export { txClient, Api, types };
