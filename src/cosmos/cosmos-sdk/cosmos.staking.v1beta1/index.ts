

import { Registry, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCreateValidator } from "./types/cosmos/staking/v1beta1/tx";
import { MsgDelegate } from "./types/cosmos/staking/v1beta1/tx";
import { MsgBeginRedelegate } from "./types/cosmos/staking/v1beta1/tx";
import { MsgEditValidator } from "./types/cosmos/staking/v1beta1/tx";
import { MsgUndelegate } from "./types/cosmos/staking/v1beta1/tx";

export const types = [
  ["/cosmos.staking.v1beta1.MsgCreateValidator", MsgCreateValidator],
  ["/cosmos.staking.v1beta1.MsgDelegate", MsgDelegate],
  ["/cosmos.staking.v1beta1.MsgBeginRedelegate", MsgBeginRedelegate],
  ["/cosmos.staking.v1beta1.MsgEditValidator", MsgEditValidator],
  ["/cosmos.staking.v1beta1.MsgUndelegate", MsgUndelegate],
];
export const MissingWalletError = new Error("wallet is required");

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
