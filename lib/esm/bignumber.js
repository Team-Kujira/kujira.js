const PRECISION = 6;
import { BigNumber, formatFixed, parseFixed } from "@ethersproject/bignumber";
export const toHuman = (amount, decimals) => parseFloat(formatFixed(amount, decimals));
export const fromHumanString = (amount, decimals) => {
    try {
        return parseFixed(amount, decimals);
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
