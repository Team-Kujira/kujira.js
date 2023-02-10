import { BigNumber, formatFixed, parseFixed } from "@ethersproject/bignumber";

export const toHuman = (amount: BigNumber, decimals: number) =>
  parseFloat(formatFixed(amount, decimals));

export const fromHumanString = (amount: string, decimals: number) => {
  try {
    return parseFixed(amount, decimals);
  } catch (error) {
    return BigNumber.from(0);
  }
};

export const mulDec = (a: BigNumber, x: number): BigNumber => {
  const dec = parseFixed(x.toFixed(18), 18);
  return a.mul(dec).div(BigNumber.from(10).pow(18));
};

export const divToNumber = (a: BigNumber, b: BigNumber): number => {
  return b.isZero()
    ? 0
    : parseFloat(formatFixed(a.mul(BigNumber.from(10).pow(18)).div(b), 18));
};
