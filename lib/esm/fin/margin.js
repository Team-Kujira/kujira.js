import { BigNumber } from "@ethersproject/bignumber";
import { defaultPosition as defaultPositionMarket, fetchPosition as fetchPositionMarket, } from "../usk";
import { castOrder } from "./client";
export { fetchPositionMarket, defaultPositionMarket };
const castPositionLimit = (denoms) => (p) => ({
    owner: p.owner,
    mint_amount: BigNumber.from(p.mint_amount),
    interest_amount: BigNumber.from(p.interest_amount),
    liquidation_price: p.liquidation_price
        ? parseFloat(p.liquidation_price)
        : null,
    order: castOrder(denoms)(p.order),
});
export const fetchPositionLimit = (queryClient, address, idx, denoms) => queryClient.wasm
    .queryContractSmart(address, {
    position: { idx },
})
    .then(castPositionLimit(denoms));
export const fetchPositionsLimit = (queryClient, address, account, denoms) => queryClient.wasm
    .queryContractSmart(address, {
    positions: { owner: account.address },
})
    .then((xs) => xs.positions.map(castPositionLimit(denoms)));
