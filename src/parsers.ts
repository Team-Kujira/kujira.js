import { BigNumber } from "@ethersproject/bignumber";
import { Coin } from "cosmjs-types/cosmos/base/v1beta1/coin";
import { Event } from "cosmjs-types/tendermint/abci/types";

export function parseCoins(input: string): Coin[] {
  return input
    .replace(/\s/g, "")
    .split(",")
    .filter(Boolean)
    .reduce((agg, part) => {
      // Denom regex from Stargate (https://github.com/cosmos/cosmos-sdk/blob/v0.42.7/types/coin.go#L599-L601)
      const match = part.match(/^([0-9]+)([a-zA-Z][a-zA-Z0-9/]{2,127})$/);
      if (!match) return agg;

      return [
        {
          amount: BigNumber.from(match[1]).toString(),
          denom: match[2],
        },
        ...agg,
      ];
    }, [] as Coin[]);
}

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
  const receive = events
    .flatMap((e) => (e.type === "coin_received" ? e.attributes : []))
    .reduce((agg, v, idx, all) => {
      const key = Buffer.from(v.key).toString();
      const value = Buffer.from(v.value).toString();
      if (key === "receiver" && value === address) {
        const amount = Buffer.from(all[idx + 1].value).toString();
        const parsed = parseCoins(amount);
        return addCoins(agg, parsed);
      } else {
        return agg;
      }
    }, [] as Coin[]);

  const send = events
    .flatMap((e) => (e.type === "coin_spent" ? e.attributes : []))
    .reduce((agg, v, idx, all) => {
      const key = Buffer.from(v.key).toString();
      const value = Buffer.from(v.value).toString();
      if (key === "spender" && value === address) {
        const amount = Buffer.from(all[idx + 1].value).toString();
        const parsed = parseCoins(amount);
        return addCoins(agg, parsed);
      } else {
        return agg;
      }
    }, [] as Coin[]);

  return { send, receive };
};
