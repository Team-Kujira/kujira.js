import { BigNumber } from "@ethersproject/bignumber";
export declare const toHuman: (amount: BigNumber, decimals: number) => number;
export declare const fromHumanString: (amount: string, decimals: number) => BigNumber;
export declare const mulDec: (a: BigNumber, x: number) => BigNumber;
export declare const divToNumber: (a: BigNumber, b: BigNumber) => number;
export declare const bigCompare: (a: BigNumber, b: BigNumber) => 0 | 1 | -1;
