const PRECISION = 6;
import { BigNumber, parseFixed } from "@ethersproject/bignumber";

export const toHuman = (amount: BigNumber, decimals: number) =>
  amount
    .mul(10 ** PRECISION)
    .div(BigNumber.from(10).pow(decimals))
    .toNumber() /
  10 ** PRECISION;

export const fromHumanString = (amount: string, decimals: number) => {
  try {
    return parseFixed(amount, decimals);
  } catch (error) {
    return BigNumber.from(0);
  }
};

export const mulDec = (a: BigNumber, x: number): BigNumber =>
  a.mul(Math.floor(x * 10 ** PRECISION)).div(BigNumber.from(10).pow(PRECISION));

export const divToNumber = (a: BigNumber, x: BigNumber): number =>
  x.isZero()
    ? 0
    : a
        .mul(10 ** PRECISION)
        .div(x)
        .toNumber() /
      10 ** PRECISION;
