import { Denom } from "../denom";
import { LOCALNET, MAINNET, TESTNET } from "../network";
import * as usk from "../usk";
export const FILTERED = [
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
import contracts from "../resources/contracts.json";
export const STAKING = {
    [TESTNET]: "kujira1e7hxytqdg6v05f8ev3wrfcm5ecu3qyhl7y4ga73z76yuufnlk2rqd4uwf4",
    [MAINNET]: "kujira1p2j2cq4g3jjrz53ceku725t4uectn89hw35sehf8fpq9qfzvufeqymyem8",
};
const castConfig = (json) => ({
    denoms: [
        Denom.from(typeof json.denoms[0] === "string"
            ? json.denoms[0]
            : json.denoms[0].native),
        Denom.from(typeof json.denoms[1] === "string"
            ? json.denoms[1]
            : json.denoms[1].native),
    ],
    precision: { decimal_places: json.price_precision.decimal_places },
    decimalDelta: json.decimal_delta || 0,
    multiswap: true,
});
export const compile = (network) => (a, v) => {
    var _a, _b, _c;
    if (FILTERED.includes(v.address))
        return a;
    const config = castConfig(v.config);
    const margin = contracts[network].uskMarginSwap.find((m) => m.config.fin_address === v.address);
    return Object.assign(Object.assign({}, a), { [v.address]: Object.assign(Object.assign({ address: v.address }, config), { pool: (_a = contracts[network].bow
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
                ].includes(b.address))) === null || _a === void 0 ? void 0 : _a.address, calc: ((_b = contracts[network].calc[0]) === null || _b === void 0 ? void 0 : _b.pairs.find((x) => x.base_denom === config.denoms[0].reference &&
                x.quote_denom === config.denoms[1].reference))
                ? (_c = contracts[network].calc[0]) === null || _c === void 0 ? void 0 : _c.address
                : undefined, margin: margin
                ? Object.assign({ address: margin.address }, usk.castConfig(margin.config.market)) : undefined }) });
};
export const PAIRS = {
    [MAINNET]: contracts["kaiyo-1"].fin.reduce(compile("kaiyo-1"), {}),
    [TESTNET]: contracts["harpoon-4"].fin.reduce(compile("harpoon-4"), {}),
    [LOCALNET]: {},
};
