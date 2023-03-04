import { Chain, MarketType, Protocol } from "./types";
// import * as Acala from "@acala-network/contracts/utils/AcalaAddress";
// import * as Karura from "@acala-network/contracts/utils/KaruraAddress";
import { BigNumber } from "@ethersproject/bignumber";
import { Denom, USK } from "../denom";
import { LOCALNET, MAINNET, TESTNET } from "../network";
import contracts from "../resources/contracts.json";
export * from "./types";
export const SOON = [
    {
        label: "NBTC",
        chain: Chain.Kujira,
        protocol: Protocol.USK,
        collateralDenom: Denom.from("ibc/784AEA7C1DC3C62F9A04EB8DC3A3D1DCB7B03BA8CB2476C5825FA0C155D3018E"),
        bidDenom: USK,
        repayDenom: USK,
    },
    {
        label: "ATOM Short",
        chain: Chain.Kujira,
        protocol: Protocol.PERP,
        collateralDenom: USK,
        bidDenom: Denom.from("ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2"),
        repayDenom: Denom.from("ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2"),
    },
    {
        label: "NBTC Short",
        chain: Chain.Kujira,
        protocol: Protocol.PERP,
        collateralDenom: USK,
        bidDenom: Denom.from("ibc/784AEA7C1DC3C62F9A04EB8DC3A3D1DCB7B03BA8CB2476C5825FA0C155D3018E"),
        repayDenom: Denom.from("ibc/784AEA7C1DC3C62F9A04EB8DC3A3D1DCB7B03BA8CB2476C5825FA0C155D3018E"),
    },
];
const insertMarket = (a, v) => {
    const collateralDenom = Denom.from(v.config.collateral_denom);
    return Object.assign(Object.assign({}, a), { [v.address]: {
            label: collateralDenom.symbol,
            chain: Chain.Kujira,
            protocol: Protocol.USK,
            collateralDenom,
            bidDenom: Denom.from(v.config.bid_denom),
            repayDenom: Denom.from(v.config.bid_denom),
            type: MarketType.USK,
            address: v.address,
            botFirst: false,
            activators: v.config.bid_denom === USK.reference
                ? ["kujira16a03hk5ev6963a4yj3kcrvmh4hej3w3j70kv2n"]
                : [],
            bidThreshold: BigNumber.from(v.config.bid_threshold),
            maxSlot: v.config.max_slot,
            premiumRatePerSlot: parseFloat(v.config.premium_rate_per_slot),
            waitingPeriod: v.config.waiting_period,
            markets: v.config.markets,
        } });
};
export const MARKETS = {
    [MAINNET]: Object.values(contracts[MAINNET].orca).reduce(insertMarket, {}),
    [TESTNET]: Object.values(contracts[TESTNET].orca).reduce(insertMarket, {}),
    [LOCALNET]: {},
};
export const getMarkets = (network) => {
    const soon = network === MAINNET ? SOON : [];
    const markets = Object.values(MARKETS[network || MAINNET]);
    return [...markets, ...soon]
        .sort((a, b) => a.collateralDenom.compare(b.collateralDenom))
        .sort((a) => ("address" in a ? -1 : 1));
};
