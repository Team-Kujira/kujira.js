import { Tendermint34Client } from "@cosmjs/tendermint-rpc";
import fs from "fs";
import { kujiraQueryClient } from "./lib/cjs/index.js";
import tokens from "./src/resources/tokens.json";
import chains from "./src/resources/chains.json";

const go = async (rpc) => {
  const tm = await Tendermint34Client.connect(rpc);
  const client = kujiraQueryClient({ client: tm });
  return client.bank
    .totalSupply()
    .then(({ supply }) => {
      return (
        supply &&
        supply.map((s) => {
          return (
            s.denom &&
            !tokens[s.denom] &&
            s.denom.startsWith("ibc") &&
            client.ibc.transfer
              .denomTrace(s.denom.replace("ibc/", ""))
              .then(async ({ denomTrace }) => {
                console.log(denomTrace);
                if (denomTrace && denomTrace.baseDenom) {
                  tokens[s.denom] = {
                    ...denomTrace,
                    base_denom: denomTrace.baseDenom,
                  };
                  fs.writeFileSync(
                    "./src/resources/tokens.json",
                    JSON.stringify(tokens, null, 2)
                  );
                }
                return;
              })
              .catch(() => {})
          );
        })
      );
    })
    .catch(console.error);
};

await go("https://rpc.harpoon.kujira.setten.io");
await go("https://rpc.kaiyo.kujira.setten.io");

await Promise.all(
  chains.mainnet.map(({ chain_name }) => {
    return go(
      `https://kujira-cosmos.gigalixirapp.com/api/chains/${chain_name}/rpc`
    ).catch(() => {});
  })
).catch(() => {});
