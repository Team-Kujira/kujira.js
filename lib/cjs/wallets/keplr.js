"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Keplr = void 0;
const math_1 = require("@cosmjs/math");
const stargate_1 = require("@cosmjs/stargate");
const amino_1 = require("../amino");
const registry_1 = require("../registry");
const evmos = __importStar(require("./evmos"));
class Keplr {
    constructor(account, config, options) {
        this.account = account;
        this.config = config;
        this.options = options;
        this.onChange = (fn) => {
            window.addEventListener("keplr_keystorechange", () => {
                const keplr = window.keplr;
                if (!keplr)
                    return;
                keplr
                    .getOfflineSignerAuto(this.config.chainId)
                    .then((signer) => signer.getAccounts())
                    .then((as) => {
                    if (as.length) {
                        this.account = as[0];
                        fn(this);
                    }
                });
            });
        };
        this.disconnect = () => { };
        this.signAndBroadcast = (msgs
        // batch?: {
        //   size: number;
        //   cb: (total: number, remaining: number) => void;
        // }
        ) => __awaiter(this, void 0, void 0, function* () {
            if (!window.keplr)
                throw new Error("No Wallet Connected");
            const signer = yield window.keplr.getOfflineSignerAuto(this.config.chainId);
            if (this.config.chainName === "Evmos")
                return evmos.signAndBroadcast({
                    rpc: this.config.rpc,
                    signer,
                    messages: msgs,
                    sourceAccount: this.account,
                    sourceChainData: this.config,
                });
            const gasPrice = new stargate_1.GasPrice(math_1.Decimal.fromUserInput("0.00125", 18), this.options
                ? this.options.feeDenom
                : this.config.feeCurrencies[0].coinDenom);
            const client = yield stargate_1.SigningStargateClient.connectWithSigner(this.config.rpc, signer, {
                registry: registry_1.registry,
                gasPrice,
                aminoTypes: (0, amino_1.aminoTypes)(this.config.bech32Config.bech32PrefixAccAddr),
            });
            // if (batch) {
            //   const chunks = msgs.reduce((agg, item, index) => {
            //     const chunkIndex = Math.floor(index / batch.size);
            //     if (!agg[chunkIndex]) agg[chunkIndex] = [];
            //     agg[chunkIndex].push(item);
            //     return agg;
            //   }, [] as EncodeObject[][]);
            //   let remaining = chunks.length;
            //   batch.cb(chunks.length, remaining);
            //   let res: DeliverTxResponse;
            //   for (const chunk of chunks) {
            //     res = await client.signAndBroadcast(
            //       this.account.address,
            //       chunk,
            //       1.5
            //     );
            //     remaining -= 1;
            //     batch.cb(chunks.length, remaining);
            //   }
            //   // @ts-expect-error this is fine
            //   return res;
            // } else {
            return yield client.signAndBroadcast(this.account.address, msgs, 1.5);
            // }
        });
    }
}
exports.Keplr = Keplr;
Keplr.connect = (config, opts) => {
    const keplr = window.keplr;
    if (!keplr)
        throw new Error("Keplr extension not available");
    const chainInfo = Object.assign(Object.assign({}, config), { 
        // Keplr is bullshti and defaults to the first of these provided as the fee denom
        feeCurrencies: config.feeCurrencies.filter((x) => opts ? x.coinMinimalDenom === opts.feeDenom : true) });
    return keplr
        .experimentalSuggestChain(chainInfo)
        .then(() => keplr.enable(config.chainId))
        .then(() => keplr.getOfflineSignerAuto(config.chainId))
        .then((signer) => signer.getAccounts())
        .then((as) => {
        if (as.length) {
            return new Keplr(as[0], config, opts);
        }
        else {
            throw new Error("No Accounts");
        }
    });
};
