"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.divToNumber = exports.mulDec = exports.fromHumanString = exports.toHuman = void 0;
const PRECISION = 6;
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
const mulDec = (a, x) => a.mul(Math.floor(x * Math.pow(10, PRECISION))).div(bignumber_1.BigNumber.from(10).pow(PRECISION));
exports.mulDec = mulDec;
const divToNumber = (a, x) => x.isZero()
    ? 0
    : a
        .mul(Math.pow(10, PRECISION))
        .div(x)
        .toNumber() /
        Math.pow(10, PRECISION);
exports.divToNumber = divToNumber;
