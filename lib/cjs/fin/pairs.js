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
exports.PAIRS = exports.compile = exports.STAKING = exports.NOTICES = exports.FILTERED = void 0;
const denom_1 = require("../denom");
const network_1 = require("../network");
const usk = __importStar(require("../usk"));
exports.FILTERED = [
    "kujira18638dsuf7p3a2e23seqz8zegqrcpsdr5nw6j2a50qg6r3q8vn3qqrg9lzp",
    "kujira143thenn7ugsevf0tl3hz4ved53t6w5r7uq0qcwr8kxgg343jxg0svcrfjf",
    "kujira12g0jkp5hqlujw57akq2prkq4hq7hsy4qecmv93gdyzelggzpc4dsjtkvh2",
    "kujira1qshjsyprd79w5q494themln57qz35txt2kx7yc6c0u4nmd4cy27qanxdlc",
    "kujira1kc3msrd9gvnfumfcshlkvcdgklf9m9ln7llfqsxqalcfk9xjr5uqdy8us6",
    "kujira13l8gwanf37938wgfv5yktmfzxjwaj4ysn4gl96vj78xcqqxlcrgssfl797",
    "kujira1vt9lmzw5wc9gss07ty9cf8ytpy7se77u7xytylv4xvklsfggmxgquklr7p",
    "kujira1467jk0ljtesmtcut5tec9j4a6rnu59vd38ea5n0q2y6k85qk803qqqhsg8",
    "kujira1trxh7pu70dmzpqyqs4yltx2h5202k9e9fpssee0tdq4x2jr9praqg7c96e",
];
exports.NOTICES = {
    kujira1v8lkqws3gd6npr0rdk9ch54amh9guas86r4u62jq27hee88lryfsxwrvlk: "The FURY token from JUNO will be replaced by the native staking token from the new FURY blockchain after launch. A snapshot of token holders was taken at block height 9200000 on Juno",
    kujira1cduudfszcm9slm8qxlaqvnpzg2u0hkus94fe3pwt9x446dtw6eeql8ualz: "This SHD token from Shade Protocol was replaced with a new version. Tokens can be migrated on [Shade Protocol's app](https://app.shadeprotocol.io/migrate). Trade the new token [here](https://fin.kujira.network/trade/kujira1vdv74x0w4mq2v57r4mydps89jw4wsrqtrxez3tylzqwmy972a9fssy5e3y).",
    kujira1kmw6fk5p7an27u8f3er08xrwvzlehczymgshkqxzfrxyrfleu2eqxykaln: "The RAC token from the Juno network has been replaced with a native token on Migaloo. See [their medium post](https://medium.com/@racoon-supply/rac-is-now-an-ibc-asset-1dccad0df7bb) for instructions on how to migrate",
};
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
    multiswap: true,
});
const compile = (network) => (a, v) => {
    var _a, _b, _c;
    if (exports.FILTERED.includes(v.address))
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
                    "kujira167gut7dskwurax8an630m3yy2cwa2fp3kmcpdzucyy6ppg7njgyqhl7w50",
                    "kujira1ywlrdpqymukghjwhfyp2n98r49j56wej36n4l08egkdlwj4fn87ql2l2ey",
                    "kujira1dj2s8uvup63fsmpfdfpmu570es4whswp806w0p6usdamtglhwvfqd5jx40",
                    "kujira1cdy6aje8zszx5vryttkkm5rn9g2n53ltfds753fsn63m09cmhx0sgp6v6m",
                ].includes(b.address))) === null || _a === void 0 ? void 0 : _a.address, calc: ((_b = contracts_json_1.default[network].calc[0]) === null || _b === void 0 ? void 0 : _b.pairs.find((x) => x.denoms[0] === config.denoms[0].reference &&
                x.denoms[1] === config.denoms[1].reference))
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
