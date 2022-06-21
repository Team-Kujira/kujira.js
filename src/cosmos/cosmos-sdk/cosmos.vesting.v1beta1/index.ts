import { Registry, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCreateVestingAccount } from "./types/tx";

const types = [
  ["/cosmos.vesting.v1beta1.MsgCreateVestingAccount", MsgCreateVestingAccount],
];

export const registry = new Registry(<any>types);

const txClient = {
  msgCreateVestingAccount: (data: MsgCreateVestingAccount): EncodeObject => ({
    typeUrl: "/cosmos.vesting.v1beta1.MsgCreateVestingAccount",
    value: MsgCreateVestingAccount.fromPartial(data),
  }),
};

export { txClient, Api, types };
