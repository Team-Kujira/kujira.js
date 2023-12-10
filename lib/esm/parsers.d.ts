import { Coin } from "cosmjs-types/cosmos/base/v1beta1/coin";
import { Event } from "cosmjs-types/tendermint/abci/types";
export declare const addCoins: (a: Coin[], b: Coin[]) => Coin[];
export declare const addCoin: (a: Coin[], b: Coin) => Coin[];
export declare const transfers: (address: string, events: Event[]) => {
    send: Coin[];
    receive: Coin[];
};
