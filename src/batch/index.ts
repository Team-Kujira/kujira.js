import { EncodeObject, Registry } from "@cosmjs/proto-signing";
import {
  MsgBatchResetDelegation,
  MsgWithdrawAllDelegatorRewards,
} from "./types/tx";

const types = [
  ["/batch.MsgWithdrawAllDelegatorRewards", MsgWithdrawAllDelegatorRewards],
  ["/batch.MsgBatchResetDelegation", MsgBatchResetDelegation],
];

export const registry = new Registry(<any>types);

const msg = {
  msgWithdrawAllDelegatorRewards: (
    data: MsgWithdrawAllDelegatorRewards
  ): EncodeObject => ({
    typeUrl: "/batch.MsgWithdrawAllDelegatorRewards",
    value: MsgWithdrawAllDelegatorRewards.fromPartial(data),
  }),
  msgBatchResetDelegation: (data: MsgBatchResetDelegation): EncodeObject => ({
    typeUrl: "/batch.MsgBatchResetDelegation",
    value: MsgBatchResetDelegation.fromPartial(data),
  }),
};

export { msg, types };
