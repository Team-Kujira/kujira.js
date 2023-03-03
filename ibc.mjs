import { Tendermint34Client } from "@cosmjs/tendermint-rpc";
import { ClientState } from "cosmjs-types/ibc/lightclients/tendermint/v1/tendermint.js";
import fs from "fs";
import { fetchTokens, kujiraQueryClient } from "./lib/cjs/index.js";
import tokens from "./src/resources/tokens.json" assert { type: "json" };

const runConnections = async (rpc) => {
  const tm = await Tendermint34Client.connect(rpc);
  const client = kujiraQueryClient({ client: tm });
  const channels = await client.ibc.channel
    .allChannels()
    .then((x) => x.channels);

  const connections = await client.ibc.connection.allConnections().then((x) =>
    Promise.all(
      x.connections.map(async (c) => ({
        ...c,
        clientState: await client.ibc.connection
          .clientState(c.id)
          .then((x) =>
            ClientState.decode(x.identifiedClientState.clientState.value)
          ),
      }))
    )
  );

  return { channels, connections };
};

const runTokens = async (rpc) => {
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

// await runTokens("https://test-rpc-kujira.mintthemoon.xyz");
// await runTokens("https://rpc.kaiyo.kujira.setten.io");

const testnet = await runConnections("https://test-rpc-kujira.mintthemoon.xyz");
const mainnet = await runConnections("https://rpc-kujira.mintthemoon.xyz");

fs.writeFileSync(
  "./src/resources/channels.json",
  JSON.stringify(
    { testnet: testnet.channels, mainnet: mainnet.channels },
    null,
    2
  )
);

fs.writeFileSync(
  "./src/resources/connections.json",
  JSON.stringify(
    { testnet: testnet.connections, mainnet: mainnet.connections },
    null,
    2
  )
);

// await runTokens("https://terra-testnet-rpc.polkachu.com");

// await Promise.all(
//   chains.mainnet.map(({ chain_name }) => {
//     return runTokens(`https://rpc.cosmos.directory/${chain_name}`).catch(() => {});
//   })
// ).catch(() => {});
