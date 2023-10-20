import { AccountData, Coin, EncodeObject } from "@cosmjs/proto-signing";
import { DeliverTxResponse } from "@cosmjs/stargate";
import { Keplr } from "./keplr";
import { Leap } from "./leap";
import { LeapSnap } from "./leapSnap";
import { Sonar } from "./sonar";
import { Station } from "./station";
import { Xfi } from "./xfi";
export declare class CW3Wallet {
    contract: string;
    wallet: Sonar | Keplr | Station | Leap | LeapSnap | Xfi;
    account: AccountData;
    constructor(contract: string, wallet: Sonar | Keplr | Station | Leap | LeapSnap | Xfi);
    onChange: (fn: (k: CW3Wallet | null) => void) => void;
    disconnect: () => void;
    signAndBroadcast: (rpc: string, encodeObjects: EncodeObject[], gas: string, memo?: string, title?: string, description?: string, deposit?: Coin) => Promise<DeliverTxResponse>;
}
