import { BigNumber } from "@ethersproject/bignumber";
import { Denom } from "./denom";
import { LOCALNET, MAINNET, TESTNET } from "./network";
import contracts from "./resources/contracts.json";
export const castStatus = (res) => ({
    debtAmount: BigNumber.from(res.debt_amount),
});
export const castConfig = (json) => ({
    owner: json.owner,
    stableDenom: Denom.from(json.stable_denom),
    stableDenomAdmin: json.stable_denom_admin,
    collateralDenom: Denom.from(json.collateral_denom),
    oracleDenom: json.oracle_denom,
    maxRatio: parseFloat(json.max_ratio),
    mintFee: parseFloat(json.mint_fee),
    interestRate: parseFloat(json.interest_rate),
    orcaAddress: json.orca_address,
    maxDebt: BigNumber.from(json.max_debt),
    liquidationThreshold: BigNumber.from(json.liquidation_threshold),
    liquidationRatio: parseFloat(json.liquidation_ratio),
});
const compile = (a, v) => (Object.assign(Object.assign({}, a), { [v.address]: Object.assign({ address: v.address }, castConfig(v.config)) }));
export const MARKETS = {
    [MAINNET]: contracts["kaiyo-1"].uskMarket.reduce(compile, {}),
    [TESTNET]: contracts["harpoon-4"].uskMarket.reduce(compile, {}),
    [LOCALNET]: {},
};
export const castPosition = (p) => ({
    owner: p.owner,
    deposit_amount: BigNumber.from(p.deposit_amount),
    mint_amount: BigNumber.from(p.mint_amount),
    interest_amount: BigNumber.from(p.interest_amount),
    liquidation_price: p.liquidation_price
        ? parseFloat(p.liquidation_price)
        : null,
});
export const defaultPosition = (owner) => ({
    owner: owner || "",
    deposit_amount: BigNumber.from(0),
    mint_amount: BigNumber.from(0),
    interest_amount: BigNumber.from(0),
    liquidation_price: null,
});
export const fetchPosition = (queryClient, address, account) => queryClient.wasm
    .queryContractSmart(address, {
    position: { address: account.address },
})
    .then(castPosition);
