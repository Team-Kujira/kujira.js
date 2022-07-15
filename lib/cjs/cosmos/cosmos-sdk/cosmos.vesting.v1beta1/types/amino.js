"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.aminoConverter = void 0;
exports.aminoConverter = {
    "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
        aminoType: "cosmos-sdk/MsgCreateVestingAccount",
        toAmino: ({ from_address, to_address, amount, end_time, delayed, }) => {
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
        fromAmino: ({ from_address, to_address, amount, end_time, delayed, }) => {
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
