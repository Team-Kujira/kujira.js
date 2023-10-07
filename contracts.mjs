import { HttpBatchClient, Tendermint34Client } from "@cosmjs/tendermint-rpc";
import { PageRequest } from "cosmjs-types/cosmos/base/query/v1beta1/pagination.js";
import fs from "fs";
import { MAINNET, RPCS, TESTNET, kujiraQueryClient } from "./lib/cjs/index.js";

const IDS = {
  [MAINNET]: {
    fin: [63, 134],
    bow: [
      54, 126,
      // LSD Strategy
      158,
      // Stable Strategy
      161,
    ],
    bowStaking: [88],
    orca: [108, 122],
    uskMarket: [73],
    uskMarginSwap: [87],
    uskMarginLimit: [],
    calc: [157],
    ghostVault: [106, 135, 140],
    ghostMarket: [136],
    ghostMargin: [],
    pilot: [95],
    bowMargin: [],
  },
  [TESTNET]: {
    fin: [31, 2229],
    bow: [1925, 2362],
    bowStaking: [439, 855],
    orca: [994, 1577],
    uskMarket: [66, 136],
    uskMarginSwap: [131, 133],
    uskMarginLimit: [1271, 1272],
    calc: [1273, 1387],
    ghostVault: [2348],
    ghostMarket: [2172],
    ghostMargin: [1950],
    pilot: [1476],
    bowMargin: [2464],
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
                  .listContractsByCodeId(
                    id,
                    PageRequest.fromPartial({ limit: 100000 })
                  )
                  .then((x) =>
                    Promise.all(
                      x.contracts.map(async (address) => ({
                        address,
                        config:
                          protocol === "ghostVault"
                            ? {
                                ...(await client.wasm
                                  .queryContractSmart(address, {
                                    config: {},
                                  })
                                  .catch(() => ({}))),
                                interest:
                                  id === 106
                                    ? await client.wasm
                                        .queryContractRaw(
                                          address,
                                          Uint8Array.from([
                                            115, 116, 97, 116, 101,
                                          ])
                                        )
                                        .then(({ data }) =>
                                          JSON.parse(
                                            Buffer.from(data).toString()
                                          )
                                        )
                                        .then(({ utilization_to_rate }) => ({
                                          utilization_to_rate,
                                        }))
                                    : await client.wasm.queryContractSmart(
                                        address,
                                        { interest_params: {} }
                                      ),
                              }
                            : await client.wasm
                                .queryContractSmart(address, {
                                  config: {},
                                })
                                .catch(() => ({})),
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
