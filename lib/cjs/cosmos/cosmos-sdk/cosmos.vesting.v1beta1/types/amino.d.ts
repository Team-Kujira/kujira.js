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
export declare const aminoConverter: {
    "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
        aminoType: string;
        toAmino: ({ from_address, to_address, amount, end_time, delayed, }: MsgCreateVestingAccount) => AminoMsgCreateVestingAccount["value"];
        fromAmino: ({ from_address, to_address, amount, end_time, delayed, }: AminoMsgCreateVestingAccount["value"]) => MsgCreateVestingAccount;
    };
};
