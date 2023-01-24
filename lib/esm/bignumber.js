const PRECISION = 6;
import { BigNumber } from "@ethersproject/bignumber";
export const toHuman = (amount, decimals) => amount
    .mul(Math.pow(10, PRECISION))
    .div(BigNumber.from(10).pow(decimals))
    .toNumber() /
    Math.pow(10, PRECISION);
export const fromHumanString = (amount, decimals) => {
    try {
        return BigNumber.from(Math.floor(parseFloat(amount) * Math.pow(10, decimals)).toString());
    }
    catch (error) {
        return BigNumber.from(0);
    }
};
export const mulDec = (a, x) => a.mul(Math.floor(x * Math.pow(10, PRECISION))).div(BigNumber.from(10).pow(PRECISION));
export const divToNumber = (a, x) => x.isZero()
    ? 0
    : a
        .mul(Math.pow(10, PRECISION))
        .div(x)
        .toNumber() /
        Math.pow(10, PRECISION);
