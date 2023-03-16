"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bigCompare = exports.divToNumber = exports.mulDec = exports.fromHumanString = exports.toHuman = void 0;
const bignumber_1 = require("@ethersproject/bignumber");
const toHuman = (amount, decimals) => parseFloat((0, bignumber_1.formatFixed)(amount, decimals));
exports.toHuman = toHuman;
const fromHumanString = (amount, decimals) => {
    try {
        return (0, bignumber_1.parseFixed)(amount, decimals);
    }
    catch (error) {
        return bignumber_1.BigNumber.from(0);
    }
};
exports.fromHumanString = fromHumanString;
const mulDec = (a, x) => {
    const dec = (0, bignumber_1.parseFixed)(x.toFixed(18), 18);
    return a.mul(dec).div(bignumber_1.BigNumber.from(10).pow(18));
};
exports.mulDec = mulDec;
const divToNumber = (a, b) => {
    return b.isZero()
        ? 0
        : parseFloat((0, bignumber_1.formatFixed)(a.mul(bignumber_1.BigNumber.from(10).pow(18)).div(b), 18));
};
exports.divToNumber = divToNumber;
const bigCompare = (a, b) => {
    if (a.eq(b))
        return 0;
    if (a.lt(b))
        return -1;
    return 1;
};
exports.bigCompare = bigCompare;
