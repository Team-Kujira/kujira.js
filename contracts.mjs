import { HttpBatchClient, Tendermint34Client } from "@cosmjs/tendermint-rpc";
import fs from "fs";
import { MAINNET, RPCS, TESTNET, kujiraQueryClient } from "./lib/cjs/index.js";

const IDS = {
  [MAINNET]: {
    fin: [63, 56, 92, 94],
    bow: [36, 46, 54],
    bowStaking: [61, 88],
    orca: [59],
    uskMarket: [73],
    uskMarginSwap: [72, 74, 87],
    uskMarginLimit: [],
    calc: [99],
    ghostVault: [],
    ghostMarket: [],
    pilot: [95],
  },
  [TESTNET]: {
    fin: [6, 7, 30, 31, 88, 129, 860, 1367, 1397, 1398],
    bow: [308, 468, 644, 858],
    bowStaking: [439, 855],
    orca: [994, 1577],
    uskMarket: [66, 136],
    uskMarginSwap: [131, 133],
    uskMarginLimit: [1271, 1272],
    calc: [1273, 1387],
    ghostVault: [1598],
    ghostMarket: [1593, 1594, 1616],
    pilot: [1476],
  },
};

const res = await Promise.all(
  Object.entries(IDS).map(async ([chain, protocols]) => {
    const rpc = RPCS[chain][0];
    const tm = await Tendermint34Client.create(
      new HttpBatchClient(rpc, {
        dispatchInterval: 100,
        batchSizeLimit: 200,
      })
    );
    const client = kujiraQueryClient({ client: tm });
    return {
      chain,
      protocols: await Promise.all(
        Object.entries(protocols).map(async ([protocol, ids]) => {
          return {
            protocol,
            ids: await Promise.all(
              ids.map(async (id) => ({
                id,
                contracts: await client.wasm
                  .listContractsByCodeId(id)
                  .then((x) =>
                    Promise.all(
                      x.contracts.map(async (address) => ({
                        address,
                        config: await client.wasm
                          .queryContractSmart(address, {
                            config: {},
                          })
                          .catch(() => null),
                        pairs:
                          protocol === "calc" &&
                          (await client.wasm
                            .queryContractSmart(address, {
                              get_pairs: {},
                            })
                            .then(({ pairs }) => pairs)),
                        markets:
                          protocol === "ghostVault" &&
                          (await client.wasm
                            .queryContractSmart(address, {
                              markets: {},
                            })
                            .then(({ markets }) => markets)
                            .catch((err) => {
                              console.log(err);
                              return null;
                            })),
                      }))
                    )
                  ),
              }))
            ),
          };
        })
      ),
    };
  })
);

const flattened = res.reduce(
  (a, m) => ({
    ...a,
    [m.chain]: m.protocols.reduce(
      (b, n) => ({
        ...b,
        [n.protocol]: n.ids.flatMap((id) =>
          id.contracts.map((contract) => ({
            id: id.id,
            ...contract,
          }))
        ),
      }),
      {}
    ),
  }),
  {}
);

fs.writeFileSync(
  "./src/resources/contracts.json",
  JSON.stringify(flattened, null, 2)
);
