import { AccountData, EncodeObject, OfflineSigner } from "@cosmjs/proto-signing";
import { DeliverTxResponse } from "@cosmjs/stargate";
import { ChainInfo } from "@keplr-wallet/types";
export declare function signAndBroadcast({ rpc, signer, messages, sourceAccount, sourceChainData, }: {
    rpc: string;
    signer: OfflineSigner;
    messages: EncodeObject[];
    sourceAccount: AccountData;
    sourceChainData: ChainInfo;
}): Promise<DeliverTxResponse>;
