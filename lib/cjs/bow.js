"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.POOLS = exports.castMargin = exports.castPool = exports.castPosition = exports.EXCLUDED = void 0;
const bignumber_1 = require("@ethersproject/bignumber");
const denom_1 = require("./denom");
const network_1 = require("./network");
const contracts_json_1 = __importDefault(require("./resources/contracts.json"));
exports.EXCLUDED = [
    "kujira188p624ykuepun8h8kjmcfs553mz2jgeanetyqv7l6xltdld497vqespn6c",
    "kujira136rwqvwy3flttm9wfnc5xgnlr6mu5k8e2elgzs2hdhuwf50w3l2qp807cx",
    "kujira1xgjefq7fs4yj29t9gk0t9esgw52s68j83yeac3ru2mefdp529qsqca7hhv",
    "kujira167gut7dskwurax8an630m3yy2cwa2fp3kmcpdzucyy6ppg7njgyqhl7w50",
    "kujira1ywlrdpqymukghjwhfyp2n98r49j56wej36n4l08egkdlwj4fn87ql2l2ey",
    "kujira1dj2s8uvup63fsmpfdfpmu570es4whswp806w0p6usdamtglhwvfqd5jx40",
    "kujira1cdy6aje8zszx5vryttkkm5rn9g2n53ltfds753fsn63m09cmhx0sgp6v6m",
    "kujira1h356yzzk2yw7q5s26dewdgaptw05fxplgmxdxcfqcatjyurckuks6zfay8",
    "kujira19a0wethewg36vny9jremekzlx66lwljp2htrhe255mp6djv652dqsu2l76",
    "kujira1xdjt8r39nvm03fs4d9cwyw2sks5dahs52msza59y4vevdgdwhtlq9e3vvg",
    "kujira1kupjzlp96l4ypt0fdpse8slmkdkkz3g0t5evy033va0gvtw867sq0cm6q0",
    "kujira19vmgdwz0p9wzfmeje6x9cw2rhlsdwysxm86k45l9xxw5t53pxg9qmlqnqp"
];
const castPosition = (res) => ({
    idx: res.idx,
    holder: res.holder,
    lpAmount: bignumber_1.BigNumber.from(res.lp_amount),
    ltv: (0, bignumber_1.parseFixed)(res.ltv, 18),
    debtShares: res.debt_shares.reduce((a, v) => (Object.assign(Object.assign({}, a), { [v.denom]: {
            amount: bignumber_1.BigNumber.from(v.amount),
            denom: denom_1.Denom.from(v.denom),
            ratio: (0, bignumber_1.parseFixed)(v.ratio, 18),
        } })), {}),
});
exports.castPosition = castPosition;
const castPool = (address, res, margin) => ({
    strategy: "amp" in res ? "xyk" : "adapter" in res ? "lsd" : "stable",
    address,
    owner: res.owner,
    denoms: [denom_1.Denom.from(res.denoms[0]), denom_1.Denom.from(res.denoms[1])],
    pricePrecision: res.price_precision.decimal_places,
    decimalDelta: res.decimal_delta,
    finContract: res.fin_contract,
    margin: margin && (0, exports.castMargin)(margin.address, margin.config),
    adapter: res.adapter && castAdapter(res.adapter),
});
exports.castPool = castPool;
const castMargin = (address, res) => ({
    address,
    owner: res.owner,
    bowContract: res.bow_contract,
    denoms: [
        {
            denom: denom_1.Denom.from(res.denoms[0].denom),
            decimals: res.denoms[0].decimals,
            oracle: res.denoms[0].oracle,
        },
        {
            denom: denom_1.Denom.from(res.denoms[1].denom),
            decimals: res.denoms[1].decimals,
            oracle: res.denoms[1].oracle,
        },
    ],
    vaults: [res.vaults[0], res.vaults[1]],
    orcas: [res.orcas[0], res.orcas[1]],
    maxLtv: (0, bignumber_1.parseFixed)(res.max_ltv, 18),
    fullLiquidationThreshold: bignumber_1.BigNumber.from(res.full_liquidation_threshold),
    partialLiquidationTarget: (0, bignumber_1.parseFixed)(res.partial_liquidation_target, 18),
    borrowFee: (0, bignumber_1.parseFixed)(res.borrow_fee, 18),
});
exports.castMargin = castMargin;
const castAdapter = (res) => {
    if ("oracle" in res)
        return undefined;
    if (typeof res.contract === "string")
        return { contract: { address: res.contract } };
    return { contract: { address: res.contract.address } };
};
exports.POOLS = {
    [network_1.MAINNET]: contracts_json_1.default[network_1.MAINNET].bow.reduce((a, v) => exports.EXCLUDED.includes(v.address)
        ? a
        : Object.assign(Object.assign({}, a), { [v.address]: (0, exports.castPool)(v.address, v.config, Object.values(contracts_json_1.default[network_1.MAINNET].bowMargin).find((x) => x.config.bow_contract === v.address)) }), {}),
    [network_1.TESTNET]: contracts_json_1.default[network_1.TESTNET].bow.reduce((a, v) => exports.EXCLUDED.includes(v.address)
        ? a
        : Object.assign(Object.assign({}, a), { [v.address]: (0, exports.castPool)(v.address, v.config, Object.values(contracts_json_1.default[network_1.TESTNET].bowMargin).find((x) => x.config.bow_contract === v.address)) }), {}),
    [network_1.POND]: {},
};
