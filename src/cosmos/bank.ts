import {
  Coin,
  createProtobufRpcClient,
  QueryClient,
  setupBankExtension,
} from "@cosmjs/stargate";
import { Metadata } from "cosmjs-types/cosmos/bank/v1beta1/bank";
import {
  QueryClientImpl,
  QueryTotalSupplyResponse,
} from "cosmjs-types/cosmos/bank/v1beta1/query";
import "text-encoding";

export type BankExtensionExtended = {
  readonly bank: {
    readonly balance: (address: string, denom: string) => Promise<Coin>;
    readonly allBalances: (address: string) => Promise<Coin[]>;
    readonly spendableBalances: (address: string) => Promise<Coin[]>;
    readonly totalSupply: (
      paginationKey?: Uint8Array
    ) => Promise<QueryTotalSupplyResponse>;
    readonly supplyOf: (denom: string) => Promise<Coin>;
    readonly denomMetadata: (denom: string) => Promise<Metadata>;
    readonly denomsMetadata: () => Promise<Metadata[]>;
  };
};

export function setupBankExtensionExtended(
  base: QueryClient
): BankExtensionExtended {
  const rpc = createProtobufRpcClient(base);
  // Use this service to get easy typed access to query methods
  // This cannot be used for proof verification
  const queryService = new QueryClientImpl(rpc);

  return {
    bank: {
      ...setupBankExtension(base).bank,
      spendableBalances: async (address: string) => {
        const { balances } = await queryService.SpendableBalances({
          address: address,
        });
        return balances;
      },
    },
  };
}
