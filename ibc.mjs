import { Tendermint34Client } from "@cosmjs/tendermint-rpc";
import fs from "fs";
import { fetchTokens, kujiraQueryClient } from "./lib/cjs/index.js";
import chains from "./src/resources/chains.json" assert { type: "json" };
import tokens from "./src/resources/tokens.json" assert { type: "json" };

const go = async (rpc) => {
  const tm = await Tendermint34Client.connect(rpc);
  const client = kujiraQueryClient({ client: tm });
  return fetchTokens(client)
    .then((supply) => {
      return supply.map((s) => {
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
                  path: denomTrace.path,
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
      });
    })
    .catch((err) => {
      console.log(rpc);
      console.error(err);
    });
};

await go("https://rpc.harpoon.kujira.setten.io");
await go("https://rpc.kaiyo.kujira.setten.io");

await Promise.all(
  chains.mainnet.map(({ chain_name }) => {
    return go(`https://rpc.cosmos.directory/${chain_name}`).catch(() => {});
  })
).catch(() => {});
