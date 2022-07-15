import { MsgCreateVestingAccount } from "./tx";
import { AminoMsg } from "@cosmjs/amino";

export interface AminoMsgCreateVestingAccount extends AminoMsg {
  type: "cosmos-sdk/MsgCreateVestingAccount";
  value: {
    from_address: string;
    to_address: string;
    amount: {
      denom: string;
      amount: string;
    }[];
    end_time: string;
    delayed: boolean;
  };
}

export const aminoConverter = {
  "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
    aminoType: "cosmos-sdk/MsgCreateVestingAccount",
    toAmino: ({
      from_address,
      to_address,
      amount,
      end_time,
      delayed,
    }: MsgCreateVestingAccount): AminoMsgCreateVestingAccount["value"] => {
      return {
        from_address,
        to_address,
        amount: amount.map((el0) => ({
          denom: el0.denom,
          amount: el0.amount,
        })),
        end_time: end_time.toString(),
        delayed,
      };
    },
    fromAmino: ({
      from_address,
      to_address,
      amount,
      end_time,
      delayed,
    }: AminoMsgCreateVestingAccount["value"]): MsgCreateVestingAccount => {
      return {
        from_address,
        to_address,
        amount: amount.map((el0) => ({
          denom: el0.denom,
          amount: el0.amount,
        })),
        end_time: Number(end_time),
        delayed,
      };
    },
  },
};
