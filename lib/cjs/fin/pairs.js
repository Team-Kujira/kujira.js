"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PAIRS = exports.compile = exports.STAKING = void 0;
const denom_1 = require("../denom");
const network_1 = require("../network");
const usk = __importStar(require("../usk"));
const contracts_json_1 = __importDefault(require("../resources/contracts.json"));
exports.STAKING = {
    [network_1.TESTNET]: "kujira1e7hxytqdg6v05f8ev3wrfcm5ecu3qyhl7y4ga73z76yuufnlk2rqd4uwf4",
    [network_1.MAINNET]: "kujira1p2j2cq4g3jjrz53ceku725t4uectn89hw35sehf8fpq9qfzvufeqymyem8",
};
const castConfig = (json) => ({
    denoms: [
        denom_1.Denom.from(typeof json.denoms[0] === "string"
            ? json.denoms[0]
            : json.denoms[0].native),
        denom_1.Denom.from(typeof json.denoms[1] === "string"
            ? json.denoms[1]
            : json.denoms[1].native),
    ],
    precision: { decimal_places: json.price_precision.decimal_places },
    decimalDelta: json.decimal_delta || 0,
    multiswap: !json.decimal_delta || json.decimal_delta === 0,
});
const compile = (network) => (a, v) => {
    var _a, _b, _c;
    if ([
        "kujira18638dsuf7p3a2e23seqz8zegqrcpsdr5nw6j2a50qg6r3q8vn3qqrg9lzp",
        "kujira143thenn7ugsevf0tl3hz4ved53t6w5r7uq0qcwr8kxgg343jxg0svcrfjf",
    ].includes(v.address))
        return a;
    const config = castConfig(v.config);
    const margin = contracts_json_1.default[network].uskMarginSwap.find((m) => m.config.fin_address === v.address);
    return Object.assign(Object.assign({}, a), { [v.address]: Object.assign(Object.assign({ address: v.address }, config), { pool: (_a = contracts_json_1.default[network].bow
                // Reverse as the laterly created contracts are more likely to be correct
                .reverse()
                .find((b) => b.config.fin_contract === v.address &&
                v.config.price_precision.decimal_places ===
                    b.config.price_precision.decimal_places &&
                ![
                    "kujira188p624ykuepun8h8kjmcfs553mz2jgeanetyqv7l6xltdld497vqespn6c",
                    "kujira136rwqvwy3flttm9wfnc5xgnlr6mu5k8e2elgzs2hdhuwf50w3l2qp807cx",
                    "kujira1xgjefq7fs4yj29t9gk0t9esgw52s68j83yeac3ru2mefdp529qsqca7hhv",
                ].includes(b.address))) === null || _a === void 0 ? void 0 : _a.address, calc: ((_b = contracts_json_1.default[network].calc[0]) === null || _b === void 0 ? void 0 : _b.pairs.find((x) => x.base_denom === config.denoms[0].reference &&
                x.quote_denom === config.denoms[1].reference))
                ? (_c = contracts_json_1.default[network].calc[0]) === null || _c === void 0 ? void 0 : _c.address
                : undefined, margin: margin
                ? Object.assign({ address: margin.address }, usk.castConfig(margin.config.market)) : undefined }) });
};
exports.compile = compile;
exports.PAIRS = {
    [network_1.MAINNET]: contracts_json_1.default["kaiyo-1"].fin.reduce((0, exports.compile)("kaiyo-1"), {}),
    [network_1.TESTNET]: contracts_json_1.default["harpoon-4"].fin.reduce((0, exports.compile)("harpoon-4"), {}),
    [network_1.LOCALNET]: {},
};
