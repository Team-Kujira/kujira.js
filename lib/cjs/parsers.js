"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transfers = exports.addCoin = exports.addCoins = void 0;
const stargate_1 = require("@cosmjs/stargate");
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
    return events.reduce((agg, e) => {
        var _a, _b, _c, _d;
        if (e.type === "coin_spent" &&
            ((_a = e.attributes.find((a) => a.key === "spender")) === null || _a === void 0 ? void 0 : _a.value) === address) {
            return {
                receive: agg.receive,
                send: (0, exports.addCoins)(agg.send, (0, stargate_1.parseCoins)(((_b = e.attributes.find((a) => a.key === "amount")) === null || _b === void 0 ? void 0 : _b.value) || "")),
            };
        }
        if (e.type === "coin_received" &&
            ((_c = e.attributes.find((a) => a.key === "receiver")) === null || _c === void 0 ? void 0 : _c.value) === address) {
            return {
                send: agg.send,
                receive: (0, exports.addCoins)(agg.send, (0, stargate_1.parseCoins)(((_d = e.attributes.find((a) => a.key === "amount")) === null || _d === void 0 ? void 0 : _d.value) || "")),
            };
        }
        return agg;
    }, { send: [], receive: [] });
};
exports.transfers = transfers;
