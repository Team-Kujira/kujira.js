import { Denom } from "../denom";
import { LOCALNET, MAINNET, NETWORK, TESTNET } from "../network";
import * as usk from "../usk";
import { Pair } from "./types";

export const FILTERED = [
  "kujira18638dsuf7p3a2e23seqz8zegqrcpsdr5nw6j2a50qg6r3q8vn3qqrg9lzp",
  "kujira143thenn7ugsevf0tl3hz4ved53t6w5r7uq0qcwr8kxgg343jxg0svcrfjf",
  "kujira12g0jkp5hqlujw57akq2prkq4hq7hsy4qecmv93gdyzelggzpc4dsjtkvh2",
  "kujira1qshjsyprd79w5q494themln57qz35txt2kx7yc6c0u4nmd4cy27qanxdlc",
  "kujira1kc3msrd9gvnfumfcshlkvcdgklf9m9ln7llfqsxqalcfk9xjr5uqdy8us6",
  "kujira13l8gwanf37938wgfv5yktmfzxjwaj4ysn4gl96vj78xcqqxlcrgssfl797",
];

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

export const compile =
  (network: keyof typeof contracts) =>
  (a: Record<string, Pair>, v: { address: string; config: Config }) => {
    if (FILTERED.includes(v.address)) return a;
    const config = castConfig(v.config);
    const margin = contracts[network].uskMarginSwap.find(
      (m) => m.config.fin_address === v.address
    );
    return {
      ...a,
      [v.address]: {
        address: v.address,
        ...config,
        pool: contracts[network].bow
          // Reverse as the laterly created contracts are more likely to be correct
          .reverse()
          .find(
            (b) =>
              b.config.fin_contract === v.address &&
              v.config.price_precision.decimal_places ===
                b.config.price_precision.decimal_places &&
              ![
                "kujira188p624ykuepun8h8kjmcfs553mz2jgeanetyqv7l6xltdld497vqespn6c",
                "kujira136rwqvwy3flttm9wfnc5xgnlr6mu5k8e2elgzs2hdhuwf50w3l2qp807cx",
                "kujira1xgjefq7fs4yj29t9gk0t9esgw52s68j83yeac3ru2mefdp529qsqca7hhv",
              ].includes(b.address)
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
