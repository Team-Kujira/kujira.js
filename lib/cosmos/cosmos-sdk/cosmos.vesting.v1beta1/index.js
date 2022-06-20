import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCreateVestingAccount } from "./types/cosmos/vesting/v1beta1/tx";
const types = [
    ["/cosmos.vesting.v1beta1.MsgCreateVestingAccount", MsgCreateVestingAccount],
];
export const MissingWalletError = new Error("wallet is required");
export const registry = new Registry(types);
const txClient = {
    msgCreateVestingAccount: (data) => ({
        typeUrl: "/cosmos.vesting.v1beta1.MsgCreateVestingAccount",
        value: MsgCreateVestingAccount.fromPartial(data),
    }),
};
export { txClient, Api, types };
