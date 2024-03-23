import { Registry } from "@cosmjs/proto-signing";
import { MsgBatchResetDelegation, MsgWithdrawAllDelegatorRewards, } from "./types/tx";
const types = [
    ["/batch.MsgWithdrawAllDelegatorRewards", MsgWithdrawAllDelegatorRewards],
    ["/batch.MsgBatchResetDelegation", MsgBatchResetDelegation],
];
export const registry = new Registry(types);
const msg = {
    msgWithdrawAllDelegatorRewards: (data) => ({
        typeUrl: "/batch.MsgWithdrawAllDelegatorRewards",
        value: MsgWithdrawAllDelegatorRewards.fromPartial(data),
    }),
    msgBatchResetDelegation: (data) => ({
        typeUrl: "/batch.MsgBatchResetDelegation",
        value: MsgBatchResetDelegation.fromPartial(data),
    }),
};
export { msg, types };
