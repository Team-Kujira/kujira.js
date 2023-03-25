"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transfers = exports.addCoin = exports.addCoins = exports.parseCoins = void 0;
const bignumber_1 = require("@ethersproject/bignumber");
function parseCoins(input) {
    return input
        .replace(/\s/g, "")
        .split(",")
        .filter(Boolean)
        .reduce((agg, part) => {
        // Denom regex from Stargate (https://github.com/cosmos/cosmos-sdk/blob/v0.42.7/types/coin.go#L599-L601)
        const match = part.match(/^([0-9]+)([a-zA-Z][a-zA-Z0-9/]{2,127})$/);
        if (!match)
            return agg;
        return [
            {
                amount: bignumber_1.BigNumber.from(match[1]).toString(),
                denom: match[2],
            },
            ...agg,
        ];
    }, []);
}
exports.parseCoins = parseCoins;
const addCoins = (a, b) => a.reduce(exports.addCoin, b);
exports.addCoins = addCoins;
const addCoin = (a, b) => {
    const x = a.find((z) => z.denom === b.denom);
    return x
        ? a.map((x) => x.denom === b.denom
            ? Object.assign(Object.assign({}, x), { amount: (parseInt(x.amount) + parseInt(b.amount)).toString() }) : x)
        : [b, ...a];
};
exports.addCoin = addCoin;
const transfers = (address, events) => {
    const receive = events
        .flatMap((e) => (e.type === "coin_received" ? e.attributes : []))
        .reduce((agg, v, idx, all) => {
        const key = Buffer.from(v.key).toString();
        const value = Buffer.from(v.value).toString();
        if (key === "receiver" && value === address) {
            const amount = Buffer.from(all[idx + 1].value).toString();
            const parsed = parseCoins(amount);
            return (0, exports.addCoins)(agg, parsed);
        }
        else {
            return agg;
        }
    }, []);
    const send = events
        .flatMap((e) => (e.type === "coin_spent" ? e.attributes : []))
        .reduce((agg, v, idx, all) => {
        const key = Buffer.from(v.key).toString();
        const value = Buffer.from(v.value).toString();
        if (key === "spender" && value === address) {
            const amount = Buffer.from(all[idx + 1].value).toString();
            const parsed = parseCoins(amount);
            return (0, exports.addCoins)(agg, parsed);
        }
        else {
            return agg;
        }
    }, []);
    return { send, receive };
};
exports.transfers = transfers;
