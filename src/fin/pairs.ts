import { Denom } from "../denom";
import { LOCALNET, MAINNET, NETWORK, TESTNET } from "../network";
import * as usk from "../usk";
import { Pair } from "./types";

import contracts from "../resources/contracts.json";
export const STAKING = {
  [TESTNET]:
    "kujira1e7hxytqdg6v05f8ev3wrfcm5ecu3qyhl7y4ga73z76yuufnlk2rqd4uwf4",
  [MAINNET]:
    "kujira1p2j2cq4g3jjrz53ceku725t4uectn89hw35sehf8fpq9qfzvufeqymyem8",
};

type Config = {
  owner: string;
  denoms:
    | string[]
    | {
        native: string;
      }[];
  price_precision: {
    decimal_places: number;
  };
  is_bootstrapping: boolean;
  decimal_delta?: number;
};

const castConfig = (json: Config): Omit<Pair, "address" | "pool" | "calc"> => ({
  denoms: [
    Denom.from(
      typeof json.denoms[0] === "string"
        ? json.denoms[0]
        : json.denoms[0].native
    ),
    Denom.from(
      typeof json.denoms[1] === "string"
        ? json.denoms[1]
        : json.denoms[1].native
    ),
  ],
  precision: { decimal_places: json.price_precision.decimal_places },
  decimalDelta: json.decimal_delta || 0,
  multiswap: !json.decimal_delta || json.decimal_delta === 0,
});

const compile =
  (network: keyof typeof contracts) =>
  (a: Record<string, Pair>, v: { address: string; config: Config }) => {
    const config = castConfig(v.config);
    const margin = contracts[network].uskMarginSwap.find(
      (m) => m.config.fin_address === v.address
    );
    return {
      ...a,
      [v.address]: {
        address: v.address,
        ...config,
        pool: contracts[network].bow.find(
          (b) =>
            b.config.fin_contract === v.address &&
            v.config.price_precision.decimal_places ===
              b.config.price_precision.decimal_places
        )?.address,
        calc: contracts[network].calc[0]?.pairs.find(
          (x) =>
            x.base_denom === config.denoms[0].reference &&
            x.quote_denom === config.denoms[1].reference
        )
          ? contracts[network].calc[0]?.address
          : undefined,
        margin: margin
          ? { address: margin.address, ...usk.castConfig(margin.config.market) }
          : undefined,
      },
    };
  };

export const PAIRS: Record<NETWORK, Record<string, Pair>> = {
  [MAINNET]: contracts["kaiyo-1"].fin.reduce(compile("kaiyo-1"), {}),
  [TESTNET]: contracts["harpoon-4"].fin.reduce(compile("harpoon-4"), {}),
  [LOCALNET]: {},
};
