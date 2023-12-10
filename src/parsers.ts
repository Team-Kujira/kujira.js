import { parseCoins } from "@cosmjs/stargate";
import { Coin } from "cosmjs-types/cosmos/base/v1beta1/coin";
import { Event } from "cosmjs-types/tendermint/abci/types";

export const addCoins = (a: Coin[], b: Coin[]): Coin[] => a.reduce(addCoin, b);

export const addCoin = (a: Coin[], b: Coin): Coin[] => {
  const x = a.find((z) => z.denom === b.denom);
  return x
    ? a.map((x) =>
        x.denom === b.denom
          ? {
              ...x,
              amount: (parseInt(x.amount) + parseInt(b.amount)).toString(),
            }
          : x
      )
    : [b, ...a];
};
export const transfers = (
  address: string,
  events: Event[]
): { send: Coin[]; receive: Coin[] } => {
  return events.reduce(
    (agg: { send: Coin[]; receive: Coin[] }, e) => {
      if (
        e.type === "coin_spent" &&
        e.attributes.find((a) => a.key === "spender")?.value === address
      ) {
        return {
          receive: agg.receive,
          send: addCoins(
            agg.send,
            parseCoins(
              e.attributes.find((a) => a.key === "amount")?.value || ""
            )
          ),
        };
      }

      if (
        e.type === "coin_received" &&
        e.attributes.find((a) => a.key === "receiver")?.value === address
      ) {
        return {
          send: agg.send,
          receive: addCoins(
            agg.send,
            parseCoins(
              e.attributes.find((a) => a.key === "amount")?.value || ""
            )
          ),
        };
      }

      return agg;
    },
    { send: [], receive: [] }
  );
};
