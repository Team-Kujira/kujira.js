export declare class Denom {
    reference: string;
    underlying?: Denom[] | undefined;
    symbol: string;
    decimals: number;
    trace?: {
        path: string;
        base_denom: string;
    };
    ics20?: {
        contract: string;
        router: string;
        channel: string;
    };
    constructor(reference: string, underlying?: Denom[] | undefined);
    static from(string: string): Denom;
    static from_path(port: string, channel: string, denom: string): Denom;
    eq: (other: Denom) => boolean;
    compare: (other: Denom) => number;
    normalizedReference: () => string;
}
export declare const USK_TESTNET: Denom;
export declare const USK: Denom;
export declare const KUJI: Denom;
export declare const DEMO: Denom;
export declare const ATOM: Denom;
export declare const axlUSDC: Denom;
export declare const nobleUSDC: Denom;
export declare const axlUSDT: Denom;
export declare const axlwETH: Denom;
export declare const axlwMATIC: Denom;
export declare const axlwBNB: Denom;
export declare const axlwAVAX: Denom;
export declare const axlwGLMR: Denom;
export declare const axlwFTM: Denom;
export declare const factor: ([base, quote]: [Denom, Denom]) => number;
