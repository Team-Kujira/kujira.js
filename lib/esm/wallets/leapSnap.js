var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Decimal } from "@cosmjs/math";
import { GasPrice, SigningStargateClient, } from "@cosmjs/stargate";
import { CosmjsOfflineSigner, connectSnap, getKey, suggestChain, } from "@leapwallet/cosmos-snap-provider";
import { aminoTypes } from "../amino";
import { accountParser, registry } from "../registry";
export class LeapSnap {
    constructor(account, config, options) {
        this.account = account;
        this.config = config;
        this.options = options;
        this.onChange = (fn) => { };
        this.disconnect = () => { };
        this.signAndBroadcast = (rpc, encodeObjects) => __awaiter(this, void 0, void 0, function* () {
            const signer = new CosmjsOfflineSigner(this.config.chainId);
            const gasPrice = new GasPrice(Decimal.fromUserInput("0.034", 18), this.options
                ? this.options.feeDenom
                : this.config.feeCurrencies[0].coinDenom);
            const client = yield SigningStargateClient.connectWithSigner(rpc, signer, {
                registry,
                gasPrice,
                aminoTypes: aminoTypes(this.config.bech32Config.bech32PrefixAccAddr),
                accountParser,
            });
            return yield client.signAndBroadcast(this.account.address, encodeObjects, 1.5);
        });
    }
    static connect(config, opts) {
        return __awaiter(this, void 0, void 0, function* () {
            return connectSnap()
                .then(() => getKey(config.chainId))
                .then((account) => new LeapSnap(account, config, opts))
                .catch((error) => {
                if (error.message === "Invalid chainId") {
                    return suggestChain(config, {}).then(() => LeapSnap.connect(config, opts));
                }
                throw error;
            });
        });
    }
}
