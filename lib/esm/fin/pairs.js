import { Denom } from "../denom";
import { LOCALNET, MAINNET, TESTNET } from "../network";
import * as usk from "../usk";
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
    multiswap: !json.decimal_delta || json.decimal_delta === 0,
});
const compile = (network) => (a, v) => {
    var _a;
    const config = castConfig(v.config);
    const margin = contracts[network].uskMarginSwap.find((m) => m.config.fin_address === v.address);
    return Object.assign(Object.assign({}, a), { [v.address]: Object.assign(Object.assign({ address: v.address }, config), { pool: (_a = contracts[network].bow.find((b) => b.config.fin_contract === v.address)) === null || _a === void 0 ? void 0 : _a.address, calc: contracts[network].calc[0].pairs.find((x) => x.base_denom === config.denoms[0].reference &&
                x.quote_denom === config.denoms[1].reference)
                ? contracts[network].calc[0].address
                : undefined, margin: margin
                ? Object.assign({ address: margin.address }, usk.castConfig(margin.config.market)) : undefined }) });
};
export const PAIRS = {
    [MAINNET]: contracts["kaiyo-1"].fin.reduce(compile("kaiyo-1"), {}),
    [TESTNET]: contracts["harpoon-4"].fin.reduce(compile("harpoon-4"), {}),
    [LOCALNET]: {},
};
