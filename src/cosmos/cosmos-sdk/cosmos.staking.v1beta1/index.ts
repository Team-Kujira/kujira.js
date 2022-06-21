import { Registry, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import {
  MsgBeginRedelegate,
  MsgCreateValidator,
  MsgDelegate,
  MsgEditValidator,
  MsgUndelegate,
} from "./types/tx";

export const types = [
  ["/cosmos.staking.v1beta1.MsgCreateValidator", MsgCreateValidator],
  ["/cosmos.staking.v1beta1.MsgDelegate", MsgDelegate],
  ["/cosmos.staking.v1beta1.MsgBeginRedelegate", MsgBeginRedelegate],
  ["/cosmos.staking.v1beta1.MsgEditValidator", MsgEditValidator],
  ["/cosmos.staking.v1beta1.MsgUndelegate", MsgUndelegate],
];

export const registry = new Registry(<any>types);

const txClient = {
  msgCreateValidator: (data: MsgCreateValidator): EncodeObject => ({
    typeUrl: "/cosmos.staking.v1beta1.MsgCreateValidator",
    value: MsgCreateValidator.fromPartial(data),
  }),
  msgDelegate: (data: MsgDelegate): EncodeObject => ({
    typeUrl: "/cosmos.staking.v1beta1.MsgDelegate",
    value: MsgDelegate.fromPartial(data),
  }),
  msgBeginRedelegate: (data: MsgBeginRedelegate): EncodeObject => ({
    typeUrl: "/cosmos.staking.v1beta1.MsgBeginRedelegate",
    value: MsgBeginRedelegate.fromPartial(data),
  }),
  msgEditValidator: (data: MsgEditValidator): EncodeObject => ({
    typeUrl: "/cosmos.staking.v1beta1.MsgEditValidator",
    value: MsgEditValidator.fromPartial(data),
  }),
  msgUndelegate: (data: MsgUndelegate): EncodeObject => ({
    typeUrl: "/cosmos.staking.v1beta1.MsgUndelegate",
    value: MsgUndelegate.fromPartial(data),
  }),
};

export { txClient, Api };
