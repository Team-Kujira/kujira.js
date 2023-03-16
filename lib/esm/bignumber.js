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
export const mulDec = (a, x) => {
    const dec = parseFixed(x.toFixed(18), 18);
    return a.mul(dec).div(BigNumber.from(10).pow(18));
};
export const divToNumber = (a, b) => {
    return b.isZero()
        ? 0
        : parseFloat(formatFixed(a.mul(BigNumber.from(10).pow(18)).div(b), 18));
};
export const bigCompare = (a, b) => {
    if (a.eq(b))
        return 0;
    if (a.lt(b))
        return -1;
    return 1;
};
