"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchPositionsLimit = exports.fetchPositionLimit = exports.defaultPositionMarket = exports.fetchPositionMarket = void 0;
const bignumber_1 = require("@ethersproject/bignumber");
const usk_1 = require("../usk");
Object.defineProperty(exports, "defaultPositionMarket", { enumerable: true, get: function () { return usk_1.defaultPosition; } });
Object.defineProperty(exports, "fetchPositionMarket", { enumerable: true, get: function () { return usk_1.fetchPosition; } });
const client_1 = require("./client");
const castPositionLimit = (denoms) => (p) => ({
    owner: p.owner,
    mint_amount: bignumber_1.BigNumber.from(p.mint_amount),
    interest_amount: bignumber_1.BigNumber.from(p.interest_amount),
    liquidation_price: p.liquidation_price
        ? parseFloat(p.liquidation_price)
        : null,
    order: (0, client_1.castOrder)(denoms)(p.order),
});
const fetchPositionLimit = (queryClient, address, idx, denoms) => queryClient.wasm
    .queryContractSmart(address, {
    position: { idx },
})
    .then(castPositionLimit(denoms));
exports.fetchPositionLimit = fetchPositionLimit;
const fetchPositionsLimit = (queryClient, address, account, denoms) => queryClient.wasm
    .queryContractSmart(address, {
    positions: { owner: account.address },
})
    .then((xs) => xs.positions.map(castPositionLimit(denoms)));
exports.fetchPositionsLimit = fetchPositionsLimit;
