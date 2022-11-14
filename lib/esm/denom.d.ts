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
    eq: (other: Denom) => boolean;
}
export declare const USK_TESTNET: Denom;
export declare const USK: Denom;
export declare const KUJI: Denom;
export declare const DEMO: Denom;
export declare const ATOM: Denom;
export declare const USDC: Denom;
export declare const USDT: Denom;
export declare const factor: ([base, quote]: [Denom, Denom]) => number;
