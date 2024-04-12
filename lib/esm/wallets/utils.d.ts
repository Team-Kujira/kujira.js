import { OfflineDirectSigner, OfflineSigner } from "@cosmjs/proto-signing";
import * as k from "@keplr-wallet/types";
export declare const castSigner: (old: k.OfflineAminoSigner | k.OfflineDirectSigner) => OfflineSigner;
