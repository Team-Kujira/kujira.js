import { HttpBatchClient, Tendermint34Client } from "@cosmjs/tendermint-rpc";
import { PageRequest } from "cosmjs-types/cosmos/base/query/v1beta1/pagination.js";
import fs from "fs";
import { MAINNET, RPCS, TESTNET } from "./lib/cjs/network.js";
import { kujiraQueryClient } from "./lib/cjs/queryClient.js";

const IDS = {
  [MAINNET]: {
    fin: [
      // legacy KUJI-USDC.axl
      295,
      // Current
      283,
    ],
    bow: [
      54, 126, 294,
      // LSD Strategy
      158, 167,
      // Stable Strategy
      161, 166,
    ],
    bowStaking: [244],
    orca: [108, 220, 234],
    uskMarket: [73],
    uskMarginSwap: [87],
    uskMarginLimit: [],
    calc: [157],
    ghostVault: [140],
    ghostMarket: [291],
    ghostMargin: [],
    pilot: [296, 301],
    bowMargin: [188, 290],
  },
  [TESTNET]: {
    fin: [31, 2229, 3328],
    bow: [1925, 2362, 3330],
    bowStaking: [439, 855],
    orca: [1952, 2923],
    uskMarket: [66, 136],
    uskMarginSwap: [131, 133],
    uskMarginLimit: [1271, 1272],
    calc: [1273, 1387],
    ghostVault: [2348],
    ghostMarket: [2172],
    ghostMargin: [1950],
    pilot: [3327],
    bowMargin: [2666],
  },
};

const fetchId = (client, protocol) => async (id) => ({
  id,
  contracts: await fetchContracts(client)(id).then(async (res) => {
    return Promise.all(res.map(fetchContractData(client, protocol, id)));
  }),
});

const fetchProtocol =
  (client) =>
  async ([protocol, ids]) => {
    return {
      protocol,
      ids: await Promise.all(ids.map(fetchId(client, protocol))),
    };
  };

const fetchContractData = (client, protocol, id) => async (address) => {
  return {
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
                      Uint8Array.from([115, 116, 97, 116, 101])
                    )
                    .then(({ data }) =>
                      JSON.parse(Buffer.from(data).toString())
                    )
                    .then(({ utilization_to_rate }) => ({
                      utilization_to_rate,
                    }))
                : await client.wasm.queryContractSmart(address, {
                    interest_params: {},
                  }),
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
  };
};

const fetchContracts = (client) => async (id, pageRequest) => {
  const { contracts, pagination } = await client.wasm.listContractsByCodeId(
    id,
    pageRequest
  );
  return pagination.nextKey.length
    ? [
        ...contracts,
        ...(await fetchContracts(client)(
          id,
          PageRequest.fromPartial({ key: pagination.nextKey })
        )),
      ]
    : contracts;
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
        Object.entries(protocols).map(fetchProtocol(client))
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

process.exit();
